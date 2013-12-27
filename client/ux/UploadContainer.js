/**
 * @class Ext.ux.UploadContainer
 * @extends Ext.container.Container
 * This is container user for uploading images and videos
 */
Ext.define('Ext.ux.UploadContainer', {
	extend: 'Ext.container.Container',
	alias: 'widget.uploadcontainer',

	layout: {
		type: 'border'
	},
	type: 'image',

	initComponent: function() {
		var me = this;
		me.items = me.buildItems();
		me.callParent();

	},
	buildItems: function() {
		var me = this;

		return [{
			xtype: 'imagecomponent',
			region: 'center',
			style: {
				backgroundColor: '#FFF',
				backgroundImage: 'url(https://media-x-mix.netdna-ssl.com/media/images2/00_global/default-cover-image.png)'
			}
		}, {
			xtype: 'fileuploadfield',
			region: 'south',
			buttonOnly: true,
			anchor: '100%',
			buttonConfig: {
				height: 40,
				width: '100%',
				padding: 10,
				text: 'Subir'
			},
			listeners: {
				scope: this,
				change: me.updateImage
			}
		}]
	},
	updateImage: function(f, value, e) {
		var me = this,
			fileInput = Ext.get(f.id + "-button-fileInputEl");
		me.getEl().mask('subiendo ...');
		Ext.each(fileInput.dom.files, function(file) {
			var reader = new FileReader();
			var fileData = {
				name: file.name,
				size: file.size,
				type: file.type
			};
			reader.onload = function() {
				fileData.data = new Uint8Array(reader.result);
				Meteor.call("S3upload", fileData, function(error, result) {
					switch (me.type) {
						case 'video':
							me.setVideo(result);
							break;
						default:
							me.down('imagecomponent').setSrc(result);
							break;
					}
					me.fireEvent('loaded', me, result);
					me.getEl().unmask();
				});
			};
			reader.readAsArrayBuffer(file);
		}, this);
	},
	setVideo: function(src) {
		var me = this;
		me.remove(me.items.items[0].getItemId());
		me.insert(0, {
			xtype: 'video',
			src: src,
			region: 'center',
			autoplay: 0
		});
	},
	reset: function() {
		var me = this;
		switch (me.type) {
			case 'video':
				me.remove(me.items.items[0].getItemId());
				me.insert(0, {
					xtype: 'imagecomponent',
					region: 'center',
					style: {
						backgroundColor: '#FFF',
						backgroundImage: 'url(https://media-x-mix.netdna-ssl.com/media/images2/00_global/default-cover-image.png)'
					}
				});
				break;
			default:
				me.down('imagecomponent').setSrc('');
				break;
		}
	}
});