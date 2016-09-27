Template.applicantLoginTemplate.events({
    'submit form': function(event){
        event.preventDefault();

        var appUsername = event.target.username.value;
        var appPassword = event.target.password.value;

        Meteor.loginWithPassword(appUsername,appPassword,function(error){
            if (error) {
                if (error.message == "User not found [403]"){
                  sAlert.error('Incorrect username or password');
                }
                else {
                  sAlert.error('Error while logging in: '+error.message); 
                }
            }
            else {
                sAlert.success('Logging in....',{onRouteClose:false});
                Router.go('applicantLandingRoute');
            }
        });
    },


});
