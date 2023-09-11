const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-title')
    .withIcon(Icon.TEXT)
    .withLabel('TItle')
    .withFile(require('./template.twig'))
    .withParts(cx.part.plainText.withLabel('Title H-2'));
