/**
 * @class Cursos.store.Users
 * @extends Ext.data.Store
 * Store para listar a los usuarios
 */
Ext.define('Cursos.store.Users',{
    extend: 'Ext.data.Store',
    requires: [
       	'Cursos.model.User'
    ],
    model:'Cursos.model.User'
});