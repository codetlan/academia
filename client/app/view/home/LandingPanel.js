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
        // split: true
    },
    border: false,
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
        width: 690
    }, {
        xtype: 'container',
        region: 'west',
        autoScroll: true,
        cls: 'cursos-menu-panel',
        width: 250,
        items: [{
            xtype: 'coursecategorieslist'
        }]
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        cls: 'cursos-landing-panel-toolbar',
        items: [{
                xtype: 'button',
                baseCls: 'cursos-landing-panel-toolbar-button-codetlan',
                // text: '<img src="./images/logo2.png" alt="" />'
                text: 'Academia codetlan'
            },
            // { xtype: 'component', flex: 1 },
            '->', {
                xtype: 'button',
                baseCls: 'cursos-landing-panel-toolbar-button',
                text: '<i class="icon-login"></i>Entrar',
                menu: [{
                    text: 'Github',
                    iconCls: 'icon-github'
                }, {
                    text: 'Google',
                    itemId: 'btnLoginWithGoogle',
                    iconCls: 'icon-gplus'
                }, {
                    text: 'Facebook',
                    iconCls: 'icon-facebook'
                }, {
                    text: 'Twitter',
                    iconCls: 'icon-twitter'
                }]
            }
        ]
    }]
});