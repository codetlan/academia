/**
 * @class Cursos.view.admin.AgendaWindow
 * @extends Ext.window.Window
 * Esta es la ventana del admin para la academiaqqqw
 */
Ext.define('Cursos.view.admin.AgendaWindow', {
	extend: 'Ext.window.Window',
	alias: 'widget.agendawindow',

	width: 900,
	height: 500,
	title: 'Temario del curso',
	layout: 'border',
	defaults: {
		padding: 1,
		autoScroll: true,
		title: ''
	},
	modal: true,

	tbar: ['->',{
		text:'Archivos',
		itemId:'addOrUpdateFiles'
	} ,{
		text: 'Eliminar',
		itemId: 'deleteFromAgendaBtn'
	},'-',{
		text:'Cerrar Ventana',
		handler:function (btn) {
			btn.up('agendawindow').close();
		}
	}],

	items: [{
		xtype: 'agendaform',
		region: 'west',
		width: 300,
		// collapsible: true,
		// maxwidth: 400
	}, {
		xtype: 'courseagendagrid',
		// title: 'Temario',
		region: 'center',
		forEditing: false
	}]
});