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

    title: 'Armando Gonzalez',
    collapsible: true,
    region: 'west',
    frame:false,
    border:false,
    items: [{
        xtype: 'container',
        height:80,
        cls:'cursos-menu-user-container',
        tpl:[
            '<div class="cursos-user-profile">',
                '<div class="cursos-user-avatar"><img src="http://i36.tinypic.com/xbcnr7.jpg"/></div>',
                '<div class="cursos-user-data">',
                    '<div class="cursos-user-name">{name}</div>',
                    '<div class="cursos-user-info">My Account</div>',
                '</div>',
            '</div>',
        ].join(''),
        data:{
            name:'Armando'
        }
    }, {
        xtype: 'menulist'
    }],

});