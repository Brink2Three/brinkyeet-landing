const text = "Hello! I've been expecting you";
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text[index];
    index++;
    setTimeout(type, 20); // Typing speed in milliseconds
  } else {
    document.getElementById('prompt2').style.visibility = 'visible';
    console.log(document.querySelector(".prompt2"));
    flashCursor(); // Start the cursor flashing after typing finishes
  }
}

function flashCursor() {
  let flashDuration = 5000; // Flash for 3 seconds
  setTimeout(() => fadeOut(), flashDuration); // Fade out after the flash duration
}

function fadeOut() {
  document.querySelector(".crt-screen").classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "https://brinkyeet.com"; // Redirect to your main website
  }, 5000); // Adjust timing to match fade-out duration
}

function ipdisplay() {
        document.addEventListener("DOMContentLoaded", function() {
            // Fetch the IP address from the API
            fetch("https://api.ipify.org?format=json")
                .then(response => response.json())
                .then(data => {
                    // Display the IP address on the screen
                    document.getElementById("ip-address").textContent = data.ip;
                })
                .catch(error => {
                    console.error("Error fetching IP address:", error);
                });
        });
}

function storelastLogin() {
  let lastLoginTimestamp = localStorage.getItem('last-login-timestamp');
  if (!lastLoginTimestamp) {
    lastLoginTimestamp = new Date().getTime();
  }
  
  document.getElementById('typing-text').addEventListener('input', () => {
    const currentTime = new Date().getTime();
    localStorage.setItem('last-login-timestamp', currentTime);
  });
}

type();
