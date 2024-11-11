document.querySelector('.sti_form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelectorAll('.error-message').forEach(msg => msg.remove());

    function validateField(id, fieldName) {
        const field = document.getElementById(id);
        let valid = true;

        if (!field.value.trim()) {
            displayErrorMessage(field, `Please fill out the ${fieldName} field.`);
            valid = false;
        }

        return valid;
    }

    function displayErrorMessage(field, message) {
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        field.parentElement.appendChild(errorMessage);
    }

    const validations = [
        validateField('date', 'Date'),
        validateField('user', 'Person completing form'),
        validateField('health', 'Health provider'),
        validateField('tel', 'Phone number'),
        validateField('name', 'Name'),
        validateField('dob', 'Date of birth'),
        validateField('gender', 'Gender'),
        validateField('address', 'Address'),
        validateField('city', 'City'),
        validateField('state', 'State'),
        validateField('zipcode', 'ZIP Code'),
        validateField('symptoms', 'Symptoms'),
        validateField('diagnosis', 'Diagnosis')
    ];
    
    const phoneField = document.getElementById('phone');
    if (phoneField.value && (phoneField.value.length !== 10 || isNaN(phoneField.value))) {
        displayErrorMessage(phoneField, "Please enter a valid phone number (10 digits).");
        phoneField.focus();
    }

    if (validations.every(valid => valid) && phoneField.value.length === 10) {
        alert("Form submitted successfully!");
        event.target.submit();
    }
});
