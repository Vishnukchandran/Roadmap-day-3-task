const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const countriesData = JSON.parse(xhr.response);
  const countryflags = countriesData.map(country => country.flags.png);

  console.log(countryflags);
};