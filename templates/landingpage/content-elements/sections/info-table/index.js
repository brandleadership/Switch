const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('info-table')
    .withIcon(Icon.LIST)
    .withLabel('Info Table')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('info-table-block')
            .withAllowedElements(
                require('../../elements/info-element'),
                require('../../elements/info-ort-element'),
                require('../../elements/info-date-element'),
                require('../../elements/divider'),
                require('../../elements/title-h2')
            )
    );
