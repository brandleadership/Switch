const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('title-text')
    .withIcon(Icon.TEXT)
    .withLabel('Title + Text')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('title-text')
            .withAllowedElements(
                require('../../elements/title-h2'),
                require('../../elements/spacer-20'),
                require('../../elements/spacer-10'),
                require('../../elements/spacer-30'),
                require('../../elements/formatted-text')
            )
    );
