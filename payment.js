// Load data from localStorage
const selectedSeats = localStorage.getItem("selectedSeats") || "None";
const totalAmount = parseInt(localStorage.getItem("totalAmount")) || 0;

document.getElementById("selectedSeats").textContent = selectedSeats;
document.getElementById("totalAmount").textContent = totalAmount;

// Razorpay integration
document.getElementById("payBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (!email || !mobile) {
    alert("Please enter email and mobile number!");
    return;
  }

  const options = {
    key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
    amount: totalAmount * 100, // in paise
    currency: "INR",
    name: "Smart Transport",
    description: `Booking for seats: ${selectedSeats}`,
    prefill: {
      email: email,
      contact: mobile
    },
    theme: {
      color: "#007bff"
    },
    handler: function (response) {
      alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      // Optionally, send booking confirmation via email here (backend required)
      localStorage.clear(); // clear after payment
      window.location.href = "success.html";
    },
    modal: {
      ondismiss: function () {
        alert("Payment popup closed. Payment not completed.");
      }
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
});
// Aadhaar validation
document.getElementById("aadhaar").addEventListener("input", function () {
  let aadhaarInput = this.value.trim();
  let status = document.getElementById("aadhaarStatus");

  // Check if only digits
  if (!/^\d*$/.test(aadhaarInput)) {
    status.textContent = "❌ Only digits allowed";
    status.style.color = "red";
    return;
  }

  if (aadhaarInput.length === 12) {
    status.textContent = "✔ Verified";
    status.style.color = "green";
  } else {
    status.textContent = "❌ Aadhaar must be 12 digits";
    status.style.color = "red";
  }
});

