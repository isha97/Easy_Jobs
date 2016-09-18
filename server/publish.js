Meteor.publish('Insertinapplicant', function(){
    return job_seeker.find();
});
Meteor.publish('Insertinemployer', function(){
    return employerCollection.find();
});




