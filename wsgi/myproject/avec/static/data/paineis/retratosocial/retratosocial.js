function iniciar2(){

		mapa();
		
		
		/*$("#summary-box").hide();*/
	/*	$(".nav-stacked").hide();*/
	
	var iDiv = document.createElement('div');

	iDiv.id = 'left-chartdivIdentificação';
	iDiv.className = 'charmultitdiv col-sm-4';
	iDiv.style.display= 'block';
	document.getElementById("chartdivIdentificação").appendChild(iDiv);
	
	var dateSpan = document.createElement('span')
	dateSpan.id = "test";
	dateSpan.innerHTML = '<span class="number-display"></span> de habitantes.';
	document.getElementById("left-chartdivIdentificação").appendChild(dateSpan);
	
	var div2 = document.createElement('div');
	div2.id = 'right-chartdivIdentificação';
	div2.className = 'charmultitdiv col-sm-8';
	div2.style.display= 'block';
	document.getElementById("chartdivIdentificação").appendChild(div2);
	
var data = [
{
	"Letter": "A",
	"Freq": 2000000	
}
];	
var inlineND = dc.numberDisplay("#test");
	var ndx            = crossfilter(data),
	  cityDim  = ndx.dimension(function(d) {return +d.Freq;})
	  	var total = cityDim.groupAll().reduce(
				//add
				function(p, v) {
					++p.count;
					p.Freq += +v.Freq;
					return p;
				},
				//remove
				function(p, v) {
					--p.count;
					p.Freq -= +v.Freq;
					return p;
				},
				//init
				function() {
					return {Freq:0};
				}
		);
				
	var nFreq = function(d){
		return (d.Freq) ;
	};

	
	inlineND
      .valueAccessor(nFreq)
      .group(total);	 


	  dc.renderAll();	  
	


window.cidade;
$('#autocomplete2').autocomplete({
    lookup: currencies,
    onSelect: function (ui) {
		get(ui.type);		
		city(ui.value);
		cidade = ui.value;			
		//total_resumo_por_codigo();
    }
});	

	
};	

function city(par) {
   $('#cidade').text(par)
   
};

function mapa() {
	
	var iDiv = document.createElement('div');

	var h = (screen.availHeight-250)+'px';
	
	iDiv.id = 'map';
	iDiv.className = 'custom-popup';
	document.getElementById("chartdivRecursos para a gestão").appendChild(iDiv);
	document.getElementById("map").style.height= h;
  	
var map = L.map('map', {
		zoom: 14,
		attributionControl: false,
		center: L.latLng([-19.9245018,-43.935237599999994]),
		
	}),
	osmLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

/*map.addLayer(osmLayer);*/
var googleLayer = new L.Google('ROADMAP');
map.addLayer(googleLayer);

function iconByName(name) {
	return '<i class="icon icon-'+name+'"></i>';
}

function featureToMarker(feature, latlng) {
	return L.marker(latlng, {
		icon: L.divIcon({
			className: 'marker-'+feature.properties.amenity,
			html: iconByName(feature.properties.amenity),
			iconUrl: '../images/markers/'+feature.properties.amenity+'.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		})
 	}).bindPopup('<div class="d3plus_tooltip_container" style="background-color: rgb(255, 255, 255); padding: 6px; width: 236px;">    <div class="d3plus_tooltip_header" style="position: relative; z-index: 1;">         <div class="d3plus_tooltip_icon" style="width: 50px; height: 50px; z-index: 1; background-position: 50% center; background-size: 100%; background-image: url(&quot;/static/img/icons/hs/hs_02.png&quot;); display: inline-block; margin: 0px 3px 3px 0px; background-color: rgb(255, 196, 28);"></div>         <div class="d3plus_tooltip_title" style="max-width: 163px; color: rgb(68, 68, 68); vertical-align: top; width: 170px; display: inline-block; overflow: hidden; text-overflow: ellipsis; word-wrap: break-word; z-index: 1; font-size: 18px; line-height: 20px; padding: 3px 6px;">'+feature.properties.name+'</div>     </div>     <div class="d3plus_tooltip_data_container" style="overflow-y: auto; z-index: -1; max-height: 304px;">         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; width: 105px; min-height: 15px;">ID HS</div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">1201</div>         </div>         <div class="d3plus_tooltip_data_title" style="font-size: 12px; font-weight: bold; padding: 6px 3px 0px;">Valores Básicos</div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; cursor: pointer; width: 105px; min-height: 15px;">Exportações                 <div class="d3plus_tooltip_data_help" style="background-color: rgb(204, 204, 204); border-radius: 5px; color: rgb(255, 255, 255); cursor: pointer; display: inline-block; font-size: 8px; font-weight: bold; height: 10px; margin: 3px 0px 0px 3px; padding-right: 1px; text-align: center; width: 10px; vertical-align: top;">?</div>             </div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">$1,15 Bilhão USD</div>             <div class="d3plus_tooltip_data_desc" style="color: rgb(136, 136, 136); overflow: hidden; transition: height 0.5s; width: 85%; height: 0px;">Baseado nos Estados Produtores</div>         </div>         <div class="d3plus_tooltip_data_seperator" style="background-color: rgb(221, 221, 221); display: block; height: 1px; margin: 0px 3px;"></div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; width: 105px; min-height: 15px;">Peso das Exportações</div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">2,15 Bilhões kg</div>         </div>         <div class="d3plus_tooltip_data_seperator" style="background-color: rgb(221, 221, 221); display: block; height: 1px; margin: 0px 3px;"></div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; width: 105px; min-height: 15px;">Exportações por peso</div>                                                    <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">$0,536 USD</div>         </div>         <div class="d3plus_tooltip_data_seperator" style="background-color: rgb(221, 221, 221); display: block; height: 1px; margin: 0px 3px;"></div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; width: 105px; min-height: 15px;">Importações por peso</div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">$0 USD</div>         </div>         <div class="d3plus_tooltip_data_title" style="font-size: 12px; font-weight: bold; padding: 6px 3px 0px;">Indicadores Estratégicos</div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; cursor: pointer; width: 105px; min-height: 15px;"><a href="../client/ocdf#menu2" style="color:gray"> Mais informações  </a>                 </div>');
}

var baseLayers = [
	{
		name: "Google",
		layer: googleLayer
	},
	{	
		name: "OpenCycleMap",
		layer: L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png')
	},
	{
		name: "OpenStreetMap",
		layer: osmLayer
	}
];

var overLayers = [
	{
		active: true,
		name: "Agropecuária",
		icon: iconByName('bar'),
		layer: L.geoJson(Bar, {pointToLayer: featureToMarker })
	},
	{
		active: true,
		name: "Consumo",
		icon: iconByName('drinking_water'),
		layer: L.geoJson(Drinking_water, {pointToLayer: featureToMarker })
	},
	{
		active: true,
		name: "Crédito",
		icon: iconByName('fuel'),
		layer: L.geoJson(Fuel, {pointToLayer: featureToMarker })
	},	
	{
		active: true,
		name: "E",
		icon: iconByName('parking'),
		layer: L.geoJson(Parking, {pointToLayer: featureToMarker })
	}	
];


var panelLayers = new L.Control.PanelLayers(baseLayers, overLayers);

map.addControl(panelLayers);

}

function get(par) {
$.getScript( par, function(  textStatus ) {

document.getElementById("left-chartdivIdentificação").style.display = "block";
document.getElementById("right-chartdivIdentificação").style.display = "block";

jQuery.getJSON("https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-31-mun.json", function(data) {

  // convert GeoJSON to JavaScript Maps comptible object
  var mapVar = AmCharts.parseGeoJSON(data);

  var teste = "3106200";
  var title = "Belo Horizonte"
  // create the map
  var map = AmCharts.makeChart("right-chartdivIdentificação", {
    "type": "map",
    "theme": "light",
    "dataProvider": {
      "mapVar": mapVar,
      "getAreasFromMap": true,
      "areas": [ {
        "title": title,
		"name" : title,
        "id": teste,
        "color": "red",
        "customData": "1995",        
      }
    ]
    },
    "areasSettings": {
      "autoZoom": true,
      "selectedColor": "#CC0000"
    }
  });
  
});

/**
 * Convert GeoJSON to SVG
 */
AmCharts.parseGeoJSON = function(geojson, fieldMap) {

  // init field map
  if (typeof(fieldMap) !== "object")
    fieldMap = {};


  // init calibration
  var bounds = {
    "left": -180,
    "bottom": -90,
    "right": 180,
    "top": 90
  };
  
  // init empty map
  var mapVar = {
    "svg": {
      "defs": {
        "amcharts:ammap": {
          "projection":"mercator",
          "leftLongitude":"-180",
          "topLatitude":"90",
          "rightLongitude":"180",
          "bottomLatitude":"-90"
        }   
      },
      "g":{
        "path":[]
      }
    }
  };
  
  // convert GeoJSON to SVG paths
  var converter = geojson2svg({
    
    "output": "svg",
    "explode": false,
    "attributes": {"class": "land"},
    "mapExtent": bounds,
    "viewportSize": {
      "width": 800,
      "height": 800
    }
  });
  var svg = converter.convert(geojson, {});
  
  // parse each path into JavaScript Maps data structure
 /* for(var i = 0; i < svg.length; i++) {
    var path = svg[i];
    var attrs = path.match(/\w+=".*?"/g);
    var area = {};
    for(var x = 0; x < attrs.length; x++) {
      var parts = attrs[x].replace(/"/g, '').split("=");
      var key = fieldMap[parts[0]] || parts[0];
      area[key] = parts[1];
    }
    mapVar.svg.g.path.push(area);
  }*/
  
 for(var i = 0; i < svg.length; i++) {
    var path = svg[i];
    var attrs = path.match(/\w+=".*?"/g);
    var area = {};
    for(var x = 0; x < attrs.length; x++) {
      var parts = attrs[x].replace(/"/g, '').split("=");
      var key = fieldMap[parts[0]] || parts[0];
      area[key] = parts[1];
    }
    //added for hover-over balloons
    area["title"] = area["name"];
    mapVar.svg.g.path.push(area);
  }  
  return mapVar;
}

//console.log(AmCharts.maps.loaded.svg.g.path);


AmCharts.makeChart("chartdivRecursos humanos", {
    type: "stock",
	"colors": [
		"#3dc1d0",
		"#91d5df",
		"#dde6ee"
	],
	
    theme: "light",
	dataDateFormat : "YYYY",
	extendToFullPeriod : false,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	
    dataSets: [
	{
        title: cidade,
        fieldMappings: [{
            fromField: "FAmilias_cadastradas_atencao_basica",
            toField: "FAmilias_cadastradas_atencao_basica"
        }, {
            fromField: "pessoas_cadastradas_atencao_basica",
            toField: "pessoas_cadastradas_atencao_basica"
        }
		],
        dataProvider: atencaobasicafamiliascadastradas,
        categoryField: "ano"
    }
   
	],

    panels: [
	 
	{

        title: "Famílias cadastradas atenção básica",

        stockGraphs: [{
            id: "FAmilias_cadastradas_atencao_basica",
            valueField: "FAmilias_cadastradas_atencao_basica",
            lineThickness: 3,
            title: "",			
            balloonText: "[[title]]:<b>[[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>[[value]]</b>",
			minPeriod: "YYYY",
            comparable: true
        }],

        stockLegend: {
            useGraphSettings: true
        }
	},
	{

        title: "Pessoas cadastradas atenção básica",

        stockGraphs: [{
            id: "pessoas_cadastradas_atencao_basica",
            valueField: "pessoas_cadastradas_atencao_basica",
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
        }
		
	}
	
	],
 
    chartScrollbarSettings: {
        graph: ["FAmilias_cadastradas_atencao_basica"]
    },
	

    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,		
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: true,
        valueLineEnabled: true,
        valueLineAlpha: 0.5,
		"cursorColor": "#61788e"
    },

"export": {
  "enabled": true
}
	
});

AmCharts.makeChart("chartdivPlanejamento urbano", 
{
					"type": "serial",
					"categoryField": "category",
					"startDuration": 1,
					"fontFamily": "Lato",
					"decimalSeparator": ",",
					"thousandsSeparator": ".",
					"export": {
						"enabled": true
					},
					"categoryAxis": {
						"gridPosition": "start"
					},
					"chartCursor": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]] em [[category]]:R$ [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"lineColor": "#61788E",
							"title": "Empenhado",
							"type": "column",
							"valueField": "Empenhado"
						},
						{
							"balloonText": "[[title]] em [[category]]:R$ [[value]]",
							"fillAlphas": 1,
							"fillColors": "#2E9BA6",
							"id": "AmGraph-2",
							"lineColor": "#2E9BA6",
							"title": "Liquidado",
							"type": "column",
							"valueField": "Liquidado"
						},
						{
							"balloonText": "[[title]] em [[category]]:R$ [[value]]",
							"fillAlphas": 0.79,
							"fillColors": "#91D5DF",
							"id": "AmGraph-3",
							"lineColor": "#91D5DF",
							"title": "Pago",
							"type": "column",
							"valueField": "Pago"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Valores (R$ 1,00)"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Gastos anuais de TI "
						}
					],
					"dataProvider": [
						{
							"category": "2011",
							"Empenhado": "5368196574",
							"Liquidado": "5368196574",
							"Pago": "3577508126"
						},
						{
							"category": "2012",
							"Empenhado": "6122336534 ",
							"Liquidado": "6122336534 ",
							"Pago": "3732937721 "
						},
						{
							"category": "2013",
							"Empenhado": "6880588528 ",
							"Liquidado": "4208229451 ",
							"Pago": "4068542874 "
						},
						{
							"category": "2014",
							"Empenhado": "7009318569 ",
							"Liquidado": "4605605129 ",
							"Pago": "4448538783 "
						},
						{
							"category": "2015",
							"Empenhado": "6308691180 ",
							"Liquidado": "4530662844 ",
							"Pago": "4074739536 "
						},
						{
							"category": "2016",
							"Empenhado": "7441463724 ",
							"Liquidado": "3105668284 ",
							"Pago": "2913436837 "
						}
					]
				}
			);


showChart('chartdivIdentificação');

total_resumo_por_codigo();
gestaoambiental();

});
};





function total_resumo_por_codigo(){
/*inicio - criar as subdivisões*/

/*	var cfluid = document.createElement('div');
	cfluid.id = 'mycontainer_fluid';
	cfluid.className = 'container_fluid';
	cfluid.style.display= 'block';
	document.getElementById("chartdivResumo por código").appendChild(cfluid);*/
	
	var iDiv1 = document.createElement('div');
	var iDiv2 = document.createElement('div');
	var iDiv3 = document.createElement('div');

	iDiv1.id = 'line1_resumo_por_codigo';
	iDiv1.className = 'row';
	iDiv1.style.display= 'block';
	document.getElementById("chartdivTerceirização e informatização").appendChild(iDiv1);
	
	iDiv2.id = 'line2_resumo_por_codigo';
	iDiv2.className = 'row';
	iDiv2.style.display= 'block';
	document.getElementById("chartdivTerceirização e informatização").appendChild(iDiv2);	
/*
	iDiv3.id = 'line3_resumo_por_codigo';
	iDiv3.className = 'row';
	iDiv3.style.display= 'block';
	document.getElementById("chartdivResumo por código").appendChild(iDiv3);
	*/
	
	var principalDiv = document.createElement('div')
	principalDiv.id = "principal_resumo_por_codigo";
	principalDiv.className = 'charmultitdiv2 col-sm-4';
	principalDiv.style.display= 'block';
	document.getElementById("line1_resumo_por_codigo").appendChild(principalDiv);
	
	var correcaoDiv = document.createElement('div')
	correcaoDiv.id = "correcao_resumo_por_codigo";
	correcaoDiv.className = 'charmultitdiv2 col-sm-4';
	correcaoDiv.style.display= 'block';
	document.getElementById("line1_resumo_por_codigo").appendChild(correcaoDiv);
	
	var encargosDiv = document.createElement('div')
	encargosDiv.id = "encargos_resumo_por_codigo";
	encargosDiv.className = 'charmultitdiv2 col-sm-4';
	encargosDiv.style.display= 'block';
	document.getElementById("line1_resumo_por_codigo").appendChild(encargosDiv);

	var moraDiv = document.createElement('div')
	moraDiv.id = "mora_resumo_por_codigo";
	moraDiv.className = 'charmultitdiv2 col-sm-6';
	moraDiv.style.display= 'block';
	document.getElementById("line2_resumo_por_codigo").appendChild(moraDiv);
	
	var multaDiv = document.createElement('div')
	multaDiv.id = "multa_resumo_por_codigo";
	multaDiv.className = 'charmultitdiv2 col-sm-6';
	multaDiv.style.display= 'block';
	document.getElementById("line2_resumo_por_codigo").appendChild(multaDiv);
/*fim - criar as subdivisões*/

/*inicio principal*/
AmCharts.makeChart("principal_resumo_por_codigo",
				{
					"type": "pie",
					"adjustPrecision": true,
					"balloonText": "<b>[[percents]]%</b>",
					"gradientType": "linear",
					"innerRadius": "88%",
					"labelRadius": 0,
					"minRadius": 14,
					"startAngle": 147.6,
					"alphaField": "column-3",
					"baseColor": "#3DC1D0",
					"colorField": "column-2",
					"colors": [],
					"gradientRatio": [],
					"groupedColor": "#DE1818",
					"groupPercent": 55,/**/
					"hoverAlpha": 0,
					"labelsEnabled": false,
					"outlineThickness": 0,
					"pullOutDuration": 0,
					"titleField": "category",
					"valueField": "column-1",
					/*"autoResize": false,*/
					"backgroundAlpha": 1,
					"backgroundColor": "#F7FAFD",
					"fontFamily": "lato",
					"allLabels": [
						{
							"align": "center",
							"bold": true,
							"color": "#61788E",
							"id": "Label-1",
							"size": 18,
							"text": "R$ 200.016.506",
							"x": 0,
							"y": "45%"
						},
						{
							"align": "center",
							"alpha": 0.43,
							"bold": true,
							"color": "AAB3B3",
							"id": "Label-2",
							"size": 16,
							"tabIndex": 0,
							"text": "PRINCIPAL",
							"y": "55%"
						}
					],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"category": "category 1",
							"column-1": "200016506.40",
							"column-2": "#3dc1d0",
							"column-3": "1"
						},
						{
							"category": "category 2",
							"column-1": "244991122.12",
							"column-2": "#aab3b3",
							"column-3": "0.43"
						}
					]
				}
			);
/*fim principal*/
/*inicio correcao*/
AmCharts.makeChart("correcao_resumo_por_codigo",
				{
					"type": "pie",
					"adjustPrecision": true,
					"balloonText": "<b>[[percents]]%</b>",
					"gradientType": "linear",
					"innerRadius": "88%",
					"labelRadius": 0,
					"minRadius": 14,
					"startAngle": 147.6,
					"alphaField": "column-3",
					"baseColor": "#3DC1D0",
					"colorField": "column-2",
					"colors": [],
					"gradientRatio": [],
					"groupedColor": "#DE1818",
					"groupPercent": 55,
					"hoverAlpha": 0,
					"labelsEnabled": false,
					"outlineThickness": 0,
					"pullOutDuration": 0,
					"showZeroSlices": true,
					"titleField": "category",
					"valueField": "column-1",
					"backgroundAlpha": 1,
					"backgroundColor": "#F7FAFD",
					"fontFamily": "lato",
					"allLabels": [
						{
							"align": "center",
							"bold": true,
							"color": "#61788E",
							"id": "Label-1",
							"size": 18,
							"text": "R$ 171.656",
							"x": 0,
							"y": "45%"
						},
						{
							"align": "center",
							"alpha": 0.43,
							"bold": true,
							"color": "AAB3B3",
							"id": "Label-2",
							"size": 16,
							"tabIndex": 0,
							"text": "CORREÇÃO",
							"y": "55%"
						}
					],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"category": "category 1",
							"column-1": "171656.0598",
							"column-2": "#3dc1d0",
							"column-3": "1"
						},
						{
							"category": "category 2",
							"column-1": "3102312.058",
							"column-2": "#aab3b3",
							"column-3": "0.43"
						}
					]
				}
			);


/*fim correcao*/

/*inicio encargos*/
	AmCharts.makeChart("encargos_resumo_por_codigo",
				{
					"type": "pie",
					"adjustPrecision": true,
					"balloonText": "<b>[[percents]]%</b>",
					"gradientType": "linear",
					"innerRadius": "88%",
					"labelRadius": 0,
					"minRadius": 14,
					"startAngle": 147.6,
					"alphaField": "column-3",
					"baseColor": "#3DC1D0",
					"colorField": "column-2",
					"colors": [],
					"gradientRatio": [],
					"groupedColor": "#DE1818",
					"groupPercent": 55,
					"hoverAlpha": 0,
					"labelsEnabled": false,
					"outlineThickness": 0,
					"pullOutDuration": 0,
					"titleField": "category",
					"valueField": "column-1",
					"backgroundAlpha": 1,
					"backgroundColor": "#F7FAFD",
					"fontFamily": "lato",
					"allLabels": [
						{
							"align": "center",
							"bold": true,
							"color": "#61788E",
							"id": "Label-1",
							"size": 18,
							"text": "R$ 27.185.903",
							"x": 0,
							"y": "45%"
						},
						{
							"align": "center",
							"alpha": 0.43,
							"bold": true,
							"color": "AAB3B3",
							"id": "Label-2",
							"size": 16,
							"tabIndex": 0,
							"text": "ENCARGOS",
							"y": "55%"
						}
					],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"category": "category 1",
							"column-1": "27185903.58",
							"column-2": "#3dc1d0",
							"column-3": "1"
						},
						{
							"category": "category 2",
							"column-1": "417821724.9",
							"column-2": "#aab3b3",
							"column-3": "0.43"
						}
					]
				}
			);

/*fim encargos*/
/*inicio mora*/

	AmCharts.makeChart("mora_resumo_por_codigo",
				{
					"type": "pie",
					"adjustPrecision": true,
					"balloonText": "<b>[[percents]]%</b>",
					"gradientType": "linear",
					"innerRadius": "88%",
					"labelRadius": 0,
					"minRadius": 14,
					"startAngle": 147.6,
					"alphaField": "column-3",
					"baseColor": "#3DC1D0",
					"colorField": "column-2",
					"colors": [],
					"gradientRatio": [],
					"groupedColor": "#DE1818",
					"groupPercent": 55,
					"hoverAlpha": 0,
					"labelsEnabled": false,
					"outlineThickness": 0,
					"pullOutDuration": 0,
					"titleField": "category",
					"valueField": "column-1",
					"backgroundAlpha": 1,
					"backgroundColor": "#F7FAFD",
					"fontFamily": "lato",
					"allLabels": [
						{
							"align": "center",
							"bold": true,
							"color": "#61788E",
							"id": "Label-1",
							"size": 18,
							"text": "R$ 121.466.541",
							"x": 0,
							"y": "45%"
						},
						{
							"align": "center",
							"alpha": 0.43,
							"bold": true,
							"color": "AAB3B3",
							"id": "Label-2",
							"size": 16,
							"tabIndex": 0,
							"text": "MORA",
							"y": "55%"
						}
					],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"category": "category 1",
							"column-1": "121466541.64",
							"column-2": "#3dc1d0",
							"column-3": "1"
						},
						{
							"category": "category 2",
							"column-1": "323541086.9",
							"column-2": "#aab3b3",
							"column-3": "0.43"
						}
					]
				}
			);

/*fim mora*/

/*inicio multa*/

AmCharts.makeChart("multa_resumo_por_codigo",
				{
					"type": "pie",
					"adjustPrecision": true,
					"balloonText": "",
					"gradientType": "linear",
					"innerRadius": "88%",
					"labelRadius": 0,
					"minRadius": 14,
					"startAngle": 147.6,
					"alphaField": "column-3",
					"baseColor": "#3DC1D0",
					"colorField": "column-2",
					"colors": [],
					"gradientRatio": [],
					"groupedColor": "#DE1818",
					"groupPercent": 55,
					"hoverAlpha": 0,
					"labelsEnabled": false,
					"outlineThickness": 0,
					"pullOutDuration": 0,
					"titleField": "category",
					"valueField": "column-1",
					"backgroundAlpha": 1,
					"backgroundColor": "#F7FAFD",
					"fontFamily": "lato",
					"allLabels": [
						{
							"align": "center",
							"bold": true,
							"color": "#61788E",
							"id": "Label-1",
							"size": 18,
							"text": "R$ 7.142.273",
							"x": 0,
							"y": "45%"
						},
						{
							"align": "center",
							"alpha": 0.43,
							"bold": true,
							"color": "AAB3B3",
							"id": "Label-2",
							"size": 16,
							"tabIndex": 0,
							"text": "MULTA",
							"y": "55%"
						}
					],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"category": "category 1",
							"column-1": "7142273.20",
							"column-2": "#3dc1d0",
							"column-3": "1"
						},
						{
							"category": "category 2",
							"column-1": "437865355.3",
							"column-2": "#aab3b3",
							"column-3": "0.43"
						}
					]
				}
			);
			
/*fim multa*/	

};



function gestaoambiental() {
	
	var Total = [
  {
    "Ano": "1984-01-30",
    "Total": 160.12,
    "Principal": 30.49,
    "Correção": 99.24,
    "Multa": 1.3,
    "Mora": 77.84,
    "Encargos": 14.56,
    "Descontos": -63.31
  },
  {
    "Ano": "1985-01-30",
    "Total": 50130.53,
    "Principal": 11170.82,
    "Correção": 29447.01,
    "Multa": 406.18,
    "Mora": 24370.7,
    "Encargos": 4557.32,
    "Descontos": -19821.5
  },
  {
    "Ano": "1986-01-30",
    "Total": 67727.43,
    "Principal": 15089.3,
    "Correção": 39786.27,
    "Multa": 548.76,
    "Mora": 32925.34,
    "Encargos": 6157.04,
    "Descontos": -26779.28
  },
  {
    "Ano": "1987-01-30",
    "Total": 39586.93,
    "Principal": 8823.02,
    "Correção": 23251.95,
    "Multa": 320.75,
    "Mora": 19244.98,
    "Encargos": 3598.81,
    "Descontos": -15652.58
  },
  {
    "Ano": "1988-01-30",
    "Total": 77439.79,
    "Principal": 17259.56,
    "Correção": 45485.37,
    "Multa": 627.45,
    "Mora": 37646.96,
    "Encargos": 7039.98,
    "Descontos": -30619.53
  },
  {
    "Ano": "1989-01-30",
    "Total": 224775.35,
    "Principal": 50097.29,
    "Correção": 132025.02,
    "Multa": 1821.22,
    "Mora": 109273.39,
    "Encargos": 20434.12,
    "Descontos": -88875.69
  },
  {
    "Ano": "1990-01-30",
    "Total": 116262.15,
    "Principal": 25847.17,
    "Correção": 68185.63,
    "Multa": 1880.66,
    "Mora": 56419.68,
    "Encargos": 10569.28,
    "Descontos": -46640.27
  },
  {
    "Ano": "1991-01-30",
    "Total": 113.02,
    "Principal": 24.33,
    "Correção": 67.08,
    "Multa": 1.83,
    "Mora": 54.84,
    "Encargos": 10.28,
    "Descontos": -45.34
  },
  {
    "Ano": "1993-01-30",
    "Total": 57374.64,
    "Principal": 225.66,
    "Correção": 46178.94,
    "Multa": 928.09,
    "Mora": 27842.76,
    "Encargos": 5215.88,
    "Descontos": -23016.69
  },
  {
    "Ano": "1994-01-30",
    "Total": 45866.87,
    "Principal": 2431.04,
    "Correção": 34661.4,
    "Multa": 741.85,
    "Mora": 22255.47,
    "Encargos": 4167.21,
    "Descontos": -18390.1
  },
  {
    "Ano": "1995-01-30",
    "Total": 25068.5,
    "Principal": 5943.44,
    "Correção": 13428.98,
    "Multa": 5426.18,
    "Mora": 11623.44,
    "Encargos": 2275.5,
    "Descontos": -13629.04
  },
  {
    "Ano": "1996-01-30",
    "Total": 83376.93,
    "Principal": 24381.78,
    "Correção": 42550.56,
    "Multa": 3257.06,
    "Mora": 40159.25,
    "Encargos": 7744.66,
    "Descontos": -34716.38
  },
  {
    "Ano": "1997-01-30",
    "Total": 3777801.81,
    "Principal": 1132040.52,
    "Correção": 1862187.54,
    "Multa": 128584.3,
    "Mora": 1795484.57,
    "Encargos": 351150.87,
    "Descontos": -1491645.99
  },
  {
    "Ano": "1998-01-30",
    "Total": 4041408.99,
    "Principal": 1322114.11,
    "Correção": 1890143.9,
    "Multa": 142774.11,
    "Mora": 1926121.32,
    "Encargos": 373742.24,
    "Descontos": -1613486.69
  },
  {
    "Ano": "1999-01-30",
    "Total": 9481077.4,
    "Principal": 3173122.5,
    "Correção": 4361336.02,
    "Multa": 660612.09,
    "Mora": 4521751.36,
    "Encargos": 871742.52,
    "Descontos": -4107487.09
  },
  {
    "Ano": "2000-01-30",
    "Total": 5917991.32,
    "Principal": 2150947.55,
    "Correção": 2560913.46,
    "Multa": 353094.48,
    "Mora": 2828458.93,
    "Encargos": 538166.77,
    "Descontos": -2513589.87
  },
  {
    "Ano": "2001-01-30",
    "Total": 15651479.62,
    "Principal": 6105166.32,
    "Correção": 6498685.85,
    "Multa": 390829.2,
    "Mora": 7616119.48,
    "Encargos": 1436209.16,
    "Descontos": -6395530.39
  },
  {
    "Ano": "2002-01-30",
    "Total": 31481217.7,
    "Principal": 12647963.18,
    "Correção": 12368700.24,
    "Multa": 837316.34,
    "Mora": 17118135.11,
    "Encargos": 2872502.94,
    "Descontos": -14363400.11
  },
  {
    "Ano": "2003-01-30",
    "Total": 32767025.81,
    "Principal": 14899032.37,
    "Correção": 11459897.3,
    "Multa": 654541.22,
    "Mora": 16473849.98,
    "Encargos": 2982085.99,
    "Descontos": -13702381.05
  },
  {
    "Ano": "2004-01-30",
    "Total": 27713555.27,
    "Principal": 14005662.91,
    "Correção": 8540607.37,
    "Multa": 472501.99,
    "Mora": 12762235.74,
    "Encargos": 2519536.41,
    "Descontos": -10586989.15
  },
  {
    "Ano": "2005-01-30",
    "Total": 29336913.16,
    "Principal": 16001605.57,
    "Correção": 7985522.34,
    "Multa": 497464.82,
    "Mora": 12180841.82,
    "Encargos": 2592358.15,
    "Descontos": -9920879.54
  },
  {
    "Ano": "2006-01-30",
    "Total": 29348561.74,
    "Principal": 17160462.21,
    "Correção": 7134089.69,
    "Multa": 475414.9,
    "Mora": 10855892.88,
    "Encargos": 2585423.22,
    "Descontos": -8862721.16
  },
  {
    "Ano": "2007-01-30",
    "Total": 28101247.77,
    "Principal": 17172157.28,
    "Correção": 6446307.17,
    "Multa": 470846.32,
    "Mora": 9141104.8,
    "Encargos": 2548266.15,
    "Descontos": -7677433.95
  },
  {
    "Ano": "2008-01-30",
    "Total": 27717371.53,
    "Principal": 17820691.32,
    "Correção": 5665680.69,
    "Multa": 469598.95,
    "Mora": 7710557.75,
    "Encargos": 2424024.46,
    "Descontos": -6373181.64
  },
  {
    "Ano": "2009-01-30",
    "Total": 31604198.27,
    "Principal": 21691259.89,
    "Correção": 5255629.3,
    "Multa": 476570.58,
    "Mora": 7103795.62,
    "Encargos": 2425820.33,
    "Descontos": -5348877.45
  },
  {
    "Ano": "2010-01-30",
    "Total": 30851812.99,
    "Principal": 22466031.14,
    "Correção": 4321903.5,
    "Multa": 479710.22,
    "Mora": 5540520.18,
    "Encargos": 2568507.44,
    "Descontos": -4524859.49
  },
  {
    "Ano": "2011-01-30",
    "Total": 9956654.19,
    "Principal": 7734543.84,
    "Correção": 971781.23,
    "Multa": 106734.95,
    "Mora": 1272062.04,
    "Encargos": 5053.46,
    "Descontos": -133521.33
  },
  {
    "Ano": "2012-01-30",
    "Total": 26660978.16,
    "Principal": 24240607.04,
    "Correção": 1397850.65,
    "Multa": 507440.86,
    "Mora": 2233615.19,
    "Encargos": 12871.31,
    "Descontos": -1731406.89
  },
  {
    "Ano": "2013-01-30",
    "Total": 144809.03,
    "Principal": 131774.75,
    "Correção": 0,
    "Multa": 2276.54,
    "Mora": 4100.22,
    "Encargos": 6657.52,
    "Descontos": 0
  },
  {
    "Ano": "2014-01-30",
    "Total": 144809.03,
    "Principal": 131774.75,
    "Correção": 0,
    "Multa": 2276.54,
    "Mora": 4100.22,
    "Encargos": 6657.52,
    "Descontos": 0
  }
];

var iptu = [
  {
    "Ano": "1984-01-30",
    "Total": 19.66,
    "Principal": 3.74,
    "Correção": 12.19,
    "Multa": 0.16,
    "Mora": 9.56,
    "Encargos": 1.79,
    "Descontos": -7.77
  },
  {
    "Ano": "1985-01-30",
    "Total": 6156.03,
    "Principal": 1371.78,
    "Correção": 3616.09,
    "Multa": 49.88,
    "Mora": 2992.72,
    "Encargos": 559.64,
    "Descontos": -2434.08
  },
  {
    "Ano": "1986-01-30",
    "Total": 8316.93,
    "Principal": 1852.97,
    "Correção": 4885.75,
    "Multa": 67.39,
    "Mora": 4043.23,
    "Encargos": 756.08,
    "Descontos": -3288.5
  },
  {
    "Ano": "1987-01-30",
    "Total": 4861.28,
    "Principal": 1083.47,
    "Correção": 2855.34,
    "Multa": 39.39,
    "Mora": 2363.28,
    "Encargos": 441.93,
    "Descontos": -1922.14
  },
  {
    "Ano": "1988-01-30",
    "Total": 9509.61,
    "Principal": 2119.47,
    "Correção": 5585.6,
    "Multa": 77.05,
    "Mora": 4623.05,
    "Encargos": 864.51,
    "Descontos": -3760.08
  },
  {
    "Ano": "1989-01-30",
    "Total": 27602.41,
    "Principal": 6151.95,
    "Correção": 16212.67,
    "Multa": 223.65,
    "Mora": 13418.77,
    "Encargos": 2509.31,
    "Descontos": -10913.93
  },
  {
    "Ano": "1990-01-30",
    "Total": 14276.99,
    "Principal": 3174.03,
    "Correção": 8373.2,
    "Multa": 230.95,
    "Mora": 6928.34,
    "Encargos": 1297.91,
    "Descontos": -5727.43
  },
  {
    "Ano": "1991-01-30",
    "Total": 13.88,
    "Principal": 2.99,
    "Correção": 8.24,
    "Multa": 0.22,
    "Mora": 6.73,
    "Encargos": 1.26,
    "Descontos": -5.57
  },
  {
    "Ano": "1993-01-30",
    "Total": 7045.61,
    "Principal": 27.71,
    "Correção": 5670.77,
    "Multa": 113.97,
    "Mora": 3419.09,
    "Encargos": 640.51,
    "Descontos": -2826.45
  },
  {
    "Ano": "1994-01-30",
    "Total": 5632.45,
    "Principal": 298.53,
    "Correção": 4256.42,
    "Multa": 91.1,
    "Mora": 2732.97,
    "Encargos": 511.73,
    "Descontos": -2258.3
  },
  {
    "Ano": "1995-01-30",
    "Total": 3078.41,
    "Principal": 729.85,
    "Correção": 1649.08,
    "Multa": 666.33,
    "Mora": 1427.36,
    "Encargos": 279.43,
    "Descontos": -1673.65
  },
  {
    "Ano": "1996-01-30",
    "Total": 10238.69,
    "Principal": 2994.08,
    "Correção": 5225.21,
    "Multa": 399.97,
    "Mora": 4931.56,
    "Encargos": 951.04,
    "Descontos": -4263.17
  },
  {
    "Ano": "1997-01-30",
    "Total": 463914.06,
    "Principal": 139014.58,
    "Correção": 228676.63,
    "Multa": 15790.15,
    "Mora": 220485.51,
    "Encargos": 43121.33,
    "Descontos": -183174.13
  },
  {
    "Ano": "1998-01-30",
    "Total": 496285.02,
    "Principal": 162355.61,
    "Correção": 232109.67,
    "Multa": 17532.66,
    "Mora": 236527.7,
    "Encargos": 45895.55,
    "Descontos": -198136.17
  },
  {
    "Ano": "1999-01-30",
    "Total": 1164276.3,
    "Principal": 389659.44,
    "Correção": 535572.06,
    "Multa": 81123.16,
    "Mora": 555271.07,
    "Encargos": 107049.98,
    "Descontos": -504399.41
  },
  {
    "Ano": "2000-01-30",
    "Total": 726729.33,
    "Principal": 264136.36,
    "Correção": 314480.17,
    "Multa": 43360,
    "Mora": 347334.76,
    "Encargos": 66086.88,
    "Descontos": -308668.84
  },
  {
    "Ano": "2001-01-30",
    "Total": 1922001.7,
    "Principal": 749714.42,
    "Correção": 798038.62,
    "Multa": 47993.83,
    "Mora": 935259.47,
    "Encargos": 176366.48,
    "Descontos": -785371.13
  },
  {
    "Ano": "2002-01-30",
    "Total": 3865893.53,
    "Principal": 1553169.88,
    "Correção": 1518876.39,
    "Multa": 102822.45,
    "Mora": 2102106.99,
    "Encargos": 352743.36,
    "Descontos": -1763825.53
  },
  {
    "Ano": "2003-01-30",
    "Total": 4023790.77,
    "Principal": 1829601.18,
    "Correção": 1407275.39,
    "Multa": 80377.66,
    "Mora": 2022988.78,
    "Encargos": 366200.16,
    "Descontos": -1682652.39
  },
  {
    "Ano": "2004-01-30",
    "Total": 3403224.59,
    "Principal": 1719895.41,
    "Correção": 1048786.59,
    "Multa": 58023.24,
    "Mora": 1567202.55,
    "Encargos": 309399.07,
    "Descontos": -1300082.27
  },
  {
    "Ano": "2005-01-30",
    "Total": 3602572.94,
    "Principal": 1964997.16,
    "Correção": 980622.14,
    "Multa": 61088.68,
    "Mora": 1495807.38,
    "Encargos": 318341.58,
    "Descontos": -1218284.01
  },
  {
    "Ano": "2006-01-30",
    "Total": 3604003.38,
    "Principal": 2107304.76,
    "Correção": 876066.21,
    "Multa": 58380.95,
    "Mora": 1333103.65,
    "Encargos": 317489.97,
    "Descontos": -1088342.16
  },
  {
    "Ano": "2007-01-30",
    "Total": 3450833.23,
    "Principal": 2108740.91,
    "Correção": 791606.52,
    "Multa": 57819.93,
    "Mora": 1122527.67,
    "Encargos": 312927.08,
    "Descontos": -942788.89
  },
  {
    "Ano": "2008-01-30",
    "Total": 3403693.22,
    "Principal": 2188380.89,
    "Correção": 695745.59,
    "Multa": 57666.75,
    "Mora": 946856.49,
    "Encargos": 297670.2,
    "Descontos": -782626.71
  },
  {
    "Ano": "2009-01-30",
    "Total": 3880995.55,
    "Principal": 2663686.71,
    "Correção": 645391.28,
    "Multa": 58522.87,
    "Mora": 872346.1,
    "Encargos": 297890.74,
    "Descontos": -656842.15
  },
  {
    "Ano": "2010-01-30",
    "Total": 3788602.64,
    "Principal": 2758828.62,
    "Correção": 530729.75,
    "Multa": 58908.42,
    "Mora": 680375.88,
    "Encargos": 315412.71,
    "Descontos": -555652.75
  },
  {
    "Ano": "2011-01-30",
    "Total": 1222677.13,
    "Principal": 949801.98,
    "Correção": 119334.74,
    "Multa": 13107.05,
    "Mora": 156209.22,
    "Encargos": 620.56,
    "Descontos": -16396.42
  },
  {
    "Ano": "2012-01-30",
    "Total": 3273968.12,
    "Principal": 2976746.54,
    "Correção": 171656.06,
    "Multa": 62313.74,
    "Mora": 274287.95,
    "Encargos": 1580.6,
    "Descontos": -212616.77
  },
  {
    "Ano": "2013-01-30",
    "Total": 17782.55,
    "Principal": 16181.94,
    "Correção": 0,
    "Multa": 279.56,
    "Mora": 503.51,
    "Encargos": 817.54,
    "Descontos": 0
  }
];

var Iss = [
  {
    "Ano": "1984-01-30",
    "Total": 15.08,
    "Principal": 2.87,
    "Correção": 9.35,
    "Multa": 0.12,
    "Mora": 7.33,
    "Encargos": 1.37,
    "Descontos": -5.96
  },
  {
    "Ano": "1985-01-30",
    "Total": 4722.3,
    "Principal": 1052.29,
    "Correção": 2773.91,
    "Multa": 38.26,
    "Mora": 2295.72,
    "Encargos": 429.3,
    "Descontos": -1867.19
  },
  {
    "Ano": "1986-01-30",
    "Total": 6379.92,
    "Principal": 1421.41,
    "Correção": 3747.87,
    "Multa": 51.69,
    "Mora": 3101.57,
    "Encargos": 579.99,
    "Descontos": -2522.61
  },
  {
    "Ano": "1987-01-30",
    "Total": 3729.09,
    "Principal": 831.13,
    "Correção": 2190.33,
    "Multa": 30.21,
    "Mora": 1812.88,
    "Encargos": 339.01,
    "Descontos": -1474.47
  },
  {
    "Ano": "1988-01-30",
    "Total": 7294.83,
    "Principal": 1625.85,
    "Correção": 4284.72,
    "Multa": 59.11,
    "Mora": 3546.34,
    "Encargos": 663.17,
    "Descontos": -2884.36
  },
  {
    "Ano": "1989-01-30",
    "Total": 21173.84,
    "Principal": 4719.16,
    "Correção": 12436.76,
    "Multa": 171.56,
    "Mora": 10293.55,
    "Encargos": 1924.89,
    "Descontos": -8372.09
  },
  {
    "Ano": "1990-01-30",
    "Total": 10951.89,
    "Principal": 2434.8,
    "Correção": 6423.09,
    "Multa": 177.16,
    "Mora": 5314.73,
    "Encargos": 995.63,
    "Descontos": -4393.51
  },
  {
    "Ano": "1991-01-30",
    "Total": 10.65,
    "Principal": 2.29,
    "Correção": 6.32,
    "Multa": 0.17,
    "Mora": 5.17,
    "Encargos": 0.97,
    "Descontos": -4.27
  },
  {
    "Ano": "1993-01-30",
    "Total": 5404.69,
    "Principal": 21.26,
    "Correção": 4350.06,
    "Multa": 87.43,
    "Mora": 2622.79,
    "Encargos": 491.34,
    "Descontos": -2168.17
  },
  {
    "Ano": "1994-01-30",
    "Total": 4320.66,
    "Principal": 229,
    "Correção": 3265.1,
    "Multa": 69.88,
    "Mora": 2096.47,
    "Encargos": 392.55,
    "Descontos": -1732.35
  },
  {
    "Ano": "1995-01-30",
    "Total": 2361.45,
    "Principal": 559.87,
    "Correção": 1265.01,
    "Multa": 511.15,
    "Mora": 1094.93,
    "Encargos": 214.35,
    "Descontos": -1283.86
  },
  {
    "Ano": "1996-01-30",
    "Total": 7854.11,
    "Principal": 2296.76,
    "Correção": 4008.26,
    "Multa": 306.82,
    "Mora": 3783,
    "Encargos": 729.55,
    "Descontos": -3270.28
  },
  {
    "Ano": "1997-01-30",
    "Total": 355868.93,
    "Principal": 106638.22,
    "Correção": 175418.07,
    "Multa": 12112.64,
    "Mora": 169134.65,
    "Encargos": 33078.41,
    "Descontos": -140513.05
  },
  {
    "Ano": "1998-01-30",
    "Total": 380700.73,
    "Principal": 124543.15,
    "Correção": 178051.56,
    "Multa": 13449.32,
    "Mora": 181440.63,
    "Encargos": 35206.52,
    "Descontos": -151990.45
  },
  {
    "Ano": "1999-01-30",
    "Total": 893117.49,
    "Principal": 298908.14,
    "Correção": 410837.85,
    "Multa": 62229.66,
    "Mora": 425948.98,
    "Encargos": 82118.15,
    "Descontos": -386925.28
  },
  {
    "Ano": "2000-01-30",
    "Total": 557474.78,
    "Principal": 202619.26,
    "Correção": 241238.05,
    "Multa": 33261.5,
    "Mora": 266440.83,
    "Encargos": 50695.31,
    "Descontos": -236780.17
  },
  {
    "Ano": "2001-01-30",
    "Total": 1474369.38,
    "Principal": 575106.67,
    "Correção": 612176.21,
    "Multa": 36816.11,
    "Mora": 717438.46,
    "Encargos": 135290.9,
    "Descontos": -602458.96
  },
  {
    "Ano": "2002-01-30",
    "Total": 2965530.71,
    "Principal": 1191438.13,
    "Correção": 1165131.56,
    "Multa": 78875.2,
    "Mora": 1612528.33,
    "Encargos": 270589.78,
    "Descontos": -1353032.29
  },
  {
    "Ano": "2003-01-30",
    "Total": 3086653.83,
    "Principal": 1403488.85,
    "Correção": 1079522.33,
    "Multa": 61657.78,
    "Mora": 1551836.67,
    "Encargos": 280912.5,
    "Descontos": -1290764.29
  },
  {
    "Ano": "2004-01-30",
    "Total": 2610616.91,
    "Principal": 1319333.45,
    "Correção": 804525.21,
    "Multa": 44509.69,
    "Mora": 1202202.61,
    "Encargos": 237340.33,
    "Descontos": -997294.38
  },
  {
    "Ano": "2005-01-30",
    "Total": 2763537.22,
    "Principal": 1507351.24,
    "Correção": 752236.2,
    "Multa": 46861.19,
    "Mora": 1147435.3,
    "Encargos": 244200.14,
    "Descontos": -934546.85
  },
  {
    "Ano": "2006-01-30",
    "Total": 2764634.52,
    "Principal": 1616515.54,
    "Correção": 672031.25,
    "Multa": 44784.08,
    "Mora": 1022625.11,
    "Encargos": 243546.87,
    "Descontos": -834868.33
  },
  {
    "Ano": "2007-01-30",
    "Total": 2647137.54,
    "Principal": 1617617.22,
    "Correção": 607242.14,
    "Multa": 44353.72,
    "Mora": 861092.07,
    "Encargos": 240046.67,
    "Descontos": -723214.28
  },
  {
    "Ano": "2008-01-30",
    "Total": 2610976.4,
    "Principal": 1678709.12,
    "Correção": 533707.12,
    "Multa": 44236.22,
    "Mora": 726334.54,
    "Encargos": 228343.1,
    "Descontos": -600353.71
  },
  {
    "Ano": "2009-01-30",
    "Total": 2977115.48,
    "Principal": 2043316.68,
    "Correção": 495080.28,
    "Multa": 44892.95,
    "Mora": 669177.55,
    "Encargos": 228512.28,
    "Descontos": -503864.26
  },
  {
    "Ano": "2010-01-30",
    "Total": 2906240.78,
    "Principal": 2116300.13,
    "Correção": 407123.31,
    "Multa": 45188.7,
    "Mora": 521917,
    "Encargos": 241953.4,
    "Descontos": -426241.76
  },
  {
    "Ano": "2011-01-30",
    "Total": 937916.82,
    "Principal": 728594.03,
    "Correção": 91541.79,
    "Multa": 10054.43,
    "Mora": 119828.24,
    "Encargos": 476.04,
    "Descontos": -12577.71
  },
  {
    "Ano": "2012-01-30",
    "Total": 2511464.14,
    "Principal": 2283465.18,
    "Correção": 131677.53,
    "Multa": 47800.93,
    "Mora": 210406.55,
    "Encargos": 1212.48,
    "Descontos": -163098.53
  },
  {
    "Ano": "2013-01-30",
    "Total": 13641.01,
    "Principal": 12413.18,
    "Correção": 0,
    "Multa": 214.45,
    "Mora": 386.24,
    "Encargos": 627.14,
    "Descontos": 0
  }
];

var Iss_obras = [
  {
    "Ano": "1984-01-30",
    "Total": 0.03,
    "Principal": 0.01,
    "Correção": 0.02,
    "Multa": 0,
    "Mora": 0.02,
    "Encargos": 0,
    "Descontos": -0.01
  },
  {
    "Ano": "1985-01-30",
    "Total": 10.03,
    "Principal": 2.23,
    "Correção": 5.89,
    "Multa": 0.08,
    "Mora": 4.87,
    "Encargos": 0.91,
    "Descontos": -3.96
  },
  {
    "Ano": "1986-01-30",
    "Total": 13.55,
    "Principal": 3.02,
    "Correção": 7.96,
    "Multa": 0.11,
    "Mora": 6.59,
    "Encargos": 1.23,
    "Descontos": -5.36
  },
  {
    "Ano": "1987-01-30",
    "Total": 7.92,
    "Principal": 1.76,
    "Correção": 4.65,
    "Multa": 0.06,
    "Mora": 3.85,
    "Encargos": 0.72,
    "Descontos": -3.13
  },
  {
    "Ano": "1988-01-30",
    "Total": 15.49,
    "Principal": 3.45,
    "Correção": 9.1,
    "Multa": 0.13,
    "Mora": 7.53,
    "Encargos": 1.41,
    "Descontos": -6.12
  },
  {
    "Ano": "1989-01-30",
    "Total": 44.96,
    "Principal": 10.02,
    "Correção": 26.41,
    "Multa": 0.36,
    "Mora": 21.85,
    "Encargos": 4.09,
    "Descontos": -17.78
  },
  {
    "Ano": "1990-01-30",
    "Total": 23.25,
    "Principal": 5.17,
    "Correção": 13.64,
    "Multa": 0.38,
    "Mora": 11.28,
    "Encargos": 2.11,
    "Descontos": -9.33
  },
  {
    "Ano": "1991-01-30",
    "Total": 0.02,
    "Principal": 0,
    "Correção": 0.01,
    "Multa": 0,
    "Mora": 0.01,
    "Encargos": 0,
    "Descontos": -0.01
  },
  {
    "Ano": "1993-01-30",
    "Total": 11.47,
    "Principal": 0.05,
    "Correção": 9.24,
    "Multa": 0.19,
    "Mora": 5.57,
    "Encargos": 1.04,
    "Descontos": -4.6
  },
  {
    "Ano": "1994-01-30",
    "Total": 9.17,
    "Principal": 0.49,
    "Correção": 6.93,
    "Multa": 0.15,
    "Mora": 4.45,
    "Encargos": 0.83,
    "Descontos": -3.68
  },
  {
    "Ano": "1995-01-30",
    "Total": 5.01,
    "Principal": 1.19,
    "Correção": 2.69,
    "Multa": 1.09,
    "Mora": 2.32,
    "Encargos": 0.46,
    "Descontos": -2.73
  },
  {
    "Ano": "1996-01-30",
    "Total": 16.68,
    "Principal": 4.88,
    "Correção": 8.51,
    "Multa": 0.65,
    "Mora": 8.03,
    "Encargos": 1.55,
    "Descontos": -6.94
  },
  {
    "Ano": "1997-01-30",
    "Total": 755.56,
    "Principal": 226.41,
    "Correção": 372.44,
    "Multa": 25.72,
    "Mora": 359.1,
    "Encargos": 70.23,
    "Descontos": -298.33
  },
  {
    "Ano": "1998-01-30",
    "Total": 808.28,
    "Principal": 264.42,
    "Correção": 378.03,
    "Multa": 28.55,
    "Mora": 385.22,
    "Encargos": 74.75,
    "Descontos": -322.7
  },
  {
    "Ano": "1999-01-30",
    "Total": 1896.22,
    "Principal": 634.62,
    "Correção": 872.27,
    "Multa": 132.12,
    "Mora": 904.35,
    "Encargos": 174.35,
    "Descontos": -821.5
  },
  {
    "Ano": "2000-01-30",
    "Total": 1183.6,
    "Principal": 430.19,
    "Correção": 512.18,
    "Multa": 70.62,
    "Mora": 565.69,
    "Encargos": 107.63,
    "Descontos": -502.72
  },
  {
    "Ano": "2001-01-30",
    "Total": 3130.3,
    "Principal": 1221.03,
    "Correção": 1299.74,
    "Multa": 78.17,
    "Mora": 1523.22,
    "Encargos": 287.24,
    "Descontos": -1279.11
  },
  {
    "Ano": "2002-01-30",
    "Total": 6296.24,
    "Principal": 2529.59,
    "Correção": 2473.74,
    "Multa": 167.46,
    "Mora": 3423.63,
    "Encargos": 574.5,
    "Descontos": -2872.68
  },
  {
    "Ano": "2003-01-30",
    "Total": 6553.41,
    "Principal": 2979.81,
    "Correção": 2291.98,
    "Multa": 130.91,
    "Mora": 3294.77,
    "Encargos": 596.42,
    "Descontos": -2740.48
  },
  {
    "Ano": "2004-01-30",
    "Total": 5542.71,
    "Principal": 2801.13,
    "Correção": 1708.12,
    "Multa": 94.5,
    "Mora": 2552.45,
    "Encargos": 503.91,
    "Descontos": -2117.4
  },
  {
    "Ano": "2005-01-30",
    "Total": 5867.38,
    "Principal": 3200.32,
    "Correção": 1597.1,
    "Multa": 99.49,
    "Mora": 2436.17,
    "Encargos": 518.47,
    "Descontos": -1984.18
  },
  {
    "Ano": "2006-01-30",
    "Total": 5869.71,
    "Principal": 3432.09,
    "Correção": 1426.82,
    "Multa": 95.08,
    "Mora": 2171.18,
    "Encargos": 517.08,
    "Descontos": -1772.54
  },
  {
    "Ano": "2007-01-30",
    "Total": 5620.25,
    "Principal": 3434.43,
    "Correção": 1289.26,
    "Multa": 94.17,
    "Mora": 1828.22,
    "Encargos": 509.65,
    "Descontos": -1535.49
  },
  {
    "Ano": "2008-01-30",
    "Total": 5543.47,
    "Principal": 3564.14,
    "Correção": 1133.14,
    "Multa": 93.92,
    "Mora": 1542.11,
    "Encargos": 484.8,
    "Descontos": -1274.64
  },
  {
    "Ano": "2009-01-30",
    "Total": 6320.84,
    "Principal": 4338.25,
    "Correção": 1051.13,
    "Multa": 95.31,
    "Mora": 1420.76,
    "Encargos": 485.16,
    "Descontos": -1069.78
  },
  {
    "Ano": "2010-01-30",
    "Total": 6170.36,
    "Principal": 4493.21,
    "Correção": 864.38,
    "Multa": 95.94,
    "Mora": 1108.1,
    "Encargos": 513.7,
    "Descontos": -904.97
  },
  {
    "Ano": "2011-01-30",
    "Total": 1991.33,
    "Principal": 1546.91,
    "Correção": 194.36,
    "Multa": 21.35,
    "Mora": 254.41,
    "Encargos": 1.01,
    "Descontos": -26.7
  },
  {
    "Ano": "2012-01-30",
    "Total": 5332.2,
    "Principal": 4848.12,
    "Correção": 279.57,
    "Multa": 101.49,
    "Mora": 446.72,
    "Encargos": 2.57,
    "Descontos": -346.28
  },
  {
    "Ano": "2013-01-30",
    "Total": 28.96,
    "Principal": 26.35,
    "Correção": 0,
    "Multa": 0.46,
    "Mora": 0.82,
    "Encargos": 1.33,
    "Descontos": 0
  }
];

var Itbi = [
  {
    "Ano": "1984-01-30",
    "Total": 0.08,
    "Principal": 0.02,
    "Correção": 0.05,
    "Multa": 0,
    "Mora": 0.04,
    "Encargos": 0.01,
    "Descontos": -0.03
  },
  {
    "Ano": "1985-01-30",
    "Total": 25.07,
    "Principal": 5.59,
    "Correção": 14.72,
    "Multa": 0.2,
    "Mora": 12.19,
    "Encargos": 2.28,
    "Descontos": -9.91
  },
  {
    "Ano": "1986-01-30",
    "Total": 33.86,
    "Principal": 7.54,
    "Correção": 19.89,
    "Multa": 0.27,
    "Mora": 16.46,
    "Encargos": 3.08,
    "Descontos": -13.39
  },
  {
    "Ano": "1987-01-30",
    "Total": 19.79,
    "Principal": 4.41,
    "Correção": 11.63,
    "Multa": 0.16,
    "Mora": 9.62,
    "Encargos": 1.8,
    "Descontos": -7.83
  },
  {
    "Ano": "1988-01-30",
    "Total": 38.72,
    "Principal": 8.63,
    "Correção": 22.74,
    "Multa": 0.31,
    "Mora": 18.82,
    "Encargos": 3.52,
    "Descontos": -15.31
  },
  {
    "Ano": "1989-01-30",
    "Total": 112.39,
    "Principal": 25.05,
    "Correção": 66.01,
    "Multa": 0.91,
    "Mora": 54.64,
    "Encargos": 10.22,
    "Descontos": -44.44
  },
  {
    "Ano": "1990-01-30",
    "Total": 58.13,
    "Principal": 12.92,
    "Correção": 34.09,
    "Multa": 0.94,
    "Mora": 28.21,
    "Encargos": 5.28,
    "Descontos": -23.32
  },
  {
    "Ano": "1991-01-30",
    "Total": 0.06,
    "Principal": 0.01,
    "Correção": 0.03,
    "Multa": 0,
    "Mora": 0.03,
    "Encargos": 0.01,
    "Descontos": -0.02
  },
  {
    "Ano": "1993-01-30",
    "Total": 28.69,
    "Principal": 0.11,
    "Correção": 23.09,
    "Multa": 0.46,
    "Mora": 13.92,
    "Encargos": 2.61,
    "Descontos": -11.51
  },
  {
    "Ano": "1994-01-30",
    "Total": 22.93,
    "Principal": 1.22,
    "Correção": 17.33,
    "Multa": 0.37,
    "Mora": 11.13,
    "Encargos": 2.08,
    "Descontos": -9.2
  },
  {
    "Ano": "1995-01-30",
    "Total": 12.53,
    "Principal": 2.97,
    "Correção": 6.71,
    "Multa": 2.71,
    "Mora": 5.81,
    "Encargos": 1.14,
    "Descontos": -6.81
  },
  {
    "Ano": "1996-01-30",
    "Total": 41.69,
    "Principal": 12.19,
    "Correção": 21.28,
    "Multa": 1.63,
    "Mora": 20.08,
    "Encargos": 3.87,
    "Descontos": -17.36
  },
  {
    "Ano": "1997-01-30",
    "Total": 1888.9,
    "Principal": 566.02,
    "Correção": 931.09,
    "Multa": 64.29,
    "Mora": 897.74,
    "Encargos": 175.58,
    "Descontos": -745.82
  },
  {
    "Ano": "1998-01-30",
    "Total": 2020.7,
    "Principal": 661.06,
    "Correção": 945.07,
    "Multa": 71.39,
    "Mora": 963.06,
    "Encargos": 186.87,
    "Descontos": -806.74
  },
  {
    "Ano": "1999-01-30",
    "Total": 4740.54,
    "Principal": 1586.56,
    "Correção": 2180.67,
    "Multa": 330.31,
    "Mora": 2260.88,
    "Encargos": 435.87,
    "Descontos": -2053.74
  },
  {
    "Ano": "2000-01-30",
    "Total": 2959,
    "Principal": 1075.47,
    "Correção": 1280.46,
    "Multa": 176.55,
    "Mora": 1414.23,
    "Encargos": 269.08,
    "Descontos": -1256.79
  },
  {
    "Ano": "2001-01-30",
    "Total": 7825.74,
    "Principal": 3052.58,
    "Correção": 3249.34,
    "Multa": 195.41,
    "Mora": 3808.06,
    "Encargos": 718.1,
    "Descontos": -3197.77
  },
  {
    "Ano": "2002-01-30",
    "Total": 15740.61,
    "Principal": 6323.98,
    "Correção": 6184.35,
    "Multa": 418.66,
    "Mora": 8559.07,
    "Encargos": 1436.25,
    "Descontos": -7181.7
  },
  {
    "Ano": "2003-01-30",
    "Total": 16383.51,
    "Principal": 7449.52,
    "Correção": 5729.95,
    "Multa": 327.27,
    "Mora": 8236.92,
    "Encargos": 1491.04,
    "Descontos": -6851.19
  },
  {
    "Ano": "2004-01-30",
    "Total": 13856.78,
    "Principal": 7002.83,
    "Correção": 4270.3,
    "Multa": 236.25,
    "Mora": 6381.12,
    "Encargos": 1259.77,
    "Descontos": -5293.49
  },
  {
    "Ano": "2005-01-30",
    "Total": 14668.46,
    "Principal": 8000.8,
    "Correção": 3992.76,
    "Multa": 248.73,
    "Mora": 6090.42,
    "Encargos": 1296.18,
    "Descontos": -4960.44
  },
  {
    "Ano": "2006-01-30",
    "Total": 14674.28,
    "Principal": 8580.23,
    "Correção": 3567.04,
    "Multa": 237.71,
    "Mora": 5427.95,
    "Encargos": 1292.71,
    "Descontos": -4431.36
  },
  {
    "Ano": "2007-01-30",
    "Total": 14050.62,
    "Principal": 8586.08,
    "Correção": 3223.15,
    "Multa": 235.42,
    "Mora": 4570.55,
    "Encargos": 1274.13,
    "Descontos": -3838.72
  },
  {
    "Ano": "2008-01-30",
    "Total": 13858.69,
    "Principal": 8910.35,
    "Correção": 2832.84,
    "Multa": 234.8,
    "Mora": 3855.28,
    "Encargos": 1212.01,
    "Descontos": -3186.59
  },
  {
    "Ano": "2009-01-30",
    "Total": 15802.1,
    "Principal": 10845.63,
    "Correção": 2627.81,
    "Multa": 238.29,
    "Mora": 3551.9,
    "Encargos": 1212.91,
    "Descontos": -2674.44
  },
  {
    "Ano": "2010-01-30",
    "Total": 15425.91,
    "Principal": 11233.02,
    "Correção": 2160.95,
    "Multa": 239.86,
    "Mora": 2770.26,
    "Encargos": 1284.25,
    "Descontos": -2262.43
  },
  {
    "Ano": "2011-01-30",
    "Total": 4978.33,
    "Principal": 3867.27,
    "Correção": 485.89,
    "Multa": 53.37,
    "Mora": 636.03,
    "Encargos": 2.53,
    "Descontos": -66.76
  },
  {
    "Ano": "2012-01-30",
    "Total": 13330.49,
    "Principal": 12120.3,
    "Correção": 698.93,
    "Multa": 253.72,
    "Mora": 1116.81,
    "Encargos": 6.44,
    "Descontos": -865.7
  },
  {
    "Ano": "2013-01-30",
    "Total": 72.4,
    "Principal": 65.89,
    "Correção": 0,
    "Multa": 1.14,
    "Mora": 2.05,
    "Encargos": 3.33,
    "Descontos": 0
  }
];

var Taxas = [
  {
    "Ano": "1984-01-30",
    "Total": 115.91,
    "Principal": 22.07,
    "Correção": 71.84,
    "Multa": 0.94,
    "Mora": 56.35,
    "Encargos": 10.54,
    "Descontos": -45.83
  },
  {
    "Ano": "1985-01-30",
    "Total": 36289.49,
    "Principal": 8086.56,
    "Correção": 21316.69,
    "Multa": 294.03,
    "Mora": 17641.95,
    "Encargos": 3299.04,
    "Descontos": -14348.78
  },
  {
    "Ano": "1986-01-30",
    "Total": 49027.89,
    "Principal": 10923.14,
    "Correção": 28801.28,
    "Multa": 397.25,
    "Mora": 23834.65,
    "Encargos": 4457.08,
    "Descontos": -19385.52
  },
  {
    "Ano": "1987-01-30",
    "Total": 28656.98,
    "Principal": 6386.98,
    "Correção": 16832.09,
    "Multa": 232.19,
    "Mora": 13931.44,
    "Encargos": 2605.18,
    "Descontos": -11330.9
  },
  {
    "Ano": "1988-01-30",
    "Total": 56058.66,
    "Principal": 12494.2,
    "Correção": 32926.86,
    "Multa": 454.21,
    "Mora": 27252.63,
    "Encargos": 5096.24,
    "Descontos": -22165.48
  },
  {
    "Ano": "1989-01-30",
    "Total": 162714.88,
    "Principal": 36265.43,
    "Correção": 95572.91,
    "Multa": 1318.38,
    "Mora": 79103.01,
    "Encargos": 14792.26,
    "Descontos": -64337.11
  },
  {
    "Ano": "1990-01-30",
    "Total": 84162.17,
    "Principal": 18710.77,
    "Correção": 49359.58,
    "Multa": 1361.41,
    "Mora": 40842.21,
    "Encargos": 7651.1,
    "Descontos": -33762.89
  },
  {
    "Ano": "1991-01-30",
    "Total": 81.82,
    "Principal": 17.61,
    "Correção": 48.56,
    "Multa": 1.32,
    "Mora": 39.7,
    "Encargos": 7.44,
    "Descontos": -32.82
  },
  {
    "Ano": "1993-01-30",
    "Total": 41533.5,
    "Principal": 163.36,
    "Correção": 33428.93,
    "Multa": 671.84,
    "Mora": 20155.37,
    "Encargos": 3775.78,
    "Descontos": -16661.78
  },
  {
    "Ano": "1994-01-30",
    "Total": 33203.03,
    "Principal": 1759.83,
    "Correção": 25091.39,
    "Multa": 537.03,
    "Mora": 16110.73,
    "Encargos": 3016.64,
    "Descontos": -13312.59
  },
  {
    "Ano": "1995-01-30",
    "Total": 18147.09,
    "Principal": 4302.46,
    "Correção": 9721.24,
    "Multa": 3928.01,
    "Mora": 8414.21,
    "Encargos": 1647.23,
    "Descontos": -9866.06
  },
  {
    "Ano": "1996-01-30",
    "Total": 60356.56,
    "Principal": 17649.97,
    "Correção": 30802.35,
    "Multa": 2357.79,
    "Mora": 29071.28,
    "Encargos": 5606.36,
    "Descontos": -25131.19
  },
  {
    "Ano": "1997-01-30",
    "Total": 2734750.73,
    "Principal": 819484.13,
    "Correção": 1348037.56,
    "Multa": 93082.17,
    "Mora": 1299751.28,
    "Encargos": 254198.11,
    "Descontos": -1079802.53
  },
  {
    "Ano": "1998-01-30",
    "Total": 2925575.97,
    "Principal": 957078.4,
    "Correção": 1368275.17,
    "Multa": 103354.18,
    "Mora": 1394319.22,
    "Encargos": 270552.01,
    "Descontos": -1168003.01
  },
  {
    "Ano": "1999-01-30",
    "Total": 6863351.93,
    "Principal": 2297023.38,
    "Correção": 3157171.14,
    "Multa": 478217.09,
    "Mora": 3273295.81,
    "Encargos": 631054.41,
    "Descontos": -2973409.9
  },
  {
    "Ano": "2000-01-30",
    "Total": 4284033.92,
    "Principal": 1557070.93,
    "Correção": 1853845.25,
    "Multa": 255605.09,
    "Mora": 2047521.42,
    "Encargos": 389578.92,
    "Descontos": -1819587.71
  },
  {
    "Ano": "2001-01-30",
    "Total": 11330106.1,
    "Principal": 4419529.9,
    "Correção": 4704398.69,
    "Multa": 282921.26,
    "Mora": 5513308.89,
    "Encargos": 1039671.81,
    "Descontos": -4629724.45
  },
  {
    "Ano": "2002-01-30",
    "Total": 22789253.49,
    "Principal": 9155860.55,
    "Correção": 8953702.1,
    "Multa": 606133.3,
    "Mora": 12391818.01,
    "Encargos": 2079404.88,
    "Descontos": -10397665.34
  },
  {
    "Ano": "2003-01-30",
    "Total": 23720049.98,
    "Principal": 10785409.53,
    "Correção": 8295819.66,
    "Multa": 473822.39,
    "Mora": 11925420,
    "Encargos": 2158732.05,
    "Descontos": -9919153.64
  },
  {
    "Ano": "2004-01-30",
    "Total": 20061842.66,
    "Principal": 10138699.38,
    "Correção": 6182545.68,
    "Multa": 342044.19,
    "Mora": 9238582.45,
    "Encargos": 1823892.41,
    "Descontos": -7663921.45
  },
  {
    "Ano": "2005-01-30",
    "Total": 21236991.44,
    "Principal": 11583562.27,
    "Correção": 5780719.62,
    "Multa": 360114.78,
    "Mora": 8817711.39,
    "Encargos": 1876608.06,
    "Descontos": -7181724.7
  },
  {
    "Ano": "2006-01-30",
    "Total": 21245423.84,
    "Principal": 12422458.59,
    "Correção": 5164367.53,
    "Multa": 344152.85,
    "Mora": 7858580.86,
    "Encargos": 1871587.87,
    "Descontos": -6415723.85
  },
  {
    "Ano": "2007-01-30",
    "Total": 20342493.26,
    "Principal": 12430924.65,
    "Correção": 4666481.76,
    "Multa": 340845.65,
    "Mora": 6617245.76,
    "Encargos": 1844689.87,
    "Descontos": -5557694.44
  },
  {
    "Ano": "2008-01-30",
    "Total": 20064605.25,
    "Principal": 12900398.45,
    "Correção": 4101386.25,
    "Multa": 339942.68,
    "Mora": 5581672.76,
    "Encargos": 1754751.31,
    "Descontos": -4613546.19
  },
  {
    "Ano": "2009-01-30",
    "Total": 22878279.13,
    "Principal": 15702303.03,
    "Correção": 3804550.05,
    "Multa": 344989.44,
    "Mora": 5142437.65,
    "Encargos": 1756051.34,
    "Descontos": -3872052.39
  },
  {
    "Ano": "2010-01-30",
    "Total": 22333627.42,
    "Principal": 16263159.94,
    "Correção": 3128625.94,
    "Multa": 347262.23,
    "Mora": 4010782.56,
    "Encargos": 1859342.54,
    "Descontos": -3275545.78
  },
  {
    "Ano": "2011-01-30",
    "Total": 7207621.97,
    "Principal": 5599036.29,
    "Correção": 703472.43,
    "Multa": 77265.43,
    "Mora": 920845.71,
    "Encargos": 3658.2,
    "Descontos": -96656.09
  },
  {
    "Ano": "2012-01-30",
    "Total": 19299882.09,
    "Principal": 17547775.44,
    "Correção": 1011904.09,
    "Multa": 367336.44,
    "Mora": 1616914.04,
    "Encargos": 9317.54,
    "Descontos": -1253365.45
  },
  {
    "Ano": "2013-01-30",
    "Total": 104827.26,
    "Principal": 95391.74,
    "Correção": 0,
    "Multa": 1647.99,
    "Mora": 2968.15,
    "Encargos": 4819.38,
    "Descontos": 0
  }
];

var autos_de_infracao = [
  {
    "Ano": "1984-01-30",
    "Total": 9.33,
    "Principal": 1.78,
    "Correção": 5.79,
    "Multa": 0.08,
    "Mora": 4.54,
    "Encargos": 0.85,
    "Descontos": -3.69
  },
  {
    "Ano": "1985-01-30",
    "Total": 2922.61,
    "Principal": 651.26,
    "Correção": 1716.76,
    "Multa": 23.68,
    "Mora": 1420.81,
    "Encargos": 265.69,
    "Descontos": -1155.59
  },
  {
    "Ano": "1986-01-30",
    "Total": 3948.51,
    "Principal": 879.71,
    "Correção": 2319.54,
    "Multa": 31.99,
    "Mora": 1919.55,
    "Encargos": 358.96,
    "Descontos": -1561.23
  },
  {
    "Ano": "1987-01-30",
    "Total": 2307.92,
    "Principal": 514.38,
    "Correção": 1355.59,
    "Multa": 18.7,
    "Mora": 1121.98,
    "Encargos": 209.81,
    "Descontos": -912.55
  },
  {
    "Ano": "1988-01-30",
    "Total": 4514.74,
    "Principal": 1006.23,
    "Correção": 2651.8,
    "Multa": 36.58,
    "Mora": 2194.82,
    "Encargos": 410.43,
    "Descontos": -1785.12
  },
  {
    "Ano": "1989-01-30",
    "Total": 13104.4,
    "Principal": 2920.67,
    "Correção": 7697.06,
    "Multa": 106.18,
    "Mora": 6370.64,
    "Encargos": 1191.31,
    "Descontos": -5181.45
  },
  {
    "Ano": "1990-01-30",
    "Total": 6778.08,
    "Principal": 1506.89,
    "Correção": 3975.22,
    "Multa": 109.64,
    "Mora": 3289.27,
    "Encargos": 616.19,
    "Descontos": -2719.13
  },
  {
    "Ano": "1991-01-30",
    "Total": 6.59,
    "Principal": 1.42,
    "Correção": 3.91,
    "Multa": 0.11,
    "Mora": 3.2,
    "Encargos": 0.6,
    "Descontos": -2.64
  },
  {
    "Ano": "1993-01-30",
    "Total": 3344.94,
    "Principal": 13.16,
    "Correção": 2692.23,
    "Multa": 54.11,
    "Mora": 1623.23,
    "Encargos": 304.09,
    "Descontos": -1341.87
  },
  {
    "Ano": "1994-01-30",
    "Total": 2674.04,
    "Principal": 141.73,
    "Correção": 2020.76,
    "Multa": 43.25,
    "Mora": 1297.49,
    "Encargos": 242.95,
    "Descontos": -1072.14
  },
  {
    "Ano": "1995-01-30",
    "Total": 1461.49,
    "Principal": 346.5,
    "Correção": 782.91,
    "Multa": 316.35,
    "Mora": 677.65,
    "Encargos": 132.66,
    "Descontos": -794.57
  },
  {
    "Ano": "1996-01-30",
    "Total": 4860.88,
    "Principal": 1421.46,
    "Correção": 2480.7,
    "Multa": 189.89,
    "Mora": 2341.28,
    "Encargos": 451.51,
    "Descontos": -2023.96
  },
  {
    "Ano": "1997-01-30",
    "Total": 220245.85,
    "Principal": 65997.96,
    "Correção": 108565.53,
    "Multa": 7496.46,
    "Mora": 104676.75,
    "Encargos": 20472.1,
    "Descontos": -86962.96
  },
  {
    "Ano": "1998-01-30",
    "Total": 235614.14,
    "Principal": 77079.25,
    "Correção": 110195.39,
    "Multa": 8323.73,
    "Mora": 112292.87,
    "Encargos": 21789.17,
    "Descontos": -94066.27
  },
  {
    "Ano": "1999-01-30",
    "Total": 552746.81,
    "Principal": 184993.04,
    "Correção": 254265.89,
    "Multa": 38513.68,
    "Mora": 263618.1,
    "Encargos": 50822.59,
    "Descontos": -239466.5
  },
  {
    "Ano": "2000-01-30",
    "Total": 345018.89,
    "Principal": 125400.24,
    "Correção": 149301.25,
    "Multa": 20585.41,
    "Mora": 164899.16,
    "Encargos": 31375.12,
    "Descontos": -146542.29
  },
  {
    "Ano": "2001-01-30",
    "Total": 912481.26,
    "Principal": 355931.2,
    "Correção": 378873.39,
    "Multa": 22785.34,
    "Mora": 444019.77,
    "Encargos": 83730.99,
    "Descontos": -372859.42
  },
  {
    "Ano": "2002-01-30",
    "Total": 1835354.99,
    "Principal": 737376.25,
    "Correção": 721095.22,
    "Multa": 48815.54,
    "Mora": 997987.28,
    "Encargos": 167466.92,
    "Descontos": -837386.23
  },
  {
    "Ano": "2003-01-30",
    "Total": 1910317.6,
    "Principal": 868613.59,
    "Correção": 668112.01,
    "Multa": 38159.75,
    "Mora": 960425.45,
    "Encargos": 173855.61,
    "Descontos": -798848.82
  },
  {
    "Ano": "2004-01-30",
    "Total": 1615700.27,
    "Principal": 816530.15,
    "Correção": 497917.41,
    "Multa": 27546.87,
    "Mora": 744038.34,
    "Encargos": 146888.97,
    "Descontos": -617221.47
  },
  {
    "Ano": "2005-01-30",
    "Total": 1710342.04,
    "Principal": 932893.6,
    "Correção": 465555.95,
    "Multa": 29002.2,
    "Mora": 710143.08,
    "Encargos": 151134.48,
    "Descontos": -578387.28
  },
  {
    "Ano": "2006-01-30",
    "Total": 1711021.15,
    "Principal": 1000454.95,
    "Correção": 415917.43,
    "Multa": 27716.69,
    "Mora": 632898.55,
    "Encargos": 150730.17,
    "Descontos": -516696.64
  },
  {
    "Ano": "2007-01-30",
    "Total": 1638302.74,
    "Principal": 1001136.77,
    "Correção": 375819.71,
    "Multa": 27450.34,
    "Mora": 532926.41,
    "Encargos": 148563.92,
    "Descontos": -447594.4
  },
  {
    "Ano": "2008-01-30",
    "Total": 1615922.76,
    "Principal": 1038946.3,
    "Correção": 330309.18,
    "Multa": 27377.62,
    "Mora": 449525.52,
    "Encargos": 141320.63,
    "Descontos": -371556.49
  },
  {
    "Ano": "2009-01-30",
    "Total": 1842524.76,
    "Principal": 1264600.45,
    "Correção": 306403.19,
    "Multa": 27784.06,
    "Mora": 414151.28,
    "Encargos": 141425.33,
    "Descontos": -311839.56
  },
  {
    "Ano": "2010-01-30",
    "Total": 1798660.7,
    "Principal": 1309769.62,
    "Correção": 251966.97,
    "Multa": 27967.11,
    "Mora": 323012.33,
    "Encargos": 149743.98,
    "Descontos": -263799.31
  },
  {
    "Ano": "2011-01-30",
    "Total": 580472.94,
    "Principal": 450923.91,
    "Correção": 56654.85,
    "Multa": 6222.65,
    "Mora": 74161.22,
    "Encargos": 294.62,
    "Descontos": -7784.29
  },
  {
    "Ano": "2012-01-30",
    "Total": 1554335.03,
    "Principal": 1413227.39,
    "Correção": 81494.69,
    "Multa": 29583.8,
    "Mora": 130219.77,
    "Encargos": 750.4,
    "Descontos": -100941.02
  },
  {
    "Ano": "2013-01-30",
    "Total": 8442.37,
    "Principal": 7682.47,
    "Correção": 0,
    "Multa": 132.72,
    "Mora": 239.04,
    "Encargos": 388.13,
    "Descontos": 0
  }
];

var chart = AmCharts.makeChart("chartdivGestão ambiental", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : false,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

	
    dataSets: [
	{
        title: "Dívida Ativa - Total",
        fieldMappings: [{
            fromField: "Total",
            toField: "Total"
        }, {
            fromField: "Principal",
            toField: "Principal"
        }, {
            fromField: "Correção",
            toField: "Correção"
        }, {
            fromField: "Multa",
            toField: "Multa"
        }, {
            fromField: "Mora",
            toField: "Mora"
        }, {
            fromField: "Encargos",
            toField: "Encargos"
        }, {
            fromField: "Descontos",
            toField: "Descontos"
        }
		],
        dataProvider: Total,
        categoryField: "Ano"
    },{
        title: "IPTU",
        fieldMappings: [{
            fromField: "Total",
            toField: "Total"
        }, {
            fromField: "Principal",
            toField: "Principal"
        }, {
            fromField: "Correção",
            toField: "Correção"
        }, {
            fromField: "Multa",
            toField: "Multa"
        }, {
            fromField: "Mora",
            toField: "Mora"
        }, {
            fromField: "Encargos",
            toField: "Encargos"
        }, {
            fromField: "Descontos",
            toField: "Descontos"
        }
		],
        dataProvider: iptu,
        categoryField: "Ano"
    },{
        title: "ISS",
        fieldMappings: [{
            fromField: "Total",
            toField: "Total"
        }, {
            fromField: "Principal",
            toField: "Principal"
        }, {
            fromField: "Correção",
            toField: "Correção"
        }, {
            fromField: "Multa",
            toField: "Multa"
        }, {
            fromField: "Mora",
            toField: "Mora"
        }, {
            fromField: "Encargos",
            toField: "Encargos"
        }, {
            fromField: "Descontos",
            toField: "Descontos"
        }
		],
        dataProvider: Iss,
        categoryField: "Ano"
    },{
        title: "ISS - Obras",
        fieldMappings: [{
            fromField: "Total",
            toField: "Total"
        }, {
            fromField: "Principal",
            toField: "Principal"
        }, {
            fromField: "Correção",
            toField: "Correção"
        }, {
            fromField: "Multa",
            toField: "Multa"
        }, {
            fromField: "Mora",
            toField: "Mora"
        }, {
            fromField: "Encargos",
            toField: "Encargos"
        }, {
            fromField: "Descontos",
            toField: "Descontos"
        }
		],
        dataProvider: Iss_obras,
        categoryField: "Ano"
    },{
        title: "ITBI",
        fieldMappings: [{
            fromField: "Total",
            toField: "Total"
        }, {
            fromField: "Principal",
            toField: "Principal"
        }, {
            fromField: "Correção",
            toField: "Correção"
        }, {
            fromField: "Multa",
            toField: "Multa"
        }, {
            fromField: "Mora",
            toField: "Mora"
        }, {
            fromField: "Encargos",
            toField: "Encargos"
        }, {
            fromField: "Descontos",
            toField: "Descontos"
        }
		],
        dataProvider: Itbi,
        categoryField: "Ano"
    },{
        title: "Taxas",
        fieldMappings: [{
            fromField: "Total",
            toField: "Total"
        }, {
            fromField: "Principal",
            toField: "Principal"
        }, {
            fromField: "Correção",
            toField: "Correção"
        }, {
            fromField: "Multa",
            toField: "Multa"
        }, {
            fromField: "Mora",
            toField: "Mora"
        }, {
            fromField: "Encargos",
            toField: "Encargos"
        }, {
            fromField: "Descontos",
            toField: "Descontos"
        }
		],
        dataProvider: Taxas,
        categoryField: "Ano"
    },{
        title: "Autos de Infração",
        fieldMappings: [{
            fromField: "Total",
            toField: "Total"
        }, {
            fromField: "Principal",
            toField: "Principal"
        }, {
            fromField: "Correção",
            toField: "Correção"
        }, {
            fromField: "Multa",
            toField: "Multa"
        }, {
            fromField: "Mora",
            toField: "Mora"
        }, {
            fromField: "Encargos",
            toField: "Encargos"
        }, {
            fromField: "Descontos",
            toField: "Descontos"
        }
		],
        dataProvider: autos_de_infracao,
        categoryField: "Ano"
    }
	],


    panels: [
	 {

        title: "Total",

        stockGraphs: [{
            id: "Total",
            valueField: "Total",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b> R$ [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b> R$ [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
        stockLegend: {
            useGraphSettings: true,
			valueText: "R$ [[value]]",
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		}
		
	}
	,{

        title: "Principal",

        stockGraphs: [{
            id: "Principal",
            valueField: "Principal",
            lineThickness: 3,
            title: "",
            balloonText: "[[title]]:<b> R$ [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b> R$ [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true
        }],

        stockLegend: {
            useGraphSettings: true,
			valueText: "R$ [[value]]",
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		}
	},{

        title: "Correção",

        stockGraphs: [{
            id: "Correção",
            valueField: "Correção",
            lineThickness: 3,
            title: "",
            balloonText: "[[title]]:<b> R$ [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b> R$ [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true
        }],

        stockLegend: {
            useGraphSettings: true,
			valueText: "R$ [[value]]",
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		}
	},{

        title: "Multa",

        stockGraphs: [{
            id: "Multa",
            valueField: "Multa",
            lineThickness: 3,
            title: "",
            balloonText: "[[title]]:<b> R$ [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b> R$ [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true
        }],

        stockLegend: {
            useGraphSettings: true,
			valueText: "R$ [[value]]",
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		}
	},{

        title: "Mora",

        stockGraphs: [{
            id: "Mora",
            valueField: "Mora",
            lineThickness: 3,
            title: "",
            balloonText: "[[title]]:<b> R$ [[value]]</b>",
            compareGraphBalloonText: "[[title]]: R$ <b>[[value]]</b>",
			minPeriod: "YYYY",
            comparable: true
        }],

        stockLegend: {
            useGraphSettings: true,
			valueText: "R$ [[value]]",
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		}
	},{

        title: "Encargos",

        stockGraphs: [{
            id: "Encargos",
            valueField: "Encargos",
            lineThickness: 3,
            title: "",
            balloonText: "[[title]]:<b> R$ [[value]]</b>",
            compareGraphBalloonText: "[[title]]: R$ <b>[[value]]</b>",
			minPeriod: "YYYY",
            comparable: true
        }],

        stockLegend: {
            useGraphSettings: true,
			valueText: "R$ [[value]]",
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		}
	},{

        title: "Descontos",

        stockGraphs: [{
            id: "Descontos",
            valueField: "Descontos",
            lineThickness: 3,
            title: "",
            balloonText: "[[title]]:<b> R$ [[value]]</b>",
            compareGraphBalloonText: "[[title]]: R$ <b>[[value]]</b>",
			minPeriod: "YYYY",
            comparable: true
        }],

        stockLegend: {
            useGraphSettings: true,
			valueText: "R$ [[value]]",
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		}
	}
	
	],
 

    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "Total",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione o Tributo:",
		compareText : "Selecione outro tributo para comparar:"
    }
	
});
	
};