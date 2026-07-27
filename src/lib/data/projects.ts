import type { Project } from '$lib/types/project';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'optistock',
    title: 'OptiStock',
    shortDescription: 'Sistema de gestión de inventario para tiendas de barrio.',
    fullDescription:
      'OptiStock es una aplicación Android desarrollada en Flutter para mejorar el control de inventario en tiendas de barrio, permitiendo registrar productos, gestionar entradas y salidas de mercancía y facilitar la toma de decisiones mediante una interfaz intuitiva.',
    image: '/images/projects/optistock/inicio-con-ventas.webp',
    gallery: [
      '/images/projects/optistock/login-1.webp',
      '/images/projects/optistock/login-2.webp',
      '/images/projects/optistock/registro-1.webp',
      '/images/projects/optistock/registro-2.webp',
      '/images/projects/optistock/registro-negocio-1.webp',
      '/images/projects/optistock/registro-negocio-2.webp',
      '/images/projects/optistock/inicio.webp',
      '/images/projects/optistock/inicio-con-ventas.webp',
      '/images/projects/optistock/dashboard.webp',
      '/images/projects/optistock/productos-1.webp',
      '/images/projects/optistock/productos-2.webp',
      '/images/projects/optistock/productos-3.webp',
      '/images/projects/optistock/productos-4.webp',
      '/images/projects/optistock/productos-5.webp',
      '/images/projects/optistock/productos-6.webp',
      '/images/projects/optistock/productos-7.webp',
      '/images/projects/optistock/producto-categorias.webp',
      '/images/projects/optistock/agregar-categoria.webp',
      '/images/projects/optistock/carrito.webp',
      '/images/projects/optistock/ventas-1.webp',
      '/images/projects/optistock/ventas-2.webp',
      '/images/projects/optistock/medio-pago-1.webp',
      '/images/projects/optistock/medio-pago-2.webp',
      '/images/projects/optistock/medio-pago-3.webp',
      '/images/projects/optistock/medio-pago-4.webp',
      '/images/projects/optistock/reportes.webp',
      '/images/projects/optistock/reportes-facturacion.webp',
      '/images/projects/optistock/reportes-ventas.webp',
      '/images/projects/optistock/reportes-ganancias.webp',
      '/images/projects/optistock/reportes-medio-pago.webp'
    ],
    technologies: ['Flutter', 'Dart', 'MySQL'],
    features: ['Registro de productos', 'Control de existencias', 'Aplicación móvil Android'],
    // links.github: aún no subido a GitHub
    links: {
      figma:
        'https://www.figma.com/design/tUFBKFTKq7coVqu1WL5on8/mockup-optistock?node-id=7-51&t=iKGZs6jWzVpMz5lr-1'
    },
    status: 'Finalizado',
    featured: true,
    accentColor: '#2563EB' // azul — coincide con --primary del design system
  },
  {
    id: 2,
    slug: 'filmly',
    title: 'Filmly',
    shortDescription: 'Sitio web para explorar películas.',
    fullDescription:
      'Filmly es una interfaz web enfocada en la exploración de contenido cinematográfico. El proyecto fue diseñado inicialmente en Figma y posteriormente desarrollado utilizando HTML, CSS y JavaScript con un enfoque responsive.',
    image: '/images/projects/filmly/cartelera.webp',
    gallery: [
      '/images/projects/filmly/login-1.webp',
      '/images/projects/filmly/login-2.webp',
      '/images/projects/filmly/registro-1.webp',
      '/images/projects/filmly/registro-2.webp',
      '/images/projects/filmly/cartelera.webp',
      '/images/projects/filmly/seleccionar-hora.webp',
      '/images/projects/filmly/seleccionar-sillas.webp',
      '/images/projects/filmly/informacion-comprador-1.webp',
      '/images/projects/filmly/informacion-comprador-2.webp',
      '/images/projects/filmly/medios-pago.webp',
      '/images/projects/filmly/pago.webp'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Diseño responsive', 'Explorador de películas', 'Interfaz moderna'],
    links: {
      github: 'https://github.com/JosueFlorez/Filmy',
      figma:
        'https://www.figma.com/design/NzutCsM7UxPywgcccqxSyE/Filmly-mockup?node-id=7-51&t=mEponpOLca8bZOmU-1'
    },
    status: 'Finalizado',
    featured: true,
    accentColor: '#8B5CF6' // morado
  }
];
