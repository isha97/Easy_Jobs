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













