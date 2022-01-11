let weather = {
    "apiKey": "f029df65dad8c980dd6e8213893e1f7e",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        ).then((response) => response.json()) 
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.getElementById("cityName").innerText = name;
        document.getElementById("wind").innerText = "Wind: " + speed + "km/h";
        document.getElementById("humidity").innerText = "Humidity: " + humidity;
        document.getElementById("temperature").innerText = "Temperature: " + temp + "°C";
        document.querySelector(".iconMain").src = "https://openweathermap.org/img/wn/" + icon + ".png";

    }
};