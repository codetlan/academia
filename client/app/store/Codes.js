/**
 * @class Cursos.store.Codes
 * @extends Ext.data.Store
 * Store para listar los codigos
 */
Ext.define('Cursos.store.Codes',{
    extend: 'Ext.data.Store',
    requires: [
       	'Cursos.model.Code'
    ],
    model:'Cursos.model.Code'
});