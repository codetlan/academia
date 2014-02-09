/**
 * @class Cursos.view.payments.ShoppingCarFieldSet
 * @extends Ext.form.FieldSet
 * Description
 */
Ext.define('Cursos.view.payments.ShoppingCarFieldSet', {
	extend: 'Ext.form.FieldSet',
	alias: 'widget.shoppincarfieldset',

	title: '<b>Carrito de compras</b>',
	tpl: [
		'<div class="courses-shopping-car-field-set-tpl">',
			'<div class="courses-shopping-car-field-set-tpl-name">{name}</div>',
			'<div class="courses-shopping-car-field-set-tpl-price">${price} PESOS</div>',
		'</div>'
	].join(''),
	data: {
		name: 'Curso de ExtJS 4',
		price: '199'
	}
});