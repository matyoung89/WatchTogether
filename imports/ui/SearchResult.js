import React from 'react';

import { Videos } from '../api/videos';

export default class SearchResult extends React.Component {
    addToQ () {
        let videoUrl = this.props.result.url;
        let videoTitle = this.props.result.title;
        let videoThumb = this.props.result.thumb_url;

        let video = {
            name: videoTitle,
            _id: videoUrl,
            thumb: videoThumb,
            queued: true
        }

        if (Videos.find({_id: videoUrl}).fetch().length === 0) {
            Videos.insert(video);
        } else {
            Videos.remove({_id: videoUrl})
            Videos.insert(video);
        }
    }

    render () {
        let title = this.props.result.title;
        let channel = this.props.result.channel_name;
        let thumbUrl = this.props.result.thumb_url;

        let matches = Videos.find({_id: this.props.result.url, queued: true}).fetch();

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