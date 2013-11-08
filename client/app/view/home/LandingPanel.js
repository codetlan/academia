/**
 * @class Cursos.view.home.LandingPanel
 * @extends Ext.Panel
 * Description
 */
Ext.define('Cursos.view.home.LandingPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.landingpanel',
    requires:[
        'Cursos.view.courses.CoursesList'
    ],    
    
    tbar:['->',{
    	text:'Entrar con Google',
    	itemId:'btnLoginWithGoogle'
    }],
    layout:'fit',
    bodyCls:'data-view-courses-list',
    autoScroll:true,
    items:[{
    		xtype:'courseslist'
    	}
    ]
});