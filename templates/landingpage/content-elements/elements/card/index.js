const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('card')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withLabel('Card')
    .withDescription('For use in Cards Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image.withLabel('Card Image'),
        cx.part.plainText.withLabel('Card Title'),
        cx.part.formattedText.withLabel('Card Text')
    );
