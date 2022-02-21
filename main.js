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

//Skapar en random lista utifrån arrayens längd
let randomQuote = Math.floor(Math.random() * quotes.length);

//Ser till att citatet skrivs ut på sidan med id ="quote"
document.getElementById("quote").innerHTML = quotes[randomQuote];


//Hämta knappen som öppnar modal
let modalBtn = document.getElementById("modal-btn");

//Hämta modal
let modal = document.querySelector(".modal");

//Hämtar elementet som stänger modal
let closeBtn = document.querySelector(".close-btn");

//När man klickar på knappen öppnas modal
modalBtn.onclick = function(){
  modal.style.display = "block";
};

//När man klickar på x så stängs modal
closeBtn.onclick = function(){
  modal.style.display = "none";
};

//När man klickar någonstans utanför modalen så stängs modalen
window.onclick = function(event){
  if(event.target == modal) {
    modal.style.display = "none";
  }
};
