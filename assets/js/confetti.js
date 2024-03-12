
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const btn = document.getElementById("startTimerButton");
const countdownText = document.getElementById("countdown-text");

function countdownAndConfetti() {
    // Initialize countdown value
    let count = 3;

    // Display countdown in the button
    btn.textContent = count;

    // Countdown function
    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            btn.textContent = count;
        } else {
            // Clear the interval when countdown reaches 0
            clearInterval(countdownInterval);
            // Hide the button
            btn.style.display = "none";
            // Display "THE Hackathon begins" text
            countdownText.textContent = " - THE Hackathon begins";
            // Trigger confetti animation
            makeConfetti();
          // Adjust delay as needed
        }
    }, 1000); // Interval of 1 second (1000 milliseconds)
}

function makeConfetti() {
  // do this for  seconds
  var duration = 5 * 1000;
  var end = Date.now() + duration;

  (function frame() {
   
    
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0, y:1 }
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1, y:1 }
    });


    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  });
}

btn.addEventListener("click", countdownAndConfetti);

