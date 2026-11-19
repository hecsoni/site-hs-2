import type { MetadataRoute } from 'next';
import { services } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hsrefrigercao.com.br';
  const pages = ['', '/planos-mensais', '/sobre', '/contato', '/trabalhos-realizados', ...services.map(s => `/servicos/${s.slug}`)];
  return pages.map(path => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : path.startsWith('/servicos/') ? 0.8 : 0.6,
  }));
}
