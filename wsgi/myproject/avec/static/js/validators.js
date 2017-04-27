/**
 * 
 */
$(document).ready(function () {
	
	//window.url_config = 'http://avecdatadomain.com:8080';
	//window.url_config = 'http://www.avecdata.com';
	window.url_config = 'http://avecdata.ddns.net:8080';
	
	//--formulario do plano de assinatura profissional/corporativo
	$('#form-register').validate({
	    rules: {
	    	name: {
	            required: true
	        },
	        username: {
	            required: true,
	            remote:  {
	                url: window.url_config+'/check_username/',
	                dataType: 'json',
	                type: "post",
	                data: {
	                  username: function() {
	                    return $("#id_username").val();
	                  }
	                }
	            }
	        },
	        phone: {
	            required: true
	        },
	        password1: {
	        	minlength : 4,
	        	required: true,
	        },
	        password2: {
	        	minlength : 4,
	        	required: true,
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
	    	username: {
	    		required: "Campo Obrigatório!",
	    		remote: 'O Nome de Usuário <<strong>{0}</strong>> já está em uso no sistema!',
	    	},
	    	phone: "Campo Obrigatório!",
	    	email: {
	    		required: "Campo Obrigatório!",
	    		email: "Formato inválido!",
	    		remote: 'O E-mail <<strong>{0}</strong>> já está em uso no sistema!',
	    	},
	    	password1: {
	    		minlength: "Senha deve ter pelo menos 4 caracteres!",
	    		required: "A Senha não pode ser campo vazio!"
	    	},
	    	password2: {
	    		required: "A Senha não pode ser campo vazio!",
	    		minlength: "Senha deve ter pelo menos 4 caracteres!",
	    		equalTo: "As Senhas informadas devem ser iguais!"
	    	},
	    	plan_accept: '<span style="color: #a94442;"><i class="fa fa-arrow-up"></i> Marque esta caixa se deseja continuar</span>'
	    }
	});
	
	//--formulario de atualizacao dos dados do usuario
	$('#form-update-user').validate({
	    rules: {
	    	name: {
	            required: true
	        },
	        username: {
	            required: true,
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
	            email: true
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
	    	username: {
	    		required: "Campo Obrigatório!",
	    	},
	    	phone: "Campo Obrigatório!",
	    	email: {
	    		required: "Campo Obrigatório!",
	    		email: "Formato inválido!"
	    	},
	    	password1: {
	    		minlength: "Senha deve ter pelo menos 4 caracteres!",
	    	},
	    	password2: {
	    		minlength: "Senha deve ter pelo menos 4 caracteres!",
	    		equalTo: "As Senhas informadas devem ser iguais!"
	    	}
	    }
	});
});