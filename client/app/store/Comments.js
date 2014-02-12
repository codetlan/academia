/**
 * @class Cursos.store.Comments
 * @extends Ext.data.Store
 * Store para listar los comentarios
 */
Ext.define('Cursos.store.Comments', {
    extend: 'Ext.data.Store',
    requires: [
        'Cursos.model.Comment'
    ],
    model: 'Cursos.model.Comment',
    sortOnLoad: true,
    sorters: {
        property: 'createdAt',
        direction: 'DESC'
    }
});
