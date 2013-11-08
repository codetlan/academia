Ext.define('Cursos.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Cursos.view.home.LandingPanel',
        'Cursos.view.Main'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'card'
    },

    items: [{
        xtype:'landingpanel'
    },{
        xtype:'mainpanel'
    }]
});
