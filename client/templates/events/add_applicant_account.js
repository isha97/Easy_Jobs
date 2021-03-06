Template.addApplicantAccountTemplate.events({
   'submit form': function(event){
        event.preventDefault();

        var username = event.target.username.value;
        var password = event.target.password.value;

        if ( !isValidUsername(username) ) {
            sAlert.error("Invalid Username : Must be atleast 6 characters");
            return;
        }
        
        if ( !isValidPassword(password) ){
            sAlert.error("Please enter a valid password");
            return;
        }

        Meteor.call("addUser", username, password, this.applicantId, function(err){
            if(err){
                sAlert.error(err.message);
            }
            else {
                sAlert.success("Successful");
            }
        });
        Router.go("/loginapplicant");
        
   } 
});
