/**
 * @class Ext.ux.plugin.Printer
 * @extends Object
 * This is the plugins for printing html
 */
Ext.define("Ext.ux.plugin.Printer", {
    statics: {
        print: function(component, printAutomatically) {
            var win = window.open('', 'Imprimir'),
                html, style;

            style = ['.compropago-payment-container{padding:10px;margin:2px;border:1px solid #ccc;border-radius:4px;display:block}.compropago-payment-container .compropago-product-details{display:block;border:1px solid #ccc;height:60px}.compropago-payment-container .compropago-product-details table{border:none;height:60px}.compropago-payment-container .compropago-product-details table td{width:200px;text-align:center;font-size:18px}.compropago-payment-container .compropago-product-details table td img{width:64px;margin:auto}',
					'.compropago-payment-container .compropago-payment-steps{padding:10px;clear:both;border:1px solid #ccc;border-radius:4px;display:block;height:210px;margin-bottom:5px;margin-top:2px}.compropago-payment-container .compropago-payment-steps ol li{margin-top:10px}',
					'.compropago-payment-container .compropago-payment-steps .compropago-payment-details{padding:10px;border-top:1px solid #ccc;margin-top:-10px}.compropago-payment-container .compropago-payment-steps .compropago-payment-details table{border:none;height:67px;margin-top:-10px}.compropago-payment-container .compropago-payment-steps .compropago-payment-details table td{width:300px;padding:15px 5px 5px 5px;text-align:center;font-size:18px}.compropago-payment-container .compropago-payment-steps .compropago-payment-details table td img{width:80px;margin:auto;margin-top:-5px}',
					'.compropago-payment-container .compropago-payment-steps .compropago-payment-details table td b{color:#0B80D0;font-size:16px}',
					'.compropago-payment-container .compropago-payment-warnings{padding:10px;border:1px solid #ccc;border-radius:4px;display:block;margin-top:5px}'
            ].join('');

            html = ['<html><head>',
                '<title> Imprimir </title>',
                '<style>'+style+'</style>',
                '</head><body>',
                	component.body.dom.innerHTML,
                '</body></html>'
            ].join('');

            win.document.write(html);

            if (printAutomatically) {
                win.print();
                win.close();
            }
        }

    }
});
