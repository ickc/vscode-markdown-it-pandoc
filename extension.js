'use strict'

const vscode = require('vscode');

function activate(context) {
    return {
        extendMarkdownIt(md) {
            require('markdown-it-pandoc')(
                md,
                vscode.workspace.getConfiguration('vscode-markdown-it-pandoc').options
            );
            return md;
        }
    };
}
exports.activate = activate;
