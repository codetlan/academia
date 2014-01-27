/**
 * @class Ext.ux.form.SearchTextField
 * @extends Ext.form.field.Text
 * This is the texarea for code editing
 */
Ext.define('Ext.ux.form.SearchTextField', {
	extend: 'Ext.form.field.Text',
	xtype: 'searchtextfield',
	height: 40,
	itemId: 'searchCourseField',
	emptyText: 'palabra clave, tecnología, nombre, contenido',
	width: 300
});