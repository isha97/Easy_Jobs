Template.employerProfileTemplate.helpers({
	employer_profile: function(){
		var currentUserId = Meteor.user().username;
		console.log(currentUserId);
    		return employerCollection.find({employerID:currentUserId});  
	}
});
