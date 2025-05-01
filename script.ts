// Form:
const ratingForm = document.getElementById("rating");

// Value of selected rating from the form:
let rating;

// Contents of section.default-state when the rating is selected and form submitted:
const thankYouState: string = `
<img src="./images/illustration-thank-you.svg" alt="thank-you-illustration" />
<p class="rating">
You selected ${rating} out of 5
</p>
<h1>Thank you!</h1>
<p>
We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
</p>
`;
