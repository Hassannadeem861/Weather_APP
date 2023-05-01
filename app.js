

// axios.get('/user?ID=12345')
//    .then(function (response) {
//       // handle success
//       console.log(response.data);
//    })
//    .catch(function (error) {
//       // handle error
//       console.log(error.data);
//    })


let weather = {

   apiKey: "9a2fa1d23bd03f187e478c39b3ea14d4",

   fetchWeather: function (city) {

      fetch(

         "https://api.openweathermap.org/data/2.5/weather?q="
         + city
         + "&units=metric&appid="
         + this.apiKey
      )

         .then((response) => response.json())
         .then((data) => this.displayWeather(data));

   },

   displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      // console.log(name, icon, description, temp, humidity, speed)
      document.querySelector(".city").innerText = "Weather in " + name;
      // document.querySelector(".icon").src = description;
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
      document.querySelector(".weather").classList.remove("loding");
      document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
   },

   search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
   }
};


document.querySelector(".search button").addEventListener("click", function () {

   Weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
   if (event.key == "Enter") {
      weather.search();

   }
});

weather.fetchWeather("Karachi");


