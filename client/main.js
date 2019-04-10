import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Tracker } from 'meteor/tracker';

import { Videos } from '../imports/api/videos';
// import '../imports/api/search';

import Join from '../imports/ui/Join';
import Room from '../imports/ui/Room';
import NotFound from '../imports/ui/NotFound';

const search_results = [{
    name: 'Test video',
    creator: 'Test creator',
    thumb: 'http://some.thumb.url.com',
    video: 'http://some.video.url.com',
}]

const browserHistory = createBrowserHistory();
window.browserHistory = browserHistory;

const authPages = ['/room'];
const unauthPages = ['/', '/join'];
Tracker.autorun(() => {
    const isAuth = !!Meteor.userId();
    const pathname = browserHistory.location.pathname;
    const isAuthPage = authPages.includes(pathname);
    const isUnAuthPage = unauthPages.includes(pathname);

    if (isAuth && isUnAuthPage) { browserHistory.replace('/room'); }
    if (!isAuth && isAuthPage) { browserHistory.replace('/join'); }
});

Meteor.startup(() => {
    console.log("TEST");

    // Meteor.call('searchVideo', 'twenty one pilots elvis', (err, res) => {
    //     console.log('Search Results', err, res);
    // });

    Tracker.autorun(() => {
        let videos = Videos.find().fetch();

        ReactDOM.render((
            <div className='wrapper'>
                <Router history={browserHistory}>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/join"/>)}/>
                        <Route path="/join" render={() => ( !!Meteor.userId() ? <Redirect to="/room"/> : <Join/> )}/>
                        <Route path="/room" render={() => ( !!Meteor.userId() ? <Room videos={videos}/> : <Redirect to="/join"/> )}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </div>
        ), document.getElementById('app'));
    });
  
})
