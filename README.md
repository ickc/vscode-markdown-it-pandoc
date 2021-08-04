[![](https://vsmarketplacebadge.apphb.com/version/ickc.vscode-markdown-it-pandoc.svg)](https://marketplace.visualstudio.com/items?itemName=ickc.vscode-markdown-it-pandoc)

Adds [markdown-it-pandoc](https://github.com/mb21/markdown-it-pandoc) syntax support to VS Code's built-in Markdown preview.

# Notes

Regarding options of markdown-it-pandoc:

Currently, `katex` is disabled. VSCode extension [mdmath](https://github.com/goessner/mdmath) is recommended to use markdown-it-texmath.

`attributes` is disabled, because of an [upstream bug](https://github.com/arve0/markdown-it-attrs/issues/115) conflicting with markdown-it-texmath.
