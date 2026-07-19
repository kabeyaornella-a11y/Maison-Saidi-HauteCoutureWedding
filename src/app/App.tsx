import { IntroMaison } from '../components/invitation/IntroMaison/IntroMaison';
import { HeroCouple } from '../components/invitation/HeroCouple/HeroCouple';
import { EditorialBanner } from '../components/invitation/EditorialBanner/EditorialBanner';
import { HandsSection } from '../components/invitation/HandsSection/HandsSection';
import { CountdownSection } from '../components/invitation/CountdownSection/CountdownSection';
import { BibleVerse } from '../components/invitation/BibleVerse/BibleVerse';
import { StorySection } from '../components/invitation/StorySection/StorySection';
import { CelebrationsIntro } from '../components/invitation/CelebrationsIntro/CelebrationsIntro';
import { VenueSection } from '../components/invitation/VenueSection/VenueSection';
import { CivilVenueIcon, ReceptionVenueIcon } from '../components/invitation/VenueSection/VenueIcons';
import { ProgramSection } from '../components/invitation/ProgramSection/ProgramSection';
import { DressCodeSection } from '../components/invitation/DressCodeSection/DressCodeSection';
import { GiftsSection } from '../components/invitation/GiftsSection/GiftsSection';
import { MemoriesSection } from '../components/invitation/MemoriesSection/MemoriesSection';
import { PlaylistSection } from '../components/invitation/PlaylistSection/PlaylistSection';
import { LiveAlbumSection } from '../components/invitation/LiveAlbumSection/LiveAlbumSection';
import { VoiceBookSection } from '../components/invitation/VoiceBookSection/VoiceBookSection';
import { RsvpSection } from '../components/invitation/RsvpSection/RsvpSection';
import { SeatingPlanSection } from '../components/invitation/SeatingPlanSection/SeatingPlanSection';
import { FinalScene } from '../components/invitation/FinalScene/FinalScene';
import { useClient } from '../context/ClientContext';

// Passe à true pour réafficher tout le reste du parcours (Notre histoire, lieux, RSVP...).
const SHOW_SECTIONS_AFTER_HERO = false;

export function App() {
  const { venuesConfig, invitationConfig } = useClient();
  const hasSecondVerse = invitationConfig.verses.length > 1;

  return (
    <main>
      <IntroMaison />
      <HeroCouple />
      {SHOW_SECTIONS_AFTER_HERO && (
        <>
          <EditorialBanner />
          <HandsSection />
          <CountdownSection />
          <BibleVerse verseIndex={0} />
          <StorySection />
          <CelebrationsIntro />
          <VenueSection id="ceremonie-civile" venue={venuesConfig.civil} icon={<CivilVenueIcon />} tone="ivory" />
          <VenueSection id="benediction-reception" venue={venuesConfig.blessing} icon={<ReceptionVenueIcon />} tone="navy" />
          <ProgramSection />
          <DressCodeSection />
          <GiftsSection />
          <MemoriesSection />
          <PlaylistSection />
          <LiveAlbumSection />
          <VoiceBookSection />
          <RsvpSection />
          {hasSecondVerse && <BibleVerse verseIndex={1} />}
          <SeatingPlanSection />
          <FinalScene />
        </>
      )}
    </main>
  );
}
