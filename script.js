const text = "Hello! I've been expecting you";
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text[index];
    index++;
    setTimeout(type, 100); // Typing speed in milliseconds
  } else {
    flashCursor(); // Start the cursor flashing after typing finishes
  }
}

function flashCursor() {
  let flashDuration = 300000; // Flash for 3 seconds
  setTimeout(() => fadeOut(), flashDuration); // Fade out after the flash duration
}

function fadeOut() {
  document.querySelector(".crt-screen").classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "index.html"; // Redirect to your main website
  }, 3000000000); // Adjust timing to match fade-out duration
}

type();
