import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("\n\n******the server ...\n\n");
  console.log(this);
});
