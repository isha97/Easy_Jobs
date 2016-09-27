Template.applicantProfileTemplate.helpers({
	applicant_profile: function(){
		var currentUserId = Meteor.user().username;
		console.log(currentUserId);
    		return job_seeker.find({seekerID:currentUserId});  
	}
});
