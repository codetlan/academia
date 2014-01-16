/**
 * @class Cursos.model.Code
 * @extends Ext.data.Model
 * This is the code item model
 */
Ext.define('Cursos.model.Code', {
    extend: 'Ext.data.Model',
    fields: [
        { name:'_id', type:'string' },
        { name:'name', type:'string' },
        { name:'type', type:'string' },
        { name:'content', type:'string' },
        { name: 'agendaId',	type: 'string'
	}
    ]
});