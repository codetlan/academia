/**
 * @class Cursos.view.courses.CoursesList
 * @extends Ext.view.View
 * This is the dataview to show courses
 */
Ext.define('Cursos.view.courses.CoursesList', {
	extend: 'Ext.view.View',
	alias: 'widget.courseslist',	
	store: 'Courses',
	plugins: {
		xclass: 'Ext.ux.DataView.Animated',
		duration: 450,
		idProperty: '_id'
	},

	templateType:'landingPage',
	overItemCls: 'courses-list-item-over',
    itemSelector: 'div.courses-list-item',
	emptyText: 'No hay cursos disponibles',
	autoScroll:true,

	cls: 'courses-courses-list-main',

	initComponent: function() {
		var me = this;

		me.tpl = me.buildTpl();
		this.callParent();
	},

	buildTpl: function () {
		var me = this,
			tpl;
		switch(me.templateType){
			case 'landingPage':
				tpl = [
					'<tpl for=".">',
						'<div class="courses-list-item" >',
							'<div class="courses-list-item-image"><img src="{image}"></div>',
							'<div class="courses-list-item-name-get-course">',
								'<div class="courses-list-item-name-get-course-btn" style="margin-top:40px; margin-bottom:16px;">',
								'<i class="icon-play play-course"></i></div>',
								'{title} <br/>',
								'<span> {description}</span>',
							'</div>',
							'<div class="courses-list-item-social">',								
								'<div class="courses-list-item-social-title">{title}</div>',
								'<div><i class="icon-dollar"> </i>{price}.00</div>',
							'</div>',
						'</div>',
					'</tpl>',
					'<div class="x-clear"></div>'
				];
			break;
			case 'courseList':
				tpl = [
					'<tpl for=".">',
						'<div class="courses-list-item" >',
							'<div class="courses-list-item-image"><img src="{image}"></div>',
							'<div class="courses-list-item-details">',							
								'<ul class="courses-list-item-price-tags">',
									'<li><span>$ {price} PESOS</span></li>',
								'</ul>',						
								'<h4>{title}</h4>',
								'<p class="ellipsis"> {description}</p>',
								'<div class="courses-list-item-name-buy-course-btn">Comprar</div>',
							'</div>',
						'</div>',
					'</tpl>',
					'<div class="x-clear"></div>'
				];
			break;
			case 'myCourses':
				tpl = [
					'<tpl for=".">',
						'<div class="courses-list-item" >',
							'<div class="courses-list-item-image"><img src="{image}"></div>',
							'<div class="courses-list-item-details">',							
								'<div class="courses-list-item-details-badge"><img src="{badge}"></div>',
								'<h4>{title}</h4>',
								'<p class="ellipsis"> {description}</p>',
								'<div class="courses-list-item-name-get-course-btn">Tomar Curso</div>',
							'</div>',
						'</div>',
					'</tpl>',
					'<div class="x-clear"></div>'
				];
				me.store = {
	                type: 'courses',
	                data: Meteor.user() && Meteor.user().profile.courses
	            };
			break;
		}
		return  tpl.join('');
	}
});