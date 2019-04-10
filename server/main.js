import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import '../imports/api/videos';
import '../imports/api/search';

Meteor.startup(() => {
  // code to run on server at startup

  if (!Accounts.findUserByUsername('MyRoom')) {
    Accounts.createUser({
      username: 'MyRoom',
      password: 'MyRoom'
    });
    console.log("Created MyRoom");
  } else {
    console.log("MyRoom already exists");
  }

});
