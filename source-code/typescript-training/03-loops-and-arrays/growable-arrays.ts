let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

sportsTwo.push("Baseball");
sportsTwo.push("Futbol");

for(let i=0;i<sportsTwo.length; i++){
    console.log(sportsTwo[i]);
}

console.log("---------BLEP--------");

for (let tempSport of sportsTwo) {
    if(tempSport == "Golf"){
        console.log(tempSport + "  MY FAV");
    } else {
        console.log(tempSport);
    }
}