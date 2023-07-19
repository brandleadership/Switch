const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-with-logo')
    .withIcon(Icon.TEXT)
    .withLabel('Header')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('logo-header')
            .withAllowedElements(require('../../elements/logo'))
    );
