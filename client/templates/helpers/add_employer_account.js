Template.addEmployerAccountTemplate.helpers({
   'userLoggedIn':function(){
        if (Meteor.user())
            return true;
        else
            return false;   
   } 
});
