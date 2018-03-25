/**
 * file: flying.js
 * purpose: Mapbox map and interaction
 **/

// token
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';

// draw the map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/asathoor/cj9isv5ju3bhq2ro4pol6s2x6',
    center: [-51.7216,64.1835], // aarhus
    zoom: 2,
    bearing: 56,
    pitch: 0,
    bearing: 0,
    speed: 0.2
});

$(function() { /// document ready

    $('#tekst').load('ajax/eaaa.html'); // load HTML by AJAX

    // fly: aarhus
     $('#aarhus').click( function(){
       map.flyTo({
        center: [10.15043,56.11677],
        zoom: 16,
        bearing: 33,
        pitch: 45
        });
         
        $('#tekst').load('ajax/eaaa.html'); // load HTML by AJAX
    });

    // fly: reykjavik 
    $('#jsconf').click( function(){
       map.flyTo({
        center: [-21.93251,64.15032],
        zoom: 16,
        bearing: -60,
        pitch: 84
        });
        
        $('#tekst').load('ajax/jsconf.html'); // load HTML by AJAX
    });

    // fly: front trends
    $('#frontTrends').click( function(){
       map.flyTo({
        center: [20.961995,52.224503],
        zoom: 16,
        bearing: -72,
        pitch: 45
        });
        
        $('#tekst').load('ajax/frontTrends.html'); // load HTML by AJAX
    });

    // fly: regina
    $('#regina').click( function(){
       map.flyTo({
        center: [-104.5877,50.4153],
        zoom: 14,
        bearing: 12,
        pitch: 45
        });
        
        $('#tekst').load('ajax/regina.html'); // load HTML by AJAX
    });

    // fly: adobe summit
    $('#summit').click( function(){
       map.flyTo({
        center: [0.0300,51.5071],
        zoom: 13,
        bearing: 12,
        pitch: 34
        });
        
        $('#tekst').load('ajax/adobe.html'); // load HTML by AJAX
    });

 }); /// end doc ready func

// 3D bygninger
//
// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);
}); 