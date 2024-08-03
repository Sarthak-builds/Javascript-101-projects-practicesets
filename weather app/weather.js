const weatherURL=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const APIurl="b23664de11703813be2c313f26e437f7";
const cityName= document.querySelector(".search-input");
console.log
const btn=document.querySelector(".search-btn");
const weatherImg=document.querySelector(".imgstatus");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".hum");
const speed=document.querySelector(".speed");

async function checkWeather(city) {
try {
    
 const response= await fetch(weatherURL + city + `&appid=${APIurl}`);
 const data=await response.json();
document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
document.querySelector(".hum").innerHTML=data.main.humidity + "%";
document.querySelector(".speed").innerHTML= data.wind.speed + " km/h";
if (data.weather[0].main=="Clouds") {
    weatherImg.src="clouds.png";
}
else if (data.weather[0].main=="Mist") {
    weatherImg.src="mist.png";
}
else if (data.weather[0].main=="Rain") {
    weatherImg.src="rain.png";
}
else if (data.weather[0].main=="Snow") {
    weatherImg.src="snow.png";
}
else if (data.weather[0].main=="Clear") {
    weatherImg.src="clear.png";
}
else if (data.weather[0].main=="Drizzle") {
    weatherImg.src="drizzle.png";
}
    document.querySelector(".weather").style.display="block";
} catch (error) {
    console.error('Error Occured', error.message);
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

}
}
 btn.addEventListener('click',()=> { 
    checkWeather(cityName.value);
 });
