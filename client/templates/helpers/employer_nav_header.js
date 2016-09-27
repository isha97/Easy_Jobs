Template.employerNavHeader.helpers({
   'userEmployerName': function(){
        var employerID = Meteor.user().profile.employer;
        if (employerID) {
            employer = employerCollection.findOne({_id:employerID});
            if (employer)
                return employer.name;
        }
        return "Employer";
   },
   'userLoggedIn': function(){
        if (Meteor.user())
            return true;
        else
            return false;
   },
   'employerTypeOffline': function(){
      var employerID = Meteor.user().profile.employer;
        if (employerID) {
            employer = employerCollection.findOne({_id:employerID});
            if (employer && employer.type == "offline")
                return true;
        }
        return false;
   }
});
