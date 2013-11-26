Agendas = new Meteor.Collection("agendas");

Agendas.allow({
  update: isAdmin,
  remove: isAdmin,
  insert: isAdmin
});