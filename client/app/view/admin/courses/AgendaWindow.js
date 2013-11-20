/**
 * @class Cursos.view.admin.AgendaWindow
 * @extends Ext.window.Window
 * Esta es la ventana del admin para la academiaqqqw
 */
Ext.define('Cursos.view.admin.AgendaWindow', {
	extend: 'Ext.window.Window',
	alias: 'widget.agendawindow',

	width: 800,
	height: 500,
	title: 'Temario del curso',
	layout: 'fit',

	tbar: ['->',{
		text: 'Agregar'
	}, {
		text: 'Eliminar'
	}],

	items: [{
		xtype: 'courseagendagrid',
		title:''
	}]
});