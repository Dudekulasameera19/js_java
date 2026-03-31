// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Event Data
const events = [
  {
    title: "Royal Wedding Ceremony",
    category: "wedding",
    date: "May 10, 2026",
    location: "Hyderabad",
    price: "₹1,50,000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Kids Birthday Bash",
    category: "birthday",
    date: "May 18, 2026",
    location: "Secunderabad",
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Corporate Growth Summit",
    category: "corporate",
    date: "June 05, 2026",
    location: "HITEC City",
    price: "₹95,000",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Live Music Festival",
    category: "music",
    date: "April 20, 2026",
    location: "Hyderabad",
    price: "₹60,000",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Luxury Reception Night",
    category: "wedding",
    date: "June 14, 2026",
    location: "Begumpet",
    price: "₹1,20,000",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Office Annual Celebration",
    category: "corporate",
    date: "July 01, 2026",
    location: "Gachibowli",
    price: "₹80,000",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80"
  }
];

const eventContainer = document.getElementById("eventContainer");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayEvents(filter) {
  eventContainer.innerHTML = "";

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter(event => event.category === filter);

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-content">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Price:</strong> ${event.price}</p>
        <a href="#booking" class="btn">Book This Event</a>
      </div>
    `;

    eventContainer.appendChild(card);
  });
}

displayEvents("all");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    displayEvents(filter);
  });
});

// Countdown Timer
const targetDate = new Date("April 20, 2026 18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<p>Event Started!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Booking Form Validation
const bookingForm = document.getElementById("bookingForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const eventType = document.getElementById("eventType").value;
  const eventDate = document.getElementById("eventDate").value;
  const message = document.getElementById("message").value.trim();

  // Error Fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const eventTypeError = document.getElementById("eventTypeError");
  const dateError = document.getElementById("dateError");
  const messageError = document.getElementById("messageError");

  // Clear Old Errors
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  eventTypeError.textContent = "";
  dateError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (name === "") {
    nameError.textContent = "Please enter your name";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Please enter your email";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Please enter a valid email";
    isValid = false;
  }

  if (phone === "") {
    phoneError.textContent = "Please enter your phone number";
    isValid = false;
  } else if (!/^[0-9]{10}$/.test(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number";
    isValid = false;
  }

  if (eventType === "") {
    eventTypeError.textContent = "Please select event type";
    isValid = false;
  }

  if (eventDate === "") {
    dateError.textContent = "Please select event date";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "Please enter your requirements";
    isValid = false;
  }

  if (isValid) {
    const bookingData = {
      name,
      email,
      phone,
      eventType,
      eventDate,
      message
    };

    let bookings = JSON.parse(localStorage.getItem("eliteBookings")) || [];
    bookings.push(bookingData);
    localStorage.setItem("eliteBookings", JSON.stringify(bookings));

    popup.style.display = "flex";
    bookingForm.reset();
  }
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Testimonials Slider
const testimonials = [
  {
    text: "“Elite Events made our wedding absolutely beautiful. Everything was perfectly managed and stress-free.”",
    name: "- Priya & Rahul"
  },
  {
    text: "“Our corporate seminar was organized professionally. The team handled every detail very smoothly.”",
    name: "- Nexus Solutions"
  },
  {
    text: "“They arranged my daughter’s birthday party wonderfully. The decoration and planning were amazing.”",
    name: "- Sneha Reddy"
  }
];

let testimonialIndex = 0;
const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");

function showTestimonials() {
  testimonialText.textContent = testimonials[testimonialIndex].text;
  testimonialName.textContent = testimonials[testimonialIndex].name;
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(showTestimonials, 3000);