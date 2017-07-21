function iniciar2(){
var map = L.map('chartdivGeográfica', {
		zoom: 12,
		attributionControl: false,
		center: L.latLng([-8.047562,-34.896964]),
		
	}),
	osmLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(osmLayer);
/*var googleLayer = new L.Google('ROADMAP');
map.addLayer(googleLayer);*/

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
 	}).bindPopup('<div class="d3plus_tooltip_container" style="background-color: rgb(255, 255, 255); padding: 6px; width: 236px;">    <div class="d3plus_tooltip_header" style="position: relative; z-index: 1;">         <div class="d3plus_tooltip_icon" style="width: 50px; height: 50px; z-index: 1; background-position: 50% center; background-size: 100%; background-image: url(&quot;/static/img/icons/hs/hs_02.png&quot;); display: inline-block; margin: 0px 3px 3px 0px; background-color: rgb(255, 196, 28);"></div>         <div class="d3plus_tooltip_title" style="max-width: 163px; color: rgb(68, 68, 68); vertical-align: top; width: 170px; display: inline-block; overflow: hidden; text-overflow: ellipsis; word-wrap: break-word; z-index: 1; font-size: 18px; line-height: 20px; padding: 3px 6px;">'+feature.properties.name+'</div>     </div>     <div class="d3plus_tooltip_data_container" style="overflow-y: auto; z-index: -1; max-height: 304px;">         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; width: 105px; min-height: 15px;">ID HS</div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">1201</div>         </div>         <div class="d3plus_tooltip_data_title" style="font-size: 12px; font-weight: bold; padding: 6px 3px 0px;">Valores Básicos</div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; cursor: pointer; width: 105px; min-height: 15px;">Exportações                 <div class="d3plus_tooltip_data_help" style="background-color: rgb(204, 204, 204); border-radius: 5px; color: rgb(255, 255, 255); cursor: pointer; display: inline-block; font-size: 8px; font-weight: bold; height: 10px; margin: 3px 0px 0px 3px; padding-right: 1px; text-align: center; width: 10px; vertical-align: top;">?</div>             </div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">$1,15 Bilhão USD</div>             <div class="d3plus_tooltip_data_desc" style="color: rgb(136, 136, 136); overflow: hidden; transition: height 0.5s; width: 85%; height: 0px;">Baseado nos Estados Produtores</div>         </div>         <div class="d3plus_tooltip_data_seperator" style="background-color: rgb(221, 221, 221); display: block; height: 1px; margin: 0px 3px;"></div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; width: 105px; min-height: 15px;">Peso das Exportações</div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">2,15 Bilhões kg</div>         </div>         <div class="d3plus_tooltip_data_seperator" style="background-color: rgb(221, 221, 221); display: block; height: 1px; margin: 0px 3px;"></div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; width: 105px; min-height: 15px;">Exportações por peso</div>                                                    <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">$0,536 USD</div>         </div>         <div class="d3plus_tooltip_data_seperator" style="background-color: rgb(221, 221, 221); display: block; height: 1px; margin: 0px 3px;"></div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; width: 105px; min-height: 15px;">Importações por peso</div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">$0 USD</div>         </div>         <div class="d3plus_tooltip_data_title" style="font-size: 12px; font-weight: bold; padding: 6px 3px 0px;">Indicadores Estratégicos</div>         <div class="d3plus_tooltip_data_block" style="font-size: 12px; padding: 3px 6px; position: relative; color: rgb(0, 0, 0);">             <div class="d3plus_tooltip_data_name" style="display: inline-block; cursor: pointer; width: 105px; min-height: 15px;">Complexidade do Produto                 <div class="d3plus_tooltip_data_help" style="background-color: rgb(204, 204, 204); border-radius: 5px; color: rgb(255, 255, 255); cursor: pointer; display: inline-block; font-size: 8px; font-weight: bold; height: 10px; margin: 3px 0px 0px 3px; padding-right: 1px; text-align: center; width: 10px; vertical-align: top;">?</div>             </div>             <div class="d3plus_tooltip_data_value" style="display: block; position: absolute; text-align: right; top: 3px; right: 6px; width: 89px;">-1,748</div>             <div class="d3plus_tooltip_data_desc" style="color: rgb(136, 136, 136); overflow: hidden; transition: height 0.5s; width: 85%; height: 0px;">A Complexidade do Produto é uma medida de quão complexo é um produto, baseada no número de países que exportam o produto e quão diversificados são estes exportadores.</div>         </div>     </div>     <div class="d3plus_tooltip_footer" style="font-size: 10px; position: relative; text-align: center;">Dados Fornecidos por Secex</div> </div>');
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
		name: "Credito",
		icon: iconByName('Credito'),
		layer: L.geoJson(Credito, {pointToLayer: featureToMarker })
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
};