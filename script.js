
let searchForm = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar');
let loginForm = document.querySelector('.login-form');
let busList = document.getElementById('bus-list');

// toggle search form
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  busList.style.display = "none";
  loginForm.classList.remove('active');
};

// login
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  busList.style.display = "none";
};

// navbar
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  busList.style.display = "none";
  loginForm.classList.remove('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  busList.style.display = "none";
  loginForm.classList.remove('active');
};

// ✅ Live Tracking
document.getElementById("live-tracking-btn").addEventListener("click", function () {
  if (busList.style.display === "none" || busList.style.display === "") {
    busList.style.display = "block";     
    busList.scrollIntoView({ behavior: "smooth" }); 
  } else {
    busList.style.display = "none";      
  }
});

// ✅ Swiper
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: { delay: 7500, disableOnInteraction: false },
  centeredSlides: true,
  breakpoints: { 
    0:{slidesPerView:1}, 
    768:{slidesPerView:2}, 
    1020:{slidesPerView:3} 
  }
});


document.addEventListener("DOMContentLoaded", () => {

  // Fix Track Now button
  const trackNowBtn = document.getElementById('track-now-btn');
  if (trackNowBtn) {
    trackNowBtn.addEventListener('click', () => {
      window.location.href = 'map.html';
    });
  }

 
  const fromInput = document.getElementById("from-input");
  const toInput = document.getElementById("to-input");
  const dateInput = document.getElementById("date-input");
  const searchBtn = document.getElementById("search-buses-btn");

  function validateInputs() {
    if (fromInput.value.trim() !== "" && 
        toInput.value.trim() !== "" && 
        dateInput.value.trim() !== "") {
      searchBtn.disabled = false; // enable
    } else {
      searchBtn.disabled = true;  // keep disabled
    }
  }

  // Check inputs whenever user types or picks a date
  fromInput.addEventListener("input", validateInputs);
  toInput.addEventListener("input", validateInputs);
  dateInput.addEventListener("input", validateInputs);

  // Button click → navigate
  searchBtn.addEventListener("click", () => {
    if (!searchBtn.disabled) {
      window.location.href = "buses.html";
    }
  });
});



