Prism.languages.jexl = {
	'string': /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
	'transform': {
		pattern: /(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
		alias: 'function',
		lookbehind: true
	},
	'function': /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,
	'number': /\b\d+(?:\.\d+)?\b|\B\.\d+\b/,
	'operator': /[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,
	'boolean': /\b(?:true|false)\b/,
	'keyword': /\bin\b/,
	'punctuation': /[{}[\](),.]/,
};
