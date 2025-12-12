import wtf from './src/index.js'
import plg from './plugins/i18n/src/index.js'
wtf.plugin(plg)

let str = `
*{{cite news|title=Love—In Other Words}}
*{{cite news|title=Christmas to Me}}
*{{cite news|title=When Children Discover America}}
*{{cite news|title=Romance and High Adventure}} Show Just once.
*{{cite news|title=Open letter to Oprah Winfrey}} `

let doc = wtf(str)
// console.log(doc.references().map(r => r.json()))
// console.log(doc.json().sections[0].lists)
console.log(doc.text())
