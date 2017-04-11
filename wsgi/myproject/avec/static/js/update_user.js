$(document).ready(function () {
	$('.avec-form-group').find('button').click(function(){
		$(this).parent().parent().find('input').removeAttr('readonly');
	});
	
	$('#btn-profile-change-password').click(function(){
		$('.bp-change-password').removeAttr('readonly');
	});
	
	$('#btn-change-password').click(function(){
			$.confirm({
			   icon: 'fa fa-key', 
			   title: 'Avec Data: Alterar Senha',
			   content: ''+
			   '<form action="" class="formName"><div style="width: 100%; text-align: center; "><div class="form-group">'
			   +'<span style="margin-bottom: 10px; width: 100%; display: inline-block; text-align: left;">Nome de Usuário: <span id="avec_username" style="font-weight: bold;">'+$(this).attr('user_pk')+'</span></span>'
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
			        cancel: function () {
			        	text: 'Cancelar'
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
});