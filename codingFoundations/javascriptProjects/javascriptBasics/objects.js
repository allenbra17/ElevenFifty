//objects

let name = {
    firstName: 'Billy',
    lastName:  'Adams'
};

let netflix = {
    name: 'Great British Bakeoff',
    seasonInfo: {
        season1: {
            numberOfEpisodes: 12,
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: "Ganache"}
            ],
        },
    },
};
 console.log("All data:", netflix); //Output is all data from above
 console.log(netflix.name); //Output is Great British Bakeoff
 console.log("Season 1: ", netflix.seasonInfo.season1); //Output is Season 1 info
 console.log(
     "First Episode :", 
     netflix.seasonInfo.season1.episodeInfo[0].episodeName
     ); //First episode name of first season

//Assigning Keys to objects using Dod Notation
//objectName.keyName.nameofNewKey = new value;
netflix.seasonInfo.totalSeasons = 12
console.log(netflix.seasonInfo);

//adding in new object
let newEpisode = netflix.seasonInfo.season1.episodeInfo.push ({episode: 7, episodeName: "Derek"})
console.log("Season 1: ", netflix.seasonInfo.season1);

//JSON - JavaScript Object Notation
//Used to send data between servers and clients.
//Use dot and bracket notation to access info within those objects.

let spaceJam = {
    toonSquad: {
        human: 'Micheal Jordan',
        human2: 'Bill Murray',
        rabbit: 'Bugs Bunny',
        duck: 'Daffy Duck'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound'
    },
    nbaPlayers: {
        suns: "Charles Barkley",
        nets: "Shawn Bradley",
        knicks: "Patrick Ewing",
        jazz: "Karl Malone"
    },
};

//object.keys() - returns an array of a given object's properties names
console.log(Object.keys(spaceJam.toonSquad)); //[ 'human', 'human2', 'rabbit', 'duck' ]
console.log(Object.keys(spaceJam.toonSquad.duck)); //[    '0', '1', '2', '3','4', '5', '6', '7','8', '9'] indicies of Daffy Duck (letters)
console.log(Object.keys(spaceJam.toonSquad).toString());

//Object.values() returns an array of the objects own values

console.log(Object.values(spaceJam.toonSquad)); //[ 'Micheal Jordan', 'Bill Murray', 'Bugs Bunny', 'Daffy Duck' ]

//Square Bracket Notation
let sailorScouts = {
    sailorMoon: {
        hairColor: 'blonde',
        height: 5,
        eyeColor: 'green'
    },
    powerFull: true,
};

console.log(sailorScouts["sailorMoon"]);

let baking = {};
baking['zucchini'] = 'make bread';
console.log(baking);
baking['garden'] = ({vegetable: 'zucchini'});
console.log(baking.garden);