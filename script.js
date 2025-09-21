
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

// ✅ Track now button
document.getElementById('track-now-btn').addEventListener('click', function() {
  window.location.href = 'map.html';
});

// ✅ Search Buses button
document.getElementById("search-buses-btn").addEventListener("click", function () {
  window.location.href = "buses.html";
});

