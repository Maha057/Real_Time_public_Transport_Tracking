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
// Sample seat layout generation
const seatLayout = document.getElementById("seatLayout");
const rows = 9; // 9 rows
const leftSeats = 2;
const rightSeats = 3;
const seatPrice = 200; // example price per seat
let selectedSeats = [];

// Sample booked seats
const bookedSeats = ["A1", "B3", "C2"]; // already booked

for (let i = 0; i < rows; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left-side");
  for (let j = 0; j < leftSeats; j++) {
    const seatNo = String.fromCharCode(65 + i) + (j + 1);
    const seatBtn = document.createElement("div");
    seatBtn.classList.add("seat");
    seatBtn.textContent = seatNo;
    seatBtn.innerHTML += `<span class="price">₹${seatPrice}</span>`;
    if (bookedSeats.includes(seatNo)) seatBtn.classList.add("booked");
    seatBtn.addEventListener("click", () => toggleSeat(seatBtn, seatNo));
    leftDiv.appendChild(seatBtn);
  }

  const aisle = document.createElement("div");
  aisle.classList.add("aisle");

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right-side");
  for (let j = 0; j < rightSeats; j++) {
    const seatNo = String.fromCharCode(65 + i) + (j + 1 + leftSeats);
    const seatBtn = document.createElement("div");
    seatBtn.classList.add("seat");
    seatBtn.textContent = seatNo;
    seatBtn.innerHTML += `<span class="price">₹${seatPrice}</span>`;
    if (bookedSeats.includes(seatNo)) seatBtn.classList.add("booked");
    seatBtn.addEventListener("click", () => toggleSeat(seatBtn, seatNo));
    rightDiv.appendChild(seatBtn);
  }

  rowDiv.appendChild(leftDiv);
  rowDiv.appendChild(aisle);
  rowDiv.appendChild(rightDiv);
  seatLayout.appendChild(rowDiv);
}

// Seat selection toggle
function toggleSeat(seatBtn, seatNo) {
  if (seatBtn.classList.contains("booked")) return;

  if (seatBtn.classList.contains("selected")) {
    seatBtn.classList.remove("selected");
    selectedSeats = selectedSeats.filter(s => s !== seatNo);
  } else {
    seatBtn.classList.add("selected");
    selectedSeats.push(seatNo);
  }

  updateSummary();
}

// Update summary
function updateSummary() {
  const subtotal = selectedSeats.length * seatPrice;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  document.getElementById("selectedSeats").textContent = selectedSeats.join(", ") || "None";
  document.getElementById("subtotal").textContent = subtotal;
  document.getElementById("gst").textContent = gst;
  document.getElementById("total").textContent = total;

  const continueBtn = document.getElementById("continueBtn");
  continueBtn.disabled = selectedSeats.length === 0;

  // Save data to localStorage for payment page
  localStorage.setItem("selectedSeats", selectedSeats.join(", "));
  localStorage.setItem("totalAmount", total);
}

// Continue to payment
document.getElementById("continueBtn").addEventListener("click", () => {
  window.location.href = "payment.html";
});
