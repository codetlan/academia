/**
 * @class Cursos.view.courses.CoursesList
 * @extends Ext.view.View
 * This is the dataview to show courses
 */
Ext.define('Cursos.view.courses.CoursesList', {
	extend: 'Ext.view.View',
	alias: 'widget.courseslist',	
	tpl: [
		'<tpl for=".">',
			'<div class="courses-list-item" >',
				'<div><img src="{image}"></div>',
				'<div class="courses-list-item-name">{title}</div>',
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
	overItemCls: 'courses-list-item-over',
    itemSelector: 'div.courses-list-item',
	emptyText: 'No hay cursos disponibles'
});