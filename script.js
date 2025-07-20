const quotes = [
  { text: "You can do anything!", author: "Mom" },
  { text: "Believe in yourself.", author: "Dad" },
  { text: "Mistakes mean you’re trying!", author: "Teacher" },
  { text: "Never give up.", author: "Coach" },
  { text: "You're awesome!", author: "Me" }
];

function newQuote() {
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = `"${pick.text}"`;
  document.getElementById("author").textContent = `– ${pick.author}`;
}

// Show a random quote when the page loads
window.onload = newQuote;
