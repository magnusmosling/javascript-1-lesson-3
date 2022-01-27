const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class


const cpntainer = document.querySelector(".pet-container")

// Create a html variable to hold our htm in it when we use the loop
let myHTML ="";

// Loop over the array

for (let i = 0; i < pets.length; i++){
    console.log(pets[i])
    let theType = "";

    if(pets[i]. type){
        theType = pent[i].type;
    }else{
        theType = "unknown Type"
    }
    
    
    myHTML = myHTML + `
    <div>
    <h4>${pets[i].theType} </h4>
    <p>${pets[i].age} </p>
    <p>Is this pet friendly ${pets[i].friendly ? "yes" : "no"} </p>
    </div>
    `;

    console.log(myHTML);
// change the innerHTML
