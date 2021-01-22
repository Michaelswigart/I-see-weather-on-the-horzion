
citySearch = document.getElementByID.val(citySearch);
var cityResult = document.getElementByID(cityResult);
var humidity = document.getElementById(humidity);
var temp = document.getElementById(temp);
var wind = document.getElementById(wind);
var uv = document.getElementById(uv);
var button = document.getElementById(button);

var recentCitiesArray = [];


updateListOfCities();


$(document).on({
    ajaxStart: function() {}
    ajaxStop: function() {}
});



if(recentCitiesArray.length > 0) {
    
}



var apiKey = "c7fc8f78ab27465e34c7e94240822386"
var queryURL = "api.openweathermap.org/data/2.5/forecast?q={citySearch}&appid=" + apiKey



.then(response => response.json())
.then(data=> console.log(data))

.catch(() => alert("Wrong city name!"))
$("button").click(function(){

    $.ajax;
    url: queryURL;
      method: "GET"

  .then();

$(".city").html("cityResult" + response.name);
$(".wind").text("Wind Speed: " + response.wind.speed)
$(".humidity").text("Humidity: " + response.main.humidity);
 });


//  localStorage.setItem("recentCitiesArray", JSON.stringify(recentCitiesArray));
//  return recentCitiesArray;




    // Transfer content to HTML
    
    

      //$(".uv").text ("UV: "+ response.uv.);//
      

      // Convert the temp to fahrenheit
      
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;

      // add temp content to html
   


      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);






