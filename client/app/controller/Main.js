Ext.define('Cursos.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'main',
        selector: 'app-main'
    }, {
        ref: 'coursePanel',
        selector: 'coursepanel'
    }],


    init: function() {
        var me = this;

        me.control({
            'landingpanel #btnLoginWithGoogle': {
                click: me.onLoginUser
            },
            'panel #btnLogout': {
                click: me.onLogOutUser
            },
            'landingpanel courseslist': {
                itemclick: me.onCourseItemClick
            }
        });

        me.initStores();

        me.waitForMeteor(function() {
            if (Meteor.userId()) {
                me.getMain().layout.setActiveItem(1);
            }
        });
    },

    onCourseItemClick: function(view, record, item, index, e) {
        var me = this,
            data = Agendas.find({
                courseId: record.get('_id')
            }).fetch();
        me.getCoursePanel().expand();
        me.getCoursePanel().setTitle(record.get('title'));
        me.getStore('Agendas').loadData(data);
    },

    initStores: function() {
        var me = this;
        me.waitForMeteor(function() {
            me.getStore('Courses').loadData(Courses.find({}).fetch());
        });

    },
    onLoginUser: function() {
        var me = this;
        Meteor.loginWithGoogle(function(err) {
            if (err) {
                Ext.Msg.alert('Error', 'No pudimos iniciar sesión intentalo de nuevo :)');
            } else {
                me.getMain().layout.setActiveItem(1);
            }
        });
    },
    onLogOutUser: function() {
        var me = this;
        Meteor.logout(function(err) {
            if (err) {
                // console.log(err);
                Ext.Msg.alert('Error', 'No pudimos cerrar sesión intentalo de nuevo :)');
            } else {
                me.getMain().layout.setActiveItem(0);
            }
        })
    },
    waitForMeteor: function(fn) {
        var body = Ext.getBody();
        body.mask('Actualizando ...');
        setTimeout(function() {
            fn();
            body.unmask();
        }, 500);
    }
});