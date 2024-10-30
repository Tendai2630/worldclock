let losanglesElement=document.querySelector("#los-angles");
let losanglesDateElement=losanglesElement.querySelector(".date");
let losanglesTimeElement= losanglesElement.querySelector(".time");
let losanglesTime = moment().tz("America/Los-angles");

losanglesDateElement.innerHTML=losanglesTime.format("MMMM Do YYYY");

losanglesTimeElement.innerHTML= losAnglesTime.format("h:mm:ss [<small>]A[</small>]");

let sydneyElement=document.querySelector("#sydeny");
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTimeElement= sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia");

sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY");

sydneyTimeElement.innerHTML= sydneyTime.format("h:mm:ss [<small>]A[</small>]");

function updatecity(event){
    letcityTimeZone= event.target.value;
    let cityTime =moment().tz(cityTimeZone);
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML= <div class ="city">
     <div>
        <h2>cityTimeZone</h2>
         <div>class="date"{cityTime}.format("MMMM Do YYYY")</div> 
        <div>
        <div class="time">${cityTime.format("h :mm:ss"  )}<small>${cityTime.format ("A")}</small></div>
         
        </div>
        </div> 
        </div>};
    

updateTime();
setInterval(updateTime ,1000)
let citiesselectElement=document.querySelector("#city");
citiesselectElement.addEventListener("change",updatecity);


