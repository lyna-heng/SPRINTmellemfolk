// Toggle the language options visibility when the button is clicked
document.getElementById('language-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var options = document.getElementById('language-options');
    options.classList.toggle('show'); // Toggle the "show" class for sliding up/down
});

// Handle language option click and trigger slide down before redirect
document.querySelectorAll('.language-option').forEach(function(option) {
    option.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent immediate navigation

        var options = document.getElementById('language-options');
        options.classList.remove('show'); // Slide down effect

        // Delay the page change by 700ms to allow the animation to complete
        setTimeout(function() {
            window.location.href = option.getAttribute('href'); // Redirect to the selected language page
        }, 700); // Adjust this value to match the slide-down animation time
    });
});

document.querySelectorAll('.language-option').forEach(function(option) {
    option.addEventListener('click', function() {
        // Remove the 'active' class from all language options
        document.querySelectorAll('.language-option').forEach(function(el) {
            el.classList.remove('active');
        });

        // Add 'active' class to the clicked option
        option.classList.add('active');
    });
});
