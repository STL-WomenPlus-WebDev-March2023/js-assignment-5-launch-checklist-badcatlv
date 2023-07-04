// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    // get the missionTarget div
    // set the inner HTML to this
    // fill in the information that is passed in
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

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    list.style.visibility = "hidden"

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields require input.");
        launchStatus.innerHTML = `Awaiting Information Before Launch`;
        list.style.visibility = "hidden";
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" || validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Valid input required.");
        launchStatus.innerHTML = `Awaiting Information Before Launch`;
        list.style.visibility = "hidden";
    }

    list.style.visibility = "visible";

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "rgb(199, 37, 78)";
        fuelStatus.innerHTML = `Fuel level too low for launch`
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`
    }

    if (cargoLevel > 10000) {
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "rgb(199, 37, 78)";
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    } else {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }

    if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        launchStatus.style.color = "rgb(65, 159, 106)";
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    // get the json from the response
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
