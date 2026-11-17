import json,glob,numpy as np,onnxruntime as ort,espeakng_loader,os,soundfile as sf
from phonemizer.backend.espeak.wrapper import EspeakWrapper
from phonemizer.backend import EspeakBackend
EspeakWrapper.set_library(espeakng_loader.get_library_path());os.environ['ESPEAK_DATA_PATH']=espeakng_loader.get_data_path()
BE=EspeakBackend('fr-fr',preserve_punctuation=True,with_stress=True,language_switch='remove-flags')
class Piper:
    def __init__(s,d):
        s.cfg=json.load(open(glob.glob(d+'/*.onnx.json')[0]));s.m=ort.InferenceSession(glob.glob(d+'/*.onnx')[0],providers=['CPUExecutionProvider']);s.map=s.cfg['phoneme_id_map'];s.sr=s.cfg['audio']['sample_rate']
    def say(s,text,speed=1.0,sid=None,ns=.667,nw=.8):
        ph=BE.phonemize([text],strip=True)[0];ids=[s.map['^'][0],s.map['_'][0]]
        for ch in ph:
            if ch in s.map: ids+=s.map[ch]+[s.map['_'][0]]
        ids.append(s.map['$'][0])
        inp={'input':np.array([ids],np.int64),'input_lengths':np.array([len(ids)],np.int64),'scales':np.array([ns,speed,nw],np.float32)}
        if len(s.m.get_inputs())>3: inp['sid']=np.array([sid or 0],np.int64)
        return s.m.run(None,inp)[0].squeeze().astype(np.float32),s.sr
if __name__=='__main__':
    txt="Les prix montent : c'est l'inflation. Avec 3 pour cent par an, 100 euros d'aujourd'hui n'achètent plus que 74 euros dans dix ans."
    for n,sids in [('vits-piper-fr_FR-tom-medium',[None]),('vits-piper-fr_FR-upmc-medium',[0,1])]:
        P=Piper('/tmp/tts/'+n)
        for sid in sids:
            a,sr=P.say(txt,sid=sid);sf.write(f'/tmp/tts/p_{n[-11:]}_{sid}.wav',a,sr);print(n,sid,sr,len(a)/sr)
