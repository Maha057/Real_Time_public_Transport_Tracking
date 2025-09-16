// Toggle Search Form
let searchForm = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar');
let loginForm = document.querySelector('.login-form');
let busList = document.getElementById('bus-list'); // ✅ hidden bus section

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    busList.style.display = "none";
    loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    busList.style.display = "none";
};

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

// ✅ Live Tracking Feature Click
document.getElementById("live-tracking-btn").addEventListener("click", function () {
  if (busList.style.display === "none" || busList.style.display === "") {
    busList.style.display = "block";     // show buses
    busList.scrollIntoView({ behavior: "smooth" }); // scroll smoothly
  } else {
    busList.style.display = "none";      // hide buses
  }
});

// ✅ Swiper for Reviews
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
document.getElementById('track-now-btn').addEventListener('click', function() {
    window.location.href = 'map.html';
  });