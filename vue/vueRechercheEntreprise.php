

<?php
include_once ('vue/vueHaut.php');

?>
<div class="conteneur">
  <?php
      $formulaireRecherche->afficherFormulaire();
  ?>
    <button class ="btn btn-light btn-lg btn-block" onclick="validation()">afficher le resultat</button>

  <div id="res"></div>
  <div id="tableRep">"
  </div>

</div>
    <?php
		include_once ('vue/vueBas.php');
	?>
</div>
  <script type="text/javascript" src="javascript/RequeteRechercheEntreprise.js"></script>
<script>

function validation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{console.log("Geolocation n’est pas prise en charge par ce navigateur.");}
}
function showPosition(position)
  {
  var longitude = position.coords.longitude;
  var latitude = position.coords.latitude;
  console.log(latitude);
  console.log(longitude);
  reception(latitude,longitude);


  }

function reception(latitude,longitude) {
  // recuperation des variable du form
  var sessionPerimetre = "<?php echo $_SESSION['perimetre']; ?>";
  var sessionMetier = "<?php echo $_SESSION['metier']; ?>";
  var sessionCodePostal = "<?php echo $_SESSION['codePostal']; ?>";
  if(sessionCodePostal){
    console.log(sessionCodePostal);
    console.log(sessionMetier);
    requeteDepartement(sessionCodePostal, sessionMetier);
  }else {
    if(sessionPerimetre){
      console.log(sessionPerimetre);
      console.log(sessionMetier);

      requeteLocalisation(sessionMetier, sessionPerimetre,latitude,longitude);
    }
    else{
      console.log("c'est null");
    }
  }

}

  </script>
