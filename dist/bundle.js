!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){(new class{constructor(){var t=new XMLHttpRequest;t.open("GET","https://restcountries.eu/rest/v2/all",!1),t.send();var e=JSON.parse(t.responseText);this.countries=e,console.log(this.countries),this.string=document.getElementById("tbody"),this.searchEventListener()}printCountries(){""!==document.getElementById("searchcountry").value&&(this.countries=this.countries.filter(t=>t.name===document.getElementById("searchcountry").value)),"pop=asc"===window.location.search.substr(1)?this.countries=this.countries.sort(function(t,e){return t.population-e.population}):"pop=desc"===window.location.search.substr(1)&&(this.countries=this.countries.sort(function(t,e){return e.population-t.population}));for(var t="",e=0;e<this.countries.length;e++)t+=`<tr>\n          <td>${e+1}</td>\n          <td> <img src="${this.countries[e].flag}" height="20" width="35">${this.countries[e].name}</td>\n          <td>${this.countries[e].population}</td>\n          <td>${(this.countries[e].population/76e8*100).toFixed(4)}%</td>\n        </tr>`;this.string.innerHTML=t}searchEventListener(){document.getElementById("searchbtn").addEventListener("click",t=>{this.printCountries()})}}).printCountries()}]);