// Form:
const ratingForm = document.getElementById("rating");
// Rating buttons:
const ratingButtons = document.querySelectorAll('[type="button"]');
// let result = document.getElementById('rating-score');
// Contents of section.default-state when the rating is selected and form submitted:
let thankYouState;
// Function that picks the value of the selected (in focus) rating button:
function selectRating() {
  // Non-null assertion operator:
  let rating = this.value;
  thankYouState = `
  <img src="./images/illustration-thank-you.svg" alt="thank-you-illustration" />
  <p class="rating">
  You selected <span>${rating}</span> out of 5
  </p>
  <h1>Thank you!</h1>
  <p>
  We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
  </p>
  `;
}
// Add selectRating() to each rating button:
for (let ratingButton of ratingButtons) {
  ratingButton.addEventListener("focus", selectRating);
}
// Element content to be replaced on form submission:
const submittedForm = document.getElementById("default-component");
function submitRating(event) {
  submittedForm.innerHTML = thankYouState;
  event.preventDefault();
}
ratingForm.addEventListener("submit", submitRating);
