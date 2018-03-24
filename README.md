Stories and Maps (Pro4)
=======================

## Resources

Use the *Mapbox Studio* in order to style your map:

* [Mapbox](https://mapbox.com/)
* [Mapbox Samples](https://www.mapbox.com/mapbox-gl-js/example/set-popup/)



## Basic 

A very basic implementation of a Mapbox design is:

From the `<head>` section:

~~~~
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css' rel='stylesheet' />
~~~~

And from the `<body>` section:

~~~~
<!-- your map is loaded to #map -->
<div id='map' style='width: 400px; height: 300px;'></div>

<!-- Mapbox js -->
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'></script>

<script>
/**
 * Load the map
 **/
mapboxgl.accessToken = 'YOUR-TOKEN-HERE';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});
</script>
~~~~

## Alternative: Use a CDN

* [Follow these instructions](https://www.mapbox.com/install/js/cdn-install/)

## A working sample

* [index.html](https://github.com/asathoor/mappingCase/blob/master/index.html#L112-L131)


### Optional Library: Leaflet

Leaflet is a library that can help you to enhance your maps add layers to your map via JavaScript.

* [Leaflet](http://leafletjs.com/)

With Leaflet you can even work with imaginary maps, say Tolkien's middle earth or similar.

* [Leaflet: Imaginary Maps](http://leafletjs.com/examples/crs-simple/crs-simple.html)
* [Leaflet: Geojson](http://leafletjs.com/examples/geojson/)