const apiKey= "37832e963861abe4458ef60a4cc4ca1b" ;
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchInput=document.querySelector(".search-box input");
const searchButton=document.querySelector(".search-box button");
const weatherIcon=document.querySelector(".icon")
const showWeather=document.querySelector(".city1");
const showWeather1=document.querySelector(".city2");
const showWeather2=document.querySelector(".city3");
const apiKey1= "37832e963861abe4458ef60a4cc4ca1b" ;
const apiUrl1= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=New York";
const apiKey2= "37832e963861abe4458ef60a4cc4ca1b" ;
const apiUrl2= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Hong Kong";
const apiKey3= "37832e963861abe4458ef60a4cc4ca1b" ;
const apiUrl3= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Seoul";


async function  tableWeather() {
    const response=await fetch(apiUrl1 + `&appid=${apiKey1}`)
    var data= await response.json();

    console.log(data)

    document.querySelector(".city1").innerHTML=data.name.toUpperCase()
    document.querySelector(".tb-data").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".tb-wind").innerHTML=data.wind.speed+ " km/hr";
    document.querySelector(".tb-humidity").innerHTML=data.main.humidity+ "%";
}
showWeather.addEventListener("Onshow",()=>{
        tableWeather(value)
    })
tableWeather()

async function  tableWeather1() {
    const response=await fetch(apiUrl2 + `&appid=${apiKey2}`)
    var data= await response.json();

    console.log(data)

    document.querySelector(".city2").innerHTML=data.name.toUpperCase()
    document.querySelector(".tb-data1").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".tb-wind1").innerHTML=data.wind.speed+ " km/hr";
    document.querySelector(".tb-humidity1").innerHTML=data.main.humidity+ "%";
}
showWeather1.addEventListener("Onshow",()=>{
        tableWeather1(value)
    })
tableWeather1()

async function  tableWeather2() {
    const response=await fetch(apiUrl3 + `&appid=${apiKey3}`)
    var data= await response.json();

    console.log(data)

    document.querySelector(".city3").innerHTML=data.name.toUpperCase()
    document.querySelector(".tb-data2").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".tb-wind2").innerHTML=data.wind.speed+ " km/hr";
    document.querySelector(".tb-humidity2").innerHTML=data.main.humidity+ "%";
}
showWeather2.addEventListener("Onshow",()=>{
        tableWeather2(value)
    })
tableWeather2()


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    var data= await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ " km/hr";
    document.querySelector(".feel").innerHTML=data.main.feels_like;
    
    if(data.weather[0].main == "Clear"){
        weatherIcon.src="./images/clear.png"
    }
    else if(data.weather[0].main == "CLodus"){
        weatherIcon.src="./images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="./images/dizzle.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="./images/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="./images/mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src="./images/snow.png"
    }
}

searchButton.addEventListener("click",()=>{
    checkWeather(searchInput.value)
})
