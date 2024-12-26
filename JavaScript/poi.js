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


  for(i = 0; i < pois.length; i++){
    const currentPoi = pois[i];
    const poiSection = document.createElement("section");
    poiSection.classList.add("poi");

    
    const poiTitle = document.createElement("h2");
    poiTitle.textContent = currentPoi.name;

   
    const poiImg = document.createElement("img");
    poiImg.src = currentPoi.imgSrc;
    poiImg.alt = currentPoi.name;

    
    const poiDescription = document.createElement("p");
    poiDescription.textContent = currentPoi.description;

    
    poiSection.appendChild(poiTitle);
    poiSection.appendChild(poiImg);
    poiSection.appendChild(poiDescription);
    container.appendChild(poiSection);
  }
});