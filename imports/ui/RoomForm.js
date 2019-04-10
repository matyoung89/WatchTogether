import React from 'react';

import { Meteor } from 'meteor/meteor';

export default class RoomForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    onJoined (err) {
        if (err) { 
            console.log(err);
            this.setState({
                error: err.reason.replace(RegExp('[Uu]ser'), 'Room')
            });
        } else {
            this.setState({
                error: ''
            });
        }
    }
    
    onJoin (e) {

        let roomName = this.refs.name.value;
        console.log(roomName);

        if (!!roomName) {
            Meteor.loginWithPassword(roomName, roomName, this.onJoined.bind(this));
        } else {
            this.setState({
                error: "Room Name cannot be empty"
            });
        }

        e.preventDefault(true);
    }

    render () {
        return (
            <div className='item'>
                <div className='form-header'>
                    <h1>Join Room</h1>
                </div>
                {this.state.error ? <div className='item'>{this.state.error}</div> : undefined}
                <form className='form' onSubmit={this.onJoin.bind(this)}>
                    <input className='form__input' type="text" ref="name" placeholder="Room Name"></input>
                    <button className='button' type="submit">Join</button>
                </form>
            </div>
        )
    }
}