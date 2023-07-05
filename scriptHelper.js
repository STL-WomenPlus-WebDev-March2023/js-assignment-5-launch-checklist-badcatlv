// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol>
                      <li>Name: ${name}</li>
                      <li>Diameter: ${diameter}</li>
                      <li>Star: ${star}</li>
                      <li>Distance from Earth: ${distance}</li>
                      <li>Number of Moons: ${moons}</li>
                  </ol>
                  <img src="${imageUrl}">
                  `

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
    
    list.style.visibility = "visible";

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;

    if (cargoLevel <= 10000 && fuelLevel >= 10000 && validateInput(cargoLevel) === "Is a Number" && validateInput(fuelLevel) === "Is a Number") {
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        launchStatus.style.color = "rgb(65, 159, 106)";
    }

    if (fuelLevel < 10000) {
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "rgb(199, 37, 78)";
        fuelStatus.innerHTML = `Fuel level too low for launch`
    }

    if (cargoLevel > 10000) {
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "rgb(199, 37, 78)";
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    }

    if (validateInput(pilot) != "Not a Number" || validateInput(copilot) != "Not a Number" || validateInput(fuelLevel) != "Is a Number" || validateInput(cargoLevel) != "Is a Number") {
        alert("Valid input required for all fields. Please check your entries.");
        list.style.visibility = "hidden";
        launchStatus.style.color = "black";
        launchStatus.innerHTML = `Awaiting Information Before Launch`;
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
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
