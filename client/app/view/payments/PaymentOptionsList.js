/**
 * @class Cursos.view.payments.PaymentOptionsList
 * @extends Ext.view.View
 * This is the dataview to show the payment options
 */
Ext.define('Cursos.view.payments.PaymentOptionsList', {
	extend: 'Ext.view.View',
	alias: 'widget.paymentoptionslist',

	selectedItemCls: 'courses-payment-options-list-item-selected',
	itemSelector: 'div.courses-payment-options-list-item',
	// autoScroll:true,
	tpl: [
		'<div class="courses-payment-options-list-main">',
			'<tpl for=".">',
				'<div class="courses-payment-options-list-item" >',
					'<div class="courses-payment-options-list-item-image">',
						'<img src="{image}">',
					'</div>',
				'</div>',
			'</tpl>',
		'</div>'
	].join(''),

	initComponent: function() {
		var me = this;
		me.callParent();
	},

	store: {
		type: 'paymentoptions',
		data: [{
			image: 'images/payments/receipt-cc-btn.png',
			card: true,
			place:''
		},{
			image: 'images/payments/receipt-oxxo-btn.png',
			card: false,
			place:'Oxxo'
		}, {
			image: 'images/payments/receipt-seven-btn.png',
			card: false,
			place:'Seven Eleven'
		}, {
			image: 'images/payments/receipt-coppel-btn.png',
			card: false,
			place:'Coppel'
		}, {
			image: 'images/payments/receipt-elektra-btn.png',
			card: false,
			place:'Elektra'
		}, {
			image: 'images/payments/receipt-sams-btn.png',
			card: false,
			place:'Sams Club'
		},{
			image: 'images/payments/receipt-aurrera-btn.png',
			card: false,
			place:'Bodega Aurrera'
		}, {
			image: 'images/payments/receipt-walmart-btn.png',
			card: false,
			place:'Walmart'
		}]
	}
});