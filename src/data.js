export const company = {
  phone: '908 826 797',
  phoneHref: 'tel:+51908826797',
  email: 'ventasmagper@gmail.com',
  address: 'Jr. Veracidad Mza. EE4 Lote 33',
  district: 'Urb. Pro, Lima - Los Olivos',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Jr.%20Veracidad%20Mza.%20EE4%20Lote%2033%2C%20Los%20Olivos%2C%20Lima',
}

export const whatsapp = (message) =>
  `https://wa.me/51908826797?text=${encodeURIComponent(message)}`

export const categories = [
  {
    name: 'Electricidad y automatización',
    description:
      'Soluciones para alimentación, maniobra, protección, control y medición en tableros e instalaciones eléctricas. Esta familia reúne desde cableado y conexión hasta controladores y equipos de diagnóstico.',
    guidance:
      'Indica tensión, corriente, cantidad, medida o aplicación. Una fotografía de la placa ayuda a validar la alternativa.',
    image: 'assets/categories/electricidad-v2.webp',
    examples: [
      'Cables',
      'Tomas y enchufes industriales',
      'Contactores, llaves térmicas y diferenciales',
      'Guardamotores',
      'Timers y controladores',
      'Pulsadores y selectores',
      'Pulsadores de emergencia',
      'Bandejas portacables',
      'Multímetros, voltímetros y amperímetros',
      'Variadores de frecuencia y transformadores',
    ],
    width: 768,
    height: 900,
  },
  {
    name: 'Seguridad y EPP',
    description:
      'Implementos de protección personal para labores operativas, mantenimiento y trabajo en campo. MAGPER revisa el requerimiento según el uso previsto y la presentación solicitada.',
    guidance:
      'Describe la labor, el riesgo, la talla y la cantidad requerida para orientar correctamente la consulta.',
    image: 'assets/categories/seguridad-epp-v2.webp',
    examples: ['Equipos de protección personal (EPP)'],
    width: 1600,
    height: 900,
  },
  {
    name: 'Herramientas y equipos',
    description:
      'Equipos portátiles y herramientas para instalación, ajuste, medición y mantenimiento. La línea cubre necesidades de taller, montaje, obra y atención técnica.',
    guidance:
      'Comparte el tipo de trabajo, frecuencia de uso, medida, potencia o accesorio que necesitas.',
    image: 'assets/categories/herramientas-v2.webp',
    examples: [
      'Equipos y máquinas',
      'Winchas',
      'Herramientas en general',
      'Herramientas aisladas',
      'Alicates',
    ],
    width: 768,
    height: 900,
  },
  {
    name: 'Iluminación industrial',
    description:
      'Equipamiento para iluminar áreas de trabajo, instalaciones, almacenes y operaciones. Puedes consultar alternativas para iluminación fija, portátil o de apoyo.',
    guidance:
      'Indica el área, tipo de instalación, tensión y nivel de iluminación esperado, si cuentas con esos datos.',
    image: 'assets/categories/iluminacion-v2.webp',
    examples: ['Equipos de iluminación', 'Reflectores y luces', 'Linternas'],
    width: 768,
    height: 900,
  },
  {
    name: 'Ferretería y consumibles',
    description:
      'Materiales, consumibles y accesorios para fabricación, obra, instalación y mantenimiento. La familia integra productos metálicos, abrasivos, adhesivos, pinturas y señalización.',
    guidance:
      'Envía material, medida, espesor, presentación, color y cantidad para reducir posibles equivalencias.',
    image: 'assets/categories/ferreteria-v2.webp',
    examples: [
      'Planchas, perfiles y tubos de inox y fierro negro',
      'Tubos, codos y niples',
      'Siliconas y adhesivos',
      'Brocas',
      'Discos de corte, pulido y desbaste',
      'Limas y lijas',
      'Brochas y rodillos',
      'Pinturas y solventes',
      'Stretch film y cintas de embalaje',
      'Cintas de aislamiento y vulcanizadas',
      'Letreros y cintas de señalización',
    ],
    width: 1600,
    height: 900,
  },
  {
    name: 'Limpieza y mantenimiento',
    description:
      'Productos de aseo y mantenimiento para plantas, oficinas e instituciones. Incluye consumibles para limpieza cotidiana y atención de áreas operativas.',
    guidance:
      'Señala superficie, uso, presentación y cantidad; evita combinar productos químicos sin validación técnica.',
    image: 'assets/categories/limpieza-v2.webp',
    examples: [
      'Artículos de limpieza general',
      'Trapos industriales',
      'Paños Wypall',
      'Detergentes',
    ],
    width: 1600,
    height: 900,
  },
  {
    name: 'Repuestos industriales',
    description:
      'Componentes de reposición para sistemas de movimiento, transmisión y sellado. La identificación correcta permite buscar una referencia o alternativa compatible.',
    guidance:
      'Comparte código, marca, medidas y fotografías de la pieza o placa del equipo antes de solicitar una equivalencia.',
    image: 'assets/categories/repuestos-v2.webp',
    examples: [
      'Rodamientos, fajas y chumaceras',
      'Sellos mecánicos',
      'O-rings',
      'Retenes',
    ],
    width: 768,
    height: 900,
  },
]

export const steps = [
  {
    title: 'Comparte el requerimiento',
    description: 'Envía una lista, foto, ficha técnica o una descripción por WhatsApp.',
  },
  {
    title: 'Valida las alternativas',
    description: 'MAGPER confirma contigo marca, presentación, cantidad y condiciones.',
  },
  {
    title: 'Recibe la cotización',
    description: 'La disponibilidad y las condiciones de entrega se confirman antes de emitirla.',
  },
]

export const brands = [
  ['Schneider Electric', 'assets/brands/schneider-electric.svg'],
  ['ABB', 'assets/brands/abb.svg'],
  ['INDECO', 'assets/brands/indeco.webp'],
  ['Philips', 'assets/brands/philips.svg'],
  ['3M', 'assets/brands/3m.webp'],
  ['Opalux', 'assets/brands/opalux.webp'],
  ['BTicino', 'assets/brands/bticino.svg'],
  ['Autonics', 'assets/brands/autonics.svg'],
  ['LEDVANCE', 'assets/brands/ledvance.svg'],
  ['STANLEY', 'assets/brands/stanley.svg'],
  ['Truper', 'assets/brands/truper.webp'],
  ['Bosch', 'assets/brands/bosch.webp'],
  ['Norton Saint-Gobain', 'assets/brands/norton.webp'],
  ['Pavco Wavin', 'assets/brands/pavco-wavin.webp'],
  ['Aceros Arequipa', 'assets/brands/aceros-arequipa.webp'],
  ['Anypsa', 'assets/brands/anypsa.webp'],
  ['CPP', 'assets/brands/cpp-red.svg'],
  ['Tekno', 'assets/brands/tekno.svg'],
  ['Qroma', 'assets/brands/qroma.webp'],
  ['SKF', 'assets/brands/skf.svg'],
  ['FAG', 'assets/brands/fag.webp'],
  ['NTN', 'assets/brands/ntn-celeste.svg'],
  ['NSK', 'assets/brands/nsk.svg'],
  ['Timken', 'assets/brands/timken.svg'],
  ['HCC', 'assets/brands/hcc.webp'],
]

export const questions = [
  {
    question: '¿Necesito conocer el código exacto?',
    answer:
      'No. Puedes enviar una foto, una ficha, una medida o explicar la aplicación. MAGPER validará contigo la alternativa antes de cotizar.',
  },
  {
    question: '¿Los productos tienen disponibilidad inmediata?',
    answer:
      'La disponibilidad depende de la marca, la presentación y la cantidad. Se confirma antes de emitir la cotización.',
  },
  {
    question: '¿Realizan despachos fuera de Lima?',
    answer:
      'MAGPER coordina despachos a otras regiones del Perú según el producto, volumen y destino.',
  },
  {
    question: '¿Puedo enviar una lista con varias categorías?',
    answer:
      'Sí. Puedes compartir el requerimiento completo por WhatsApp para revisarlo en una sola conversación comercial.',
  },
]
