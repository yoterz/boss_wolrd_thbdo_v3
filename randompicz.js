exports.beer = function () {
    number = 6
    var random = Math.floor(Math.random() * (number - 1 + 1))
    var beerpic = [
        'https://stickershop.line-scdn.net/stickershop/v1/product/1258914/LINEStorePC/main@2x.png;compress=true?__=20161019',
        'https://stickershop.line-scdn.net/stickershop/v1/product/1259989/LINEStorePC/main@2x.png;compress=true?__=20161019',
        'https://pbs.twimg.com/profile_images/424938578376810496/dyNkHXXz.jpeg',
        'https://stickershop.line-scdn.net/stickershop/v1/product/1021012/LINEStorePC/main@2x.png;compress=true',
        'https://stickershop.line-scdn.net/stickershop/v1/product/1306903/LINEStorePC/main@2x.png;compress=true?__=20161019',
        'https://stickershop.line-scdn.net/stickershop/v1/product/1228769/LINEStorePC/main@2x.png;compress=true']

    return {
        beerz: beerpic[random],
       
    }
}


