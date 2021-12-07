<?php
$messageErreurConnexion = "erreur de connexion !";
$formulaireRecherche = new Formulaire('post', 'index.php', 'FRecherche', 'FRecherche');

$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerLabel('code postal :',"label"));
$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerInputTexte('codePostal', 'codePostal', '', 0, 'Entrez le code postal', '',"form-control"));
$formulaireRecherche->ajouterComposantTab();


$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerLabel('metier :',"label"));
$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerInputTexte('metier', 'metier', '', 1, 'Entrez votre metier voulu', '',"form-control"));
$formulaireRecherche->ajouterComposantTab();


$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerLabel('Périmètre du rayon de recherche  :',"label"));
$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerInputRange('Perimetre', 'Perimetre',1, 1000, 'form-range'));
$formulaireRecherche->ajouterComposantTab();


$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerInputSubmit('envoieFRecherche', 'envoieFRecherche', 'Valider',"btn btn-light btn-lg btn-block",""));
$formulaireRecherche->ajouterComposantTab();

//$formulaireConnexion->ajouterComposantLigne($formulaireConnexion->creerMessage($messageErreurConnexion));
$formulaireRecherche->ajouterComposantTab();

$formulaireRecherche->creerFormulaire();

if(!empty($_POST['envoieFRecherche'])){

  // if(!empty($_POST['metier'])){
  //   $_SESSION['metier'] = $_POST['metier'];
  // }
  // else{
  //   $_SESSION['metier'] ="";
  // }
  //
  // if(!empty($_POST['Perimetre'])){
  //   $_SESSION['Perimetre'] = $_POST['Perimetre'];
  // }
  // else{
  //   $_SESSION['Perimetre'] ="";
  // }
  //
  // if(!empty($_POST['codePostal'])){
  //   $_SESSION['codePostal'] = $_POST['codePostal'];
  // }
  // else{
  //   $_SESSION['codePostal'] ="";
  // }

  $_SESSION['metier'] = $_POST['metier'];
  $_SESSION['perimetre'] = $_POST['Perimetre'];
  $_SESSION['codePostal'] = $_POST['codePostal'];

}


include_once 'vue/vueRechercheEntreprise.php';
