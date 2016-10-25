Template.AreYouSureTemplate.events({
     "submit .new-appli": function (event) {
       event.preventDefault();
 	 var parts= location.href.split('/');
	var id= parts.pop();
      var j = jobCollection.findOne({_id:id});
	var emp = j.employerID;
	console.log(emp);
	var user_1 = Meteor.user().username;
	applicationsCollection.insert({
         jobseekerID: user_1,
         jobID: id,
         status: 'Pending',
	notification: 'None',
	employerID: emp
       }); 
sAlert.success('Job Application Submitted!');
}
});
