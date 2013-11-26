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
	forEditing:false,

	initComponent: function(argument) {
		var me = this;
		if (me.forEditing) {
			me.editor = Ext.create('Ext.grid.plugin.RowEditing', {
				clicksToMoveEditor: 1,
				autoCancel: false
			});
			//editing
			me.plugins = [me.editor];
			me.columns = me.buildColumnsForEditing();
		} else {
			me.columns = me.buildColumns();
			me.features = [{
				ftype: 'grouping'
			}];
		}
		me.callParent();
	},
	buildColumnsForEditing: function() {
		return [{
			text: 'Modulo',
			dataIndex: 'module',
			flex: 1,
			editor:{
                    xtype: 'textfield',
                    value:'Introducción'
                }
		}, {
			text: 'Submodulo',
			dataIndex: 'submodule',
			flex: 1,
			editor:{
                    xtype: 'textfield',
                    value:'Instalación'
                }
		}, {
			text: 'Duración',
			dataIndex: 'duration',
			width: 120,
			editor:{
                    xtype: 'textfield',
                    value:'8 min'
                }
		}];
	},
	buildColumns: function() {
		return [{
			text: 'Modulo',
			dataIndex: 'module',
			hidden: true
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