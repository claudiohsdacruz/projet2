const express = require("express");
const { listeners } = require("process");
const router = express.Router();

const jornaux = require('../../models/jornaux');

router.get("/", (req, res) => {
    res.send("Need a POST request plz!")
});

router.post("/", async (req, res) => {
    // Extract type and value from the request body
    const { type, value } = req.body;
    // Check if the type is "feet2meter" and the value is a valid number
    if (type.toLowerCase() === "feet2meter" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from feet to meters (1 foot = 0.3048 meters)
        const meters = parseFloat(value) * 0.3048;
        // Log the received data and the converted value
        console.log(`Received data: ${value} feet. Converted to ${meters} meter.`);
        // Send the converted value in the response
        res.send(`Converted value: ${meters} meters.`);
    } else if (type.toLowerCase() === "meter2feet" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from meter to feet (1 meter = 3,28084 meters)
        const feet = parseFloat(value) * 3.28084;
        // Log the received data and the converted value
        console.log(`Received data: ${value} meter. Converted to ${feet} feet.`);
        // Send the converted value in the response
        res.send(`Converted value: ${feet} feet.`);
    } else if (type.toLowerCase() === "livre2kg" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from livres to kg (1 livre = 0,453592 livre)
        const kg = (parseFloat(value) * 0.453592).toFixed(3);
        // Log the received data and the converted value
        console.log(`Received data: ${value} livres. Converted to ${kg} kilogrammes.`);
        // Send the converted value in the response
        res.send(`Converted value: ${kg} kilogrames.`);
    } else if (type.toLowerCase() === "kg2livre" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from kg to livres (1 kg = 2,20462 livre)
        const livres = (parseFloat(value) * 2.20462).toFixed(3);
        // Log the received data and the converted value
        console.log(`Received data: ${value} Kg. Converted to ${livres} livres..`);
        // Send the converted value in the response
        res.send(`Converted value: ${livres} livres.`);
    } else if (type.toLowerCase() === "f2c" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from Fahrenheit to Celsius (( °F - 32) * 5/9 = 0 °C)
        const C = (parseFloat(value) - 32) + 5/9;
        // Log the received data and the converted value
        console.log(`Received data: ${value} °F. Converted to ${C} °C.`);
        // Send the converted value in the response
        res.send(`Converted value: ${C} °C.`);
    } else if (type.toLowerCase() === "c2f" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from Celsius to Fahrenheit (( °C × 9/5) + 32 = 32 °F)
        const F = (parseFloat(value) * 9 / 5) + 32;
        // Log the received data and the converted value
        console.log(`Received data: ${value} °C. Converted to ${F} °F.`);
        // Send the converted value in the response
        res.send(`Converted value: ${F} °F.`);
    } else if (type.toLowerCase() === "gallon2litre" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from galon to liter (gallon = 0.3,78541 liter)
        const liter = (parseFloat(value) * 3.78541).toFixed(3);
        // Log the received data and the converted value
        console.log(`Received data: ${value} gallons. Converted to ${liter} liters.`);
        // Send the converted value in the response
        res.send(`Converted value: ${liter} liter.`);
    } else if (type.toLowerCase() === "liter2gallon" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from liter to galon (liter = 0.264172 gallon)
        const gallon = (parseFloat(value) * 0.264172).toFixed(3);
        // Log the received data and the converted value
        console.log(`Received data: ${value} liters. Converted to ${gallon} gallons.`);
        // Send the converted value in the response
        res.send(`Converted value: ${gallon} gallons.`);
    } else if (type.toLowerCase() === "cm2inch" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from centimeters to inches (1 centimeters = 0,393701 inches)
        const inch = parseFloat(value) * 0.393701;
        // Log the received data and the converted value
        console.log(`Received data: ${value} centimeters. Converted to ${inch} inches.`);
        // Send the converted value in the response
        res.send(`Converted value: ${inch} inches.`);
    } else if (type.toLowerCase() === "inch2cm" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from inch to centimeters (1 inch = 2.54 centimeters)
        const cm = parseFloat(value) * 2.54;
        // Log the received data and the converted value
        console.log(`Received data: ${value} inches. Converted to ${cm} centimeters.`);
        // Send the converted value in the response
        res.send(`Converted value: ${cm} centimeters.`);
    } else {
        // If the type is defined or the value is not a valid number, send an e>
        res.status(400).send("Invalid input.");
    }

    // Saving data in DB
    async function saveData() {

        try { 
            // const dateRequest = new Date();
            
            const dataToSave = { 
                IPsource : req.ip,
                type : type,
                // time : dateRequest,
            };
            console.log(typeof(req.ip));
            console.log(typeof(type));
            // console.log(typeof(dateRequest));
      
            const newData = await jornaux.create(dataToSave);
        
            console.log('data save with succes:', newData);
        } catch (error) {
            console.error('Erro:', error);
        } 
    }
    saveData();

  });

module.exports = router;
