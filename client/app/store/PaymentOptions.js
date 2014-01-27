/**
 * @class Cursos.store.PaymentOptions
 * @extends Ext.data.Store
 * Store para listar las opciones de pago
 */
Ext.define('Cursos.store.PaymentOptions', {
	extend: 'Ext.data.Store',
	requires: [
		'Cursos.model.PaymentOption'
	],
	model: 'Cursos.model.PaymentOption',
	alias: 'store.paymentoptions'	
});