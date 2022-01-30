`use strict`;
let number = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = number; // Removing the question mark and is showing the secret Number
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No input!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎉Correct Answer";
    document.querySelector("body").style.backgroundColor = "#0cb03b";
    document.querySelector(".number").style.width = "30%";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    // TO MAKE THE CODE DRY
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "📉Too high !" : "📈Too low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message"),
        (textContent = "☹️You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //INITIAL CODE

  // else if (guess > number) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "📉Too high !";
  //     score--;
  //   }
  //   document.querySelector(".score").textContent = score;
  // } else if (guess < number) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "📈Too low !";
  //     score--;
  //   }
  //   if (score === 0) {
  //     document.querySelector(".message").textContent = "You lost !";
  //   }
  //   document.querySelector(".score").textContent = score;
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
