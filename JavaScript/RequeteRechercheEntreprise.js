function requeteLocalisation(metier, perimetre,latitude,longitude){
var i = 0;
//recuperation de la latitude et longitude


//recup token


          $.ajax({
              //L'URL de la requête
              crossDomain: true,
              url : 'https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire&grant_type=client_credentials&client_id=PAR_optireseachwork_faeb8e202ebae4d1685a875ecf8293907450e2c62e2daaea538576dbb39d92f1&client_secret=6ed27e40e4fadf0090bcb4505f36bb3181e49b24f384884cb0e723247deea7a7&scope=application_PAR_optireseachwork_faeb8e202ebae4d1685a875ecf8293907450e2c62e2daaea538576dbb39d92f1%20api_labonneboitev1',
              //url: 'https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token',

              //le token access
                headers: {
                  'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/x-www-form-urlencoded',


        },

              //La méthode d'envoi (type de requête)
              method: "POST",

              //Le format de réponse attendu
              dataType : "json",




          })
          //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
          /*On peut par exemple convertir cette réponse en chaine JSON et insérer
           * cette chaine dans un div id="res"*/
          .done(function(response){
              let data = JSON.stringify(response);


              var token = response.access_token;
              //ajax pour recuperer les données
              if(perimetre != null){
                $.ajax({

                    //L'URL de la requête
                    url: "https://api.emploi-store.fr/partenaire/labonneboite/v1/company/",
                    //le token access
                      headers: { 'Authorization': 'Bearer '+token+'', },

                    //La méthode d'envoi (type de requête)
                    method: "GET",

                    //Le format de réponse attendu
                    dataType : "json",
                    data: {
                      'rome_codes_keyword_search': metier,
                      'latitude': latitude,
                      'longitude' : longitude,
                      'distance': perimetre,

                    }




                })
                //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
                /*On peut par exemple convertir cette réponse en chaine JSON et insérer
                 * cette chaine dans un div id="res"*/

                .done(function(response){
                    let datarep = JSON.stringify(response);
                    var reponseEntreprise = response;

                    //permettre de recup toute les addresse de la reponse
                    let table = document.createElement('table');
                    let thead = document.createElement('thead');
                    let tbody = document.createElement('tbody');
                    table.className = "table table-dark";

                    table.appendChild(thead);
                    table.appendChild(tbody);

                    // Adding the entire table to the body tag
                    document.getElementById('tableRep').appendChild(table);
                    let row_1 = document.createElement('tr');
                    let heading_1 = document.createElement('th');
                    heading_1.innerHTML = "adresse";
                    let heading_2 = document.createElement('th');
                    heading_2.innerHTML = "ville";
                    let heading_3 = document.createElement('th');
                    heading_3.innerHTML = "mode de contact";
                    let heading_4 = document.createElement('th');
                    heading_4.innerHTML = "URL Annonce";
                    let heading_5 = document.createElement('th');
                    heading_5.innerHTML = "site web";
                    let heading_6 = document.createElement('th');
                    heading_6.innerHTML = "nombre salarier";
                    let heading_7 = document.createElement('th');
                    heading_7.innerHTML = "Nom";
                    let heading_8 = document.createElement('th');
                    heading_8.innerHTML = "zone activité";


                    row_1.appendChild(heading_1);
                    row_1.appendChild(heading_2);
                    row_1.appendChild(heading_3);
                    row_1.appendChild(heading_4);
                    row_1.appendChild(heading_5);
                    row_1.appendChild(heading_6);
                    row_1.appendChild(heading_7);
                    row_1.appendChild(heading_8);
                    thead.appendChild(row_1);

                    for (var i=0;i<reponseEntreprise.companies.length;i++)
                    {


                        // Crée un tableau html et ajoute des ligne tous seul batard

                        window['row_' + i] = document.createElement('tr');

                        window['row_'+ i+'_data_1'] = document.createElement('td');
                        window['row_'+ i+'_data_1'].innerHTML = reponseEntreprise.companies[i].address;
                        window['row_'+ i+'_data_2'] = document.createElement('td');
                        window['row_'+ i+'_data_2'].innerHTML = reponseEntreprise.companies[i].city;
                        window['row_'+ i+'_data_3'] = document.createElement('td');
                        window['row_'+ i+'_data_3'].innerHTML = reponseEntreprise.companies[i].contact_mode;
                        window['row_'+ i+'_data_4'] = document.createElement('td');
                        window['row_'+ i+'_data_4'].innerHTML = reponseEntreprise.companies[i].url;
                        window['row_'+ i+'_data_5'] = document.createElement('td');
                        window['row_'+ i+'_data_5'].innerHTML = reponseEntreprise.companies[i].website;
                        window['row_'+ i+'_data_6'] = document.createElement('td');
                        window['row_'+ i+'_data_6'].innerHTML = reponseEntreprise.companies[i].headcount_text;
                        window['row_'+ i+'_data_7'] = document.createElement('td');
                        window['row_'+ i+'_data_7'].innerHTML = reponseEntreprise.companies[i].name;
                        window['row_'+ i+'_data_8'] = document.createElement('td');
                        window['row_'+ i+'_data_8'].innerHTML = reponseEntreprise.companies[i].naf_text;

                        window['row_' + i].appendChild(window['row_'+ i+'_data_1']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_2']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_3']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_4']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_5']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_6']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_7']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_8']);
                        tbody.appendChild(window['row_' + i]);

                    }

                  })


                //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
                //On peut afficher les informations relatives à la requête et à l'erreur
                .fail(function(error){
                    alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
                })




              //Ce code sera exécuté que la requête soit un succès ou un échec
              .always(function(){
                  alert("Requête effectuée");

              });
            }




          })

          //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
          //On peut afficher les informations relatives à la requête et à l'erreur
          .fail(function(error){
              alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
          })

          //Ce code sera exécuté que la requête soit un succès ou un échec
          .always(function(){
              alert("Requête effectuée token");


          });


}
function requeteDepartement(codePostal, metier){
var i = 0;
//recuperation de la latitude et longitude


//recup token


          $.ajax({
              //L'URL de la requête
              crossDomain: true,
              url : 'https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire&grant_type=client_credentials&client_id=PAR_optireseachwork_faeb8e202ebae4d1685a875ecf8293907450e2c62e2daaea538576dbb39d92f1&client_secret=6ed27e40e4fadf0090bcb4505f36bb3181e49b24f384884cb0e723247deea7a7&scope=application_PAR_optireseachwork_faeb8e202ebae4d1685a875ecf8293907450e2c62e2daaea538576dbb39d92f1%20api_labonneboitev1',
              //url: 'https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token',

              //le token access
                headers: {
                  'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/x-www-form-urlencoded',


        },

              //La méthode d'envoi (type de requête)
              method: "POST",

              //Le format de réponse attendu
              dataType : "json",




          })
          //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
          /*On peut par exemple convertir cette réponse en chaine JSON et insérer
           * cette chaine dans un div id="res"*/
          .done(function(response){
              let data = JSON.stringify(response);


              var token = response.access_token;
              //ajax pour recuperer les données
              if(metier != null){
                $.ajax({

                    //L'URL de la requête
                    url: "https://api.emploi-store.fr/partenaire/labonneboite/v1/company/",
                    //le token access
                      headers: { 'Authorization': 'Bearer '+token+'', },

                    //La méthode d'envoi (type de requête)
                    method: "GET",

                    //Le format de réponse attendu
                    dataType : "json",
                    data: {
                      'departments':codePostal,
                      'rome_codes_keyword_search': metier,

                    }




                })
                //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
                /*On peut par exemple convertir cette réponse en chaine JSON et insérer
                 * cette chaine dans un div id="res"*/

                .done(function(response){
                    let datarep = JSON.stringify(response);
                    var reponseEntreprise = response;

                    //permettre de recup toute les addresse de la reponse
                    let table = document.createElement('table');
                    let thead = document.createElement('thead');
                    let tbody = document.createElement('tbody');
                    table.className = "table table-dark";

                    table.appendChild(thead);
                    table.appendChild(tbody);

                    // Adding the entire table to the body tag
                    document.getElementById('tableRep').appendChild(table);
                    let row_1 = document.createElement('tr');
                    let heading_1 = document.createElement('th');
                    heading_1.innerHTML = "adresse";
                    let heading_2 = document.createElement('th');
                    heading_2.innerHTML = "ville";
                    let heading_3 = document.createElement('th');
                    heading_3.innerHTML = "mode de contact";
                    let heading_4 = document.createElement('th');
                    heading_4.innerHTML = "URL Annonce";
                    let heading_5 = document.createElement('th');
                    heading_5.innerHTML = "site web";
                    let heading_6 = document.createElement('th');
                    heading_6.innerHTML = "nombre salarier";
                    let heading_7 = document.createElement('th');
                    heading_7.innerHTML = "Nom";
                    let heading_8 = document.createElement('th');
                    heading_8.innerHTML = "zone activité";


                    row_1.appendChild(heading_1);
                    row_1.appendChild(heading_2);
                    row_1.appendChild(heading_3);
                    row_1.appendChild(heading_4);
                    row_1.appendChild(heading_5);
                    row_1.appendChild(heading_6);
                    row_1.appendChild(heading_7);
                    row_1.appendChild(heading_8);
                    thead.appendChild(row_1);

                    for (var i=0;i<reponseEntreprise.companies.length;i++)
                    {


                        // Crée un tableau html et ajoute des ligne tous seul batard

                        window['row_' + i] = document.createElement('tr');

                        window['row_'+ i+'_data_1'] = document.createElement('td');
                        window['row_'+ i+'_data_1'].innerHTML = reponseEntreprise.companies[i].address;
                        window['row_'+ i+'_data_2'] = document.createElement('td');
                        window['row_'+ i+'_data_2'].innerHTML = reponseEntreprise.companies[i].city;
                        window['row_'+ i+'_data_3'] = document.createElement('td');
                        window['row_'+ i+'_data_3'].innerHTML = reponseEntreprise.companies[i].contact_mode;
                        window['row_'+ i+'_data_4'] = document.createElement('td');
                        window['row_'+ i+'_data_4'].innerHTML = reponseEntreprise.companies[i].url;
                        window['row_'+ i+'_data_5'] = document.createElement('td');
                        window['row_'+ i+'_data_5'].innerHTML = reponseEntreprise.companies[i].website;
                        window['row_'+ i+'_data_6'] = document.createElement('td');
                        window['row_'+ i+'_data_6'].innerHTML = reponseEntreprise.companies[i].headcount_text;
                        window['row_'+ i+'_data_7'] = document.createElement('td');
                        window['row_'+ i+'_data_7'].innerHTML = reponseEntreprise.companies[i].name;
                        window['row_'+ i+'_data_8'] = document.createElement('td');
                        window['row_'+ i+'_data_8'].innerHTML = reponseEntreprise.companies[i].naf_text;

                        window['row_' + i].appendChild(window['row_'+ i+'_data_1']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_2']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_3']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_4']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_5']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_6']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_7']);
                        window['row_' + i].appendChild(window['row_'+ i+'_data_8']);
                        tbody.appendChild(window['row_' + i]);

                    }

                  })


                //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
                //On peut afficher les informations relatives à la requête et à l'erreur
                .fail(function(error){
                    alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
                })




              //Ce code sera exécuté que la requête soit un succès ou un échec
              .always(function(){
                  alert("Requête effectuée");

              });
            }




          })

          //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
          //On peut afficher les informations relatives à la requête et à l'erreur
          .fail(function(error){
              alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
          })

          //Ce code sera exécuté que la requête soit un succès ou un échec
          .always(function(){
              alert("Requête effectuée token");


          });


}
