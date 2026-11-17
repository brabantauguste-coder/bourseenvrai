/* =====================================================================
   BOURSEENVRAI : INDICES BOURSIERS ET DIVERSIFICATION  (modifiable)
   - companies : sélection des principales entreprises (ordre de grandeur,
     la composition et les poids évoluent : à relire de temps en temps).
   - drawdowns : pires baisses historiques, ordres de grandeur arrondis.
   Informations générales, pas un conseil d'investissement.
   ===================================================================== */
window.SITE_INDICES = {
  updated: '2026-11-16',
  note: 'Compositions et pourcentages : ordres de grandeur arrondis, à vérifier sur les fiches officielles des fournisseurs d’indices (MSCI, S&P, Euronext, STOXX…).',
  indices: [
    {
      id: 'sp500', n: 'S&P 500', z: 'usa', country: 'États-Unis', count: '500 entreprises',
      d: 'Les 500 plus grandes entreprises cotées aux États-Unis.',
      m: [3, 4, 3],
      risks: ['Dépend beaucoup de l’économie américaine.', 'Quelques géantes de la tech pèsent lourd.', 'Risque de change dollar/euro.'],
      companies: [
        ['Nvidia', 'Technologie', 'États-Unis'], ['Microsoft', 'Technologie', 'États-Unis'], ['Apple', 'Technologie', 'États-Unis'],
        ['Amazon', 'Commerce / cloud', 'États-Unis'], ['Alphabet (Google)', 'Communication', 'États-Unis'], ['Meta', 'Communication', 'États-Unis'],
        ['Broadcom', 'Technologie', 'États-Unis'], ['Tesla', 'Automobile', 'États-Unis'], ['Berkshire Hathaway', 'Finance', 'États-Unis'], ['JPMorgan Chase', 'Finance', 'États-Unis']
      ],
      dd: [['Éclatement bulle internet', '2000–2002', '≈ −49 %'], ['Crise financière', '2007–2009', '≈ −55 %'], ['Covid', 'fév.–mars 2020', '≈ −34 %'], ['Inflation et taux', '2022', '≈ −25 %']],
      rec: 'Après 2007 : environ 5 à 6 ans pour retrouver le sommet (en prix).'
    },
    {
      id: 'msciworld', n: 'MSCI World', z: 'monde', country: 'Monde développé', count: 'Environ 1 400 entreprises',
      d: 'Des centaines de grandes et moyennes entreprises de pays développés.',
      m: [5, 3, 3],
      risks: ['Les États-Unis pèsent très lourd dans l’indice.', 'Aucun pays émergent.', 'Risque de change.'],
      companies: [
        ['Nvidia', 'Technologie', 'États-Unis'], ['Microsoft', 'Technologie', 'États-Unis'], ['Apple', 'Technologie', 'États-Unis'],
        ['Amazon', 'Commerce / cloud', 'États-Unis'], ['Alphabet (Google)', 'Communication', 'États-Unis'], ['Meta', 'Communication', 'États-Unis'],
        ['Broadcom', 'Technologie', 'États-Unis'], ['Tesla', 'Automobile', 'États-Unis'], ['ASML', 'Semi-conducteurs', 'Pays-Bas'], ['Nestlé', 'Alimentation', 'Suisse']
      ],
      dd: [['Crise financière', '2007–2009', '≈ −54 %'], ['Covid', 'fév.–mars 2020', '≈ −34 %'], ['Inflation et taux', '2022', '≈ −25 %']],
      rec: 'Après 2007 : environ 6 ans pour retrouver le sommet (en dollars).'
    },
    {
      id: 'cac40', n: 'CAC 40', z: 'europe', country: 'France', count: '40 entreprises',
      d: 'Les 40 grandes entreprises cotées en France.',
      m: [2, 3, 3],
      risks: ['Un seul pays, peu de valeurs.', 'Le luxe et quelques groupes pèsent beaucoup.'],
      companies: [
        ['LVMH', 'Luxe', 'France'], ['Hermès', 'Luxe', 'France'], ['TotalEnergies', 'Énergie', 'France'], ['Schneider Electric', 'Industrie', 'France'],
        ['Sanofi', 'Santé', 'France'], ['Airbus', 'Aéronautique', 'France'], ['L’Oréal', 'Cosmétiques', 'France'], ['Safran', 'Aéronautique', 'France'],
        ['Air Liquide', 'Chimie', 'France'], ['BNP Paribas', 'Banque', 'France']
      ],
      dd: [['Bulle internet', '2000–2003', '≈ −65 %'], ['Crise financière', '2007–2009', '≈ −59 %'], ['Covid', 'fév.–mars 2020', '≈ −38 %']],
      rec: 'Le sommet de 2007 n’a été retrouvé qu’au bout de plus de 13 ans (indice en prix).'
    },
    {
      id: 'nasdaq100', n: 'Nasdaq 100', z: 'usa', country: 'États-Unis', count: '100 entreprises',
      d: 'Les 100 grandes entreprises non financières du Nasdaq, très tech.',
      m: [2, 5, 5],
      risks: ['Très concentré sur la technologie.', 'Baisses souvent plus fortes que le marché large.', 'Risque de change.'],
      companies: [
        ['Nvidia', 'Technologie', 'États-Unis'], ['Microsoft', 'Technologie', 'États-Unis'], ['Apple', 'Technologie', 'États-Unis'], ['Amazon', 'Commerce / cloud', 'États-Unis'],
        ['Broadcom', 'Technologie', 'États-Unis'], ['Meta', 'Communication', 'États-Unis'], ['Netflix', 'Médias', 'États-Unis'], ['Tesla', 'Automobile', 'États-Unis'],
        ['Alphabet (Google)', 'Communication', 'États-Unis'], ['Costco', 'Distribution', 'États-Unis']
      ],
      dd: [['Bulle internet', '2000–2002', '≈ −83 %'], ['Crise financière', '2007–2009', '≈ −54 %'], ['Inflation et taux', '2022', '≈ −33 %']],
      rec: 'Après le sommet de 2000 : environ 15 ans pour le retrouver (en prix).'
    },
    {
      id: 'eurostoxx50', n: 'Euro Stoxx 50', z: 'europe', country: 'Zone euro', count: '50 entreprises',
      d: '50 grandes entreprises de la zone euro.',
      m: [3, 3, 3],
      risks: ['Zone euro uniquement.', 'Peu de valeurs.', 'Les banques et le luxe pèsent sensiblement.'],
      companies: [
        ['ASML', 'Semi-conducteurs', 'Pays-Bas'], ['SAP', 'Logiciels', 'Allemagne'], ['LVMH', 'Luxe', 'France'], ['Siemens', 'Industrie', 'Allemagne'],
        ['TotalEnergies', 'Énergie', 'France'], ['Schneider Electric', 'Industrie', 'France'], ['Allianz', 'Assurance', 'Allemagne'], ['Sanofi', 'Santé', 'France'],
        ['Airbus', 'Aéronautique', 'France'], ['Iberdrola', 'Énergie', 'Espagne']
      ],
      dd: [['Crise financière', '2007–2009', '≈ −60 %'], ['Covid', 'fév.–mars 2020', '≈ −38 %']],
      rec: 'Plus de dix ans pour retrouver le sommet de 2007.'
    },
    {
      id: 'dax', n: 'DAX 40', z: 'europe', country: 'Allemagne', count: '40 entreprises',
      d: 'Les 40 plus grandes entreprises cotées en Allemagne.',
      m: [2, 3, 3],
      risks: ['Un seul pays, très industriel et exportateur.', 'Dépendance à l’automobile et à l’industrie.'],
      companies: [
        ['SAP', 'Logiciels', 'Allemagne'], ['Siemens', 'Industrie', 'Allemagne'], ['Allianz', 'Assurance', 'Allemagne'], ['Deutsche Telekom', 'Télécoms', 'Allemagne'],
        ['Airbus', 'Aéronautique', 'Pays-Bas'], ['Rheinmetall', 'Défense', 'Allemagne'], ['Munich Re', 'Assurance', 'Allemagne'], ['Mercedes-Benz', 'Automobile', 'Allemagne'],
        ['Deutsche Bank', 'Banque', 'Allemagne'], ['BMW', 'Automobile', 'Allemagne']
      ],
      dd: [['Crise financière', '2007–2009', '≈ −55 %'], ['Covid', 'fév.–mars 2020', '≈ −39 %']],
      rec: 'Indice en « performance » (dividendes réinvestis), donc souvent mieux que les indices en prix.'
    },
    {
      id: 'ftse100', n: 'FTSE 100', z: 'europe', country: 'Royaume-Uni', count: '100 entreprises',
      d: 'Les 100 plus grandes entreprises cotées à Londres, très internationales.',
      m: [2, 2, 2],
      risks: ['Beaucoup d’énergie, de banques et de matières premières.', 'Peu de technologie.', 'Risque de change livre/euro.'],
      companies: [
        ['AstraZeneca', 'Santé', 'Royaume-Uni'], ['Shell', 'Énergie', 'Royaume-Uni'], ['HSBC', 'Banque', 'Royaume-Uni'], ['Unilever', 'Biens de consommation', 'Royaume-Uni'],
        ['BP', 'Énergie', 'Royaume-Uni'], ['Rio Tinto', 'Mines', 'Royaume-Uni'], ['GSK', 'Santé', 'Royaume-Uni'], ['Diageo', 'Boissons', 'Royaume-Uni'],
        ['British American Tobacco', 'Tabac', 'Royaume-Uni'], ['RELX', 'Information', 'Royaume-Uni']
      ],
      dd: [['Crise financière', '2007–2009', '≈ −48 %'], ['Covid', 'fév.–mars 2020', '≈ −35 %']],
      rec: 'Progression de long terme modeste en prix, avec des dividendes élevés.'
    },
    {
      id: 'nikkei', n: 'Nikkei 225', z: 'asie', country: 'Japon', count: '225 entreprises',
      d: 'Les 225 grandes entreprises cotées à Tokyo (indice pondéré par le prix).',
      m: [2, 3, 3],
      risks: ['Un seul pays, population qui vieillit.', 'Risque de change yen/euro.', 'Pondération par prix : quelques titres comptent plus que leur taille.'],
      companies: [
        ['Toyota', 'Automobile', 'Japon'], ['Sony', 'Électronique', 'Japon'], ['Fast Retailing (Uniqlo)', 'Distribution', 'Japon'], ['Tokyo Electron', 'Semi-conducteurs', 'Japon'],
        ['SoftBank Group', 'Investissement tech', 'Japon'], ['Keyence', 'Automatisation', 'Japon'], ['Mitsubishi UFJ', 'Banque', 'Japon'], ['Advantest', 'Semi-conducteurs', 'Japon']
      ],
      dd: [['Éclatement bulle japonaise', '1990–2003', '≈ −80 %'], ['Crise financière', '2007–2009', '≈ −60 %'], ['Covid', 'fév.–mars 2020', '≈ −31 %']],
      rec: 'Le sommet de 1989 n’a été retrouvé qu’en 2024, soit plus de 30 ans plus tard (en prix).'
    },
    {
      id: 'msciem', n: 'MSCI Emerging Markets', z: 'emergents', country: 'Pays émergents', count: 'Environ 1 200 entreprises',
      d: 'Entreprises de pays émergents, comme la Chine, l’Inde ou Taïwan.',
      m: [4, 3, 4],
      risks: ['Risque politique et réglementaire plus élevé.', 'Volatilité plus forte.', 'Risque de change.'],
      companies: [
        ['TSMC', 'Semi-conducteurs', 'Taïwan'], ['Tencent', 'Internet', 'Chine'], ['Alibaba', 'Commerce en ligne', 'Chine'], ['Samsung Electronics', 'Électronique', 'Corée du Sud'],
        ['SK Hynix', 'Semi-conducteurs', 'Corée du Sud'], ['Reliance Industries', 'Conglomérat', 'Inde'], ['HDFC Bank', 'Banque', 'Inde'], ['Xiaomi', 'Électronique', 'Chine']
      ],
      dd: [['Crise financière', '2007–2008', '≈ −66 %'], ['Reflux 2021–2022', '2021–2022', '≈ −35 %']],
      rec: 'Les cycles sont longs : plusieurs années sans gain sont fréquentes.'
    }
  ],
  zones: [['tous', 'Tous'], ['monde', 'Monde'], ['usa', 'États-Unis'], ['europe', 'Europe'], ['asie', 'Asie'], ['emergents', 'Émergents']],
  diversification: {
    intro: 'Diversifier, c’est ne pas mettre tous ses œufs dans le même panier. Il y a trois façons de le faire, qui se complètent.',
    axes: [
      {
        k: 'geo', t: 'Géographique', q: 'Dans quels pays sont les entreprises ?',
        d: 'Répartir entre régions pour ne pas dépendre d’un seul pays, d’une seule monnaie ou d’une seule politique.',
        ex: 'Exemple : MSCI World, ordres de grandeur',
        bars: [['États-Unis', 70], ['Japon', 6], ['Royaume-Uni', 4], ['France', 3], ['Canada', 3], ['Suisse', 2.5], ['Allemagne', 2.5], ['Autres pays', 9]],
        tip: 'Un « ETF monde » est souvent très américain. Pour rééquilibrer : ajouter l’Europe ou les pays émergents.',
        risk: 'Risque évité : une crise ou une mauvaise décennie dans un seul pays.'
      },
      {
        k: 'sector', t: 'Sectorielle', q: 'Dans quel métier travaillent-elles ?',
        d: 'Répartir entre secteurs (technologie, santé, banques, énergie, consommation…) pour ne pas dépendre d’une mode ou d’un cycle.',
        ex: 'Exemple : MSCI World, ordres de grandeur',
        bars: [['Technologie', 27], ['Finance', 15], ['Industrie', 11], ['Conso. discrétionnaire', 10], ['Santé', 9], ['Communication', 8], ['Conso. de base', 6], ['Énergie', 3.5], ['Autres', 10.5]],
        tip: 'La technologie pèse beaucoup dans les grands indices : vérifie ta part réelle.',
        risk: 'Risque évité : l’effondrement d’un secteur (tech en 2000, finance en 2008, énergie en 2014).'
      },
      {
        k: 'size', t: 'Par taille', q: 'Quelle est la taille des entreprises ?',
        d: 'Mélanger grandes entreprises (stables), moyennes et petites (plus de croissance possible, plus de variations).',
        ex: 'Repères de taille (capitalisation boursière, approximatifs)',
        tiers: [
          ['Grandes entreprises', 'Large caps', 'plus de ~10 Md€', 'Plus stables et très liquides. Ex. : S&P 500, CAC 40, MSCI World.'],
          ['Moyennes entreprises', 'Mid caps', '~2 à 10 Md€', 'Croissance possible, un peu plus de variations. Souvent incluses dans les ETF monde.'],
          ['Petites entreprises', 'Small caps', 'moins de ~2 Md€', 'Potentiel plus élevé mais plus fortes variations. Ex. : ETF MSCI World Small Cap.']
        ],
        tip: 'Un ETF monde contient surtout grandes et moyennes entreprises. Les small caps peuvent compléter, en petite part.',
        risk: 'Risque évité : dépendre uniquement de quelques géantes, ou, à l’inverse, de petits titres fragiles.'
      }
    ]
  }
};
