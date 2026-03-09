// Base de datos de productos
const productos = [
    {
        id: 1,
        nombre: "Ventiladores de pedestal 18 pulgadas",
        imagen: "ventilador_40.jpeg",
        precio: 50,
        stock: 4,
        categoria: "ventiladores",
        descripcion: "Ventiladores de pedestal de 18 pulgadas.\nGarantia de 3 meses. \nMensajeria incluida segun el lugar."
    },
    {
        id: 2,
        nombre: "Ventilador industrial de pared",
        imagen: "ventilador_180.jpeg",
        precio: 190,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador industrial de pared. Garantia de 1 mes. Mensajeria incluida segun el lugar."
    },
    {
        id: 3,
        nombre: "Ventiladores recargables Milexus",
        imagen: "ventilador_140.jpeg",
        precio: 160,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventiladores recargables Milexus. Es la caja de dos ventiladores, no se venden por separado. Mensajeria por un costo adicional."
    },
    {
        id: 4,
        nombre: "Ventilador recargable JMD",
        imagen: "ventilador_62.jpeg",
        precio: 72,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador recargable JMD. Bateria de litio. La carga le dura minimo 10 horas en velocidad maxima. Mensajeria por un costo adicional."
    },
    {
        id: 5,
        nombre: "Ventilador recargable Royal 12",
        imagen: "ventilador_60.jpeg",
        precio: 70,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador recargable Royal 12. Mensajeria por un costo adicional."
    },
    {
        id: 6,
        nombre: "Ventilador recargable F6",
        imagen: "ventilador_85.jpeg",
        precio: 95,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador recargable F6. Mensajeria por un costo adicional."
    },
    {
        id: 7,
        nombre: "Ventilador recargable Milexus (de pared)",
        imagen: "vent_90.jpeg",
        precio: 100,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador recargable Milexus de pared.\nGarantia de 1 mes.\nMensajeria incluida segun el lugar."
    },
    {
        id: 8,
        nombre: "Ventilador industrial de pies",
        imagen: "vent_180.jpeg",
        precio: 190,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador industrial de pies.\nGarantia de 1 mes.\nMensajeria incluida segun el lugar."
    },
    {
        id: 9,
        nombre: "Ventilador recargable Milexus de mesa",
        imagen: "vent_80.jpeg",
        precio: 90,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador recargable Milexus de mesa.\nGarantia de 1 mes.\nMensajeria incluida segun el lugar."
    },
    {
        id: 10,
        nombre: "Ventilador de pared",
        imagen: "vent_45.jpeg",
        precio: 55,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador de pared.\nMensajeria por un costo adicional."
    },
    {
        id: 11,
        nombre: "Freidora sin aceite Premier 3.5 Lt",
        imagen: "freidora_80.jpeg",
        precio: 90,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 12,
        nombre: "Freidora de aire Milexus 4.2 Lt",
        imagen: "freidora_milexus_80.jpeg",
        precio: 90,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 13,
        nombre: "Freidora Royal de 4.5 Lt",
        imagen: "freidora_royal_80.jpeg",
        precio: 90,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 14,
        nombre: "Sandwichera Black Easy Clean",
        imagen: "sandwichera_55.jpeg",
        precio: 65,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 15,
        nombre: "Sandwichera Royal Panini Maker",
        imagen: "sandwichera_80.jpeg",
        precio: 90,
        stock: 1,
        categoria: "cocina",
        descripcion: "Sandwichera de plastico, acero inoxidable y aluminio.\nSistema de bloqueo de abrir y cerrar.\nControl analogico.\nCon dos planchas de aluminio recubiertas con antiadherente.\nLuz de funcionamiento y luz de terminado.\nCordon electrico resistente al calor.\nMango frio al tacto.\nBandeja recolectora de aceite.\nVoltaje: 110V\nFrecuencia: 60Hz\nPotencia: 130 Watts\nMensajeria por un costo adicional."
    },
    {
        id: 16,
        nombre: "Sandwichera Royal",
        imagen: "sandwichera_32.jpeg",
        precio: 42,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 17,
        nombre: "Cafetera electrica de 6 tazas",
        imagen: "cafetera_37.jpeg",
        precio: 47,
        stock: 1,
        categoria: "cocina",
        descripcion: "Garantia de 1 mes.\nMensajeria por un costo adicional."
    },
    {
        id: 18,
        nombre: "Cafetera de capuchino",
        imagen: "cafetera_65.jpeg",
        precio: 75,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 19,
        nombre: "Cafetera Delonghi",
        imagen: "cafetera_130.jpeg",
        precio: 140,
        stock: 1,
        categoria: "cocina",
        descripcion: "Estilo Vintage.\nMensajeria incluida segun el lugar."
    },
    {
        id: 20,
        nombre: "Merenguera amasadora industrial de 20 Lt",
        imagen: "merenguera_1860.jpeg",
        precio: 1900,
        stock: 1,
        categoria: "produccion",
        descripcion: "220V ~ 60Hz\nMensajeria incluida segun el lugar."
    },
    {
        id: 21,
        nombre: "Merenguera universal Royal",
        imagen: "merenguera_170.jpeg",
        precio: 180,
        stock: 1,
        categoria: "cocina",
        descripcion: "1000 Watts\nSemi-profecional.\nMensajeria por un costo adicional."
    },
    {
        id: 22,
        nombre: "Merenguera Speeds",
        imagen: "merenguera_42.jpeg",
        precio: 52,
        stock: 1,
        categoria: "cocina",
        descripcion: "7 velocidades.\nMensajeria por un costo adicional."
    },
    {
        id: 23,
        nombre: "Merenguera Royal de 5 Lt",
        imagen: "merenguera_150.jpeg",
        precio: 160,
        stock: 1,
        categoria: "cocina",
        descripcion: "500 Watts\n12 velocidades.\nMensajeria incluida segun el lugar."
    },
    {
        id: 24,
        nombre: "Merenguera de mano EKO",
        imagen: "merenguera_35.jpeg",
        precio: 45,
        stock: 1,
        categoria: "cocina",
        descripcion: "Garantia de 1 mes.\nMensajeria por un costo adicional."
    },
    {
        id: 25,
        nombre: "Merenguera con boll marca EKO",
        imagen: "merenguera_105.jpeg",
        precio: 120,
        stock: 1,
        categoria: "cocina",
        descripcion: "Garantia de 1 mes.\nMensajeria por un costo adicional."
    },
    {
        id: 26,
        nombre: "Merenguera con boll de 7 velocidades",
        imagen: "merenguera_50.jpeg",
        precio: 60,
        stock: 1,
        categoria: "cocina",
        descripcion: "Garantia de 1 mes.\nMensajeria por un costo adicional."
    },
    {
        id: 27,
        nombre: "Batidora Milexus",
        imagen: "batidora_40.jpeg",
        precio: 50,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 28,
        nombre: "Batidora profesional Milexus",
        imagen: "batidora_130.jpeg",
        precio: 140,
        stock: 1,
        categoria: "cocina",
        descripcion: "Potencia: 1500 Watts.\nMensajeria por un costo adicional."
    },
    {
        id: 29,
        nombre: "Batidora LOTUS de 1.5 Lt",
        imagen: "batidora_lotus_40.jpeg",
        precio: 50,
        stock: 2,
        categoria: "cocina",
        descripcion: "Vaso de vidrio\nMoledor de especias incluido\nCuchillas de acero inoxidable\nPotencia: 400 Watts\n4 velocidades\nMensajeria por un costo adicional."
    },
    {
        id: 30,
        nombre: "Batidora Milexus",
        imagen: "batidora_36.jpeg",
        precio: 50,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 31,
        nombre: "Batidora Well",
        imagen: "batidora_50.jpeg",
        precio: 60,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 32,
        nombre: "Batidora Daytron",
        imagen: "batidora_daytron_50.jpeg",
        precio: 60,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 33,
        nombre: "Batidora Decakila",
        imagen: "batidora_decakila_50.jpeg",
        precio: 60,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 34,
        nombre: "Batidora profecional Silver Crest 2 en 1",
        imagen: "batidora_60.jpeg",
        precio: 70,
        stock: 1,
        categoria: "cocina",
        descripcion: "Vaso antichoques de silicona\nCapacidad de 2 Lt\nPotencia: 1800 Watts\nMensajeria por un costo adicional."
    },
    {
        id: 35,
        nombre: "Batidora Marwa con molinillo",
        imagen: "batidora_53.jpeg",
        precio: 65,
        stock: 1,
        categoria: "cocina",
        descripcion: "Vasos de cristal\nMensajeria incluida segun el lugar."
    },
    {
        id: 36,
        nombre: "Olla arrocera Royal",
        imagen: "olla_40.jpeg",
        precio: 50,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 37,
        nombre: "Olla arrocera Milexus",
        imagen: "olla_milexus_40.jpeg",
        precio: 50,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 38,
        nombre: "Olla arrocera Allnovu",
        imagen: "olla_45.jpeg",
        precio: 55,
        stock: 1,
        categoria: "cocina",
        descripcion: "De acero inoxidable\nCapacidad de 2.2 Lt\nMensajeria por un costo adicional."
    },
    {
        id: 39,
        nombre: "Olla arrocera Well",
        imagen: "olla_well_45.jpeg",
        precio: 55,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria por un costo adicional."
    },
    {
        id: 40,
        nombre: "Olla arrocera MAF",
        imagen: "olla_35.jpeg",
        precio: 45,
        stock: 1,
        categoria: "cocina",
        descripcion: "Capacidad de 1.8 Lt\nMensajeria incluida en algunas partes de La Habana."
    },
    {
        id: 41,
        nombre: "Olla reina Premier",
        imagen: "olla_70.jpeg",
        precio: 80,
        stock: 1,
        categoria: "cocina",
        descripcion: "Capacidad de 6 Lt\nMensajeria por un costo adicional."
    },
    {
        id: 42,
        nombre: "Olla reina MAF",
        imagen: "olla_66.jpeg",
        precio: 80,
        stock: 1,
        categoria: "cocina",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 43,
        nombre: "Olla reina Wynwood",
        imagen: "olla_win_70.jpeg",
        precio: 80,
        stock: 1,
        categoria: "cocina",
        descripcion: "Capacidad de 6 Lt\nGarantia de 1 mes\nMensajeria por un costo adicional."
    },
    {
        id: 44,
        nombre: "Olla reina Milexus",
        imagen: "olla_milexus_70.jpeg",
        precio: 80,
        stock: 1,
        categoria: "cocina",
        descripcion: "Capacidad de 6 Lt\nMensajeria por un costo adicional."
    },
    {
        id: 45,
        nombre: "Olla reina Allnovu",
        imagen: "olla_65.jpeg",
        precio: 75,
        stock: 1,
        categoria: "cocina",
        descripcion: "Capacidad de 7 Lt\nGarantia de 1 mes\nMensajeria por un costo adicional."
    },
    {
        id: 46,
        nombre: "Split Milexus de 2 toneladas",
        imagen: "split_640.jpeg",
        precio: 660,
        stock: 1,
        categoria: "aires",
        descripcion: "Garantia de 1 mes\nMensajeria incluida."
    },
    {
        id: 47,
        nombre: "Split TGM de 1.5 toneladas",
        imagen: "split_480.jpeg",
        precio: 500,
        stock: 1,
        categoria: "aires",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 48,
        nombre: "Split Milexus de 1.5 toneladas",
        imagen: "split_490.jpeg",
        precio: 510,
        stock: 1,
        categoria: "aires",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 49,
        nombre: "Split Milexus de 5 toneladas",
        imagen: "split_2420.jpeg",
        precio: 2450,
        stock: 1,
        categoria: "aires",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 50,
        nombre: "Split KUL de 1 tonelada",
        imagen: "split_275.jpeg",
        precio: 290,
        stock: 1,
        categoria: "aires",
        descripcion: "Tuberia de cobre\nMensajeria incluida."
    },
    {
        id: 51,
        nombre: "Split GBR de 1 tonelada",
        imagen: "split_300.jpeg",
        precio: 320,
        stock: 1,
        categoria: "aires",
        descripcion: "Garantia de 1 mes\nMensajeria incluida en algunas partes de La Habana."
    },
    {
        id: 52,
        nombre: "Split Milexus de 1 tonelada",
        imagen: "split_280.jpeg",
        precio: 300,
        stock: 1,
        categoria: "aires",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 53,
        nombre: "Split Well de 1 tonelada",
        imagen: "split_well_300.jpeg",
        precio: 320,
        stock: 1,
        categoria: "aires",
        descripcion: "3 metros de tuberia de cobre\nMensajeria incluida segun el lugar."
    },
    {
        id: 54,
        nombre: "Split LG de 1.5 toneladas",
        imagen: "split_690.jpeg",
        precio: 710,
        stock: 1,
        categoria: "aires",
        descripcion: "Tuberias de cobre\nGarantia de 1 mes\nMensajeria incluida en algunas partes de La Habana."
    },
    {
        id: 55,
        nombre: "Split LG de 2 toneladas",
        imagen: "split_840.jpeg",
        precio: 860,
        stock: 1,
        categoria: "aires",
        descripcion: "Tuberias de cobre\nGarantia de 1 mes\nMensajeria incluida en algunas partes de La Habana."
    },
    {
        id: 56,
        nombre: "Split LG de 1 tonelada",
        imagen: "split_380.jpeg",
        precio: 400,
        stock: 1,
        categoria: "aires",
        descripcion: "Tuberias de cobre\nGarantia de 1 mes\nMensajeria incluida en algunas partes de La Habana."
    },
    {
        id: 57,
        nombre: "Exhibidora Sankey de 11 pies",
        imagen: "ex_680.jpeg",
        precio: 700,
        stock: 1,
        categoria: "negocios",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 58,
        nombre: "Exhibidora Royal de 17 pies",
        imagen: "ex_770.jpeg",
        precio: 800,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 59,
        nombre: "Exhibidora EnerLife de 7 pies",
        imagen: "ex_510.jpeg",
        precio: 530,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 3 meses\nMensajeria incluida segun el lugar."
    },
    {
        id: 60,
        nombre: "Exhibidora Royal de 12.5 pies",
        imagen: "ex_650.jpeg",
        precio: 670,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 61,
        nombre: "Exhibidora Royal de 8.5 pies",
        imagen: "ex_600.jpeg",
        precio: 620,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 62,
        nombre: "Exhibidora Royal de 7.2 pies",
        imagen: "ex_570.jpeg",
        precio: 590,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 63,
        nombre: "Exhibidora horizontal Milexus de 9 pies",
        imagen: "ex_milexus_650.jpeg",
        precio: 670,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 64,
        nombre: "Exhibidora Xingx de 13 pies",
        imagen: "ex_xingx_770.jpeg",
        precio: 790,
        stock: 1,
        categoria: "negocios",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 65,
        nombre: "Exhibidora horizontal Royal de 16 pies",
        imagen: "ex_900.jpeg",
        precio: 950,
        stock: 1,
        categoria: "negocios",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 66,
        nombre: "Exhibidora Royal de 20 pies",
        imagen: "ex_1200.jpeg",
        precio: 1250,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 67,
        nombre: "Exhibidora Polar de 17 pies",
        imagen: "ex_1550.jpeg",
        precio: 1600,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 68,
        nombre: "Exhibidora Xingx triple de 39 pies",
        imagen: "ex_1900.jpeg",
        precio: 2000,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 69,
        nombre: "Exhibidora Edenox de 13 pies",
        imagen: "ex_660.jpeg",
        precio: 680,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 70,
        nombre: "Exhibidora horizontal Royal de 12 pies",
        imagen: "ex_700.jpeg",
        precio: 720,
        stock: 1,
        categoria: "negocios",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 71,
        nombre: "Secadora EKO de 8 Kg",
        imagen: "sec_370.jpeg",
        precio: 380,
        stock: 1,
        categoria: "secadoras",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 72,
        nombre: "Secadora a gas marca LG de 21 Kg",
        imagen: "sec_750.jpeg",
        precio: 780,
        stock: 1,
        categoria: "secadoras",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 73,
        nombre: "Secadora al vapor marca Samsung de 17 Kg",
        imagen: "sec_620.jpeg",
        precio: 650,
        stock: 1,
        categoria: "secadoras",
        descripcion: "Garantia de 3 meses\nMensajeria incluida segun el lugar."
    },
    {
        id: 74,
        nombre: "Secadora automatica Samsung al vapor de 11 Kg",
        imagen: "sec_925.jpeg",
        precio: 950,
        stock: 1,
        categoria: "secadoras",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 75,
        nombre: "Lavadora automatica LG de 9 Kg",
        imagen: "lav_360.jpeg",
        precio: 370,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 76,
        nombre: "Lavadora automatica Milexus de 8 Kg",
        imagen: "lav_315.jpeg",
        precio: 335,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 77,
        nombre: "Lavadora automatica Milexus de 7.5 Kg",
        imagen: "lav_275.jpeg",
        precio: 315,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 78,
        nombre: "Lavadora automatica Royal de 9 Kg",
        imagen: "lav_royal_315.jpeg",
        precio: 345,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Agua fria y caliente\nMensajeria incluida segun el lugar."
    },
    {
        id: 79,
        nombre: "Secadora automatica al vapor Royal de 14 Kg",
        imagen: "sec_840.jpeg",
        precio: 870,
        stock: 1,
        categoria: "secadoras",
        descripcion: "Garantia de 3 meses\nMensajeria incluida segun el lugar."
    },
    {
        id: 80,
        nombre: "Lavadora automatica Samsung de 19 Kg",
        imagen: "lav_770.jpeg",
        precio: 800,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 81,
        nombre: "Lavadora automatica SACO de 9 Kg",
        imagen: "lav_330.jpeg",
        precio: 360,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 82,
        nombre: "Lavadora automatica Roeyintar de 8 Kg",
        imagen: "lav_roe_330.jpeg",
        precio: 360,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 83,
        nombre: "Lavadora automatica Samsung de 9 Kg",
        imagen: "lav_355.jpeg",
        precio: 375,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 84,
        nombre: "Lavadora automatica Samsung (de carga superior) de 24 Kg",
        imagen: "lav_1820.jpeg",
        precio: 1900,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Inverter\nGarantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 85,
        nombre: "Lavadora semiautomatica Milexus de 9 Kg",
        imagen: "lav_220.jpeg",
        precio: 250,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Mensajeria incluida segun el lugar."
    },
    {
        id: 86,
        nombre: "Lavadora semiautomatica DesMatt de 7 Kg",
        imagen: "lav_230.jpeg",
        precio: 300,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Garantia de 3 meses\nMensajeria incluida segun el lugar."
    },
    {
        id: 87,
        nombre: "Lavadora semiautomatica Milexus de 7 Kg",
        imagen: "lav_185.jpeg",
        precio: 220,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Garantia de 1 mes\nMensajeria incluida segun el lugar."
    },
    {
        id: 88,
        nombre: "Lavadora semiautomatica EKO de 8.5 Kg",
        imagen: "lav_oferta_230.jpeg",
        precio: 260,
        stock: 1,
        categoria: "lavadoras",
        descripcion: "Oferta: Rebaja de precio a 210 USD si compra 10 o mas unidades\nGarantia de 3 meses\nMensajeria incluida segun el lugar."
    },
];

// Variables globales
let carrito = [];
let filtroCategoria = 'todos';
let terminoBusqueda = '';

// Elementos del DOM
const productosContainer = document.querySelector('.productos');
const carritoIcon = document.querySelector('.carrito-icon');
const contadorCarrito = document.getElementById('contador-carrito');
const modalProducto = document.getElementById('modal-producto');
const modalCarrito = document.getElementById('modal-carrito');
const modalCliente = document.getElementById('modal-cliente');
const itemsCarrito = document.getElementById('items-carrito');
const totalCarrito = document.getElementById('total-carrito');
const formularioCliente = document.getElementById('formulario-cliente');

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    setupEventListeners();
});

// Renderizar productos
function renderizarProductos() {
    productosContainer.innerHTML = '';

    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria = filtroCategoria === 'todos' || producto.categoria === filtroCategoria;
        const coincideBusqueda = producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                               producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });

    if (productosFiltrados.length === 0) {
        productosContainer.innerHTML = '<p class="no-resultados">No se encontraron productos</p>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <img src="img/${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p class="precio">${producto.precio.toLocaleString()} USD</p>
                <button class="btn-ver-detalles" data-id="${producto.id}">Ver detalles</button>
            </div>
        `;
        productosContainer.appendChild(productoElement);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Filtros de categoría
    document.querySelectorAll('.categoria-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.categoria-btn.active').classList.remove('active');
            btn.classList.add('active');
            filtroCategoria = btn.dataset.categoria;
            renderizarProductos();
        });
    });

    // Buscador
    document.getElementById('busqueda').addEventListener('input', (e) => {
        terminoBusqueda = e.target.value;
        renderizarProductos();
    });

    document.getElementById('btn-buscar').addEventListener('click', () => {
        renderizarProductos();
    });

    // Ver detalles del producto
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-ver-detalles')) {
            const id = parseInt(e.target.dataset.id);
            const producto = productos.find(p => p.id === id);
            abrirModalProducto(producto);
        }
    });

    // Carrito icon
    carritoIcon.addEventListener('click', abrirModalCarrito);

    // Cerrar modales
    document.querySelectorAll('.modal-cerrar').forEach(btn => {
        btn.addEventListener('click', cerrarModales);
    });

    // Vaciar carrito
    document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

    // Pagar carrito
    document.getElementById('pagar-carrito').addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('El carrito está vacío');
            return;
        }
        modalCarrito.style.display = 'none';
        modalCliente.style.display = 'block';
    });

    // Enviar formulario
    formularioCliente.addEventListener('submit', enviarPedidoWhatsApp);

    // Clic fuera del modal para cerrar
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            cerrarModales();
        }
    });
}

// Modal producto
function abrirModalProducto(producto) {
    document.getElementById('imagen-modal').src = `img/${producto.imagen}`;
    document.getElementById('nombre-modal').textContent = producto.nombre;
    document.getElementById('precio-modal').textContent = `${producto.precio.toLocaleString()} USD`;
    document.getElementById('descripcion-modal').textContent = producto.descripcion;
    document.getElementById('cantidad-modal').value = 1;
    document.getElementById('cantidad-modal').max = producto.stock;

    // Configurar botones de cantidad
    document.getElementById('decrementar').onclick = () => {
        const input = document.getElementById('cantidad-modal');
        if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    };

    document.getElementById('incrementar').onclick = () => {
        const input = document.getElementById('cantidad-modal');
        if (parseInt(input.value) < producto.stock) input.value = parseInt(input.value) + 1;
    };

    // Configurar botón añadir al carrito
    document.getElementById('añadir-carrito').onclick = () => {
        const cantidad = parseInt(document.getElementById('cantidad-modal').value);
        añadirAlCarrito(producto, cantidad);
        cerrarModales();
    };

    modalProducto.style.display = 'block';
}

// Modal carrito
function abrirModalCarrito() {
    itemsCarrito.innerHTML = '';

    if (carrito.length === 0) {
        itemsCarrito.innerHTML = '<p>El carrito está vacío</p>';
        totalCarrito.textContent = '0';
    } else {
        carrito.forEach((item, index) => {
            const producto = productos.find(p => p.id === item.id);
            const itemElement = document.createElement('div');
            itemElement.classList.add('carrito-item');
            itemElement.innerHTML = `
                <img src="img/${producto.imagen}" alt="${producto.nombre}">
                <div class="carrito-item-info">
                    <h4>${producto.nombre}</h4>
                    <p>${item.cantidad} x ${producto.precio.toLocaleString()} USD</p>
                    <p>Subtotal: ${(item.cantidad * producto.precio).toLocaleString()} USD</p>
                </div>
                <span class="carrito-item-eliminar" data-index="${index}"><i class="fas fa-trash"></i></span>
            `;
            itemsCarrito.appendChild(itemElement);
        });

        // Calcular total
        const total = carrito.reduce((sum, item) => {
            const producto = productos.find(p => p.id === item.id);
            return sum + (item.cantidad * producto.precio);
        }, 0);
        totalCarrito.textContent = total.toLocaleString();

        // Configurar botones eliminar
        document.querySelectorAll('.carrito-item-eliminar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                eliminarDelCarrito(index);
            });
        });
    }

    modalCarrito.style.display = 'block';
}

// Funciones del carrito
function añadirAlCarrito(producto, cantidad) {
    const itemExistente = carrito.find(item => item.id === producto.id);

    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            id: producto.id,
            cantidad: cantidad
        });
    }

    actualizarContadorCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarContadorCarrito();
    abrirModalCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarContadorCarrito();
    abrirModalCarrito();
}

function actualizarContadorCarrito() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    contadorCarrito.textContent = totalItems;
}

// Cerrar todos los modales
function cerrarModales() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Enviar pedido por WhatsApp
function enviarPedidoWhatsApp(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre-cliente').value;
    const telefono = document.getElementById('telefono-cliente').value;
    const email = document.getElementById('email-cliente').value;
    const direccion = document.getElementById('direccion-cliente').value;

    // Validar datos
    if (!nombre || !telefono || !direccion) {
        alert('Por favor complete los campos obligatorios (Nombre, Teléfono y Dirección)');
        return;
    }

    // Crear mensaje
    let mensaje = `*Nuevo Pedido ElectroHome*%0A%0A`;
    mensaje += `*Cliente:* ${nombre}%0A`;
    mensaje += `*Teléfono:* ${telefono}%0A`;
    if (email) mensaje += `*Email:* ${email}%0A`;
    mensaje += `*Dirección:* ${direccion}%0A%0A`;
    mensaje += `*Detalles del Pedido:*%0A`;

    carrito.forEach(item => {
        const producto = productos.find(p => p.id === item.id);
        mensaje += `- ${producto.nombre} (${item.cantidad} x ${producto.precio.toLocaleString()} USD) = ${(item.cantidad * producto.precio).toLocaleString()} USD%0A`;
    });

    const total = carrito.reduce((sum, item) => {
        const producto = productos.find(p => p.id === item.id);
        return sum + (item.cantidad * producto.precio);
    }, 0);

    mensaje += `%0A*Total:* ${total.toLocaleString()} USD%0A%0A`;
    mensaje += `_Pedido generado desde la tienda online_`;

    // Enviar por WhatsApp
    const numeroWhatsApp = '+5355245080';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir en nueva pestaña para desktop
    if (window.innerWidth > 768) {
        window.open(urlWhatsApp, '_blank');
    }
    // Abrir directamente en app para móviles
    else {
        window.location.href = urlWhatsApp;
    }

    // Resetear formulario y carrito
    formularioCliente.reset();
    carrito = [];
    actualizarContadorCarrito();
    cerrarModales();

    // Mostrar mensaje de confirmación
    alert('Pedido enviado correctamente. Será contactado pronto para confirmar.');
}
