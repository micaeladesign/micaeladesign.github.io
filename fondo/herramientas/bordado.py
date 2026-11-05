# Genera las puntadas de las palabras bordadas del delantal (punto tallo en hilo blanco).
# Uso: pip install Hershey-Fonts && python3 bordado.py
# Escribe stitches.json con el SVG de cada palabra, para pegar en index.html.
# La cursiva de un solo trazo es "Script Simplex" de las fuentes Hershey (dominio público).

import math, random, json, sys
from HersheyFonts import HersheyFonts

def polylines(text, H):
    f=HersheyFonts(); f.load_default_font('scripts'); f.normalize_rendering(H)
    segs=[((x1,-y1),(x2,-y2)) for (x1,y1),(x2,y2) in f.lines_for_text(text)]
    lines=[]
    for a,b in segs:
        if lines and math.dist(lines[-1][-1],a)<1e-6: lines[-1].append(b)
        else: lines.append([a,b])
    xs=[p[0] for l in lines for p in l]; ys=[p[1] for l in lines for p in l]
    cx=(min(xs)+max(xs))/2
    # vertical anchor: middle of x-height ~ baseline - H*0.3 ; use bbox center of letters w/o descenders approx
    cy=(min(ys)+max(ys))/2
    return [[(x-cx,y-cy) for x,y in l] for l in lines], max(xs)-min(xs), max(ys)-min(ys)

def chaikin(l, n=3):
    for _ in range(n):
        if len(l)<3: return l
        out=[l[0]]
        for p,q in zip(l,l[1:]):
            out+= [(0.75*p[0]+0.25*q[0],0.75*p[1]+0.25*q[1]),(0.25*p[0]+0.75*q[0],0.25*p[1]+0.75*q[1])]
        out.append(l[-1]); l=out
    return l

def resample(l, step):
    d=[0]
    for p,q in zip(l,l[1:]): d.append(d[-1]+math.dist(p,q))
    L=d[-1]
    if L==0: return [l[0]], 0
    n=max(1,round(L/step)); pts=[]
    j=0
    for i in range(n+1):
        t=L*i/n
        while j<len(d)-2 and d[j+1]<t: j+=1
        seg=d[j+1]-d[j] or 1
        u=(t-d[j])/seg; p,q=l[j],l[j+1]
        pts.append((p[0]+(q[0]-p[0])*u, p[1]+(q[1]-p[1])*u))
    return pts, L

def f(v): return f'{v:.2f}'.rstrip('0').rstrip('.')

def word_svg(text, H, step, w, seed):
    rnd=random.Random(seed)
    lines,W,Hh=polylines(text,H)
    shadow=[];base=[];shade=[];hi=[];holes=[]
    for l in lines:
        l=chaikin(l)
        pts,L=resample(l, step/2)  # half-step grid: stem stitch overlaps by half
        if len(pts)<2: continue
        # stem stitch: each stitch spans 2 half-steps, starting every half-step*1
        i=0
        while i < len(pts)-1:
            a=pts[i]; b=pts[min(i+2,len(pts)-1)]
            j=lambda: rnd.uniform(-1,1)*w*0.12
            a=(a[0]+j(),a[1]+j()); b=(b[0]+j(),b[1]+j())
            dx,dy=b[0]-a[0],b[1]-a[1]; ln=math.hypot(dx,dy) or 1
            nx,ny=-dy/ln,dx/ln
            # stem stitch leans: offset ends slightly to opposite sides
            k=w*0.42
            a2=(a[0]+nx*k,a[1]+ny*k); b2=(b[0]-nx*k,b[1]-ny*k)
            bow=w*0.18*rnd.uniform(0.6,1.2)
            c=((a2[0]+b2[0])/2+nx*bow,(a2[1]+b2[1])/2+ny*bow)
            d=f'M{f(a2[0])} {f(a2[1])}Q{f(c[0])} {f(c[1])} {f(b2[0])} {f(b2[1])}'
            base.append(d)
            # highlight: shorter, shifted toward light (up-left)
            ha=(a2[0]+dx*0.22-w*0.12, a2[1]+dy*0.22-w*0.16); hb=(b2[0]-dx*0.25-w*0.12, b2[1]-dy*0.25-w*0.16)
            hc=((ha[0]+hb[0])/2+nx*bow*0.9,(ha[1]+hb[1])/2+ny*bow*0.9)
            hi.append(f'M{f(ha[0])} {f(ha[1])}Q{f(hc[0])} {f(hc[1])} {f(hb[0])} {f(hb[1])}')
            holes.append((b2[0],b2[1]))
            i+=1
    sh=w*0.35
    g=[]
    g.append(f'<path class="thread-shadow" transform="translate({f(sh*0.5)} {f(sh)})" stroke-width="{f(w*1.15)}" d="{"".join(base)}"/>')
    g.append(f'<path class="thread" stroke-width="{f(w)}" d="{"".join(base)}"/>')
    g.append(f'<path class="thread-shine" stroke-width="{f(w*0.32)}" d="{"".join(hi)}"/>')
    r=w*0.16
    pass
    return '\n'.join(g), W, Hh

cfg={'vedette':(28,1.7,1.15,1),'del mar':(28,1.7,1.15,2),'voraz':(68,3.4,2.1,3)}
res={}
for t,(H,step,w,seed) in cfg.items():
    s,W,Hh=word_svg(t,H,step,w,seed); res[t]={'svg':s,'w':W,'h':Hh}
    print(t, round(W,1), round(Hh,1), len(s))
json.dump(res,open('stitches.json','w'))
