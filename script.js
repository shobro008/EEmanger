document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the link triggering the page transition
    document.getElementById('pageTransitionLink').addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Display the loader overlay
        document.getElementById('loaderOverlay').style.display = 'flex';

        // Simulate a delay (replace this with your actual page transition logic)
        setTimeout(function() {
            // Navigate to the target page
            window.location.href = event.target.href;
        }, 1000); // Simulated delay of 1 second (adjust as needed)
    });
});
