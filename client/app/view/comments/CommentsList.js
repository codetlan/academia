/**
 * @class Cursos.view.users.CommentsList
 * @extends Ext.view.View
 * This is the dataview for listing all the users in the academia
 */
Ext.define('Cursos.view.users.CommentsList', {
    extend: 'Ext.view.View',

    alias: 'widget.commentslist',
    store: 'Comments',
    //cls: 'cursos-comments-list',
    autoScroll: true,

    itemSelector: 'div.cursos-comments-list-item',
    emptyText: 'No hay comentarios ',

    tpl: [
        '<tpl for=".">',
            '<div class="cursos-comments-list-item">',
                '<div class="cursos-comments-list-item-avatar">',
                    '<img src="{avatar}"/>',
                '</div>',
                '<div class="cursos-comments-list-item-name">',
                    '<h4>{userName}</h4>',
                    '<div>{comment}</div>',
                '</div>',
            '</div>',
            '<div class="cursos-comments-list-item-comments"></div>',
            '<div style="clear:both"></div>',
        '</tpl>',
    ].join(''),

    initComponent: function() {
        var me = this;
        me.callParent();
    }
});
