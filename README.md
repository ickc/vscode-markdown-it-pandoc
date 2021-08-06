[![](https://vsmarketplacebadge.apphb.com/version/ickc.vscode-markdown-it-pandoc.svg)](https://marketplace.visualstudio.com/items?itemName=ickc.vscode-markdown-it-pandoc)

Adds [markdown-it-pandoc](https://github.com/mb21/markdown-it-pandoc) syntax support to VS Code's built-in Markdown preview.

# Options

`markdown-it-pandoc` options are configurable via `vscode-markdown-it-pandoc.options`, see `https://github.com/mb21/markdown-it-pandoc#dependencies` for details. Please reload VSCode after setting changes.

While the options are left as default of `markdown-it-pandoc`, the recommended options are:

- `katex: false`. VSCode extension [mdmath](https://github.com/goessner/mdmath) is recommended to use markdown-it-texmath.

- `attributes: false`, because of an [upstream bug](https://github.com/arve0/markdown-it-attrs/issues/115) conflicting with markdown-it-texmath.

i.e. the recommended setting in `settings.json` is

```json
    "vscode-markdown-it-pandoc.options": {
        "attributes": false,
        "katex": false
    },
```
