import wtf from './src/index.js'
import plg from './plugins/i18n/src/index.js'
wtf.plugin(plg)

let str = `

{| class="wikitable" style="text-align: center;"
|+ Managerial record by team and tenure
|-
!rowspan="2"|Team
!rowspan="2"|From
!rowspan="2"|To
!colspan="5"|Record
|-
!{{abbr|P|Matches played}}!!{{abbr|W|Matches won}}!!{{abbr|D|Matches drawn}}!!{{abbr|L|Matches lost}}!!{{abbr|Win %|Win percentage}}
|-
|align="left"|[[Arsenal F.C.|Arsenal]]
|align="left"|22 December 2019{{efn|Arteta's appointment was announced on 20 December 2019 but did not take effect until 22 December. The intervening match against [[Everton F.C.|Everton]] was taken by interim head coach [[Freddie Ljungberg]].<ref>{{cite news |url=https://www.theguardian.com/football/2019/dec/20/arsenal-appoint-mikel-arteta-as-manager-to-replace-unai-emery |title=Mikel Arteta will not tolerate dissenters as he seeks to revive 'lost' Arsenal |first=Nick |last=Ames |newspaper=The Guardian |location=London |date=20 December 2019 |access-date=1 November 2021}}</ref>}}
|align="left"|''Present''
{{Win draw lose|352|213|66|73|decimals=1}}
|-
!colspan="3"|Total
{{Win draw lose totals|352|213|66|73|decimals=1}}
|}`

let doc = wtf(str)
// console.log(doc.references().map(r => r.json()))
// console.log(doc.json().sections[0].lists)
// console.log(doc.text())
// const doc = await wtf.fetch("Mikel Arteta");
// const tables = doc?.section('Managerial statistics').tables();

const rows = doc.tables()[0].json();
console.log("Rows: ", rows);
