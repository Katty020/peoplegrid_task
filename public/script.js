document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/submit_feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    })
    .catch(error => console.error('Error:', error));
});