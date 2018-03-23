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
    }, {
        "name": "6. Giant",
        "image": "images/giant.jpg",
        "description": "Seasonal New American plates & craft cocktails are served in a funky storefront with local art.",
        "address": "3209 W Armitage Ave, Chicago, IL 60647",
        "hours": "11 am - 11 pm"          
    }, {
        "name": "7. Pequod's",
        "image": "images/pequods.jpg",
        "description": "Casual, brick-walled pizza pub where deep-dish pies with caramelized crusts are served until late.",
        "address": "2207 N Clybourn Ave, Chicago, IL 60614",
        "hours": "11 am - 11 pm"      
    }, {
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





// animate tiles - not currently working up or down
$(".tile").hover(function(){
    $(this).animate({down: '20px'});
});





// API KEY AIzaSyDDbt1M_Y1NT5NIZ27O1y0L-PXT5-bEIjs

// big star Place ID
var request = {
  placeId: 'ChIJwwvDb8fSD4gRb54qO3OOpVA'
};

// attach the Place ID + API Key
var PLACEID_API = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='

//var placeBigStar = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJwwvDb8fSD4gRb54qO3OOpVA=AIzaSyDDbt1M_Y1NT5NIZ27O1y0L-PXT5-bEIjs'



//function getPlaceInfo(restaurant){

    //$.get(PLACEID_API + request + '=AIzaSyDDbt1M_Y1NT5NIZ27O1y0L-PXT5-bEIjs', function(searchResult) {
        //searchResult.open_hours
    //}

//}

// initialize the configuration of map
function initMap(){

			// map options
			var options = {
				zoom: 12,
				center: {lat: 41.905293, lng: -87.637228}
			}

			//new map
			var map = new google.maps.Map(document.getElementById('map'), options);


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


        	// custom icon variable
        	var circleIcon = "images/icon.png";

        	// array of markers!!

        	var markers = [
        		{
        			coords: {lat: 41.909, lng: -87.677},
        			iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        			content: '<h3>Big Star</h3>'
        		},
        		{
        			coords: {lat: 41.907, lng: -87.667},
        			content: '<h3> Mott St. </h3>'
        		},
        		{
        			coords: {lat: 41.882, lng: -87.652},
        			content: '<h3>Monteverde</h3>'
        		},
        		{
        			coords: {lat: 41.933, lng: -87.659},
        			content: '<h3>beermiscuous</h3>',
        			// trying to add custom icon
        			//iconImage: circleIcon

        		}
        	];

        	// loop through markers
        	for (var i=0; i < markers.length; i++) {
        		//add marker
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

//var service = new google.maps.places.PlacesService(map);
//service.getDetails(request, callback);

//function callback(place, status) {
     // if (status == google.maps.places.PlacesServiceStatus.OK) {
     //   createMarker(place);
     // }

    //console.log(place);
 //}
// place ID
// opening_hours
// open_now boolean


// https://maps.googleapis.com/maps/api/place/details/output?parameters
// big star Place ID: ChIJwwvDb8fSD4gRb54qO3OOpVA
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.909368,-87.677111&radius=10&type=restaurant&key=AIzaSyDDbt1M_Y1NT5NIZ27O1y0L-PXT5-bEIjs