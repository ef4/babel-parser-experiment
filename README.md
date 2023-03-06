Sandbox for testing glimmer tempalte extensions to babel parser.

Notes:

- parser-extension.js shows how a babel plugin can swap in a forked parser. This is working.
- but that doesn't bring printer extensions, for that we have to link to the whole forked @babel/core. That works too, with round-trip printing.
- but if you do round-trip printing, rollup of course doesn't understand the template tags. In a real app of course we'd have an AST transform that replaces those first.
