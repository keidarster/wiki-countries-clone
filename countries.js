class countriesList {
  
  constructor() {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://restcountries.eu/rest/v2/all", false);
      xhttp.send();
      var response = JSON.parse(xhttp.responseText);
      this.countries = response;
      this.string = document.getElementById("tbody")
  }
  
  printCountries() {
    // Sorting the population ascending/descending respectively
    if (window.location.search.substr(1) === "pop=asc") {
      this.countries = this.countries.sort(function (a, b){return a.population - b.population})
    }
    else if (window.location.search.substr(1) === "pop=desc") {
      this.countries = this.countries.sort(function (a, b){return b.population - a.population})
    } 
    for (var i = 0; i < this.countries.length; i++) {
      this.string.innerHTML += 
        `<tr>
          <td>${i+1}</td>
          <td> <img src="${this.countries[i].flag}" height="20" width="35">${this.countries[i].name}</td>
          <td>${this.countries[i].population}</td>
          <td>${(this.countries[i].population / 7600000000 * 100).toFixed(4)}%</td>
        </tr>`;
    }
  }
}

var objCountriesList = new countriesList();
objCountriesList.printCountries();


