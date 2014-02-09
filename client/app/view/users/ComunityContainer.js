/**
 * @class Cursos.view.users.ComunityContainer
 * @extends Ext.Container
 * This is the container of the comunity list
 */
Ext.define('Cursos.view.users.ComunityContainer', {
    extend: 'Ext.Container',
    alias: 'widget.comunitycontainer',

    toolbarText: '',
    cls: 'cursos-landing-panel-courseslist',

    initComponent: function() {
        var me = this;
        me.layout = 'card';
        me.items = me.buildItems(me.toolbarText);
        me.callParent();
    },

    buildItems: function(toolbarText) {
        return [{
            xtype: 'container',
            layout: 'border',
            items: [{
                xtype: 'comunitylist',
                region: 'center'
            }, {
                xtype: 'toolbar',
                border: false,
                region: 'north',
                height: 65,
                cls: 'cursos-landing-panel-search-toolbar',
                items: [toolbarText, '->', 'Buscar : ', {
                    xtype: 'searchtextfield',
                    emptyText:'nombre, email, apellido',
                    itemId: 'searchUserField',
                }]
            }]
        }, {
            xtype: 'usercontainer'
        }]
    }
});
