'use strict'

function activate(context) {
    return {
        extendMarkdownIt(md) {
            md = md.use( require('markdown-it-bracketed-spans') );
            md = md.use( require('markdown-it-attrs') );
            md = md.use( require('markdown-it-container'), 'dynamic', {
                      // adapted from https://github.com/markdown-it/markdown-it-container/issues/23
                      validate: function() { return true; },
                      render: function(tokens, idx, options, env, slf) {
                        var token     = tokens[idx]
                          , className = token.info.trim()
                          , renderedAttrs = slf.renderAttrs(token)
                          ;
                        if (token.nesting === 1) {
                          return (className && className !== '{}')
                                  ? '<div class="' + className + '">'
                                  : '<div' + renderedAttrs + '>'
                                  ;
                        } else {
                          return '</div>';
                        }
                      }
                    });
            md = md.use( require('markdown-it-deflist') );
            md = md.use( require('markdown-it-footnote') );
            md = md.use( require('markdown-it-implicit-figures'), {figcaption: true} );
            var gridtables = require('markdown-it-gridtables').default;
            md = md.use(gridtables);
            md = md.use( require('markdown-it-sub') );
            md = md.use( require('markdown-it-sup') );
            return md;
        }
    };
}
exports.activate = activate;