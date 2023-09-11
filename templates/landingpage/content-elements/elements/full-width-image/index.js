const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('full-width-image')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withLabel('Image')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image.withLabel('Image'),
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text-config.js')
            )
    );
