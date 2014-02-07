/**
 * @class Cursos.view.courses.CoursesContanier
 * @extends Ext.Container
 * This is the container of the courses list and the search toolbar
 */
Ext.define('Cursos.view.courses.CoursesContanier', {
    extend: 'Ext.Container',
    alias: 'widget.coursescontanier',

    toolbarText: 'Cursos Disponibles',
    cls: 'cursos-landing-panel-courseslist',

    templateType: 'courseList',

    initComponent: function() {
        var me = this;
        me.layout = 'border';
        me.items = me.buildItems(me.toolbarText);
        me.callParent();
    },

    buildItems: function(toolbarText) {
        return [{
            xtype: 'courseslist',
            region: 'center',
            templateType: this.templateType
        }, {
            xtype: 'toolbar',
            border: false,
            region: 'north',
            height: 65,
            cls: 'cursos-landing-panel-search-toolbar',
            items: [toolbarText, '->', 'Buscar : ', {
                xtype: 'searchtextfield'
            }]
        }]
    }
});
