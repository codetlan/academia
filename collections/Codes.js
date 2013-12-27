Codes = new Meteor.Collection("codes");

Codes.allow({
  update: isAdmin,
  remove: isAdmin,
  insert: isAdmin
});