Template.jobPostingTemplate.helpers({
    currentUserId: function () {
        var uname =  Meteor.user().username;
	var e =  employerCollection.findOne({employerID:uname});
	return e._id;
    }
});
