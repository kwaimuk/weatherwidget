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
   const date = requestData.list["0"].dt_txt;
   const date2 = requestData.list["8"].dt_txt;
   const date3 = requestData.list["16"].dt_txt;
   const date4 = requestData.list["24"].dt_txt;
   const date5 = requestData.list["32"].dt_txt;

   const main = requestData.list["0"].main.temp;
   console.log(main);
   const weather = requestData.list["0"].weather;

/*   for(let i= 0, i<4,i++){

   }*/


   document.querySelector("#city").innerHTML = `City: ${city}`;
   document.querySelector("#country").innerHTML = `Country: ${country}`;
   document.querySelector("#one").innerHTML = `Date: ${date}`;
   // document.querySelector("#one").innerHTML = `Date: ${main}`;
   // document.querySelector("#one").innerHTML = `Date: ${weather}`;

   document.querySelector("#two").innerHTML = `Date: ${date2}`;
   document.querySelector("#three").innerHTML = `Date: ${date3}`;
   document.querySelector("#four").innerHTML = `Date: ${date4}`;
   document.querySelector("#five").innerHTML = `Date: ${date5}`;


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




