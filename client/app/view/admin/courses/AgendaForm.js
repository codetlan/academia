/**
 * @class Cursos.view.admin.AgendaForm
 * @extends Ext.form.Panel
 * Este es el form para dar de alta el curso
 */
Ext.define('Cursos.view.admin.AgendaForm', {
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
		value:'http://hacking-etico.com/wp-content/uploads/2012/04/ruby-on-rails.jpg',
		emptyText: 'Video',
		fieldLabel: 'Video',
	}],
	buttons: [{
        text: 'Agregar',
        formBind: true,
        itemId:'addOrUpAgendaItem'
    }]
});