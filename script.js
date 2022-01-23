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

// Button onClick Events
function austinSearch() {
    document.getElementById("searchBar").value = "Austin";
    weather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();

}

function chicagoSearch() {
    document.getElementById("searchBar").value = "Chicago";
    weather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
}

function newYorkSearch() {
    document.getElementById("searchBar").value = "New York";
    weather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
}

function orlandoSearch() {
    document.getElementById("searchBar").value = "Orlando";
    weather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
}

function sanFranciscoSearch() {
    document.getElementById("searchBar").value = "San Francisco";
    weather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
}

function seattleSearch() {
    document.getElementById("searchBar").value = "Seattle";
    weather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
}

function denverSearch() {
    document.getElementById("searchBar").value = "Denver";
    weather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
}

function atlantaSearch() {
    document.getElementById("searchBar").value = "Atlanta";
    weather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
}





// Day One
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
        const { icon } = data.list[15].weather[0];
        const { temp, humidity } = data.list[15].main;
        const { speed } = data.list[15].wind;
        const { dt_txt } = data.list[15];
        document.querySelector(".iconDayOne").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempOne").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityOne").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindOne").innerText = "Wind: " + speed + "km/h";
        document.getElementById("forecastDateOne").innerText = dt_txt;
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


// Day Two
let dailyWeatherTwo = {
    "apiKey": "f029df65dad8c980dd6e8213893e1f7e",
    fetchDailyWeatherTwo: function (dailyCityTwo) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
        + dailyCityTwo 
        + "&units=metric&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayDailyWeatherTwo(data));
    },
    displayDailyWeatherTwo: function(data) {
        const { icon } = data.list[23].weather[0];
        const { temp, humidity } = data.list[23].main;
        const { speed } = data.list[23].wind;
        const { dt_txt } = data.list[23];
        document.querySelector(".iconDayTwo").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempTwo").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityTwo").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindTwo").innerText = "Wind: " + speed + "km/h";
        document.getElementById("forecastDateTwo").innerText = dt_txt;
    },

    search: function () {
        this.fetchDailyWeatherTwo(document.getElementById("searchBar").value);
    }
};

document.getElementById("searchButton").addEventListener("click", function() {
    dailyWeatherTwo.search();
})

document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        dailyWeatherTwo.search();
    }
})


// Day Three
let dailyWeatherThree = {
    "apiKey": "f029df65dad8c980dd6e8213893e1f7e",
    fetchDailyWeatherThree: function (dailyCityThree) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
        + dailyCityThree 
        + "&units=metric&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayDailyWeatherThree(data));
    },
    displayDailyWeatherThree: function(data) {
        const { icon } = data.list[31].weather[0];
        const { temp, humidity } = data.list[31].main;
        const { speed } = data.list[31].wind;
        const { dt_txt } = data.list[31];
        document.querySelector(".iconDayThree").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempThree").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityThree").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindThree").innerText = "Wind: " + speed + "km/h";
        document.getElementById("forecastDateThree").innerText = dt_txt;
    },

    search: function () {
        this.fetchDailyWeatherThree(document.getElementById("searchBar").value);
    }
};

document.getElementById("searchButton").addEventListener("click", function() {
    dailyWeatherThree.search();
})

document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        dailyWeatherThree.search();
    }
})


// Day Four
let dailyWeatherFour = {
    "apiKey": "f029df65dad8c980dd6e8213893e1f7e",
    fetchDailyWeatherFour: function (dailyCityFour) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
        + dailyCityFour 
        + "&units=metric&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayDailyWeatherFour(data));
    },
    displayDailyWeatherFour: function(data) {
        const { icon } = data.list[39].weather[0];
        const { temp, humidity } = data.list[39].main;
        const { speed } = data.list[39].wind;
        const { dt_txt } = data.list[39];
        document.querySelector(".iconDayFour").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempFour").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityFour").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindFour").innerText = "Wind: " + speed + "km/h";
        document.getElementById("forecastDateFour").innerText = dt_txt;
    },

    search: function () {
        this.fetchDailyWeatherFour(document.getElementById("searchBar").value);
    }
};

document.getElementById("searchButton").addEventListener("click", function() {
    dailyWeatherFour.search();
})

document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        dailyWeatherFour.search();
    }
})


// Day Five
let dailyWeatherFive = {
    "apiKey": "f029df65dad8c980dd6e8213893e1f7e",
    fetchLonLat: function (dailyCityFive) {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" 
        + dailyCityFive 
        + "&limit=5&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayLonLat(data));
    },

    displayLonLat: function (data) {
        const { lat } = data[1];
        const { lon } = data[1];
        const latFive = lat;
        const lonFive = lon;
    },

    fetchDailyWeatherFive: function () {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" 
        + latFive 
        + "&lon=" + lonFive
        + "&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayDailyWeatherFive(data));
    },
    displayDailyWeatherFive: function(data) {
        const { icon } = data.list.weather[0];
        const { temp, humidity } = data.list[9].main;
        const { speed } = data.list[9].wind;
        const { dt_txt } = data.list[9];
        document.querySelector(".iconDayFive").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempFive").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityFive").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindFive").innerText = "Wind: " + speed + "km/h";
        document.getElementById("forecastDateFive").innerText = dt_txt;
    },

    search: function () {
        this.fetchDailyWeatherFive(document.getElementById("searchBar").value);
    }
};


document.getElementById("searchButton").addEventListener("click", function() {
    dailyWeatherFive.search();
})

document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        dailyWeatherFive.search();
    }
})



