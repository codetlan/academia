/**
 * @class Cursos.view.users.UserMenuList
 * @extends Ext.view.View
 * Este es el menu de las opciones del usuario
 */
Ext.define('Cursos.view.users.UserMenuList', {
	extend: 'Ext.view.View',
	alias: 'widget.usermenulist',
	// requires:['Cursos.store.MenuItems'],
	tpl: [
		'<tpl for=".">',
		'<div class="cursos-menu-item">',
		'<div><i class="{icon}"></i>{option}</div>',
		'<div class="badge"><span>{badge}</span></div>',
		'</div>',
		'</tpl>',
		'<div class="x-clear"></div>'
	].join(''),

	itemSelector: 'div.cursos-menu-item',
	// overCls: 'cursos-menu-item-over',
	overItemCls: 'cursos-menu-item-over',
	store: {
		type: 'menuitems',
		data: [
		// {
		// 	option: 'Mensajes',
		// 	icon: 'icon-mail',
		// 	badge: 8
		// },
		 {
			option: 'Notificaciones',
			icon: 'icon-bell',
			badge: 9
		}, {
			option: 'Mis cursos',
			icon: 'icon-ticket',
			badge: 9
		}]
	}
});