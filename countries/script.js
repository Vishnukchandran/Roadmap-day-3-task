const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const countriesData = JSON.parse(xhr.response);

  countriesData.forEach(country => {
    console.log(`
      Name: ${country.name.common}
      Region: ${country.region}
      Sub-region: ${country.subregion}
      Population: ${country.population}
    `);
  });
};