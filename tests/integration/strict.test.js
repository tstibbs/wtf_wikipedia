const test = require('tape')
const {readFileSync} = require('fs')
const {join} = require('path')

const cacheDir = join(__dirname, `../../tests/cache`)

const wtf = require('../lib')

function readMarkup(name) {
	let markup = (readFileSync(join(cacheDir, name))).toString()
	return markup
}

function testOnce(t, markup, expectSuccess, strict) {
	let error = null
	try {
		if (strict == null) {
			wtf(markup)
		} else {
			wtf(markup, {strictMode: strict})
		}
	} catch (e) {
		error = e
	}
	if (expectSuccess && error != null) {
		t.fail(`Didn't expect failure: ${error}`)
	} else if (!expectSuccess && error == null) {
		t.fail(`Expected failure`)
	}
}

test('strict mode', (t) => {
	const failureMarkup = readMarkup('Mozilla-Firefox.txt')
	const successMarkup = readMarkup('Remote-Data-Services.txt')
	testOnce(t, successMarkup, true, null)
	testOnce(t, successMarkup, true, false)
	testOnce(t, successMarkup, true, true)
	testOnce(t, failureMarkup, true, null)
	testOnce(t, failureMarkup, true, false)
	testOnce(t, failureMarkup, false, true)
  	t.end()
})
