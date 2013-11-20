/**
 * @class Cursos.view.admin.CoursesGrid
 * @extends Ext.grid.Panel
 * Este es el grid que muestra los cursos creados
 */
Ext.define('Cursos.view.admin.CoursesGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.coursesgrid',

	columns: [{
		text: 'Nombre',
		dataIndex: 'title',
		flex: 1
	}, {
		text: 'Descripción',
		dataIndex: 'description',
		flex: 2
	}, {
		text: 'Precio',
		dataIndex: 'price',
		width: 100
	}, {
		text: 'Imagen',
		dataIndex: 'image',
		width: 280,
		renderer: function(value) {
			return '<img src="' + value + '" alt=""  width="128px" />';
		}
	}],
	title: 'Cursos',
	store: 'Courses',
	selModel: new Ext.selection.RowModel({
		mode: "MULTI"
	}),
	emptyText:'No hay cursos :('
});