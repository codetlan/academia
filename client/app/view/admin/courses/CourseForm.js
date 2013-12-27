/**
 * @class Cursos.view.admin.CourseForm
 * @extends Ext.form.Panel
 * Este es el form para dar de alta el curso
 */
Ext.define('Cursos.view.admin.CourseForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.courseform',

	defaultType: 'textfield',
	title: 'Curso',
	layout: 'anchor',
	defaults: {
		anchor: '100%',
		allowBlank: false,
		msgTarget: 'side',
		height: 40,
	},
	bodyPadding: 10,
	items: [{
		name: '_id',
		hidden: true,
		allowBlank: true
	},{
		name: 'title',
		value: 'Rails',
		emptyText: 'nombre del curso'
	}, {
		xtype: 'textareafield',
		name: 'description',
		value: 'Este es un curso basico de rails',
		height: 200,
		emptyText: 'Descripcion del curso'
	}, {
		name: 'price',
		value: 25,
		emptyText: 'Precio del curso'
	}, {
		name: 'user_id',
		value: 'Armando',
		emptyText: 'Instructor'
	}, {
		name: 'image',
		hidden: true,
		itemId: 'imageHiddenField'
	}, {
		xtype: 'fieldset',
		height: 200,
		title: 'Imagen del curso',
		layout: 'fit',
		items: {
			xtype: 'uploadcontainer',
			itemId: 'imageContanier'
		}
	}, {
		name: 'trailer',
		hidden: true,
		itemId: 'videoHiddenField'
	}, {
		xtype: 'fieldset',
		height: 200,
		title: 'Trailer',
		layout: 'fit',
		items: {
			xtype: 'uploadcontainer',
			type: 'video',
			itemId: 'videoContanier',
			inputName: 'video'
		}
	}],
	buttons: [{
		text: 'Limpiar',
		handler: function(btn) {
			var form = btn.up('form');
			form.getForm().reset();
			form.down('#addOrUpdateCourseBtn').setText('Agregar');
			form.down('fieldset #imageContanier').reset();
			form.down('fieldset #videoContanier').reset();
		}
	}, {
		text: 'Agregar',
		formBind: true,
		itemId: 'addOrUpdateCourseBtn'
	}]
});