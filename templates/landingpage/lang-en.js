const baseProperties = require('./properties');

module.exports = {
    ...baseProperties,
    language: 'de',
    email_error: 'Your e-mail address is not correct.',
    title_error: 'Please choose an option.',
    provide_required: 'Please, fill in all required fields of the form.',
    labels: {
        radio_text: 'One',
        first_name: 'First name',
        last_name: 'Last name',
        company: 'Organization',
        email: 'Email',
    },
};
