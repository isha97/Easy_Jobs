job_seeker = new Mongo.Collection('seeker_profile');
job_seeker.attachSchema( new SimpleSchema({
	seekerID:{
		type: String,
		label: "Username",	
	},
	fName:{
		type:String,
		label: "First Name"
	},
	email:{
		type:String,
		label: "E-Mail",
		regEx: SimpleSchema.RegEx.Email
	},
	lName:{
		type:String,
		label: "Last Name"
	},
	HNo:{
		type:Number,
		label: "House Number"
	},
	streetName:{
		type:String,
		label: "Street Name",
		optional:true
	},
	city:{
		type:String,
		label: "City"
	},
	state:{
		type:String,
		label: "State"
	},
	pin:{
		type: String,
    		regEx: /^[0-9]{6}$/
	},
	age:{
		type:Number,
		label: "Age",
		min:18
	},
	awards_skills:{
		type:String,
		label: "Awards and Skills",
		max:100
	},
	preferred_locn:{
		type: [String],
		label: "Preferred Locations",
		defaultValue: [],
        	minCount : 0 //when array is the type
	},
	contactDetails:{
		type: String,
		label: "Contact Details"
	},
	gender:{
		type:String,
		label: "Gender",
		allowedValues: ["M","F"]
	},
	qualification:{
		type:String,
		label: "Qualification",
		max:150
	},
	experience:{
		type:String,
		label: "Experience",
		max:150
	}
}));
employerCollection = new Mongo.Collection('employer_profile');
employerCollection.attachSchema(new SimpleSchema({
	employerID:{
		type: String,
		label: "Username"	
	},
	description:{
		type: String,
		label: "Description",
		max:150	
	},
	company_name:{
		type: String,
		label: "Company Name"	
	},
	webLink:{
		type: String,
		label: "Web Link",
		regEx: SimpleSchema.RegEx.Url,
		optional:true	
	},
	location:{
		type: [String],
		label: "Company Locations",
		defaultValue: [],
        	minCount : 0	
	}
}));
jobCollection= new Mongo.Collection('job_profile');
jobCollection.attachSchema(new SimpleSchema({
	company_name:{
		type: String,
		label: "Company Name"	
	},	
	vacancies:{
		type: Number,
		label: "Vacancies"
	},
	employerID:{
		type: String,
		label: "Employer ID"	
	},
	job_description:{
		type: String,
		label: "Job Description"	
	},
	job_reqmts:{
		type: String,
		label: "Job Requirements"	
	},
	date:{
		type: Date,
    		autoform: {
      		type: "bootstrap-datepicker"
    		},
		label: "Deadline"	
	},
	salary:{
		type: Number,
		label: "Remuneration"	
	}
}));
applicationsCollection = new Mongo.Collection('application');
applicationsCollection.attachSchema(new SimpleSchema({
	applicationID:{
		type: String,
		label: "Application ID"	
	},
	status:{
		type: String,
		label: "Application Status",
		defaultValue:'Pending'	
	},
	notification:{
		type: String,
		label: "Notification"	
	},
	jobID:{
		type: String,
		label: "Job ID"	
	},
	job_seekerID:{
		type: String,
		label: "Job Seeker ID"	
	},
	employerID:{
		type: String,
		label: "Employer ID"	
	},
}));


job_seeker.allow({
    insert: function(userId){
        return true;
    }
});

jobCollection.allow({
    insert: function(userId){
        return true;
    }
});
employerCollection.allow({

    insert: function(userId){
        return true;
    }
});
SimpleSchema.messages({  
  "incorrectUserID": "Incorrect User ID",
  "userNotVerified": "User Not Verified",
  "userPassedValidity": "User has passed the verification validity",
  "couldNotValidate": "User verification details could not be validated",
  "errorObtainingDetails":"Could not find user or error obtaining profile details",


});

