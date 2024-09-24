// Get button and dropdown elements
const dropdownButton = document.getElementById('menu-nav');
const dropdown = document.getElementById('nav-items');

// Toggle dropdown visibility on button click
dropdownButton.addEventListener('click', function() {
    console.log("welcome to dropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

// // Optionally, close the dropdown if clicked outside
// window.onclick = function(event) {
//   if (!event.target.matches('#dropdownButton')) {
//     dropdown.style.display = "none";
//   }
// };
