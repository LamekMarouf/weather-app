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
        const { icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.getElementById("cityName").innerText = name;
        document.getElementById("wind").innerText = "Wind: " + speed + "km/h";
        document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
        document.getElementById("temperature").innerText = "Temperature: " + temp + "°C";
        document.querySelector(".iconMain").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    },

    search: function () {
        this.fetchWeather(document.getElementById("searchBar").value);
    }
};

document.getElementById("searchButton").addEventListener("click", function() {
    weather.search();
})

document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

let dailyWeatherOne = {
    "apiKey": "f029df65dad8c980dd6e8213893e1f7e",
    fetchDailyWeatherOne: function (dailyCityOne) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
        + dailyCityOne 
        + "&units=metric&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayDailyWeatherOne(data));
    },
    displayDailyWeatherOne: function(data) {
        const { icon } = data.list[9].weather[0];
        const { temp, humidity } = data.list[9].main;
        const { speed } = data.list[9].wind;
        const { dt_txt } = data.list[9];
        document.querySelector(".iconDayOne").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempOne").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityOne").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindOne").innerText = "Wind: " + speed + "km/h";
        document.getElementById("forecastDateOne").innerText = dt_txt.pop();
    },

    search: function () {
        this.fetchDailyWeatherOne(document.getElementById("searchBar").value);
    }
};

document.getElementById("searchButton").addEventListener("click", function() {
    dailyWeatherOne.search();
})

document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        dailyWeatherOne.search();
    }
})

