function updateTime(){

let losAngelesElement=document.querySelector("#los-angeles");
if(losAngelesElement){
let losAngelesDateElement=losAngelesElement.querySelector(".date");
let losAngelesTimeElement= losangelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America_Los-angeles");

losAngelesDateElement.innerHTML=losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML= losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
}
let sydneyElement=document.querySelector("#sydeny");
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTimeElement= sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia");

sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY");

sydneyTimeElement.innerHTML= sydneyTime.format("h:mm:ss [<small>]A[</small>]");

function updatecity(event) {
    let cityTimeZone = event.target.value ;
    if (cityTimezone=== "current ")
         {
      cityTimeZone =moment().tz.guess();
    }
    let cityName =cityTimeZone.replace("", "").split("/")[1];
    let cityTime=moment().tz(citytimeZone);
    let citiesElement=document.querySelector("#cities");
    
    citiesElement.innerHTML =<div class ="city">
        <div><h2>${cityName}</h2>
         <div class="date">{cityTime.format("MMMM Do YYYY")}</div> 
        </div>
        <div class="time">${cityTime.format("h:mm:ss"  )}<small>${cityTime.format 
        ("A")}</small>
        </div>
        </div>
        
        
}
        
        
    

updateTime();
setInterval(updateTime ,1000)
let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change",updatecity);
}
