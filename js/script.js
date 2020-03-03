/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote:'The city’s central computer told you?  R2D2, you know better than to trust a strange computer!' , 
    source:'C33PO',
    citation:'Star Wars: Episode V',
    year:'1980'
  },
  {
    quote:'Microsoft has a new version out, Windows XP, which according to everybody is the ‘most reliable Windows ever.‘  To me, this is like saying that asparagus is ‘the most articulate vegetable ever.‘' , 
    source:'Dave Barry',
    citation:'',
    year:''
  },
  {
    quote:'That’s what’s cool about working with computers.  They don’t argue, they remember everything, and they don’t drink all your beer.' , 
    source:'Paul Leary',
    citation:'',
    year:''
  },
  {
    quote:'Tell me and I forget.  Teach me and I remember.  Involve me and I learn.' , 
    source:'Benjamin Franklin',
    citation:'',
    year:''
  },
  {
    quote:'Commenting your code is like cleaning your bathroom — you never want to do it, but it really does create a more pleasant experience for you and your guests.' , 
    source:'Ryan Campbell',
    citation:'',
    year:''
  },
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes){
  let random = Math.floor(Math.random()*5);
  console.log(random);
}


/***
 * `printQuote` function
***/
function printQuote(){
    
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

getRandomQuote();