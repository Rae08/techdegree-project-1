// quotes is an array that holds objects. The objects are quotes with properties quote, source, citation, and year.
var quotes = [
  {
    quote: 'It does not do to dwell on dreams and forget to live',
    source: 'Albus Dumbledore',
    citation: 'Sorcerer’s Stone'
  },
  {
    quote: 'I am what I am an’ I’m not ashamed',
    source: 'Rubeus Hagrid',
    citation: 'Goblet of Fire',
  },
  {
    quote: 'Always',
    source: 'Severus Snape',
    citation: 'Deathly Hallows',
  },
  {
    quote: 'Differences of habit and language are nothing at all if our aims are identical and our hearts are open',
    source: 'Albus Dumbledore',
    citation: 'Goblet of Fire'
  },
  {
    quote: 'Things we lose have a way of coming back to us in the end, if not always in the way we expect',
    source: 'Luna Lovegood',
    citation: 'Order of the Pheonix',
    year: '2003',
  }
];

// Array of colours

var colours = ["#173f5f", "#20639B", "#3CAEA3", "#F6D55C", "#ED553B"]

// getRandomQuote returns a quote at random from the quotes array. Returns an object.
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  return randomQuote;
};

// getRandomColour returns a colour at random from the colours array. Returns a string.
function getRandomColour() {
  var randomColour = Math.floor(Math.random() * colours.length);
  randomColour = colours[randomColour];
  return randomColour;
};

// printQuote uses getRandomQuote to get a random quote object, and then creates html based on the object properties to print the quote to the page
function printQuote() {
  selectQuote = getRandomQuote();
  var html = '<p class="quote">' + selectQuote.quote + '</p>';  
  html += '<p class="source">' + selectQuote.source;

  // citation is an optional property so this checks to see if it exists. 
  if (selectQuote.citation) {
    html += '<span class="citation">' + selectQuote.citation + '</span>';
  }

  // year is an optional property so this checks to see if it exists. 
  if (selectQuote.year) {
    html += '<span class="citation">' + selectQuote.year + '</span>';
  }
  html += '</p>'
  document.getElementById('quote-box').innerHTML = html;

  // updates the background colour to a random colour when a new quote is generated
  background = getRandomColour();
  document.body.style.backgroundColor = background;
}

// sets the page to display a new quote every 10 seconds
var timer = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);