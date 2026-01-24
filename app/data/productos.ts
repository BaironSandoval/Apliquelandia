export type Categoria =
  | "hombres"
  | "mujeres"
  | "infantil-ninos"
  | "infantil-ninas"
  | "bebes"
  | "navidad";

export type Producto = {
  id: number;
  slug: string;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: Categoria;
};

export const productos: Producto[] = [
  // MUJERES
  { id: 1, slug: "aplique-floral-elegante", nombre: "Aplique floral elegante", precio: 2500, imagen: "/producto.png", categoria: "mujeres" },
  { id: 2, slug: "aplique-encaje-fino", nombre: "Aplique de encaje fino", precio: 2800, imagen: "/producto.png", categoria: "mujeres" },
  { id: 3, slug: "aplique-pedreria-glam", nombre: "Aplique con pedrería glam", precio: 3500, imagen: "/producto.png", categoria: "mujeres" },
  { id: 4, slug: "aplique-hojas-bordadas", nombre: "Aplique hojas bordadas", precio: 2600, imagen: "/producto.png", categoria: "mujeres" },
  { id: 5, slug: "aplique-perlas-delicadas", nombre: "Aplique con perlas delicadas", precio: 3200, imagen: "/producto.png", categoria: "mujeres" },
  { id: 6, slug: "aplique-satin-elegante", nombre: "Aplique satín elegante", precio: 2400, imagen: "/producto.png", categoria: "mujeres" },
  { id: 7, slug: "aplique-bordado-clasico", nombre: "Aplique bordado clásico", precio: 2700, imagen: "/producto.png", categoria: "mujeres" },
  { id: 8, slug: "aplique-rosas-textiles", nombre: "Aplique rosas textiles", precio: 3000, imagen: "/producto.png", categoria: "mujeres" },
  { id: 9, slug: "aplique-brillos-finos", nombre: "Aplique de brillos finos", precio: 3400, imagen: "/producto.png", categoria: "mujeres" },
  { id: 10, slug: "aplique-lazos-elegantes", nombre: "Aplique lazos elegantes", precio: 2300, imagen: "/producto.png", categoria: "mujeres" },

  // INFANTIL NIÑOS
  { id: 11, slug: "aplique-dinosaurio", nombre: "Aplique dinosaurio divertido", precio: 2200, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 12, slug: "aplique-carrito", nombre: "Aplique carrito infantil", precio: 2100, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 13, slug: "aplique-superheroe", nombre: "Aplique superhéroe", precio: 2600, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 14, slug: "aplique-baloncito", nombre: "Aplique balón deportivo", precio: 2000, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 15, slug: "aplique-avion", nombre: "Aplique avión bordado", precio: 2300, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 16, slug: "aplique-barquito", nombre: "Aplique barquito", precio: 2200, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 17, slug: "aplique-leon", nombre: "Aplique león infantil", precio: 2400, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 18, slug: "aplique-robot", nombre: "Aplique robot divertido", precio: 2500, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 19, slug: "aplique-camion", nombre: "Aplique camión bordado", precio: 2100, imagen: "/producto.png", categoria: "infantil-ninos" },
  { id: 20, slug: "aplique-estrella-nino", nombre: "Aplique estrella infantil", precio: 2000, imagen: "/producto.png", categoria: "infantil-ninos" },

  // INFANTIL NIÑAS
  { id: 21, slug: "aplique-corazon", nombre: "Aplique corazón tierno", precio: 2200, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 22, slug: "aplique-mariposa", nombre: "Aplique mariposa bordada", precio: 2500, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 23, slug: "aplique-unicornio", nombre: "Aplique unicornio mágico", precio: 2700, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 24, slug: "aplique-flor-nina", nombre: "Aplique flor infantil", precio: 2300, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 25, slug: "aplique-corona", nombre: "Aplique corona princesa", precio: 2600, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 26, slug: "aplique-arcoiris", nombre: "Aplique arcoíris", precio: 2400, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 27, slug: "aplique-gatito", nombre: "Aplique gatito tierno", precio: 2300, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 28, slug: "aplique-lazos-nina", nombre: "Aplique lazos infantiles", precio: 2200, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 29, slug: "aplique-estrella-nina", nombre: "Aplique estrella brillante", precio: 2100, imagen: "/producto.png", categoria: "infantil-ninas" },
  { id: 30, slug: "aplique-corazones", nombre: "Aplique corazones dulces", precio: 2000, imagen: "/producto.png", categoria: "infantil-ninas" },

  // BEBÉS
  { id: 31, slug: "aplique-osito", nombre: "Aplique osito bebé", precio: 2000, imagen: "/producto.png", categoria: "bebes" },
  { id: 32, slug: "aplique-patito", nombre: "Aplique patito tierno", precio: 2000, imagen: "/producto.png", categoria: "bebes" },
  { id: 33, slug: "aplique-nube", nombre: "Aplique nube suave", precio: 1900, imagen: "/producto.png", categoria: "bebes" },
  { id: 34, slug: "aplique-corazon-bebe", nombre: "Aplique corazón bebé", precio: 1800, imagen: "/producto.png", categoria: "bebes" },
  { id: 35, slug: "aplique-estrellita", nombre: "Aplique estrellita", precio: 1800, imagen: "/producto.png", categoria: "bebes" },
  { id: 36, slug: "aplique-lunita", nombre: "Aplique lunita", precio: 1900, imagen: "/producto.png", categoria: "bebes" },
  { id: 37, slug: "aplique-elefantito", nombre: "Aplique elefantito", precio: 2100, imagen: "/producto.png", categoria: "bebes" },
  { id: 38, slug: "aplique-sonajero", nombre: "Aplique sonajero", precio: 2000, imagen: "/producto.png", categoria: "bebes" },
  { id: 39, slug: "aplique-biberon", nombre: "Aplique biberón", precio: 1900, imagen: "/producto.png", categoria: "bebes" },
  { id: 40, slug: "aplique-babero", nombre: "Aplique babero", precio: 1800, imagen: "/producto.png", categoria: "bebes" },

  // NAVIDAD
  { id: 41, slug: "aplique-arbol-navidad", nombre: "Aplique árbol de Navidad", precio: 2800, imagen: "/producto.png", categoria: "navidad" },
  { id: 42, slug: "aplique-santa", nombre: "Aplique Santa Claus", precio: 3000, imagen: "/producto.png", categoria: "navidad" },
  { id: 43, slug: "aplique-reno", nombre: "Aplique reno navideño", precio: 2900, imagen: "/producto.png", categoria: "navidad" },
  { id: 44, slug: "aplique-copo-nieve", nombre: "Aplique copo de nieve", precio: 2600, imagen: "/producto.png", categoria: "navidad" },
  { id: 45, slug: "aplique-campana", nombre: "Aplique campana navideña", precio: 2500, imagen: "/producto.png", categoria: "navidad" },
  { id: 46, slug: "aplique-bastoncillo", nombre: "Aplique bastón de caramelo", precio: 2400, imagen: "/producto.png", categoria: "navidad" },
  { id: 47, slug: "aplique-estrella-navidad", nombre: "Aplique estrella navideña", precio: 2600, imagen: "/producto.png", categoria: "navidad" },
  { id: 48, slug: "aplique-regalo", nombre: "Aplique regalo navideño", precio: 2700, imagen: "/producto.png", categoria: "navidad" },
  { id: 49, slug: "aplique-corona-navidad", nombre: "Aplique corona navideña", precio: 3000, imagen: "/producto.png", categoria: "navidad" },
  { id: 50, slug: "aplique-nieve-brillo", nombre: "Aplique nieve con brillo", precio: 2800, imagen: "/producto.png", categoria: "navidad" },

  // HOMBRES
  { id: 51, slug: "aplique-escudo-deportivo", nombre: "Aplique escudo deportivo", precio: 2600, imagen: "/producto.png", categoria: "hombres" },
  { id: 52, slug: "aplique-leon-masculino", nombre: "Aplique león masculino", precio: 2800, imagen: "/producto.png", categoria: "hombres" },
  { id: 53, slug: "aplique-aguila", nombre: "Aplique águila bordada", precio: 2900, imagen: "/producto.png", categoria: "hombres" },
  { id: 54, slug: "aplique-calavera", nombre: "Aplique calavera urbana", precio: 3000, imagen: "/producto.png", categoria: "hombres" },
  { id: 55, slug: "aplique-tipografia-urbana", nombre: "Aplique tipografía urbana", precio: 2400, imagen: "/producto.png", categoria: "hombres" },
  { id: 56, slug: "aplique-corona-masculina", nombre: "Aplique corona masculina", precio: 2700, imagen: "/producto.png", categoria: "hombres" },
  { id: 57, slug: "aplique-rayo", nombre: "Aplique rayo dinámico", precio: 2300, imagen: "/producto.png", categoria: "hombres" },
  { id: 58, slug: "aplique-numero-deportivo", nombre: "Aplique número deportivo", precio: 2200, imagen: "/producto.png", categoria: "hombres" },
  { id: 59, slug: "aplique-insignia-militar", nombre: "Aplique insignia estilo militar", precio: 3100, imagen: "/producto.png", categoria: "hombres" },
  { id: 60, slug: "aplique-lineas-geometricas", nombre: "Aplique líneas geométricas", precio: 2500, imagen: "/producto.png", categoria: "hombres" },

];
