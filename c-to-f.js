function getCelsiusToFahrenheit(targetId, inputId) {
    let celsius = document.getElementById(inputId).value;
    let fahrenheit = ((9 / 5) * celsius) + 32;
    let target = document.getElementById(targetId);
    target.innerHTML = "Celsius to Fahrenheit: " + fahrenheit + "\u00B0" + "F";
}
function getFahrenheitToCelsius(targetId, inputId) {
    let fahrenheit = document.getElementById(inputId).value;
    let celsius = ((5 / 9) * (fahrenheit - 32));
    let target = document.getElementById(targetId);
    target.innerHTML = "Fahrenheit to Celsius: " + celsius + "\u00B0" + "C";
}