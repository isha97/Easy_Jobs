Template.employerNavHeader.events({
    'click #logout': function(event){
        Meteor.logout(function(err){
            if (err){
                sAlert.error('Error while logging out: '+error.message); 
            }
            else {
                sAlert.success('Successfully logged out',{onRouteClose:false});
                Router.go('employerLoginRoute');
            }
        });
    }
});
