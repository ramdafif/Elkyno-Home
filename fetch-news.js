const fs = require('fs');
const https = require('https');

const RSS_URL = 'https://www.antaranews.com/rss/tekno.xml';
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

https.get(API_URL, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        fs.writeFileSync('news.json', data);
        console.log('Indonesian technology news updated successfully!');
    });
}).on('error', (err) => {
    console.error('Error fetching news:', err);
});
