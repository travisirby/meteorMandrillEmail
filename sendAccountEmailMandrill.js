// Send a verification email through Mandrill when a new user signs up

if (Meteor.isServer) {

  Meteor.startup(function () {

      Accounts.emailTemplates.verifyEmail.html = function (user, url) {
        var result;
        try {
          result = Mandrill.templates.render({
            template_name: 'email-confirm',
            template_content: [
              {
                name: 'body',
                content: 'confirm email: ' + url
              },
            ],
            merge_vars: [
              {
                name: 'USERFIRSTNAME',
                content: "USER"   // you could pull user.profile.firstName if they added it
              },
              {
                name: 'CONFIRMURL',
                content: url
              }
            ]
          });
        } catch (error) {
          console.error('Error while rendering Mandrill template', error);
        }
        return result.data.html;
    }
  });

  Accounts.onCreateUser(function(options, user) {

    console.log("new user");
    user.profile = {};

    // we wait for Meteor to create the user before sending an email
    Meteor.setTimeout(function() {
      Accounts.sendVerificationEmail(user._id);
    }, 2 * 1000);

    return user;
  });
  
}
