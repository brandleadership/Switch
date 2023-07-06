require("./styles.scss");

const { cx, Icon } = require("@bsi-cx/design-build");

const element = cx.contentElement;

const columnElements = [
  element,
  require("../../content/title"),
  require("../../content/text"),
];

module.exports = element
  .withElementId("layout-one-column")
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel("Columns")
  .withFile(require("./template.twig"))
  .withDropzones(
    cx.dropzone
      .withDropzone("one-column-content")
      .withAllowedElements(...columnElements)
  );
