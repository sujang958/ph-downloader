module.exports = download_urls => {
    try {
        return download_urls['1080P'];
    } catch (e) {
        try {
            return download_urls['720P'];
        } catch (e) {
            try {
                return download_urls['480P'];
            } catch (e) {
                return '480P 화질도 없냐 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ';
            }
        }
    }
    // if ('1080P' in download_urls) {
    //     return download_urls['1080P'];
    // } else if ('720P' in download_urls) {
    //     return download_urls['720P'];
    // } else if  ('480P' in download_urls) {
    //     return download_urls['480P'];
    // }
}