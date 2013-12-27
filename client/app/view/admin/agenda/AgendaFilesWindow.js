/**
 * @class Cursos.view.admin.agenda.AgendaFilesWindow
 * @extends Ext.Window
 * This is the window to add files
 */
Ext.define('Cursos.view.admin.agenda.AgendaFilesWindow', {
	extend: 'Ext.Window',

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
		title: 'Panel center',
		region: 'center',
		editorConfig: {
			mode: "text/javascript",
			theme: 'solarized dark',
			readOnly: false
		}
	}, {
		xtype: 'panel',
		title: 'Dataview',
		region: 'east',
		width: 400
	}],

	tbar: [
		'Nombre del archivo ', {
			xtype: 'textfield'
		},
		'Tipo de archivo ', {
			xtype: 'combo',
			store: 'FileTypes',
			queryMode: 'local',
			displayField: 'name',
			valueField: 'mode',
			listeners:{
				change:function (combo,value) {
					var editor =  combo.up('window').down('editorpanel').getEditor().getCodeEditor();
					editor.setOption('mode', value);
				}
			}

		}, '->', {
			text: 'Guardar',
			handler:function (btn) {
				var toolbar = btn.up('toolbar'),
					name, type;
				name = toolbar.down('textfield').getValue();
				type = toolbar.down('combo').getValue();

				btn.up('window').fireEvent('savefile');
			}
		}, {
			text: 'Editar'
		}, {
			text: 'Eliminar'
		}, '-', {
			text: 'Cancelar'
		}
	]
});