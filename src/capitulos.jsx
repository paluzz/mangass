import imagen from './imagen.jsx';
import editChapter from './editar.js';
import ordenDias from './ordenar.js';
import createObj from './createObj.js';

const olympusLink = "https://olympusvisor.com/capitulo/";
const samuraiLink = "https://samuraiscan.com/leer/";
const yugenmangasLink = "https://yugenmangas.lat/series/";
const knightnoscanLink = "https://knightnoscanlation.com/sr/";
const dia = ["Diario", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo", "Hiatus"];

const olympus = [
    {
        dia: dia[8],
        id: "0004",
        name: "ESQUELETON SOLDIER",
        link1: olympusLink,
        midlink: "31185",
        link2: "/comic-soldado-esqueleto",
        image: imagen.esqueleto,
        chapter: "222"
    },
    {
        dia: dia[1],
        id: "0005",
        name: "RANKER SSS",
        link1: olympusLink,
        midlink: "35154",
        link2: "/comic-regreso-del-ranker-de-clase-sss",
        image: imagen.hacha,
        chapter: "45"
    },
    {
        dia: dia[5],
        id: "0006",
        name: "OVERGEARED",
        link1: olympusLink,
        midlink: "34776",
        link2: "/comic-el-chetado-overg3ar3d",
        image: imagen.overgeared,
        chapter: "166"
    },
    {
        dia: dia[6],
        id: "0009",
        name: "CABALLERO LANZA",
        link1: olympusLink,
        midlink: "34066",
        link2: "/comic-el-regreso-del-legendario-caballero-de-la-lanza",
        image: imagen.lanza,
        chapter: "80"
    },
    {
        dia: dia[8],
        id: "0010",
        name: "HARD CARRY SUPPORT",
        link1: olympusLink,
        midlink: "34874",
        link2: "/comic-los-chicos-con-hacks",
        image: imagen.soporte,
        chapter: "21"
    },
    {
        dia: dia[3],
        id: "0011",
        name: "NANOMAQUINAS",
        link1: olympusLink,
        midlink: "27302",
        link2: "/comic-el-despiadado-demonio-celestial",
        image: imagen.nano,
        chapter: "142"
    },
    {
        dia: dia[8],
        id: "01001",
        name: "PLAYER",
        link1: olympusLink,
        midlink: "28472",
        link2: "/comic-nueva-vida-del-jugador",
        image: imagen.player,
        chapter: "29"
    },
    {
        dia: dia[4],
        id: "0200",
        name: "SEUL NECROMANCER",
        link1: olympusLink,
        midlink: "64919",
        link2: "/comic-el-nigromante-de-seul",
        image: imagen.necromancer,
        chapter: "21"
    },
    {
        dia: dia[2],
        id: "0201",
        name: "MAGO INFINITO",
        link1: olympusLink,
        midlink: "67043",
        link2: "/comic-shirone-el-infinit077",
        image: imagen.infinito,
        chapter: "39"
    },
    {
        dia: dia[2],
        id: "1005",
        name: "MONTE HUA",
        link1: olympusLink,
        midlink: "39782",
        link2: "/comic-el-regreso-de-la-secta-del-monte-hua",
        image: imagen.hua,
        chapter: "21"
    },
    {
        dia: dia[4],
        id: "0016",
        name: "DESTINO F",
        link: olympusLink,
        link1: olympusLink,
        midlink: "60991",
        link2: "/comic-cazador-de-destinos-de-clase-f6745645",
        image: imagen.destino,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "0100",
        name: "MULTIPLICADOR",
        link1: olympusLink,
        midlink: "65888",
        link2: "/comic-subiendo-de-nivel-con-las-mejores-habilidades",
        image: imagen.multiplicador,
        chapter: "21"
    },
    {
        dia: dia[3],
        id: "0101",
        name: "BARBARO",
        link1: olympusLink,
        midlink: "85224",
        link2: "/comic-dave-el-barbarooo",
        image: imagen.barbaro,
        chapter: "21"
    },
    {
        dia: dia[6],
        id: "0202",
        name: "EVOLUCION DEMONIACA",
        link1: olympusLink,
        midlink: "67460",
        link2: "/comic-evolucion-demoniaca",
        image: imagen.demon,
        chapter: "18"
    },
    {
        dia: dia[5],
        id: "0203",
        name: "CORRUPCION",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-el-hijo-de-la-corrupcion",
        image: imagen.priest,
        chapter: "0"
    },
    {
        dia: dia[7],
        id: "2214",
        name: "MAGO DORADO",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-el-doradin-ellie",
        image: imagen.gold,
        chapter: "20"
    },
    {
        dia: dia[6],
        id: "2215",
        name: "MAGO DRAGON",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-mago-devorador-de-dragones",
        image: imagen.drake,
        chapter: "20"
    },
    {
        dia: dia[6],
        id: "2216",
        name: "+99 PALO",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-palito-cheto",
        image: imagen.palo,
        chapter: "20"
    },
    {
        dia: dia[2],
        id: "2217",
        name: "ACERO MILICO",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-soldado-de-acero",
        image: imagen.acero,
        chapter: "4"
    },
    {
        dia: dia[1],
        id: "2218",
        name: "MARCIAL SIN NOMBRE",
        link1: olympusLink,
        midlink: "74718",
        link2: "/comic-el-dios-marcial-que-regreso-al-nivel-2",
        image: imagen.noname,
        chapter: "4"
    },
    {
        dia: dia[7],
        id: "2219",
        name: "SUMMONER",
        link1: olympusLink,
        midlink: "74718",
        link2: "/comic-nigromante-yo-soy-la-plaga",
        image: imagen.summoner,
        chapter: "4"
    },
    {
        dia: dia[2],
        id: "9876",
        name: "BLACK SCYTHE",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-la-regresion-100-del-jugador-de-nivel-maximo",
        image: imagen.guadana,
        chapter: "1"
    },
    {
        dia: dia[3],
        id: "9875",
        name: "10.000 AÑOS FUTURO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-iniciando-sesion-en-10000-anos-en-el-futuro",
        image: imagen.futuro,
        chapter: "1"
    },
    {
        dia: dia[3],
        id: "9654654654",
        name: "ARBOL DIVINO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-arbol-mamadisimo",
        image: imagen.arbol,
        chapter: "1"
    },
    {
        dia: dia[2],
        id: "9654654655",
        name: "DEVORADOR",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-mago-devorador-de-talentos",
        image: imagen.devorador,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "9654654656",
        name: "GODZILLA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-renacido-como-un-monstruo-el-auge-del-dios-bestia",
        image: imagen.godzilla,
        chapter: "1"
    },
    {
        dia: dia[7],
        id: "9654654657",
        name: "JUGADOR NO PUEDE SUBIR NIVEL",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-jugador-que-no-puede-subir-de-nivel",
        image: imagen.nonivel,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "9654654658",
        name: "SEÑOR DEMONIO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-realmente-no-soy-el-senor-demonio",
        image: imagen.demonlord,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "9654654658",
        name: "PALADIN",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-paladin-de-rango-sss-que-transciende-el-sentido-comun",
        image: imagen.paladin,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "9654654658",
        name: "CIVILIZACION NEBULA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-civilizacion-nebula",
        image: imagen.nebula,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "9654654658",
        name: "NIGROMANTE FUERZA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-nigromante-de-fuerza-maxima-olympus-ver",
        image: imagen.necfuerza,
        chapter: "1"
    },
    /*
    {
        id: "0015",
        name: "DIOS POLLO",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "20845",
        link2: "/comic-el-primer-gran-dios-eterno",
        image: imagen.pollo,
        chapter: "78"
    },*/

]
const temps = [
    createObj(dia[0], "99999", "MARTIAL PEAK", "3000", imagen.martial, "https://manhuako.com/manhua/martial-peak/chapter-"),
    createObj(dia[0], "66666", "YUAN ZUN", "892", imagen.yuan, samuraiLink + "yuan-zun/capitulo-"),
    createObj(dia[8], "0002", "SECOND LIFE RANKER", "", imagen.ranker, yugenmangasLink + "segunda-vida-para-ser-un-ranker/capitulo-"),
    createObj(dia[8], "0003", "REY ESPADA", "", imagen.espada, knightnoscanLink + "el-flipante-rey-de-la-espada/capitulo-"),
    createObj(dia[7], "0007", "CAZADOR SUIC1D4", "", imagen.suic1d3, yugenmangasLink + "cazador-suicida-de-clase-sss/capitulo-"),
    createObj(dia[2], "0008", "RANKER OSO", "", imagen.osito, yugenmangasLink + "el-retorno-del-ranker-remake/capitulo-"),
    createObj(dia[2], "00029", "FRANCOTIRADOR", "", imagen.arcane, samuraiLink + "el-francotirador-de-nivel-arcano/capitulo-"),
    createObj(dia[5], "00030", "COME LIBROS", "", imagen.libro, yugenmangasLink + "el-mago-comedor-de-libros/capitulo-"),
    createObj(dia[6], "00099", "COMBAT CONTINENT", "", imagen.combat2, "https://www.mundodonghua.com/ver/combat-continent-2/"),
]
export const combinados = [...temps, ...olympus];

editChapter(combinados, "MARTIAL PEAK", "3647");

editChapter(temps, "YUAN ZUN", "1024");

editChapter(temps, "second life ranker", "161");

editChapter(temps, "REY ESPADA", "186");

editChapter(temps, "CAZADOR SUIC1D4", "104");

editChapter(temps, "RANKER OSO", "110");

editChapter(temps, "FRANCOTIRADOR", "112");

editChapter(temps, "COME LIBROS", "107");

editChapter(temps, "COMBAT CONTINENT", "30");

//------------------------------------------------

editChapter(olympus, "ESQUELETON SOLDIER", "247", "70253");

editChapter(olympus, "RANKER SSS", "87", "85956");

editChapter(olympus, "OVERGEARED", "191", "71793");

editChapter(olympus, "CABALLERO LANZA", "99", "66507");

editChapter(olympus, "MONSTRUO", "28.5", "34874");

editChapter(olympus, "HARD CARRY SUPPORT", "50", "79171");

editChapter(olympus, "NANOMAQUINAS", "160", "68280");

editChapter(olympus, "PLAYER", "52", "70273");

editChapter(olympus, "SEUL NECROMANCER", "108", "81823");

editChapter(olympus, "MONTE HUA", "21", "39782");

editChapter(olympus, "DESTINO F", "54", "84854");

editChapter(olympus, "MULTIPLICADOR", "43", "81878");

editChapter(olympus, "BARBARO", "47", "86112");

editChapter(olympus, "EVOLUCION DEMONIACA", "43", "85805");

editChapter(olympus, "CORRUPCION", "11", "69700");

editChapter(olympus, "MAGO INFINITO", "63", "86001");

editChapter(olympus, "MAGO DORADO", "32", "79630");

editChapter(olympus, "MAGO DRAGON", "29", "79401");

editChapter(olympus, "DEVORADOR", "55", "85704");

editChapter(olympus, "+99 PALO", "20", "33453");

editChapter(olympus, "ACERO MILICO", "23", "85953");

editChapter(olympus, "Marcial sin nombre", "43", "85938");

editChapter(olympus, "SUMMONER", "51", "85880");

editChapter(olympus, "BLACK SCYTHE", "35", "86004");

editChapter(olympus, "10.000 años futuro", "85", "86172");

editChapter(olympus, "Arbol Divino", "99", "74082");

editChapter(olympus, "GODZILLA", "51", "86156");

editChapter(olympus, "JUGADOR NO PUEDE SUBIR NIVEL", "131", "85641");

editChapter(olympus, "SEÑOR DEMONIO", "18", "85522");

editChapter(olympus, "PALADIN", "2", "85887");

editChapter(olympus, "CIVILIZACION NEBULA", "25", "86072");

editChapter(olympus, "NIGROMANTE FUERZA", "25", "86072");

//editChapter(olympus, "DIOS POLLO", "184", "50613");



ordenDias(combinados);



