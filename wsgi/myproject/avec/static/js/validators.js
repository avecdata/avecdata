/**
 * 
 */
$(document).ready(function () {
	
	//window.url_config = 'http://192.168.0.104:8080';
	window.url_config = 'http://www.avecdata.com';
	
	//--formulario do plano de assinatura profissional/corporativo
	$('#form-register').validate({
	    rules: {
	    	name: {
	            required: true
	        },
	        username: {
	            required: true
	        },
	        phone: {
	            required: true
	        },
	        password1: {
	        	minlength : 4,
	        },
	        password2: {
	        	minlength : 4,
                equalTo : '[name="password1"]'
	        },
	        email: {
	            required: true,
	            email: true,
	            remote:  {
	                url: window.url_config+'/check_email/',
	                dataType: 'json',
	                type: "post",
	                data: {
	                  username: function() {
	                    return $("#id_email").val();
	                  }
	                }
	            }
	        },
	        plan_accept: {
	        	required: true,
                maxlength: 2
	        }
	    },
	    highlight: function(element) {
	        $(element).closest('.col-md-6').addClass('has-error');
	    },
	    unhighlight: function(element) {
	        $(element).closest('.col-md-6').removeClass('has-error');
	    },
	    errorElement: 'span',
	    errorClass: 'help-block',
	    errorPlacement: function(error, element) {
	        if(element.parent('.cb-avec-content').length) {
	            error.insertAfter(element.parent());
	        } else {
	            error.insertAfter(element);
	        }
	    },
	    messages: {
	    	name: "Campo Obrigatório!",
	    	username: "Campo Obrigatório!",
	    	phone: "Campo Obrigatório!",
	    	email: {
	    		required: "Campo Obrigatório!",
	    		email: "Formato inválido!",
	    		remote: 'O E-mail <<strong>{0}</strong>> já está em uso no sistema!',
	    	},
	    	password1: "Senha deve ter pelo menos 4 caracteres!",
	    	password2: {
	    		minlength: "Senha deve ter pelo menos 4 caracteres!",
	    		equalTo: "As Senhas informadas devem ser iguais!"
	    	},
	    	plan_accept: '<span style="color: #a94442;"><i class="fa fa-arrow-up"></i> Marque esta caixa se deseja continuar</span>'
	    }
	});
});