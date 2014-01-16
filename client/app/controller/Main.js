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
    }, {
        ref: 'mainPanel',
        selector: 'mainpanel'
    }],


    init: function() {
        var me = this;

        me.control({
            'landingpanel #btnLoginWithGoogle': {
                click: me.onLoginUser
            },'landingpanel #searchCourseField': {
                change: me.onSearchCourseFieldChange
            },
            'landingpanel courseslist': {
                // itemclick: me.onCourseItemClick
            },
            'mainpanel menupanel socialmenulist': {
                itemclick: me.onSocialMenuItemClick
            },
            'mainpanel menupanel usermenulist': {
                itemclick: me.onUserMenuItemClick
            },
            'profilecontainer': {
                click: me.onProfileContainerClick
            }
        });
        me.waitForMeteor(function() {
            if (Meteor.userId()) {
                me.getMain().layout.setActiveItem(1);
                if (Meteor.user().profile.role === "admin") {
                    // me.onShowAdmin();
                    var adminMenu = Ext.create('Cursos.model.MenuItem', {
                        option: 'Administración',
                        icon: 'icon-cog-alt'
                    });
                    me.getSocialMenulist().getStore().insert(0, adminMenu);
                }
            }
        });

    },

    onProfileContainerClick: function() {
        var me = this,
            layout = me.getMainPanel().down('#mainContainer').layout;
        layout.setActiveItem(2);
    },

    onSocialMenuItemClick: function(view, record, item, index, e) {
        var me = this,
            layout = me.getMainPanel().down('#mainContainer').layout;
        switch (record.get('icon')) {
            case 'icon-logout':
                me.onLogOutUser();
                break;
            case 'icon-video':
                layout.setActiveItem(3);
                break;
            case 'icon-users':
                layout.setActiveItem(4);
                break;
            case 'icon-cog-alt':
                me.onShowAdmin();
                break;
            default:
                break;
        }
    },
    onUserMenuItemClick: function(view, record, item, index, e) {
        var me = this,
            layout = me.getMainPanel().down('#mainContainer').layout;
        switch (record.get('icon')) {
            case 'icon-bell':
                layout.setActiveItem(1);
                break;
            case 'icon-ticket':
                layout.setActiveItem(0);
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
                // seteamos los datos del usuario
                var user = Meteor.user().profile;
        
               data = {
                    name: user.name,
                    avatar: user.picture
                };
                me.getMain().down('menupanel').down('profilecontainer').update(data);
                me.getMain().down('usercontainer').update(data);
                me.getMain().down('badgeslist').update(user.badges);
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
    },
    onSearchCourseFieldChange:function (textfiel, value) {
        var me = this,
            store  = me.getStore('Courses');

        //TODO: the suspend/resume hack can be removed once Filtering has been updated
        store.suspendEvents();
        store.clearFilter();
        store.resumeEvents();
        store.filter([{
            fn: function(record) {
                return record.get('description').indexOf(value) != -1 ;
            }
        }]);
        store.sort('title', 'ASC');
    }
});