/* =====================================================================
   BOURSEENVRAI : FICHIER DE DONNÉES  (c'est le seul fichier à modifier
   chaque mois pour les frais, les avis et les liens de parrainage)
   ---------------------------------------------------------------------
   1. Change "updated" (date de dernière vérification, format AAAA-MM-JJ)
   2. Pour chaque courtier : mets à jour "verified", "feesSummary" (le
      tableau affiché) ET "modes" (les chiffres utilisés par le simulateur)
   3. Parrainage : remplis affiliate.url (et affiliate.code si tu en as un).
      Tant que "url" vaut null, aucun encart de parrainage n’est affiché.
      bonus = ce que gagne le visiteur, myGain = ce que tu gagnes, until = fin de l'offre.
   4. company / tax / app : infos générales de la fiche (à vérifier de temps en temps).
   ---------------------------------------------------------------------
   Tarifs ("tiers") : liste de paliers lus dans l'ordre.
     { upTo: 500, fixed: 1.99, pct: 0 }  = jusqu'à 500 € d'ordre : 1,99 €
     { upTo: null, fixed: 0, pct: 0.006 } = au-delà : 0,60 % de l'ordre
   Un courtier avec des ETF/plans gratuits : mets fixed: 0 et pct: 0.
   "yearly" = abonnement annuel en €, "pctYear" = frais de garde annuels
   en % (0.002 = 0,2 %), "max" = plafond de frais par ordre.
   ===================================================================== */
window.SITE_DATA = {
  updated: '2026-11-17',
  staleAfterDays: 45,   // au-delà, la carte affiche "À revérifier"

  brokers: [
    {
      id: 'trade-republic',
      name: 'Trade Republic',
      kind: 'Néocourtier · application mobile',
      accounts: ['CTO', 'PEA'],
      site: 'https://traderepublic.com/fr-fr',
      company: { hq: "Berlin (Allemagne)", size: "Néobroker européen, plus de 10 millions de clients", regulator: "Banque agréée en Allemagne (BaFin)", group: null },
      tax: { level: "À gérer toi-même", easy: false, text: "Courtier basé à l’étranger : vérifie sur leur site ce qui est transmis automatiquement au fisc français. Pour un compte-titres, prévois de déclarer toi-même le compte (formulaire 3916-bis) et tes revenus." },
      app: ["Plans d’investissement automatiques", "Actions, ETF et crypto dans la même appli", "Intérêts sur l’argent non investi", "Carte bancaire"],
      offer: {"myTake": "Parrainage sans aucun engagement, mais peu rémunérateur. C’est mieux que rien.", "bonus": "Jusqu’à 200 € en action offerte (valeur tirée au sort).", "mine": "Jusqu’à 200 € par filleul actif, selon l’offre en cours.", "cond": "Nouveau client, dépôt de 100 € et 3 investissements (d’après les sources : à vérifier dans l’app au moment de l’inscription). Le lien se partage en privé.", "until": null, "source": "https://assets.traderepublic.com/assets/files/T&C_Customer-Promotions-FR.pdf", "sourceLabel": "Conditions officielles", "verified": "2026-11-17"},
      // bonus = ce que le visiteur gagne · myGain = ce que tu gagnes · until = date de fin (AAAA-MM-JJ)
      affiliate: {"url": "https://refnocode.trade.re/r0nlgvfr", "code": null, "bonus": null, "myGain": null, "until": null},
      verified: '2026-11-17',
      source: 'https://sinvestir.fr/frais-de-trade-republic-2026/',
      sourceLabel: 'Presse spécialisée',
      explain: 'Une appli mobile pour investir en quelques minutes. Compte-titres et PEA, ordres à 1 € et plans d’investissement automatiques gratuits.',
      avis: 'Pour démarrer, c’est le plus simple : un plan automatique gratuit et zéro frais de garde, tu investis chaque mois sans y penser. Petit bémol : sur le PEA, tu ne peux pas acheter de fractions d’actions.',
      pros: ['Plans d’investissement à 0 €', 'Aucun frais de garde ni de tenue', 'Application très simple'],
      cons: ['Peu d’ETF éligibles au PEA', 'Pas d’assurance vie', 'Pas de compte démo'],
      feesSummary: [
        ['Ordre d’achat ou de vente', '1 €'],
        ['Plan d’investissement', '0 €'],
        ['Garde / tenue de compte', '0 €'],
        ['À savoir', '2 € en « Direct Price »']
      ],
      modes: {
        plan:  { tiers: [{ upTo: null, fixed: 0, pct: 0 }], yearly: 0, pctYear: 0 },
        order: { tiers: [{ upTo: null, fixed: 1, pct: 0 }], yearly: 0, pctYear: 0 }
      }
    },
    {
      id: 'boursobank',
      name: 'BoursoBank',
      kind: 'Banque en ligne',
      accounts: ['CTO', 'PEA', 'Assurance vie', 'PER'],
      site: 'https://www.boursobank.com/bourse',
      company: { hq: "Boulogne-Billancourt (France)", size: "Banque en ligne, plus de 6 millions de clients", regulator: "Banque française (ACPR), dépôts garantis", group: "Groupe Société Générale" },
      tax: { level: "Simple", easy: true, text: "Banque française : les revenus et plus-values sont transmis à l’administration fiscale (IFU) et ta déclaration est pré-remplie." },
      app: ["Compte courant, carte et épargne au même endroit", "PEA, assurance vie et compte-titres", "Crédit et autres services bancaires", "Application mobile très complète"],
      offer: {"myTake": "Le meilleur parrainage selon mon expérience : la prime du filleul est proche de 150 €, voire plus selon les périodes. Avec l’abonnement Welcome, aucun engagement et aucun frais si tu n’utilises pas le compte (ni si tu l’utilises). Les plafonds sont bas, mais on veut juste la prime.", "bonus": "De 160 € (standard) à 220 € lors des campagnes boostées.", "mine": "De 20 à 150 € par filleul selon mon niveau d’encours (20 primes maximum sur 12 mois).", "cond": "Prime de bienvenue et prime de parrainage non cumulables : tu choisis l’une ou l’autre. Conditions de versement et de carte à vérifier.", "until": null, "source": "https://www.boursobank.com/bon-plan/parrainage-boursobank", "sourceLabel": "Page officielle", "verified": "2026-11-17"},
      // bonus = ce que le visiteur gagne · myGain = ce que tu gagnes · until = date de fin (AAAA-MM-JJ)
      affiliate: {"url": "https://bour.so/p/p72kPVMQkEL", "code": null, "bonus": null, "myGain": null, "until": null},
      verified: '2026-11-17',
      source: 'https://www.boursobank.com/aide-en-ligne/bourse/comment-investir-en-bourse/fonctionnement-de-la-bourse/question/quels-sont-les-frais-de-courtage-en-bourse-398',
      sourceLabel: 'Page officielle',
      explain: 'Une banque en ligne complète : tout au même endroit (compte, PEA, CTO, assurance vie, PER). Le courtage est gratuit sur une sélection d’ETF partenaires, Amundi depuis le 5 octobre 2026.',
      avis: 'Pratique si tu veux tout centraliser. Les frais ne sont vraiment bas que si tu choisis un ETF de la liste sans courtage : en dehors, c’est moins compétitif que les courtiers spécialisés.',
      pros: ['ETF partenaires sans courtage', 'Tous les comptes au même endroit', 'Aucun frais de garde'],
      cons: ['Courtage classique plus cher', 'La liste d’ETF gratuits peut changer'],
      feesSummary: [["Courtage (formule Découverte)", "1,99 € jusqu’à 500 € · 0,60 % au-delà (PEA : plafonné à 0,5 %)"], ["ETF partenaires Amundi", "0 € à l’achat (depuis le 5/10/2026, ex-iShares)"], ["Garde / tenue de compte", "0 €"], ["Plans programmés", "Dès 10 €/mois sur 8 fonds : 0 € de courtage mais 0,59 %/an de frais de gestion (en plus des frais des ETF)"]],
      modes: {"plan": {"tiers": [{"upTo": null, "fixed": 0, "pct": 0}], "yearly": 0, "pctYear": 0.0059}, "order": {"tiers": [{"upTo": 500, "fixed": 1.99, "pct": 0}, {"upTo": null, "fixed": 0, "pct": 0.006}], "yearly": 0, "pctYear": 0}}
    },
    {
      id: "bnp-paribas",
      name: "BNP Paribas",
      kind: "Grande banque française",
      accounts: ["CTO", "PEA", "Assurance vie", "PER"],
      site: "https://mabanque.bnpparibas/fr/bourse",
      company: {"hq": "Paris (France)", "size": "Première banque française, plus de 10 millions de clients en France", "regulator": "Banque française (ACPR, BCE), dépôts garantis jusqu’à 100 000 €", "group": "Groupe BNP Paribas"},
      tax: {"level": "Simple", "easy": true, "text": "Banque française : l’IFU est transmis automatiquement au fisc et ta déclaration est pré-remplie."},
      app: ["Compte courant, carte et épargne", "PEA, compte-titres, assurance vie et PER", "Gestion pilotée (déléguée) selon l’offre", "Agences et conseillers"],
      offer: {"myTake": "Le parrainage est correct pour ouvrir un compte dans une très grosse banque. Ensuite, regarde bien les frais avant d’investir beaucoup.", "bonus": "Jusqu’à 160 € offerts (compte + carte Visa, offre Esprit Libre Référence).", "mine": "150 € offerts par parrainage, versés à l’ouverture d’un premier compte par le filleul.", "cond": "Premier compte et carte Visa avec l’offre Esprit Libre Référence. Conditions détaillées dans l’appli BNP (renvoi (1)) : à lire avant de t’inscrire.", "until": null, "source": "https://mabanque.bnpparibas/fr/parrainage", "sourceLabel": "Page officielle", "verified": "2026-11-17"},
      affiliate: {"url": "https://mabanqueprivee.bnpparibas/fr/parrainage-filleul/?code=PARBNP150NOVEMBRE26&token=276GY458", "code": "PARBNP150NOVEMBRE26", "bonus": null, "myGain": null, "until": null},
      verified: "2026-11-17",
      source: "https://www.francetransactions.com/bourse/pea/pea-bnp-paribas.html",
      sourceLabel: "Comparateur indépendant",
      explain: "La grande banque traditionnelle : tout au même endroit, des conseillers, et une offre de gestion pilotée pour ceux qui ne veulent rien faire eux-mêmes.",
      conseil: "Mon conseil : c’est l’option extrêmement sûre. Tu es dans une très grosse banque régulée, avec des dépôts garantis, et si tu veux une version pilotée où tu n’as aucun mouvement à faire toi-même, c’est vers ce type de plateforme qu’il faut aller. En contrepartie, ce n’est pas très rentable : les frais peuvent être importants. Précision importante : la sécurité de la banque ne garantit pas le capital investi, qui peut baisser en bourse.",
      pros: ["Très grosse banque, très sécurisée", "Gestion pilotée possible, sans rien à faire", "Tous les comptes et des conseillers"],
      cons: ["Frais de courtage et de garde élevés", "Gestion pilotée coûteuse", "Conseil parfois orienté vers les produits maison"],
      feesSummary: [["Offre Start : courtage Euronext", "Environ 5 € jusqu’à 1 000 €, 10 € jusqu’à 3 000 €, puis 0,50 % (sources un peu divergentes)"], ["Offre Active", "5 € par ordre jusqu’à 3 000 €, abonnement ou 50 ordres par an"], ["Droits de garde", "0,40 % par an jusqu’à 50 000 €, puis dégressif, plus des frais par ligne"], ["Gestion pilotée", "Frais plus élevés qu’en ligne : voir la banque"]],
      modes: {"plan": {"tiers": [{"upTo": 1000, "fixed": 5, "pct": 0}, {"upTo": 3000, "fixed": 10, "pct": 0}, {"upTo": null, "fixed": 0, "pct": 0.005}], "yearly": 0, "pctYear": 0.004}, "order": {"tiers": [{"upTo": 1000, "fixed": 5, "pct": 0}, {"upTo": 3000, "fixed": 10, "pct": 0}, {"upTo": null, "fixed": 0, "pct": 0.005}], "yearly": 0, "pctYear": 0.004}}
    },
    {
      id: 'fortuneo',
      name: 'Fortuneo',
      kind: 'Banque en ligne',
      accounts: ['CTO', 'PEA', 'Assurance vie'],
      site: 'https://www.fortuneo.fr/bourse',
      company: { hq: "France", size: "Banque en ligne adossée à un grand groupe mutualiste", regulator: "Banque française (ACPR), dépôts garantis", group: "Groupe Crédit Mutuel Arkéa" },
      tax: { level: "Simple", easy: true, text: "Banque française : l’IFU est transmis automatiquement au fisc et la déclaration est pré-remplie." },
      app: ["Compte courant, carte et épargne", "PEA, assurance vie et compte-titres", "Outils d’aide au choix des placements", "Application mobile"],
      extra: "Pas de plan programmé sur PEA en 2026.",
      // bonus = ce que le visiteur gagne · myGain = ce que tu gagnes · until = date de fin (AAAA-MM-JJ)
      affiliate: { url: null, code: null, bonus: null, myGain: null, until: null },
      verified: '2026-11-17',
      source: 'https://www.fortuneo.fr/bourse/tarifs',
      sourceLabel: 'Page officielle',
      explain: 'Banque en ligne du groupe Crédit Mutuel Arkéa. Sa formule Starter est pensée pour les petits versements réguliers : le premier ordre du mois est offert.',
      avisKind: "condense",
      synth: "Très bien si tu investis une fois par mois, 500 € ou moins. Si tu veux tout automatiser sur un PEA, regarde plutôt ailleurs.",
      avis: "Les avis retiennent surtout le premier ordre du mois offert (jusqu’à 500 €) et l’absence de droits de garde : c’est très avantageux avec un seul achat mensuel. Les critiques portent sur les 0,35 % par ordre au-delà, et sur l’absence de plan d’investissement programmé sur PEA dans les comparatifs que j’ai lus.",
      pros: ['1er ordre du mois offert (≤ 500 €)', 'Aucun frais de garde', 'Assurance vie disponible'],
      cons: ['0,35 % par ordre au-delà', 'Les offres promo sont temporaires'],
      feesSummary: [["Formule Starter", "0 € le 1er ordre du mois ≤ 500 € · sinon 0,35 %"], ["Formule Progress", "4,90 € jusqu’à 3 000 € · 0,15 % au-delà"], ["Garde / tenue de compte", "0 €"], ["ETF Amundi (promo)", "Courtage remboursé sur une sélection d’ETF, conditions et dates à vérifier sur le site"]],
      modes: {
        plan:  { tiers: [{ upTo: 500, fixed: 0, pct: 0 }, { upTo: null, fixed: 0, pct: 0.0035 }], yearly: 0, pctYear: 0 },
        order: { tiers: [{ upTo: null, fixed: 0, pct: 0.0035 }], yearly: 0, pctYear: 0 }
      }
    },
    {
      id: 'bourse-direct',
      name: 'Bourse Direct',
      kind: 'Courtier en ligne français',
      accounts: ['CTO', 'PEA', 'Assurance vie'],
      site: 'https://www.boursedirect.fr',
      company: { hq: "Paris (France)", size: "Courtier en ligne français, plus petit mais spécialisé", regulator: "Établissement agréé en France (ACPR)", group: null },
      tax: { level: "Simple", easy: true, text: "Courtier français : l’IFU est transmis automatiquement au fisc, comme dans une banque classique." },
      app: ["PEA, PEA-PME, compte-titres et assurance vie", "Outils d’analyse et actualités de marché", "Accès à plusieurs places boursières", "Plateforme web et application"],
      extra: "Une des grilles les moins chères sur Euronext, frais de transfert remboursés, pas de frais de garde.",
      // bonus = ce que le visiteur gagne · myGain = ce que tu gagnes · until = date de fin (AAAA-MM-JJ)
      affiliate: { url: null, code: null, bonus: null, myGain: null, until: null },
      verified: '2026-11-17',
      source: 'https://www.boursedirect.fr/fr/bourse/tarifs',
      sourceLabel: 'Page officielle',
      explain: 'Un courtier français historique. PEA, compte-titres et assurance vie, sans droits de garde, avec un tarif d’entrée à 0,99 € pour les petits ordres.',
      avisKind: "condense",
      synth: "Un choix français, simple et peu cher pour de petits ordres. Moins moderne que les néocourtiers, mais très correct pour un PEA.",
      avis: "Les avis la décrivent comme une valeur sûre : ordre à 0,99 € jusqu’à 500 €, pas de droits de garde, transfert d’un ancien compte remboursé. Les points faibles cités : des tarifs par paliers qui montent avec le montant, une ergonomie notée plutôt moyenne, et des plans programmés récents (mai 2026), limités à une sélection de 27 ETF.",
      pros: ['Ordre à 0,99 € pour les petits montants', 'Aucun frais de garde', 'Large choix de comptes'],
      cons: ["Tarifs par paliers", "Pas de fractions d’actions"],
      feesSummary: [["Tarif à 0,99 €", "≤ 500 € : 0,99 € · ≤ 1 000 € : 1,90 € · ≤ 2 000 € : 2,90 € (en PEA, jusqu’à 198 € : 0,5 %)"], ["Au-delà", "≤ 4 400 € : 3,80 € · ensuite 0,09 %"], ["Plans d’investissement (depuis mai 2026)", "0 € de courtage sur 27 ETF sélectionnés, ordre exécuté le 5 du mois"], ["Garde / tenue de compte", "0 €"], ["ETF Amundi (promo)", "Courtage remboursé sur une sélection d’ETF Amundi, du 1/05/2026 au 30/04/2027"]],
      modes: {
        plan:  { tiers: [{"upTo": null, "fixed": 0, "pct": 0}], yearly: 0, pctYear: 0 },
        order: { tiers: [{ upTo: 500, fixed: 0.99, pct: 0 }, { upTo: 1000, fixed: 1.9, pct: 0 }, { upTo: 2000, fixed: 2.9, pct: 0 }, { upTo: 4400, fixed: 3.8, pct: 0 }, { upTo: null, fixed: 0, pct: 0.0009 }], yearly: 0, pctYear: 0 }
      }
    },
    {
      id: 'interactive-brokers',
      name: 'Interactive Brokers',
      kind: 'Courtier international',
      accounts: ['CTO', 'PEA'],
      site: 'https://www.interactivebrokers.ie/fr/',
      company: { hq: "Greenwich, Connecticut (États-Unis) · entité européenne à Dublin", size: "L’un des plus grands courtiers au monde, coté en bourse", regulator: "Interactive Brokers Ireland, régulée par la Banque centrale d’Irlande", group: null },
      tax: {"level": "À gérer toi-même", "easy": false, "text": "PEA : IBKR fournit un IFU. Compte-titres : pas d’IFU français standard, tu reçois des relevés détaillés mais tu déclares toi-même le compte et tes revenus (formulaire 3916-bis)."},
      app: ["Accès à de très nombreux marchés dans le monde", "Multi-devises et actions fractionnées", "Plateforme avancée (plus complexe pour un débutant)", "Outils pour investisseurs expérimentés"],
      // bonus = ce que le visiteur gagne · myGain = ce que tu gagnes · until = date de fin (AAAA-MM-JJ)
      affiliate: { url: null, code: null, bonus: null, myGain: null, until: null },
      verified: '2026-11-17',
      source: 'https://www.interactivebrokers.ie/fr/pricing/commissions-stocks-europe.php',
      sourceLabel: 'Page officielle',
      explain: 'Un courtier mondial, accessible depuis la France, avec un accès à énormément de marchés. PEA disponible depuis 2024. Tarification au volume ou à prix fixe.',
      avisKind: "condense",
      synth: "Puissant et peu cher, mais ce n’est pas un premier compte : à réserver à quelqu’un qui sait déjà ce qu’il fait.",
      avis: "Les avis saluent des commissions très basses (0,05 %, minimum 1,25 €), un accès à énormément de places boursières et, depuis 2025, un IFU pour le PEA. Le reproche qui revient : une plateforme complexe, pensée pour des investisseurs avancés, sans plan d’investissement automatique, avec des frais de bourse parfois refacturés.",
      pros: ['Commissions très basses', 'Accès à d’innombrables marchés', 'PEA et CTO'],
      cons: ['Interface plus technique', 'Pas de plan automatique', 'Frais tiers parfois refacturés'],
      feesSummary: [
        ['Tarif dégressif', '0,05 % (min. 1,25 € · max. 29 €)'],
        ['Tarif fixe', '3 € par ordre (ETF d’Europe de l’Ouest)'],
        ['Garde / tenue de compte', '0 €'],
        ['À savoir', 'Frais de bourse et de compensation parfois refacturés']
      ],
      modes: {
        plan:  { tiers: [{ upTo: 2500, fixed: 1.25, pct: 0 }, { upTo: null, fixed: 0, pct: 0.0005 }], max: 29, yearly: 0, pctYear: 0 },
        order: { tiers: [{ upTo: 2500, fixed: 1.25, pct: 0 }, { upTo: null, fixed: 0, pct: 0.0005 }], max: 29, yearly: 0, pctYear: 0 }
      }
    },
    {
      id: 'scalable-capital',
      name: 'Scalable Capital',
      kind: 'Néocourtier allemand',
      accounts: ['CTO'],
      site: 'https://fr.scalable.capital',
      company: { hq: "Munich (Allemagne)", size: "Fintech allemande en forte croissance", regulator: "Supervisée par la BaFin (Allemagne)", group: null },
      tax: { level: "À gérer toi-même", easy: false, text: "Courtier basé à l’étranger : pas d’IFU français. Prévois de déclarer le compte et tes revenus toi-même." },
      app: ["Plans d’épargne ETF automatiques", "Gestion automatisée (robo-advisor)", "Intérêts sur l’argent non investi", "Abonnement PRIME optionnel"],
      extra: "L’intérêt est surtout le tarif (plans gratuits), mais il n’y a pas de PEA.",
      // bonus = ce que le visiteur gagne · myGain = ce que tu gagnes · until = date de fin (AAAA-MM-JJ)
      affiliate: { url: null, code: null, bonus: null, myGain: null, until: null },
      verified: '2026-11-17',
      source: 'https://fr.scalable.capital',
      sourceLabel: 'Presse spécialisée',
      explain: 'Un néocourtier avec compte-titres uniquement. Ordres à 0,99 € et plans d’épargne gratuits, avec un abonnement PRIME en option.',
      avisKind: "condense",
      synth: "Pratique pour automatiser un petit plan, mais sans PEA tu restes sur le compte-titres, donc sans son avantage fiscal.",
      avis: "Les avis apprécient les plans d’épargne gratuits dès 1 € et la clarté de l’application. Ils notent aussi que l’ordre coûte 0,99 € en formule gratuite, que les ordres gratuits dès 250 € demandent PRIME+ (4,99 €/mois) ou un ETF « PRIME », et qu’il n’y a pas de PEA. Un test rappelle enfin que Scalable est à la fois ton courtier et la contrepartie sur sa place d’exécution par défaut.",
      pros: ['Plans d’épargne gratuits', 'Ordre à 0,99 €', 'Application claire'],
      cons: ['Pas de PEA', 'Compte-titres uniquement'],
      feesSummary: [["FREE Broker", "0 €/mois · 0,99 € par ordre (0 € sur les ETF PRIME dès 250 €)"], ["Plans d’épargne", "0 € dès 1 €"], ["PRIME+ Broker", "4,99 €/mois · ordres gratuits dès 250 €"], ["Compte", "CTO uniquement (pas de PEA)"]],
      modes: {
        plan:  { tiers: [{ upTo: null, fixed: 0, pct: 0 }], yearly: 0, pctYear: 0 },
        order: { tiers: [{ upTo: null, fixed: 0.99, pct: 0 }], yearly: 0, pctYear: 0 }
      }
    },
    {
      id: "etoro",
      name: "eToro",
      kind: "Plateforme sociale · copy trading",
      accounts: ["CTO"],
      site: "https://www.etoro.com/fr/",
      company: {"hq": "Tel Aviv (Israël) · entité européenne à Chypre", "size": "Plateforme internationale cotée au Nasdaq, des dizaines de millions d’utilisateurs", "regulator": "eToro (Europe) Ltd, régulée par la CySEC (Chypre)", "group": null},
      tax: {"level": "À gérer toi-même", "easy": false, "text": "Courtier étranger : pas d’IFU français. Tu dois déclarer toi-même le compte et tes revenus."},
      app: ["Actions, ETF et cryptos dans la même appli", "Copy trading : copier des investisseurs", "Portefeuilles thématiques (Smart Portfolios)", "Fil social et compte démo"],
      offer: {"bonus": "Aucune prime pour le filleul via le parrainage.", "mine": "Variable, selon les conditions en vigueur : vérifie dans l’appli.", "cond": "Vérification du compte, premier dépôt et premières transactions dans les 90 jours.", "until": null, "source": "https://www.etoro.com/fr/", "sourceLabel": "Site officiel", "verified": "2026-11-17", "note": "Je n’utilise plus eToro (frais élevés, voir « Ce que j’ai testé et arrêté »)."},
      affiliate: {"url": "https://etoro.tw/4zmMSJ7", "code": null, "bonus": null, "myGain": null, "until": null},
      verified: '2026-11-17',
      source: "https://cryptoast.fr/frais-etoro/",
      sourceLabel: "Presse spécialisée",
      explain: "Une plateforme sociale où l’on peut acheter des actions, des ETF et des cryptos, ou copier d’autres investisseurs. Les comptes sont en dollars.",
      avis: "Pratique pour découvrir, mais le copy trading et les CFD sont risqués. Les frais sont surtout cachés dans les écarts de prix et la conversion euro/dollar. Pas de PEA : pour de l’investissement simple à long terme, il existe moins cher.",
      pros: ["Interface simple et sociale", "Compte démo gratuit", "Large choix d’actifs"],
      cons: ["Frais de change et écarts de prix", "Pas de PEA ni IFU", "Le copy trading et les CFD sont risqués"],
      feesSummary: [["Actions", "1 à 2 $ par ordre selon la place (achat et vente)"], ["ETF", "0 € de commission (spread inclus dans le prix)"], ["Change EUR/USD", "Environ 0,5 %"], ["Garde / inactivité", "0 €"], ["Compte", "CTO uniquement (pas de PEA)"]],
      modes: {
        plan:  { tiers: [{"upTo": null, "fixed": 1, "pct": 0}], yearly: 0, pctYear: 0 },
        order: { tiers: [{"upTo": null, "fixed": 1, "pct": 0}], yearly: 0, pctYear: 0 }
      }
    },
    {
      id: "degiro",
      name: "DEGIRO",
      kind: "Courtier en ligne européen",
      accounts: ["CTO"],
      site: "https://www.degiro.fr/",
      company: {"hq": "Francfort (Allemagne) · fondé aux Pays-Bas", "size": "L’un des plus gros courtiers en ligne d’Europe", "regulator": "Banque allemande (flatexDEGIRO Bank), supervisée en Allemagne (BaFin)", "group": "Groupe flatexDEGIRO"},
      tax: {"level": "À gérer toi-même", "easy": false, "text": "Pas d’IFU français ni de PEA. Tu dois déclarer toi-même le compte et tes revenus."},
      app: ["Accès à de nombreuses places boursières", "Sélection d’ETF sans commission de courtage", "Aucun frais de garde ni d’inactivité", "Plateforme web et mobile sobre"],
      extra: "Pas de PEA ni d’IFU français.",
      affiliate: { url: null, code: null, bonus: null, myGain: null, until: null },
      verified: '2026-11-17',
      source: "https://selectra.info/finance/banques/degiro",
      sourceLabel: "Presse spécialisée",
      explain: "Un courtier low-cost pour investisseurs autonomes : environ 2 € par ordre sur les actions, et une sélection d’ETF sans commission de courtage (1 € de frais de gestion).",
      avisKind: "condense",
      synth: "Très compétitif pour un compte-titres, mais la fiscalité française est à gérer toi-même et il n’y a pas de PEA.",
      avis: "Les avis mettent en avant des frais bas (1 € sur la sélection principale d’ETF négociée via Tradegate, 2 € sur les actions), aucun droit de garde et un très large choix de places. Côté critiques : pas de PEA ni d’IFU français, des frais de connexion sur certaines bourses, un change à 0,25 % et une interface jugée austère.",
      pros: ["Frais bas", "Pas de droit de garde", "Large choix de places boursières"],
      cons: ["Pas de PEA ni d’assurance vie", "Pas d’IFU français", "Interface un peu austère"],
      feesSummary: [["Actions Euronext et USA", "2 € par ordre (1 € de courtage + 1 € de gestion)"], ["Sélection principale d’ETF (Tradegate)", "1 € par ordre (frais de gestion seulement)"], ["Autres ETF", "Environ 3 € par ordre"], ["Change automatique", "0,25 % · pas de garde ni d’inactivité"]],
      modes: {
        plan:  { tiers: [{"upTo": null, "fixed": 1, "pct": 0}], yearly: 0, pctYear: 0 },
        order: { tiers: [{"upTo": null, "fixed": 2, "pct": 0}], yearly: 0, pctYear: 0 }
      }
    },
    {
      id: "xtb",
      name: "XTB",
      kind: "Courtier polonais · PEA",
      accounts: ["CTO", "PEA"],
      site: "https://www.xtb.com/fr",
      company: {"hq": "Varsovie (Pologne) · succursale à Paris-La Défense", "size": "Courtier coté à la bourse de Varsovie, présent dans de nombreux pays", "regulator": "Supervisé en Pologne (KNF) et succursale en France", "group": "XTB S.A."},
      tax: {"level": "À gérer toi-même", "easy": false, "text": "Compte-titres : pas d’IFU au sens strict, déclaration à faire toi-même. Pour le PEA, vérifie le fonctionnement fiscal sur le site de XTB."},
      app: ["Plateforme xStation 5 très complète", "PEA lancé récemment, ETF éligibles", "Plus de 3 000 actions et plusieurs centaines d’ETF", "Compte démo"],
      extra: "À éviter : les CFD, très risqués pour un débutant.",
      affiliate: { url: null, code: null, bonus: null, myGain: null, until: null },
      verified: '2026-11-17',
      source: "https://pea.fr/courtiers/xtb/",
      sourceLabel: "Presse spécialisée",
      explain: "Un courtier avec 0 % de commission sur actions et ETF jusqu’à 100 000 € de transactions par mois, avec un PEA et une plateforme très complète.",
      avisKind: "condense",
      synth: "Le moins cher sur la commission, mais pense au change et reste sur les ETF : les CFD ne sont pas faits pour investir sur le long terme.",
      avis: "Les avis soulignent le 0 % de commission jusqu’à 100 000 € par mois, un PEA sans frais de courtage et une plateforme xStation jugée solide. Les réserves : 0,5 % de change, 10 € par mois d’inactivité après 12 mois sans transaction, une forte présence de CFD et une garantie des investisseurs plus faible (Pologne).",
      pros: ["0 % de commission (sous 100 000 €/mois)", "PEA disponible", "Pas de droits de garde"],
      cons: ["Plateforme orientée trading et CFD", "Frais d’inactivité de 10 €/mois après 12 mois", "Garantie des investisseurs limitée", "Change à 0,5 %"],
      feesSummary: [["Actions et ETF", "0 % jusqu’à 100 000 €/mois, puis 0,2 % (min. 10 €)"], ["Change (devises)", "0,5 %"], ["Garde / inactivité", "Pas de droits de garde. 10 €/mois si aucune transaction pendant 12 mois"], ["Comptes", "CTO et PEA"]],
      modes: {
        plan:  { tiers: [{"upTo": null, "fixed": 0, "pct": 0}], yearly: 0, pctYear: 0 },
        order: { tiers: [{"upTo": null, "fixed": 0, "pct": 0}], yearly: 0, pctYear: 0 }
      }
    },
    {
      id: "revolut",
      name: "Revolut",
      kind: "Néobanque · investissement",
      accounts: ["CTO"],
      site: "https://www.revolut.com/fr-FR/",
      company: {"hq": "Londres (Royaume-Uni) · entité européenne en Lituanie", "size": "Plus de 60 millions de clients dans le monde, environ 5 millions en France", "regulator": "Revolut Securities Europe UAB, agréée en Lituanie", "group": "Revolut"},
      tax: {"level": "À gérer toi-même", "easy": false, "text": "Pas de PEA ni d’IFU français. Tu dois déclarer toi-même le compte et tes revenus."},
      app: ["Compte courant, carte et épargne", "Investissement en actions et ETF", "Plans d’investissement ETF sans commission", "Cryptos et devises"],
      offer: {"myTake": "Extrêmement facile, et les gains sont importants : entre 10 et 200 € selon les périodes. J’ai gagné 70 € à chaque fois.", "bonus": "Aucune prime garantie pour toi : la récompense va au parrain.", "mine": "Jusqu’à 80 € par filleul actif selon la campagne.", "cond": "Inscription via le lien, vérification d’identité, carte commandée et premiers paiements éligibles avant la date limite.", "until": null, "source": "https://www.revolut.com/fr-FR/", "sourceLabel": "Site officiel", "verified": "2026-11-17"},
      affiliate: {"url": "https://revolut.com/referral/?referral-code=august6702!NOV1-26-VR-FR-SAV-CTRL&geo-redirect", "code": "august6702", "bonus": null, "myGain": null, "until": null},
      verified: '2026-11-17',
      source: "https://www.moneyvox.fr/epargne/revolut/bourse-en-ligne",
      sourceLabel: "Presse spécialisée",
      explain: "Une néobanque qui permet aussi d’investir en actions et ETF depuis la même application, avec des plans d’investissement ETF sans commission.",
      avis: "Pratique si tu es déjà client, mais les frais dépendent de ta formule d’abonnement et il n’y a pas de PEA. Je le vois comme un complément, pas comme mon outil principal pour investir.",
      pros: ["Tout dans une seule appli", "Plans ETF sans commission", "Pas de frais d’inactivité"],
      cons: ["Pas de PEA", "Frais selon la formule d’abonnement", "Choix d’actifs plus limité"],
      feesSummary: [["Plans d’investissement ETF", "0 € de commission"], ["Ordres libres", "1 € par ordre au-delà du quota gratuit. Depuis le 17/11/2026 : 0 ordre gratuit en Standard et Plus, 5 en Premium, 10 en Metal et Ultra"], ["Abonnement", "Standard gratuit, formules payantes en option"], ["Compte", "CTO uniquement"]],
      modes: {"plan": {"tiers": [{"upTo": null, "fixed": 0, "pct": 0}], "yearly": 0, "pctYear": 0}, "order": {"tiers": [{"upTo": null, "fixed": 1, "pct": 0}], "yearly": 0, "pctYear": 0}}
    },
    {
      id: "trading-212",
      name: "Trading 212",
      kind: "Courtier européen sans commission",
      accounts: ["CTO"],
      site: "https://www.trading212.com/fr",
      company: {"hq": "Sofia (Bulgarie) · fondé en 2004", "size": "Plusieurs millions de clients en Europe", "regulator": "Trading 212 Markets Ltd (Chypre), régulée par la CySEC", "group": null},
      tax: {"level": "À gérer toi-même", "easy": false, "text": "Pas d’IFU français ni de PEA. Récapitulatif annuel fourni, mais tu dois déclarer toi-même le compte et tes revenus."},
      app: ["Actions et ETF sans commission", "Actions fractionnées dès 1 €", "« Pies » : portefeuilles automatiques", "Compte démo gratuit"],
      extra: "Pas de PEA ni d’IFU français.",
      affiliate: { url: null, code: null, bonus: null, myGain: null, until: null },
      verified: '2026-11-17',
      source: "https://newtrading.fr/avis-trading-212",
      sourceLabel: "Presse spécialisée",
      explain: "Un courtier sans commission sur les actions et ETF, avec actions fractionnées et portefeuilles automatiques. Compte-titres uniquement.",
      avisKind: "condense",
      synth: "Simple et peu cher pour un compte-titres, mais sans PEA : n’utilise que le compte Invest et laisse les CFD de côté.",
      avis: "Les avis apprécient le zéro commission, les actions fractionnées dès 1 € et le change à 0,15 %. Les réserves reviennent sur l’absence de PEA et d’IFU français, et sur la présence de CFD, avec une part élevée de comptes CFD perdants selon la plateforme elle-même.",
      pros: ["0 € de commission", "Actions fractionnées", "Application simple"],
      cons: ["Pas de PEA ni d’IFU", "Change à 0,15 %", "CFD disponibles : à éviter pour débuter"],
      feesSummary: [["Actions et ETF", "0 € de commission"], ["Change", "0,15 %"], ["Garde / inactivité / retrait", "0 €"], ["Compte", "CTO uniquement"]],
      modes: {
        plan:  { tiers: [{"upTo": null, "fixed": 0, "pct": 0}], yearly: 0, pctYear: 0 },
        order: { tiers: [{"upTo": null, "fixed": 0, "pct": 0}], yearly: 0, pctYear: 0 }
      }
    },
    {
          "id": "yomoni",
          "name": "Yomoni",
          "kind": "Gestion pilotée (société de gestion)",
          "accounts": [
                "Assurance vie",
                "PEA",
                "PER",
                "CTO"
          ],
          "site": "https://www.yomoni.fr",
          "company": {
                "hq": "Paris (France)",
                "size": "Plus de 80 000 clients et plus de 2 milliards d’euros sous gestion",
                "regulator": "Société de gestion de portefeuille agréée par l’AMF",
                "group": null
          },
          "tax": {
                "level": "Simple",
                "easy": true,
                "text": "Contrat ou compte français : les informations sont transmises à l’administration fiscale et ta déclaration est pré-remplie."
          },
          "app": [
                "Gestion 100 % déléguée, tu ne fais rien",
                "10 profils de risque, de prudent à dynamique",
                "Assurance vie, PEA, PER et compte-titres",
                "Application mobile"
          ],
          "affiliate": {
                "url": null,
                "code": null,
                "bonus": null,
                "myGain": null,
                "until": null
          },
          "verified": "2026-11-17",
          "source": "https://letraderdudimanche.com/avis-yomoni",
          "sourceLabel": "Presse spécialisée",
          "explain": "Un robo-advisor français : tu choisis un profil de risque, Yomoni investit dans des ETF et rééquilibre pour toi. Zéro frais d’entrée, de sortie ni d’arbitrage.",
          "avisKind": "condense",
          "synth": "Intéressant si tu veux vraiment ne rien gérer. Si tu es prêt à acheter un ETF toi-même chaque mois, tu paieras beaucoup moins cher.",
          "avis": "Les avis saluent la simplicité, l’absence de frais d’entrée et de sortie, la gamme complète (assurance vie, PEA, PER, CTO) et des frais annoncés à 1,6 % par an tout compris, soit moins qu’une gestion pilotée bancaire. Les réserves : ticket minimum de 1 000 € (5 000 € sur PEA et CTO), des frais bien supérieurs à ceux d’un ETF acheté soi-même, et pas de choix des ETF.",
          "pros": [
                "Gestion déléguée à base d’ETF",
                "Pas de frais d’entrée, de sortie ni d’arbitrage",
                "Plusieurs enveloppes (assurance vie, PEA, PER)"
          ],
          "cons": [
                "Environ 1,6 % de frais par an, tout compris",
                "Ticket de 1 000 € (5 000 € sur PEA et CTO)",
                "Tu ne choisis pas les ETF"
          ],
          "feesSummary": [
                [
                      "Frais de gestion",
                      "1,6 % par an maximum, tout compris (mandat, contrat et ETF) ; 1,2 % à 1,6 % selon l’encours"
                ],
                [
                      "Frais d’entrée, sortie, arbitrage",
                      "0 €"
                ],
                [
                      "Ticket d’entrée",
                      "1 000 € (5 000 € pour le PEA et le CTO)"
                ],
                [
                      "Versements",
                      "Libres ou programmés dès 50 €"
                ]
          ],
          "modes": {
                "plan": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.016
                },
                "order": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.016
                }
          }
    },
    {
          "id": "ramify",
          "name": "Ramify",
          "kind": "Gestion pilotée (plateforme patrimoniale)",
          "accounts": [
                "Assurance vie",
                "PEA",
                "PER"
          ],
          "site": "https://www.ramify.fr",
          "company": {
                "hq": "Paris (France)",
                "size": "Fintech lancée en 2021, annonce plus de 100 000 utilisateurs",
                "regulator": "Courtier et société de gestion régulés ; contrats assurés par des assureurs partenaires (Generali, Apicil, Suravenir)",
                "group": null
          },
          "tax": {
                "level": "Simple",
                "easy": true,
                "text": "Contrat ou compte français : les informations sont transmises à l’administration fiscale et ta déclaration est pré-remplie."
          },
          "app": [
                "Assurance vie, PER et PEA en gestion pilotée",
                "Gestion à base d’ETF",
                "Accès aussi à la SCPI, au private equity et aux produits structurés",
                "Conseillers privés joignables"
          ],
          "affiliate": {
                "url": null,
                "code": null,
                "bonus": null,
                "myGain": null,
                "until": null
          },
          "verified": "2026-11-17",
          "source": "https://www.ramify.fr/comparatif/vs-yomoni",
          "sourceLabel": "Comparatif de Ramify (à lire avec recul)",
          "explain": "Une plateforme française de gestion pilotée. Elle propose assurance vie, PER et PEA, avec des ETF choisis par l’équipe de gestion, et d’autres produits (SCPI, private equity) pour les gros patrimoines.",
          "avisKind": "condense",
          "synth": "Une très bonne option de gestion déléguée en assurance vie ou en PER. Demande le détail des frais complet avant de te lancer.",
          "avis": "Les avis la placent régulièrement en tête des gestions pilotées pour ses frais compétitifs et sa gamme étendue. Elle affiche aussi de bonnes performances sur des profils dynamiques depuis 2021, mais ce sont des performances passées, qui ne garantissent rien. Les réserves : le PEA est récent, certains frais globaux sont difficiles à reconstituer sans décomposition écrite, et les performances mises en avant sont celles du profil le plus risqué.",
          "pros": [
                "Gestion pilotée compétitive, ETF",
                "Assurance vie, PER et PEA",
                "Pas de frais d’entrée"
          ],
          "cons": [
                "Frais de gestion de 1 % à 1,4 % par an, plus ceux des supports",
                "Performances passées non garanties",
                "Surtout pertinent pour un budget moyen ou élevé"
          ],
          "feesSummary": [
                [
                      "Frais de gestion",
                      "1,0 % à 1,4 % par an (assurance vie, PER, PEA), hors frais des supports"
                ],
                [
                      "Frais d’entrée, versement, arbitrage, sortie",
                      "0 €"
                ],
                [
                      "Ticket d’entrée",
                      "À partir de 1 000 €"
                ],
                [
                      "Transfert de PEA",
                      "Frais de transfert entrant remboursés (dès 25 000 €)"
                ]
          ],
          "modes": {
                "plan": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.012
                },
                "order": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.012
                }
          }
    },
    {
          "id": "nalo",
          "name": "Nalo",
          "kind": "Gestion pilotée (robo-advisor)",
          "accounts": [
                "Assurance vie",
                "PER"
          ],
          "site": "https://www.nalo.fr",
          "company": {
                "hq": "Paris (France)",
                "size": "Fintech fondée en 2017",
                "regulator": "Contrats assurés par Generali Vie, gestion sous mandat",
                "group": null
          },
          "tax": {
                "level": "Simple",
                "easy": true,
                "text": "Contrat ou compte français : les informations sont transmises à l’administration fiscale et ta déclaration est pré-remplie."
          },
          "app": [
                "Gestion pilotée par projet (retraite, achat, transmission…)",
                "Sécurisation progressive à l’approche de l’échéance",
                "Assurance vie et PER",
                "Fonds euros disponible"
          ],
          "affiliate": {
                "url": null,
                "code": null,
                "bonus": null,
                "myGain": null,
                "until": null
          },
          "verified": "2026-11-17",
          "source": "https://www.signal-alpha.fr/avis-nalo/",
          "sourceLabel": "Presse spécialisée",
          "explain": "Un robo-advisor spécialisé dans l’assurance vie en gestion pilotée, personnalisée par projet : plus ton échéance approche, plus le portefeuille est sécurisé.",
          "avisKind": "condense",
          "synth": "Pratique pour épargner par objectifs. Pas de PEA, et plus cher qu’une gestion libre.",
          "avis": "Les avis apprécient l’approche par projet, la sécurisation progressive et l’interface pédagogique. Côté coûts, les sites détaillent environ 0,85 % pour le contrat, 0,55 % pour le mandat de gestion et environ 0,25 % de frais d’ETF, soit autour de 1,65 % par an au total. Les réserves : ticket de 1 000 €, des frais standards pour de la gestion pilotée, pas de PEA, et un contrat Generali sans choix libre des supports.",
          "pros": [
                "Gestion par projet avec sécurisation",
                "Interface claire et pédagogique",
                "Assureur Generali"
          ],
          "cons": [
                "Environ 1,65 % de frais par an, tout compris",
                "Pas de PEA",
                "Ticket de 1 000 €"
          ],
          "feesSummary": [
                [
                      "Frais du contrat (assureur)",
                      "0,85 % par an"
                ],
                [
                      "Frais de gestion pilotée (mandat)",
                      "0,55 % par an"
                ],
                [
                      "Frais des ETF",
                      "Environ 0,25 % par an"
                ],
                [
                      "Total indicatif",
                      "Environ 1,65 % par an"
                ]
          ],
          "modes": {
                "plan": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.014
                },
                "order": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.014
                }
          }
    },
    {
          "id": "linxea",
          "name": "Linxea",
          "kind": "Courtier en assurance vie en ligne",
          "accounts": [
                "Assurance vie",
                "PER"
          ],
          "site": "https://www.linxea.com",
          "company": {
                "hq": "Paris (France)",
                "size": "Plus de 200 000 clients",
                "regulator": "Courtier en assurance ; contrats assurés par Spirica, Suravenir, Generali ou Apicil",
                "group": null
          },
          "tax": {
                "level": "Simple",
                "easy": true,
                "text": "Contrat ou compte français : les informations sont transmises à l’administration fiscale et ta déclaration est pré-remplie."
          },
          "app": [
                "Plusieurs contrats d’assurance vie (Spirit 2, Avenir 2, Vie, Zen)",
                "Choix de milliers de supports : ETF, SCPI, fonds euros",
                "PER et SCPI aussi disponibles",
                "Souscription 100 % en ligne"
          ],
          "affiliate": {
                "url": null,
                "code": null,
                "bonus": null,
                "myGain": null,
                "until": null
          },
          "verified": "2026-11-17",
          "source": "https://invesse.fr/epargne/linxea-spirit-2-vs-linxea-avenir-2/",
          "sourceLabel": "Presse spécialisée",
          "explain": "Le courtier en assurance vie en ligne le plus connu : tu choisis toi-même tes ETF, en gestion libre, avec des frais de contrat très bas.",
          "avisKind": "condense",
          "synth": "Le meilleur terrain de jeu pour une assurance vie en ETF si tu veux garder la main. Pas de PEA ici.",
          "avis": "Les avis la classent parmi les contrats d’assurance vie en ligne les moins chers : 0,50 % par an sur Spirit 2 et 0,60 % sur Avenir 2, 0 % de frais d’entrée, avec un large choix d’ETF et de SCPI. Les réserves : il faut choisir soi-même ses supports (sauf gestion pilotée en option, plus chère), l’interface est jugée correcte mais pas la plus moderne, et les rendements des fonds euros varient selon l’assureur.",
          "pros": [
                "Frais de contrat très bas",
                "Large choix d’ETF et de SCPI",
                "0 % de frais d’entrée"
          ],
          "cons": [
                "Pas de PEA",
                "Tu dois choisir tes supports toi-même",
                "Les fonds euros varient selon le contrat"
          ],
          "feesSummary": [
                [
                      "Frais de gestion du contrat",
                      "0,50 % par an (Spirit 2), 0,60 % (Avenir 2), sur les unités de compte"
                ],
                [
                      "Frais d’entrée",
                      "0 €"
                ],
                [
                      "Frais des ETF",
                      "En plus, ex. 0,25 % pour un ETF monde"
                ],
                [
                      "Ticket d’entrée",
                      "Dès 100 € (Avenir 2) ou 500 € (Spirit 2)"
                ]
          ],
          "modes": {
                "plan": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.005
                },
                "order": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.005
                }
          }
    },
    {
          "id": "hello-bank",
          "name": "Hello bank!",
          "kind": "Banque en ligne (groupe BNP Paribas)",
          "accounts": [
                "CTO",
                "PEA",
                "Assurance vie"
          ],
          "site": "https://www.hellobank.fr",
          "company": {
                "hq": "Paris (France)",
                "size": "Banque en ligne d’environ 1 million de clients",
                "regulator": "Banque française (ACPR), dépôts garantis",
                "group": "Groupe BNP Paribas"
          },
          "tax": {
                "level": "Simple",
                "easy": true,
                "text": "Contrat ou compte français : les informations sont transmises à l’administration fiscale et ta déclaration est pré-remplie."
          },
          "app": [
                "Compte courant et carte",
                "PEA, compte-titres et assurance vie",
                "Offres Start et Active selon ton profil",
                "Application mobile"
          ],
          "affiliate": {
                "url": null,
                "code": null,
                "bonus": null,
                "myGain": null,
                "until": null
          },
          "verified": "2026-11-17",
          "source": "https://www.ideal-investisseur.fr/pea/hello-bank-11.html",
          "sourceLabel": "Presse spécialisée",
          "explain": "La banque en ligne de BNP Paribas : un cadre bancaire solide, des tarifs de bourse plus doux que dans les agences BNP, avec deux offres selon ton activité.",
          "avisKind": "condense",
          "synth": "Solide mais chère. À regarder seulement si tu es déjà client du groupe BNP et que tu veux tout au même endroit.",
          "avis": "Les avis la jugent plus avantageuse que BNP Paribas pour la bourse, avec un PEA accessible aux ETF et une grande banque derrière. Mais le courtage reste au plafond légal du PEA (0,5 %), et l’offre Start prélève des droits de garde (environ 0,3 % par an). Face à Trade Republic, Bourse Direct ou BoursoBank, elle est moins compétitive pour un petit investisseur.",
          "pros": [
                "Banque du groupe BNP, très solide",
                "PEA, CTO et assurance vie",
                "Offres Start et Active"
          ],
          "cons": [
                "Courtage au plafond légal du PEA (0,5 %)",
                "Droits de garde sur l’offre Start",
                "Moins compétitive que les courtiers en ligne"
          ],
          "feesSummary": [
                [
                      "Courtage PEA",
                      "0,5 % au plus (plafond légal) ; 0,48 % au-delà de 3 000 €"
                ],
                [
                      "Droits de garde (offre Start)",
                      "Environ 0,3 % par an sur l’encours"
                ],
                [
                      "Offre Active",
                      "Tarif forfaitaire selon ton activité, à vérifier"
                ],
                [
                      "Abonnement",
                      "Aucun"
                ]
          ],
          "modes": {
                "plan": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0.005
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.003
                },
                "order": {
                      "tiers": [
                            {
                                  "upTo": null,
                                  "fixed": 0,
                                  "pct": 0.005
                            }
                      ],
                      "yearly": 0,
                      "pctYear": 0.003
                }
          }
    }
  ],

  /* Bons plans (primes de bienvenue, cashback…). Ajoute des objets :
     { title:'…', text:'…', url:'https://…', sponsored:true }          */
  tools: [
    {
          "id": "finary",
          "name": "Finary",
          "kind": "Application de suivi de patrimoine",
          "site": "https://finary.com/fr",
          "d": "Tu connectes tes comptes (banque, courtier, assurance vie, crypto, immobilier) et tu vois tout ton patrimoine au même endroit, avec la répartition et les frais cachés de tes placements.",
          "tiers": "Version gratuite limitée (3 synchronisations), formules payantes (Plus, Pro) pour la synchronisation illimitée et l’analyse des frais. Les prix varient selon la formule et la durée : vérifie sur le site.",
          "cond": "Les avis vantent la vue d’ensemble et le scanner de frais cachés, jugé la fonction phare. Les critiques portent sur une version gratuite trop limitée, des reconnexions de comptes parfois capricieuses, et un abonnement premium jugé cher (de l’ordre de 150 € par an pour la formule Plus selon les sources). Finary propose aussi un contrat d’assurance vie dont les frais ont été abaissés à 0,75 % par an en mars 2026.",
          "myTake": "J’utilise Finary pour gérer mon patrimoine et mon budget.",
          "pros": [
                "Tout ton patrimoine au même endroit",
                "Analyse des frais cachés",
                "Application claire"
          ],
          "cons": [
                "Version gratuite limitée",
                "Abonnement payant assez cher",
                "Reconnexions de comptes parfois nécessaires"
          ],
          "verdict": "Très utile pour garder une vue d’ensemble, mais ne paie l’abonnement que si tu as plusieurs comptes à suivre.",
          "affiliate": {
                "url": "https://finary.com/referral/T22MW2",
                "code": null,
                "bonus": "1 mois de Premium gratuit",
                "myGain": null,
                "until": null
          },
          "verified": "2026-11-17",
          "source": "https://www.primebanque.fr/finary/avis/",
          "sourceLabel": "Presse spécialisée"
    }
  ],
  deals: []
};
