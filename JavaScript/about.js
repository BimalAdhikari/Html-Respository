// Een array van vrienden met hun naam, afbeelding en beschrijving
const friends = [
  {
    name: "Freddy",
    image: "../Images/freddy.jpg",
    description: "Freddy is een geweldige vriend die in tuinen werkt. Hij heeft een beetje een drankprobleem, maar hij is er altijd als je hem nodig hebt."
  },
  {
    name: "Rick",
    image: "../Images/rick.jpg",
    description: "Rick is misschien niet de beste in Fortnite, maar hij heeft de Travis Scott skin, wat best cool is."
  },
  {
    name: "Sam",
    image: "../Images/sam.png",
    description: "Sam is echt goed in het maken van steaks en het tillen van zware gewichten in de sportschool. Hij is ook de beste Switch-speler in Fortnite."
  },
  {
    name: "Shikai",
    image: "../Images/buzz.jpeg",
    description: "Shikai is een loyale vriend die altijd voor je klaarstaat. Hij staat bekend om zijn strategische gameplay en snelle denken in Fortnite."
  }
];

// Selecteer de sectie waar de vriendenkaarten zullen worden toegevoegd
const friendsSection = document.querySelector('.friends-section');

// Voor elke vriend in de array, maak een kaart en voeg deze toe aan de sectie
friends.forEach(friend => {
  // Maak een div-element voor de vriend-kaart
  const card = document.createElement('section');
  card.className = 'friend-card';

  // Maak een img-element voor de afbeelding van de vriend
  const img = document.createElement('img');
  img.src = friend.image;
  img.alt = friend.name;

  // Maak een h3-element voor de naam van de vriend
  const name = document.createElement('h3');
  name.textContent = friend.name;

  // Maak een p-element voor de beschrijving van de vriend
  const description = document.createElement('p');
  description.textContent = friend.description;

  // Voeg de afbeelding, naam en beschrijving toe aan de vriend-kaart
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(description);

  // Voeg de vriend-kaart toe aan de vrienden-sectie
  friendsSection.appendChild(card);
});