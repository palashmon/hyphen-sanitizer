# hyphen-sanitizer

> Simplifying text by replacing hyphens with ease

![CI](https://github.com/palashmon/hyphen-sanitizer/actions/workflows/main.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/hyphen-sanitizer.svg)](http://npm.im/hyphen-sanitizer)
[![npm downloads](https://img.shields.io/npm/dm/hyphen-sanitizer.svg)](http://npm.im/hyphen-sanitizer)

Hyphens are commonly used in strings to separate words or denote compound words. However, in certain scenarios, it's necessary to sanitize hyphens by replacing them with another character or removing them entirely. `hyphen-sanitizer` provides a simple yet powerful solution for sanitizing hyphens within strings, enhancing data consistency and usability.

### Key Features

- Sanitizes hyphens within strings
- Allows customization of replacement string
- Defaults to space if no replacement string is provided
- Versatile and easy to integrate into existing projects

## Install

```sh
npm install hyphen-sanitizer
```

## Usage

```js
import hyphenSanitizer from "hyphen-sanitizer";

// Example 1 - Default replacement
// Replaces hyphens with spaces
const text = "Hello-world";
const sanitizedText = hyphenSanitizer(text);
console.log(sanitizedText); //=> "Hello world"

// Example 2 - Custom replacement
// Replaces hyphens with underscores
const replacement = "_";
const sanitizedText2 = hyphenSanitizer(text, replacement);
console.log(sanitizedText2); //=> "Hello_world"
```

## API

### hyphenSanitizer(input, replacement)

#### input

Type: `string`

The input string to sanitize. This string may contain hyphens that need to be replaced.

#### replacement

Type: `string`<br>
Default: `' '` (space)

The replacement string to use in place of hyphens. If no replacement string is provided, hyphens will be replaced with spaces.

## Related

- [acronymer](https://github.com/palashmon/acronymer) - Generate acronyms from strings

## License

MIT © [Palash Mondal](https://github.com/palashmon)
