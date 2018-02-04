function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        scrollwheel: false,
        zoom: 20,
        streetViewControl: false,
        styles: [
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FFBB00"
            },
            {
                "saturation": 43.400000000000006
            },
            {
                "lightness": 37.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00FF6A"
            },
            {
                "saturation": -1.0989010989011234
            },
            {
                "lightness": 11.200000000000017
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FFC200"
            },
            {
                "saturation": -61.8
            },
            {
                "lightness": 45.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "61"
            },
            {
                "lightness": "59"
            },
            {
                "gamma": "7.64"
            },
            {
                "weight": "10.00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "gamma": "6.13"
            },
            {
                "weight": "2.18"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "gamma": "1.26"
            },
            {
                "weight": "1.00"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-37"
            },
            {
                "lightness": "-32"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": "6.20"
            },
            {
                "gamma": "5.80"
            },
            {
                "saturation": "-9"
            },
            {
                "lightness": "100"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
]
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Port Newark, Calcutta Street, Newark, NJ, United States', 40.6900138, -74.1539419],
        ['Newark Liberty International Airport, Brewster Road, Newark, NJ, United States', 40.6895495, -74.1766705],
        ['Galloping Hill Park and Golf Course, Golf Drive, Kenilworth, NJ, USA', 40.6844884, -74.2755926],
        ['Galloping Hill Park and Golf Course, Golf Drive, Kenilworth, NJ, USA', 40.6883906, -74.2726342],
        ['Galloping Hill Park and Golf Course, Golf Drive, Kenilworth, NJ, USA', 40.6923937, -74.215719],
        ['Galloping Hill Park and Golf Course, Golf Drive, Kenilworth, NJ, USA', 40.6908529, -74.2256973],
        
        ['Galloping Hill Park and Golf Course, Golf Drive, Kenilworth, NJ, USA', 40.7025707, -74.2210498],
        ['Galloping Hill Park and Golf Course, Golf Drive, Kenilworth, NJ, USA', 40.6729802, -74.2250651],
        ['Galloping Hill Park and Golf Course, Golf Drive, Kenilworth, NJ, USA', 40.7089674, -74.1682287],
        ['Galloping Hill Park and Golf Course, Golf Drive, Kenilworth, NJ, USA', 40.7107961, -74.1537537],
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
        
        ['<div class="media map_profile">' +
        '<div class="media-left"><img src="./img/map-persion.png" alt=""></div>'+
         '<div class="media-body"><h3>Sandi Williams</h3><h4>21 years old</h4><h5>From Paris</h5><h6>Distance 16 km</h6></div>'+
        '</div>'],
    ];
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: 'img/map_place.png',
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);