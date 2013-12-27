/**
 * @class Cursos.view.courses.CourseAgendaGrid
 * @extends extendsClass
 * Este grid muestra el contenido del curso
 */
Ext.define('Cursos.view.courses.CourseAgendaGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.courseagendagrid',


	title: 'Contenido',
	store: 'Agendas',

	initComponent: function(argument) {
		var me = this;
		me.columns = me.buildColumns();
		me.features = [{
			ftype: 'grouping'
		}];
		me.callParent();
	},
	buildColumns: function() {
		return [{
			text: 'Modulo',
			dataIndex: 'module',
			hidden: true
		}, {
			text: 'Orden',
			dataIndex: 'order',
			width: 100
		}, {
			text: '',
			dataIndex: 'submodule',
			flex: 1
		}, {
			text: 'Duración',
			dataIndex: 'duration',
			width: 120
		}];
	}
});