import test from 'ava';
import hyphenSanitizer from './index.js';

test('Replace hyphens with spaces by default', t => {
	const originalString = 'This-is-a-sample-string';
	const expectedString = 'This is a sample string';
	t.is(hyphenSanitizer(originalString), expectedString);
});

test('Replace hyphens with a custom string', t => {
	const originalString = 'This-is-a-sample-string';
	const expectedString = 'This_is_a_sample_string';
	const customReplacement = '_';
	t.is(hyphenSanitizer(originalString, customReplacement), expectedString);
});

test('Return empty string for empty input string', t => {
	const originalString = '';
	const expectedString = '';
	t.is(hyphenSanitizer(originalString), expectedString);
});

test('Throw error for non-string input', t => {
	const invalidInput = 123; // Non-string input
	const error = t.throws(() => {
		hyphenSanitizer(invalidInput);
	}, {instanceOf: TypeError});
	t.is(error.message, 'Input value must be a string.');
});

test('Throw error for non-string replacement', t => {
	const originalString = 'This-is-a-sample-string';
	const invalidReplacement = 123; // Non-string replacement
	const error = t.throws(() => {
		hyphenSanitizer(originalString, invalidReplacement);
	}, {instanceOf: TypeError});
	t.is(error.message, 'Replacement must be a string.');
});
