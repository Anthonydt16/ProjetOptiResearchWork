
<header>
    <div class="header">
        <div class="img_fond">
        </div>
        <nav class="menuPrincipal">
          <a href="index.php?ORW=Accueil"><img class="img-fluid" src="image/logo80px.png"></a>
          <?php
          if(isset($bioRelai)){
            echo $bioRelai->afficheMenu();
          }

          ?>
        </nav>



    </div>


</header>
