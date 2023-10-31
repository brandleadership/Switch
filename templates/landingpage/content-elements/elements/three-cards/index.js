const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('three-card')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withLabel('Three Card')
    .withDescription('For use in Cards Section')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('three-cards-zone')
            .withMaxAllowedElements(3)
            .withAllowedElements(require('../card'))
    );
