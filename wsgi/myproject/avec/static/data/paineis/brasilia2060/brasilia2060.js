function iniciar2(){
  var HOSPITALSANTAMARTA = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:49,date:"2012-01-01"},{valor_total:292,date:"2013-01-01"},{valor_total:178,date:"2014-01-01"},{valor_total:3,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HBDFHOSPITALDEBASEDODISTRITOFEDERAL = [{valor_total:25373,date:"2008-01-01"},{valor_total:23351,date:"2009-01-01"},{valor_total:22188,date:"2010-01-01"},{valor_total:22374,date:"2011-01-01"},{valor_total:16669,date:"2012-01-01"},{valor_total:14298,date:"2013-01-01"},{valor_total:13825,date:"2014-01-01"},{valor_total:15058,date:"2015-01-01"},{valor_total:22585,date:"2016-01-01"},{valor_total:13268,date:"2017-01-01"}];
  var HOSPITALDACRIANCADEBRASILIAJOSEALENCARHCB = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:5,date:"2011-01-01"},{valor_total:239,date:"2012-01-01"},{valor_total:695,date:"2013-01-01"},{valor_total:978,date:"2014-01-01"},{valor_total:983,date:"2015-01-01"},{valor_total:908,date:"2016-01-01"},{valor_total:591,date:"2017-01-01"}];
  var HOSPITALDIADAASASUL = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:306,date:"2015-01-01"},{valor_total:120,date:"2016-01-01"},{valor_total:42,date:"2017-01-01"}];
  var HRGU = [{valor_total:2160,date:"2008-01-01"},{valor_total:2409,date:"2009-01-01"},{valor_total:2681,date:"2010-01-01"},{valor_total:2705,date:"2011-01-01"},{valor_total:2861,date:"2012-01-01"},{valor_total:1848,date:"2013-01-01"},{valor_total:2196,date:"2014-01-01"},{valor_total:2172,date:"2015-01-01"},{valor_total:1962,date:"2016-01-01"},{valor_total:1257,date:"2017-01-01"}];
  var HOSPITALMATERNOINFANTILDEBRASILIAHMIB = [{valor_total:15303,date:"2008-01-01"},{valor_total:12783,date:"2009-01-01"},{valor_total:13361,date:"2010-01-01"},{valor_total:14863,date:"2011-01-01"},{valor_total:15638,date:"2012-01-01"},{valor_total:14779,date:"2013-01-01"},{valor_total:12322,date:"2014-01-01"},{valor_total:12163,date:"2015-01-01"},{valor_total:14678,date:"2016-01-01"},{valor_total:8382,date:"2017-01-01"}];
  var PRONTONORTE = [{valor_total:162,date:"2008-01-01"},{valor_total:204,date:"2009-01-01"},{valor_total:35,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var FRAO = [{valor_total:68,date:"2008-01-01"},{valor_total:49,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var SARAHBRASILIA = [{valor_total:7878,date:"2008-01-01"},{valor_total:8288,date:"2009-01-01"},{valor_total:8377,date:"2010-01-01"},{valor_total:7976,date:"2011-01-01"},{valor_total:9085,date:"2012-01-01"},{valor_total:8937,date:"2013-01-01"},{valor_total:9328,date:"2014-01-01"},{valor_total:9130,date:"2015-01-01"},{valor_total:8819,date:"2016-01-01"},{valor_total:4440,date:"2017-01-01"}];
  var HRBZ = [{valor_total:7078,date:"2008-01-01"},{valor_total:8996,date:"2009-01-01"},{valor_total:6141,date:"2010-01-01"},{valor_total:5976,date:"2011-01-01"},{valor_total:4610,date:"2012-01-01"},{valor_total:6618,date:"2013-01-01"},{valor_total:6426,date:"2014-01-01"},{valor_total:5579,date:"2015-01-01"},{valor_total:6001,date:"2016-01-01"},{valor_total:3111,date:"2017-01-01"}];
  var HOSPITALSAOLUCAS = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:14,date:"2010-01-01"},{valor_total:8,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HRTHOSPITALREGIONALDETAGUATINGA = [{valor_total:17454,date:"2008-01-01"},{valor_total:19449,date:"2009-01-01"},{valor_total:17896,date:"2010-01-01"},{valor_total:16196,date:"2011-01-01"},{valor_total:17645,date:"2012-01-01"},{valor_total:17818,date:"2013-01-01"},{valor_total:14365,date:"2014-01-01"},{valor_total:17936,date:"2015-01-01"},{valor_total:17970,date:"2016-01-01"},{valor_total:9022,date:"2017-01-01"}];
  var HRPL = [{valor_total:11038,date:"2008-01-01"},{valor_total:9922,date:"2009-01-01"},{valor_total:10975,date:"2010-01-01"},{valor_total:10259,date:"2011-01-01"},{valor_total:11160,date:"2012-01-01"},{valor_total:10764,date:"2013-01-01"},{valor_total:11385,date:"2014-01-01"},{valor_total:9586,date:"2015-01-01"},{valor_total:9214,date:"2016-01-01"},{valor_total:5383,date:"2017-01-01"}];
  var INSTITUTODEONCOLOGIALAGOSUL = [{valor_total:270,date:"2008-01-01"},{valor_total:147,date:"2009-01-01"},{valor_total:83,date:"2010-01-01"},{valor_total:24,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var CASADEPARTODESAOSEBASTIAO = [{valor_total:1361,date:"2008-01-01"},{valor_total:1163,date:"2009-01-01"},{valor_total:1001,date:"2010-01-01"},{valor_total:519,date:"2011-01-01"},{valor_total:325,date:"2012-01-01"},{valor_total:392,date:"2013-01-01"},{valor_total:423,date:"2014-01-01"},{valor_total:404,date:"2015-01-01"},{valor_total:387,date:"2016-01-01"},{valor_total:214,date:"2017-01-01"}];
  var HRAN = [{valor_total:14409,date:"2008-01-01"},{valor_total:14167,date:"2009-01-01"},{valor_total:12710,date:"2010-01-01"},{valor_total:15010,date:"2011-01-01"},{valor_total:13976,date:"2012-01-01"},{valor_total:14095,date:"2013-01-01"},{valor_total:13871,date:"2014-01-01"},{valor_total:14444,date:"2015-01-01"},{valor_total:14818,date:"2016-01-01"},{valor_total:5822,date:"2017-01-01"}];
  var HFA = [{valor_total:241,date:"2008-01-01"},{valor_total:294,date:"2009-01-01"},{valor_total:9,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HOSPITALANCHIETALTDA = [{valor_total:55,date:"2008-01-01"},{valor_total:32,date:"2009-01-01"},{valor_total:7,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HOSPITALDASCLINICASDEBRASILIA = [{valor_total:202,date:"2008-01-01"},{valor_total:180,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HRSAMHOSPITALREGIONALDESAMAMBAIA = [{valor_total:6799,date:"2008-01-01"},{valor_total:6134,date:"2009-01-01"},{valor_total:6107,date:"2010-01-01"},{valor_total:5976,date:"2011-01-01"},{valor_total:6649,date:"2012-01-01"},{valor_total:7848,date:"2013-01-01"},{valor_total:7687,date:"2014-01-01"},{valor_total:7584,date:"2015-01-01"},{valor_total:9270,date:"2016-01-01"},{valor_total:4786,date:"2017-01-01"}];
  var HOSPITALHOME = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:61,date:"2012-01-01"},{valor_total:52,date:"2013-01-01"},{valor_total:34,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HOSPITALDAUNIVERSIDADECATOLICADEBRASILIA = [{valor_total:166,date:"2008-01-01"},{valor_total:90,date:"2009-01-01"},{valor_total:135,date:"2010-01-01"},{valor_total:58,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var ITI = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:86,date:"2011-01-01"},{valor_total:74,date:"2012-01-01"},{valor_total:86,date:"2013-01-01"},{valor_total:47,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HOSPITALSANTAHELENA = [{valor_total:212,date:"2008-01-01"},{valor_total:150,date:"2009-01-01"},{valor_total:76,date:"2010-01-01"},{valor_total:6,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HOSPITALSAOVICENTEDEPAULOHSVP = [{valor_total:2795,date:"2008-01-01"},{valor_total:2721,date:"2009-01-01"},{valor_total:3351,date:"2010-01-01"},{valor_total:3165,date:"2011-01-01"},{valor_total:3315,date:"2012-01-01"},{valor_total:3244,date:"2013-01-01"},{valor_total:2979,date:"2014-01-01"},{valor_total:2958,date:"2015-01-01"},{valor_total:2313,date:"2016-01-01"},{valor_total:1175,date:"2017-01-01"}];
  var HOSPITALSANTALUCIA = [{valor_total:128,date:"2008-01-01"},{valor_total:137,date:"2009-01-01"},{valor_total:28,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var INSTITUTODECARDIOLOGIADODISTRITOFEDERAL = [{valor_total:979,date:"2008-01-01"},{valor_total:1443,date:"2009-01-01"},{valor_total:1696,date:"2010-01-01"},{valor_total:1970,date:"2011-01-01"},{valor_total:2307,date:"2012-01-01"},{valor_total:3102,date:"2013-01-01"},{valor_total:3534,date:"2014-01-01"},{valor_total:3751,date:"2015-01-01"},{valor_total:3867,date:"2016-01-01"},{valor_total:2149,date:"2017-01-01"}];
  var HRSM = [{valor_total:0,date:"2008-01-01"},{valor_total:245,date:"2009-01-01"},{valor_total:8827,date:"2010-01-01"},{valor_total:8150,date:"2011-01-01"},{valor_total:9565,date:"2012-01-01"},{valor_total:15746,date:"2013-01-01"},{valor_total:12855,date:"2014-01-01"},{valor_total:10750,date:"2015-01-01"},{valor_total:9716,date:"2016-01-01"},{valor_total:4077,date:"2017-01-01"}];
  var HRPA = [{valor_total:7051,date:"2008-01-01"},{valor_total:8654,date:"2009-01-01"},{valor_total:9943,date:"2010-01-01"},{valor_total:9325,date:"2011-01-01"},{valor_total:9993,date:"2012-01-01"},{valor_total:8856,date:"2013-01-01"},{valor_total:10534,date:"2014-01-01"},{valor_total:7142,date:"2015-01-01"},{valor_total:8431,date:"2016-01-01"},{valor_total:4451,date:"2017-01-01"}];
  var HOSPITALUNIVERSITARIODEBRASILIA = [{valor_total:9753,date:"2008-01-01"},{valor_total:9863,date:"2009-01-01"},{valor_total:8226,date:"2010-01-01"},{valor_total:7980,date:"2011-01-01"},{valor_total:9268,date:"2012-01-01"},{valor_total:10150,date:"2013-01-01"},{valor_total:6953,date:"2014-01-01"},{valor_total:8092,date:"2015-01-01"},{valor_total:8038,date:"2016-01-01"},{valor_total:4863,date:"2017-01-01"}];
  var HOSPITALLAGOSUL = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:1,date:"2010-01-01"},{valor_total:35,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var CBVCENTROBRASILEIRODAVISAO = [{valor_total:504,date:"2008-01-01"},{valor_total:507,date:"2009-01-01"},{valor_total:789,date:"2010-01-01"},{valor_total:693,date:"2011-01-01"},{valor_total:598,date:"2012-01-01"},{valor_total:4,date:"2013-01-01"},{valor_total:33,date:"2014-01-01"},{valor_total:302,date:"2015-01-01"},{valor_total:286,date:"2016-01-01"},{valor_total:227,date:"2017-01-01"}];
  var HRCCEILANDIA = [{valor_total:16914,date:"2008-01-01"},{valor_total:16890,date:"2009-01-01"},{valor_total:17939,date:"2010-01-01"},{valor_total:17143,date:"2011-01-01"},{valor_total:17120,date:"2012-01-01"},{valor_total:17743,date:"2013-01-01"},{valor_total:17863,date:"2014-01-01"},{valor_total:17449,date:"2015-01-01"},{valor_total:18486,date:"2016-01-01"},{valor_total:9561,date:"2017-01-01"}];
  var HOSPITALDEAPOIODEBRASILIAHAB = [{valor_total:1249,date:"2008-01-01"},{valor_total:1126,date:"2009-01-01"},{valor_total:773,date:"2010-01-01"},{valor_total:467,date:"2011-01-01"},{valor_total:554,date:"2012-01-01"},{valor_total:561,date:"2013-01-01"},{valor_total:635,date:"2014-01-01"},{valor_total:500,date:"2015-01-01"},{valor_total:550,date:"2016-01-01"},{valor_total:275,date:"2017-01-01"}];
  var HOSPITALSAOFRANCISCO = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:0,date:"2011-01-01"},{valor_total:0,date:"2012-01-01"},{valor_total:99,date:"2013-01-01"},{valor_total:149,date:"2014-01-01"},{valor_total:65,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];
  var HOSPITALSAOMATEUS = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:0,date:"2010-01-01"},{valor_total:72,date:"2011-01-01"},{valor_total:307,date:"2012-01-01"},{valor_total:246,date:"2013-01-01"},{valor_total:155,date:"2014-01-01"},{valor_total:231,date:"2015-01-01"},{valor_total:200,date:"2016-01-01"},{valor_total:62,date:"2017-01-01"}];
  var HMA = [{valor_total:0,date:"2008-01-01"},{valor_total:0,date:"2009-01-01"},{valor_total:20,date:"2010-01-01"},{valor_total:70,date:"2011-01-01"},{valor_total:2,date:"2012-01-01"},{valor_total:0,date:"2013-01-01"},{valor_total:0,date:"2014-01-01"},{valor_total:0,date:"2015-01-01"},{valor_total:0,date:"2016-01-01"},{valor_total:0,date:"2017-01-01"}];

var chart = AmCharts.makeChart("chartdivProcedimentos Hospitalares do SUS", {
  type: "stock",
  theme: "light",
dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
colors: [ "#8091a4"],
"thousandsSeparator": ".",
"decimalSeparator": ",",
extendToFullPeriod : true,
  pathToImages: "http://www.amcharts.com/lib/3/images/",

  panelsSettings: {
      recalculateToPercents: "never"
  },

  dataSets: [
{
      title: "HOSPITAL SANTA MARTA",
      fieldMappings: [{
          fromField: "valor_total",
          toField: "valor_total"
      }
  ],
      dataProvider: HOSPITALSANTAMARTA,
      categoryField: "date"
  },
  {
        title: "HBDF HOSPITAL DE BASE DO DISTRITO FEDERAL",
        fieldMappings: [{
            fromField: "valor_total",
            toField: "valor_total"
        }
    ],
        dataProvider: HBDFHOSPITALDEBASEDODISTRITOFEDERAL,
        categoryField: "date"
    },
    {
          title: "HOSPITAL DA CRIANCA DE BRASILIA JOSE ALENCAR HCB",
          fieldMappings: [{
              fromField: "valor_total",
              toField: "valor_total"
          }
      ],
          dataProvider: HOSPITALDACRIANCADEBRASILIAJOSEALENCARHCB,
          categoryField: "date"
      },
      {
            title: "HOSPITAL DIA DA ASA SUL",
            fieldMappings: [{
                fromField: "valor_total",
                toField: "valor_total"
            }
        ],
            dataProvider: HOSPITALDIADAASASUL,
            categoryField: "date"
        },
        {
              title: "HRGU",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HRGU,
              categoryField: "date"
          },
        {
              title: "HOSPITAL MATERNO INFANTIL DE BRASILIA HMIB",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALMATERNOINFANTILDEBRASILIAHMIB,
              categoryField: "date"
          },
        {
              title: "PRONTO NORTE",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: PRONTONORTE,
              categoryField: "date"
          },
        {
              title: "FRAO",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: FRAO,
              categoryField: "date"
          },
        {
              title: "SARAH BRASILIA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: SARAHBRASILIA,
              categoryField: "date"
          },
        {
              title: "HRBZ",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HRBZ,
              categoryField: "date"
          },
        {
              title: "HOSPITAL SAO LUCAS",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALSAOLUCAS,
              categoryField: "date"
          },
        {
              title: "HRT HOSPITAL REGIONAL DE TAGUATINGA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HRTHOSPITALREGIONALDETAGUATINGA,
              categoryField: "date"
          },
        {
              title: "HRPL",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HRPL,
              categoryField: "date"
          },
        {
              title: "INSTITUTO DE ONCOLOGIA LAGO SUL",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: INSTITUTODEONCOLOGIALAGOSUL,
              categoryField: "date"
          },
        {
              title: "CASA DE PARTO DE SAO SEBASTIAO",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: CASADEPARTODESAOSEBASTIAO,
              categoryField: "date"
          },
        {
              title: "HRAN",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HRAN,
              categoryField: "date"
          },
        {
              title: "HFA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HFA,
              categoryField: "date"
          },
        {
              title: "HOSPITAL ANCHIETA LTDA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALANCHIETALTDA,
              categoryField: "date"
          },
        {
              title: "HOSPITAL DAS CLINICAS DE BRASILIA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALDASCLINICASDEBRASILIA,
              categoryField: "date"
          },
        {
              title: "HRSAM HOSPITAL REGIONAL DE SAMAMBAIA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HRSAMHOSPITALREGIONALDESAMAMBAIA,
              categoryField: "date"
          },
          {
                title: "HOSPITAL HOME",
                fieldMappings: [{
                    fromField: "valor_total",
                    toField: "valor_total"
                }
            ],
                dataProvider: HOSPITALHOME,
                categoryField: "date"
            },
          {
                title: "HOSPITAL DA UNIVERSIDADE CATOLICA DE BRASILIA",
                fieldMappings: [{
                    fromField: "valor_total",
                    toField: "valor_total"
                }
            ],
                dataProvider: HOSPITALDAUNIVERSIDADECATOLICADEBRASILIA,
                categoryField: "date"
            },
          {
                title: "ITI",
                fieldMappings: [{
                    fromField: "valor_total",
                    toField: "valor_total"
                }
            ],
                dataProvider: ITI,
                categoryField: "date"
            },
          {
                title: "HOSPITAL SANTA HELENA",
                fieldMappings: [{
                    fromField: "valor_total",
                    toField: "valor_total"
                }
            ],
                dataProvider: HOSPITALSANTAHELENA,
                categoryField: "date"
            },
        {
              title: "HOSPITAL SAO VICENTE DE PAULO HSVP",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALSAOVICENTEDEPAULOHSVP,
              categoryField: "date"
          },
        {
              title: "HOSPITAL SANTA LUCIA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALSANTALUCIA,
              categoryField: "date"
          },
        {
              title: "INSTITUTO DE CARDIOLOGIA DO DISTRITO FEDERAL",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: INSTITUTODECARDIOLOGIADODISTRITOFEDERAL,
              categoryField: "date"
          },
      {
            title: "HRSM",
            fieldMappings: [{
                fromField: "valor_total",
                toField: "valor_total"
            }
        ],
            dataProvider: HRSM,
            categoryField: "date"
        },
        {
              title: "HRPA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HRPA,
              categoryField: "date"
          },
        {
              title: "HOSPITAL UNIVERSITARIO DE BRASILIA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALUNIVERSITARIODEBRASILIA,
              categoryField: "date"
          },
        {
              title: "HOSPITAL LAGO SUL",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALLAGOSUL,
              categoryField: "date"
          },
        {
              title: "CBV CENTRO BRASILEIRO DA VISAO",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: CBVCENTROBRASILEIRODAVISAO,
              categoryField: "date"
          },
        {
              title: "HRC CEILANDIA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HRCCEILANDIA,
              categoryField: "date"
          },
        {
              title: "HOSPITAL DE APOIO DE BRASILIA HAB",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALDEAPOIODEBRASILIAHAB,
              categoryField: "date"
          },
        {
              title: "HOSPITAL SAO FRANCISCO",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALSAOFRANCISCO,
              categoryField: "date"
          },
        {
              title: "HOSPITAL SAO MATEUS",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HOSPITALSAOMATEUS,
              categoryField: "date"
          },
        {
              title: "HMA",
              fieldMappings: [{
                  fromField: "valor_total",
                  toField: "valor_total"
              }
          ],
              dataProvider: HMA,
              categoryField: "date"
          }

],

  panels: [
 {

      title: "",

      stockGraphs: [{
          id: "valor_total",
          valueField: "valor_total",
          lineThickness: 3,
          title: "",
    labelPosition : "left",
          balloonText: "[[title]]:<b>[[value]]</b>",
          compareGraphBalloonText: "[[title]]:<b>[[value]]</b>",
    minPeriod: "YYYY",
          comparable: true,
      }],

      stockLegend: {
          useGraphSettings: true
      },
      "guides":
      {
        "fillAlpha": 0.0,
        "value": 0,
        "toValue": 0
      },

        stockLegend: {
      showEntries: true,
        },

      "numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
    },
    "categoryAxis": {
     "gridThickness": 0,
    }



}

],

  chartScrollbarSettings: {
      graph: ["valor_total"]
  },

  chartCursorSettings: {
      valueBalloonsEnabled: true,
      fullWidth: true,
  cursorPosition: 'start',
  categoryBalloonEnabled : true,
      cursorAlpha: 0.1,
      valueLineBalloonEnabled: false,
      valueLineEnabled: false,
      valueLineAlpha: 0.5,
  cursorColor: "#75899c"
  },

"chartScrollbarSettings": {
"position": "top",
  "graph": "Total",
  "graphType": "line",
  "usePeriod": "YYYY"
},

  dataSetSelector: {
      position: "right",
  selectText : "Selecione a Entidade:",
  compareText : "Selecione outra Entidade para comparar:"
  }


});

var elems = document.getElementsByClassName("col-sm-3");

for (var k = elems.length - 1; k >= 0; k--) {
    var parent = elems[k].parentNode;
    parent.removeChild(elems[k]);
}

var y = document.getElementsByClassName("col-sm-9")[0];
y.style.width="100%";


showChart('chartdivProcedimentos Hospitalares do SUS', "400px");


};
