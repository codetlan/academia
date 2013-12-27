Ext.define('Cursos.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel',

    requires: [
        // 'Cursos.view.MenuPanel'
    ],
    layout: 'border',
    defaults: {
        padding: 3,
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
        xtype: 'editorpanel',
        title: 'code',
        collapsible: true,
        collapsed: true,
        width: 400,
        maxwidth: 800,
        region: 'east',
        editorConfig: {
            mode: "text/javascript",
            theme: 'solarized dark',
            readOnly: true
        }
    }]
});