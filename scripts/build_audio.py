#!/usr/bin/env python3
"""
Génère la voix off (voix neuronale française masculine, mp3 générés par scripts/gen_voix.py), la musique d'ambiance, les sons de transition
et les sous-titres synchronisés pour chaque vidéo de data/videos.js.
Sortie : assets/audio/<id>.mp3 et data/videos-audio.js (durées des scènes + sous-titres).
Usage : python3 scripts/build_audio.py /chemin/vers/dossier_modeles  [id_video ...]
(modèle : dossier vits-piper-fr_FR-tom-medium, publié dans les versions de github.com/k2-fsa/sherpa-onnx, tag tts-models)
"""
import sys, os, re, json, subprocess, math
import numpy as np, soundfile as sf
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS = sys.argv[1] if len(sys.argv) > 1 else '/tmp/tts'
ONLY = set(sys.argv[2:])
SR = 24000
VOICE, SPEED = 'ff_siwis', 0.97

# --- lecture des scénarios ---
vids = json.loads(subprocess.check_output(['node', '-e', "global.window={};require('%s/data/videos.js');console.log(JSON.stringify(window.SITE_VIDEOS))" % ROOT]))

# --- normalisation du texte pour la voix (prononciation française de tout, y compris sigles, indices, chiffres) ---
from num2words import num2words
REPL = [
 (r'\bS&P ?500\b', 'Ès ènd Pi cinq cents'), (r'\bS&P\b', 'Ès ènd Pi'),
 (r'\bMSCI World\b', 'M S C Aï oueurld'), (r'\bMSCI\b', 'M S C Aï'),
 (r'\bCAC ?40\b', 'cac quarante'), (r'\bNasdaq\b', 'Nasdak'), (r'\bEuronext\b', 'Euronexte'), (r'\bUCITS\b', 'You-sitse'),
 (r'\bETF\b', 'É T F'), (r'\bPEA\b', 'P É A'), (r'\bPER(?= (?:divise|élevé|compare))', 'père'), (r'\bPER\b', 'P É R'), (r'\bCTO\b', 'C T O'), (r'\bCFD\b', 'C F D'), (r'\bTER\b', 'T É R'),
 (r'\bIFU\b', 'I F U'), (r'\bPFU\b', 'P F U'), (r'\bAMF\b', 'A M F'),
 (r'@BourseEnVrai', 'Bourse en vrai'), (r'\b[Ff]lat tax\b', 'flatte taxe'),
 (r'\b[Ss]hort squeeze\b', 'chorte skouize'), (r'\b[Tt]racking error\b', 'trakingue erreur'), (r'\b[Tt]rading\b', 'trédingue'),
 (r'\b[Ss]pread\b', 'sprède'), (r'\b[Ww]arrants?\b', 'ouarrante'), (r'\b[Ff]utures?\b', 'fioutcheur'),
 (r'\bcall\b', 'colle'), (r'\bput\b', 'poute'), (r'\bgap\b', 'gappe'), (r'\b[Tt]rackers?\b', 'trakeur'),
 (r'~', 'environ '), (r'…', ', '), (r'\s*\*\*', ''), (r'\bx(?=\d)', 'fois '),
]
def _num(m):
    t = m.group(0)
    if ',' in t:
        i, d = t.split(',')
        return num2words(int(i), lang='fr') + ' virgule ' + ' '.join(num2words(int(c), lang='fr') if c != '0' else 'zéro' for c in d) if len(d) > 2 else num2words(int(i), lang='fr') + ' virgule ' + num2words(int(d), lang='fr')
    return num2words(int(t), lang='fr')
def normalize(t):
    t = t.replace('\u00a0', ' ').replace('\u202f', ' ')
    t = re.sub(r'(?<=\d) (?=\d{3}\b)', '', t)
    t = re.sub(r'(\d+(?:,\d+)?) ?%', r'\1 pour cent', t)
    t = re.sub(r'(\d+) ?k€', r'\1 mille euros', t)
    t = re.sub(r'(\d+(?:,\d+)?) ?€', r'\1 euros', t)
    t = re.sub(r'(\d+(?:,\d+)?) ?\$', r'\1 dollars', t)
    for a, b in REPL: t = re.sub(a, b, t)
    t = re.sub(r'\d+(?:,\d+)?', _num, t)
    return re.sub(r'\s+', ' ', t).strip()

def sentences(t):
    t = t.replace('**', '')
    return [s for s in re.split(r'(?<=[.!?…])\s+', t.strip()) if s]

def chunks(s, maxc=64):
    words, out, cur = s.split(' '), [], ''
    for w in words:
        if len(cur) + len(w) + 1 > maxc and cur: out.append(cur); cur = w
        else: cur = (cur + ' ' + w).strip()
    if cur: out.append(cur)
    return out

import hashlib
from scipy.signal import resample_poly
NEURAL = os.environ.get('NEURAL_DIR', '/tmp/neural')   # dossier des mp3 générés (edge-tts, voix neuronale)

def say(txt):
    """Lit le mp3 pré-généré pour cette phrase (voir scripts/gen_voix.py) et le convertit en 24 kHz."""
    k = hashlib.md5(txt.encode()).hexdigest()[:12]
    src = os.path.join(NEURAL, k + '.mp3'); wav = '/tmp/_n_%s.wav' % k
    if not os.path.exists(src): raise SystemExit('voix manquante : ' + txt)
    subprocess.check_call(['ffmpeg', '-y', '-loglevel', 'error', '-i', src, '-ac', '1', '-ar', str(SR), wav])
    a, _ = sf.read(wav, dtype='float32')
    idx = np.where(np.abs(a) > 0.01)[0]
    if len(idx): a = a[max(0, idx[0] - 500): idx[-1] + 900]
    return a

def voice_fx(x, wav_in='/tmp/_v_in.wav', wav_out='/tmp/_v_out.wav'):
    """Chaleur, présence, compression douce et très légère salle : moins « synthétique »."""
    sf.write(wav_in, x, SR)
    af = 'highpass=f=60,acompressor=threshold=0.12:ratio=2:attack=10:release=120:makeup=1.5'
    subprocess.check_call(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav_in, '-af', af, wav_out])
    y, _ = sf.read(wav_out, dtype='float32'); return y

# --- musique d'ambiance + sons de transition ---
def note(f): return 440.0 * 2 ** ((f - 69) / 12)
PROG = [[57, 60, 64, 69], [53, 57, 60, 65], [48, 55, 60, 64], [55, 59, 62, 67]]  # Am F C G
def music(n, seed, starts):
    rng = np.random.default_rng(seed); t = np.arange(n) / SR; m = np.zeros(n, np.float32)
    seg = 5.4; root = [0, 2, -2, 3][seed % 4]
    for i in range(int(n / SR / seg) + 2):
        t0 = i * seg; ch = [c + root for c in PROG[i % 4]]
        i0 = int(t0 * SR); i1 = min(n, int((t0 + seg + 1.2) * SR))
        if i0 >= n: break
        tt = (np.arange(i0, i1) / SR) - t0
        env = np.minimum(1, tt / 1.2) * np.minimum(1, (seg + 1.2 - tt) / 1.2)
        for k, c in enumerate(ch):
            f = note(c)
            for d in (-0.003, 0.003):
                m[i0:i1] += (0.05 * np.sin(2 * np.pi * f * (1 + d) * tt + k) + 0.02 * np.sin(2 * np.pi * 2 * f * (1 + d) * tt)).astype(np.float32) * env
        # arpège doux
        for j in range(int(seg / 0.45)):
            ts = t0 + j * 0.45
            a0 = int(ts * SR)
            if a0 >= n: break
            nn = ch[(j * 2) % 4] + 12 + (12 if j % 4 == 3 else 0)
            L = int(1.1 * SR); a1 = min(n, a0 + L)
            tt2 = np.arange(a1 - a0) / SR
            m[a0:a1] += (0.035 * np.sin(2 * np.pi * note(nn) * tt2) * np.exp(-tt2 * 4.5)).astype(np.float32)
    # transitions : whoosh filtré
    for s in starts:
        a0 = int(max(0, s - 0.15) * SR); L = int(0.75 * SR); a1 = min(n, a0 + L)
        if a1 <= a0: continue
        x = rng.standard_normal(a1 - a0).astype(np.float32); k = np.hanning(400); k /= k.sum()
        x = np.convolve(x, k, 'same'); tt = np.linspace(0, 1, a1 - a0)
        x -= np.convolve(x, np.ones(2400) / 2400, 'same') * 0.0
        env = np.sin(np.pi * tt) ** 2
        m[a0:a1] += (0.12 * x * env * 3).astype(np.float32)
    return m

lowpass = lambda x, k: np.convolve(x, np.ones(k) / k, 'same')
out_js = {}
for v in vids:
    if ONLY and v['id'] not in ONLY: continue
    print('==', v['id'], flush=True)
    voice = np.zeros(0, np.float32); scenes = []; starts = []
    for si, sc in enumerate(v['scenes']):
        lead = 0.55 if si else 0.7; tail = 0.8 if si < len(v['scenes']) - 1 else 1.6
        base = len(voice) / SR
        starts.append(base)
        parts = [np.zeros(int(lead * SR), np.float32)]
        sents = sentences(sc['text']); cues = []; cur = lead
        for s in sents:
            a = say(normalize(s)); dur = len(a) / SR
            ch = chunks(s); tot = sum(len(c) for c in ch); x = cur
            for c in ch:
                d = dur * len(c) / tot; cues.append({'a': round(x, 2), 'b': round(x + d, 2), 't': c}); x += d
            parts += [a, np.zeros(int(0.22 * SR), np.float32)]; cur += dur + 0.22
        parts.append(np.zeros(int(tail * SR), np.float32))
        seg = np.concatenate(parts)
        need = 0.68 * sc['d'] - len(seg) / SR   # laisse le temps aux animations
        if need > 0: seg = np.concatenate([seg, np.zeros(int(need * SR), np.float32)])
        voice = np.concatenate([voice, seg])
        scenes.append({'d': round(len(seg) / SR, 2), 'cues': cues})
    voice = voice_fx(voice)
    peak = np.max(np.abs(voice)) or 1
    voice = voice / peak * 0.85
    mus = music(len(voice), abs(hash(v['id'])) % 7, starts)
    mus = mus / (np.max(np.abs(mus)) or 1)
    # ducking : la musique baisse quand la voix parle
    env = lowpass(np.abs(voice), 4800); env = env / (env.max() or 1); duck = 1 - 0.55 * np.clip(env * 3, 0, 1)
    mix = voice + mus * 0.20 * duck
    mix = np.tanh(mix * 1.1) * 0.92
    wav = f'/tmp/{v["id"]}.wav'; sf.write(wav, mix, SR)
    subprocess.check_call(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '96k', os.path.join(ROOT, 'assets/audio', v['id'] + '.mp3')])
    out_js[v['id']] = {'file': 'assets/audio/%s.mp3' % v['id'], 'scenes': scenes, 'total': round(len(mix) / SR, 2)}
    print('   durée', round(len(mix) / SR, 1), 's', flush=True)
    json.dump(out_js[v['id']], open('/tmp/aud_%s.json' % v['id'], 'w'))

# fusion (reprend les fichiers déjà générés)
allj = {}
for v in vids:
    p = '/tmp/aud_%s.json' % v['id']
    if os.path.exists(p): allj[v['id']] = json.load(open(p))
open(os.path.join(ROOT, 'data/videos-audio.js'), 'w').write(
  '/* Généré par scripts/build_audio.py : durées des scènes et sous-titres synchronisés avec la voix. Ne pas modifier à la main. */\nwindow.SITE_VIDEO_AUDIO = ' + json.dumps(allj, ensure_ascii=False) + ';\n')
print('OK')
