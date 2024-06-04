let games = document.querySelectorAll('.game');
console.log(games);

games.forEach((game)=>{
    switch(game){
        case games.item(0):
            games.item(0).addEventListener('mouseover',()=>{
                games.item(0).style.backgroundImage = 'url(images/world-of-warcraft.jpg)';
                games.item(0).style.backgroundSize = 'cover';
                games.item(0).querySelector('img').style.visibility = 'hidden';
            })
            games.item(0).addEventListener('mouseout',()=>{
                games.item(0).style.backgroundImage = 'none';
                games.item(0).querySelector('img').style.visibility = 'visible';
            })
        case games.item(1):
            games.item(1).addEventListener('mouseover',()=>{
                games.item(1).style.backgroundImage = 'url(images/fortnite.jpg)';
                games.item(1).style.backgroundSize = 'cover';
                games.item(1).querySelector('img').style.visibility = 'hidden';
            })
            games.item(1).addEventListener('mouseout',()=>{
                games.item(1).style.backgroundImage = 'none';
                games.item(1).querySelector('img').style.visibility = 'visible';
            })
        case games.item(2):
            games.item(2).addEventListener('mouseover',()=>{
                games.item(2).style.backgroundImage = 'url(images/destiny-2.jpg)';
                games.item(2).style.backgroundSize = 'cover';
                games.item(2).querySelector('img').style.visibility = 'hidden';
            })
            games.item(2).addEventListener('mouseout',()=>{
                games.item(2).style.backgroundImage = 'none';
                games.item(2).querySelector('img').style.visibility = 'visible';
            })
        case games.item(3):
            games.item(3).addEventListener('mouseover',()=>{
                games.item(3).style.backgroundImage = 'url(images/dota2.jpg)';
                games.item(3).style.backgroundSize = 'cover';
                games.item(3).querySelector('img').style.visibility = 'hidden';
            })
            games.item(3).addEventListener('mouseout',()=>{
                games.item(3).style.backgroundImage = 'none';
                games.item(3).querySelector('img').style.visibility = 'visible';
            })
        case games.item(4):
            games.item(4).addEventListener('mouseover',()=>{
                games.item(4).style.backgroundImage = 'url(images/genshin-impact.png)';
                games.item(4).style.backgroundSize = 'cover';
                games.item(4).querySelector('img').style.visibility = 'hidden';
            })
            games.item(4).addEventListener('mouseout',()=>{
                games.item(4).style.backgroundImage = 'none';
                games.item(4).querySelector('img').style.visibility = 'visible';
            })
        case games.item(5):
            games.item(5).addEventListener('mouseover',()=>{
                games.item(5).style.backgroundImage = 'url(images/world-of-tanks.jpg)';
                games.item(5).style.backgroundSize = 'cover';
                games.item(5).querySelector('img').style.visibility = 'hidden';
            })
            games.item(5).addEventListener('mouseout',()=>{
                games.item(5).style.backgroundImage = 'none';
                games.item(5).querySelector('img').style.visibility = 'visible';
            })
        case games.item(6):
            games.item(6).addEventListener('mouseover',()=>{
                games.item(6).style.backgroundImage = 'url(images/valorant.jpg)';
                games.item(6).style.backgroundSize = 'cover';
                games.item(6).querySelector('img').style.visibility = 'hidden';
            })
            games.item(6).addEventListener('mouseout',()=>{
                games.item(6).style.backgroundImage = 'none';
                games.item(6).querySelector('img').style.visibility = 'visible';
            })
        case games.item(7):
            games.item(7).addEventListener('mouseover',()=>{
                games.item(7).style.backgroundImage = 'url(images/league-of-legends.jpg)';
                games.item(7).style.backgroundSize = 'cover';
                games.item(7).querySelector('img').style.visibility = 'hidden';
            })
            games.item(7).addEventListener('mouseout',()=>{
                games.item(7).style.backgroundImage = 'none';
                games.item(7).querySelector('img').style.visibility = 'visible';
            })
        case games.item(8):
            games.item(8).addEventListener('mouseover',()=>{
                games.item(8).style.backgroundImage = 'url(images/fc-24.jpg)';
                games.item(8).style.backgroundSize = 'cover';
                games.item(8).querySelector('img').style.visibility = 'hidden';
            })
            games.item(8).addEventListener('mouseout',()=>{
                games.item(8).style.backgroundImage = 'none';
                games.item(8).querySelector('img').style.visibility = 'visible';
            })
        case games.item(9):
            games.item(9).addEventListener('mouseover',()=>{
                games.item(9).style.backgroundImage = 'url(images/escape-from-tarkov.jpg)';
                games.item(9).style.backgroundSize = 'cover';
                games.item(9).querySelector('img').style.visibility = 'hidden';
            })
            games.item(9).addEventListener('mouseout',()=>{
                games.item(9).style.backgroundImage = 'none';
                games.item(9).querySelector('img').style.visibility = 'visible';
            })
        case games.item(10):
            games.item(10).addEventListener('mouseover',()=>{
                games.item(10).style.backgroundImage = 'url(images/apex-legends.jpg)';
                games.item(10).style.backgroundSize = 'cover';
                games.item(10).querySelector('img').style.visibility = 'hidden';
            })
            games.item(10).addEventListener('mouseout',()=>{
                games.item(10).style.backgroundImage = 'none';
                games.item(10).querySelector('img').style.visibility = 'visible';
            })
        case games.item(11):
            games.item(11).addEventListener('mouseover',()=>{
                games.item(11).style.backgroundImage = 'url(images/diablo-2.jpg)';
                games.item(11).style.backgroundSize = 'cover';
                games.item(11).querySelector('img').style.visibility = 'hidden';
            })
            games.item(11).addEventListener('mouseout',()=>{
                games.item(11).style.backgroundImage = 'none';
                games.item(11).querySelector('img').style.visibility = 'visible';
            })
        case games.item(12):
            games.item(12).addEventListener('mouseover',()=>{
                games.item(12).style.backgroundImage = 'url(images/mobile-legends.jpg)';
                games.item(12).style.backgroundSize = 'cover';
                games.item(12).querySelector('img').style.visibility = 'hidden';
            })
            games.item(12).addEventListener('mouseout',()=>{
                games.item(12).style.backgroundImage = 'none';
                games.item(12).querySelector('img').style.visibility = 'visible';
            })
        case games.item(13):
            games.item(13).addEventListener('mouseover',()=>{
                games.item(13).style.backgroundImage = 'url(images/hearthstone.jpg)';
                games.item(13).style.backgroundSize = 'cover';
                games.item(13).querySelector('img').style.visibility = 'hidden';
            })
            games.item(13).addEventListener('mouseout',()=>{
                games.item(13).style.backgroundImage = 'none';
                games.item(13).querySelector('img').style.visibility = 'visible';
            })
        case games.item(14):
            games.item(14).addEventListener('mouseover',()=>{
                games.item(14).style.backgroundImage = 'url(images/overwatch.jpg)';
                games.item(14).style.backgroundSize = 'cover';
                games.item(14).querySelector('img').style.visibility = 'hidden';
            })
            games.item(14).addEventListener('mouseout',()=>{
                games.item(14).style.backgroundImage = 'none';
                games.item(14).querySelector('img').style.visibility = 'visible';
            })
        case games.item(15):
            games.item(15).addEventListener('mouseover',()=>{
                games.item(15).style.backgroundImage = 'url(images/dead-by-daylight.jpg)';
                games.item(15).style.backgroundSize = 'cover';
                games.item(15).querySelector('img').style.visibility = 'hidden';
            })
            games.item(15).addEventListener('mouseout',()=>{
                games.item(15).style.backgroundImage = 'none';
                games.item(15).querySelector('img').style.visibility = 'visible';
            })
    }
})
