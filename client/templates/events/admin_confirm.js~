Template.AdminConfirmTemplate.events({
     "submit .authe": function (event) {
       event.preventDefault();
 	 var parts= location.href.split('/');
	var id= parts.pop();
    //  var j = jobCollection.findOne({_id:id});
	//var emp = j.employerID;
	//console.log(emp);
	//var user_1 = Meteor.user().username;
	jobCollection.update(
		id, {$set: {authenticate: "Yes"}}     
	 ); 
sAlert.success('Authenticated');
}
});
