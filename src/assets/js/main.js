import { headerInput } from "./headerInput.js";
import { burgerInteraction } from "./burger.js";
import { headerScroll } from "./headerScroll.js";

window.addEventListener("DOMContentLoaded", () => {
    headerInput();
    burgerInteraction();
    headerScroll();
})