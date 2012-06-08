Ext.define('Login.view.Login', {
	extend: 'Ext.form.Panel',
	xtype: 'loginpanel',

	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Password'
		],
		

	config: {
		title: 'Login',
		xtype: 'loginpanel',
		padding: 30,
		iconCls: 'home',
		url: 'login.php',

		items: [
			{
				xtype: 'fieldset',
				title: 'Login',
				instructions: '(Please enter your username and password)',
            layout: {
					type: 'vbox'
					},
				items: [
					{
						xtype: 'textfield',
						id: 'username',
						name: 'username',
						label: 'Username',
						placeHolder: 'username',
						allowBlank:false
					},
					{
					xtype: 'passwordfield',
					id: 'password',
					name: 'password',
					label: 'Password',
					placeHolder: 'password'
					}
				]
			},{
				xtype: 'button',
				text: 'Login',
				ui: 'confirm',
				action: 'submitLogin'
			}
		]
	}
});
