var phAPI = require('@justalk/pornhub-api');


module.exports = {
    /**
     * @param {String} query Search Query
     */
    async run(query) {
        // const video = await phAPI.page('https://www..com/view_video.php?viewkey=ph5fc2ae92c2120', ['title','pornstars','download_urls', 'views', 'thumbnail_url']);
    
        // console.log(video.download_urls['10d80p']);
        var search = await phAPI.search(query, ['link_mp4']);
        var results = [];
        

        if (search.error == undefined) {
            search.results.forEach(async item => {
                if (!item.link.includes('javascript:void') && !item.premium && item.hd) {
                    if (results.length >= 3) {
                        return;
                    }
                    var download_urls = await phAPI.page(item.link, ['download_urls']);
                    var views = await phAPI.page(item.link, ['views']);
                    download_urls = download_urls.download_urls;
                    views = views.views;


                    results.push({
                        title: item.title,
                        link: item.link,
                        download_urls: download_urls['720p'],
                        views
                    });
                    // if ('1080p' in download_urls) {
                    //     results.push({
                    //         title: item.title,
                    //         link: item.link,
                    //         download_urls: download_urls['1080p'],
                    //         views
                    //     });
                    // } else if ('720p' in download_urls) {
                    //     results.push({
                    //         title: item.title,
                    //         link: item.link,
                    //         download_urls: download_urls['720p'],
                    //         views
                    //     });
                    // } else if ('480p' in download_urls) {
                    //     results.push({
                    //         title: item.title,
                    //         link: item.link,
                    //         download_urls: download_urls["480p"],
                    //         views
                    //     });
                    // }
                }
            });

            return {results: results};
        } else {
            return {error: 'no search results found'};
        }
    }
};