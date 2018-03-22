// handlebars
// 1. get html
var source = $('#restaurant-template').html();
// 2. use handlebars compile
var template = Handlebars.compile(source);


// 3. is this where my object constructor goes????
//constructor function to create a restaurant tile object
var restaurant = function (name, image, description, address, hours) {
	this.name = name;
	this.image = image;
	this.description = description;
	this.address = address;
	this.hours = hours;
};

// 4. pass it into template
var newTile = template(restaurant);

// add a new tile
var bigStar = new restaurant("Big Star", "images/big_star.jpg", "description of big star", "123 Main St. Chicago, IL 60614", "API data11 am - 11 pm");

// append html to the DOM 
$('#allTiles').html(newTile);


//how do I tie to HTML?
//how do I input image?
//how do I input API data?


// initialize the configuration of map
function initMap() {
  // use JS's built-in Navigator to get user's lat/lng coordinates
  navigator.geolocation.getCurrentPosition(function(position) {
    // create an object to store lat/lng data
    var userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    
    // create a new instance of a map
    // configure map with options object
    var map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 41.874820, lng: -87.636553},
    	zoom: 10,
    	scrollwheel: false
 	});
    
    // create a new marker
    var marker = new google.maps.Marker({
      position: {lat: 41.909368, lng: -87.677111},
      map: map,
      title: 'User Location'
    });

  });
}

initMap();
