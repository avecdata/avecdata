$(function(){
  var currencies =  
[{value: 'Indicadores Sociais', id: 3 , type: 'subject'}, {value: 'Registro Civil', id: 4 , type: 'subject'}, {value: 'Emprego', id: 7 , type: 'subject'}, {value: 'Agricultura', id: 9 , type: 'subject'}, {value: 'Agua e Esgoto', id: 10 , type: 'subject'}, {value: 'Residuos Solidos', id: 11 , type: 'subject'}, {value: 'Automobilistica', id: 13 , type: 'subject'}, {value: 'Brinquedos', id: 14 , type: 'subject'}, {value: 'Tabaco', id: 15 , type: 'subject'}, {value: 'Bebidas Alcoolicas', id: 16 , type: 'subject'}, {value: 'Construcao', id: 17 , type: 'subject'}, {value: 'Esportes e Recreacao', id: 18 , type: 'subject'}, {value: 'Turismo', id: 20 , type: 'subject'}, {value: 'Pets', id: 21 , type: 'subject'}, {value: 'Pecuaria', id: 26 , type: 'subject'}, {value: 'Psicultura', id: 27 , type: 'subject'}, {value: 'Cultura', id: 29 , type: 'subject'}, {value: 'Populacao', id: 30 , type: 'subject'}, {value: 'Nivel de escolaridade ', id: 31 , type: 'subject'}, {value: 'Ensino medio', id: 32 , type: 'subject'}, {value: 'Ensino superior', id: 33 , type: 'subject'}, {value: 'Sistema penitenciario', id: 34 , type: 'subject'}, {value: 'Crimes', id: 35 , type: 'subject'}, {value: 'Despesas realizadas', id: 37 , type: 'subject'}, {value: 'Servicos de Saude', id: 38 , type: 'subject'}, {value: 'Morbidade hospitalar', id: 39 , type: 'subject'}, {value: 'Producao ambulatorial', id: 40 , type: 'subject'}, {value: 'Doencas transmitidas por vetores', id: 42 , type: 'subject'}, {value: 'Doencas imunopreviniveis', id: 43 , type: 'subject'}, {value: 'Doencas emergentes', id: 44 , type: 'subject'}, {value: 'Doencas negligenciadas', id: 45 , type: 'subject'}, {value: 'Doencas relacionadas ao saneamento inadequado', id: 46 , type: 'subject'}, {value: 'Doencas cronicas nao transmissiveis', id: 47 , type: 'subject'}, {value: 'Zoonoses', id: 49 , type: 'subject'}, {value: 'Fatores de risco e protecao', id: 50 , type: 'subject'}, {value: 'Saude suplementar', id: 53 , type: 'subject'}, {value: 'Programas e Projetos', id: 54 , type: 'subject'}, {value: 'Sangue e Hemoderivados', id: 55 , type: 'subject'}, {value: 'Sistema Nacional de Transplantes', id: 56 , type: 'subject'}, {value: 'Aleitamento Materno', id: 57 , type: 'subject'}, {value: 'DST/Aids e Hepatites Virais', id: 63 , type: 'subject'}, {value: 'Inovacao', id: 64 , type: 'subject'}, {value: 'Registros e Patentes', id: 65 , type: 'subject'}, {value: 'Investimentos', id: 66 , type: 'subject'}, {value: 'Aeroviario', id: 67 , type: 'subject'}, {value: 'Aquaviario', id: 68 , type: 'subject'}, {value: 'Ferroviario', id: 69 , type: 'subject'}, {value: 'Rodoviario', id: 70 , type: 'subject'}, {value: 'Energia', id: 71 , type: 'subject'}, {value: 'Florestal', id: 72 , type: 'subject'}, {value: 'Grupos Vulneraveis', id: 73 , type: 'subject'}, {value: 'Telefonia movel', id: 74 , type: 'subject'}, {value: 'Telefonia fixa', id: 75 , type: 'subject'}, {value: 'Banda Larga', id: 76 , type: 'subject'}, {value: 'TV por assinatura', id: 77 , type: 'subject'}, {value: 'Gastos publicos', id: 79 , type: 'subject'}, {value: 'Empresas publicas', id: 80 , type: 'subject'}, {value: 'Programas Sociais', id: 81 , type: 'subject'}, {value: 'Previdencia Social', id: 82 , type: 'subject'}, {value: 'Consumidores', id: 83 , type: 'subject'}, {value: 'Qualidade de vida', id: 84 , type: 'subject'}, {value: 'Esportes', id: 85 , type: 'subject'},
{ value:'Dengue', id : 6 , type: 'post'}, { value:'Doencas do Aparelho Circulatorio', id : 8 , type: 'post'}, { value:'Tomografos computadorizados', id : 11 , type: 'post'}, { value:'Letalidade violenta', id : 12 , type: 'post'}, { value:'Saude suplementar', id : 13 , type: 'post'}, { value:'Fumantes', id : 14 , type: 'post'}, { value:'Coqueluche', id : 15 , type: 'post'}, { value:'Difteria', id : 16 , type: 'post'}, { value:'Leptospirose', id : 17 , type: 'post'}, { value:'Neoplasias (Tumores)', id : 18 , type: 'post'}, { value:'Doacao de Leite Humano', id : 19 , type: 'post'}, { value:'Transplantes de orgaos', id : 20 , type: 'post'}, { value:'DSTs - AIDS', id : 21 , type: 'post'}, { value:'Raiva Humana', id : 22 , type: 'post'}, { value:'Hantavirose', id : 23 , type: 'post'}, { value:'Febre Maculosa', id : 24 , type: 'post'}, { value:'DSTs - Sifilis materna e pos nascimento', id : 25 , type: 'post'}, { value:'DSTs - Sifilis materna e diagnostico', id : 26 , type: 'post'}, { value:'Cerveja', id : 27 , type: 'post'}, { value:'Industria de Brinquedos', id : 28 , type: 'post'}, { value:'Taxa de analfabetismo', id : 29 , type: 'post'}, { value:'Mortes de policiais', id : 30 , type: 'post'}, { value:'Pesquisadores estrangeiros', id : 31 , type: 'post'}, { value:'Pesquisadores Nacionais por regiao', id : 32 , type: 'post'}, { value:'Anomalias Congenitas', id : 33 , type: 'post'}, { value:'Animais peconhentos', id : 34 , type: 'post'}, { value:'Leishmaniose Visceral', id : 35 , type: 'post'}, { value:'Leishmaniose Tegumentar Americana', id : 36 , type: 'post'}, { value:'Frota de Automoveis e Motocicletas', id : 37 , type: 'post'}, { value:'Importacoes brasileiras de vinhos e espumantes', id : 38 , type: 'post'}, { value:'Frota de veiculos por ano de fabricacao', id : 39 , type: 'post'}, { value:'Tabaco - Exportacoes Brasileiras', id : 40 , type: 'post'}, { value:'Tabaco - Faturamento em toneladas', id : 41 , type: 'post'}, { value:'Tabaco - Faturamento e distribuicao da renda bruta', id : 42 , type: 'post'}, { value:'Transporte rodoviario de produtos perigosos', id : 43 , type: 'post'}, { value:'Transporte rodoviario de cargas -  Viagens fiscalizadas e autos lavrados por excesso de peso', id : 44 , type: 'post'}, { value:'Pesquisa sobre Rodovias - Sinalizacao', id : 45 , type: 'post'}, { value:'Pesquisa sobre rodovias - Pavimento', id : 46 , type: 'post'}, { value:'Pesquisa sobre rodovias - Estado Geral', id : 47 , type: 'post'}, { value:'Pesquisa sobre Rodovias - Classificacao da Superficie do Pavimento', id : 48 , type: 'post'}, { value:'Roubo de Cargas - Rio de Janeiro e Sao Paulo', id : 49 , type: 'post'}, { value:'Acidentes rodoviarios em rodovias federais policiadas - Brasil', id : 50 , type: 'post'}, { value:'Malha rodoviaria - Brasil  ', id : 51 , type: 'post'}, { value:'Pesquisa sobre Rodovias - Classificacao da Superficie do Pavimento 2', id : 52 , type: 'post'}, { value:'Producao de Autoveiculos - 2016', id : 53 , type: 'post'}, { value:'Telefonia movel - Densidade e acessos', id : 54 , type: 'post'}, { value:'Telefonia fixa - Densidade e total de acessos ', id : 55}
]  
  
// setup autocomplete function pulling from currencies[] array
$('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (ui) {
		if (ui.type=='subject' ){
			window.location.href = '/subject/'+ui.id;
		}		
		if (ui.type=='post' ){
			window.location.href = '/post/'+ui.id;
		}		
    }
});
//Subject.objects.values_list('title','pk', '')



/*	$('#autocomplete').autocomplete({
		minLenght:3,
		source: '/solo_url/'
	});
  */
/*
    $( "#autocomplete" ).autocomplete({  
    minLength: 2,  
    source: currencies, 
    focus: function( event, ui ) { 
      $( "#autocomplete" ).val( ui.item.value );
      return false;
    },
    select: function( event, ui ) {
      $( "#autocomplete" ).val( ui.item.value );
    //  $( "#project-id" ).val( ui.item.value );
      // $( "#project-description" ).html( ui.item.desc );
      // $( "#project-origin" ).html( ui.item.origin );

      return false;
    }
  })*/

// .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
      //
//          return $( "<li>" )
//          .append( "<a>" + item.value + " " + item.description + "</a>" ) 
//          .appendTo( ul );
      
//  }

});