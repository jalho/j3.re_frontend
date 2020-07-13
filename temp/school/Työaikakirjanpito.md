# Työaikakirjanpito

| päivämäärä | työaika (h) | viimeinen commit | päiväkirja  |
| :----:|:-----| :-----| :-----|
| 24-Jun-2020 | 2 | N/A | Tutustuin *Next.js*. |
| 25-Jun-2020 | 3 | N/A | Jatkoin tutustumista Next.js ja tutustuin *React Static* etsiessäni ratkaisuja nopealle ensilataukselle eli jonkinlaisen staattisen aloitussivun tekemiselle. Kartoitin vaihtoehtoja hostauspalveluille, mm. Netlify. |
| 2-Jul-2020 | 4 | `9367c19` | Alustin *TypeScript* & *React* -projektin käyttäen *Create React App*. Tutustuin tyylien esiprosessointiin ja *Sass*. Valitsin ja kirjasin ylös `README.md` joitakin projektissa käytettäviä teknologioita, työkaluja ja palveluita otsikon *Tech stack* alle. |
| 5-Jul-2020 | 1 | `c3c3d95` | Organisoin hakemistot uudelleen tehdäkseni tilaa tulevalle back endille. Nähtävästi *tsconfig* on oltava erikseen sekä frontin että backin hakemistoissa, koska CRA edellyttää omaa configia, eikä voi käyttää parent hakemistossa olevaa jaettua. Tsconfig on myös oltava *JSON* muodossa, eli sitä ei voi exportata yhtäältä toisaalle kuten `.js` voisi. |
| 6-Jul-2020 | 1 | `56461f9` | Konfiguroin TS:n linttauksen. Deployasin Verceliin ja otin siellä käyttöön domainini [`j3.re`](https://j3.re/). Luovuin back endistä toistaiseksi, koska Verceliin deployattuani sille ei välittömästi ilmennyt mahdollisuutta taikka tarvetta. |
| 7-Jul-2020 | 4 | `359ade8` | Otin käyttöön *Sass*, tein naamastani vektorigrafiikkaa ja siitä React-komponentin. Toteutin *landing view*, joka näytetään muun osan latautuessa tai ainakin minimiajan. |
| 10-Jul-2020 | 0,5 | `8a5fdf6` | Kokosin eri paikoissa lojuneet TODO-listat yhteen Issue-kuvaukseen (#3) GitHubissa. |
| 13-Jul-2020 | 3,5 | `TODO` | Kyselin Redditissä elegantista GitHub-projektimanageroinnista ja otin neuvoista vaarin. Säädin sivun teemaväriä Chrome Androidia varten sekä noscript-näkymää. Modularisoin ja uudelleenkirjoitin Sass-tyylit (Luovuttu Sass:n suosituksen mukaisesti `@import` käytöstä `@use` hyväksi. *Node-sass* ei tue vielä `@use`, joten aliasoitu `"node-sass": "npm:sass@^1.26.10"`). |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| **yhteensä**   | 19 | | |
