/**
 * @class Cursos.store.MenuItems
 * @extends Ext.data.Store
 * Store para listar los menus
 */
Ext.define('Cursos.store.MenuItems', {
	extend: 'Ext.data.Store',
	requires: [
		'Cursos.model.MenuItem'
	],
	model: 'Cursos.model.MenuItem',
	alias: 'store.menuitems',
	data: [{
		option: 'Mensajes',
		icon: 'icon-mail',
		badge: 8
	}, {
		option: 'Notificaciones',
		icon: 'icon-bell',
		badge: 9
	}, {
		option: 'Mis cursos',
		icon: 'icon-ticket',
		badge: 9
	}]
});