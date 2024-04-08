/**
Replaces hyphens in a given text with a specified replacement string.

@param {string} text - The input text to sanitize.
@param {string} [replacement=" "] - The replacement string for hyphens. Defaults to a space.
@returns {string} The sanitized string with hyphens replaced by the specified replacement string.
@throws {TypeError} If the input value is not a string or if the replacement is not a string.

@example
```
import hyphenSanitizer from "hyphen-sanitizer";

const text = "Hello-world";

// Replaces hyphens with spaces
const sanitizedText = hyphenSanitizer(text);
console.log(sanitizedText); //=> "Hello world"

// Replaces hyphens with underscores
const replacement = "_";
const sanitizedText2 = hyphenSanitizer(text, replacement);
console.log(sanitizedText2); //=> "Hello_world"
```
*/
export default function hyphenSanitizer(text: string, replacement?: string): string;
