// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function e(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(r){return t.exec(r).slice(1)};function o(){for(var r="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(r=o+"/"+r,t="/"===o.charAt(0))}return(t?"/":"")+(r=e(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function i(r){var t=a(r),n="/"===y(r,-1);return(r=e(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function a(r){return"/"===r.charAt(0)}function c(){return i(g(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function u(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=o(r).substr(1),e=o(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),a=Math.min(n.length,i.length),c=a,u=0;u<a;u++)if(n[u]!==i[u]){c=u;break}var l=[];for(u=c;u<n.length;u++)l.push("..");return(l=l.concat(i.slice(c))).join("/")}function l(r){var e=n(r),t=e[0],o=e[1];return t||o?(o&&(o=o.substr(0,o.length-1)),t+o):"."}function s(r,e){var t=n(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function f(r){return n(r)[3]}var p={extname:f,basename:s,dirname:l,sep:"/",delimiter:":",relative:u,join:c,isAbsolute:a,normalize:i,resolve:o};function g(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var y="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},d=r(Object.freeze({__proto__:null,basename:s,default:p,delimiter:":",dirname:l,extname:f,isAbsolute:a,join:c,normalize:i,relative:u,resolve:o,sep:"/"}));var b=Object,h=/./,v="function"==typeof Object.defineProperty?Object.defineProperty:null;var w=Object.defineProperty;function m(r){return"number"==typeof r}function j(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function _(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+j(o):j(o)+r,n&&(r="-"+r)),r}var E=String.prototype.toLowerCase,A=String.prototype.toUpperCase;function S(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!m(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===A.call(r.specifier)?A.call(t):E.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var O=Math.abs,k=String.prototype.toLowerCase,x=String.prototype.toUpperCase,T=String.prototype.replace,F=/e\+(\d)$/,P=/e-(\d)$/,V=/^(\d+)$/,R=/^(\d+)e/,$=/\.0$/,C=/\.0*e/,I=/(\..*[^0])0*e/;function M(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!m(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":O(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=T.call(t,I,"$1e"),t=T.call(t,C,"e"),t=T.call(t,$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=T.call(t,F,"e+0$1"),t=T.call(t,P,"e-0$1"),r.alternate&&(t=T.call(t,V,"$1."),t=T.call(t,R,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===x.call(r.specifier)?x.call(t):k.call(t)}function B(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var L=String.fromCharCode,z=Array.isArray;function q(r){return r!=r}function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,o,i,a,c,u,l,s,f,p,g;if(!z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,q(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,q(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=S(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!q(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=q(i)?String(n.arg):L(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=M(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,f=n.width,p=n.padRight,g=void 0,(g=f-s.length)<0?s:s=p?s+B(g):B(g)+s)),a+=n.arg||"",c+=1}return a}var Z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=Z.exec(r);n;)(e=r.slice(o,Z.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),o=Z.lastIndex,n=Z.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function X(r){var e,t;if("string"!=typeof r)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var D,J=Object.prototype,Y=J.toString,H=J.__defineGetter__,K=J.__defineSetter__,Q=J.__lookupGetter__,rr=J.__lookupSetter__;D=function(){try{return v({},"x",{}),!0}catch(r){return!1}}()?w:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Y.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Q.call(r,e)||rr.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,e,t.get),a&&K&&K.call(r,e,t.set),r};var er=D;function tr(r,e,t){er(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function nr(r){return"boolean"==typeof r}var or="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ir(){return or&&"symbol"==typeof Symbol.toStringTag}var ar=Object.prototype.toString;var cr=Object.prototype.hasOwnProperty;var ur,lr="function"==typeof Symbol?Symbol:void 0,sr="function"==typeof lr?lr.toStringTag:"";ur=ir()?function(r){var e,t,n,o,i;if(null==r)return ar.call(r);t=r[sr],i=sr,e=null!=(o=r)&&cr.call(o,i);try{r[sr]=void 0}catch(e){return ar.call(r)}return n=ar.call(r),e?r[sr]=t:delete r[sr],n}:function(r){return ar.call(r)};var fr=ur,pr=Boolean,gr=Boolean.prototype.toString;var yr=ir();function dr(r){return"object"==typeof r&&(r instanceof pr||(yr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===fr(r)))}function br(r){return nr(r)||dr(r)}tr(br,"isPrimitive",nr),tr(br,"isObject",dr);var hr="object"==typeof self?self:null,vr="object"==typeof window?window:null,wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},mr="object"==typeof wr?wr:null,jr="object"==typeof globalThis?globalThis:null;var _r=function(r){if(arguments.length){if(!nr(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(jr)return jr;if(hr)return hr;if(vr)return vr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Er=_r.document&&_r.document.childNodes,Ar=Int8Array;function Sr(){return/^\s*function\s*([^(]*)/i}var Or,kr=/^\s*function\s*([^(]*)/i;tr(Sr,"REGEXP",kr),Or=Array.isArray?Array.isArray:function(r){return"[object Array]"===fr(r)};var xr=Or;function Tr(r){return null!==r&&"object"==typeof r}var Fr=function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!xr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Tr);function Pr(r){var e,t,n,o;if(("Object"===(t=fr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=kr.exec(n.toString()))return e[1]}return Tr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}tr(Tr,"isObjectLikeArray",Fr);var Vr="function"==typeof h||"object"==typeof Ar||"function"==typeof Er?function(r){return Pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Pr(r).toLowerCase():e};var Rr,$r,Cr=Object.getPrototypeOf;$r=Object.getPrototypeOf,Rr="function"===Vr($r)?Cr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===fr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ir=Rr;function Mr(r){return null==r?null:(r=b(r),Ir(r))}function Br(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===fr(r))return!0;r=Mr(r)}return!1}var Lr=17976931348623157e292;function zr(r){return Math.abs(r)}function qr(r){return r*r}var Gr=Math.sqrt,Nr="function"==typeof Float64Array;var Zr="function"==typeof Float64Array?Float64Array:null;var Wr,Ur="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,e;if("function"!=typeof Zr)return!1;try{r=function(r){return Nr&&r instanceof Float64Array||"[object Float64Array]"===fr(r)}(e=new Zr([1,3.14,-3.14,NaN]))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Xr=Wr;var Dr=14916681462400413e-170,Jr=1997919072202235e131,Yr=44989137945431964e145,Hr=11113793747425387e-178;function Kr(r,e,t,n){var o,i,a,c,u,l,s,f,p,g,y,d,b,h,v;if(r<=0)return 0;for(v=0,a=new Xr((h=e).buffer,h.byteOffset+h.BYTES_PER_ELEMENT*v,2*(h.length-v)),d=2*t,y=2*n,o=!0,i=0,c=0,u=0,l=0,p=1,b=0;b<r;b++)(g=zr(a[y]))>Jr?(c+=qr(g*Hr),o=!1):g<Dr?o&&(l+=qr(g*Yr)):u+=g*g,(g=zr(a[y+1]))>Jr?(c+=qr(g*Hr),o=!1):g<Dr?o&&(l+=qr(g*Yr)):u+=g*g,y+=d;return c>0?((u>0||u>Lr||u!=u)&&(c+=u*Hr*Hr),p=1/Hr,i=c):l>0?u>0||u>Lr||u!=u?(u=Gr(u),(l=Gr(l)/Yr)>u?(f=u,s=l):(f=l,s=u),p=1,i=s*s*(1+qr(f/s))):(p=1/Yr,i=l):(p=1,i=u),Gr(i)*p}function Qr(r,e,t){return Kr(r,e,t,function(r,e){return e>0?0:(1-r)*e}(r,t))}tr(Qr,"ndarray",Kr);var re,ee=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Br(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,d.join)("/home/runner/work/blas-base-dznrm2/blas-base-dznrm2/lib","./native.js")),te=re=Br(ee)?Qr:ee;const{ndarray:ne}=re;export{te as default,ne as ndarray};
//# sourceMappingURL=mod.js.map
