Ext.define('Cursos.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'main',
        selector: 'app-main'
    }, {
        ref: 'coursePanel',
        selector: 'coursepanel'
    }, {
        ref: 'socialMenulist',
        selector: 'menupanel socialmenulist'
    }],


    init: function() {
        var me = this;

        me.control({
            'landingpanel #btnLoginWithGoogle': {
                click: me.onLoginUser
            },
            'landingpanel courseslist': {
                itemclick: me.onCourseItemClick
            },
            'mainpanel menupanel socialmenulist': {
                itemclick: me.onSocialMenuItemClick
            },
            'mainpanel menupanel usermenulist': {
                itemclick: me.onUserMenuItemClick
            }
        });
        me.waitForMeteor(function() {
            if (Meteor.userId()) {
                me.getMain().layout.setActiveItem(1);
                if (Meteor.user().profile.role === "admin") {
                    me.onShowAdmin();
                    var adminMenu = Ext.create('Cursos.model.MenuItem', {
                        option: 'Administración',
                        icon: 'icon-cog-alt'
                    });
                    me.getSocialMenulist().getStore().insert(0, adminMenu);
                }
            }
        });

    },

    onSocialMenuItemClick: function(view, record, item, index, e) {
        var me = this;
        switch (record.get('icon')) {
            case 'icon-logout':
                me.onLogOutUser();
                break;
            case 'icon-cog-alt':
                me.onShowAdmin();
                break;
            default:
                break;
        }
    },
    onUserMenuItemClick: function(view, record, item, index, e) {
        var me = this;
        switch (record.get('icon')) {
            case 'icon-cog-alt':
                me.onShowAdmin();
                break;
            default:
                break;
        }
    },
    onShowAdmin: function() {
        var win = Ext.create('Cursos.view.admin.AdminWindow');
        win.show();
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
                Ext.Msg.alert('Error', 'No pudimos cerrar sesión intentalo de nuevo :)');
            } else {
                me.getMain().layout.setActiveItem(0);
            }
        });
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