/**
 * @class Ext.ux.EditorPanel
 * @extends Ext.Panel
 * This is the panel for the code editing
 */
Ext.define('Ext.ux.EditorPanel', {
	extend: 'Ext.Panel',
	alias: 'widget.editorpanel',

	config: {
		editor: null
	},

	editorConfig: {
		mode: "text/javascript",
		theme: 'solarized dark',
		readOnly:true
	},

	initComponent: function() {
		var me = this,
			editor;

		editor = Ext.create('Ext.ux.form.CodeEditor', {
			editorConfig: me.editorConfig
		});
		editor.on('onContentChange', me.changeEditorSize, me);
		this.setEditor(editor);

		me.layout = 'fit';
		me.items = [editor];
		me.callParent();
		me.on('resize', me.changeEditorSize);
		
	},

	changeEditorSize: function() {
		var me = this,
			editor;

		if (editor = me.getEditor()) {
			editor.getCodeEditor().setSize(me.getWidth(), me.getHeight() - 0);
		}
	},
	getValue: function () {
		var me = this,
		editor = me.getEditor().getCodeEditor();
		return editor.getValue();
	},
	setValue: function (value) {
		var me = this,
		editor = me.getEditor().getCodeEditor();
	 	editor.setValue(value);
	},
	reset: function () {
		var me = this,
		editor = me.getEditor().getCodeEditor();
		editor.setValue('');		
	}
});