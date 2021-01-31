var router = require('express').Router()
var phAPI = require('@justalk/pornhub-api');
const sortDownload = require('../functions/sortDownload');


router.get('/resultsPH', async (req, res, next) => {
    try {
        var query = req.query.q;
        var results = await phAPI.search(query, ['link_mp4', 'download_urls']);
        var resultsArr = [];

        for (var i = 0; i < 3; i++) {
            if (!results.results[i].link.includes('javascript:void') && results.results[i].hd && !results.results[i].premium && results.error == undefined) {
                var video = await phAPI.page(results.results[i].link, ['download_urls']); 
                var url = sortDownload(video.download_urls);
                console.log('sort');

                resultsArr.push({
                    title: results.results[i].title,
                    views: results.results[i].views,
                    link: results.results[i].link,
                    download_urls: url,
                });
                console.log('push');
            } else {
                res.redirect('/');
                return;
            }
        }

        res.render('results', {results: resultsArr});
    } catch (e) {
        next(e.toString())
    }
})


module.exports = router