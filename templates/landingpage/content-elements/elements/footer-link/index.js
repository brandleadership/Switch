const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-link')
    .withIcon(Icon.MEGAPHONE)
    .withLabel('Link')
    .withFile(require('./template.twig'))
    .withParts(cx.part.link.withLabel('Link'));
