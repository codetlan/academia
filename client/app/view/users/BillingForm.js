/**
 * @class Cursos.view.users.BillingForm
 * @extends Ext.form.Panel
 * Este es el form para dar de alta los datos de facturación
 */
Ext.define('Cursos.view.users.BillingForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.billingform',

	defaultType: 'textfield',
	title:'Datos de Facturación',
	// layout: 'anchor',
	defaults: {
		// anchor: '100%',
		allowBlank: false,
		msgTarget: 'side',
		height:50,
		labelAlign:'top'
	},
	bodyPadding: 10,
	items: [{
		name: 'name',
		emptyText: 'Nombres',
		fieldLabel: 'Nombres'
	},{
		name: 'last_name',
		emptyText: 'Modulo',
		fieldLabel: 'Apellidos'
	}, {
		name: 'email',
		value:'',
		emptyText: 'Email',
		fieldLabel: 'Email'
	}],
	buttons: [{
		text: 'Limpiar',
		handler:function (btn) {
			
		}
	},{
        text: 'Agregar',
        formBind: true
    }]
});