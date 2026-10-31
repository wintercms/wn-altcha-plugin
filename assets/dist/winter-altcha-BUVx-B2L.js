var Af=Object.defineProperty;var rl=X=>{throw TypeError(X)};var _f=(X,Q,ve)=>Q in X?Af(X,Q,{enumerable:!0,configurable:!0,writable:!0,value:ve}):X[Q]=ve;var $=(X,Q,ve)=>_f(X,typeof Q!="symbol"?Q+"":Q,ve),Ja=(X,Q,ve)=>Q.has(X)||rl("Cannot "+ve);var d=(X,Q,ve)=>(Ja(X,Q,"read from private field"),ve?ve.call(X):Q.get(X)),I=(X,Q,ve)=>Q.has(X)?rl("Cannot add the same private member more than once"):Q instanceof WeakSet?Q.add(X):Q.set(X,ve),L=(X,Q,ve,Wt)=>(Ja(X,Q,"write to private field"),Wt?Wt.call(X,ve):Q.set(X,ve),ve),H=(X,Q,ve)=>(Ja(X,Q,"access private method"),ve);var nl={},al;function xf(){var Fo,Er,Kt,lr,Lr,Sr,$r,Rt,jr,He,rn,Vt,ut,xt,Ir,sr,Z,Xa,gn,Qa,il,ol,Vr,Cf,pn,Ho,No,Be,nn,Xe,cr,Ie,Ke,Pe,Ge,Tt,ur,Gt,Pr,an,on,zt,Mn,J,ll,sl,ei,cl,ti,bn,Gn,ri,ni,ft,Ot,dt,fr,ln,Dn,Na,Ft,Qe;if(al)return nl;al=1;const X=!1;var Q=Array.isArray,ve=Array.prototype.indexOf,Wt=Array.prototype.includes,ul=Array.from,mn=Object.keys,vr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,fl=Object.getOwnPropertyDescriptors,dl=Object.prototype,hl=Array.prototype,ai=Object.getPrototypeOf,ii=Object.isExtensible;const Nt=()=>{};function vl(e){for(var t=0;t<e.length;t++)e[t]()}function oi(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}const ye=2,pr=4,yn=8,Yn=1<<24,at=16,it=32,vt=64,Wn=128,Zn=256,Ye=512,ge=1024,fe=2048,ot=4096,We=8192,De=16384,Zt=32768,kn=1<<25,Mt=65536,wn=1<<17,gl=1<<18,Jt=1<<19,pl=1<<20,Xt=65536,An=1<<21,br=1<<22,Dt=1<<23,mr=Symbol("$state"),li=Symbol("component"),bl=Symbol("legacy props"),ml=Symbol(""),_n=Symbol("attributes"),Jn=Symbol("class"),Xn=Symbol("style"),zr=Symbol("text"),Or=Symbol("form reset"),Fr=new class extends Error{constructor(){super(...arguments);$(this,"name","StaleReactionError");$(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Hr=!!((Fo=globalThis.document)!=null&&Fo.contentType)&&globalThis.document.contentType.includes("xml"),Nr=3,Mr=8;function si(e){return e===this.v}function ci(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function yl(e){return!ci(e,this.v)}function kl(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Al(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _l(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Cl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function xl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Tl(){throw new Error("https://svelte.dev/e/hydration_failed")}function El(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ll(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Sl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function $l(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let jl=!1;const Il=1,Pl=2,Qn="[",ui="[!",fi="[?",di="]",Qt={},de=Symbol("uninitialized"),hi="http://www.w3.org/1999/xhtml",Rl="http://www.w3.org/2000/svg",Vl="http://www.w3.org/1998/Math/MathML",zl="@attach";let xe=null;function yr(e){xe=e}function $t(e,t=!1,r){xe={p:xe,i:!1,c:null,e:null,s:e,x:null,r:V,l:null}}function jt(e){var t=xe,r=t.e;if(r!==null){t.e=null;for(var n of r)Zi(n)}return e!==void 0&&(t.x=e),t.i=!0,xe=t.p,ea(e)}function ea(e={}){return vr(e,li,{value:!0}),e}function vi(){return!0}let er=[];function gi(){var e=er;er=[],vl(e)}function gt(e){if(er.length===0&&!Kr){var t=er;queueMicrotask(()=>{t===er&&gi()})}er.push(e)}function Ol(){for(;er.length>0;)gi()}function Fl(){console.warn("https://svelte.dev/e/derived_inert")}function Dr(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Hl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Nl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let R=!1;function pt(e){R=e}let O;function $e(e){if(e===null)throw Dr(),Qt;return O=e}function tr(){return $e(mt(O))}function he(e){if(R){if(mt(O)!==null)throw Dr(),Qt;O=e}}function ta(e=1){if(R){for(var t=e,r=O;t--;)r=mt(r);O=r}}function ra(e=!0){for(var t=0,r=O;;){if(r.nodeType===Mr){var n=r.data;if(n===di){if(t===0)return r;t-=1}else(n===Qn||n===ui||n[0]==="["&&!isNaN(Number(n.slice(1))))&&(t+=1)}var a=mt(r);e&&r.remove(),r=a}}function pi(e){if(!e||e.nodeType!==Mr)throw Dr(),Qt;return e.data}function It(e){if(typeof e!="object"||e===null||mr in e||li in e)return e;const t=ai(e);if(t!==dl&&t!==hl)return e;var r=new Map,n=Q(e),a=M(0),o=ar,s=l=>{if(ar===o)return l();var f=N,u=ar;Ze(null),Ui(o);var h=l();return Ze(f),Ui(u),h};return n&&r.set("length",M(e.length)),new Proxy(e,{defineProperty(l,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&El();var h=r.get(f);return h===void 0?s(()=>{var b=M(u.value);return r.set(f,b),b}):C(h,u.value,!0),!0},deleteProperty(l,f){var u=r.get(f);if(u===void 0){if(f in l){const h=s(()=>M(de));r.set(f,h),Yr(a)}}else C(u,de),Yr(a);return!0},get(l,f,u){var g;if(f===mr)return e;var h=r.get(f),b=f in l;if(h===void 0&&(!b||(g=gr(l,f))!=null&&g.writable)&&(h=s(()=>{var m=It(b?l[f]:de),y=M(m);return y}),r.set(f,h)),h!==void 0){var p=i(h);return p===de?void 0:p}return Reflect.get(l,f,u)},getOwnPropertyDescriptor(l,f){var u=Reflect.getOwnPropertyDescriptor(l,f);if(u&&"value"in u){var h=r.get(f);h&&(u.value=i(h))}else if(u===void 0){var b=r.get(f),p=b==null?void 0:b.v;if(b!==void 0&&p!==de)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return u},has(l,f){var p;if(f===mr)return!0;var u=r.get(f),h=u!==void 0&&u.v!==de||Reflect.has(l,f);if(u!==void 0||V!==null&&(!h||(p=gr(l,f))!=null&&p.writable)){u===void 0&&(u=s(()=>{var g=h?It(l[f]):de,m=M(g);return m}),r.set(f,u));var b=i(u);if(b===de)return!1}return h},set(l,f,u,h){var ce;var b=r.get(f),p=f in l;if(n&&f==="length")for(var g=u;g<b.v;g+=1){var m=r.get(g+"");m!==void 0?C(m,de):g in l&&(m=s(()=>M(de)),r.set(g+"",m))}if(b===void 0)(!p||(ce=gr(l,f))!=null&&ce.writable)&&(b=s(()=>M(void 0)),C(b,It(u)),r.set(f,b));else{p=b.v!==de;var y=s(()=>It(u));C(b,y)}var z=Reflect.getOwnPropertyDescriptor(l,f);if(z!=null&&z.set&&z.set.call(h,u),!p){if(n&&typeof f=="string"){var j=r.get("length"),q=Number(f);Number.isInteger(q)&&q>=j.v&&C(j,q+1)}Yr(a)}return!0},ownKeys(l){i(a);var f=Reflect.ownKeys(l).filter(b=>{var p=r.get(b);return p===void 0||p.v!==de});for(var[u,h]of r)h.v!==de&&!(u in l)&&f.push(u);return f},setPrototypeOf(){Ll()}})}function bi(e){try{if(e!==null&&typeof e=="object"&&mr in e)return e[mr]}catch{}return e}function mi(e,t){return Object.is(bi(e),bi(t))}var rr,na,yi,ki,wi;function aa(){if(rr===void 0){rr=window,na=document,yi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ki=gr(t,"firstChild").get,wi=gr(t,"nextSibling").get,ii(e)&&(e[Jn]=void 0,e[_n]=null,e[Xn]=void 0,e.__e=void 0),ii(r)&&(r[zr]=void 0)}}function bt(e=""){return document.createTextNode(e)}function ze(e){return ki.call(e)}function mt(e){return wi.call(e)}function ke(e,t){if(!R)return ze(e);var r=ze(O);if(r===null)r=O.appendChild(bt());else if(t&&r.nodeType!==Nr){var n=bt();return r==null||r.before(n),$e(n),n}return t&&Cn(r),$e(r),r}function kr(e,t=!1){if(!R){var r=ze(e);return r instanceof Comment&&r.data===""?mt(r):r}if(t){if((O==null?void 0:O.nodeType)!==Nr){var n=bt();return O==null||O.before(n),$e(n),n}Cn(O)}return O}function wr(e,t=!1){if(!R)return ze(e);var r=ke(e,t);return he(e),r}function ie(e,t=1,r=!1){let n=R?O:e;for(var a;t--;)a=n,n=mt(n);if(!R)return n;if(r){if((n==null?void 0:n.nodeType)!==Nr){var o=bt();return n===null?a==null||a.after(o):n.before(o),$e(o),o}Cn(n)}return $e(n),n}function Ml(e){e.textContent=""}function ia(e,t,r){return t==null||t===hi?document.createElement(e):document.createElementNS(t,e)}function Cn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===Nr;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Dl(e){var t=V;if(t===null)return N.f|=Dt,e;if((t.f&Zt)===0&&(t.f&pr)===0)throw e;yt(e,t)}function yt(e,t){if(!(t!==null&&(t.f&De)!==0)){for(;t!==null;){if((t.f&Wn)!==0&&(t.f&(De|kn))===0){if((t.f&Zt)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}const Ul=-7169;function ue(e,t){e.f=e.f&Ul|t}function oa(e){(e.f&Ye)!==0||e.deps===null?ue(e,ge):ue(e,ot)}function Ai(e){if(e!==null)for(const t of e)(t.f&ye)===0||(t.f&Xt)===0||(t.f^=Xt,Ai(t.deps))}function _i(e,t,r){(e.f&fe)!==0?t.add(e):(e.f&ot)!==0&&r.add(e),Ai(e.deps),ue(e,ge)}function Ci(e,t,r){if(e==null)return t(void 0),Nt;const n=Jr(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}const Ar=[];function ql(e,t=Nt){let r=null;const n=new Set;function a(l){if(ci(e,l)&&(e=l,r)){const f=!Ar.length;for(const u of n)u[1](),Ar.push(u,e);if(f){for(let u=0;u<Ar.length;u+=2)Ar[u][0](Ar[u+1]);Ar.length=0}}}function o(l){a(l(e))}function s(l,f=Nt){const u=[l,f];return n.add(u),n.size===1&&(r=t(a,o)||Nt),l(e),()=>{n.delete(u),n.size===0&&r&&(r(),r=null)}}return{set:a,update:o,subscribe:s}}function Ur(e){let t;return Ci(e,r=>t=r)(),t}let la=Symbol("unmounted");function xi(e,t,r){const n=r[t]??(r[t]={store:null,source:Fi(void 0),unsubscribe:Nt});if(n.store!==e&&!(la in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=Nt;else{var a=!0;n.unsubscribe=Ci(e,o=>{a?n.source.v=o:C(n.source,o)}),a=!1}return e&&la in r?Ur(e):i(n.source)}function Bl(){const e={};function t(){$n(()=>{for(var r in e)e[r].unsubscribe();vr(e,la,{enumerable:!1,value:!0})})}return[e,t]}function Kl(e,t){if(t){const r=document.body;e.autofocus=!0,gt(()=>{document.activeElement===r&&e.focus()})}}let Ti=!1;function Ei(){Ti||(Ti=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r[Or])==null||t.call(r)})},{capture:!0}))}function _r(e){var t=N,r=V;Ze(null),wt(null);try{return e()}finally{Ze(t),wt(r)}}function Gl(e,t,r,n=r){e.addEventListener(t,()=>_r(r));const a=e[Or];a?e[Or]=()=>{a(),n(!0)}:e[Or]=()=>n(!0),Ei()}function Li(e,t,r,n){const a=sa;var o=e.filter(g=>!g.settled),s=t.map(a);if(r.length===0&&o.length===0){n(s);return}var l=V,f=Yl(),u=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(g=>g.promise)):null;function h(g){if((l.f&De)===0){f();try{n([...s,...g])}catch(m){yt(m,l)}xn()}}var b=Si();if(r.length===0){u.then(()=>h([])).finally(b);return}function p(){Promise.all(r.map(g=>Wl(g))).then(h).catch(g=>yt(g,l)).finally(b)}u?u.then(()=>{f(),p(),xn()}):p()}function Yl(){var e=V,t=N,r=xe,n=T;return function(o=!0){wt(e),Ze(t),yr(r),o&&(e.f&De)===0&&(n==null||n.activate(),n==null||n.apply())}}function xn(e=!0){wt(null),Ze(null),yr(null),e&&(T==null||T.deactivate())}function Si(){var e=V,t=e.b,r=T,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function sa(e){var t=ye|fe;return V!==null&&(V.f|=Jt),{ctx:xe,deps:null,effects:null,equals:si,f:t,fn:e,reactions:null,rv:0,v:de,wv:0,parent:V,ac:null}}const qr=Symbol("obsolete");function Wl(e,t,r){let n=V;n===null&&wl();var a=void 0,o=Gr(de),s=!N,l=new Set;return ls(()=>{var g,m;var f=V,u=oi();a=u.promise;try{Promise.resolve(e()).then(u.resolve,y=>{y!==Fr&&u.reject(y)}).finally(xn)}catch(y){u.reject(y),xn()}var h=T;if(s){if((f.f&Zt)!==0)var b=Si();if((g=n.b)!=null&&g.is_rendered())(m=h.async_deriveds.get(f))==null||m.reject(qr);else for(const y of l.values())y.reject(qr);l.add(u),h.async_deriveds.set(f,u)}const p=(y,z=void 0)=>{b==null||b(),l.delete(u),z!==qr&&(h.activate(),z?(o.f|=Dt,Ln(o,z)):((o.f&Dt)!==0&&(o.f^=Dt),Ln(o,y)),h.deactivate())};u.promise.then(p,y=>p(null,y||"unknown"))}),$n(()=>{for(const f of l)f.reject(qr)}),new Promise(f=>{function u(h){function b(){h===a?f(o):u(a)}h.then(b,b)}u(a)})}function je(e){const t=sa(e);return Mi(t),t}function Zl(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)_e(t[r])}}function ca(e){var t,r=V,n=e.parent;if(!Pt&&n!==null&&e.v!==de&&(n.f&(De|We))!==0)return Fl(),e.v;wt(n);try{e.f&=~Xt,Zl(e),t=Ki(e)}finally{wt(r)}return t}function $i(e){var t=ca(e);if(!e.equals(t)&&(e.wv=qi(),(!(T!=null&&T.is_fork)||e.deps===null)&&(T!==null?(T.capture(e,t,!0),Br==null||Br.capture(e,t,!0)):e.v=t,e.deps===null))){ue(e,ge);return}Pt||(Ae!==null?(ga()||T!=null&&T.is_fork)&&Ae.set(e,t):oa(e))}function Jl(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&_r(()=>{r.ac.abort(Fr),r.ac=null}),r.fn!==null&&(r.teardown=Nt),Zr(r,0),ba(r))}function ji(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Tr(t)}let ua=null,Cr=null,T=null,Br=null,Ae=null,fa=null,Kr=!1,da=!1,xr=null,Tn=null;var Ii=0;let Xl=1;const Nn=class Nn{constructor(){I(this,Z);$(this,"id",Xl++);I(this,Er,!1);$(this,"linked",!0);I(this,Kt,null);I(this,lr,null);$(this,"async_deriveds",new Map);$(this,"current",new Map);$(this,"previous",new Map);I(this,Lr,new Set);I(this,Sr,new Set);I(this,$r,0);I(this,Rt,new Map);I(this,jr,null);I(this,He,[]);I(this,rn,[]);I(this,Vt,new Set);I(this,ut,new Set);I(this,xt,new Map);I(this,Ir,new Set);$(this,"is_fork",!1);I(this,sr,!1);Cr===null?ua=Cr=this:(L(Cr,lr,this),L(this,Kt,Cr)),Cr=this}skip_effect(t){d(this,xt).has(t)||d(this,xt).set(t,{d:[],m:[]}),d(this,Ir).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=d(this,xt).get(t);if(n){d(this,xt).delete(t);for(var a of n.d)ue(a,fe),r(a);for(a of n.m)ue(a,ot),r(a)}d(this,Ir).add(t)}capture(t,r,n=!1){t.v!==de&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Dt)===0&&(this.current.set(t,[r,n]),Ae==null||Ae.set(t,r)),this.is_fork||(t.v=r)}activate(){T=this}deactivate(){T=null,Ae=null}flush(){try{da=!0,T=this,H(this,Z,gn).call(this)}finally{Ii=0,fa=null,xr=null,Tn=null,da=!1,T=null,Ae=null,kt.clear()}}discard(){var t;for(const r of d(this,Sr))r(this);d(this,Sr).clear();for(const r of this.async_deriveds.values())r.reject(qr);H(this,Z,pn).call(this),(t=d(this,jr))==null||t.resolve()}register_created_effect(t){d(this,rn).push(t)}increment(t,r){if(L(this,$r,d(this,$r)+1),t){let n=d(this,Rt).get(r)??0;d(this,Rt).set(r,n+1)}}decrement(t,r){if(L(this,$r,d(this,$r)-1),t){let n=d(this,Rt).get(r)??0;n===1?d(this,Rt).delete(r):d(this,Rt).set(r,n-1)}d(this,sr)||(L(this,sr,!0),gt(()=>{L(this,sr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)d(this,Vt).add(n);for(const n of r)d(this,ut).add(n);t.clear(),r.clear()}oncommit(t){d(this,Lr).add(t)}ondiscard(t){d(this,Sr).add(t)}settled(){return(d(this,jr)??L(this,jr,oi())).promise}static ensure(){if(T===null){const t=T=new Nn;!da&&!Kr&&gt(()=>{d(t,Er)||t.flush()})}return T}apply(){{Ae=null;return}}schedule(t){var a;if(fa=t,(a=t.b)!=null&&a.is_pending&&(t.f&(pr|yn|Yn))!==0&&(t.f&Zt)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(xr!==null&&r===V&&(N===null||(N.f&ye)===0))return;if((n&(vt|it))!==0){if((n&ge)===0)return;r.f^=ge}}d(this,He).push(r)}};Er=new WeakMap,Kt=new WeakMap,lr=new WeakMap,Lr=new WeakMap,Sr=new WeakMap,$r=new WeakMap,Rt=new WeakMap,jr=new WeakMap,He=new WeakMap,rn=new WeakMap,Vt=new WeakMap,ut=new WeakMap,xt=new WeakMap,Ir=new WeakMap,sr=new WeakMap,Z=new WeakSet,Xa=function(){if(this.is_fork)return!0;for(const n of d(this,Rt).keys()){for(var t=n,r=!1;t.parent!==null;){if(d(this,xt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},gn=function(){var f,u,h,b;L(this,Er,!0),Ii++>1e3&&(H(this,Z,pn).call(this),Ql());for(const p of d(this,Vt))d(this,ut).delete(p),ue(p,fe),this.schedule(p);for(const p of d(this,ut))ue(p,ot),this.schedule(p);const t=d(this,He);L(this,He,[]),this.apply();var r=xr=[],n=[],a=Tn=[];for(const p of t)try{H(this,Z,Qa).call(this,p,r,n)}catch(g){throw zi(p),H(this,Z,Xa).call(this)||this.discard(),g}if(T=null,a.length>0){var o=Nn.ensure();for(const p of a)o.schedule(p)}if(xr=null,Tn=null,H(this,Z,Xa).call(this)){H(this,Z,Vr).call(this,n),H(this,Z,Vr).call(this,r);for(const[p,g]of d(this,xt))Vi(p,g);a.length>0&&H(f=T,Z,gn).call(f);return}const s=H(this,Z,il).call(this);if(s){H(this,Z,Vr).call(this,n),H(this,Z,Vr).call(this,r),H(u=s,Z,ol).call(u,this);return}d(this,Vt).clear(),d(this,ut).clear();for(const p of d(this,Lr))p(this);d(this,Lr).clear(),Br=this,Pi(n),Pi(r),Br=null,(h=d(this,jr))==null||h.resolve();var l=T;if(d(this,$r)===0&&(d(this,He).length===0||l!==null)&&H(this,Z,pn).call(this),d(this,He).length>0)if(l!==null){const p=l;d(p,He).push(...d(this,He).filter(g=>!d(p,He).includes(g)))}else l=this;l!==null&&(kt.clear(),H(b=l,Z,gn).call(b))},Qa=function(t,r,n){t.f^=ge;for(var a=t.first;a!==null;){var o=a.f,s=(o&(it|vt))!==0,l=s&&(o&ge)!==0,f=l||(o&We)!==0||d(this,xt).has(a);if(!f&&a.fn!==null){s?a.f^=ge:(o&pr)!==0?r.push(a):Wr(a)&&((o&at)!==0&&d(this,ut).add(a),Tr(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var h=a.next;if(h!==null){a=h;break}a=a.parent}}},il=function(){for(var t=d(this,Kt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=d(t,Kt)}return null},ol=function(t){var n;for(const[a,o]of t.current)!this.previous.has(a)&&t.previous.has(a)&&this.previous.set(a,t.previous.get(a)),this.current.set(a,o);for(const[a,o]of t.async_deriveds){const s=this.async_deriveds.get(a);s&&o.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(d(t,Vt),d(t,ut));const r=a=>{var o=a.reactions;if(o!==null&&!((a.f&ye)!==0&&(a.f&(fe|ot))===0))for(const f of o){var s=f.f;if((s&ye)!==0)r(f);else{var l=f;s&(br|at)&&!this.async_deriveds.has(l)&&(d(this,ut).delete(l),ue(l,fe),this.schedule(l))}}};for(const a of this.current.keys())r(a);this.oncommit(()=>t.discard()),H(n=t,Z,pn).call(n),T=this,H(this,Z,gn).call(this)},Vr=function(t){for(var r=0;r<t.length;r+=1)_i(t[r],d(this,Vt),d(this,ut))},Cf=function(){var b;for(let p=ua;p!==null;p=d(p,lr)){var t=p.id<this.id,r=[];for(const[g,[m,y]]of this.current){if(p.current.has(g)){var n=p.current.get(g)[0];if(t&&m!==n)p.current.set(g,[m,y]);else continue}r.push(g)}if(t)for(const[g,m]of this.async_deriveds){const y=p.async_deriveds.get(g);y&&m.promise.then(y.resolve).catch(y.reject)}var a=[...p.current.keys()].filter(g=>!p.current.get(g)[1]);if(!(!d(p,Er)||a.length===0)){var o=a.filter(g=>!this.current.has(g));if(o.length===0)t&&p.discard();else if(r.length>0){if(t)for(const g of d(this,Ir))p.unskip_effect(g,m=>{var y;(m.f&(at|br))!==0?p.schedule(m):H(y=p,Z,Vr).call(y,[m])});p.activate();var s=new Set,l=new Map;for(var f of r)Ri(f,o,s,l);l=new Map;var u=[...p.current].filter(([g,m])=>{const y=this.current.get(g);return y?y[0]!==m[0]||y[1]!==m[1]:!0}).map(([g])=>g);if(u.length>0)for(const g of d(this,rn))(g.f&(De|We|wn))===0&&ha(g,u,l)&&((g.f&(br|at))!==0?(ue(g,fe),p.schedule(g)):d(p,Vt).add(g));if(d(p,He).length>0&&!d(p,sr)){p.apply();for(var h of d(p,He))H(b=p,Z,Qa).call(b,h,[],[]);L(p,He,[])}p.deactivate()}}}},pn=function(){if(this.linked){var t=d(this,Kt),r=d(this,lr);t===null?ua=r:L(t,lr,r),r===null?Cr=t:L(r,Kt,t),this.linked=!1}};let Ut=Nn;function ee(e){var t=Kr;Kr=!0;try{for(var r;;){if(Ol(),T===null)return r;T.flush()}}finally{Kr=t}}function Ql(){try{xl()}catch(e){yt(e,fa)}}let lt=null;function Pi(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(De|We))===0&&Wr(n)&&(lt=new Set,Tr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&eo(n),(lt==null?void 0:lt.size)>0)){kt.clear();for(const a of lt){if((a.f&(De|We))!==0)continue;const o=[a];let s=a.parent;for(;s!==null;)lt.has(s)&&(lt.delete(s),o.push(s)),s=s.parent;for(let l=o.length-1;l>=0;l--){const f=o[l];(f.f&(De|We))===0&&Tr(f)}}lt.clear()}}lt=null}}function Ri(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const a of e.reactions){const o=a.f;(o&ye)!==0?Ri(a,t,r,n):(o&(br|at))!==0&&(o&fe)===0&&ha(a,t,n)&&(ue(a,fe),va(a))}}function ha(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const a of e.deps){if(Wt.call(t,a))return!0;if((a.f&ye)!==0&&ha(a,t,r))return r.set(a,!0),!0}return r.set(e,!1),!1}function va(e){T.schedule(e)}function Vi(e,t){if(!((e.f&it)!==0&&(e.f&ge)!==0)){(e.f&fe)!==0?t.d.push(e):(e.f&ot)!==0&&t.m.push(e),ue(e,ge);for(var r=e.first;r!==null;)Vi(r,t),r=r.next}}function zi(e){ue(e,ge);for(var t=e.first;t!==null;)zi(t),t=t.next}let En=new Set;const kt=new Map;let Oi=!1;function Gr(e,t){var r={f:0,v:e,reactions:null,equals:si,rv:0,wv:0};return r}function M(e,t){const r=Gr(e);return Mi(r),r}function Fi(e,t=!1,r=!0){const n=Gr(e);return t||(n.equals=yl),n}function C(e,t,r=!1){N!==null&&(!st||(N.f&wn)!==0)&&vi()&&(N.f&(ye|at|br|wn))!==0&&(At===null||!At.has(e))&&Sl();let n=r?It(t):t;return Ln(e,n,Tn)}function Ln(e,t,r=null){if(!e.equals(t)){Pt?kt.set(e,t):kt.has(e)||kt.set(e,e.v);var n=Ut.ensure();if(n.capture(e,t),(e.f&ye)!==0){const a=e;(e.f&fe)!==0&&ca(a),Ae===null&&oa(a)}e.wv=qi(),Hi(e,fe,r),V!==null&&(V.f&ge)!==0&&(V.f&(it|vt))===0&&(Je===null?ts([e]):Je.push(e)),!n.is_fork&&En.size>0&&!Oi&&es()}return t}function es(){Oi=!1;for(const e of En){(e.f&ge)!==0&&ue(e,ot);let t;try{t=Wr(e)}catch{t=!0}t&&Tr(e)}En.clear()}function Yr(e){C(e,e.v+1)}function Hi(e,t,r){var n=e.reactions;if(n!==null)for(var a=n.length,o=0;o<a;o++){var s=n[o],l=s.f,f=(l&fe)===0;if(f&&ue(s,t),(l&wn)!==0)En.add(s);else if((l&ye)!==0){var u=s;Ae==null||Ae.delete(u),(l&Xt)===0&&(l&Ye&&(V===null||(V.f&An)===0)&&(s.f|=Xt),Hi(u,ot,r))}else if(f){var h=s;(l&at)!==0&&lt!==null&&lt.add(h),r!==null?r.push(h):va(h)}}}let Sn=!1,Pt=!1;function Ni(e){Pt=e}let N=null,st=!1;function Ze(e){N=e}let V=null;function wt(e){V=e}let At=null;function Mi(e){N!==null&&(At??(At=new Set)).add(e)}let Oe=null,Ue=0,Je=null;function ts(e){Je=e}let Di=1,nr=0,ar=nr;function Ui(e){ar=e}function qi(){return++Di}function Wr(e){var t=e.f;if((t&fe)!==0)return!0;if(t&ye&&(e.f&=~Xt),(t&ot)!==0){for(var r=e.deps,n=r.length,a=0;a<n;a++){var o=r[a];if(Wr(o)&&$i(o),o.wv>e.wv)return!0}(t&Ye)!==0&&Ae===null&&ue(e,ge)}return!1}function Bi(e,t,r=!0){var n=e.reactions;if(n!==null&&!(At!==null&&At.has(e)))for(var a=0;a<n.length;a++){var o=n[a];(o.f&ye)!==0?Bi(o,t,!1):t===o&&(r?ue(o,fe):(o.f&ge)!==0&&ue(o,ot),va(o))}}function Ki(e){var t=Oe,r=Ue,n=Je,a=N,o=At,s=xe,l=st,f=ar,u=e.f;Oe=null,Ue=0,Je=null,N=(u&(it|vt))===0?e:null,At=null,yr(e.ctx),st=!1,ar=++nr,e.ac!==null&&(_r(()=>{e.ac.abort(Fr)}),e.ac=null);try{e.f|=An;var h=e.fn,b=h();e.f|=Zt;var p=Gi(e);if(vi()&&Je!==null&&!st&&p!==null&&(e.f&(ye|ot|fe))===0)for(var g=0;g<Je.length;g++)Bi(Je[g],e);if(a!==null&&a!==e){if(nr++,a.deps!==null)for(let m=0;m<r;m+=1)a.deps[m].rv=nr;if(t!==null)for(const m of t)m.rv=nr;Je!==null&&(n===null?n=Je:n.push(...Je))}return(e.f&Dt)!==0&&(e.f^=Dt),b}catch(m){return Gi(e),Dl(m)}finally{e.f^=An,Oe=t,Ue=r,Je=n,N=a,At=o,yr(s),st=l,ar=f}}function Gi(e){var a;var t=e.deps,r=T==null?void 0:T.is_fork;if(Oe!==null){var n;if(r||Zr(e,Ue),t!==null&&Ue>0)for(t.length=Ue+Oe.length,n=0;n<Oe.length;n++)t[Ue+n]=Oe[n];else e.deps=t=Oe;if(ga()&&(e.f&Ye)!==0)for(n=Ue;n<t.length;n++)((a=t[n]).reactions??(a.reactions=[])).push(e)}else!r&&t!==null&&Ue<t.length&&(Zr(e,Ue),t.length=Ue);return t}function rs(e,t){let r=t.reactions;if(r!==null){var n=ve.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}if(r===null&&(t.f&ye)!==0&&(Oe===null||!Wt.call(Oe,t))){var o=t;(o.f&Ye)!==0&&(o.f^=Ye,o.f&=~Xt),o.v!==de&&oa(o),o.ac!==null&&_r(()=>{o.ac.abort(Fr),o.ac=null,ue(o,fe)}),Jl(o),Zr(o,0)}}function Zr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)rs(e,r[n])}function Tr(e){var t=e.f;if((t&De)===0){ue(e,ge);var r=V,n=Sn;V=e,Sn=(t&(it|vt))===0;try{(t&(at|Yn))!==0?ss(e):ba(e),Xi(e);var a=Ki(e);e.teardown=typeof a=="function"?a:null,e.wv=Di;var o;X&&jl&&(e.f&fe)!==0&&e.deps}finally{Sn=n,V=r}}}async function ir(){await Promise.resolve(),ee()}function i(e){var t=e.f,r=(t&ye)!==0;if(N!==null&&!st){var n=V!==null&&(V.f&De)!==0;if(!n&&(At===null||!At.has(e))){var a=N.deps;if((N.f&An)!==0)e.rv<nr&&(e.rv=nr,Oe===null&&a!==null&&a[Ue]===e?Ue++:Oe===null?Oe=[e]:Oe.push(e));else{N.deps??(N.deps=[]),Wt.call(N.deps,e)||N.deps.push(e);var o=e.reactions;o===null?e.reactions=[N]:Wt.call(o,N)||o.push(N)}}}if(Pt&&kt.has(e))return kt.get(e);if(r){var s=e;if(Pt){var l=s.v;return((s.f&ge)===0&&s.reactions!==null||Wi(s))&&(l=ca(s)),kt.set(s,l),l}var f=(s.f&Ye)===0&&!st&&N!==null&&(Sn||(N.f&Ye)!==0),u=(s.f&Zt)===0;Wr(s)&&(f&&(s.f|=Ye),$i(s)),f&&!u&&(ji(s),Yi(s))}if(Ae!=null&&Ae.has(e))return Ae.get(e);if((e.f&Dt)!==0)throw e.v;return e.v}function Yi(e){if(e.f|=Ye,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ye)!==0&&(t.f&Ye)===0&&(ji(t),Yi(t))}function Wi(e){if(e.v===de)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(kt.has(t)||(t.f&ye)!==0&&Wi(t))return!0;return!1}function Jr(e){var t=st;try{return st=!0,e()}finally{st=t}}function ns(e){V===null&&(N===null&&Cl(),_l()),Pt&&Al()}function as(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ct(e,t){var r=V;r!==null&&(r.f&We)!==0&&(e|=We);var n={ctx:xe,deps:null,nodes:null,f:e|fe|Ye,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};T==null||T.register_created_effect(n);var a=n;if((e&pr)!==0)xr!==null?xr.push(n):Ut.ensure().schedule(n);else if(t!==null){try{Tr(n)}catch(s){throw _e(n),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Jt)===0&&(a=a.first,(e&at)!==0&&(e&Mt)!==0&&a!==null&&(a.f|=Mt))}if(a!==null&&(a.parent=r,r!==null&&as(a,r),N!==null&&(N.f&ye)!==0&&(e&vt)===0)){var o=N;(o.effects??(o.effects=[])).push(a)}return n}function ga(){return N!==null&&!st}function $n(e){const t=ct(yn,null);return ue(t,ge),t.teardown=e,t}function Fe(e){ns();var t=V.f,r=!N&&(t&it)!==0&&xe!==null&&!xe.i;if(r){var n=xe;(n.e??(n.e=[])).push(e)}else return Zi(e)}function Zi(e){return ct(pr|pl,e)}function is(e){Ut.ensure();const t=ct(vt|Jt,e);return()=>{_e(t)}}function os(e){Ut.ensure();const t=ct(vt|Jt,e);return(r={})=>new Promise(n=>{r.outro?Qr(t,()=>{_e(t),n(void 0)}):(_e(t),n(void 0))})}function pa(e){return ct(pr,e)}function ls(e){return ct(br|Jt,e)}function jn(e,t=0){return ct(yn|t,e)}function Te(e,t=[],r=[],n=[]){Li(n,t,r,a=>{ct(yn,()=>{e(...a.map(i))})})}function Xr(e,t=0){var r=ct(at|t,e);return r}function Ji(e,t=0){var r=ct(Yn|t,e);return r}function _t(e){return ct(it|Jt,e)}function Xi(e){var t=e.teardown;if(t!==null){const r=Pt,n=N;Ni(!0),Ze(null);try{t.call(null)}catch(a){yt(a,e.parent)}finally{Ni(r),Ze(n)}}}function ba(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&_r(()=>{a.abort(Fr)});var n=r.next;(r.f&vt)!==0?r.parent=null:_e(r,t),r=n}}function ss(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&it)===0&&_e(t),t=r}}function _e(e,t=!0){var r=!1;(t||(e.f&gl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Qi(e.nodes.start,e.nodes.end),r=!0),e.f|=kn,ba(e,t&&!r),Zr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)o.stop();Xi(e),e.f^=kn,e.f|=De;var a=e.parent;a!==null&&a.first!==null&&eo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Qi(e,t){for(;e!==null;){var r=e===t?null:mt(e);e.remove(),e=r}}function eo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Qr(e,t,r=!0){var n=[];e.f|=Zn,to(e,n,!0);var a=()=>{r&&_e(e),t&&t()},o=n.length;if(o>0){var s=()=>--o||a();for(var l of n)l.out(s)}else a()}function to(e,t,r){if((e.f&We)===0){e.f^=We;var n=e.nodes&&e.nodes.t;if(n!==null)for(const l of n)(l.is_global||r)&&t.push(l);for(var a=e.first;a!==null;){var o=a.next;if((a.f&vt)===0){var s=(a.f&Mt)!==0||(a.f&it)!==0&&(e.f&at)!==0;to(a,t,s?r:!1)}a=o}}}function ro(e){e.f&=~Zn,no(e,!0)}function no(e,t){if((e.f&Zn)===0&&(e.f&We)!==0){e.f^=We,(e.f&ge)===0&&(ue(e,fe),Ut.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Mt)!==0||(r.f&it)!==0;no(r,a?t:!1),r=n}var o=e.nodes&&e.nodes.t;if(o!==null)for(const s of o)(s.is_global||t)&&s.in()}}function ao(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var a=r===n?null:mt(r);t.append(r),r=a}}function cs(e){let t=0,r=Gr(0),n;return()=>{ga()&&(i(r),jn(()=>(t===0&&(n=Jr(()=>e(()=>Yr(r)))),t+=1,()=>{gt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Yr(r))})})))}}function io(e){const t={get:r=>Ur(t.store)[r],set:(r,n)=>{typeof r=="string"?Object.assign(Ur(t.store),{[r]:n}):Object.assign(Ur(t.store),r),t.store.set(Ur(t.store))},store:ql(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:io({}),i18n:io({}),instances:new Set,plugins:new Set};const us={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (official website, opens in new tab)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};globalThis.$altcha.i18n.set("en",us);const fs="5";typeof window<"u"&&((Ho=window.__svelte??(window.__svelte={})).v??(Ho.v=new Set)).add(fs);const or=Symbol("events"),oo=new Set,ma=new Set;function lo(e,t,r,n={}){function a(o){if(n.capture||wa.call(t,o),!o.cancelBubble)return _r(()=>r==null?void 0:r.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?gt(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function pe(e,t,r,n,a){var o={capture:n,passive:a},s=lo(e,t,r,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&$n(()=>{t.removeEventListener(e,s,o)})}function In(e,t,r){(t[or]??(t[or]={}))[e]=r}function Pn(e){for(var t=0;t<e.length;t++)oo.add(e[t]);for(var r of ma)r(e)}let ya=null,ka=!1;function wa(e){var y,z;var t=this,r=t.ownerDocument,n=e.type,a=((y=e.composedPath)==null?void 0:y.call(e))||[],o=a[0]||e.target;ya=e,ka||(ka=!0,setTimeout(()=>{ka=!1,ya=null}));var s=0,l=ya===e&&e[or];if(l){var f=a.indexOf(l);if(f!==-1&&(t===document||t===window)){e[or]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(s=f)}if(o=a[s]||e.target,o!==t){vr(e,"currentTarget",{configurable:!0,get(){return o||r}});var h=N,b=V;Ze(null),wt(null);try{for(var p,g=[];o!==null&&o!==t;){try{var m=(z=o[or])==null?void 0:z[n];m!=null&&(!o.disabled||e.target===o)&&m.call(o,e)}catch(j){p?g.push(j):p=j}if(e.cancelBubble)break;s++,o=s<a.length?a[s]:null}if(p){for(let j of g)queueMicrotask(()=>{throw j});throw p}}finally{e[or]=t,delete e.currentTarget,Ze(h),wt(b)}}}const Aa=((No=globalThis==null?void 0:globalThis.window)==null?void 0:No.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function ds(e){return(Aa==null?void 0:Aa.createHTML(e))??e}function so(e){var t=ia("template");return t.innerHTML=ds(e.replaceAll("<!>","<!---->")),t.content}function qe(e,t){var r=V;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function se(e,t){var r=(t&Il)!==0,n=(t&Pl)!==0,a,o=!e.startsWith("<!>");return()=>{if(R)return qe(O,null),O;a===void 0&&(a=so(o?e:"<!>"+e),r||(a=ze(a)));var s=n||yi?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=ze(s),f=s.lastChild;qe(l,f)}else qe(s,s);return s}}function hs(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(R)return qe(O,null),O;if(!o){var s=so(a),l=ze(s);o=ze(l)}var f=o.cloneNode(!0);return qe(f,f),f}}function _a(e,t){return hs(e,t,"svg")}function Rn(e=""){if(!R){var t=bt(e+"");return qe(t,t),t}var r=O;return r.nodeType!==Nr?(r.before(r=bt()),$e(r)):Cn(r),qe(r,r),r}function co(){if(R)return qe(O,null),O;var e=document.createDocumentFragment(),t=document.createComment(""),r=bt();return e.append(t,r),qe(t,r),e}function D(e,t){if(R){var r=V;((r.f&Zt)===0||r.nodes.end===null)&&(r.nodes.end=O),tr();return}e!==null&&e.before(t)}function vs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const gs=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ps(e){return gs.includes(e)}const bs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ms(e){return e=e.toLowerCase(),bs[e]??e}const ys=["touchstart","touchmove"];function ks(e){return ys.includes(e)}var ws=Mt|Jt;function As(e,t,r,n){new _s(e,t,r,n)}class _s{constructor(t,r,n,a){I(this,J);$(this,"parent");$(this,"is_pending",!1);$(this,"transform_error");I(this,Be);I(this,nn,R?O:null);I(this,Xe);I(this,cr);I(this,Ie);I(this,Ke,null);I(this,Pe,null);I(this,Ge,null);I(this,Tt,null);I(this,ur,0);I(this,Gt,0);I(this,Pr,!1);I(this,an,new Set);I(this,on,new Set);I(this,zt,null);I(this,Mn,cs(()=>(L(this,zt,Gr(d(this,ur))),()=>{L(this,zt,null)})));var o;L(this,Be,t),L(this,Xe,r),L(this,cr,s=>{var l=V;l.b=this,l.f|=Wn,n(s)}),this.parent=V.b,this.transform_error=a??((o=this.parent)==null?void 0:o.transform_error)??(s=>s),L(this,Ie,Xr(()=>{if(R){const s=d(this,nn);tr();const l=s.data===ui;if(s.data.startsWith(fi)){const u=JSON.parse(s.data.slice(fi.length));H(this,J,sl).call(this,u)}else l?H(this,J,cl).call(this):H(this,J,ll).call(this)}else H(this,J,ti).call(this)},ws)),R&&L(this,Be,O)}defer_effect(t){_i(t,d(this,an),d(this,on))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!d(this,Xe).pending}update_pending_count(t,r){H(this,J,ri).call(this,t,r),L(this,ur,d(this,ur)+t),!(!d(this,zt)||d(this,Pr))&&(L(this,Pr,!0),gt(()=>{L(this,Pr,!1),d(this,zt)&&Ln(d(this,zt),d(this,ur))}))}get_effect_pending(){return d(this,Mn).call(this),i(d(this,zt))}error(t){if(!d(this,Xe).onerror&&!d(this,Xe).failed)throw t;T!=null&&T.is_fork?(d(this,Ke)&&T.skip_effect(d(this,Ke)),d(this,Pe)&&T.skip_effect(d(this,Pe)),d(this,Ge)&&T.skip_effect(d(this,Ge)),T.oncommit(()=>{H(this,J,ni).call(this,t)})):H(this,J,ni).call(this,t)}}Be=new WeakMap,nn=new WeakMap,Xe=new WeakMap,cr=new WeakMap,Ie=new WeakMap,Ke=new WeakMap,Pe=new WeakMap,Ge=new WeakMap,Tt=new WeakMap,ur=new WeakMap,Gt=new WeakMap,Pr=new WeakMap,an=new WeakMap,on=new WeakMap,zt=new WeakMap,Mn=new WeakMap,J=new WeakSet,ll=function(){try{L(this,Ke,_t(()=>d(this,cr).call(this,d(this,Be))))}catch(t){this.error(t)}},sl=function(t){const r=d(this,Xe).failed,{reset:n,invoke_onerror:a}=H(this,J,ei).call(this,t);gt(a),r&&L(this,Ge,_t(()=>{r(d(this,Be),()=>t,()=>n)}))},ei=function(t){var r=!1,n=!1;const a=()=>{if(r){Nl();return}r=!0,n&&$l(),d(this,Ge)!==null&&Qr(d(this,Ge),()=>{L(this,Ge,null)}),H(this,J,Gn).call(this,()=>{H(this,J,ti).call(this)})};return{reset:a,invoke_onerror:()=>{var s,l;try{n=!0,(l=(s=d(this,Xe)).onerror)==null||l.call(s,t,a),n=!1}catch(f){yt(f,d(this,Ie)&&d(this,Ie).parent)}}}},cl=function(){const t=d(this,Xe).pending;t&&(this.is_pending=!0,L(this,Pe,_t(()=>t(d(this,Be)))),gt(()=>{var r=L(this,Tt,document.createDocumentFragment()),n=bt(),a=!1;if(r.append(n),L(this,Ke,H(this,J,Gn).call(this,()=>{try{return _t(()=>d(this,cr).call(this,n))}catch(o){try{this.error(o),a=!0}catch(s){yt(s,d(this,Ie).parent)}return null}})),d(this,Ke)===null){L(this,Tt,null),a&&H(this,J,bn).call(this,T);return}d(this,Gt)===0&&(d(this,Be).before(r),L(this,Tt,null),Qr(d(this,Pe),()=>{L(this,Pe,null)}),H(this,J,bn).call(this,T))}))},ti=function(){try{if(this.is_pending=this.has_pending_snippet(),L(this,Gt,0),L(this,ur,0),L(this,Ke,_t(()=>{d(this,cr).call(this,d(this,Be))})),d(this,Gt)>0){var t=L(this,Tt,document.createDocumentFragment());ao(d(this,Ke),t);const r=d(this,Xe).pending;L(this,Pe,_t(()=>r(d(this,Be))))}else H(this,J,bn).call(this,T)}catch(r){this.error(r)}},bn=function(t){this.is_pending=!1,t.transfer_effects(d(this,an),d(this,on))},Gn=function(t){var r=V,n=N,a=xe;wt(d(this,Ie)),Ze(d(this,Ie)),yr(d(this,Ie).ctx);try{return Ut.ensure(),t()}finally{wt(r),Ze(n),yr(a)}},ri=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&H(n=this.parent,J,ri).call(n,t,r);return}L(this,Gt,d(this,Gt)+t),d(this,Gt)===0&&(H(this,J,bn).call(this,r),d(this,Pe)&&Qr(d(this,Pe),()=>{L(this,Pe,null)}),d(this,Tt)&&(d(this,Be).before(d(this,Tt)),L(this,Tt,null)))},ni=function(t){d(this,Ke)&&(_e(d(this,Ke)),L(this,Ke,null)),d(this,Pe)&&(_e(d(this,Pe)),L(this,Pe,null)),d(this,Ge)&&(_e(d(this,Ge)),L(this,Ge,null)),R&&($e(d(this,nn)),ta(),$e(ra()));let r=d(this,Xe).failed;const n=a=>{const{reset:o,invoke_onerror:s}=H(this,J,ei).call(this,a);s(),r&&L(this,Ge,H(this,J,Gn).call(this,()=>{try{return _t(()=>{var l=V;l.b=this,l.f|=Wn,r(d(this,Be),()=>a,()=>o)})}catch(l){return yt(l,d(this,Ie).parent),null}}))};gt(()=>{var a;try{a=this.transform_error(t)}catch(o){yt(o,d(this,Ie)&&d(this,Ie).parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(n,o=>yt(o,d(this,Ie)&&d(this,Ie).parent)):n(a)})};function Ct(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[zr]??(e[zr]=e.nodeValue))&&(e[zr]=r,e.nodeValue=`${r}`)}function uo(e,t){return fo(e,t)}function Cs(e,t){aa(),t.intro=t.intro??!1;const r=t.target,n=R,a=O;try{for(var o=ze(r);o&&(o.nodeType!==Mr||o.data!==Qn);)o=mt(o);if(!o)throw Qt;pt(!0),$e(o);const s=fo(e,{...t,anchor:o});return pt(!1),s}catch(s){if(s instanceof Error&&s.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw s;return s!==Qt&&console.warn("Failed to hydrate: ",s),t.recover===!1&&Tl(),aa(),Ml(r),pt(!1),uo(e,t)}finally{pt(n),$e(a)}}const Vn=new Map;function fo(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:s=!0,transformError:l}){aa();var f=void 0,u=os(()=>{var h=r??t.appendChild(bt());As(h,{pending:()=>{}},g=>{$t({});var m=xe;if(o&&(m.c=o),a&&(n.$$events=a),R&&qe(g,null),f=e(g,n)||ea(),R&&(V.nodes.end=O,O===null||O.nodeType!==Mr||O.data!==di))throw Dr(),Qt;jt()},l);var b=new Set,p=g=>{for(var m=0;m<g.length;m++){var y=g[m];if(!b.has(y)){b.add(y);var z=ks(y);for(const ce of[t,document]){var j=Vn.get(ce);j===void 0&&(j=new Map,Vn.set(ce,j));var q=j.get(y);q===void 0?(ce.addEventListener(y,wa,{passive:z}),j.set(y,1)):j.set(y,q+1)}}}};return p(ul(oo)),ma.add(p),()=>{var z;for(var g of b)for(const j of[t,document]){var m=Vn.get(j),y=m.get(g);--y==0?(j.removeEventListener(g,wa),m.delete(g),m.size===0&&Vn.delete(j)):m.set(g,y)}ma.delete(p),h!==r&&((z=h.parentNode)==null||z.removeChild(h))}});return Ca.set(f,u),f}let Ca=new WeakMap;function xs(e,t){const r=Ca.get(e);return r?(Ca.delete(e),r(t)):Promise.resolve()}class zn{constructor(t,r=!0){$(this,"anchor");I(this,ft,new Map);I(this,Ot,new Map);I(this,dt,new Map);I(this,fr,new Set);I(this,ln,!0);I(this,Dn,t=>{if(d(this,ft).has(t)){var r=d(this,ft).get(t),n=d(this,Ot).get(r);if(n)ro(n),d(this,fr).delete(r);else{var a=d(this,dt).get(r);a&&(ro(a.effect),d(this,Ot).set(r,a.effect),d(this,dt).delete(r),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),n=a.effect)}for(const[o,s]of d(this,ft)){if(d(this,ft).delete(o),o===t)break;const l=d(this,dt).get(s);l&&(_e(l.effect),d(this,dt).delete(s))}for(const[o,s]of d(this,Ot)){if(o===r||d(this,fr).has(o))continue;const l=()=>{if(Array.from(d(this,ft).values()).includes(o)){var u=document.createDocumentFragment();ao(s,u),u.append(bt()),d(this,dt).set(o,{effect:s,fragment:u})}else _e(s);d(this,fr).delete(o),d(this,Ot).delete(o)};d(this,ln)||!n?(d(this,fr).add(o),Qr(s,l,!1)):l()}}});I(this,Na,t=>{d(this,ft).delete(t);const r=Array.from(d(this,ft).values());for(const[n,a]of d(this,dt))r.includes(n)||(_e(a.effect),d(this,dt).delete(n))});this.anchor=t,L(this,ln,r)}ensure(t,r){var n=T;r&&!d(this,Ot).has(t)&&!d(this,dt).has(t)&&d(this,Ot).set(t,_t(()=>r(this.anchor))),d(this,ft).set(n,t),R&&(this.anchor=O),d(this,Dn).call(this,n)}}ft=new WeakMap,Ot=new WeakMap,dt=new WeakMap,fr=new WeakMap,ln=new WeakMap,Dn=new WeakMap,Na=new WeakMap;function Ts(e,t,...r){var n=new zn(e);Xr(()=>{const a=t()??null;n.ensure(a,a&&(o=>a(o,...r)))},Mt)}function xa(e){xe===null&&kl(),Fe(()=>{const t=Jr(e);if(typeof t=="function")return t})}function be(e,t,r=!1){var n;R&&(n=O,tr());var a=new zn(e),o=r?Mt:0;function s(l,f){if(R){var u=pi(n);if(l!==parseInt(u.substring(1))){var h=ra();$e(h),a.anchor=h,pt(!1),a.ensure(l,f),pt(!0);return}}a.ensure(l,f)}Xr(()=>{var l=!1;t((f,u=0)=>{l=!0,s(u,f)}),l||s(-1,null)},o)}const Es=Symbol("NaN");function Ls(e,t,r){R&&tr();var n=new zn(e);Xr(()=>{var a=t();a!==a&&(a=Es),n.ensure(a,r)})}function ho(e,t,r=!1,n=!1,a=!1,o=!1){var s=e,l="";if(r){var f=e;R&&(s=$e(ze(f)))}Te(()=>{var u=V;if(l===(l=t()??"")){R&&tr();return}if(r&&!R){u.nodes=null,f.innerHTML=l,l!==""&&qe(ze(f),f.lastChild);return}if(u.nodes!==null&&(Qi(u.nodes.start,u.nodes.end),u.nodes=null),l!==""){if(R){O.data;for(var h=tr(),b=h;h!==null&&(h.nodeType!==Mr||h.data!=="");)b=h,h=mt(h);if(h===null)throw Dr(),Qt;qe(O,b),s=$e(h);return}var p=n?Rl:a?Vl:void 0,g=ia(n?"svg":a?"math":"template",p);g.innerHTML=l;var m=n||a?g:g.content;if(qe(ze(m),m.lastChild),n||a)for(;ze(m);)s.before(ze(m));else s.before(m)}})}function Ss(e,t,r){var n;R&&(n=O,tr());var a=new zn(e);Xr(()=>{var o=t()??null;if(R){var s=pi(n),l=s===Qn,f=o!==null;if(l!==f){var u=ra();$e(u),a.anchor=u,pt(!1),a.ensure(o,o&&(h=>r(h,o))),pt(!0);return}}a.ensure(o,o&&(h=>r(h,o)))},Mt)}function $s(e,t){var r=void 0,n;Ji(()=>{r!==(r=t())&&(n&&(_e(n),n=null),r&&(n=_t(()=>{pa(()=>r(e))})))})}function vo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=vo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function js(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=vo(e))&&(n&&(n+=" "),n+=t);return n}function Is(e){return typeof e=="object"?js(e):e??""}const go=[...` 	
\r\f \v\uFEFF`];function Ps(e,t,r){var n=e==null?"":""+e;if(r){for(var a of Object.keys(r))if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,s=0;(s=n.indexOf(a,s))>=0;){var l=s+o;(s===0||go.includes(n[s-1]))&&(l===n.length||go.includes(n[l]))?n=(s===0?"":n.substring(0,s))+n.substring(l+1):s=l}}return n===""?null:n}function po(e,t=!1){var r=t?" !important;":";",n="";for(var a of Object.keys(e)){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function Ta(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Rs(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,s=0,l=!1,f=[];n&&f.push(...Object.keys(n).map(Ta)),a&&f.push(...Object.keys(a).map(Ta));var u=0,h=-1;const y=e.length;for(var b=0;b<y;b++){var p=e[b];if(l?p==="/"&&e[b-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[b+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?s++:p===")"&&s--,!l&&o===!1&&s===0){if(p===":"&&h===-1)h=b;else if(p===";"||b===y-1){if(h!==-1){var g=Ta(e.substring(u,h).trim());if(!f.includes(g)){p!==";"&&b++;var m=e.substring(u,b).trim();r+=" "+m+";"}}u=b+1,h=-1}}}}return n&&(r+=po(n)),a&&(r+=po(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Vs(e,t,r,n,a,o){var s=e[Jn];if(R||s!==r||s===void 0){var l=Ps(r,n,o);(!R||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e[Jn]=r}else if(o&&a!==o)for(var f in o){var u=!!o[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return o}function Ea(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function zs(e,t,r,n){var a=e[Xn];if(R||a!==t){var o=Rs(t,n);(!R||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e[Xn]=t}else n&&(Array.isArray(n)?(Ea(e,r==null?void 0:r[0],n[0]),Ea(e,r==null?void 0:r[1],n[1],"important")):Ea(e,r,n));return n}function bo(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function mo(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,yo(e,!r||"__value"in e))}function yo(e,t){var r=e.__defaultValue,n=e.multiple,a=n?r??[]:null;if(!(n&&!Q(a))){var o=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var l of e.options){var f=Sa(l);bo(l,n?a.includes(f):mi(f,r))}if(t)if(s!==null)for(l of e.options){var u=s.has(l);l.selected!==u&&(l.selected=u)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function La(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Q(t))return Hl();for(var n of e.options)n.selected=t.includes(Sa(n));return}for(n of e.options){var a=Sa(n);if(mi(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Os(e){var t=new MutationObserver(r=>{r.every(Fs)||("__defaultValue"in e&&yo(e,!1),"__value"in e&&La(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),$n(()=>{t.disconnect()})}function Sa(e){return"__value"in e?e.__value:e.value}function Fs(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const en=Symbol("class"),tn=Symbol("style"),ko=Symbol("is custom element"),wo=Symbol("is html"),Hs=Hr?"link":"LINK",Ao=Hr?"input":"INPUT",Ns=Hr?"option":"OPTION",_o=Hr?"select":"SELECT",Ms=Hr?"progress":"PROGRESS";function $a(e){if(R){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;B(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var a=e.checked;B(e,"checked",null),e.checked=a}}};e[Or]=r,gt(r),Ei()}}function Ds(e,t){var r=ja(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Ms)||(e.value=t??"")}function B(e,t,r,n){var a=ja(e);R&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Hs)||a[t]!==(a[t]=r)&&(t==="loading"&&(e[ml]=r),r==null?e.removeAttribute(t):typeof r!="string"&&xo(e).has(t)?e[t]=r:e.setAttribute(t,r))}function Us(e,t,r,n,a=!1,o=!1){R&&a&&e.nodeName===Ao&&("defaultValue"in r||"defaultChecked"in r||$a(e));var s=ja(e),l=s[ko],f=!s[wo];let u=R&&l;u&&pt(!1);var h=t||{},b=e.nodeName===Ns,p=e.nodeName===_o;for(var g in t)!(g in r)&&g[0]+g[1]!=="$$"&&(r[g]=null);r.class?r.class=Is(r.class):r[en]&&(r.class=null),r[tn]&&(r.style??(r.style=null));var m=xo(e);if(e.nodeName===Ao&&"type"in r&&("value"in r||"__value"in r)){var y=r.type;(y!==h.type||y===void 0&&e.hasAttribute("type"))&&(h.type=y,B(e,"type",y))}for(const K in r){let E=r[K];if(b&&K==="value"&&E==null){e.value=e.__value="",h[K]=E;continue}if(K==="class"){var z=e.namespaceURI==="http://www.w3.org/1999/xhtml";Vs(e,z,E,n,t==null?void 0:t[en],r[en]),h[K]=E,h[en]=r[en];continue}if(K==="style"){zs(e,E,t==null?void 0:t[tn],r[tn]),h[K]=E,h[tn]=r[tn];continue}var j=h[K];if(!(E===j&&!(E===void 0&&e.hasAttribute(K)))){h[K]=E;var q=K[0]+K[1];if(q!=="$$")if(q==="on"){const ne={},Le="$$"+K;let F=K.slice(2);var ce=ps(F);if(vs(F)&&(F=F.slice(0,-7),ne.capture=!0),!ce&&j){if(E!=null)continue;e.removeEventListener(F,h[Le],ne),h[Le]=null}if(ce)In(F,e,E),Pn([F]);else if(E!=null){let me=function(et){h[K].call(this,et)};h[Le]=lo(F,e,me,ne)}}else if(K==="style")B(e,K,E);else if(K==="autofocus")Kl(e,!!E);else if(!l&&(K==="__value"||K==="value"&&E!=null))e.value=e.__value=E;else if(K==="selected"&&b)bo(e,E);else{var U=K;f||(U=ms(U));var Ee=U==="defaultValue"||U==="defaultChecked";if(p&&U==="defaultValue")continue;if(E==null&&!l&&!Ee)if(s[K]=null,U==="value"||U==="checked"){let ne=e;const Le=t===void 0;if(U==="value"){let F=ne.defaultValue;ne.removeAttribute(U),ne.defaultValue=F,ne.value=ne.__value=Le?F:null}else{let F=ne.defaultChecked;ne.removeAttribute(U),ne.defaultChecked=F,ne.checked=Le?F:!1}}else e.removeAttribute(K);else Ee||(l||typeof E!="string")&&m.has(U)?(e[U]=E,U in s&&(s[U]=de)):typeof E!="function"&&B(e,U,E)}}}return u&&pt(!0),h}function On(e,t,r=[],n=[],a=[],o,s=!1,l=!1){Li(a,r,n,f=>{var u=void 0,h={},b=e.nodeName===_o,p=!1;if(Ji(()=>{var m=t(...f.map(i)),y=Us(e,u,m,o,s,l);if(p&&b){var z=e;"defaultValue"in m&&mo(z,m.defaultValue),"value"in m&&La(z,m.value)}for(let q of Object.getOwnPropertySymbols(h))m[q]||_e(h[q]);for(let q of Object.getOwnPropertySymbols(m)){var j=m[q];q.description===zl&&(!u||j!==u[q])&&(h[q]&&_e(h[q]),h[q]=_t(()=>$s(e,()=>j))),y[q]=j}u=y}),b){var g=e;pa(()=>{var m=u;"defaultValue"in m&&mo(g,m.defaultValue),La(g,m.value,!0),Os(g)})}p=!0})}function ja(e){return e[_n]??(e[_n]={[ko]:e.nodeName.includes("-"),[wo]:e.namespaceURI===hi})}var Co=new Map;function xo(e){var t=e.getAttribute("is")||e.nodeName,r=Co.get(t);if(r)return r;Co.set(t,r=new Set);for(var n,a=e,o=Element.prototype;o!==a;){n=fl(a);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);a=ai(a)}return r}function qs(e,t,r=t){var n=new WeakSet;Gl(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Ia(e)?Pa(o):o,r(o),T!==null&&n.add(T),await ir(),o!==(o=t())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=o??"",l!==null){var u=e.value.length;s===l&&l===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=s,e.selectionEnd=Math.min(l,u))}}}),(R&&e.defaultValue!==e.value||Jr(t)==null&&e.value)&&(r(Ia(e)?Pa(e.value):e.value),T!==null&&n.add(T)),jn(()=>{var a=t();if(e===document.activeElement){var o=T;if(n.has(o))return}Ia(e)&&a===Pa(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Ia(e){var t=e.type;return t==="number"||t==="range"}function Pa(e){return e===""?null:+e}function Ra(e,t){return e===t||(e==null?void 0:e[mr])===t}function qt(e=ea(),t,r,n){var a=xe.r,o=V;return pa(()=>{var s,l;return jn(()=>{s=l,l=[],Jr(()=>{Ra(r(...l),e)||(t(e,...l),s&&Ra(r(...s),e)&&t(null,...s))})}),()=>{let f=o;for(;f!==a&&f.parent!==null&&f.parent.f&kn;)f=f.parent;const u=()=>{l&&Ra(r(...l),e)&&t(null,...l)},h=f.teardown;f.teardown=()=>{u(),h==null||h()}}}),e}const Bs={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.has(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function Fn(e,t,r){return new Proxy({props:e,exclude:t},Bs)}function oe(e,t,r,n){var a=n,o=!0,s=()=>(o&&(o=!1,a=n),a),l;l=e[t],l===void 0&&n!==void 0&&(l=s());var f;f=()=>{var p=e[t];return p===void 0?s():(o=!0,p)};var u=!1,h=sa(()=>(u=!1,f())),b=V;return(function(p,g){if(arguments.length>0){const m=g?i(h):p;return C(h,m),u=!0,a!==void 0&&(a=m),p}return Pt&&u||(b.f&De)!==0?h.v:i(h)})}function Ks(e){return new Gs(e)}class Gs{constructor(t){I(this,Ft);I(this,Qe);var o;var r=new Map,n=(s,l)=>{var f=Fi(l,!1,!1);return r.set(s,f),f};const a=new Proxy({...t.props||{},$$events:{}},{get(s,l){return i(r.get(l)??n(l,Reflect.get(s,l)))},has(s,l){return l===bl?!0:(i(r.get(l)??n(l,Reflect.get(s,l))),Reflect.has(s,l))},set(s,l,f){return C(r.get(l)??n(l,f),f),Reflect.set(s,l,f)}});L(this,Qe,(t.hydrate?Cs:uo)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&ee(),L(this,Ft,a.$$events);for(const s of Object.keys(d(this,Qe)))s==="$set"||s==="$destroy"||s==="$on"||vr(this,s,{get(){return d(this,Qe)[s]},set(l){d(this,Qe)[s]=l},enumerable:!0});d(this,Qe).$set=s=>{Object.assign(a,s)},d(this,Qe).$destroy=()=>{xs(d(this,Qe))}}$set(t){d(this,Qe).$set(t)}$on(t,r){d(this,Ft)[t]=d(this,Ft)[t]||[];const n=(...a)=>r.call(this,...a);return d(this,Ft)[t].push(n),()=>{d(this,Ft)[t]=d(this,Ft)[t].filter(a=>a!==n)}}$destroy(){d(this,Qe).$destroy()}}Ft=new WeakMap,Qe=new WeakMap;let To=class{};typeof HTMLElement=="function"&&(To=class extends HTMLElement{constructor(t,r,n){super();$(this,"$$ctor");$(this,"$$s");$(this,"$$c");$(this,"$$cn",!1);$(this,"$$d",{});$(this,"$$r",!1);$(this,"$$p_d",{});$(this,"$$l",{});$(this,"$$l_u",new Map);$(this,"$$me");$(this,"$$shadowRoot",null);this.$$ctor=t,this.$$s=r,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(t,r,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(r),this.$$c){const a=this.$$c.$on(t,r);this.$$l_u.set(r,a)}super.addEventListener(t,r,n)}removeEventListener(t,r,n){if(super.removeEventListener(t,r,n),this.$$c){const a=this.$$l_u.get(r);a&&(a(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return o=>{const s=ia("slot");a!=="default"&&(s.name=a),D(o,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const r={},n=Ys(this);for(const a of this.$$s)a in n&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),r.default=!0):r[a]=t(a));for(const a of this.attributes){const o=this.$$g_p(a.name);o in this.$$d||(this.$$d[o]=Hn(o,a.value,this.$$p_d,"toProp"))}for(const a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=Ks({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:r,$$host:this}}),this.$$me=is(()=>{jn(()=>{var a;this.$$r=!0;for(const o of mn(this.$$c)){if(!((a=this.$$p_d[o])!=null&&a.reflect))continue;this.$$d[o]=this.$$c[o];const s=Hn(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1})});for(const a in this.$$l)for(const o of this.$$l[a]){const s=this.$$c.$on(a,o);this.$$l_u.set(o,s)}this.$$l={}}}attributeChangedCallback(t,r,n){var a;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Hn(t,n,this.$$p_d,"toProp"),(a=this.$$c)==null||a.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return mn(this.$$p_d).find(r=>this.$$p_d[r].attribute===t||!this.$$p_d[r].attribute&&r.toLowerCase()===t)||t}});function Hn(e,t,r,n){var o;const a=(o=r[e])==null?void 0:o.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!r[e])return t;if(n==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Ys(e){const t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}function Bt(e,t,r,n,a,o){let s=class extends To{constructor(){super(e,r,a),this.$$p_d=t}static get observedAttributes(){return mn(t).map(l=>(t[l].attribute||l).toLowerCase())}};return mn(t).forEach(l=>{vr(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){var b;f=Hn(l,f,t),this.$$d[l]=f;var u=this.$$c;if(u){var h=(b=gr(u,l))==null?void 0:b.get;h?u[l]=f:u.$set({[l]:f})}}})}),n.forEach(l=>{vr(s.prototype,l,{get(){var f;return(f=this.$$c)==null?void 0:f[l]}})}),e.element=s,s}var Ws=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Zs=se('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function Eo(e,t){$t(t,!0);let r=oe(t,"loading"),n=Fn(t,Ws),a;function o(){a==null||a.click()}var s={get loading(){return r()},set loading(h){r(h),ee()}},l=Zs(),f=ke(l);On(f,()=>({type:"checkbox",...n}),void 0,void 0,void 0,void 0,!0),qt(f,h=>a=h,()=>a);var u=ie(f,2);return ta(2),he(l),Te(()=>B(l,"data-loading",r())),In("click",u,o),D(e,l),jt(s)}Pn(["click"]),Bt(Eo,{loading:{}},[],[],{mode:"open"});var Js=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Xs=se('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function Lo(e,t){$t(t,!0);let r=oe(t,"loading"),n=Fn(t,Js);var a={get loading(){return r()},set loading(l){r(l),ee()}},o=Xs(),s=ke(o);return On(s,()=>({type:"checkbox",...n}),void 0,void 0,void 0,void 0,!0),ta(2),he(o),Te(()=>B(o,"data-loading",r())),D(e,o),jt(a)}Bt(Lo,{loading:{}},[],[],{mode:"open"});var Qs=se('<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function Va(e,t){$t(t,!0);let r=oe(t,"strings");const n="https://altcha.org";var a={get strings(){return r()},set strings(l){r(l),ee()}},o=Qs(),s=ke(o);return B(s,"href",n),he(o),Te(()=>B(s,"aria-label",r().ariaLinkLabel)),D(e,o),jt(a)}Bt(Va,{strings:{}},[],[],{mode:"open"});var ec=se('<div class="altcha-footer"><p></p> <!></div>');function za(e,t){$t(t,!0);let r=oe(t,"logo"),n=oe(t,"strings");var a={get logo(){return r()},set logo(u){r(u),ee()},get strings(){return n()},set strings(u){n(u),ee()}},o=ec(),s=ke(o);ho(s,()=>n().footer,!0),he(s);var l=ie(s,2);{var f=u=>{Va(u,{get strings(){return n()}})};be(l,u=>{r()&&u(f)})}return he(o),D(e,o),jt(a)}Bt(za,{logo:{},strings:{}},[],[],{mode:"open"});var tc=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),rc=se('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function So(e,t){$t(t,!0);let r=oe(t,"loading"),n=Fn(t,tc),a;function o(){a==null||a.click()}var s={get loading(){return r()},set loading(h){r(h),ee()}},l=rc(),f=ke(l);On(f,()=>({type:"checkbox",...n}),void 0,void 0,void 0,void 0,!0),qt(f,h=>a=h,()=>a);var u=ie(f,2);return he(l),Te(()=>B(l,"data-loading",r())),In("click",u,o),D(e,l),jt(s)}Pn(["click"]),Bt(So,{loading:{}},[],[],{mode:"open"});var Ce=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(Ce||{}),$o=(e=>(e.SHA_256="SHA-256",e.SHA_384="SHA-384",e.SHA_512="SHA-512",e))($o||{}),G=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(G||{}),nc=se('<div class="altcha-code-challenge-title"> </div>'),ac=se('<div class="altcha-spinner"></div>'),ic=_a('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),oc=_a('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),lc=_a('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),sc=se('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),cc=se('<audio hidden="" autoplay=""></audio>'),uc=se('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function jo(e,t){$t(t,!0);let r=oe(t,"audioUrl"),n=oe(t,"codeChallenge"),a=oe(t,"config"),o=oe(t,"imageUrl"),s=oe(t,"onCancel"),l=oe(t,"onReload"),f=oe(t,"onSubmit"),u=oe(t,"strings"),h=M(void 0),b=M(void 0),p=M(void 0),g=M(!1),m=M(""),y=M(!1);xa(()=>(a().disableAutoFocus||ir().then(()=>{var _;(_=i(p))==null||_.focus()}),()=>{i(b)&&(i(b).pause(),C(b,void 0))}));function z(){C(h,Ce.PAUSED,!0)}function j(_){C(h,Ce.ERROR,!0)}function q(){C(h,Ce.READY,!0)}function ce(){C(h,Ce.LOADING,!0)}function U(){C(h,Ce.PLAYING,!0)}function Ee(){C(h,Ce.PAUSED,!0)}function K(_){var Y;_.code==="Space"?(_.preventDefault(),_.stopPropagation(),Le()):_.code==="Escape"&&(_.preventDefault(),_.stopPropagation(),(Y=s())==null||Y())}function E(_){var Y;_.preventDefault(),_.stopPropagation(),(Y=f())==null||Y(i(m))}function ne(_){_.play().catch(Y=>{if(!(Y instanceof DOMException&&Y.name==="AbortError"))throw Y})}function Le(){i(b)?i(h)===Ce.LOADING||(i(b).paused?(r()&&i(b).src!==r()&&(i(b).src=r()),i(b).currentTime=0,ne(i(b))):i(b).pause()):(C(y,!0),requestAnimationFrame(()=>{i(b)&&r()&&(i(b).src=r(),ne(i(b)))}))}var F={get audioUrl(){return r()},set audioUrl(_){r(_),ee()},get codeChallenge(){return n()},set codeChallenge(_){n(_),ee()},get config(){return a()},set config(_){a(_),ee()},get imageUrl(){return o()},set imageUrl(_){o(_),ee()},get onCancel(){return s()},set onCancel(_){s(_),ee()},get onReload(){return l()},set onReload(_){l(_),ee()},get onSubmit(){return f()},set onSubmit(_){f(_),ee()},get strings(){return u()},set strings(_){u(_),ee()}},me=uc(),et=ke(me),Ne=ke(et);{var tt=_=>{var Y=nc(),hr=wr(Y,!0);Te(()=>Ct(hr,u().verificationRequired)),D(_,Y)};be(Ne,_=>{a().codeChallengeDisplay!=="standard"&&_(tt)})}var le=ie(Ne,2),Ht=wr(le,!0),x=ie(le,2),we=ie(x,2),te=ke(we);$a(te),te.disabled=i(g),qt(te,_=>C(p,_),()=>i(p));var w=ie(te,2);{var sn=_=>{var Y=sc(),hr=ke(Y);{var hn=Re=>{var Lt=ac();D(Re,Lt)},Ma=Re=>{var Lt=ic();D(Re,Lt)},Da=Re=>{var Lt=oc();D(Re,Lt)},Ua=Re=>{var Lt=lc();D(Re,Lt)};be(hr,Re=>{i(h)===Ce.LOADING?Re(hn):i(h)===Ce.ERROR?Re(Ma,1):i(h)===Ce.PLAYING?Re(Da,2):Re(Ua,-1)})}he(Y),Te(()=>{B(Y,"title",u().getAudioChallenge),Y.disabled=i(h)===Ce.LOADING||i(h)===Ce.ERROR,B(Y,"aria-label",i(h)===Ce.LOADING?u().loading:u().getAudioChallenge)}),pe("click",Y,()=>Le(),!0),D(_,Y)};be(w,_=>{n().audio&&_(sn)})}var cn=ie(w,2);he(we);var Et=ie(we,2),un=ke(Et),Un=wr(un,!0),dr=ie(un,2),fn=wr(dr,!0);he(Et),he(et);var dn=ie(et,2);{var Me=_=>{var Y=cc();qt(Y,hr=>C(b,hr),()=>i(b)),pe("error",Y,j),pe("loadstart",Y,ce),pe("canplay",Y,q),pe("pause",Y,Ee),pe("playing",Y,U),pe("ended",Y,z),D(_,Y)};be(dn,_=>{i(y)&&_(Me)})}return he(me),Te(()=>{Ct(Ht,u().enterCodeFromImage),B(x,"src",o()),B(te,"minlength",n().length||1),B(te,"maxlength",n().length),B(te,"placeholder",u().enterCode),B(te,"aria-label",i(h)===Ce.LOADING?u().loading:i(h)===Ce.PLAYING?"":u().enterCodeAria),B(te,"aria-live",i(h)?"assertive":"polite"),B(te,"aria-busy",i(h)===Ce.LOADING),B(cn,"title",u().reload),B(cn,"aria-label",u().reload),B(un,"aria-label",u().verify),Ct(Un,u().verify),B(dr,"aria-label",u().cancel),Ct(fn,u().cancel)}),pe("submit",et,E,!0),In("keydown",te,K),qs(te,()=>i(m),_=>C(m,_)),pe("click",cn,()=>{var _;return(_=l())==null?void 0:_()},!0),pe("click",dr,()=>{var _;return(_=s())==null?void 0:_()},!0),D(e,me),jt(F)}Pn(["keydown"]),Bt(jo,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var fc=new Set(["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),dc=se('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),hc=se('<div class="altcha-popover-arrow"></div>'),vc=se('<div role="button" class="altcha-popover-close">&times;</div>'),gc=se('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function Oa(e,t){$t(t,!0);let r=oe(t,"anchor"),n=oe(t,"children"),a=oe(t,"display",7,"standard"),o=oe(t,"backdrop",7,!1),s=oe(t,"onClickOutside"),l=oe(t,"onClickOutsideDelay",7,600),f=oe(t,"onClose"),u=oe(t,"placement",7,"auto"),h=oe(t,"updateUISignal"),b=oe(t,"variant",7,"neutral"),p=Fn(t,fc),g=M(void 0),m=M(void 0),y=M(!1),z=M(0);Fe(()=>{u()!=="auto"&&C(y,u()==="top")}),Fe(()=>{h()&&Ee()}),xa(()=>{const x=a()==="bottomsheet"||a()==="overlay";return x&&(i(m)&&document.body.append(i(m)),i(g)&&document.body.append(i(g))),Ee(),ir().then(()=>{C(z,Date.now(),!0)}),()=>{x&&(i(m)&&document.body.removeChild(i(m)),i(g)&&document.body.removeChild(i(g)))}});function j(){var x;(x=f())==null||x()}function q(x){var te,w;const we=x.target;!((te=i(g))!=null&&te.contains(we))&&(!l()||i(z)+l()<Date.now())&&((w=s())==null||w())}function ce(){Ee()}function U(){Ee()}function Ee(){if(r()&&u()==="auto"&&i(g)){const x=r().getBoundingClientRect(),te=document.documentElement.clientHeight-(x.top+x.height)<i(g).clientHeight;i(y)!==te&&C(y,te)}}var K={get anchor(){return r()},set anchor(x){r(x),ee()},get children(){return n()},set children(x){n(x),ee()},get display(){return a()},set display(x="standard"){a(x),ee()},get backdrop(){return o()},set backdrop(x=!1){o(x),ee()},get onClickOutside(){return s()},set onClickOutside(x){s(x),ee()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(x=600){l(x),ee()},get onClose(){return f()},set onClose(x){f(x),ee()},get placement(){return u()},set placement(x="auto"){u(x),ee()},get updateUISignal(){return h()},set updateUISignal(x){h(x),ee()},get variant(){return b()},set variant(x="neutral"){b(x),ee()}},E=gc();pe("click",rr,q,!0),pe("resize",rr,ce),pe("scroll",rr,U);var ne=kr(E);{var Le=x=>{var we=dc();qt(we,te=>C(m,te),()=>i(m)),D(x,we)};be(ne,x=>{o()&&x(Le)})}var F=ie(ne,2);On(F,()=>({...p,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":b(),"data-top":i(y),"data-display":a()}));var me=ke(F);{var et=x=>{var we=hc();D(x,we)};be(me,x=>{a()==="standard"&&x(et)})}var Ne=ie(me,2);{var tt=x=>{var we=vc();pe("click",we,j,!0),D(x,we)};be(Ne,x=>{a()!=="standard"&&x(tt)})}var le=ie(Ne,2),Ht=ke(le);return Ts(Ht,()=>n()??Nt),he(le),he(F),qt(F,x=>C(g,x),()=>i(g)),D(e,E),jt(K)}Bt(Oa,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function pc(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function bc(e,t="altcha-css",r){var n,a;if(typeof document<"u"&&document&&!document.getElementById(t)){const o=document.createElement("style");o.id=t,o.textContent=e;const s=((n=document.currentScript)==null?void 0:n.nonce)??((a=document.querySelector('meta[name="csp-nonce"]'))==null?void 0:a.content);s&&(o.nonce=s),document.head.appendChild(o)}}Object.values($o);async function Io(e){var p;const{challenge:t,concurrency:r=navigator.hardwareConcurrency,controller:n=new AbortController,createWorker:a,onOutOfMemory:o=g=>g>1?Math.floor(g/2):0,counterMode:s,timeout:l}=e,f=Math.min(16,Math.max(1,r)),u=[],h=()=>{for(const g of u)g.terminate()};for(let g=0;g<f;g++)u.push(await a(t.parameters.algorithm));let b=null;try{b=await Promise.race(u.map((g,m)=>(n.signal.addEventListener("abort",()=>{g.postMessage({type:"abort"})}),new Promise((y,z)=>{g.addEventListener("error",j=>{z(j)}),g.addEventListener("message",j=>{if(j.data){for(const q of u)q!==g&&q.postMessage({type:"abort"});if(j.data.error)return z(new Error(j.data.error))}y(j.data)}),g.postMessage({challenge:t,counterMode:s,counterStart:m,counterStep:f,timeout:l,type:"work"})}))))}catch(g){if(g instanceof Error&&!!((p=g==null?void 0:g.message)!=null&&p.includes("Out of memory"))&&o){h();const y=o(f);if(y)return Io({...e,challenge:t,controller:n,concurrency:y,createWorker:a})}throw g}finally{h()}return n.signal.aborted?null:b||null}class mc{constructor(t={}){$(this,"TAG_CODES",{INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10});$(this,"maxSamples");$(this,"sampleInterval");$(this,"target");$(this,"focusStartTime",0);$(this,"focusInteraction",0);$(this,"focusInteractionTimer",null);$(this,"lastPointerSample",0);$(this,"lastTouchSample",0);$(this,"lastScrollSample",0);$(this,"pendingPointer",null);$(this,"pendingTouch",null);$(this,"focus",[]);$(this,"pointer",[]);$(this,"scroll",[]);$(this,"touch",[]);$(this,"onFocus",t=>{if(this.focusInteraction===2)return;const r=t.target;if(!(r instanceof Element))return;const n=performance.now();this.focusStartTime===0&&(this.focusStartTime=n),this.focus.push([Math.round(n-this.focusStartTime),r.tabIndex,this.TAG_CODES[r.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)});$(this,"onInteraction",t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)});$(this,"onPointer",t=>{if(t.pointerType==="touch")return;const r=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(r)],r-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=r,this.pendingPointer=null,this.evict(this.pointer))});$(this,"onScroll",()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))});$(this,"onTouchMove",t=>{const r=t.timeStamp||performance.now(),n=t.touches[0];n&&(this.pendingTouch=[Math.round(n.clientX),Math.round(n.clientY),Math.round(r),Math.round(n.force*1e3)/1e3,Math.round(n.radiusX||0),Math.round(n.radiusY||0)],r-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=r,this.pendingTouch=null,this.evict(this.touch)))});const{maxSamples:r=60,sampleInterval:n=50,target:a=window}=t;this.maxSamples=r,this.sampleInterval=n,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}}var yc=se('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),kc=se('<div class="altcha-overlay-content"></div>'),wc=se('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),Ac=se('<div class="altcha-floating-arrow"></div>'),_c=se('<input type="hidden"/>'),Cc=se('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Po=se('<div class="altcha-error"> </div>'),xc=se("<!> <!>",1),Tc=se('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function Ec(e,t){$t(t,!0);const r=()=>xi(h,"$altchaDefaults",a),n=()=>xi(m,"$altchaI18nStore",a),[a,o]=Bl(),s='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:h}=globalThis.$altcha.defaults,b=navigator.hardwareConcurrency||2,p=navigator.deviceMemory||0,g=p&&p<=4?Math.min(4,b):b,m=globalThis.$altcha.i18n.store,y=t.$$host,z=(c,v)=>{ir().then(()=>{y==null||y.dispatchEvent(new CustomEvent(c,{detail:v}))})};let j=null,q=M(It(new URL(location.origin))),ce=M(!1),U=M(null),Ee=M(null),K=M(null),E=M(It(G.UNVERIFIED)),ne=M(void 0),Le=M(void 0),F=M(null),me=M(void 0),et=M(null),Ne=M(null),tt=M(null),le=M(null),Ht=M(It([])),x=M(0),we=M(It({})),te=M(!0);const w=je(()=>({fetch:(c,v)=>fetch(c,v),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:g,...r(),...i(we)})),sn=je(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),cn=je(()=>Ou(i(w).type)),Et=je(()=>i(w).auto),un=je(()=>i(E)===G.VERIFYING),Un=je(()=>!i(w).hideFooter),dr=je(()=>!i(w).hideLogo&&i(w).display!=="bar"),fn=je(()=>Fu(n(),[i(w).language,document.documentElement.lang,...navigator.languages])),dn=je(()=>f.includes(i(fn).language)?"rtl":void 0),Me=je(()=>({...i(fn).strings})),_=je(()=>{var c,v,A;return(v=(c=i(U))==null?void 0:c.audio)!=null&&v.match(/^(https?:)?\//)?qn(i(U).audio,i(q),{language:i(w).audioChallengeLanguage||i(fn).language}).toString():(A=i(U))==null?void 0:A.audio}),Y=je(()=>{var c,v,A;return(v=(c=i(U))==null?void 0:c.image)!=null&&v.match(/^(https?:)?\//)?qn(i(U).image,i(q)):(A=i(U))==null?void 0:A.image});Fe(()=>{vn({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Fe(()=>{t.theme?y==null||y.setAttribute("theme",t.theme):y==null||y.removeAttribute("theme")}),Fe(()=>{if(t.configuration)try{vn(JSON.parse(t.configuration))}catch{re("unable to parse the `configuration` attribute (JSON expected)")}}),Fe(()=>{i(K)!==i(w).display&&Bn(i(w).display)}),Fe(()=>{i(ce)&&i(E)===G.VERIFYING&&C(ce,!1)}),Fe(()=>{!i(ce)&&i(E)===G.VERIFIED&&C(ce,!0)}),Fe(()=>{if(!i(ce)){const c=qa();c&&c.checked&&(c.checked=!1)}}),Fe(()=>{var c;i(E)===G.VERIFIED&&((c=qa())==null||c.setCustomValidity(""))}),Fe(()=>{if(i(Et)==="onload"){const c=setTimeout(()=>{Rr()},10);return()=>{c&&clearTimeout(c)}}}),Fe(()=>{i(Ne)&&re("error:",i(Ne))}),Fe(()=>{i(le)&&i(w).setCookie&&Qu(i(le),i(w).setCookie)}),xa(()=>{var c,v;return re("mounted","3.5.0"),y&&globalThis.$altcha.instances.add(y),C(F,Nu(),!0),(c=i(F))==null||c.addEventListener("reset",Uo),(v=i(F))==null||v.addEventListener("submit",qo,{capture:!0}),document.addEventListener("focusin",Do),hr(),i(w).humanInteractionSignature&&(re("human interaction signature enabled"),j=new mc),z("load"),u||re("secure context (HTTPS) required"),()=>{var A,k;Ma(),y&&globalThis.$altcha.instances.delete(y),i(tt)&&clearTimeout(i(tt)),(A=i(F))==null||A.removeEventListener("reset",Uo),(k=i(F))==null||k.removeEventListener("submit",qo,{capture:!0}),document.removeEventListener("focusin",Do),j==null||j.destroy()}});function hr(){C(Ht,[...globalThis.$altcha.plugins].map(c=>new c(y)),!0),re("activating plugins",i(Ht).map(c=>c.constructor.name));for(const c of i(Ht))c.activate()}async function hn(c,...v){let A;for(const k of i(Ht))A=await k[c].call(k,...v);return A}function Ma(){for(const c of i(Ht))c.destroy()}function Da(c){const[v,A]=c.salt.split("?"),k={};if(A)try{Object.assign(k,Object.fromEntries(new URLSearchParams(A).entries()))}catch{}const P={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:k,expiresAt:k!=null&&k.expires?parseInt(k.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:pc(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(P,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),P}function Ua(c,v){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:v.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:v.time||0}}async function Re(c){await new Promise(v=>setTimeout(v,c))}async function Lt(c=i(w).challenge,v){const A=await hn("onFetchChallenge",c);let k=null;if(A!==void 0)return A;if(typeof c=="string")if(c.startsWith("{")){re("parsing JSON challenge");try{k=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else{re("fetching challenge from",(v==null?void 0:v.method)||"GET",c),C(q,new URL(c,location.origin),!0);const P=await i(w).fetch(c,{credentials:i(w).credentials||void 0,...v});await Ko(P);const S=P.headers.get("x-altcha-config");S&&Zu(S);const W=await P.json();if(W&&"his"in W&&W.his){if(re("requested HIS"),!j)throw new Error("Server requested HIS data but collector is disabled.");return Lt(qn(W.his.url,i(q)),{body:JSON.stringify({his:j.export()}),headers:{"content-type":"application/json"},method:"POST"})}W&&"hisResult"in W&&W.hisResult&&re("HIS result",W.hisResult),k=W}else if(c&&typeof c=="object")try{k=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(Vu(k)&&(k=Da(k)),!zu(k))throw new Error("Challenge validation failed.");return k}function Vu(c){return c!==null&&typeof c=="object"&&"challenge"in c}function zu(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function qa(){return document.getElementById(i(sn))}function Ou(c){switch(c){case"checkbox":return Eo;case"switch":return So;case"native":default:return Lo}}function Fu(c,v){const A=Object.keys(c).map(P=>P.toLowerCase());let k=v.reduce((P,S)=>(S=S.toLowerCase(),P||(c[S]?S:null)||A.find(W=>S.split("-")[0]===W.split("-")[0])||null),null);return c[k||""]||(k="en"),{language:k,strings:c[k]}}function Hu(c){switch(c){case"bar":return i(w).barPlacement||"bottom";case"floating":return i(w).floatingPlacement||"auto";default:return}}function Nu(){var c,v;if(t.form){const A=y==null?void 0:y.getRootNode(),k=(c=A==null?void 0:A.getElementById)==null?void 0:c.call(A,t.form);return k instanceof HTMLFormElement?k:null}return((v=i(me))==null?void 0:v.closest("form"))??null}function Mo(c){return i(F)?Array.from(i(F).elements).filter(v=>v.matches(c)):[]}function Mu(c){return Mo(s).reduce((A,k)=>{const P=k.name,S=k.value;return P&&S&&(A[P]=/\n/.test(S)?S.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):S),A},{})}function Du(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function qn(c,v,A){const k=new URL(c,v);if(k.search||(k.search=v.search),A)for(const P in A)A[P]!==void 0&&A[P]!==null&&k.searchParams.set(P,A[P]);return k.toString()}function Uu(c){!i(ce)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,i(E)!==G.VERIFYING&&Rr()):c.currentTarget.checked||(c.preventDefault(),rt())}function qu(c){i(E)===G.VERIFYING?c.currentTarget.setCustomValidity(i(Me).waitAlert):i(w).validationMessage&&c.currentTarget.setCustomValidity(i(w).validationMessage)}function Bu(){Bn(i(w).display),rt()}function Ku(){Kn()}function Gu(c){const v=c.target;i(w).display==="floating"&&v&&!(y!=null&&y.contains(v))&&!v.hasAttribute("data-backdrop")&&!v.closest("[data-popover]")&&i(E)!==G.VERIFIED&&!i(w).floatingPersist&&Ba()}function Do(c){const v=c.target;i(Et)==="onfocus"&&i(E)===G.UNVERIFIED&&i(F)&&v instanceof Element&&(i(F).contains(v)||v.form===i(F))&&Rr()}function Uo(){Bn(i(w).display),rt()}function qo(c){const v=c.target;(v==null?void 0:v.getAttribute("data-code-challenge"))!=="true"&&i(Et)==="onsubmit"&&i(E)===G.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),C(et,c.submitter,!0),Ka(),Rr().then(A=>{A&&!i(U)&&ir().then(()=>{Bo(i(et))})}))}function Yu(c){c.persisted&&(Bn(i(w).display),rt())}function Wu(){Kn()}function Zu(c){var v,A;try{const k=JSON.parse(c);k&&typeof k=="object"&&vn({serverVerificationFields:(v=k==null?void 0:k.sentinel)==null?void 0:v.fields,serverVerificationTimeZone:(A=k==null?void 0:k.sentinel)==null?void 0:A.timeZone,verifyUrl:k.verifyurl,...k})}catch(k){re("unable to configure from x-altcha-config header",k)}}function Ju(c=20){if(!i(me))return;const v=i(w).floatingPlacement;if(!i(Le)&&(C(Le,(i(w).floatingAnchor instanceof HTMLElement?i(w).floatingAnchor:i(w).floatingAnchor?document.querySelector(i(w).floatingAnchor):Mo(l)[0])||i(F),!0),!i(Le))){re("unable to find floating anchor element");return}const A=parseInt(i(w).floatingOffset,10)||12,k=i(Le).getBoundingClientRect(),P=i(me).getBoundingClientRect(),S=document.documentElement.clientHeight,W=document.documentElement.clientWidth,Se=!v||v==="auto"?k.bottom+P.height+A+c>S:v==="top",ae=Math.max(c,Math.min(W-c-P.width,k.left+k.width/2-P.width/2));if(i(me).style.setProperty("--altcha-floating-left",`${ae}px`),i(me).style.setProperty("--altcha-floating-top",Se?`${k.top-(P.height+A)}px`:`${k.bottom+A}px`),i(me).setAttribute("data-floating-position",Se?"top":"bottom"),i(ne)){const Ve=i(ne).getBoundingClientRect();i(ne).style.left=k.left-ae+k.width/2-Ve.width/2+"px"}}async function Xu(c,v){const A=await hn("onRequestServerVerification",c,v);if(A!==void 0)return A;if(re("requesting server verification from",i(w).verifyUrl),!i(w).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const k=await i(w).fetch(qn(i(w).verifyUrl,i(q)),{body:JSON.stringify({code:v,fields:i(w).serverVerificationFields?Mu():void 0,payload:c,timeZone:i(w).serverVerificationTimeZone?Du():void 0}),credentials:i(w).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await Ko(k);const P=await k.json();return P&&typeof P=="object"&&"payload"in P&&P.payload&&z("serververification",P),P}function Bo(c){var v;i(F)&&"requestSubmit"in i(F)?i(F).requestSubmit(c):(v=i(F))!=null&&v.reportValidity()&&(c?c.click():i(F).submit())}function Qu(c,v={}){const{domain:A,name:k=i(w).name,maxAge:P,path:S,sameSite:W,secure:Se}=v;let ae=`${encodeURIComponent(k)}=${encodeURIComponent(c)}`;A&&(ae+=`; Domain=${A}`),P!=null&&(ae+=`; Max-Age=${P}`),S&&(ae+=`; Path=${S}`),W&&(ae+=`; SameSite=${W}`),Se&&(ae+="; Secure"),document.cookie=ae}function Bn(c){switch(c){case"bar":case"floating":case"overlay":Ba(),(!i(Et)||i(Et)==="off")&&(i(we).auto="onsubmit");break;case"standard":Ka()}i(K)!==c&&C(K,c,!0)}function ef(c){i(tt)&&clearTimeout(i(tt));const v=()=>{i(E)!==G.UNVERIFIED?(C(ce,!1),nt(G.EXPIRED)):rt(),z("expired")},A=c*1e3-Date.now();A>=1?C(tt,setTimeout(v,A),!0):v()}async function Ko(c){var A;if(c.status>=400){if((A=c.headers.get("content-type"))!=null&&A.includes("/json")){let k;try{k=await c.json()}catch{}if(k&&"error"in k)throw new Error(`Server responded with ${c.status} - ${k.error}`)}throw new Error(`Server responded with ${c.status}.`)}const v=c.headers.get("content-type");if(!v||!v.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${v}.`)}async function Go(c){var A;if(!i(le)){nt(G.ERROR,"Cannot verify code challenge without PoW payload.");return}nt(G.VERIFYING);let v=null;if(i(w).verifyUrl)v=await Xu(i(le),c);else if(i(w).verifyFunction)v=await i(w).verifyFunction(i(le),c);else{nt(G.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}v!=null&&v.payload&&(C(le,v.payload,!0),re("server payload",i(le))),(v==null?void 0:v.verified)===!0?(re("verified"),nt(G.VERIFIED),z("verified",{payload:i(le)}),i(Et)==="onsubmit"&&ir().then(()=>{Bo(i(et))})):nt(G.ERROR,(v==null?void 0:v.reason)||"Verification failed."),i(w).disableAutoFocus||(A=qa())==null||A.focus()}function vn(c){Object.assign(i(we),{...Object.fromEntries(Object.entries(c).filter(([v,A])=>A!==void 0))})}function tf(){return{...i(w)}}function rf(){return i(E)}function Ba(){C(te,!1)}function re(...c){(i(w).debug||c.some(v=>v instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${i(w).name}]`,...c)}function rt(c=G.UNVERIFIED,v=null){C(ce,!1),C(Ne,v,!0),C(le,null),i(Ee)&&i(Ee).abort(),i(tt)&&(clearTimeout(i(tt)),C(tt,null)),nt(c)}function nt(c,v=null){C(E,c,!0),C(Ne,v,!0),z("statechange",{payload:i(le),state:i(E)})}function Ka(){C(te,!0),ir().then(()=>{Kn()})}function Kn(){switch(i(w).display){case"floating":return Ju()}C(x,i(x)+1)}async function Rr(c={}){var Ve,Yt;const{concurrency:v=Math.max(1,i(w).workers),controller:A=new AbortController,minDuration:k=i(w).minDuration}=c,P=performance.now();let S=null,W=null,Se=!1;const ae=await hn("onVerify",c);if(ae!==void 0)return ae;rt(G.VERIFYING),C(Ee,A,!0);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(i(w).mockError)throw new Error("Mock error.");if(i(w).test)return re("running test mode with null challenge"),await Re(Math.max(0,k-(performance.now()-P))),(Ve=i(Ee))!=null&&Ve.signal.aborted?(rt(),null):(C(le,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),re("verified"),nt(G.VERIFIED),z("verified",{payload:i(le)}),{payload:i(le)});if(S=await Lt(),!S)throw new Error("Failed to fetch challenge.");re("challenge",S),"configuration"in S&&(re("re-configuring from challenge",S.configuration),vn(S.configuration)),S.parameters.expiresAt&&ef(S.parameters.expiresAt),Se="_version"in S&&S._version===1;const ht=globalThis.$altcha.algorithms.get(S.parameters.algorithm);if(!ht)throw new Error(`Unsupported algorithm ${S.parameters.algorithm}.`);if(W=await Io({challenge:S,concurrency:v,controller:A,createWorker:ht,counterMode:Se?"string":"uint32",onOutOfMemory:el=>{if(re("out of memory error received"),z("outofmemory"),i(w).retryOnOutOfMemoryError&&el>1){const tl=Math.floor(el/2);return re(`retrying with ${tl} workers...`),tl}},timeout:i(w).timeout}),(Yt=i(Ee))!=null&&Yt.signal.aborted)return rt(),null;if(!W)throw new Error("Failed to find solution.");re("solution",W),await Re(Math.max(0,k-(performance.now()-P))),C(U,S.codeChallenge||i(w).codeChallenge||null,!0),Se?C(le,btoa(JSON.stringify(Ua(S,W))),!0):C(le,btoa(JSON.stringify({challenge:{parameters:S.parameters,signature:S.signature},solution:W})),!0),i(U)?(re("requesting code verification"),nt(G.CODE),z("codechallenge",{codeChallenge:i(U)})):i(w).verifyUrl?await Go():(re("verified"),nt(G.VERIFIED),z("verified",{payload:i(le)}))}catch(ht){return re("verification failed",ht),nt(G.ERROR,String(ht)),null}finally{C(Ee,null)}return{challenge:S,payload:i(le),solution:W}}var nf={configure:vn,getConfiguration:tf,getState:rf,hide:Ba,log:re,reset:rt,setState:nt,show:Ka,updateUI:Kn,verify:Rr},Yo=Tc();pe("scroll",na,Ku),pe("click",na,Gu),pe("pageshow",rr,Yu),pe("resize",rr,Wu);var Wo=kr(Yo);{var af=c=>{var v=yc();D(c,v)};be(Wo,c=>{i(w).display==="overlay"&&i(te)&&c(af)})}var St=ie(Wo,2),Zo=ke(St);{var of=c=>{var v=wc(),A=kr(v),k=ie(A,2);{var P=S=>{var W=kc();ho(W,()=>{var Se;return(Se=document.querySelector(i(w).overlayContent))==null?void 0:Se.innerHTML},!0),he(W),D(S,W)};be(k,S=>{i(w).overlayContent&&S(P)})}pe("click",A,Bu,!0),D(c,v)};be(Zo,c=>{i(w).display==="overlay"&&i(te)&&c(of)})}var Ga=ie(Zo,2),Ya=ke(Ga),Wa=ke(Ya),Jo=ke(Wa);{let c=je(()=>i(w).display==="standard"&&i(Et)!=="onsubmit"||i(E)===G.VERIFYING);Ss(Jo,()=>i(cn),(v,A)=>{A(v,{get id(){return i(sn)},get form(){return t.form},name:"",get required(){return i(c)},get loading(){return i(un)},get checked(){return i(ce)},onchange:Uu,oninvalid:qu})})}var Za=ie(Jo,2),lf=ke(Za);{var sf=c=>{var v=Rn();Te(()=>Ct(v,i(Me).verificationRequired)),D(c,v)},cf=c=>{var v=Rn();Te(()=>Ct(v,i(Me).verifying)),D(c,v)},uf=c=>{var v=Rn();Te(()=>Ct(v,i(Me).verified)),D(c,v)},ff=c=>{var v=Rn();Te(()=>Ct(v,i(Me).label)),D(c,v)};be(lf,c=>{i(E)===G.CODE&&i(U)?c(sf):i(E)===G.VERIFYING?c(cf,1):i(E)===G.VERIFIED?c(uf,2):c(ff,-1)})}he(Za),he(Wa);var df=ie(Wa,2);{var hf=c=>{Va(c,{get strings(){return i(Me)}})};be(df,c=>{i(dr)&&c(hf)})}he(Ya);var Xo=ie(Ya,2);{var vf=c=>{{let v=je(()=>i(w).display==="bar"&&i(dr));za(c,{get logo(){return i(v)},get strings(){return i(Me)}})}};be(Xo,c=>{i(Un)&&c(vf)})}var Qo=ie(Xo,2);{var gf=c=>{var v=Ac();qt(v,A=>C(ne,A),()=>i(ne)),D(c,v)};be(Qo,c=>{i(w).display==="floating"&&c(gf)})}var pf=ie(Qo,2);{var bf=c=>{var v=_c();$a(v),Te(()=>{B(v,"form",t.form),B(v,"name",i(w).name),Ds(v,i(le))}),D(c,v)};be(pf,c=>{i(w).setCookie||c(bf)})}he(Ga);var mf=ie(Ga,2);{var yf=c=>{Oa(c,{get anchor(){return i(me)},onClickOutside:()=>{u&&rt()},get placement(){return i(w).popoverPlacement},role:"alert",variant:"error",get dir(){return i(dn)},get updateUISignal(){return i(x)},children:(v,A)=>{var k=co(),P=kr(k);{var S=ae=>{var Ve=Cc();D(ae,Ve)},W=ae=>{var Ve=Po(),Yt=wr(Ve,!0);Te(()=>Ct(Yt,i(Me).expired)),D(ae,Ve)},Se=ae=>{var Ve=Po(),Yt=wr(Ve,!0);Te(()=>{B(Ve,"title",i(Ne)),Ct(Yt,i(Me).error)}),D(ae,Ve)};be(P,ae=>{!i(Ne)&&!u?ae(S):!i(Ne)&&i(E)===G.EXPIRED?ae(W,1):ae(Se,-1)})}D(v,k)},$$slots:{default:!0}})},kf=c=>{var v=co(),A=kr(v);Ls(A,()=>i(U),k=>{{let P=je(()=>i(w).codeChallengeDisplay!=="standard");Oa(k,{get anchor(){return i(me)},get backdrop(){return i(P)},get display(){return i(w).codeChallengeDisplay},onClose:()=>{rt()},get placement(){return i(w).popoverPlacement},role:"dialog",get"aria-label"(){return i(Me).verificationRequired},get dir(){return i(dn)},get updateUISignal(){return i(x)},children:(S,W)=>{var Se=xc(),ae=kr(Se);jo(ae,{get audioUrl(){return i(_)},get imageUrl(){return i(Y)},onCancel:()=>rt(),onReload:()=>Rr(),onSubmit:ht=>Go(ht),get codeChallenge(){return i(U)},get config(){return i(w)},get strings(){return i(Me)}});var Ve=ie(ae,2);{var Yt=ht=>{za(ht,{get logo(){return i(dr)},get strings(){return i(Me)}})};be(Ve,ht=>{i(Un)&&i(w).codeChallengeDisplay!=="standard"&&ht(Yt)})}D(S,Se)},$$slots:{default:!0}})}}),D(c,v)};be(mf,c=>{i(Ne)||i(E)===G.EXPIRED||!u?c(yf):i(U)&&i(E)===G.CODE&&c(kf,1)})}he(St),qt(St,c=>C(me,c),()=>i(me)),Te(c=>{B(St,"data-state",i(E)),B(St,"data-display",i(w).display||void 0),B(St,"data-placement",c),B(St,"data-visible",i(te)||void 0),B(St,"dir",i(dn)),B(Za,"for",i(sn)),St.dir=St.dir},[()=>Hu(i(w).display)]),D(e,Yo);var wf=jt(nf);return o(),wf}typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",Bt(Ec,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},form:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const Ro=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    assertAlgorithm(algorithm, ["PBKDF2/SHA-256", "PBKDF2/SHA-384", "PBKDF2/SHA-512"]);
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveBits"]
    );
    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: algorithm.slice("PBKDF2/".length)
      },
      passwordKey,
      keyLength * 8
    );
    return {
      parameters: {},
      derivedKey: new Uint8Array(derivedBits)
    };
  }
  handler({
    deriveKey
  });
})();
`,Vo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Ro],{type:"text/javascript;charset=utf-8"});function Fa(e){let t;try{if(t=Vo&&(self.URL||self.webkitURL).createObjectURL(Vo),!t)throw"";const r=new Worker(t,{name:e==null?void 0:e.name});return r.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),r}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Ro),{name:e==null?void 0:e.name})}}const zo=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    assertAlgorithm(algorithm, ["SHA-256", "SHA-384", "SHA-512"]);
    const iterations = Math.max(1, parameters.cost);
    let derivedKey = concatBuffers(salt, password);
    for (let i = 0; i < iterations; i++) {
      derivedKey = new Uint8Array(await crypto.subtle.digest(algorithm, derivedKey));
    }
    return {
      parameters: {},
      derivedKey: derivedKey.slice(0, keyLength)
    };
  }
  handler({
    deriveKey
  });
})();
`,Oo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",zo],{type:"text/javascript;charset=utf-8"});function Ha(e){let t;try{if(t=Oo&&(self.URL||self.webkitURL).createObjectURL(Oo),!t)throw"";const r=new Worker(t,{name:e==null?void 0:e.name});return r.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),r}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(zo),{name:e==null?void 0:e.name})}}bc(`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none) {
  .altcha-checkbox input {
    /* Safari-only: fixes focus outline */
  }
  .altcha-checkbox input:focus {
    outline-width: 2px;
    outline-style: solid;
  }
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`),$altcha.algorithms.set("SHA-256",()=>new Ha),$altcha.algorithms.set("SHA-384",()=>new Ha),$altcha.algorithms.set("SHA-512",()=>new Ha),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Fa),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Fa),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Fa);const Lc={ariaLinkLabel:"Altcha (الموقع الرسمي)",enterCode:"أدخل الرمز",enterCodeAria:"أدخل الرمز الذي تسمعه. اضغط على المسافة لتشغيل الصوت.",error:"فشل التحقق. حاول مرة أخرى لاحقاً.",expired:"انتهت صلاحية التحقق. حاول مرة أخرى.",footer:'محمي بواسطة <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (الموقع الرسمي، يفتح في علامة تبويب جديدة)">ALTCHA</a>',getAudioChallenge:"احصل على تحدي صوتي",label:"أنا لست روبوتاً",loading:"جارٍ التحميل...",reload:"إعادة تحميل",verify:"تحقق",verificationRequired:"مطلوب التحقق!",verified:"تم التحقق",verifying:"جارٍ التحقق...",waitAlert:"جارٍ التحقق... يرجى الانتظار.",cancel:"إلغاء",enterCodeFromImage:"للمتابعة، يرجى إدخال الرمز من الصورة أدناه."};globalThis.$altcha.i18n.set("ar",Lc);const Sc={ariaLinkLabel:"Altcha (официален уебсайт)",enterCode:"Въведете код",enterCodeAria:"Въведете кода, който чувате. Натиснете Space за възпроизвеждане на аудио.",error:"Проверката неуспешна. Моля, опитайте по-късно.",expired:"Времето за проверка изтече. Моля, опитайте отново.",footer:'Защитено от <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (официален уебсайт, отваря се в нов раздел)">ALTCHA</a>',getAudioChallenge:"Аудио проверка",label:"Аз не съм робот",loading:"Зареждане...",reload:"Презареди",verify:"Провери",verificationRequired:"Изисква се проверка!",verified:"Проверено",verifying:"Проверява се...",waitAlert:"Проверката е в процес... моля изчакайте.",cancel:"Отказ",enterCodeFromImage:"За да продължите, моля, въведете кода от изображението по-долу."};globalThis.$altcha.i18n.set("bg",Sc);const $c={ariaLinkLabel:"Altcha (афіцыйны сайт)",enterCode:"Увядзіце код",enterCodeAria:"Увядзіце код, які вы чуеце. Націсніце прабел, каб прайграць аўдыё.",error:"Праверка не прайшла. Паспрабуйце пазней.",expired:"Тэрмін праверкі скончыўся. Паспрабуйце зноў.",footer:'Абаронена <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (афіцыйны сайт, адкрываецца ў новай укладцы)">ALTCHA</a>',getAudioChallenge:"Атрымаць аўдыё выклік",label:"Я не робат",loading:"Загрузка...",reload:"Перазагрузіць",verify:"Праверыць",verificationRequired:"Патрабуецца праверка!",verified:"Праверана",verifying:"Правяраем...",waitAlert:"Праверка... калі ласка, пачакайце.",cancel:"Скасаваць",enterCodeFromImage:"Каб працягнуць, увядзіце код з малюнка ніжэй."};globalThis.$altcha.i18n.set("be",$c);const jc={ariaLinkLabel:"Altcha (službena web stranica)",enterCode:"Unesite kod",enterCodeAria:"Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",error:"Verifikacija nije uspjela. Pokušajte ponovo kasnije.",expired:"Verifikacija je istekla. Pokušajte ponovo.",footer:'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (službena web stranica, otvara se u novoj kartici)">ALTCHA</a>',getAudioChallenge:"Dohvatite audio izazov",label:"Nisam robot",loading:"Učitavanje...",reload:"Ponovno učitaj",verify:"Verifikuj",verificationRequired:"Verifikacija je obavezna!",verified:"Verifikovano",verifying:"Verifikacija u toku...",waitAlert:"Verifikacija u toku... molimo vas da sačekate.",cancel:"Odustani",enterCodeFromImage:"Za nastavak, molimo unesite kod sa slike ispod."};globalThis.$altcha.i18n.set("bs",jc);const Ic={ariaLinkLabel:"Altcha (lloc web oficial)",enterCode:"Introdueix el codi",enterCodeAria:"Introdueix el codi que escoltes. Prem Espai per reproduir l’àudio.",error:"Verificació fallida. Torna-ho a provar més tard.",expired:"Verificació expirada. Torna-ho a provar.",footer:'Protegit per <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (lloc web oficial, s’obre en una pestanya nova)">ALTCHA</a>',getAudioChallenge:"Obtenir un desafiament d’àudio",label:"No sóc un robot",loading:"Carregant...",reload:"Torna a carregar",verify:"Verificar",verificationRequired:"Es requereix verificació!",verified:"Verificat",verifying:"Verificant...",waitAlert:"Verificant... si us plau, espera.",cancel:"Cancel·la",enterCodeFromImage:"Per continuar, si us plau, introdueix el codi de la imatge següent."};globalThis.$altcha.i18n.set("ca",Ic);const Pc={ariaLinkLabel:"Altcha (oficiální web)",enterCode:"Zadejte kód",enterCodeAria:"Zadejte kód, který slyšíte. Stisknutím mezerníku přehrajete zvuk.",error:"Ověření selhalo. Zkuste to prosím později.",expired:"Ověření vypršelo. Zkuste to prosím znovu.",footer:'Chráněno pomocí <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (oficiální web, otevře se na nové kartě)">ALTCHA</a>',getAudioChallenge:"Získat audio výzvu",label:"Nejsem robot",loading:"Načítání...",reload:"Znovu načíst",verify:"Ověřit",verificationRequired:"Vyžaduje se ověření!",verified:"Ověřeno",verifying:"Ověřování...",waitAlert:"Probíhá ověření... prosím počkejte.",cancel:"Zrušit",enterCodeFromImage:"Pro pokračování zadejte kód z obrázku níže."};globalThis.$altcha.i18n.set("cs",Pc);const Rc={ariaLinkLabel:"Altcha (officiel hjemmeside)",enterCode:"Indtast kode",enterCodeAria:"Indtast den kode, du hører. Tryk på mellemrumstasten for at afspille lyd.",error:"Verificering mislykkedes. Prøv venligst igen senere.",expired:"Verificering udløbet. Prøv venligst igen.",footer:'Beskyttet af <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (officiel hjemmeside, åbner i en ny fane)">ALTCHA</a>',getAudioChallenge:"Hent lydudfordring",label:"Jeg er ikke en robot",loading:"Indlæser...",reload:"Genindlæs",verify:"Verificer",verificationRequired:"Verificering kræves!",verified:"Verificeret",verifying:"Verificerer...",waitAlert:"Verificerer... vent venligst.",cancel:"Annuller",enterCodeFromImage:"For at fortsætte, bedes du indtaste koden fra billedet herunder."};globalThis.$altcha.i18n.set("da",Rc);const Vc={ariaLinkLabel:"Altcha (offizielle Website)",enterCode:"Code eingeben",enterCodeAria:"Geben Sie den Code ein, den Sie hören. Drücken Sie die Leertaste, um die Audio abzuspielen.",error:"Überprüfung fehlgeschlagen. Bitte versuchen Sie es später erneut.",expired:"Überprüfung abgelaufen. Bitte versuchen Sie es erneut.",footer:'Geschützt durch <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (offizielle Website, öffnet in neuem Tab)">ALTCHA</a>',getAudioChallenge:"Audio-Herausforderung anfordern",label:"Ich bin kein Roboter",loading:"Lade...",reload:"Neu laden",verify:"Überprüfen",verificationRequired:"Überprüfung erforderlich!",verified:"Überprüft",verifying:"Wird überprüft...",waitAlert:"Überprüfung läuft... bitte warten.",cancel:"Abbrechen",enterCodeFromImage:"Um fortzufahren, geben Sie bitte den Code aus dem Bild unten ein."};globalThis.$altcha.i18n.set("de",Vc);const zc={ariaLinkLabel:"Altcha (επίσημος ιστότοπος)",enterCode:"Εισαγάγετε κωδικό",enterCodeAria:"Εισαγάγετε τον κωδικό που ακούτε. Πατήστε Space για να παίξετε τον ήχο.",error:"Η επαλήθευση απέτυχε. Δοκιμάστε ξανά αργότερα.",expired:"Η επαλήθευση έληξε. Δοκιμάστε ξανά.",footer:'Προστατεύεται από το <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (επίσημος ιστότοπος, ανοίγει σε νέα καρτέλα)">ALTCHA</a>',getAudioChallenge:"Λήψη ηχητικής δοκιμασίας",label:"Δεν είμαι ρομπότ",loading:"Φόρτωση...",reload:"Επαναφόρτωση",verify:"Επαλήθευση",verificationRequired:"Απαιτείται έλεγχος!",verified:"Επαληθεύτηκε",verifying:"Γίνεται επαλήθευση...",waitAlert:"Γίνεται επαλήθευση... παρακαλώ περιμένετε.",cancel:"Ακύρωση",enterCodeFromImage:"Για να συνεχίσετε, εισάγετε τον κωδικό από την παρακάτω εικόνα."};globalThis.$altcha.i18n.set("el",zc);const Oc={ariaLinkLabel:"Altcha (sitio web oficial)",enterCode:"Introduce el código",enterCodeAria:"Introduce el código que escuchas. Pulsa Espacio para reproducir el audio.",error:"Falló la verificación. Por favor intente nuevamente más tarde.",expired:"Verificación expirada. Por favor intente nuevamente.",footer:'Protegido por <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (sitio web oficial, se abre en una nueva pestaña)">ALTCHA</a>',getAudioChallenge:"Obtener un desafío de audio",label:"No soy un robot",loading:"Cargando...",reload:"Recargar",verify:"Verificar",verificationRequired:"¡Verificación requerida!",verified:"Verificado",verifying:"Verificando...",waitAlert:"Verificando... por favor espere.",cancel:"Cancelar",enterCodeFromImage:"Para continuar, introduzca el código de la imagen de abajo."};globalThis.$altcha.i18n.set("es-es",Oc);const Fc={ariaLinkLabel:"Altcha (sitio web oficial)",enterCode:"Ingresa el código",enterCodeAria:"Ingresa el código que escuchas. Presiona Espacio para reproducir el audio.",error:"Falló la verificación. Por favor vuelve a intentarlo más tarde.",expired:"La verificación expiró. Por favor inténtalo de nuevo.",footer:'Protegido por <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (sitio web oficial, se abre en una nueva pestaña)">ALTCHA</a>',getAudioChallenge:"Obtener un reto de audio",label:"No soy un robot",loading:"Cargando...",reload:"Volver a cargar",verify:"Verificar",verificationRequired:"¡Verificación requerida!",verified:"Verificado",verifying:"Verificando...",waitAlert:"Verificando... por favor espera.",cancel:"Cancelar",enterCodeFromImage:"Para continuar, ingresa el código de la imagen a continuación."};globalThis.$altcha.i18n.set("es-419",Fc);const Hc={ariaLinkLabel:"Altcha (ametlik veebisait)",enterCode:"Sisesta kood",enterCodeAria:"Sisestage kuuldu kood. Vajutage tühikut, et esitada heli.",error:"Kinnitamine ebaõnnestus. Proovi hiljem uuesti.",expired:"Kinnitamine aegus. Proovi uuesti.",footer:'Kaitstud <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (ametlik veebisait, avaneb uuel vahelehel)">ALTCHA</a> poolt',getAudioChallenge:"Hangi heliülesanne",label:"Ma ei ole robot",loading:"Laadimine...",reload:"Laadi uuesti",verify:"Kinnita",verificationRequired:"Kontroll on vajalik!",verified:"Kinnitatud",verifying:"Kinnitamine...",waitAlert:"Kinnitamine... palun oota.",cancel:"Tühista",enterCodeFromImage:"Jätkamiseks sisestage alloleval pildil olev kood."};globalThis.$altcha.i18n.set("et",Hc);const Nc={ariaLinkLabel:"Altcha (webgune ofiziala)",enterCode:"Sartu kodea",enterCodeAria:"Sartu entzun duzun kodea. Sakatu Espazioa audioa erreproduzitzeko.",error:"Egiaztatzeak huts egin du. Saiatu berriro geroago.",expired:"Egiaztatzea iraungi da. Saiatu berriro.",footer:'<a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (webgune ofiziala, fitxa berri batean irekitzen da)">ALTCHA</a>k babestuta',getAudioChallenge:"Jaso audio-erronka bat",label:"Ez naiz robot bat",loading:"Kargatzen...",reload:"Birkargatu",verify:"Egiaztatu",verificationRequired:"Egiaztatzea beharrezkoa da!",verified:"Egiaztatuta",verifying:"Egiaztatzen...",waitAlert:"Egiaztatzen... itxaron mesedez.",cancel:"Utzi",enterCodeFromImage:"Jarraitzeko, idatzi beheko irudiko kodea."};globalThis.$altcha.i18n.set("eu",Nc);const Mc={ariaLinkLabel:"Altcha (وب‌سایت رسمی)",enterCode:"کد را وارد کنید",enterCodeAria:"کدی که می‌شنوید را وارد کنید. برای پخش صدا Space را فشار دهید.",error:"احراز هویت ناموفق بود. بعداً دوباره تلاش کنید.",expired:"احراز هویت منقضی شد. دوباره تلاش کنید.",footer:'محافظت شده توسط <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (وب‌سایت رسمی، در برگه جدید باز می‌شود)">ALTCHA</a>',getAudioChallenge:"دریافت چالش صوتی",label:"من ربات نیستم",loading:"در حال بارگذاری...",reload:"بارگذاری مجدد",verify:"تایید",verificationRequired:"احراز هویت لازم است!",verified:"تایید شد",verifying:"در حال تایید...",waitAlert:"در حال تایید... لطفا منتظر بمانید.",cancel:"لغو کردن",enterCodeFromImage:"برای ادامه، لطفاً کد تصویر زیر را وارد کنید."};globalThis.$altcha.i18n.set("fa",Mc);const Dc={ariaLinkLabel:"Altcha (offiziell Websäit)",enterCode:"Code aginn",enterCodeAria:"Gitt de Code an deen dir héiert. Dréckt op d'Weltraumtast fir Audio ofzespillen.",error:"Verifikatioun ass feelgeschloen. Probéiert méi spéit nach emol.",expired:"Verifikatioun ofgelaf. Probéiert nach emol.",footer:'Geschützt vun <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (offiziell Websäit, gëtt an engem neien Tab opgemaach)">ALTCHA</a>',getAudioChallenge:"Kritt eng Audio-Herausfuerderung",label:"Ech sinn keen Robot",loading:"Lueden...",reload:"Nei lueden",verify:"Verifizéieren",verificationRequired:"Verifikatioun néideg!",verified:"Verifizéiert",verifying:"Verifizéieren...",waitAlert:"Verifizéieren... waart wgl.",cancel:"Ofbriechen",enterCodeFromImage:"Fir virun ze fueren, gitt wgl. de Code aus dem Bild hei drënner an."};globalThis.$altcha.i18n.set("lb",Dc);const Uc={ariaLinkLabel:"Altcha (virallinen verkkosivusto)",enterCode:"Syötä koodi",enterCodeAria:"Kirjoita kuulemasi koodi. Paina välilyöntiä toistaaksesi äänen.",error:"Varmennus epäonnistui. Yritä myöhemmin uudelleen.",expired:"Varmennus vanhentui. Yritä uudelleen.",footer:'Suojattu <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (virallinen verkkosivusto, avautuu uuteen välilehteen)">ALTCHA</a>:lla',getAudioChallenge:"Hae äänitehtävä",label:"En ole robotti",loading:"Ladataan...",reload:"Lataa uudelleen",verify:"Vahvista",verificationRequired:"Vahvistus vaaditaan!",verified:"Vahvistettu",verifying:"Vahvistetaan...",waitAlert:"Vahvistetaan... odota hetki.",cancel:"Peruuta",enterCodeFromImage:"Jatkaaksesi, syötä alla olevan kuvan koodi."};globalThis.$altcha.i18n.set("fi",Uc);const qc={ariaLinkLabel:"Altcha (site officiel)",enterCode:"Entrez le code",enterCodeAria:"Entrez le code que vous entendez. Appuyez sur la barre d'espace pour écouter l'audio.",error:"Échec de la vérification. Réessayez plus tard.",expired:"La vérification a expiré. Réessayez.",footer:'Protégé par <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (site officiel, s’ouvre dans un nouvel onglet)">ALTCHA</a>',getAudioChallenge:"Obtenir un défi audio",label:"Je ne suis pas un robot",loading:"Chargement...",reload:"Recharger",verify:"Vérifier",verificationRequired:"Vérification requise !",verified:"Vérifié",verifying:"Vérification en cours...",waitAlert:"Vérification en cours... veuillez patienter.",cancel:"Annuler",enterCodeFromImage:"Pour continuer, veuillez entrer le code de l'image ci-dessous."};globalThis.$altcha.i18n.set("fr-ca",qc);const Bc={ariaLinkLabel:"Altcha (site officiel)",enterCode:"Entrez le code",enterCodeAria:"Entrez le code que vous entendez. Appuyez sur Espace pour écouter l'audio.",error:"Échec de la vérification. Essayez à nouveau plus tard.",expired:"La vérification a expiré. Essayez à nouveau.",footer:'Protégé par <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (site officiel, s’ouvre dans un nouvel onglet)">ALTCHA</a>',getAudioChallenge:"Obtenir un défi audio",label:"Je ne suis pas un robot",loading:"Chargement...",reload:"Recharger",verify:"Vérifier",verificationRequired:"Vérification requise !",verified:"Vérifié",verifying:"Vérification en cours...",waitAlert:"Vérification en cours... veuillez patienter.",cancel:"Annuler",enterCodeFromImage:"Pour continuer, veuillez entrer le code de l'image ci-dessous."};globalThis.$altcha.i18n.set("fr-fr",Bc);const Kc={ariaLinkLabel:"Altcha (láithreán gréasáin oifigiúil)",enterCode:"Iontráil cód",enterCodeAria:"Cuir isteach an cód a chloiseann tú. Brúigh Spás chun an fuaime a sheinm.",error:"Theip ar an bhfíorú. Bain triail eile as níos déanaí.",expired:"Tá an fíorú as feidhm. Bain triail eile as.",footer:'Cosanta ag <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (láithreán gréasáin oifigiúil, osclaítear i gcluaisín nua é)">ALTCHA</a>',getAudioChallenge:"Faigh dúshlán fuaime",label:"Níl mé i mo róbat",loading:"Á luchtú...",reload:"Athluchtaigh",verify:"Fíoraigh",verificationRequired:"Fíorú riachtanach!",verified:"Fíoraithe",verifying:"Fíorú ar siúl...",waitAlert:"Fíorú ar siúl... fan go fóill.",cancel:"Cealaigh",enterCodeFromImage:"Chun dul ar aghaidh, le do thoil cuir isteach an cód ón íomhá thíos."};globalThis.$altcha.i18n.set("ga",Kc);const Gc={ariaLinkLabel:"Altcha (službena web stranica)",enterCode:"Unesite kod",enterCodeAria:"Unesite kod koji čujete. Pritisnite razmaknicu za reprodukciju zvuka.",error:"Provjera nije uspjela. Molimo pokušajte kasnije.",expired:"Provjera je istekla. Molimo pokušajte ponovo.",footer:'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (službena web stranica, otvara se u novoj kartici)">ALTCHA</a>',getAudioChallenge:"Audio provjera",label:"Ja nisam robot",loading:"Učitavanje...",reload:"Ponovno učitaj",verify:"Provjeri",verificationRequired:"Potrebna je provjera!",verified:"Provjereno",verifying:"Provjeravanje...",waitAlert:"Provjera je u tijeku... molimo pričekajte.",cancel:"Odustani",enterCodeFromImage:"Za nastavak molimo unesite kod sa slike ispod."};globalThis.$altcha.i18n.set("hr",Gc);const Yc={ariaLinkLabel:"Altcha (hivatalos weboldal)",enterCode:"Írja be a kódot",enterCodeAria:"Írja be a hallott kódot. Nyomja meg a Szóköz billentyűt a hang lejátszásához.",error:"A hitelesítés nem sikerült. Próbáld meg később újra.",expired:"A hitelesítés lejárt. Próbáld újra.",footer:'Védve a következő által: <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (hivatalos weboldal, új lapon nyílik meg)">ALTCHA</a>',getAudioChallenge:"Hangalapú kihívás kérése",label:"Nem vagyok robot",loading:"Betöltés...",reload:"Újratöltés",verify:"Ellenőrzés",verificationRequired:"Ellenőrzés szükséges!",verified:"Ellenőrizve",verifying:"Ellenőrzés folyamatban...",waitAlert:"Ellenőrzés folyamatban... kérlek várj.",cancel:"Mégse",enterCodeFromImage:"A folytatáshoz, kérjük, adja meg az alábbi kép kódját."};globalThis.$altcha.i18n.set("hu",Yc);const Wc={ariaLinkLabel:"Altcha (opinber vefsíða)",enterCode:"Sláðu inn kóða",enterCodeAria:"Sláðu inn kóðann sem þú heyrir. Ýttu á Space til að spila hljóðið.",error:"Staðfesting mistókst. Reyndu aftur síðar.",expired:"Staðfesting er útrunnin. Reyndu aftur.",footer:'Verndað af <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (opinber vefsíða, opnast í nýjum flipa)">ALTCHA</a>',getAudioChallenge:"Fá hljóðáskorun",label:"Ég er ekki robot",loading:"Hleður...",reload:"Hleð aftur",verify:"Staðfesta",verificationRequired:"Staðfesting er nauðsynleg!",verified:"Staðfest",verifying:"Að staðfesta...",waitAlert:"Að staðfesta... vinsamlegast bíða.",cancel:"Hætta við",enterCodeFromImage:"Til að halda áfram, vinsamlegast sláðu inn kóðann af myndinni hér að neðan."};globalThis.$altcha.i18n.set("is",Wc);const Zc={ariaLinkLabel:"Altcha (sito ufficiale)",enterCode:"Inserisci il codice",enterCodeAria:"Inserisci il codice che senti. Premi Spazio per riprodurre l'audio.",error:"Verifica fallita. Riprova più tardi.",expired:"Verifica scaduta. Riprova.",footer:'Protetto da <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (sito ufficiale, si apre in una nuova scheda)">ALTCHA</a>',getAudioChallenge:"Ottieni una sfida audio",label:"Non sono un robot",loading:"Caricamento...",reload:"Ricarica",verify:"Verifica",verificationRequired:"Verifica richiesta!",verified:"Verificato",verifying:"Verifica in corso...",waitAlert:"Verifica in corso... attendere.",cancel:"Annulla",enterCodeFromImage:"Per procedere, inserisci il codice dall'immagine sottostante."};globalThis.$altcha.i18n.set("it",Zc);const Jc={ariaLinkLabel:"Altcha (oficiali svetainė)",enterCode:"Įveskite kodą",enterCodeAria:"Įveskite girdimą kodą. Paspauskite tarpo klavišą, kad grotumėte garso įrašą.",error:"Patvirtinimas nepavyko. Bandykite vėliau.",expired:"Patvirtinimo laikas baigėsi. Bandykite dar kartą.",footer:'Apsaugota <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (oficiali svetainė, atsidaro naujame skirtuke)">ALTCHA</a>',getAudioChallenge:"Gauti garso užduotį",label:"Aš nesu robotas",loading:"Įkeliama...",reload:"Įkelti iš naujo",verify:"Patvirtinti",verificationRequired:"Reikalingas patvirtinimas!",verified:"Patvirtinta",verifying:"Tikrinama...",waitAlert:"Tikrinama... prašome palaukti.",cancel:"Atšaukti",enterCodeFromImage:"Norėdami tęsti, įveskite kodą iš paveikslėlio žemiau."};globalThis.$altcha.i18n.set("lt",Jc);const Xc={ariaLinkLabel:"Altcha (oficiālā tīmekļa vietne)",enterCode:"Ievadiet kodu",enterCodeAria:"Ievadiet dzirdamo kodu. Nospiediet atstarpes taustiņu, lai atskaņotu audio.",error:"Verifikācija neizdevās. Mēģiniet vēlāk vēlreiz.",expired:"Verifikācijas laiks ir beidzies. Mēģiniet vēlreiz.",footer:'Aizsargāts ar <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (oficiālā tīmekļa vietne, atveras jaunā cilnē)">ALTCHA</a>',getAudioChallenge:"Saņemt audio izaicinājumu",label:"Es neesmu robots",loading:"Notiek ielāde...",reload:"Pārlādēt",verify:"Verificēt",verificationRequired:"Nepieciešama verifikācija!",verified:"Verificēts",verifying:"Notiek verifikācija...",waitAlert:"Notiek verifikācija... lūdzu, uzgaidiet.",cancel:"Atcelt",enterCodeFromImage:"Lai turpinātu, lūdzu, ievadiet zemāk redzamo attēlu kodu."};globalThis.$altcha.i18n.set("lv",Xc);const Qc={ariaLinkLabel:"Altcha (sit uffiċjali)",enterCode:"Idħol il-kodiċi",enterCodeAria:"Idħol il-kodiċi li tisma'. Agħfas Spazju biex tindaqq l-awdjo.",error:"Il-verifika falliet. Erġa’ pprova aktar tard.",expired:"Il-verifika skadiet. Erġa’ pprova.",footer:'Protett minn <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (sit uffiċjali, jinfetaħ f’tab ġdida)">ALTCHA</a>',getAudioChallenge:"Ikseb sfida bl-awdjo",label:"M’inix robot",loading:"Qed jitgħabba...",reload:"Ittella’ mill-ġdid",verify:"Ivverifika",verificationRequired:"Verifika meħtieġa!",verified:"Ivverifikat",verifying:"Verifika għaddejja...",waitAlert:"Verifika għaddejja... stenna ftit.",cancel:"Ikkanċella",enterCodeFromImage:"Biex tipproċedi, jekk jogħġbok daħħal il-kodiċi mill-immaġni hawn taħt."};globalThis.$altcha.i18n.set("mt",Qc);const eu={ariaLinkLabel:"Altcha (offisiell nettside)",enterCode:"Skriv inn kode",enterCodeAria:"Skriv inn koden du hører. Trykk på Space for å spille av lyden.",error:"Verifisering mislyktes. Prøv igjen senere.",expired:"Verifiseringen utløp. Prøv igjen.",footer:'Beskyttet av <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (offisiell nettside, åpnes i ny fane)">ALTCHA</a>',getAudioChallenge:"Få en lydutfordring",label:"Jeg er ikke en robot",loading:"Laster...",reload:"Last på nytt",verify:"Verifiser",verificationRequired:"Verifisering kreves!",verified:"Verifisert",verifying:"Verifiserer...",waitAlert:"Verifiserer... vennligst vent.",cancel:"Avbryt",enterCodeFromImage:"For å fortsette, vennligst skriv inn koden fra bildet nedenfor."};globalThis.$altcha.i18n.set("nb",eu);const tu={ariaLinkLabel:"Altcha (officiële website)",enterCode:"Voer code in",enterCodeAria:"Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",error:"Verificatie mislukt. Probeer het later opnieuw.",expired:"Verificatie verlopen. Probeer het opnieuw.",footer:'Beschermd door <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (officiële website, opent in een nieuw tabblad)">ALTCHA</a>',getAudioChallenge:"Audio-uitdaging ontvangen",label:"Ik ben geen robot",loading:"Laden...",reload:"Herladen",verify:"Verifiëren",verificationRequired:"Verificatie vereist!",verified:"Geverifieerd",verifying:"Bezig met verifiëren...",waitAlert:"Bezig met verifiëren... even geduld a.u.b.",cancel:"Annuleren",enterCodeFromImage:"Om door te gaan, voert u de code uit de onderstaande afbeelding in."};globalThis.$altcha.i18n.set("nl",tu);const ru={ariaLinkLabel:"Altcha (oficjalna strona internetowa)",enterCode:"Wprowadź kod",enterCodeAria:"Wpisz kod, który słyszysz. Naciśnij Spację, aby odtworzyć dźwięk.",error:"Weryfikacja nie powiodła się. Spróbuj ponownie później.",expired:"Weryfikacja wygasła. Spróbuj ponownie.",footer:'Chronione przez <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (oficjalna strona internetowa, otwiera się w nowej karcie)">ALTCHA</a>',getAudioChallenge:"Pobierz zadanie dźwiękowe",label:"Nie jestem robotem",loading:"Ładowanie...",reload:"Odśwież",verify:"Zweryfikuj",verificationRequired:"Wymagana weryfikacja!",verified:"Zweryfikowano",verifying:"Weryfikacja...",waitAlert:"Trwa weryfikacja... proszę czekać.",cancel:"Anuluj",enterCodeFromImage:"Aby kontynuować, wprowadź kod z poniższego obrazka."};globalThis.$altcha.i18n.set("pl",ru);const nu={ariaLinkLabel:"Altcha (site oficial)",enterCode:"Introduza o código",enterCodeAria:"Introduza o código que ouve. Prima Espaço para reproduzir o áudio.",error:"A verificação falhou. Por favor, tente novamente mais tarde.",expired:"Verificação expirada. Por favor, tente novamente.",footer:'Protegido por <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (site oficial, abre num novo separador)">ALTCHA</a>',getAudioChallenge:"Obter desafio de áudio",label:"Não sou um robô",loading:"A carregar...",reload:"Recarregar",verify:"Verificar",verificationRequired:"Verificação necessária!",verified:"Verificado",verifying:"A verificar...",waitAlert:"A verificar... por favor aguarde.",cancel:"Cancelar",enterCodeFromImage:"Para prosseguir, introduza o código da imagem abaixo."};globalThis.$altcha.i18n.set("pt-pt",nu);const au={ariaLinkLabel:"Altcha (site oficial)",enterCode:"Digite o código",enterCodeAria:"Digite o código que você ouve. Pressione Espaço para reproduzir o áudio.",error:"Falha na verificação. Por favor, tente novamente mais tarde.",expired:"Verificação expirada. Por favor, tente novamente.",footer:'Protegido por <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (site oficial, abre em uma nova aba)">ALTCHA</a>',getAudioChallenge:"Obter desafio de áudio",label:"Eu não sou um robô",loading:"Carregando...",reload:"Recarregar",verify:"Verificar",verificationRequired:"Verificação necessária!",verified:"Verificado",verifying:"Verificando...",waitAlert:"Verificando... por favor aguarde.",cancel:"Cancelar",enterCodeFromImage:"Para prosseguir, digite o código da imagem abaixo."};globalThis.$altcha.i18n.set("pt-br",au);const iu={ariaLinkLabel:"Altcha (site oficial)",enterCode:"Introduceți codul",enterCodeAria:"Introduceți codul pe care îl auziți. Apăsați Spațiu pentru a reda audio.",error:"Verificarea a eșuat. Încearcă din nou mai târziu.",expired:"Verificarea a expirat. Încearcă din nou.",footer:'Protejat de <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (site oficial, se deschide într-o filă nouă)">ALTCHA</a>',getAudioChallenge:"Obține o provocare audio",label:"Nu sunt un robot",loading:"Se încarcă...",reload:"Reîncarcă",verify:"Verifică",verificationRequired:"Verificare necesară!",verified:"Verificat",verifying:"Se verifică...",waitAlert:"Se verifică... te rugăm să aștepți.",cancel:"Anulare",enterCodeFromImage:"Pentru a continua, vă rugăm să introduceți codul din imaginea de mai jos."};globalThis.$altcha.i18n.set("ro",iu);const ou={ariaLinkLabel:"Altcha (официальный сайт)",enterCode:"Введите код",enterCodeAria:"Введите код, который слышите. Нажмите пробел для воспроизведения аудио.",error:"Ошибка верификации. Попробуйте позже.",expired:"Срок действия верификации истек. Попробуйте снова.",footer:'Защищено <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (официальный сайт, откроется в новой вкладке)">ALTCHA</a>',getAudioChallenge:"Получить аудио задачу",label:"Я не робот",loading:"Загрузка...",reload:"Перезагрузить",verify:"Проверить",verificationRequired:"Требуется проверка!",verified:"Проверено",verifying:"Идет проверка...",waitAlert:"Идет проверка... Пожалуйста, подождите.",cancel:"Отмена",enterCodeFromImage:"Чтобы продолжить, пожалуйста, введите код с изображения ниже."};globalThis.$altcha.i18n.set("ru",ou);const lu={ariaLinkLabel:"Altcha (oficiálna webová stránka)",enterCode:"Zadajte kód",enterCodeAria:"Zadajte kód, ktorý počujete. Stlačením medzerníka prehráte zvuk.",error:"Verifikácia zlyhala. Skúste to znova neskôr.",expired:"Verifikácia vypršala. Skúste to znova.",footer:'Chránené <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (oficiálna webová stránka, otvorí sa na novej karte)">ALTCHA</a>',getAudioChallenge:"Získať audio výzvu",label:"Nie som robot",loading:"Načítava sa...",reload:"Obnoviť",verify:"Verifikovať",verificationRequired:"Vyžaduje sa overenie!",verified:"Verifikované",verifying:"Prebieha verifikácia...",waitAlert:"Prebieha verifikácia... prosím čakajte.",cancel:"Zrušiť",enterCodeFromImage:"Na pokračovanie, prosím, zadajte kód z obrázka nižšie."};globalThis.$altcha.i18n.set("sk",lu);const su={ariaLinkLabel:"Altcha (uradna spletna stran)",enterCode:"Vnesite kodo",enterCodeAria:"Vnesite kodo, ki jo slišite. Pritisnite preslednico za predvajanje zvoka.",error:"Preverjanje ni uspelo. Poskusite znova kasneje.",expired:"Preverjanje je poteklo. Poskusite znova.",footer:'Zaščiteno z <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (uradna spletna stran, odpre se v novem zavihku)">ALTCHA</a>',getAudioChallenge:"Pridobite zvočni izziv",label:"Nisem robot",loading:"Nalagam...",reload:"Ponovno naloži",verify:"Preveri",verificationRequired:"Potrebna je preveritev!",verified:"Preverjeno",verifying:"Preverjanje...",waitAlert:"Preverjanje... prosim počakajte.",cancel:"Preklic",enterCodeFromImage:"Za nadaljevanje, prosimo, vnesite kodo s slike spodaj."};globalThis.$altcha.i18n.set("sl",su);const cu={ariaLinkLabel:"Altcha (faqja zyrtare)",enterCode:"Fut kodin",enterCodeAria:"Fut kodin që dëgjon. Shtypni Hapësirë për të luajtur audio.",error:"Verifikimi dështoi. Provoni përsëri më vonë.",expired:"Verifikimi ka skaduar. Provoni përsëri.",footer:'I mbrojtur nga <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (faqja zyrtare, hapet në skedë të re)">ALTCHA</a>',getAudioChallenge:"Merr një sfidë audio",label:"Unë nuk jam një robot",loading:"Duke u ngarkuar...",reload:"Ringarko",verify:"Verifiko",verificationRequired:"Kërkohet verifikimi!",verified:"I verifikuar",verifying:"Duke verifikuar...",waitAlert:"Duke verifikuar... ju lutem prisni.",cancel:"Anuloje",enterCodeFromImage:"Për të vazhduar, ju lutemi fusni kodin nga imazhi më poshtë."};globalThis.$altcha.i18n.set("sq",cu);const uu={ariaLinkLabel:"Altcha (zvanična web stranica)",enterCode:"Unesite kod",enterCodeAria:"Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",error:"Verifikacija nije uspela. Pokušajte ponovo kasnije.",expired:"Verifikacija je istekla. Pokušajte ponovo.",footer:'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (zvanična web stranica, otvara se u novoj kartici)">ALTCHA</a>',getAudioChallenge:"Dohvatite audio izazov",label:"Nisam robot",loading:"Učitavanje...",reload:"Ponovo učitaj",verify:"Verifikuj",verificationRequired:"Verifikacija je obavezna!",verified:"Verifikovano",verifying:"Verifikacija u toku...",waitAlert:"Verifikacija u toku... molimo vas da sačekate.",cancel:"Откажи",enterCodeFromImage:"Да бисте наставили, унесите код са слике испод."};globalThis.$altcha.i18n.set("sr",uu);const fu={ariaLinkLabel:"Altcha (officiell webbplats)",enterCode:"Ange kod",enterCodeAria:"Ange koden du hör. Tryck på mellanslag för att spela upp ljudet.",error:"Verifiering misslyckades. Försök igen senare.",expired:"Verifieringen har gått ut. Försök igen.",footer:'Skyddad av <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (officiell webbplats, öppnas i ny flik)">ALTCHA</a>',getAudioChallenge:"Få ljudutmaning",label:"Jag är inte en robot",loading:"Laddar...",reload:"Ladda om",verify:"Verifiera",verificationRequired:"Verifiering krävs!",verified:"Verifierad",verifying:"Verifierar...",waitAlert:"Verifierar... vänligen vänta.",cancel:"Avbryt",enterCodeFromImage:"För att fortsätta, ange koden från bilden nedan."};globalThis.$altcha.i18n.set("sv",fu);const du={ariaLinkLabel:"Altcha (resmi web sitesi)",enterCode:"Kodu girin",enterCodeAria:"Duyduğunuz kodu girin. Ses dosyasını oynatmak için Boşluk tuşuna basın.",error:"Doğrulama başarısız oldu. Lütfen daha sonra tekrar deneyin.",expired:"Doğrulama süresi doldu. Lütfen tekrar deneyin.",footer:'ALTCHA tarafından korunuyor <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (resmi web sitesi, yeni sekmede açılır)">ALTCHA</a>',getAudioChallenge:"Sesli doğrulama al",label:"Ben robot değilim",loading:"Yükleniyor...",reload:"Yeniden yükle",verify:"Doğrula",verificationRequired:"Doğrulama gerekli!",verified:"Doğrulandı",verifying:"Doğrulama yapılıyor...",waitAlert:"Doğrulama yapılıyor... lütfen bekleyin.",cancel:"İptal",enterCodeFromImage:"Devam etmek için lütfen aşağıdaki resimdeki kodu girin."};globalThis.$altcha.i18n.set("tr",du);const hu={ariaLinkLabel:"Altcha (офіційний сайт)",enterCode:"Введіть код",enterCodeAria:"Введіть код, який ви чуєте. Натисніть пробіл, щоб відтворити аудіо.",error:"Перевірка не вдалася. Спробуйте пізніше.",expired:"Перевірка прострочена. Спробуйте знову.",footer:'Захищено <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (офіційний сайт, відкриється в новій вкладці)">ALTCHA</a>',getAudioChallenge:"Отримати аудіо-челлендж",label:"Я не робот",loading:"Завантаження...",reload:"Перезавантажити",verify:"Перевірити",verificationRequired:"Потрібна перевірка!",verified:"Перевірено",verifying:"Перевіряється...",waitAlert:"Перевірка... будь ласка, зачекайте.",cancel:"Скасувати",enterCodeFromImage:"Щоб продовжити, введіть код із зображення нижче."};globalThis.$altcha.i18n.set("uk",hu);const vu={ariaLinkLabel:"Altcha (amptelike webwerf)",enterCode:"Voer kode in",enterCodeAria:"Voer die kode in wat jy hoor. Druk Spasie om die klank af te speel.",error:"Verifikasie het misluk. Probeer later weer.",expired:"Verifikasie het verval. Probeer weer.",footer:'Beskerm deur <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (amptelike webwerf, open in nuwe oortjie)">ALTCHA</a>',getAudioChallenge:"Kry 'n klankuitdaging",label:"Ek is nie 'n robot nie",loading:"Laai...",reload:"Laai weer",verify:"Verifieer",verificationRequired:"Verifikasie is vereis!",verified:"Geverifieer",verifying:"Verifieer...",waitAlert:"Verifieer... wag asseblief.",cancel:"Kanselleer",enterCodeFromImage:"Om voort te gaan, voer asseblief die kode vanaf die onderstaande prentjie in."};globalThis.$altcha.i18n.set("af",vu);const gu={ariaLinkLabel:"Altcha (ዋናው ድህረ ገጽ)",enterCode:"ኮድ አስገባ",enterCodeAria:"የሚሰማዎትን ኮድ ያስገቡ። ድምጽ ለመጫወት Space ን ይጫኑ።",error:"ማረጋገጫ አልተሳካም። በኋላ ላይ እንደገና ይሞክሩ።",expired:"ማረጋገጫው ጊዜው አልፏል። እንደገና ይሞክሩ።",footer:'በ <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (ዋናው ድህረ ገጽ, በአዲስ ትር ይከፈታል)">ALTCHA</a> የተጠበቀ',getAudioChallenge:"የድምጽ ፈተና ያግኙ",label:"እኔ ሮቦት አይደለሁም",loading:"በመጫን ላይ...",reload:"እንደገና ጫን",verify:"አረጋግጥ",verificationRequired:"ማረጋገጫ ያስፈልጋል!",verified:"ተረጋግጧል",verifying:"በማረጋገጥ ላይ...",waitAlert:"በማረጋገጥ ላይ... እባክዎ ይጠብቁ።",cancel:"ይቅር",enterCodeFromImage:"ለመቀጠል፣ እባክዎን ከታች ካለው ምስል ኮዱን ያስገቡ።"};globalThis.$altcha.i18n.set("am",gu);const pu={ariaLinkLabel:"Altcha (tovuti rasmi)",enterCode:"Weka nambari",enterCodeAria:"Weka nambari unayosikia. Bonyeza Space kucheza sauti.",error:"Uthibitishaji umeshindwa. Jaribu tena baadaye.",expired:"Uthibitishaji umeisha. Jaribu tena.",footer:'Imealindwa na <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (tovuti rasmi, inafunguka kwenye kichupo kipya)">ALTCHA</a>',getAudioChallenge:"Pata changamoto ya sauti",label:"Mimi sio roboti",loading:"Inapakia...",reload:"Pakia tena",verify:"Thibitisha",verificationRequired:"Uthibitishaji unahitajika!",verified:"Imethibitishwa",verifying:"Inathibitisha...",waitAlert:"Inathibitisha... tafadhali subiri.",cancel:"Ghairi",enterCodeFromImage:"Ili kuendelea, tafadhali weka nambari kutoka kwa picha hapa chini."};globalThis.$altcha.i18n.set("sw",pu);const bu={ariaLinkLabel:"Altcha (oju opo wẹẹbu osise)",enterCode:"Tẹ koodu sii",enterCodeAria:"Tẹ koodu ti o ngbọ sii. Tẹ Space lati ṣe ohun orin.",error:"Ìdájọ́kòwò kò ṣẹ́ṣe. Gbiyanju lẹẹkansi ni ọjọ́ iwájú.",expired:"Ìdájọ́kòwò ti pari. Gbiyanju lẹẹkansi.",footer:'Ti wa ni ààbò nipasẹ <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (oju opo wẹẹbu osise, ó ń ṣí ní táàbù tuntun)">ALTCHA</a>',getAudioChallenge:"Gba ìjàdú ohùn",label:"Emi kii ṣe ẹrọ",loading:"Ó ń gbé sílẹ̀...",reload:"Tún gbé wọlé",verify:"Ṣàdájọ́",verificationRequired:"Ìdájọ́kòwò ni a nílò!",verified:"A ti dájọ́",verifying:"Ó ń ṣàdájọ́...",waitAlert:"Ó ń ṣàdájọ́... ẹ jọ̀ọ́ ẹ duro.",cancel:"Fagbọsẹ",enterCodeFromImage:"Lati tẹsiwaju, jọwọ tẹ koodu ti o wa lati aworan isalẹ sii."};globalThis.$altcha.i18n.set("yo",bu);const mu={ariaLinkLabel:"Altcha (অফিসিয়াল ওয়েবসাইট)",enterCode:"কোড লিখুন",enterCodeAria:"আপনি যে কোড শুনতে পান তা লিখুন। অডিও প্লে করতে স্পেস বাটন টিপুন।",error:"যাচাইকরণ ব্যর্থ হয়েছে। পরে আবার চেষ্টা করুন।",expired:"যাচাইকরণ সময়সীমা শেষ হয়েছে। আবার চেষ্টা করুন।",footer:'দ্বারা সুরক্ষিত <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (অফিসিয়াল ওয়েবসাইট, নতুন ট্যাবে খোলে)">ALTCHA</a>',getAudioChallenge:"অডিও চ্যালেঞ্জ নিন",label:"আমি রোবট নই",loading:"লোড হচ্ছে...",reload:"পুনরায় লোড করুন",verify:"যাচাই করুন",verificationRequired:"যাচাই প্রয়োজন!",verified:"যাচাই করা হয়েছে",verifying:"যাচাই করা হচ্ছে...",waitAlert:"যাচাই করা হচ্ছে... দয়া করে অপেক্ষা করুন।",cancel:"বাতিল করুন",enterCodeFromImage:"এগিয়ে যেতে, অনুগ্রহ করে নীচের চিত্র থেকে কোডটি প্রবেশ করান।"};globalThis.$altcha.i18n.set("bn",mu);const yu={ariaLinkLabel:"Altcha (אתר רשמי)",enterCode:"הזן קוד",enterCodeAria:"הזן את הקוד שאתה שומע. לחץ על רווח להפעלת השמע.",error:"האימות נכשל. נסה שוב מאוחר יותר.",expired:"תוקף האימות פג. נסה שוב.",footer:'מוגן על ידי <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (אתר רשמי, נפתח בכרטיסייה חדשה)">ALTCHA</a>',getAudioChallenge:"קבל אתגר שמע",label:"אני לא רובוט",loading:"טוען...",reload:"טען מחדש",verify:"אמת",verificationRequired:"נדרש אימות!",verified:"אומת",verifying:"מאמת...",waitAlert:"מבצע אימות... אנא המתן.",cancel:"ביטול",enterCodeFromImage:"כדי להמשיך, אנא הזן את הקוד מהתמונה למטה."};globalThis.$altcha.i18n.set("he",yu);const ku={ariaLinkLabel:"Altcha (आधिकारिक वेबसाइट)",enterCode:"कोड दर्ज करेंं",enterCodeAria:"आप जो कोड सुनते हैं उसे दर्ज करें। ऑडियो चलाने के लिए स्पेस दबाएं।",error:"सत्यापन विफल। कृपया बाद में फिर से प्रयास करें।",expired:"सत्यापन समाप्त हो गया है। कृपया पुनः प्रयास करें।",footer:'द्वारा संरक्षित <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (आधिकारिक वेबसाइट, नए टैब में खुलती है)">ALTCHA</a>',getAudioChallenge:"ऑडियो चुनौती प्राप्त करें",label:"मैं रोबोट नहीं हूँ",loading:"लोड हो रहा है...",reload:"पुनः लोड करें",verify:"सत्यापित करें",verificationRequired:"सत्यापन आवश्यक है!",verified:"सत्यापित",verifying:"सत्यापित कर रहे हैं...",waitAlert:"सत्यापित किया जा रहा है... कृपया प्रतीक्षा करें।",cancel:"रद्द करें",enterCodeFromImage:"आगे बढ़ने के लिए, कृपया नीचे दी गई छवि से कोड दर्ज करें।"};globalThis.$altcha.i18n.set("hi",ku);const wu={ariaLinkLabel:"Altcha (situs web resmi)",enterCode:"Masukkan kode",enterCodeAria:"Masukkan kode yang Anda dengar. Tekan Spasi untuk memutar audio.",error:"Verifikasi gagal. Coba lagi nanti.",expired:"Verifikasi telah kedaluwarsa. Coba lagi.",footer:'Dilindungi oleh <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (situs web resmi, terbuka di tab baru)">ALTCHA</a>',getAudioChallenge:"Dapatkan tantangan audio",label:"Saya bukan robot",loading:"Memuat...",reload:"Muat ulang",verify:"Verifikasi",verificationRequired:"Verifikasi diperlukan!",verified:"Terverifikasi",verifying:"Memverifikasi...",waitAlert:"Memverifikasi... harap tunggu.",cancel:"Batal",enterCodeFromImage:"Untuk melanjutkan, silakan masukkan kode dari gambar di bawah ini."};globalThis.$altcha.i18n.set("id",wu);const Au={ariaLinkLabel:"Altcha (公式ウェブサイト)",enterCode:"コードを入力",enterCodeAria:"聞こえるコードを入力してください。スペースキーを押して音声を再生します。",error:"認証に失敗しました。後でもう一度試してください。",expired:"認証が期限切れです。再試行してください。",footer:'保護されています <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (公式ウェブサイト、新しいタブで開きます)">ALTCHA</a>',getAudioChallenge:"音声チャレンジを取得",label:"私はロボットではありません",loading:"読み込み中...",reload:"再読み込み",verify:"確認",verificationRequired:"認証が必要です！",verified:"確認済み",verifying:"確認中...",waitAlert:"確認中...少々お待ちください。",cancel:"キャンセル",enterCodeFromImage:"続行するには、以下の画像からコードを入力してください。"};globalThis.$altcha.i18n.set("ja",Au);const _u={ariaLinkLabel:"Altcha (공식 웹사이트)",enterCode:"코드 입력",enterCodeAria:"들리는 코드를 입력하세요. 스페이스 바를 눌러 오디오를 재생합니다.",error:"인증 실패. 나중에 다시 시도해주세요.",expired:"인증이 만료되었습니다. 다시 시도해주세요.",footer:'ALTCHA에서 보호됨 <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (공식 웹사이트, 새 탭에서 열림)">ALTCHA</a>',getAudioChallenge:"오디오 챌린지 받기",label:"저는 로봇이 아닙니다",loading:"로딩 중...",reload:"새로 고침",verify:"확인",verificationRequired:"인증이 필요합니다!",verified:"확인됨",verifying:"확인 중...",waitAlert:"확인 중... 잠시만 기다려주세요.",cancel:"취소",enterCodeFromImage:"계속 진행하려면 아래 이미지에서 코드를 입력하세요."};globalThis.$altcha.i18n.set("ko",_u);const Cu={ariaLinkLabel:"Altcha (ресми веб-сайт)",enterCode:"Кодты енгізіңіз",enterCodeAria:"Естіген кодыңызды енгізіңіз. Аудионы ойнату үшін Бос орынды басыңыз.",error:"Тексеру сәтсіз аяқталды. Кейінірек қайталаңыз.",expired:"Тексеру мерзімі аяқталды. Қайталаңыз.",footer:'<a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (ресми веб-сайт, жаңа қойындыда ашылады)">ALTCHA</a> қорғайды',getAudioChallenge:"Аудио сынақ алу",label:"Мен робот емеспін",loading:"Жүктелуде...",reload:"Қайта жүктеу",verify:"Тексеру",verificationRequired:"Тексеру талап етіледі!",verified:"Тексерілді",verifying:"Тексеруде...",waitAlert:"Тексерілуде... күте тұрыңыз.",cancel:"Болдыру",enterCodeFromImage:"Жалғастыру үшін төмендегі суреттегі кодты енгізіңіз."};globalThis.$altcha.i18n.set("kk",Cu);const xu={ariaLinkLabel:"Altcha (अधिकृत संकेतस्थळ)",enterCode:"कोड टाकाा",enterCodeAria:"तुम्ही ऐकत असलेला कोड टाका. ऑडिओ प्ले करण्यासाठी स्पेस दाबा.",error:"पुष्टीकरण अयशस्वी झाले. कृपया नंतर पुन्हा प्रयत्न करा.",expired:"पुष्टीकरण कालबाह्य झाले आहे. कृपया पुन्हा प्रयत्न करा.",footer:'द्वारे संरक्षित <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (अधिकृत संकेतस्थळ, नवीन टॅबमध्ये उघडते)">ALTCHA</a>',getAudioChallenge:"ऑडिओ चॅलेंज मिळवा",label:"मी रोबोट नाही",loading:"लोड होत आहे...",reload:"पुन्हा लोड करा",verify:"पुष्टीकरण करा",verificationRequired:"पडताळणी आवश्यक आहे!",verified:"पुष्टीकरण झाले",verifying:"पुष्टीकरण करत आहे...",waitAlert:"पुष्टीकरण करत आहे... कृपया थोडा वेळ थांबा.",cancel:"रद्द करा",enterCodeFromImage:"पुढे जाण्यासाठी, कृपया खालील प्रतिमेतील कोड प्रविष्ट करा."};globalThis.$altcha.i18n.set("mr",xu);const Tu={ariaLinkLabel:"Altcha (அதிகாரப்பூர்வ வலைத்தளம்)",enterCode:"குறியீட்டை உள்ளிடவும்",enterCodeAria:"நீங்கள் கேட்கும் குறியீட்டை உள்ளிடவும். ஆடியோவை இயக்க Space ஐ அழுத்தவும்.",error:"சரிபார்ப்பு தோல்வி. பிறகு மீண்டும் முயற்சிக்கவும்.",expired:"சரிபார்ப்பு காலாவதியானது. மீண்டும் முயற்சிக்கவும்.",footer:'மூலமாக பாதுகாக்கப்பட்டவை <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (அதிகாரப்பூர்வ வலைத்தளம், புதிய தாவலில் திறக்கும்)">ALTCHA</a>',getAudioChallenge:"ஒலி சவாலை பெறவும்",label:"நான் ரோபோடான அல்ல",loading:"செயலாக்கம்...",reload:"மீண்டும் புதுப்பிக்கவும்",verify:"சரிபார்க்கவும்",verificationRequired:"சரிபார்ப்பு தேவை!",verified:"சரிபார்க்கப்பட்டது",verifying:"சரிபார்க்கப்படுகிறது...",waitAlert:"சரிபார்க்கப்படுகிறது... தயவுசெய்து காத்திருக்கவும்.",cancel:"ரத்துசெய்",enterCodeFromImage:"தொடர, கீழே உள்ள படத்திலிருந்து குறியீட்டை உள்ளிடவும்."};globalThis.$altcha.i18n.set("ta",Tu);const Eu={ariaLinkLabel:"Altcha (అధికారిక వెబ్‌సైట్)",enterCode:"కోడ్‌ని నమోదు చేయండి",enterCodeAria:"మీరు విన్న కోడ్‌ని నమోదు చేయండి. ఆడియో ప్లే చేయడానికి స్పేస్‌ను నొక్కండి.",error:"చెకింగ్ విఫలమైంది. దయచేసి మరల ప్రయత్నించండి.",expired:"చెకింగ్ కాలం ముగిసింది. దయచేసి మరల ప్రయత్నించండి.",footer:'ఈ సైట్ రక్షించబడింది <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (అధికారిక వెబ్‌సైట్, కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)">ALTCHA</a>',getAudioChallenge:"ఆడియో ఛాలెంజ్ పొందండి",label:"నేను రోబోట్ కాదు",loading:"లోడ్ అవుతోంది...",reload:"మళ్ళీ లోడ్ చేయండి",verify:"ధ్రువీకరించు",verificationRequired:"ధృవీకరణ అవసరం!",verified:"ధ్రువీకరించబడింది",verifying:"ధ్రువీకరణ జరుగుతుంది...",waitAlert:"ధ్రువీకరణ జరుగుతుంది... దయచేసి వేచి ఉండండి.",cancel:"రద్దు చేయండి",enterCodeFromImage:"కొనసాగడానికి, దయచేసి క్రింది చిత్రంలో ఉన్న కోడ్‌ను నమోదు చేయండి."};globalThis.$altcha.i18n.set("te",Eu);const Lu={ariaLinkLabel:"Altcha (เว็บไซต์ทางการ)",enterCode:"ป้อนรหัส",enterCodeAria:"ป้อนรหัสที่คุณได้ยิน กด Space เพื่อเล่นเสียง",error:"การตรวจสอบล้มเหลว กรุณาลองอีกครั้งภายหลัง",expired:"การตรวจสอบหมดอายุ กรุณาลองใหม่",footer:'ป้องกันโดย <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (เว็บไซต์ทางการ เปิดในแท็บใหม่)">ALTCHA</a>',getAudioChallenge:"รับการท้าทายเสียง",label:"ฉันไม่ใช่บอท",loading:"กำลังโหลด...",reload:"โหลดใหม่",verify:"ตรวจสอบ",verificationRequired:"จำเป็นต้องตรวจสอบ!",verified:"ตรวจสอบแล้ว",verifying:"กำลังตรวจสอบ...",waitAlert:"กำลังตรวจสอบ... กรุณารอ",cancel:"ยกเลิก",enterCodeFromImage:"เพื่อดำเนินการต่อ โปรดป้อนรหัสจากรูปภาพด้านล่าง"};globalThis.$altcha.i18n.set("th",Lu);const Su={ariaLinkLabel:"Altcha (سرکاری ویب سائٹ)",enterCode:"کوڈ درج کریں",enterCodeAria:"جو کوڈ آپ سنتے ہیں وہ درج کریں۔ آڈیو چلانے کے لیے اسپیس دبائیں۔",error:"توثیق ناکام ہو گئی۔ براہ کرم بعد میں دوبارہ کوشش کریں۔",expired:"توثیق کی مدت ختم ہو گئی ہے۔ براہ کرم دوبارہ کوشش کریں۔",footer:'کے ذریعے محفوظ <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (سرکاری ویب سائٹ، نئے ٹیب میں کھلتی ہے)">ALTCHA</a>',getAudioChallenge:"آڈیو چیلنج حاصل کریں",label:"میں روبوٹ نہیں ہوں",loading:"لوڈ ہو رہا ہے...",reload:"دوبارہ لوڈ کریں",verify:"توثیق کریں",verificationRequired:"تصدیق ضروری ہے!",verified:"توثیق شدہ",verifying:"توثیق ہو رہی ہے...",waitAlert:"توثیق ہو رہی ہے... براہ کرم انتظار کریں۔",cancel:"منسوخ کریں",enterCodeFromImage:"اگلے مرحلے پر جانے کے لیے، براہ کرم نیچے دی گئی تصویر سے کوڈ درج کریں۔"};globalThis.$altcha.i18n.set("ur",Su);const $u={ariaLinkLabel:"Altcha (rasmiy veb-sayt)",enterCode:"Kodni kiriting",enterCodeAria:"Eshitgan kodingizni kiriting. Audioni ijro etish uchun Bo'sh joy tugmasini bosing.",error:"Tekshiruv muvaffaqiyatsiz tugadi. Keyinroq qayta urinib ko'ring.",expired:"Tekshiruv muddati tugadi. Qayta urinib ko'ring.",footer:'<a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (rasmiy veb-sayt, yangi varaqda ochiladi)">ALTCHA</a> tomonidan himoyalangan',getAudioChallenge:"Audio sinovni olish",label:"Men robot emasman",loading:"Yuklanmoqda...",reload:"Qayta yuklash",verify:"Tekshirish",verificationRequired:"Tekshiruv talab qilinadi!",verified:"Tekshirildi",verifying:"Tekshirilmoqda...",waitAlert:"Tekshirilmoqda... iltimos kuting.",cancel:"Bekor qilish",enterCodeFromImage:"Davom etish uchun, iltimos, quyidagi rasmda ko'rsatilgan kodni kiriting."};globalThis.$altcha.i18n.set("uz",$u);const ju={ariaLinkLabel:"Altcha (trang web chính thức)",enterCode:"Nhập mã",enterCodeAria:"Nhập mã bạn nghe được. Nhấn Phím cách để phát âm thanh.",error:"Xác minh thất bại. Vui lòng thử lại sau.",expired:"Xác minh đã hết hạn. Vui lòng thử lại.",footer:'Được bảo vệ bởi <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (trang web chính thức, mở trong tab mới)">ALTCHA</a>',getAudioChallenge:"Nhận thử thách âm thanh",label:"Tôi không phải là robot",loading:"Đang tải...",reload:"Tải lại",verify:"Xác minh",verificationRequired:"Yêu cầu xác minh!",verified:"Đã xác minh",verifying:"Đang xác minh...",waitAlert:"Đang xác minh... vui lòng chờ.",cancel:"Hủy bỏ",enterCodeFromImage:"Để tiếp tục, vui lòng nhập mã từ hình ảnh bên dưới."};globalThis.$altcha.i18n.set("vi",ju);const Iu={ariaLinkLabel:"Altcha (官方网站)",enterCode:"输入代码",enterCodeAria:"输入您听到的代码。按空格键播放音频。",error:"验证失败。稍后再试。",expired:"验证已过期。请重试。",footer:'由 <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (官方网站，在新标签页中打开)">ALTCHA</a> 保护',getAudioChallenge:"获取音频挑战",label:"我不是机器人",loading:"加载中...",reload:"重新加载",verify:"验证",verificationRequired:"需要验证！",verified:"已验证",verifying:"正在验证...",waitAlert:"正在验证... 请稍等。",cancel:"取消",enterCodeFromImage:"为继续操作，请输入下图中显示的验证码。"};globalThis.$altcha.i18n.set("zh-cn",Iu);const Pu={ariaLinkLabel:"Altcha (官方網站)",cancel:"取消",enterCode:"輸入代碼",enterCodeAria:"輸入你聽到嘅代碼。按空格鍵播放音訊。",enterCodeFromImage:"要繼續，請輸入下面圖片入面嘅代碼。",error:"驗證失敗。請稍後再試。",expired:"驗證已過期。請再試一次。",footer:'由 <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (官方網站，在新分頁中開啟)">ALTCHA</a> 提供保護',getAudioChallenge:"取得音訊驗證",label:"我唔係機械人",loading:"載入中...",reload:"重新載入",verify:"驗證",verificationRequired:"需要驗證！",verified:"已驗證",verifying:"驗證中...",waitAlert:"驗證中... 請稍候。"};globalThis.$altcha.i18n.set("zh-hk",Pu);const Ru={ariaLinkLabel:"Altcha (官方網站)",enterCode:"輸入代碼",enterCodeAria:"輸入您聽到的代碼。按空格鍵播放音頻。",error:"驗證失敗。稍後再試。",expired:"驗證已過期。請重試。",footer:'由 <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (官方網站，在新分頁中開啟)">ALTCHA</a> 保護',getAudioChallenge:"獲取音頻挑戰",label:"我不是機器人",loading:"載入中...",reload:"重新載入",verify:"驗證",verificationRequired:"需要驗證！",verified:"已驗證",verifying:"正在驗證...",waitAlert:"正在驗證... 請稍等。",cancel:"取消",enterCodeFromImage:"若要繼續，請輸入下方的圖片驗證碼。"};return globalThis.$altcha.i18n.set("zh-tw",Ru),nl}xf();
