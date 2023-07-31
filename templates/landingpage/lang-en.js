const baseProperties = require('./properties');

module.exports = {
    ...baseProperties,
    language: 'de',
    email_error: 'Your e-mail address is not correct.',
    title_error: 'Please choose an option.',
    provide_required: 'Please, fill in all required fields of the form.',
    labels: {
        anmelden: 'Anmelden',
        radio_text:
            'Yes, I will arrive early and like to lunch (11:30 - 13:15)',
        first_name: 'First name',
        last_name: 'Last name',
        company: 'Organization',
        email: 'Email',
        checkbox:
            'Legal note: Any person who attends a SWITCH event grants permission to SWITCH to use and publish his or her image (moving picture) or likeness collected in connection with the event for any usual and customary purpose of SWITCH, including promotion of SWITCH and its events. If you object to this, please do so explicitly in writing or by e- mail to SWITCH.',
    },
    footer: {
        year: '© {year} for content about SWITCH',
        rechtliches: 'Legal Information',
        impressum: 'Imprint',
        datenschutz: 'Privacy Policy',
    },
};
