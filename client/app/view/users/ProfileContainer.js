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
		'<div class="cursos-user-avatar"><img src="{avatar}"/></div>',
		'<div class="cursos-user-data">',
		'<div class="cursos-user-name">{name}</div>',
		'<div class="cursos-user-info">Mi perfil</div>',
		'</div>',
		'</div>',
	].join(''),
	initComponent: function() {
		var me = this,
			user = Meteor.user() && Meteor.user().profile;
		
		me.data = user && {
			name: user.name,
			avatar: user.picture
		};
		me.callParent();
	},
	listeners: {
		render: function(container) {
			container.getEl().on('click', function() {
				container.fireEvent('click');
			});
		}
	}
});