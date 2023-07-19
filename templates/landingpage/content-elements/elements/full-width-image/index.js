const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('full-width-image')
    .withIcon(Icon.IMAGE)
    .withLabel('Image')
    .withFile(require('./template.twig'))
    .withParts(cx.part.image.withLabel('Image'));
