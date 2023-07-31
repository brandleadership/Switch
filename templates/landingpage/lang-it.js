const baseProperties = require('./properties');

module.exports = {
    ...baseProperties,
    language: 'de',
    email_error: 'Il tuo indirizzo e-mail non è corretto.',
    title_error: "Per favore, scegli un'opzione.",
    provide_required:
        'Per favore, compila tutti i campi obbligatori del modulo.',
    labels: {
        anmelden: 'Iscriviti',
        radio_text: 'Sì, arriverò presto e vorrei pranzare (11:30 - 13:15)',
        first_name: 'Nome',
        last_name: 'Cognome',
        company: 'Organizzazione',
        email: 'Email',
        checkbox:
            "Nota legale: Ogni persona che partecipa a un evento SWITCH concede a SWITCH il permesso di utilizzare e pubblicare la sua immagine (immagine in movimento) o somiglianza raccolta in relazione all'evento per qualsiasi scopo usuale e consueto di SWITCH, incluso la promozione di SWITCH e dei suoi eventi. Se non sei d'accordo con ciò, ti preghiamo di farlo esplicitamente per iscritto o via e-mail a SWITCH.",
    },
    footer: {
        year: '© {year} per i contenuti su SWITCH',
        rechtliches: 'Note legali',
        impressum: 'Impressum',
        datenschutz: 'Privacy',
    },
};
