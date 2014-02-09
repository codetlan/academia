/**
 * @class Cursos.model.Comment
 * @extends Ext.data.Model
 * This is the Comment item model
 */
Ext.define('Cursos.model.Comment', {
    extend: 'Ext.data.Model',
    fields: [
        { name:'_id', type:'string' },
        { name:'comment', type:'string' },
        { name:'image', type:'string' },
        { name:'userId', type:'string' },
        { name:'commentableType', type:'string' },
        { name:'commentableId', type:'string' },
        { name:'userName', type:'string' },
        { name:'avatar', type:'string' },
        { name:'createdAt', type:'date' },
        { name: 'updatedAt',	type: 'date'}
    ]
});