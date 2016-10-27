Template.JobSearchTemplate.events({
'click .applyjob': function(event){
    //    sAlert.success('Appointment request sent!');

    },
	"change #selectLocation":  function(evt) {
		Session.set("loc",evt.target.value);
		//console.log("ABC");
	}

});
