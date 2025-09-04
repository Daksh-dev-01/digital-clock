function updateClock() {
  const now = new Date();

  // Get hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero if < 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display time
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

  // Display date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);
}

// Update clock every second
setInterval(updateClock, 1000);

// Call once immediately
updateClock();
