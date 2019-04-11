import React from 'react';
import { Meteor } from 'meteor/meteor';
import $ from 'cheerio';

import SearchResult from './SearchResult';

export default class SearchResultsList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: [],
            error: ''
        };

        console.log("I am HERE and q is "+this.props.q);
        if (!!this.props.q) {
            Meteor.call('searchVideo', this.props.q, (err, res) => {
                // console.log(res);
                if (!!err) {
                    this.setState({error: err});
                } else {
                    // this.setState({results: res.data.items});
                    let videos = $('ytd-video-renderer', res).slice(0,10).map((i,video) => {
                        // console.log(video);
                        let url = video.children[1].children[1].children[1].attribs.href;
                        let thumb_url = video.children[1].children[1].children[1].children[1].children[0].attribs.src;
                        let title = video.children[1].children[3].children[1].children[1].children[1].children[3].attribs.title;
                        let channel_name = video.children[1].children[3].children[1].children[3].children[1].children[1].children[1].children[1].children[0].children[0].data;
                        return {
                            url,
                            thumb_url,
                            title,
                            channel_name
                        };
                    });
                    console.log(videos);
                    this.setState({results: Array.from(videos)});
                }
            });
        }
    }

    renderResults () {
        console.log("CALLED");

        return this.state.results.map((result) => {
            console.log(`Rendering ${result}`);
            return <SearchResult key={result.url} result={result}/>
        });
    }

    render () {
        return (
            <div>
                {this.renderResults()}
            </div>
        )
    }
}