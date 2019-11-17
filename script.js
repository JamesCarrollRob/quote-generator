

const quotes = [
    {
        name: 'Marcus Aurelius',
        quote: 'You have power over your mind - not outside events. Realize this, and you will find strength.'
    },

    {
        name: 'Plato',
        quote: 'If you do not take an interest in the affairs of your government, then you are doomed to live under the rule of fools.'
    },

    {
        name: 'Ho Chi Minh',
        quote: 'Today we should make poems including iron and steel And the poet should know how to lead an attack.'
    },

    {
        name: 'Friedrich Nietzsche',
        quote: 'There will always be rocks in the road ahead of us. They will be stumbling blocks or stepping stones; it all depends on how you use them.'
    },
]



const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', quoteAnimation);

function quoteAnimation () {
    $('.container').fadeOut(2000).fadeIn(4000);
    displayQuote();
        
    // $('#quote').fadeOut(3000);
    // $('#quoteAuthor').fadeOut(3000);
    //    setTimeout(displayQuote(),
    //     5000);     
}


function displayQuote () {
    let number = Math.floor(Math.random()*quotes.length);
    setTimeout( function (){
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote; 
    },2000);
}






// $( document ).ready(function() {
//     $('#quoteBtn').click(function(){
//     $('h2').fadeIn(3000);
 
//     });
// });


// $( document ).ready(function quoteAnimation () {
    
//     $('#quoteBtn').click(function(){
//     $('#quote').fadeOut(3000).displayQuote().fadeIn(3000);
//     $('#quoteAuthor').fadeOut(3000).displayQuote().fadeIn(3000);
 
//     });
// });