import wtf from './src/index.js'
import plg from './plugins/i18n/src/index.js'
wtf.plugin(plg)

let str = `

<code>aboutconfig</code>

* [http://www.mozilla.org/de/firefox/new/ Webbrowser Firefox auf Deutsch] – offizielle deutsche Website
* [https://addons.mozilla.org/de/firefox/ Firefox-Erweiterungen] – offizielle Programm-Erweiterungen für den ''Mozilla Firefox''
* [http://www.getpersonas.com/de/ Offizielle Personas-Erweiterungswebsite]
* [https://support.mozilla.org/t5/Mozilla-Hilfe-Deutsch/ct-p/de?profile.language=de Offizielle Firefox-Onlinehilfe]
* [https://marketplace.firefox.com/ Firefox Marketplace]
* [https://www.mozilla.com/de/firefox/channel/ Offizielle Downloadseite von Entwicklerversionen des ''Mozilla Firefox'']
* [https://www.camp-firefox.de/ Camp Firefox – Die Firefox-Community] – offizielle deutsche Firefox-Community-Website mit aktuellen Informationen rund um den Browser Firefox
* [https://www.mozilla.org/de/firefox/organizations/ Firefox ESR] für Unternehmen und große Organisationen
* [https://developer.mozilla.org/de/Firefox/Nutzung_in_Unternehmen/ Firefox in einem Unternehmen nutzen] enthält unter anderem Hinweise zur Konfiguration des ''Mozilla Firefox'' ähnlich der Möglichkeiten mit [[Microsoft Windows|Windows]] [[Group Policy Object]] (GPO)

<references>
</references>


`

let doc = wtf(str)
// console.log(doc.references().map(r => r.json()))
// console.log(doc.json().sections[0].lists)
console.log(doc.lists())
// const doc = await wtf.fetch("Mikel Arteta");
// const tables = doc?.section('Managerial statistics').tables();

// console.log("Rows: ", rows);
