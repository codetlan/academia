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
    afterRender: function() {
        var me = this;
        me.callParent();
        if (!me.getCodeEditor()) {
            var targetEl = me.getId() + "-inputEl",
                defaults = {
                    mode: "text/javascript",
                    theme: 'solarized dark',
                    indentUnit: 2,
                    tabMode: 'indent',
                    lineNumbers: true,
                    gutter: true,
                    fixedGutter: true,
                    smartIndent: true
                };
            defaults = Ext.apply(defaults, me.editorConfig);
            me.setCodeEditor(CodeMirror.fromTextArea(document.getElementById(targetEl), defaults));
        }
    },
    listenerrs: {
        resize: function(cpm) {
            var me = cpm;
            if (!me.getCodeEditor()) {
                var targetEl = me.getId() + "-inputEl",
                    defaults = {
                        //mode: "text/javascript",
                        mode: "javascript dark",
                        //theme: 'solarized dark',
                        theme: 'cobalt',
                        indentUnit: 2,
                        tabMode: 'indent',
                        lineNumbers: true,
                        gutter: true,
                        fixedGutter: true,
                        smartIndent: true,
                        value: 'asdaskldhj'
                    };
                Ext.apply(defaults, me.editorConfig);
                me.setCodeEditor(CodeMirror.fromTextArea(document.getElementById(targetEl), defaults));
                /*if(me.getCodeEditor()){
                    me.getCodeEditor().on('change', function(editor, e) {
                        me.fireEvent('onContentChange', me, editor);
                    });
                }*/
            }
        }
    }
});