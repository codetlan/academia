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
        ref: 'userMenulist',
        selector: 'menupanel usermenulist'
    }, {
        ref: 'mainPanel',
        selector: 'mainpanel'
    }, {
        ref: 'commentsList',
        selector: 'commentslist'
    }],

    onLaunch: function() {
        Conekta.setPublishableKey('key_MxhSqdJdtsmBy64o');
    },

    init: function() {
        var me = this;

        me.control({
            'landingpanel': {
                trylogin: me.onLoginUser
            },
            'landingpanel #searchCourseField': {
                change: me.onSearchCourseFieldChange
            },
            'landingpanel courseslist': {
                itemclick: me.onCourseItemClick
            },
            'mainpanel menupanel socialmenulist': {
                itemclick: me.onSocialMenuItemClick
            },
            'mainpanel menupanel usermenulist': {
                itemclick: me.onUserMenuItemClick
            },
            'mainpanel toolbar #searchCourseField': {
                change: me.onSearchCourseFieldChange
            },
            'mainpanel toolbar #searchUserField': {
                change: me.onSearchUserFieldChange
            },
            'profilecontainer': {
                click: me.onProfileContainerClick
            },
            'mainpanel coursescontanier courseslist': {
                itemclick: me.onCourseItemClick
            },
            'mainpanel #courseStand paymentcontainer creditcardform': {
                paymentsuccess: me.onPaymentSuccess
            },
            'mainpanel comunitycontainer comunitylist': {
                itemclick: me.onComunityListClick
            },
            'commentcomponent': {
                oncomment: me.onComment
            },
            'commentslist': {
                commentoncomment: me.addCommentOnComment
            }
        });
        me.waitForMeteor(function() {
            if (Meteor.userId()) {
                me.getMain().layout.setActiveItem(1);
                me.addAdminMenu();
            }
        });

    },

    onPaymentSuccess: function(form, win, paymentObject) {
        var me = this,
            mainContainer = me.getMainPanel().down('#mainContainer'),
            myCoursesContainer = mainContainer.down('#myCourseStand'),
            layout = mainContainer.layout,
            course;
        switch (paymentObject.type) {
            case 'Course':
                course = Courses.find({
                    _id: paymentObject.id
                }).fetch()[0];
                //agregamos el badge y curso al usuario
                Meteor.users.update({
                    _id: Meteor.user()._id
                }, {
                    $addToSet: {
                        "profile.courses": course,
                        "profile.badges": {
                            image: course.badge,
                            active: false,
                            legend: 'Poder legendario ' + course.title
                        }
                    }
                });
                myCoursesContainer.down('coursescontanier courseslist').getStore().loadData(Meteor.user().profile.courses);
                layout.setActiveItem(0);
                break;
        }
    },

    onProfileContainerClick: function() {
        var me = this,
            layout = me.getMainPanel().down('#mainContainer').layout,
            comments = Comments.find({
                commentableType: 'User',
                commentableId: Meteor.userId()
            }).fetch();

        me.getCommentsList().getStore().loadData(comments);
        layout.setActiveItem(2);
    },

    onSocialMenuItemClick: function(view, record, item, index, e) {
        var me = this,
            mainContainer = me.getMainPanel().down('#mainContainer'),
            layout = mainContainer.layout;

        me.getUserMenulist().getSelectionModel().deselectAll();
        switch (record.get('icon')) {
            case 'icon-logout':
                me.onLogOutUser();
                break;
            case 'icon-video':
                layout.setActiveItem(3);
                mainContainer.down('#courseStand').layout.setActiveItem(0);
                // mainContainer.down('#courseStand').down('paymentcontainer').resetShoppingCarForms();
                break;
            case 'icon-users':
                layout.setActiveItem(4);
                mainContainer.down('comunitycontainer').layout.setActiveItem(0);
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
            mainContainer = me.getMainPanel().down('#mainContainer'),
            layout = me.getMainPanel().down('#mainContainer').layout;

        me.getSocialMenulist().getSelectionModel().deselectAll();
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
            win,
            target = e.getTarget(),
            stand;

        // si se trata de tomar el curso
        if (target.className == "courses-list-item-name-get-course-btn") {
            alert('tomar curso');
            return;
        }
        // si se trata de comprar el curso
        if (target.className == "courses-list-item-name-buy-course-btn") {
            stand = view.up('#courseStand');
            stand.layout.setActiveItem(1);
            stand.down('paymentcontainer').setShoppingCarData({
                name: record.get('title'),
                price: record.get('price'),
                id: record.get('_id'),
                type: 'Course',
                image: record.get('image'),
                badge: record.get('badge'),
            });
            return;
        }
        win = Ext.create('Ext.Window', {
            width: 600,
            height: 500,
            layout: 'fit',
            title: record.get('title'),
            modal: true,
            draggable: false,
            items: {
                xtype: 'video',
                src: record.get('trailer')
            }
        }).show(item);
    },
    onLoginUser: function(btn) {
        var me = this;
        Meteor.loginWithGoogle(function(err) {
            if (err) {
                Ext.Msg.alert('Error', 'No pudimos iniciar sesión intentalo de nuevo :)');
            } else {
                window.location = '/';
            }
        });
    },
    addAdminMenu: function() {
        var me = this,
            store = me.getSocialMenulist().getStore();

        if (Meteor.user().profile.role === "admin" && !! store.find('icon', 'icon-cog-alt')) {
            var adminMenu = Ext.create('Cursos.model.MenuItem', {
                option: 'Administración',
                icon: 'icon-cog-alt'
            });
            store.insert(0, adminMenu);
        }
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
        body.mask('Cargando ...');
        setTimeout(function() {
            fn();
            body.unmask();
        }, 500);
    },
    onSearchCourseFieldChange: function(textfield, value) {
        var me = this,
            store = textfield.up('coursescontanier').down('courseslist').getStore();

        //TODO: the suspend/resume hack can be removed once Filtering has been updated
        store.suspendEvents();
        store.clearFilter();
        store.resumeEvents();
        store.filter([{
            fn: function(record) {
                var description = record.get('description').toLowerCase(),
                    title = record.get('title').toLowerCase(),
                    v = value.toLowerCase();
                return (description.indexOf(v) != -1) || (title.indexOf(v) != -1);
            }
        }]);
        store.sort('title', 'ASC');
    },
    onSearchUserFieldChange: function(textfield, value) {
        var me = this,
            store = textfield.up('comunitycontainer').down('comunitylist').getStore();

        //TODO: the suspend/resume hack can be removed once Filtering has been updated
        store.suspendEvents();
        store.clearFilter();
        store.resumeEvents();
        store.filter([{
            fn: function(record) {
                var name = record.get('name').toLowerCase(),
                    email = record.get('email').toLowerCase(),
                    v = value.toLowerCase();
                return (name.indexOf(v) != -1) || (email.indexOf(v) != -1);
            }
        }]);
        store.sort('name', 'ASC');
    },
    onComunityListClick: function(view, record, item, index, e) {
        var me = this,
            comunityContainer = view.up('comunitycontainer'),
            userContainer = comunityContainer.down('usercontainer'),
            commentsList = userContainer.down('commentslist'),
            userId = record.get('_id'),
            comments = Comments.find({
                commentableType: 'User',
                commentableId: userId
            }).fetch();

        commentsList.getStore().loadData(comments);
        userContainer.down('commentcomponent').setCommentableType('User');
        userContainer.down('commentcomponent').setCommentableId(userId);

        comunityContainer.layout.setActiveItem(1);
        userContainer.update(record.getData());
        userContainer.updateBadges(record.get('badges'));
    },

    onComment: function(cmp, value, commentableType, commentableId) {
        var values = {
                comment: value,
                image: '',
                userId: Meteor.userId(),
                commentableType: commentableType,
                commentableId: commentableId,
                userName: Meteor.user().profile.name,
                avatar: Meteor.user().profile.picture,
                createdAt: new Date(),
                updatedAt: new Date(),
                comments: []
            },
            commentsStore;

        values['_id'] = Comments.insert(values);
        
        //insertamos el comentario en la vista del usuario
        commentsStore = Ext.data.StoreManager.lookup('Comments');
        comment = Ext.create('Cursos.model.Comment', values);
        commentsStore.add(comment);
    },
    addCommentOnComment: function(view, record, value, target) {
        var el;

        if (!value) {
            return false;
        }

        Comments.update({
            _id: record.get('_id')
        }, {
            $addToSet: {
                "comments": {
                    comment: value,
                    userName: Meteor.user().profile.name,
                    avatar: Meteor.user().profile.picture,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            }
        });
        // agregramos el comentario al template
        el = [
            '<div class="cursos-comments-list-item-comments-comment">',
            '<img src="' + Meteor.user().profile.picture + '"/>',
            '<div>', '<b>' + Meteor.user().profile.name + '</b> <br />', value, '</div>',
            '</div>'
        ].join('');

        Ext.fly(target).up('div.cursos-comments-list-item').down('div.cursos-comments-list-item-comments').createChild(el);
    }
});
