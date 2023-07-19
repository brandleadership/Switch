const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('blue-button')
    .withIcon(Icon.TEXT)
    .withLabel('Button')
    .withFile(require('./template.twig'))
    .withParts(cx.part.link.withLabel('Button Link'));
