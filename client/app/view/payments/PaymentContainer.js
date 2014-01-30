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
		listeners: {
			itemclick: function(v, record) {
				if (record.get('card')) {
					v.up('paymentcontainer').down('creditcardform').getEl().unmask();
					v.up('paymentcontainer').down('cashform').getEl().mask();
				} else {
					v.up('paymentcontainer').down('cashform').getEl().unmask();
					v.up('paymentcontainer').down('creditcardform').getEl().mask();
				}
			}
		}
	}, {
		xtype: 'container',
		flex: 1,
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		defaults: {
			margin: '0 0 0 1'
		},
		items: [{
			xtype: 'creditcardform',
			flex: 2
		}, {
			xtype: 'cashform',
			flex: 2
		}]
	}],

	setShoppingCarData: function(obj) {
		this.down('creditcardform').down('shoppincarfieldset').update(obj);
		this.down('cashform').down('shoppincarfieldset').update(obj);
	},

	resetShoppingCarForms: function() {
		var obj = {	name: '', price: 0},
			creditCardForm = this.down('creditcardform'),
			cashForm = this.down('cashform');

		creditCardForm.down('shoppincarfieldset').update(obj);
		cashForm.down('shoppincarfieldset').update(obj);
		creditCardForm.getForm().reset();
		cashForm.getForm().reset();
		creditCardForm.getEl().mask();
		cashForm.getEl().mask();
	}
});