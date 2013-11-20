/**
 * @class Cursos.view.CourseCategoriesList
 * @extends Ext.view.View
 * Este es el menu que muestra las categorias de los cursos para ser filtradas
 */
Ext.define('Cursos.view.CourseCategoriesList', {
	extend: 'Ext.view.View',
	alias: 'widget.coursecategorieslist',

	tpl: [
		// '<div class="cursos-social-menu-title">Cursos</div>',
		'<tpl for=".">',
			'<div class="cursos-courses-list-menu-item">',
				'<div><i class="{icon}"></i>{option}</div>',
			'</div>',
			'<div class="x-clear"></div>',
		'</tpl>'
	].join(''),

	itemSelector :'div.cursos-courses-list-menu-item',
	// overCls:'cursos-social-menu-item-over',
	overItemCls:'cursos-courses-list-menu-item-over',
	store: {
		type:'menuitems',
		data: [{
			option: 'Sencha Touch',
			icon: 'icon-fire'
		}, {
			option: 'Sencha ExtJS',
			icon: 'icon-fire'
		}, {
			option: 'Ruby on Rails',
			icon: 'icon-fire'
		}, {
			option: 'Laravel',
			icon: 'icon-fire'
		}, {
			option: 'Node JS',
			icon: 'icon-fire'
		}, {
			option: 'Meteor JS',
			icon: 'icon-fire'
		}, {
			option: 'HTML5',
			icon: 'icon-fire'
		}, {
			option: 'CSS3',
			icon: 'icon-fire'
		}]
	}
	
});