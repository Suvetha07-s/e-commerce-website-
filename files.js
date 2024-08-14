const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Order placed successfully!');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const ratingForm = document.getElementById('ratingForm');
    const photoInput = document.getElementById('photo');
    const messageTextarea = document.getElementById('message');
    
    ratingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        // Get selected star rating
        const selectedStar = document.querySelector('input[name="star"]:checked');
        const starRating = selectedStar ? selectedStar.value : 'No rating selected';
        
        // Get uploaded photo
        const photoFile = photoInput.files.length > 0 ? photoInput.files[0] : 'No photo uploaded';
        
        // Get message text
        const messageText = messageTextarea.value.trim() || 'No message provided';
        
        // Display results
        alert(`Rating: ${starRating}\nPhoto: ${photoFile.name || photoFile}\nMessage: ${messageText}`);
        
        // Optionally, you can handle the form submission here, e.g., send the data to a server
        // For example, you can create a FormData object and use fetch() to submit it to a server.
    });
});
