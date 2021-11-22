
<header>
    <div class="header">
        <div class="img_fond">
        </div>
        <nav class="menuPrincipal">
          <img class="img-fluid"
     src="image/logo80px.png"
     alt="Grapefruit slice atop a pile of other slices">
          <?php
          if(isset($bioRelai)){
            echo $bioRelai->afficheMenu();
          }

          ?>
        </nav>



    </div>


</header>
