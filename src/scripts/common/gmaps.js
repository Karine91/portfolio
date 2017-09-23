const gmap = document.getElementById('map');

/*global initMap google:true*/

function createMap() {
    var pos = {lat: 48.125988, lng: 37.855483};
    var map = new google.maps.Map(gmap, {
      center: pos,
      zoom: 14,
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
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: "assets/images/map_marker.svg",
    });
}  

function initMap(){
    if(gmap){ 
        createMap();
    }
}
module.exports = initMap;