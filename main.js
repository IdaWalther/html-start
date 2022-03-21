//Skapar en array med quotes från serien i form av olika strängar.
const quotes = [
  "We live to fight another day - Ragnar",
  "In my mind, I wish I had never left the farm - Ragnar",
  "A Viking never gives up on his revenge. This is who we are - Erlendur",
  "You give the Gods too much credit - Ragnar",
  "When the spring comes, and my blood heats up, I Want nothing more than to raid and fight - Björn",
  "I would worry less about the gods and more about the fury of a patient man - Ragnar",
  "Warriors don't show their heart until the axe reveals it - Floki",
  "I was hoping that I could cheat the fates - Lagertha",
  "We fight. That is how we win, and that is how we die - Ragnar",
  "The gods are here. They're watching - The Seer",
];
//Skapa en knapp
let quoteBtn = document.querySelector("#btn-quote");

//Skapa en function
function getRandomQuote() {
  //Skapar en random lista utifrån arrayens längd
  let randomQuote = Math.floor(Math.random() * quotes.length);

  //Ser till att citatet skrivs ut på sidan med id ="quote"
  document.getElementById("quote").innerHTML = quotes[randomQuote];
}
//genom addEventListener berättar vi att när man klickar på knappen så körs funktionen getRandomQuote.
quoteBtn.addEventListener("click", getRandomQuote);
//genom getRandomQuote() ser vi till att citatet laddas in även innan vi klickar på knappen.
getRandomQuote();

//Vi hämtar alla knappar som har modals-btn 
let modalBtns = document.querySelectorAll(".modal-btn");

//Här loopar vi igenom varje modalBtn 
modalBtns.forEach(function(btn){
  
  /*btn är elementet och sen hämtar vi data-modal-btn på varje knpp. 
  När man använder dataset tas - bort vid attributet och ersätts med stor bokstav.*/
  let modalId = btn.dataset.modalBtn;

  /*Lättare att läsa än "#" + selectedModal eftersom vid långa strängar måste man använda flera + tecken och stänga och öppna "" medans här använder man backticks och ${} när man hämtar en variabel*/

  //Här hämtar vi hela modalelementet, vi söker igenom hela dokuementet
  let modal = document.querySelector(`#${modalId}`);
  // Här söker vi upp klassen med class .close-btn innan i modalen som vi hittade tidigare. 
  let modalCloseBtn = modal.querySelector(".close-btn")
  
  //När man klickar på stängknappen då körs functionen closeModal som parameter skickar vi med modalen vi vill stänga 
  modalCloseBtn.addEventListener("click", function(){
    closeModal(modal);
  } )
  //För varje modalknapp så berättar vi vilken modal vi vill att den öppnar när vi klickar på den.
  btn.addEventListener("click", function(){
    openModal(modal);
  });

  //När man klickar på modal, som ligger utanför modal-content så stänger vi modalen
  window.addEventListener("click", function(event){
    if (event.target === modal) {
      closeModal(modal);
    };
  });
});
//Här visas modalen
function openModal(modalElement) {
  modalElement.style.display = "block";
}
//här döljs modalen 
function closeModal(modalElement) {
  modalElement.style.display = "none";
}

