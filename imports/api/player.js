import { Meteor } from 'meteor/meteor';

import { Videos } from './videos';

Meteor.methods({
    upNext () {
        let q = Videos.find({queued: true}).fetch();

        return q.length > 0 ? {next: q[0]._id} : {next: ''};
    },

    done (id) {
        Videos.update({_id: id},{
            $set: { queued: false }
        });
    },

    clearRoom () {
        Videos.find().fetch().map((video) => {
            Videos.remove({_id: video._id});
        });
    }
})