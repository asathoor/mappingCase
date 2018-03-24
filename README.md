Mappingcase (Pro4)
==================

## Resources

Use the *Mapbox Studio* in order to create your design. 

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

### Optional

* [Leaflet](http://leafletjs.com/)