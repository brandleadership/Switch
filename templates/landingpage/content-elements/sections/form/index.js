const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('form')
    .withIcon(Icon.SNIPPET)
    .withLabel('Form')
    .withFile(require('./template.twig'))
    .withParts(cx.part.form.withLabel('Form Details'))
    .withDropzones(
        cx.dropzone.withDropzone('form-container').withAllowedElements(
            // require('../../elements/form-elements/button'),
            require('../../elements/form-elements/checkbox'),
            require('../../elements/form-elements/radio-buttons'),
            require('../../elements/form-elements/email'),
            require('../../elements/form-elements/full-name'),
            require('../../elements/form-elements/organization'),
            require('../../elements/form-elements/name'),
            require('../../elements/form-elements/last-name'),
            require('../../elements/form-elements/dropdown'),
            require('../../elements/formatted-text'),
            require('../../elements/title-h2'),
            require('../../elements/spacer-20'),
            require('../../elements/spacer-10'),
            require('../../elements/spacer-30')
        )
    );
