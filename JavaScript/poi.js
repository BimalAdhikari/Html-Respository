document.addEventListener("DOMContentLoaded", function () {
  // Een array van POI's (Points of Interest) met hun naam, afbeelding en beschrijving
  const pois = [
    {
      name: "Tilted Towers",
      imgSrc: "../Images/Tilted_Towers.png",
      description:
        "Tilted Towers is een van de meest populaire POI's in Fortnite, bekend om zijn hoge gebouwen en intense gevechten.",
    },
    {
      name: "Retail Row",
      imgSrc: "../Images/retail.jpg",
      description:
        "Retail Row is een druk winkelgebied met veel buit en frequente schermutselingen.",
    },
    {
      name: "Salty Springs",
      imgSrc: "../Images/salty.jpg",
      description:
        "Salty Springs is een woonwijk met een mix van huizen en open ruimtes, perfect voor gevechten van dichtbij.",
    },
    {
      name: "Lazy Lake",
      imgSrc: "../Images/lazylake.jpg",
      description:
        "Lazy Lake is een moderne stad aan het meer met veel gebouwen om te verkennen en buit te vinden.",
    },
  ];

  // Selecteer de container waar de POI's worden toegevoegd
  const container = document.querySelector(".container");

  // Voor elke POI in de array
  pois.forEach((poi) => {
    // Maak een div element voor de POI
    const poiDiv = document.createElement("div");
    poiDiv.classList.add("poi");

    // Maak een h2 element voor de naam van de POI
    const poiTitle = document.createElement("h2");
    poiTitle.textContent = poi.name;

    // Maak een img element voor de afbeelding van de POI
    const poiImg = document.createElement("img");
    poiImg.src = poi.imgSrc;
    poiImg.alt = poi.name;

    // Maak een p element voor de beschrijving van de POI
    const poiDescription = document.createElement("p");
    poiDescription.textContent = poi.description;

    // Voeg de titel, afbeelding en beschrijving toe aan de POI div
    poiDiv.appendChild(poiTitle);
    poiDiv.appendChild(poiImg);
    poiDiv.appendChild(poiDescription);

    // Voeg de POI div toe aan de container
    container.appendChild(poiDiv);
  });
});