"use client";
// Não instala rastreadores. Emite eventos somente se o proprietário configurar o GA4.
declare global { interface Window { gtag?: (...args: unknown[]) => void } }
export function trackLead(origin:string, service:string) {
  if (typeof window==='undefined') return;
  window.gtag?.('event','generate_lead',{lead_source:origin,service_name:service});
}
