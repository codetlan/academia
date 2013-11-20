/**
 * @class Cursos.view.admin.CourseForm
 * @extends Ext.form.Panel
 * Este es el form para dar de alta el curso
 */
Ext.define('Cursos.view.admin.CourseForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.courseform',

	defaultType: 'textfield',
	title:'Curso',
	layout: 'anchor',
	defaults: {
		anchor: '100%',
		allowBlank: false,
		msgTarget: 'side',
		height:40,
	},
	bodyPadding: 10,
	items: [{
		name: 'title',
		value:'Rails',
		emptyText: 'nombre del curso'
	}, {
		xtype:'textareafield',
		name: 'description',
		value:'Este es un curso basico de rails',
		height:200,
		emptyText: 'Descripcion del curso'
	}, {
		name: 'image',
		value:'http://hacking-etico.com/wp-content/uploads/2012/04/ruby-on-rails.jpg',
		emptyText: 'imagen'
	}, {
		name: 'price',
		value:25,
		emptyText: 'Precio del curso'
	}, {
		name: 'user_id',
		value:'Armando',
		emptyText: 'Instructor'
	}],
	buttons: [{
        text: 'Agregar',
        formBind: true,
        itemId:'addOrUpdateCourseBtn'
    }]
});