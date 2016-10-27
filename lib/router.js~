Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', function () {
    this.render('landingPageTemplate');
    }, {
        name: 'landingRoute'
    });
Router.route('/regapplicant', function () {
    this.render('NewApplicantTemplate');
    }, {
        name: 'Insertinapplicant',
      waitOn: function(){
        	return Meteor.subscribe("Insertinapplicant");
	}
        
    });
Router.route('/regemployer', function () {
    this.render('NewEmployerTemplate');
    }, {
        name: 'Insertinemployer',
      waitOn: function(){
        	return Meteor.subscribe("Insertinemployer");
	}
        
    });
Router.route('/addapplicantaccount/:appli',function(){
        this.render("addApplicantAccountTemplate",{data: {applicantId: this.params.appli}});
    },
    {
        name: "addApplicantAccountRoute",
        waitOn: function(){
     
                return Meteor.subscribe("addApplicantDetails", this.params.appli);
        }
    }
    );
Router.route('/loginapplicant',function () {
    this.render('applicantLoginTemplate');
    }, {
        name: 'applicantLoginRoute',
        onBeforeAction: function(){
            if (Meteor.user()) {
                // User logged in... Move into landing...
                this.redirect('applicantLandingRoute');
                this.stop();
            }
            else {
                this.next();
            }
        }
});
Router.route('/applicant/landing',function(){
    this.render('applicantLandingTemplate');
    },
    {
        name: 'applicantLandingRoute',
        waitOn : function(){
            if (Meteor.user() && Roles.userIsInRole(Meteor.user(), ['applicant']) ){
                return Meteor.subscribe('applicantListing');
            }
        }
    });
Router.route('/applicant/profile', function () {
    this.render('applicantProfileTemplate');
    }, {
        name: 'applicantprofile',
       waitOn: function(){
		return Meteor.subscribe("applicantprofile");
	}
    });
Router.route('/error',function(){
        this.render('somethingWentWrongTemplate');
    },
    {
        name: 'somethingWentWrongRoute'
    }
);
Router.route('/loginemployer',function () {
    this.render('employerLoginTemplate');
    }, {
        name: 'employerLoginRoute',
        onBeforeAction: function(){
            if (Meteor.user()) {
                // User logged in... Move into landing...
                this.redirect('employerLandingRoute');
                this.stop();
            }
            else {
                this.next();
            }
        }
});
Router.route('/employer/landing',function(){
    this.render('employerLandingTemplate');
    },
    {
        name: 'employerLandingRoute',
        waitOn : function(){
            if (Meteor.user() && Roles.userIsInRole(Meteor.user(), ['employer']) ){
                return Meteor.subscribe('employerOffersListing');
            }
        }
    });
Router.route('/addemployeraccount/:employer',function(){
        this.render("addEmployerAccountTemplate",{data: {employerID: this.params.employer}});
    },
    {
        name: "addEmployerAccountRoute",
        waitOn: function(){
          //  if (Meteor.user() && Roles.userIsInRole(Meteor.user(),'patient'))
                return Meteor.subscribe("addEmployerDetails", this.params.employer);
        }
    }
    );
Router.route('/employer/profile', function () {
    this.render('employerProfileTemplate');
    }, {
        name: 'employerprofile',
       waitOn: function(){
		return Meteor.subscribe("employerprofile");
	}
    });
Router.route('/jobposting',function(){
	this.render('jobPostingTemplate');
	},{
		name: 'jobposting',
		waitOn:function(){
		return Meteor.subscribe('jobposting');
	}
});
Router.route('/appstatus', function () {
    this.render('ApplicationStatusTemplate');
    }, {
        name: 'appstatus',
       waitOn: function(){
		return Meteor.subscribe("applicationstatus");
	}
    });
Router.route('/jobsearch', function () {
    this.render('JobSearchTemplate');
    }, {
        name: 'jobsearch',
       waitOn: function(){
		return Meteor.subscribe("jobsearch");
	}
    });
Router.route('/viewapplications', function () {
    this.render('viewApplicationsTemplate');
    }, {
        name: 'viewapplications',
       waitOn: function(){
		return Meteor.subscribe("viewapplications");
	}
    });
Router.route('/areyousure/:var', function () {
    this.render('AreYouSureTemplate');
    }, {
        name: 'areyousure',
       waitOn: function(){
		return Meteor.subscribe("areyousure");
	}
    });




