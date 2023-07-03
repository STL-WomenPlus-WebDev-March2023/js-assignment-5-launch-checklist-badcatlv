// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    // get the missionTarget div
    // set the inner HTML to this
    // fill in the information that is passed in
    // Here is the HTML formatting for our mission target div.
    /*
     // Here is the HTML formatting for our mission target div.
     /*
                  <h2>Mission Destination</h2>
                  <ol>
                      <li>Name: </li>
                      <li>Diameter: </li>
                      <li>Star: ${star}</li>
                      <li>Distance from Earth: </li>
                      <li>Number of Moons: </li>
                  </ol>
                  <img src="">
     */
}

function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    } else {
        return "Not a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


    if(validateInput(pilot)=== "Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty") {
        alert("All fields require input.");
    }

    if(validateInput(fuelLevel)==="Not a Number" || validateInput(cargoLevel)==="Not a Number" || validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number") {
        alert("Valid input required.");
    }

}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });
    return planetsReturned;
}

function pickPlanet(planets) {

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
