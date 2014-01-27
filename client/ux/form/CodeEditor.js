/**
 * @class Ext.ux.form.CodeEditor
 * @extends Ext.form.field.TextArea
 * This is the texarea for code editing
 */
Ext.define('Ext.ux.form.CodeEditor', {
        extend: 'Ext.form.field.TextArea',
        xtype: 'codeeditor',

        region: 'center',
        layout: 'fit',
        margins: '0 4 0 0',
        autoHeight: true,

        config: {
                codeEditor: null,
        },

        editorConfig: null,

        initComponent: function() {
                this.addEvents('onContentChange');
                this.callParent();
        },

        listeners: {
                resize: function() {
                        var me = this;
                        if (!this.getCodeEditor()) {
                                var targetEl = this.getId() + "-inputEl",
                                        defaults = {
                                                mode: "text/javascript",
                                                theme: 'solarized dark',
                                                indentUnit: 4,
                                                tabMode: 'indent',
                                                lineNumbers: true,
                                                gutter: true,
                                                fixedGutter: true,
                                                smartIndent: true
                                        };
                                Ext.apply(defaults, me.editorConfig);
                                this.setCodeEditor(CodeMirror.fromTextArea(document.getElementById(targetEl), defaults));
                                this.getCodeEditor().on('change', function(editor, e) {
                                        me.fireEvent('onContentChange', me, editor);
                                });

                        }
                }
        }
});