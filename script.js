// Requête API
const fetchBitcoinData = () => { //Affiche les données du bitcoin 
  const apiKey = '04c68aa5b52cdda6bb1abc160f8d8677';
  const apiUrl = `https://financialmodelingprep.com/api/v3/quote/BTCUSD?apikey=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => { 
          const quoteData = data[0];
          let name = quoteData.name; //Nom du marché
          let price = quoteData.price; //Prix du marché
          let yearHigh = quoteData.yearHigh; //ATH de l'année
          let yearLow = quoteData.yearLow; //ATL de l'année
          let marketCap = quoteData.marketCap; //MarketCap
          let priceAvg200 = quoteData.priceAvg200; //Prix moyen de 200 périodes

          // Div 1
          const p1 = document.createElement("p"); // Création d'un p1
          p1.innerText = name; // Ajout du texte

          const p2 = document.createElement("p"); // Création d'un p2
          p2.innerText = "Prix : " + price + "$"; // Ajout du texte

          const p3 = document.createElement("p"); // Création d'un p3
          p3.innerText = "ATH de l'année : " + yearHigh + "$"; // Ajout du texte

          const p4 = document.createElement("p"); // Création d'un p4
          p4.innerText = "ATL de l'année : " + yearLow + "$"; // Ajout du texte

          const p5 = document.createElement("p"); // Création d'un p5
          p5.innerText = "MarketCap : " + marketCap + "$"; // Ajout du texte

          const p6 = document.createElement("p"); // Création d'un p5
          p6.innerText = "Prix MA200 : " + priceAvg200 + "$"; // Ajout du texte

          let div1 = document.getElementById("content1"); // Récupération du parent
          div1.innerHTML = ""; // Effacer le contenu précédent
          div1.appendChild(p1); // Ajout de p1 à div1
          div1.appendChild(p2); // Ajout de p2 à div1
          div1.appendChild(p3); // Ajout de p3 à div1
          div1.appendChild(p4); // Ajout de p4 à div1
          div1.appendChild(p5); // Ajout de p5 à div1
          div1.appendChild(p6); // Ajout de p6 à div1
  });
}

const fetchEthereumData = () => { //Affiche les données de l'ethereum
  const apiKey = '04c68aa5b52cdda6bb1abc160f8d8677';
  const apiUrl = `https://financialmodelingprep.com/api/v3/quote/ETHUSD?apikey=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => { 
          const quoteData = data[0];
          let name = quoteData.name; //Nom du marché
          let price = quoteData.price; //Prix du marché
          let yearHigh = quoteData.yearHigh; //ATH de l'année
          let yearLow = quoteData.yearLow; //ATL de l'année
          let marketCap = quoteData.marketCap; //MarketCap
          let priceAvg200 = quoteData.priceAvg200; //Prix moyen de 200 périodes

          // Div 1
          const p1 = document.createElement("p"); // Création d'un p1
          p1.innerText = name; // Ajout du texte

          const p2 = document.createElement("p"); // Création d'un p2
          p2.innerText = "Prix : " + price + "$"; // Ajout du texte

          const p3 = document.createElement("p"); // Création d'un p3
          p3.innerText = "ATH de l'année : " + yearHigh + "$"; // Ajout du texte

          const p4 = document.createElement("p"); // Création d'un p4
          p4.innerText = "ATL de l'année : " + yearLow + "$"; // Ajout du texte

          const p5 = document.createElement("p"); // Création d'un p5
          p5.innerText = "MarketCap : " + marketCap + "$"; // Ajout du texte

          const p6 = document.createElement("p"); // Création d'un p5
          p6.innerText = "Prix MA200 : " + priceAvg200 + "$"; // Ajout du texte

          let div1 = document.getElementById("content1"); // Récupération du parent
          div1.innerHTML = ""; // Effacer le contenu précédent
          div1.appendChild(p1); // Ajout de p1 à div1
          div1.appendChild(p2); // Ajout de p2 à div1
          div1.appendChild(p3); // Ajout de p3 à div1
          div1.appendChild(p4); // Ajout de p4 à div1
          div1.appendChild(p5); // Ajout de p5 à div1
          div1.appendChild(p6); // Ajout de p6 à div1
  });
}

// Titre du site
const titre = document.createElement("h1"); // Création d'un h1
titre.innerText = "Bitcoin Weather"; // Ajout du texte

const divTitre = document.getElementById("title"); // Récupération du parent

divTitre.appendChild(titre); // Ajout de titre à divTitre

// Menu déroulant de la page
const menu = document.createElement("select"); // Création d'un menu déroulant

const section1 = document.createElement("option"); // Création d'une option
section1.innerText = "Bitcoin"; // Ajout du texte
menu.appendChild(section1); // Ajout de section1 à menu

const section2 = document.createElement("option"); // Création d'une option
section2.innerText = "Ethereum"; // Ajout du texte
menu.appendChild(section2); // Ajout de section2 à menu

const divMenu = document.getElementById("menu"); // Récupération du parent

divMenu.appendChild(menu); // Ajout de menu à divMenu

fetchBitcoinData(); // Appel de la fonction par défaut 

menu.addEventListener("change", () => { // Gestion du changement de menu
  const option = menu.value; // Récupération de l'option choisie
  if (option === "Bitcoin") { // Si l'option est Bitcoin alors fetchBitcoinData
    fetchBitcoinData();
  }
  else if (option === "Ethereum") { // Si l'option est Ethereum alors fetchEthereumData
    fetchEthereumData();
  }
});

// Footer
const ftr = document.createElement("div"); // Création d'un div
ftr.innerText = "Copyright 2023 - All rights reserved"; // Ajout du texte

const footer = document.getElementById("footer"); // Récupération du parent
footer.appendChild(ftr); // Ajout de ftr à footer

