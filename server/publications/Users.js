Meteor.publish('users', function(limit) {
  return Meteor.users.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('user', function(id) {
  return Meteor.users.find({_id: id});
});