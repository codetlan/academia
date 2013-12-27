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
					changed: function(id, course) {
						coursesStore.findRecord('_id', id).set(course);
					},
					removed: function(id) {
						var course = coursesStore.findRecord('_id', id);
						coursesStore.remove(course);
					}
				});
			}),
			Agendas: Meteor.subscribe('agendas', function() {
				var agendasStore = Ext.data.StoreManager.lookup('Agendas'),
					cursor = Agendas.find({});
				cursor.observeChanges({
					changed: function(id, agenda) {
						agendasStore.findRecord('_id', id).set(agenda);
					}
				});
			})
		}
	}
});