// Get the element with the ID "cleancommutes"
const header = document.getElementById('header_lincoln');
// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the text color
function changeTextColor() {
    header.style.color = getRandomColor();
}

// Call the changeTextColor function every 100 milliseconds (adjust the interval as desired)
setInterval(changeTextColor, 500);