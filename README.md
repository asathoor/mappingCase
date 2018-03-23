Mappingcase (Pro4)
==================

## Resources

Use the *Mapbox Studio* in order to create your design. 

* [Mapbox](https://mapbox.com/)
* [Mapbox Samples](https://www.mapbox.com/mapbox-gl-js/example/set-popup/)

A very basic implementation of a Mapbox design is:

~~~~
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css' rel='stylesheet' />
~~~~



<div id='map' style='width: 400px; height: 300px;'></div>

<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'></script>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});
</script>


### Optional

* [Leaflet](http://leafletjs.com/)