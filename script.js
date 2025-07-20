const quotes = [
  { text: "You can do anything!", author: "Mom" },
  { text: "Believe in yourself.", author: "Dad" },
  { text: "Mistakes mean you’re trying!", author: "Teacher" },
  { text: "Never give up.", author: "Coach" },
  { text: "You're awesome!", author: "Me" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" }
];

const audio = new Audio('click.mp3');

function newQuote() {
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = `"${pick.text}"`;
  document.getElementById("author").textContent = `– ${pick.author}`;
  audio.play();
}

window.onload = newQuote;
