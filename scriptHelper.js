// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
    }

    if (isNaN(parseInt(testInput)) === 0) {
        return "Not a Number";
    } else {
        return "Is a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const formSubmit = document.getElementById("formSubmit");
    const pilotName = document.querySelector("input[name=pilotName");
    const copilotName = document.querySelector("input[name=copilotName");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");

    // check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
    // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input


    // set the list.style.visibility = 'visible'
    // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
    // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
    // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"

    // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"

    // if both fuel and cargo are good
    // change the launchStatus to "Shuttle is Ready for Launch" and color to green
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
