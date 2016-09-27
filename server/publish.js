Meteor.publish('Insertinapplicant', function(){
    return job_seeker.find();
});
Meteor.publish('Insertinemployer', function(){
    return employerCollection.find();
});

Meteor.publish("addApplicantDetails", function(patientId){
    
        return [ job_seeker.find({_id:patientId}) ];
    
});
Meteor.publish('applicantListing', function(){
    if ( this.userId ){
        var x = Meteor.users.findOne({_id:this.userId}).profile.applicant;
        return [job_seeker.find({_id:x}) ]
    }
});
Meteor.publish('applicantprofile',function(){
	return job_seeker.find({});
});
