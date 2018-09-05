// Get coordinates
function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation is not supported');
}
}

// If coordinates aren't available, show an erros message
function error() {
alert("That's weird! We couldn't find you!");
}

// Build API url ad get JSON data
function success(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var URL = "https://api.apixu.com/v1/current.json?key=4c04934e9d91459b823135519173112&q=" + lat + "," + lng;
  
  $.ajax({
  url : URL,
  dataType: "json",
  success : function(data) {
    var location = data.location.name + ", " + data.location.country;
    var current = data.current.temp_c + "º" + "C";
    var current_F = data.current.temp_f + "º" + "F";
    var condition = data.current.condition.text;;
    var img = data.current.condition.icon;
    
    // Variables to show temperature in Celsius and Fahrenheit
    var showc = "Celsius | ";
    var showf = "Fahrenheit";
  
    $('#location').html(location);
    $('#current').html(current);
    $('#current_F').html(current_F);
    $('#condition').html(condition);
    $('#img').attr('src', img);
    
    // Links to show temperature in Celsius and Fahrenheit
    $('#showc').html(showc);
    $('#showf').html(showf);
  },
    error: function(data) { 
        alert(JSON.stringify(data)); 
    }       

  });
  
}

// Show temperature in Fahrenheit
function showf() { 
	document.getElementById("current").style.display="none"; 
	document.getElementById("current_F").style.display="block"; 
}

// Show temperature in Celsius
function showc() { 
	document.getElementById("current_F").style.display="none"; 
	document.getElementById("current").style.display="block"; 
}
