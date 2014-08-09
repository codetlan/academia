/**
 * @class Cursos.view.admin.agenda.AgendaCodesWindow
 * @extends Ext.Window
 * This is the window to add files
 */
Ext.define('Cursos.view.admin.agenda.AgendaCodesWindow', {
    extend: 'Ext.Window',
    alias: 'widget.agendacodeswindow',
    require: ['Cursos.store.FileTypes'],
    maximized: true,
    title: 'Archivos',
    layout: 'border',
    defaults: {
        padding: '0.5',
        split: true,
        autoScroll: true
    },
    items: [{
        xtype: 'editorpanel',
        region: 'center',
        editorConfig: {
            mode: "text/javascript",
            theme: 'solarized dark',
            readOnly: false
        }
    }, {
        xtype: 'agendacodesgrid',
        region: 'east',
        title: '',
        width: 400,
        listeners: {
            itemclick: function(grid, record) {
                var win = grid.up('agendacodeswindow'),
                    editorPanel = win.down('editorpanel');
                editorPanel.setValue(record.get('content'));
                editorPanel.getEditor().getCodeEditor().setOption('mode', record.get('type'));
                win.down('toolbar combo').setValue(record.get('type'));
                win.down('toolbar textfield').setValue(record.get('name'));
                win.down('toolbar #addOrUpdateCode').setText('Editar');
                win.down('toolbar #addOrUpdateCode').editar = record.get('_id');
            }
        }
    }],
    tbar: ['Nombre del archivo: ', {
        xtype: 'textfield'
    }, 'Tipo de archivo: ', {
        xtype: 'combo',
        store: 'FileTypes',
        queryMode: 'local',
        displayField: 'name',
        valueField: 'mode',
        listeners: {
            change: function(combo, value) {
                var editor = combo.up('window').down('editorpanel').getEditor().getCodeEditor();
                editor.setOption('mode', value);
                if (value === 'text/x-sh') {
                    editor.setOption('theme', 'xq-dark');
                } else {
                    editor.setOption('theme', 'solarized dark');
                }
            }
        }
    }, '->', {
        text: 'Agregar',
        itemId: 'addOrUpdateCode',
        scope: this,
        handler: function(btn) {
            var toolbar = btn.up('toolbar'),
                values, win = btn.up('agendacodeswindow'),
                editorPanel = win.down('editorpanel'),
                nameTextField = toolbar.down('textfield'),
                typeCombo = toolbar.down('combo');
            values = {
                '_id': btn.editar,
                name: nameTextField.getValue(),
                type: typeCombo.getValue(),
                content: editorPanel.getValue()
            };
            win.fireEvent('savecode', win, values);
            win.reset();
        }
    }, {
        text: 'Eliminar',
        handler: function(btn) {
            var win = btn.up('agendacodeswindow'),
                grid = win.down('agendacodesgrid'),
                record = grid.getSelectionModel().getSelection()[0];
            win.fireEvent('deletecode', win, record);
        }
    }, {
        text: 'Cancelar',
        handler: function(btn) {
            btn.up('agendacodeswindow').reset();
        }
    }],
    reset: function() {
        var toolbar = this.down('toolbar'),
            btn = toolbar.down('#addOrUpdateCode'),
            editorPanel = this.down('editorpanel'),
            nameTextField = toolbar.down('textfield'),
            typeCombo = toolbar.down('combo');
        btn.setText('Agregar');
        editorPanel.reset();
        nameTextField.reset();
        typeCombo.reset();
        btn.editar = undefined;
    }
});