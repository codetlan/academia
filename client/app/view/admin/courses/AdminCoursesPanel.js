/**
 * @class Cursos.view.admin.courses.AdminCoursesPanel
 * @extends Ext.Panel
 * Este es panel para administar los cursos
 */
Ext.define('Cursos.view.admin.courses.AdminCoursesPanel', {
	extend: 'Ext.Panel',
	alias: 'widget.admincoursespanel',

	title: 'Cursos',

	tbar: [{
		text: 'Agregar Curso',
		scale:'medium',
		itemId:'addCourseBtn'
	},{
		text: 'Ver Temario',
		scale:'medium',
		itemId:'showAgendaOfCourseBtn'
	}, {
		text: 'Eliminar',
		scale:'medium',
		itemId:'deleteCourseBtn'
	}],

	layout: 'border',
	defaults:{
        padding:'0.5',
        split: true,
        autoScroll:true
    },

	items: [{
		xtype: 'courseform',
		region: 'east',
		width: 350,
		//collapsible:true,
		//collapsed:true,
		//maxwidth:400
	}, {
		xtype:'coursesgrid',
		region: 'center'
	}]
});