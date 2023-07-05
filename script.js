// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        const planet = pickPlanet(listedPlanets);

        console.log(planet);

        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;

        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
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

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });
});