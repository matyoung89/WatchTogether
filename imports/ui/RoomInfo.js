import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class RoomInfo extends React.Component {
    logout (e) {
        if (Meteor.userId()) { Accounts.logout(() => { console.log("Logged Out") }) }
    }

    render () {
        return (
            <div className='item room-item'>
                <div className='room-item__content'>
                    <p>InternetFamousCharles Room</p>
                </div>
                <div className='room-item__actions'>
                    <button className='button' onClick={this.logout.bind(this)}>leave</button>
                </div>
            </div>
        )
    }
}