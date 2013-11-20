Ext.onReady(function() {
	Cursos = {
		subs: {
			Courses: Meteor.subscribe('courses', function() {
				var coursesStore = Ext.data.StoreManager.lookup('Courses'),
					cursor = Courses.find({});
				cursor.observeChanges({
					added: function(id, course) {
						course['_id'] = id;
						var course = Ext.create('Cursos.model.Course', course);
						coursesStore.add(course);
					},
					removed: function(id) {
						var course = coursesStore.findRecord('_id',id)
						coursesStore.remove(course);
					}
				});
			}),
			Agendas: Meteor.subscribe('agendas')
		}
	}
});