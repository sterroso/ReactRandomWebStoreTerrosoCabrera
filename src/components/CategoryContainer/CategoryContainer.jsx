import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";

const articleSample = {
    articles: [
      {
        article_id: 202,
        category_id: 20,
        article_name: "TimeMaster Pro",
        article_description: "Reloj piezoeléctrico para hombre con correa de cuero marrón, Oro",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 10996.04,
        article_stock: 31
      },
      {
        article_id: 404,
        category_id: 30,
        article_name: "Panam deportivo",
        article_description: "Calzado Casual Bota 100% Nacional, corte sintético y forro Textil, suela sintética.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2345.37,
        article_stock: 1
      },
      {
        article_id: 606,
        category_id: 30,
        article_name: "Calzaleta comfort",
        article_description: "Creamos nuevas ideas de outfits para que sepas cómo vestir tus Sandalias Calzaletas con todo el estilo creando fantásticos looks.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2056.6,
        article_stock: 10
      },
      {
        article_id: 1010,
        category_id: 10,
        article_name: "Chamarra de Piel",
        article_description: "Chamarra en piel de ovino",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 2218.38,
        article_stock: 1
      },
      {
        article_id: 1616,
        category_id: 20,
        article_name: "Panerai Sumbersible",
        article_description: "Sólidos y resistentes, con una visibilidad inigualable incluso a grandes profundidades y una personalidad única, los nuevos relojes Panerai Submersible para submarinistas profesionales se inspiran en la historia de la marca pero también miran hacia el futuro gracias a sus innovadoras soluciones técnicas.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 8101.06,
        article_stock: 4
      },
      {
        article_id: 1717,
        category_id: 20,
        article_name: "Seiko Kinetic Legacy",
        article_description: "Como mecánico y cuarzo, Kinetic es una plataforma. Durante los últimos 20 años, Seiko ha creado en esta plataforma una serie de movimientos Kinetic, cada uno con características únicas para el consumidor.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 12060.39,
        article_stock: 9
      },
      {
        article_id: 2121,
        category_id: 20,
        article_name: "Tag Heuer Aquaracer",
        article_description: "La colección TAG Heuer Aquaracer es el reloj-herramienta por excelencia inspirado en el mundo acuático. Este reloj está protegido por un extraordinario cierre de doble seguridad y un bisel giratorio unidireccional.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 11399.22,
        article_stock: 9
      },
      {
        article_id: 2222,
        category_id: 10,
        article_name: "Sudadera Polo RL",
        article_description: "Sudadera Polo Ralph Lauren color gris, paracaballero.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 1402.89,
        article_stock: 4
      },
      {
        article_id: 2424,
        category_id: 20,
        article_name: "Casio G-Shock",
        article_description: "Desde El Punto De Vista De G - Shock, La Resistencia Se Desarrolla Continuamente En El Proceso De Búsqueda De La Fuerza Final. El Modelo Adopta La Estructura De Protección Del Núcleo De Carbono.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 11172.77,
        article_stock: 30
      },
      {
        article_id: 2525,
        category_id: 10,
        article_name: "Pantalón corto de carga",
        article_description: "Pantalones cortos de carga de sarga premium con múltiples bolsillos para hombre.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 1263.59,
        article_stock: 14
      },
      {
        article_id: 2727,
        category_id: 20,
        article_name: "Curren Galaxy Negro",
        article_description: "Estilo: Casual, Ejecutivo. Subdiales con Funciones Cronometro clásico en un reloj con estilo El extensible es de metal grueso y ligero. Cuenta con un broche de eslabones para ajustar a la muñeca.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 11993.31,
        article_stock: 26
      },
      {
        article_id: 3232,
        category_id: 20,
        article_name: "Timex Expedition",
        article_description: "Timex Expedition Camper, limpio, simple y de inspiración militar, no ha cambiado mucho desde 1918. Lo hicimos un poco más liviano, agregamos una correa Fast Wrap de nailon con cierre de velcro y nuestra exclusiva luz nocturna Indiglo.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 11082.81,
        article_stock: 8
      },
      {
        article_id: 3333,
        category_id: 20,
        article_name: "Invicta Quartz Green",
        article_description: "Tipo de cierre Cierre plegable de seguridad con botón de presión Diámetro de la caja 43 milímetros Grosor de la caja 12 milímetros Anchura de la correa 22 milímetros Función del bisel Unidireccional.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 12544.21,
        article_stock: 36
      },
      {
        article_id: 3636,
        category_id: 10,
        article_name: "Pantalón de Mezclilla",
        article_description: "Jeans a la Cintura De Mezclilla Stretch Ajustable para Mujer con Botones al frente y bolsas simuladas al frente. Mezclilla : 96% Algodón - 4% Elastano.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 1315.64,
        article_stock: 22
      },
      {
        article_id: 3838,
        category_id: 20,
        article_name: "Armani Exchange Stainless Steel",
        article_description: "Caja de acero inoxidable en tono dorado . Pulsera de acero inoxidable en tono dorado . Movimiento de cuarzo . cristal mineral . Esfera negra . Pantalla analógica . Visualización de la fecha . Parte posterior sólida del caso . Cierre de despliegue . 50 m de resistencia al agua.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 7622.9,
        article_stock: 31
      },
      {
        article_id: 4040,
        category_id: 10,
        article_name: "Saco deportivo",
        article_description: "Blazer de tipo deportivo con cuello redondo y solapa redonda. Cintura ajustable por agujeta en contrase. Bolsas delanteras. Manga Larga. Tela: 80% Poliéster 15%Viscosa 3% Elastano. Lavar a Mano / No usar blanqueador / No usar secadora / Planchar a vapor. Hecho en México.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 1284.93,
        article_stock: 14
      },
      {
        article_id: 4242,
        category_id: 10,
        article_name: "Camisa de franela roja",
        article_description: "Camisa de franela a cuasros, mayormente roja, talla M, marca Abercrombie, ideal para frio.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 1311.52,
        article_stock: 21
      },
      {
        article_id: 4646,
        category_id: 10,
        article_name: "Falda de terciopelo azul",
        article_description: "Falda de terciopelo en un lindo color azul Talla CHEs muy elegante y moderna a la vez Modelo original ideal para el invierno.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 679.2,
        article_stock: 22
      },
      {
        article_id: 4747,
        category_id: 30,
        article_name: "Botas de piel Cuadra",
        article_description: "La elegancia y suavidad de la piel genuina hacen de este diseño un esencial en el armario del hombre tradicional. Un modelo que podrás combinar con tus atuendos favoritos, sin importar tu estilo.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2170.41,
        article_stock: 10
      },
      {
        article_id: 5151,
        category_id: 30,
        article_name: "Sneakers Puma amarillos",
        article_description: "Amarillo, gamuza, diseño de dos tonos, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, lengüeta en la parte posterior, plantilla con logo y suela de goma.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 1709.76,
        article_stock: 31
      },
      {
        article_id: 5353,
        category_id: 10,
        article_name: "Cardigan color hueso",
        article_description: "Cuello: Cuello en V; Diseño: Puños acanaladod, Hombro superpuesto, Para anudar/atar; Estampado: Color liso; Extras: Tacto suave; Longitud de la manga: Manga larga; Longitud: Normal; Ajuste: Ajuste regular.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 2391.13,
        article_stock: 12
      },
      {
        article_id: 5454,
        category_id: 30,
        article_name: "Sandalias Calzamex",
        article_description: "Sandalias Universales Mujer Cuña Empeine Ancho Suaves Cómodas Transpirables La suela exterior de goma antideslizante y resistente a la abrasión brinda equilibrio y estabilidad para trabajar todo el día.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2158.44,
        article_stock: 29
      },
      {
        article_id: 5656,
        category_id: 30,
        article_name: "Botas Offlander Lona",
        article_description: "Diseño, materiales, mano de obra y actitud Hecha en México. Cada par Offlander es creado de manera artesanal y se revisa uno a uno antes de enviártelo. Viste a la moda con estas increíbles botas tipo militar, tenemos en todos los colores.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2654.83,
        article_stock: 15
      },
      {
        article_id: 6161,
        category_id: 10,
        article_name: "Abrigo de gabardina rojo",
        article_description: "Abrigo tipo gabardina para dama, estilo clásico, combinalo con tu atuendo favorito, en cualquier temporada del año.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 1749.97,
        article_stock: 11
      },
      {
        article_id: 6363,
        category_id: 30,
        article_name: "Chanclas de Playa",
        article_description: "Chanclas, zapatillas de verano, ropa exterior, playa, moda, Clip-on, flor, playa, zapatos para mujer.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2682.81,
        article_stock: 5
      },
      {
        article_id: 6464,
        category_id: 30,
        article_name: "Cocodrilos",
        article_description: "Los Zapatos Más Cómodos Del Mundo! La colección de Sandalias Crocs Classic Clog Negro Unisex Niños, tiene un diseño deportivo que es fácil de poner y quitar, una variedad de colores y diseños que estimulan la energía.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 920.01,
        article_stock: 23
      },
      {
        article_id: 6868,
        category_id: 30,
        article_name: "Zapato en Plataforma Pull&Bear",
        article_description: "Disponible En Varios Colores. Pulsera Con Hebilla En El Tobillo. Plantilla Técnica Flexible De Espuma De Poliuretano Starfit , Diseñada Para Ofrecer Más Comodidad. Altura De La Plataforma 4 Cm Y Altura Del Tacón 12.5 Cm. para mujer.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2725.43,
        article_stock: 21
      },
      {
        article_id: 7070,
        category_id: 20,
        article_name: "Reloj Disney Mickey Mouse",
        article_description: "El reloj inteligente Disney Mickey Mouse para niños viene cargado con características aptas para niños para que tu hijo disfrute de portátiles inteligentes como los adultos",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 14556.92,
        article_stock: 4
      },
      {
        article_id: 7373,
        category_id: 30,
        article_name: "Sandalias de piel TIRAS",
        article_description: "Zara - KIDS/ SANDALIA PIEL TIRAS - Marrón - unisex - Sandalia de tiras 100% piel vacuna. Cierre mediante tira con hebilla al tobillo. Plantilla 100% piel caprina y suela de goma.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 1340.32,
        article_stock: 2
      },
      {
        article_id: 7474,
        category_id: 10,
        article_name: "Pantalón De Vestir Dama Stretch",
        article_description: "Pantalón de vestir entubado Tipo de tela milenium jacquard stretch Talla 7 Cintura 68cm Cadera 74 cm Talla 9 Cintura 70 cm Cadera 76 cm Talla 11 Cintura 76 cm Cadera 82 cm Talla 13 Cintura 80 cm Cadera 86 cm Un pantalón de exelente calidad en tela y estilo Para complementar tu outfit.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 2321.95,
        article_stock: 11
      },
      {
        article_id: 7676,
        category_id: 30,
        article_name: "Zapatos Casuales York Team Polo Club para Hombre 27",
        article_description: "Revela tu lado más casual con estos geniales zapatos marca York Team Polo Club. Son un calzado de diseño elegante, con detalle de mezclilla en el talón y aplicación de color café con del diseño de la marca.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2783.55,
        article_stock: 13
      },
      {
        article_id: 7979,
        category_id: 30,
        article_name: "Mocasines Refill para Hombre 27",
        article_description: "Luce fantástico y a la moda con estos zapatos mocasines de la marca Refill, el complemento ideal para tus atuendos. Este diseño en color negro tiene detalles grises en la parte de arriba para añadirle contraste y un aspecto más casual. Cuentan con una suela sintética.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2221.41,
        article_stock: 30
      },
      {
        article_id: 8080,
        category_id: 30,
        article_name: "Zapatillas Frida Kollection",
        article_description: "Camina con porte y elegancia al complementar tu atuendo de vestir con estas bonitas zapatillas de la marca Frida Kollection. Son de color beige, con altura de tacón de 10 cm y suela sintética.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2301.57,
        article_stock: 26
      },
      {
        article_id: 8282,
        category_id: 10,
        article_name: "Jogger Para Hombre Fugitive Trend Ryval",
        article_description: "Nuestro primer modelo completamente en poliester de la alta calidad. suave fresco y super comodo Ademas Cuenta con 2 Cierres laterales, para asegurar tus objetos Permite que nuestro nuevo modelo Jogger Fugitive te acompañe a tus actividades diarias, tanto deportivas como en la vida cotidiana.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 2200.23,
        article_stock: 8
      },
      {
        article_id: 8484,
        category_id: 10,
        article_name: "Overall Levi's azul claro",
        article_description: "Overall Levi's de corte recto en mezclilla, tirantes unidos por la espalda, tres bolsillos y parche al frente.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 1326.69,
        article_stock: 4
      },
      {
        article_id: 8787,
        category_id: 20,
        article_name: "Samsung galaxy watch 4 40 mm rosa",
        article_description: "Diseñamos el nuevo Galaxy Watch 4 para que sea el compañero de tu viaje hacia una vida más saludable. Supervisa tu estado físico con nuestro primer reloj inteligente que mide la composición corporal. Mide tu porcentaje de grasa corporal, músculo esquelético, agua corporal y más, alcanza tus objetivos.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 14139.34,
        article_stock: 10
      },
      {
        article_id: 8888,
        category_id: 20,
        article_name: "Smartwatch Fossil Gen 6 Hombre Acero Inoxidable V",
        article_description: "Smartwatch Fossil Gen 6; Muchas más funciones. Mucho más rápido. Este smartwatch Gen 6 con pantalla táctil de 44 mm tiene un brazalete de acero inoxidable en tono ahumado, velocidad de carga 2 veces más rápida (80% en poco más de 30 minutos), tecnología Qualcomm 4100+ y muchísimas opciones de personalización.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 7645.81,
        article_stock: 21
      },
      {
        article_id: 8989,
        category_id: 20,
        article_name: "Reloj Mido Commander Ii para Caballero",
        article_description: "El reloj Commander Icône rinde homenaje a uno de los modelos más icónicos de Mido. Su diseño neo-vintage adopta la mayoría de los códigos que llevaron al Commander al éxito: líneas extremadamente depuradas, una amplia y magnífica carátula satinada con efecto rayos de sol y el brazalete de malla milanesa. Está dotado del Calibre 80 Chronometer Silicon, un movimiento automático cronómetro certificado por el COSC con espiral de silicio.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 7967.85,
        article_stock: 1
      },
      {
        article_id: 9090,
        category_id: 30,
        article_name: "Bershka Botines Tacón Ajustados",
        article_description: "Botines tacón ajustados color: negro size: 24 material: poliuretano;poliéster;poliuretano termoplástico.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2243.86,
        article_stock: 20
      },
      {
        article_id: 9191,
        category_id: 30,
        article_name: "Mocasín para Hombre Quirelli Negro",
        article_description: "Mocasin para Hombre en Piel, por los que los hace cómodos al caminar sin perder el estilo y llevar la elegancia que buscas. El calzado de Quirelli es ideal para un look Casual que permite que los uses todos los días y en cualquier ocasión.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 1195.98,
        article_stock: 13
      },
      {
        article_id: 9292,
        category_id: 20,
        article_name: "Reloj Cuarzo Aviator Boeing 3934",
        article_description: "Gana tus alas con el resistente reloj de aviador de primera clase que aporta estilo y durabilidad a tus aventuras de alto vuelo. Tamaño de la caja: 43 mm ESTILO DE ALTO VUELO: el dial audaz y texturizado y el subdial de segundos mantienen su tiempo fácil de leer sin importar la altitud.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 11967.67,
        article_stock: 20
      },
      {
        article_id: 9595,
        category_id: 20,
        article_name: "Reloj Bulova 98B104",
        article_description: "Cronógrafo Este atractivo reloj Bulova Marine Star para caballero combina la tecnología de un reloj del siglo XXI con un estilo inigualable. El oro rosa de su caja hace una mancuerna perfecta con el negro de la correa de caucho y con los números romanos de su carátula. Un accesorio ideal para el hombre de gustos modernos y definidos.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 9759.06,
        article_stock: 14
      },
      {
        article_id: 9696,
        category_id: 30,
        article_name: "Pantuflas Canadá",
        article_description: "Lo mejor de estar en casa es andar en pijama, descansar... y usar estas pantuflas Canadá. Por su diseño con líneas son clásicas y combinables. Están hechas con materiales textiles y tienen forro suave para conceder mayor calidez.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2244.02,
        article_stock: 13
      },
      {
        article_id: 9797,
        category_id: 20,
        article_name: "Reloj Michael Kors",
        article_description: "El reloj Runway fino es una obra de arte monocromática diseñada con un lujoso acabado pulido en color negro. Los indicadores de hora en tonos similares y nuestro emblemático logotipo grabado hacen que esta llamativa pieza sea el paradigma de la elegancia. Póntelo para añadir un toque de refinamiento a cualquier ocasión ya sea con tus looks informales favoritos o con tus conjuntos para la oficina.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 6995.4,
        article_stock: 5
      },
      {
        article_id: 9999,
        category_id: 30,
        article_name: "Bota Vaquera Qualifier",
        article_description: "Los pies pasan por mucho en un día, por lo que nuestra bota está lista para brindar su apoyo. La tecnología Ariat Shock Shield reduce el impacto del golpe del talón, creando una absorción de impactos óptima y minimizando la fatiga del pie. Corte de cuero de plena flor de primera calidad y presenta un eje de puntada occidental clásica y detalles perforados a lo largo del empeine.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2226.52,
        article_stock: 23
      },
      {
        article_id: 10201,
        category_id: 20,
        article_name: "Reloj Infantil Smartwatch Dc Batman",
        article_description: "El reloj inteligente Batman para niños viene cargado con características aptas para niños para que tu hijo disfrute de portátiles inteligentes como los adultos. Sin embargo, a diferencia de los relojes inteligentes para adultos, este reloj está diseñado específicamente pensando en los niños. Sin wifi, llamadas o mensajes de texto, puedes estar seguro de la seguridad de tu hijo mientras disfrutan de las diversas características geniales adecuadas para la edad.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 13239.56,
        article_stock: 28
      },
      {
        article_id: 10403,
        category_id: 30,
        article_name: "Tenis Adidas Grand Court Base Negro Ee7900",
        article_description: "Tenis GRAND COURT BASE de referencia EE7908 para hombre. Tenis deportivos con el clásico look de los 70. Rinde homenaje al estilo retro del deporte blanco. Estos tenis de cuero sintético suave se inspiran en los diseños deportivos de la década de los 70.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2377.93,
        article_stock: 11
      },
      {
        article_id: 10504,
        category_id: 20,
        article_name: "Reloj Diray Gents Black",
        article_description: "En color Negro, movimiento de cuarzo, cristal resina, resistente a 50 mts., medida de carátula 56 mm.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 10171.71,
        article_stock: 23
      },
      {
        article_id: 10807,
        category_id: 10,
        article_name: "Traje Sastre De Lino",
        article_description: "Hermosísimo traje sastre de lino de color gris y rayas blancas. Utilizar un traje sastre no tiene que ser aburrido. Te va a encantar.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 2272.42,
        article_stock: 7
      },
      {
        article_id: 10908,
        category_id: 30,
        article_name: "Panam Tenis Mujer Moda Casual Diseño Cómodo Gris",
        article_description: "Panam tenis elaborado en Textil, Gris punta redonda y suela antiderrapante. Disfruta de la comodidad y el diseño que este tenis Panam te ofrece y dale una apariencia deportiva a tu outfit. Producto 100% mexicano.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 951.46,
        article_stock: 31
      },
      {
        article_id: 11514,
        category_id: 30,
        article_name: "Zapatos de Vestir Christian Gallery",
        article_description: "Destaca tu vestimenta de vestir al combinar tu atuendo con estos zapatos de la marca Christian Gallery. Es un calzado diseñado en color café, lo que le da un toque elegante.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 969.45,
        article_stock: 5
      },
      {
        article_id: 11615,
        category_id: 30,
        article_name: "Lumberjack NAVIGATOR Mocasines",
        article_description: "Mocassino Marrón de Lumberjack.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2553.02,
        article_stock: 29
      },
      {
        article_id: 11817,
        category_id: 10,
        article_name: "Norma Kamali VESTIDO LARGO en Negro",
        article_description: "95% poliéster, 5% spandex. Tejido jersey ajustado con bordes cortados a láser y abertura lateral.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 2213.37,
        article_stock: 17
      },
      {
        article_id: 12120,
        category_id: 20,
        article_name: "Swatch AFTER-DINNER",
        article_description: "Movimiento: Ø: 41.00. Material De La Caja: acero inoxidable. Color De La Caja: amarillo. Color De La Esfera: amarillo. Material De La Correa: cuero. Color De La Correa: negro. Cierre De La Correa: mariposa. Resistente Al Agua: 0.3 Bar. Garantia: 24 Meses.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 10267.63,
        article_stock: 11
      },
      {
        article_id: 12221,
        category_id: 30,
        article_name: "Zapatos Confort Hush Puppies",
        article_description: "Con estos zapatos confort de la marca Hush Puppies tienes la certeza de que te sientes cómodo en todo momento. Su diseño fabricado 100% con piel es perfecto para que los uses todos los días, ya que son muy ligeros y se amoldan a tu pie.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2408.71,
        article_stock: 4
      },
      {
        article_id: 12322,
        category_id: 20,
        article_name: "Victorinox Reloj Fieldforce Chrono",
        article_description: "Llegar tarde a tus compromisos ya no es opción, con este reloj pulsera cumple con todos horarios y no te pierdas ningún evento importante. Súmale estilo a tu outfit, es el complemento ideal.",
        article_image_url: "https://api.lorem.space/image/watch?w=180&h=120",
        article_price: 13546.38,
        article_stock: 28
      },
      {
        article_id: 12928,
        category_id: 10,
        article_name: "H&M - Playera estampada - Black",
        article_description: "Playera en punto de algodón con diseño estampado al frente y borde acanalado en el cuello.",
        article_image_url: "https://api.lorem.space/image/fashion?w=180&h=120",
        article_price: 2078.36,
        article_stock: 1
      },
      {
        article_id: 13534,
        category_id: 30,
        article_name: "Tenis Bota Sneakers",
        article_description: "Tu plataforma favorita se renueva para que luzcas increíble. Una versión diferente de las icónicas Chucks, las suelas Chunky están de vuelta, una suela apilada gruesa y dentada hecha de material sintético, con una altura de 6cm. Son ultra ligeros y cómodos, están hechos de los mejores materiales lo cual los hacen unos tenis super resistentes.",
        article_image_url: "https://api.lorem.space/image/shoes?w=180&h=120",
        article_price: 2715.48,
        article_stock: 32
      }
    ]
  }

const CategoryContainer = (props) => {
    const { cat_id } = useParams();

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log(`Category ID: ${cat_id}`);
        setArticles(getArticlesByCatId(parseInt(cat_id)));
    }, [cat_id])

    const getArticlesByCatId = (catId) => {
        return articleSample.articles.filter(item => item.category_id === catId && item.article_stock > 0);
    }

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-8">
        {articles.map(i => <ArticleCard {...i} />)}
    </div>
  )
}
export default CategoryContainer