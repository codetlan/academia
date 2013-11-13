/**
 * @class Cursos.model.Agenda
 * @extends Ext.data.Model
 * This is the course model
 */
Ext.define('Cursos.model.Agenda', {
	extend: 'Ext.data.Model',	
	fields: [{
		name: 'module',
		type: 'string'
	}, {
		name: 'submodule',
		type: 'string'
	}, {
		name: 'duration',
		type: 'string'
	}]
});