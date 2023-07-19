const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer')
    .withIcon(Icon.TEXT)
    .withLabel('Footer')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('footer-address')
            .withAllowedElements(require('../../elements/footer-address')),
        cx.dropzone
            .withDropzone('footer-links')
            .withAllowedElements(
                require('../../elements/footer-link'),
                require('../../elements/formatted-text')
            )
    );
