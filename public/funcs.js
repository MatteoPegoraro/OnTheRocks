// // filling the page
function fillHTML(response) {
  let drink = response.data.drinks[0];

  // riempimento dati dell'html
  document.getElementById("image-cocktail").src = drink.strDrinkThumb;
  document.getElementById("name-cocktail").innerText = drink.strDrink;
  document.getElementById("desc-cocktail").innerText = drink.strInstructions;

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
  const ingrList = document.getElementById("ingredients-carousel");
  let listIngr = "";
  arrIngr.forEach((ingredient, index) => {
    const currentIngrMeasure = arrIngrMeasure[index];
    if (currentIngrMeasure !== null) {
      listIngr += `<li>${ingredient}: ${currentIngrMeasure}</li>`;
    } else {
      listIngr += `<li>${ingredient}</li>`;
    }
  });
  ingrList.innerHTML = listIngr;
}

// inizializzazione pagina iniziale (cocktail random) tramite axios e funzione utilizzata attraverso il bottone RANDOM
function showRandomCocktail() {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((response) => fillHTML(response));
}

// inizializzione pagina attraverso paramentro Nome del cocktail (attraverso il form in homepage.html)
function getCocktailFromSearch(name) {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => fillHTML(response));
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
          style="background-color: rgba(245, 212, 212, 0.7); padding: 0.5rem;"
          >
          <div class="loading d-none" style="width:100%; height:100%;">
          <img src="./assets/Dual Ball-1s-183px.gif">
          </div>
          
          <div class="d-flex justify-content-evenly" style="padding: 1.5rem;">
            <div style="max-width: 300px;">
              <img
                id="image-cocktail"
                style="max-width: 200px; border-radius: 50%;"
                src="${response.data.drinks[0].strDrinkThumb}"
                alt=""
              />
            </div>
            <div
              class="d-flex-column justify-content-center px-4"
              style="flex-grow: 2;"
            >
              <h3 id="name-cocktail" class="text-start">
                ${response.data.drinks[0].strDrink}
              </h3>
              <div class="d-flex">
                <p id="desc-cocktail" style="overscroll-behavior-y: content;">
                ${response.data.drinks[0].strInstructions}
                </p>
              </div>
            </div>
            <div id="ingredients-carousel" class="d-flex-row">
            ${listIngr} 
          
            </div>
            
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
    "By the time a bartender knows what drink a man will have before he orders, there is little else about him worth knowing."
  );
  quotes.push(
    "24 hours in a day. 24 beers in a case. Coincidence? I think not."
  );
  quotes.push(
    "You're not drunk if you can lie on the floor without holding on."
  );
  quotes.push(
    "It takes only one drink to get me drunk.....the trouble is, I can't remember if it's the thirteenth or the fourteenth."
  );
  quotes.push(
    "I like to have a martini, Two at the very most. After three I'm under the table, after four I'm under my host."
  );
  quotes.push(
    "An intelligent man is sometimes forced to be drunk to spend time with his fools."
  );
  quotes.push(
    "All right, brain. You don't like me and I don't like you, but let's just do this and I can get back to killing you with beer."
  );
}
fillQuotes();

function getRandomQuotes(quotes) {
  // ottieni nuova serie random e salvala in randomSerie, restituisci il suo valore a fine funzione
  const maxRange = quotes.length;
  const randomNumber = Math.floor(Math.random() * maxRange);
  const randomQuotes = quotes[randomNumber];
  document.getElementById("quotes").innerText = randomQuotes;
}
