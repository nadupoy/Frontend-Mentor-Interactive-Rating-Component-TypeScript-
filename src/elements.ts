import iconStar from "/images/icon-star.svg";

export interface Element {
  content: string;
}

const formDefault: Element = {
  content: `
        <form id="rating" name="rating">
        <div class="rating-buttons">
        <input type="button" value="1">
        <input type="button" value="2">
        <input type="button" value="3">
        <input type="button" value="4">
        <input type="button" value="5">
        </div>
        <input type="submit" value="SUBMIT">
        </form>
    `,
};

export const section: Element = {
  content: `
    <img src=${iconStar}>
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    ${formDefault.content}
    `,
};

export const footer: Element = {
  content: `<footer>
    <p>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> | Coded by <a href="https://github.com/nadupoy" target="_blank">nadupoy</a>
    </p>
    </footer>`,
};
