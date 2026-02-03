var config = {
     style: 'mapbox://styles/cristhiansolano13/cml6v6fqg001801s95rz62dmz',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiY3Jpc3RoaWFuc29sYW5vMTMiLCJhIjoiY21sNmhqczFpMDN3ZDNlcXI3NW5majRyMyJ9.B-OByMPLHhVn7xWONN4R1Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Estado Sanitario de las playas de Euskadi durante el 2025',
    subtitle: 'Storymap del Estado sanitario de las playas.',
    byline: 'By Cristhian Solano',
    footer: 'Source: https://datos.gob.es/ <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA LA ARENA - MUSKIZ',
            image: 'https://i.ytimg.com/vi/NjgQ1H9WTL8/maxresdefault.jpg',
            description: `
            <p><strong>EUS:</strong> Muskiz eta Zierbena udalerrien artean kokatua. Bere hondar ilunagatik, duna aktiboengatik eta korronte indartsuengatik ezaguna, Bizkaiko surfean aritzeko leku garrantzitsua da.</p>
            <p><strong>ES:</strong> Situada entre los municipios de Muskiz y Zierbena. Conocida por su arena oscura, dunas activas y fuertes corrientes, siendo un punto destacado para el surf en Bizkaia.</p>`,
            location: {
                center: [-3.11880, 43.34767],
                zoom: 12.29,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE EREAGA PM2-IZQUIERDA',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002994_g1_rec_turismo/es_2994/images/FP_ereaga.jpg',
            description: `
            <p><strong>EUS:</strong> Ereaga hondartza, Getxon (Bizkaia) kokatua, Algortako Portu Zaharraren eta Arriluzeko horma-haustearen artean, 800 metroko hondar finarekin eta zerbitzu bikainak ditu, uraren kalitatea bikaina eta kutsadura arrisku ertaina duelarik.</p>
            <p><strong>ES:</strong>  La playa de Ereaga, situada en Getxo (Bizkaia) entre el Puerto Viejo de Algorta y el espigón de Arriluze, cuenta con 800 metros de fina arena y excelentes servicios, con una calidad de agua clasificada como excelente y un riesgo de contaminación medio.</p>`,
            location: {
                center: [-3.01457, 43.34177],
                zoom: 12.29,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE AZKORRI PM1-CENTRO',
            image: 'https://turismovasco.com/wp-content/uploads/2021/07/playa-de-azkorri-de-getxo-azkorri-una-playa-con-magnetismo-ruta-guiada-en-el-flysch-de-Bizkaia-1024x768.jpg',
            description: `
            <p><strong>EUS:</strong> Azkorri edo Gorrondatxe hondartza, Gecho udalerri bizkaitarrean kokatua, harea, harriak eta landaredia dituen hondartza bat da.</p>
            <p><strong>ES:</strong> La playa de Azkorri o Gorrondatxe, ubicada en el municipio vizcaíno de Guecho, País Vasco, es una playa con arena, rocas y vegetación. </p>`,
            location: {
                center: [-3.01847, 43.38005],
                zoom: 15.29,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'PLAYA ARMINTZA (ARMINTZEKOALDE)',
            image: 'https://static.elcorreo.com/comun/movil2016/imagenes_playas/0000431.jpg',
            description: `
            <p><strong>EUS:</strong> Lemoiz udalerrian kokatua, Bilbotik 32 kilometrora, harriz eta harea lodi eta ilunez osatuta dago. Kala natural batean kokatua, Armintzako arrantza-barrutiko gunerik pintoreskoena osatzen du, aisialdirako ontzien egoitza den portutik gertu.</p>
            <p><strong>ES:</strong> Situada en el municipio de Lemoiz, a 32 kilómetros de Bilbao, está formada por piedras y arena gruesa y oscura. Se ubica en una ensenada natural y constituye la zona más pintoresca del barrio pesquero de Armintza, junto a su puerto, que alberga embarcaciones de recreo.</p>`,
            location: {
                center: [-2.89635, 43.43325],
                zoom: 12.29,
                pitch: 40.00,
                bearing: 20.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
