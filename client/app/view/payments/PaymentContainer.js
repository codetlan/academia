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
				var creditcardForm = v.up('paymentcontainer').down('creditcardform'),
					cashForm = v.up('paymentcontainer').down('cashform'), place;
				if (record.get('card')) {
					creditcardForm.getEl().unmask();
					cashForm.getEl().mask();
				} else {
					place = record.get('place');
					cashForm.setPaymentType(place.toUpperCase().replace(' ','_'));
					cashForm.setPaymentTypeImage(record.get('image'));
					cashForm.getEl().unmask();
					cashForm.down('#payOnPlace').setText('Pagar en '+ place);
					creditcardForm.getEl().mask();
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
		var cashForm = this.down('cashform'),
			creditCardForm = this.down('creditcardform');
		cashForm.down('shoppincarfieldset').update(obj);
		creditCardForm.down('shoppincarfieldset').update(obj);

		cashForm.setPaymentObject(obj);
		creditCardForm.setPaymentObject(obj);
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