Ext.define('Cursos.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel',

    requires: [
        // 'Cursos.view.MenuPanel'
    ],
    layout: 'border',
    defaults:{
        padding:3,
        split: true
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
        maxwidth:800,
        region:'east',
        // html:'<iframe width="100%" height="100%" src="http://jsfiddle.net/senchatips/mwRkj/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
        html:'<iframe width="100%" height="100%" src="http://www.senchafiddle.com/full/!n5Y0X/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>',
        html:'<iframe width="100%" height="100%" src="https://fiddle.sencha.com" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
    }]
});