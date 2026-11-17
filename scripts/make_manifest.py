#!/usr/bin/env python3
"""Liste les phrases à faire lire par la voix neuronale (clé = md5 du texte normalisé).
Usage : python3 scripts/make_manifest.py [dossier_des_mp3_déjà_générés]  ->  écrit manifest.json (seulement les phrases manquantes)"""
import sys, os, re, json, hashlib, subprocess
src = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'build_audio.py')).read()
head = src[:src.index('import hashlib')].replace("MODELS = sys.argv[1] if len(sys.argv) > 1 else '/tmp/tts'", "MODELS=''").replace("ONLY = set(sys.argv[2:])", "ONLY=set()")
ns = {'__file__': os.path.join(os.path.dirname(os.path.abspath(__file__)), 'build_audio.py')}
exec(head, ns)
have = set(f[:-4] for f in os.listdir(sys.argv[1])) if len(sys.argv) > 1 and os.path.isdir(sys.argv[1]) else set()
out = {}
for v in ns['vids']:
    for sc in v.get('scenes', []):
        for s in ns['sentences'](sc.get('text', '')):
            t = ns['normalize'](s); k = hashlib.md5(t.encode()).hexdigest()[:12]
            if k not in have: out[k] = t
json.dump(out, open('manifest.json', 'w'), ensure_ascii=False, indent=0)
print(len(out), 'phrases à générer')
