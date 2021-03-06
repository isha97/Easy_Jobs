Meteor.startup(function () {
    sAlert.config({
        effect: '',
        position: 'bottom',
        timeout: 2000,
        html: true,
        onRouteClose: true,
        stack: false,
        offset: 0
    });


    Uploader.finished = function(index, fileInfo, templateContext) {
        Session.set("ImageReady",true);
        //console.log(fileInfo);
        Session.set("imageUrl","http://d2scard.com/upload/"+fileInfo.name);
        sAlert.success("Uploaded",{onRouteClose:false});
    }

    Hooks.init();
});

Meteor.startup(function() {
    reCAPTCHA.config({
        publickey: '6LeS6gkTAAAAAGq8MB9h_zoN9wuw-vgUTL56T95u'
    });
});
AutoForm.hooks({
  insertOfferForm : {
    
    before: {
        insert: function(doc) {
            doc.merchant = Meteor.user().profile.merchant;
            doc.createdAt = new Date();
            doc.createdBy = Meteor.user()._id;
            doc.activatedOn = [new Date()];
            return doc;
        }
    },
    after : {
        insert: function(error, result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                Router.go('/merchant/offer/'+result+'/addimage');
            }
        }
    }
  },

  insertappliform: {
    after: {
        insert: function(error,result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Added successfully',{onRouteClose:false});
              // if ( doctorsCollection.findOne({_id:result}).type == "offline" )
                    Router.go('/addapplicantaccount/{{_id}}');
               // else 
                 //   Router.go('/addmerchantfixeddiscount/'+result);
            }
        }
    }
  },
 insertEmpForm: {
    after: {
        insert: function(error,result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Added successfully',{onRouteClose:false});
              // if ( doctorsCollection.findOne({_id:result}).type == "offline" )
                    Router.go('/addemployeraccount/{{_id}}');
               // else 
                 //   Router.go('/addmerchantfixeddiscount/'+result);
            }
        }
    }
  },
	
insertJobForm: {
    after: {
        insert: function(error,result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Added successfully',{onRouteClose:false});
              // if ( doctorsCollection.findOne({_id:result}).type == "offline" )
                    Router.go('/employer/landing');
               // else 
                 //   Router.go('/addmerchantfixeddiscount/'+result);
            }
        }
    }
  }

});

Hooks.onLoggedOut = function (userId) {
    //console.log("Logged out...");
    Router.go('/')
}
