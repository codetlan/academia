/**
 * @class Cursos.view.MenuPanel
 * @extends Ext.Panel
 * This panels contains the user menu
 */
Ext.define('Cursos.view.MenuPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.menupanel',

    requires: [
        // 'Cursos.view.MenuList'
    ],

    title: 'Menu',
    collapsible: true,
    region: 'west',
    frame:false,
    border:false,
    bodyCls:'cursos-menu-panel',
    items: [{
        xtype:'profilecontainer'
    }, {
        xtype: 'usermenulist'
    },{
        xtype:'socialmenulist',
        itemId:'social'
    }]
});