
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/robots.txt" | "/sitemap.xml";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/robots.txt": Record<string, never>;
			"/sitemap.xml": Record<string, never>
		};
		Pathname(): "/" | "/robots.txt" | "/sitemap.xml";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/images/profile/profile.webp" | "/images/projects/filmly/cartelera.webp" | "/images/projects/filmly/informacion-comprador-1.webp" | "/images/projects/filmly/informacion-comprador-2.webp" | "/images/projects/filmly/login-1.webp" | "/images/projects/filmly/login-2.webp" | "/images/projects/filmly/medios-pago.webp" | "/images/projects/filmly/pago.webp" | "/images/projects/filmly/registro-1.webp" | "/images/projects/filmly/registro-2.webp" | "/images/projects/filmly/seleccionar-hora.webp" | "/images/projects/filmly/seleccionar-sillas.webp" | "/images/projects/optistock/agregar-categoria.webp" | "/images/projects/optistock/carrito.webp" | "/images/projects/optistock/dashboard.webp" | "/images/projects/optistock/inicio-con-ventas.webp" | "/images/projects/optistock/inicio.webp" | "/images/projects/optistock/login-1.webp" | "/images/projects/optistock/login-2.webp" | "/images/projects/optistock/medio-pago-1.webp" | "/images/projects/optistock/medio-pago-2.webp" | "/images/projects/optistock/medio-pago-3.webp" | "/images/projects/optistock/medio-pago-4.webp" | "/images/projects/optistock/producto-categorias.webp" | "/images/projects/optistock/productos-1.webp" | "/images/projects/optistock/productos-2.webp" | "/images/projects/optistock/productos-3.webp" | "/images/projects/optistock/productos-4.webp" | "/images/projects/optistock/productos-5.webp" | "/images/projects/optistock/productos-6.webp" | "/images/projects/optistock/productos-7.webp" | "/images/projects/optistock/registro-1.webp" | "/images/projects/optistock/registro-2.webp" | "/images/projects/optistock/registro-negocio-1.webp" | "/images/projects/optistock/registro-negocio-2.webp" | "/images/projects/optistock/reportes-facturacion.webp" | "/images/projects/optistock/reportes-ganancias.webp" | "/images/projects/optistock/reportes-medio-pago.webp" | "/images/projects/optistock/reportes-ventas.webp" | "/images/projects/optistock/reportes.webp" | "/images/projects/optistock/ventas-1.webp" | "/images/projects/optistock/ventas-2.webp" | string & {};
	}
}