/**
 * @class Cursos.view.users.ProfileContainer
 * @extends Ext.container.Container
 * This is the container of the logged user
 */
Ext.define('Cursos.view.users.ProfileContainer', {
	extend: 'Ext.container.Container',
	alias: 'widget.profilecontainer',
	height: 80,
	cls: 'cursos-menu-user-container',
	tpl: [
		'<div class="cursos-user-profile">',
		'<div class="cursos-user-avatar"><img src="http://i36.tinypic.com/xbcnr7.jpg"/></div>',
		'<div class="cursos-user-data">',
		'<div class="cursos-user-name">{name}</div>',
		'<div class="cursos-user-info">My Account</div>',
		'</div>',
		'</div>',
	].join(''),
	data: {
		name: 'Armando Gonzalez'
	}
});