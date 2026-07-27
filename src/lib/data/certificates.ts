export interface Certificate {
  title: string;
  issuer: string;
  description: string;
  date: string;
  /** Duración del programa en horas, si aplica. */
  hours?: number;
  /** Imagen del certificado (opcional: la sección funciona sin ella). */
  image?: string;
  /** Enlace de verificación de la credencial (ej. el QR del certificado). */
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Bootcamp de Programación Básico",
    issuer: "Talento Tech - MinTIC",
    date: "Diciembre 2024",
    hours: 159,
    description:
      "Bootcamp intensivo de programación del programa Talento Tech, iniciativa del Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) de Colombia, desarrollado en alianza con la Universidad Libre y la empresa Etraining.",
    image: "/images/certificates/talento-tech-programacion-basico.webp"
  }
];
