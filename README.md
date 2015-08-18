# meteorMandrillEmail
Example setup for using Mandrill to send emails in Meteor

Steps:

1. From command-line run 'npm init', then 'npm install'.
2. To generate the inlined HTML file, run 'grunt'. It will watch for changes.
3. Signup for a mandrill free account and create an API key.
4. Add the "email-template-INLINED.html" file to Mandrill as an Outgoing Template called "email-template".
5. Create a new Meteor App using 'meteor create app'.
6. Add the Wylio:Mandrill package: 'meteor add wylio:mandrill'.
7. Move the "sendEmailMandrill.js" file into the meteor app folder and add your Mandrill info.
8. Run your meteor app and you should successfully send an email through Mandrill!

Sending Meteor Accounts Emails:

1. Add the "email-confirm-INLINED.html" file to Mandrill as an Outgoing Template called "email-confirm".
1. Add accounts to the meteor app: 'meteor add accounts-ui accounts-password'.
2. Add '{{> loginButtons}}' to the body of your app.html file.
3. Move the "sendAcountEmailMandrill.js" file into the meteor app folder.
4. When a new user signs up they should receive a confirmation email using your template!
