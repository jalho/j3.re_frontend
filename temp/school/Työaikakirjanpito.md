# Työaikakirjanpito

| päivämäärä | työaika (h) | viimeinen commit | päiväkirja  |
| :----:|:-----| :-----| :-----|
| 24-Jun-2020 | 2 | N/A | Tutustuin *Next.js*. |
| 25-Jun-2020 | 3 | N/A | Jatkoin tutustumista Next.js ja tutustuin *React Static* etsiessäni ratkaisuja nopealle ensilataukselle eli jonkinlaisen staattisen aloitussivun tekemiselle. Kartoitin vaihtoehtoja hostauspalveluille, mm. Netlify. |
| 2-Jul-2020 | 4 | `9367c19` | Alustin *TypeScript* & *React* -projektin käyttäen *Create React App*. Tutustuin tyylien esiprosessointiin ja *Sass*. Valitsin ja kirjasin ylös `README.md` joitakin projektissa käytettäviä teknologioita, työkaluja ja palveluita otsikon *Tech stack* alle. |
| 5-Jul-2020 | 1 | `c3c3d95` | Organisoin hakemistot uudelleen tehdäkseni tilaa tulevalle back endille. Nähtävästi *tsconfig* on oltava erikseen sekä frontin että backin hakemistoissa, koska CRA edellyttää omaa configia, eikä voi käyttää parent hakemistossa olevaa jaettua. Tsconfig on myös oltava *JSON* muodossa, eli sitä ei voi exportata yhtäältä toisaalle kuten `.js` voisi. |
| 6-Jul-2020 | 1 | `56461f9` | Konfiguroin TS:n linttauksen. Deployasin Verceliin ja otin siellä käyttöön domainini [`j3.re`](https://j3.re/). Luovuin back endistä toistaiseksi, koska Verceliin deployattuani sille ei välittömästi ilmennyt mahdollisuutta taikka tarvetta. |
| 7-Jul-2020 | 4 | `359ade8` | Otin käyttöön *Sass*, tein naamastani vektorigrafiikkaa ja siitä React-komponentin. Toteutin *landing view*, joka näytetään muun osan latautuessa tai ainakin minimiajan. |
| 10-Jul-2020 | 0,5 | `8a5fdf6` | Kokosin eri paikoissa lojuneet *To do*-listat yhteen Issue-kuvaukseen (#3) GitHubissa. |
| 13-Jul-2020 | 3,5 | `999a8ce` | Kyselin Redditissä elegantista GitHub-projektimanageroinnista ja otin neuvoista vaarin. Säädin sivun teemaväriä Chrome Androidia varten sekä noscript-näkymää. Modularisoin ja uudelleenkirjoitin Sass-tyylit (Luovuttu Sass:n suosituksen mukaisesti `@import` käytöstä `@use` hyväksi. *Node-sass* ei tue vielä `@use`, joten aliasoitu `"node-sass": "npm:sass@^1.26.10"`). |
| 14-Jul-2020 | 1 | `c1bc679` | Korjasin `.centered`-luokan kokojen määrittelyjen aiheuttaman bugin layoutissa (Issue 4). Parantelin alkuanimaatiota. Dokumentoin koodia, suunnittelin projektin seuraavia vaiheita ja tein muuta projektihallinnointia GitHubissa. |
| 15-Jul-2020 | 8 | `02d9156` | Lisäsin tekstinvalintatyylin, modularisoin kaikki tyylit ja niiden yhteiset vakiot ja muutin headerit SVG-elementeiksi tulevaa animointia varten. SVG:n responsiivinen skaalaus vaatii aika paljon opettelua enkä tätä kirjoittaessa vieläkään koe olevani kyllin kykenevä siinä. Lopputulos on tällä hetkellä kuitenkin jokseenkin asiallinen. |
| 16-Jul-2020 | 8,5 | `82e4359` | Uudelleenjärjestelin projektin arkkitehtuuria (hakemistorakennetta), dokumentoin sen kaavioon ja tein muita yksinkertaistavia ja selkeyttäviä muutoksia ympäriinsä. Laadin [suunnitelman](https://stackoverflow.com/questions/62933283/code-review-ts-react-app-ui-language-state-implementation) käyttöliittymän kielen vaihtamisen toteuttamiselle. Tein pari uutta logoa. Uudelleenkirjoitin tyylit johdonmukaisemmin. |
| 20-Jul-2020 | 8 | `c5cd1fb` | Toteutin projektiin React Routerin, React Bootstrapin ja Reduxin. Refaktoroin ja parantelin juttuja ympäriinsä. |
| 21-Jul-2020 | 9,5 | `dd829e6` | Toteutin sovellukseen kielikäännökset käyttäen *React i18next*. Refaktoroin ja parantelin juttuja ympäriinsä. |
| 22-Jul-2020 | 8 | `TODO` | Aloitin GraphQL backendin rakentamisen [omassa repositoriossaan](https://github.com/jalho/j3.re_backend). Yritin ensin pitkään [monoreporatkaisua](https://stackoverflow.com/questions/63033756/how-to-deploy-front-and-back-end-on-vercel-from-the-same-monorepo) ja opiskelin asiaa kunnes lopulta päätin siirtyä elämässä eteenpäin ja tehdä rehellisesti omat repot frontille ja backille, ainakin toistaiseksi. Tein ensimmäisen *proof of concept* toteutuksen ja testasin toimivuutta Postmanilla. Backendiä ei vielä ole yhdistetty fronttiin. |
| 23-Jul-2020 | | | |
| 24-Jul-2020 | | | |
| **yhteensä**   | 62 | | | 
