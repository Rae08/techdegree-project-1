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

// getRandomQuote returns a quote at random from the quotes array. Returns an object.
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  return randomQuote;
};

// printQuote uses getRandomQuote to get a random quote object, and then creates html based on the object properties to print the quote to the page
function printQuote() {
  selectQuote = getRandomQuote();
  // var html = '';
  var html = '<p class="quote">' + selectQuote.quote + '</p>';  
  html += '<p class="source">' + selectQuote.source;

  // citation is an option property so this checks to see if it exists. 
  if (selectQuote.citation) {
    html += '<span class="citation">' + selectQuote.citation + '</span>';
  }

  // year is an option property so this checks to see if it exists. 
  if (selectQuote.year) {
    html += '<span class="citation">' + selectQuote.year + '</span>';
  }
  html += '</p>'
  document.getElementById('quote-box').innerHTML = html;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);