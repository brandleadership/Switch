const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-address')
    .withIcon(Icon.TEXT)
    .withLabel('Address with Button')
    .withFile(require('./template.twig'))
    .withParts(cx.part.link.withLabel('Link'));
