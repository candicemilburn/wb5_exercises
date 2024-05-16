let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// Who is the Academy Member whose ID is 187?
// Who has been in at least 3 films?
// HARDER: Which Academy Members have been in a film
// that starts with "A"


let theBob = academyMembers.filter((aBob)=>{
    if(aBob.name.indexOf("Bob") !== -1){
        console.log("Both of these actor's name begin with Bob: " + aBob.name);
        }
        return false;
});
console.log(theBob);

let theMember = academyMembers.filter((threeMore)=>{
    if(threeMore.films.length >= 3){
        console.log(" The actors with at least three films are " + threeMore.name);
     }
        return false
});

let theActor = academyMembers.find((member)=>{
    if(member.memID === 187){
        console.log(" The actor with ID number 187 is " + member.name);
     }
        return false
});

// Who has a name that starts with "Bob"?
