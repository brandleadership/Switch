const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('form-radio-btns')
    .withIcon(Icon.RADIOBUTTON)
    .withLabel('Radiobuttons')
    .withDescription('For Use In Form')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formRadio.withLabel('Label'),
        cx.part.formRadio.withLabel('Radio Option 1'),
        cx.part.formRadio.withLabel('Radio Option 2'),
        cx.part.formRadio.withLabel('Radio Option 3')
    );

// element.form-radio-btns.label=Radio Btn Whitelabel
// element.form-radio-btns.icon=radiobutton
// element.form-radio-btns.parts.plain-text[3].label=Radio Option 3
// element.form-radio-btns.parts.plain-text[2].label=Radio Option 2
// element.form-radio-btns.parts.plain-text[1].label=Radio Option 1
// element.form-radio-btns.parts.plain-text[0].label=Label
