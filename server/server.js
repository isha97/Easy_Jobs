/*
Accounts.urls.enrollAccount = function (token) {
        return Meteor.absoluteUrl('enroll-account/' + token);
};
*/

TWILIO_ACCOUNT_SID = 'AC884b34299c974f1b27897818ac588f91';
TWILIO_AUTH_TOKEN = 'a07487c333f4a782891c09c142bfa083';
TWILIO_ADMIN_NUM = '+16692313075';

Meteor.methods({
  
  addMerchantUser: function(username, password, merchantId) {
    var id = Accounts.createUser({
      username: username,
      password: password,
      profile: {
        merchant: merchantId
      }
    });
    Roles.addUsersToRoles(id, 'merchant');
    //Accounts.sendEnrollmentEmail(id);
  }
});
Meteor.methods({
	addPatientUser: function(username, password,patientId)	{
	var id = Accounts.createUser({
      username: username,
      password: password,
	profile: {
        patient : patientId
      }
     });
	Roles.addUsersToRoles(id, 'patient');
    }
});
