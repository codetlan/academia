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
        return [ {
            xtype: 'container',
            region: 'north',
            height: 120,
            items: [ {
                xtype: 'commentcomponent'
            }]
        },{
            xtype: 'commentslist',
            region: 'center'
        }]
    }
});
