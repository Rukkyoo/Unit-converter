/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let massCalc = document.getElementById("mass-calc");
let lengthCalc = document.getElementById("length-calc");
let volumeCalc = document.getElementById("volume-calc");
const inputBtn = document.getElementById("input-btn");
let textBox = document.getElementById("text-box");

inputBtn.onclick = function () {
  if (textBox.value === "") {
    lengthCalc.textContent = `Please input your value in the input field`;
    volumeCalc.textContent = `Please input your value in the input field`;
    massCalc.textContent = `Please input your value in the input field`;
  } else {
    let feetCalc = textBox.value * 3.281;
    let metersCalc = textBox.value / 3.281;
    let gallonsCalc = textBox.value * 0.264;
    let litersCalc = textBox.value / 0.264;
    let poundsCalc = textBox.value * 2.204;
    let kilogramsCalc = textBox.value / 2.204;
    lengthCalc.textContent = `${textBox.value} meters = ${feetCalc} feet | ${textBox.value} feet = ${metersCalc} meters`;
    volumeCalc.textContent = `${textBox.value} liters = ${gallonsCalc} gallons | ${textBox.value} gallons = ${litersCalc} liters`;
    massCalc.textContent = `${textBox.value} kilograms = ${poundsCalc} pounds | ${textBox.value} pounds = ${kilogramsCalc} kilograms`;
  }
};

function baseState() {
  lengthCalc.textContent = `0 meters = 0 feet | 0 feet = 0 meters`;
  volumeCalc.textContent = `0 liters = 0 gallons | 0 gallons = 0 liters`;
  massCalc.textContent = `0 kilograms = 0 pounds | 0 pounds = 0 kilograms`;
}

baseState();

