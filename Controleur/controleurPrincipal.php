<?php

$bioRelai = new Menu("ORWMenu");

$bioRelai->ajouterComposant($bioRelai->creerItemLien("Formation/stage", "FormationStage"));
$bioRelai->ajouterComposant($bioRelai->creerItemLien("Accueil", "Accueil"));
$bioRelai->ajouterComposant($bioRelai->creerItemLien("Recherche Entreprise", "RechercheEntreprise"));

$bioRelai->creerMenu('ORWMenu','ORW');
if(isset($_GET['ORW'])){
  $_SESSION['ORW'] = $_GET['ORW'];
  echo  $_GET['ORW'];
  include_once dispatcher::dispatch($_SESSION['ORW']);
}else{
  include_once dispatcher::dispatch('Accueil');
}




 ?>
