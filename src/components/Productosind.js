import React from 'react';
import Select from  'react-select';
import './Productos.css';

const listacarrito = [
    
    {
        value: "107",
        label: "SABORES PARIS PARIS DE NOCHE COLA 2 L",
        Precio: "312.83"
    },
    {
        value: "108",
        label: "SABORES PARIS KOSAKO MORA AZUL 2 L",
        Precio: "312.83"
    },
    {
        value: "131",
        label: "SABORES PARIS PARIS DE NOCHE ARANDANO 340",
        Precio: "112.24"
    },
    {
        value: "272",
        label: "TECATE  4X6 LAT 16OZ",
        Precio: "343.1"
    },
    {
        value: "274",
        label: "INDIO 12/1 1X12 BOT 1.18L",
        Precio: "321.55"
    },
    {
        value: "276",
        label: "TECATE 12/1 LT1/4 1.18L",
        Precio: "321.55"
    },
    {
        value: "278",
        label: "XX LAGER  1X12 BOT 1.18L",
        Precio: "343.1"
    },
    {
        value: "280",
        label: "XX LAGER  1X20 BOT 190ML",
        Precio: "125"
    },
    {
        value: "282",
        label: "INDIO SAC 4X6 LAT 16OZ",
        Precio: "343.1"
    },
    {
        value: "284",
        label: "XX LAGER  1X20 BOT 325ML",
        Precio: "193.1"
    },
    {
        value: "286",
        label: "HEINEKEN  4X6 BOT 355ML",
        Precio: "359.48"
    },
    {
        value: "288",
        label: "INDIO 20/4 190ML",
        Precio: "116.38"
    },
    {
        value: "290",
        label: "INDIO PREMIER 1X20 BOT 325ML",
        Precio: "168.1"
    },
    {
        value: "292",
        label: "BOHEMIA OBSCURA OBSCURA 4X6 BOT 355ML",
        Precio: "335.34"
    },
    {
        value: "294",
        label: "TECATE TITANIUM SAC 4X6 LAT 355ML",
        Precio: "278.4482"
    },
    {
        value: "298",
        label: "XX LAGER NR 4X6 BOT 355ML",
        Precio: "308.62"
    },
    {
        value: "302",
        label: "HEINEKEN  4X6 LAT 355ML",
        Precio: "337.9310"
    },
    {
        value: "304",
        label: "SOL CERO  4X6 LAT 355ML",
        Precio: "270.69"
    },
    {
        value: "306",
        label: "SOL NI 1X20 BOT 190ML",
        Precio: "116.38"
    },
    {
        value: "310",
        label: "CARTA BLANCA NI 1X12 BOT 940ML",
        Precio: "243.97"
    },
    {
        value: "312",
        label: "INDIO BEAUTY 4X6 BOT 355ML",
        Precio: "275.86"
    },
    {
        value: "316",
        label: "XX LAGER  4X6 LAT 355ML",
        Precio: "287.0689"
    },
    {
        value: "320",
        label: "BOHEMIA OBSCURA OBSCURA 1X12 BOT 355ML",
        Precio: "131.03"
    },
    {
        value: "322",
        label: "SOL NI 1X12 BOT 1.18L",
        Precio: "321.55"
    },
    {
        value: "324",
        label: "TECATE LIGHT  4X6 LAT 16OZ",
        Precio: "343.1"
    },
    {
        value: "328",
        label: "XX AMBAR PREMIER 4X6 BOT 355ML",
        Precio: "308.62"
    },
    {
        value: "330",
        label: "SUPERIOR TW 4X6 BOT 355ML",
        Precio: "235.34"
    },
    {
        value: "334",
        label: "HEINEKEN  1X1 BRR 20L",
        Precio: "689.66"
    },
    {
        value: "336",
        label: "INDIO  1X1 BRR",
        Precio: "715.52"
    },
    {
        value: "338",
        label: "TECATE B1/4 30LT",
        Precio: "715.52"
    },
    {
        value: "344",
        label: "BOHEMIA CLASICA 4X6 BOT 355ML",
        Precio: "335.34"
    },
    {
        value: "350",
        label: "INDIO BEAUTY 1X12 BOT 355ML",
        Precio: "150"
    },
    {
        value: "354",
        label: "SOL NI 4X6 BOT 355ML",
        Precio: "275.86"
    },
    {
        value: "360",
        label: "XX LAGER NR 12/2 355ML",
        Precio: "165.52"
    },
    {
        value: "370",
        label: "TECATE STD 20/2 325ML",
        Precio: "168.1"
    },
    {
        value: "372",
        label: "TECATE LIGHT STD 20/2 325ML",
        Precio: "168.1"
    },
    {
        value: "376",
        label: "XX AMBAR PREMIER 1X20 BOT 325ML",
        Precio: "193.1"
    },
    {
        value: "378",
        label: "BOHEMIA CLASICA 12/2 355ML",
        Precio: "125.43"
    },
    {
        value: "380",
        label: "SOL NI 1X20 BOT 355ML",
        Precio: "168.1"
    },
    {
        value: "382",
        label: "INDIO  1X12 BOT 940ML",
        Precio: "257.76"
    },
    {
        value: "384",
        label: "SOL NI 1X12 BOT 940ML",
        Precio: "257.76"
    },
    {
        value: "396",
        label: "TECATE 12/L 355ML",
        Precio: "150"
    },
    {
        value: "398",
        label: "TECATE  4X6 LAT 355ML",
        Precio: "281.03"
    },
    {
        value: "400",
        label: "TECATE LIGHT  1X12 LAT 355ML",
        Precio: "150"
    },
    {
        value: "402",
        label: "TECATE LIGHT TC 4X6 LAT 355ML",
        Precio: "281.03"
    },
    {
        value: "410",
        label: "ENVASE GENERICO CM",
        Precio: "72.41"
    },
    {
        value: "418",
        label: "PARIS KOSAKO MULTISABOR 16 OZ NO RETORNABLE",
        Precio: "112.24"
    },
    {
        value: "423",
        label: "ENVASE BARRIL RETORNABLE",
        Precio: "1206.9"
    },
    {
        value: "493",
        label: "NOCHE BUENA NR 1X12 BOT 12OZ",
        Precio: "170.69"
    },
    {
        value: "502",
        label: "STRONGBOW GOLD 1X24 BOT 330ML",
        Precio: "374.14"
    },
    {
        value: "503",
        label: "STRONGBOW GOLD RED BERRIES 1X24 BOT 330M",
        Precio: "374.14"
    },
    {
        value: "513",
        label: "PARIS GATILLERO COLA 340 ML NO RETORNABLE\r\n",
        Precio: "112.24"
    },
    {
        value: "521",
        label: "TECATE LIGHT 12/1 1X12 BOT 1.18L\r\n",
        Precio: "321.55"
    },
    {
        value: "522",
        label: "CAJA DE VASO GENÉRICO INDIO TECATE O SOL 20 X 25 44 OZ",
        Precio: "646.55"
    },
    {
        value: "531",
        label: "XX AMBAR  1X1 BRR 20L",
        Precio: "549.14"
    },
    {
        value: "532",
        label: "XX LAGER  1X1 BRR 20L",
        Precio: "549.14"
    },
    {
        value: "533",
        label: "TECATE 1X1 BRR 20L",
        Precio: "491.38"
    },
    {
        value: "534",
        label: "INDIO 1X1 BRR 20L",
        Precio: "491.38"
    },
    {
        value: "539",
        label: "TARRO DE MEDIA SUBLIMADO",
        Precio: "344.83"
    },
    {
        value: "555",
        label: "TECATE TITANIUM 4X6 LAT 16 OZ",
        Precio: "359.48"
    },
    {
        value: "558",
        label: "HEINEKEN 4X6 LAT 16 OZ\r\n",
        Precio: "401.72"
    },
    {
        value: "559",
        label: "BOXITO DE CHOCOLATE 4X6 240ML",
        Precio: "210"
    },
    {
        value: "560",
        label: "PARIS FILÓSOFO 340 ML NR 12 NO RETORNABLE\r\n",
        Precio: "112.24"
    },
    {
        value: "561",
        label: "PARIS DIAMANTE NEGRO 340 ML NR 12 NO RETORNABLE\r\n",
        Precio: "112.24"
    },
    {
        value: "562",
        label: "PARIS MONJITA 340 ML NR 12 NO RETORNABLE\r\n",
        Precio: "112.24"
    },
    {
        value: "563",
        label: "PARIS PARIS DE NOCHE 600 ML NR 12 NO RETORNABLE\r\n",
        Precio: "152.07"
    },
    {
        value: "564",
        label: "PARIS KOSAKO 600 ML NR 12 NO RETORNABLE\r\n",
        Precio: "152.07"
    },
    {
        value: "565",
        label: "PARIS KOSAKO 3 L NR NO RETORNABLE\r\n",
        Precio: "312.83"
    },
    {
        value: "567",
        label: "PARIS BUFFALO 340 ML NR 12 NO RETORNABLE\r\n",
        Precio: "86.21"
    },
    {
        value: "568",
        label: "PARIS BINGO 473 ML NR 12 NO RETORNABLE\r\n",
        Precio: "108.62"
    },
    {
        value: "569",
        label: "PARIS SENSUAL 340 ML NR 12 NO RETORNABLE\r\n",
        Precio: "193.97"
    },
    {
        value: "573",
        label: "XX LAGER 4X6 LAT 16 OZ",
        Precio: "380.17"
    },
    {
        value: "574",
        label: "SOL CLAMATO 4X6 LAT 16 OZ\r\n",
        Precio: "373.28"
    },
    {
        value: "576",
        label: "TARRO DE LITRO SUBLIMADO",
        Precio: "474.14"
    },
    {
        value: "591",
        label: "XX AMBAR 1X12 BOT 1.18L\r\n",
        Precio: "343.1"
    },
    {
        value: "592",
        label: "XX AMBAR 4X6 LAT 16 OZ",
        Precio: "380.17"
    },
    {
        value: "599",
        label: "SOL MICHELADA 4X6 LAT 16 OZ\r\n",
        Precio: "373.28"
    },
    {
        value: "606",
        label: "AGUA NATURAL BRILLANTE 300ML",
        Precio: "26.66"
    },
    {
        value: "607",
        label: "AGUA NATURAL BRILLANTE 600ML",
        Precio: "65.04"
    },
    {
        value: "608",
        label: "AGUA NATURAL BRILLANTE 1L",
        Precio: "55.94"
    },
    {
        value: "609",
        label: "AGUA NATURAL BRILLANTE 1.5L",
        Precio: "57.71"
    },
    {
        value: "610",
        label: "AGUA MINERAL LATA 355ML",
        Precio: "143.67"
    },
    {
        value: "611",
        label: "AGUA MINERAL BOTELLA 355ML",
        Precio: "95.99"
    },
    {
        value: "612",
        label: "AGUA MINERAL BOTELLA 600ML",
        Precio: "116.81"
    },
    {
        value: "613",
        label: "AGUA MINERAL BOTELLA 2L",
        Precio: "87.57"
    },
    {
        value: "614",
        label: "BRILLANTE FRESA 3L",
        Precio: "104.71"
    },
    {
        value: "615",
        label: "BRILLANTE MANDARINA 3L",
        Precio: "104.71"
    },
    {
        value: "616",
        label: "BRILLANTE MANZANA 3L",
        Precio: "104.71"
    },
    {
        value: "617",
        label: "BRILLANTE PIÃA 3L",
        Precio: "104.71"
    },
    {
        value: "618",
        label: "BRILLANTE SANGRIA 3L",
        Precio: "104.71"
    },
    {
        value: "619",
        label: "BRILLANTE TORONJA 3L",
        Precio: "104.71"
    },
    {
        value: "620",
        label: "BRILLANTE SURTIDO 6 SAB 3L",
        Precio: "104.71"
    },
    {
        value: "621",
        label: "BRILLANTE FRESA 2L",
        Precio: "94.62"
    },
    {
        value: "622",
        label: "BRILLANTE MANDARINA 2L",
        Precio: "94.62"
    },
    {
        value: "623",
        label: "BRILLANTE MANZANA 2L",
        Precio: "94.62"
    },
    {
        value: "624",
        label: "BRILLANTE SANGRIA 2L",
        Precio: "94.62"
    },
    {
        value: "625",
        label: "BRILLANTE TORONJA 2L",
        Precio: "94.62"
    },
    {
        value: "626",
        label: "BRILLANTE SURTIDO 5 SAB 2L",
        Precio: "94.62"
    },
    {
        value: "627",
        label: "BRILLANTE FRESA 600ML",
        Precio: "138.28"
    },
    {
        value: "628",
        label: "BRILLANTE MANDARINA 600ML",
        Precio: "138.28"
    },
    {
        value: "629",
        label: "BRILLANTE MANZANA 600ML",
        Precio: "138.28"
    },
    {
        value: "630",
        label: "BRILLANTE PIÃA 600ML",
        Precio: "138.28"
    },
    {
        value: "631",
        label: "BRILLANTE SANGRIA 600ML",
        Precio: "138.28"
    },
    {
        value: "632",
        label: "BRILLANTE TORONJA 600ML",
        Precio: "138.28"
    },
    {
        value: "633",
        label: "BRILLANTE SURTIDO 6 SAB 600ML",
        Precio: "138.28"
    },
    {
        value: "634",
        label: "BRILLANTE FRESA 500ML",
        Precio: "127.14"
    },
    {
        value: "635",
        label: "BRILLANTE MANDARINA 500ML",
        Precio: "127.14"
    },
    {
        value: "636",
        label: "BRILLANTE MANZANA 500ML",
        Precio: "127.14"
    },
    {
        value: "637",
        label: "BRILLANTE PIÃA 500ML",
        Precio: "127.14"
    },
    {
        value: "638",
        label: "BRILLANTE SANGRIA 500ML",
        Precio: "127.14"
    },
    {
        value: "639",
        label: "BRILLANTE TORONJA 500ML",
        Precio: "127.14"
    },
    {
        value: "640",
        label: "BRILLANTE SURTIDO 6 SAB 500ML",
        Precio: "127.14"
    },
    {
        value: "641",
        label: "BRILLANTE FRESA 600ML 12 PIEZAS",
        Precio: "69.14"
    },
    {
        value: "642",
        label: "BRILLANTE MANDARINA 600ML 12 PIEZAS",
        Precio: "69.14"
    },
    {
        value: "643",
        label: "BRILLANTE MANZANA 600ML 12 PIEZAS",
        Precio: "69.14"
    },
    {
        value: "644",
        label: "BRILLANTE PINA 600ML 12 PIEZAS",
        Precio: "69.14"
    },
    {
        value: "645",
        label: "BRILLANTE SANGRIA 600ML 12 PIEZAS",
        Precio: "69.14"
    },
    {
        value: "646",
        label: "BRILLANTE TORONJA 600ML 12 PIEZAS",
        Precio: "69.14"
    },
    {
        value: "647",
        label: "AGUA MINERAL BRILLANTE 600ML 12 PIEZAS",
        Precio: "69.14"
    },
    {
        value: "648",
        label: "BRILLANTE SURTIDO 3 SAB 600ML PINA/MAND/MZANA",
        Precio: "69.14"
    },
    {
        value: "649",
        label: "BRILLANTE SURTIDO 3 SAB 600ML TOR/SANG/FRESA",
        Precio: "69.14"
    },
    {
        value: "650",
        label: "BRILLANTE NARANJADA 600ML 12 PIEZAS",
        Precio: "77.66"
    },
    {
        value: "651",
        label: "BRILLANTE LIMONADA 600ML 12 PIEZAS",
        Precio: "77.66"
    },
    {
        value: "652",
        label: "BRILLANTE PONCHE 600ML 12 PIEZAS",
        Precio: "77.66"
    },
    {
        value: "653",
        label: "BRILLANTE NARANJADA 2L",
        Precio: "106.07"
    },
    {
        value: "654",
        label: "BRILLANTELIMONADA 2L",
        Precio: "106.07"
    },
    {
        value: "655",
        label: "BRILLANTE PONCHE 2L",
        Precio: "106.07"
    },
    {
        value: "656",
        label: "BRILLANTE FRESA 355ML",
        Precio: "110.11"
    },
    {
        value: "657",
        label: "BRILLANTE MANDARINA 355ML",
        Precio: "110.11"
    },
    {
        value: "658",
        label: "BRILLANTE MANZANA 355ML",
        Precio: "110.11"
    },
    {
        value: "659",
        label: "BRILLANTE PINA 355ML",
        Precio: "110.11"
    },
    {
        value: "660",
        label: "BRILLANTE SANGRIA 355ML",
        Precio: "110.11"
    },
    {
        value: "661",
        label: "BRILLANTE TORONJA 355ML",
        Precio: "110.11"
    },
    {
        value: "662",
        label: "BRILLANTE SURTIDO 6 SAB 355ML",
        Precio: "110.11"
    },
    {
        value: "663",
        label: "CILINDRO CO2 LLENO\r\n",
        Precio: "1842.86"
    },
    {
        value: "666",
        label: "HEINEKEN 1X12 LAT BOT 1L\r\n",
        Precio: "345.69"
    },
    {
        value: "670",
        label: "GAS CO2",
        Precio: "232.76"
    },
    {
        value: "671",
        label: "CILINDRO C02",
        Precio: "1640.36"
    },
    {
        value: "680",
        label: "DISPENSADOR TRITON 3L",
        Precio: "2025.86"
    },
    {
        value: "681",
        label: "DISPENSADOR TRITÓN 5L",
        Precio: "2155.17"
    },
    {
        value: "688",
        label: "SOL CHELADA 4X6 LAT 16OZ",
        Precio: "373.28"
    },
    {
        value: "689",
        label: "CARTA BLANCA CAGUAMITA 4X6 355ML",
        Precio: "173.28"
    },
    {
        value: "690",
        label: "TECATE 1X12 940ML",
        Precio: "257.76"
    },
    {
        value: "691",
        label: "TECATE LIGHT 1X12 940ML",
        Precio: "257.76"
    },
    {
        value: "692",
        label: "HEINEKEN 0.0 4X6 LAT 355ML",
        Precio: "306.9"
    },
    {
        value: "693",
        label: "HEINEKEN 0.0 4X6 BOT 250ML",
        Precio: "260.34"
    },
    {
        value: "694",
        label: "TECATE AMBAR 4X6 LAT 16OZ",
        Precio: "343.1"
    },
    {
        value: "695",
        label: "TECATE AMBAR 20/2 325ML",
        Precio: "168.1"
    },
    {
        value: "696",
        label: "TECATE AMBAR 1X12 BOT 940ML",
        Precio: "257.76"
    },
    {
        value: "697",
        label: "STRONGBOW HONEY & APPLE 1X24 BOT 330ML",
        Precio: "374.14"
    },
    {
        value: "698",
        label: "STRONGBOW ROSE 1X24 BOT 330ML",
        Precio: "374.14"
    },
    {
        value: "699",
        label: "AMSTEL ULTRA 4X6 LAT 355ML",
        Precio: "308.62"
    },
    {
        value: "700",
        label: "AMSTEL ULTRA 4X6 BOT 355ML",
        Precio: "308.62"
    },
    {
        value: "95",
        label: "SABORES PARIS PARIS DE NOCHE COLA 340",
        Precio: "112.24"
    },
    {
        value: "97",
        label: "SABORES PARIS KOSAKO MORA AZUL 340",
        Precio: "112.24"
    },
    {
        value: "99",
        label: "SABORES PARIS MOJITO MENTA 340",
        Precio: "112.24"
    }

]


const MyProducts = () => (
    <Select className='selectproductos' isMulti options={listacarrito}></Select>
)

export default MyProducts;