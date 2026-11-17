// Génère le texte du rappel mensuel à partir de data/brokers.js
const fs = require('fs');
const vm = require('vm');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync('data/brokers.js', 'utf8'), ctx);
const D = ctx.window.SITE_DATA;
const today = new Date();
const days = (iso) => Math.floor((today - new Date(iso + 'T12:00:00')) / 864e5);
let body = '## Mise à jour mensuelle des frais\n\n';
body += 'Ouvre `data/brokers.js`, vérifie chaque courtier sur sa page source, puis mets à jour ';
body += '`updated`, `verified`, `feesSummary` et `modes`.\n\n';
D.brokers.forEach((b) => {
  const d = days(b.verified);
  body += `- [ ] **${b.name}** : [page source](${b.source}) · dernière vérif. il y a ${d} jours${d > (D.staleAfterDays || 45) ? ' ⚠️' : ''}\n`;
});
body += '\nPense aussi à vérifier les offres de parrainage (`affiliate`) et les bons plans (`deals`).\n';
fs.writeFileSync('rappel.md', body);
