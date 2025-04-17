const jokeSetup = document.getElementById("joke-setup");
const jokePunchline = document.getElementById("joke-punchline");
const funFact = document.getElementById("fun-fact");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", async () => {
  // Fetch Joke
  try {
    const jokeRes = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jokeData = await jokeRes.json();
    jokeSetup.textContent = jokeData.setup;
    jokePunchline.textContent = jokeData.punchline;
  } catch (err) {
    jokeSetup.textContent = "Oops! Couldn't fetch a joke 😢";
    jokePunchline.textContent = "";
  }

  // Fetch Fun Fact
  try {
    const factRes = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    const factData = await factRes.json();
    funFact.textContent = factData.text;
  } catch (err) {
    funFact.textContent = "Oops! Couldn't fetch a fun fact 🥲";
  }
});
