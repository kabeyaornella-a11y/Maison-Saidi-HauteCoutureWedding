import { useEffect,useState } from 'react';
export type Countdown={days:number;hours:number;minutes:number;seconds:number;complete:boolean};
const calc=(target:string):Countdown=>{const diff=Math.max(0,new Date(target).getTime()-Date.now());return{days:Math.floor(diff/86400000),hours:Math.floor(diff/3600000)%24,minutes:Math.floor(diff/60000)%60,seconds:Math.floor(diff/1000)%60,complete:diff===0}};
export function useCountdown(target:string){const [value,setValue]=useState(()=>calc(target));useEffect(()=>{const id=window.setInterval(()=>setValue(calc(target)),1000);return()=>window.clearInterval(id)},[target]);return value}
