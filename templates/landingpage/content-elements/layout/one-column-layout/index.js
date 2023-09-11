require('./styles.scss');

const { cx, Icon } = require('@bsi-cx/design-build');

const element = cx.contentElement;

module.exports = element
    .withElementId('layout-one-column')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('Columns')
    .withFile(require('./template.twig'));
// .withDropzones(
//     cx.dropzone
//         .withDropzone('one-column-content')
//         .withAllowedElements(...columnElements)
// );
