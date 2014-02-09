/**
 * @class Cursos.view.courses.CommentsContanier
 * @extends Ext.Container
 * El contenedor para mostrar los comentarios del usuario/curso/mamamam
 */
Ext.define('Cursos.view.courses.CommentsContanier', {
    extend: 'Ext.Container',
    alias: 'widget.commentscontanier',

    style: {
        background: '#FFF'
    },

    initComponent: function() {
        var me = this;
        me.layout = 'border';
        me.items = me.buildItems();
        me.callParent();
    },

    buildItems: function() {
        return [{
            xtype: 'commentslist',
            region: 'center'
        }, {
            xtype: 'container',
            region: 'north',
            height: 200,
            items: [{
                xtype: 'titlecomponent',
                title: 'Comentarios',
                region: 'north'
            }, {
                xtype: 'commentcomponent'
            }]
        }]
    }
});
