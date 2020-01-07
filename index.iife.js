'use strict';let idofCounter=0,idof=()=>idofCounter++;
(function(){function q(a,b){var d=R,c,e;for(e=arguments.length;2<e--;)F.push(arguments[e]);b&&null!=b.children&&(F.length||F.push(b.children),delete b.children);for(;F.length;)if((c=F.pop())&&void 0!==c.pop)for(e=c.length;e--;)F.push(c[e]);else{"boolean"===typeof c&&(c=null);if(e="function"!==typeof a)null==c?c="":"number"===typeof c?c=String(c):"string"!==typeof c&&(e=!1);e&&f?d[d.length-1]+=c:d===R?d=[c]:d.push(c);var f=e}f=new oa;f.nodeName=a;f.children=d;f.attributes=null==b?void 0:b;f.key=null==
b?void 0:b.key;void 0!==w.vnode&&w.vnode(f);return f}function A(a,b){for(var d in b)a[d]=b[d];return a}function G(a,b){a&&("function"==typeof a?a(b):a.current=b)}function S(a){!a._dirty&&(a._dirty=!0)&&1==T.push(a)&&(w.debounceRendering||pa)(qa)}function qa(){for(var a;a=T.pop();)a._dirty&&J(a)}function U(a,b){return a.normalizedNodeName===b||a.nodeName.toLowerCase()===b.toLowerCase()}function V(a){var b=A({},a.attributes);b.children=a.children;a=a.nodeName.defaultProps;if(void 0!==a)for(var d in a)void 0===
b[d]&&(b[d]=a[d]);return b}function P(a){var b=a.parentNode;b&&b.removeChild(a)}function W(a,b,d,c,e){"className"===b&&(b="class");if("key"!==b)if("ref"===b)G(d,null),G(c,a);else if("class"!==b||e)if("style"===b){if(c&&"string"!==typeof c&&"string"!==typeof d||(a.style.cssText=c||""),c&&"object"===typeof c){if("string"!==typeof d)for(var f in d)f in c||(a.style[f]="");for(f in c)a.style[f]="number"===typeof c[f]&&!1===ra.test(f)?c[f]+"px":c[f]}}else if("dangerouslySetInnerHTML"===b)c&&(a.innerHTML=
c.__html||"");else if("o"==b[0]&&"n"==b[1])e=b!==(b=b.replace(/Capture$/,"")),b=b.toLowerCase().substring(2),c?d||a.addEventListener(b,X,e):a.removeEventListener(b,X,e),(a._listeners||(a._listeners={}))[b]=c;else if("list"!==b&&"type"!==b&&!e&&b in a){try{a[b]=null==c?"":c}catch(g){}null!=c&&!1!==c||"spellcheck"==b||a.removeAttribute(b)}else d=e&&b!==(b=b.replace(/^xlink:?/,"")),null==c||!1===c?d?a.removeAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase()):a.removeAttribute(b):"function"!==
typeof c&&(d?a.setAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase(),c):a.setAttribute(b,c));else a.className=c||""}function X(a){return this._listeners[a.type](w.event&&w.event(a)||a)}function Y(){for(var a;a=Z.shift();)w.afterMount&&w.afterMount(a),a.componentDidMount&&a.componentDidMount()}function aa(a,b,d,c,e,f){Q++||(D=null!=e&&void 0!==e.ownerSVGElement,K=null!=a&&!("__preactattr_"in a));a=ba(a,b,d,c,f);e&&a.parentNode!==e&&e.appendChild(a);--Q||(K=!1,f||Y());return a}function ba(a,
b,d,c,e){var f=a,g=D;if(null==b||"boolean"===typeof b)b="";if("string"===typeof b||"number"===typeof b)return a&&void 0!==a.splitText&&a.parentNode&&(!a._component||e)?a.nodeValue!=b&&(a.nodeValue=b):(f=document.createTextNode(b),a&&(a.parentNode&&a.parentNode.replaceChild(f,a),E(a,!0))),f.__preactattr_=!0,f;e=b.nodeName;if("function"===typeof e){g=a;var h=b;f=b=g&&g._component;var k=g,p=b&&g._componentConstructor===h.nodeName,n=p;for(a=V(h);b&&!n&&(b=b._parentComponent);)n=b.constructor===h.nodeName;
b&&n&&(!c||b._component)?(L(b,a,3,d,c),g=b.base):(f&&!p&&(M(f),g=k=null),b=ca(h.nodeName,a,d),g&&!b.nextBase&&(b.nextBase=g,k=null),L(b,a,1,d,c),g=b.base,k&&g!==k&&(k._component=null,E(k,!1)));return g}D="svg"===e?!0:"foreignObject"===e?!1:D;e=String(e);if(!a||!U(a,e))if(f=e,e=D?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f),e.normalizedNodeName=f,f=e,a){for(;a.firstChild;)f.appendChild(a.firstChild);a.parentNode&&a.parentNode.replaceChild(f,a);E(a,!0)}var l=f.firstChild;
a=f.__preactattr_;e=b.children;if(null==a){a=f.__preactattr_={};for(var m=f.attributes,z=m.length;z--;)a[m[z].name]=m[z].value}if(!K&&e&&1===e.length&&"string"===typeof e[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling)l.nodeValue!=e[0]&&(l.nodeValue=e[0]);else if(e&&e.length||null!=l){l=f;m=K||null!=a.dangerouslySetInnerHTML;z=l.childNodes;var C=[],B={},v=0,u=0,t=z.length,q=0,w=e?e.length:0;if(0!==t)for(n=0;n<t;n++){var x=z[n],r=x.__preactattr_;var y=w&&r?x._component?x._component.__key:r.key:
null;if(null!=y)v++,B[y]=x;else if(r||(void 0!==x.splitText?m?x.nodeValue.trim():1:m))C[q++]=x}if(0!==w)for(n=0;n<w;n++){t=e[n];p=null;y=t.key;if(null!=y)v&&void 0!==B[y]&&(p=B[y],B[y]=void 0,v--);else if(u<q)for(y=u;y<q;y++){if(x=void 0!==C[y]){x=k=C[y];r=t;var A=m;x="string"===typeof r||"number"===typeof r?void 0!==x.splitText:"string"===typeof r.nodeName?!x._componentConstructor&&U(x,r.nodeName):A||x._componentConstructor===r.nodeName}if(x){p=k;C[y]=void 0;y===q-1&&q--;y===u&&u++;break}}p=ba(p,
t,d,c);t=z[n];p&&p!==l&&p!==t&&(null==t?l.appendChild(p):p===t.nextSibling?P(t):l.insertBefore(p,t))}if(v)for(n in B)void 0!==B[n]&&E(B[n],!1);for(;u<=q;)void 0!==(p=C[q--])&&E(p,!1)}d=f;c=b.attributes;b=a;for(h in b)c&&null!=c[h]||null==b[h]||W(d,h,b[h],b[h]=void 0,D);for(h in c)"children"===h||"innerHTML"===h||h in b&&c[h]===("value"===h||"checked"===h?d[h]:b[h])||W(d,h,b[h],b[h]=c[h],D);D=g;return f}function E(a,b){var d=a._component;d?M(d):(null!=a.__preactattr_&&G(a.__preactattr_.ref,null),!1!==
b&&null!=a.__preactattr_||P(a),da(a))}function da(a){for(a=a.lastChild;a;){var b=a.previousSibling;E(a,!0);a=b}}function ca(a,b,d){var c=H.length;if(a.prototype&&a.prototype.render){var e=new a(b,d);N.call(e,b,d)}else e=new N(b,d),e.constructor=a,e.render=sa;for(;c--;)if(H[c].constructor===a){e.nextBase=H[c].nextBase;H.splice(c,1);break}return e}function sa(a,b,d){return this.constructor(a,d)}function L(a,b,d,c,e){a._disable||(a._disable=!0,a.__ref=b.ref,a.__key=b.key,delete b.ref,delete b.key,"undefined"===
typeof a.constructor.getDerivedStateFromProps&&(!a.base||e?a.componentWillMount&&a.componentWillMount():a.componentWillReceiveProps&&a.componentWillReceiveProps(b,c)),c&&c!==a.context&&(a.prevContext||(a.prevContext=a.context),a.context=c),a.prevProps||(a.prevProps=a.props),a.props=b,a._disable=!1,0!==d&&(1!==d&&!1===w.syncComponentUpdates&&a.base?S(a):J(a,1,e)),G(a.__ref,a))}function J(a,b,d,c){if(!a._disable){var e=a.props,f=a.state,g=a.context,h=a.prevProps||e,k=a.prevState||f,p=a.prevContext||
g,n=a.base,l=a.nextBase,m=n||l,z=a._component,C=!1,B=p,v;a.constructor.getDerivedStateFromProps&&(f=A(A({},f),a.constructor.getDerivedStateFromProps(e,f)),a.state=f);n&&(a.props=h,a.state=k,a.context=p,2!==b&&a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(e,f,g)?C=!0:a.componentWillUpdate&&a.componentWillUpdate(e,f,g),a.props=e,a.state=f,a.context=g);a.prevProps=a.prevState=a.prevContext=a.nextBase=null;a._dirty=!1;if(!C){e=a.render(e,f,g);a.getChildContext&&(g=A(A({},g),a.getChildContext()));
n&&a.getSnapshotBeforeUpdate&&(B=a.getSnapshotBeforeUpdate(h,k));f=e&&e.nodeName;if("function"===typeof f){var u=V(e);if((v=z)&&v.constructor===f&&u.key==v.__key)L(v,u,1,g,!1);else{var t=v;a._component=v=ca(f,u,g);v.nextBase=v.nextBase||l;v._parentComponent=a;L(v,u,0,g,!1);J(v,1,d,!0)}u=v.base}else{l=m;if(t=z)l=a._component=null;if(m||1===b)l&&(l._component=null),u=aa(l,e,g,d||!n,m&&m.parentNode,!0)}m&&u!==m&&v!==z&&(g=m.parentNode)&&u!==g&&(g.replaceChild(u,m),t||(m._component=null,E(m,!1)));t&&
M(t);if((a.base=u)&&!c){for(t=m=a;t=t._parentComponent;)(m=t).base=u;u._component=m;u._componentConstructor=m.constructor}}!n||d?Z.push(a):C||(a.componentDidUpdate&&a.componentDidUpdate(h,k,B),w.afterUpdate&&w.afterUpdate(a));for(;a._renderCallbacks.length;)a._renderCallbacks.pop().call(a);Q||c||Y()}}function M(a){w.beforeUnmount&&w.beforeUnmount(a);var b=a.base;a._disable=!0;a.componentWillUnmount&&a.componentWillUnmount();a.base=null;var d=a._component;d?M(d):b&&(null!=b.__preactattr_&&G(b.__preactattr_.ref,
null),a.nextBase=b,P(b),H.push(a),da(b));G(a.__ref,null)}function N(a,b){this._dirty=!0;this.context=b;this.props=a;this.state=this.state||{};this._renderCallbacks=[]}function ea(a,b){var d=new Uint32Array(a);a=new Uint16Array(a);d=d[b+-4>>>2]>>>1;b>>>=1;if(1024>=d)return String.fromCharCode.apply(String,a.subarray(b,b+d));let c=[];do{var e=a[b+1024-1];e=55296<=e&&56320>e?1023:1024;c.push(String.fromCharCode.apply(String,a.subarray(b,b+=e)));d-=e}while(1024<d);return c.join("")+String.fromCharCode.apply(String,
a.subarray(b,b+d))}function fa(a){function b(a,b){return a?ea(a.buffer,b):"<yet unknown>"}let d={},c=a.env=a.env||{};c.abort=c.abort||function(a,f,g,h){let e=d.memory||c.memory;throw Error("abort: "+b(e,a)+" at "+b(e,f)+":"+g+":"+h);};c.trace=c.trace||function(a,f){console.log("trace: "+b(d.memory||c.memory,a)+(f?" ":"")+Array.prototype.slice.call(arguments,2,2+f).join(", "))};a.Math=a.Math||Math;a.Date=a.Date||Date;return d}function ha(a,b){function d(a){let b=new Uint32Array(h.buffer),d=b[l>>>2];
if((a>>>=0)>=d)throw Error("invalid id: "+a);return b[(l+4>>>2)+2*a]}function c(a){let b=new Uint32Array(h.buffer),d=b[l>>>2];if((a>>>=0)>=d)throw Error("invalid id: "+a);return b[(l+4>>>2)+2*a+1]}function e(a,b,d){let c=h.buffer;if(d)switch(a){case 2:return new Float32Array(c);case 3:return new Float64Array(c)}else switch(a){case 0:return new (b?Int8Array:Uint8Array)(c);case 1:return new (b?Int16Array:Uint16Array)(c);case 2:return new (b?Int32Array:Uint32Array)(c);case 3:return new (b?BigInt64Array:
BigUint64Array)(c)}throw Error("unsupported align: "+a);}function f(a){let b=new Uint32Array(h.buffer);var c=b[a+-8>>>2];let f=d(c);if(!(f&1))throw Error("not an array: "+c);c=31-Math.clz32(f>>>5&31);var m=b[a+4>>>2];a=f&2?b[a+12>>>2]:b[m+-4>>>2]>>>c;return e(c,f&1024,f&2048).subarray(m>>>=c,m+a)}function g(a,b,c){let d=h.buffer,e=new Uint32Array(d);c=e[c+4>>>2];return new a(d,c,e[c+-4>>>2]>>>b)}b=b.exports;let h=b.memory,k=b.table,p=b.__alloc,n=b.__retain,l=b.__rtti_base||-1;a.__allocString=function(a){let b=
a.length,c=p(b<<1,1),d=new Uint16Array(h.buffer);for(var e=0,f=c>>>1;e<b;++e)d[f+e]=a.charCodeAt(e);return c};a.__getString=function(a){let b=h.buffer;if(1!==(new Uint32Array(b))[a+-8>>>2])throw Error("not a string: "+a);return ea(b,a)};a.__allocArray=function(a,b){var c=d(a);if(!(c&3))throw Error("not an array: "+a+" @ "+c);let f=31-Math.clz32(c>>>5&31),g=b.length,m=p(g<<f,0);a=p(c&2?16:12,a);var l=new Uint32Array(h.buffer);l[a+0>>>2]=n(m);l[a+4>>>2]=m;l[a+8>>>2]=g<<f;c&2&&(l[a+12>>>2]=g);l=e(f,
c&1024,c&2048);if(c&8192)for(c=0;c<g;++c)l[(m>>>f)+c]=n(b[c]);else l.set(b,m>>>f);return a};a.__getArrayView=f;a.__getArray=function(a){a=f(a);let b=a.length,c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c};a.__getArrayBuffer=function(a){let b=h.buffer,c=(new Uint32Array(b))[a+-4>>>2];return b.slice(a,a+c)};a.__getInt8Array=g.bind(null,Int8Array,0);a.__getUint8Array=g.bind(null,Uint8Array,0);a.__getUint8ClampedArray=g.bind(null,Uint8ClampedArray,0);a.__getInt16Array=g.bind(null,Int16Array,1);a.__getUint16Array=
g.bind(null,Uint16Array,1);a.__getInt32Array=g.bind(null,Int32Array,2);a.__getUint32Array=g.bind(null,Uint32Array,2);ta&&(a.__getInt64Array=g.bind(null,BigInt64Array,3),a.__getUint64Array=g.bind(null,BigUint64Array,3));a.__getFloat32Array=g.bind(null,Float32Array,2);a.__getFloat64Array=g.bind(null,Float64Array,3);a.__instanceof=function(a,b){let d=new Uint32Array(h.buffer);a=d[a+-8>>>2];if(a<=d[l>>>2]){do if(a==b)return!0;while(a=c(a))}return!1};a.memory=a.memory||h;a.table=a.table||k;return ua(b,
a)}function ia(a,b){var d=(...c)=>{b(c.length);return a(...c)};d.original=a;return d}function ja(a){return"undefined"!==typeof Response&&a instanceof Response}async function ka(a,b){return ja(a=await a)?la(a,b):ha(fa(b||(b={})),await WebAssembly.instantiate(a instanceof WebAssembly.Module?a:await WebAssembly.compile(a),b))}async function la(a,b){return WebAssembly.instantiateStreaming?ha(fa(b||(b={})),(await WebAssembly.instantiateStreaming(a,b)).instance):ka(ja(a=await a)?a.arrayBuffer():a,b)}function ua(a,
b){function d(a,b){return Object.prototype.hasOwnProperty.call(a,b)}b=b?Object.create(b):{};var c=a.__setargc||function(){};for(let g in a){if(!d(a,g))continue;let h=a[g];var e=g.split(".");let k=b;for(;1<e.length;){var f=e.shift();d(k,f)||(k[f]={});k=k[f]}e=e[0];f=e.indexOf("#");if(0<=f){let b=e.substring(0,f),n=k[b];if("undefined"===typeof n||!n.prototype){let a=function(...b){return a.wrap(a.prototype.constructor(0,...b))};a.prototype={valueOf:function(){return this[I]}};a.wrap=function(b){return Object.create(a.prototype,
{[I]:{value:b,writable:!1}})};n&&Object.getOwnPropertyNames(n).forEach(b=>Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(n,b)));k[b]=a}e=e.substring(f+1);k=k[b].prototype;if(/^(get|set):/.test(e)){if(!d(k,e=e.substring(4))){let b=a[g.replace("set:","get:")],c=a[g.replace("get:","set:")];Object.defineProperty(k,e,{get:function(){return b(this[I])},set:function(a){c(this[I],a)},enumerable:!0})}}else"constructor"===e?k[e]=ia(h,c):Object.defineProperty(k,e,{value:function(...a){c(a.length);
return h(this[I],...a)}})}else/^(get|set):/.test(e)?d(k,e=e.substring(4))||Object.defineProperty(k,e,{get:a[g.replace("set:","get:")],set:a[g.replace("get:","set:")],enumerable:!0}):k[e]="function"===typeof h?ia(h,c):h}return b}async function va(a,b){let d=a instanceof Promise;d&&(a=await a);return d?await wa(a,b):await ka(a,b)}function xa(a,b){if("object"!==typeof a)throw Error("Did not pass a valid exports object of the WebAssembly Instance");if("function"!==typeof b)throw Error("Did not pass a valid exported function of the WebAssembly Instance");
ma.forEach(b=>{if(!a[b])throw Error('Required Exported AssemblyScript Runtime functions are not present. Runtime must be set to "full" or "stub"');})}function ya(a,b,d){function c(){let c=a.unboundExports;g===b&&(g=e(b,[...d]));let k=[];Array.prototype.slice.call(arguments).forEach((a,b)=>{let d=void 0;g.shouldCacheTypes&&g.cachedArgTypes[b]&&"ref"===g.cachedArgTypes[b].type?d=r[g.cachedArgTypes[b].key]:Object.keys(r).some(e=>r[e].isTypeFromReference(c,a)?(d=r[e],g.shouldCacheTypes&&(g.cachedArgTypes[b]=
{type:"ref",key:e}),!0):!1);d?k.push(d.getValueFromRef(c,a)):k.push(a)});f.apply(null,k)}let e=(a,b)=>{a=a[b[0]];b.shift();return 0<b.length?e(a,b):a},f=e(b,[...d]),g=b;c.shouldCacheTypes=!0;c.cachedArgTypes=[];return c}function za(a,b){function d(){var d=Array.prototype.slice.call(arguments);f===a.exports&&(f=a.exports[b]);let h=[],k=[];d.forEach((a,b)=>{if("number"===typeof a)h.push(a),f.shouldCacheTypes&&(f.cachedArgTypes[b]={type:"number"});else{var d=void 0;if(f.shouldCacheTypes&&f.cachedArgTypes[b]&&
"ref"===f.cachedArgTypes[b].type)d=r[f.cachedArgTypes[b].key];else if(Object.keys(r).some(c=>r[c].isTypeFromArgument(a)?(d=r[c],f.shouldCacheTypes&&(f.cachedArgTypes[b]={type:"ref",key:c}),!0):!1),!d)throw Error(`The argument, ${a}, is not a supported type by asbind`);h.push(d.getRef(c,a));k.push(b)}});let p=e.apply(null,h);k.forEach(a=>{c.__release(h[a])});d=void 0;if(void 0!==p){let a=void 0;f.shouldCacheTypes&&f.cachedReturnTypes[0]?"ref"===f.cachedReturnTypes[0].type&&(a=a=r[f.cachedReturnTypes[0].key]):
Object.keys(r).some(b=>r[b].isTypeFromReference(c,p)?(a=r[b],f.shouldCacheTypes&&(f.cachedReturnTypes[0]={type:"ref",key:b}),!0):!1);a?d=a.getValueFromRef(c,p):"number"===typeof p&&(d=p,f.shouldCacheTypes&&(f.cachedReturnTypes[0]={type:"number"}))}return d}let c=a.unboundExports,e=c[b];xa(c,e);let f=a.exports;d.shouldCacheTypes=!0;d.cachedArgTypes=[];d.cachedReturnTypes=[];return d}var oa=function(){},w={},F=[],R=[],pa="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,
ra=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,T=[],Z=[],Q=0,D=!1,K=!1,H=[];A(N.prototype,{setState:function(a,b){this.prevState||(this.prevState=this.state);this.state=A(A({},this.state),"function"===typeof a?a(this.state,this.props):a);b&&this._renderCallbacks.push(b);S(this)},forceUpdate:function(a){a&&this._renderCallbacks.push(a);J(this,2)},render:function(){}});let ta="undefined"!==typeof BigUint64Array,I=Symbol();var wa=la;let ma=["__alloc","__allocString","__retain","__release"],
r={STRING:{isTypeFromArgument:a=>"string"===typeof a,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_String_ID),getRef:(a,b)=>a.__retain(a.__allocString(b)),getValueFromRef:(a,b)=>a.__getString(b)},INT8ARRAY:{isTypeFromArgument:a=>a instanceof Int8Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Int8Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Int8Array_ID,b)),getValueFromRef:(a,b)=>a.__getInt8Array(b).slice()},UINT8ARRAY:{isTypeFromArgument:a=>a instanceof Uint8Array,
isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Uint8Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Uint8Array_ID,b)),getValueFromRef:(a,b)=>a.__getUint8Array(b).slice()},INT16ARRAY:{isTypeFromArgument:a=>a instanceof Int16Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Int16Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Int16Array_ID,b)),getValueFromRef:(a,b)=>a.__getInt16Array(b).slice()},UINT16ARRAY:{isTypeFromArgument:a=>a instanceof Uint16Array,
isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Uint16Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Uint16Array_ID,b)),getValueFromRef:(a,b)=>a.__getUint16Array(b).slice()},INT32ARRAY:{isTypeFromArgument:a=>a instanceof Int32Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Int32Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Int32Array_ID,b)),getValueFromRef:(a,b)=>a.__getInt32Array(b).slice()},UINT32ARRAY:{isTypeFromArgument:a=>a instanceof Uint32Array,
isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Uint32Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Uint32Array_ID,b)),getValueFromRef:(a,b)=>a.__getUint32Array(b).slice()},FLOAT32ARRAY:{isTypeFromArgument:a=>a instanceof Float32Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Float32Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Float32Array_ID,b)),getValueFromRef:(a,b)=>a.__getFloat32Array(b).slice()},FLOAT64ARRAY:{isTypeFromArgument:a=>a instanceof
Float64Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Float64Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Float64Array_ID,b)),getValueFromRef:(a,b)=>a.__getFloat64Array(b).slice()}},O=(a,b,d)=>{a&&Object.keys(a).forEach(c=>{"function"===typeof a[c]?d(a,b,c):"object"===typeof a[c]&&O(a[c],[...b,c],d)})};class Aa{constructor(){this.unboundExports={};this.exports={};this.importObject={}}async _instantiate(a,b){this.importObject=b;O(this.importObject,[],(a,b,e)=>{a[`__asbind_unbound_${e}`]=
a[e];a[e]=ya(this,this.importObject,[...b,e])});this.unboundExports=await va(a,this.importObject);this.exports={};Object.keys(this.unboundExports).forEach(a=>{var b;if(b="function"===typeof this.unboundExports[a])b=a.startsWith("__asbind")?!0:ma.includes(a)?!0:!1,b=!b;this.exports[a]=b?za(this,a):this.unboundExports[a]})}enableExportFunctionTypeCaching(){Object.keys(this.exports).forEach(a=>{this.exports[a].shouldCacheTypes=!0})}disableExportFunctionTypeCaching(){Object.keys(this.exports).forEach(a=>
{this.exports[a].shouldCacheTypes=!1})}enableImportFunctionTypeCaching(){O(this.importObject,[],(a,b,d)=>{a[d].shouldCacheTypes=!0})}disableImportFunctionTypeCaching(){O(this.importObject,[],(a,b,d)=>{a[d].shouldCacheTypes=!1})}}let na={version:"0.1.2",instantiate:async(a,b)=>{let d=new Aa;await d._instantiate(a,b);return d}};(function(a,b){void 0===b&&(b={});b=b.insertAt;if(a&&"undefined"!==typeof document){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");
c.type="text/css";"top"===b?d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c):d.appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}})('/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/* Sakura.css v1.0.0\n * ================\n * Minimal css theme.\n * Project: https://github.com/oxalorg/sakura\n */\n\n/* Body */\n\nhtml {\n  font-size: 62.5%;\n  font-family: serif; }\n\nbody {\n  font-size: 1.8rem;\n  line-height: 1.618;\n  max-width: 38em;\n  margin: auto;\n  color: #4a4a4a;\n  background-color: #f9f9f9;\n  padding: 13px; }\n\n@media (max-width: 684px) {\n  body {\n    font-size: 1.53rem; } }\n\n@media (max-width: 382px) {\n  body {\n    font-size: 1.35rem; } }\n\nh1, h2, h3, h4, h5, h6 {\n  line-height: 1.1;\n  font-family: Verdana, Geneva, sans-serif;\n  font-weight: 700;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\nh1 {\n  font-size: 2.35em; }\n\nh2 {\n  font-size: 2em; }\n\nh3 {\n  font-size: 1.75em; }\n\nh4 {\n  font-size: 1.5em; }\n\nh5 {\n  font-size: 1.25em; }\n\nh6 {\n  font-size: 1em; }\n\nsmall, sub, sup {\n  font-size: 75%; }\n\nhr {\n  border-color: #2c8898; }\n\na {\n  text-decoration: none;\n  color: #2c8898; }\n\na:hover {\n    color: #982c61;\n    border-bottom: 2px solid #4a4a4a; }\n\nul {\n  padding-left: 1.4em; }\n\nli {\n  margin-bottom: 0.4em; }\n\nblockquote {\n  font-style: italic;\n  margin-left: 1.5em;\n  padding-left: 1em;\n  border-left: 3px solid #2c8898; }\n\nimg {\n  max-width: 100%; }\n\n/* Pre and Code */\n\npre {\n  background-color: #f1f1f1;\n  display: block;\n  padding: 1em;\n  overflow-x: auto; }\n\ncode {\n  font-size: 0.9em;\n  padding: 0 0.5em;\n  background-color: #f1f1f1;\n  white-space: pre-wrap; }\n\npre > code {\n  padding: 0;\n  background-color: transparent;\n  white-space: pre; }\n\n/* Tables */\n\ntable {\n  text-align: justify;\n  width: 100%;\n  border-collapse: collapse; }\n\ntd, th {\n  padding: 0.5em;\n  border-bottom: 1px solid #f1f1f1; }\n\n/* Buttons, forms and input */\n\ninput, textarea {\n  border: 1px solid #4a4a4a; }\n\ninput:focus, textarea:focus {\n    border: 1px solid #2c8898; }\n\ntextarea {\n  width: 100%; }\n\n.button, button, input[type="submit"], input[type="reset"], input[type="button"] {\n  display: inline-block;\n  padding: 5px 10px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: #2c8898;\n  color: #f9f9f9;\n  border-radius: 1px;\n  border: 1px solid #2c8898;\n  cursor: pointer;\n  box-sizing: border-box; }\n\n.button[disabled], button[disabled], input[type="submit"][disabled], input[type="reset"][disabled], input[type="button"][disabled] {\n    cursor: default;\n    opacity: .5; }\n\n.button:focus, .button:hover, button:focus, button:hover, input[type="submit"]:focus, input[type="submit"]:hover, input[type="reset"]:focus, input[type="reset"]:hover, input[type="button"]:focus, input[type="button"]:hover {\n    background-color: #982c61;\n    border-color: #982c61;\n    color: #f9f9f9;\n    outline: 0; }\n\ntextarea, select, input[type] {\n  color: #4a4a4a;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  margin-bottom: 10px;\n  background-color: #f1f1f1;\n  border: 1px solid #f1f1f1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n\ntextarea:focus, select:focus, input[type]:focus {\n    border: 1px solid #2c8898;\n    outline: 0; }\n\nlabel, legend, fieldset {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\n\nhtml,\nbody {\n  padding: 0px;\n  margin: 0px;\n  height: 100vh;\n  max-width: none;\n}\n\ntextarea {\n  background-color: #fff;\n  color: #000;\n}\n\n#root,\n.app {\n  width: 100%;\n  height: 100%;\n}\n\n.app {\n  display: flex;\n  flex-direction: column;\n}\n\n.app > h1 {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.description {\n  width: 95%;\n  max-width: 950px;\n\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.link-row {\n  margin: 5px;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.editor-container {\n  flex-grow: 1;\n  overflow: hidden;\n}\n\n.editor {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.markdown {\n  min-width: 350px;\n  width: 45%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.markdown > h2 {\n  text-align: center;\n}\n\n.markdown textarea {\n  flex-grow: 1;\n}\n\n.result {\n  min-width: 350px;\n  width: 45%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.result > h2 {\n  text-align: center;\n}\n\n.result-html {\n  flex-grow: 1;\n  overflow: auto;\n\n  margin-bottom: 10px;\n}\n\ncode {\n  display: block;\n  white-space: pre-line;\n}\n\n.markdown textarea,\n.result .result-html {\n  padding: 5px;\n  border: 2px solid #000;\n}\n\n@media only screen and (max-width: 800px) {\n  .editor {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .editor-container {\n    overflow: initial;\n  }\n\n  .markdown,\n  .result {\n    min-width: 200px;\n    width: 90%;\n    height: 500px;\n\n    margin: 5px;\n  }\n}\n');
let Ba=na.instantiate(fetch("index.wasm"),{util:{consoleLog:a=>{console.log(a)}},env:{abort:()=>{console.error("AssemblyScript Import Object Aborted!")}}});class Ca extends N{constructor(){super();this.state={markdown:'# __as-bind__ ~~convert~~ **markdown** to     html\n\n      * Item 1\n      * Item 2\n      * Item 3\n\n      ===\n\n      ## And now we are back!\n\n      Here is a [link to the source code](https://github.com/torch2424/as-bind)\n\n      And an image of the author!\n\n      ![torch2424 avatar](https://avatars1.githubusercontent.com/u/1448289?s=460&v=4)\n\n      ---\n\n      ### More items\n\n      1. one\n      1. two\n      1. three\n\n      ===\n\n      #### Let\'s write some quotes and code and stuff\n\n      > WebAssembly is cool - Torch2424, 2019\n\n      `npm install as-bind`\n\n      ```\n        const someCode = "hello world!";\n        // Yup we writing some code in here\n      ```\n\n      # The End!\n',
html:""}}componentDidMount(){this.handleChange()}async handleChange(a){let b=this.state.markdown;a&&(b=a.target.value);a=(await Ba).exports.convertMarkdownToHTML(b);console.log(`
Input Markdown:

${b}

------

as-bind response:

${a}
`);this.setState({markdown:b,html:a})}render(){return q("div",{class:"app"},q("h1",null,"as-bind Markdown Parser Demo"),q("p",{class:"description"},"as-bind is a library to handle passing high-level data structures between AssemblyScript and JavaScript. This demo takes the input from the markdown text area, and passes the string directly to and exported function of the as-bind instantiated AssemblyScript module, and then binds the returned string to the result div. The input and response are logged into the JavaScript console."),
q("p",{class:"description"},q("b",null,"as-bind version:")," ",na.version),q("nav",{class:"link-row"},q("div",null,q("a",{href:"https://github.com/torch2424/as-bind"},"Source Code (Github)"))),q("div",{class:"editor-container"},q("div",{class:"editor"},q("div",{class:"markdown"},q("h2",null,"Markdown"),q("textarea",{value:this.state.markdown,onInput:a=>this.handleChange(a)})),q("div",{class:"result"},q("h2",null,"Result"),q("div",{class:"result-html",dangerouslySetInnerHTML:{__html:this.state.html}})))))}}
(function(a,b,d){return aa(d,a,{},!1,b,!1)})(q(Ca,null),document.querySelector("#root"))})();
