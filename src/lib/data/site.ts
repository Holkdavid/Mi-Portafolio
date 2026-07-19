import { profile } from './profile';
import { roles } from './roles';

// 🚧 IMPORTANTE: reemplaza esta URL por tu dominio real antes de desplegar
// a producción. Se usa en canonical, Open Graph, sitemap y JSON-LD.
export const siteConfig = {
  url: 'https://holmandavid.dev',
  name: `${profile.fullName} — Portafolio`,
  defaultTitle: `${profile.fullName} · ${roles[0]}`,
  defaultDescription: profile.description,
  ogImage: profile.avatar,
  locale: 'es_CO'
};
