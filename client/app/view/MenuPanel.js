/**
 * @class Cursos.view.MenuPanel
 * @extends Ext.Panel
 * This panels contains the user menu
 */
Ext.define('Cursos.view.MenuPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.menupanel',

    title: 'Menu',

    width: 250,
    region: 'west',
    collapsible: true,
    plain: true,
    floatable: false,


    bodyCls: 'cursos-menu-panel',
    items: [{
        xtype: 'profilecontainer'
    }, {
        xtype: 'usermenulist'
    }, {
        xtype: 'socialmenulist'
    }]
});
