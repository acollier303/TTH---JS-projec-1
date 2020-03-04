/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
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
  let quoteMessage = saying[random].quote; // Assigns a random quote from 'quotes' to s variable
  let sourceMessage = saying[random].source; //Assigns a matching 'source' from 'quotes' to a variable
  let citationMessage = saying[random].citation; //Assigns a matching citation from 'quotes' to a variable
  let yearMessage = saying[random].year; //Assigns a matching 'year' from 'quotes' to a variable
  result = [quoteMessage, sourceMessage, citationMessage, yearMessage]; //Creates an array that stores the random quote.
  return result;
}

//--- This function displays and formats random quote on index.html
function printQuote(final){
  getRandomQuote(quotes);   
  final = result;
  
  //--- creates a variable that combines 'quote' and 'source' in to HTML string.
  finalMessage = `<p class="quote"> ${final[0]} </p> 
  <p class="source"> ${final[1]}`;
  
  //--- Adds 'citation' to HTML string if availible 
  if (final[3] != undefined){
    finalMessage += `<span class="citation"> ${final[3]} </span>`;
  };

  //--- Adds 'year' to HTML string if availible
  if (final[4] != undefined){
    finalMessage += '<span class="year"> ${final[4]} </span></p?'
  }
  document.getElementById('quote-box').innerHTML = finalMessage; 
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);

