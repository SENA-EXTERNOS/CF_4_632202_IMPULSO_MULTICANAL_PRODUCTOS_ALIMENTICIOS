export default {
  global: {
    componenteFormativo:
      'Canales de venta, disposición de productos para clientes',
    descripcionCurso:
      'En este componente formativo se desarrollarán los aspectos relacionados con el concepto de canales de distribución, sus características, cobertura y extensión geográfica. Se tratarán aspectos relacionados con las estrategias de multicanal y sus características, además de conceptos como multicanal y omnicanal, las estrategias de comunicación diferenciadas y la promoción de los puntos de venta.',

    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-princiapal.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Canales de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Importancia de los canales de distribución',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Funciones de los canales de distribución',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación de los canales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Canales de distribución y comercialización según el proceso de venta',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Canales de distribución y comercialización según la tecnología para la venta',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Canales de distribución y comercialización según el tipo de soporte para la venta',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Multicanal y omnicanal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Multicanal',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Omnicanal',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Puntos de venta y rutas de visita',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de punto de venta',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Funcionamiento de un punto de venta',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Geolocalización',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Rutas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Promoción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Objetivos de la promoción',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Efectividad de la promoción',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Canales de Distribución y procesos de ventas',
      referencia:
        'Asturias, Corporación Universitaria. (s.f.) <em> Distribución Comercial y Ventas.</em> Pág. 06- 13.',
      tipo: 'Artículo',
      link:
        'https://www.centro-virtual.com/recursos/biblioteca/pdf/fundamentos_mercadeo_pmd/unidad3_pdf2.pdf',
    },
    {
      tema: 'Análisis para tomar decisiones sobre canales de venta',
      referencia:
        'La Distribución (s.f.), <em>Distribución: canales, logística y punto de venta.</em> Pág. 34-38',
      tipo: 'Artículo',
      link:
        'https://inta.gob.ar/sites/default/files/8-distribucion-canales-logistica.pdf',
    },
    {
      tema: 'Logística de la distribución de alimentos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021). <em>Logística de la distribución de alimentos.</em> [Archivo de video]. YouTube. ',
      tipo: 'Vídeo',
      link: 'https://youtu.be/vR4nPjSUB0w',
    },
    {
      tema: 'Canales digitales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <em>Canales digitales</em> [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/1TSWuFLZ79E',
    },
  ],
  glosario: [
    {
      termino: 'Alimento',
      significado:
        'es un producto de origen natural elaborado para ser consumido y para aportar al cuerpo humano nutrientes y/o energía. Puede encontrarse en forma líquida o sólida y hace parte de los objetos de distribución y comercialización.',
    },
    {
      termino: 'Canales automatizados',
      significado:
        'canales fijos que, basados en la tecnología, expiden alimentos sin necesidad de contar con operadores.',
    },
    {
      termino: 'Canal propio o directo',
      significado:
        'se presenta cuando la empresa se encarga de hacer llegar sus productos al consumidor final, sin intermediarios, aplicando medios físicos convencionales o medios digitales.',
    },
    {
      termino: 'Distribución',
      significado:
        'es la función de poner el producto a disposición del cliente en el lugar, las cantidades y el momento requeridos.',
    },
    {
      termino: '<em>E-mail marketing</em>',
      significado:
        'canal digital que busca enviar correos electrónicos a bases de datos de contactos de clientes o prospectos, con el fin de obtener nuevos consumidores; se usa también para fidelizar a los clientes ya existentes.',
    },
    {
      termino: 'Franquicias',
      significado:
        'canal de distribución y venta que replica una tienda o punto y su modelo de operación, con varias sucursales que tienen el fin de mejorar el alcance y comercialización estandarizados.',
    },
    {
      termino: 'Inventario físico',
      significado:
        'son los niveles de existencias de una clase de productos. También se denomina de esta forma a la acción de verificar las cantidades registradas en el sistema de gestión de inventarios, mediante la comparación física de su existencia.',
    },
    {
      termino: 'Las redes sociales',
      significado:
        'son aplicaciones de Internet que sirven como plataformas para interconectar comunidades de individuos y empresas con intereses y actividades en común, en un contexto de amistad, trabajo o comercio.',
    },
    {
      termino: 'Omnicanal',
      significado:
        'iniciativa de gestión de canales de venta que busca explotar todos los canales de manera unificada, eliminando fronteras o manejos especiales.',
    },
    {
      termino: '<em>Telemarketing</em>',
      significado:
        'canal de venta tradicional de medio audiovisual que busca promover el consumo de manera masiva.',
    },
    {
      termino: 'Vida útil del producto',
      significado:
        'es el periodo de tiempo que tiene un producto para su consumo sin entrar en riesgos o degradación, el cual está comprendido entre la fecha de fabricación y la fecha de vencimiento, el cual es un estimado de cuando sus características organolépticas pueden cambiar.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, A. L. (2018). <em>Canales de Distribución.</em> Bogotá: Fondo editorial Areandino - Fundación Universitaria del Área Andina. Obtenido de ',
      link: 'https://core.ac.uk/download/pdf/326423549.pdf',
    },
    {
      referencia:
        'Beltrán López, G. (2015). <em>GEOLOCALIZACIÓN Y REDES SOCIALES- Un mundo social, local y móvil.</em> Obtenido de',
      link:
        'https://gersonbeltran.com/wp-content/uploads/2018/04/Geolocalizacio%CC%81n-y-Redes-Sociales-un-mundo-social-local-y-mo%CC%81vil.pdf',
    },
    {
      referencia:
        'Calvo, H. E. (2015). <em>Alimentando los sentidos.</em> Zaragoza: Universidad de Zaragoza. Obtenido de',
      link:
        'https://ucc.unizar.es/sites/ucc.unizar.es/files/enziende_materialdidactico_alimentando_web.pdf',
    },
    {
      referencia:
        'Cruz Roche, I. (2013). <em>Canales de distribución.</em> Especial Referencia a los productos de alimentación. Pirámide. Obtenido de',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/48995?page=6',
    },
    {
      referencia:
        'de Juan Vigaray, M. D. (2010). <em>COMERCIALIZACIÓN Y RETAILING- DISTRIBUCIÓN COMERCIAL APLICADA.</em> Madrid: PEARSON. Obtenido de',
      link:
        'https://www.ecotec.edu.ec/material/material_2016F1_MKT360_11_63978.pdf',
    },
    {
      referencia:
        'Edix. (2022). <em>Canales de venta: vender más y mejor.</em> Edix- Grupo Proeduca. Obtenido de',
      link: 'https://www.edix.com/es/revolucion-profesional/',
    },
    {
      referencia:
        'Iciar Astiasarán, A., & Hernández, A. M. (2013). ALIMENTOS- Composición y Propiedades. Madrid, España: McGraw-Hill. Obtenido de',
      link:
        'https://fisiogenomica.com/assets/Blog/pdf/Alimentos-Composicion-y-Propiedades.pdf',
    },
    {
      referencia:
        'Paz, H. R. (2010). <em>Canales de Distribución: gestión comercial y logística.</em> Buenos Aires, Argentina: Lectorum- Ugerman. Obtenido de',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/76765?page=6',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
