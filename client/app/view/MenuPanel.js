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
    //frame: false,
    //border: false,

    width: 200,
    maxwidth: 250,
    region: 'west',
    collapsible: true,

    bodyCls: 'cursos-menu-panel',
    items: [{
        xtype: 'profilecontainer'
    }, {
        xtype: 'usermenulist'
    }, {
        xtype: 'socialmenulist'
    }]
});
