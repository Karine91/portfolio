const gmap = document.getElementById('map');

/*global initMap google:true*/

function createMap() {
   var map = new google.maps.Map(gmap, {
      center: {lat: 40.674, lng: -73.945},
      zoom: 12,
      styles: [
        {
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#f5f5f5",
            },
        ],
        },
        {
        "elementType": "labels.icon",
        "stylers": [
            {
            "visibility": "off",
            },
        ],
        },
        {
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#616161",
            },
        ],
        },
        {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
            "color": "#f5f5f5",
            },
        ],
        },
        {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#bdbdbd",
            },
        ],
        },
        {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#eeeeee",
            },
        ],
        },
        {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#757575",
            },
        ],
        },
        {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#e5e5e5",
            },
        ],
        },
        {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#9e9e9e",
            },
        ],
        },
        {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#ffffff",
            },
        ],
        },
        {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#757575",
            },
        ],
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dadada",
            },
        ],
        },
        {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#616161",
            },
        ],
        },
        {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#9e9e9e",
            },
        ],
        },
        {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#e5e5e5",
            },
        ],
        },
        {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#eeeeee",
            },
        ],
        },
        {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#c9c9c9",
            },
        ],
        },
        {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
            "color": "#61dac9",
            },
        ],
        },
        {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#9e9e9e",
            },
        ],
        },
    ],
    });
}  

function initMap(){
    if(gmap.length !=0){
    document.body.insertAdjacentHTML('beforeend', '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8YfKYzYCvNpiV1UDFK2_jlHkmxe8tue8&callback=createMap" async defer></script>');    
    }
}
module.exports = initMap;