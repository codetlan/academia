/**
 * @class Cursos.view.courses.CoursesList
 * @extends Ext.view.View
 * This is the dataview to show courses
 */
Ext.define('Cursos.view.courses.CoursesList', {
	extend: 'Ext.view.View',
	alias: 'widget.courseslist',

	// requires:['Ext.ux.dataview.Animated'],	
	tpl: [
		'<tpl for=".">',
			'<div class="courses-list-item" >',
				'<div><img src="{image}"></div>',
				'<div class="courses-list-item-name">',
					'{title} <br/>',
					'<span> Fertilisation Orchids</span>',
				'</div>',
				'<div class="courses-list-item-social">',
					'<div><i class="icon-heart-empty"> </i>4000</div>',
					'<div><i class="icon-user"> </i>4000</div>',
					'<div><i class="icon-dollar"> </i>25 dls</div>',
				'</div>',
			'</div>',
		'</tpl>',
		'<div class="x-clear"></div>'
	].join(''),
	store: 'Courses',
	plugins: {
		xclass: 'Ext.ux.DataView.Animated',
		duration: 450,
		idProperty: '_id'
	},
	overItemCls: 'courses-list-item-over',
    itemSelector: 'div.courses-list-item',
	emptyText: 'No hay cursos disponibles'
});