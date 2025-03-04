document.getElementById('contactForm').addEventListener('submit', function(event) {
    const email1 = document.getElementById('email1').value;
    const email2 = document.getElementById('email2').value;

    if (email1 !== email2) {
        alert('Email addresses do not match!');
        event.preventDefault();
    }
});