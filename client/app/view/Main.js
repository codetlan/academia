Ext.define('Cursos.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel',

    requires: [
        // 'Cursos.view.MenuPanel'
    ],
    layout: 'border',
    defaults:{
        padding:3,
        // split: true
    },
    items: [{
        xtype: 'menupanel',
        width: 250
    }, {
        xtype: 'panel',
        region: 'center',
        autoScroll: true,
        items: {
            xtype: 'coursepanel'
        }
    }, {
        xtype: 'panel',
        title: 'code',
        collapsible: true,
        collapsed: true,
        width: 400,
        region:'east',
        html:'<iframe width="100%" height="100%" src="http://jsfiddle.net/senchatips/mwRkj/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
    }]
});