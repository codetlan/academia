// aqui se controla como se agregan los items a los stores de extjs
Ext.onReady(function() {
    Cursos = {
        subs: {
            Courses: Meteor.subscribe('courses', function() {
                var coursesStore = Ext.data.StoreManager.lookup('Courses'),
                    cursor,
                    userCoursesIds = [];

                if (Meteor.userId()) { //quitamos los cursos en los que esta el usuario                    

                    Ext.each(Meteor.user().profile.courses, function(course) {
                        userCoursesIds.push(course._id);
                    }, this);

                    cursor = Courses.find({
                        _id: {
                            $nin: userCoursesIds
                        }
                    });
                } else {
                    cursor = Courses.find({});
                }
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
            }),
            Codes: Meteor.subscribe('codes', function() {
                var codesStore = Ext.data.StoreManager.lookup('Codes'),
                    cursor = Codes.find({});
                cursor.observeChanges({
                    added: function(id, code) {
                        code['_id'] = id;
                        var code = Ext.create('Cursos.model.Code', code);
                        codesStore.add(code);
                    },
                    changed: function(id, code) {
                        codesStore.findRecord('_id', id).set(code);
                    },
                    removed: function(id) {
                        var code = codesStore.findRecord('_id', id);
                        codesStore.remove(code);
                    }
                });
            }),
            Users: Meteor.subscribe('users', function() {
                var usersStore = Ext.data.StoreManager.lookup('Users'),
                    cursor = Meteor.users.find({});

                cursor.observeChanges({
                    added: function(id, user) {
                        user['_id'] = id;
                        var user = Ext.create('Cursos.model.User', user);
                        usersStore.add(user);
                    },
                });
            }),
            Comments: Meteor.subscribe('comments', function() {
                // var commentsStore = Ext.data.StoreManager.lookup('Comments'),
                //     cursor = Comments.find({
                //         //commentableType: 'User',
                //         //commentableId: Meteor.userId()
                //     });
                // cursor.observeChanges({
                //     added: function(id, comment) {
                //         comment['_id'] = id;
                //         var comment = Ext.create('Cursos.model.Comment', comment);
                //         commentsStore.add(comment);
                //         //alert(23);
                //     }
                // });
            }),
        }
    }
});
