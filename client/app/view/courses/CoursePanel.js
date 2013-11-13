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
    title: 'Course',
    width: 600,
    autoScroll: true,
    items:[
    	{
            xtype:'video'
        },{
            xtype:'courseagendagrid',
            title:'Contenido'
        }
    ]

});