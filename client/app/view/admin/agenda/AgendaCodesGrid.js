/**
 * @class Cursos.view.admin.agenda.AgendaCodesGrid
 * @extends Ext.grid.Panel
 * This is the grid for showing the files
 */
Ext.define('Cursos.view.admin.agenda.AgendaCodesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.agendacodesgrid',

    title:'Codes',
    store:'Codes',
    columns: [{
		text: 'Nombre',
		dataIndex: 'name',
		flex: 2
	}, {
		text: 'Tipo',
		dataIndex: 'type',
		flex: 1
	}],
	emptyText:'No hay codigos :('
});
