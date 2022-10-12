import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";

const itemsSample = {
  items: [
    {
      articleId: 202,
      categoryId: 20,
      title: "TimeMaster Pro",
      description: "Reloj piezoeléctrico para hombre con correa de cuero marrón, Oro",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 10996.04,
      stock: 31
    },
    {
      articleId: 404,
      categoryId: 30,
      title: "Panam deportivo",
      description: "Calzado Casual Bota 100% Nacional, corte sintético y forro Textil, suela sintética.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2345.37,
      stock: 1
    },
    {
      articleId: 606,
      categoryId: 30,
      title: "Calzaleta comfort",
      description: "Creamos nuevas ideas de outfits para que sepas cómo vestir tus Sandalias Calzaletas con todo el estilo creando fantásticos looks.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2056.6,
      stock: 10
    },
    {
      articleId: 1010,
      categoryId: 10,
      title: "Chamarra de Piel",
      description: "Chamarra en piel de ovino",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 2218.38,
      stock: 1
    },
    {
      articleId: 1616,
      categoryId: 20,
      title: "Panerai Sumbersible",
      description: "Sólidos y resistentes, con una visibilidad inigualable incluso a grandes profundidades y una personalidad única, los nuevos relojes Panerai Submersible para submarinistas profesionales se inspiran en la historia de la marca pero también miran hacia el futuro gracias a sus innovadoras soluciones técnicas.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 8101.06,
      stock: 4
    },
    {
      articleId: 1717,
      categoryId: 20,
      title: "Seiko Kinetic Legacy",
      description: "Como mecánico y cuarzo, Kinetic es una plataforma. Durante los últimos 20 años, Seiko ha creado en esta plataforma una serie de movimientos Kinetic, cada uno con características únicas para el consumidor.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 12060.39,
      stock: 9
    },
    {
      articleId: 2121,
      categoryId: 20,
      title: "Tag Heuer Aquaracer",
      description: "La colección TAG Heuer Aquaracer es el reloj-herramienta por excelencia inspirado en el mundo acuático. Este reloj está protegido por un extraordinario cierre de doble seguridad y un bisel giratorio unidireccional.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 11399.22,
      stock: 9
    },
    {
      articleId: 2222,
      categoryId: 10,
      title: "Sudadera Polo RL",
      description: "Sudadera Polo Ralph Lauren color gris, paracaballero.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 1402.89,
      stock: 4
    },
    {
      articleId: 2424,
      categoryId: 20,
      title: "Casio G-Shock",
      description: "Desde El Punto De Vista De G - Shock, La Resistencia Se Desarrolla Continuamente En El Proceso De Búsqueda De La Fuerza Final. El Modelo Adopta La Estructura De Protección Del Núcleo De Carbono.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 11172.77,
      stock: 30
    },
    {
      articleId: 2525,
      categoryId: 10,
      title: "Pantalón corto de carga",
      description: "Pantalones cortos de carga de sarga premium con múltiples bolsillos para hombre.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 1263.59,
      stock: 14
    },
    {
      articleId: 2727,
      categoryId: 20,
      title: "Curren Galaxy Negro",
      description: "Estilo: Casual, Ejecutivo. Subdiales con Funciones Cronometro clásico en un reloj con estilo El extensible es de metal grueso y ligero. Cuenta con un broche de eslabones para ajustar a la muñeca.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 11993.31,
      stock: 26
    },
    {
      articleId: 3232,
      categoryId: 20,
      title: "Timex Expedition",
      description: "Timex Expedition Camper, limpio, simple y de inspiración militar, no ha cambiado mucho desde 1918. Lo hicimos un poco más liviano, agregamos una correa Fast Wrap de nailon con cierre de velcro y nuestra exclusiva luz nocturna Indiglo.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 11082.81,
      stock: 8
    },
    {
      articleId: 3333,
      categoryId: 20,
      title: "Invicta Quartz Green",
      description: "Tipo de cierre Cierre plegable de seguridad con botón de presión Diámetro de la caja 43 milímetros Grosor de la caja 12 milímetros Anchura de la correa 22 milímetros Función del bisel Unidireccional.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 12544.21,
      stock: 36
    },
    {
      articleId: 3636,
      categoryId: 10,
      title: "Pantalón de Mezclilla",
      description: "Jeans a la Cintura De Mezclilla Stretch Ajustable para Mujer con Botones al frente y bolsas simuladas al frente. Mezclilla : 96% Algodón - 4% Elastano.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 1315.64,
      stock: 22
    },
    {
      articleId: 3838,
      categoryId: 20,
      title: "Armani Exchange Stainless Steel",
      description: "Caja de acero inoxidable en tono dorado . Pulsera de acero inoxidable en tono dorado . Movimiento de cuarzo . cristal mineral . Esfera negra . Pantalla analógica . Visualización de la fecha . Parte posterior sólida del caso . Cierre de despliegue . 50 m de resistencia al agua.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 7622.9,
      stock: 31
    },
    {
      articleId: 4040,
      categoryId: 10,
      title: "Saco deportivo",
      description: "Blazer de tipo deportivo con cuello redondo y solapa redonda. Cintura ajustable por agujeta en contrase. Bolsas delanteras. Manga Larga. Tela: 80% Poliéster 15%Viscosa 3% Elastano. Lavar a Mano / No usar blanqueador / No usar secadora / Planchar a vapor. Hecho en México.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 1284.93,
      stock: 14
    },
    {
      articleId: 4242,
      categoryId: 10,
      title: "Camisa de franela roja",
      description: "Camisa de franela a cuasros, mayormente roja, talla M, marca Abercrombie, ideal para frio.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 1311.52,
      stock: 21
    },
    {
      articleId: 4646,
      categoryId: 10,
      title: "Falda de terciopelo azul",
      description: "Falda de terciopelo en un lindo color azul Talla CHEs muy elegante y moderna a la vez Modelo original ideal para el invierno.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 679.2,
      stock: 22
    },
    {
      articleId: 4747,
      categoryId: 30,
      title: "Botas de piel Cuadra",
      description: "La elegancia y suavidad de la piel genuina hacen de este diseño un esencial en el armario del hombre tradicional. Un modelo que podrás combinar con tus atuendos favoritos, sin importar tu estilo.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2170.41,
      stock: 10
    },
    {
      articleId: 5151,
      categoryId: 30,
      title: "Sneakers Puma amarillos",
      description: "Amarillo, gamuza, diseño de dos tonos, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, lengüeta en la parte posterior, plantilla con logo y suela de goma.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 1709.76,
      stock: 31
    },
    {
      articleId: 5353,
      categoryId: 10,
      title: "Cardigan color hueso",
      description: "Cuello: Cuello en V; Diseño: Puños acanaladod, Hombro superpuesto, Para anudar/atar; Estampado: Color liso; Extras: Tacto suave; Longitud de la manga: Manga larga; Longitud: Normal; Ajuste: Ajuste regular.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 2391.13,
      stock: 12
    },
    {
      articleId: 5454,
      categoryId: 30,
      title: "Sandalias Calzamex",
      description: "Sandalias Universales Mujer Cuña Empeine Ancho Suaves Cómodas Transpirables La suela exterior de goma antideslizante y resistente a la abrasión brinda equilibrio y estabilidad para trabajar todo el día.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2158.44,
      stock: 29
    },
    {
      articleId: 5656,
      categoryId: 30,
      title: "Botas Offlander Lona",
      description: "Diseño, materiales, mano de obra y actitud Hecha en México. Cada par Offlander es creado de manera artesanal y se revisa uno a uno antes de enviártelo. Viste a la moda con estas increíbles botas tipo militar, tenemos en todos los colores.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2654.83,
      stock: 15
    },
    {
      articleId: 6161,
      categoryId: 10,
      title: "Abrigo de gabardina rojo",
      description: "Abrigo tipo gabardina para dama, estilo clásico, combinalo con tu atuendo favorito, en cualquier temporada del año.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 1749.97,
      stock: 11
    },
    {
      articleId: 6363,
      categoryId: 30,
      title: "Chanclas de Playa",
      description: "Chanclas, zapatillas de verano, ropa exterior, playa, moda, Clip-on, flor, playa, zapatos para mujer.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2682.81,
      stock: 5
    },
    {
      articleId: 6464,
      categoryId: 30,
      title: "Cocodrilos",
      description: "Los Zapatos Más Cómodos Del Mundo! La colección de Sandalias Crocs Classic Clog Negro Unisex Niños, tiene un diseño deportivo que es fácil de poner y quitar, una variedad de colores y diseños que estimulan la energía.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 920.01,
      stock: 23
    },
    {
      articleId: 6868,
      categoryId: 30,
      title: "Zapato en Plataforma Pull&Bear",
      description: "Disponible En Varios Colores. Pulsera Con Hebilla En El Tobillo. Plantilla Técnica Flexible De Espuma De Poliuretano Starfit , Diseñada Para Ofrecer Más Comodidad. Altura De La Plataforma 4 Cm Y Altura Del Tacón 12.5 Cm. para mujer.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2725.43,
      stock: 21
    },
    {
      articleId: 7070,
      categoryId: 20,
      title: "Reloj Disney Mickey Mouse",
      description: "El reloj inteligente Disney Mickey Mouse para niños viene cargado con características aptas para niños para que tu hijo disfrute de portátiles inteligentes como los adultos",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 14556.92,
      stock: 4
    },
    {
      articleId: 7373,
      categoryId: 30,
      title: "Sandalias de piel TIRAS",
      description: "Zara - KIDS/ SANDALIA PIEL TIRAS - Marrón - unisex - Sandalia de tiras 100% piel vacuna. Cierre mediante tira con hebilla al tobillo. Plantilla 100% piel caprina y suela de goma.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 1340.32,
      stock: 2
    },
    {
      articleId: 7474,
      categoryId: 10,
      title: "Pantalón De Vestir Dama Stretch",
      description: "Pantalón de vestir entubado Tipo de tela milenium jacquard stretch Talla 7 Cintura 68cm Cadera 74 cm Talla 9 Cintura 70 cm Cadera 76 cm Talla 11 Cintura 76 cm Cadera 82 cm Talla 13 Cintura 80 cm Cadera 86 cm Un pantalón de exelente calidad en tela y estilo Para complementar tu outfit.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 2321.95,
      stock: 11
    },
    {
      articleId: 7676,
      categoryId: 30,
      title: "Zapatos Casuales York Team Polo Club para Hombre 27",
      description: "Revela tu lado más casual con estos geniales zapatos marca York Team Polo Club. Son un calzado de diseño elegante, con detalle de mezclilla en el talón y aplicación de color café con del diseño de la marca.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2783.55,
      stock: 13
    },
    {
      articleId: 7979,
      categoryId: 30,
      title: "Mocasines Refill para Hombre 27",
      description: "Luce fantástico y a la moda con estos zapatos mocasines de la marca Refill, el complemento ideal para tus atuendos. Este diseño en color negro tiene detalles grises en la parte de arriba para añadirle contraste y un aspecto más casual. Cuentan con una suela sintética.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2221.41,
      stock: 30
    },
    {
      articleId: 8080,
      categoryId: 30,
      title: "Zapatillas Frida Kollection",
      description: "Camina con porte y elegancia al complementar tu atuendo de vestir con estas bonitas zapatillas de la marca Frida Kollection. Son de color beige, con altura de tacón de 10 cm y suela sintética.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2301.57,
      stock: 26
    },
    {
      articleId: 8282,
      categoryId: 10,
      title: "Jogger Para Hombre Fugitive Trend Ryval",
      description: "Nuestro primer modelo completamente en poliester de la alta calidad. suave fresco y super comodo Ademas Cuenta con 2 Cierres laterales, para asegurar tus objetos Permite que nuestro nuevo modelo Jogger Fugitive te acompañe a tus actividades diarias, tanto deportivas como en la vida cotidiana.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 2200.23,
      stock: 8
    },
    {
      articleId: 8484,
      categoryId: 10,
      title: "Overall Levi's azul claro",
      description: "Overall Levi's de corte recto en mezclilla, tirantes unidos por la espalda, tres bolsillos y parche al frente.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 1326.69,
      stock: 4
    },
    {
      articleId: 8787,
      categoryId: 20,
      title: "Samsung galaxy watch 4 40 mm rosa",
      description: "Diseñamos el nuevo Galaxy Watch 4 para que sea el compañero de tu viaje hacia una vida más saludable. Supervisa tu estado físico con nuestro primer reloj inteligente que mide la composición corporal. Mide tu porcentaje de grasa corporal, músculo esquelético, agua corporal y más, alcanza tus objetivos.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 14139.34,
      stock: 10
    },
    {
      articleId: 8888,
      categoryId: 20,
      title: "Smartwatch Fossil Gen 6 Hombre Acero Inoxidable V",
      description: "Smartwatch Fossil Gen 6; Muchas más funciones. Mucho más rápido. Este smartwatch Gen 6 con pantalla táctil de 44 mm tiene un brazalete de acero inoxidable en tono ahumado, velocidad de carga 2 veces más rápida (80% en poco más de 30 minutos), tecnología Qualcomm 4100+ y muchísimas opciones de personalización.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 7645.81,
      stock: 21
    },
    {
      articleId: 8989,
      categoryId: 20,
      title: "Reloj Mido Commander Ii para Caballero",
      description: "El reloj Commander Icône rinde homenaje a uno de los modelos más icónicos de Mido. Su diseño neo-vintage adopta la mayoría de los códigos que llevaron al Commander al éxito: líneas extremadamente depuradas, una amplia y magnífica carátula satinada con efecto rayos de sol y el brazalete de malla milanesa. Está dotado del Calibre 80 Chronometer Silicon, un movimiento automático cronómetro certificado por el COSC con espiral de silicio.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 7967.85,
      stock: 1
    },
    {
      articleId: 9090,
      categoryId: 30,
      title: "Bershka Botines Tacón Ajustados",
      description: "Botines tacón ajustados color: negro size: 24 material: poliuretano;poliéster;poliuretano termoplástico.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2243.86,
      stock: 20
    },
    {
      articleId: 9191,
      categoryId: 30,
      title: "Mocasín para Hombre Quirelli Negro",
      description: "Mocasin para Hombre en Piel, por los que los hace cómodos al caminar sin perder el estilo y llevar la elegancia que buscas. El calzado de Quirelli es ideal para un look Casual que permite que los uses todos los días y en cualquier ocasión.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 1195.98,
      stock: 13
    },
    {
      articleId: 9292,
      categoryId: 20,
      title: "Reloj Cuarzo Aviator Boeing 3934",
      description: "Gana tus alas con el resistente reloj de aviador de primera clase que aporta estilo y durabilidad a tus aventuras de alto vuelo. Tamaño de la caja: 43 mm ESTILO DE ALTO VUELO: el dial audaz y texturizado y el subdial de segundos mantienen su tiempo fácil de leer sin importar la altitud.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 11967.67,
      stock: 20
    },
    {
      articleId: 9595,
      categoryId: 20,
      title: "Reloj Bulova 98B104",
      description: "Cronógrafo Este atractivo reloj Bulova Marine Star para caballero combina la tecnología de un reloj del siglo XXI con un estilo inigualable. El oro rosa de su caja hace una mancuerna perfecta con el negro de la correa de caucho y con los números romanos de su carátula. Un accesorio ideal para el hombre de gustos modernos y definidos.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 9759.06,
      stock: 14
    },
    {
      articleId: 9696,
      categoryId: 30,
      title: "Pantuflas Canadá",
      description: "Lo mejor de estar en casa es andar en pijama, descansar... y usar estas pantuflas Canadá. Por su diseño con líneas son clásicas y combinables. Están hechas con materiales textiles y tienen forro suave para conceder mayor calidez.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2244.02,
      stock: 13
    },
    {
      articleId: 9797,
      categoryId: 20,
      title: "Reloj Michael Kors",
      description: "El reloj Runway fino es una obra de arte monocromática diseñada con un lujoso acabado pulido en color negro. Los indicadores de hora en tonos similares y nuestro emblemático logotipo grabado hacen que esta llamativa pieza sea el paradigma de la elegancia. Póntelo para añadir un toque de refinamiento a cualquier ocasión ya sea con tus looks informales favoritos o con tus conjuntos para la oficina.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 6995.4,
      stock: 5
    },
    {
      articleId: 9999,
      categoryId: 30,
      title: "Bota Vaquera Qualifier",
      description: "Los pies pasan por mucho en un día, por lo que nuestra bota está lista para brindar su apoyo. La tecnología Ariat Shock Shield reduce el impacto del golpe del talón, creando una absorción de impactos óptima y minimizando la fatiga del pie. Corte de cuero de plena flor de primera calidad y presenta un eje de puntada occidental clásica y detalles perforados a lo largo del empeine.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2226.52,
      stock: 23
    },
    {
      articleId: 10201,
      categoryId: 20,
      title: "Reloj Infantil Smartwatch Dc Batman",
      description: "El reloj inteligente Batman para niños viene cargado con características aptas para niños para que tu hijo disfrute de portátiles inteligentes como los adultos. Sin embargo, a diferencia de los relojes inteligentes para adultos, este reloj está diseñado específicamente pensando en los niños. Sin wifi, llamadas o mensajes de texto, puedes estar seguro de la seguridad de tu hijo mientras disfrutan de las diversas características geniales adecuadas para la edad.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 13239.56,
      stock: 28
    },
    {
      articleId: 10403,
      categoryId: 30,
      title: "Tenis Adidas Grand Court Base Negro Ee7900",
      description: "Tenis GRAND COURT BASE de referencia EE7908 para hombre. Tenis deportivos con el clásico look de los 70. Rinde homenaje al estilo retro del deporte blanco. Estos tenis de cuero sintético suave se inspiran en los diseños deportivos de la década de los 70.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2377.93,
      stock: 11
    },
    {
      articleId: 10504,
      categoryId: 20,
      title: "Reloj Diray Gents Black",
      description: "En color Negro, movimiento de cuarzo, cristal resina, resistente a 50 mts., medida de carátula 56 mm.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 10171.71,
      stock: 23
    },
    {
      articleId: 10807,
      categoryId: 10,
      title: "Traje Sastre De Lino",
      description: "Hermosísimo traje sastre de lino de color gris y rayas blancas. Utilizar un traje sastre no tiene que ser aburrido. Te va a encantar.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 2272.42,
      stock: 7
    },
    {
      articleId: 10908,
      categoryId: 30,
      title: "Panam Tenis Mujer Moda Casual Diseño Cómodo Gris",
      description: "Panam tenis elaborado en Textil, Gris punta redonda y suela antiderrapante. Disfruta de la comodidad y el diseño que este tenis Panam te ofrece y dale una apariencia deportiva a tu outfit. Producto 100% mexicano.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 951.46,
      stock: 31
    },
    {
      articleId: 11514,
      categoryId: 30,
      title: "Zapatos de Vestir Christian Gallery",
      description: "Destaca tu vestimenta de vestir al combinar tu atuendo con estos zapatos de la marca Christian Gallery. Es un calzado diseñado en color café, lo que le da un toque elegante.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 969.45,
      stock: 5
    },
    {
      articleId: 11615,
      categoryId: 30,
      title: "Lumberjack NAVIGATOR Mocasines",
      description: "Mocassino Marrón de Lumberjack.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2553.02,
      stock: 29
    },
    {
      articleId: 11817,
      categoryId: 10,
      title: "Norma Kamali VESTIDO LARGO en Negro",
      description: "95% poliéster, 5% spandex. Tejido jersey ajustado con bordes cortados a láser y abertura lateral.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 2213.37,
      stock: 17
    },
    {
      articleId: 12120,
      categoryId: 20,
      title: "Swatch AFTER-DINNER",
      description: "Movimiento: Ø: 41.00. Material De La Caja: acero inoxidable. Color De La Caja: amarillo. Color De La Esfera: amarillo. Material De La Correa: cuero. Color De La Correa: negro. Cierre De La Correa: mariposa. Resistente Al Agua: 0.3 Bar. Garantia: 24 Meses.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 10267.63,
      stock: 11
    },
    {
      articleId: 12221,
      categoryId: 30,
      title: "Zapatos Confort Hush Puppies",
      description: "Con estos zapatos confort de la marca Hush Puppies tienes la certeza de que te sientes cómodo en todo momento. Su diseño fabricado 100% con piel es perfecto para que los uses todos los días, ya que son muy ligeros y se amoldan a tu pie.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2408.71,
      stock: 4
    },
    {
      articleId: 12322,
      categoryId: 20,
      title: "Victorinox Reloj Fieldforce Chrono",
      description: "Llegar tarde a tus compromisos ya no es opción, con este reloj pulsera cumple con todos horarios y no te pierdas ningún evento importante. Súmale estilo a tu outfit, es el complemento ideal.",
      imageUrl: "https://api.lorem.space/image/watch",
      price: 13546.38,
      stock: 28
    },
    {
      articleId: 12928,
      categoryId: 10,
      title: "H&M - Playera estampada - Black",
      description: "Playera en punto de algodón con diseño estampado al frente y borde acanalado en el cuello.",
      imageUrl: "https://api.lorem.space/image/fashion",
      price: 2078.36,
      stock: 1
    },
    {
      articleId: 13534,
      categoryId: 30,
      title: "Tenis Bota Sneakers",
      description: "Tu plataforma favorita se renueva para que luzcas increíble. Una versión diferente de las icónicas Chucks, las suelas Chunky están de vuelta, una suela apilada gruesa y dentada hecha de material sintético, con una altura de 6cm. Son ultra ligeros y cómodos, están hechos de los mejores materiales lo cual los hacen unos tenis super resistentes.",
      imageUrl: "https://api.lorem.space/image/shoes",
      price: 2715.48,
      stock: 32
    }
  ]
}

const ItemDetailContainer = (props) => {
    const { itemId } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        const intId = parseInt(itemId) || 0;

        setItem(getItemById(intId));
    }, [itemId])

    const getItemById = (id) => {
        return itemsSample.items.find(i => i.articleId === id) || {};
    }

  return (
    <div>
        <ArticleCard displayMode="itemDetail" {...item} />
    </div>
  )
}

export default ItemDetailContainer;