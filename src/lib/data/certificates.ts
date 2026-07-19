export interface Certificate {
  title: string;
  issuer: string;
  description: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Bootcamp Desarrollo Web con HTML",
    issuer: "Talento Tech - MinTIC",
    date: "2024",
    description:
      "Bootcamp intensivo enfocado en el desarrollo web con HTML, realizado dentro del programa Talento Tech del Ministerio TIC de Colombia.",
    image: "/images/certificates/talento-tech-html.webp"
  }
];
