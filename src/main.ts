import "./style.css";
import iconStarLogo from "/images/icon-star.svg";
import thankYouIllustration from "/images/illustration-thank-you.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="default-state" id="default-component">
  <img src=${iconStarLogo} alt="star-icon" />
  <h1>How did we do?</h1>
  <p>
  Please let us know how we did with your support request. All feedback is 
  appreciated to help us improve our offering!
  </p>
  <form id="rating" name="rating">
  <div class="rating-buttons">
  <input type="button" value="1" />
  <input type="button" value="2" />
  <input type="button" value="3" />
  <input type="button" value="4" />
  <input type="button" value="5" />
  </div>
  <input type="submit" value="SUBMIT" />
  </form>
  </section>
`;

// Form:
const ratingForm = document.getElementById("rating");

// Rating Buttons:
const ratingButtons = document.querySelectorAll('[type="button"]');

// Contents of 'section.default-state' when the rating is selected and form submitted:
let thankYouState: string;

// Function that picks the value of the selected (in focus) rating button:
function selectRating() {
  // Non-null assertion operator:
  let rating = this!.value;
  thankYouState = `
  <img src=${thankYouIllustration} alt="thank-you-illustration" />
  <p class="rating">
  You selected <span>${rating}</span> out of 5
  </p>
  <h1>Thank you!</h1>
  <p>
  We appreciate you taking the time to give a rating. If you ever need more support, 
  don't hesitate to get in touch!
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
  submittedForm!.innerHTML = thankYouState;
  event.preventDefault();
}

ratingForm!.addEventListener("submit", submitRating);
