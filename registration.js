document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value.trim();

    if (name.length < 2) {
        showError('nameError', true);
        isValid = false;
    } else {
        showError('nameError', false);
    }

    if (surname.length < 2) {
        showError('surnameError', true);
        isValid = false;
    } else {
        showError('surnameError', false);
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('emailError', true);
        isValid = false;
    } else {
        showError('emailError', false);
    }

    if (password.length < 6) {
        showError('passwordError', true);
        isValid = false;
    } else {
        showError('passwordError', false);
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', true);
        isValid = false;
    } else {
        showError('confirmPasswordError', false);
    }

    const phonePattern = /^\+?[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        showError('phoneError', true);
        isValid = false;
    } else {
        showError('phoneError', false);
    }

    if (isValid) {
        alert('Форма успешно отправлена!');
        document.getElementById('registrationForm').submit();
    }
}

function showError(elementId, show) {
    document.getElementById(elementId).style.display = show ? 'block' : 'none';
}
