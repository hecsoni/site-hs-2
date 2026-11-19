"use client";
import type {ReactNode} from 'react';
import {whatsapp} from '@/lib/data';
import {trackLead} from '@/lib/track';
export default function TrackedWhatsApp({message,origin,service='geral',className,children}:{message:string;origin:string;service?:string;className?:string;children:ReactNode}){
  return <a href={whatsapp(message)} className={className} target="_blank" rel="noopener noreferrer" onClick={()=>trackLead(origin,service)}>{children}</a>;
}
