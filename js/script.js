/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Adrian Collier
******************************************/

//--- Array of quotes, citations, and years
let quotes = [
  {
    quote:'The city’s central computer told you?  R2D2, you know better than to trust a strange computer!' , 
    source:'C33PO',
    citation:'Star Wars: Episode V',
    year:'1980'
  },
  {
    quote:'Microsoft has a new version out, Windows XP, which according to everybody is the ‘most reliable Windows ever.‘  To me, this is like saying that asparagus is ‘the most articulate vegetable ever.‘' , 
    source:'Dave Barry'
  },
  {
    quote:'That’s what’s cool about working with computers.  They don’t argue, they remember everything, and they don’t drink all your beer.' , 
    source:'Paul Leary'
  },
  {
    quote:'Tell me and I forget.  Teach me and I remember.  Involve me and I learn.' , 
    source:'Benjamin Franklin'
  },
  {
    quote:'Commenting your code is like cleaning your bathroom — you never want to do it, but it really does create a more pleasant experience for you and your guests.' , 
    source:'Ryan Campbell'
      },
];

//--- This function returns a random quote from the 'quotes' array
function getRandomQuote(saying){
  let random = Math.floor(Math.random()*quotes.length);   //Generates a random number betwen 0 and the last element of the array
  return quotes[random];
}

//--- This function displays and formats random quote on index.html
function printQuote(){
  let randomQuote = getRandomQuote();
  //--- creates a variable that combines 'quote' and 'source' in to HTML string.
  let displayQuote = `<p class="quote"> ${randomQuote.quote} </p> 
  <p class="source"> ${randomQuote.source}`;
  
  //--- Adds 'citation' to HTML string if availible 
  if (randomQuote.citation != undefined){
    displayQuote += `<span class="citation"> ${randomQuote.citation} </span>`;
  };

  //--- Adds 'year' to HTML string if availible
  if (randomQuote.year != undefined){
    displayQuote += `<span class="year"> ${randomQuote.year} </span>`;
  }
  document.getElementById('quote-box').innerHTML = displayQuote += '</p>'; 
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);

