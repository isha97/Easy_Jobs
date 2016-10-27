Template.JobSearchTemplate.onCreated = function() {
	Session.set("loc","");
}
Template.JobSearchTemplate.helpers({
	job_profile: function(){
		if(Session.get("loc") && Session.get("loc")!=="") {
			return jobCollection.find({
				location : Session.get("loc")
			});
		}	else {
    			return jobCollection.find({}); 
		}	
	},
	jobArray: function(){
		
var distinctEntries = _.uniq(jobCollection.find({}, { sort: {location: 1}, fields: {location: true} }).fetch().map(function(x) { return x.location; }), true);
	//	var helo = _.uniq(jobCollection.find().fetch(),"location");
	//	return distinctEntries;
		return jobCollection.find({});
	}
});

