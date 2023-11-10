const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Need a POST request plz!");
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
    } else if (type.toLowerCase() === "kg2livre" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from kg to livres (1 kg = 2,20462 livre)
        const livres = (parseFloat(value) * 2.20462).toFixed(3);
        // Log the received data and the converted value
        console.log(`Received data: ${value} Kg. Converted to ${livres} livres..`);
        // Send the converted value in the response
        res.send(`Converted value: ${livres} livres.`);
    } else if (type.toLowerCase() === "c2f" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from Celsius to Fahrenheit (( °C × 9/5) + 32 = 32 °F)
        const F = (parseFloat(value) * 9 / 5) + 32;
        // Log the received data and the converted value
        console.log(`Received data: ${value} °C. Converted to ${F} °F.`);
        // Send the converted value in the response
        res.send(`Converted value: ${F} °F.`);
    } else if (type.toLowerCase() === "liter2gallon" && !isNaN(value)) {
    // log to server console for debugging
    console.log("received data: " + req.body.type + " for " + req.body.value);
    // Convert value from liter to galon (liter = 0.264172 gallon)
    const gallon = (parseFloat(value) * 0.264172).toFixed(3);
    // Log the received data and the converted value
    console.log(`Received data: ${value} liters. Converted to ${gallon} gallons.`);
    // Send the converted value in the response
    res.send(`Converted value: ${gallon} gallons.`);
} else if (type.toLowerCase() === "inch2cm" && !isNaN(value)) {
    // log to server console for debugging
    console.log("received data: " + req.body.type + " for " + req.body.value);
    // Convert value from inc to centimeters (1 inc = 2.54 centimeters)
    const cm = parseFloat(value) * 2.54;
    // Log the received data and the converted value
    console.log(`Received data: ${value} inc. Converted to ${cm} centimeters.`);
    // Send the converted value in the response
    res.send(`Converted value: ${cm} centimeters.`);
} else {
    // If the type is defined or the value is not a valid number, send an e>
    res.status(400).send("Invalid input.");
    }
  });

module.exports = router;