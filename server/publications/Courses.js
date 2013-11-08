Meteor.publish('courses', function(limit) {
  return Courses.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('course', function(id) {
  return Courses.find({_id: id});
});