/* =====================================================================
   BOURSEENVRAI : INVESTISSEMENTS ALTERNATIFS  (modifiable)
   modes = les grandes familles (expliquées simplement)
   apps  = plateformes concrètes, avec l'essentiel : à quoi ça sert, ticket,
           frais, risques. Infos générales relevées fin 2026 : à vérifier sur
           le site officiel avant toute décision (les offres évoluent).
   Ce n'est pas un conseil. Ces placements sont plus risqués et moins
   liquides que des ETF : à réserver à une petite part de ton épargne.
   ===================================================================== */
window.SITE_ALT = {
  updated: '2026-11-16',
  warn: 'Les placements alternatifs sont plus risqués, plus chers et souvent bloqués plusieurs années. Une perte totale est possible. À réserver à une petite part de ton épargne, après avoir construit une base simple (ETF diversifiés).',
  modes: [
    {
      id: 'pe', n: 'Private equity', tag: 'Entreprises non cotées',
      what: 'Investir dans des entreprises qui ne sont pas en bourse, directement ou via des fonds, pour les aider à grandir puis les revendre.',
      how: 'Souvent via des fonds (FCPR, FPCI, ELTIF) ou des plateformes qui y donnent accès.',
      ticket: 'De 1 000 € à 100 000 € et plus', liquidity: 'Bloqué 5 à 12 ans', risk: 5, fees: 4,
      pros: ['Potentiel de rendement supérieur à moyen terme', 'Accès à l’économie réelle non cotée'],
      cons: ['Argent bloqué longtemps', 'Frais élevés (gestion + performance)', 'Peu de transparence, risque de perte en capital'],
      who: 'Investisseurs patients qui ont déjà un patrimoine diversifié.'
    },
    {
      id: 'crowdfunding', n: 'Crowdfunding (prêt aux entreprises)', tag: 'Financement participatif',
      what: 'Tu prêtes de l’argent à des projets (immobilier, énergie renouvelable, PME) via une plateforme, contre des intérêts.',
      how: 'Obligations ou prêts à durée fixe (souvent 12 à 48 mois), intérêts versés régulièrement ou à la fin.',
      ticket: 'De 1 € à 1 000 € selon la plateforme', liquidity: 'Bloqué 1 à 5 ans', risk: 5, fees: 2,
      pros: ['Rendements affichés élevés (souvent 8 à 12 % brut)', 'Tickets d’entrée faibles', 'Projets concrets'],
      cons: ['Défauts de paiement et pertes possibles', 'Chaque projet peut échouer', 'Intérêts imposés à la flat tax', 'Rendement ≠ garanti'],
      who: 'Pour une petite part, répartie sur de nombreux projets.'
    },
    {
      id: 'immo', n: 'Immobilier (SCPI, immobilier fractionné)', tag: 'Pierre-papier',
      what: 'Tu détiens des parts d’un parc immobilier (bureaux, santé, logistique…) géré par une société, et tu perçois des loyers.',
      how: 'SCPI (société civile de placement immobilier) ou parts fractionnées de biens, sans gérer de locataires.',
      ticket: 'De 10 € à quelques centaines d’euros', liquidity: 'Plusieurs années recommandées', risk: 3, fees: 4,
      pros: ['Loyers réguliers', 'Aucune gestion locative', 'Diversification immobilière'],
      cons: ['Frais d’entrée parfois élevés (jusqu’à ~10 %)', 'Revente pas toujours rapide', 'Valeur des parts qui peut baisser', 'Loyers fiscalisés'],
      who: 'Ceux qui veulent une exposition immobilière sans acheter un bien.'
    },
    {
      id: 'collectibles', n: 'Objets de collection', tag: 'Art, montres, vins, cartes…',
      what: 'Tu achètes des parts d’objets rares (œuvres d’art, montres, whisky, cartes à collectionner) qui peuvent prendre de la valeur.',
      how: 'Souvent via des applications qui fractionnent les objets en parts achetables à partir de quelques dizaines d’euros.',
      ticket: 'À partir de ~50 €', liquidity: 'Dépend du marché de revente', risk: 4, fees: 4,
      pros: ['Ticket d’entrée faible', 'Diversification hors marchés financiers'],
      cons: ['Aucun revenu pendant la détention', 'Frais d’achat, de stockage et de revente', 'Valeur subjective, marché étroit', 'Revente incertaine'],
      who: 'Par passion, avec de petits montants.'
    },
    {
      id: 'metaux', n: 'Or et métaux précieux', tag: 'Valeur refuge',
      what: 'Tu détiens de l’or (physique ou via un ETC/ETF) pour te protéger de certaines crises et de l’inflation.',
      how: 'Pièces ou lingots, ou produits cotés qui suivent le cours de l’or.',
      ticket: 'Quelques dizaines d’euros', liquidity: 'Bonne (produits cotés)', risk: 3, fees: 2,
      pros: ['Souvent calme en période de crise', 'Simple à comprendre'],
      cons: ['Ne produit aucun revenu', 'Prix volatil sur de longues périodes', 'Fiscalité spécifique sur l’or physique'],
      who: 'Une petite part de diversification, pas un moteur de rendement.'
    },
    {
      id: 'crypto', n: 'Cryptomonnaies', tag: 'Actifs numériques',
      what: 'Monnaies et actifs numériques (Bitcoin, Ethereum…) échangés sur des plateformes.',
      how: 'Achat via une plateforme régulée ou via un courtier, avec ou sans conservation personnelle.',
      ticket: 'À partir de quelques euros', liquidity: 'Bonne mais très volatile', risk: 5, fees: 3,
      pros: ['Accessible 24h/24', 'Potentiel fort'],
      cons: ['Très forte volatilité (−70 % possible)', 'Arnaques et piratages fréquents', 'Valeur non adossée à des revenus', 'Fiscalité spécifique'],
      who: 'Seulement une très petite part, avec l’idée de pouvoir tout perdre.'
    },
    {
      id: 'foret', n: 'Forêts et terres', tag: 'Actifs réels',
      what: 'Tu investis dans des parcelles de forêt (groupements forestiers) ou des terres agricoles.',
      how: 'Parts de groupements forestiers (GFI, GFF) ou de sociétés foncières.',
      ticket: 'De quelques centaines à milliers d’euros', liquidity: 'Très faible, 10 ans et plus', risk: 3, fees: 3,
      pros: ['Actif réel et durable', 'Avantages fiscaux possibles (sous conditions)'],
      cons: ['Marché étroit, revente difficile', 'Rendement faible', 'Risques naturels (tempêtes, incendies)'],
      who: 'Investisseurs de très long terme, souvent pour la fiscalité ou la transmission.'
    }
  ],
  apps: [
    {
      id: 'moonfare', n: 'Moonfare', mode: 'Private equity', hq: 'Berlin (Allemagne)', site: 'https://www.moonfare.com/',
      d: 'Plateforme qui donne accès à des fonds de private equity d’acteurs institutionnels.',
      ticket: 'Autour de 50 000 à 100 000 € par fonds (certains produits plus bas)', fees: 'Frais du fonds (typiquement 2 % de gestion et 20 % de performance) + frais de plateforme (ordre de 0,5 à 0,75 % par an)', lock: '10 ans environ',
      for: 'Patrimoines déjà importants',
      pros: ['Accès à de grands fonds', 'Interface claire'], cons: ['Ticket très élevé', 'Frais cumulés élevés', 'Capital bloqué longtemps'],
      avisKind: "condense",
      cond: "Les avis décrivent une plateforme sérieuse qui donne accès au private equity à des particuliers fortunés, avec des tickets de 50 000 à 100 000 €. Ils notent des frais qui s’ajoutent à ceux des fonds (environ 0,5 à 0,75 % de plus que pour un institutionnel, selon sa direction), et une liquidité limitée à un marché secondaire semestriel.",
      verdict: 'Pas pour un petit budget : à connaître plutôt qu’à utiliser quand on débute.'
    },
    {
      id: 'splint', n: 'Splint Invest', mode: 'Objets de collection', hq: 'Zoug (Suisse)', site: 'https://www.splint.com/',
      d: 'Application qui fractionne des objets de luxe : art, montres, whisky, sacs, cartes de sport.',
      ticket: 'À partir de ~50 €', fees: 'Frais de plateforme à l’achat et à la sortie : à lire dans les fiches de chaque objet', lock: 'Selon l’objet, souvent 2 à 11 ans annoncés',
      for: 'Curieux qui veulent diversifier avec de petits montants',
      pros: ['Ticket très bas', 'Variété d’objets'], cons: ['Aucun revenu pendant la détention', 'Revente non garantie', 'Rendements historiques affichés ≠ futurs'],
      verdict: 'Ludique et accessible, mais à voir comme une petite part « plaisir », pas comme un pilier.',
      fav: true,
      affiliate: { url: 'https://splintinvest.onelink.me/n6C4/invite_fr', code: '873310070', bonus: null, myGain: null, until: null },
      offer: { bonus: "Bonus de bienvenue à investir : de 50 € (standard) à 100–150 € lors des périodes boostées.", mine: "Un bonus à investir pour le parrain aussi, variable.", cond: "Le bonus est à investir : il n’est pas retirable tel quel, et retirer son argent à court terme est quasiment impossible.", myTake: "Le plus simple pour toucher une prime : le bonus est très facile à obtenir et relativement important, sans engagement, mais il est à investir. Les parrainages m’ont permis d’obtenir plus de 1 000 € de bonus à investir. À garder plusieurs années.", verified: '2026-11-17', source: 'https://www.splint.com/', sourceLabel: 'Site officiel' }
    },
    {
      id: 'bricks', n: 'Bricks.co', mode: 'Immobilier fractionné', hq: 'France', site: 'https://www.bricks.co/',
      d: 'Plateforme d’immobilier fractionné et de financement participatif immobilier, accessible dès quelques euros.',
      ticket: 'À partir de 10 €', fees: 'Frais variables selon les produits : à lire dans le document d’information', lock: 'Plusieurs années',
      for: 'Débutants qui veulent tester l’immobilier à petits montants',
      pros: ['Ticket d’entrée très bas', 'Tout en ligne'], cons: ['Risque de perte en capital', 'Revente pas toujours rapide', 'Performances annoncées non garanties'],
      avisKind: "condense",
      cond: "Les avis sont plutôt positifs sur l’accessibilité (dès 10 €), la simplicité de l’application et le marché secondaire pour revendre ses parts. Les réserves : la revente n’est jamais garantie, l’acheteur paie 3 % de frais, et plusieurs articles récents évoquent des projets en difficulté et des questions sur la solidité du modèle.",
      verdict: 'Accessible pour essayer, avec de petits montants.'
    },
    {
      id: 'homunity', n: 'Homunity', mode: 'Crowdfunding immobilier', hq: 'Grenoble (France)', site: 'https://www.homunity.com/',
      d: 'Plateforme de financement participatif immobilier (promotion), qui propose aussi du fractionné et des SCPI.',
      ticket: 'À partir de 1 000 €', fees: 'Pas de frais d’entrée sur le crowdfunding pour l’investisseur', lock: '12 à 36 mois en général',
      for: 'Ceux qui veulent des prêts immobiliers à durée fixe',
      pros: ['Acteur établi', 'Projets sélectionnés'], cons: ['Ticket 1 000 €', 'Défauts de paiement possibles', 'Marché immobilier cyclique'],
      avisKind: "condense",
      cond: "Les avis en font une référence du secteur, avec plus de 600 projets financés. Des comparatifs récents relèvent toutefois une part importante de projets en retard (76 projets de plus de 6 mois d’après un comparatif d’octobre 2026) et des rendements jugés moyens face à la concurrence.",
      verdict: 'Une référence du secteur, mais le risque de défaut est réel : diversifie sur plusieurs projets.'
    },
    {
      id: 'anaxago', n: 'Anaxago', mode: 'Crowdfunding et investissement', hq: 'Paris (France)', site: 'https://www.anaxago.com/',
      d: 'Plateforme historique : immobilier, entreprises innovantes et solutions d’épargne.',
      ticket: 'Souvent à partir de 1 000 €', fees: 'Variables selon les produits', lock: 'Selon les projets',
      for: 'Investisseurs qui veulent mélanger immobilier et innovation',
      pros: ['Plateforme pionnière', 'Plusieurs types de supports'], cons: ['Risque de perte en capital', 'Taux de projets en difficulté à surveiller'],
      avisKind: "condense",
      cond: "Les avis la présentent comme une plateforme historique, plus chère à l’entrée (1 000 €) et avec des durées de projet plus longues (plus de 28 mois en moyenne selon un avis). Les comparatifs la placent dans la même zone de retards que ses concurrentes : c’est à toi de lire ses indicateurs publiés.",
      verdict: 'Lis les indicateurs publiés par la plateforme (défauts, retards, projets en procédure) avant d’investir.'
    },
    {
      id: 'lpb', n: 'La Première Brique', mode: 'Crowdfunding immobilier', hq: 'France', site: 'https://www.lapremierebrique.fr/',
      d: 'Plateforme immobilière qui accepte de très petits tickets pour financer des projets.',
      ticket: 'À partir de 1 €', fees: 'Pas de frais d’entrée pour l’investisseur sur les prêts', lock: 'Quelques années',
      for: 'Pour tester avec de très petits montants',
      pros: ['Ticket symbolique', 'Idéal pour apprendre'], cons: ['Risque de défaut', 'Rendements non garantis'],
      avisKind: "condense",
      cond: "Souvent citée en favorite des communautés d’investisseurs : dès 1 €, sans frais d’entrée. Mais les chiffres publiés sont moins rassurants qu’on ne le dit : un comparatif relève 9,24 % de taux de défaut publié, et 15,92 % sur les projets de 2023, avec des dizaines de projets en procédure.",
      verdict: 'Idéal pour tester sans se mettre en danger : commence tout petit.'
    },
    {
      id: 'enerfip', n: 'Enerfip', mode: 'Crowdfunding énergies renouvelables', hq: 'France', site: 'https://www.enerfip.eu/',
      d: 'Financement de projets d’énergies renouvelables (solaire, éolien…) via des prêts.',
      ticket: 'À partir de ~10 €', fees: 'Pas de frais d’entrée pour l’investisseur', lock: '1 à 5 ans',
      for: 'Ceux qui veulent un investissement à impact',
      pros: ['Projets concrets et utiles', 'Tickets bas'], cons: ['Risque de défaut', 'Dépend des projets et de la réglementation'],
      avisKind: "condense",
      cond: "Les avis soulignent la transparence et l’impact des projets d’énergies renouvelables (dès 10 €), pour un rendement historique d’environ 6,5 % selon un blog spécialisé. Plusieurs investisseurs signalent toutefois davantage de retards depuis 2026, et la marque Lumo doit migrer vers Enerfip fin 2026.",
      verdict: 'Un angle original : l’impact est réel, le risque aussi.'
    },
    {
      id: 'lita', n: 'Lita.co', mode: 'Crowdfunding à impact', hq: 'France', site: 'https://www.lita.co/',
      d: 'Plateforme de financement participatif orientée projets à impact (entreprises, associations, transition).',
      ticket: 'À partir de ~20 €', fees: 'Pas de frais d’entrée pour l’investisseur', lock: '1 à 5 ans',
      for: 'Investisseurs qui veulent financer des projets à impact',
      pros: ['Projets à impact', 'Tickets bas'], cons: ['Risque de défaut', 'Rendements modestes selon les projets'],
      avisKind: "condense",
      cond: "Je n’ai trouvé que peu d’avis détaillés. Les comparatifs la rangent parmi les plateformes à impact social et environnemental, avec un ticket autour de 100 €, au même titre qu’Enerfip ou MiiMOSA.",
      verdict: 'Pertinent si le sens compte autant que le rendement.'
    },
    {
      id: 'wiseed', n: 'WiSEED', mode: 'Equity et immobilier', hq: 'France', site: 'https://www.wiseed.com/',
      d: 'Plateforme pionnière qui finance start-up, immobilier et énergie.',
      ticket: 'À partir de 100 €', fees: 'Variables selon les produits', lock: 'Plusieurs années',
      for: 'Investisseurs avertis',
      pros: ['Variété de projets'], cons: ['Perte en capital notable sur certains projets', 'Plateforme à étudier avec prudence'],
      avisKind: "condense",
      cond: "Les avis la présentent comme une pionnière (2008, plus de 900 projets) avec un rendement net de risque d’environ 7,4 % début 2026 selon un blog spécialisé. Les mêmes sources rappellent que ses projets immobiliers ont souffert ces dernières années.",
      verdict: 'Les chiffres de défauts publiés sont élevés : à aborder avec beaucoup de prudence.'
    },
    {
      id: 'scpi', n: 'SCPI (via un courtier ou une assurance vie)', mode: 'Immobilier SCPI', hq: 'France', site: 'https://www.amf-france.org/',
      d: 'Parts de sociétés immobilières gérées par des sociétés de gestion, achetables via assurance vie, banque ou plateformes.',
      ticket: 'De 200 € à ~1 000 €', fees: 'Frais de souscription souvent entre 8 et 12 % + frais de gestion annuels', lock: '8 à 10 ans recommandés',
      for: 'Ceux qui veulent des loyers sans gérer de locataire',
      pros: ['Loyers réguliers', 'Diversification immobilière'], cons: ['Frais d’entrée élevés', 'Revente pas immédiate', 'Valeur des parts non garantie'],
      avisKind: "condense",
      cond: "Les avis retiennent des revenus réguliers et la mutualisation. Les critiques les plus courantes : des frais d’entrée parfois proches de 10 %, une revente lente et une valeur des parts qui peut baisser.",
      verdict: 'Compare les frais d’entrée et le taux de distribution, et regarde les SCPI via assurance vie pour limiter certains frais.'
    }
  ]
};
