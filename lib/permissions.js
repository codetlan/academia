isAdmin = function(userId, doc) {
  // return doc && doc.userId === userId;
  return Meteor.user().profile.role === "admin";
}