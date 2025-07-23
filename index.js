function convertToCelsius(temperature_fahrenheit) {
  celcius = (temperature_fahrenheit - 32) * (5 / 9);
  return celcius;
}

function describeFahrenheit(temperature_fahrenheit) {
  let temperature_celcius = convertToCelsius(temperature_fahrenheit);
  let description;
  if (temperature_celcius < 0) {
    description = "very cold";
  } else if (temperature_celcius < 20) {
    description = "cold";
  } else if (temperature_celcius < 30) {
    description = "warm";
  } else if (temperature_celcius < 40) {
    description = "hot";
  } else if (temperature_celcius >= 40) {
    description = "very hot";
  }

  return `${temperature_celcius}ºC, is ${description}`;
}

let temperature_fahrenheit = prompt(
  "Please provide a temperature in Fahrenheit"
);
function display(temperature_fahrenheit) {
  let result = describeFahrenheit(temperature_fahrenheit);
  let output = `${temperature_fahrenheit}ºF, also ${result}`;
  document.getElementById("display_result").innerHTML = output;
}

display(temperature_fahrenheit);
