/**
 * @class Ext.ux.TitleComponent
 * @extends Ext.Component
 * Description
 */
Ext.define('Ext.ux.TitleComponent', {
    extend: 'Ext.Component',
    alias: 'widget.titlecomponent',

    title:'Title',
    height:50,
    baseCls:'ux-title-component',
    initComponent: function() {
        
        this.html = this.title;
		this.callParent();
    },
});