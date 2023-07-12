const btn = document.querySelector("#btn");
const secondContainer = document.createElement("div");
const mainContainer = document.querySelector(".container");
const emoji = document.createElement("p");
const thankYou = document.createElement("p");
const headingFour = document.createElement("h4");
const span = document.createElement("span");

const displayFeedback = () => {
  mainContainer.classList.remove("container");
  mainContainer.innerHTML = "";
  document.body.append(secondContainer);
  secondContainer.classList.add("feedback-container");
  emoji.innerHTML = "❤️";
  thankYou.innerHTML = "Thank You!";
  headingFour.innerHTML = "Feedback:Satisfied";
  span.innerHTML = "We'll use your feedback to improve our customer support";
  secondContainer.append(emoji, thankYou, headingFour, span);
  console.log(mainContainer);
  console.log(secondContainer);
};
btn.addEventListener("click", displayFeedback);
