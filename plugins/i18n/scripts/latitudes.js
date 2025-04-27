import wtf from '../../../src/index.js'
import languages from '../../../src/_data/languages.js'
const langs = Object.keys(languages)

for (let i = 0; i < langs.length; i += 1) {
  let lang = langs[i]
  let doc = await wtf.fetch('Toronto', lang)
  if (!doc) {
    // console.log('no doc for', lang)
    continue
  }
  let infobox = doc.infobox()
  if (!infobox) {
    // console.log('no infobox for', lang)
    continue
  }
  let coordinates = infobox.coordinates()
  if (!coordinates) {
    console.log('\n\n--------------------------------', lang)
    console.log(infobox.json())
    continue
  }
  // console.log('✅', lang, coordinates)
}
