document.addEventListener('DOMContentLoaded', function () {
    fetch('/get_feedback_data')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('ratingChart').getContext('2d');
            const ratingChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Ratings',
                        data: data.ratings,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
});