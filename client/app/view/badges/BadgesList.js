/**
 * @class Cursos.view.BadgesList
 * @extends Ext.view.View
 * This is the dataview to show badges
 */
Ext.define('Cursos.view.BadgesList', {
	extend: 'Ext.view.View',
	alias: 'widget.badgeslist',

	//autoScroll:true,
	cls: 'courses-badges-list-main',
	html:'<div class="courses-badges-list-title">Medallas</div>',
	tpl: [
		'<tpl for=".">',
			'<div class="courses-badges-list-item" data-qtip="{legend}" data-qwidth="200" data-qclass="courses-qtips">',
				'<tpl if="active">',
					'<div class="courses-badges-list-item-image">',
				'<tpl else>',
            		'<div class="courses-badges-list-item-image-inactive">',
        		'</tpl>',
					'<img src="{image}">',
				'</div>',
			'</div>',
		'</tpl>'
	].join(''),

	initComponent: function() {
		var me = this,
			user = Meteor.user() && Meteor.user().profile;		
		me.data = user && user.badges;		
		me.callParent();
	},

	data:[{
		image:'images/badges/Arrow.png',
		active:true
	},{
		image:'images/badges/Banner.png',
		active:false
	},{
		image:'images/badges/Book.png',
		active:true
	},{
		image:'images/badges/Box.png',
		active:true
	},{
		image:'images/badges/Bulb.png',
		active:true
	},{
		image:'images/badges/Camera.png',
		active:false
	},{
		image:'images/badges/Card.png',
		active:true
	},{
		image:'images/badges/Chat.png',
		active:true
	},{
		image:'images/badges/Compas.png',
		active:false
	},{
		image:'images/badges/Dude.png',
		active:true
	},{
		image:'images/badges/Earth.png',
		active:false
	},{
		image:'images/badges/Earth.png',
		active:true
	}]
});