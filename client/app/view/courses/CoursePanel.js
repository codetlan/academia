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
        itemId:'agendaContainer',
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
        width: '55%',
        split:true,
        region: 'east',
        collapsible: true,
        plain: true,
        floatable: false,
        collapsed: true,
        title: 'Documentos de la leccion'
    }]

});
