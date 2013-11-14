/**
 * @class Cursos.view.MenuList
 * @extends Ext.view.View
 * Este es el menu de las opciones del usuario
 */
Ext.define('Cursos.view.MenuList', {
	extend: 'Ext.view.View',
	alias: 'widget.menulist',

	tpl: [
		'<tpl for=".">',
			'<div class="cursos-menu-item">',
				'<div><i class="{icon}"></i>{option}</div>',
				'<div class="badge"><span>{badge}</span></div>',
			'</div>',
		'</tpl>',
		'<div class="x-clear"></div>'
	].join(''),

	data: [{
		option: 'Email',
		icon: 'icon-mail',
		badge:8
	}, {
		option: 'Notificaiones',
		icon: 'icon-bell',
		badge:9
	}]
});