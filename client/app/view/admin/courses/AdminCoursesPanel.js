/**
 * @class Cursos.view.admin.courses.AdminCoursesPanel
 * @extends Ext.Panel
 * Este es panel para administar los cursos
 */
Ext.define('Cursos.view.admin.courses.AdminCoursesPanel', {
	extend: 'Ext.Panel',
	alias: 'widget.admincoursespanel',

	title: 'Cursos',

	tbar: ['->',{
		text: 'Ver Temario',
		itemId:'addAgendaToCourseBtn'
	}, {
		text: 'Eliminar',
		itemId:'deleteCourseBtn'
	}],

	layout: 'border',
	defaults:{
        padding:3,
        split: true,
        autoScroll:true
    },

	items: [{
		xtype: 'courseform',
		region: 'west',
		width: 400,
		collapsible:true,
		maxwidth:400
	}, {
		xtype:'coursesgrid',
		region: 'center'
	}]
});