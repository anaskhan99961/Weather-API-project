const apiKey="92c0f0cada1cad93c44d48103f817eab";

function getWeather() {
    let city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;}
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText = "Temperature: " + data.main.temp + " °C";
            document.getElementById("Weather").innerText = "Weather: " + data.weather[0].description;
            
        })       }


