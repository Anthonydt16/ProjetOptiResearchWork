<?php
include_once ('vue/vueHaut.php');

?>
<div class="conteneur">
  <p id="demo">Click sur le boutton pour voir vos coordonées:</p>
<button onclick="getLocation()">Montrer moi</button>
<script>
var x=document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation n’est pas prise en charge par ce navigateur.";}
  }
function showPosition(position)
  {
  x.innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
  }
</script>
</div>
    <?php

		include_once ('vue/vueBas.php');
	?>
</div>
