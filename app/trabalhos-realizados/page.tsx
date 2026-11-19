import type {Metadata} from 'next';
import Link from 'next/link';
import TrabalhosGrid from '@/components/TrabalhosGrid';
export const metadata:Metadata={title:'Serviços realizados | HS Refrigeração',description:'Fotografias reais de equipamentos e serviços de refrigeração comercial, câmaras frias e máquinas de gelo em Curitiba.',alternates:{canonical:'/trabalhos-realizados'}};
export default function TrabalhosRealizados(){return <main><section className="container section"><nav className="breadcrumbs" aria-label="Você está aqui"><Link href="/">Início</Link><span>/</span><span>Serviços realizados</span></nav><p className="eyebrow">PORTFÓLIO TÉCNICO</p><h1 className="section-title">Serviços <span>realizados</span></h1><p className="trabalhos-intro" style={{textAlign:'left',marginLeft:0}}>Fotografias autênticas de equipamentos e atividades técnicas. As descrições identificam apenas o que está documentado nas imagens.</p><TrabalhosGrid/></section></main>}
