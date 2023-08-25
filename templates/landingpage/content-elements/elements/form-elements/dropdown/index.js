const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('dropdown')
    .withIcon(Icon.DROPDOWN)
    .withLabel('Dropdown')
    .withDescription('For Use in Form with empty list')
    .withFile(require('./template.twig'))
    .withParts(cx.part.formSelect.withLabel('Additional Dropdown Details'));
