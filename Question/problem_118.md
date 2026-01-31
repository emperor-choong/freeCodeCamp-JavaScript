# Markdown Italic Parser
## [31 December 2025]

Given a string that may include some italic text in Markdown, return the equivalent HTML string.
- Italic text in Markdown is any text that starts and ends with a single asterisk (`*`) or a single underscore (`_`).
- There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
- Convert all italic occurrences to HTML `i` tags and return the string.

For example, given `"*This is italic*"`, return `"<i>This is italic</i>"`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

**Tests**
1. `parseItalic("*This is italic*")` should return `"<i>This is italic</i>"`.
2. `parseItalic("_This is also italic_")` should return `"<i>This is also italic</i>"`.
3. `parseItalic("*This is not italic *")` should return `"*This is not italic *"`.
4. `parseItalic("_ This is also not italic_")` should return `"_ This is also not italic_"`.
5. `parseItalic("The *quick* brown fox _jumps_ over the *lazy* dog.")` should return `"The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog."`.