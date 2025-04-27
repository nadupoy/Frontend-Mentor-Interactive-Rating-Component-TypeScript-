import './style.css'
import { ratingComponent } from "./rating-component";

// The non-null Assertion Operator (Postfix !) is used here 👇🏽:
document.querySelector<HTMLDivElement>("#app")!.innerHTML = ratingComponent.content;
