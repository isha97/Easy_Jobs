Template.CheckStatusTemplate.helpers({
    appstatus: function () {
	var currentUsername = Meteor.user().username;
	console.log(currentUsername);
      return applicationsCollection.find({jobseekerID:currentUsername});
    }
  });
