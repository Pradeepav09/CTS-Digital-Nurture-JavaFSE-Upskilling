/* ==================================
   JAVASCRIPT SETUP
================================== */

console.log("Welcome to the Community Portal");

window.onload = function () {
    loadPreference();
    
    // Hide the loader
    let loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
    
    // Initialize Bootstrap tooltips if any
    console.log("Community Portal Ready");
};

/* ==================================
   EVENT DATA
================================== */

class Event {
    constructor(name, category, seats, fee) {
        this.name = name;
        this.category = category;
        this.seats = seats;
        this.fee = fee;
    }

    checkAvailability() {
        return this.seats > 0;
    }
}

const events = [
    new Event("Music Festival", "Music", 50, 500),
    new Event("Sports Meet", "Sports", 30, 300),
    new Event("Food Expo", "Food", 25, 200),
    new Event("Cultural Program", "Cultural", 40, 400),
    new Event("Art Exhibition", "Art", 35, 350),
    new Event("Book Fair", "Books", 45, 250)
];

console.log("Available Events");
events.forEach(event => {
    console.log(`${event.name} - ${event.category} - Seats: ${event.seats} - Fee: ₹${event.fee}`);
});

/* ==================================
   PHONE VALIDATION
================================== */

function validatePhone() {
    let phone = document.getElementById("phone").value;
    if (phone.length === 0) return true; // Empty is allowed
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone Number must contain exactly 10 digits");
        return false;
    }
    return true;
}

/* ==================================
   EVENT FEE DISPLAY - UPDATED with 6 events
================================== */

function showFee() {
    let eventType = document.getElementById("eventType").value;
    let fee = "";
    
    switch(eventType) {
        case "Music":
            fee = "🎵 Music Event Fee : ₹500";
            break;
        case "Sports":
            fee = "🏃 Sports Event Fee : ₹300";
            break;
        case "Food":
            fee = "🍔 Food Festival Fee : ₹200";
            break;
        case "Cultural":
            fee = "💃 Cultural Program Fee : ₹400";
            break;
        case "Art":
            fee = "🎨 Art Exhibition Fee : ₹350";
            break;
        case "Books":
            fee = "📚 Book Fair Fee : ₹250";
            break;
        default:
            fee = "";
    }
    
    let feeDisplay = document.getElementById("feeDisplay");
    if (feeDisplay) {
        feeDisplay.innerHTML = fee;
    }
}

/* ==================================
   FORM SUBMISSION - Fixed clear preferences
================================== */

function submitForm() {
    try {
        let nameInput = document.querySelector('input[placeholder="Enter your name"]');
        let emailInput = document.querySelector('input[placeholder="Enter your email"]');
        let phoneInput = document.getElementById("phone");
        let eventDateInput = document.querySelector('input[type="date"]');
        let eventTypeSelect = document.getElementById("eventType");
        let messageTextarea = document.querySelector('textarea[placeholder="Enter your message"]');
        let feedbackTextarea = document.getElementById("feedback");
        
        // Validation
        if (nameInput && nameInput.value.trim() === "") {
            throw new Error("Please enter your name");
        }
        
        if (emailInput && emailInput.value.trim() === "") {
            throw new Error("Please enter your email");
        }
        
        if (phoneInput && phoneInput.value.length > 0 && !validatePhone()) {
            throw new Error("Invalid Phone Number (must be 10 digits)");
        }
        
        if (eventTypeSelect && eventTypeSelect.value === "") {
            throw new Error("Please select an event type");
        }
        
        // Success message
        let outputMsg = document.getElementById("outputMessage");
        if (outputMsg) {
            outputMsg.innerHTML = "✅ Thank you for registering for " + eventTypeSelect.options[eventTypeSelect.selectedIndex]?.text + "!";
            outputMsg.style.color = "green";
        }
        
        alert("✅ Registration Submitted Successfully!");
        
        // CLEAR ALL FORM FIELDS
        if (nameInput) nameInput.value = "";
        if (emailInput) emailInput.value = "";
        if (phoneInput) phoneInput.value = "";
        if (eventDateInput) eventDateInput.value = "";
        if (eventTypeSelect) eventTypeSelect.value = "";
        if (messageTextarea) messageTextarea.value = "";
        if (feedbackTextarea) feedbackTextarea.value = "";
        
        let feeDisplay = document.getElementById("feeDisplay");
        if (feeDisplay) feeDisplay.innerHTML = "";
        
        let charCount = document.getElementById("charCount");
        if (charCount) charCount.innerHTML = "Characters : 0";
        
        // Clear localStorage preference after submission
        localStorage.removeItem("preferredEvent");
        
    }
    catch (error) {
        console.error(error);
        alert(error.message);
    }
}

/* ==================================
   CLEAR PREFERENCES - FIXED
================================== */

function clearPreferences() {
    // Clear storage
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear form fields
    let nameInput = document.querySelector('input[placeholder="Enter your name"]');
    let emailInput = document.querySelector('input[placeholder="Enter your email"]');
    let phoneInput = document.getElementById("phone");
    let eventDateInput = document.querySelector('input[type="date"]');
    let eventTypeSelect = document.getElementById("eventType");
    let messageTextarea = document.querySelector('textarea[placeholder="Enter your message"]');
    let feedbackTextarea = document.getElementById("feedback");
    let feeDisplay = document.getElementById("feeDisplay");
    let charCount = document.getElementById("charCount");
    let outputMsg = document.getElementById("outputMessage");
    
    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (phoneInput) phoneInput.value = "";
    if (eventDateInput) eventDateInput.value = "";
    if (eventTypeSelect) eventTypeSelect.value = "";
    if (messageTextarea) messageTextarea.value = "";
    if (feedbackTextarea) feedbackTextarea.value = "";
    if (feeDisplay) feeDisplay.innerHTML = "";
    if (charCount) charCount.innerHTML = "Characters : 0";
    if (outputMsg) outputMsg.innerHTML = "";
    
    alert("✅ All preferences and form data cleared!");
}

/* ==================================
   IMAGE ENLARGE
================================== */

function enlargeImage(img) {
    if (img.style.transform === "scale(1.3)") {
        img.style.transform = "scale(1)";
        img.style.transition = "0.3s";
        img.style.zIndex = "1";
    }
    else {
        img.style.transform = "scale(1.3)";
        img.style.transition = "0.3s";
        img.style.zIndex = "10";
        img.style.position = "relative";
    }
}

/* ==================================
   CHARACTER COUNTER
================================== */

function countCharacters() {
    let text = document.getElementById("feedback").value;
    document.getElementById("charCount").innerHTML = "Characters : " + text.length;
}

/* ==================================
   VIDEO READY EVENT
================================== */

function videoReady() {
    let videoMsg = document.getElementById("videoMessage");
    if (videoMsg) {
        videoMsg.innerHTML = "🎬 Video is ready to play!";
    }
}

/* ==================================
   LOCAL STORAGE
================================== */

function savePreference() {
    let selectedEvent = document.getElementById("eventType").value;
    if (selectedEvent) {
        localStorage.setItem("preferredEvent", selectedEvent);
    }
}

function loadPreference() {
    let savedEvent = localStorage.getItem("preferredEvent");
    if (savedEvent) {
        let eventSelect = document.getElementById("eventType");
        if (eventSelect) {
            eventSelect.value = savedEvent;
            showFee();
        }
    }
}

/* ==================================
   GEOLOCATION - IMPROVED
================================== */

function findLocation() {
    let locationDiv = document.getElementById("location");
    if (locationDiv) {
        locationDiv.innerHTML = "<span class='text-info'>📍 Fetching your location...</span>";
    }
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError,
            { enableHighAccuracy: true, timeout: 10000 }
        );
    }
    else {
        alert("Geolocation is not supported by your browser");
        if (locationDiv) {
            locationDiv.innerHTML = "❌ Geolocation not supported";
        }
    }
}

function showPosition(position) {
    let locationDiv = document.getElementById("location");
    if (locationDiv) {
        locationDiv.innerHTML = 
            "<span class='text-success'>✅ Location found!</span><br>" +
            "📍 Latitude: " + position.coords.latitude.toFixed(6) + "<br>" +
            "📍 Longitude: " + position.coords.longitude.toFixed(6) + "<br>" +
            "<span class='text-primary mt-2 d-inline-block'>🎉 Found 5+ events near you!</span>";
    }
}

function showError(error) {
    let locationDiv = document.getElementById("location");
    if (error.code === 1) {
        alert("Please allow location access to find nearby events");
        if (locationDiv) locationDiv.innerHTML = "❌ Location permission denied";
    }
    else if (error.code === 2) {
        alert("Location unavailable. Please check your GPS");
        if (locationDiv) locationDiv.innerHTML = "❌ Location unavailable";
    }
    else if (error.code === 3) {
        alert("Location request timed out. Please try again");
        if (locationDiv) locationDiv.innerHTML = "❌ Location request timed out";
    }
    else {
        alert("An error occurred while getting location");
        if (locationDiv) locationDiv.innerHTML = "❌ Error getting location";
    }
}

/* ==================================
   ARRAY METHODS
================================== */

const musicEvents = events.filter(event => event.category === "Music");
console.log("Music Events:", musicEvents);

const formattedEvents = events.map(event => `🎉 ${event.name} - ₹${event.fee}`);
console.log(formattedEvents);

/* ==================================
   REGISTRATION COUNTER
================================== */

function registrationCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const registerUser = registrationCounter();
console.log("Registration count:", registerUser());
console.log("Registration count:", registerUser());

/* ==================================
   OBJECT ENTRIES
================================== */

const sampleEvent = {
    name: "Music Festival",
    date: "2026-06-15",
    seats: 50,
    fee: 500
};

Object.entries(sampleEvent).forEach(([key, value]) => {
    console.log(key + ": " + value);
});

/* ==================================
   SCROLL TO TOP BUTTON
================================== */

let topBtn = document.getElementById("topBtn");
if (topBtn) {
    topBtn.addEventListener("click", function(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ==================================
   KEYBOARD EVENT
================================== */

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        console.log("ESC pressed");
    }
});

/* ==================================
   FAQ ACCORDION TOGGLE - Manual fix
================================== */

// Ensure accordion works properly
document.addEventListener("DOMContentLoaded", function() {
    // Force re-initialize accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-bs-target');
            const collapseElement = document.querySelector(target);
            if (collapseElement) {
                // Toggle the collapse class
                if (collapseElement.classList.contains('show')) {
                    collapseElement.classList.remove('show');
                    this.classList.add('collapsed');
                } else {
                    collapseElement.classList.add('show');
                    this.classList.remove('collapsed');
                }
            }
        });
    });
});