// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        const planet = pickPlanet(listedPlanets);

        console.log(planet);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        //  const planet = pickPlanet(listedPlanets)
        //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
    document.getElementById("faultyItems").style.visibility = "hidden"
    form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        console.log(pilot);
        console.log(copilot);
        console.log(fuelLevel);
        console.log(cargoMass);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });
});