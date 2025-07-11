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
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupDropdowns);


const swiper = new Swiper(".swiper", {
 

  slidesPerView: 1,
  spaceBetween:30,
  breakpoints: {
  
    600: {
      slidesPerView: 1,
      spaceBetween: 10
    },
     750: {
      slidesPerView: 2,
      spaceBetween: 20
    },
     1100: {
      slidesPerView: 3,
      spaceBetween: 20
    },
     1700: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  
  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-previous",
  },

  
});



