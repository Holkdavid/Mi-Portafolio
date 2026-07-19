import type { Social } from '$lib/types/social';

export const socials: Social[] = [
  {
    id: 1,
    platform: "GitHub",
    label: "@Holkdavid",
    url: "https://github.com/Holkdavid",
    icon: "github"
  },
  {
    id: 2,
    platform: "LinkedIn",
    label: "Holman David González Cantillo",
    url: "https://www.linkedin.com/in/holman-david-gonzalez-cantillo-2071671bb/",
    icon: "linkedin"
  },
  {
    id: 3,
    platform: "Email",
    label: "holkdavid2014@hotmail.com",
    url: "mailto:holkdavid2014@hotmail.com",
    icon: "mail"
  }
];

// 🧠 Export pre-calculado para consumidores que solo necesitan el link de LinkedIn
// (ej. el botón del Hero), evitando repetir el .find() en cada componente.
export const linkedin = socials.find((s) => s.platform === 'LinkedIn');
