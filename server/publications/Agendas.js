Meteor.publish('agendas', function(limit) {
  return Agendas.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('agenda', function(id) {
  return Agendas.find({_id: id});
});