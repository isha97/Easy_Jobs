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
Meteor.publish('applicationstatus',function(){
	return applicationsCollection.find({});
});
Meteor.publish('jobsearch',function(){
	return jobCollection.find({});
});
