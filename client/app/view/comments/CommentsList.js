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
                '<div class="cursos-comments-list-item-comments">',
                    '<tpl for="comments">',
                        '<div class="cursos-comments-list-item-comments-comment">',
                            '<img src="{avatar}"/>',
                            '<div>',
                                '<b>{userName}</b> <br />',
                                '{comment}',
                            '</div>',
                        '</div>',
                        '<div style="clear:both"></div>',
                    '</tpl>',
                '</div>',
                '<div class="cursos-comments-list-item-comment-zone">',
                    '<div><img src="{avatar}"/></div>',
                    '<div class="cursos-comments-list-item-comment-zone-input">',
                        '<input type="text" placeholder="Escribe un comentario"/>',
                    '</div>',
                '</div>',
            '</div>',            
            '<div style="clear:both"></div>',
        '</tpl>',
    ].join(''),

    initComponent: function() {
        var me = this;
        me.callParent();
        me.on('itemclick', me.addEventsOnTpl);
    },
    addEventsOnTpl: function (view, record, item, index, e) {
        var me = this,
            value;
           Ext.fly(item).down('div.cursos-comments-list-item-comment-zone input').on('keypress', function(event, target){
                if(event.getKey() === 13){
                    value = target.value;
                    view.fireEvent('commentoncomment',view, record,value, target);
                    target.value = '';
                }
            });
    }
});
