// ❤️ Heart Button Count
const heartButtons = document.querySelectorAll(".heart-btn");
const heartCount = document.getElementById("heart-count");
let count = 0;

heartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    heartCount.textContent = count;
  });
});

// 🪙 Coins System + Call History
let coins = 100;

function makeCall(serviceName, serviceNumber) {
  if (coins >= 20) {
    coins -= 20;
    document.getElementById("coins").innerText = coins;

    alert(`${serviceName} - ${serviceNumber}`);

    // add history
    const historyDiv = document.getElementById("history");
    const time = new Date().toLocaleString();
    const entry = document.createElement("div");
    entry.className = "p-2 bg-gray-100 rounded-lg";
    entry.innerText = `${serviceName} (${serviceNumber}) - ${time}`;
    historyDiv.prepend(entry);

  } else {
    alert("Terminate the process: Not enough coins!");
  }
}

// 🧹 Clear History
function clearHistory() {
  document.getElementById("history").innerHTML = "";
}