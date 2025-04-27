import wtf from './src/index.js'
import plg from './plugins/i18n/src/index.js'
wtf.plugin(plg)

let str = `{| class="wikitable infobox toptextcells float-right" style="width:320px;"
|-
! colspan="2" style="font-size:1.4em;"| Land Berlin
|-
|}`
str = `{{Infobox
| name = Toronto
| latd:  '43'
| latm:  '42'
| lats:  '59.
| latns:  'N'
| longd:  '79'
| longm:  '20'
| longs:  '26.
| longw:  'W'
}}`

// let doc = await wtf.fetch('Berlin', 'de')
// let doc = await wtf.fetch('Berlin', 'fr')
let doc = await wtf.fetch('Toronto', 'de')
// let doc = await wtf.fetch('Toronto', 'fr')
// let doc = wtf(str)
// console.log(doc)
console.log(doc.infobox()?.json())
console.log(doc.coordinates())
