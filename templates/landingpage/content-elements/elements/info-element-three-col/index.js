const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('info-element-three-col')
    .withIcon(Icon.THREE_COLUMNS)
    .withLabel('Info Element Three Columns')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Formatted Text-1')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text-config.js')
            ),
        cx.part.formattedText
            .withLabel('Formatted Text-2')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text-config.js')
            ),
        cx.part.formattedText
            .withLabel('Formatted Text-3')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text-config.js')
            )
    );
