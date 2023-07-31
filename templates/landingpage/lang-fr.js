const baseProperties = require('./properties');

module.exports = {
    ...baseProperties,
    language: 'de',
    email_error: "Votre adresse e-mail n'est pas correcte.",
    title_error: 'Veuillez choisir une option.',
    provide_required:
        'Veuillez remplir tous les champs obligatoires du formulaire.',
    labels: {
        anmelden: "S'inscrire",
        radio_text:
            "Oui, j'arriverai tôt et j'aimerais déjeuner (11:30 - 13:15)",
        first_name: 'Prénom',
        last_name: 'Nom de famille',
        company: 'Organisation',
        email: 'Email',
        checkbox:
            "Mention légale : Toute personne qui participe à un événement SWITCH accorde à SWITCH l'autorisation d'utiliser et de publier son image (image en mouvement) ou sa ressemblance collectée dans le cadre de l'événement, à des fins habituelles et coutumières de SWITCH, y compris la promotion de SWITCH et de ses événements. Si vous vous opposez à cela, veuillez le faire explicitement par écrit ou par e-mail à SWITCH.",
    },
    footer: {
        year: '© {year} pour les contenus sur SWITCH',
        rechtliches: 'Mentions légales',
        impressum: 'Impressum',
        datenschutz: 'Confidentialité',
    },
};
