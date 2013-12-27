/**
 * @class Cursos.model.Agenda
 * @extends Ext.data.Model
 * This is the course model
 */
Ext.define('Cursos.model.Agenda', {
	extend: 'Ext.data.Model',
	fields: [{
		name: '_id',
		type: 'string'
	},{
		name: 'order',
		type: 'int'
	},{
		name: 'module',
		type: 'string'
	}, {
		name: 'submodule',
		type: 'string'
	}, {
		name: 'duration',
		type: 'string'
	}, {
		name: 'video',
		type: 'string'
	}, {
		name: 'courseId',
		type: 'string'
	}]
});