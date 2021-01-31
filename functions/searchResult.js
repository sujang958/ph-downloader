var phAPI = require('@justalk/pornhub-api');

module.exports = async function(q){
    return await phAPI.search(q.toString(), ['link_mp4']);
}