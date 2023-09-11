const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("logo")
  .withIcon(Icon.IMAGE)
  .withLabel("Logo")
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Logo Image"));
