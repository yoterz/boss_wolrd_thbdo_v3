exports.beer = function () {
    number = 6
    var random = Math.floor(Math.random() * (number - 1 + 1))
    var beerpic = [
        'https://cdn.discordapp.com/attachments/465750861579288587/525627239115784197/main.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAxVHSKW7zKxlQjdA1NE00BgR_SispGoGjyjuaviljXF-IYJmdA',
        'https://pbs.twimg.com/profile_images/424938578376810496/dyNkHXXz.jpeg',
        'http://ku.90sjimg.com/element_origin_min_pic/17/01/08/70105c609446edc0d5a8349f420b8969.jpg',
        'https://pbs.twimg.com/profile_images/973582277228707840/LfFKfxKs_400x400.jpg',
        'https://image.dek-d.com/27/0434/7120/119154500']

    return {
        beerz: beerpic[random],
       
    }
}


exports.nest = function () {
    number = 3
    var random = Math.floor(Math.random() * (number - 1 + 1))
    var nestpic = [
        'https://f.ptcdn.info/904/017/000/1397744420-1025543567-o.jpg',
        'https://image.dek-d.com/27/0573/2645/t_121928659',
        'https://f.ptcdn.info/210/025/000/1415098773-2-o.png']

    return {
        nestz: nestpic[random]
    }
}
