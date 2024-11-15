// Function to navigate between pages
function nextPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });

    // Show the target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
}

// Handle response for the proposal
function handleResponse(answer) {
    if (answer === 'yes') {
        nextPage('acceptance');
    } else {
        alert('Think once again! 🥺');
        const noButton = document.getElementById('no-button');
        noButton.style.position = 'absolute';
        noButton.style.left = ${Math.random() * 80}%;
        noButton.style.top = ${Math.random() * 80}%;
    }
}

// Handle response for the date invitation
function handleDateResponse(answer) {
    if (answer === 'yes') {
        nextPage('final');
    } else {
        alert('Please reconsider! 🥺💖');
        const dateNoButton = document.getElementById('date-no-button');
        dateNoButton.style.position = 'absolute';
        dateNoButton.style.left = ${Math.random() * 80}%;
        dateNoButton.style.top = ${Math.random() * 80}%;
    }
}