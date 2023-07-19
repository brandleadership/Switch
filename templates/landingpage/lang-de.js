const baseProperties = require('./properties');

module.exports = {
    ...baseProperties,
    language: 'de',
    email_error: 'Ihre Email Adresse ist nicht korrekt.',
    title_error: 'Bitte wählen Sie eine Option.',
    provide_required: 'Bitte füllen Sie alle Pflichtfelder aus.',
    labels: {
        radio_text: 'Frau',
        first_name: 'Vorname',
        last_name: 'Nachname',
        company: 'Organisation',
        email: 'E-Mail',
    },
};
