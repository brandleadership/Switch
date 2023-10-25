const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('cards')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withLabel('Cards')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('cards-zone')
            .withAllowedElements(require('../../elements/three-cards'))
    );
