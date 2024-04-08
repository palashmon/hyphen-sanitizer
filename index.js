export default function hyphenSanitizer(text, replacement = ' ') {
	if (typeof text !== 'string') {
		throw new TypeError('Input value must be a string.');
	}

	if (typeof replacement !== 'string') {
		throw new TypeError('Replacement must be a string.');
	}

	const hyphenRegex = /-/g;
	/** @type {string} */
	const sanitizedString = text.replaceAll(hyphenRegex, replacement);
	return sanitizedString;
}
