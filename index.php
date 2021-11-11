<!doctype html>
<?php require 'lib/loader.php';
session_start();?>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>OptiReseachWork</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/45e38e596f.js" crossorigin="anonymous"></script>
</head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<style type="text/css">
@import url(style/style.css);
</style>
</head>
<body class="bg-secondary">








  <?php

    include_once 'controleur/controleurPrincipal.php';
  ?>
</body>
</html>
