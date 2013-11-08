/**
 * @class Cursos.store.Courses
 * @extends Ext.data.Store
 * Store para listar los cursos
 */
Ext.define('Cursos.store.Courses',{
    extend: 'Ext.data.Store',
    requires: [
       	'Cursos.model.Course'
    ],
    model:'Cursos.model.Course'
});