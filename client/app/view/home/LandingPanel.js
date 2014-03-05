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
        type: 'border'
    },
    border: false,
    bodyStyle: {
        backgroundColor: '#FFF',
        //background: 'url(images/backgrounds/bg3.jpg)',
        background: 'url(images/backgrounds/bgg.png)',
        'background-size': '100% 100%',
        'background-repeat': 'no-repeat'
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
                            render: function(btn) {
                                btn.toolTip = Ext.create('Ext.tip.ToolTip', {
                                    target: btn.id,
                                    anchor: 'top',
                                    autoHide: false,
                                    width: 210,
                                    anchorOffset: 30, // center the anchor on the tooltip
                                    dismissDelay: 0,
                                    showDelay: 0,
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
                                        render: function(tp) {
                                            tp.getEl().on('mouseout', function(event) {
                                                var position = tp.getPosition(),
                                                    componentWidth = tp.getSize().width,
                                                    componentHeight = tp.getSize().height,
                                                    eventPosition = event.getXY();

                                                if (eventPosition[0] > (position[0] + componentWidth) || eventPosition[0] < position[0] ||
                                                    eventPosition[1] > (position[1] + componentHeight) || eventPosition[1] < position[1]) {
                                                    tp.hide();
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    }, {
                        xtype: 'component',
                        flex: 1
                    }]
                }]
            }, {
                xtype: 'container',
                html: [
                    '<div class="cursos-landing-panel-poster-legend">¡APRENDE las mejores tecnologías Y CREA tus propias aplicaciones!</div>',

                    '<div class="cursos-landing-panel-poster">',
                    '<div class="cursos-landing-panel-poster-icon-top">',
                    '<img src="images/tecnologies/php.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-top">',
                    '<img src="images/tecnologies/css3.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-top">',
                    '<img src="images/tecnologies/js.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-top">',
                    '<img src="images/tecnologies/java.png">',
                    '</div>',

                    '<div class="cursos-landing-panel-poster-icon-middle-push-left">',
                    '<img src="images/tecnologies/nodejs.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-middle">',
                    '<img src="images/tecnologies/rails.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-middle">',
                    '<img src="images/tecnologies/meteor.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-middle">',
                    '<img src="images/tecnologies/laravel2.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-middle-push-right">',
                    '<img src="images/tecnologies/sencha.png">',
                    '</div>',

                    '<div class="cursos-landing-panel-poster-icon-bottom">',
                    '<img src="images/tecnologies/github.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-bottom">',
                    '<img src="images/tecnologies/angular.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-bottom">',
                    '<img src="images/tecnologies/backbone.png">',
                    '</div>',
                    '<div class="cursos-landing-panel-poster-icon-bottom">',
                    '<img src="images/tecnologies/ember.png">',
                    '</div>',
                    '</div>',
                    '<div style="clear:both"></div>',
                    // '<div class="cursos-landing-panel-poster-gradient"> </div>'

                ].join('')
            }, {
                xtype: 'component',
                height: 80,
                html: [
                    '<div class="cursos-landing-panel-user-stories-user">',
                    '<div><img src="images/avatars/ricardo.jpeg" alt="" /></div>',
                    '<div class="cursos-landing-panel-user-stories-user-comment">',
                    '<p>"Aqui he aprendido Ext JS 4 y Sencha Touch 2 con MVC, muy recomendable!"</p>',
                    '<span>David</span>',
                    '</div>',
                    '</div>'
                ].join(''),
                cls: 'cursos-landing-panel-user-stories',
                listeners: {
                    render: function(cmp) {
                        var avatars = ['ricardo.jpeg', 'adri.jpeg', 'dave.jpg'],
                            comments = [
                                'Aqui he aprendido Ext JS 4 y Sencha Touch 2 con MVC, muy recomendable!',
                                'Esta plataforma es excelente, he aprendido a desarrollar aplicaciones yei!',
                                'Ya llevo 3 cursos, el curso de configuración de servidores es lo máximo'
                            ],
                            names = ['David', 'Adri', 'Joel'],
                            num = 0;

                        setInterval(function() {
                            num = Math.floor((Math.random() * 3));
                            cmp.update([
                                '<div class="cursos-landing-panel-user-stories-user">',
                                '<div><img src="images/avatars/' + avatars[num] + '" alt="" /></div>',
                                '<div class="cursos-landing-panel-user-stories-user-comment">',
                                '<p>"' + comments[num] + '"</p>',
                                '<span>' + names[num] + '</span>',
                                '</div>',
                                '</div>'
                            ].join(''));
                        }, 4000)

                    }
                }
            }, {
                xtype: 'container',
                style: {
                    background: '#FFF',
                },
                height: 350,
                items: {
                    xtype: 'component',
                    style: {
                        width: '860px',
                        margin: 'auto'
                    },
                    html: [
                        '<div class="cursos-landing-panel-description">',
                        '<div class="cursos-landing-panel-description-legend">',
                        '<h1>APRENDE LAS MEJORES TECNOLOGÍAS - EN ESPAÑOL</h1>',
                        '<p>En Academia Codetlan aprenderás las mejores tecnologías para desarrollar tus propias aplicaciones, con los mejores instructores.</p>',
                        '</div>',
                        '<div class="cursos-landing-panel-description-img"><img src="images/laptop2.png" alt="" /></div>',
                        '</div>'
                    ].join('')
                }
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
                    html:'Cursos Disponibles :'
                }, {
                    xtype: 'searchtextfield',
                    emptyText: 'Cursos disponibles'
                }, {
                    flex: 1
                }]
            }, {
                xtype: 'container',
                height: 470,
                layout: 'fit',
                cls: 'cursos-landing-panel-user-stories-pattern',
                items: {
                    xtype: 'courseslist',
                    cls: 'cursos-landing-panel-courses-list'
                }
            },

            // {
            //     xtype: 'coursescontanier',
            //     templateType: 'landingPage',
            //     toolbarText: 'Cursos',
            //     height: 470
            // },

            {
                xtype: 'component',
                height: 60,
                html: '<div class="cursos-landing-panel-footer-text"> © 2014 Codetlan </br> Todos los derechos reservados excepto que se indique lo contrario.</div>',
                cls: 'cursos-landing-panel-footer'
            }
        ]
    }]
});
