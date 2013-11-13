/**
 * @class Cursos.view.courses.CourseAgendaGrid
 * @extends extendsClass
 * Este grid muestra el contenido del curso
 */
Ext.define('Cursos.view.courses.CourseAgendaGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.courseagendagrid',
	columns: [{
		text: 'Modulo',
		dataIndex: 'module',
		hidden:true
	}, {
		text: '',
		dataIndex: 'submodule',
		flex:1
	}, {
		text: 'Duración',
		dataIndex: 'duration',
		width:120
	} ],
	features: [{
		ftype: 'grouping'
	}],
	title: 'Contenido',
	store: 'Agendas'
});