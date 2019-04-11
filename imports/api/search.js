import { Meteor } from 'meteor/meteor';
// import { google } from 'googleapis';
// import { API_KEY } from './credentials';
// import rp from 'request-promise';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

// const API = google.youtube({version: 'v3', auth: API_KEY});
// const page = puppeteer.launch().then((browser) => {
//     return browser.newPage();
// }).then((page) => {
//     return page;
// });

Meteor.methods({
    // searchVideo (query_term) {
    //     console.log('Test');

    //     console.log(`KEY: ${API_KEY}`);
    //     console.log(`Running Search for query ${query_term}`);

    //     return API.search.list({
    //         part: 'snippet',
    //         maxResults: 10,
    //         q: query_term,
    //         type: 'video'
    //     });
    // }
    async searchVideo (query_term) {
        console.log('Test');

        console.log("Beginning web scrape of YouTube because FUCK you Google");

        let browser = await puppeteer.launch({args: ['--no-sandbox']});
        let page = await browser.newPage();

        await page.goto(`https://www.youtube.com/results?search_query=${query_term}&sp=EgIQAQ%253D%253D`)
        let html = await page.content();

        return html;

        // return html;

        // let html = page.goto(`https://www.youtube.com/results?search_query=${query_term}&sp=EgIQAQ%253D%253D`).then(() => {
        //     return page.content();
        // });

        // return html;

        // return puppeteer.launch().then((browser) => {
        //     return browser.newPage();
        // }).then((page) => {
        //     return page.goto(`https://www.youtube.com/results?search_query=${query_term}&sp=EgIQAQ%253D%253D`).then(() => {
        //         return page.content();
        //     });
        // }).then((html) => {
        //     // return html;
        //     let videos = $('ytd-video-renderer', html).map((i,video) => {
        //         console.log(i);
        //         let url = video.children[1].children[1].children[1].attribs.href;
        //         console.log(url);
        //         return url;
        //     }).catch((err) => {
        //         console.log(`ERROR: ${err}`);
        //         return {err: 'Im on the run'};
        //     });
        //     console.log("DONE");
        //     console.log(videos);
        //     return videos;
        // }).catch((err) => {
        //     return err;
        // });
    }
});