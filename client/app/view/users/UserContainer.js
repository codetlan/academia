/**
 * @class Cursos.view.users.UserContainer
 * @extends Ext.Container
 * This is the container of the user details
 */
Ext.define('Cursos.view.users.UserContainer', {
    extend: 'Ext.Container',
    alias: 'widget.usercontainer',

    cls: 'cursos-user-container',
    tpl: [
        '<div class="cursos-user-container-main">',
        '<div class="cursos-user-container-avatar">',
        '<img src="{avatar}"/>',
        '</div>',
        '<div class="cursos-user-container-name">',
        '{name}',
        '</div>',
        '</div>'
    ].join(''),

    initComponent: function() {
        var me = this,
            user = Meteor.user() && Meteor.user().profile;

        me.data = user && {
            name: user.name,
            avatar: user.picture
        };

        me.callParent();
    },
    listeners: {
        render: function(container) {
            container.getEl().on('click', function() {
                container.fireEvent('click');
            });
        }
    },

    layout: 'border',

    items: [{
        xtype: 'container',
        region: 'west',
        width: 400,
        defaults: {
            xtype: 'component'
        },
        layout:{
        	type:'vbox',
        	align: 'stretch'
        },
        items: [{
            height: 300
        }, {
            xtype: 'badgeslist',
            flex:1
        }]
    }, {
        xtype: 'panel',
        region: 'center',
        title: 'Comentarios',
        bodyPadding: 5,
        layout:'fit',
        items:{
            xtype:'commentscontanier'
        }
    }],

    updateBadges: function (badges) {
        this.down('badgeslist').update(badges);
    }
});
