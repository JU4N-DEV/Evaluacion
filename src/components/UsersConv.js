import React from "react";
import Select from 'react-select';
import './Users.css';

const options = [
    {
        value: "1170",
        label: "YADI"
    },
    {
        value: "1173",
        label: "GARCIA"
    },
    {
        value: "1176",
        label: "QUINTANAR"
    },
    {
        value: "1183",
        label: "LA CAVA"
    },
    {
        value: "1185",
        label: "JOEL"
    },
    {
        value: "1186",
        label: "LA CONCHITA"
    },
    {
        value: "1189",
        label: "LOS PINOS"
    },
    {
        value: "1191",
        label: "SAN LORENZO"
    },
    {
        value: "1195",
        label: "REYES"
    },
    {
        value: "1197",
        label: "TEUTLI"
    },
    {
        value: "1199",
        label: "LA ROSA DEL SUR"
    },
    {
        value: "1201",
        label: "TRES HERMANOS"
    },
    {
        value: "1202",
        label: "EL PASO"
    },
    {
        value: "1210",
        label: "LOPEZ HERMANOS"
    },
    {
        value: "1211",
        label: "OSCAR"
    },
    {
        value: "1213",
        label: "LA CABANA"
    },
    {
        value: "1214",
        label: "EL TRIANGULO"
    },
    {
        value: "1216",
        label: "TELMITA"
    },
    {
        value: "1229",
        label: "CITLALI"
    },
    {
        value: "1233",
        label: "EL CALVARIO"
    },
    {
        value: "1235",
        label: "DONA CHAYO II"
    },
    {
        value: "1238",
        label: "OAXACA"
    },
    {
        value: "1240",
        label: "MEDINA"
    },
    {
        value: "1242",
        label: "DIANA"
    },
    {
        value: "1255",
        label: "EL NUEVO AMANECER"
    },
    {
        value: "1260",
        label: "EUCALIPTO"
    },
    {
        value: "1261",
        label: "FRONTERA"
    },
    {
        value: "1263",
        label: "LIZ"
    },
    {
        value: "1264",
        label: "MIACATLAN"
    },
    {
        value: "1265",
        label: "YOLIS"
    },
    {
        value: "1270",
        label: "LA LUPITA"
    },
    {
        value: "1273",
        label: "ZARATE"
    },
    {
        value: "1277",
        label: "ANGELITA"
    },
    {
        value: "1278",
        label: "UN REGALO DE DIOS"
    },
    {
        value: "1281",
        label: "LA HERENCIA"
    },
    {
        value: "1282",
        label: "MARIFER"
    },
    {
        value: "1283",
        label: "LA VECINA"
    },
    {
        value: "1284",
        label: "HI BYE"
    },
    {
        value: "1286",
        label: "LUPITA"
    },
    {
        value: "1287",
        label: "LA NUEVA"
    },
    {
        value: "1288",
        label: "EL MORO"
    },
    {
        value: "1289",
        label: "CRISTAL"
    },
    {
        value: "1291",
        label: "MAR"
    },
    {
        value: "1292",
        label: "MULTI TIENDA"
    },
    {
        value: "1293",
        label: "LOIDA"
    },
    {
        value: "1295",
        label: "MERLO"
    },
    {
        value: "1296",
        label: "CHELA"
    },
    {
        value: "1297",
        label: "EL LEON"
    },
    {
        value: "1301",
        label: "TONY"
    },
    {
        value: "1302",
        label: "EL CHANGARRITO"
    },
    {
        value: "1304",
        label: "LA CABANA"
    },
    {
        value: "1308",
        label: "SAN LORENZO"
    },
    {
        value: "1311",
        label: "SAURY"
    },
    {
        value: "1314",
        label: "PAQUITO"
    },
    {
        value: "1321",
        label: "LA PODEROSA"
    },
    {
        value: "1326",
        label: "TEQUILAS Y MEZCALES"
    },
    {
        value: "1329",
        label: "LOS 3 ASES"
    },
    {
        value: "1332",
        label: "LUNA"
    },
    {
        value: "1333",
        label: "ANGUEL"
    },
    {
        value: "1337",
        label: "VIKI"
    },
    {
        value: "1350",
        label: "MI GUADALUPITA"
    },
    {
        value: "1401",
        label: "EL 41"
    },
    {
        value: "1409",
        label: "LA FLOR DE MORELOS"
    },
    {
        value: "1458",
        label: "LA IMPERIAL"
    },
    {
        value: "1484",
        label: "VILLALONGIN"
    },
    {
        value: "1495",
        label: "LA DEPORTIVA"
    },
    {
        value: "1565",
        label: "EL RINOCERONTE"
    },
    {
        value: "1648",
        label: "PASTOR INGLES"
    },
    {
        value: "1674",
        label: "MIULLER"
    },
    {
        value: "1696",
        label: "BETY"
    },
    {
        value: "1835",
        label: "LAURITA"
    },
    {
        value: "1963",
        label: "EL COTI"
    },
    {
        value: "1968",
        label: "MOLE DON PANCHO"
    },
    {
        value: "1969",
        label: "JAVIER"
    },
    {
        value: "1986",
        label: "SAN MARTIN"
    },
    {
        value: "1990",
        label: "VANI"
    },
    {
        value: "2004",
        label: "LA POZA"
    },
    {
        value: "2032",
        label: "PATY"
    },
    {
        value: "2037",
        label: "CASA GARCIA"
    },
    {
        value: "2039",
        label: "LA CONSENTIDA II"
    },
    {
        value: "2050",
        label: "TLACATECPAC"
    },
    {
        value: "2078",
        label: "KABLAN"
    },
    {
        value: "2102",
        label: "LA AZTECA"
    },
    {
        value: "2110",
        label: "MARTINEZ"
    },
    {
        value: "2905",
        label: "ABARROTES GARCIA"
    },
    {
        value: "2930",
        label: "MI TIENDITA"
    },
    {
        value: "2962",
        label: "ELGIS"
    },
    {
        value: "2974",
        label: "COXTOCAN"
    },
    {
        value: "2994",
        label: "CARLITOS"
    },
    {
        value: "2995",
        label: "YAZMIN"
    },
    {
        value: "2996",
        label: "CHAPULTEPEC"
    },
    {
        value: "2997",
        label: "LOBITOS"
    },
    {
        value: "2999",
        label: "DIEGO"
    },
    {
        value: "3000",
        label: "DON PONCHO"
    },
    {
        value: "3004",
        label: "LA MESITA 77"
    },
    {
        value: "3005",
        label: "NERIA"
    },
    {
        value: "3007",
        label: "NORMA"
    },
    {
        value: "3008",
        label: "BENITO MACHELAS"
    },
    {
        value: "3016",
        label: "EL ARENAL"
    },
    {
        value: "3017",
        label: "LA ESCALERITA"
    },
    {
        value: "3019",
        label: "GABY"
    },
    {
        value: "3022",
        label: "LA CASITA"
    },
    {
        value: "3025",
        label: "LA MONTANA"
    },
    {
        value: "3033",
        label: "IMPERIUM 7 GRADOS"
    },
    {
        value: "3038",
        label: "EL PATO LOCO"
    },
    {
        value: "3043",
        label: "YULI"
    },
    {
        value: "3044",
        label: "EL CONSENTIDO"
    },
    {
        value: "3053",
        label: "ABRIL Y MITZI"
    },
    {
        value: "3058",
        label: "EL NUEVO PASO DEL CAMIONERO"
    },
    {
        value: "3059",
        label: "LA SANTISIMA"
    },
    {
        value: "3082",
        label: "ENRIQUE"
    },
    {
        value: "3087",
        label: "EL BORREGO SALVAJE"
    },
    {
        value: "3099",
        label: "LA MONTANA"
    },
    {
        value: "3102",
        label: "LA CONCHITA"
    },
    {
        value: "3109",
        label: "SURTITIENDA"
    },
    {
        value: "3111",
        label: "SIXTA"
    },
    {
        value: "3127",
        label: "SAN ANTONIO"
    },
    {
        value: "3159",
        label: "TABASCO"
    },
    {
        value: "3163",
        label: "MARIO"
    },
    {
        value: "3168",
        label: "NALLE"
    },
    {
        value: "3169",
        label: "CHATITA"
    },
    {
        value: "3172",
        label: "LONJA MERCANTIL"
    },
    {
        value: "3180",
        label: "KARLA"
    },
    {
        value: "3181",
        label: "ZARAGOZA"
    },
    {
        value: "3183",
        label: "LEO"
    },
    {
        value: "3186",
        label: "LA CHIQUITA"
    },
    {
        value: "3194",
        label: "EL PROGRESO"
    },
    {
        value: "3196",
        label: "ARCOIRIS"
    },
    {
        value: "3204",
        label: "VICTORIA"
    },
    {
        value: "3206",
        label: "JESSY"
    },
    {
        value: "3232",
        label: "ARACELI"
    },
    {
        value: "3242",
        label: "MARIA DEL CARMEN"
    },
    {
        value: "3252",
        label: "LESLIE"
    },
    {
        value: "3256",
        label: "BECERERRAS CASTILLO"
    },
    {
        value: "3258",
        label: "FLORECITA"
    },
    {
        value: "3260",
        label: "DENISSE"
    },
    {
        value: "3261",
        label: "EL DESAHOGO"
    },
    {
        value: "3290",
        label: "KARLA"
    },
    {
        value: "3291",
        label: "LA CARRETA"
    },
    {
        value: "3323",
        label: "PALMAS"
    },
    {
        value: "3324",
        label: "MI ANGEL"
    },
    {
        value: "3331",
        label: "ELOY"
    },
    {
        value: "3345",
        label: "AZTECA"
    },
    {
        value: "3355",
        label: "LA COLONIA"
    },
    {
        value: "3356",
        label: "NIVARDO"
    },
    {
        value: "3357",
        label: "JACSIRE"
    },
    {
        value: "3363",
        label: "LA GOTITA"
    },
    {
        value: "3364",
        label: "EL NUEVO SOL"
    },
    {
        value: "3366",
        label: "LA ESCONDIDA"
    },
    {
        value: "3373",
        label: "LARAS"
    },
    {
        value: "3376",
        label: "LAURITA"
    },
    {
        value: "3380",
        label: "LA PROVIDENCIA"
    },
    {
        value: "3386",
        label: "LEAL"
    },
    {
        value: "3388",
        label: "VIOLETA"
    },
    {
        value: "3390",
        label: "CRISTAL"
    },
    {
        value: "3393",
        label: "EL NEVADO"
    },
    {
        value: "3397",
        label: "REINA XOCHILT"
    },
    {
        value: "3402",
        label: "LOS PINITOS"
    },
    {
        value: "3409",
        label: "EL QUINQUE"
    },
    {
        value: "3411",
        label: "LONJA ALEX"
    },
    {
        value: "3415",
        label: "ABARROTES EL CENTRO"
    },
    {
        value: "3425",
        label: "DANY"
    },
    {
        value: "3428",
        label: "THE HOUSE"
    },
    {
        value: "3430",
        label: "EL TRENECITO"
    },
    {
        value: "3438",
        label: "RESTAURANT BAR EL BRACERITO"
    },
    {
        value: "3439",
        label: "RESTAURANT BAR EL BRACERO"
    },
    {
        value: "3444",
        label: "LA VENTANITA"
    },
    {
        value: "3450",
        label: "LAS LAURAS"
    },
    {
        value: "3457",
        label: "JUQUILITA"
    },
    {
        value: "3458",
        label: "LOS TORRES"
    },
    {
        value: "3465",
        label: "AGUILA"
    },
    {
        value: "3467",
        label: "RODRIGUEZ"
    },
    {
        value: "3479",
        label: "EL ESPANOL"
    },
    {
        value: "3480",
        label: "MIX OZUMBA"
    },
    {
        value: "3481",
        label: "LUPITA"
    },
    {
        value: "3485",
        label: "BAUTISTA"
    },
    {
        value: "3487",
        label: "EL PLEBELLO"
    },
    {
        value: "3493",
        label: "SANTA CECILIA"
    },
    {
        value: "3501",
        label: "ROSY"
    },
    {
        value: "3505",
        label: "LA CONCHITA"
    },
    {
        value: "3508",
        label: "MORALES"
    },
    {
        value: "3515",
        label: "LOS 3 GARCIAS"
    },
    {
        value: "3518",
        label: "FER"
    },
    {
        value: "3521",
        label: "VIC"
    },
    {
        value: "3523",
        label: "RUBI"
    },
    {
        value: "3525",
        label: "LA 20 DE NOVIEMBRE"
    },
    {
        value: "3530",
        label: "EL PROGRESO"
    },
    {
        value: "3544",
        label: "MI GLORIA"
    },
    {
        value: "3546",
        label: "LA CASITA"
    },
    {
        value: "3547",
        label: "TAPIA"
    },
    {
        value: "3560",
        label: "LAS DELICIAS"
    },
    {
        value: "3565",
        label: "EL COLIBRI"
    },
    {
        value: "3575",
        label: "ORTIZ"
    },
    {
        value: "3583",
        label: "ADRI"
    },
    {
        value: "3589",
        label: "EL PUMA"
    },
    {
        value: "3590",
        label: "LA REFORMA"
    },
    {
        value: "3593",
        label: "COMERCIAL VIENA"
    },
    {
        value: "3594",
        label: "QUETITA"
    },
    {
        value: "3595",
        label: "LA GRAN ESQUINA"
    },
    {
        value: "3601",
        label: "JUQUILITA"
    },
    {
        value: "3603",
        label: "DULCE MARIA LOPEZ"
    },
    {
        value: "3607",
        label: "EL JARDIN"
    },
    {
        value: "3611",
        label: "LA BALANZA MERCANTIL"
    },
    {
        value: "3614",
        label: "JULISSA"
    },
    {
        value: "3617",
        label: "DEPOSITO AGUILAR"
    },
    {
        value: "3622",
        label: "GLADY S"
    },
    {
        value: "3634",
        label: "ABARROTES LEYVA"
    },
    {
        value: "3640",
        label: "VICTORIA"
    },
    {
        value: "3641",
        label: "AVILIM"
    },
    {
        value: "3642",
        label: "EL BUEN SURTIDO"
    },
    {
        value: "3645",
        label: "CASA MARTINEZ"
    },
    {
        value: "3650",
        label: "ABARROTES LUIS YAEL"
    },
    {
        value: "3651",
        label: "ABARROTES EL CENTRO"
    },
    {
        value: "3660",
        label: "SUPER SMART"
    },
    {
        value: "3667",
        label: "LA NUEVA"
    },
    {
        value: "3671",
        label: "EL PORVENIR"
    },
    {
        value: "3672",
        label: "SAN JUAN"
    },
    {
        value: "3674",
        label: "EL BURRO PUNK"
    },
    {
        value: "3675",
        label: "DE IMPROVISO"
    },
    {
        value: "3676",
        label: "KIMBA"
    },
    {
        value: "3677",
        label: "EL PASO"
    },
    {
        value: "3680",
        label: "ACUARIO"
    },
    {
        value: "3683",
        label: "SAN JOSE"
    },
    {
        value: "3690",
        label: "JUANITO"
    },
    {
        value: "3694",
        label: "ADRIANITA"
    },
    {
        value: "3697",
        label: "MACONDO"
    },
    {
        value: "3703",
        label: "DON PACHO"
    },
    {
        value: "3706",
        label: "OSOLANDIA"
    },
    {
        value: "3713",
        label: "VINOSAURY TULYEHUALCO"
    },
    {
        value: "3716",
        label: "LA VICTORIA"
    },
    {
        value: "3717",
        label: "EL RINCON DE JOSE ALFREDO"
    },
    {
        value: "3720",
        label: "LAURA"
    },
    {
        value: "3722",
        label: "LOS CARRILLOS"
    },
    {
        value: "3723",
        label: "REINA"
    },
    {
        value: "3724",
        label: "ULISES"
    },
    {
        value: "3727",
        label: "BOLANOS"
    },
    {
        value: "3728",
        label: "MUNDO"
    },
    {
        value: "3729",
        label: "LA ESTRELLA"
    },
    {
        value: "3732",
        label: "ANDY"
    },
    {
        value: "3734",
        label: "ROYAN"
    },
    {
        value: "3735",
        label: "ISABEL"
    },
    {
        value: "3737",
        label: "MINI SUPER I"
    },
    {
        value: "3738",
        label: "4 REINAS"
    },
    {
        value: "3744",
        label: "LA PREFERIDA"
    },
    {
        value: "3745",
        label: "EL RINCONCITO"
    },
    {
        value: "3748",
        label: "EMIL"
    },
    {
        value: "3749",
        label: "LOS PINOS"
    },
    {
        value: "3751",
        label: "LUIS MIGUEL"
    },
    {
        value: "3756",
        label: "3 HERMANOS MARTINEZ"
    },
    {
        value: "3757",
        label: "CESARIN"
    },
    {
        value: "3762",
        label: "MI TIENDITA"
    },
    {
        value: "3763",
        label: "NUEVA IMAGEN"
    },
    {
        value: "3764",
        label: "LA TLAXCALTECA"
    },
    {
        value: "3766",
        label: "SAN JOSE"
    },
    {
        value: "3769",
        label: "LA ESTRELLITA"
    },
    {
        value: "3771",
        label: "DITRIBUIDORA GALLARDO"
    },
    {
        value: "3772",
        label: "MARTHA"
    },
    {
        value: "3773",
        label: "EL SACRIFICIO"
    },
    {
        value: "3774",
        label: "4 HERMANOS"
    },
    {
        value: "3775",
        label: "DEL CARMEN"
    },
    {
        value: "3776",
        label: "SAN JOSE I"
    },
    {
        value: "3785",
        label: "TERE"
    },
    {
        value: "3786",
        label: "DRINKSTOGO"
    },
    {
        value: "3787",
        label: "LA MIXTECA"
    },
    {
        value: "3788",
        label: "BENAVIDES"
    },
    {
        value: "3790",
        label: "LA ESPERANZA"
    },
    {
        value: "3791",
        label: "JAZMIN"
    },
    {
        value: "3797",
        label: "HERMANOS GONZALEZ"
    },
    {
        value: "3799",
        label: "LOS CERRILLOS"
    },
    {
        value: "3801",
        label: "ASHLEY"
    },
    {
        value: "3805",
        label: "JIMENEZ"
    },
    {
        value: "3806",
        label: "VADISA"
    },
    {
        value: "3807",
        label: "ROSIER"
    },
    {
        value: "3810",
        label: "LOS GIRASOLES"
    },
    {
        value: "3811",
        label: "ROSA"
    },
    {
        value: "3812",
        label: "DANY"
    },
    {
        value: "3813",
        label: "LUNA"
    },
    {
        value: "3821",
        label: "GABY"
    },
    {
        value: "3824",
        label: "SULAMITA"
    },
    {
        value: "3826",
        label: "KARLA"
    },
    {
        value: "3829",
        label: "LUNA"
    },
    {
        value: "3830",
        label: "SAN LUIS DE LAS FLORES"
    },
    {
        value: "3832",
        label: "SAN ISIDRO"
    },
    {
        value: "3837",
        label: "GUALMAR"
    },
    {
        value: "3840",
        label: "LA TAPATIA"
    },
    {
        value: "3844",
        label: "ESPERANZA I"
    },
    {
        value: "3845",
        label: "TORRES BODET"
    },
    {
        value: "3846",
        label: "ALEX I"
    },
    {
        value: "3875",
        label: "EL MARIACHI"
    },
    {
        value: "3897",
        label: "DRINKS"
    },
    {
        value: "3899",
        label: "ARACELI II"
    },
    {
        value: "3957",
        label: "LUISITO"
    },
    {
        value: "4004",
        label: "PABLO"
    },
    {
        value: "4006",
        label: "SAN MIGUEL"
    },
    {
        value: "4189",
        label: "PEDRO VERGARA"
    },
    {
        value: "4195",
        label: "ESTRADA"
    },
    {
        value: "4197",
        label: "TAPIA II"
    },
    {
        value: "4220",
        label: "ANGUS GRILL"
    },
    {
        value: "4223",
        label: "PRIVADA INES"
    },
    {
        value: "4226",
        label: "ALCATRAZ"
    },
    {
        value: "4256",
        label: "SANTA MARIA"
    },
    {
        value: "4261",
        label: "ANGELITO"
    },
    {
        value: "4267",
        label: "LA ROCA"
    },
    {
        value: "4269",
        label: "LA FORTALEZA"
    },
    {
        value: "4279",
        label: "DON POCHO"
    },
    {
        value: "4281",
        label: "NANCY"
    },
    {
        value: "4283",
        label: "IRVING"
    },
    {
        value: "4284",
        label: "EL MAPO"
    },
    {
        value: "4292",
        label: "ACUARIO"
    },
    {
        value: "4306",
        label: "EL NARANJITO"
    },
    {
        value: "4307",
        label: "LOS MENDOZA"
    },
    {
        value: "4309",
        label: "EL BUEN COMER CORENA"
    },
    {
        value: "4312",
        label: "REY DE COPAS"
    },
    {
        value: "4313",
        label: "LOS PEREZ"
    },
    {
        value: "4323",
        label: "MI ULTIMA COPA"
    },
    {
        value: "4325",
        label: "EL FARAON"
    },
    {
        value: "4328",
        label: "LUIS GILBERTO MONTEROLA RIOS"
    },
    {
        value: "4335",
        label: "LA DULCE VIDA"
    },
    {
        value: "4337",
        label: "JANETH"
    },
    {
        value: "4340",
        label: "VINOS MENDOZA"
    },
    {
        value: "4343",
        label: "MONTE BELLO"
    },
    {
        value: "4346",
        label: "EL GATO T"
    },
    {
        value: "4355",
        label: "JESUS"
    },
    {
        value: "4366",
        label: "EL CHAVO"
    },
    {
        value: "4376",
        label: "EL ENCANTO"
    },
    {
        value: "4378",
        label: "LA ESPERANZA"
    },
    {
        value: "4379",
        label: "SAN ANTONIO"
    },
    {
        value: "4380",
        label: "SAN FRANCISCO"
    },
    {
        value: "4382",
        label: "PAOLA II"
    },
    {
        value: "4386",
        label: "LA FLOR"
    },
    {
        value: "4389",
        label: "LA ESCONDIDA"
    },
    {
        value: "4392",
        label: "DEPOSITO LA PALMA"
    },
    {
        value: "4395",
        label: "IRMA"
    },
    {
        value: "4406",
        label: "LA PLAYA"
    },
    {
        value: "4409",
        label: "PAOLA"
    },
    {
        value: "4412",
        label: "PINEDA"
    },
    {
        value: "4416",
        label: "JUNIOR"
    },
    {
        value: "4418",
        label: "MARY"
    },
    {
        value: "4420",
        label: "GRILLO"
    },
    {
        value: "4423",
        label: "EL GRAN TACO"
    },
    {
        value: "4426",
        label: "LA ESCONDIDA"
    },
    {
        value: "4427",
        label: "PALOMA"
    },
    {
        value: "4428",
        label: "BELTRAN"
    },
    {
        value: "4429",
        label: "SERVI-VA"
    },
    {
        value: "4442",
        label: "CHUCHIN"
    },
    {
        value: "4444",
        label: "SERVICIO GAYTAN"
    },
    {
        value: "4445",
        label: "GABY"
    },
    {
        value: "4446",
        label: "LA ILUSION"
    },
    {
        value: "4456",
        label: "CLAUDIA"
    },
    {
        value: "4458",
        label: "DIANA"
    },
    {
        value: "4465",
        label: "EL PROVENIR"
    },
    {
        value: "4466",
        label: "ESPINOSA"
    },
    {
        value: "4475",
        label: "EL TUCAN"
    },
    {
        value: "4476",
        label: "CUAUHTEMOC"
    },
    {
        value: "4477",
        label: "LA HUASTECA"
    },
    {
        value: "4479",
        label: "IRAIS"
    },
    {
        value: "4483",
        label: "BOCANADA"
    },
    {
        value: "4487",
        label: "SAN MIGUEL"
    },
    {
        value: "4497",
        label: "NIETO"
    },
    {
        value: "4517",
        label: "MOLES CHIO"
    },
    {
        value: "4519",
        label: "NUXTLA"
    },
    {
        value: "4523",
        label: "PAULINA"
    },
    {
        value: "4526",
        label: "LOS ANGELES"
    },
    {
        value: "4527",
        label: "ALACRAN"
    },
    {
        value: "4530",
        label: "ANGEL"
    },
    {
        value: "4534",
        label: "CECY"
    },
    {
        value: "4535",
        label: "CHAFIS"
    },
    {
        value: "4537",
        label: "DEPOSITO SAN PEDRO"
    },
    {
        value: "4539",
        label: "TEMA"
    },
    {
        value: "4542",
        label: "EL COMPADRE"
    },
    {
        value: "4547",
        label: "ESPERANZA"
    },
    {
        value: "4549",
        label: "JUQUILITA"
    },
    {
        value: "4550",
        label: "LA BARRANCA"
    },
    {
        value: "4553",
        label: "LA PLACITA"
    },
    {
        value: "4555",
        label: "LAURITA"
    },
    {
        value: "4562",
        label: "MAX"
    },
    {
        value: "4564",
        label: "MORALES"
    },
    {
        value: "4565",
        label: "PADILLA"
    },
    {
        value: "4576",
        label: "CHARO"
    },
    {
        value: "4579",
        label: "LA MICHOACANA"
    },
    {
        value: "4580",
        label: "SUPER C"
    },
    {
        value: "4581",
        label: "LA ESCONDIDITA"
    },
    {
        value: "4587",
        label: "EL SEGUNDO"
    },
    {
        value: "4589",
        label: "LOS ARCOS"
    },
    {
        value: "4592",
        label: "WINDS"
    },
    {
        value: "4595",
        label: "DAISY"
    },
    {
        value: "4605",
        label: "LOS PANDITAS"
    },
    {
        value: "4606",
        label: "MARTELL"
    },
    {
        value: "4613",
        label: "ROSALES"
    },
    {
        value: "4617",
        label: "GARCES"
    },
    {
        value: "4627",
        label: "JUQUILITA"
    },
    {
        value: "4635",
        label: "FLOGAR"
    },
    {
        value: "4646",
        label: "JAZZ"
    },
    {
        value: "4649",
        label: "MINI SUPER MILPA ALTA"
    },
    {
        value: "4650",
        label: "MISCELANEA LIZZ"
    },
    {
        value: "4652",
        label: "MACK"
    },
    {
        value: "4654",
        label: "LA TAPATIA"
    },
    {
        value: "4658",
        label: "ITZAYANA"
    },
    {
        value: "4661",
        label: "ROMERO"
    },
    {
        value: "4664",
        label: "LA GITANA"
    },
    {
        value: "4669",
        label: "ELOKZOO"
    },
    {
        value: "4677",
        label: "MONCHIS"
    },
    {
        value: "4678",
        label: "LOS 3 PEQUES"
    },
    {
        value: "4679",
        label: "LAS FLORES"
    },
    {
        value: "4686",
        label: "PANHE"
    },
    {
        value: "4690",
        label: "PANTERA"
    },
    {
        value: "4692",
        label: "CRISANTEMA"
    },
    {
        value: "4693",
        label: "LA MADRILENA"
    },
    {
        value: "4703",
        label: "SANTA MARIA"
    },
    {
        value: "4706",
        label: "CASA RODRIGUEZ"
    },
    {
        value: "4708",
        label: "ABI"
    },
    {
        value: "4720",
        label: "BAR"
    },
    {
        value: "4726",
        label: "DANY"
    },
    {
        value: "4727",
        label: "SAN ISIDRO"
    },
    {
        value: "4729",
        label: "CRYSTAL"
    },
    {
        value: "4736",
        label: "LUCY"
    },
    {
        value: "4738",
        label: "LOS GARCIAS"
    },
    {
        value: "4741",
        label: "LA CABANA DEL TIO SAM"
    },
    {
        value: "4749",
        label: "CANO"
    },
    {
        value: "4750",
        label: "XALPA"
    },
    {
        value: "4761",
        label: "RINCON CHELERO"
    },
    {
        value: "4763",
        label: "EL CANELO"
    },
    {
        value: "4766",
        label: "LA ESPIGA SUPER"
    },
    {
        value: "4767",
        label: "ELY"
    },
    {
        value: "4771",
        label: "LA CURVA"
    },
    {
        value: "4772",
        label: "EL JJ II"
    },
    {
        value: "4773",
        label: "FAMILY FROG"
    },
    {
        value: "4774",
        label: "LOS COCHEPOS"
    },
    {
        value: "4778",
        label: "CHARLY"
    },
    {
        value: "4784",
        label: "LA UNIVERSIDAD"
    },
    {
        value: "4788",
        label: "ANAHI"
    },
    {
        value: "4791",
        label: "LA PEQUENA"
    },
    {
        value: "4792",
        label: "MICHELADAS LA CURVA"
    },
    {
        value: "4801",
        label: "CASA BLANCA"
    },
    {
        value: "4808",
        label: "LA PASADITA"
    },
    {
        value: "4820",
        label: "LA CASCADA II"
    },
    {
        value: "4828",
        label: "LA HIDALGUENSE II"
    },
    {
        value: "4836",
        label: "EL CENTRO"
    },
    {
        value: "4838",
        label: "IC"
    },
    {
        value: "4840",
        label: "AMORES DE DON JUAN"
    },
    {
        value: "4841",
        label: "MI LUPITA"
    },
    {
        value: "4847",
        label: "LEURI"
    },
    {
        value: "4853",
        label: "LA HACIENDA"
    },
    {
        value: "4854",
        label: "ABARROTES JESSY"
    },
    {
        value: "4857",
        label: "PARADISSE"
    },
    {
        value: "4861",
        label: "RICAS CARNITAS EL TIGRE"
    },
    {
        value: "4873",
        label: "LA CENTRAL"
    },
    {
        value: "4876",
        label: "CREMERIA LOS 5 HERMANOS"
    },
    {
        value: "4877",
        label: "RAMIREZ III"
    },
    {
        value: "4891",
        label: "GRUPO TH"
    },
    {
        value: "4894",
        label: "GEMA"
    },
    {
        value: "4906",
        label: "COCINA PATY"
    },
    {
        value: "4910",
        label: "PEPE"
    },
    {
        value: "4915",
        label: "ABARROTES MARY TERE"
    },
    {
        value: "4931",
        label: "ABARROTES 4 HERMANOS"
    },
    {
        value: "4933",
        label: "PREMIERE"
    },
    {
        value: "4935",
        label: "LA ESQUINITA"
    },
    {
        value: "4938",
        label: "LA DEL CENTRO"
    },
    {
        value: "4940",
        label: "PALACIOS"
    },
    {
        value: "4941",
        label: "LA LUNA"
    },
    {
        value: "4949",
        label: "LA GUADALUPANA"
    },
    {
        value: "4966",
        label: "VILLA"
    },
    {
        value: "4969",
        label: "LA OLVIDADA"
    },
    {
        value: "4975",
        label: "WILLY"
    },
    {
        value: "4982",
        label: "EL CENTRO"
    },
    {
        value: "4983",
        label: "MIA"
    },
    {
        value: "4993",
        label: "LA PASADITA 2"
    },
    {
        value: "4997",
        label: "CAMACHITOS"
    },
    {
        value: "4998",
        label: "YOSS"
    },
    {
        value: "5007",
        label: "LA HIDALGUENSE HUICALCO"
    },
    {
        value: "5009",
        label: "LA ESTACION DE AYAPANGO"
    },
    {
        value: "5014",
        label: "BODEGA OZUMBA"
    },
    {
        value: "5015",
        label: "CUTZAMALA"
    },
    {
        value: "5019",
        label: "BARUJA"
    },
    {
        value: "5026",
        label: "CENTENARIO"
    },
    {
        value: "5029",
        label: "MISCELANEA MARIA JOSE"
    },
    {
        value: "5037",
        label: "GRUPO TREHER SA DE CV"
    },
    {
        value: "5047",
        label: "LAS PALMERAS"
    },
    {
        value: "5053",
        label: "LOS TONOS"
    },
    {
        value: "5061",
        label: "JAMILET"
    },
    {
        value: "5063",
        label: "ABY"
    },
    {
        value: "5069",
        label: "BELEM"
    },
    {
        value: "5080",
        label: "JESSY"
    },
    {
        value: "5082",
        label: "CAFFE LATTE"
    },
    {
        value: "5083",
        label: "DON LUPE"
    },
    {
        value: "5084",
        label: "MICHELADAS COCOTITLAN"
    },
    {
        value: "5090",
        label: "CHERRY"
    },
    {
        value: "5096",
        label: "RAPSODIA"
    },
    {
        value: "5098",
        label: "TEXCALAPA"
    },
    {
        value: "5102",
        label: "PAOLA III"
    },
    {
        value: "5103",
        label: "PAVIS"
    },
    {
        value: "5109",
        label: "LA EXCELENCIA"
    },
    {
        value: "5110",
        label: "BYS"
    },
    {
        value: "5111",
        label: "EL CHAYO"
    },
    {
        value: "5112",
        label: "KEVIN"
    },
    {
        value: "5122",
        label: "VOLCANES"
    },
    {
        value: "5123",
        label: "CASA RAMIREZ"
    },
    {
        value: "5124",
        label: "EL RANCHERITO"
    },
    {
        value: "5132",
        label: "LIZ"
    },
    {
        value: "5134",
        label: "LA TERRAZA EL SAUCE"
    },
    {
        value: "5136",
        label: "LONJA MERCANTIL SAN BARTOLO"
    },
    {
        value: "5141",
        label: "IBIZA"
    },
    {
        value: "5146",
        label: "LA TARAHUMARA"
    },
    {
        value: "5152",
        label: "LA VICTORIA"
    },
    {
        value: "5153",
        label: "DANIELA"
    },
    {
        value: "5155",
        label: "5 ESTRELLAS"
    },
    {
        value: "5158",
        label: "NANOS"
    },
    {
        value: "5159",
        label: "EL BARRILITO"
    },
    {
        value: "5160",
        label: "PALOMA"
    },
    {
        value: "5166",
        label: "OSIRIS"
    },
    {
        value: "5167",
        label: "LEVIATHAN"
    },
    {
        value: "5171",
        label: "CHELA EXPRES SAN FRANCISCO"
    },
    {
        value: "5176",
        label: "YAMILET"
    },
    {
        value: "5182",
        label: "TIZAYORK"
    },
    {
        value: "5185",
        label: "BERNARDINA"
    },
    {
        value: "5194",
        label: "SAFARI"
    },
    {
        value: "5199",
        label: "EL AMIGUITO"
    },
    {
        value: "5200",
        label: "RUBI"
    },
    {
        value: "5203",
        label: "EL POTRO"
    },
    {
        value: "5206",
        label: "LA POZA II"
    },
    {
        value: "5209",
        label: "MARIANA"
    },
    {
        value: "5213",
        label: "EL TRIUNFO"
    },
    {
        value: "5214",
        label: "EL PARAISO"
    },
    {
        value: "5218",
        label: "JARDIN"
    },
    {
        value: "5219",
        label: "PLAZA HIDALGO"
    },
    {
        value: "5223",
        label: "ALEX"
    },
    {
        value: "5224",
        label: "JUEGA EL GALLO"
    },
    {
        value: "5226",
        label: "ROSITAS"
    },
    {
        value: "5229",
        label: "LA VICTORIA"
    },
    {
        value: "5230",
        label: "LA ESQUINA"
    },
    {
        value: "5235",
        label: "DEPOSITO BOGUZ"
    },
    {
        value: "5236",
        label: "SOFI"
    },
    {
        value: "5242",
        label: "DON NETO"
    },
    {
        value: "5251",
        label: "ALFREDO"
    },
    {
        value: "5252",
        label: "BLANCA"
    },
    {
        value: "5256",
        label: "LUNA 3"
    },
    {
        value: "5260",
        label: "GRISEL"
    },
    {
        value: "5266",
        label: "ZAMA"
    },
    {
        value: "5267",
        label: "CHAGO"
    },
    {
        value: "5273",
        label: "LAURARA VAQUIO"
    },
    {
        value: "5274",
        label: "CANTALAGUA"
    },
    {
        value: "5279",
        label: "EL PATITO"
    },
    {
        value: "5281",
        label: "JR"
    },
    {
        value: "5282",
        label: "KIKIN"
    },
    {
        value: "5283",
        label: "ANGELES"
    },
    {
        value: "5290",
        label: "ALDAMA"
    },
    {
        value: "5297",
        label: "SAN DIEGUITO"
    },
    {
        value: "5306",
        label: "EL PESCADOR"
    },
    {
        value: "5308",
        label: "MARIFER"
    },
    {
        value: "5312",
        label: "GUERRERO"
    },
    {
        value: "5316",
        label: "GABY"
    },
    {
        value: "5317",
        label: "DIVINO SALVADOR"
    },
    {
        value: "5318",
        label: "MINISUPER 7 24"
    },
    {
        value: "5320",
        label: "SAN ANTONIO"
    },
    {
        value: "5321",
        label: "AME"
    },
    {
        value: "5322",
        label: "ALLYSON"
    },
    {
        value: "5323",
        label: "MI CHANGARRITO"
    },
    {
        value: "5325",
        label: "MINISUPER DARY"
    },
    {
        value: "5331",
        label: "ALAN"
    },
    {
        value: "5332",
        label: "ARISA"
    },
    {
        value: "5334",
        label: "LAS LLAVES"
    },
    {
        value: "5341",
        label: "LA VECINA"
    },
    {
        value: "5346",
        label: "RONYCHELA"
    },
    {
        value: "5347",
        label: "LA NARANJA"
    },
    {
        value: "5350",
        label: "KIKKA"
    },
    {
        value: "5351",
        label: "MINISUPER SIX"
    },
    {
        value: "5353",
        label: "EL TORITO"
    },
    {
        value: "5370",
        label: "DORIS"
    },
    {
        value: "5372",
        label: "XIMENA"
    },
    {
        value: "5373",
        label: "DIANA PAOLA"
    },
    {
        value: "5374",
        label: "EL GUSANITO"
    },
    {
        value: "5384",
        label: "LA NORIA"
    },
    {
        value: "5386",
        label: "ALEX"
    },
    {
        value: "5387",
        label: "MIX TIZAYUCA"
    },
    {
        value: "5398",
        label: "ALEX"
    },
    {
        value: "5403",
        label: "EL TORO"
    },
    {
        value: "5411",
        label: "LAS CRUCES"
    },
    {
        value: "5416",
        label: "GUADALUPANA"
    },
    {
        value: "5418",
        label: "GOMEZ"
    },
    {
        value: "5424",
        label: "LA CONCHITA 2"
    },
    {
        value: "5425",
        label: "LOS HERMANOS"
    },
    {
        value: "5430",
        label: "ARROYO"
    },
    {
        value: "5439",
        label: "OSWALDO"
    },
    {
        value: "5440",
        label: "LA PEQUENA"
    },
    {
        value: "5442",
        label: "MORALES"
    },
    {
        value: "5445",
        label: "DANY"
    },
    {
        value: "5447",
        label: "MICHEL"
    },
    {
        value: "5451",
        label: "LA LAZIO"
    },
    {
        value: "5458",
        label: "AMAPOLA"
    },
    {
        value: "5463",
        label: "ROCIO"
    },
    {
        value: "5465",
        label: "GAYTAN"
    },
    {
        value: "5467",
        label: "LA ESPERANZA"
    },
    {
        value: "5471",
        label: "VENTANITA BLANCA"
    },
    {
        value: "5474",
        label: "MINI"
    },
    {
        value: "5476",
        label: "SANTA ROSA"
    },
    {
        value: "5484",
        label: "LA NACIONAL"
    },
    {
        value: "5486",
        label: "LA CASITA"
    },
    {
        value: "5492",
        label: "CIPRESES"
    },
    {
        value: "5500",
        label: "VIVE MINISUPER"
    },
    {
        value: "5501",
        label: "EL TEKATITO"
    },
    {
        value: "5510",
        label: "DON JUAN"
    },
    {
        value: "5511",
        label: "EL PORTAL"
    },
    {
        value: "5515",
        label: "KARY"
    },
    {
        value: "5517",
        label: "LOS 3 CAMPEONES"
    },
    {
        value: "5520",
        label: "MARI"
    },
    {
        value: "5521",
        label: "ARMANDOS"
    },
    {
        value: "5526",
        label: "MINISUPER A"
    },
    {
        value: "5528",
        label: "MI ANGEL"
    },
    {
        value: "5529",
        label: "RULO"
    },
    {
        value: "5531",
        label: "LA CASCADA"
    },
    {
        value: "5534",
        label: "RENTERIA"
    },
    {
        value: "5539",
        label: "MICKEY"
    },
    {
        value: "5545",
        label: "SOFIA"
    },
    {
        value: "5549",
        label: "EL SUPERCITO"
    },
    {
        value: "5552",
        label: "LA ESTRELLA"
    },
    {
        value: "5554",
        label: "EL GRAN IMPERIO"
    },
    {
        value: "5555",
        label: "LA INDEPENDENCIA"
    },
    {
        value: "5557",
        label: "MARTINEZ HUITZILZINGO"
    },
    {
        value: "5560",
        label: "SAN MIGUEL"
    },
    {
        value: "5571",
        label: "REYES ELITE"
    },
    {
        value: "5572",
        label: "MIX TULYEHUALCO"
    },
    {
        value: "5574",
        label: "BOHEMIAS DEPOT"
    },
    {
        value: "5575",
        label: "LA MISA"
    },
    {
        value: "5577",
        label: "POSADA LA JOYA"
    },
    {
        value: "5580",
        label: "EL TLALCOYOTE"
    },
    {
        value: "5586",
        label: "PUNTA ESTRELLA"
    },
    {
        value: "5587",
        label: "LUNA"
    },
    {
        value: "5588",
        label: "ACME"
    },
    {
        value: "5591",
        label: "MIS DOS AMIGOS"
    },
    {
        value: "5600",
        label: "JAROCHO"
    },
    {
        value: "5602",
        label: "MINISUPER V"
    },
    {
        value: "5605",
        label: "LA ESQUINA"
    },
    {
        value: "5610",
        label: "ISELA"
    },
    {
        value: "5612",
        label: "CHE ALITAS"
    },
    {
        value: "5616",
        label: "EL ZOTANO"
    },
    {
        value: "5619",
        label: "MEDITERRANEO"
    },
    {
        value: "5621",
        label: "EL BUEN SAZON"
    },
    {
        value: "5623",
        label: "EL DESPACHO"
    },
    {
        value: "5631",
        label: "SONORA 51"
    },
    {
        value: "5635",
        label: "JULIANA"
    },
    {
        value: "5638",
        label: "MARA"
    },
    {
        value: "5642",
        label: "VISTA HERMOSA"
    },
    {
        value: "5652",
        label: "CAMELIAS"
    },
    {
        value: "5653",
        label: "ABEL"
    },
    {
        value: "5655",
        label: "ALFARO"
    },
    {
        value: "5657",
        label: "LAS DE LA ENTRADA"
    },
    {
        value: "5659",
        label: "GABY"
    },
    {
        value: "5665",
        label: "LORE"
    },
    {
        value: "5667",
        label: "SAMANTHA"
    },
    {
        value: "5669",
        label: "CUQUIS SNACKS AND COFFEE BAR"
    },
    {
        value: "5670",
        label: "REYES MARTH"
    },
    {
        value: "5677",
        label: "LOZADA"
    },
    {
        value: "5678",
        label: "PEREA"
    },
    {
        value: "5690",
        label: "TORIS"
    },
    {
        value: "5692",
        label: "ALEXA"
    },
    {
        value: "5694",
        label: "DANNY"
    },
    {
        value: "5697",
        label: "CAVA LA DIVINA"
    },
    {
        value: "5698",
        label: "LOS HERMANOS"
    },
    {
        value: "5701",
        label: "LA LOMITA"
    },
    {
        value: "5702",
        label: "LA PLANTACION"
    },
    {
        value: "5706",
        label: "YAYITA"
    },
    {
        value: "5708",
        label: "EDITH"
    },
    {
        value: "5710",
        label: "ESTRELLA"
    },
    {
        value: "5711",
        label: "FIDELORAMA"
    },
    {
        value: "5713",
        label: "TECATE MIX"
    },
    {
        value: "5714",
        label: "VICTORIA"
    },
    {
        value: "5719",
        label: "LOS MANANTIALES"
    },
    {
        value: "5720",
        label: "SABORES"
    },
    {
        value: "5721",
        label: "EL PUENTE"
    },
    {
        value: "5722",
        label: "MARY 2"
    },
    {
        value: "5725",
        label: "EL TUZITO"
    },
    {
        value: "5727",
        label: "LA JUQUILITA CAS"
    },
    {
        value: "5731",
        label: "ISABEL"
    },
    {
        value: "5732",
        label: "DEPOSITO AMBAR"
    },
    {
        value: "5734",
        label: "LA GUADALUPANA"
    },
    {
        value: "5735",
        label: "YESENIA"
    },
    {
        value: "5736",
        label: "KRATHER  CLUB"
    },
    {
        value: "5737",
        label: "LOS ABUELOS"
    },
    {
        value: "5805",
        label: "EL SEGUNDO"
    },
    {
        value: "6308",
        label: "GENECIS"
    },
    {
        value: "6311",
        label: "GUERRERO"
    },
    {
        value: "6312",
        label: "JIMENEZ"
    },
    {
        value: "6318",
        label: "SAN JOSE DE TECOMITL"
    },
    {
        value: "6320",
        label: "ELEGGUA"
    },
    {
        value: "6321",
        label: "EL CABALLERO"
    },
    {
        value: "6328",
        label: "MIRELES"
    },
    {
        value: "6331",
        label: "FILEMON AZPEITIA HERNANDEZ"
    },
    {
        value: "6337",
        label: "LA GUERA"
    },
    {
        value: "6339",
        label: "LOS GIRASOLES"
    },
    {
        value: "6340",
        label: "CHE ALITAS II"
    },
    {
        value: "6341",
        label: "TIENDA SAN VICENTE"
    },
    {
        value: "6342",
        label: "LAS ALITAS"
    },
    {
        value: "6347",
        label: "LA PROVIDENCIA"
    },
    {
        value: "6350",
        label: "EL COLMADON"
    },
    {
        value: "6355",
        label: "LA CURVA DE TETELCO"
    },
    {
        value: "6358",
        label: "ALCATRAZ"
    },
    {
        value: "6361",
        label: "LAS ALAS DEL CENTRO"
    },
    {
        value: "6363",
        label: "ANDRES PACHECO CERON"
    },
    {
        value: "6368",
        label: "RUBENS"
    },
    {
        value: "6369",
        label: "ABARROTES MARTE"
    },
    {
        value: "6372",
        label: "EL BUEN TRATO"
    },
    {
        value: "6373",
        label: "LA ESCONDIDA 2"
    },
    {
        value: "6381",
        label: "CARTA BLANCA"
    },
    {
        value: "6382",
        label: "ROA"
    },
    {
        value: "6437",
        label: "MANI"
    },
    {
        value: "6438",
        label: "HERRERA"
    },
    {
        value: "6440",
        label: "CASA LAURRABAQUIO"
    },
    {
        value: "6441",
        label: "SANTA ANA"
    },
    {
        value: "6443",
        label: "ABARROTES DORIS"
    },
    {
        value: "6445",
        label: "LA ESMERALDA"
    },
    {
        value: "6447",
        label: "LUPITA"
    },
    {
        value: "6448",
        label: "LA NUEVA TIENDA"
    },
    {
        value: "6450",
        label: "TACHITO"
    },
    {
        value: "6451",
        label: "VINOS Y LICORES SIRENA"
    },
    {
        value: "6452",
        label: "LA GUADALUPANA"
    },
    {
        value: "6453",
        label: "PICHOS"
    },
    {
        value: "6454",
        label: "LA CASA BONITA"
    },
    {
        value: "6456",
        label: "TLATEC NEPANTLA"
    },
    {
        value: "6458",
        label: "ABARROTES MUNOZ"
    },
    {
        value: "6460",
        label: "JUQUILITA"
    },
    {
        value: "6461",
        label: "CARI"
    },
    {
        value: "6464",
        label: "JULIET"
    },
    {
        value: "6466",
        label: "LA UVA"
    },
    {
        value: "6468",
        label: "LA CREMA Y NATA"
    },
    {
        value: "6474",
        label: "ASADOS DON ABEL"
    },
    {
        value: "6475",
        label: "LOS ALCATRAZ"
    },
    {
        value: "6476",
        label: "SAN JOSE"
    },
    {
        value: "6478",
        label: "ABARROTES LA CHIQUITA"
    },
    {
        value: "6482",
        label: "THE COFEE STARS"
    },
    {
        value: "6486",
        label: "EL BANDITA"
    },
    {
        value: "6488",
        label: "SAN BARTOLOME"
    },
    {
        value: "6489",
        label: "LA RIVERA"
    },
    {
        value: "6492",
        label: "LA GLORIA DE VILLA"
    },
    {
        value: "6493",
        label: "TIANQUISTENCO"
    },
    {
        value: "7612",
        label: "RINCONCITO DE LOS SABORES"
    },
    {
        value: "7615",
        label: "LA LUPITA TETELCO"
    },
    {
        value: "7616",
        label: "MARIANITA"
    },
    {
        value: "7639",
        label: "LOS ARADOS"
    },
    {
        value: "7655",
        label: "LUNA TLALMANALCO"
    },
    {
        value: "7667",
        label: "EL CABALLERO II"
    },
    {
        value: "7683",
        label: "ABARROTES AZUU"
    },
    {
        value: "7685",
        label: "MICHELADAS D POCAS"
    },
    {
        value: "7729",
        label: "LAS NIETAS"
    },
    {
        value: "7777",
        label: "SAN JUDAS 2"
    },
    {
        value: "7788",
        label: "CREMERIA Y ABARROTES LOS SOCIOS"
    },
    {
        value: "7801",
        label: "EL CANELO"
    },
    {
        value: "7808",
        label: "EL CHINO"
    },
    {
        value: "7831",
        label: "LA FAMILIA"
    },
    {
        value: "7896",
        label: "MISCELANEA FLORES"
    },
    {
        value: "7912",
        label: "MISCELANEA EL AGUACATE"
    },
    {
        value: "7917",
        label: "POMPEYO"
    },
    {
        value: "7930",
        label: "LA VANISA"
    },
    {
        value: "7936",
        label: "LUPITAES 3CHICK"
    },
    {
        value: "7937",
        label: "LULU"
    },
    {
        value: "7949",
        label: "SAN AGUSTIN"
    },
    {
        value: "7959",
        label: "KEVIN"
    },
    {
        value: "7960",
        label: "EL MUNDIALITO"
    },
    {
        value: "8000",
        label: "AGAVOS"
    },
    {
        value: "8007",
        label: "GODIS"
    },
    {
        value: "8008",
        label: "DON PONCHO"
    },
    {
        value: "8032",
        label: "EL OSO"
    },
    {
        value: "8036",
        label: "MISCELANEA  LA VENTANITA"
    },
    {
        value: "8044",
        label: "MISCELANEA RANCHO GRANDE"
    },
    {
        value: "8050",
        label: "YOLANDA"
    },
    {
        value: "8104",
        label: "WILLIAMS"
    },
    {
        value: "8127",
        label: "CHELADA"
    },
    {
        value: "8128",
        label: "LA SUPREMA"
    },
    {
        value: "8130",
        label: "MATERIAS PRIMAS SAN JOSE"
    },
    {
        value: "8141",
        label: "DEPOSITO COCO"
    },
    {
        value: "8167",
        label: "LOS MORA"
    },
    {
        value: "8176",
        label: "DANY"
    },
    {
        value: "8181",
        label: "PROGRAMA DE ABASTO"
    },
    {
        value: "8201",
        label: "MANDALA"
    },
    {
        value: "8210",
        label: "MISCELANEA Y ABARROTES SANCHEZ"
    },
    {
        value: "8213",
        label: "MIX TEZOMPA"
    },
    {
        value: "8216",
        label: "MINI SUPER 24HR"
    },
    {
        value: "8239",
        label: "LA CAVA"
    },
    {
        value: "8246",
        label: "MISCELANEA VIRI"
    },
    {
        value: "8249",
        label: "ABARROTES ROMERO"
    },
    {
        value: "8274",
        label: "HAMILTON"
    },
    {
        value: "8275",
        label: "MISCELANEA SAN MIGUEL"
    },
    {
        value: "8279",
        label: "MIX AMECA"
    },
    {
        value: "8294",
        label: "LA MALTA NEGRA"
    },
    {
        value: "8303",
        label: "MIX TEPE"
    },
    {
        value: "8312",
        label: "SAN MATEO 2"
    },
    {
        value: "8313",
        label: "DEPOSITO YULI"
    },
    {
        value: "8314",
        label: "LA BOHEMIA"
    },
    {
        value: "8329",
        label: "SAN JUDITAS"
    },
    {
        value: "8332",
        label: "LA ESPECIAL"
    },
    {
        value: "8334",
        label: "MISCELANEA EVELYN"
    },
    {
        value: "8337",
        label: "SING MY WAY KARAOKE"
    },
    {
        value: "8338",
        label: "CADENA"
    },
    {
        value: "8344",
        label: "INICIO"
    },
    {
        value: "8347",
        label: "LA GUADALUPANA"
    },
    {
        value: "8348",
        label: "LOS GUEROS"
    },
    {
        value: "8354",
        label: "YUREIMY"
    },
    {
        value: "8356",
        label: "EL COMPADRE"
    },
    {
        value: "8358",
        label: "SOFIA"
    },
    {
        value: "8363",
        label: "EL GANZO"
    },
    {
        value: "8366",
        label: "LA FARRA"
    },
    {
        value: "8368",
        label: "EL BAR KITO DE YEN"
    },
    {
        value: "8370",
        label: "SAID"
    },
    {
        value: "8375",
        label: "EL PORTON"
    },
    {
        value: "8378",
        label: "LA SURTIDORA"
    },
    {
        value: "8379",
        label: "DIVINA MISERICORDIA"
    },
    {
        value: "8386",
        label: "PAPA LORD"
    },
    {
        value: "8387",
        label: "TECO ALITAS"
    },
    {
        value: "8394",
        label: "EL LINCE"
    },
    {
        value: "8397",
        label: "ROSY"
    },
    {
        value: "8398",
        label: "CASA BRAVO"
    },
    {
        value: "8411",
        label: "YOZZ"
    },
    {
        value: "8412",
        label: "LA CONQUISTA"
    },
    {
        value: "8413",
        label: "ABARROTES CORRIL"
    },
    {
        value: "8421",
        label: "EL AGUADOR"
    },
    {
        value: "8423",
        label: "EL GRILLO"
    },
    {
        value: "8424",
        label: "KELLY"
    },
    {
        value: "8425",
        label: "LA VAQUITA"
    },
    {
        value: "8427",
        label: "LA MONTANA DE NEXAPA"
    },
    {
        value: "8438",
        label: "DON LUIS"
    },
    {
        value: "8439",
        label: "LAS HORMIGUITAS"
    },
    {
        value: "8441",
        label: "LA BOVEDA"
    },
    {
        value: "8445",
        label: "SAN LUCAS"
    },
    {
        value: "8446",
        label: "FRIDAS"
    },
    {
        value: "8451",
        label: "MIX TLALMANALCO"
    },
    {
        value: "8456",
        label: "LAURITA"
    },
    {
        value: "8457",
        label: "LOS VENADOS"
    },
    {
        value: "8458",
        label: "ABARROTES LUVAN"
    },
    {
        value: "8459",
        label: "EL OXXITO DE NEPANTLA"
    },
    {
        value: "8460",
        label: "EL VIEJO"
    },
    {
        value: "8475",
        label: "BAR MI TIERRA"
    },
    {
        value: "8487",
        label: "LA REVOLUCION"
    },
    {
        value: "8500",
        label: "CHABELITA"
    },
    {
        value: "8507",
        label: "AGUILA"
    },
    {
        value: "8508",
        label: "EL SARAPE"
    },
    {
        value: "8509",
        label: "CHARLY"
    },
    {
        value: "8511",
        label: "LA GUADALUPANA DE MIHUACAN"
    },
    {
        value: "8512",
        label: "MARIELA"
    },
    {
        value: "8514",
        label: "BALTASAR"
    },
    {
        value: "8515",
        label: "MAAGI"
    },
    {
        value: "8516",
        label: "SOL"
    },
    {
        value: "8518",
        label: "LOS PACHANGAS"
    },
    {
        value: "8527",
        label: "DULCEvalue DE JESUS"
    },
    {
        value: "8531",
        label: "ABARROTES LA ARMADURA"
    },
    {
        value: "8536",
        label: "ABARROTES CHARLY"
    },
    {
        value: "8540",
        label: "EVELYN"
    },
    {
        value: "8541",
        label: "ABARROTES PENA"
    },
    {
        value: "8545",
        label: "MI PEQUENO BORREGUIN"
    },
    {
        value: "8546",
        label: "ABARROTES SOL"
    },
    {
        value: "8547",
        label: "LA GUADALUPANA DE SANTO TOMAS"
    },
    {
        value: "8550",
        label: "PUG BARRIL"
    },
    {
        value: "8556",
        label: "NOYIS"
    },
    {
        value: "8558",
        label: "NECTAR HOME"
    },
    {
        value: "8559",
        label: "MARICELA"
    },
    {
        value: "8564",
        label: "AMAZING CLUB"
    },
    {
        value: "8567",
        label: "JUANIS"
    },
    {
        value: "8569",
        label: "ABARROTES FELINOS"
    },
    {
        value: "8570",
        label: "MISCELANEA LOS  PEPES"
    },
    {
        value: "8572",
        label: "ABARROTES CHAVALIN"
    },
    {
        value: "8575",
        label: "EL CALVARIO"
    },
    {
        value: "8578",
        label: "LA PALMA"
    },
    {
        value: "8579",
        label: "CHARIS"
    },
    {
        value: "8580",
        label: "GARITA"
    },
    {
        value: "8585",
        label: "MICHELADAS LOS WOODYS"
    },
    {
        value: "8586",
        label: "DAVID"
    },
    {
        value: "8592",
        label: "EL RINCONCITO DE SNOOPY"
    },
    {
        value: "8602",
        label: "VA QUE VA"
    },
    {
        value: "8605",
        label: "ABARROTES CUQUITO"
    },
    {
        value: "8606",
        label: "LA FIESTITA"
    },
    {
        value: "8607",
        label: "MR CHELA"
    },
    {
        value: "8608",
        label: "PRADEL"
    },
    {
        value: "8609",
        label: "EL TRUEQUE"
    },
    {
        value: "8610",
        label: "EL VIKINGO"
    },
    {
        value: "8611",
        label: "ABARROTES GAMERS FOOD"
    },
    {
        value: "8612",
        label: "ABARROTES ROY"
    },
    {
        value: "300609474",
        label: "MARISCOS CIELO MAR Y TIERRA"
    },
    {
        value: "600782167",
        label: "TAQUERIA DON BETO"
    },
    {
        value: "600783307",
        label: "ABARROTES SHADDAI"
    },
    {
        value: "600783339",
        label: "LA VENTANITA "
    },
    {
        value: "600956287",
        label: "ABARROTES ANTONIO "
    },
    {
        value: "600956310",
        label: "MINI SUPER LA NENA"
    },
    {
        value: "600961127",
        label: "ABARROTES TIZAYUCA"
    },
    {
        value: "7103001395",
        label: "ABARROTES CAROL"
    },
    {
        value: "7103002179",
        label: " EL PROGRESO"
    },
    {
        value: "7343001013",
        label: "EL GAVILAN"
    },
    {
        value: "7343001025",
        label: "EL TATA"
    },
    {
        value: "7343001107",
        label: "MISCELANEA VIKY"
    },
    {
        value: "7343001151",
        label: "MISCELANEA LA HIDALGUENSE"
    },
    {
        value: "7343001155",
        label: "ABARROTES  IVON"
    },
    {
        value: "7343001160",
        label: "PALOMA FELIZ"
    },
    {
        value: "7343001175",
        label: "EL MIRADOR"
    },
    {
        value: "7423000841",
        label: "EL GALLO"
    },
    {
        value: "7432000219",
        label: "LOS GONZOS"
    },
    {
        value: "7569000164",
        label: "ABARROTES JULIA"
    },
    {
        value: "7793000004",
        label: "MICHELADAS ANY"
    },
    {
        value: "7793000057",
        label: "MISCELANEA KM"
    },
    {
        value: "7811000563",
        label: "EL BOSQUE DE LA CHINA"
    },
    {
        value: "7811000564",
        label: "CASA TAPIA"
    },
    {
        value: "7811000565",
        label: "SAN GABRIEL"
    },
    {
        value: "7811000604",
        label: "ABARROTES  ANGEL"
    },
    {
        value: "7812000621",
        label: "LA TIA MONI"
    },
    {
        value: "7817000355",
        label: "ABARROTES TOONS"
    },
    {
        value: "7817000357",
        label: "ABARROTES FER"
    },
    {
        value: "7817000368",
        label: "MARU Y ALGO MAS"
    },
    {
        value: "7835000871",
        label: "ABARROTES NUEVA ILUSION"
    },
    {
        value: "7835000872",
        label: "ABARROTES VIKI"
    },
    {
        value: "7835000901",
        label: "EL TRIUNFO"
    },
    {
        value: "7835000903",
        label: "LA CRUZ "
    },
    {
        value: "7835000933",
        label: "AZUL"
    },
    {
        value: "7835000936",
        label: "EUS"
    },
    {
        value: "7835000944",
        label: "LA NUEVA"
    },
    {
        value: "7835000975",
        label: "ROXY"
    },
    {
        value: "7835001067",
        label: "MISCELANEA LA CONSENTIDA"
    },
    {
        value: "7900000338",
        label: "LETY"
    },
    {
        value: "7900000367",
        label: "LA EXCELENCIA"
    },
    {
        value: "7900000372",
        label: "ABARROTES FAMIS"
    },
    {
        value: "7900000374",
        label: "LOS ABUELOS"
    },
    {
        value: "7900000428",
        label: "LA GRAN VICTORIA"
    },
    {
        value: "7900000497",
        label: "SUENO MEXICANO"
    },
    {
        value: "7907000057",
        label: "ABARROTES SAMI"
    },
    {
        value: "7933000086",
        label: "ABARROTES GEMINIS"
    },
    {
        value: "7933000112",
        label: "RESTAURANT LA FINCA "
    },
    {
        value: "7933000132",
        label: "COCINA ECONOMICA PATY"
    },
    {
        value: "7933000215",
        label: "ESME"
    },
    {
        value: "9101000150",
        label: "ABARROTES LA GUERRERENSE"
    },
    {
        value: "9101000151",
        label: "CAMELIA "
    },
    {
        value: "9101000152",
        label: "PUEBLO MAGICO"
    },
    {
        value: "9101000153",
        label: "EL PROGRESO"
    },
    {
        value: "9101000154",
        label: "LA VALENCIANA"
    },
    {
        value: "9101000155",
        label: "MICELANEA 3D"
    },
    {
        value: "9101000156",
        label: "ABARROTES FRONTERA"
    },
    {
        value: "9101000157",
        label: "VERO"
    },
    {
        value: "9102000168",
        label: "CHALCA CHELAS"
    },
    {
        value: "9102000169",
        label: "EL QUESO"
    },
    {
        value: "9102000170",
        label: "MARTINEZ II"
    },
    {
        value: "9102000171",
        label: "ANIME SANTUARY"
    },
    {
        value: "9102000172",
        label: "ANGEL"
    },
    {
        value: "9102000173",
        label: "EL PATRON"
    },
    {
        value: "9102000174",
        label: "MATEO"
    },
    {
        value: "9102000175",
        label: "JIMENEZ"
    },
    {
        value: "9102000176",
        label: "ABARROTES BUBLES"
    },
    {
        value: "9102000177",
        label: "AYUMI"
    },
    {
        value: "9103000091",
        label: "ABARROTES FERNANDO II"
    },
    {
        value: "9103000092",
        label: "MISCELANEA AVE FENIX"
    },
    {
        value: "9103000093",
        label: "VINOS Y LICORES PENA"
    },
    {
        value: "9103000094",
        label: "ABARROTES LA NACIONAL"
    },
    {
        value: "9103000095",
        label: "ABARROTES  PATY"
    },
    {
        value: "9103000096",
        label: "ABARROTES  PEPE"
    },
    {
        value: "9103000097",
        label: "ABARROTES  SAN JUDITAS 2"
    },
    {
        value: "9103000098",
        label: "EL PUNTO"
    },
    {
        value: "9103000099",
        label: "MISCELANEA  EL JAROCHO"
    },
    {
        value: "9103000100",
        label: "MISCELANEA ADRIANA"
    },
    {
        value: "9103000101",
        label: "MISCELANEA EL COLIBRI"
    },
    {
        value: "9103000102",
        label: "ABARROTES  LUZ"
    },
    {
        value: "9103000103",
        label: "ABARROTES Y RECAUDERIA MARY"
    },
    {
        value: "9103000104",
        label: "BIKERITOS"
    },
    {
        value: "9103000105",
        label: "JUQUILITA SAN JOSE"
    },
    {
        value: "9121000026",
        label: "MINISUPER LA FE"
    },
    {
        value: "9121000027",
        label: "ABARROTES INMACULADA"
    },
    {
        value: "9121000028",
        label: "MIXELANEA ORISHAS"
    },
    {
        value: "9121000029",
        label: "ABARROTES LA CONSENTIDA"
    },
    {
        value: "9121000030",
        label: "EL BUKY 2"
    },
    {
        value: "9121000031",
        label: "GAMBOA "
    },
    {
        value: "9121000032",
        label: "VALERIA "
    },
    {
        value: "9121000033",
        label: "HERMANOS "
    },
    {
        value: "9121000034",
        label: "MONTES  PIZZAS "
    },
    {
        value: "9121000035",
        label: "GUA"
    },
    {
        value: "9121000036",
        label: "LOS PEQUES"
    },
    {
        value: "9121000037",
        label: "ROSAS"
    },
    {
        value: "9121000038",
        label: "LOS PINOS "
    },
    {
        value: "9121000039",
        label: "SAN ISIDRO II"
    },
    {
        value: "9121000040",
        label: "FRANCIS"
    },
    {
        value: "9121000041",
        label: "MI CAPRICHITO"
    },
    {
        value: "9122000021",
        label: "ABARROTES JUVENTUS"
    },
    {
        value: "9122000022",
        label: "LA ESCONDIDA"
    },
    {
        value: "9122000023",
        label: "ROBLE "
    },
    {
        value: "9123000026",
        label: "ABARROTES NACIMIENTO"
    },
    {
        value: "9123000027",
        label: "ABARROTES EL OXITO DE MARIA BONITA"
    },
    {
        value: "9123000028",
        label: "ABARROTES JND"
    },
    {
        value: "9123000029",
        label: "ABARROTES LAS PALMAS"
    },
    {
        value: "9123000030",
        label: "ABARROTES LIDU"
    },
    {
        value: "9123000031",
        label: "ABARROTES MEDINA"
    },
    {
        value: "9123000032",
        label: "TEQUIMILAR RANCHO ESCONDIDO"
    },
    {
        value: "9123000033",
        label: "VANY Y NELY"
    },
    {
        value: "9123000034",
        label: "EL SEIS"
    },
    {
        value: "9123000035",
        label: "ABARROTES EZEQUIEL"
    },
    {
        value: "9123000036",
        label: "LA ESCONDIDA"
    },
    {
        value: "9123000037",
        label: "ABARROTES BLANCA ESTELA"
    },
    {
        value: "9153000001",
        label: "MIX SAN FRANCISCO"
    },
    {
        value: "9201000150",
        label: "LOS PRIMOS"
    },
    {
        value: "9201000151",
        label: "EL WERO "
    },
    {
        value: "9201000152",
        label: "ABARROTES PATY"
    },
    {
        value: "9201000153",
        label: "PONCHITOS II"
    },
    {
        value: "9201000154",
        label: "SAN JUDITAS"
    },
    {
        value: "9201000155",
        label: "LA ESQUINA"
    },
    {
        value: "9201000156",
        label: "ABARROTES  LA PAZ"
    },
    {
        value: "9201000157",
        label: "ABARROTES ARTURO"
    },
    {
        value: "9201000158",
        label: "SAN MARTIN"
    },
    {
        value: "9201000159",
        label: "ABARROTES AQUILES"
    },
    {
        value: "9202000112",
        label: "EL RECREO"
    },
    {
        value: "9202000113",
        label: "EL PAPI"
    },
    {
        value: "9202000114",
        label: "LA CABANA DEL ABUELO"
    },
    {
        value: "9202000115",
        label: "LAS CASITAS"
    },
    {
        value: "9202000116",
        label: "EL CAGUAMON ENMASCARADO"
    },
    {
        value: "9202000117",
        label: "LA VIA"
    },
    {
        value: "9202000118",
        label: "MISCELANEA MC"
    },
    {
        value: "9202000119",
        label: "LA ESTACION DE OZUMBA"
    },
    {
        value: "9211000004",
        label: "LA TIENDITA DEL EDEN"
    },
    {
        value: "9211000005",
        label: "ABARROTES DON TONO"
    },
    {
        value: "9211000006",
        label: "HERMANOS MARTINEZ"
    },
    {
        value: "9211000007",
        label: "EL PATRON"
    },
    {
        value: "9221000037",
        label: "EL OASIS"
    },
    {
        value: "9221000038",
        label: "ROJAS"
    },
    {
        value: "9221000039",
        label: "LA FLOR DEL VALLE"
    },
    {
        value: "9221000040",
        label: "ELI"
    },
    {
        value: "9222000063",
        label: "LUMA"
    },
    {
        value: "9222000064",
        label: "BABYS BEER"
    },
    {
        value: "9222000065",
        label: "ANELISA"
    },
    {
        value: "9222000066",
        label: "MI MAGDIS"
    },
    {
        value: "9222000067",
        label: "ATHAN"
    },
    {
        value: "9222000068",
        label: "AZTLAN"
    },
    {
        value: "9222000069",
        label: "SAN DIEGUITO"
    },
    {
        value: "9222000070",
        label: "ARELY"
    },
    {
        value: "9222000071",
        label: "LA ESQUINITA"
    },
    {
        value: "9222000072",
        label: "LA CABANA"
    },
    {
        value: "9222000073",
        label: "EL CHE"
    },
    {
        value: "9222000074",
        label: "EL PARAISO"
    },
    {
        value: "9222000075",
        label: "SOLUCIONES EN ELECTRONICA "
    },
    {
        value: "9222000076",
        label: "LUPITA"
    },
    {
        value: "9222000077",
        label: "EL RANCHO"
    },
    {
        value: "9301000027",
        label: "LA HERENCIA DE HECTOR"
    },
    {
        value: "9301000028",
        label: "MINI SUPER FLORENCIA"
    },
    {
        value: "9301000029",
        label: "DEPOSITO MODELO"
    },
    {
        value: "9301000030",
        label: "SUPER NINY"
    },
    {
        value: "9301000032",
        label: "TIENDA GOGA"
    },
    {
        value: "9301000033",
        label: "DEPOSITO TECATITO MIX"
    },
    {
        value: "9301000034",
        label: "ROCK Y COFFEE"
    },
    {
        value: "9301000035",
        label: "SALON 21"
    },
    {
        value: "9301000036",
        label: "ABARROTES VINOS Y LICORES LA JOYA"
    },
    {
        value: "9301000037",
        label: "LA INDIA LADINA"
    },
    {
        value: "9301000038",
        label: "LA 110 RESTAURANTE"
    },
    {
        value: "9301000039",
        label: "BLACK STAR"
    },
    {
        value: "9301000040",
        label: "BAMMBATEE"
    },
    {
        value: "9303000004",
        label: "LA GUERA "
    },
    {
        value: "9303000005",
        label: "LA PALAPA "
    },
    {
        value: "9311000005",
        label: "ROAD CARAVELLE"
    },
    {
        value: "9311000006",
        label: "PERLA NEGRA"
    },
    {
        value: "9311000007",
        label: "MINI SUPER GRECIA"
    },
    {
        value: "9311000008",
        label: "ABARROTES SANDY"
    },
    {
        value: "9311000009",
        label: "ABARROTES MELANI"
    },
    {
        value: "9311000010",
        label: "ABARROTES LA MILAGROSA"
    },
    {
        value: "9311000011",
        label: "TACOS LA PASADITA "
    },
    {
        value: "9311000012",
        label: "ABARROTES SERGIO"
    },
    {
        value: "9311000013",
        label: "CARNITAS ANITA "
    },
    {
        value: "9311000014",
        label: "ABARROTES  ANGEL"
    },
    {
        value: "9311000015",
        label: "LA HORTENSIA"
    },
    {
        value: "9311000016",
        label: "ABARROTES LUPITA"
    },
    {
        value: "9311000017",
        label: "MISCELANEA LA FUTBOLERA "
    },
    {
        value: "9311000018",
        label: "LOS COMPADRES"
    },
    {
        value: "9312000003",
        label: "DEPOSITO DOLORES"
    },
    {
        value: "9312000004",
        label: "ABARROTES MARY II"
    },
    {
        value: "9312000005",
        label: "DANIEL"
    },
    {
        value: "9312000006",
        label: "ABARROTES ABIGAIL"
    },
    {
        value: "9312000007",
        label: "MISCELANEA VISTA HERMOSA "
    },
    {
        value: "9312000008",
        label: "MISCELANEA LA ESQUINA "
    },
    {
        value: "9312000009",
        label: "VINATERIA EL RETIRO"
    },
    {
        value: "9312000010",
        label: "EL PASO "
    },
    {
        value: "9312000011",
        label: "PORTAL"
    },
    {
        value: "9321000026",
        label: "SUPER TAQUERIA"
    },
    {
        value: "9321000027",
        label: "EL OASIS"
    },
    {
        value: "9321000028",
        label: "DON GEORGE"
    },
    {
        value: "9321000029",
        label: "CREMERIA Y ABARROTES ALICE"
    },
    {
        value: "9321000030",
        label: "RESTAURANTE FAMILIAR EL LIENZO"
    },
    {
        value: "9321000031",
        label: "EL RINCON DEL CENTRO "
    },
    {
        value: "9321000032",
        label: "ABARROTES EL BARTO"
    },
    {
        value: "9321000033",
        label: "TIENDA Y PAPELERIA CORONA"
    },
    {
        value: "9321000034",
        label: "ABARROTES JESSY"
    },
    {
        value: "9321000035",
        label: "3 GUSANITOS"
    },
    {
        value: "9321000036",
        label: "ABARROTES ALHER"
    },
    {
        value: "9321000037",
        label: "MINI SUPER CHARLIE"
    },
    {
        value: "9321000038",
        label: "ABARROTES EL OASIS III"
    },
    {
        value: "9321000039",
        label: "ABARROTES CHIVIS"
    },
    {
        value: "9321000040",
        label: "MINI SUPER EL GLOBO"
    },
    {
        value: "9321000041",
        label: "BILLAR HACIENDAS"
    },
    {
        value: "9321000042",
        label: "ABARROTES LA HORMIGA"
    },
    {
        value: "9321000043",
        label: "DEPOSITO LA CHAPIS"
    },
    {
        value: "9321000044",
        label: "IRISH CAFFEE"
    },
    {
        value: "9321000045",
        label: "ABARROTES EL LIBRAMIENTO"
    },
    {
        value: "9321000046",
        label: "MANGOS BAR"
    },
    {
        value: "9321000047",
        label: "EL SOTANO"
    },
    {
        value: "9321000048",
        label: "LA KAFETA"
    },
    {
        value: "9321000049",
        label: "VINATERIA GARCIA"
    },
    {
        value: "9321000050",
        label: "ABARROTES KIKE"
    },
    {
        value: "9321000051",
        label: "SHIN GON"
    },
    {
        value: "9321000052",
        label: "ABARROTES SOFILU"
    },
    {
        value: "9321000053",
        label: "ABARROTES MICKEY "
    },
    {
        value: "9321000054",
        label: "HOTEL LOS POTRILLOS"
    },
    {
        value: "9321000055",
        label: "MISCELANEA LA LUPITA 2"
    },
    {
        value: "9321000056",
        label: "BARBER SHOP ALEX"
    },
    {
        value: "9321000057",
        label: "CHE LOKO"
    },
    {
        value: "9321000058",
        label: "LA CONDESITA "
    },
    {
        value: "9321000059",
        label: "MARISCOS JIMMYS"
    },
    {
        value: "9321000060",
        label: "MIXIOTES EL REY"
    },
    {
        value: "9321000061",
        label: "LA FLOR DE TECARIO"
    },
    {
        value: "9321000062",
        label: "ABARROTES SANTI"
    },
    {
        value: "9322000007",
        label: "MISCELANEA LOS PRIMOS"
    },
    {
        value: "9322000008",
        label: "VERDULERIA ROMERO "
    },
    {
        value: "9322000009",
        label: "MISCELANEA DANNA"
    },
    {
        value: "9322000010",
        label: "ABARROTES MOY"
    },
    {
        value: "9322000011",
        label: "ABARROTES KIKE "
    },
    {
        value: "9322000012",
        label: "DEPOSITO BATMAN Y ROBIN"
    },
    {
        value: "9322000013",
        label: "ABARROTES PAO"
    },
    {
        value: "9322000014",
        label: "HUARACHES JULIANCITO"
    },
    {
        value: "9322000015",
        label: "MARISQUERIA BRISA"
    },
    {
        value: "9322000016",
        label: "CENTRO BONTANERO EL CRUCERO DE EL AMOR "
    },
    {
        value: "9322000017",
        label: "MISCELANEA LUPITA"
    },
    {
        value: "9322000018",
        label: "ABARROTES LOS INFIELES "
    },
    {
        value: "9322000019",
        label: "ABARROTES KIKISH"
    },
    {
        value: "9322000020",
        label: "MISCELANEA LA PENA"
    },
    {
        value: "9322000021",
        label: "CASA MOY "
    },
    {
        value: "9322000022",
        label: "EL GHETTO BIKER CLUB GARAGE"
    },
    {
        value: "9322000023",
        label: "TIENDA 4 HERMANAS"
    },
    {
        value: "9322000024",
        label: "LA COMERCIAL"
    },
    {
        value: "9332000001",
        label: "ABARROTES MALIZ"
    }
]



const MyUsers = () => (
    <Select className="select1" options={options}></Select>
)

export default MyUsers;