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
                    '<div class="cursos-comments-list-item-comment-zone-input" id="input-id-{_id}">',
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
        me.on('refresh', me.addEventsOnTpl);
    },
    addEventsOnTpl: function (view) {
        var record, id, times = 0;
        Ext.getBody().on('keypress', function(event, target){
            if(event.ENTER == event.getKey()){
                id = target.id.replace('input-id-','');
                record = view.getStore().findRecord('_id',id);
                view.fireEvent('commentoncomment',view, record,Ext.fly(target.id).down('input').dom.value);
                Ext.fly(target.id).down('input').dom.value = '';
                console.log(record);
                return false;
            }
        }, null, {
            delegate: '.cursos-comments-list-item-comment-zone-input'
        });
    }
});
