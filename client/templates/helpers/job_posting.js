Template.jobPostingTemplate.helpers({
    currentUserId: function () {
        return Meteor.user().username;
    }
});
