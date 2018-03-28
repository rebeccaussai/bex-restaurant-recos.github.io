// FINAL PROJECT details
// created 2 instances for Handlebars:
	// the top div of 11 restaurant tiles had manually curated content
	// the bottom div of 4 tiles utiilized Google Place ID API to input with name, address, hours, open/closed status
	// i was trying to get the hours for 'today' to appear but didn't end up finishing out this construct to match 'today' with the respective day in google place ID API
// tiles animate on hover using jQuery (though I'm not sure why the bottom tiles never worked)
// the map at the bottom utilizes Google Maps API
	// the markers used custom icons and display the location name on click



// handlebars
// 1. get html
var source = $('#restaurant-template').html();
// 2. use handlebars compile
var template = Handlebars.compile(source);

var restaurants = [
		{
			"name": "1. Big Star",
			"image": "images/big_star.jpg",
			"description": "Mexican street food, plus margaritas & other drinks fuel a lively scene at this funky hangout.",
			"address": "1531 N Damen Ave, Chicago, IL 60622",
			"hours": "11 am - 11 pm"
		},
    {
        "name": "2. Mott St.",
        "image": "images/mottst.jpg",
        "description": "Asian-inspired plates &amp; craft cocktails served amid funky furnishings &amp; communal tables.",
        "address": "1401 N Ashland Ave, Chicago, IL 60622",
        "hours": "11 am - 11 pm"
    },
    {
        "name": "3. Monteverde",
        "image": "images/monteverde.jpg",
        "description": "Stylish spot serving refined, contemporary Italian fare such as fresh pastas, plus global wines.",
        "address": "1020 W Madison St, Chicago, IL 60607",
        "hours": "11 am - 11 pm"
    },
    {
        "name": "4. Beermiscuous",
        "image": "images/beermiscuous.jpg",
        "description": "Beer-oriented spot offering 300+ craft brews in a hip, rustic space with a cafe vibe &amp; free WiFi.",
        "address": "2812 N Lincoln Ave, Chicago, IL 60657",
        "hours": "11 am - 11 pm"
    },
    {
        "name": "5. DMK",
        "image": "images/dmk.jpg",
        "description": "Trendy scene where creative burgers go with fries, housemade sodas, craft cocktails & lots of beers.",
        "address": "2954 N Sheffield Ave, Chicago, IL 60657",
        "hours": "11 am - 11 pm"
    },
		{
        "name": "6. Giant",
        "image": "images/giant.jpg",
        "description": "Seasonal New American plates & craft cocktails are served in a funky storefront with local art.",
        "address": "3209 W Armitage Ave, Chicago, IL 60647",
        "hours": "11 am - 11 pm"
    },
		{
        "name": "7. Pequod's",
        "image": "images/pequods.jpg",
        "description": "Casual, brick-walled pizza pub where deep-dish pies with caramelized crusts are served until late.",
        "address": "2207 N Clybourn Ave, Chicago, IL 60614",
        "hours": "11 am - 11 pm"
    },
		{
        "name": "8. The Aviary",
        "image": "images/aviary.jpg",
        "description": "Swanky cocktail lounge with intricate drinks in super creative presentations & clever small bites.",
        "address": "955 W Fulton Market, Chicago, IL 60607",
        "hours": "11 am - 11 pm"
    },
    {
        "name": "9. Floriole",
        "image": "images/floriole.jpg",
        "description": "Bright cafe & bakery offering lunch & an array of European-style pastries in sleek, airy surrounds.",
        "address": "1220 W Webster Ave, Chicago, IL 60614",
        "hours": "11 am - 11 pm"
    },
    {
        "name": "10. Ramen Takeya",
        "image": "images/ramentakeya.jpg",
        "description": "Hip Japanese joint offering ramen, small plates & cocktails in a low-lit space with wood tables.",
        "address": "819 W Fulton Market, Chicago, IL 60607",
        "hours": "11 am - 11 pm"
    },
    {
        "name": "11. Coda di Volpe",
        "image": "images/codadivolpe.jpg",
        "description": "Southern Italian fare including pizza, pasta, steak & seafood served in chic digs with a bar.",
        "address": "3335 N Southport Ave, Chicago, IL 60657",
        "hours": "11 am - 11 pm"
    }
];


// 3.constructor function to create a restaurant tile object
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



// animate tiles
$(".tile").hover(function(){
    $(this).animate({top: '-10px'}, 'fast');
});

$(".tile").mouseleave(function(){
    $(this).animate({top: '0px'}, 'fast');
});


// try to get today's day of week for hours
function getTodaysDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
}



//function getPlaceInfo(restaurant){
    //$.get(PLACEID_API + request + '=AIzaSyDDbt1M_Y1NT5NIZ27O1y0L-PXT5-bEIjs', function(searchResult) {
    //}
//}


// create an array of objects
var request = [
	{
		// Cindy's
		placeId: 'ChIJeYbaOKQsDogRfJrgIMgDNvE'
	},
	{
		// Alinea
		placeId: 'ChIJuyI60yLTD4gROwTWENq1He0'
	},
	{
		// Park & Field
		placeId: 'ChIJQxzTUmzND4gR-otDK2yG-DA'
	},
	{
		//small cheval
		placeId: 'ChIJA_1Ak77SD4gR8aARVOYilzw'
	}
];

// MOTT ST. ChIJKRH5t9rSD4gRCcziAsL8HuI
// MONTEVERDE ChIJMViM4dssDogRdmIJH2z_Q10
// BEERMISCUOUS ChIJW6ETSv7SD4gRU81ef2JzAJ8
// DMK ChIJWTqfEqrTD4gRtKxm-0I-QBo
// GIANT ChIJDQ-5B2jND4gR8fRYgBpWAzQ
// PEQUOD'S ChIJQ6vcPuTSD4gRTbyKKQufF_o
// THE AVIARY ChIJ3e31ltAsDogRZ-NnsEKpkTg
// FLORIOLE ChIJY57TauLSD4gRLXy2EGwagpE
// RAMEN TAKEYA ChIJKafaHdAsDogRLfmNPT6NdR8
// CODA DI VOLPE ChIJTaVCelHSD4gR1kBqfAgvLyU

// 1. get html for 2nd div that's for API tiles
var source = $('#restaurant-API-template').html();
// 2. use handlebars compile
var template = Handlebars.compile(source);
// constructor function to create a restaurant tile object
var RestaurantAPI = function (name, address, weekday_hours, open_now) {
	this.name = name;
	this.address = address;
	this.isOpen = open_now;
	this.weekday_hours = weekday_hours;
	this.open_now = function() {
			if (this.isOpen === true){
				return "yas! it's open!";
			} else {
				return "sit tight, still closed :(";
			}
	this.dayOfWeekHours = function(){
		// didn't get the following function completed / working...
		// JS "get day" https://www.w3schools.com/jsref/jsref_getday.asp
		// string match https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

		// match -- get today's day of week
		// loop through every item in array
		// check to see if item has a string match with today's day of week
		// if they match, return those hours
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;

		// somehow loop through days of week to see if today matches one of the 7 days
		}
		if (n === "Sunday") {
			return place.opening_hours.weekday_text[0]
		} else if (n === "Monday"){
			return place.opening_hours.weekday_text[1]
		}
	}
};
// epoch and unix timestamp converter https://www.epochconverter.com/


// MY GOOGLE API KEY AIzaSyDDbt1M_Y1NT5NIZ27O1y0L-PXT5-bEIjs
// initialize the configuration of map
function initMap(){

			// map options. need to include zoom and center
			var options = {
				zoom: 12,
				center: {lat: 41.905293, lng: -87.637228}
			}

			// new map
			var map = new google.maps.Map(document.getElementById('map'), options);

			// place id
			// documentation https://developers.google.com/places/web-service/place-id
			var service = new google.maps.places.PlacesService(map);
			// loop through every Place ID in variable 'request'
			for (var i = 0; i < request.length; i++){
				service.getDetails(request[i], callback);

			function callback(place, status) {
			     if (status == google.maps.places.PlacesServiceStatus.OK) {
						 console.log(place);

						 var restaurant = new RestaurantAPI(place.name, place.formatted_address, place.opening_hours.periods[new Date().getDay()].open.time, place.opening_hours.open_now);
						 // add a new tile for this restaurant
						 var newTile = template(restaurant);
						 // append it to the div
						 $('#API_tiles').append(newTile);

			     }

						// update the parameters to match the tree structure what's returned from api
						// these are all the pieces i'm asking to return from the Place Id API
			 }
		 }
			// add marker, add to map you want to add it to which is 'map'
			/*
			var marker = new google.maps.Marker({
         	 	position: {lat: 41.874820, lng: -87.636553},
          		map: map,
          		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        	});

			// add an info window
        	var infoWindow = new google.maps.InfoWindow({
        		content: '<h1>Chicago IL</h1>'

        	});

        	// event listener for marker window
        	marker.addListener('click', function(){
        		infoWindow.open(map, marker);
        	}); */

					// array of objects with all the map markers
        	var markers = [
        		{
							// get the lat long coordinates
        			coords: {lat: 41.909, lng: -87.677},
							// add the marker icon
        			iconImage:'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_01.png',
							// this is what shows on click
							content: '<h3>Big Star</h3>'
        		},
        		{
        			coords: {lat: 41.907, lng: -87.667},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_02.png',
        			content: '<h3> Mott St. </h3>'
        		},
        		{
        			coords: {lat: 41.882, lng: -87.652},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_03.png',
        			content: '<h3>Monteverde</h3>'
        		},
						{
							coords: {lat: 41.933, lng: -87.659},
							content: '<h3>beermiscuous</h3>',
							// trying to add custom icon
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_04.png'
						},
						{
							coords: {lat: 41.9369, lng: -87.6540},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_05.png',
							content: '<h3>DMK</h3>'
						},
						{
							coords: {lat: 41.9174, lng: -87.7075},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_06.png',
							content: '<h3>Giant</h3>'
						},
						{
							coords: {lat: 41.9221, lng: -87.6642},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_07.png',
							content: '<h3>Pequods</h3>'
						},
						{
							coords: {lat: 41.8868, lng: -87.6520},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_08.png',
							content: '<h3>The Aviary</h3>'
						},
						{
							coords: {lat: 41.9220, lng: -87.6592},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_09.png',
							content: '<h3>Floriole</h3>'
						},
						{
							coords: {lat: 41.8868, lng: -87.6484},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_10.png',
							content: '<h3>Ramen Takeya</h3>'
						},
						{
							coords: {lat: 41.9428, lng: -87.6636},
							iconImage: 'https://raw.githubusercontent.com/rebeccaussai/bex-restaurant-recos.github.io/master/images/loc_11.png',
							content: '<h3>Coda di Volpe</h3>'
						}
        	];

        	// loop through markers
        	for (var i=0; i < markers.length; i++) {
        		// add marker
        		addMarker(markers[i]);
        	}

        	// old hardcode way

        	//addMarker({
        		//coords: {lat: 41.874820, lng: -87.636553},
        		//iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        		//content: '<h1> Chicago IL</h1>'
        	//});
        	//addMarker({
        		//coords: {lat: 42.04, lng: -87.68},
        		//content: '<h1> evanston </h1>'
        	//});

        	//addMarker({coords: {lat: 41.92, lng: -87.65}});

        	// add marker function
        	function addMarker(props){
	 			var marker = new google.maps.Marker({
	         	 	position: props.coords,
	          		map: map,
	          		//icon: props.iconImage

	        	});
	        // check for custom icon
	        	if(props.iconImage){
	        		// set icon image
	        		marker.setIcon(props.iconImage);
	        	}

	        // check content for location window
	        	if (props.content){

	        	// add an info window
        			var infoWindow = new google.maps.InfoWindow({
        				content: props.content

        			});
        		// event listener for marker window
        			marker.addListener('click', function(){
        					infoWindow.open(map, marker);
        			});
	        	}
        	}
		}

// https://maps.googleapis.com/maps/api/place/details/output?parameters
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.909368,-87.677111&radius=10&type=restaurant&key=AIzaSyDDbt1M_Y1NT5NIZ27O1y0L-PXT5-bEIjs
