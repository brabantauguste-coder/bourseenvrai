/* =====================================================================
   BOURSEENVRAI : CONTENU DE LA FORMATION  (modifiable à la main)
   Chaque chapitre a :
     simple   = la version « express » pour débutants (3 à 4 idées)
     sections = la version complète (titre h + paragraphe p)
     key      = ce qu'il faut retenir
   Contenu pédagogique général, pas un conseil personnalisé.
   ===================================================================== */
window.SITE_FORMATION = {
  /* Vidéos : on les fera ensemble. Quand une vidéo est prête, ajoute son lien (TikTok) dans `url`. */

  /* Cours « pour aller plus loin » : même structure que les chapitres (simple = version express). */
  advancedIntro: 'Tu maîtrises les bases ? Voici les mécanismes de la bourse en détail : ordres, levier, vente à découvert, produits dérivés… Pour comprendre, pas pour te pousser à les utiliser.',
  advanced: [
    { id:'carnet', glyph:'↔', title:'Comment fonctionne la bourse', lead:'Derrière chaque achat, il y a un vendeur : voici comment ils se rencontrent.',
      simple:['Un acheteur et un vendeur se rencontrent sur une place de marché (Euronext, NYSE, Nasdaq…).','Le prix bouge selon l’offre et la demande, seconde par seconde.','Plus un titre s’échange beaucoup, plus il est liquide : facile à acheter et à vendre.','L’écart entre le prix d’achat et de vente s’appelle le spread : c’est un coût.'],
      sections:[
        {h:'Le carnet d’ordres',p:'Chaque titre a un carnet : à gauche, les ordres d’achat classés du prix le plus élevé au plus bas, à droite les ordres de vente du plus bas au plus élevé. Une transaction a lieu quand un acheteur et un vendeur s’accordent sur un prix.'},
        {h:'Le spread et la liquidité',p:'Le meilleur prix d’achat (bid) est toujours un peu inférieur au meilleur prix de vente (ask). Cet écart, le spread, est faible sur les titres très échangés et plus large sur les petits titres. Il fait partie des coûts réels.'},
        {h:'Les teneurs de marché',p:'Des acteurs professionnels proposent en permanence des prix d’achat et de vente pour fluidifier le marché. Ils gagnent sur le spread, et c’est ce qui permet d’acheter ou vendre presque à tout moment.'},
        {h:'Les horaires',p:'Les places européennes ouvrent le matin et ferment en fin d’après-midi, avec des enchères à l’ouverture et à la clôture. Hors de ces horaires, les ordres attendent ou passent via des plateformes spécifiques, souvent plus chères.'}],
      key:['Prix = rencontre entre offre et demande.','Le spread est un coût caché.','Liquide = facile à acheter et vendre.'] },
    { id:'ordres', glyph:'⚙', title:'Les types d’ordres', lead:'Acheter, ce n’est pas juste cliquer : le type d’ordre change le prix que tu obtiens.',
      simple:['Ordre au marché : exécuté tout de suite, au meilleur prix disponible.','Ordre à cours limité : tu fixes le prix maximum (achat) ou minimum (vente).','Ordre stop : se déclenche quand le prix atteint un seuil, pour limiter une perte.','Pour un investisseur régulier, le versement automatique évite d’y penser.'],
      sections:[
        {h:'Au marché',p:'L’ordre est exécuté immédiatement au prix du moment. C’est simple et rapide, mais sur un titre peu liquide ou en pleine tempête, le prix obtenu peut s’écarter de celui que tu avais vu.'},
        {h:'À cours limité',p:'Tu fixes ton prix. L’ordre n’est exécuté que si le marché l’atteint, ce qui te protège d’un mauvais prix, mais peut ne jamais être exécuté.'},
        {h:'Stop et stop limité',p:'Un ordre stop devient un ordre au marché quand un prix seuil est franchi. Il sert à limiter une perte, mais un gap (saut de cours) peut l’exécuter bien en dessous du seuil.'},
        {h:'Durée de validité',p:'Un ordre peut valoir pour la journée ou jusqu’à une date. Vérifie-la : un ordre oublié peut s’exécuter plus tard, quand tu n’y penses plus.'}],
      key:['Marché = rapide, limité = contrôlé.','Un stop n’est pas une garantie.','Vérifie la durée de validité.'] },
    { id:'levier', glyph:'×5', title:'Le levier', lead:'Le levier amplifie les gains, mais aussi les pertes : c’est un outil de professionnel.',
      simple:['Le levier, c’est investir plus que ce que tu as, avec de l’argent emprunté ou une marge.','Avec un levier ×5, une variation de 1 % du titre devient 5 % sur ton capital.','Une baisse suffisante peut effacer ta mise, et déclencher une clôture forcée de ta position.','Pour un débutant, c’est le piège numéro un.'],
      sections:[
        {h:'Le mécanisme',p:'Tu déposes une marge (par exemple 1 000 €) et tu prends une position de 5 000 €. Si le titre gagne 10 %, tu gagnes 500 €, soit 50 % de ta marge. S’il perd 10 %, tu perds 500 €, soit 50 % de ta marge.'},
        {h:'L’appel de marge et la liquidation',p:'Si tes pertes approchent le montant de ta marge, le courtier te demande de déposer de l’argent ou ferme ta position automatiquement. Tu transformes alors une baisse temporaire en perte définitive.'},
        {h:'Où on le croise',p:'CFD, produits à effet de levier, turbos, trading sur marge : ces produits sont très encadrés pour les particuliers, et la majorité des particuliers y perdent de l’argent selon les avertissements obligatoires des courtiers.'},
        {h:'Le coût caché',p:'Le levier s’accompagne souvent de frais de financement quotidiens. Garder une position longtemps coûte donc de plus en plus cher.'}],
      key:['Levier = gains et pertes amplifiés.','Une liquidation rend la perte définitive.','À éviter quand on débute.'] },
    { id:'decouvert', glyph:'↘', title:'La vente à découvert', lead:'Parier sur la baisse d’un titre : comment ça marche, et pourquoi c’est risqué.',
      simple:['Vendre à découvert, c’est vendre un titre qu’on ne possède pas, après l’avoir emprunté.','Tu gagnes si le prix baisse, tu perds si le prix monte.','Une hausse n’a pas de limite : la perte potentielle non plus.','Elle sert surtout aux professionnels et aux fonds.'],
      sections:[
        {h:'Le principe',p:'Tu empruntes des titres, tu les vends, puis tu les rachètes plus tard pour les rendre. Si le prix a baissé entre-temps, tu gardes la différence, moins les frais d’emprunt.'},
        {h:'Pourquoi c’est dangereux',p:'Quand tu achètes un titre, tu ne peux pas perdre plus que ta mise. À découvert, si le prix monte fortement, ta perte n’est pas plafonnée.'},
        {h:'Le short squeeze',p:'Si beaucoup d’investisseurs sont à découvert sur un titre et que son prix monte, ils doivent racheter en urgence, ce qui fait monter le prix encore plus. Ces épisodes peuvent être violents.'},
        {h:'À quoi ça sert vraiment',p:'Les professionnels l’utilisent pour se couvrir ou pour que les prix reflètent aussi les avis pessimistes. Pour un investisseur de long terme, ce n’est pas nécessaire.'}],
      key:['Gain limité, perte potentiellement illimitée.','Réservé aux profils avertis.','Inutile pour investir sur le long terme.'] },
    { id:'derives', glyph:'C/P', title:'Options et produits dérivés', lead:'Des contrats dont la valeur dépend d’un autre actif : comprendre sans se brûler.',
      simple:['Un produit dérivé est un contrat dont la valeur dépend d’un autre actif (action, indice, matière première).','Une option donne le droit, pas l’obligation, d’acheter (call) ou de vendre (put) à un prix fixé.','Elle a une date d’expiration : après, elle peut valoir zéro.','Très utilisé pour se protéger, très risqué pour spéculer.'],
      sections:[
        {h:'Call et put',p:'Un call te donne le droit d’acheter à un prix fixé (le strike) jusqu’à une date. Un put te donne le droit de vendre. Tu paies une prime pour ce droit, et c’est tout ce que tu peux perdre en tant qu’acheteur.'},
        {h:'Le temps joue contre l’acheteur',p:'Une option perd de la valeur avec le temps, même si le titre ne bouge pas. Beaucoup d’options expirent sans valeur.'},
        {h:'Warrants, turbos et certificats',p:'Ce sont des produits émis par des banques qui reprennent ce principe, souvent avec du levier. Les turbos peuvent être désactivés d’un coup si le sous-jacent touche une barrière, et valoir zéro.'},
        {h:'Futures',p:'Un future est un contrat standardisé pour acheter ou vendre un actif à une date et un prix fixés. Il est très utilisé par les entreprises et les professionnels pour se couvrir.'}],
      key:['Un dérivé dépend d’un autre actif.','Les options ont une date d’expiration.','Beaucoup de produits dérivés sont à effet de levier.'] },
    { id:'etf2', glyph:'ETF', title:'Les ETF en détail', lead:'Réplication, frais, distribution : ce qu’il faut vérifier avant d’acheter un ETF.',
      simple:['Un ETF réplique un indice : par achat des vraies actions (physique) ou via un contrat (synthétique).','Regarde les frais annuels (TER) et l’écart avec l’indice (tracking error).','Capitalisant : les dividendes sont réinvestis. Distribuant : ils te sont versés.','Vérifie la taille du fonds et son domicile.'],
      sections:[
        {h:'Réplication physique ou synthétique',p:'En réplication physique, l’ETF détient réellement les actions de l’indice. En synthétique, il passe par un contrat avec une banque (swap). Les deux existent, le physique est plus simple à comprendre.'},
        {h:'Les frais et la précision',p:'Le TER est le coût annuel du fonds. Le tracking error mesure l’écart entre la performance de l’ETF et celle de son indice. Plus ces deux chiffres sont bas, mieux c’est.'},
        {h:'Capitalisant ou distribuant',p:'Un ETF capitalisant réinvestit automatiquement les dividendes, ce qui simplifie la vie. Un ETF distribuant te les verse, utile pour obtenir un revenu mais à gérer fiscalement.'},
        {h:'Les critères pratiques',p:'Regarde la taille du fonds (assez grande pour ne pas fermer), l’émetteur, la devise, l’éligibilité au PEA et le statut européen (UCITS) qui offre un cadre de protection.'}],
      key:['TER bas, tracking error bas.','Capitalisant = dividendes réinvestis.','Vérifie l’éligibilité au PEA.'] },
    { id:'obligations', glyph:'%', title:'Obligations et taux', lead:'Pourquoi le prix d’une obligation baisse quand les taux montent.',
      simple:['Une obligation est un prêt à une entreprise ou un État, qui paie des intérêts (coupons).','Quand les taux montent, le prix des anciennes obligations baisse.','Plus la durée est longue, plus le prix est sensible aux taux (la duration).','Le risque principal : la faillite de l’émetteur ou la hausse des taux.'],
      sections:[
        {h:'Le fonctionnement',p:'Tu prêtes une somme à un émetteur, qui te verse un intérêt régulier (le coupon) puis te rembourse à l’échéance. La plupart des obligations peuvent être revendues avant, à un prix qui varie.'},
        {h:'Taux et prix',p:'Si les taux montent, de nouvelles obligations paient davantage, donc les anciennes valent moins. Inversement, quand les taux baissent, leur prix monte.'},
        {h:'La duration',p:'La duration mesure la sensibilité d’une obligation aux variations de taux. Plus elle est élevée, plus le prix bouge fort.'},
        {h:'Le risque de crédit',p:'Un émetteur peut ne pas rembourser. Plus il est risqué, plus il doit payer d’intérêt. Les notes des agences servent à estimer ce risque.'}],
      key:['Taux ↑ = prix des obligations ↓.','Longue durée = plus sensible.','Un taux élevé signale un risque plus élevé.'] },
    { id:'valo', glyph:'PER', title:'Lire une entreprise : les ratios', lead:'Quelques chiffres pour comprendre ce qu’on achète.',
      simple:['La capitalisation = prix de l’action × nombre d’actions : la taille de l’entreprise.','Le PER compare le prix de l’action aux bénéfices par action.','Le rendement du dividende = dividende / prix de l’action.','Un seul ratio ne suffit jamais.'],
      sections:[
        {h:'La capitalisation',p:'C’est la valeur boursière de l’entreprise. Elle classe les entreprises en grandes, moyennes ou petites capitalisations, ce qui sert à diversifier par taille.'},
        {h:'Le PER',p:'Le Price Earnings Ratio divise le prix de l’action par le bénéfice par action. Un PER élevé signifie que le marché anticipe de la croissance, ou que le titre est cher. Il se compare entre entreprises d’un même secteur.'},
        {h:'Dividende et rendement',p:'Le dividende est une part des bénéfices versée aux actionnaires. Un rendement élevé peut signaler une entreprise solide… ou un cours qui s’est effondré.'},
        {h:'Les limites',p:'Les ratios regardent le passé et dépendent de la comptabilité. Ils aident à comprendre, ils ne prédisent rien.'}],
      key:['Capitalisation = taille.','PER = prix par rapport au bénéfice.','Un ratio ne prédit rien.'] },
    { id:'psycho', glyph:'PSY', title:'Psychologie et méthode', lead:'Le plus gros risque, c’est souvent toi.',
      simple:['La peur et l’euphorie nous font acheter haut et vendre bas.','Le versement régulier (DCA) évite de deviner le bon moment.','Rééquilibre ton portefeuille une fois par an, pas tous les jours.','Écris ton plan à l’avance, et suis-le.'],
      sections:[
        {h:'Les biais classiques',p:'L’aversion aux pertes nous fait détester perdre deux fois plus qu’on aime gagner. L’excès de confiance nous fait croire qu’on bat le marché. Le biais de groupe nous pousse à acheter ce que tout le monde achète.'},
        {h:'Le versement régulier',p:'Investir la même somme chaque mois, quel que soit le marché, fait acheter plus de parts quand c’est bas et moins quand c’est haut. Ça réduit le stress et le risque de mal choisir son moment.'},
        {h:'Somme unique ou versements',p:'Statistiquement, investir tout d’un coup a souvent fait mieux sur le long terme car le marché monte plus souvent qu’il ne baisse. Mais l’étalement protège contre le regret si une baisse suit. Les deux se défendent.'},
        {h:'Le rééquilibrage',p:'Si ton portefeuille s’éloigne de ta répartition cible (par exemple 70 / 30), tu peux le remettre d’aplomb une fois par an. Ça évite de prendre sans le vouloir plus de risque.'}],
      key:['Écris ton plan, suis-le.','Régularité > timing.','Rééquilibre une fois par an.'] }
  ],
  videosIntro: 'Chaque chapitre en vidéo courte et animée (1 à 2 minutes). Appuie sur lecture.',
  express: {
    title: 'La version express : 6 étapes pour démarrer',
    intro: 'Tu débutes et tu ne veux pas te noyer dans les détails ? Voici le chemin le plus simple, dans l’ordre.',
    steps: [
      ['Garde une réserve', 'Avant d’investir, garde de côté l’argent dont tu peux avoir besoin vite (3 à 6 mois de dépenses). La bourse, c’est pour l’argent qui peut dormir plusieurs années.'],
      ['Fixe un horizon', 'En bourse, on vise au moins 8 à 10 ans. Moins que ça, les baisses peuvent encore être là quand tu as besoin de l’argent.'],
      ['Choisis une enveloppe', 'Une enveloppe, c’est le « compte » qui contient tes placements. Pour la plupart des gens : PEA ou assurance vie. Le compte-titres est plus libre mais sans avantage fiscal.'],
      ['Choisis un courtier', 'C’est la plateforme qui exécute tes achats. Compare les frais et la simplicité dans l’onglet Courtiers.'],
      ['Achète un ETF large', 'Un seul ETF « monde » te fait détenir des centaines d’entreprises dans plusieurs pays. C’est la base d’une bonne diversification.'],
      ['Automatise et oublie', 'Programme un versement chaque mois. Ne regarde pas tous les jours : les baisses font partie du jeu, la régularité fait le travail.']
    ],
    warn: 'Aucun rendement n’est garanti : tu peux perdre de l’argent, surtout à court terme. Ceci est de l’éducation, pas un conseil personnalisé.'
  },
  chapters: [
    {
      id: 'pourquoi', title: 'Pourquoi investir',
      lead: 'Parce que l’argent qui dort perd de la valeur.',
      simple: [
        'Les prix montent avec le temps (c’est l’inflation) : 100 € aujourd’hui achètent moins dans 10 ans.',
        'Un livret protège ton argent, mais son taux peut rester sous l’inflation.',
        'Investir, c’est prêter ton argent à des entreprises qui produisent de la richesse, et en recevoir une part.',
        'Plus tu es patient, plus le temps travaille pour toi.'
      ],
      sections: [
        { h: 'L’inflation grignote ton épargne', p: 'Quand les prix augmentent de 2 % par an, 1 000 € ne valent plus que ~820 € en pouvoir d’achat au bout de 10 ans. Si ton livret rapporte moins que l’inflation, tu perds de la valeur sans le voir.' },
        { h: 'Ce que tu achètes vraiment', p: 'Acheter une action, c’est devenir copropriétaire d’une entreprise. Tu es payé via la hausse de sa valeur et, parfois, via des dividendes. Sur le très long terme, l’économie mondiale a tendance à créer de la valeur : c’est ce qui fait monter les marchés.' },
        { h: 'Le temps, ton meilleur allié', p: 'Les intérêts composés signifient que tes gains génèrent eux-mêmes des gains. Exemple : 150 € par mois à 6 % par an pendant 20 ans donnent environ 69 000 € pour 36 000 € versés. C’est une illustration, pas une promesse.' },
        { h: 'Investir n’est pas jouer', p: 'Investir = acheter des morceaux d’économie réelle et garder longtemps. Trader = parier sur les mouvements à court terme. Ici, on parle de la première approche.' }
      ],
      key: ['Un livret ne bat pas toujours l’inflation.', 'Investir se fait sur le long terme.', 'Aucun gain n’est garanti.']
    },
    {
      id: 'produits', title: 'Actions, obligations, ETF',
      lead: 'Les trois briques de base, expliquées simplement.',
      simple: [
        'Action = une petite part d’une entreprise. Ça peut monter fort, ou baisser fort.',
        'Obligation = un prêt à une entreprise ou un État, qui te paie des intérêts. Plus calme, moins de gains.',
        'ETF = un panier tout prêt (par exemple 1 500 entreprises) qu’on achète d’un coup, à bas prix.',
        'Pour démarrer, un ETF large suffit.'
      ],
      sections: [
        { h: 'Les actions', p: 'Tu deviens actionnaire. Le prix varie chaque jour selon les résultats de l’entreprise et l’humeur du marché. Une seule entreprise peut très bien chuter, voire disparaître : c’est le risque de tout miser sur une ligne.' },
        { h: 'Les obligations', p: 'Tu prêtes de l’argent pour une durée donnée contre des intérêts. Elles fluctuent moins que les actions, mais ne sont pas sans risque (taux, défaut de l’émetteur).' },
        { h: 'Les ETF (fonds indiciels)', p: 'Un ETF copie un indice, par exemple le MSCI World. En un achat, tu détiens des centaines d’entreprises. Les frais annuels sont généralement faibles (de l’ordre de 0,1 % à 0,4 %). Un ETF « capitalisant » réinvestit les dividendes, un ETF « distribuant » te les verse.' },
        { h: 'Et les fonds classiques ?', p: 'Des gérants choisissent les titres à ta place, ce qui coûte plus cher (souvent 1 % à 2 % par an). Sur longue période, beaucoup peinent à battre leur indice après frais.' }
      ],
      key: ['Un ETF = un panier prêt à l’emploi.', 'Une action isolée est risquée.', 'Les frais annuels comptent.']
    },
    {
      id: 'frais', title: 'Les frais cachés',
      lead: 'Les frais, c’est la seule chose que tu contrôles.',
      simple: [
        'Chaque année, des frais sont prélevés sur ton placement, même quand il baisse.',
        'Sur 20 ans, 1 % de frais de plus peut coûter des milliers d’euros.',
        'Regarde : frais de courtage, frais de l’ETF, frais de l’enveloppe, frais de change.',
        'Plus c’est bas, plus il te reste.'
      ],
      sections: [
        { h: 'Les 4 couches de frais', p: '1) Courtage : ce que prend le courtier à chaque ordre. 2) Frais de l’ETF ou du fonds (TER). 3) Frais de l’enveloppe (tenue de compte, frais sur versements, gestion de l’assurance vie). 4) Change et écarts d’achat/vente (spreads).' },
        { h: 'L’effet sur le long terme', p: 'Avec 200 € par mois à 6 % brut pendant 25 ans (60 000 € versés), 0,2 % de frais annuels laissent environ 134 000 €, contre ~111 000 € avec 1,5 %. Soit plus de 20 000 € qui partent en frais. Illustration, pas une prévision.' },
        { h: 'Les pièges classiques', p: 'Frais sur versements d’une assurance vie, fonds maison à 2 % par an, trop d’ordres de petits montants chez un courtier à frais fixes, conversion de devises coûteuse. Le simulateur de l’onglet Courtiers t’aide à comparer.' },
        { h: '« 0 € » ne veut pas toujours dire gratuit', p: 'Un courtier sans commission gagne sa vie autrement : écarts de prix, change, abonnement, intérêts sur ton cash. Regarde le coût total, pas la promesse en gros.' }
      ],
      key: ['4 couches de frais à regarder.', '1 % de plus par an pèse lourd sur 20 ans.', 'Compare le coût total.']
    },
    {
      id: 'enveloppes', title: 'PEA, assurance vie, CTO',
      lead: 'Le même placement peut être mieux ou moins bien imposé selon l’enveloppe.',
      simple: [
        'PEA : pour les actions et ETF européens, avantage fiscal après 5 ans.',
        'Assurance vie : souple, avantage fiscal qui grandit avec les années, fonds en euros possibles.',
        'Compte-titres (CTO) : aucune limite, mais impôt classique.',
        'PER : pour la retraite, l’argent est bloqué mais les versements peuvent réduire l’impôt.'
      ],
      sections: [
        { h: 'Le PEA', p: 'Plafond de versements de 150 000 €. Après 5 ans de détention, les gains échappent à l’impôt sur le revenu (les prélèvements sociaux restent dus). Un retrait avant 5 ans entraîne en principe la clôture du plan et une fiscalité moins favorable. Il contient surtout des actions et ETF européens éligibles.' },
        { h: 'L’assurance vie', p: 'Enveloppe très souple : fonds en euros (capital garanti par l’assureur) et supports en unités de compte (plus risqués). Après 8 ans, un abattement annuel sur les gains s’applique, ce qui rend les retraits plus doux fiscalement. Regarde bien les frais sur versements et de gestion.' },
        { h: 'Le compte-titres ordinaire', p: 'Pas de plafond, accès au monde entier, retraits possibles à tout moment. Les gains sont soumis à la flat tax d’environ 30 % (taux à vérifier, il a évolué récemment). Bien pour la liberté, sans avantage fiscal.' },
        { h: 'Le PER et les autres', p: 'Le PER sert à préparer la retraite : tes versements peuvent se déduire de ton revenu imposable, mais l’argent est en principe bloqué jusqu’à la retraite (sauf cas précis). Le private equity et les placements alternatifs sont expliqués dans l’onglet Alternatifs.' },
        { h: 'Peut-on en avoir plusieurs ?', p: 'Oui, et c’est souvent utile : un PEA pour les actions européennes, une assurance vie pour la souplesse, un CTO pour le reste. Mais commence simple, une enveloppe suffit.' }
      ],
      key: ['Chaque enveloppe a ses règles fiscales.', 'Le PEA et l’assurance vie sont les plus utilisés.', 'Vérifie les règles et taux à jour.']
    },
    {
      id: 'indices', title: 'Les grands indices',
      lead: 'Un indice mesure un panier d’entreprises.',
      simple: [
        'S&P 500 : 500 grandes entreprises américaines.',
        'MSCI World : des centaines de grandes entreprises de pays riches.',
        'CAC 40 : 40 grandes entreprises françaises.',
        'On ne les achète pas directement : on passe par un ETF qui les copie.'
      ],
      sections: [
        { h: 'À quoi ça sert', p: 'Un indice donne une photo de la santé d’un marché : si le S&P 500 monte, les grandes entreprises américaines ont globalement monté. Un ETF qui le réplique te permet d’en profiter sans choisir les entreprises une à une.' },
        { h: 'Pondération par la taille', p: 'Dans la plupart des indices, les plus grandes entreprises pèsent le plus. Quand quelques géantes dominent, l’indice dépend beaucoup d’elles : c’est la concentration.' },
        { h: 'Large ou ciblé', p: 'MSCI World et MSCI ACWI sont larges et diversifiés. Le Nasdaq 100 est ciblé (tech). Plus c’est ciblé, plus ça peut varier fort. L’onglet Indices détaille risques et entreprises de chaque indice.' },
        { h: 'Rendement passé', p: 'Les performances passées ne préjugent pas du futur. Regarde plutôt la durée des mauvaises périodes (par exemple 2000–2002, 2008, 2020, 2022) pour savoir ce que tu peux encaisser.' }
      ],
      key: ['Un indice = un panier.', 'Un ETF copie un indice.', 'Concentration = risque.']
    },
    {
      id: 'risque', title: 'Comprendre le risque',
      lead: 'Le risque n’est pas ton ennemi : c’est le prix du rendement.',
      simple: [
        'Les marchés baissent régulièrement, parfois de 30 % ou 50 %. Puis ils remontent, mais pas toujours vite.',
        'Plus tu investis longtemps, moins le risque de perte sur la période est élevé.',
        'Ne vends pas dans la panique : c’est là qu’on transforme une baisse en perte réelle.',
        'N’investis pas l’argent dont tu auras besoin bientôt.'
      ],
      sections: [
        { h: 'Volatilité et baisse maximale', p: 'La volatilité mesure l’ampleur des variations. La baisse maximale (drawdown) mesure la pire chute entre un sommet et un creux. Le S&P 500 a perdu environ 55 % en 2007–2009 et le Nasdaq 100 environ 80 % en 2000–2002. Ce sont des ordres de grandeur historiques.' },
        { h: 'Le temps réduit le risque, il ne l’annule pas', p: 'Sur de longues périodes, les actions diversifiées ont historiquement rapporté plus que les livrets, mais certaines périodes ont été très longues sans gain. Aucun horizon ne garantit un résultat.' },
        { h: 'Les autres risques', p: 'Risque de change (investir en dollars), risque d’entreprise (une action qui s’effondre), risque de liquidité (ne pas pouvoir vendre), risque de plateforme (choisis un courtier régulé). La diversification réduit surtout le risque d’entreprise et de pays.' },
        { h: 'Ton profil', p: 'Demande-toi : que ferais-je si mon placement perdait 30 % ? Si la réponse est « je vends tout », mieux vaut moins de risque dès le départ.' }
      ],
      key: ['Les baisses de 30 à 50 % existent.', 'La patience protège, sans garantir.', 'Adapte le risque à ton sommeil.']
    },
    {
      id: 'portefeuille', title: 'Bâtir son portefeuille',
      lead: 'Diversifier de trois façons : où, dans quoi, et à quelle taille.',
      simple: [
        'Géographique : plusieurs pays et régions, pas que la France ou les États-Unis.',
        'Sectorielle : plusieurs secteurs (tech, santé, énergie, banques…).',
        'Par taille : des grandes, moyennes et petites entreprises.',
        'Un ETF monde fait déjà une bonne partie du travail.'
      ],
      sections: [
        { h: 'Diversification géographique', p: 'Un pays peut mal se porter pendant des années. Répartir entre régions réduit ce risque. Attention : un ETF « monde » est souvent majoritairement américain (environ 70 % pour le MSCI World). Pour plus d’équilibre, on peut ajouter l’Europe ou les pays émergents.' },
        { h: 'Diversification sectorielle', p: 'Un secteur peut s’effondrer (la tech en 2000, la finance en 2008, l’énergie en 2014). Détenir plusieurs secteurs limite l’impact. Vérifie la part de la technologie dans ton ETF : elle est aujourd’hui élevée dans la plupart des indices mondiaux.' },
        { h: 'Diversification par taille', p: 'Les grandes entreprises sont plus stables, les petites peuvent croître plus vite mais varient davantage. Un ETF small caps complète un ETF large, sans en abuser.' },
        { h: 'Une répartition type, à titre d’exemple', p: 'Un exemple pédagogique : environ 70 % d’actions diversifiées (ETF monde), 20 % d’obligations, 10 % de liquidités. Ce n’est pas une recommandation personnalisée : ta répartition dépend de ton horizon et de ta tolérance au risque.' },
        { h: 'Rééquilibrer', p: 'Une fois par an, tu peux remettre les proportions d’origine en vendant ce qui a trop monté et en renforçant le reste. Ce n’est pas obligatoire : on peut aussi simplement verser dans la part en retard.' }
      ],
      key: ['3 axes : pays, secteurs, tailles.', 'ETF monde = bon socle, avec une forte part américaine.', 'Simple vaut mieux que complexe.']
    },
    {
      id: 'erreurs', title: 'Les erreurs à éviter',
      lead: 'Les pièges qui coûtent le plus cher aux débutants.',
      simple: [
        'Tout mettre sur une seule action ou une mode.',
        'Chercher à deviner le bon moment pour entrer ou sortir.',
        'Paniquer et vendre pendant une baisse.',
        'Croire aux promesses de revenus faciles : le « 10 000 € par mois sans bouger » n’existe pas.'
      ],
      sections: [
        { h: 'Vouloir battre le marché', p: 'Très peu de professionnels y parviennent durablement après frais. Pour un particulier, viser le marché (ETF) est un objectif déjà très solide.' },
        { h: 'Le trading, les CFD et le levier', p: 'Les produits à effet de levier amplifient gains et pertes. Une grande majorité de particuliers y perdent de l’argent. Ce n’est pas l’approche de ce site.' },
        { h: 'Suivre la foule', p: 'Les réseaux sociaux vendent des « tuyaux », des formations et des méthodes miracle. Méfie-toi de toute promesse de gain garanti ou de revenu rapide.' },
        { h: 'Oublier les frais et les impôts', p: 'Un bon rendement brut peut devenir moyen net de frais et d’impôts. Choisis l’enveloppe et le courtier en conséquence.' },
        { h: 'Investir ce dont tu as besoin', p: 'Le loyer, les imprévus, un projet proche : ça ne va pas en bourse. Constitue d’abord ton épargne de précaution.' }
      ],
      key: ['Pas de promesse de gain facile.', 'Évite le levier et les CFD.', 'Garde ton calme dans les baisses.']
    }
  ]
};
