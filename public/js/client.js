/*jshint esversion: 6 */
const lookUp = () =>{
  var cityname = document.getElementById("cityname").value;
  var countrycode =document.getElementById("countrycode").value;
  return `http://api.openweathermap.org/data/2.5/forecast?q=${cityname},${countrycode}&appid=${api_key}`;
};



function inquiry() {
 const requestData = JSON.parse(this.responseText);
 var cityname = document.getElementById("cityname").value;

 console.log("data",requestData);

   const city = requestData.city.name;
   const country = requestData.city.country;


   document.querySelector("#city").innerHTML = `City: ${city}`;
   document.querySelector("#country").innerHTML = `Country: ${country}`;


};



const requestResourceButton = document.querySelector("#requestResourceButton");


requestResourceButton.addEventListener("click",function(){
  const url = lookUp();
  console.log(url);

  const getName = new XMLHttpRequest();
  getName.addEventListener('load', inquiry);

  getName.open('GET' , url);
  getName.send();
});




