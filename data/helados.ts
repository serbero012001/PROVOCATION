export type TipoHelado = 

  | "Paleta" 
  | "Vaso" 
  | "Cono" 

  | "Bonice" 
  | "Postre" 
  | "Platillo" 

  | "Perros"   
  | "Mascota";

export type helados = {
  id: number;
  nombre: string;
  marca: "CremHelado" | "Colombina" | "Fredinno" | "Colanta" | "Provocación";
  tipo: TipoHelado;
  precio: number;
  imagen?: string; 
};

export const MARCAS = [
    "Cremhelado",
    "Colombina",
    "Fredino",
    "Colanta",
];

export const helados: helados[] = [
  {
  id: 1,
  marca: "CremHelado",
  nombre: "Artesanal Mora",
  tipo: "Paleta",
  precio: 4300,
  imagen: "/helados/cremhelado/artesanal-mora.png" 
},
{
  id: 2,
  marca: "CremHelado",
  nombre: "Artesanal Postre de Limón",
  tipo: "Paleta",
  precio: 4300,
  imagen: "/helados/cremhelado/artesanal-postre-de-limon.png" 
},
{
  id: 3,
  marca: "CremHelado",
  nombre: "Artesanal Flan de Arequipe",
  tipo: "Paleta",
  precio: 4300,
  imagen: "/helados/cremhelado/artesanal-flan-de-arequipe.png" 
},
{
  id: 4,
  marca: "CremHelado",
  nombre: "Artesanal Maracuyá",
  tipo: "Paleta",
  precio: 4300,
  imagen: "/helados/cremhelado/artesanal-maracuya.png" 
},
{
  id: 5,
  marca: "CremHelado",
  nombre: "Artesanal Tres Leches",
  tipo: "Paleta",
  precio: 4300,
  imagen: "/helados/cremhelado/artesanal-tres-leches.png" 
},
{
  id: 6,
  marca: "CremHelado",
  nombre: "Tosh Fresa",
  tipo: "Paleta",
  precio: 4500,
  imagen: "/helados/cremhelado/tosh-fresa.png" 
},
{
  id: 7,
  marca: "CremHelado",
  nombre: "Tosh Piña",
  tipo: "Paleta",
  precio: 4500,
  imagen: "/helados/cremhelado/tosh-piña.png" 
},
{
  id: 8,
  marca: "CremHelado",
  nombre: "Raspado Kola",
  tipo: "Vaso",
  precio: 5500,
  imagen: "/helados/cremhelado/raspado-kola.png" 
},
{
  id: 9,
  marca: "CremHelado",
  nombre: "Polet Cookies and Cream",
  tipo: "Paleta",
  precio: 7000,
  imagen: "/helados/cremhelado/polet-cookies-and-cream.png" 
},
{
  id: 10,
  marca: "CremHelado",
  nombre: "Polet Frutos del Bosque",
  tipo: "Paleta",
  precio: 7000,
  imagen: "/helados/cremhelado/polet-frutos-del-bosque.png" 
},
{
  id: 11,
  marca: "CremHelado",
  nombre: "Mini Polet Cookies and Cream",
  tipo: "Paleta",
  precio: 5500,
  imagen: "/helados/cremhelado/mini-polet-cookies-and-cream.png" 
},
{
  id: 12,
  marca: "CremHelado",
  nombre: "Mini Polet Frutos del Bosque",
  tipo: "Paleta",
  precio: 5500,
  imagen: "/helados/cremhelado/mini-polet-frutos-del-bosque.png" 
},
{
  id: 13,
  marca: "CremHelado",
  nombre: "Polet Grande Caramelo Crocante",
  tipo: "Paleta",
  precio: 8000,
  imagen: "/helados/cremhelado/polet-grande-caramelo-crocante.png" 
},
{
  id: 14,
  marca: "CremHelado",
  nombre: "Polet Grande Chocoavellana",
  tipo: "Paleta",
  precio: 8000,
  imagen: "/helados/cremhelado/polet-grande-chocoavellana.png" 
},
{
  id: 15,
  marca: "CremHelado",
  nombre: "Jett Vainilla",
  tipo: "Paleta",
  precio: 5600,
  imagen: "/helados/cremhelado/jett-vainilla.png" 
},
{
  id: 16,
  marca: "CremHelado",
  nombre: "Bocatto Fresa",
  tipo: "Paleta",
  precio: 8000,
  imagen: "/helados/cremhelado/bocatto-fresa.png" 
},
{
  id: 17,
  marca: "CremHelado",
  nombre: "Bocatto Tres Leches",
  tipo: "Paleta",
  precio: 8000,
  imagen: "/helados/cremhelado/bocatto-tres-leches.png" 
},
{
  id: 18,
  marca: "CremHelado",
  nombre: "Bocatto Jumbo",
  tipo: "Paleta",
  precio: 8000,
  imagen: "/helados/cremhelado/bocatto-jumbo.png" 
},
{
  id: 19,
  marca: "CremHelado",
  nombre: "Chococono Bakano",
  tipo: "Paleta",
  precio: 4900,
  imagen: "/helados/cremhelado/chococono-bakano.png" 
},
{
  id: 20,
  marca: "CremHelado",
  nombre: "Chococono Flow",
  tipo: "Paleta",
  precio: 4900,
  imagen: "/helados/cremhelado/chococono-flow.png" 
},
{
  id: 21,
  marca: "CremHelado",
  nombre: "Chococono",
  tipo: "Paleta",
  precio: 4300,
  imagen: "/helados/cremhelado/chococono.png" 
},
{
  id: 22,
  marca: "CremHelado",
  nombre: "Tosh Pasión",
  tipo: "Paleta",
  precio: 4800,
  imagen: "/helados/cremhelado/tosh-pasion.png" 
},
{
  id: 23,
  marca: "CremHelado",
  nombre: "Casero Coco",
  tipo: "Paleta",
  precio: 3000,
  imagen: "/helados/cremhelado/casero-coco.png" 
},
{
  id: 24,
  marca: "CremHelado",
  nombre: "Casero Mora",
  tipo: "Paleta",
  precio: 3000,
  imagen: "/helados/cremhelado/casero-mora.png" 
},
{
  id: 25,
  marca: "CremHelado",
  nombre: "Casero Guanábana",
  tipo: "Paleta",
  precio: 3000,
  imagen: "/helados/cremhelado/casero-guanábana.png" 
},
{
  id: 26,
  marca: "CremHelado",
  nombre: "Casero Ron Pasas",
  tipo: "Paleta",
  precio: 3000,
  imagen: "/helados/cremhelado/casero-ron-pasas.png" 
},
{
  id: 27,
  marca: "CremHelado",
  nombre: "Platillo Vainilla Pasas",
  tipo: "Paleta",
  precio: 4500,
  imagen: "/helados/cremhelado/platillo-vainilla-pasas.png" 
},
{
  id: 28,
  marca: "CremHelado",
  nombre: "Platillo Napolitano",
  tipo: "Paleta",
  precio: 4500,
  imagen: "/helados/cremhelado/platillo-napolitano.png" 
},
{
  id: 29,
  marca: "CremHelado",
  nombre: "Platillo Arequipe",
  tipo: "Paleta",
  precio: 4500,
  imagen: "/helados/cremhelado/platillo-arequipe.png" 
},
{
  id: 30,
  marca: "CremHelado",
  nombre: "Platillo Jumbo",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/cremhelado/platillo-jumbo.png" 
},
{
  id: 31,
  marca: "CremHelado",
  nombre: "Paletas de agua Naranja",
  tipo: "Paleta",
  precio: 2700,
  imagen: "/helados/cremhelado/paletas-de-agua-naranja.png" 
},
{
  id: 32,
  marca: "CremHelado",
  nombre: "Paletas de agua Limón",
  tipo: "Paleta",
  precio: 2700,
  imagen: "/helados/cremhelado/paletas-de-agua-limon.png" 
},
{
  id: 33,
  marca: "CremHelado",
  nombre: "Paletas de agua aloha mix",
  tipo: "Paleta",
  precio: 3200,
  imagen: "/helados/cremhelado/paletas-de-agua-aloha-mix.png" 
},
{
  id: 34,
  marca: "CremHelado",
  nombre: "paletas de agua cereza",
  tipo: "Paleta",
  precio: 3200,
  imagen: "/helados/cremhelado/paletas-de-agua-cereza.png" 
},
{
  id: 35,
  marca: "CremHelado",
  nombre: "Paletas de agua naranja",
  tipo: "Paleta",
  precio: 3200,
  imagen: "/helados/cremhelado/paletas-de-agua-naranja.png" 
},
{
  id: 36,
  marca: "CremHelado",
  nombre: "Paletas de agua mango biche",
  tipo: "Paleta",
  precio: 3200,
  imagen: "/helados/cremhelado/paletas-de-agua-mango-biche.png" 
},
{
  id: 37,
  marca: "CremHelado",
  nombre: "Bocados de helado Jumbo",
  tipo: "Paleta",
  precio: 30000,
  imagen: "/helados/cremhelado/bocados-de-helado-jumbo.png" 
},
{
  id: 38,
  marca: "CremHelado",
  nombre: "Chocolisto",
  tipo: "Paleta",
  precio: 3000,
  imagen: "/helados/cremhelado/chocolisto.png" 
},
{
  id: 39,
  marca: "CremHelado",
  nombre: "Nube Kids Vainilla",
  tipo: "Paleta",
  precio: 3000,
  imagen: "/helados/cremhelado/nube-kids-vainilla.png" 
},
{
  id: 40,
  marca: "CremHelado",
  nombre: "Nube Kids Heladino Vainilla",
  tipo: "Vaso",
  precio: 4300,
  imagen: "/helados/cremhelado/nube-kids-heladino-vainilla.png" 
},
{
  id: 41,
  marca: "CremHelado",
  nombre: "Cookies and Cream",
  tipo: "Paleta",
  precio: 3500,
  imagen: "/helados/cremhelado/cookies-and-cream.png" 
},
{
  id: 42,
  marca: "CremHelado",
  nombre: "Bonice Cola",
  tipo: "Bonice",
  precio: 1900,
  imagen: "/helados/cremhelado/bonice-cola.png" 
},
{
  id: 43,
  marca: "CremHelado",
  nombre: "Bonice Limón",
  tipo: "Bonice",
  precio: 1900,
  imagen: "/helados/cremhelado/bonice-limon.png" 
},
{
  id: 44,
  marca: "CremHelado",
  nombre: "Bonice Naranja",
  tipo: "Bonice",
  precio: 1900,
  imagen: "/helados/cremhelado/bonice-naranja.png" 
},
{
  id: 45,
  marca: "CremHelado",
  nombre: "Mr Brown",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/cremhelado/mr-brown.png" 
},
{
  id: 46,
  marca: "CremHelado",
  nombre: "Jumbo",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/cremhelado/jumbo.png" 
},
{
  id: 47,
  marca: "CremHelado",
  nombre: "MiniChips",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/cremhelado/minichips.png" 
},
{
  id: 48,
  marca: "CremHelado",
  nombre: "Cookies and Cream con galleta",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/cremhelado/cookies-and-cream-con-galleta.png" 
},
{
  id: 49,
  marca: "CremHelado",
  nombre: "Frutos Rojos",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/cremhelado/frutos-rojos.png" 
},
{
  id: 50,
  marca: "CremHelado",
  nombre: "Vainilla Chips",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/cremhelado/vainilla-chips.png" 
},
{
  id: 51,
  marca: "CremHelado",
  nombre: "Vainilla",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/cremhelado/vainilla.png" 
},
{
  id: 52,
  marca: "CremHelado",
  nombre: "Jett litro",
  tipo: "Vaso",
  precio: 40000,
  imagen: "/helados/cremhelado/jett-litro.png" 
},
{
  id: 53,
  marca: "CremHelado",
  nombre: "Vainilla Chips",
  tipo: "Vaso",
  precio: 40000,
  imagen: "/helados/cremhelado/vainilla-chips-litro.png" 
},
{
  id: 54,
  marca: "CremHelado",
  nombre: "Vainilla litro",
  tipo: "Vaso",
  precio: 40000,
  imagen: "/helados/cremhelado/vainilla-litro.png" 
},
{
  id: 55,
  marca: "CremHelado",
  nombre: "Vainilla Fresa litro",
  tipo: "Vaso",
  precio: 40000,
  imagen: "/helados/cremhelado/vainilla-fresa-litro.png" 
},
{
  id: 56,
  marca: "CremHelado",
  nombre: "Chiks",
  tipo: "Vaso",
  precio: 27000,
  imagen: "/helados/cremhelado/chiks.png" 
},
{
  id: 57,
  marca: "CremHelado",
  nombre: "Drácula",
  tipo: "Vaso",
  precio: 45000,
  imagen: "/helados/cremhelado/dracula.png" 
},
{
  id: 58,
  marca: "CremHelado",
  nombre: "Arequipe Alfajor Gold",
  tipo: "Vaso",
  precio: 27000,
  imagen: "/helados/cremhelado/arequipe-alfajor-gold.png" 
},
{
  id: 59,
  marca: "CremHelado",
  nombre: "Vainilla Selecta Gold",
  tipo: "Vaso",
  precio: 46000,
  imagen: "/helados/cremhelado/vainilla-selecta-gold.png" 
},
{
  id: 60,
  marca: "CremHelado",
  nombre: "Fondue de Chocolate Gold",
  tipo: "Vaso",
  precio: 46000,
  imagen: "/helados/cremhelado/fondue-de-chocolate-gold.png" 
},
{
  id: 61,
  marca: "CremHelado",
  nombre: "Postre Cassatta Frutos Morados",
  tipo: "Postre",
  precio: 39900,
  imagen: "/helados/cremhelado/postre-cassatta-frutos-morados.png" 
},

{
  id: 102,
  marca: "Fredinno",
  nombre: "Tío Betto Mango Biche",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-mango-biche.png" 
},
{
  id: 103,
  marca: "Fredinno",
  nombre: "Tío Betto Guanábana",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-guanabana.png" 
},
{
  id: 104,
  marca: "Fredinno",
  nombre: "Tío Betto Ron con Pasas",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-ron-con-pasas.png" 
},
{
  id: 105,
  marca: "Fredinno",
  nombre: "Tío Betto Mora",
  tipo: "Paleta",
  precio: 5000,
  
},
{
  id: 106,
  marca: "Fredinno",
  nombre: "Tío Betto Arequipe y pasas",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-arequipe-y-pasas.png" 
},
{
  id: 107,
  marca: "Fredinno",
  nombre: "Tío Betto Feijoa",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-feijoa.png" 
},
{
  id: 108,
  marca: "Fredinno",
  nombre: "Tío Betto Chicle",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-chicle.png" 
},
{
  id: 109,
  marca: "Fredinno",
  nombre: "Tío Betto Maracuyá",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-maracuya.png" 
},
{
  id: 110,
  marca: "Fredinno",
  nombre: "Tío Betto Coco",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-coco.png" 
},
{
  id: 111,
  marca: "Fredinno",
  nombre: "Tío Betto Queso",
  tipo: "Paleta",
  precio: 5000,
  imagen: "/helados/fredinno/tio-betto-queso.png" 
},
{
  id: 112,
  marca: "Fredinno",
  nombre: "Casero Arequipe",
  tipo: "Paleta",
  precio: 3500,
  imagen: "/helados/fredinno/casero-arequipe.png" 
},
{
  id: 113,
  marca: "Fredinno",
  nombre: "Casero Coco",
  tipo: "Paleta",
  precio: 3500,
  imagen: "/helados/fredinno/casero-coco.png" 
},
{
  id: 114,
  marca: "Fredinno",
  nombre: "Casero Queso",
  tipo: "Paleta",
  precio: 3500,
  imagen: "/helados/fredinno/casero-queso.png" 
},
{
  id: 116,
  marca: "Fredinno",
  nombre: "Cono Crispi Chocolate",
  tipo: "Cono",
  precio: 6000,
  imagen: "/helados/fredinno/cono-crispi-chocolate.png" 
},
{
  id: 117,
  marca: "Fredinno",
  nombre: "Cono Crispi Ron con Pasas",
  tipo: "Cono",
  precio: 6000,
  imagen: "/helados/fredinno/cono-crispi-ron-con-pasas.png" 
},
{
  id: 118,
  marca: "Fredinno",
  nombre: "Vaso Glotón Arequipe",
  tipo: "Vaso",
  precio: 6000,
 
},
{
  id: 119,
  marca: "Fredinno",
  nombre: "Vaso Glotón Tres Leches",
  tipo: "Vaso",
  precio: 6000,
  imagen: "/helados/fredinno/vaso-gloton-tres-leches.png" 
},
{
  id: 120,
  marca: "Fredinno",
  nombre: "Vaso Glotón Veteado de Mora",
  tipo: "Vaso",
  precio: 6000,
  imagen: "/helados/fredinno/vaso-gloton-veteado-de-mora.png" 
},
{
  id: 121,
  marca: "Fredinno",
  nombre: "Vaso Glotón Frutos Rojos",
  tipo: "Vaso",
  precio: 6000,
  imagen: "/helados/fredinno/vaso-gloton-frutos-rojos.png" 
},
{
  id: 122,
  marca: "Fredinno",
  nombre: "Mini Sundae Vaso Frutos Rojos",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helados/fredinno/mini-sundae-vaso-frutos-rojos.png" 
},
{
  id: 123,
  marca: "Fredinno",
  nombre: "Mini Sundae Vaso Vainilla",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helados/fredinno/mini-sundae-vaso-vainilla.png" 
},
{
  id: 124,
  marca: "Fredinno",
  nombre: "Paletas de Agua Freshkita Mandarina",
  tipo: "Paleta",
  precio: 2700,
  imagen: "/helados/fredinno/paletas-de-agua-freshkita-mandarina.png" 
},
{
  id: 125,
  marca: "Fredinno",
  nombre: "Paletas de Agua Freshkita Mora",
  tipo: "Paleta",
  precio: 2700,
 
},
{
  id: 126,
  marca: "Fredinno",
  nombre: "Paletas de Agua Freshkita Cereza",
  tipo: "Paleta",
  precio: 2700,
  imagen: "/helados/fredinno/paletas-de-agua-freshkita-cereza.png" 
},
{
  id: 127,
  marca: "Fredinno",
  nombre: "Paletas de Agua Freshkita Limón",
  tipo: "Paleta",
  precio: 2700,
  imagen: "/helados/fredinno/paletas-de-agua-freshkita-limon.png" 
},
{
  id: 128,
  marca: "Fredinno",
  nombre: "Paleta La Cremosa",
  tipo: "Paleta",
  precio: 7000,
  imagen: "/helados/fredinno/paleta-la-cremosa.png" 
},
{
  id: 129,
  marca: "Fredinno",
  nombre: "Postre Rollo de Helado Vainilla",
  tipo: "Postre",
  precio: 78000,
  imagen: "/helados/fredinno/postre-rollo-helado-vainilla.png" 
},
{
  id: 130,
  marca: "Fredinno",
  nombre: "Postre Rollo de Helado Fresa",
  tipo: "Postre",
  precio: 78000,
  
},
{
  id: 131,
  marca: "Fredinno",
  nombre: "Fredivasos Fresa Vainilla",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helados/fredinno/fredivasos-fresa-vainilla.png" 
},
{
  id: 132,
  marca: "Fredinno",
  nombre: "Fredivasos Frutos Rojos",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helado/fredinno/fredivasos-frutos-rojos.png"
},
{
  id: 133,
  marca: "Fredinno",
  nombre: "Fredivasos Ron Pasas",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helado/fredinno/fredivasos-ron-pasas.png"
},
{
  id: 134,
  marca: "Fredinno",
  nombre: "Fredivasos Chicle Uva",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helado/fredinno/fredivasos-chicle-uva.png"
},
{
  id: 135,
  marca: "Fredinno",
  nombre: "Fredivasos Tres Leches",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helado/fredinno/fredivasos-tres-leches.png"
},
{
  id: 136,
  marca: "Fredinno",
  nombre: "Fredivasos Chocolate Vainilla",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helado/fredinno/fredivasos-chocolate-vainilla.png"
},
{
  id: 137,
  marca: "Fredinno",
  nombre: "Fredivasos Veteado de Mora",
  tipo: "Vaso",
  precio: 4500,
  imagen: "/helados/fredinno/fredivasos-veteado-de-mora.png" 
},
{
  id: 138,
  marca: "Fredinno",
  nombre: "Fredivaso Fresa Vainilla",
  tipo: "Vaso",
  precio: 6900,
  imagen: "/helados/fredinno/fredivaso-fresa-vainilla.png" 
},
{
  id: 139,
  marca: "Fredinno",
  nombre: "Fredivaso Frutos Rojos",
  tipo: "Vaso",
  precio: 6900,
 
},
{
  id: 140,
  marca: "Fredinno",
  nombre: "Fredivaso Ron Pasas",
  tipo: "Vaso",
  precio: 6900,
  imagen: "/helados/fredinno/fredivaso-ron-pasas.png" 
},
{
  id: 141,
  marca: "Fredinno",
  nombre: "Fredivaso Chicle Uva",
  tipo: "Vaso",
  precio: 6900,
  imagen: "/helados/fredinno/fredivaso-chicle-uva.png" 
},
{
  id: 142,
  marca: "Fredinno",
  nombre: "Fredivaso Tres Leches",
  tipo: "Vaso",
  precio: 6900,
  
},
{
  id: 143,
  marca: "Fredinno",
  nombre: "Fredivaso Chocolate Vainilla",
  tipo: "Vaso",
  precio: 6900,
  imagen: "/helados/fredinno/fredivaso-chocolate-vainilla.png" 
},
{
  id: 144,
  marca: "Fredinno",
  nombre: "Fredivaso Veteado de Mora",
  tipo: "Vaso",
  precio: 6900,
  imagen: "/helados/fredinno/fredivaso-veteado-de-mora.png" 
},
{
  id: 145,
  marca: "Fredinno",
  nombre: "Fredivaso Lulo Maracuyá",
  tipo: "Vaso",
  precio: 6900,
 
},
{
  id: 146,
  marca: "Fredinno",
  nombre: "Fredivaso Vainilla Chips",
  tipo: "Vaso",
  precio: 6900,
 
},

{
  id: 147,
  marca: "Colombina",
  nombre: "Nucita",
  tipo: "Paleta",
  precio: 3500,
  imagen: "/helados/colombina/nucita.png"
},
{
  id: 148,
  marca: "Colombina",
  nombre: "Zombie Halloween",
  tipo: "Paleta",
  precio: 4000,
  imagen: "/helados/colombina/zombie-halloween.png"
},
{
  id: 149,
  marca: "Colombina",
  nombre: "Bon Bon Bum",
  tipo: "Paleta",
  precio: 3500,
  imagen: "/helados/colombina/bon-bon-bum.png"
},
{
  id: 150,
  marca: "Colombina",
  nombre: "Snake",
  tipo: "Paleta",
  precio: 3500,
  imagen: "/helados/colombina/snake.png"
},
{
  id: 151,
  marca: "Colombina",
  nombre: "Chupileta Lengua",
  tipo: "Paleta",
  precio: 3500,
  imagen: "/helados/colombina/chupileta-lengua.png"
},
{
  id: 152,
  marca: "Colombina",
  nombre: "Fruly Limón",
  tipo: "Paleta",
  precio: 2700,
  imagen: "/helados/colombina/fruly-limon.png"
},
{
  id: 153,
  marca: "Colombina",
  nombre: "Fruly Fresa",
  tipo: "Paleta",
  precio: 2700,
  imagen: "/helados/colombina/fruly-fresa.png"
},
{
  id: 154,
  marca: "Colombina",
  nombre: "Tentazione Cookies and Cream",
  tipo: "Paleta",
  precio: 7000,
  imagen: "/helados/colombina/tentazione-cookies-and-cream.png"
},
{
  id: 155,
  marca: "Colombina",
  nombre: "Tentazione Frutos Rojos",
  tipo: "Paleta",
  precio: 7000,
  imagen: "/helados/colombina/tentazione-frutos-rojos.png"
},
{
  id: 156,
  marca: "Colombina",
  nombre: "Trozos de Fruta",
  tipo: "Paleta",
  precio: 4500,
  imagen: "/helados/colombina/trozos-de-fruta.png"
},
{
  id: 157,
  marca: "Colombina",
  nombre: "Artesanal Frutos Rojos",
  tipo: "Paleta",
  precio: 4300,
  imagen: "/helados/colombina/artesanal-frutos-rojos.png"
},
{
  id: 158,
  marca: "Colombina",
  nombre: "Artesanal Maracuyá",
  tipo: "Paleta",
  precio: 4300,
  imagen: "/helados/colombina/artesanal-maracuya.png"
},
{
  id: 159,
  marca: "Colombina",
  nombre: "Casero Coco",
  tipo: "Paleta",
  precio: 3000,
  imagen: "/helados/colombina/casero-coco.png"
},
{
  id: 160,
  marca: "Colombina",
  nombre: "Casero Mora",
  tipo: "Paleta",
  precio: 3000,
  imagen: "/helados/colombina/casero-mora.png"
},
{
  id: 161,
  marca: "Colombina",
  nombre: "Chocobreak Megaball",
  tipo: "Paleta",
  precio: 5500,
  imagen: "/helados/colombina/chocobreak-megaball.png"
},
{
  id: 162,
  marca: "Colombina",
  nombre: "Chocobreak Cookies",
  tipo: "Paleta",
  precio: 5500,
  imagen: "/helados/colombina/chocobreak-cookies.png"
},
{
  id: 163,
  marca: "Colombina",
  nombre: "Mega Tosty",
  tipo: "Cono",
  precio: 4900,
  imagen: "/helados/colombina/mega-tosty.png"
},
{
  id: 164,
  marca: "Colombina",
  nombre: "Mega Maní",
  tipo: "Cono",
  precio: 4900,
  imagen: "/helados/colombina/mega-mani.png"
},
{
  id: 165,
  marca: "Colombina",
  nombre: "Nucita Cono",
  tipo: "Cono",
  precio: 4300,
  imagen: "/helados/colombina/nucita-cono.png"
},
{
  id: 166,
  marca: "Colombina",
  nombre: "Robin Hood Tres Leches con Arequipe",
  tipo: "Cono",
  precio: 4300,
  imagen: "/helados/colombina/robin-hood-tres-leches-arequipe.png"
},
{
  id: 167,
  marca: "Colombina",
  nombre: "Twist Chocolate y Vainilla",
  tipo: "Cono",
  precio: 3500,
  imagen: "/helados/colombina/twist-chocolate-vainilla.png"
},
{
  id: 168,
  marca: "Colombina",
  nombre: "Robin Hood Vainilla",
  tipo: "Cono",
  precio: 4300,
  imagen: "/helados/colombina/robin-hood-vainilla.png"
},
{
  id: 169,
  marca: "Colombina",
  nombre: "Platillo Cookies and Cream",
  tipo: "Platillo",
  precio: 4500,
  imagen: "/helados/colombina/platillo-cookies-and-cream.png"
},
{
  id: 170,
  marca: "Colombina",
  nombre: "Platillo Frutos Rojos",
  tipo: "Platillo",
  precio: 4500,
  imagen: "/helados/colombina/platillo-frutos-rojos.png"
},
{
  id: 171,
  marca: "Colombina",
  nombre: "Platillo Vainilla con Galleta Negra",
  tipo: "Platillo",
  precio: 5000,
  imagen: "/helados/colombina/platillo-vainilla-galleta-negra.png"
},
{
  id: 172,
  marca: "Colombina",
  nombre: "Platillo Nucita",
  tipo: "Platillo",
  precio: 3000,
  imagen: "/helados/colombina/platillo-nucita.png"
},
{
  id: 173,
  marca: "Colombina",
  nombre: "Platillo Muuu",
  tipo: "Platillo",
  precio: 3000,
  imagen: "/helados/colombina/platillo-muuu.png"
},
{
  id: 174,
  marca: "Colombina",
  nombre: "Sundae Bon Bon Bum",
  tipo: "Vaso",
  precio: 6000,
  imagen: "/helados/colombina/sundae-bon-bon-bum.png"
},
{
  id: 175,
  marca: "Colombina",
  nombre: "Sundae Frutos Rojos",
  tipo: "Vaso",
  precio: 6000,
  imagen: "/helados/colombina/sundae-frutos-rojos.png"
},
{
  id: 176,
  marca: "Colombina",
  nombre: "Muuu Vainilla",
  tipo: "Vaso",
  precio: 3500,
  imagen: "/helados/colombina/muuu-vainilla.png"
},
{
  id: 177,
  marca: "Colombina",
  nombre: "Muuu Fresa",
  tipo: "Vaso",
  precio: 3500,
  imagen: "/helados/colombina/muuu-fresa.png"
},
{
  id: 178,
  marca: "Colombina",
  nombre: "Nucita Litro",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colombina/nucita-litro.png"
},
{
  id: 179,
  marca: "Colombina",
  nombre: "Coffee Delight",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colombina/coffee-delight.png"
},
{
  id: 180,
  marca: "Colombina",
  nombre: "Frutos Rojos",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colombina/frutos-rojos.png"
},
{
  id: 181,
  marca: "Colombina",
  nombre: "Frutos del Bosque",
  tipo: "Postre",
  precio: 55000,
  imagen: "/helados/colombina/frutos-del-bosque.png"
},
{
  id: 182,
  marca: "Colombina",
  nombre: "Torta Frutos del Bosque",
  tipo: "Postre",
  precio: 61900,
  imagen: "/helados/colombina/torta-frutos-del-bosque.png"
},
{
  id: 183,
  marca: "Colombina",
  nombre: "Torta Maracuyá",
  tipo: "Postre",
  precio: 61900,
  imagen: "/helados/colombina/torta-maracuya.png"
},
{
  id: 184,
  marca: "Colombina",
  nombre: "Torta Cheesecake con Agras",
  tipo: "Postre",
  precio: 61900,
  imagen: "/helados/colombina/torta-cheesecake-agras.png"
},
{
  id: 185,
  marca: "Colombina",
  nombre: "Torta Pistachos",
  tipo: "Postre",
  precio: 61900,
  imagen: "/helados/colombina/torta-pistachos.png"
},
{
  id: 186,
  marca: "Colanta",
  nombre: "Helados Fresa",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-fresa.png"
},
{
  id: 187,
  marca: "Colanta",
  nombre: "Helados con Veteado de Mora",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-veteado-mora.png"
},
{
  id: 188,
  marca: "Colanta",
  nombre: "Helados con Veteado de Caramelo",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-veteado-caramelo.png"
},
{
  id: 189,
  marca: "Colanta",
  nombre: "Helados Ron con Pasas",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-ron-con-pasas.png"
},
{
  id: 190,
  marca: "Colanta",
  nombre: "Helados Brownie",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-brownie.png"
},
{
  id: 191,
  marca: "Colanta",
  nombre: "Helados Vainilla Chips",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-vainilla-chips.png"
},
{
  id: 192,
  marca: "Colanta",
  nombre: "Helados Chocolate",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-chocolate.png"
},
{
  id: 193,
  marca: "Colanta",
  nombre: "Helados de Frutos Amarillos",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-frutos-amarillos.png"
},
{
  id: 194,
  marca: "Colanta",
  nombre: "Helados Vainilla",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-vainilla.png"
},
{
  id: 195,
  marca: "Colanta",
  nombre: "Helados Tres Leches",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-tres-leches.png"
},
{
  id: 196,
  marca: "Colanta",
  nombre: "Helados Chicle con Oka Loka",
  tipo: "Vaso",
  precio: 25000,
  imagen: "/helados/colanta/helados-chicle-oka-loka.png"
},
{
    id: 197,
    marca: "Provocación",
    nombre: "Helado Canino Mango",
    tipo: "Perros",
    precio: 5000,
    imagen: "/perros/mango.png"
  },
  {
    id: 198,
    marca: "Provocación",
    nombre: "Helado Canino Salpicón",
    tipo: "Perros",
    precio: 5000,
    imagen: "/perros/salpicon.png"
  },
  {
    id: 199,
    marca: "Provocación",
    nombre: "Helado Canino Zanahoria",
    tipo: "Perros",
    precio: 5000,
    imagen: "/perros/zanahoria.png"
  },
];
