/**
 * @class Cursos.view.home.LandingPanel
 * @extends Ext.Panel
 * Este panel muestra el landing de la aplicacion
 */
Ext.define('Cursos.view.home.LandingPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.landingpanel',
    requires: ['Cursos.view.courses.CoursesList'],
    layout: {
        type: 'border'
    },
    border: false,
    autoScroll: true,
    bodyStyle: {
        backgroundColor: '#FFF',
        background: 'url(images/backgrounds/bgg.png)',
        'background-size': '100% 100%',
        'background-repeat': 'no-repeat',
        'overflow': 'hidden'
    },
    items: [{
        xtype: 'container',
        autoScroll: true,
        region: 'center',
        items: [{
            xtype: 'container',
            region: 'north',
            height: 95,
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
                    text: 'Empezar',
                    listeners: {
                        click: function(btn) {
                            console.log(arguments);
                            /*if(btn.toolTip){
                                 btn.toolTip.show();
                            }    */
                            Ext.create('Ext.Window', {
                                width: 250,
                                height: 110,
                                resizable: false,
                                border: false,
                                shadow: false,
                                baseCls: '',
                                modal: true,
                                closable: false,
                                draggable: false,
                                padding: 5,
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                defaults: {
                                    scale: 'large',
                                    margin: '5 0 0 0',
                                    handler: function(loginbtn) {
                                        btn.up('landingpanel').fireEvent('trylogin', loginbtn);
                                        btn.toolTip.hide();
                                    }
                                },
                                items: [{
                                    text: '<i class="icon-facebook"></i> Ingresa con  Facebook',
                                    xtype: 'button',
                                    action: 'facebook',
                                    baseCls: 'cursos-landing-panel-facebook-btn'
                                }, {
                                    text: '<i class="icon-gplus"></i> Ingresa con  Google',
                                    xtype: 'button',
                                    action: 'google',
                                    baseCls: 'cursos-landing-panel-google-btn'
                                }],
                                listeners: {
                                    show: function(win) {
                                        Ext.select('.x-mask').addListener('click', function() {
                                            win.close();
                                        });
                                    }
                                }
                            }).show();
                        },
                        
                    }
                }, {
                    xtype: 'component',
                    flex: 1
                }]
            }]
        }, {
            xtype: 'container',
            html: ['<div class="cursos-landing-panel-poster-legend">¡APRENDE las mejores tecnologías Y CREA tus propias aplicaciones!</div>', '<div class="cursos-landing-panel-poster">', '<div class="cursos-landing-panel-poster-icon-top">', '<img src="images/tecnologies/php.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-top">', '<img src="images/tecnologies/css3.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-top">', '<img src="images/tecnologies/js.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-top">', '<img src="images/tecnologies/java.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-middle-push-left">', '<img src="images/tecnologies/nodejs.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-middle">', '<img src="images/tecnologies/rails.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-middle">', '<img src="images/tecnologies/meteor.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-middle">', '<img src="images/tecnologies/laravel2.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-middle-push-right">', '<img src="images/tecnologies/sencha.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-bottom">', '<img src="images/tecnologies/github.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-bottom">', '<img src="images/tecnologies/angular.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-bottom">', '<img src="images/tecnologies/backbone.png">', '</div>', '<div class="cursos-landing-panel-poster-icon-bottom">', '<img src="images/tecnologies/ember.png">', '</div>', '</div>', '<div style="clear:both"></div>'].join('')
        }, {
            xtype: 'component',
            height: 80,
            html: ['<div class="cursos-landing-panel-user-stories-user">', '<div><img src="images/avatars/ricardo.jpeg" alt="" /></div>', '<div class="cursos-landing-panel-user-stories-user-comment">', '<p>"Aqui he aprendido Ext JS 4 y Sencha Touch 2 con MVC, muy recomendable!"</p>', '<span>David</span>', '</div>', '</div>'].join(''),
            cls: 'cursos-landing-panel-user-stories',
            listeners: {
                render: function(cmp) {
                    var avatars = ['ricardo.jpeg', 'adri.jpeg', 'dave.jpg'],
                        comments = ['Aqui he aprendido Ext JS 4 y Sencha Touch 2 con MVC, muy recomendable!', 'Esta plataforma es excelente, he aprendido a desarrollar aplicaciones yei!', 'Ya llevo 3 cursos, el curso de configuración de servidores es lo máximo'],
                        names = ['David', 'Adri', 'Joel'],
                        num = 0;
                    setInterval(function() {
                        num = Math.floor((Math.random() * 3));
                        cmp.update(['<div class="cursos-landing-panel-user-stories-user">', '<div><img src="images/avatars/' + avatars[num] + '" alt="" /></div>', '<div class="cursos-landing-panel-user-stories-user-comment">', '<p>"' + comments[num] + '"</p>', '<span>' + names[num] + '</span>', '</div>', '</div>'].join(''));
                    }, 4000)
                }
            }
        }, {
            xtype: 'container',
            style: {
                background: '#FFF',
            },
            height: 400,
            items: [{
                xtype: 'component',
                style: {
                    width: '860px',
                    margin: 'auto'
                },
                html: ['<div class="cursos-landing-panel-description">', '<div class="cursos-landing-panel-description-legend">', '<h1>APRENDE LAS MEJORES TECNOLOGÍAS - EN ESPAÑOL</h1>', '<p>En Academia Codetlan aprenderás las mejores tecnologías para desarrollar tus propias aplicaciones, con los mejores instructores.</p>', '</div>', '<div class="cursos-landing-panel-description-img"><img src="images/laptop2.png" alt="" /></div>', '</div>'].join('')
            }]
        }, {
            xtype: 'container',
            height: 80,
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            cls: 'cursos-landing-panel-user-stories-blue',
            defaults: {
                xtype: 'component'
            },
            items: [{
                flex: 1
            }, {
                flex: 1,
                html: '<p>Cursos Disponibles :</p>'
            }, {
                xtype: 'searchtextfield',
                emptyText: 'Escribe aquí el nombre del curso o el contenido'
            }, {
                flex: 1
            }]
        }, {
            xtype: 'container',
            height: 470,
            layout: 'fit',
            cls: 'cursos-landing-panel-user-stories-pattern',
            autoScroll: true,
            items: {
                xtype: 'courseslist',
                autoScroll: false,
                cls: 'cursos-landing-panel-courses-list'
            }
        }, {
            xtype: 'component',
            height: 60,
            html: ['<div>', '<div class="cursos-landing-panel-footer-social">', '<ul>', '<li><a href="https://www.facebook.com/Codetlan" target="_blank"><i class="icon-facebook"></i></a></li>', '<li><a href="https://twitter.com/Codetlan" target="_blank"><i class="icon-twitter"></i></a></li>', '<li><a href="https://github.com/codetlan" target="_blank"><i class="icon-github"></i></a></li>', '</ul>', '</div>', '<div class="cursos-landing-panel-footer-text"> Derechos reservados © 2014 Codetlan.</div>', '</div>'].join(''),
            cls: 'cursos-landing-panel-footer'
        }]
    }]
});