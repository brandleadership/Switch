const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-with-logo')
    .withIcon(Icon.TEXT)
    .withLabel('Header')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text-config.js')
            )
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('logo-header')
            .withAllowedElements(require('../../elements/logo'))
    );
