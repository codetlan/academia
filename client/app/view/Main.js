Ext.define('Cursos.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel',

    layout: 'border',
    border: false,
    items: [{
            xtype: 'menupanel'
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