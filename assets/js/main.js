function setupDropdowns() {
  const toggles = document.querySelectorAll("[data-dropdown]");

  toggles.forEach((toggle) => {
    const targetButton = toggle.querySelector("[data-dropdown-toggle]");
    const targetDropdown = toggle.querySelector("[data-dropdown-target]");

    targetButton.addEventListener("click", () => {
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
        searchBtn.classList.add("active");
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
}

document.addEventListener("DOMContentLoaded", setupDropdowns);
