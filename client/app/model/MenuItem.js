/**
 * @class Cursos.model.MenuItem
 * @extends Ext.data.Model
 * This is the menu item model
 */
Ext.define('Cursos.model.MenuItem', {
    extend: 'Ext.data.Model',
    fields: [
        { name:'option', type:'string' },
        { name:'icon', type:'string' },
        { name:'badge', type:'string' }
    ]
});