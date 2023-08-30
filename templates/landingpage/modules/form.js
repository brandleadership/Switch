const submissionForms = document.querySelector('.submission-form');
const errorWrapper = document.getElementById('error-wrapper');
const submissionFormsError = errorWrapper?.getElementsByClassName(
    'error-message-form'
)[0];
const radioWrapperVertical = document.getElementById('radio-single-wrapper');
const radioButtonsVertical = document.querySelectorAll('input[type="radio"]');
const radioErrorVertical = radioWrapperVertical?.getElementsByClassName(
    'error-message-title'
)[0];
const emailWrapper = document.getElementById('email-wrapper');
const email = document.querySelector('.email');
const emailError = emailWrapper?.getElementsByClassName('error-message')[0];
const firstNameWrapper = document.querySelector('.first-name-wrapper');
const firstName = document.querySelector('.first-name');
const lastNameWrapper = document.querySelector('.last-name-wrapper');
const lastName = document.querySelector('.last-name');
const organizationWrapper = document.querySelector('.firm-wrapper');
const organization = document.querySelector('.firm');
const checkboxWrapper = document.querySelector('.checkbox-wrapper');
const checkbox = document.getElementsByClassName('checkbox-input')[0];
const checkboxError = checkboxWrapper?.getElementsByClassName(
    'error-message-checkbox'
)[0];
// const dropdownSelectWrapper = document.querySelector('.dropdown-wrapper');
// const dropdownSelect = document.querySelector('.dropdown-select');
// const dropdownError = dropdownSelectWrapper?.getElementsByClassName(
//     'error-message-select'
// )[0];

function verifyFields(event) {
    event.preventDefault();
    const isEmailTrue = verifyEmail();
    const isRadioBTNVerticalTrue = verifyRadioBtnVertical();
    const isName = verifyName();
    const isLastName = verifyLastName();
    const isCheckbox = verifyCheckbox();
    const isOrganization = verifyOrganization();
    //const isDropdownSelect = verifyDropdownSelect();
    if (
        isRadioBTNVerticalTrue &&
        isEmailTrue &&
        isName &&
        isLastName &&
        isCheckbox &&
        isOrganization
        //isDropdownSelect
    ) {
        submissionForms?.submit();
        setTimeout(() => {
            submissionForms?.reset();
        }, 300);
    } else {
        // submissionFormsError.classList.remove('isVisible');
    }
}

// function verifyDropdownSelect() {
//     if (!dropdownSelect) {
//         return true;
//     }
//     if (dropdownSelect.required && dropdownSelect.value === '') {
//         dropdownSelect?.classList.add('red-border-select');
//         dropdownError?.classList.remove('isVisible');
//         return false;
//     } else {
//         dropdownSelect?.classList.remove('red-border-select');
//         dropdownError?.classList.add('isVisible');
//         return true;
//     }
// }

function verifyRadioBtnVertical() {
    if (!radioButtonsVertical) {
        return true;
    }

    const isRequired = Array.from(radioButtonsVertical).some(radioBtn =>
        radioBtn.hasAttribute('required')
    );

    if (isRequired) {
        const isChecked = Array.from(radioButtonsVertical).some(
            radioBtn => radioBtn.checked
        );

        if (!isChecked) {
            radioErrorVertical?.classList.remove('isVisible');
            return false;
        } else {
            radioErrorVertical?.classList.add('isVisible');
            return true;
        }
    }
}

function verifyEmail() {
    const regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+[\.]{1})+([a-zA-Z0-9]{2,4})+$/;
    if (!email) {
        return true;
    }
    if (email.required && !regExp.test(email.value)) {
        emailError?.classList.remove('isVisible');
        email.classList.add('red-border');
        return false;
    } else {
        emailError?.classList.add('isVisible');
        email.classList.remove('red-border');
        return true;
    }
}

function verifyName() {
    if (!firstName) {
        return true;
    }
    if (firstName.required && firstName.value === '') {
        firstName.classList.add('red-border');
        return false;
    } else {
        firstName.classList.remove('red-border');
        return true;
    }
}

function verifyLastName() {
    if (!lastName) {
        return true;
    }
    if (lastName.required && lastName.value === '') {
        lastName.classList.add('red-border');
        return false;
    } else {
        lastName.classList.remove('red-border');
        return true;
    }
}

function verifyOrganization() {
    if (!organization) {
        return true;
    }
    if (organization.required && organization.value === '') {
        organization.classList.add('red-border');
        return false;
    } else {
        organization.classList.remove('red-border');
        return true;
    }
}

function verifyCheckbox() {
    if (!checkbox) {
        return true;
    }
    if (checkbox.required && !checkbox.checked) {
        checkboxError?.classList.remove('isVisible');
        checkbox.classList.add('missing-required-field');
        return false;
    } else {
        checkbox.classList.remove('missing-required-field');
        checkboxError?.classList.add('isVisible');
        return true;
    }
}

// dropdownSelect?.addEventListener('change', event => {
//     const target = event.target.value;
//     if (target) {
//         dropdownError.classList.add('isVisible');
//         dropdownSelect.classList.remove('red-border-select');
//     } else {
//         dropdownError.classList.remove('isVisible');
//         dropdownSelect.classList.add('red-border-select');
//     }
// });

email?.addEventListener('input', event => {
    const target = event.target;
    const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    if (target.value !== '' && regExp.test(target.value)) {
        emailError.classList.add('isVisible');
        email.classList.remove('red-border');
    } else {
        emailError.classList.remove('isVisible');
        email.classList.add('red-border');
    }
});

firstName?.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        firstName.classList.remove('red-border');
    } else {
        firstName.classList.add('red-border');
    }
});

lastName?.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        lastName.classList.remove('red-border');
    } else {
        lastName.classList.add('red-border');
    }
});

organization?.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        organization.classList.remove('red-border');
    } else {
        organization.classList.add('red-border');
    }
});

checkbox?.addEventListener('change', event => {
    const isCheckboxChecked = checkbox.checked;

    if (isCheckboxChecked) {
        checkboxError.classList.add('isVisible');
        checkbox.classList.remove('missing-required-field');
    } else {
        checkboxError.classList.remove('isVisible');
        checkbox.classList.add('missing-required-field');
    }
});

radioButtonsVertical?.forEach(radioBtn => {
    radioBtn.addEventListener('change', event => {
        radioErrorVertical.classList.add('isVisible');
    });
});

function Submit() {
    if (!submissionForms) {
        return;
    } else {
        document
            .querySelector('.submission-form input[type="submit"]')
            .addEventListener('click', function(event) {
                verifyFields(event);
            });
    }
}

Submit();
