/**
 * @class Cursos.view.admin.AdminWindow
 * @extends Ext.window.Window
 * Esta es la ventana del admin para la academiaqqqw
 */
Ext.define('Cursos.view.admin.AdminWindow', {
	extend: 'Ext.window.Window',
	alias: 'widget.adminwindow',

	width: 600,
	height: 800,
	maximized: true,
	title: 'Administración',
	layout: 'fit',
	items: [{
		xtype: 'tabpanel',
		items: [{
			xtype:'admincoursespanel'
		}, {
			title: 'Usuarios'
		}, {
			title: 'Comentarios'
		}, {
			title: 'Pagos'
		}, {
			title: 'Tecnológias'
		}]
	}]
});