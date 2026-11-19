import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {trabalhos} from '@/lib/trabalhos';

export default function TrabalhosGrid({limit}:{limit?:number}) {
 const itens=typeof limit==='number'?trabalhos.slice(0,limit):trabalhos;
 return <div className="trabalhos-grid">{itens.map(t=><article className="trabalho-card" key={t.slug}>
  <div className="trabalho-photo"><Image src={t.imagem} alt={t.titulo} fill sizes="(max-width:700px) 100vw, (max-width:1100px) 50vw, 33vw"/></div>
  <div className="trabalho-info"><span className="service-tag">{t.categoria}</span><h3>{t.titulo}</h3><p>{t.descricao}</p>
  {t.antes&&t.depois&&<div className="trabalho-comparison"><figure><Image src={t.antes} alt="Antes da limpeza" width={420} height={280}/><figcaption>Antes</figcaption></figure><figure><Image src={t.depois} alt="Depois da limpeza" width={420} height={280}/><figcaption>Depois</figcaption></figure></div>}
  </div></article>)}</div>;
}
