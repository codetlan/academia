/**
 * @class Cursos.model.Course
 * @extends Ext.data.Model
 * This is the course model
 */
Ext.define('Cursos.model.Course', {
   extend: 'Ext.data.Model',
   fields:[{
         name:'title',
         type:'string'
      },{
   		name:'description',
   		type:'string'
   	}]
});