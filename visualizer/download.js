
var https = require('https');
var fs = require('fs');
var options = {
    host: 'adventofcode.com',
    path: '/2021/leaderboard/private/view/1188101.json',
    method: 'GET',
    headers: {
        "Cookie": "session=53616c7465645f5f7a91ebb663fcf476b80aa82c1f9c9526ff8407d0d3e2aa86129640c1714d5fc68786d1b3445bc990", // POINTER its unfortunately useless
        "Set-Cookie": "session=53616c7465645f5f7a91ebb663fcf476b80aa82c1f9c9526ff8407d0d3e2aa86129640c1714d5fc68786d1b3445bc990" // POINTER its unfortunately useless
    }
};

function downloadJson(urlToPrint){
    var file = fs.createWriteStream("leaderboard.json");
    var request = https.get(urlToPrint, function(response) {
      response.on("finish",function(){
        console.log( fs.readFileSync("leaderboard.json",{encoding:"utf8"}));
      }).pipe(file);
    });
}

downloadJson(options)
