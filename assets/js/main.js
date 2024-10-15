"use strict";

function stringFormCreation(userInput) {
    let userMessage = "";
    console.log(userInput);

    if (userInput.length < 3) {
        userMessage = "Invalid Input";
        return userMessage;
    }

    let LastThreeLetters = userInput.slice(-3);
    userMessage = LastThreeLetters + userInput + LastThreeLetters;
    return userMessage;
}

function displayOutput() {
    let userInput = document.getElementById("userInput").value;
    let outputText = stringFormCreation(userInput);
    document.getElementById("outputText").innerText = outputText;
}
