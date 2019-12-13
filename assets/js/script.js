var apiKey = "ef9485652d4bc5c3b04bd6d4dba28a41";

var apiURL = "https://api.openweathermap.org/data/2.5/weather?";

$("#btn-search").click(function() {
  var cityName = $("#cityName").val();

  var queryURL = apiURL + "appid=" + apiKey + "&q=" + cityName;

  if (cityName !== "") {
    $.get(queryURL, function(result) {
      console.log(result);
      var newTemp = ((result.main.temp - 273.15) * 9) / 5 + 32;

      console.log(result.name);
      console.log("Temperature: " + newTemp.toFixed(2) + " F");
      console.log("Humidity: " + result.main.humidity + "%");
      console.log("Wind Speed: " + result.wind.speed + " mph");

      var newDiv = $("<div class='cityBlock'></div>");
      var newH2 = $("<h3>" + result.name + "</h3>");
      var pTemp = $("<p>Temperature: " + newTemp.toFixed(2) + " F</p>");
      var pHumidity = $("<p>Humidity: " + result.main.humidity + "%</p>");
      var pWind = $("<p>Wind Speed: " + result.wind.speed + " mph</p>");

      newDiv.append(newH2, pTemp, pHumidity, pWind);

      $("#cityDisplay").append(newDiv);

    });
  }
});
