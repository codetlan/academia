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
	alias: 'store.menuitems'	
});