Courses = new Meteor.Collection("courses");

Courses.allow({
  update: isAdmin,
  remove: isAdmin,
  insert: isAdmin
});