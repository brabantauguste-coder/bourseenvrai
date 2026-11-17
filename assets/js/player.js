/* =====================================================================
   BOURSEENVRAI : lecteur de vidéos en motion design (aucune requête externe)
   Chaque vidéo = scènes (data/videos.js) + voix, musique et sous-titres (data/videos-audio.js,
   généré par scripts/build_audio.py). Tout est dessiné en SVG et animé image par image.
   ===================================================================== */
(function(){
var NS='http://www.w3.org/2000/svg',UID=0;
function el(tag,at,par){
  if(typeof tag!=='string'){par=tag;tag='g';if(at){if('d' in at)tag='path';else if('x1' in at)tag='line';else if('cx' in at||'r' in at)tag='circle';else if('width' in at)tag='rect';}}
  var e=document.createElementNS(NS,tag);for(var k in at)e.setAttribute(k,at[k]);if(par)par.appendChild(e);return e;}
function cl(x){return x<0?0:x>1?1:x;}
function ease(x){x=cl(x);return 1-Math.pow(1-x,3);}
function back(x){x=cl(x);var c=1.70158;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2);}
function sg(p,a,b){return (p-a)/(b-a);}
function fmt(n,dec){return n.toLocaleString('fr-FR',{minimumFractionDigits:dec||0,maximumFractionDigits:dec||0});}
var C={acc:'#8b7bff',b:'#22b8f0',g:'#19e0a8',p:'#ff5c93',o:'#ffb02e',w:'#ffffff',r:'#ff5c5c'};
function col(c){return C[c]||c||C.acc;}
function lighten(hex,a){var n=parseInt(hex.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;return 'rgb('+Math.round(r+(255-r)*a)+','+Math.round(g+(255-g)*a)+','+Math.round(b+(255-b)*a)+')';}
function txt(par,s,x,y,size,fill,anchor,weight){var t=el('text',{x:x,y:y,'font-size':size,fill:fill||'#fff','text-anchor':anchor||'middle','font-weight':weight||600,'font-family':'Geist,system-ui,sans-serif'},par);t.textContent=s;return t;}
function fit(str,W,max){var m=0;String(str).split('|').forEach(function(l){m=Math.max(m,l.length);});return Math.min(max,Math.floor(W*.88/(Math.max(m,1)*.54)));}
function lines(par,s,x,y,size,fill,anchor,lh){var arr=String(s).split('|'),out=[];arr.forEach(function(l,i){out.push(txt(par,l,x,y+i*(lh||size*1.25),size,fill,anchor,500));});return out;}

/* contexte graphique d'une scène : dégradés, lueurs, panneaux */
function makeCtx(svg){
  var id='u'+(++UID),defs=svg.querySelector('defs'),cache={},k=0,X={id:id};
  var gl=el('filter',{id:'gl'+id,x:'-30%',y:'-30%',width:'160%',height:'160%'},defs);el('feGaussianBlur',{stdDeviation:9,result:'b'},gl);
  var mg=el('feMerge',{},gl);el('feMergeNode',{in:'b'},mg);el('feMergeNode',{in:'SourceGraphic'},mg);
  var bl=el('filter',{id:'bl'+id,x:'-50%',y:'-50%',width:'200%',height:'200%'},defs);el('feGaussianBlur',{stdDeviation:60},bl);
  var pn=el('linearGradient',{id:'pn'+id,x1:0,y1:0,x2:0,y2:1},defs);el('stop',{offset:'0','stop-color':'#fff','stop-opacity':.17},pn);el('stop',{offset:'1','stop-color':'#fff','stop-opacity':.05},pn);
  X.glow='url(#gl'+id+')';X.blur='url(#bl'+id+')';X.panel='url(#pn'+id+')';
  X.grad=function(c){c=col(c);if(cache[c])return cache[c];var gid='g'+id+(k++),lg=el('linearGradient',{id:gid,x1:0,y1:0,x2:0,y2:1},defs);el('stop',{offset:'0','stop-color':lighten(c,.38)},lg);el('stop',{offset:'1','stop-color':c},lg);return cache[c]='url(#'+gid+')';};
  X.clip=function(){var cid='c'+id+(k++),cp=el('clipPath',{id:cid},defs),r=el('rect',{x:0,y:0,width:0,height:720},cp);return {ref:'url(#'+cid+')',rect:r};};
  return X;
}
function panel(par,x,y,w,h,c,rx){el('rect',{x:x,y:y,width:w,height:h,rx:rx||26,fill:'rgba(5,8,40,.35)'},par);el('rect',{x:x,y:y,width:w,height:h,rx:rx||26,fill:'url(#'+0+')'},par);}

/* ---------- visuels : chacun renvoie update(p) ---------- */
var V={};
V.title=function(g,v,X){
  var c=col(v.c||'g'),r1=el('circle',{cx:640,cy:330,r:260,fill:'none',stroke:'rgba(255,255,255,.10)','stroke-width':2},g),r2=el('circle',{cx:640,cy:330,r:370,fill:'none',stroke:'rgba(255,255,255,.06)','stroke-width':2},g),r3=el('circle',{cx:640,cy:330,r:170,fill:c,opacity:.12,filter:X.blur},g);
  var k=txt(g,v.kicker||'',640,225,26,c,'middle',700);k.setAttribute('letter-spacing','7');
  var t=lines(g,v.title,640,330,96,'#fff','middle',108);t.forEach(function(e){e.setAttribute('font-weight',800);});
  var s=txt(g,v.sub||'',640,330+t.length*108+6,34,'rgba(255,255,255,.8)','middle',500);
  var bar=el('rect',{x:540,y:190,width:200,height:6,rx:3,fill:c},g);
  return function(p){var q=ease(sg(p,.05,.35));k.setAttribute('opacity',ease(sg(p,0,.15)));bar.setAttribute('width',200*q);bar.setAttribute('x',640-100*q);
    r1.setAttribute('r',260+p*30);r2.setAttribute('r',370+p*50);r3.setAttribute('opacity',.1+.12*Math.sin(p*6));
    t.forEach(function(e,i){var u=ease(sg(p,.08+i*.1,.38+i*.1));e.setAttribute('opacity',u);e.setAttribute('transform','translate(0,'+((1-u)*46)+')');});s.setAttribute('opacity',ease(sg(p,.4,.65)));};
};
V.big=function(g,v,X){
  var c=col(v.c),rings=[0,1,2].map(function(i){return el('circle',{cx:640,cy:285,r:120,fill:'none',stroke:c,'stroke-width':2,opacity:0},g);}),n=txt(g,'',640,330,v.size||190,c,'middle',800),u=v.unit||'',lab=lines(g,v.label||'',640,425,40,'#fff','middle'),sub=txt(g,v.sub||'',640,515,28,'rgba(255,255,255,.72)','middle',500);
  n.setAttribute('filter',X.glow);
  var glow=el('circle',{cx:640,cy:290,r:200,fill:c,opacity:0,filter:X.blur},g);g.insertBefore(glow,g.firstChild);
  return function(p){var q=ease(sg(p,.08,.62)),val=v.from+(v.to-v.from)*q;n.textContent=fmt(val,v.dec||0)+u;
    var s=1+(1-ease(sg(p,0,.15)))*.25;n.setAttribute('transform','translate(640 330) scale('+s+') translate(-640 -330)');n.setAttribute('opacity',ease(sg(p,0,.1)));
    glow.setAttribute('opacity',.2*ease(sg(p,0,.3)));
    rings.forEach(function(r,i){var ph=((p*1.6+i*.33)%1);r.setAttribute('r',130+ph*250);r.setAttribute('opacity',(1-ph)*.25*ease(sg(p,.05,.2)));});
    lab.forEach(function(e,i){var u2=ease(sg(p,.35+i*.05,.55+i*.05));e.setAttribute('opacity',u2);e.setAttribute('transform','translate(0,'+((1-u2)*18)+')');});sub.setAttribute('opacity',ease(sg(p,.55,.75)));};
};
V.bars=function(g,v,X){
  var items=v.items,n=items.length,W=Math.min(150,760/n),gap=Math.min(70,(960-W*n)/(n+1)),x0=640-(n*W+(n-1)*gap)/2,base=490,max=v.max||Math.max.apply(null,items.map(function(i){return i.v;})),H=260,els=[];
  el('line',{x1:120,x2:1160,y1:base,y2:base,stroke:'rgba(255,255,255,.3)','stroke-width':2},g);
  if(v.title)txt(g,v.title,640,112,fit(v.title,1120,30),'rgba(255,255,255,.88)','middle',500);
  items.forEach(function(it,i){var x=x0+i*(W+gap),r=el('rect',{x:x,y:base,width:W,height:0,rx:14,fill:X.grad(it.c),filter:X.glow},g),val=txt(g,'',x+W/2,base-16,40,'#fff','middle',800),lab=lines(g,it.l,x+W/2,base+44,28,'rgba(255,255,255,.88)','middle');els.push({r:r,val:val,lab:lab,it:it});});
  return function(p){els.forEach(function(o,i){var q=ease(sg(p,.06+i*.12,.5+i*.12)),h=Math.max(0,o.it.v/max*H*q);o.r.setAttribute('height',h);o.r.setAttribute('y',base-h);o.val.setAttribute('y',base-h-16);o.val.textContent=fmt(o.it.v*q,o.it.dec||0)+(v.unit||'');o.val.setAttribute('opacity',q);o.lab.forEach(function(e){e.setAttribute('opacity',cl(q*2));});});};
};
V.line=function(g,v,X){
  var X0=170,X1=1110,Y0=140,Y1=470,all=[].concat.apply([],v.series.map(function(s){return s.y;})),mn=v.min!=null?v.min:Math.min.apply(null,all),mx=v.max!=null?v.max:Math.max.apply(null,all);
  for(var i=0;i<4;i++){var yy=Y1-(Y1-Y0)*i/3;el('line',{x1:X0,x2:X1,y1:yy,y2:yy,stroke:'rgba(255,255,255,.12)','stroke-width':1.5},g);}
  el('line',{x1:X0,x2:X1,y1:Y1,y2:Y1,stroke:'rgba(255,255,255,.4)','stroke-width':2},g);
  if(v.xl)v.xl.forEach(function(l,i){txt(g,l,X0+(X1-X0)*i/(v.xl.length-1),Y1+38,24,'rgba(255,255,255,.72)','middle',500);});
  var clip=X.clip();
  var S=v.series.map(function(s,si){var n=s.y.length,pts=s.y.map(function(y,i){return [X0+(X1-X0)*i/(n-1),Y1-(y-mn)/(mx-mn)*(Y1-Y0)];}),d=pts.map(function(q,i){return (i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1);}).join(' ');
    if(si===0){var ar=el('path',{d:d+' L'+X1+' '+Y1+' L'+X0+' '+Y1+' Z',fill:col(s.c),opacity:.16,'clip-path':clip.ref},g);}
    var path=el('path',{d:d,fill:'none',stroke:col(s.c),'stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round',filter:X.glow},g),len=path.getTotalLength();path.setAttribute('stroke-dasharray',len);
    var dot=el('circle',{r:12,fill:'#fff',stroke:col(s.c),'stroke-width':5,filter:X.glow},g),lab=txt(g,s.l||'',0,0,28,col(s.c),'start',700);return {path:path,len:len,dot:dot,lab:lab,pts:pts,s:s};});
  var marks=(v.marks||[]).map(function(m){var s=S[m.s||0],q=s.pts[m.i],c=el('circle',{cx:q[0],cy:q[1],r:0,fill:col(m.c||'o'),filter:X.glow},g),t=lines(g,m.t,q[0]+(m.dx||0),q[1]+(m.dy||-40),26,'#fff','middle');return {c:c,t:t,m:m,at:m.i/(s.pts.length-1)};});
  return function(p){var q=ease(sg(p,.06,.82));clip.rect.setAttribute('width',X0+(X1-X0)*q);
    S.forEach(function(o){o.path.setAttribute('stroke-dashoffset',o.len*(1-q));var pt=o.path.getPointAtLength(o.len*q);o.dot.setAttribute('cx',pt.x);o.dot.setAttribute('cy',pt.y);o.dot.setAttribute('opacity',q>0?1:0);o.lab.setAttribute('x',pt.x+(pt.x>950?-18:18));o.lab.setAttribute('text-anchor',pt.x>950?'end':'start');o.lab.setAttribute('y',pt.y-(v.series.length>1?18:0)+(pt.x>950?-22:0));o.lab.setAttribute('opacity',q>.05?1:0);});
    marks.forEach(function(o){var k=ease(sg(q,o.at,o.at+.08));o.c.setAttribute('r',16*back(k));o.t.forEach(function(e){e.setAttribute('opacity',k);});});};
};
V.donut=function(g,v,X){
  var cx=v.cx||430,cy=290,R=150,SW=64,tot=v.items.reduce(function(a,b){return a+b.v;},0),acc=0,Lc=2*Math.PI*R,arcs=[];
  el('circle',{cx:cx,cy:cy,r:R,fill:'none',stroke:'rgba(255,255,255,.1)','stroke-width':SW},g);
  v.items.forEach(function(it,i){var a=acc/tot,b=it.v/tot,c=el('circle',{cx:cx,cy:cy,r:R,fill:'none',stroke:col(it.c),'stroke-width':SW,'stroke-dasharray':'0 '+Lc,transform:'rotate('+(-90+a*360)+' '+cx+' '+cy+')',filter:X.glow},g);acc+=it.v;
    var ly=190+i*72,sw=el('rect',{x:760,y:ly-22,width:30,height:30,rx:8,fill:col(it.c)},g),l=txt(g,it.l,806,ly+2,32,'#fff','start',600),vv=txt(g,'',1130,ly+2,32,col(it.c),'end',800);arcs.push({c:c,b:b,sw:sw,l:l,vv:vv,it:it});});
  var ct=lines(g,v.center||'',cx,cy-6,fit(v.center||'',230,34),'#fff','middle');
  return function(p){arcs.forEach(function(o,i){var q=ease(sg(p,.08+i*.14,.5+i*.14));o.c.setAttribute('stroke-dasharray',(Math.max(0,o.b*Lc*q-3))+' '+Lc);o.sw.setAttribute('opacity',q);o.l.setAttribute('opacity',q);o.l.setAttribute('transform','translate('+((1-q)*30)+',0)');o.vv.setAttribute('opacity',q);o.vv.textContent=fmt(o.it.v*q)+(v.unit||' %');});
    ct.forEach(function(e){e.setAttribute('opacity',ease(sg(p,.5,.7)));});};
};
V.flow=function(g,v,X){
  var n=v.nodes.length,W=Math.min(270,(1120-(n-1)*70)/n),gap=(1120-n*W)/(n-1||1),x0=80,y=215,H=190,N=[],A=[];
  v.nodes.forEach(function(nd,i){var x=x0+i*(W+gap),gg=el('g',{},g),c=col(nd.c);el('rect',{x:x,y:y,width:W,height:H,rx:26,fill:'rgba(5,8,40,.35)'},gg);el('rect',{x:x,y:y,width:W,height:H,rx:26,fill:X.panel,stroke:c,'stroke-width':2.5},gg);el('rect',{x:x+20,y:y,width:W-40,height:8,rx:4,fill:c,filter:X.glow},gg);
    lines(gg,nd.t,x+W/2,y+80,fit(nd.t,W,40),'#fff','middle',44).forEach(function(e){e.setAttribute('font-weight',800);});lines(gg,nd.s||'',x+W/2,y+(String(nd.t).split('|').length>1?150:125),fit(nd.s||'',W,26),'rgba(255,255,255,.78)','middle',31);N.push({g:gg});});
  for(var i=0;i<n-1;i++){var xa=x0+i*(W+gap)+W+10,xb=x0+(i+1)*(W+gap)-10,yy=y+H/2,ln=el('line',{x1:xa,y1:yy,x2:xa,y2:yy,stroke:'#fff','stroke-width':5,'stroke-linecap':'round'},g),dot=el('circle',{r:10,fill:C.g,cx:xa,cy:yy,filter:X.glow},g);A.push({ln:ln,dot:dot,xa:xa,xb:xb});}
  return function(p){N.forEach(function(o,i){var q=back(sg(p,.04+i*.2,.24+i*.2));o.g.setAttribute('opacity',cl(q*1.5));o.g.setAttribute('transform','translate(0,'+((1-cl(q))*50)+')');});
    A.forEach(function(o,i){var q=ease(sg(p,.18+i*.2,.34+i*.2));o.ln.setAttribute('x2',o.xa+(o.xb-o.xa)*q);o.ln.setAttribute('opacity',q>0?1:0);var t=((p*3+i*.3)%1);o.dot.setAttribute('cx',o.xa+(o.xb-o.xa)*t);o.dot.setAttribute('opacity',q>=1?1:0);});};
};
V.cards=function(g,v,X){
  var n=v.items.length,W=Math.min(290,(1120-(n-1)*28)/n),gap=(1120-n*W)/(n-1||1),x0=80,y=130,H=340,N=[];
  v.items.forEach(function(it,i){var x=x0+i*(W+gap),gg=el('g',{},g),c=col(it.c);el('rect',{x:x,y:y,width:W,height:H,rx:28,fill:'rgba(5,8,40,.35)'},gg);el('rect',{x:x,y:y,width:W,height:H,rx:28,fill:X.panel,stroke:'rgba(255,255,255,.28)','stroke-width':2},gg);el('rect',{x:x+24,y:y,width:W-48,height:10,rx:5,fill:c,filter:X.glow},gg);
    if(it.big)txt(gg,it.big,x+W/2,y+105,70,c,'middle',800);
    lines(gg,it.t,x+W/2,y+(it.big?170:110),fit(it.t,W,40),'#fff','middle',44).forEach(function(e){e.setAttribute('font-weight',800);});lines(gg,it.s||'',x+W/2,y+(it.big?240:200),fit(it.s||'',W,27),'rgba(255,255,255,.82)','middle',33);N.push({g:gg});});
  return function(p){N.forEach(function(o,i){var q=back(sg(p,.05+i*.16,.3+i*.16));o.g.setAttribute('opacity',cl(q*1.6));o.g.setAttribute('transform','translate(0,'+((1-cl(q))*60)+')');});};
};
V.compare=function(g,v,X){
  var cols=v.cols,N=[];
  cols.forEach(function(c,ci){var x=ci?680:80,gg=el('g',{},g),cc=col(c.c);el('rect',{x:x,y:105,width:520,height:380,rx:28,fill:'rgba(5,8,40,.35)'},gg);el('rect',{x:x,y:105,width:520,height:380,rx:28,fill:X.panel,stroke:cc,'stroke-width':3},gg);txt(gg,c.l,x+260,170,42,cc,'middle',800);
    c.items.forEach(function(s,i){var y=235+i*62,m=txt(gg,c.no?'✕':'✓',x+48,y,36,cc,'middle',800),t=txt(gg,s,x+90,y,30,'#fff','start',500);N.push({m:m,t:t,i:i,ci:ci});});N.push({g:gg,ci:ci,card:true});});
  return function(p){N.forEach(function(o){if(o.card){o.g.setAttribute('opacity',ease(sg(p,.03+o.ci*.12,.2+o.ci*.12)));return;}var q=ease(sg(p,.2+o.ci*.1+o.i*.1,.35+o.ci*.1+o.i*.1));o.m.setAttribute('opacity',q);o.t.setAttribute('opacity',q);o.t.setAttribute('transform','translate('+((1-q)*-30)+',0)');});};
};
V.gauge=function(g,v,X){
  var cx=640,cy=420,R=230,SW=54,P=[];
  [['g',0,.4],['o',.4,.7],['r',.7,1]].forEach(function(s){var a0=Math.PI*(1-s[1]),a1=Math.PI*(1-s[2]);P.push(el('path',{d:'M'+(cx+R*Math.cos(a0))+' '+(cy-R*Math.sin(a0))+' A'+R+' '+R+' 0 0 1 '+(cx+R*Math.cos(a1))+' '+(cy-R*Math.sin(a1)),fill:'none',stroke:col(s[0]),'stroke-width':SW,filter:X.glow},g));});
  txt(g,v.l0||'Calme',cx-R,cy+50,26,'rgba(255,255,255,.8)','middle',500);txt(g,v.l1||'Risqué',cx+R,cy+50,26,'rgba(255,255,255,.8)','middle',500);
  var needle=el('line',{x1:cx,y1:cy,x2:cx-R+30,y2:cy,stroke:'#fff','stroke-width':10,'stroke-linecap':'round'},g);el('circle',{cx:cx,cy:cy,r:20,fill:'#fff'},g);var lab=txt(g,v.label||'',cx,cy+110,44,col(v.c||'o'),'middle',800);
  return function(p){var q=ease(sg(p,.1,.7)),ov=Math.sin(sg(p,.1,.9)*Math.PI*3)*.04*(1-cl(sg(p,.7,1))),val=v.value*q+ov,a=Math.PI*(1-val);needle.setAttribute('x2',cx+(R-34)*Math.cos(a));needle.setAttribute('y2',cy-(R-34)*Math.sin(a));P.forEach(function(e,i){e.setAttribute('opacity',ease(sg(p,i*.1,.2+i*.1))*.95);});lab.setAttribute('opacity',ease(sg(p,.6,.8)));};
};
V.list=function(g,v,X){
  var N=[];v.items.forEach(function(s,i){var y=185+i*96,gg=el('g',{},g);el('rect',{x:150,y:y-52,width:980,height:76,rx:22,fill:X.panel,stroke:'rgba(255,255,255,.18)','stroke-width':1.5},gg);el('circle',{cx:200,cy:y-14,r:24,fill:col(v.c||'g'),filter:X.glow},gg);txt(gg,'✓',200,y-3,30,'#0b0e2a','middle',800);txt(gg,s,250,y-2,38,'#fff','start',600);N.push(gg);});
  return function(p){N.forEach(function(o,i){var q=back(sg(p,.05+i*.16,.25+i*.16));o.setAttribute('opacity',cl(q*1.5));o.setAttribute('transform','translate('+((1-cl(q))*-60)+',0)');});};
};
V.dots=function(g,v,X){
  var D=[],S=34,x0=140,y0=100,leg=[];
  for(var i=0;i<100;i++)D.push(el('circle',{cx:x0+(i%10)*S*1.45+S/2,cy:y0+Math.floor(i/10)*S*1.18+S/2,r:S/2-3,fill:'rgba(255,255,255,.18)'},g));
  var idx=0;v.groups.forEach(function(gr,gi){for(var j=0;j<gr.n;j++)D[idx+j]._g=gi;idx+=gr.n;var y=170+gi*80,sw=el('rect',{x:700,y:y-26,width:34,height:34,rx:10,fill:col(gr.c)},g),l=lines(g,gr.l,752,y,32,'#fff','start',34),vv=txt(g,'',1150,y,34,col(gr.c),'end',800);leg.push({sw:sw,l:l,vv:vv,gr:gr,start:idx-gr.n});});
  return function(p){var q=ease(sg(p,.1,.8))*100;D.forEach(function(c,i){var on=i<q&&c._g!=null;c.setAttribute('fill',on?col(v.groups[c._g].c):'rgba(255,255,255,.18)');c.setAttribute('r',(S/2-3)*(on?1+Math.max(0,1-(q-i)/6)*.4:1));});
    leg.forEach(function(o){var qq=cl((q-o.start)/Math.max(1,o.gr.n));o.sw.setAttribute('opacity',qq>0?1:.25);o.l.forEach(function(e){e.setAttribute('opacity',qq>0?1:.25);});o.vv.textContent=Math.round(o.gr.n*qq)+' %';o.vv.setAttribute('opacity',qq>0?1:.25);});};
};

/* ---------- utilitaires ---------- */
function mm(t){t=Math.max(0,Math.round(t));return Math.floor(t/60)+':'+('0'+t%60).slice(-2);}
function dataFor(video){
  var A=(window.SITE_VIDEO_AUDIO||{})[video.id],sc=video.scenes.map(function(s,i){var a=A&&A.scenes[i];return {d:a?a.d:s.d,cues:a?a.cues:null,s:s};}),total=0,starts=[];
  sc.forEach(function(s){starts.push(total);total+=s.d;});return {A:A,sc:sc,total:total,starts:starts};
}
function totalOf(video){return dataFor(video).total;}
function bgHTML(){var s='';for(var i=0;i<22;i++)s+='<b style="left:'+((i*37)%100)+'%;top:'+((i*53)%100)+'%;animation-delay:-'+(i*1.3)%9+'s;animation-duration:'+(9+i%6*2)+'s;width:'+(3+i%4*2)+'px;height:'+(3+i%4*2)+'px"></b>';return '<div class="vbg"><i></i><i></i><i></i><div class="vgrid"></div><div class="vpart">'+s+'</div></div>';}
function pickPoster(video){var pref=['big','bars','line','donut','dots','gauge','cards','flow'];if(video.poster!=null)return video.poster;var best=1,bs=99;video.scenes.forEach(function(s,i){var r=pref.indexOf(s.v&&s.v.type);if(i>0&&r>=0&&r<bs){bs=r;best=i;}});return best;}

/* ---------- miniature (affichée avant la lecture et dans la liste) ---------- */
function poster(root,video,opts){
  opts=opts||{};var D=dataFor(video),pal=video.pal||['#5b3df5','#0a9fe0','#12d6a0'];
  root.innerHTML='<div class="vpost'+(opts.small?' small':'')+'">'+bgHTML()+'<svg class="vsvg" viewBox="0 0 1280 720"><defs></defs><g class="pg"></g></svg><div class="vshade"></div><div class="vpt"><span class="vchip">CHAPITRE '+(video.chapter+1)+'</span><h4>'+video.t+'</h4><span class="vmeta">Vidéo · '+mm(D.total)+'</span></div>'+(opts.play===false?'':'<span class="vplay"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>')+'<span class="vwm2">@BourseEnVrai</span></div>';
  var st=root.querySelector('.vpost'),svg=st.querySelector('svg'),g=st.querySelector('.pg'),bg=st.querySelectorAll('.vbg i');for(var q=0;q<3;q++)bg[q].style.background=pal[q];
  var i=pickPoster(video),s=video.scenes[i],X=makeCtx(svg),gg=el('g',{transform:'translate(330 40) scale(.78)'},g),B=V[s.v.type];if(B){var u=B(gg,s.v,X);u(.97);}
  return st;
}

/* ---------- lecteur ---------- */
function mount(root,video,opts){
  opts=opts||{};var D=dataFor(video),scenes=D.sc,starts=D.starts,total=D.total,A=D.A;
  root.innerHTML='<div class="vstage" tabindex="0">'+bgHTML()+'<svg class="vsvg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid meet"><defs></defs><g class="vg"></g></svg><div class="vwipe"></div>'+
   '<div class="vseg">'+scenes.map(function(s){return '<i style="flex:'+s.d+'"><u></u></i>';}).join('')+'</div><div class="vtop"><span class="vk"></span><span class="vwm">@BourseEnVrai</span></div><div class="vsub"></div>'+
   '<div class="vend" hidden><b>Fin de la vidéo</b><div><button type="button" class="btn btn-primary vre">Revoir</button>'+(opts.chapterBtn||'')+'</div></div><button type="button" class="vbig" aria-label="Lecture / pause"></button><div class="vpostbox"></div></div>'+
   '<div class="vctl"><button type="button" class="vpp" aria-label="Lecture / pause"></button><span class="vtime">0:00 / '+mm(total)+'</span><div class="vtrack"><div class="vfill"></div>'+starts.slice(1).map(function(s){return '<i style="left:'+(s/total*100)+'%"></i>';}).join('')+'<input type="range" min="0" max="1000" value="0" aria-label="Position dans la vidéo"></div>'+
   '<button type="button" class="vtg vcc" aria-pressed="true" title="Sous-titres">CC</button><button type="button" class="vtg vsp" title="Vitesse">1×</button><button type="button" class="vtg vmu" title="Son" aria-pressed="false">♪</button><button type="button" class="vfs" aria-label="Plein écran">⛶</button></div>';
  var stage=root.querySelector('.vstage'),g=root.querySelector('.vg'),svg=root.querySelector('.vsvg'),subEl=root.querySelector('.vsub'),kEl=root.querySelector('.vk'),pp=root.querySelector('.vpp'),big=root.querySelector('.vbig'),rng=root.querySelector('input'),fill=root.querySelector('.vfill'),tm=root.querySelector('.vtime'),endEl=root.querySelector('.vend'),wipe=root.querySelector('.vwipe'),segs=root.querySelectorAll('.vseg u'),pb=root.querySelector('.vpostbox');
  var t=0,playing=false,last=0,cur=-1,upd=null,raf=0,dead=false,cc=true,rate=1,started=false,au=null,curCue=-2;
  if(A&&A.file&&window.Audio){au=new Audio(A.file);au.preload='auto';}
  var posterEl=poster(pb,video);pb.addEventListener('click',function(){startNow();});
  var ICP='<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',ICA='<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
  var bgs=stage.querySelectorAll('.vbg i'),pal=video.pal||['#5b3df5','#0a9fe0','#12d6a0'];for(var q=0;q<3;q++)bgs[q].style.background=pal[q];
  function setScene(i){
    cur=i;curCue=-2;var s=scenes[i].s;g.innerHTML='';svg.querySelector('defs').innerHTML='';var X=makeCtx(svg);
    var gg=el('g',{},g),B=V[s.v&&s.v.type];upd=B?B(gg,s.v,X):function(){};
    kEl.innerHTML=(s.v&&s.v.type==='title')?'':'<em>'+('0'+(i+1)).slice(-2)+'</em>'+(s.k||video.t);
    var p2=s.pal||video.pal||pal;for(var q=0;q<3;q++)bgs[q].style.background=p2[q];
    wipe.classList.remove('go');void wipe.offsetWidth;wipe.classList.add('go');
  }
  function cueFor(i,tt){var c=scenes[i].cues;if(!c)return null;for(var k=0;k<c.length;k++)if(tt>=c[k].a-.05&&tt<c[k].b+.25)return k;return -1;}
  function frame(){
    var i=0;while(i<scenes.length-1&&t>=starts[i+1])i++;if(i!==cur)setScene(i);
    var s=scenes[i],tt=t-starts[i],p=cl(tt/s.d);
    var op=ease(sg(p,0,.04))*(1-ease(sg(p,.96,1))*(i<scenes.length-1?1:0));
    g.setAttribute('opacity',op);var sc=.935*(1+.03*p);g.setAttribute('transform','translate(0,'+(34-p*8)+') translate(640 360) scale('+sc+') translate(-640 -360)');
    upd(p);kEl.style.opacity=ease(sg(p,.02,.1));
    var ck=s.cues?cueFor(i,tt):null;
    if(s.cues){if(ck!==curCue){curCue=ck;subEl.textContent=ck>=0?s.cues[ck].t:'';}subEl.style.opacity=(cc&&ck>=0&&started)?1:0;}
    else{if(curCue!==-1){curCue=-1;subEl.textContent=s.s.text.replace(/\*\*/g,'');}subEl.style.opacity=(cc&&started)?1:0;}
    wipe.style.opacity='';
    segs.forEach(function(u,k){u.style.width=(k<i?100:k===i?p*100:0)+'%';});
    fill.style.width=(t/total*100)+'%';rng.value=Math.round(t/total*1000);tm.textContent=mm(t)+' / '+mm(total);
  }
  function loop(now){if(dead)return;raf=requestAnimationFrame(loop);
    if(playing){var dt=Math.min(.1,(now-last)/1000);
      if(au&&!au.paused&&au.readyState>=2){var a=au.currentTime;if(Math.abs(a-t)>.35&&Math.abs(a-(t+dt*rate))>.35)au.currentTime=t;else t=Math.max(t,a);}else t+=dt*rate;
      if(t>=total-.02){t=total-.02;frame();pause();endEl.hidden=false;return;}}
    last=now;frame();}
  function startNow(){started=true;pb.style.display='none';play();}
  function play(){if(!started){startNow();return;}if(t>=total-.05)t=0;endEl.hidden=true;playing=true;pp.innerHTML=ICA;stage.classList.add('playing');if(au){try{au.currentTime=t;au.playbackRate=rate;var pr=au.play();if(pr&&pr.catch)pr.catch(function(){});}catch(e){}}}
  function pause(){playing=false;pp.innerHTML=ICP;stage.classList.remove('playing');if(au)au.pause();}
  function toggle(){if(!started){startNow();return;}playing?pause():play();}
  pp.addEventListener('click',toggle);big.addEventListener('click',toggle);
  root.querySelector('.vre').addEventListener('click',function(){t=0;play();});
  rng.addEventListener('input',function(){t=rng.value/1000*total;endEl.hidden=true;if(au){try{au.currentTime=t;}catch(e){}}frame();});
  root.querySelector('.vfs').addEventListener('click',function(){var f=stage.requestFullscreen||stage.webkitRequestFullscreen;if(f)f.call(stage);});
  var ccb=root.querySelector('.vcc');ccb.addEventListener('click',function(){cc=!cc;ccb.setAttribute('aria-pressed',cc);frame();});
  var spb=root.querySelector('.vsp');spb.addEventListener('click',function(){rate=rate===1?1.25:rate===1.25?1.5:rate===1.5?.75:1;spb.textContent=(rate===.75?'0,75':String(rate).replace('.',','))+'×';if(au)au.playbackRate=rate;});
  var mub=root.querySelector('.vmu');mub.addEventListener('click',function(){if(!au)return;au.muted=!au.muted;mub.setAttribute('aria-pressed',au.muted);mub.style.opacity=au.muted?.45:1;});
  if(!au)mub.style.display='none';
  stage.addEventListener('keydown',function(e){if(e.key===' '){e.preventDefault();toggle();}if(e.key==='ArrowRight'){t=Math.min(total-.05,t+5);if(au)au.currentTime=t;}if(e.key==='ArrowLeft'){t=Math.max(0,t-5);if(au)au.currentTime=t;}if(e.key==='c')ccb.click();if(e.key==='m')mub.click();});
  pp.innerHTML=ICP;raf=requestAnimationFrame(function(n){last=n;loop(n);});frame();
  if(opts.autoplay)startNow();
  return {destroy:function(){dead=true;cancelAnimationFrame(raf);if(au){au.pause();au.src='';}},seek:function(x){t=x;if(au)try{au.currentTime=x;}catch(e){}frame();},pause:pause,play:play,start:startNow,total:total,starts:starts};
}
window.BEVPlayer={mount:mount,poster:poster,total:totalOf};
})();
