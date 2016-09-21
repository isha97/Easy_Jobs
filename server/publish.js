Meteor.publish('Insertinapplicant', function(){
    return job_seeker.find();
});
Meteor.publish('Insertinemployer', function(){
    return employerCollection.find();
});

Meteor.publish("addApplicantDetails", function(patientId){
    
        return [ job_seeker.find({_id:patientId}) ];
    
});

