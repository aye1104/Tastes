/**
 * data.js — Datos simulados de SaborCerca
 * 50 recetas internacionales organizadas por tipo de clima
 */

const RECETAS = [

  /* =============================================
     ❄️  CLIMA FRÍO
  ============================================= */
  {
    id: 1,
    nombre: "Borscht",
    origen: "Rusia / Ucrania",
    clima: "frio",
    tiempo: 75,
    porciones: 6,
    dificultad: "Media",
    emoji: "🍲",
    imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
    descripcion: "Sopa de remolacha, repollo y carne de res del Este europeo. Su color rojo intenso y su sabor profundo la convierten en el abrazo perfecto para el invierno eslavo. Se sirve con crema agria y eneldo fresco.",
    ingredientes: [
      "500 g de carne de res (falda o pecho)",
      "3 remolachas medianas",
      "1/4 de repollo mediano",
      "3 papas medianas",
      "2 zanahorias",
      "1 cebolla grande",
      "3 dientes de ajo",
      "2 tomates maduros",
      "2 cdas de pasta de tomate",
      "2 cdas de vinagre de manzana",
      "Crema agria para servir",
      "Eneldo fresco, sal, pimienta y laurel"
    ],
    pasos: [
      "Hervir la carne en 2 litros de agua con sal y laurel durante 60 minutos. Retirar, desmenuzar y reservar el caldo.",
      "Rallar las remolachas y saltear 10 minutos en aceite con el vinagre y una pizca de azúcar.",
      "En el caldo caliente, agregar las papas en cubos y las zanahorias en rodajas.",
      "Añadir la cebolla y el ajo picados, los tomates triturados y la pasta de tomate.",
      "Incorporar el repollo en juliana y cocinar 15 minutos.",
      "Agregar las remolachas salteadas y la carne desmenuzada. Ajustar sal y pimienta.",
      "Servir caliente con una cucharada generosa de crema agria y eneldo fresco picado."
    ]
  },
  {
    id: 2,
    nombre: "Fondue de queso",
    origen: "Suiza",
    clima: "frio",
    tiempo: 25,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🧀",
    imagen: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&h=400&fit=crop",
    descripcion: "Gruyère y emmental derretidos con vino blanco y kirsch en un caquelon de cerámica. El ritual gastronómico más cálido y social de los Alpes suizos, perfecto para compartir en noches de invierno.",
    ingredientes: [
      "300 g de queso gruyère rallado",
      "300 g de queso emmental rallado",
      "300 ml de vino blanco seco",
      "1 diente de ajo",
      "2 cdas de kirsch (aguardiente de cereza)",
      "1 cda de maicena",
      "Nuez moscada y pimienta blanca",
      "Pan baguette en cubos para mojar"
    ],
    pasos: [
      "Frotar el interior del caquelon con el ajo cortado al medio.",
      "Calentar el vino blanco a fuego medio hasta que esté caliente pero sin hervir.",
      "Disolver la maicena en el kirsch y reservar.",
      "Agregar los quesos rallados al vino de a poco, revolviendo constantemente en movimientos de 8.",
      "Cuando el queso esté completamente fundido, añadir la mezcla de kirsch con maicena.",
      "Condimentar con nuez moscada y pimienta blanca. La fondue debe quedar sedosa y uniforme.",
      "Servir sobre el mechero de alcohol y mojar el pan con movimiento circular constante."
    ]
  },
  {
    id: 3,
    nombre: "Olla podrida",
    origen: "España",
    clima: "frio",
    tiempo: 120,
    porciones: 6,
    dificultad: "Media",
    emoji: "🫕",
    imagen: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop",
    descripcion: "El cocido más antiguo de España: garbanzos, morcilla, chorizo, tocino y carnes de cerdo cocinados a fuego lento. Un plato contundente que alimentó a reyes y campesinos por igual durante siglos.",
    ingredientes: [
      "400 g de garbanzos (remojados la noche anterior)",
      "300 g de costilla de cerdo",
      "200 g de morcilla",
      "150 g de chorizo",
      "150 g de tocino",
      "1 cebolla, 3 dientes de ajo",
      "2 zanahorias, 1 pimiento rojo",
      "Pimentón ahumado, sal y laurel"
    ],
    pasos: [
      "Poner los garbanzos en agua fría junto a la carne de cerdo y el tocino. Llevar a hervor.",
      "Espumar el caldo y agregar la cebolla, el ajo, las zanahorias y el pimiento.",
      "Condimentar con pimentón ahumado, laurel y sal.",
      "Cocinar a fuego bajo 1 hora y media, agregando agua si fuera necesario.",
      "Incorporar el chorizo y la morcilla. Cocinar 30 minutos más.",
      "Verificar que los garbanzos estén tiernos y ajustar la sazón.",
      "Servir en cazuela de barro bien caliente con el caldo por encima."
    ]
  },
  {
    id: 4,
    nombre: "Ramen Tonkotsu",
    origen: "Japón",
    clima: "frio",
    tiempo: 180,
    porciones: 4,
    dificultad: "Difícil",
    emoji: "🍜",
    imagen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
    descripcion: "Caldo lechoso de hueso de cerdo cocido por horas, fideos ramen, chashu de panceta marinada, huevo y alga nori. El tonkotsu de Fukuoka es considerado el ramen más poderoso e icónico de Japón.",
    ingredientes: [
      "1 kg de huesos de cerdo (rodilla o columna)",
      "400 g de panceta de cerdo (para chashu)",
      "4 porciones de fideos ramen frescos",
      "4 huevos",
      "4 cdas de salsa de soja",
      "2 cdas de mirin, 1 cda de sake",
      "Alga nori, cebolla de verdeo y maíz para servir",
      "Sal, jengibre y ajo"
    ],
    pasos: [
      "Blanquear los huesos en agua hirviente 10 minutos. Enjuagar bien y limpiar.",
      "Cocinar los huesos en abundante agua a hervor fuerte durante 3 horas. El caldo debe quedar blanco y cremoso.",
      "Preparar el chashu: enrollar la panceta, bridarla y cocinarla en salsa de soja, mirin y sake 45 minutos a fuego suave.",
      "Marinar los huevos duros en el líquido del chashu al menos 4 horas.",
      "Colar el caldo de huesos y sazonar con sal.",
      "Cocinar los fideos según las instrucciones del paquete.",
      "Servir los fideos en el caldo caliente con rodajas de chashu, medio huevo, nori y cebolla de verdeo."
    ]
  },
  {
    id: 5,
    nombre: "Pho Bo",
    origen: "Vietnam",
    clima: "frio",
    tiempo: 180,
    porciones: 4,
    dificultad: "Media",
    emoji: "🍲",
    imagen: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop",
    descripcion: "El caldo de res más aromático del mundo: huesos cocidos por horas con canela, anís estrellado y jengibre tostado. Se sirve con fideos de arroz, cortes de carne y hierbas frescas al gusto.",
    ingredientes: [
      "1 kg de huesos de res",
      "500 g de falda de res",
      "400 g de fideos de arroz (bánh phở)",
      "3 cebollas (para tostar), 1 trozo de jengibre",
      "3 anís estrellado, 1 rama de canela, 3 clavos",
      "2 cdas de salsa de pescado",
      "Brotes de soja, albahaca tailandesa y culantro fresco",
      "Chile fresco, limón, hoisin y sriracha para servir"
    ],
    pasos: [
      "Tostar al fuego directo la cebolla y el jengibre hasta que estén chamuscados por fuera.",
      "Blanquear los huesos 5 minutos y enjuagar.",
      "Cocinar los huesos en 3 litros de agua con las especias, la cebolla y el jengibre tostados durante 2-3 horas.",
      "Agregar la falda entera y cocinar 45 minutos más. Retirar y filetear.",
      "Colar el caldo y condimentar con salsa de pescado y sal.",
      "Remojar y escurrir los fideos según el paquete. Distribuir en bowls.",
      "Verter el caldo hirviente sobre los fideos y la carne. Servir con hierbas y condimentos al costado."
    ]
  },
  {
    id: 6,
    nombre: "Goulash húngaro",
    origen: "Hungría",
    clima: "frio",
    tiempo: 90,
    porciones: 4,
    dificultad: "Media",
    emoji: "🥩",
    imagen: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=400&fit=crop",
    descripcion: "Estofado de res con pimentón húngaro dulce y picante, cebolla caramelizada y papas. El guiso nacional de Hungría que nació como comida de pastores nómadas en la gran llanura panónica.",
    ingredientes: [
      "800 g de carne de res en cubos",
      "3 cebollas grandes",
      "3 cdas de pimentón dulce húngaro",
      "1 cda de pimentón picante",
      "3 papas medianas en cubos",
      "2 tomates maduros, 2 dientes de ajo",
      "1 pimiento verde",
      "1 taza de caldo de res",
      "Aceite, sal y crema agria para servir"
    ],
    pasos: [
      "Saltear la cebolla en aceite a fuego bajo durante 15 minutos hasta que esté muy tierna.",
      "Retirar del fuego, agregar el pimentón y revolver rápidamente.",
      "Incorporar la carne en cubos y el ajo. Volver al fuego y dorar.",
      "Agregar los tomates, el pimiento, el caldo y agua hasta cubrir.",
      "Cocinar tapado a fuego bajo durante 1 hora.",
      "Incorporar las papas en cubos y cocinar 25 minutos más.",
      "Ajustar la sal y servir con crema agria y pan rústico."
    ]
  },
  {
    id: 7,
    nombre: "Cassoulet",
    origen: "Francia",
    clima: "frio",
    tiempo: 180,
    porciones: 6,
    dificultad: "Difícil",
    emoji: "🫘",
    imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop",
    descripcion: "El guiso más opulento del sur de Francia: alubias blancas, confit de pato, chorizo de Toulouse y tocino bajo una costra de pan rallado dorado. Tres ciudades francesas se disputan su autoría.",
    ingredientes: [
      "600 g de alubias blancas remojadas",
      "4 muslos de pato confitados",
      "300 g de chorizo de Toulouse",
      "200 g de tocino en lardones",
      "1 cebolla, 4 dientes de ajo",
      "2 tomates pelados",
      "Bouquet garni (tomillo, laurel, perejil)",
      "1 taza de pan rallado"
    ],
    pasos: [
      "Cocinar las alubias en agua fría durante 45 minutos. Escurrir y reservar.",
      "Dorar el tocino y el chorizo en una cazuela de barro. Retirar.",
      "Dorar el pato por el lado de la piel hasta que esté crujiente. Retirar.",
      "Saltear la cebolla y el ajo en la grasa del pato. Agregar los tomates.",
      "Incorporar las alubias, las carnes y el bouquet garni. Cubrir con agua.",
      "Espolvorear pan rallado generoso y hornear a 160 °C durante 1 hora, rompiendo la costra cada 20 min.",
      "Servir directamente desde la cazuela de barro muy caliente."
    ]
  },
  {
    id: 8,
    nombre: "Pasty Cornish",
    origen: "Inglaterra",
    clima: "frio",
    tiempo: 65,
    porciones: 4,
    dificultad: "Media",
    emoji: "🥧",
    imagen: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=600&h=400&fit=crop",
    descripcion: "La empanada de los mineros de Cornualles: masa doblada en forma de D, rellena de carne de res, nabo, papa y cebolla. Era el almuerzo que los mineros llevaban al interior de las minas.",
    ingredientes: [
      "400 g de harina, 200 g de manteca fría, sal, agua fría",
      "300 g de falda de res muy picada",
      "2 papas en cubos pequeños",
      "1 nabo en cubos pequeños",
      "1 cebolla picada",
      "Sal y pimienta negra abundante",
      "1 huevo para pintar"
    ],
    pasos: [
      "Mezclar harina, sal y manteca fría hasta obtener una textura arenosa. Agregar agua fría y unir. Reposar 30 min.",
      "Mezclar la carne, papa, nabo y cebolla. Sazonar generosamente con sal y pimienta.",
      "Dividir la masa en 4 discos de 25 cm.",
      "Colocar el relleno en una mitad de cada disco sin llegar al borde.",
      "Plegar la masa y sellar con un repulgue firme.",
      "Pintar con huevo batido y hacer un pequeño corte en el centro para el vapor.",
      "Hornear a 200 °C durante 45 minutos hasta dorar."
    ]
  },
  {
    id: 9,
    nombre: "Khachapuri",
    origen: "Georgia",
    clima: "frio",
    tiempo: 90,
    porciones: 4,
    dificultad: "Media",
    emoji: "🫓",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    descripcion: "Pan con forma de barco, relleno de queso suluguni fundido con un huevo y manteca en el centro. El plato más representativo de Georgia: se come mezclando el huevo con el queso y mojando los trozos de masa.",
    ingredientes: [
      "500 g de harina, 7 g levadura seca, 1 taza leche tibia, 1 huevo, sal",
      "400 g de queso suluguni o mozzarella rallado",
      "200 g de queso feta o ricota",
      "2 huevos (uno para el barco, uno para pintar)",
      "4 cdas de manteca",
      "Sal y pimienta"
    ],
    pasos: [
      "Disolver la levadura en leche tibia. Unir con harina, huevo y sal. Amasar 10 minutos y levar 1 hora.",
      "Mezclar los quesos con sal hasta obtener un relleno homogéneo.",
      "Dividir la masa en 2 porciones. Estirar cada una en óvalo alargado.",
      "Colocar el relleno en el centro, enrollar los bordes formando la forma de barco y pinzar los extremos.",
      "Pintar los bordes con huevo y hornear a 220 °C durante 20 minutos.",
      "Retirar del horno, hacer un hueco en el queso fundido y poner un huevo crudo y una porción de manteca.",
      "Volver al horno 3-4 minutos. Servir de inmediato mezclando el huevo con el queso."
    ]
  },
  {
    id: 10,
    nombre: "Tagine de cordero",
    origen: "Marruecos",
    clima: "frio",
    tiempo: 120,
    porciones: 4,
    dificultad: "Media",
    emoji: "🍖",
    imagen: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&h=400&fit=crop",
    descripcion: "Cordero cocinado lentamente en el tagine con dátiles, almendras tostadas, miel y un aromático blend de especias marroquíes. La cocción al vapor dentro del cono de barro produce una carne tiernísima.",
    ingredientes: [
      "1 kg de cordero en trozos (paleta o costillas)",
      "150 g de dátiles sin carozo",
      "100 g de almendras peladas",
      "2 cebollas grandes, 3 dientes de ajo",
      "2 cdas de miel",
      "1 cda de ras el hanout",
      "1 cdita de canela, 1 cdita de jengibre en polvo",
      "Cilantro y perejil frescos, sal y aceite de oliva"
    ],
    pasos: [
      "Marinar el cordero en aceite, ajo, ras el hanout, canela, jengibre y sal durante 2 horas.",
      "En el tagine o cazuela, dorar el cordero a fuego fuerte. Retirar.",
      "Saltear la cebolla en juliana hasta que esté bien dorada.",
      "Volver el cordero con la cebolla y agua o caldo hasta la mitad.",
      "Tapar y cocinar a fuego muy bajo durante 1 hora y 15 minutos.",
      "Incorporar los dátiles, la miel y las almendras tostadas. Cocinar 15 minutos más.",
      "Servir con cilantro fresco y cuscús o pan de pita."
    ]
  },

  /* =============================================
     ☀️  CLIMA CÁLIDO / TROPICAL
  ============================================= */
  {
    id: 11,
    nombre: "Ceviche peruano",
    origen: "Perú",
    clima: "calido",
    tiempo: 20,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🐟",
    imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=600&h=400&fit=crop",
    descripcion: "Pescado blanco curado al instante en leche de tigre: jugo de limón, ají limo, cebolla morada y cilantro. La expresión más pura y refrescante de la cocina del Pacífico peruano.",
    ingredientes: [
      "600 g de corvina o lenguado en cubos",
      "1 taza de jugo de limón fresco (10-12 limones)",
      "1 ají limo o ají amarillo picado fino",
      "1 cebolla morada en juliana",
      "Cilantro fresco picado",
      "1 diente de ajo rallado",
      "Sal y pimienta blanca",
      "Choclo desgranado y camote para acompañar"
    ],
    pasos: [
      "Cortar el pescado en cubos de 2 cm y reservar frío.",
      "Mezclar el jugo de limón con el ajo rallado, el ají picado y sal. Este es la 'leche de tigre'.",
      "Poner el pescado en un bowl frío y verter la leche de tigre. Mezclar rápidamente.",
      "Agregar la cebolla morada y el cilantro. Mezclar y probar la sal.",
      "El ceviche debe estar listo en 3-5 minutos: el limón cuece el exterior pero el interior queda cremoso.",
      "Servir inmediatamente con choclo y camote sancochado."
    ]
  },
  {
    id: 12,
    nombre: "Som Tam",
    origen: "Tailandia",
    clima: "calido",
    tiempo: 15,
    porciones: 2,
    dificultad: "Fácil",
    emoji: "🥗",
    imagen: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&h=400&fit=crop",
    descripcion: "Ensalada de papaya verde cruda machacada en mortero con maní, tomates cherry, chile y limón. Vibrante, picante y refrescante: el sabor más adictivo del Sudeste Asiático.",
    ingredientes: [
      "1 papaya verde mediana rallada en juliana",
      "2 tomates cherry",
      "50 g de maní tostado",
      "2-4 chiles tailandeses",
      "3 dientes de ajo",
      "2 cdas de salsa de pescado",
      "2 cdas de jugo de limón",
      "1 cda de azúcar de palma",
      "Camarones secos opcionales"
    ],
    pasos: [
      "En un mortero grande, majar los chiles y el ajo.",
      "Agregar los tomates cherry y machacar brevemente para que suelten el jugo.",
      "Incorporar los camarones secos si se usan.",
      "Añadir la papaya rallada y mezclar golpeando suavemente con la mano de mortero.",
      "Condimentar con salsa de pescado, jugo de limón y azúcar de palma.",
      "Ajustar el balance picante-ácido-dulce al gusto.",
      "Agregar el maní tostado y servir de inmediato con arroz pegajoso."
    ]
  },
  {
    id: 13,
    nombre: "Gazpacho",
    origen: "España",
    clima: "calido",
    tiempo: 20,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🍅",
    imagen: "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=600&h=400&fit=crop",
    descripcion: "La sopa fría más refrescante de Andalucía: tomates maduros, pepino, pimiento y ajo triturados con aceite de oliva virgen. Se sirve muy frío como aperitivo en el verano español.",
    ingredientes: [
      "1 kg de tomates maduros rojos",
      "1 pepino mediano pelado",
      "1 pimiento verde",
      "1 diente de ajo",
      "100 ml de aceite de oliva virgen extra",
      "2 cdas de vinagre de jerez",
      "50 g de pan del día anterior remojado en agua",
      "Sal y toppings: brunoise de tomate, pepino y pimiento"
    ],
    pasos: [
      "Cortar los tomates y el pepino en trozos. Reservar un poco de cada uno para la guarnición.",
      "Triturar en licuadora los tomates, pepino, pimiento, ajo y el pan escurrido.",
      "Con la licuadora en marcha, agregar el aceite en hilo fino para emulsionar.",
      "Condimentar con vinagre de jerez y sal. Probar y ajustar.",
      "Colar por un tamiz fino para obtener una textura sedosa.",
      "Refrigerar al menos 2 horas antes de servir.",
      "Servir muy frío con la guarnición de vegetales picados y un hilo de aceite de oliva."
    ]
  },
  {
    id: 14,
    nombre: "Açaí Bowl",
    origen: "Brasil",
    clima: "calido",
    tiempo: 10,
    porciones: 2,
    dificultad: "Fácil",
    emoji: "🫐",
    imagen: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
    descripcion: "Açaí amazónico triturado con banana y leche de coco, cubierto de granola crocante, frutas tropicales y miel. El desayuno más vibrante de la costa brasileña.",
    ingredientes: [
      "400 g de pulpa de açaí congelada",
      "1 banana madura congelada",
      "100 ml de leche de coco",
      "2 cdas de miel o agave",
      "Granola crocante",
      "Frutillas, banana fresca y mango para decorar",
      "Semillas de chía y coco rallado"
    ],
    pasos: [
      "Procesar la pulpa de açaí congelada con la banana y la leche de coco.",
      "Procesar hasta obtener una consistencia espesa tipo sorbete. No debe quedar líquido.",
      "Endulzar con miel al gusto.",
      "Distribuir en 2 bowls.",
      "Cubrir con una generosa capa de granola.",
      "Decorar con las frutas frescas cortadas, las semillas de chía y el coco rallado.",
      "Servir inmediatamente antes de que se derrita."
    ]
  },
  {
    id: 15,
    nombre: "Larb",
    origen: "Laos / Tailandia",
    clima: "calido",
    tiempo: 20,
    porciones: 2,
    dificultad: "Fácil",
    emoji: "🥩",
    imagen: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
    descripcion: "Ensalada de carne molida salteada con hierbas frescas, chile, jugo de lima y arroz tostado molido. El plato nacional de Laos: intenso, aromático y refrescante al mismo tiempo.",
    ingredientes: [
      "400 g de carne de cerdo o pollo molida",
      "Jugo de 3 limas",
      "3 cdas de salsa de pescado",
      "2 cdas de arroz crudo para tostar y moler",
      "3 chiles tailandeses secos",
      "1 tallo de hierba limón picado fino",
      "Menta fresca y cilantro abundantes",
      "Cebolla de verdeo y hojas de lechuga para servir"
    ],
    pasos: [
      "Tostar el arroz crudo en sartén seca hasta dorarlo. Moler en mortero hasta obtener polvo grueso.",
      "Tostar los chiles secos y triturar.",
      "Saltear la carne molida a fuego alto sin aceite hasta que esté bien cocida. Retirar del fuego.",
      "Condimentar la carne caliente con salsa de pescado, jugo de lima y chile.",
      "Agregar la hierba limón, la cebolla de verdeo y el arroz molido.",
      "Incorporar la menta fresca y el cilantro. Mezclar.",
      "Servir en hojas de lechuga como wraps o con arroz pegajoso al costado."
    ]
  },
  {
    id: 16,
    nombre: "Jerk Chicken",
    origen: "Jamaica",
    clima: "calido",
    tiempo: 60,
    porciones: 4,
    dificultad: "Media",
    emoji: "🍗",
    imagen: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop",
    descripcion: "Pollo marinado en pasta de ají scotch bonnet, pimienta de Jamaica y tomillo, cocido a la parrilla. El sabor ahumado, picante y especiado del Caribe en su máxima expresión.",
    ingredientes: [
      "1 pollo cortado en presas",
      "4 chiles scotch bonnet o habanero",
      "1 cda de pimienta de Jamaica (allspice) molida",
      "1 cdita de canela, 1 cdita de nuez moscada",
      "4 dientes de ajo, 3 cebollas de verdeo",
      "2 cdas de salsa de soja, 2 cdas de aceite",
      "Jugo de 2 limas",
      "1 cda de azúcar morena y tomillo fresco"
    ],
    pasos: [
      "Procesar todos los ingredientes de la marinada hasta obtener una pasta.",
      "Hacer cortes profundos en el pollo para que penetre la marinada.",
      "Cubrir el pollo con la pasta de jerk y marinar mínimo 4 horas.",
      "Precalentar la parrilla o plancha a fuego medio-alto.",
      "Cocinar el pollo 15 minutos por lado, tapado si es posible.",
      "Bajar el fuego y cocinar 20 minutos más hasta que esté bien hecho.",
      "Servir con arroz con frijoles y plátano maduro frito."
    ]
  },
  {
    id: 17,
    nombre: "Papaya Salad con Camarones",
    origen: "Camboya",
    clima: "calido",
    tiempo: 20,
    porciones: 2,
    dificultad: "Fácil",
    emoji: "🦐",
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    descripcion: "Papaya verde rallada con camarones frescos, ajo, chile y vinagreta de lima con salsa de pescado. La versión camboyana es más suave que la tailandesa pero igual de refrescante.",
    ingredientes: [
      "1 papaya verde en juliana",
      "200 g de camarones cocidos y pelados",
      "50 g de maní tostado",
      "2 dientes de ajo, 2 chiles frescos",
      "2 cdas de salsa de pescado",
      "3 cdas de jugo de lima",
      "1 cdita de azúcar",
      "Cilantro y hojas de menta"
    ],
    pasos: [
      "Majar el ajo y el chile en mortero.",
      "Mezclar el jugo de lima, la salsa de pescado y el azúcar hasta disolver.",
      "Combinar la pasta de ajo con la vinagreta.",
      "Mezclar la papaya con los camarones y el aderezo.",
      "Agregar el maní tostado, el cilantro y la menta.",
      "Servir frío de inmediato, decorado con más maní y cuñas de lima."
    ]
  },
  {
    id: 18,
    nombre: "Tostones con Guacamole",
    origen: "Caribe / México",
    clima: "calido",
    tiempo: 30,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🍌",
    imagen: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop",
    descripcion: "Rodajas de plátano verde fritas dos veces hasta quedar bien crujientes y doradas, con guacamole fresco. El snack más popular del Caribe hispanohablante.",
    ingredientes: [
      "2 plátanos verdes",
      "Aceite para freír, sal gruesa",
      "Para el guacamole: 2 paltas maduras",
      "Jugo de 1 limón, 1 tomate, 1/2 cebolla",
      "Cilantro fresco, sal y chile"
    ],
    pasos: [
      "Pelar los plátanos y cortar en rodajas de 2,5 cm.",
      "Freír en aceite a 160 °C durante 3 minutos por lado hasta que estén tiernos.",
      "Retirar, escurrir y aplastar cada rodaja con el fondo de un vaso.",
      "Freír nuevamente a 190 °C durante 2-3 minutos hasta que estén dorados y crujientes.",
      "Escurrir sobre papel y salar inmediatamente.",
      "Machacar la palta con limón, sal y chile. Incorporar el tomate, la cebolla y el cilantro picados.",
      "Servir los tostones calientes con el guacamole fresco."
    ]
  },
  {
    id: 19,
    nombre: "Mango Sticky Rice",
    origen: "Tailandia",
    clima: "calido",
    tiempo: 45,
    porciones: 4,
    dificultad: "Media",
    emoji: "🥭",
    imagen: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=400&fit=crop",
    descripcion: "Arroz glutinoso al vapor con crema de coco dulce, servido con rodajas de mango fresco maduro. El postre más amado de Tailandia, especialmente en temporada de mango.",
    ingredientes: [
      "300 g de arroz glutinoso remojado 4 horas",
      "400 ml de leche de coco",
      "3 cdas de azúcar, 1 cdita de sal",
      "2 mangos maduros ataulfo o filipinos",
      "1 cdita de maicena para la salsa de coco"
    ],
    pasos: [
      "Cocer el arroz glutinoso al vapor sobre una vaporera con tela de muselina, 20-25 minutos.",
      "Calentar 300 ml de leche de coco con 2 cdas de azúcar y la sal hasta disolver.",
      "Verter la leche de coco caliente sobre el arroz recién cocido. Mezclar y dejar absorber 20 minutos.",
      "Preparar la salsa: calentar los 100 ml restantes de leche de coco con 1 cda de azúcar y la maicena hasta espesar.",
      "Pelar los mangos y cortar en tajadas.",
      "Servir el arroz tibio con las rodajas de mango y la salsa de coco encima."
    ]
  },
  {
    id: 20,
    nombre: "Poke Bowl",
    origen: "Hawái",
    clima: "calido",
    tiempo: 20,
    porciones: 2,
    dificultad: "Fácil",
    emoji: "🐟",
    imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    descripcion: "Atún fresco marinado en soja y aceite de sésamo sobre arroz de sushi, con edamame, aguacate y pepino. El bowl más fresco y colorido de la gastronomía hawaiana.",
    ingredientes: [
      "400 g de atún grado sashimi en cubos",
      "300 g de arroz de sushi cocido",
      "3 cdas de salsa de soja",
      "1 cda de aceite de sésamo",
      "1 cda de semillas de sésamo",
      "1 aguacate en láminas, 1/2 pepino en rodajas",
      "Edamame cocido, nori y sriracha"
    ],
    pasos: [
      "Mezclar la salsa de soja con el aceite de sésamo y las semillas de sésamo.",
      "Marinar el atún en la salsa durante 10 minutos en la heladera.",
      "Preparar el arroz de sushi tibio.",
      "Distribuir el arroz en los bowls.",
      "Colocar el atún marinado en el centro.",
      "Agregar el aguacate, el pepino y el edamame.",
      "Terminar con tiras de nori, más sésamo y sriracha al gusto."
    ]
  },

  /* =============================================
     🌤️  CLIMA TEMPLADO / MEDITERRÁNEO
  ============================================= */
  {
    id: 21,
    nombre: "Moussaka",
    origen: "Grecia",
    clima: "templado",
    tiempo: 90,
    porciones: 6,
    dificultad: "Media",
    emoji: "🍆",
    imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    descripcion: "Capas de berenjena asada, carne molida con canela y tomate, y una cremosa bechamel gratinada al horno. La lasaña griega que concentra toda la esencia de la cocina mediterránea.",
    ingredientes: [
      "3 berenjenas grandes",
      "500 g de carne molida de res o cordero",
      "1 cebolla, 3 dientes de ajo",
      "400 g de tomates triturados",
      "1 cdita de canela, nuez moscada",
      "Para la bechamel: 50 g manteca, 50 g harina, 500 ml leche, 2 huevos, queso rallado"
    ],
    pasos: [
      "Cortar las berenjenas en rodajas, salar y dejar 30 minutos. Enjuagar y hornear a 200 °C hasta dorar.",
      "Saltear la cebolla y el ajo. Agregar la carne y cocinar hasta dorar.",
      "Incorporar los tomates, canela, sal y pimienta. Cocinar 20 minutos.",
      "Preparar la bechamel: derretir manteca, agregar harina y luego la leche caliente. Incorporar huevos y queso.",
      "En una fuente aceitada, hacer capas: berenjenas, carne, berenjenas y terminar con bechamel.",
      "Espolvorear queso rallado y hornear a 180 °C durante 40 minutos.",
      "Dejar reposar 15 minutos antes de cortar para que asiente bien."
    ]
  },
  {
    id: 22,
    nombre: "Paella Valenciana",
    origen: "España",
    clima: "templado",
    tiempo: 50,
    porciones: 4,
    dificultad: "Media",
    emoji: "🍚",
    imagen: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&h=400&fit=crop",
    descripcion: "Arroz con azafrán, pollo, conejo y judías verdes cocinado en paellera al fuego. La socarrat —la costra dorada del fondo— es el secreto más buscado de este plato valenciano.",
    ingredientes: [
      "400 g de arroz tipo bomba o calasparra",
      "1/2 pollo en trozos, 1/2 conejo en trozos",
      "200 g de judías verdes, 100 g de garrofón",
      "1 tomate maduro rallado",
      "Hebras de azafrán y pimentón dulce",
      "1,2 litros de caldo de pollo caliente",
      "Aceite de oliva, sal y romero"
    ],
    pasos: [
      "Calentar aceite en la paellera. Dorar el pollo y el conejo a fuego fuerte.",
      "Agregar las judías verdes y el garrofón. Saltear 5 minutos.",
      "Incorporar el tomate rallado y el pimentón. Rehogar 2 minutos.",
      "Agregar el arroz y saltear 1 minuto. Verter el caldo caliente con el azafrán disuelto.",
      "Cocinar a fuego alto los primeros 10 minutos, luego bajar 8 minutos más.",
      "Subir el fuego 2 minutos para lograr el socarrat.",
      "Dejar reposar cubierto con papel de aluminio 5 minutos antes de servir."
    ]
  },
  {
    id: 23,
    nombre: "Shakshuka",
    origen: "Medio Oriente",
    clima: "templado",
    tiempo: 25,
    porciones: 2,
    dificultad: "Fácil",
    emoji: "🍳",
    imagen: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop",
    descripcion: "Huevos pochados directamente en una salsa de tomate especiada con comino, pimentón y harissa. Un desayuno israelí y tunecino que se hace en una sola sartén y se lleva directo a la mesa.",
    ingredientes: [
      "4 huevos",
      "400 g de tomates triturados",
      "1 pimiento rojo, 1 cebolla",
      "3 dientes de ajo",
      "1 cdita de comino molido",
      "1 cdita de pimentón ahumado",
      "1 cdita de harissa o chile en polvo",
      "Queso feta y cilantro fresco para servir"
    ],
    pasos: [
      "Saltear la cebolla y el pimiento en aceite hasta ablandar. Agregar el ajo.",
      "Añadir el comino, el pimentón y la harissa. Saltear 1 minuto.",
      "Incorporar los tomates triturados y cocinar 10 minutos hasta que espese.",
      "Hacer 4 huecos en la salsa con una cuchara.",
      "Romper un huevo en cada hueco con cuidado.",
      "Tapar la sartén y cocinar 5-7 minutos: claras cocidas, yemas cremosas.",
      "Terminar con queso feta, cilantro y pan de pita para mojar."
    ]
  },
  {
    id: 24,
    nombre: "Risotto ai Funghi",
    origen: "Italia",
    clima: "templado",
    tiempo: 35,
    porciones: 4,
    dificultad: "Media",
    emoji: "🍄",
    imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop",
    descripcion: "Arroz arborio cremoso con hongos porcini secos y hongos frescos, finalizado con manteca y parmesano. El movimiento constante libera el almidón que da esa textura sedosa única del risotto.",
    ingredientes: [
      "320 g de arroz arborio",
      "30 g de hongos porcini secos",
      "300 g de hongos frescos (portobello o champiñón)",
      "1 cebolla chica, 2 dientes de ajo",
      "150 ml de vino blanco seco",
      "1 litro de caldo de pollo caliente",
      "60 g de manteca fría, 80 g de parmesano rallado",
      "Aceite de oliva, sal, pimienta y perejil"
    ],
    pasos: [
      "Rehidratar los porcini en 300 ml de agua caliente 20 minutos. Colar y reservar el líquido.",
      "Saltear los hongos frescos en aceite a fuego alto hasta dorar. Reservar.",
      "Saltear la cebolla suavemente. Agregar el ajo y el arroz. Tostar 2 minutos.",
      "Incorporar el vino y revolver hasta que se absorba.",
      "Agregar el líquido de los porcini y luego el caldo caliente, cucharón a cucharón, revolviendo siempre.",
      "A los 18 minutos, incorporar todos los hongos. Retirar del fuego.",
      "Mantecár: agregar la manteca fría y el parmesano. Revolver con energía. Servir de inmediato."
    ]
  },
  {
    id: 25,
    nombre: "Bouillabaisse",
    origen: "Francia",
    clima: "templado",
    tiempo: 60,
    porciones: 4,
    dificultad: "Difícil",
    emoji: "🦞",
    imagen: "https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&h=400&fit=crop",
    descripcion: "El guiso de mariscos de Marsella: pescados de roca, mariscos y crustáceos en un caldo de azafrán, hinojo y tomate. Se sirve con pan tostado y rouille, la mayonesa especiada provenzal.",
    ingredientes: [
      "600 g de pescado de roca variado",
      "400 g de mariscos (mejillones, almejas, camarones)",
      "1 bulbo de hinojo, 4 tomates maduros",
      "1 cebolla, 4 dientes de ajo",
      "Hebras de azafrán abundantes",
      "Cáscara de naranja seca, tomillo, laurel",
      "Para la rouille: 1 yema, ajo, azafrán, pimentón y aceite"
    ],
    pasos: [
      "Preparar un caldo con las espinas de pescado, el hinojo, la cebolla y las especias 30 minutos. Colar.",
      "Saltear el ajo y los tomates en aceite de oliva. Agregar el azafrán.",
      "Añadir el caldo colado y llevar a hervor fuerte.",
      "Agregar el pescado más firme primero, luego el más delicado.",
      "Incorporar los mariscos al final y cocinar hasta que abran.",
      "Preparar la rouille: triturar ajo con sal, agregar yema, azafrán, pimentón y aceite en hilo.",
      "Servir el caldo con pan tostado frotado con ajo y la rouille al lado."
    ]
  },
  {
    id: 26,
    nombre: "Falafel con Tzatziki",
    origen: "Levante",
    clima: "templado",
    tiempo: 30,
    porciones: 4,
    dificultad: "Media",
    emoji: "🧆",
    imagen: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop",
    descripcion: "Croquetas de garbanzo con perejil, comino y ajo, fritas hasta quedar crujientes por fuera y tiernas por dentro. Se sirven en pita con tzatziki de pepino y yogur griego.",
    ingredientes: [
      "400 g de garbanzos secos remojados (sin cocinar)",
      "1/2 cebolla, 4 dientes de ajo",
      "Perejil y cilantro frescos abundantes",
      "1 cdita de comino, 1 cdita de cilantro en polvo, bicarbonato",
      "Aceite para freír",
      "Para el tzatziki: 1 taza yogur griego, 1 pepino rallado, ajo, menta y eneldo"
    ],
    pasos: [
      "Procesar los garbanzos remojados (sin cocinar) con la cebolla, el ajo y las hierbas hasta masa gruesa.",
      "Condimentar con las especias, la sal y el bicarbonato. Reposar 30 minutos en heladera.",
      "Preparar el tzatziki: mezclar yogur con pepino bien escurrido, ajo, menta y eneldo. Salar.",
      "Formar bolitas o discos con la masa de garbanzos.",
      "Freír en aceite a 180 °C durante 3-4 minutos hasta dorar bien.",
      "Escurrir sobre papel absorbente.",
      "Servir en pan de pita con tzatziki, lechuga, tomate y pepino."
    ]
  },
  {
    id: 27,
    nombre: "Ratatouille",
    origen: "Francia",
    clima: "templado",
    tiempo: 65,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🫑",
    imagen: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=600&h=400&fit=crop",
    descripcion: "Verduras mediterráneas de temporada —calabacín, berenjena, pimiento y tomate— dispuestas en espiral sobre una salsa provenzal y horneadas lentamente. Arte visual y culinario de Provenza.",
    ingredientes: [
      "2 calabacines, 1 berenjena grande",
      "4 tomates medianos",
      "2 pimientos (rojo y amarillo)",
      "1 cebolla, 4 dientes de ajo",
      "400 g de tomates triturados",
      "Tomillo, romero y laurel frescos",
      "Aceite de oliva, sal y pimienta"
    ],
    pasos: [
      "Saltear la cebolla y el ajo en aceite. Agregar los tomates triturados con el tomillo y laurel. Cocinar 15 minutos.",
      "Extender la salsa en el fondo de una fuente para horno.",
      "Cortar todas las verduras en rodajas finas de 3 mm.",
      "Colocar las rodajas paradas en la fuente, alternando los colores en espiral sobre la salsa.",
      "Condimentar con sal, pimienta, tomillo y un hilo de aceite de oliva.",
      "Cubrir con papel de aluminio y hornear a 175 °C durante 40 minutos.",
      "Retirar el papel y hornear 15 minutos más para dorar las puntas."
    ]
  },
  {
    id: 28,
    nombre: "Spanakopita",
    origen: "Grecia",
    clima: "templado",
    tiempo: 65,
    porciones: 6,
    dificultad: "Media",
    emoji: "🥬",
    imagen: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    descripcion: "Tarta de hojaldre finísimo (filo) rellena de espinaca, queso feta, ricota y eneldo. Crujiente, salada y con ese perfume herbáceo que define la cocina griega de norte a sur.",
    ingredientes: [
      "500 g de espinaca fresca",
      "300 g de queso feta desmenuzado",
      "200 g de ricota, 3 huevos",
      "1 cebolla picada, eneldo fresco abundante",
      "10 hojas de masa filo",
      "100 ml de aceite de oliva o manteca derretida",
      "Sal, pimienta y nuez moscada"
    ],
    pasos: [
      "Saltear la cebolla. Agregar la espinaca y cocinar hasta que reduzca. Escurrir muy bien.",
      "Mezclar la espinaca con el feta, la ricota, los huevos, el eneldo, sal y nuez moscada.",
      "Aceitar una fuente rectangular. Colocar 5 hojas de filo, pincelando cada una con aceite.",
      "Extender el relleno de espinaca de manera uniforme.",
      "Cubrir con las 5 hojas restantes de filo, pincelando cada una con aceite.",
      "Marcar porciones con un cuchillo.",
      "Hornear a 180 °C durante 45 minutos hasta que esté bien dorada y crujiente."
    ]
  },
  {
    id: 29,
    nombre: "Pollo al limón con alcaparras",
    origen: "Italia",
    clima: "templado",
    tiempo: 30,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🍋",
    imagen: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=600&h=400&fit=crop",
    descripcion: "Medallones de pechuga aplastados, enharinados y salteados, terminados en salsa de vino blanco, limón y alcaparras. La sencillez y elegancia italiana: el piccata di pollo.",
    ingredientes: [
      "4 pechugas de pollo",
      "Harina para rebozar",
      "Jugo de 2 limones y rodajas para servir",
      "3 cdas de alcaparras",
      "150 ml de vino blanco seco",
      "150 ml de caldo de pollo",
      "50 g de manteca fría",
      "Aceite de oliva, perejil fresco, sal y pimienta"
    ],
    pasos: [
      "Cortar las pechugas en medallones y aplanarlos con un mazo entre film.",
      "Salar, pimentar y enharinar los medallones. Sacudir el exceso.",
      "Dorar en aceite caliente 2-3 minutos por lado. Retirar y reservar.",
      "En la misma sartén, agregar el vino blanco y raspar el fondo.",
      "Añadir el caldo y el jugo de limón. Reducir 5 minutos.",
      "Incorporar las alcaparras y la manteca fría fuera del fuego. Mover la sartén para emulsionar.",
      "Volver el pollo a la salsa 1 minuto. Servir con perejil y rodajas de limón."
    ]
  },
  {
    id: 30,
    nombre: "Hummus con pita y verduras asadas",
    origen: "Levante",
    clima: "templado",
    tiempo: 20,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🫘",
    imagen: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&h=400&fit=crop",
    descripcion: "Pasta suave de garbanzos con tahini, limón y ajo, decorada con aceite de oliva y pimentón. Acompañado de pita caliente y verduras asadas al horno. El rey de los dips mediterráneos.",
    ingredientes: [
      "400 g de garbanzos cocidos",
      "3 cdas de tahini",
      "Jugo de 2 limones, 2 dientes de ajo",
      "4 cdas de aceite de oliva",
      "Sal, comino, pimentón y perejil para decorar",
      "Pan pita",
      "Verduras variadas para asar (morrón, calabacín, zanahoria)"
    ],
    pasos: [
      "Procesar los garbanzos con el tahini, el jugo de limón y el ajo hasta pasta fina.",
      "Con el procesador en marcha, agregar el aceite y agua helada hasta lograr textura muy suave.",
      "Sazonar con sal y comino. Probar y ajustar el limón.",
      "Cortar las verduras y asar en horno a 200 °C con aceite y sal hasta dorar.",
      "Calentar el pita en el horno o sartén seca.",
      "Extender el hummus en un plato con movimiento circular, haciendo un hueco en el centro.",
      "Verter aceite de oliva, espolvorear pimentón y perejil. Servir con pita y verduras asadas."
    ]
  },

  /* =============================================
     🏜️  CLIMA ÁRIDO / DESÉRTICO
  ============================================= */
  {
    id: 31,
    nombre: "Mandi",
    origen: "Yemen / Arabia",
    clima: "arido",
    tiempo: 180,
    porciones: 6,
    dificultad: "Difícil",
    emoji: "🍖",
    imagen: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&h=400&fit=crop",
    descripcion: "Cordero ahumado cocinado lentamente con especias yemenitas sobre arroz basmati aromático. La técnica del tandoor subterráneo produce una carne tiernísima que se desprende del hueso.",
    ingredientes: [
      "1 pierna de cordero entera (1,5 kg)",
      "500 g de arroz basmati",
      "2 cebollas, 4 dientes de ajo",
      "1 cda de hawayi (comino, coriandro, cardamomo, cúrcuma, pimienta)",
      "1 cdita de azafrán, 3 cdas de ghee",
      "Caldo de cordero",
      "Frutos secos tostados y pasas para servir"
    ],
    pasos: [
      "Marinar el cordero con ajo, hawayi, sal y ghee durante toda la noche.",
      "Dorar el cordero por todos lados en una olla grande.",
      "Agregar agua o caldo hasta cubrir y cocinar 2 horas a fuego muy bajo, tapado.",
      "Retirar el cordero y usar el caldo para cocinar el arroz basmati con azafrán.",
      "En el fondo de la olla, colocar el arroz. Poner el cordero encima.",
      "Tapar herméticamente con aluminio y cocinar a fuego mínimo 30 minutos.",
      "Servir el arroz en una fuente grande con el cordero encima, decorado con frutos secos tostados."
    ]
  },
  {
    id: 32,
    nombre: "Msemen",
    origen: "Marruecos",
    clima: "arido",
    tiempo: 60,
    porciones: 8,
    dificultad: "Media",
    emoji: "🫓",
    imagen: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&h=400&fit=crop",
    descripcion: "Pan plano hojaldrado marroquí hecho con sémola y harina, doblado repetidamente con aceite hasta crear múltiples capas crujientes. Se sirve con miel o mantequilla como desayuno.",
    ingredientes: [
      "300 g de harina",
      "200 g de sémola fina",
      "1 cdita de sal, 1 cdita de azúcar",
      "Agua tibia cantidad necesaria",
      "Aceite de oliva y sémola para trabajar"
    ],
    pasos: [
      "Mezclar harina, sémola, sal y azúcar. Agregar agua tibia de a poco hasta obtener masa suave.",
      "Amasar 10 minutos. Dividir en bolitas del tamaño de una naranja.",
      "Aceitar las manos y la superficie. Estirar cada bolita en disco muy fino.",
      "Doblar los bordes hacia el centro formando un cuadrado. Repetir dos veces más.",
      "Aplanar los cuadrados con los dedos hasta que sean muy finos.",
      "Cocinar en sartén sin aceite a fuego medio, 3-4 minutos por lado.",
      "Servir caliente con miel, mantequilla aromatizada y té de menta."
    ]
  },
  {
    id: 33,
    nombre: "Ful Medames",
    origen: "Egipto",
    clima: "arido",
    tiempo: 30,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🫘",
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    descripcion: "Habas cocidas con comino, limón, ajo y aceite de oliva. El desayuno nacional de Egipto que se prepara desde el tiempo de los faraones, servido con huevo duro y pan de pita.",
    ingredientes: [
      "400 g de habas cocidas o de lata",
      "3 dientes de ajo, jugo de 2 limones",
      "1 cdita de comino molido",
      "3 cdas de aceite de oliva",
      "Sal, pimienta y perejil fresco",
      "Huevos duros y pan de pita para servir",
      "Tomate y pepino en cubos"
    ],
    pasos: [
      "Si usás habas secas, remojar la noche anterior y cocinar 2 horas.",
      "Calentar las habas en una olla con un poco de su líquido de cocción.",
      "Majar levemente las habas con un tenedor, dejando algunas enteras.",
      "Agregar el ajo machacado, el comino y el jugo de limón.",
      "Cocinar a fuego bajo 10 minutos revolviendo.",
      "Salar y verter el aceite de oliva en hilo.",
      "Servir con perejil picado, tomate, pepino en cubos, huevo duro y pan de pita."
    ]
  },
  {
    id: 34,
    nombre: "Biryani de cordero",
    origen: "India / Pakistán",
    clima: "arido",
    tiempo: 120,
    porciones: 6,
    dificultad: "Difícil",
    emoji: "🍛",
    imagen: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",
    descripcion: "Arroz basmati perfumado con azafrán cocinado en capas sobre un estofado de cordero con yogur y especias enteras. El plato más festivo del subcontinente indio.",
    ingredientes: [
      "500 g de cordero en trozos, 400 g de arroz basmati",
      "1 taza de yogur, 2 cebollas grandes",
      "4 dientes de ajo, 1 trozo de jengibre",
      "Cardamomo, clavos, canela y anís estrellado",
      "1 cdita de garam masala, 1 cdita de cúrcuma",
      "Hebras de azafrán en leche caliente",
      "Ghee, cilantro y menta frescos, frutos secos"
    ],
    pasos: [
      "Marinar el cordero en yogur, ajo, jengibre y especias durante 2 horas.",
      "Freír las cebollas en ghee hasta que estén muy doradas y crujientes. Reservar la mitad.",
      "Cocinar el cordero marinado con las cebollas a fuego medio 40 minutos.",
      "Hervir el arroz basmati con las especias enteras hasta 3/4 cocido. Escurrir.",
      "En una olla grande, alternar capas de cordero y arroz.",
      "Verter el azafrán en leche, agregar cilantro, menta y cebolla frita.",
      "Tapar herméticamente y cocinar a fuego mínimo (dum) 30 minutos."
    ]
  },
  {
    id: 35,
    nombre: "Shorba",
    origen: "Irak / Argelia",
    clima: "arido",
    tiempo: 40,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🥣",
    imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop",
    descripcion: "Sopa espesa de lentejas rojas con tomate, cilantro, comino y limón. El plato más reconfortante del norte de África y Medio Oriente, presente en todas las mesas del Ramadán.",
    ingredientes: [
      "300 g de lentejas rojas",
      "2 tomates maduros, 1 cebolla, 3 dientes de ajo",
      "1 cdita de comino, 1 cdita de coriandro",
      "1/2 cdita de cúrcuma",
      "Jugo de 1 limón, cilantro fresco",
      "Aceite de oliva, sal y pimienta"
    ],
    pasos: [
      "Saltear la cebolla y el ajo en aceite hasta que estén dorados.",
      "Agregar las especias y saltear 1 minuto.",
      "Incorporar los tomates picados y cocinar 5 minutos.",
      "Añadir las lentejas lavadas y cubrir con 1,2 litros de agua.",
      "Cocinar a fuego medio 25 minutos hasta que las lentejas estén muy blandas.",
      "Licuar la mitad de la sopa y volver a mezclar para textura semiestructurada.",
      "Condimentar con jugo de limón, sal y servir con cilantro y un hilo de aceite."
    ]
  },
  {
    id: 36,
    nombre: "Kibbeh horneado",
    origen: "Siria / Líbano",
    clima: "arido",
    tiempo: 60,
    porciones: 6,
    dificultad: "Media",
    emoji: "🫓",
    imagen: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop",
    descripcion: "Capas de trigo burgol con carne de cordero especiada, rellenas de un sofrito con piñones y pasas. La preparación levantina más técnica y sabrosa, horneada hasta quedar bien dorada.",
    ingredientes: [
      "300 g de trigo burgol fino, 500 g de carne de cordero molida",
      "1 cebolla grande rallada",
      "1 cdita de canela, 1 cdita de pimienta de Jamaica",
      "Para el relleno: 200 g carne molida extra, 1 cebolla",
      "50 g de piñones, 50 g de pasas",
      "Aceite de oliva, sal y pimienta"
    ],
    pasos: [
      "Remojar el burgol 15 minutos. Escurrir y mezclar con la mitad de la carne, la cebolla y las especias. Procesar.",
      "Para el relleno: dorar la carne restante con la cebolla y los piñones. Agregar las pasas.",
      "Aceitar una fuente. Extender la mitad de la masa de burgol aplastando bien.",
      "Distribuir el relleno de carne por encima.",
      "Cubrir con la masa restante de burgol, aplastando para sellar.",
      "Marcar rombos con un cuchillo y poner un piñón en cada uno.",
      "Verter aceite de oliva generoso y hornear a 180 °C durante 40 minutos hasta dorar."
    ]
  },
  {
    id: 37,
    nombre: "Chapati con Dal",
    origen: "India",
    clima: "arido",
    tiempo: 45,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🫓",
    imagen: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    descripcion: "Pan plano integral sin levadura cocinado en tawa caliente, con lentejas rojas especiadas con cúrcuma, jengibre y tadka de ghee. La comida cotidiana de millones en India.",
    ingredientes: [
      "300 g de harina integral (atta), agua, sal",
      "250 g de lentejas rojas, 1 cebolla",
      "2 tomates, 3 dientes de ajo, 1 trozo jengibre",
      "1 cdita de cúrcuma, comino y garam masala",
      "Para el tadka: ghee, semillas de comino, chiles secos"
    ],
    pasos: [
      "Amasar la harina con agua y sal hasta obtener masa suave. Reposar 30 minutos.",
      "Cocinar las lentejas con agua, cúrcuma y sal 20 minutos hasta que estén blandas.",
      "Saltear la cebolla hasta dorar. Agregar el ajo, jengibre y los tomates. Cocinar 10 minutos.",
      "Incorporar esta base al dal con el garam masala. Cocinar 10 minutos más.",
      "Hacer el tadka: en ghee caliente, dorar las semillas de comino y el chile. Verter sobre el dal.",
      "Dividir la masa en bolitas. Estirar cada una muy fina y cocinar en sartén caliente sin aceite.",
      "Servir el chapati caliente junto al dal humeante."
    ]
  },
  {
    id: 38,
    nombre: "Maqluba",
    origen: "Palestina / Jordania",
    clima: "arido",
    tiempo: 90,
    porciones: 6,
    dificultad: "Media",
    emoji: "🍚",
    imagen: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&h=400&fit=crop",
    descripcion: "Una torta de arroz, pollo y verduras fritas que se voltea al servir revelando capas perfectas. 'Maqluba' significa 'dado vuelta': el momento del volteo es el más emocionante de la cocina árabe.",
    ingredientes: [
      "1 pollo en presas, 400 g de arroz largo",
      "2 berenjenas, 3 tomates",
      "2 papas medianas, 1 coliflor chica",
      "1 cebolla, 4 dientes de ajo",
      "1 cdita de pimienta de Jamaica, canela y cúrcuma",
      "Caldo de pollo, aceite, sal",
      "Yogur y perejil para servir"
    ],
    pasos: [
      "Freír las berenjenas en rodajas y las papas hasta dorar. Reservar.",
      "Dorar el pollo en la olla. Retirar.",
      "Saltear la cebolla y el ajo. Agregar las especias y el caldo. Volver el pollo y cocinar 30 minutos.",
      "Retirar el pollo. En el fondo de la misma olla, colocar los tomates en rodajas.",
      "Hacer capas: papas, berenjenas, coliflor, pollo y finalmente el arroz lavado.",
      "Verter el caldo caliente hasta cubrir el arroz. Tapar y cocinar 30 minutos a fuego bajo.",
      "Apoyar un plato grande sobre la olla y voltear de golpe. Servir con yogur y perejil."
    ]
  },
  {
    id: 39,
    nombre: "Taguella",
    origen: "Tuareg, Sáhara",
    clima: "arido",
    tiempo: 45,
    porciones: 6,
    dificultad: "Media",
    emoji: "🫓",
    imagen: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&h=400&fit=crop",
    descripcion: "El pan del pueblo Tuareg del Sáhara: masa de mijo cocida entre brasas calientes enterrada en la arena. Con costra de ceniza y un interior suave, se sirve con caldo o leche de camello.",
    ingredientes: [
      "500 g de harina de mijo o trigo",
      "1 cdita de sal",
      "Agua tibia cantidad necesaria",
      "Carbones o brasas para cocinar",
      "Leche de cabra o miel para acompañar"
    ],
    pasos: [
      "Mezclar la harina con la sal y el agua tibia hasta obtener una masa firme.",
      "Amasar 10 minutos hasta que la masa sea homogénea.",
      "Dar forma de disco plano y grueso de unos 25 cm de diámetro.",
      "Enterrar el pan entre las brasas calientes.",
      "Cocinar 20-25 minutos, girándolo a la mitad. La corteza quedará oscura.",
      "Retirar y golpear para quitar la ceniza. Cepillar con una rama.",
      "Servir en trozos con leche de cabra y miel."
    ]
  },
  {
    id: 40,
    nombre: "Harira",
    origen: "Marruecos",
    clima: "arido",
    tiempo: 60,
    porciones: 6,
    dificultad: "Media",
    emoji: "🥣",
    imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop",
    descripcion: "La sopa más completa del Magreb: garbanzos, lentejas, tomate, cilantro y limón en un caldo espesado. La sopa del Ramadán que rompe el ayuno cada noche en todo Marruecos.",
    ingredientes: [
      "200 g de lentejas, 200 g de garbanzos cocidos",
      "400 g de tomates triturados",
      "250 g de carne de res en cubos pequeños",
      "1 cebolla, 3 dientes de ajo",
      "1 cdita de jengibre, canela y cúrcuma",
      "Cilantro y perejil frescos abundantes",
      "3 cdas de harina para espesar, jugo de 1 limón"
    ],
    pasos: [
      "Dorar la carne con la cebolla, el ajo y las especias.",
      "Agregar los tomates, el cilantro y el perejil picados. Cocinar 10 minutos.",
      "Incorporar las lentejas y cubrir con 1,5 litros de agua. Cocinar 20 minutos.",
      "Añadir los garbanzos y continuar 10 minutos.",
      "Disolver la harina en agua fría y verter en la sopa revolviendo para espesar.",
      "Cocinar 5 minutos más.",
      "Condimentar con jugo de limón, sal y servir con dátiles."
    ]
  },

  /* =============================================
     🌧️  CLIMA HÚMEDO / LLUVIOSO
  ============================================= */
  {
    id: 41,
    nombre: "Nasi Lemak",
    origen: "Malasia",
    clima: "humedo",
    tiempo: 40,
    porciones: 4,
    dificultad: "Media",
    emoji: "🍚",
    imagen: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop",
    descripcion: "Arroz cocido en leche de coco con pandan, servido con sambal picante, anchoas fritas crujientes, maní y huevo. El desayuno nacional de Malasia, envuelto tradicionalmente en hoja de banana.",
    ingredientes: [
      "400 g de arroz jazmín",
      "400 ml de leche de coco, 2 hojas de pandan",
      "Para el sambal: 10 chiles secos, 5 chalotes, ajo, pasta de camarón, azúcar y tamarindo",
      "100 g de anchoas (ikan bilis) para freír",
      "100 g de maní frito",
      "2 pepinos en rodajas y 4 huevos"
    ],
    pasos: [
      "Lavar el arroz y cocinar con la leche de coco, el pandan y sal.",
      "Para el sambal: procesar los chiles remojados con los chalotes, el ajo y la pasta de camarón.",
      "Freír la pasta de sambal en aceite hasta que se separe. Agregar azúcar y tamarindo.",
      "Cocinar el sambal a fuego bajo 15 minutos hasta espesar.",
      "Freír las anchoas hasta que estén crujientes y doradas.",
      "Freír el maní hasta tostarlo.",
      "Servir el arroz con el sambal, las anchoas, el maní, el pepino y el huevo."
    ]
  },
  {
    id: 42,
    nombre: "Rendang de res",
    origen: "Indonesia",
    clima: "humedo",
    tiempo: 180,
    porciones: 6,
    dificultad: "Difícil",
    emoji: "🥩",
    imagen: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&h=400&fit=crop",
    descripcion: "Carne de res estofada durante horas en leche de coco y pasta de especias hasta que el líquido se evapora y la carne se carameliza. Elegido el plato más sabroso del mundo por CNN Travel.",
    ingredientes: [
      "1 kg de carne de res en cubos grandes",
      "600 ml de leche de coco",
      "Para la pasta: 8 chiles secos, 8 chalotes, 5 dientes ajo, jengibre, galangal, hierba limón",
      "4 hojas de lima kaffir",
      "1 palo de canela, 3 anís estrellado",
      "1 cda de cúrcuma, sal"
    ],
    pasos: [
      "Procesar todos los ingredientes de la pasta hasta obtener una mezcla homogénea.",
      "En un wok grande, combinar la pasta, la leche de coco, las hojas de lima, la canela y el anís.",
      "Agregar la carne y llevar a hervor a fuego medio.",
      "Cocinar sin tapar durante 1,5-2 horas, revolviendo cada 15 minutos.",
      "Cuando la leche de coco se evapore casi por completo, reducir el fuego al mínimo.",
      "Continuar cocinando 30-45 minutos más hasta que la carne esté caramelizada y oscura.",
      "Servir con arroz blanco jazmín."
    ]
  },
  {
    id: 43,
    nombre: "Congee",
    origen: "China / Asia Oriental",
    clima: "humedo",
    tiempo: 60,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🥣",
    imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
    descripcion: "Papilla cremosa de arroz cocido en exceso de caldo con jengibre y ajo. El reconfortante desayuno y plato de convalecencia de toda Asia Oriental, personalizado con infinitos toppings.",
    ingredientes: [
      "200 g de arroz blanco",
      "1,5 litros de caldo de pollo",
      "2 trozos de jengibre fresco, 2 dientes de ajo",
      "300 g de pechuga de pollo opcional",
      "Cebolla de verdeo, jengibre en juliana para servir",
      "Salsa de soja, aceite de sésamo, huevo pochado y cilantro"
    ],
    pasos: [
      "Lavar el arroz y mezclarlo con una cucharada de aceite.",
      "En una olla, hervir el caldo con el jengibre y el ajo.",
      "Agregar el arroz y cocinar a fuego medio-bajo durante 45-60 minutos, revolviendo ocasionalmente.",
      "El arroz debe deshacerse completamente, creando una papilla espesa y cremosa.",
      "Si se usa pollo, cocinar la pechuga en el caldo y desmenuzarla.",
      "Ajustar la consistencia con más caldo si es necesario.",
      "Servir con cebolla de verdeo, jengibre fresco, huevo pochado y aceite de sésamo."
    ]
  },
  {
    id: 44,
    nombre: "Kiribath",
    origen: "Sri Lanka",
    clima: "humedo",
    tiempo: 30,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🍚",
    imagen: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&h=400&fit=crop",
    descripcion: "Arroz cocido lentamente en leche de coco hasta quedar cremoso y compacto, servido en cuadrados con pol sambol de coco y chile. El plato ceremonial de Sri Lanka para Año Nuevo y celebraciones.",
    ingredientes: [
      "400 g de arroz blanco",
      "400 ml de leche de coco",
      "300 ml de agua, 1 cdita de sal",
      "Para el pol sambol: coco rallado fresco, chile, limón y cebolla roja"
    ],
    pasos: [
      "Cocinar el arroz con el agua y la sal hasta que absorba casi todo el líquido.",
      "Verter la leche de coco sobre el arroz semicocido y mezclar.",
      "Cocinar a fuego muy bajo, tapado, otros 15 minutos hasta que la leche de coco se absorba.",
      "El arroz debe quedar bien compacto y cremoso.",
      "Extender en una fuente plana y cortar en cuadrados o rombos.",
      "Para el pol sambol: mezclar coco rallado con chile, cebolla roja, jugo de limón y sal.",
      "Servir el kiribath con el pol sambol al costado."
    ]
  },
  {
    id: 45,
    nombre: "Sinigang",
    origen: "Filipinas",
    clima: "humedo",
    tiempo: 45,
    porciones: 4,
    dificultad: "Media",
    emoji: "🍲",
    imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    descripcion: "Sopa agria de cerdo o camarones con tamarindo, rábano y berenjena. Su acidez refrescante es perfecta para el clima húmedo tropical: el plato más solicitado en todo hogar filipino.",
    ingredientes: [
      "700 g de costillas de cerdo en trozos",
      "150 g de tamarindo o saborizante de tamarindo",
      "2 tomates, 1 cebolla",
      "2 rábanos en rodajas, 1 berenjena en rodajas",
      "200 g de espinaca o kangkong",
      "4 chiles largos verdes",
      "Salsa de pescado, sal y pimienta"
    ],
    pasos: [
      "Blanquear el cerdo en agua hirviente 3 minutos. Escurrir y enjuagar.",
      "En olla con agua limpia, hervir el cerdo con los tomates y la cebolla durante 30 minutos.",
      "Agregar el tamarindo y ajustar la acidez al gusto.",
      "Incorporar el rábano y cocinar 10 minutos.",
      "Añadir la berenjena y los chiles. Cocinar 5 minutos.",
      "Agregar el kangkong al final y cocinar 2 minutos más.",
      "Condimentar con salsa de pescado y servir con arroz blanco."
    ]
  },
  {
    id: 46,
    nombre: "Injera con Wot",
    origen: "Etiopía",
    clima: "humedo",
    tiempo: 60,
    porciones: 4,
    dificultad: "Difícil",
    emoji: "🫓",
    imagen: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",
    descripcion: "Pan plano esponjoso de teff fermentado cubierto de guisos de lentejas y pollo. En Etiopía se come sin cubiertos: el injera es simultáneamente plato y utensilio.",
    ingredientes: [
      "Para el injera: 400 g de harina de teff, agua, levadura, sal",
      "Para el doro wot: 1 pollo en presas, 4 cebollas",
      "3 cdas de niter kibbeh (manteca especiada)",
      "2 cdas de berbere (mezcla de especias etíope)",
      "4 huevos duros pelados, sal y pimienta"
    ],
    pasos: [
      "Para el injera: mezclar harina de teff con agua tibia y levadura. Fermentar 24-48 horas.",
      "Cocinar el injera en sartén grande antiadherente, solo de un lado, hasta que aparezcan burbujas.",
      "Para el doro wot: caramelizar las cebollas en seco 30 minutos hasta que estén muy oscuras.",
      "Agregar el niter kibbeh y el berbere. Cocinar 10 minutos.",
      "Incorporar el pollo y cocinar 30 minutos hasta que esté tierno.",
      "Agregar los huevos enteros al final para que absorban el sabor.",
      "Servir el wot sobre el injera extendido. Comer rasgando trozos de injera para tomar el guiso."
    ]
  },
  {
    id: 47,
    nombre: "Mohinga",
    origen: "Myanmar",
    clima: "humedo",
    tiempo: 60,
    porciones: 4,
    dificultad: "Media",
    emoji: "🍜",
    imagen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
    descripcion: "Caldo espeso de pescado con hierba limón, cúrcuma y pasta de camarones, sobre fideos de arroz con huevo. El desayuno nacional de Myanmar que se vende en cada esquina de Yangón.",
    ingredientes: [
      "500 g de filetes de catfish o corvina",
      "400 g de fideos de arroz finos",
      "1 tallo de hierba limón, 1 trozo jengibre, 5 dientes ajo",
      "1 cdita de cúrcuma, 1 cdita de pasta de camarón",
      "3 cdas de harina de arroz para espesar",
      "2 cebollas, huevos duros, cilantro y lima para servir"
    ],
    pasos: [
      "Cocinar el pescado con la hierba limón, jengibre, sal y agua 20 minutos. Retirar y colar el caldo.",
      "Desmenuzar el pescado eliminando las espinas.",
      "En el caldo, agregar la cúrcuma, la pasta de camarón y el ajo.",
      "Disolver la harina de arroz en agua fría e incorporar al caldo para espesarlo.",
      "Saltear la cebolla y volver el pescado desmenuzado al caldo.",
      "Cocinar los fideos de arroz según las instrucciones.",
      "Servir los fideos en el caldo caliente con huevo duro, cilantro y jugo de lima."
    ]
  },
  {
    id: 48,
    nombre: "Adobo de pollo",
    origen: "Filipinas",
    clima: "humedo",
    tiempo: 45,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🍗",
    imagen: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop",
    descripcion: "Pollo braseado en vinagre, salsa de soja, ajo y laurel hasta que la salsa se reduce a un glaseado intenso. La técnica filipina de conservación en vinagre produce el pollo más sabroso del Sudeste Asiático.",
    ingredientes: [
      "1 kg de presas de pollo (muslos y contramuslos)",
      "125 ml de vinagre de arroz blanco",
      "125 ml de salsa de soja",
      "8 dientes de ajo aplastados",
      "2 hojas de laurel",
      "1 cdita de granos de pimienta negra",
      "Aceite para dorar"
    ],
    pasos: [
      "Marinar el pollo en el vinagre, la soja, el ajo, el laurel y la pimienta al menos 30 minutos.",
      "Retirar el pollo de la marinada y secar con papel.",
      "Dorar el pollo en aceite caliente hasta que esté bien dorado de ambos lados.",
      "Verter la marinada sobre el pollo dorado.",
      "Cocinar a fuego medio-bajo durante 25 minutos, dando vuelta ocasionalmente.",
      "Retirar el pollo. Reducir la salsa a fuego alto hasta que esté brillante y espesa.",
      "Volver el pollo a la salsa, glasear bien y servir sobre arroz blanco."
    ]
  },
  {
    id: 49,
    nombre: "Sambar",
    origen: "India del Sur",
    clima: "humedo",
    tiempo: 40,
    porciones: 4,
    dificultad: "Media",
    emoji: "🥘",
    imagen: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    descripcion: "Caldo espeso de lentejas toor con tamarindo, tomate y verduras, especiado con polvo de sambar casero. El acompañamiento esencial del dosa e idli en el sur de India.",
    ingredientes: [
      "200 g de lentejas toor dal",
      "150 g de tamarindo",
      "2 tomates, 1 cebolla",
      "200 g de verduras mixtas (berenjena, zanahoria, rábano)",
      "1 cdita de semillas de mostaza",
      "1 rama de hojas de curry",
      "2 cdas de polvo de sambar",
      "1 cda de ghee, sal y cúrcuma"
    ],
    pasos: [
      "Cocinar las lentejas con agua y cúrcuma hasta que estén muy blandas. Aplastar parcialmente.",
      "Remojar el tamarindo en agua caliente y extraer el jugo.",
      "Saltear la cebolla y los tomates. Agregar el polvo de sambar.",
      "Incorporar el jugo de tamarindo y las verduras. Cocinar 15 minutos.",
      "Añadir las lentejas cocidas y ajustar la consistencia con agua.",
      "Para el tadka: en ghee caliente, freír las semillas de mostaza hasta que salten. Agregar las hojas de curry.",
      "Verter el tadka sobre el sambar y servir caliente con arroz o dosa."
    ]
  },
  {
    id: 50,
    nombre: "Canh Chua",
    origen: "Vietnam",
    clima: "humedo",
    tiempo: 30,
    porciones: 4,
    dificultad: "Fácil",
    emoji: "🍲",
    imagen: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop",
    descripcion: "Sopa agridulce vietnamita con pescado, piña, tomate y brotes de soja. El equilibrio perfecto entre ácido, dulce y umami que define la cocina del Delta del Mekong.",
    ingredientes: [
      "500 g de filetes de pescado blanco o camarones",
      "200 g de piña en trozos",
      "3 tomates en gajos, 150 g de brotes de soja",
      "2 tallos de apio",
      "3 cdas de jugo de tamarindo",
      "2 cdas de salsa de pescado, 1 cda de azúcar",
      "Chile, cilantro y cebolla de verdeo para servir"
    ],
    pasos: [
      "Calentar agua o caldo en una olla. Agregar el tamarindo, la salsa de pescado y el azúcar.",
      "Cuando hierva, incorporar la piña y los tomates. Cocinar 5 minutos.",
      "Agregar el pescado o los camarones. Cocinar 3-4 minutos.",
      "Incorporar los brotes de soja y el apio al final, solo 1 minuto.",
      "Probar y ajustar el balance agridulce con más tamarindo, azúcar o salsa de pescado.",
      "Servir en bowls con chile fresco, cilantro y cebolla de verdeo.",
      "Acompañar con arroz blanco jazmín."
    ]
  }
];

/* Credenciales simuladas */
const USUARIOS_MOCK = [
  { email: "ana@gmail.com",    password: "demo123",  nombre: "Ana" },
  { email: "carlos@gmail.com", password: "admin123", nombre: "Carlos" }
];
