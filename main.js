// function showHtmlDiv(){var htmlShow=document.getElementById("quoteOutput").innerHTML='mohamewd';if(htmlShow.style.display==="none"){htmlShow.style.display="block"}else{htmlShow.style.display="none"}}
// const arrayOfQuotes=[{'author':'Jim Rohn','quote':'Beware of what you become in pursuit of what you want.'},{'author':'Epictetus','quote':'It\'s not what happens to you, but how you react to it that matters.'},{'author':'Frank Sinatra','quote':'The best revenge is massive success.'},{'author':'Wayne Gretzy','quote':'You miss 100% of the shots you don\'t take.'},{'author':'Nelson Mandela','quote':'Resentment is like drinking poison and waiting for your enemies to die.'},{'author':'Elbert Hubbard','quote':'Do not take life too seriously. You will not get out alive.'},];function generateQuote(){const random=Number.parseInt(Math.random()*arrayOfQuotes.length+1);document.querySelector('#quoteOutput').textContent=`\"${arrayOfQuotes[random].quote}\"`;document.querySelector('#authorOutput').textContent=`--${arrayOfQuotes[random].author}`}
// var arrayOfQuotes=[{'author':"Oscar Wilde",'quote':"“Be yourself; everyone else is already taken.”",},{'author':"Marilyn Monroe",'quote':"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",},{'author':"Frank Zappa",'quote':"So many books, so little time."},];function generateQuote(){var random=Number.parseInt(Math.random()*arrayOfQuotes.length+1)
// document.querySelector('#quoteOutput').textContent=`\"${arrayOfQuotes[random].quote}\"`;document.querySelector('#authorOutput').textContent=`--${arrayOfQuotes[random].author}`}
// var btn = document.getElementById("buttn");
// var quoteOutput = document.getElementById("quoteOutput");

var btn = document.getElementById("buttn");
var quoteOutput = document.getElementById("quoteOutput");

var qout = [
  "“Be yourself; everyone else is already taken.”― Oscar Wilde",
  "“So many books, so little time.”― Frank Zappa",
  "“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
  "“You only live once, but if you do it right, once is enough.”― Mae West",
  "“Be the change that you wish to see in the world.”― Mahatma Gandhi",
  "“If you tell the truth, you don't have to remember anything.”― Mark Twain",
  "“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard",
];
btn.addEventListener("click", function () {
  var randomquot = qout[Math.floor(Math.random() * qout.length)];
  quoteOutput.innerHTML = randomquot;
});
