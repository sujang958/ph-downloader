var phAPI = require('@justalk/pornhub-api');

module.exports = async function(url){
    return await phAPI.page(url.toString(), ['views', 'download_urls']);
}