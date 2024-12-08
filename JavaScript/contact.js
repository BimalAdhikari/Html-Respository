document.addEventListener('DOMContentLoaded', () => {
    // Selecteer het contactformulier binnen de contact-container
    const contactForm = document.querySelector('.contact-container form');
  
    // Voeg een submit event listener toe aan het contactformulier
    contactForm.addEventListener('submit', (event) => {
        // Haal de waarden van de naam, e-mail en bericht velden op
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const message = contactForm.querySelector('#message').value;
  
        // Controleer of alle velden zijn ingevuld
        if (!name || !email || !message) {
            // Toon een waarschuwing als niet alle velden zijn ingevuld
            alert('Please fill in all fields.');
            // Voorkom dat het formulier wordt verzonden
            event.preventDefault();
        } else {
            // Toon een succesbericht als alle velden zijn ingevuld
            alert('Submission was succesfull!.');
        }
    });
});