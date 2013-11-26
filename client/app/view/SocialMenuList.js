/**
 * @class Cursos.view.SocialMenuList
 * @extends Ext.view.View
 * Este es el menu de las opciones del usuario
 */
Ext.define('Cursos.view.SocialMenuList', {
	extend: 'Ext.view.View',
	alias: 'widget.socialmenulist',

	tpl: [
		'<div class="cursos-social-menu-title">Social</div>',
		'<tpl for=".">',
			'<div class="cursos-social-menu-item">',
				'<div><i class="{icon}"></i>{option}</div>',
			'</div>',
			'<div class="x-clear"></div>',
		'</tpl>'
	].join(''),
	itemSelector :'div.cursos-social-menu-item',
	// overCls:'cursos-social-menu-item-over',
	overItemCls:'cursos-social-menu-item-over',
	store: {
		type:'menuitems',
		data: [{
			option: 'Cursos',
			icon: 'icon-video'
		}, {
			option: 'Comunidad',
			icon: 'icon-users'
		}, {
			option: 'Información',
			icon: 'icon-info-circled'
		}, {
			option: 'Salir',
			icon: 'icon-logout'
		}]
	}
	
});