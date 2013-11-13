Ext.define('Cursos.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        ui: 'footer',
        items: [
            // { xtype: 'component', flex: 1 },
            '->',
            { 
                xtype: 'button',
                text: 'Salir',
        		itemId: 'btnLogout'
            }
        ]
    }]
});