/**
 * @class Cursos.view.payments.PaymentContainer
 * @extends Ext.Container
 * This is the contianer to show the payment proccess
 */
Ext.define('Cursos.view.payments.PaymentContainer', {
	extend: 'Ext.Container',
	alias: 'widget.paymentcontainer',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	items: [{
		xtype: 'titlecomponent',
		title: 'Formas de pago'
	}, {
		xtype: 'paymentoptionslist',
		style:{
			'border': '1px solid #ccc'
		}
	}, {
		xtype: 'container',
		flex:1,
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		defaults:{
			margin:'0 0 0 1'
		},
		items: [{
			xtype: 'billingform',
			flex: 2
		}, {
			xtype: 'panel',
			title: 'Datos de la compra',
			flex: 1
		}]
	}]
});