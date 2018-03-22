// handlebars
// 1. get html
var source = $('#restaurant-template').html();
// 2. use handlebars compile
var template = Handlebars.compile(source);

var restaurants = [
	{
		"name": "Big Star",
		"image": "images/big_star.jpg",
		"description": "description of big star",
		"address": "123 Main St. Chicago, IL 60614",
		"hours": "API data11 am - 11 pm"
	}
];

var request = {
  placeId: 'ChIJwwvDb8fSD4gRb54qO3OOpVA'
};



// 3. is this where my object constructor goes????
//constructor function to create a restaurant tile object
var Restaurant = function (name, image, description, address, hours) {
	this.name = name;
	this.image = image;
	this.description = description;
	this.address = address;
	this.hours = hours;
};

// 4. pass it into template

// add a new tile
for (var i = 0; i < restaurants.length; i++) {
	var r = restaurants[i];

	var restaurant = new Restaurant(r.name, r.image, r.description, r.address, r.hours);

	var newTile = template(restaurant);

	$('#allTiles').append(newTile);

}
//var bigStar = new Restaurant("Big Star", "images/big_star.jpg", "description of big star", "123 Main St. Chicago, IL 60614", "API data11 am - 11 pm");

// var newTile = template(bigStar);

// append html to the DOM


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


	var service = new google.maps.places.PlacesService(map);
	service.getDetails(request, callback);

	function callback(place, status) {
	  // if (status == google.maps.places.PlacesServiceStatus.OK) {
	  //   createMarker(place);
	  // }

		console.log(place);
	}
}
