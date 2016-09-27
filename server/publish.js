Meteor.publish('Insertinapplicant', function(){
    return job_seeker.find();
});
Meteor.publish('Insertinemployer', function(){
    return employerCollection.find();
});

Meteor.publish("addEmployerDetails", function(employerID){
    
        return [ employerCollection.find({_id:employerID}) ];
    
});
Meteor.publish('employerprofile',function(){
	return employerCollection.find({});
});
Meteor.publish('employerOffersListing', function(){
    if ( this.userId ){
        var employer = Meteor.users.findOne({_id:this.userId}).profile.employer;
        return [employerCollection.find({_id:employer}) ]
    }
});

