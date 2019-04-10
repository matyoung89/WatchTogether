import React from 'react';

export default class VideoQueue extends React.Component {
    renderVideos () {
        return this.props.videos.map((video) => {
            console.log(video);
            return (
                <div key={video._id} className='item room-item'>
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