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
    border: false,
    bodyStyle: {
        backgroundColor: '#FFF',
        // 'background': '#3D444C url(../../../images/user-bg9.jpg)'
    },
    items: [{
        xtype: 'container',
        autoScroll: true,
        region: 'center',
        items: [{
            xtype: 'container',
            cls: 'cursos-landing-panel-poster-component',
            html: [
                '<div class="cursos-landing-panel-poster">',
                '<div class="cursos-landing-panel-poster-icon-top">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-top">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-top">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-top">',
                '<img src="images/node.png">',
                '</div>',

                '<div class="cursos-landing-panel-poster-icon-middle-push-left">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-middle">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-middle">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-middle">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-middle-push-right">',
                '<img src="images/node.png">',
                '</div>',

                '<div class="cursos-landing-panel-poster-icon-bottom">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-bottom">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-bottom">',
                '<img src="images/node.png">',
                '</div>',
                '<div class="cursos-landing-panel-poster-icon-bottom">',
                '<img src="images/node.png">',
                '</div>',
                '</div>',

                '<div class="cursos-landing-panel-poster-legend">¡Aprende las mejores tecnologías y crea tus propias aplicaciones!</div>'
            ].join('')
        }, {
            xtype: 'toolbar',
            border: false,
            cls: 'cursos-landing-panel-search-toolbar',
            items: ['CURSOS', '->', 'Buscar : ', {
                xtype: 'textfield',
                height:40,
                itemId:'searchCourseField',
                width:300
            }]
        }, {
            xtype: 'container',
            height:560,
            cls: 'cursos-landing-panel-courseslist',
            items: [{
                xtype: 'courseslist'
            }]
        }, {
            xtype: 'component',
            height:50,
            html:'<div class="cursos-landing-panel-footer-text"> © 2014 Codetlan </br> Todos los derechos reservados excepto que se indique lo contrario.</div>',
            cls: 'cursos-landing-panel-footer'
        }]
    }],

    dockedItems: [{
        xtype: 'container',
        dock: 'top',
        height: 70,
        cls: 'cursos-landing-panel-toolbar',
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'center'
        },
        defaults: {
            xtype: 'container'
        },
        items: [{
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            defaults: {
                xtype: 'component'
            },
            items: [{
                xtype: 'image',
                width: 64,
                src: 'images/logo.png',
                baseCls: 'cursos-landing-panel-toolbar-image-codetlan',
            }, {
                html: 'Academia Codetlan',
                baseCls: 'cursos-landing-panel-toolbar-text-codetlan',
            }]
        }, {
            flex: 1
        }, {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'component',
                flex: 2
            }, {
                xtype: 'button',
                flex: 1,
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
            }]
        }]
    }]
});