import asyncio, json, os, sys, zipfile
import edge_tts
D = os.path.dirname(os.path.abspath(__file__))
items = json.load(open(os.path.join(D, "manifest.json")))
VOICE = sys.argv[1] if len(sys.argv) > 1 else "fr-FR-RemyMultilingualNeural"
out = os.path.join(D, "voix_" + VOICE)
os.makedirs(out, exist_ok=True)

async def one(k, t, sem):
    f = os.path.join(out, k + ".mp3")
    if os.path.exists(f) and os.path.getsize(f) > 500:
        return
    async with sem:
        for _ in range(4):
            try:
                await edge_tts.Communicate(t, VOICE, rate="+0%").save(f)
                return
            except Exception:
                await asyncio.sleep(2)
        print("ECHEC", k, t)

async def main():
    sem = asyncio.Semaphore(4)
    await asyncio.gather(*[one(k, t, sem) for k, t in items.items()])

asyncio.run(main())
z = zipfile.ZipFile(os.path.join(D, "voix.zip"), "w", zipfile.ZIP_STORED)
for k in items:
    if os.path.exists(os.path.join(out, k + ".mp3")): z.write(os.path.join(out, k + ".mp3"), k + ".mp3")
z.close()
print("TERMINE", len(items), "fichiers")
