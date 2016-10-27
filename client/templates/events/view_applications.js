Template.viewApplicationsTemplate.events({
    'click .appst': function(){
      var applicantId = this._id;
      Session.set('selectedApplicant', applicantId);
//	console.log(patientId);
    },
    "submit .apply": function (event){
	event.preventDefault();
      var selectedApplicant = Session.get('selectedApplicant');
	var pres = event.target.Status.value;
      applicationsCollection.update(selectedApplicant, {$set: {status: pres} });
	event.target.Status.value ="";
    }
  });
