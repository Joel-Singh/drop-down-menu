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

initializeDropDownMenus();
