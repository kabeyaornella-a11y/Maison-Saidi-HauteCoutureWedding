import { useCallback, useRef, useState } from 'react';

type RecorderState = 'idle' | 'recording' | 'paused' | 'stopped' | 'error';

export function useMediaRecorder(maxDurationSeconds: number) {
  const [state, setState] = useState<RecorderState>('idle');
  const [seconds, setSeconds] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const stopStream = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  const start = useCallback(async () => {
    setError(null);
    setAudioBlob(null);
    setAudioUrl(null);
    setSeconds(0);
    chunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        stopStream();
      };

      recorder.start();
      setState('recording');

      timerRef.current = window.setInterval(() => {
        setSeconds((value) => {
          const next = value + 1;
          if (next >= maxDurationSeconds) {
            recorder.stop();
            clearTimer();
            setState('stopped');
          }
          return next;
        });
      }, 1000);
    } catch {
      setError('Micro inaccessible. Vérifie l’autorisation dans les réglages du navigateur.');
      setState('error');
    }
  }, [maxDurationSeconds]);

  const stop = useCallback(() => {
    recorderRef.current?.stop();
    clearTimer();
    setState('stopped');
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    stopStream();
    setState('idle');
    setSeconds(0);
    setAudioBlob(null);
    setAudioUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return null;
    });
  }, []);

  return { state, seconds, audioBlob, audioUrl, error, start, stop, reset };
}
