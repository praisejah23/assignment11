document.querySelector('.sti_form').addEventListener('submit', function(event) {
    event.preventDefault();


    function validateField(id, fieldName) {
        const field = document.getElementById(id);
        if (!field.value.trim()) {
            alert(`Please fill out the ${fieldName} field.`);
            field.focus();
            return false;
        }
        return true;
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
        alert("Please enter a valid phone number (10 digits).");
        phoneField.focus();
        return;
    }

    if (validations.every(valid => valid)) {
        alert("Form submitted successfully!");
        event.target.submit();
    }
});