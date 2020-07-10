// // filling the page
function fillHTML(response) {
  let drink = response.data.drinks[i];

   // lista ingredienti gestita "pulendo" il json (grazie Matteo e Ale <3)
   const arrIngr = [];
   for (const test in drink) {
     if (test.includes("strIngredient") && drink[test] !== null) {
       arrIngr.push(drink[test]);
     }
   }
 
   // quantità di ingredienti (UA GRAZIE CIRO)
   const arrIngrMeasure = [];
   for (const property in drink) {
     if (property.includes("strMeasure") && drink[property] !== "") {
       arrIngrMeasure.push(drink[property]);
     }
   }
 
   // stampa lista ingredienti e quantità (se presenti)
 
   
 
   let listIngr = "";
   arrIngr.forEach((ingredient, index) => {
     const currentIngrMeasure = arrIngrMeasure[index];
     if (currentIngrMeasure !== null) {
       listIngr += `<li>${ingredient}: ${currentIngrMeasure}</li>`;
     } else {
       listIngr += `<li>${ingredient}</li>`;
     }
   });

  // riempimento dati dell'html
 

  document.getElementById("cocktail-main-container").innerHTML += `<div
  id="cocktail-div"
  class="d-flex-column justify-content-center rounded mt-3"
  style="
      background-color: rgba(245, 212, 212, 0.7);
      padding: 0.5rem;
      box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);"

  
>
  <div
      class="d-flex justify-content-evenly"
      style="padding: 1.5rem; height: 350px;"
  >
      <div class="d-flex align-items-center" 
          style="max-width: 300px; padding-right: 0.4rem; ">
          <img
              id="image-cocktail"
              style="
                  max-width: 270px; 
                  border-radius: 50%;
                  box-shadow:
                      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                      0 12.5px 10px rgba(0, 0, 0, 0.06),
                      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                      0 100px 80px rgba(0, 0, 0, 0.12);"
              src="${drink.strDrinkThumb}"
              alt=""
              
          />
      </div>

      <div
          class="d-flex-column justify-content-center px-4"
          style="flex-grow: 2; max-width: 800px;"
      >
          <h2
              id="name-cocktail"
              class="text-start"
              style="
                  font-family: 'Pacifico', cursive;
                  background: linear-gradient(
                      90deg,
                      rgba(212, 47, 75, 1) 0%,
                      rgba(81, 0, 85, 1) 100%
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  line-height: 2;
              "
          >
              ${drink.strDrink}
          </h2>
          <div
              id="desc-cocktail"
              class="d-flex"
              style="
                  max-height: 72%;
                  font-family: 'Balsamiq Sans', cursive;
                  font-weight: 400;
                  color: white;
              "
          >
              ${drink.strInstructions}
          </div>
      </div>
      <div
          class="d-flex-column pt-2 border-left"
          style="padding-left: 0.05rem;"
      >
          <h3
              class="text-light"
              style="
                  font-family: 'Pacifico', cursive;
                  background: linear-gradient(
                      90deg,
                      rgba(212, 47, 75, 1) 0%,
                      rgba(81, 0, 85, 1) 100%
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  line-height: 2;
                  margin-top: -0.3rem;
                  margin-left: 2.4rem;
              "
          >
              Ingredients
          </h3>
          <div
              id="ingredients-carousel"
              class="d-flex-row pt-1"
              style="
                  font-family: 'Balsamiq Sans', cursive;
                  font-weight: 400;
                  max-height: 72%;
                  color: white;
                  list-style: none;
                  margin-left: 2.5rem;
              "
          >${listIngr}</div>
      </div>
  </div>
</div>`;
  
 
}

function fillHTMLRandom(response) {
  let drink = response.data.drinks[0];

   // lista ingredienti gestita "pulendo" il json (grazie Matteo e Ale <3)
   const arrIngr = [];
   for (const test in drink) {
     if (test.includes("strIngredient") && drink[test] !== null) {
       arrIngr.push(drink[test]);
     }
   }
 
   // quantità di ingredienti (UA GRAZIE CIRO)
   const arrIngrMeasure = [];
   for (const property in drink) {
     if (property.includes("strMeasure") && drink[property] !== "") {
       arrIngrMeasure.push(drink[property]);
     }
   }
 
   // stampa lista ingredienti e quantità (se presenti)
 
   
 
   let listIngr = "";
   arrIngr.forEach((ingredient, index) => {
     const currentIngrMeasure = arrIngrMeasure[index];
     if (currentIngrMeasure !== null) {
       listIngr += `<li>${ingredient}: ${currentIngrMeasure}</li>`;
     } else {
       listIngr += `<li>${ingredient}</li>`;
     }
   });

  // riempimento dati dell'html
 

  document.getElementById("cocktail-main-container").innerHTML = `<div
  id="cocktail-div"
  class="d-flex-column justify-content-center rounded mt-3"
  style="
      background-color: rgba(245, 212, 212, 0.7);
      padding: 0.5rem;
      box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);"

  
>
  <div
      class="d-flex justify-content-evenly"
      style="padding: 1.5rem; height: 350px;"
  >
      <div class="d-flex align-items-center" 
          style="max-width: 300px; padding-right: 0.4rem; ">
          <img
              id="image-cocktail"
              style="
                  max-width: 270px; 
                  border-radius: 50%;
                  box-shadow:
                      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                      0 12.5px 10px rgba(0, 0, 0, 0.06),
                      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                      0 100px 80px rgba(0, 0, 0, 0.12);"
              src="${drink.strDrinkThumb}"
              alt=""
              
          />
      </div>

      <div
          class="d-flex-column justify-content-center px-4"
          style="flex-grow: 2; max-width: 800px;"
      >
          <h2
              id="name-cocktail"
              class="text-start"
              style="
                  font-family: 'Pacifico', cursive;
                  background: linear-gradient(
                      90deg,
                      rgba(212, 47, 75, 1) 0%,
                      rgba(81, 0, 85, 1) 100%
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  line-height: 2;
              "
          >
              ${drink.strDrink}
          </h2>
          <div
              id="desc-cocktail"
              class="d-flex"
              style="
                  max-height: 72%;
                  font-family: 'Balsamiq Sans', cursive;
                  font-weight: 400;
                  color: white;
              "
          >
              ${drink.strInstructions}
          </div>
      </div>
      <div
          class="d-flex-column pt-2 border-left"
          style="padding-left: 0.05rem;"
      >
          <h3
              class="text-light"
              style="
                  font-family: 'Pacifico', cursive;
                  background: linear-gradient(
                      90deg,
                      rgba(212, 47, 75, 1) 0%,
                      rgba(81, 0, 85, 1) 100%
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  line-height: 2;
                  margin-top: -0.3rem;
                  margin-left: 2.4rem;
              "
          >
              Ingredients
          </h3>
          <div
              id="ingredients-carousel"
              class="d-flex-row pt-1"
              style="
                  font-family: 'Balsamiq Sans', cursive;
                  font-weight: 400;
                  max-height: 72%;
                  color: white;
                  list-style: none;
                  margin-left: 2.5rem;
              "
          >${listIngr}</div>
      </div>
  </div>
</div>`;
  
 
}


// inizializzazione pagina iniziale (cocktail random) tramite axios e funzione utilizzata attraverso il bottone RANDOM
function showRandomCocktail() {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((response) => fillHTMLRandom(response));
}

// inizializzione pagina attraverso paramentro Nome del cocktail (attraverso il form in homepage.html)
function getCocktailFromSearch(name) {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => {
      for( i = 0; response.data.drinks[i] != null; i++){
      fillHTML(response)}
    })
}

// inizializzione pagina attraverso paramentro Ingrediente del cocktail (attraverso il form in homepage.html)
function getIngrsFromSearch(ingr) {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingr}`)
    .then((response) => {
      let drink = response.data.drinks;
      for (i = 0; i < 5; i++) {
        const maxRange = drink.length;
        const randomNumber = Math.floor(Math.random() * maxRange);
        const randomDrink = response.data.drinks[randomNumber];

        let nameCocktail = randomDrink.strDrink;

        axios
          .get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameCocktail}`
          )
          .then((response) => {
            console.log(response.data);

            let drink = response.data.drinks[0]

            const arrIngr = [];
            for (const test in drink) {
              if (test.includes("strIngredient") && drink[test] !== null) {
                arrIngr.push(drink[test]);
              }
            }

            // quantità di ingredienti (UA GRAZIE CIRO)
            const arrIngrMeasure = [];
            for (const property in drink) {
              if (property.includes("strMeasure") && drink[property] !== "") {
                arrIngrMeasure.push(drink[property]);
              }
            }

            // stampa lista ingredienti e quantità (se presenti)
            
            let listIngr = "";
            arrIngr.forEach((ingredient, index) => {
              const currentIngrMeasure = arrIngrMeasure[index];
              if (currentIngrMeasure !== null) {
                listIngr += `<li>${ingredient}: ${currentIngrMeasure}</li>`;
              } else {
                listIngr += `<li>${ingredient}</li>`;
              }
            });

            console.log(listIngr);

            document.getElementById(
              "cocktail-main-container"
            ).innerHTML += `<div
                    id="cocktail-div"
                    class="d-flex-column justify-content-center rounded mt-3"
                    style="
                        background-color: rgba(245, 212, 212, 0.7);
                        padding: 0.5rem;
                        box-shadow:
                        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                        0 12.5px 10px rgba(0, 0, 0, 0.06),
                        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                        0 100px 80px rgba(0, 0, 0, 0.12);"
        
                    
                >
                    <div
                        class="d-flex justify-content-evenly"
                        style="padding: 1.5rem; height: 350px;"
                    >
                        <div class="d-flex align-items-center" 
                            style="max-width: 300px; padding-right: 0.4rem; ">
                            <img
                                id="image-cocktail"
                                style="
                                    max-width: 270px; 
                                    border-radius: 50%;
                                    box-shadow:
                                        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                                        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                                        0 12.5px 10px rgba(0, 0, 0, 0.06),
                                        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                                        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                                        0 100px 80px rgba(0, 0, 0, 0.12);"
                                src="${response.data.drinks[0].strDrinkThumb}"
                                alt=""
                                
                            />
                        </div>

                        <div
                            class="d-flex-column justify-content-center px-4"
                            style="flex-grow: 2; max-width: 800px;"
                        >
                            <h2
                                id="name-cocktail"
                                class="text-start"
                                style="
                                    font-family: 'Pacifico', cursive;
                                    background: linear-gradient(
                                        90deg,
                                        rgba(212, 47, 75, 1) 0%,
                                        rgba(81, 0, 85, 1) 100%
                                    );
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                    line-height: 2;
                                "
                            >
                                ${response.data.drinks[0].strDrink}
                            </h2>
                            <div
                                id="desc-cocktail"
                                class="d-flex"
                                style="
                                    max-height: 72%;
                                    font-family: 'Balsamiq Sans', cursive;
                                    font-weight: 400;
                                    color: white;
                                "
                            >
                                ${response.data.drinks[0].strInstructions}
                            </div>
                        </div>
                        <div
                            class="d-flex-column pt-2 border-left"
                            style="padding-left: 0.05rem;"
                        >
                            <h3
                                class="text-light"
                                style="
                                    font-family: 'Pacifico', cursive;
                                    background: linear-gradient(
                                        90deg,
                                        rgba(212, 47, 75, 1) 0%,
                                        rgba(81, 0, 85, 1) 100%
                                    );
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                    line-height: 2;
                                    margin-top: -0.3rem;
                                    margin-left: 2.4rem;
                                "
                            >
                                Ingredients
                            </h3>
                            <div
                                id="ingredients-carousel"
                                class="d-flex-row pt-1"
                                style="
                                    font-family: 'Balsamiq Sans', cursive;
                                    font-weight: 400;
                                    max-height: 72%;
                                    color: white;
                                    list-style: none;
                                    margin-left: 2.5rem;
                                "
                            >${listIngr}</div>
                        </div>
                    </div>
                </div>`;

            //fillHTML(response)
          });
      }
    });
}

let quotes = [];
function fillQuotes() {
  quotes.push(
    "By the time a bartender knows what drink a man will have before he orders, there is little else about him worth knowing"
  );
  quotes.push(
    "24 hours in a day. 24 beers in a case. Coincidence? I think not"
  );
  quotes.push(
    "You're not drunk if you can lie on the floor without holding on"
  );
  quotes.push(
    "It takes only one drink to get me drunk.....the trouble is, I can't remember if it's the thirteenth or the fourteenth"
  );
  quotes.push(
    "I like to have a martini, Two at the very most. After three I'm under the table, after four I'm under my host"
  );
  quotes.push(
    "An intelligent man is sometimes forced to be drunk to spend time with his fools"
  );
  quotes.push(
    "All right, brain. You don't like me and I don't like you, but let's just do this and I can get back to killing you with beer"
  );
}
fillQuotes();

function getRandomQuotes(quotes) {
  // ottieni nuova serie random e salvala in randomSerie, restituisci il suo valore a fine funzione
  const maxRange = quotes.length;
  const randomNumber = Math.floor(Math.random() * maxRange);
  const randomQuotes = quotes[randomNumber];
  document.getElementById("quotes").innerText = `“`+ randomQuotes + `„`;
}
