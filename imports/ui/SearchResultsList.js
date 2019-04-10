import React from 'react';
import { Meteor } from 'meteor/meteor';

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
                console.log(res);
                if (!!err) {
                    this.setState({error: err});
                } else {
                    this.setState({results: res.data.items});
                }
            });
        }
    }

    renderResults () {
        console.log("CALLED");

        return this.state.results.map((result) => (
            <SearchResult key={result.id.videoId} result={result}/>
        ));
    }

    render () {
        return (
            <div>
                {this.renderResults()}
            </div>
        )
    }
}