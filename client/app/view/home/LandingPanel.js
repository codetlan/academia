/**
 * @class Cursos.view.home.LandingPanel
 * @extends Ext.Panel
 * Este panel muestra el landing de la aplicacion
 */
Ext.define('Cursos.view.home.LandingPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.landingpanel',
    requires: [
        'Cursos.view.courses.CoursesList'
    ],
    
    layout: {
        type: 'border',
        // padding: 5
    },
    defaults: {
        split: true
    },
    items: [{
        xtype: 'container',
        autoScroll: true,
        region: 'center',
        cls: 'data-view-courses-list',
        items: [{
            xtype: 'courseslist'
        }]
    }, {
        xtype: 'coursepanel',
        collapsible: true,
        collapsed: true,
        region: 'east',
        width: 600
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        ui: 'footer',
        items: [
            // { xtype: 'component', flex: 1 },
            '->', {
                xtype: 'button',
                text: 'Entrar con Google',
                itemId: 'btnLoginWithGoogle'
            }
        ]
    }]
});