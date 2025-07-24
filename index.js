/**
 * Converting a given temperature from Fahrenheit to Celcius.
 *
 * @param {number} temperature_fahrenheit - Temperature in Fahrenheit
 * @returns {number} Result of converting temperature from Fahrenheit to Celcius
 */
function convertToCelsius(temperature_fahrenheit) {
  celcius = (temperature_fahrenheit - 32) * (5 / 9);
  return celcius;
}

/**
 * Generating a description for a given temperature in terms of celcius.
 *
 * @param {number} temperature_fahrenheit - Temperature in Fahrenheit
 * @returns {string} String description of the temperature in celcius and what the temperature will feel like.
 */
function describeFahrenheit(temperature_fahrenheit) {
  const temperature_celcius = convertToCelsius(temperature_fahrenheit);
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

  return `${temperature_fahrenheit} degrees Farenheit is ${temperature_celcius} in degrees Celcius which is ${description}`;
}

// Prompting the user to provide a temperature in Fahrenheit and returning a description of the temperature in terms of Celcius.
let temperature_fahrenheit = prompt(
  "Please provide a temperature in Fahrenheit."
);

const description = describeFahrenheit(temperature_fahrenheit);
alert(description);
