Ext.define('Cursos.controller.Main', {
    extend: 'Ext.app.Controller',

    refs:[{
    	ref:'main',
    	selector:'app-main'
    }],


    init: function	() {
    	this.control({
    		'landingpanel #btnLoginWithGoogle':{
    			click: this.onLoginUser
    		},
    		'panel #btnLogout':{
    			click: this.onLogOutUser
    		},
            'landingpanel courseslist':{
                itemclick:this.onCourseItemClick
            }
    	});

        this.initStores();
    },

    onCourseItemClick:function () {
        Ext.Msg.alert('Error','No pudimos iniciar sesión intentalo de nuevo :)');
    },

    initStores: function () {
      var me = this;
      // setTimeout(function () {
            me.getStore('Courses').loadData(Courses.find().fetch());
      // },1000);
    },
    onLoginUser:function () {
    	var me = this;
    	Meteor.loginWithGoogle(function(err){
            if(err){
                Ext.Msg.alert('Error','No pudimos iniciar sesión intentalo de nuevo :)');
            } else {
            	me.getMain().layout.setActiveItem(1);
            }
        });
    },
    onLogOutUser:function () {
    	var me = this;
    	Meteor.logout(function(err){
            if(err){
                 Ext.Msg.alert('Error','No pudimos cerrar sesión intentalo de nuevo :)');
            } else {
               me.getMain().layout.setActiveItem(0);
            }
        })
    }
});
