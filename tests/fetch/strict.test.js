const test = require('tape')
const wtf = require('../lib')

async function get(options) {
	return await wtf.fetch('Great Britain', {
		lang: 'en',
		'Api-User-Agent': 'wtf_wikipedia test script - <spencermountain@gmail.com>',
		...options
	})
}

test('fetch-with-strict', async (t) => {
	let response = await get()//should succeed, strict mode disabled by default
	t.ok(response, `expected response when strict mode disabled`)
	response = await get({strictMode: true})
	t.notOk(response, `didn't expect response when strict mode enabled`)
	t.end()
})
