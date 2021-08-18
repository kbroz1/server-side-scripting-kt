//how to fetch local data:

// fetch ("testdata.json")
// .then((mydata) => mydata.json())
// .then((mydata) => {
//     console.log(mydata);
//     console.log(mydata.gender);
//     console.log(mydata.name);

//     document.getElementById("puppy").innerHTML= mydata.name;
//     let sample = document.createElement("h2");
//     sample.textContent= mydata.url;
//     document.getElementById("puppy").appendChild(sample);

//     let sampleTwo = document.createElement("h3");
//     sampleTwo.textContent = mydata.phone;
//     document.getElementById("puppy").appendChild(sampleTwo);
// });

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=4887398&appid=1c9197d2f7ab4406554b946dd2ea6c93&units=imperial"
//always have to start API keys with two backslashes // if they don't start with http
//make sure to change the id and appid to the code you need; appid needs to be your personal API key
//the code is at the end of the url on openweathermap
//you have to add "&units=imperial"to the end so that the temp shows up in fahrenheit

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);
    console.log(weatherInfo.name)
    console.log(weatherInfo.main)

    document.getElementById("place").innerHTML=weatherInfo.name;
    document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
    document.getElementById("feels").innerHTML=weatherInfo.main.feels_like;
    document.getElementById("windSped").innerHTML=weatherInfo.wind.speed;
    //how to get the weather icon to show:
    const iconcode= weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path= "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById("weatherIcon").src= icon_path;
});

const movieApiURL = "http://www.omdbapi.com/?i=tt0319061&apikey=ea982ed3&"

fetch (movieApiURL)
.then((response) => response.json())
.then((movieInfo) => {
    console.log(movieInfo)
    document.getElementById("title").innerHTML=movieInfo.Title;
    document.getElementById("year").innerHTML=movieInfo.Year;
    document.getElementById("actors").innerHTML=movieInfo.Actors;
    const iconcodeTwo=movieInfo.Poster;
    console.log(iconcodeTwo);
    const icon_path_two="https://m.media-amazon.com/images/M/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg";
    console.log(icon_path_two);
    document.getElementById("poster").src= icon_path_two;
    document.getElementById("plot").innerHTML=movieInfo.Plot;





});

