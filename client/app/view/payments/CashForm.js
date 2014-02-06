/**
 * @class Cursos.view.users.CashForm
 * @extends Ext.form.Panel
 * Este es el form para dar de alta los datos de facturación
 */
Ext.define('Cursos.view.users.CashForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.cashform',
    title: 'PAGO EN EFECTIVO',

    defaultType: 'textfield',
    layout: 'anchor',
    config: {
        paymentType: undefined,
        paymentObject: undefined,
        paymentTypeImage: undefined
    },
    fieldDefaults: {
        height: 40,
        msgTarget: 'side',
        anchor: '98%',
        margin: '5 0 10 0',
        labelWidth: 175
    },
    bodyPadding: 10,
    listeners: {
        afterrender: function(p) {
            p.getEl().mask();
        }
    },
    items: [{
        xtype: 'shoppincarfieldset'
    }, {
        xtype: 'fieldset',
        title: '<b>Datos para el pago</b>',
        defaultType: 'textfield',
        items: [{
            name: 'cashName',
            fieldLabel: 'Nombre',
            allowBlank: false
        }, {
            name: 'cashEmail',
            fieldLabel: 'Correo electrónico',
            flex: 1,
            allowBlank: false,
            vtype: 'email'
        }, {
            name: 'cashPhone',
            fieldLabel: 'Telefono celular',
            width: 200,
            emptyText: 'xxx-xxx-xxxx',
            maskRe: /[\d\-]/,
            regex: /^\d{3}-\d{3}-\d{4}$/,
            regexText: 'Debe de estar en el siguiente formato xxx-xxx-xxxx'
        }]
    }],
    buttons: [{
        text: 'Cancelar',
        scale: 'large',
        handler: function(btn) {
            var form = btn.up('form');
            form.getForm().reset();
        }
    }, {
        text: 'Pagar',
        scale: 'large',
        formBind: true,
        itemId: 'payOnPlace',
        handler: function(btn) {
            var form = btn.up('form'),
                obj = form.getForm().getValues(),
                product = form.getPaymentObject();

            obj = {
                "product_price": product.price,
                "product_name": product.name,
                "product_id": product.id,
                "image_url": product.image,
                "customer_name": obj.cashName,
                "customer_email": obj.cashEmail,
                "customer_phone": obj.cashPhone,
                "payment_type": form.getPaymentType(),
                "send_sms": !! obj.cashPhone
            };

            form.getEl().mask('Procesando ...');
            Meteor.call("compropagoCurl", obj, function(error, result) {
                var instructions;
                if (error) {
                    Ext.Msg.alert('Error', 'No pudimos procesar el la petición de pago, intentalo de nuevo ...');
                } else {
                    // console.log(result);
                    instructions = result.payment_instructions;
                    form.showPaymentConfirmation({
                        price: product.price,
                        image: product.image,
                        name: product.name,
                        paymentTypeImge: form.getPaymentTypeImage(),
                        expirationDate: Ext.util.Format.date(result['expiration_date'],'d/m/Y'),
                        step1: instructions['step_1'],
                        step2: instructions['step_2'],
                        step3: instructions['step_3']
                    });
                }
                form.getEl().unmask();
            });
        }
    }],
    showPaymentConfirmation: function(result) {
        var win = Ext.create('Ext.Window', {
            width: 700,
            height: 500,

            data: result,
            title: 'Comprobante',
            modal: true,
            resizable:false,

            tpl: [
               '<div class="compropago-payment-container">',
    				'<span><b>PRODUCTO/SERVICIO</b></span>',
    				'<div class="compropago-product-details">',    					
    					'<table  BORDER=0>',    
              				'<tbody><tr>',
								'<td >',
								'<img src="{image}">',
								'</td>',
								'<td >',
									'{name}',
								'</td>',
								'<td >',
									' ${price} pesos',
								'</td></tr>',
						'</tbody></table>',					
    				'</div>',
    				'<div class="compropago-payment-steps">',
    					'<span><b>Sigue los siguientes pasos:</b></span>',
    					'<ol>',
    						'<li>{step1}</li>',
    						'<li>{step2}</li>',
    						'<li>{step3}</li>',
    					'</ol>',
    					'<div class="compropago-payment-details">',
    						'<table  BORDER=0>',    
              					'<tbody><tr>',
									'<td >',
									'<img src="{paymentTypeImge}">',
									'</td>',									
									'<td >',
										'Orden válida hasta el:  <b>{expirationDate}</b>',
									'</td></tr>',
							'</tbody></table>',	   					
    					'</div>',
    				'</div>',    				
    				'<div class="compropago-payment-warnings">',
    					'<span><i class="icon-attention"></i><b>IMPORTANTE</b></span>',
    					'<ul>',
    						'<li>Para que el pago sea válido se debe pagar la cantidad exacta de ${price}.00 pesos</li>',
    						'<li>No es necesario dar número de referencia o notificarnos del pago.</li>',
    						'<li>Conserve su ticket para cualquier aclaración.</li>',
    					'</ul>',
    				'</div>',
    			'</div>'
            ].join(''),

            buttons: [{
                text: 'Imprimir',
                handler: function (btn) {
                	var component = btn.up('window');
					Ext.ux.plugin.Printer.print(component,true);
                }
            }]
        });

        win.show();
    }
});
