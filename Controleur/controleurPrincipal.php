<?php

$bioRelai = new Menu("ORWMenu");

$bioRelai->ajouterComposant($bioRelai->creerItemLien("Formation/stage", "FormationStage"));
$bioRelai->ajouterComposant($bioRelai->creerItemLien("Accueil", "Accueil"));
$bioRelai->ajouterComposant($bioRelai->creerItemLien("Recherche Entreprise", "RechercheEntreprise"));

$bioRelai->creerMenu('ORWMenu','ORW');
if(isset($_GET['ORW'])){
  $_SESSION['ORW'] = $_GET['ORW'];
}else{
$_SESSION['ORW']="Accueil";

}

if(isset($_POST['envoieFRecherche'])){
    $_SESSION['ORW']="RechercheEntreprise";

  }

  include_once dispatcher::dispatch($_SESSION['ORW']);

 ?>
