/**
 * @class Cursos.view.admin.courses.AgendaForm
 * @extends Ext.form.Panel
 * Este es el form para dar de alta el curso
 */
Ext.define('Cursos.view.admin.courses.AgendaForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.agendaform',

	defaultType: 'textfield',
	title:'Elemento',
	layout: 'anchor',
	defaults: {
		anchor: '100%',
		allowBlank: false,
		msgTarget: 'side',
		height:60,
		labelAlign:'top'
	},
	bodyPadding: 10,
	items: [{
		name: '_id',
		hidden: true,
		allowBlank: true
	},{
		name: 'order',
		// xtype:'numberfield',
		emptyText: 'Orden',
		fieldLabel: 'Orden'
	},{
		name: 'module',
		value:'Introdución',
		emptyText: 'Modulo',
		fieldLabel: 'Modulo'
	}, {
		name: 'submodule',
		value:'Instalación',
		emptyText: 'Lección',
		fieldLabel: 'Lección'
	},, {
		name: 'duration',
		value:'8:30',
		emptyText: 'duracion del la lección',
		fieldLabel: 'Duración'
	}, {
		name: 'video',
		hidden: true,
		itemId:'imageHiddenField'
	}, {
		xtype:'fieldset',
		height:200,
		title:'Video de la lección',
		layout:'fit',
		items:{
			xtype:'uploadcontainer',
			type:'video',
			inputName:'video'
		}
	}],
	buttons: [{
		text: 'Limpiar',
		handler:function (btn) {
			var form = btn.up('form');
			form.getForm().reset();
			form.down('#addOrUpAgendaItem').setText('Agregar');
			form.down('fieldset uploadcontainer').reset();
		}
	},{
        text: 'Agregar',
        formBind: true,
        itemId:'addOrUpAgendaItem'
    }]
});