// Do Now: Find the IDs - open the Dev Tool's console
const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;

const boroughs = {
  "manhattan": `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`,
  "brooklyn": `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`,
  "bronx": `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`,
  "queens": `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`,
  "staten island": `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`
};

const checkAnswer = () => {
  // Retrieve inputted value
  const input = textBox.value.toLowerCase().trim();

  // Match against boroughs; Add text to output and increment score
  if (boroughs[input]) {
    outputBox.innerHTML += boroughs[input];
    score++;
    delete boroughs[input];
  }

  //check if score = 5! (winner)
  if (score === 5) {
    statusBox.textContent = "You won!";
  }

  // Reset the textBox
  textBox.value = "";
};

textBox.addEventListener("change", checkAnswer);