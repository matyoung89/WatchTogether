import React from 'react';

import { Videos } from '../api/videos';

export default class SearchResult extends React.Component {
    addToQ () {
        let videoId = this.props.result.id.videoId;
        let videoTitle = this.props.result.snippet.title;
        let videoThumb = this.props.result.snippet.thumbnails.default.url;

        let video = {
            name: videoTitle,
            _id: videoId,
            thumb: videoThumb,
            queued: true
        }

        Videos.insert(video);
    }

    render () {
        let title = this.props.result.snippet.title;
        let channel = this.props.result.snippet.channelTitle;
        let thumbUrl = this.props.result.snippet.thumbnails.high.url;

        let matches = Videos.find({_id: this.props.result.id.videoId, queued: true}).fetch();

        let addButton = undefined;
        if (matches.length !== 0) {
            addButton = <button className='button' onClick={(e) => {e.preventDefault(true);}} disabled>Already Qd</button>;
        } else {
            addButton = <button className='button' onClick={this.addToQ.bind(this)}>Add to Q</button>;
        }
        

        return (
            <div>
                <div className='item room-item'>
                    <div className='room-item__content'>
                        
                        <h3>{title}</h3>
                        <p>{channel}</p>
                    </div>
                    <div className='room-item__actions'>
                        {addButton}
                    </div>
                </div>
                <div className='item'>
                    <img src={thumbUrl}/>
                </div>
            </div>
        )
    }
}