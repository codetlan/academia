/**
 * @class Cursos.view.courses.CommentComponent
 * @extends Ext.Container
 * El contenedor para comentar
 */
Ext.define('Cursos.view.courses.CommentComponent', {
    extend: 'Ext.Container',
    alias: 'widget.commentcomponent',

    style:{
        background:'#FFF'
    },

    initComponent: function() {
        var me = this;

        me.height = 150;       
        me.items = me.buildItems();
        me.callParent();
    },

    buildItems: function() {
        return [{
            xtype: 'textarea',
            title: 'Comentarios',            
            width:'99%',
            emptyText:'Agregar comentario al usuario',
            style:{
                'margin':'auto'
            }
        }, {
            xtype: 'toolbar',
            items:['->',
                // {
                //     text:'<i class="icon-code"></i>',
                //     tooltip:'Agregar fragmento de código'
                // },{
                //     text:'<i class="icon-upload"></i>',
                //     tooltip:'Subir imagen'
                // },
                {
                    text:'<i class="icon-comment"></i>Comentar',
                    tooltip:'Dejar comentario'
                }
            ]
        }]
    }
});
