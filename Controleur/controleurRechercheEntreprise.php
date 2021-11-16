<?php
$messageErreurConnexion = "erreur de connexion !";
$formulaireRecherche = new Formulaire('post', 'index.php', 'FRecherche', 'FRecherche');

$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerLabel('code postal :',"label"));
$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerInputTexte('codePostal', 'codePostal', '', 1, 'Entrez le code postal', '',"form-control"));
$formulaireRecherche->ajouterComposantTab();


$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerLabel('metier :',"label"));
$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerInputTexte('metier', 'metier', '', 1, 'Entrez votre metier voulu', '',"form-control"));
$formulaireRecherche->ajouterComposantTab();


$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerLabel('Périmètre du rayon de recherche  :',"label"));
$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerInputTexte('Perimetre', 'Perimetre', '', 1, 'Entrez votre Périmètre du rayon de recherche', '',"form-control"));
$formulaireRecherche->ajouterComposantTab();


$formulaireRecherche->ajouterComposantLigne($formulaireRecherche->creerInputSubmit('envoieFRecherche', 'envoieFRecherche', 'Valider',"btn btn-light btn-lg btn-block",""));
$formulaireRecherche->ajouterComposantTab();

//$formulaireConnexion->ajouterComposantLigne($formulaireConnexion->creerMessage($messageErreurConnexion));
$formulaireRecherche->ajouterComposantTab();

$formulaireRecherche->creerFormulaire();

if(!empty($_POST['envoieFRecherche'])){
  echo "fini";

  $_SESSION['metier'] = $_POST['metier'];
  $_SESSION['perimetre'] = $_POST['Perimetre'];
  $_SESSION['codePostal'] = $_POST['codePostal'];

}


include_once 'vue/vueRechercheEntreprise.php';
