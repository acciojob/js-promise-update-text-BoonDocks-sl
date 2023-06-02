//your JS code here. If required.
function updateTextAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Example usage
const outputElement = document.getElementById("output");

updateTextAfterDelay().then((message) => {
  outputElement.textContent = message;
});
