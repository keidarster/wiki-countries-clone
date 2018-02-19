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
  	console.log(this.countries);
    
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


