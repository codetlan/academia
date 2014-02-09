Meteor.publish('comments', function(limit) {
  return Comments.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('comment', function(id) {
  return Comments.find({_id: id});
});