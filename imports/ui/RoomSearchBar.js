import React from 'react';
import SearchResultsList from './SearchResultsList';

export default class RoomSearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    onSearch (e) {
        console.log('HERE');
        if (!!this.refs.search.value) {
            this.setState({
                query: this.refs.search.value
            });
        }

        e.preventDefault(true);
    }

    onClear (e) {
        this.refs.search.value = '';
        this.setState({
            query: ''
        });

        e.preventDefault(true);
    }

    render () {
        let searchButton = <button className='button' onClick={this.onSearch.bind(this)}>Search</button>;
        let clearButton = <button className='button' onClick={this.onClear.bind(this)}>X</button>;

        console.log("RERENDER");

        return (
            <div>
                <div className='item'>
                    <div className='form'>
                        <input className='form__input' type='text' ref='search' placeholder='YouTube Search'/>
                        {!this.state.query ? searchButton : clearButton}
                    </div>
                </div>
                {!this.state.query ? this.props.children : <SearchResultsList q={this.state.query}/>}
            </div>
        )
    }
}