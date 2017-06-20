function iniciar2(){

document.getElementById("mapa3").remove();
document.getElementById("mapa4").remove();
document.getElementById("mapa2").src="https://unstats.un.org/sdgs/assets/img/logo/unsd/UNSustainableDevelopmentGoals_Brand-02.png";
document.getElementById("mapa2").setAttribute("style", "max-width: 20%; float: right;");


	var leftrow1 = document.createElement('div');		
	leftrow1.id = 'teste';
	leftrow1.className = 'row';
	leftrow1.style.display= 'block';
	leftrow1.style.height= '300px';
	document.getElementById("chartdiv1.4 By 2030, ensure that all men and women, in particular the poor...").appendChild(leftrow1);
	document.getElementById("chartdiv1.4 By 2030, ensure that all men and women, in particular the poor...").setAttribute("style", "display: block;");
	document.getElementById('teste').innerHTML = '<div class="content">            <header>                 <div class="SDGheader">                   <img src="http://datatopics.worldbank.org/sdgatlas/images/icons-sections/sdg-1.png" width="67" height="128" alt="" class="SDGheader">                   <h1>No poverty</h1>                   <h3 class="SDGsub">End poverty in all its forms everywhere</h3></div>                 </header>                 <p class="SDGheader">An estimated 766 million people, or 10.7 percent of the world’s population, lived in extreme poverty in 2013. In 2012 the extreme poverty rate stood at 12.4 percent globally, and over the year the number of people living below the international poverty line of $1.90 a day fell by 114 million. Goal 1 aims to end poverty in all its forms by 2030. It also seeks to ensure social protection for poor and vulnerable people, to increase access to basic services, and to support those harmed by conflict and climate-related disasters.</p>                               </div>';
		
};	