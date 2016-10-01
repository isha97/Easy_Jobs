Template.viewApplicationsTemplate.helpers({
    viewapplications: function () {
	var currentUsername = Meteor.user().username;
	console.log(currentUsername);
      return applicationsCollection.find({employerID:currentUsername});
    }
  });
