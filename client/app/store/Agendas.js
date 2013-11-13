/**
 * @class Cursos.store.Agendas
 * @extends Ext.data.Store
 * Store para listar el temario del curso
 */
Ext.define('Cursos.store.Agendas', {
	extend: 'Ext.data.Store',
	requires: [
		'Cursos.model.Agenda'
	],
	model: 'Cursos.model.Agenda',
	groupField: 'module'
});