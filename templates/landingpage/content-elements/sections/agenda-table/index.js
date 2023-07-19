const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('agenda-table')
    .withIcon(Icon.LIST)
    .withLabel('Agenda Table')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('agenda-elements')
            .withAllowedElements(
                require('../../elements/info-element'),
                require('../../elements/divider'),
                require('../../elements/title-h2')
            )
    );
