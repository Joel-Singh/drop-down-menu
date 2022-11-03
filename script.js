/*
plan:
Add drop-down-menu class to elements
query selector them all
add an event listener that toggles a drop-down-visible class
add css to make it actually hide and show
*/

function initializeDropDownMenus() {
  const dropDownElementsArr = [...document.querySelectorAll(".drop-down-menu")];
  dropDownElementsArr.forEach((el) => {
    el.addEventListener("click", (ev) => {
      const allChildren = ev.target
        .closest(".drop-down-menu")
        .querySelectorAll(":scope > *");

      allChildren.forEach((e) => e.classList.toggle("drop-down-hide"));
    });
  });
}
