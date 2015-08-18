if (Meteor.isServer) {

  var sendToEmailAddress = "emailToSendTo@test.test";
  var fromEmailAddress = "sentFromEmailAddress@test.test"

  var mandrillUserName = "your mandrill emailaddress";
  var mandrillApiKey = "your mandrill API key";

  Meteor.startup(function () {
    Mandrill.config({
      username: mandrillUserName,
      key: mandrillApiKey
    });

    Meteor.setTimeout(function(){
      Meteor.call("sendMandrillEmail");
    }, 3000);
  });

  Meteor.methods({

    sendMandrillEmail : function (){

      console.log("sending email...");

        var result = Mandrill.messages.sendTemplate({

          template_name: 'email-template',

          template_content: [
            {
                name: 'body',
                content: 'content'
            }
          ],

          message: {
              subject: 'Hello from your Meteor App',
              from_email: fromEmailAddress,
              to: [
                  { email: sendToEmailAddress }
              ],
              merge_language: 'handlebars',
              global_merge_vars: [
                  {
                      name: 'USERFIRSTNAME',
                      content: "USER"
                  },
                  {
                      name: 'ITEMS',
                      content: [
                        'Item 1',
                        'Item 2',
                        'Item 3'
                      ]
                  }
              ]
          }
        });

        console.log(result.data[0].status);
    }
  });
}
