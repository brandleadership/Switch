const {
    EnterMode,
    Feature,
    Format,
    cx,
    bsiProperty,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('editor-config-35co7H')
    .withFeatures(
        Feature.BOLD,
        Feature.ITALIC,
        Feature.UNDERLINE,
        Feature.STRIKE_THROUGH,
        Feature.SUBSCRIPT,
        Feature.SUPERSCRIPT,
        Feature.FONT_SIZE,
        Feature.LINE_HEIGHT,
        Feature.TEXT_COLOR,
        Feature.ALIGN_LEFT,
        Feature.ALIGN_CENTER,
        Feature.ALIGN_RIGHT,
        Feature.ALIGN_JUSTIFY,
        Feature.FORMAT_OL,
        Feature.FORMAT_UL,
        Feature.OUTDENT,
        Feature.INDENT,
        Feature.PARAGRAPH_FORMAT,
        Feature.QUOTE,
        Feature.SPECIAL_CHARACTERS,
        Feature.INSERT_LINK
    )
    .withTextColors('#002864', '#285f82', '#50555a', '#ffffff', '#f0f3f6')
    .withFormats(
        Format.P,
        Format.H2,
        Format.H1,
        Format.H3,
        Format.H4,
        Format.PRE
    )
    .withFontSizes(
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        30,
        36,
        48,
        72
    )
    .withFontSizeDefault(16)
    .withLineHeights(1.1, 1.15, 1.5, 2)
    .withTextColors('#002864', '#6ec8e1', '#ffffff', '#666666', '#000000')
    .withFontSizes(8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 72)
    .withEnterMode(EnterMode.BR);
