Comments = new Meteor.Collection('comments');

Comments.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    if (userId && doc._id === userId) {// user can modify own 
      return true;
    }
    // admin can modify any
    var u = Meteor.users.findOne({_id:userId});
    return (u && isAdmin);
  },
  remove: function (userId, doc) { // only admin can remove
    if (userId && doc._id === userId) {// user can modify own 
      return true;
    }
    // admin can modify any
    var u = Meteor.users.findOne({_id:userId});
    return (u && isAdmin);
  }
});