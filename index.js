const randomQuotes = document.getElementById("quotes");
const randomAuthor = document.getElementById("author");
const btn = document.getElementById("btn");
const apiURL = "http://api.quotable.io/random";
async function getQuotes() {
  try {
    btn.innerText = "Loading...";
    btn.disabled = true;
    randomQuotes.innerText = "Updating";
    randomAuthor.innerText = "Updating";
    const response = await fetch(apiURL);
    const data = await response.json();
    randomQuotes.innerText = data.content;
    randomAuthor.innerText = "~" + data.author;
    btn.innerText = "Get a quote";
    btn.disabled = false;
  } catch (error) {
    randomQuotes.innerText = "An error happened, try again later";
    randomAuthor.innerText = "An error happened ";
    btn.innerText = "Get a quote";
    btn.disabled = false;
  }
}

getQuotes();

btn.addEventListener("click", getQuotes);
