const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('info-date-element')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Info Element Date')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text-config.js')
            ),
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text-config.js')
            )
    );
