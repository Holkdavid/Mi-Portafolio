// src/utils/variants.ts



export const cardRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
};

export const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full w-full"
};
// src/lib/utils/variants.ts

export const buttonVariants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 transition-colors duration-200",
    ghost: "bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200",
    danger: "bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
};

// 🧠 Agrega este mapa si no lo tenías para soportar la prop 'size'
export const buttonSizes = {
    sm: "px-3 py-1.5 text-xs font-medium",
    md: "px-4 py-2 text-sm font-medium",
    lg: "px-5 py-2.5 text-base font-semibold"
};
