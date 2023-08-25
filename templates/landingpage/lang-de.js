const baseProperties = require('./properties');

module.exports = {
    ...baseProperties,
    language: 'de',
    email_error: 'Ihre Email Adresse ist nicht korrekt.',
    select_error: 'Please, select one option.',
    title_error: 'Bitte wählen Sie eine Option.',
    provide_required: 'Bitte füllen Sie alle Pflichtfelder aus.',
    select_option: 'Bitte wählen',
    checkbox_error: 'Pflichtfeld nicht ausgewählt',
    image_description:
        'Schritte eines Incident Response Prozesses. Grafik: Switch',
    labels: {
        select_label: 'Select',
        anmelden: 'Anmelden',
        radio_text:
            'Ja, ich werde früh ankommen und möchte zu Mittag essen (11:30 - 13:15)',
        first_name: 'Vorname',
        last_name: 'Nachname',
        company: 'Organisation',
        email: 'E-Mail',
        checkbox:
            'Rechtlicher Hinweis: Jede Person, die an einer SWITCH-Veranstaltung teilnimmt, erteilt SWITCH die Erlaubnis, ihr Bild (Bewegtbild) oder ihre Ähnlichkeit, die im Zusammenhang mit der Veranstaltung erfasst wird, für jegliche übliche und übliche Zwecke von SWITCH, einschließlich der Förderung von SWITCH und seinen Veranstaltungen, zu verwenden und zu veröffentlichen. Wenn Sie dem widersprechen, tun Sie dies bitte ausdrücklich schriftlich oder per E-Mail an SWITCH.',
    },
    footer: {
        year: ' {year} für Inhalte bei SWITCH',
        rechtliches: 'Rechtliches',
        impressum: 'Impressum',
        datenschutz: 'Datenschutz',
    },
};
