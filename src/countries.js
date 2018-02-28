class countriesList {
  
  constructor() {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://restcountries.eu/rest/v2/all", false);
      xhttp.send();
      var response = JSON.parse(xhttp.responseText);
      this.countries = response;
      this.string = document.getElementById("tbody");
      this.searchEventListener();
  }
  
  printCountries() {
    // Search bar for specific countries
    if(document.getElementById("searchcountry").value !== ""){
      this.countries = this.countries.filter(i => i.name === document.getElementById("searchcountry").value)
    }
    // Sorting the population ascending/descending respectively to the query string
    if (window.location.search.substr(1) === "pop=asc") {
      this.countries = this.countries.sort(function (a, b){return a.population - b.population})
    }
    else if (window.location.search.substr(1) === "pop=desc") {
      this.countries = this.countries.sort(function (a, b){return b.population - a.population})
    } 
    var string = "";
    for (var i = 0; i < this.countries.length; i++) {
      string += 
        `<tr>
          <td>${i+1}</td>
          <td> <img src="${this.countries[i].flag}" height="20" width="35">${this.countries[i].name}</td>
          <td>${this.countries[i].capital}</td>
          <td>${this.countries[i].population}</td>
          <td>${(this.countries[i].population / 7600000000 * 100).toFixed(4)}%</td>
        </tr>`;
    }
    this.string.innerHTML = string;
  }
  searchEventListener () {
    document.getElementById("searchbtn").addEventListener("click", e => {
      this.printCountries();
    })
  }
}

var objCountriesList = new countriesList();
objCountriesList.printCountries();


