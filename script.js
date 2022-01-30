const currentDate = new Date(new Date().getTime());
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
document.getElementById("date").innerText = day + "/" + month + "/" + year

const tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const tomorrowDay = tomorrowsDate.getDate();
const tomorrowMonth = tomorrowsDate.getMonth() + 1;
const tomorrowYear = tomorrowsDate.getFullYear();
document.getElementById("forecastDateOne").innerText = tomorrowDay + "/" + tomorrowMonth + "/" + tomorrowYear

const twoDaysDate = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
const twoDaysDay = twoDaysDate.getDate();
const twoDaysMonth = twoDaysDate.getMonth() + 1;
const twoDaysYear = twoDaysDate.getFullYear();
document.getElementById("forecastDateTwo").innerText = twoDaysDay + "/" + twoDaysMonth + "/" + twoDaysYear;

const threeDaysDate = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
const threeDaysDay = threeDaysDate.getDate();
const threeDaysMonth = threeDaysDate.getMonth() + 1;
const threeDaysYear = threeDaysDate.getFullYear();
document.getElementById("forecastDateThree").innerText = threeDaysDay + "/" + threeDaysMonth + "/" + threeDaysYear

const fourDaysDate = new Date(new Date().getTime() + 96 * 60 * 60 * 1000);
const fourDaysDay = fourDaysDate.getDate();
const fourDaysMonth = fourDaysDate.getMonth() + 1;
const fourDaysYear = fourDaysDate.getFullYear();
document.getElementById("forecastDateFour").innerText = fourDaysDay + "/" + fourDaysMonth + "/" + fourDaysYear

const fiveDaysDate = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
const fiveDaysDay = fiveDaysDate.getDate();
const fiveDaysMonth = fiveDaysDate.getMonth() + 1;
const fiveDaysYear = fiveDaysDate.getFullYear();
document.getElementById("forecastDateFive").innerText = fiveDaysDay + "/" + fiveDaysMonth + "/" + fiveDaysYear


let dailyWeather = {
    "apiKey": "f029df65dad8c980dd6e8213893e1f7e",
    fetchLonLat: function (dailyCity) {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" 
        + dailyCity
        + "&limit=5&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayLonLat(data));
    },

    displayLonLat: function (data) {
        const { lat } = data[0];
        const { lon } = data[0];
        const { name } = data[0];
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" 
        + lat 
        + "&lon=" + lon 
        +"&units=metric"
        + "&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayDailyWeather(data));
        document.getElementById("cityName").innerText = name;
        console.log(lat, lon, uvi);
    },
    displayDailyWeather: function(data) {
        const { icon } = data.daily[0].weather[0];
        const { day } = data.daily[0].temp;
        const { wind_speed } = data.daily[4];
        const { humidity } = data.daily[4];
        const { uvi } = data.daily[4];
        document.getElementById("iconMain").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("temperature").innerText = "Temp: " + day + "°C";
        document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
        document.getElementById("wind").innerText = "Wind: " + wind_speed + "km/h";
        document.getElementById("uvIndexNumber").innerText = uvi;
        if (uvi <= 2) {
            document.getElementById("uvIndexNumber").classList.add("uvLow");
            document.getElementById("uvIndexNumber").classList.remove("uvMedium")
            document.getElementById("uvIndexNumber").classList.remove("uvHigh")
            document.getElementById("uvIndexNumber").classList.remove("uvVeryHigh")
            document.getElementById("uvIndexNumber").classList.remove("uvExtreme")
        } else if (uvi > 2 && uvi <= 5) {
            document.getElementById("uvIndexNumber").classList.remove("uvLow");
            document.getElementById("uvIndexNumber").classList.add("uvMedium")
            document.getElementById("uvIndexNumber").classList.remove("uvHigh")
            document.getElementById("uvIndexNumber").classList.remove("uvVeryHigh")
            document.getElementById("uvIndexNumber").classList.remove("uvExtreme")
        } else if (uvi > 5 && uvi <= 8) {
            document.getElementById("uvIndexNumber").classList.remove("uvLow");
            document.getElementById("uvIndexNumber").classList.remove("uvMedium")
            document.getElementById("uvIndexNumber").classList.add("uvHigh")
            document.getElementById("uvIndexNumber").classList.remove("uvVeryHigh")
            document.getElementById("uvIndexNumber").classList.remove("uvExtreme")
        } else if (uvi > 8 && uvi <= 10) {
            document.getElementById("uvIndexNumber").classList.remove("uvLow");
            document.getElementById("uvIndexNumber").classList.remove("uvMedium")
            document.getElementById("uvIndexNumber").classList.remove("uvHigh")
            document.getElementById("uvIndexNumber").classList.add("uvVeryHigh")
            document.getElementById("uvIndexNumber").classList.remove("uvExtreme")
        } else {
            document.getElementById("uvIndexNumber").classList.remove("uvLow");
            document.getElementById("uvIndexNumber").classList.remove("uvMedium")
            document.getElementById("uvIndexNumber").classList.remove("uvHigh")
            document.getElementById("uvIndexNumber").classList.remove("uvVeryHigh")
            document.getElementById("uvIndexNumber").classList.add("uvExtreme")
        }
    },

    search: function () {
        this.fetchLonLat(document.getElementById("searchBar").value);
    }
};




document.getElementById("searchButton").addEventListener("click", function() {
    dailyWeather.search();
})

document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        dailyWeather.search();
    }
})
// Button onClick Events
function austinSearch() {
    document.getElementById("searchBar").value = "Austin";
    dailyWeather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
    dailyWeatherFive.search();
}

function chicagoSearch() {
    document.getElementById("searchBar").value = "Chicago";
    dailyWeather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
    dailyWeatherFive.search();
}

function newYorkSearch() {
    document.getElementById("searchBar").value = "New York";
    dailyWeather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
    dailyWeatherFive.search();
}

function orlandoSearch() {
    document.getElementById("searchBar").value = "Orlando";
    dailyWeather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
    dailyWeatherFive.search();
}

function sanFranciscoSearch() {
    document.getElementById("searchBar").value = "San Francisco";
    dailyWeather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
    dailyWeatherFive.search();
}

function seattleSearch() {
    document.getElementById("searchBar").value = "Seattle";
    dailyWeather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
    dailyWeatherFive.search();
}

function denverSearch() {
    document.getElementById("searchBar").value = "Denver";
    dailyWeather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
    dailyWeatherFive.search();
}

function atlantaSearch() {
    document.getElementById("searchBar").value = "Atlanta";
    dailyWeather.search();
    dailyWeatherOne.search();
    dailyWeatherTwo.search();
    dailyWeatherThree.search();
    dailyWeatherFour.search();
    dailyWeatherFive.search();
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
        document.querySelector(".iconDayOne").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempOne").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityOne").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindOne").innerText = "Wind: " + speed + "km/h";
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
        document.querySelector(".iconDayTwo").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempTwo").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityTwo").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindTwo").innerText = "Wind: " + speed + "km/h";
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
        document.querySelector(".iconDayThree").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempThree").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityThree").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindThree").innerText = "Wind: " + speed + "km/h";
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
        document.querySelector(".iconDayFour").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempFour").innerText = "Temp: " + temp + "°C";
        document.getElementById("forecastHumidityFour").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindFour").innerText = "Wind: " + speed + "km/h";
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
    fetchLonLatFive: function (dailyCityFive) {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" 
        + dailyCityFive 
        + "&limit=5&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayLonLatFive(data));
    },

    displayLonLatFive: function (data) {
        const { lat } = data[0];
        const { lon } = data[0];
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" 
        + lat 
        + "&lon=" + lon 
        +"&units=metric"
        + "&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayDailyWeatherFive(data));
        console.log(lat, lon);
    },
    displayDailyWeatherFive: function(data) {
        const { icon } = data.daily[4].weather[0];
        const { day } = data.daily[4].temp;
        const { wind_speed } = data.daily[4];
        const { humidity } = data.daily[4];
        document.querySelector(".iconDayFive").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("forecastTempFive").innerText = "Temp: " + day + "°C";
        document.getElementById("forecastHumidityFive").innerText = "Humidity: " + humidity + "%";
        document.getElementById("forecastWindFive").innerText = "Wind: " + wind_speed + "km/h";
    },

    search: function () {
        this.fetchLonLatFive(document.getElementById("searchBar").value);
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

