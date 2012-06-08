Ext.define('Login.controller.Login', {
    extend: 'Ext.app.Controller',
    
	init: function(){	
		this.control({
			'button[action=submitLogin]': {	
				tap: 'submitLoginForm'
			}
		});
	},
	submitLoginForm: function() {
		console.log('Submitted Login Form');
	}
});
