Ext.define('Cursos.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel',

    requires: [
        // 'Cursos.view.MenuPanel'
    ],
    layout: 'border',
    defaults: {
        padding: 0.5,
        split: false
    },
    items: [{
        xtype: 'menupanel',
        width: 250
    }, {
        xtype: 'panel',
        region: 'center',
        itemId:'mainContainer',
        autoScroll: true,
        layout:'card',
        activeItem:2,
        items: [{
            xtype: 'courseslist',
            title:'Mis Cursos'
        },{
            xtype:'panel',
            title: 'Notificaciones'
        },{
            xtype:'panel',
            // title:'Perfil',
            layout:'fit',
            items:[{
                xtype:'usercontainer'
            }]
        },{
            xtype:'courseslist',
            title:'Cursos'
        },{
            xtype:'panel',
            title:'Comunidad'
        }]
    }
    // {
    //     xtype: 'editorpanel',
    //     title: 'code',
    //     collapsible: true,
    //     collapsed: true,
    //     width: 400,
    //     maxwidth: 800,
    //     region: 'east',
    //     editorConfig: {
    //         mode: "text/javascript",
    //         theme: 'solarized dark',
    //         readOnly: true
    //     }
    // }
    ]
});