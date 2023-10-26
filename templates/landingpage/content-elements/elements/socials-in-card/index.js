const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('social-in-card')
    .withIcon(Icon.IMAGE)
    .withLabel('Social Icons')
    .withDescription('For use in Card')
    .withFile(require('./template.twig'));
