 
//Hämtar menyknappen [] hämtar attribut
const triggerBtn = document.querySelector ('[data-trigger]');

 console.log(triggerBtn);
//Hämta stäng knappen
const triggerCloseBtn = document.querySelector ('.js-navigation-close');

 //skapar en funktion som ska köras på click
 function toggleShowMenu() {
// lägga en klass på body som sedan kan styra css
//Hämtar body element
const body = document.body;
//lägg till en klass på body
body.classList.toggle('navigation--open');
 }
//Lägg till click event på meny knappen som kör öppna meny funktionen
 triggerBtn.addEventListener('click', toggleShowMenu);

 triggerCloseBtn.addEventListener('click', toggleShowMenu);