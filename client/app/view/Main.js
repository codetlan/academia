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
    border: false,
    items: [{
            xtype: 'menupanel',
            width: 250
        }, {
            xtype: 'panel',
            region: 'center',
            itemId: 'mainContainer',
            autoScroll: true,
            layout: 'card',
            activeItem: 0,
            border: false,
            items: [{
                xtype: 'container',
                layout: 'card',
                itemId:'myCourseStand',
                items: [{
                    xtype: 'coursescontanier',
                    templateType:'myCourses',
                    toolbarText: 'Mis Cursos'
                },{
                    xtype:'coursepanel'
                }]
            }, {
                xtype: 'panel',
                title: 'Notificaciones'
            }, {
                xtype: 'usercontainer'
            }, {
                xtype: 'container',
                layout: 'card',
                itemId:'courseStand',
                activeItem:0,
                items: [{
                    xtype: 'coursescontanier',
                    toolbarText: 'Cursos Disponibles'
                },{
                    xtype:'paymentcontainer'
                }]
            }, {
                xtype: 'comunitycontainer'
            }]
        }        
    ]
});