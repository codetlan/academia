Meteor.publish('codes', function(limit) {
  return Codes.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('code', function(id) {
  return Codes.find({_id: id});
});