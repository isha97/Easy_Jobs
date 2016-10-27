Template.viewApplicationsTemplate.helpers({
    viewapplications: function () {
	var currentUsername = Meteor.user().username;
	console.log(currentUsername);
var j = employerCollection.findOne({employerID:currentUsername});
	var uid = j._id; 
	console.log(uid);
      return applicationsCollection.find({employerID:uid});
    },
    'selectedapp': function(){
      var uId = this._id;
      var selectedApplicant = Session.get('selectedApplicant');
      if(uId == selectedApplicant){
	console.log("Selected!");
          return "selected"
      }
    }
  });

