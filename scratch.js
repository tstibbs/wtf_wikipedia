import wtf from './src/index.js'
import plg from './plugins/i18n/src/index.js'
wtf.plugin(plg)

let str = `{| class="wikitable infobox toptextcells float-right" style="width:320px;"
|-
! colspan="2" style="font-size:1.4em;"| Land Berlin
|-
|}`
str = `'''India'''<!--Do NOT add pronunciation as per [[Wikipedia:Manual of Style/Lead section]].-->, officially the '''Republic of India''',<!--Do NOT change the name to Bharat without discussion in the talk page for consensus and multiple reliable citations. -->{{efn|[[ISO 15919|ISO]]: {{transliteration|hi|ISO|Bhārat Gaṇarājya}}}}<!--Do NOT add pronunciation as per [[Wikipedia:Manual of Style/Lead section]].--><ref>
* {{citation|title=The Essential Desk Reference |url=https://books.google.com/books?id=yjcOAQAAMAAJ&pg=PA76|year=2002|publisher=[[Oxford University Press]] |isbn=978-0-19-512873-4|page=76}} "Official name: Republic of India.";
* {{citation|author=John Da Graça|title=Heads of State and Government|url=https://books.google.com/books?id=M0YfDgAAQBAJ&pg=PA421 |year=2017|publisher=[[Macmillan Publishers|Macmillan]] |location=London |isbn=978-1-349-65771-1|page=421}} "Official name: Republic of India; Bharat Ganarajya (Hindi)";
* {{citation|author=Graham Rhind |title=Global Sourcebook of Address Data Management: A Guide to Address Formats and Data in 194 Countries |url=https://books.google.com/books?id=iGdQDwAAQBAJ&pg=PA302|year=2017|publisher=[[Taylor & Francis]] |isbn=978-1-351-93326-1|page=302}} "Official name: Republic of India; Bharat.";
* {{citation|last=Bradnock|first=Robert W.|title=The Routledge Atlas of South Asian Affairs |url=https://books.google.com/books?id=zzjbCgAAQBAJ&pg=PA108|year=2015|publisher=[[Routledge]]|isbn=978-1-317-40511-5|page=108}} "Official name: English: Republic of India; Hindi:Bharat Ganarajya";
* {{citation|title=Penguin Compact Atlas of the World|url=https://books.google.com/books?id=pLw-ReHIgvQC&pg=PA140|year=2012|publisher=[[Penguin Group|Penguin]] |isbn=978-0-7566-9859-1|page=140}} "Official name: Republic of India";
* {{citation|title=Merriam-Webster's Geographical Dictionary |url=https://books.google.com/books?id=Co_VIPIJerIC&pg=PA515|year=1997|isbn=978-0-87779-546-9 |edition=3rd |publisher=[[Merriam-Webster]]|pages=515–516}} "Officially, Republic of India";
* {{citation|title=Complete Atlas of the World: The Definitive View of the Earth |url=https://books.google.com/books?id=O5moCwAAQBAJ&pg=PA54-IA10 |edition=3rd|year=2016|publisher=[[DK Publishing]] |isbn=978-1-4654-5528-4|page=54}} "Official name: Republic of India";
* {{citation|title=Worldwide Government Directory with Intergovernmental Organizations 2013|url=https://books.google.com/books?id=CQWhAQAAQBAJ&pg=PA726|year= 2013|publisher=[[CQ Press]]|isbn=978-1-4522-9937-2|page=726}}</ref> is a country in [[South Asia]]. `

// let doc = await wtf.fetch('Berlin', 'de')
// let doc = await wtf.fetch('Berlin', 'fr')
// let doc = await wtf.fetch('Toronto', 'de')
// let doc = await wtf.fetch('Toronto', 'fr')
let doc = wtf(str)
// console.log(doc)
// console.log(doc.infobox()?.json())
console.log(doc.text())
