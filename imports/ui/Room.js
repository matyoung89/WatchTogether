import React from 'react';

import RoomInfo from './RoomInfo';
import RoomSearchBar from './RoomSearchBar';
import VideoQueue from './VideoQueue';

export default class Room extends React.Component {

    render () {
        return (
            <div>
                <RoomInfo/>
                <RoomSearchBar>
                    <VideoQueue videos={this.props.videos}/>
                </RoomSearchBar>
            </div>
        )
    }
}