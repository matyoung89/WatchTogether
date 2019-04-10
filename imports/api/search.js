import { Meteor } from 'meteor/meteor';
import { google } from 'googleapis';
import { API_KEY } from './credentials';


const API = google.youtube({version: 'v3', auth: API_KEY});

Meteor.methods({
    searchVideo (query_term) {
        console.log('Test');

        console.log(`KEY: ${API_KEY}`);
        console.log(`Running Search for query ${query_term}`);

        return API.search.list({
            part: 'snippet',
            maxResults: 10,
            q: query_term,
            type: 'video'
        });
    }
});