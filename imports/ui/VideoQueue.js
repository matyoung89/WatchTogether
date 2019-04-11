import React from 'react';

export default class VideoQueue extends React.Component {
    renderVideos () {
        let now = false;
        return this.props.videos.map((video, i) => {
            // console.log(video);
            let c = ''
            if (video.queued) {
                c = !now ? 'item room-item room-item--now' : 'item room-item';
                now = true;
            } else {
                c = 'item room-item room-item--done';
            }
            
            return (
                <div key={video._id} className={c}>
                    <p>{video.name}</p>
                </div>
            )
        })
    }

    render () {
        return (
            <div>
                {this.renderVideos()}
            </div>
        );
    }
}