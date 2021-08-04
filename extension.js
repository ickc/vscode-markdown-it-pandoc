'use strict'

function activate(context) {
    return {
        extendMarkdownIt(md) {
            require('markdown-it-pandoc')(
                md,
                {
                    // c.f. https://github.com/arve0/markdown-it-attrs/issues/115
                    attributes:                 false
                  , bracketed_spans:            true
                  , definition_lists:           true
                  , fenced_divs:                true
                  , footnotes:                  true
                  , implicit_figures:           true
                  , grid_tables:                true
                  // recommend using vscode mdmath extension for configurability
                  , katex:                      false
                  , subscript:                  true
                  , superscript:                true
                }
            );
            return md;
        }
    };
}
exports.activate = activate;
