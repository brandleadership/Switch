const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-copyright')
    .withIcon(Icon.TEXT)
    .withLabel('Text')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text-config.js')
            )
    );
