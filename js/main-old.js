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



// animate tiles - not currently working up or down 
$(".tile").hover(function(){
    $(this).animate({down: '20px'});
}); 




//how do I tie to HTML?
//how do I input image?
//how do I input API data?


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
        	var circleIcon = '<img src="images/icon.png">'

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


// place ID
// opening_hours
// open_now boolean


// https://maps.googleapis.com/maps/api/place/details/output?parameters
// big star Place ID: ChIJwwvDb8fSD4gRb54qO3OOpVA
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.909368,-87.677111&radius=10&type=restaurant&key=AIzaSyDDbt1M_Y1NT5NIZ27O1y0L-PXT5-bEIjs
