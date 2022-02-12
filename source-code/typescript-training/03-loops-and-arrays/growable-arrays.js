var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
for (var i = 0; i < sportsTwo.length; i++) {
    console.log(sportsTwo[i]);
}
console.log("---------BLEP--------");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSport = sportsTwo_1[_i];
    if (tempSport == "Golf") {
        console.log(tempSport + "  MY FAV");
    }
    else {
        console.log(tempSport);
    }
}
