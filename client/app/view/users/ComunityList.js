/**
 * @class Cursos.view.users.ComunityList
 * @extends Ext.view.View
 * This is the dataview for listing all the users in the academia
 */
Ext.define('Cursos.view.users.ComunityList', {
    extend: 'Ext.view.View',

    alias: 'widget.comunitylist',
    store: 'Users',
    cls: 'cursos-comunity-list',
    autoScroll: true,

    plugins: {
		xclass: 'Ext.ux.DataView.Animated',
		duration: 450,
		idProperty: '_id'
	},

    itemSelector: 'div.cursos-comunity-list-item',
    emptyText: 'No hay usuarios :(',

    tpl: [
        '<tpl for=".">',
        '<div class="cursos-comunity-list-item">',
        '<div class="cursos-comunity-list-item-avatar">',
        '<img src="{avatar}"/>',
        '</div>',
        '<div class="cursos-comunity-list-item-name">',
        '{name} <br />',
        '<span>{email}</span>',
        '</div>',
        '</div>',
        '</tpl>',
    ].join(''),

    initComponent: function() {
        var me = this;
        me.callParent();
    }
});
