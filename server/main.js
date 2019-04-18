import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import '../imports/api/videos';
import '../imports/api/search';
import '../imports/api/player';

Meteor.startup(() => {
  // code to run on server at startup

  if (!Accounts.findUserByUsername('InternetFamousCharles')) {
    Accounts.createUser({
      username: 'InternetFamousCharles',
      password: 'InternetFamousCharles'
    });
    console.log("Created InternetFamousCharles");
  } else {
    console.log("InternetFamousCharles already exists");
  }

});
