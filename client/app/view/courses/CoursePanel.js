/**
 * @class Cursos.view.courses.CoursePanel
 * @extends Ext.Panel
 * This is the panel of the course
 */
Ext.define('Cursos.view.courses.CoursePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.coursepanel',
    requires: [
        // 'Ext.ux.desktop.Video',
        'Cursos.view.courses.CourseAgendaGrid'
    ],
    //title: 'Course',    
    //autoScroll: true,
    layout: 'border',
    items: [{
        xtype: 'container',
        region: 'center',
        layout: 'border',
        items: [{
            xtype: 'video',
            region: 'center'
        }, {
            xtype: 'courseagendagrid',
            title: '',
            region: 'south',
            height: 300
        }]
    }, {
        xtype: 'tabpanel',
        width: 600,
        maxwidth: 800,
        region: 'east',
        collapsible: true,
        plain: true,
        //collapsed: true,
        title: 'Archivos Adjuntos',
        items: [{
            xtype: 'editorpanel',
            title:'Grid.js'
        },{
            xtype: 'editorpanel',
            title:'Panel.js'
        }]
    }]

});
