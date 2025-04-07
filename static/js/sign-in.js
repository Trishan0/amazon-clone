const help = document.getElementsByClassName('need-help-header')[0];  // Access the first element
const dropDown = document.getElementsByClassName('help-dropdown')[0];  // Access the first element

function toggleDropDown() {
    // Check if the dropdown is currently visible
    if (dropDown.style.display === 'block') {
        dropDown.style.display = 'none';  // Hide the dropdown
    } else {
        dropDown.style.display = 'block';  // Show the dropdown
    }
}

help.addEventListener('click', toggleDropDown);
