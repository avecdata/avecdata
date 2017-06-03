/**
 * 
 */

$(document).ready(function () {
	
	//window.url_config = 'http://192.168.0.105:8080';
	//window.url_config = 'http://www.avecdata.com';
	window.url_config = 'http://avecdata.ddns.net:8080';
	
	$('li.moment-data__item').mouseover(function() {
		var imgpath = $(this).find('a').attr('data-image');
		$('div.moment-data__graphic').find('figure').find('img').attr('src', imgpath);
	});
	
	$('#avec-search-input').focus(function(){
		//alert('teste');
		$(this).parent().css('border-color', '#40c0cf');
	});
	
	$('#avec-search-input').blur(function(){
		$(this).parent().css('border-color', '#fff');
	});
	
	try {
		$(".phone").mask("(99) 9?9999-9999");
	} catch (e) {
		console.log(e.message);
	}
	
	var csrftoken = getCookie('csrftoken');
	
	$.ajaxSetup({
	    beforeSend: function(xhr, settings) {
	        if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
	            xhr.setRequestHeader("X-CSRFToken", csrftoken);
	        }
	    }
	});
	
	$('#autocomplete').autocomplete({
		type:'post',
		dataType: 'json',
		params: {"param1": $(this).val() },
		minChars: 2,
		serviceUrl: window.url_config+'/themes_list/',
	    onSelect: function (ui) {
			if (ui.type=='subject' ){
				window.location.href = '/subject/'+ui.id;
			}		
			if (ui.type=='post' ){
				window.location.href = '/post/'+ui.id;
			}
			if (ui.type=='dashboard' ){
				window.location.href = '/'+ui.id;
			}
			if (ui.type=='report' ){				
				window.location.href = '/report/'+ui.id;
			}
			if (ui.type=='simpledashboard' ){				
				window.location.href = '/simpleDash_detail/'+ui.id;
			}			
			if (ui.type=='painel' ){				
				window.location.href = '/paineis_detail/'+ui.id;
			}			
	    }
	});
	
	$('.avec-form-group').find('button').click(function(){
		$(this).parent().parent().find('input').removeAttr('readonly');
	});
	
	$('#btn-profile-change-password').click(function(){
		$('.bp-change-password').removeAttr('readonly');
	});
	
	$('.btn-change-password').click(function(){
		$.confirm({
		   icon: 'fa fa-key', 
		   title: 'Avec Data: Alterar Senha',
		   content: ''+
		   '<form action="" class="formName"><div style="width: 100%; text-align: center; "><div class="form-group">'
		   +'<span style="margin-bottom: 10px; width: 100%; display: inline-block; text-align: left;">Nome de Usuário: <span id="avec_username" style="font-weight: bold;">'+$('#btn-change-password').attr('user_pk')+'</span></span>'
		   +'<input type="password" id="id_avec_password" class="form-control" name="avec_password" autocomplete="off" placeholder="Digite a Senha Atual" required="required" style="margin-bottom: 10px;">'
		   +'<input type="password" id="id_avec_password1" class="form-control" name="avec_password1" autocomplete="off" placeholder="Digite a Nova Senha" required="required" style="margin-bottom: 10px;">'
		   +'<input type="password" id="id_avec_password2" class="form-control" name="avec_password2" autocomplete="off" placeholder="Repita a Nova Senha" required="required">'
		   +'</div></div></form>',
		   buttons: {
			   formSubmit: {
		            text: 'Salvar',
		            btnClass: 'btn-blue',
		            action: function () {
		            	var loading = $.dialog({
		          		  title: '',
		          		  content: '<div style="width: 100%; text-align: center; font-size: 32px;"><i class="fa fa-spin fa-spinner" aria-hidden="true"></i><br><span style="font-size: 16px;">Processando...</span></div>',
		          		});
		          	
		            	var username = $('#avec_username').html();
    					var current_password = $('#id_avec_password').val();
    					var password1 = $('#id_avec_password1').val();
    					var password2 = $('#id_avec_password2').val();
		            	
		            	var csrftoken = getCookie('csrftoken');
		            	
		            	$.ajaxSetup({
		            	    beforeSend: function(xhr, settings) {
		            	        if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
		            	            xhr.setRequestHeader("X-CSRFToken", csrftoken);
		            	        }
		            	    }
		            	});
		            	
		            	$.ajax({
		            		   type:'post', 
		            		   dataType:'json',
		            		   url: window.url_config+'/conta/update-password/',
		            		   data: {"username": username, "current_password": current_password, "password1": password1, "password2": password2 },
		            		   timeout: 15000,
		            		   success: function(r) {
		            			   //alert(r.messagem);
		            			   if(r == true) {
		            				   $.alert({
		            					   	icon: 'fa fa-exclamation-triangle', 
		            					   	title: 'AVEC DATA',
			            				    content: '<div style="width: 100%; text-align: center; font-size: 16px;">Sua Senha foi Atualizada com Sucesso!</div>',
			            				});
		            			   } else {
		            				   $.dialog({
			            	    		    icon: 'fa fa-exclamation-triangle',
			            	    		    title: 'AVEC DATA: Alerta!',
			            				    content: 'Sua Senha Não foi Atualizada. Por favor, tente novamente.',
			            				});
		            			   }
		            			   loading.close();
		            		  },
		            	      error: function() {
		            	    	  loading.close();
		            	    	  $.dialog({
		            	    		    icon: 'fa fa-exclamation-triangle',
		            	    		    title: 'AVEC DATA: Alerta!',
		            				    content: 'Falha na Atualização de Senha',
		            				});
		            	      }
		            		});
		            }
		        },
		        cancel: {
		        	text: 'Cancelar',
		        	action: function () {}
		        },
		   },
		   onContentReady: function () {
		        // bind to events
		        var jc = this;
		        this.$content.find('form').on('submit', function (e) {
		            // if the user submits the form by pressing enter in the field.
		            e.preventDefault();
		            jc.$$formSubmit.trigger('click'); // reference the button and click it
		        });
		    }
		});
	});
	
	$('#btn-forgot-password').click(function(){
		$.confirm({
		   icon: 'fa fa-key', 
		   title: 'Avec Data: Recuperar Senha',
		   content: ''+
		   '<form action="" class="formName"><div style="width: 100%; text-align: center; "><div class="form-group">'
		   +'<span style="margin-bottom: 10px; width: 100%; display: inline-block; text-align: left;">Informe o e-mail cadastrado. Você receberá um link de recuperação de senha:</span>'
		   +'<input type="email" id="id_avec_email" class="form-control" name="avec_email" autocomplete="off" placeholder="E-mail" required="required" style="margin-bottom: 10px;">'
		   +'</div></div></form>',
		   buttons: {
			   formSubmit: {
		            text: 'Enviar',
		            btnClass: 'btn-blue',
		            action: function () {
		            	var loading = $.dialog({
		          		  title: '',
		          		  content: '<div style="width: 100%; text-align: center; font-size: 32px;"><i class="fa fa-spin fa-spinner" aria-hidden="true"></i><br><span style="font-size: 16px;">Processando...</span></div>',
		          		});
		          	
		            	var email = $('#id_avec_email').val();
		            	
		            	var csrftoken = getCookie('csrftoken');
		            	
		            	$.ajaxSetup({
		            	    beforeSend: function(xhr, settings) {
		            	        if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
		            	            xhr.setRequestHeader("X-CSRFToken", csrftoken);
		            	        }
		            	    }
		            	});
		            	
		            	$.ajax({
		            		   type:'post', 
		            		   dataType:'json',
		            		   url: window.url_config+'/conta/reload-password/',
		            		   data: {"email": email },
		            		   timeout: 15000,
		            		   success: function(r) {
		            			   //alert(r.messagem);
		            			   if(r == true) {
		            				   $.alert({
		            					   	icon: 'fa fa-exclamation-triangle', 
		            					   	title: 'AVEC DATA',
			            				    content: '<div style="width: 100%; text-align: center; font-size: 16px;">Uma mensagem foi enviada para seu E-mail</div>',
			            				});
		            			   } else {
		            				   $.dialog({
			            	    		    icon: 'fa fa-exclamation-triangle',
			            	    		    title: 'AVEC DATA: Alerta!',
			            				    content: 'Sua Solicitação não foi Processada. Por favor, tente novamente.',
			            				});
		            			   }
		            			   loading.close();
		            		  },
		            	      error: function() {
		            	    	  loading.close();
		            	    	  $.dialog({
		            	    		    icon: 'fa fa-exclamation-triangle',
		            	    		    title: 'AVEC DATA: Alerta!',
		            				    content: 'Falha no Envio de Senha',
		            				});
		            	      }
		            		});
		            }
		        },
		        cancel: {
		        	text: 'Cancelar',
		        	action: function () {}
		        },
		   },
		   onContentReady: function () {
		        // bind to events
		        var jc = this;
		        this.$content.find('form').on('submit', function (e) {
		            // if the user submits the form by pressing enter in the field.
		            e.preventDefault();
		            jc.$$formSubmit.trigger('click'); // reference the button and click it
		        });
		    }
		});
	});
	
	/*$.dialog({
	   icon: 'fa fa-clock-o', 
	   title: 'Avec Data',
	   content: '<div style="width: 100%; text-align: center; font-size: 32px;"><i class="fa fa-spin fa-spinner" aria-hidden="true"></i><br><span style="font-size: 14px;">Você está sendo redirecionado para a página do PayPal. Aguarde...</span></div>',
	});*/
});

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function sameOrigin(url) {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}

function onlyNumbers(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;

	var keychar = String.fromCharCode(key);
	//alert(keychar);
	var keycheck =  /^[0-9_\b]+$/;  

	if(!(key == 8 ||  key == 9 ||  key == 17 ||  key == 27  || key == 44 || key == 46  || key == 37 || key == 39 ) ) {
		if ( !keycheck.test(keychar) ) {       
	        theEvent.returnValue = false;//for IE
		   	if (theEvent.preventDefault) {
			   	theEvent.preventDefault();//Firefox
		   	}
		}
	}  
}