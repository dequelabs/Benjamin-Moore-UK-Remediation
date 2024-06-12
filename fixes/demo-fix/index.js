import { fixButton } from "@amaze/plugins";

/**
 * @fix some-element
 * @selector .some-element
 * @summary Fixes some element to be a button
 */

export default (() => {
  const buttons = document.querySelectorAll("button");
  if (buttons.length) {
    buttons.forEach(button => fixButton(button));
  }
})();
