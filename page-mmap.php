<?php 
// add the stylesheet link to the header
function petj_add_css() {
	?>
		<!-- leaflet stylesheet -->
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" integrity="sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ==" crossorigin="">
	<?php
}
add_action( 'wp_head', 'petj_add_css' );

// then get the header
get_header(); ?>

<h3> Map: shelters in Aarhus </h3>

<!-- the map -->
<div id="mapid" style="width:100%;height:444px"></div>

<!-- leaflet scripts -->
<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"
   integrity="sha512-A7vV8IFfih/D732iSSKi20u/ooOfj/AGehOKq0f4vLT1Zr2Y+RX7C+w8A1gaSasGtRUZpF/NZgzSAu4/Gc41Lg=="
   crossorigin=""></script>

<!-- set up a map -->
<script>
	// Geographical position and zoomlevel
	var mymap = L.map('mapid').setView([56.11, 10.15], 11);

	// use the Leaflet link from "Develop with this style" in Mapbox Studio
	var tile = 'https://api.mapbox.com/styles/v1/asathoor/cj9hej7ul20962snla7i0jxq1/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';

	// the mapbox tile layer	
	L.tileLayer( tile , {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18
	}).addTo(mymap);

	// a marker layer
	var marker = L.marker([56.11, 10.15]).addTo(mymap);	

	// a pop up for the marker
	marker.bindPopup('<b>Multimedia Design and Communication</b><br>Web: <a href="http://www.eaaa.dk" target="_blank">EAAA.dk</a>.<br><img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" alt="Dannebrog" style="max-width:35px">'); // .openPopup();

</script>

<?php get_footer(); ?>