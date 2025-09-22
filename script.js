document.addEventListener("DOMContentLoaded", () => {
  let searchForm = document.querySelector('.search-form');
  let navbar = document.querySelector('.navbar');
  let loginForm = document.querySelector('.login-form');
  let busList = document.getElementById('bus-list');

  // Toggle search form
  document.querySelector('#search-btn')?.addEventListener("click", () => {
    searchForm?.classList.toggle('active');
    navbar?.classList.remove('active');
    busList.style.display = "none";
    loginForm?.classList.remove('active');
  });

  // Login
  document.querySelector('#login-btn')?.addEventListener("click", () => {
    loginForm?.classList.toggle('active');
    navbar?.classList.remove('active');
    searchForm?.classList.remove('active');
    busList.style.display = "none";
  });

  // Navbar
  document.querySelector('#menu-btn')?.addEventListener("click", () => {
    navbar?.classList.toggle('active');
    searchForm?.classList.remove('active');
    busList.style.display = "none";
    loginForm?.classList.remove('active');
  });

  window.onscroll = () => {
    navbar?.classList.remove('active');
    searchForm?.classList.remove('active');
    busList.style.display = "none";
    loginForm?.classList.remove('active');
  };

  // Live Tracking
  document.getElementById("live-tracking-btn")?.addEventListener("click", function () {
    if (busList.style.display === "none" || busList.style.display === "") {
      busList.style.display = "block";     
      busList.scrollIntoView({ behavior: "smooth" }); 
    } else {
      busList.style.display = "none";      
    }
  });

  // Swiper
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

  // Track Now button
  const trackNowBtn = document.getElementById('track-now-btn');
  trackNowBtn?.addEventListener('click', () => {
    window.location.href = 'map.html';
  });

  // Input validation for search
  const fromInput = document.getElementById("from-input");
  const toInput = document.getElementById("to-input");
  const dateInput = document.getElementById("date-input");
  const searchBtn = document.getElementById("search-buses-btn");

  function validateInputs() {
    if (fromInput?.value.trim() !== "" && toInput?.value.trim() !== "" && dateInput?.value.trim() !== "") {
      searchBtn.disabled = false; 
    } else {
      searchBtn.disabled = true; 
    }
  }

  fromInput?.addEventListener("input", validateInputs);
  toInput?.addEventListener("input", validateInputs);
  dateInput?.addEventListener("input", validateInputs);

  searchBtn?.addEventListener("click", () => {
    if (!searchBtn.disabled) {
      window.location.href = "buses.html";
    }
  });

});
