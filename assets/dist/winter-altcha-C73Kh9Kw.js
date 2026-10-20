var vu=Object.defineProperty;var nl=X=>{throw TypeError(X)};var pu=(X,Q,ve)=>Q in X?vu(X,Q,{enumerable:!0,configurable:!0,writable:!0,value:ve}):X[Q]=ve;var R=(X,Q,ve)=>pu(X,typeof Q!="symbol"?Q+"":Q,ve),Ja=(X,Q,ve)=>Q.has(X)||nl("Cannot "+ve);var h=(X,Q,ve)=>(Ja(X,Q,"read from private field"),ve?ve.call(X):Q.get(X)),P=(X,Q,ve)=>Q.has(X)?nl("Cannot add the same private member more than once"):Q instanceof WeakSet?Q.add(X):Q.set(X,ve),T=(X,Q,ve,qt)=>(Ja(X,Q,"write to private field"),qt?qt.call(X,ve):Q.set(X,ve),ve),H=(X,Q,ve)=>(Ja(X,Q,"access private method"),ve);var rl={},al;function mu(){var Uo,Tn,Yt,sn,$n,Rn,In,Lt,Pn,He,rr,Mt,ut,St,On,cn,Z,Xa,pr,Qa,il,ol,Nn,gu,gr,Ho,Fo,Ke,ar,Xe,un,Pe,Ye,Oe,Ge,Ct,fn,Gt,Ln,ir,or,Nt,Vr,J,ll,sl,ei,cl,ti,mr,Gr,ni,ri,ft,Dt,ht,hn,lr,jr,Fa,Ut,Qe;if(al)return rl;al=1;const X=!1;var Q=Array.isArray,ve=Array.prototype.indexOf,qt=Array.prototype.includes,ul=Array.from,br=Object.keys,pn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,fl=Object.getOwnPropertyDescriptors,hl=Object.prototype,dl=Array.prototype,ai=Object.getPrototypeOf,ii=Object.isExtensible;const Ft=()=>{};function vl(e){for(var t=0;t<e.length;t++)e[t]()}function oi(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const ye=2,mn=4,yr=8,Wr=1<<24,at=16,it=32,vt=64,qr=128,Zr=256,We=512,pe=1024,fe=2048,ot=4096,qe=8192,je=16384,Zt=32768,wr=1<<25,Vt=65536,_r=1<<17,pl=1<<18,Jt=1<<19,gl=1<<20,Xt=65536,kr=1<<21,bn=1<<22,jt=1<<23,yn=Symbol("$state"),li=Symbol("component"),ml=Symbol("legacy props"),bl=Symbol(""),xr=Symbol("attributes"),Jr=Symbol("class"),Xr=Symbol("style"),Dn=Symbol("text"),Un=Symbol("form reset"),Hn=new class extends Error{constructor(){super(...arguments);R(this,"name","StaleReactionError");R(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Fn=!!((Uo=globalThis.document)!=null&&Uo.contentType)&&globalThis.document.contentType.includes("xml"),Vn=3,jn=8;function si(e){return e===this.v}function ci(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function yl(e){return!ci(e,this.v)}function wl(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function _l(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function kl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function El(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Sl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Cl(){throw new Error("https://svelte.dev/e/hydration_failed")}function Al(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Tl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function $l(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Rl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Il=!1;const Pl=1,Ol=2,Qr="[",ui="[!",fi="[?",hi="]",Qt={},he=Symbol("uninitialized"),di="http://www.w3.org/1999/xhtml",Ll="http://www.w3.org/2000/svg",Ml="http://www.w3.org/1998/Math/MathML",Nl="@attach";let Se=null;function wn(e){Se=e}function Rt(e,t=!1,n){Se={p:Se,i:!1,c:null,e:null,s:e,x:null,r:M,l:null}}function It(e){var t=Se,n=t.e;if(n!==null){t.e=null;for(var r of n)Zi(r)}return e!==void 0&&(t.x=e),t.i=!0,Se=t.p,ea(e)}function ea(e={}){return pn(e,li,{value:!0}),e}function vi(){return!0}let en=[];function pi(){var e=en;en=[],vl(e)}function pt(e){if(en.length===0&&!Gn){var t=en;queueMicrotask(()=>{t===en&&pi()})}en.push(e)}function Dl(){for(;en.length>0;)pi()}function Ul(){console.warn("https://svelte.dev/e/derived_inert")}function Bn(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Hl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Fl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let L=!1;function gt(e){L=e}let D;function Re(e){if(e===null)throw Bn(),Qt;return D=e}function tn(){return Re(bt(D))}function de(e){if(L){if(bt(D)!==null)throw Bn(),Qt;D=e}}function ta(e=1){if(L){for(var t=e,n=D;t--;)n=bt(n);D=n}}function na(e=!0){for(var t=0,n=D;;){if(n.nodeType===jn){var r=n.data;if(r===hi){if(t===0)return n;t-=1}else(r===Qr||r===ui||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=bt(n);e&&n.remove(),n=a}}function gi(e){if(!e||e.nodeType!==jn)throw Bn(),Qt;return e.data}function Pt(e){if(typeof e!="object"||e===null||yn in e||li in e)return e;const t=ai(e);if(t!==hl&&t!==dl)return e;var n=new Map,r=Q(e),a=V(0),o=an,s=l=>{if(an===o)return l();var f=F,u=an;Ze(null),Bi(o);var d=l();return Ze(f),Bi(u),d};return r&&n.set("length",V(e.length)),new Proxy(e,{defineProperty(l,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Al();var d=n.get(f);return d===void 0?s(()=>{var m=V(u.value);return n.set(f,m),m}):E(d,u.value,!0),!0},deleteProperty(l,f){var u=n.get(f);if(u===void 0){if(f in l){const d=s(()=>V(he));n.set(f,d),qn(a)}}else E(u,he),qn(a);return!0},get(l,f,u){var p;if(f===yn)return e;var d=n.get(f),m=f in l;if(d===void 0&&(!m||(p=gn(l,f))!=null&&p.writable)&&(d=s(()=>{var b=Pt(m?l[f]:he),y=V(b);return y}),n.set(f,d)),d!==void 0){var g=i(d);return g===he?void 0:g}return Reflect.get(l,f,u)},getOwnPropertyDescriptor(l,f){var u=Reflect.getOwnPropertyDescriptor(l,f);if(u&&"value"in u){var d=n.get(f);d&&(u.value=i(d))}else if(u===void 0){var m=n.get(f),g=m==null?void 0:m.v;if(m!==void 0&&g!==he)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return u},has(l,f){var g;if(f===yn)return!0;var u=n.get(f),d=u!==void 0&&u.v!==he||Reflect.has(l,f);if(u!==void 0||M!==null&&(!d||(g=gn(l,f))!=null&&g.writable)){u===void 0&&(u=s(()=>{var p=d?Pt(l[f]):he,b=V(p);return b}),n.set(f,u));var m=i(u);if(m===he)return!1}return d},set(l,f,u,d){var ce;var m=n.get(f),g=f in l;if(r&&f==="length")for(var p=u;p<m.v;p+=1){var b=n.get(p+"");b!==void 0?E(b,he):p in l&&(b=s(()=>V(he)),n.set(p+"",b))}if(m===void 0)(!g||(ce=gn(l,f))!=null&&ce.writable)&&(m=s(()=>V(void 0)),E(m,Pt(u)),n.set(f,m));else{g=m.v!==he;var y=s(()=>Pt(u));E(m,y)}var N=Reflect.getOwnPropertyDescriptor(l,f);if(N!=null&&N.set&&N.set.call(d,u),!g){if(r&&typeof f=="string"){var I=n.get("length"),z=Number(f);Number.isInteger(z)&&z>=I.v&&E(I,z+1)}qn(a)}return!0},ownKeys(l){i(a);var f=Reflect.ownKeys(l).filter(m=>{var g=n.get(m);return g===void 0||g.v!==he});for(var[u,d]of n)d.v!==he&&!(u in l)&&f.push(u);return f},setPrototypeOf(){Tl()}})}function mi(e){try{if(e!==null&&typeof e=="object"&&yn in e)return e[yn]}catch{}return e}function bi(e,t){return Object.is(mi(e),mi(t))}var nn,ra,yi,wi,_i;function aa(){if(nn===void 0){nn=window,ra=document,yi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;wi=gn(t,"firstChild").get,_i=gn(t,"nextSibling").get,ii(e)&&(e[Jr]=void 0,e[xr]=null,e[Xr]=void 0,e.__e=void 0),ii(n)&&(n[Dn]=void 0)}}function mt(e=""){return document.createTextNode(e)}function Ne(e){return wi.call(e)}function bt(e){return _i.call(e)}function we(e,t){if(!L)return Ne(e);var n=Ne(D);if(n===null)n=D.appendChild(mt());else if(t&&n.nodeType!==Vn){var r=mt();return n==null||n.before(r),Re(r),r}return t&&Er(n),Re(n),n}function _n(e,t=!1){if(!L){var n=Ne(e);return n instanceof Comment&&n.data===""?bt(n):n}if(t){if((D==null?void 0:D.nodeType)!==Vn){var r=mt();return D==null||D.before(r),Re(r),r}Er(D)}return D}function kn(e,t=!1){if(!L)return Ne(e);var n=we(e,t);return de(e),n}function ie(e,t=1,n=!1){let r=L?D:e;for(var a;t--;)a=r,r=bt(r);if(!L)return r;if(n){if((r==null?void 0:r.nodeType)!==Vn){var o=mt();return r===null?a==null||a.after(o):r.before(o),Re(o),o}Er(r)}return Re(r),r}function Vl(e){e.textContent=""}function ia(e,t,n){return t==null||t===di?document.createElement(e):document.createElementNS(t,e)}function Er(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===Vn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function jl(e){var t=M;if(t===null)return F.f|=jt,e;if((t.f&Zt)===0&&(t.f&mn)===0)throw e;yt(e,t)}function yt(e,t){if(!(t!==null&&(t.f&je)!==0)){for(;t!==null;){if((t.f&qr)!==0&&(t.f&(je|wr))===0){if((t.f&Zt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}const Bl=-7169;function ue(e,t){e.f=e.f&Bl|t}function oa(e){(e.f&We)!==0||e.deps===null?ue(e,pe):ue(e,ot)}function ki(e){if(e!==null)for(const t of e)(t.f&ye)===0||(t.f&Xt)===0||(t.f^=Xt,ki(t.deps))}function xi(e,t,n){(e.f&fe)!==0?t.add(e):(e.f&ot)!==0&&n.add(e),ki(e.deps),ue(e,pe)}function Ei(e,t,n){if(e==null)return t(void 0),Ft;const r=Xn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const xn=[];function zl(e,t=Ft){let n=null;const r=new Set;function a(l){if(ci(e,l)&&(e=l,n)){const f=!xn.length;for(const u of r)u[1](),xn.push(u,e);if(f){for(let u=0;u<xn.length;u+=2)xn[u][0](xn[u+1]);xn.length=0}}}function o(l){a(l(e))}function s(l,f=Ft){const u=[l,f];return r.add(u),r.size===1&&(n=t(a,o)||Ft),l(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:s}}function zn(e){let t;return Ei(e,n=>t=n)(),t}let la=Symbol("unmounted");function Si(e,t,n){const r=n[t]??(n[t]={store:null,source:Ui(void 0),unsubscribe:Ft});if(r.store!==e&&!(la in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=Ft;else{var a=!0;r.unsubscribe=Ei(e,o=>{a?r.source.v=o:E(r.source,o)}),a=!1}return e&&la in n?zn(e):i(r.source)}function Kl(){const e={};function t(){Rr(()=>{for(var n in e)e[n].unsubscribe();pn(e,la,{enumerable:!1,value:!0})})}return[e,t]}function Yl(e,t){if(t){const n=document.body;e.autofocus=!0,pt(()=>{document.activeElement===n&&e.focus()})}}let Ci=!1;function Ai(){Ci||(Ci=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Un])==null||t.call(n)})},{capture:!0}))}function En(e){var t=F,n=M;Ze(null),_t(null);try{return e()}finally{Ze(t),_t(n)}}function Gl(e,t,n,r=n){e.addEventListener(t,()=>En(n));const a=e[Un];a?e[Un]=()=>{a(),r(!0)}:e[Un]=()=>r(!0),Ai()}function Ti(e,t,n,r){const a=sa;var o=e.filter(p=>!p.settled),s=t.map(a);if(n.length===0&&o.length===0){r(s);return}var l=M,f=Wl(),u=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(p=>p.promise)):null;function d(p){if((l.f&je)===0){f();try{r([...s,...p])}catch(b){yt(b,l)}Sr()}}var m=$i();if(n.length===0){u.then(()=>d([])).finally(m);return}function g(){Promise.all(n.map(p=>ql(p))).then(d).catch(p=>yt(p,l)).finally(m)}u?u.then(()=>{f(),g(),Sr()}):g()}function Wl(){var e=M,t=F,n=Se,r=C;return function(o=!0){_t(e),Ze(t),wn(n),o&&(e.f&je)===0&&(r==null||r.activate(),r==null||r.apply())}}function Sr(e=!0){_t(null),Ze(null),wn(null),e&&(C==null||C.deactivate())}function $i(){var e=M,t=e.b,n=C,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function sa(e){var t=ye|fe;return M!==null&&(M.f|=Jt),{ctx:Se,deps:null,effects:null,equals:si,f:t,fn:e,reactions:null,rv:0,v:he,wv:0,parent:M,ac:null}}const Kn=Symbol("obsolete");function ql(e,t,n){let r=M;r===null&&_l();var a=void 0,o=Wn(he),s=!F,l=new Set;return ls(()=>{var p,b;var f=M,u=oi();a=u.promise;try{Promise.resolve(e()).then(u.resolve,y=>{y!==Hn&&u.reject(y)}).finally(Sr)}catch(y){u.reject(y),Sr()}var d=C;if(s){if((f.f&Zt)!==0)var m=$i();if((p=r.b)!=null&&p.is_rendered())(b=d.async_deriveds.get(f))==null||b.reject(Kn);else for(const y of l.values())y.reject(Kn);l.add(u),d.async_deriveds.set(f,u)}const g=(y,N=void 0)=>{m==null||m(),l.delete(u),N!==Kn&&(d.activate(),N?(o.f|=jt,Tr(o,N)):((o.f&jt)!==0&&(o.f^=jt),Tr(o,y)),d.deactivate())};u.promise.then(g,y=>g(null,y||"unknown"))}),Rr(()=>{for(const f of l)f.reject(Kn)}),new Promise(f=>{function u(d){function m(){d===a?f(o):u(a)}d.then(m,m)}u(a)})}function Ie(e){const t=sa(e);return Vi(t),t}function Zl(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)xe(t[n])}}function ca(e){var t,n=M,r=e.parent;if(!Ot&&r!==null&&e.v!==he&&(r.f&(je|qe))!==0)return Ul(),e.v;_t(r);try{e.f&=~Xt,Zl(e),t=Yi(e)}finally{_t(n)}return t}function Ri(e){var t=ca(e);if(!e.equals(t)&&(e.wv=zi(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?(C.capture(e,t,!0),Yn==null||Yn.capture(e,t,!0)):e.v=t,e.deps===null))){ue(e,pe);return}Ot||(ke!==null?(pa()||C!=null&&C.is_fork)&&ke.set(e,t):oa(e))}function Jl(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&En(()=>{n.ac.abort(Hn),n.ac=null}),n.fn!==null&&(n.teardown=Ft),Jn(n,0),ma(n))}function Ii(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&An(t)}let ua=null,Sn=null,C=null,Yn=null,ke=null,fa=null,Gn=!1,ha=!1,Cn=null,Cr=null;var Pi=0;let Xl=1;const Fr=class Fr{constructor(){P(this,Z);R(this,"id",Xl++);P(this,Tn,!1);R(this,"linked",!0);P(this,Yt,null);P(this,sn,null);R(this,"async_deriveds",new Map);R(this,"current",new Map);R(this,"previous",new Map);P(this,$n,new Set);P(this,Rn,new Set);P(this,In,0);P(this,Lt,new Map);P(this,Pn,null);P(this,He,[]);P(this,rr,[]);P(this,Mt,new Set);P(this,ut,new Set);P(this,St,new Map);P(this,On,new Set);R(this,"is_fork",!1);P(this,cn,!1);Sn===null?ua=Sn=this:(T(Sn,sn,this),T(this,Yt,Sn)),Sn=this}skip_effect(t){h(this,St).has(t)||h(this,St).set(t,{d:[],m:[]}),h(this,On).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=h(this,St).get(t);if(r){h(this,St).delete(t);for(var a of r.d)ue(a,fe),n(a);for(a of r.m)ue(a,ot),n(a)}h(this,On).add(t)}capture(t,n,r=!1){t.v!==he&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&jt)===0&&(this.current.set(t,[n,r]),ke==null||ke.set(t,n)),this.is_fork||(t.v=n)}activate(){C=this}deactivate(){C=null,ke=null}flush(){try{ha=!0,C=this,H(this,Z,pr).call(this)}finally{Pi=0,fa=null,Cn=null,Cr=null,ha=!1,C=null,ke=null,wt.clear()}}discard(){var t;for(const n of h(this,Rn))n(this);h(this,Rn).clear();for(const n of this.async_deriveds.values())n.reject(Kn);H(this,Z,gr).call(this),(t=h(this,Pn))==null||t.resolve()}register_created_effect(t){h(this,rr).push(t)}increment(t,n){if(T(this,In,h(this,In)+1),t){let r=h(this,Lt).get(n)??0;h(this,Lt).set(n,r+1)}}decrement(t,n){if(T(this,In,h(this,In)-1),t){let r=h(this,Lt).get(n)??0;r===1?h(this,Lt).delete(n):h(this,Lt).set(n,r-1)}h(this,cn)||(T(this,cn,!0),pt(()=>{T(this,cn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)h(this,Mt).add(r);for(const r of n)h(this,ut).add(r);t.clear(),n.clear()}oncommit(t){h(this,$n).add(t)}ondiscard(t){h(this,Rn).add(t)}settled(){return(h(this,Pn)??T(this,Pn,oi())).promise}static ensure(){if(C===null){const t=C=new Fr;!ha&&!Gn&&pt(()=>{h(t,Tn)||t.flush()})}return C}apply(){{ke=null;return}}schedule(t){var a;if(fa=t,(a=t.b)!=null&&a.is_pending&&(t.f&(mn|yr|Wr))!==0&&(t.f&Zt)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Cn!==null&&n===M&&(F===null||(F.f&ye)===0))return;if((r&(vt|it))!==0){if((r&pe)===0)return;n.f^=pe}}h(this,He).push(n)}};Tn=new WeakMap,Yt=new WeakMap,sn=new WeakMap,$n=new WeakMap,Rn=new WeakMap,In=new WeakMap,Lt=new WeakMap,Pn=new WeakMap,He=new WeakMap,rr=new WeakMap,Mt=new WeakMap,ut=new WeakMap,St=new WeakMap,On=new WeakMap,cn=new WeakMap,Z=new WeakSet,Xa=function(){if(this.is_fork)return!0;for(const r of h(this,Lt).keys()){for(var t=r,n=!1;t.parent!==null;){if(h(this,St).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},pr=function(){var f,u,d,m;T(this,Tn,!0),Pi++>1e3&&(H(this,Z,gr).call(this),Ql());for(const g of h(this,Mt))h(this,ut).delete(g),ue(g,fe),this.schedule(g);for(const g of h(this,ut))ue(g,ot),this.schedule(g);const t=h(this,He);T(this,He,[]),this.apply();var n=Cn=[],r=[],a=Cr=[];for(const g of t)try{H(this,Z,Qa).call(this,g,n,r)}catch(p){throw Ni(g),H(this,Z,Xa).call(this)||this.discard(),p}if(C=null,a.length>0){var o=Fr.ensure();for(const g of a)o.schedule(g)}if(Cn=null,Cr=null,H(this,Z,Xa).call(this)){H(this,Z,Nn).call(this,r),H(this,Z,Nn).call(this,n);for(const[g,p]of h(this,St))Mi(g,p);a.length>0&&H(f=C,Z,pr).call(f);return}const s=H(this,Z,il).call(this);if(s){H(this,Z,Nn).call(this,r),H(this,Z,Nn).call(this,n),H(u=s,Z,ol).call(u,this);return}h(this,Mt).clear(),h(this,ut).clear();for(const g of h(this,$n))g(this);h(this,$n).clear(),Yn=this,Oi(r),Oi(n),Yn=null,(d=h(this,Pn))==null||d.resolve();var l=C;if(h(this,In)===0&&(h(this,He).length===0||l!==null)&&H(this,Z,gr).call(this),h(this,He).length>0)if(l!==null){const g=l;h(g,He).push(...h(this,He).filter(p=>!h(g,He).includes(p)))}else l=this;l!==null&&(wt.clear(),H(m=l,Z,pr).call(m))},Qa=function(t,n,r){t.f^=pe;for(var a=t.first;a!==null;){var o=a.f,s=(o&(it|vt))!==0,l=s&&(o&pe)!==0,f=l||(o&qe)!==0||h(this,St).has(a);if(!f&&a.fn!==null){s?a.f^=pe:(o&mn)!==0?n.push(a):Zn(a)&&((o&at)!==0&&h(this,ut).add(a),An(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}},il=function(){for(var t=h(this,Yt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=h(t,Yt)}return null},ol=function(t){var r;for(const[a,o]of t.current)!this.previous.has(a)&&t.previous.has(a)&&this.previous.set(a,t.previous.get(a)),this.current.set(a,o);for(const[a,o]of t.async_deriveds){const s=this.async_deriveds.get(a);s&&o.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(h(t,Mt),h(t,ut));const n=a=>{var o=a.reactions;if(o!==null&&!((a.f&ye)!==0&&(a.f&(fe|ot))===0))for(const f of o){var s=f.f;if((s&ye)!==0)n(f);else{var l=f;s&(bn|at)&&!this.async_deriveds.has(l)&&(h(this,ut).delete(l),ue(l,fe),this.schedule(l))}}};for(const a of this.current.keys())n(a);this.oncommit(()=>t.discard()),H(r=t,Z,gr).call(r),C=this,H(this,Z,pr).call(this)},Nn=function(t){for(var n=0;n<t.length;n+=1)xi(t[n],h(this,Mt),h(this,ut))},gu=function(){var m;for(let g=ua;g!==null;g=h(g,sn)){var t=g.id<this.id,n=[];for(const[p,[b,y]]of this.current){if(g.current.has(p)){var r=g.current.get(p)[0];if(t&&b!==r)g.current.set(p,[b,y]);else continue}n.push(p)}if(t)for(const[p,b]of this.async_deriveds){const y=g.async_deriveds.get(p);y&&b.promise.then(y.resolve).catch(y.reject)}var a=[...g.current.keys()].filter(p=>!g.current.get(p)[1]);if(!(!h(g,Tn)||a.length===0)){var o=a.filter(p=>!this.current.has(p));if(o.length===0)t&&g.discard();else if(n.length>0){if(t)for(const p of h(this,On))g.unskip_effect(p,b=>{var y;(b.f&(at|bn))!==0?g.schedule(b):H(y=g,Z,Nn).call(y,[b])});g.activate();var s=new Set,l=new Map;for(var f of n)Li(f,o,s,l);l=new Map;var u=[...g.current].filter(([p,b])=>{const y=this.current.get(p);return y?y[0]!==b[0]||y[1]!==b[1]:!0}).map(([p])=>p);if(u.length>0)for(const p of h(this,rr))(p.f&(je|qe|_r))===0&&da(p,u,l)&&((p.f&(bn|at))!==0?(ue(p,fe),g.schedule(p)):h(g,Mt).add(p));if(h(g,He).length>0&&!h(g,cn)){g.apply();for(var d of h(g,He))H(m=g,Z,Qa).call(m,d,[],[]);T(g,He,[])}g.deactivate()}}}},gr=function(){if(this.linked){var t=h(this,Yt),n=h(this,sn);t===null?ua=n:T(t,sn,n),n===null?Sn=t:T(n,Yt,t),this.linked=!1}};let Bt=Fr;function ee(e){var t=Gn;Gn=!0;try{for(var n;;){if(Dl(),C===null)return n;C.flush()}}finally{Gn=t}}function Ql(){try{Sl()}catch(e){yt(e,fa)}}let lt=null;function Oi(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(je|qe))===0&&Zn(r)&&(lt=new Set,An(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&eo(r),(lt==null?void 0:lt.size)>0)){wt.clear();for(const a of lt){if((a.f&(je|qe))!==0)continue;const o=[a];let s=a.parent;for(;s!==null;)lt.has(s)&&(lt.delete(s),o.push(s)),s=s.parent;for(let l=o.length-1;l>=0;l--){const f=o[l];(f.f&(je|qe))===0&&An(f)}}lt.clear()}}lt=null}}function Li(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const o=a.f;(o&ye)!==0?Li(a,t,n,r):(o&(bn|at))!==0&&(o&fe)===0&&da(a,t,r)&&(ue(a,fe),va(a))}}function da(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(qt.call(t,a))return!0;if((a.f&ye)!==0&&da(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function va(e){C.schedule(e)}function Mi(e,t){if(!((e.f&it)!==0&&(e.f&pe)!==0)){(e.f&fe)!==0?t.d.push(e):(e.f&ot)!==0&&t.m.push(e),ue(e,pe);for(var n=e.first;n!==null;)Mi(n,t),n=n.next}}function Ni(e){ue(e,pe);for(var t=e.first;t!==null;)Ni(t),t=t.next}let Ar=new Set;const wt=new Map;let Di=!1;function Wn(e,t){var n={f:0,v:e,reactions:null,equals:si,rv:0,wv:0};return n}function V(e,t){const n=Wn(e);return Vi(n),n}function Ui(e,t=!1,n=!0){const r=Wn(e);return t||(r.equals=yl),r}function E(e,t,n=!1){F!==null&&(!st||(F.f&_r)!==0)&&vi()&&(F.f&(ye|at|bn|_r))!==0&&(kt===null||!kt.has(e))&&$l();let r=n?Pt(t):t;return Tr(e,r,Cr)}function Tr(e,t,n=null){if(!e.equals(t)){Ot?wt.set(e,t):wt.has(e)||wt.set(e,e.v);var r=Bt.ensure();if(r.capture(e,t),(e.f&ye)!==0){const a=e;(e.f&fe)!==0&&ca(a),ke===null&&oa(a)}e.wv=zi(),Hi(e,fe,n),M!==null&&(M.f&pe)!==0&&(M.f&(it|vt))===0&&(Je===null?ts([e]):Je.push(e)),!r.is_fork&&Ar.size>0&&!Di&&es()}return t}function es(){Di=!1;for(const e of Ar){(e.f&pe)!==0&&ue(e,ot);let t;try{t=Zn(e)}catch{t=!0}t&&An(e)}Ar.clear()}function qn(e){E(e,e.v+1)}function Hi(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,o=0;o<a;o++){var s=r[o],l=s.f,f=(l&fe)===0;if(f&&ue(s,t),(l&_r)!==0)Ar.add(s);else if((l&ye)!==0){var u=s;ke==null||ke.delete(u),(l&Xt)===0&&(l&We&&(M===null||(M.f&kr)===0)&&(s.f|=Xt),Hi(u,ot,n))}else if(f){var d=s;(l&at)!==0&&lt!==null&&lt.add(d),n!==null?n.push(d):va(d)}}}let $r=!1,Ot=!1;function Fi(e){Ot=e}let F=null,st=!1;function Ze(e){F=e}let M=null;function _t(e){M=e}let kt=null;function Vi(e){F!==null&&(kt??(kt=new Set)).add(e)}let De=null,Be=0,Je=null;function ts(e){Je=e}let ji=1,rn=0,an=rn;function Bi(e){an=e}function zi(){return++ji}function Zn(e){var t=e.f;if((t&fe)!==0)return!0;if(t&ye&&(e.f&=~Xt),(t&ot)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var o=n[a];if(Zn(o)&&Ri(o),o.wv>e.wv)return!0}(t&We)!==0&&ke===null&&ue(e,pe)}return!1}function Ki(e,t,n=!0){var r=e.reactions;if(r!==null&&!(kt!==null&&kt.has(e)))for(var a=0;a<r.length;a++){var o=r[a];(o.f&ye)!==0?Ki(o,t,!1):t===o&&(n?ue(o,fe):(o.f&pe)!==0&&ue(o,ot),va(o))}}function Yi(e){var t=De,n=Be,r=Je,a=F,o=kt,s=Se,l=st,f=an,u=e.f;De=null,Be=0,Je=null,F=(u&(it|vt))===0?e:null,kt=null,wn(e.ctx),st=!1,an=++rn,e.ac!==null&&(En(()=>{e.ac.abort(Hn)}),e.ac=null);try{e.f|=kr;var d=e.fn,m=d();e.f|=Zt;var g=Gi(e);if(vi()&&Je!==null&&!st&&g!==null&&(e.f&(ye|ot|fe))===0)for(var p=0;p<Je.length;p++)Ki(Je[p],e);if(a!==null&&a!==e){if(rn++,a.deps!==null)for(let b=0;b<n;b+=1)a.deps[b].rv=rn;if(t!==null)for(const b of t)b.rv=rn;Je!==null&&(r===null?r=Je:r.push(...Je))}return(e.f&jt)!==0&&(e.f^=jt),m}catch(b){return Gi(e),jl(b)}finally{e.f^=kr,De=t,Be=n,Je=r,F=a,kt=o,wn(s),st=l,an=f}}function Gi(e){var a;var t=e.deps,n=C==null?void 0:C.is_fork;if(De!==null){var r;if(n||Jn(e,Be),t!==null&&Be>0)for(t.length=Be+De.length,r=0;r<De.length;r++)t[Be+r]=De[r];else e.deps=t=De;if(pa()&&(e.f&We)!==0)for(r=Be;r<t.length;r++)((a=t[r]).reactions??(a.reactions=[])).push(e)}else!n&&t!==null&&Be<t.length&&(Jn(e,Be),t.length=Be);return t}function ns(e,t){let n=t.reactions;if(n!==null){var r=ve.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&ye)!==0&&(De===null||!qt.call(De,t))){var o=t;(o.f&We)!==0&&(o.f^=We,o.f&=~Xt),o.v!==he&&oa(o),o.ac!==null&&En(()=>{o.ac.abort(Hn),o.ac=null,ue(o,fe)}),Jl(o),Jn(o,0)}}function Jn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ns(e,n[r])}function An(e){var t=e.f;if((t&je)===0){ue(e,pe);var n=M,r=$r;M=e,$r=(t&(it|vt))===0;try{(t&(at|Wr))!==0?ss(e):ma(e),Xi(e);var a=Yi(e);e.teardown=typeof a=="function"?a:null,e.wv=ji;var o;X&&Il&&(e.f&fe)!==0&&e.deps}finally{$r=r,M=n}}}async function on(){await Promise.resolve(),ee()}function i(e){var t=e.f,n=(t&ye)!==0;if(F!==null&&!st){var r=M!==null&&(M.f&je)!==0;if(!r&&(kt===null||!kt.has(e))){var a=F.deps;if((F.f&kr)!==0)e.rv<rn&&(e.rv=rn,De===null&&a!==null&&a[Be]===e?Be++:De===null?De=[e]:De.push(e));else{F.deps??(F.deps=[]),qt.call(F.deps,e)||F.deps.push(e);var o=e.reactions;o===null?e.reactions=[F]:qt.call(o,F)||o.push(F)}}}if(Ot&&wt.has(e))return wt.get(e);if(n){var s=e;if(Ot){var l=s.v;return((s.f&pe)===0&&s.reactions!==null||qi(s))&&(l=ca(s)),wt.set(s,l),l}var f=(s.f&We)===0&&!st&&F!==null&&($r||(F.f&We)!==0),u=(s.f&Zt)===0;Zn(s)&&(f&&(s.f|=We),Ri(s)),f&&!u&&(Ii(s),Wi(s))}if(ke!=null&&ke.has(e))return ke.get(e);if((e.f&jt)!==0)throw e.v;return e.v}function Wi(e){if(e.f|=We,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ye)!==0&&(t.f&We)===0&&(Ii(t),Wi(t))}function qi(e){if(e.v===he)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(wt.has(t)||(t.f&ye)!==0&&qi(t))return!0;return!1}function Xn(e){var t=st;try{return st=!0,e()}finally{st=t}}function rs(e){M===null&&(F===null&&El(),xl()),Ot&&kl()}function as(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ct(e,t){var n=M;n!==null&&(n.f&qe)!==0&&(e|=qe);var r={ctx:Se,deps:null,nodes:null,f:e|fe|We,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(r);var a=r;if((e&mn)!==0)Cn!==null?Cn.push(r):Bt.ensure().schedule(r);else if(t!==null){try{An(r)}catch(s){throw xe(r),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Jt)===0&&(a=a.first,(e&at)!==0&&(e&Vt)!==0&&a!==null&&(a.f|=Vt))}if(a!==null&&(a.parent=n,n!==null&&as(a,n),F!==null&&(F.f&ye)!==0&&(e&vt)===0)){var o=F;(o.effects??(o.effects=[])).push(a)}return r}function pa(){return F!==null&&!st}function Rr(e){const t=ct(yr,null);return ue(t,pe),t.teardown=e,t}function Ue(e){rs();var t=M.f,n=!F&&(t&it)!==0&&Se!==null&&!Se.i;if(n){var r=Se;(r.e??(r.e=[])).push(e)}else return Zi(e)}function Zi(e){return ct(mn|gl,e)}function is(e){Bt.ensure();const t=ct(vt|Jt,e);return()=>{xe(t)}}function os(e){Bt.ensure();const t=ct(vt|Jt,e);return(n={})=>new Promise(r=>{n.outro?er(t,()=>{xe(t),r(void 0)}):(xe(t),r(void 0))})}function ga(e){return ct(mn,e)}function ls(e){return ct(bn|Jt,e)}function Ir(e,t=0){return ct(yr|t,e)}function Ce(e,t=[],n=[],r=[]){Ti(r,t,n,a=>{ct(yr,()=>{e(...a.map(i))})})}function Qn(e,t=0){var n=ct(at|t,e);return n}function Ji(e,t=0){var n=ct(Wr|t,e);return n}function xt(e){return ct(it|Jt,e)}function Xi(e){var t=e.teardown;if(t!==null){const n=Ot,r=F;Fi(!0),Ze(null);try{t.call(null)}catch(a){yt(a,e.parent)}finally{Fi(n),Ze(r)}}}function ma(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&En(()=>{a.abort(Hn)});var r=n.next;(n.f&vt)!==0?n.parent=null:xe(n,t),n=r}}function ss(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&it)===0&&xe(t),t=n}}function xe(e,t=!0){var n=!1;(t||(e.f&pl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Qi(e.nodes.start,e.nodes.end),n=!0),e.f|=wr,ma(e,t&&!n),Jn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();Xi(e),e.f^=wr,e.f|=je;var a=e.parent;a!==null&&a.first!==null&&eo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Qi(e,t){for(;e!==null;){var n=e===t?null:bt(e);e.remove(),e=n}}function eo(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function er(e,t,n=!0){var r=[];e.f|=Zr,to(e,r,!0);var a=()=>{n&&xe(e),t&&t()},o=r.length;if(o>0){var s=()=>--o||a();for(var l of r)l.out(s)}else a()}function to(e,t,n){if((e.f&qe)===0){e.f^=qe;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var o=a.next;if((a.f&vt)===0){var s=(a.f&Vt)!==0||(a.f&it)!==0&&(e.f&at)!==0;to(a,t,s?n:!1)}a=o}}}function no(e){e.f&=~Zr,ro(e,!0)}function ro(e,t){if((e.f&Zr)===0&&(e.f&qe)!==0){e.f^=qe,(e.f&pe)===0&&(ue(e,fe),Bt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&Vt)!==0||(n.f&it)!==0;ro(n,a?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const s of o)(s.is_global||t)&&s.in()}}function ao(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:bt(n);t.append(n),n=a}}function cs(e){let t=0,n=Wn(0),r;return()=>{pa()&&(i(n),Ir(()=>(t===0&&(r=Xn(()=>e(()=>qn(n)))),t+=1,()=>{pt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,qn(n))})})))}}function io(e){const t={get:n=>zn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(zn(t.store),{[n]:r}):Object.assign(zn(t.store),n),t.store.set(zn(t.store))},store:zl(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:io({}),i18n:io({}),instances:new Set,plugins:new Set};const us={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};globalThis.$altcha.i18n.set("en",us);const fs="5";typeof window<"u"&&((Ho=window.__svelte??(window.__svelte={})).v??(Ho.v=new Set)).add(fs);const ln=Symbol("events"),oo=new Set,ba=new Set;function lo(e,t,n,r={}){function a(o){if(r.capture||_a.call(t,o),!o.cancelBubble)return En(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?pt(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function ge(e,t,n,r,a){var o={capture:r,passive:a},s=lo(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Rr(()=>{t.removeEventListener(e,s,o)})}function Pr(e,t,n){(t[ln]??(t[ln]={}))[e]=n}function Or(e){for(var t=0;t<e.length;t++)oo.add(e[t]);for(var n of ba)n(e)}let ya=null,wa=!1;function _a(e){var y,N;var t=this,n=t.ownerDocument,r=e.type,a=((y=e.composedPath)==null?void 0:y.call(e))||[],o=a[0]||e.target;ya=e,wa||(wa=!0,setTimeout(()=>{wa=!1,ya=null}));var s=0,l=ya===e&&e[ln];if(l){var f=a.indexOf(l);if(f!==-1&&(t===document||t===window)){e[ln]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(s=f)}if(o=a[s]||e.target,o!==t){pn(e,"currentTarget",{configurable:!0,get(){return o||n}});var d=F,m=M;Ze(null),_t(null);try{for(var g,p=[];o!==null&&o!==t;){try{var b=(N=o[ln])==null?void 0:N[r];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(I){g?p.push(I):g=I}if(e.cancelBubble)break;s++,o=s<a.length?a[s]:null}if(g){for(let I of p)queueMicrotask(()=>{throw I});throw g}}finally{e[ln]=t,delete e.currentTarget,Ze(d),_t(m)}}}const ka=((Fo=globalThis==null?void 0:globalThis.window)==null?void 0:Fo.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function hs(e){return(ka==null?void 0:ka.createHTML(e))??e}function so(e){var t=ia("template");return t.innerHTML=hs(e.replaceAll("<!>","<!---->")),t.content}function ze(e,t){var n=M;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function se(e,t){var n=(t&Pl)!==0,r=(t&Ol)!==0,a,o=!e.startsWith("<!>");return()=>{if(L)return ze(D,null),D;a===void 0&&(a=so(o?e:"<!>"+e),n||(a=Ne(a)));var s=r||yi?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=Ne(s),f=s.lastChild;ze(l,f)}else ze(s,s);return s}}function ds(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(L)return ze(D,null),D;if(!o){var s=so(a),l=Ne(s);o=Ne(l)}var f=o.cloneNode(!0);return ze(f,f),f}}function xa(e,t){return ds(e,t,"svg")}function Lr(e=""){if(!L){var t=mt(e+"");return ze(t,t),t}var n=D;return n.nodeType!==Vn?(n.before(n=mt()),Re(n)):Er(n),ze(n,n),n}function co(){if(L)return ze(D,null),D;var e=document.createDocumentFragment(),t=document.createComment(""),n=mt();return e.append(t,n),ze(t,n),e}function j(e,t){if(L){var n=M;((n.f&Zt)===0||n.nodes.end===null)&&(n.nodes.end=D),tn();return}e!==null&&e.before(t)}function vs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ps=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function gs(e){return ps.includes(e)}const ms={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function bs(e){return e=e.toLowerCase(),ms[e]??e}const ys=["touchstart","touchmove"];function ws(e){return ys.includes(e)}var _s=Vt|Jt;function ks(e,t,n,r){new xs(e,t,n,r)}class xs{constructor(t,n,r,a){P(this,J);R(this,"parent");R(this,"is_pending",!1);R(this,"transform_error");P(this,Ke);P(this,ar,L?D:null);P(this,Xe);P(this,un);P(this,Pe);P(this,Ye,null);P(this,Oe,null);P(this,Ge,null);P(this,Ct,null);P(this,fn,0);P(this,Gt,0);P(this,Ln,!1);P(this,ir,new Set);P(this,or,new Set);P(this,Nt,null);P(this,Vr,cs(()=>(T(this,Nt,Wn(h(this,fn))),()=>{T(this,Nt,null)})));var o;T(this,Ke,t),T(this,Xe,n),T(this,un,s=>{var l=M;l.b=this,l.f|=qr,r(s)}),this.parent=M.b,this.transform_error=a??((o=this.parent)==null?void 0:o.transform_error)??(s=>s),T(this,Pe,Qn(()=>{if(L){const s=h(this,ar);tn();const l=s.data===ui;if(s.data.startsWith(fi)){const u=JSON.parse(s.data.slice(fi.length));H(this,J,sl).call(this,u)}else l?H(this,J,cl).call(this):H(this,J,ll).call(this)}else H(this,J,ti).call(this)},_s)),L&&T(this,Ke,D)}defer_effect(t){xi(t,h(this,ir),h(this,or))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!h(this,Xe).pending}update_pending_count(t,n){H(this,J,ni).call(this,t,n),T(this,fn,h(this,fn)+t),!(!h(this,Nt)||h(this,Ln))&&(T(this,Ln,!0),pt(()=>{T(this,Ln,!1),h(this,Nt)&&Tr(h(this,Nt),h(this,fn))}))}get_effect_pending(){return h(this,Vr).call(this),i(h(this,Nt))}error(t){if(!h(this,Xe).onerror&&!h(this,Xe).failed)throw t;C!=null&&C.is_fork?(h(this,Ye)&&C.skip_effect(h(this,Ye)),h(this,Oe)&&C.skip_effect(h(this,Oe)),h(this,Ge)&&C.skip_effect(h(this,Ge)),C.oncommit(()=>{H(this,J,ri).call(this,t)})):H(this,J,ri).call(this,t)}}Ke=new WeakMap,ar=new WeakMap,Xe=new WeakMap,un=new WeakMap,Pe=new WeakMap,Ye=new WeakMap,Oe=new WeakMap,Ge=new WeakMap,Ct=new WeakMap,fn=new WeakMap,Gt=new WeakMap,Ln=new WeakMap,ir=new WeakMap,or=new WeakMap,Nt=new WeakMap,Vr=new WeakMap,J=new WeakSet,ll=function(){try{T(this,Ye,xt(()=>h(this,un).call(this,h(this,Ke))))}catch(t){this.error(t)}},sl=function(t){const n=h(this,Xe).failed,{reset:r,invoke_onerror:a}=H(this,J,ei).call(this,t);pt(a),n&&T(this,Ge,xt(()=>{n(h(this,Ke),()=>t,()=>r)}))},ei=function(t){var n=!1,r=!1;const a=()=>{if(n){Fl();return}n=!0,r&&Rl(),h(this,Ge)!==null&&er(h(this,Ge),()=>{T(this,Ge,null)}),H(this,J,Gr).call(this,()=>{H(this,J,ti).call(this)})};return{reset:a,invoke_onerror:()=>{var s,l;try{r=!0,(l=(s=h(this,Xe)).onerror)==null||l.call(s,t,a),r=!1}catch(f){yt(f,h(this,Pe)&&h(this,Pe).parent)}}}},cl=function(){const t=h(this,Xe).pending;t&&(this.is_pending=!0,T(this,Oe,xt(()=>t(h(this,Ke)))),pt(()=>{var n=T(this,Ct,document.createDocumentFragment()),r=mt(),a=!1;if(n.append(r),T(this,Ye,H(this,J,Gr).call(this,()=>{try{return xt(()=>h(this,un).call(this,r))}catch(o){try{this.error(o),a=!0}catch(s){yt(s,h(this,Pe).parent)}return null}})),h(this,Ye)===null){T(this,Ct,null),a&&H(this,J,mr).call(this,C);return}h(this,Gt)===0&&(h(this,Ke).before(n),T(this,Ct,null),er(h(this,Oe),()=>{T(this,Oe,null)}),H(this,J,mr).call(this,C))}))},ti=function(){try{if(this.is_pending=this.has_pending_snippet(),T(this,Gt,0),T(this,fn,0),T(this,Ye,xt(()=>{h(this,un).call(this,h(this,Ke))})),h(this,Gt)>0){var t=T(this,Ct,document.createDocumentFragment());ao(h(this,Ye),t);const n=h(this,Xe).pending;T(this,Oe,xt(()=>n(h(this,Ke))))}else H(this,J,mr).call(this,C)}catch(n){this.error(n)}},mr=function(t){this.is_pending=!1,t.transfer_effects(h(this,ir),h(this,or))},Gr=function(t){var n=M,r=F,a=Se;_t(h(this,Pe)),Ze(h(this,Pe)),wn(h(this,Pe).ctx);try{return Bt.ensure(),t()}finally{_t(n),Ze(r),wn(a)}},ni=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&H(r=this.parent,J,ni).call(r,t,n);return}T(this,Gt,h(this,Gt)+t),h(this,Gt)===0&&(H(this,J,mr).call(this,n),h(this,Oe)&&er(h(this,Oe),()=>{T(this,Oe,null)}),h(this,Ct)&&(h(this,Ke).before(h(this,Ct)),T(this,Ct,null)))},ri=function(t){h(this,Ye)&&(xe(h(this,Ye)),T(this,Ye,null)),h(this,Oe)&&(xe(h(this,Oe)),T(this,Oe,null)),h(this,Ge)&&(xe(h(this,Ge)),T(this,Ge,null)),L&&(Re(h(this,ar)),ta(),Re(na()));let n=h(this,Xe).failed;const r=a=>{const{reset:o,invoke_onerror:s}=H(this,J,ei).call(this,a);s(),n&&T(this,Ge,H(this,J,Gr).call(this,()=>{try{return xt(()=>{var l=M;l.b=this,l.f|=qr,n(h(this,Ke),()=>a,()=>o)})}catch(l){return yt(l,h(this,Pe).parent),null}}))};pt(()=>{var a;try{a=this.transform_error(t)}catch(o){yt(o,h(this,Pe)&&h(this,Pe).parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(r,o=>yt(o,h(this,Pe)&&h(this,Pe).parent)):r(a)})};function Et(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Dn]??(e[Dn]=e.nodeValue))&&(e[Dn]=n,e.nodeValue=`${n}`)}function uo(e,t){return fo(e,t)}function Es(e,t){aa(),t.intro=t.intro??!1;const n=t.target,r=L,a=D;try{for(var o=Ne(n);o&&(o.nodeType!==jn||o.data!==Qr);)o=bt(o);if(!o)throw Qt;gt(!0),Re(o);const s=fo(e,{...t,anchor:o});return gt(!1),s}catch(s){if(s instanceof Error&&s.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw s;return s!==Qt&&console.warn("Failed to hydrate: ",s),t.recover===!1&&Cl(),aa(),Vl(n),gt(!1),uo(e,t)}finally{gt(r),Re(a)}}const Mr=new Map;function fo(e,{target:t,anchor:n,props:r={},events:a,context:o,intro:s=!0,transformError:l}){aa();var f=void 0,u=os(()=>{var d=n??t.appendChild(mt());ks(d,{pending:()=>{}},p=>{Rt({});var b=Se;if(o&&(b.c=o),a&&(r.$$events=a),L&&ze(p,null),f=e(p,r)||ea(),L&&(M.nodes.end=D,D===null||D.nodeType!==jn||D.data!==hi))throw Bn(),Qt;It()},l);var m=new Set,g=p=>{for(var b=0;b<p.length;b++){var y=p[b];if(!m.has(y)){m.add(y);var N=ws(y);for(const ce of[t,document]){var I=Mr.get(ce);I===void 0&&(I=new Map,Mr.set(ce,I));var z=I.get(y);z===void 0?(ce.addEventListener(y,_a,{passive:N}),I.set(y,1)):I.set(y,z+1)}}}};return g(ul(oo)),ba.add(g),()=>{var N;for(var p of m)for(const I of[t,document]){var b=Mr.get(I),y=b.get(p);--y==0?(I.removeEventListener(p,_a),b.delete(p),b.size===0&&Mr.delete(I)):b.set(p,y)}ba.delete(g),d!==n&&((N=d.parentNode)==null||N.removeChild(d))}});return Ea.set(f,u),f}let Ea=new WeakMap;function Ss(e,t){const n=Ea.get(e);return n?(Ea.delete(e),n(t)):Promise.resolve()}class Nr{constructor(t,n=!0){R(this,"anchor");P(this,ft,new Map);P(this,Dt,new Map);P(this,ht,new Map);P(this,hn,new Set);P(this,lr,!0);P(this,jr,t=>{if(h(this,ft).has(t)){var n=h(this,ft).get(t),r=h(this,Dt).get(n);if(r)no(r),h(this,hn).delete(n);else{var a=h(this,ht).get(n);a&&(no(a.effect),h(this,Dt).set(n,a.effect),h(this,ht).delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[o,s]of h(this,ft)){if(h(this,ft).delete(o),o===t)break;const l=h(this,ht).get(s);l&&(xe(l.effect),h(this,ht).delete(s))}for(const[o,s]of h(this,Dt)){if(o===n||h(this,hn).has(o))continue;const l=()=>{if(Array.from(h(this,ft).values()).includes(o)){var u=document.createDocumentFragment();ao(s,u),u.append(mt()),h(this,ht).set(o,{effect:s,fragment:u})}else xe(s);h(this,hn).delete(o),h(this,Dt).delete(o)};h(this,lr)||!r?(h(this,hn).add(o),er(s,l,!1)):l()}}});P(this,Fa,t=>{h(this,ft).delete(t);const n=Array.from(h(this,ft).values());for(const[r,a]of h(this,ht))n.includes(r)||(xe(a.effect),h(this,ht).delete(r))});this.anchor=t,T(this,lr,n)}ensure(t,n){var r=C;n&&!h(this,Dt).has(t)&&!h(this,ht).has(t)&&h(this,Dt).set(t,xt(()=>n(this.anchor))),h(this,ft).set(r,t),L&&(this.anchor=D),h(this,jr).call(this,r)}}ft=new WeakMap,Dt=new WeakMap,ht=new WeakMap,hn=new WeakMap,lr=new WeakMap,jr=new WeakMap,Fa=new WeakMap;function Cs(e,t,...n){var r=new Nr(e);Qn(()=>{const a=t()??null;r.ensure(a,a&&(o=>a(o,...n)))},Vt)}function Sa(e){Se===null&&wl(),Ue(()=>{const t=Xn(e);if(typeof t=="function")return t})}function me(e,t,n=!1){var r;L&&(r=D,tn());var a=new Nr(e),o=n?Vt:0;function s(l,f){if(L){var u=gi(r);if(l!==parseInt(u.substring(1))){var d=na();Re(d),a.anchor=d,gt(!1),a.ensure(l,f),gt(!0);return}}a.ensure(l,f)}Qn(()=>{var l=!1;t((f,u=0)=>{l=!0,s(u,f)}),l||s(-1,null)},o)}const As=Symbol("NaN");function Ts(e,t,n){L&&tn();var r=new Nr(e);Qn(()=>{var a=t();a!==a&&(a=As),r.ensure(a,n)})}function ho(e,t,n=!1,r=!1,a=!1,o=!1){var s=e,l="";if(n){var f=e;L&&(s=Re(Ne(f)))}Ce(()=>{var u=M;if(l===(l=t()??"")){L&&tn();return}if(n&&!L){u.nodes=null,f.innerHTML=l,l!==""&&ze(Ne(f),f.lastChild);return}if(u.nodes!==null&&(Qi(u.nodes.start,u.nodes.end),u.nodes=null),l!==""){if(L){D.data;for(var d=tn(),m=d;d!==null&&(d.nodeType!==jn||d.data!=="");)m=d,d=bt(d);if(d===null)throw Bn(),Qt;ze(D,m),s=Re(d);return}var g=r?Ll:a?Ml:void 0,p=ia(r?"svg":a?"math":"template",g);p.innerHTML=l;var b=r||a?p:p.content;if(ze(Ne(b),b.lastChild),r||a)for(;Ne(b);)s.before(Ne(b));else s.before(b)}})}function $s(e,t,n){var r;L&&(r=D,tn());var a=new Nr(e);Qn(()=>{var o=t()??null;if(L){var s=gi(r),l=s===Qr,f=o!==null;if(l!==f){var u=na();Re(u),a.anchor=u,gt(!1),a.ensure(o,o&&(d=>n(d,o))),gt(!0);return}}a.ensure(o,o&&(d=>n(d,o)))},Vt)}function Rs(e,t){var n=void 0,r;Ji(()=>{n!==(n=t())&&(r&&(xe(r),r=null),n&&(r=xt(()=>{ga(()=>n(e))})))})}function vo(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=vo(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Is(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=vo(e))&&(r&&(r+=" "),r+=t);return r}function Ps(e){return typeof e=="object"?Is(e):e??""}const po=[...` 	
\r\f \v\uFEFF`];function Os(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var o=a.length,s=0;(s=r.indexOf(a,s))>=0;){var l=s+o;(s===0||po.includes(r[s-1]))&&(l===r.length||po.includes(r[l]))?r=(s===0?"":r.substring(0,s))+r.substring(l+1):s=l}}return r===""?null:r}function go(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var o=e[a];o!=null&&o!==""&&(r+=" "+a+": "+o+n)}return r}function Ca(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ls(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,s=0,l=!1,f=[];r&&f.push(...Object.keys(r).map(Ca)),a&&f.push(...Object.keys(a).map(Ca));var u=0,d=-1;const y=e.length;for(var m=0;m<y;m++){var g=e[m];if(l?g==="/"&&e[m-1]==="*"&&(l=!1):o?o===g&&(o=!1):g==="/"&&e[m+1]==="*"?l=!0:g==='"'||g==="'"?o=g:g==="("?s++:g===")"&&s--,!l&&o===!1&&s===0){if(g===":"&&d===-1)d=m;else if(g===";"||m===y-1){if(d!==-1){var p=Ca(e.substring(u,d).trim());if(!f.includes(p)){g!==";"&&m++;var b=e.substring(u,m).trim();n+=" "+b+";"}}u=m+1,d=-1}}}}return r&&(n+=go(r)),a&&(n+=go(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ms(e,t,n,r,a,o){var s=e[Jr];if(L||s!==n||s===void 0){var l=Os(n,r,o);(!L||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e[Jr]=n}else if(o&&a!==o)for(var f in o){var u=!!o[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return o}function Aa(e,t={},n,r){for(var a in n){var o=n[a];t[a]!==o&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,r))}}function Ns(e,t,n,r){var a=e[Xr];if(L||a!==t){var o=Ls(t,r);(!L||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e[Xr]=t}else r&&(Array.isArray(r)?(Aa(e,n==null?void 0:n[0],r[0]),Aa(e,n==null?void 0:n[1],r[1],"important")):Aa(e,n,r));return r}function mo(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bo(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,yo(e,!n||"__value"in e))}function yo(e,t){var n=e.__defaultValue,r=e.multiple,a=r?n??[]:null;if(!(r&&!Q(a))){var o=e.selectedIndex,s=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var f=$a(l);mo(l,r?a.includes(f):bi(f,n))}if(t)if(s!==null)for(l of e.options){var u=s.has(l);l.selected!==u&&(l.selected=u)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function Ta(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Q(t))return Hl();for(var r of e.options)r.selected=t.includes($a(r));return}for(r of e.options){var a=$a(r);if(bi(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Ds(e){var t=new MutationObserver(n=>{n.every(Us)||("__defaultValue"in e&&yo(e,!1),"__value"in e&&Ta(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Rr(()=>{t.disconnect()})}function $a(e){return"__value"in e?e.__value:e.value}function Us(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const tr=Symbol("class"),nr=Symbol("style"),wo=Symbol("is custom element"),_o=Symbol("is html"),Hs=Fn?"link":"LINK",ko=Fn?"input":"INPUT",Fs=Fn?"option":"OPTION",xo=Fn?"select":"SELECT",Vs=Fn?"progress":"PROGRESS";function Ra(e){if(L){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;K(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;K(e,"checked",null),e.checked=a}}};e[Un]=n,pt(n),Ai()}}function js(e,t){var n=Ia(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Vs)||(e.value=t??"")}function K(e,t,n,r){var a=Ia(e);L&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Hs)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[bl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&So(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Bs(e,t,n,r,a=!1,o=!1){L&&a&&e.nodeName===ko&&("defaultValue"in n||"defaultChecked"in n||Ra(e));var s=Ia(e),l=s[wo],f=!s[_o];let u=L&&l;u&&gt(!1);var d=t||{},m=e.nodeName===Fs,g=e.nodeName===xo;for(var p in t)!(p in n)&&p[0]+p[1]!=="$$"&&(n[p]=null);n.class?n.class=Ps(n.class):n[tr]&&(n.class=null),n[nr]&&(n.style??(n.style=null));var b=So(e);if(e.nodeName===ko&&"type"in n&&("value"in n||"__value"in n)){var y=n.type;(y!==d.type||y===void 0&&e.hasAttribute("type"))&&(d.type=y,K(e,"type",y))}for(const Y in n){let A=n[Y];if(m&&Y==="value"&&A==null){e.value=e.__value="",d[Y]=A;continue}if(Y==="class"){var N=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ms(e,N,A,r,t==null?void 0:t[tr],n[tr]),d[Y]=A,d[tr]=n[tr];continue}if(Y==="style"){Ns(e,A,t==null?void 0:t[nr],n[nr]),d[Y]=A,d[nr]=n[nr];continue}var I=d[Y];if(!(A===I&&!(A===void 0&&e.hasAttribute(Y)))){d[Y]=A;var z=Y[0]+Y[1];if(z!=="$$")if(z==="on"){const re={},Te="$$"+Y;let U=Y.slice(2);var ce=gs(U);if(vs(U)&&(U=U.slice(0,-7),re.capture=!0),!ce&&I){if(A!=null)continue;e.removeEventListener(U,d[Te],re),d[Te]=null}if(ce)Pr(U,e,A),Or([U]);else if(A!=null){let be=function(et){d[Y].call(this,et)};d[Te]=lo(U,e,be,re)}}else if(Y==="style")K(e,Y,A);else if(Y==="autofocus")Yl(e,!!A);else if(!l&&(Y==="__value"||Y==="value"&&A!=null))e.value=e.__value=A;else if(Y==="selected"&&m)mo(e,A);else{var B=Y;f||(B=bs(B));var Ae=B==="defaultValue"||B==="defaultChecked";if(g&&B==="defaultValue")continue;if(A==null&&!l&&!Ae)if(s[Y]=null,B==="value"||B==="checked"){let re=e;const Te=t===void 0;if(B==="value"){let U=re.defaultValue;re.removeAttribute(B),re.defaultValue=U,re.value=re.__value=Te?U:null}else{let U=re.defaultChecked;re.removeAttribute(B),re.defaultChecked=U,re.checked=Te?U:!1}}else e.removeAttribute(Y);else Ae||(l||typeof A!="string")&&b.has(B)?(e[B]=A,B in s&&(s[B]=he)):typeof A!="function"&&K(e,B,A)}}}return u&&gt(!0),d}function Dr(e,t,n=[],r=[],a=[],o,s=!1,l=!1){Ti(a,n,r,f=>{var u=void 0,d={},m=e.nodeName===xo,g=!1;if(Ji(()=>{var b=t(...f.map(i)),y=Bs(e,u,b,o,s,l);if(g&&m){var N=e;"defaultValue"in b&&bo(N,b.defaultValue),"value"in b&&Ta(N,b.value)}for(let z of Object.getOwnPropertySymbols(d))b[z]||xe(d[z]);for(let z of Object.getOwnPropertySymbols(b)){var I=b[z];z.description===Nl&&(!u||I!==u[z])&&(d[z]&&xe(d[z]),d[z]=xt(()=>Rs(e,()=>I))),y[z]=I}u=y}),m){var p=e;ga(()=>{var b=u;"defaultValue"in b&&bo(p,b.defaultValue),Ta(p,b.value,!0),Ds(p)})}g=!0})}function Ia(e){return e[xr]??(e[xr]={[wo]:e.nodeName.includes("-"),[_o]:e.namespaceURI===di})}var Eo=new Map;function So(e){var t=e.getAttribute("is")||e.nodeName,n=Eo.get(t);if(n)return n;Eo.set(t,n=new Set);for(var r,a=e,o=Element.prototype;o!==a;){r=fl(a);for(var s in r)r[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);a=ai(a)}return n}function zs(e,t,n=t){var r=new WeakSet;Gl(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Pa(e)?Oa(o):o,n(o),C!==null&&r.add(C),await on(),o!==(o=t())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=o??"",l!==null){var u=e.value.length;s===l&&l===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=s,e.selectionEnd=Math.min(l,u))}}}),(L&&e.defaultValue!==e.value||Xn(t)==null&&e.value)&&(n(Pa(e)?Oa(e.value):e.value),C!==null&&r.add(C)),Ir(()=>{var a=t();if(e===document.activeElement){var o=C;if(r.has(o))return}Pa(e)&&a===Oa(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Pa(e){var t=e.type;return t==="number"||t==="range"}function Oa(e){return e===""?null:+e}function La(e,t){return e===t||(e==null?void 0:e[yn])===t}function zt(e=ea(),t,n,r){var a=Se.r,o=M;return ga(()=>{var s,l;return Ir(()=>{s=l,l=[],Xn(()=>{La(n(...l),e)||(t(e,...l),s&&La(n(...s),e)&&t(null,...s))})}),()=>{let f=o;for(;f!==a&&f.parent!==null&&f.parent.f&wr;)f=f.parent;const u=()=>{l&&La(n(...l),e)&&t(null,...l)},d=f.teardown;f.teardown=()=>{u(),d==null||d()}}}),e}const Ks={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.has(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function Ur(e,t,n){return new Proxy({props:e,exclude:t},Ks)}function oe(e,t,n,r){var a=r,o=!0,s=()=>(o&&(o=!1,a=r),a),l;l=e[t],l===void 0&&r!==void 0&&(l=s());var f;f=()=>{var g=e[t];return g===void 0?s():(o=!0,g)};var u=!1,d=sa(()=>(u=!1,f())),m=M;return(function(g,p){if(arguments.length>0){const b=p?i(d):g;return E(d,b),u=!0,a!==void 0&&(a=b),g}return Ot&&u||(m.f&je)!==0?d.v:i(d)})}function Ys(e){return new Gs(e)}class Gs{constructor(t){P(this,Ut);P(this,Qe);var o;var n=new Map,r=(s,l)=>{var f=Ui(l,!1,!1);return n.set(s,f),f};const a=new Proxy({...t.props||{},$$events:{}},{get(s,l){return i(n.get(l)??r(l,Reflect.get(s,l)))},has(s,l){return l===ml?!0:(i(n.get(l)??r(l,Reflect.get(s,l))),Reflect.has(s,l))},set(s,l,f){return E(n.get(l)??r(l,f),f),Reflect.set(s,l,f)}});T(this,Qe,(t.hydrate?Es:uo)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&ee(),T(this,Ut,a.$$events);for(const s of Object.keys(h(this,Qe)))s==="$set"||s==="$destroy"||s==="$on"||pn(this,s,{get(){return h(this,Qe)[s]},set(l){h(this,Qe)[s]=l},enumerable:!0});h(this,Qe).$set=s=>{Object.assign(a,s)},h(this,Qe).$destroy=()=>{Ss(h(this,Qe))}}$set(t){h(this,Qe).$set(t)}$on(t,n){h(this,Ut)[t]=h(this,Ut)[t]||[];const r=(...a)=>n.call(this,...a);return h(this,Ut)[t].push(r),()=>{h(this,Ut)[t]=h(this,Ut)[t].filter(a=>a!==r)}}$destroy(){h(this,Qe).$destroy()}}Ut=new WeakMap,Qe=new WeakMap;let Co=class{};typeof HTMLElement=="function"&&(Co=class extends HTMLElement{constructor(t,n,r){super();R(this,"$$ctor");R(this,"$$s");R(this,"$$c");R(this,"$$cn",!1);R(this,"$$d",{});R(this,"$$r",!1);R(this,"$$p_d",{});R(this,"$$l",{});R(this,"$$l_u",new Map);R(this,"$$me");R(this,"$$shadowRoot",null);this.$$ctor=t,this.$$s=n,r&&(this.$$shadowRoot=this.attachShadow(r))}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const a=this.$$c.$on(t,n);this.$$l_u.set(n,a)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const a=this.$$l_u.get(n);a&&(a(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return o=>{const s=ia("slot");a!=="default"&&(s.name=a),j(o,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=Ws(this);for(const a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(const a of this.attributes){const o=this.$$g_p(a.name);o in this.$$d||(this.$$d[o]=Hr(o,a.value,this.$$p_d,"toProp"))}for(const a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=Ys({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=is(()=>{Ir(()=>{var a;this.$$r=!0;for(const o of br(this.$$c)){if(!((a=this.$$p_d[o])!=null&&a.reflect))continue;this.$$d[o]=this.$$c[o];const s=Hr(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1})});for(const a in this.$$l)for(const o of this.$$l[a]){const s=this.$$c.$on(a,o);this.$$l_u.set(o,s)}this.$$l={}}}attributeChangedCallback(t,n,r){var a;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Hr(t,r,this.$$p_d,"toProp"),(a=this.$$c)==null||a.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return br(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function Hr(e,t,n,r){var o;const a=(o=n[e])==null?void 0:o.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Ws(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function Kt(e,t,n,r,a,o){let s=class extends Co{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return br(t).map(l=>(t[l].attribute||l).toLowerCase())}};return br(t).forEach(l=>{pn(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){var m;f=Hr(l,f,t),this.$$d[l]=f;var u=this.$$c;if(u){var d=(m=gn(u,l))==null?void 0:m.get;d?u[l]=f:u.$set({[l]:f})}}})}),r.forEach(l=>{pn(s.prototype,l,{get(){var f;return(f=this.$$c)==null?void 0:f[l]}})}),e.element=s,s}var qs=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Zs=se('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function Ao(e,t){Rt(t,!0);let n=oe(t,"loading"),r=Ur(t,qs),a;function o(){a==null||a.click()}var s={get loading(){return n()},set loading(d){n(d),ee()}},l=Zs(),f=we(l);Dr(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),zt(f,d=>a=d,()=>a);var u=ie(f,2);return ta(2),de(l),Ce(()=>K(l,"data-loading",n())),Pr("click",u,o),j(e,l),It(s)}Or(["click"]),Kt(Ao,{loading:{}},[],[],{mode:"open"});var Js=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Xs=se('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function To(e,t){Rt(t,!0);let n=oe(t,"loading"),r=Ur(t,Js);var a={get loading(){return n()},set loading(l){n(l),ee()}},o=Xs(),s=we(o);return Dr(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),ta(2),de(o),Ce(()=>K(o,"data-loading",n())),j(e,o),It(a)}Kt(To,{loading:{}},[],[],{mode:"open"});var Qs=se('<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function Ma(e,t){Rt(t,!0);let n=oe(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(l){n(l),ee()}},o=Qs(),s=we(o);return K(s,"href",r),de(o),Ce(()=>K(s,"aria-label",n().ariaLinkLabel)),j(e,o),It(a)}Kt(Ma,{strings:{}},[],[],{mode:"open"});var ec=se('<div class="altcha-footer"><p></p> <!></div>');function Na(e,t){Rt(t,!0);let n=oe(t,"logo"),r=oe(t,"strings");var a={get logo(){return n()},set logo(u){n(u),ee()},get strings(){return r()},set strings(u){r(u),ee()}},o=ec(),s=we(o);ho(s,()=>r().footer,!0),de(s);var l=ie(s,2);{var f=u=>{Ma(u,{get strings(){return r()}})};me(l,u=>{n()&&u(f)})}return de(o),j(e,o),It(a)}Kt(Na,{logo:{},strings:{}},[],[],{mode:"open"});var tc=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),nc=se('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function $o(e,t){Rt(t,!0);let n=oe(t,"loading"),r=Ur(t,tc),a;function o(){a==null||a.click()}var s={get loading(){return n()},set loading(d){n(d),ee()}},l=nc(),f=we(l);Dr(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),zt(f,d=>a=d,()=>a);var u=ie(f,2);return de(l),Ce(()=>K(l,"data-loading",n())),Pr("click",u,o),j(e,l),It(s)}Or(["click"]),Kt($o,{loading:{}},[],[],{mode:"open"});var Ee=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(Ee||{}),Ro=(e=>(e.SHA_256="SHA-256",e.SHA_384="SHA-384",e.SHA_512="SHA-512",e))(Ro||{}),G=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(G||{}),rc=se('<div class="altcha-code-challenge-title"> </div>'),ac=se('<div class="altcha-spinner"></div>'),ic=xa('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),oc=xa('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),lc=xa('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),sc=se('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),cc=se('<audio hidden="" autoplay=""></audio>'),uc=se('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function Io(e,t){Rt(t,!0);let n=oe(t,"audioUrl"),r=oe(t,"codeChallenge"),a=oe(t,"config"),o=oe(t,"imageUrl"),s=oe(t,"onCancel"),l=oe(t,"onReload"),f=oe(t,"onSubmit"),u=oe(t,"strings"),d=V(void 0),m=V(void 0),g=V(void 0),p=V(!1),b=V(""),y=V(!1);Sa(()=>(a().disableAutoFocus||on().then(()=>{var x;(x=i(g))==null||x.focus()}),()=>{i(m)&&(i(m).pause(),E(m,void 0))}));function N(){E(d,Ee.PAUSED,!0)}function I(x){E(d,Ee.ERROR,!0)}function z(){E(d,Ee.READY,!0)}function ce(){E(d,Ee.LOADING,!0)}function B(){E(d,Ee.PLAYING,!0)}function Ae(){E(d,Ee.PAUSED,!0)}function Y(x){var W;x.code==="Space"?(x.preventDefault(),x.stopPropagation(),Te()):x.code==="Escape"&&(x.preventDefault(),x.stopPropagation(),(W=s())==null||W())}function A(x){var W;x.preventDefault(),x.stopPropagation(),(W=f())==null||W(i(b))}function re(x){x.play().catch(W=>{if(!(W instanceof DOMException&&W.name==="AbortError"))throw W})}function Te(){i(m)?i(d)===Ee.LOADING||(i(m).paused?(n()&&i(m).src!==n()&&(i(m).src=n()),i(m).currentTime=0,re(i(m))):i(m).pause()):(E(y,!0),requestAnimationFrame(()=>{i(m)&&n()&&(i(m).src=n(),re(i(m)))}))}var U={get audioUrl(){return n()},set audioUrl(x){n(x),ee()},get codeChallenge(){return r()},set codeChallenge(x){r(x),ee()},get config(){return a()},set config(x){a(x),ee()},get imageUrl(){return o()},set imageUrl(x){o(x),ee()},get onCancel(){return s()},set onCancel(x){s(x),ee()},get onReload(){return l()},set onReload(x){l(x),ee()},get onSubmit(){return f()},set onSubmit(x){f(x),ee()},get strings(){return u()},set strings(x){u(x),ee()}},be=uc(),et=we(be),Fe=we(et);{var tt=x=>{var W=rc(),vn=kn(W,!0);Ce(()=>Et(vn,u().verificationRequired)),j(x,W)};me(Fe,x=>{a().codeChallengeDisplay!=="standard"&&x(tt)})}var le=ie(Fe,2),Ht=kn(le,!0),S=ie(le,2),_e=ie(S,2),te=we(_e);Ra(te),te.disabled=i(p),zt(te,x=>E(g,x),()=>i(g));var _=ie(te,2);{var sr=x=>{var W=sc(),vn=we(W);{var dr=Le=>{var Tt=ac();j(Le,Tt)},Va=Le=>{var Tt=ic();j(Le,Tt)},ja=Le=>{var Tt=oc();j(Le,Tt)},Ba=Le=>{var Tt=lc();j(Le,Tt)};me(vn,Le=>{i(d)===Ee.LOADING?Le(dr):i(d)===Ee.ERROR?Le(Va,1):i(d)===Ee.PLAYING?Le(ja,2):Le(Ba,-1)})}de(W),Ce(()=>{K(W,"title",u().getAudioChallenge),W.disabled=i(d)===Ee.LOADING||i(d)===Ee.ERROR,K(W,"aria-label",i(d)===Ee.LOADING?u().loading:u().getAudioChallenge)}),ge("click",W,()=>Te(),!0),j(x,W)};me(_,x=>{r().audio&&x(sr)})}var cr=ie(_,2);de(_e);var At=ie(_e,2),ur=we(At),Br=kn(ur,!0),dn=ie(ur,2),fr=kn(dn,!0);de(At),de(et);var hr=ie(et,2);{var Ve=x=>{var W=cc();zt(W,vn=>E(m,vn),()=>i(m)),ge("error",W,I),ge("loadstart",W,ce),ge("canplay",W,z),ge("pause",W,Ae),ge("playing",W,B),ge("ended",W,N),j(x,W)};me(hr,x=>{i(y)&&x(Ve)})}return de(be),Ce(()=>{Et(Ht,u().enterCodeFromImage),K(S,"src",o()),K(te,"minlength",r().length||1),K(te,"maxlength",r().length),K(te,"placeholder",u().enterCode),K(te,"aria-label",i(d)===Ee.LOADING?u().loading:i(d)===Ee.PLAYING?"":u().enterCodeAria),K(te,"aria-live",i(d)?"assertive":"polite"),K(te,"aria-busy",i(d)===Ee.LOADING),K(cr,"title",u().reload),K(cr,"aria-label",u().reload),K(ur,"aria-label",u().verify),Et(Br,u().verify),K(dn,"aria-label",u().cancel),Et(fr,u().cancel)}),ge("submit",et,A,!0),Pr("keydown",te,Y),zs(te,()=>i(b),x=>E(b,x)),ge("click",cr,()=>{var x;return(x=l())==null?void 0:x()},!0),ge("click",dn,()=>{var x;return(x=s())==null?void 0:x()},!0),j(e,be),It(U)}Or(["keydown"]),Kt(Io,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var fc=new Set(["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),hc=se('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),dc=se('<div class="altcha-popover-arrow"></div>'),vc=se('<div role="button" class="altcha-popover-close">&times;</div>'),pc=se('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function Da(e,t){Rt(t,!0);let n=oe(t,"anchor"),r=oe(t,"children"),a=oe(t,"display",7,"standard"),o=oe(t,"backdrop",7,!1),s=oe(t,"onClickOutside"),l=oe(t,"onClickOutsideDelay",7,600),f=oe(t,"onClose"),u=oe(t,"placement",7,"auto"),d=oe(t,"updateUISignal"),m=oe(t,"variant",7,"neutral"),g=Ur(t,fc),p=V(void 0),b=V(void 0),y=V(!1),N=V(0);Ue(()=>{u()!=="auto"&&E(y,u()==="top")}),Ue(()=>{d()&&Ae()}),Sa(()=>{const S=a()==="bottomsheet"||a()==="overlay";return S&&(i(b)&&document.body.append(i(b)),i(p)&&document.body.append(i(p))),Ae(),on().then(()=>{E(N,Date.now(),!0)}),()=>{S&&(i(b)&&document.body.removeChild(i(b)),i(p)&&document.body.removeChild(i(p)))}});function I(){var S;(S=f())==null||S()}function z(S){var te,_;const _e=S.target;!((te=i(p))!=null&&te.contains(_e))&&(!l()||i(N)+l()<Date.now())&&((_=s())==null||_())}function ce(){Ae()}function B(){Ae()}function Ae(){if(n()&&u()==="auto"&&i(p)){const S=n().getBoundingClientRect(),te=document.documentElement.clientHeight-(S.top+S.height)<i(p).clientHeight;i(y)!==te&&E(y,te)}}var Y={get anchor(){return n()},set anchor(S){n(S),ee()},get children(){return r()},set children(S){r(S),ee()},get display(){return a()},set display(S="standard"){a(S),ee()},get backdrop(){return o()},set backdrop(S=!1){o(S),ee()},get onClickOutside(){return s()},set onClickOutside(S){s(S),ee()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(S=600){l(S),ee()},get onClose(){return f()},set onClose(S){f(S),ee()},get placement(){return u()},set placement(S="auto"){u(S),ee()},get updateUISignal(){return d()},set updateUISignal(S){d(S),ee()},get variant(){return m()},set variant(S="neutral"){m(S),ee()}},A=pc();ge("click",nn,z,!0),ge("resize",nn,ce),ge("scroll",nn,B);var re=_n(A);{var Te=S=>{var _e=hc();zt(_e,te=>E(b,te),()=>i(b)),j(S,_e)};me(re,S=>{o()&&S(Te)})}var U=ie(re,2);Dr(U,()=>({...g,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":m(),"data-top":i(y),"data-display":a()}));var be=we(U);{var et=S=>{var _e=dc();j(S,_e)};me(be,S=>{a()==="standard"&&S(et)})}var Fe=ie(be,2);{var tt=S=>{var _e=vc();ge("click",_e,I,!0),j(S,_e)};me(Fe,S=>{a()!=="standard"&&S(tt)})}var le=ie(Fe,2),Ht=we(le);return Cs(Ht,()=>r()??Ft),de(le),de(U),zt(U,S=>E(p,S),()=>i(p)),j(e,A),It(Y)}Kt(Da,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function gc(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function mc(e,t="altcha-css",n){var r,a;if(typeof document<"u"&&document&&!document.getElementById(t)){const o=document.createElement("style");o.id=t,o.textContent=e;const s=((r=document.currentScript)==null?void 0:r.nonce)??((a=document.querySelector('meta[name="csp-nonce"]'))==null?void 0:a.content);s&&(o.nonce=s),document.head.appendChild(o)}}Object.values(Ro);async function Po(e){var g;const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:o=p=>p>1?Math.floor(p/2):0,counterMode:s,timeout:l}=e,f=Math.min(16,Math.max(1,n)),u=[],d=()=>{for(const p of u)p.terminate()};for(let p=0;p<f;p++)u.push(await a(t.parameters.algorithm));let m=null;try{m=await Promise.race(u.map((p,b)=>(r.signal.addEventListener("abort",()=>{p.postMessage({type:"abort"})}),new Promise((y,N)=>{p.addEventListener("error",I=>{N(I)}),p.addEventListener("message",I=>{if(I.data){for(const z of u)z!==p&&z.postMessage({type:"abort"});if(I.data.error)return N(new Error(I.data.error))}y(I.data)}),p.postMessage({challenge:t,counterMode:s,counterStart:b,counterStep:f,timeout:l,type:"work"})}))))}catch(p){if(p instanceof Error&&!!((g=p==null?void 0:p.message)!=null&&g.includes("Out of memory"))&&o){d();const y=o(f);if(y)return Po({...e,challenge:t,controller:r,concurrency:y,createWorker:a})}throw p}finally{d()}return r.signal.aborted?null:m||null}class bc{constructor(t={}){R(this,"TAG_CODES",{INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10});R(this,"maxSamples");R(this,"sampleInterval");R(this,"target");R(this,"focusStartTime",0);R(this,"focusInteraction",0);R(this,"focusInteractionTimer",null);R(this,"lastPointerSample",0);R(this,"lastTouchSample",0);R(this,"lastScrollSample",0);R(this,"pendingPointer",null);R(this,"pendingTouch",null);R(this,"focus",[]);R(this,"pointer",[]);R(this,"scroll",[]);R(this,"touch",[]);R(this,"onFocus",t=>{if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)});R(this,"onInteraction",t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)});R(this,"onPointer",t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))});R(this,"onScroll",()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))});R(this,"onTouchMove",t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))});const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}}var yc=se('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),wc=se('<div class="altcha-overlay-content"></div>'),_c=se('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),kc=se('<div class="altcha-floating-arrow"></div>'),xc=se('<input type="hidden"/>'),Ec=se('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Oo=se('<div class="altcha-error"> </div>'),Sc=se("<!> <!>",1),Cc=se('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function Ac(e,t){Rt(t,!0);const n=()=>Si(d,"$altchaDefaults",a),r=()=>Si(b,"$altchaI18nStore",a),[a,o]=Kl(),s='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:d}=globalThis.$altcha.defaults,m=navigator.hardwareConcurrency||2,g=navigator.deviceMemory||0,p=g&&g<=4?Math.min(4,m):m,b=globalThis.$altcha.i18n.store,y=t.$$host,N=(c,v)=>{on().then(()=>{y==null||y.dispatchEvent(new CustomEvent(c,{detail:v}))})};let I=null,z=V(Pt(new URL(location.origin))),ce=V(!1),B=V(null),Ae=V(null),Y=V(null),A=V(Pt(G.UNVERIFIED)),re=V(void 0),Te=V(void 0),U=V(null),be=V(void 0),et=V(null),Fe=V(null),tt=V(null),le=V(null),Ht=V(Pt([])),S=V(0),_e=V(Pt({})),te=V(!0);const _=Ie(()=>({fetch:(c,v)=>fetch(c,v),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:p,...n(),...i(_e)})),sr=Ie(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),cr=Ie(()=>Rc(i(_).type)),At=Ie(()=>i(_).auto),ur=Ie(()=>i(A)===G.VERIFYING),Br=Ie(()=>!i(_).hideFooter),dn=Ie(()=>!i(_).hideLogo&&i(_).display!=="bar"),fr=Ie(()=>Ic(r(),[i(_).language,document.documentElement.lang,...navigator.languages])),hr=Ie(()=>f.includes(i(fr).language)?"rtl":void 0),Ve=Ie(()=>({...i(fr).strings})),x=Ie(()=>{var c,v,k;return(v=(c=i(B))==null?void 0:c.audio)!=null&&v.match(/^(https?:)?\//)?zr(i(B).audio,i(z),{language:i(_).audioChallengeLanguage||i(fr).language}).toString():(k=i(B))==null?void 0:k.audio}),W=Ie(()=>{var c,v,k;return(v=(c=i(B))==null?void 0:c.image)!=null&&v.match(/^(https?:)?\//)?zr(i(B).image,i(z)):(k=i(B))==null?void 0:k.image});Ue(()=>{vr({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Ue(()=>{t.theme?y==null||y.setAttribute("theme",t.theme):y==null||y.removeAttribute("theme")}),Ue(()=>{if(t.configuration)try{vr(JSON.parse(t.configuration))}catch{ne("unable to parse the `configuration` attribute (JSON expected)")}}),Ue(()=>{i(Y)!==i(_).display&&Kr(i(_).display)}),Ue(()=>{i(ce)&&i(A)===G.VERIFYING&&E(ce,!1)}),Ue(()=>{!i(ce)&&i(A)===G.VERIFIED&&E(ce,!0)}),Ue(()=>{if(!i(ce)){const c=za();c&&c.checked&&(c.checked=!1)}}),Ue(()=>{var c;i(A)===G.VERIFIED&&((c=za())==null||c.setCustomValidity(""))}),Ue(()=>{if(i(At)==="onload"){const c=setTimeout(()=>{Mn()},10);return()=>{c&&clearTimeout(c)}}}),Ue(()=>{i(Fe)&&ne("error:",i(Fe))}),Ue(()=>{i(le)&&i(_).setCookie&&Yc(i(le),i(_).setCookie)}),Sa(()=>{var c,v;return ne("mounted","3.4.1"),y&&globalThis.$altcha.instances.add(y),E(U,Oc(),!0),(c=i(U))==null||c.addEventListener("reset",Bo),(v=i(U))==null||v.addEventListener("submit",zo,{capture:!0}),document.addEventListener("focusin",jo),vn(),i(_).humanInteractionSignature&&(ne("human interaction signature enabled"),I=new bc),N("load"),u||ne("secure context (HTTPS) required"),()=>{var k,w;Va(),y&&globalThis.$altcha.instances.delete(y),i(tt)&&clearTimeout(i(tt)),(k=i(U))==null||k.removeEventListener("reset",Bo),(w=i(U))==null||w.removeEventListener("submit",zo,{capture:!0}),document.removeEventListener("focusin",jo),I==null||I.destroy()}});function vn(){E(Ht,[...globalThis.$altcha.plugins].map(c=>new c(y)),!0),ne("activating plugins",i(Ht).map(c=>c.constructor.name));for(const c of i(Ht))c.activate()}async function dr(c,...v){let k;for(const w of i(Ht))k=await w[c].call(w,...v);return k}function Va(){for(const c of i(Ht))c.destroy()}function ja(c){const[v,k]=c.salt.split("?"),w={};if(k)try{Object.assign(w,Object.fromEntries(new URLSearchParams(k).entries()))}catch{}const O={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:w,expiresAt:w!=null&&w.expires?parseInt(w.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:gc(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(O,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),O}function Ba(c,v){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:v.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:v.time||0}}async function Le(c){await new Promise(v=>setTimeout(v,c))}async function Tt(c=i(_).challenge,v){const k=await dr("onFetchChallenge",c);let w=null;if(k!==void 0)return k;if(typeof c=="string")if(c.startsWith("{")){ne("parsing JSON challenge");try{w=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else{ne("fetching challenge from",(v==null?void 0:v.method)||"GET",c),E(z,new URL(c,location.origin),!0);const O=await i(_).fetch(c,{credentials:i(_).credentials||void 0,...v});await Yo(O);const $=O.headers.get("x-altcha-config");$&&Bc($);const q=await O.json();if(q&&"his"in q&&q.his){if(ne("requested HIS"),!I)throw new Error("Server requested HIS data but collector is disabled.");return Tt(zr(q.his.url,i(z)),{body:JSON.stringify({his:I.export()}),headers:{"content-type":"application/json"},method:"POST"})}q&&"hisResult"in q&&q.hisResult&&ne("HIS result",q.hisResult),w=q}else if(c&&typeof c=="object")try{w=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(Tc(w)&&(w=ja(w)),!$c(w))throw new Error("Challenge validation failed.");return w}function Tc(c){return c!==null&&typeof c=="object"&&"challenge"in c}function $c(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function za(){return document.getElementById(i(sr))}function Rc(c){switch(c){case"checkbox":return Ao;case"switch":return $o;case"native":default:return To}}function Ic(c,v){const k=Object.keys(c).map(O=>O.toLowerCase());let w=v.reduce((O,$)=>($=$.toLowerCase(),O||(c[$]?$:null)||k.find(q=>$.split("-")[0]===q.split("-")[0])||null),null);return c[w||""]||(w="en"),{language:w,strings:c[w]}}function Pc(c){switch(c){case"bar":return i(_).barPlacement||"bottom";case"floating":return i(_).floatingPlacement||"auto";default:return}}function Oc(){var c,v;if(t.form){const k=y==null?void 0:y.getRootNode(),w=(c=k==null?void 0:k.getElementById)==null?void 0:c.call(k,t.form);return w instanceof HTMLFormElement?w:null}return((v=i(be))==null?void 0:v.closest("form"))??null}function Vo(c){return i(U)?Array.from(i(U).elements).filter(v=>v.matches(c)):[]}function Lc(c){return Vo(s).reduce((k,w)=>{const O=w.name,$=w.value;return O&&$&&(k[O]=/\n/.test($)?$.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):$),k},{})}function Mc(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function zr(c,v,k){const w=new URL(c,v);if(w.search||(w.search=v.search),k)for(const O in k)k[O]!==void 0&&k[O]!==null&&w.searchParams.set(O,k[O]);return w.toString()}function Nc(c){!i(ce)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,i(A)!==G.VERIFYING&&Mn()):c.currentTarget.checked||(c.preventDefault(),nt())}function Dc(c){i(A)===G.VERIFYING?c.currentTarget.setCustomValidity(i(Ve).waitAlert):i(_).validationMessage&&c.currentTarget.setCustomValidity(i(_).validationMessage)}function Uc(){Kr(i(_).display),nt()}function Hc(){Yr()}function Fc(c){const v=c.target;i(_).display==="floating"&&v&&!(y!=null&&y.contains(v))&&!v.hasAttribute("data-backdrop")&&!v.closest("[data-popover]")&&i(A)!==G.VERIFIED&&!i(_).floatingPersist&&Ka()}function jo(c){const v=c.target;i(At)==="onfocus"&&i(A)===G.UNVERIFIED&&i(U)&&v instanceof Element&&(i(U).contains(v)||v.form===i(U))&&Mn()}function Bo(){Kr(i(_).display),nt()}function zo(c){const v=c.target;(v==null?void 0:v.getAttribute("data-code-challenge"))!=="true"&&i(At)==="onsubmit"&&i(A)===G.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),E(et,c.submitter,!0),Ya(),Mn().then(k=>{k&&!i(B)&&on().then(()=>{Ko(i(et))})}))}function Vc(c){c.persisted&&(Kr(i(_).display),nt())}function jc(){Yr()}function Bc(c){var v,k;try{const w=JSON.parse(c);w&&typeof w=="object"&&vr({serverVerificationFields:(v=w==null?void 0:w.sentinel)==null?void 0:v.fields,serverVerificationTimeZone:(k=w==null?void 0:w.sentinel)==null?void 0:k.timeZone,verifyUrl:w.verifyurl,...w})}catch(w){ne("unable to configure from x-altcha-config header",w)}}function zc(c=20){if(!i(be))return;const v=i(_).floatingPlacement;if(!i(Te)&&(E(Te,(i(_).floatingAnchor instanceof HTMLElement?i(_).floatingAnchor:i(_).floatingAnchor?document.querySelector(i(_).floatingAnchor):Vo(l)[0])||i(U),!0),!i(Te))){ne("unable to find floating anchor element");return}const k=parseInt(i(_).floatingOffset,10)||12,w=i(Te).getBoundingClientRect(),O=i(be).getBoundingClientRect(),$=document.documentElement.clientHeight,q=document.documentElement.clientWidth,$e=!v||v==="auto"?w.bottom+O.height+k+c>$:v==="top",ae=Math.max(c,Math.min(q-c-O.width,w.left+w.width/2-O.width/2));if(i(be).style.setProperty("--altcha-floating-left",`${ae}px`),i(be).style.setProperty("--altcha-floating-top",$e?`${w.top-(O.height+k)}px`:`${w.bottom+k}px`),i(be).setAttribute("data-floating-position",$e?"top":"bottom"),i(re)){const Me=i(re).getBoundingClientRect();i(re).style.left=w.left-ae+w.width/2-Me.width/2+"px"}}async function Kc(c,v){const k=await dr("onRequestServerVerification",c,v);if(k!==void 0)return k;if(ne("requesting server verification from",i(_).verifyUrl),!i(_).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const w=await i(_).fetch(zr(i(_).verifyUrl,i(z)),{body:JSON.stringify({code:v,fields:i(_).serverVerificationFields?Lc():void 0,payload:c,timeZone:i(_).serverVerificationTimeZone?Mc():void 0}),credentials:i(_).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await Yo(w);const O=await w.json();return O&&typeof O=="object"&&"payload"in O&&O.payload&&N("serververification",O),O}function Ko(c){var v;i(U)&&"requestSubmit"in i(U)?i(U).requestSubmit(c):(v=i(U))!=null&&v.reportValidity()&&(c?c.click():i(U).submit())}function Yc(c,v={}){const{domain:k,name:w=i(_).name,maxAge:O,path:$,sameSite:q,secure:$e}=v;let ae=`${encodeURIComponent(w)}=${encodeURIComponent(c)}`;k&&(ae+=`; Domain=${k}`),O!=null&&(ae+=`; Max-Age=${O}`),$&&(ae+=`; Path=${$}`),q&&(ae+=`; SameSite=${q}`),$e&&(ae+="; Secure"),document.cookie=ae}function Kr(c){switch(c){case"bar":case"floating":case"overlay":Ka(),(!i(At)||i(At)==="off")&&(i(_e).auto="onsubmit");break;case"standard":Ya()}i(Y)!==c&&E(Y,c,!0)}function Gc(c){i(tt)&&clearTimeout(i(tt));const v=()=>{i(A)!==G.UNVERIFIED?(E(ce,!1),rt(G.EXPIRED)):nt(),N("expired")},k=c*1e3-Date.now();k>=1?E(tt,setTimeout(v,k),!0):v()}async function Yo(c){var k;if(c.status>=400){if((k=c.headers.get("content-type"))!=null&&k.includes("/json")){let w;try{w=await c.json()}catch{}if(w&&"error"in w)throw new Error(`Server responded with ${c.status} - ${w.error}`)}throw new Error(`Server responded with ${c.status}.`)}const v=c.headers.get("content-type");if(!v||!v.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${v}.`)}async function Go(c){var k;if(!i(le)){rt(G.ERROR,"Cannot verify code challenge without PoW payload.");return}rt(G.VERIFYING);let v=null;if(i(_).verifyUrl)v=await Kc(i(le),c);else if(i(_).verifyFunction)v=await i(_).verifyFunction(i(le),c);else{rt(G.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}v!=null&&v.payload&&(E(le,v.payload,!0),ne("server payload",i(le))),(v==null?void 0:v.verified)===!0?(ne("verified"),rt(G.VERIFIED),N("verified",{payload:i(le)}),i(At)==="onsubmit"&&on().then(()=>{Ko(i(et))})):rt(G.ERROR,(v==null?void 0:v.reason)||"Verification failed."),i(_).disableAutoFocus||(k=za())==null||k.focus()}function vr(c){Object.assign(i(_e),{...Object.fromEntries(Object.entries(c).filter(([v,k])=>k!==void 0))})}function Wc(){return{...i(_)}}function qc(){return i(A)}function Ka(){E(te,!1)}function ne(...c){(i(_).debug||c.some(v=>v instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${i(_).name}]`,...c)}function nt(c=G.UNVERIFIED,v=null){E(ce,!1),E(Fe,v,!0),E(le,null),i(Ae)&&i(Ae).abort(),i(tt)&&(clearTimeout(i(tt)),E(tt,null)),rt(c)}function rt(c,v=null){E(A,c,!0),E(Fe,v,!0),N("statechange",{payload:i(le),state:i(A)})}function Ya(){E(te,!0),on().then(()=>{Yr()})}function Yr(){switch(i(_).display){case"floating":return zc()}E(S,i(S)+1)}async function Mn(c={}){var Me,Wt;const{concurrency:v=Math.max(1,i(_).workers),controller:k=new AbortController,minDuration:w=i(_).minDuration}=c,O=performance.now();let $=null,q=null,$e=!1;const ae=await dr("onVerify",c);if(ae!==void 0)return ae;nt(G.VERIFYING),E(Ae,k,!0);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(i(_).mockError)throw new Error("Mock error.");if(i(_).test)return ne("running test mode with null challenge"),await Le(Math.max(0,w-(performance.now()-O))),(Me=i(Ae))!=null&&Me.signal.aborted?(nt(),null):(E(le,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),ne("verified"),rt(G.VERIFIED),N("verified",{payload:i(le)}),{payload:i(le)});if($=await Tt(),!$)throw new Error("Failed to fetch challenge.");ne("challenge",$),"configuration"in $&&(ne("re-configuring from challenge",$.configuration),vr($.configuration)),$.parameters.expiresAt&&Gc($.parameters.expiresAt),$e="_version"in $&&$._version===1;const dt=globalThis.$altcha.algorithms.get($.parameters.algorithm);if(!dt)throw new Error(`Unsupported algorithm ${$.parameters.algorithm}.`);if(q=await Po({challenge:$,concurrency:v,controller:k,createWorker:dt,counterMode:$e?"string":"uint32",onOutOfMemory:el=>{if(ne("out of memory error received"),N("outofmemory"),i(_).retryOnOutOfMemoryError&&el>1){const tl=Math.floor(el/2);return ne(`retrying with ${tl} workers...`),tl}},timeout:i(_).timeout}),(Wt=i(Ae))!=null&&Wt.signal.aborted)return nt(),null;if(!q)throw new Error("Failed to find solution.");ne("solution",q),await Le(Math.max(0,w-(performance.now()-O))),E(B,$.codeChallenge||i(_).codeChallenge||null,!0),$e?E(le,btoa(JSON.stringify(Ba($,q))),!0):E(le,btoa(JSON.stringify({challenge:{parameters:$.parameters,signature:$.signature},solution:q})),!0),i(B)?(ne("requesting code verification"),rt(G.CODE),N("codechallenge",{codeChallenge:i(B)})):i(_).verifyUrl?await Go():(ne("verified"),rt(G.VERIFIED),N("verified",{payload:i(le)}))}catch(dt){return ne("verification failed",dt),rt(G.ERROR,String(dt)),null}finally{E(Ae,null)}return{challenge:$,payload:i(le),solution:q}}var Zc={configure:vr,getConfiguration:Wc,getState:qc,hide:Ka,log:ne,reset:nt,setState:rt,show:Ya,updateUI:Yr,verify:Mn},Wo=Cc();ge("scroll",ra,Hc),ge("click",ra,Fc),ge("pageshow",nn,Vc),ge("resize",nn,jc);var qo=_n(Wo);{var Jc=c=>{var v=yc();j(c,v)};me(qo,c=>{i(_).display==="overlay"&&i(te)&&c(Jc)})}var $t=ie(qo,2),Zo=we($t);{var Xc=c=>{var v=_c(),k=_n(v),w=ie(k,2);{var O=$=>{var q=wc();ho(q,()=>{var $e;return($e=document.querySelector(i(_).overlayContent))==null?void 0:$e.innerHTML},!0),de(q),j($,q)};me(w,$=>{i(_).overlayContent&&$(O)})}ge("click",k,Uc,!0),j(c,v)};me(Zo,c=>{i(_).display==="overlay"&&i(te)&&c(Xc)})}var Ga=ie(Zo,2),Wa=we(Ga),qa=we(Wa),Jo=we(qa);{let c=Ie(()=>i(_).display==="standard"&&i(At)!=="onsubmit"||i(A)===G.VERIFYING);$s(Jo,()=>i(cr),(v,k)=>{k(v,{get id(){return i(sr)},get form(){return t.form},name:"",get required(){return i(c)},get loading(){return i(ur)},get checked(){return i(ce)},onchange:Nc,oninvalid:Dc})})}var Za=ie(Jo,2),Qc=we(Za);{var eu=c=>{var v=Lr();Ce(()=>Et(v,i(Ve).verificationRequired)),j(c,v)},tu=c=>{var v=Lr();Ce(()=>Et(v,i(Ve).verifying)),j(c,v)},nu=c=>{var v=Lr();Ce(()=>Et(v,i(Ve).verified)),j(c,v)},ru=c=>{var v=Lr();Ce(()=>Et(v,i(Ve).label)),j(c,v)};me(Qc,c=>{i(A)===G.CODE&&i(B)?c(eu):i(A)===G.VERIFYING?c(tu,1):i(A)===G.VERIFIED?c(nu,2):c(ru,-1)})}de(Za),de(qa);var au=ie(qa,2);{var iu=c=>{Ma(c,{get strings(){return i(Ve)}})};me(au,c=>{i(dn)&&c(iu)})}de(Wa);var Xo=ie(Wa,2);{var ou=c=>{{let v=Ie(()=>i(_).display==="bar"&&i(dn));Na(c,{get logo(){return i(v)},get strings(){return i(Ve)}})}};me(Xo,c=>{i(Br)&&c(ou)})}var Qo=ie(Xo,2);{var lu=c=>{var v=kc();zt(v,k=>E(re,k),()=>i(re)),j(c,v)};me(Qo,c=>{i(_).display==="floating"&&c(lu)})}var su=ie(Qo,2);{var cu=c=>{var v=xc();Ra(v),Ce(()=>{K(v,"form",t.form),K(v,"name",i(_).name),js(v,i(le))}),j(c,v)};me(su,c=>{i(_).setCookie||c(cu)})}de(Ga);var uu=ie(Ga,2);{var fu=c=>{Da(c,{get anchor(){return i(be)},onClickOutside:()=>{u&&nt()},get placement(){return i(_).popoverPlacement},role:"alert",variant:"error",get dir(){return i(hr)},get updateUISignal(){return i(S)},children:(v,k)=>{var w=co(),O=_n(w);{var $=ae=>{var Me=Ec();j(ae,Me)},q=ae=>{var Me=Oo(),Wt=kn(Me,!0);Ce(()=>Et(Wt,i(Ve).expired)),j(ae,Me)},$e=ae=>{var Me=Oo(),Wt=kn(Me,!0);Ce(()=>{K(Me,"title",i(Fe)),Et(Wt,i(Ve).error)}),j(ae,Me)};me(O,ae=>{!i(Fe)&&!u?ae($):!i(Fe)&&i(A)===G.EXPIRED?ae(q,1):ae($e,-1)})}j(v,w)},$$slots:{default:!0}})},hu=c=>{var v=co(),k=_n(v);Ts(k,()=>i(B),w=>{{let O=Ie(()=>i(_).codeChallengeDisplay!=="standard");Da(w,{get anchor(){return i(be)},get backdrop(){return i(O)},get display(){return i(_).codeChallengeDisplay},onClose:()=>{nt()},get placement(){return i(_).popoverPlacement},role:"dialog",get"aria-label"(){return i(Ve).verificationRequired},get dir(){return i(hr)},get updateUISignal(){return i(S)},children:($,q)=>{var $e=Sc(),ae=_n($e);Io(ae,{get audioUrl(){return i(x)},get imageUrl(){return i(W)},onCancel:()=>nt(),onReload:()=>Mn(),onSubmit:dt=>Go(dt),get codeChallenge(){return i(B)},get config(){return i(_)},get strings(){return i(Ve)}});var Me=ie(ae,2);{var Wt=dt=>{Na(dt,{get logo(){return i(dn)},get strings(){return i(Ve)}})};me(Me,dt=>{i(Br)&&i(_).codeChallengeDisplay!=="standard"&&dt(Wt)})}j($,$e)},$$slots:{default:!0}})}}),j(c,v)};me(uu,c=>{i(Fe)||i(A)===G.EXPIRED||!u?c(fu):i(B)&&i(A)===G.CODE&&c(hu,1)})}de($t),zt($t,c=>E(be,c),()=>i(be)),Ce(c=>{K($t,"data-state",i(A)),K($t,"data-display",i(_).display||void 0),K($t,"data-placement",c),K($t,"data-visible",i(te)||void 0),K($t,"dir",i(hr)),K(Za,"for",i(sr)),$t.dir=$t.dir},[()=>Pc(i(_).display)]),j(e,Wo);var du=It(Zc);return o(),du}typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",Kt(Ac,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},form:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const Lo=`(function() {
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
`,Mo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Lo],{type:"text/javascript;charset=utf-8"});function Ua(e){let t;try{if(t=Mo&&(self.URL||self.webkitURL).createObjectURL(Mo),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Lo),{name:e==null?void 0:e.name})}}const No=`(function() {
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
`,Do=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",No],{type:"text/javascript;charset=utf-8"});function Ha(e){let t;try{if(t=Do&&(self.URL||self.webkitURL).createObjectURL(Do),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(No),{name:e==null?void 0:e.name})}}return mc(`:root {
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
}`),$altcha.algorithms.set("SHA-256",()=>new Ha),$altcha.algorithms.set("SHA-384",()=>new Ha),$altcha.algorithms.set("SHA-512",()=>new Ha),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Ua),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Ua),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Ua),rl}mu();
