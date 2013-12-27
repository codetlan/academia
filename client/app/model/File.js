/**
 * @class Cursos.model.File
 * @extends Ext.data.Model
 * This is the file item model
 */
Ext.define('Cursos.model.File', {
    extend: 'Ext.data.Model',
    fields: [
        { name:'_id', type:'string' },
        { name:'name', type:'string' },
        { name:'type', type:'string' }
    ]
});