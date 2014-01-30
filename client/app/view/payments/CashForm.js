/**
 * @class Cursos.view.users.CashForm
 * @extends Ext.form.Panel
 * Este es el form para dar de alta los datos de facturación
 */
Ext.define('Cursos.view.users.CashForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.cashform',
	title: 'PAGO EN EFECTIVO',

	defaultType: 'textfield',
	layout: 'anchor',
	fieldDefaults: {
		height: 40,
		msgTarget: 'side',
		anchor: '98%',
		margin: '5 0 10 0',
		labelWidth: 175
	},
	bodyPadding: 10,
	listeners: {
		afterrender: function(p) {
			p.getEl().mask();
		}
	},
	items: [{
		xtype: 'shoppincarfieldset'
	}, {
		xtype: 'fieldset',
		title: '<b>Datos para el pago</b>',
		defaultType: 'textfield',
		items: [{
			name: 'cashName',
			fieldLabel: 'Nombre',
			allowBlank: false
		}, {
			name: 'cashEmail',
			fieldLabel: 'Correo electrónico',
			flex: 1,
			allowBlank: false,
			vtype: 'email'
		}, {
			fieldLabel: 'Telefono celular',
			name: 'phone',
			width: 200,
			emptyText: 'xxx-xxx-xxxx',
			maskRe: /[\d\-]/,
			regex: /^\d{3}-\d{3}-\d{4}$/,
			regexText: 'Debe de estar en el siguiente formato xxx-xxx-xxxx'
		}]
	}],
	buttons: [{
		text: 'Cancelar',
		scale: 'large',
		handler: function(btn) {
			var form = btn.up('form');
			form.getForm().reset();
		}
	}, {
		text: 'Imprimir Orden de Pago',
		scale: 'large',
		formBind: true
	}]
});