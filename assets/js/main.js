function setupDropdowns() {
  const toggles = document.querySelectorAll("[data-dropdown]");

  toggles.forEach((toggle) => {
    const targetButton = toggle.querySelector("[data-dropdown-toggle]");
    const targetDropdown = toggle.querySelector("[data-dropdown-target]");

    toggle.addEventListener("click", () => {
      if (toggle.classList.contains("active")) {
        targetButton.setAttribute("aria-expanded", "false");
        toggle.classList.remove("active");
        targetButton.classList.remove("active");
        targetDropdown.classList.remove("active");
      } else {
        targetButton.setAttribute("aria-expanded", "true");
        toggle.classList.add("active");
        targetButton.classList.add("active");
        targetDropdown.classList.add("active");
      }
    });

    document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target)) {
        console.log("test");
        targetButton.setAttribute("aria-expanded", "false");
        toggle.classList.remove("active");
        targetButton.classList.remove("active");
        targetDropdown.classList.remove("active");
      } else {
        console.log("else test");
      }
    });
  });

  const searchBtn = document.querySelector(".header__button-search");

  searchBtn.addEventListener("click", () => {
    const form = document.querySelector("[data-search-target]");
    const searchIcon = document.querySelector(".search-btn");
    const closeIcon = document.querySelector(".close-btn");

    if (form.classList.contains("active")) {
      searchBtn.classList.remove("active");
      form.classList.remove("active");
      searchIcon.classList.remove("active");
      closeIcon.classList.remove("active");
    } else {
      searchBtn.classList.add("active");
      form.classList.add("active");
      searchIcon.classList.add("active");
      closeIcon.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", setupDropdowns);
