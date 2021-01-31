var search = require('./searchResult');
var getVideoInfo = require('./getVideoInfo');

module.exports = async function(q, json){
    json.results = []
    var results = await search(q);
    results.results.forEach((item, index) => {
        if (item.link.includes('javascript:void') && !item.premium && item.hd && index <= 3) {
            json.results.push(getVideoInfo(item.link))
        }
    })
}