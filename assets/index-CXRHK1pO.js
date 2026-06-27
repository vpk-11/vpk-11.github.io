(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rd={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function e1(){if(__)return Vo;__=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var v_;function t1(){return v_||(v_=1,Rd.exports=e1()),Rd.exports}var H=t1(),wd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function n1(){if(x_)return rt;x_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,y={};function S(P,Q,xe){this.props=P,this.context=Q,this.refs=y,this.updater=xe||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function R(){}R.prototype=S.prototype;function N(P,Q,xe){this.props=P,this.context=Q,this.refs=y,this.updater=xe||b}var U=N.prototype=new R;U.constructor=N,D(U,S.prototype),U.isPureReactComponent=!0;var G=Array.isArray;function L(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(P,Q,xe){var Ae=xe.ref;return{$$typeof:r,type:P,key:Q,ref:Ae!==void 0?Ae:null,props:xe}}function Z(P,Q){return z(P.type,Q,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function J(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xe){return Q[xe]})}var fe=/\/+/g;function pe(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):Q.toString(36)}function q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Q,xe,Ae,De){var se=typeof P;(se==="undefined"||se==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(se){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case r:case e:Se=!0;break;case x:return Se=P._init,O(Se(P._payload),Q,xe,Ae,De)}}if(Se)return De=De(P),Se=Ae===""?"."+pe(P,0):Ae,G(De)?(xe="",Se!=null&&(xe=Se.replace(fe,"$&/")+"/"),O(De,Q,xe,"",function($e){return $e})):De!=null&&(V(De)&&(De=Z(De,xe+(De.key==null||P&&P.key===De.key?"":(""+De.key).replace(fe,"$&/")+"/")+Se)),Q.push(De)),1;Se=0;var be=Ae===""?".":Ae+":";if(G(P))for(var He=0;He<P.length;He++)Ae=P[He],se=be+pe(Ae,He),Se+=O(Ae,Q,xe,se,De);else if(He=M(P),typeof He=="function")for(P=He.call(P),He=0;!(Ae=P.next()).done;)Ae=Ae.value,se=be+pe(Ae,He++),Se+=O(Ae,Q,xe,se,De);else if(se==="object"){if(typeof P.then=="function")return O(q(P),Q,xe,Ae,De);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Se}function F(P,Q,xe){if(P==null)return P;var Ae=[],De=0;return O(P,Ae,"","",function(se){return Q.call(xe,se,De++)}),Ae}function oe(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(xe){(P._status===0||P._status===-1)&&(P._status=1,P._result=xe)},function(xe){(P._status===0||P._status===-1)&&(P._status=2,P._result=xe)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var ge=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Me={map:F,forEach:function(P,Q,xe){F(P,function(){Q.apply(this,arguments)},xe)},count:function(P){var Q=0;return F(P,function(){Q++}),Q},toArray:function(P){return F(P,function(Q){return Q})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rt.Activity=_,rt.Children=Me,rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(P,Q,xe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ae=D({},P.props),De=P.key;if(Q!=null)for(se in Q.key!==void 0&&(De=""+Q.key),Q)!T.call(Q,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&Q.ref===void 0||(Ae[se]=Q[se]);var se=arguments.length-2;if(se===1)Ae.children=xe;else if(1<se){for(var Se=Array(se),be=0;be<se;be++)Se[be]=arguments[be+2];Ae.children=Se}return z(P.type,De,Ae)},rt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,Q,xe){var Ae,De={},se=null;if(Q!=null)for(Ae in Q.key!==void 0&&(se=""+Q.key),Q)T.call(Q,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(De[Ae]=Q[Ae]);var Se=arguments.length-2;if(Se===1)De.children=xe;else if(1<Se){for(var be=Array(Se),He=0;He<Se;He++)be[He]=arguments[He+2];De.children=be}if(P&&P.defaultProps)for(Ae in Se=P.defaultProps,Se)De[Ae]===void 0&&(De[Ae]=Se[Ae]);return z(P,se,De)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:h,render:P}},rt.isValidElement=V,rt.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:oe}},rt.memo=function(P,Q){return{$$typeof:p,type:P,compare:Q===void 0?null:Q}},rt.startTransition=function(P){var Q=I.T,xe={};I.T=xe;try{var Ae=P(),De=I.S;De!==null&&De(xe,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,ge)}catch(se){ge(se)}finally{Q!==null&&xe.types!==null&&(Q.types=xe.types),I.T=Q}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(P){return I.H.use(P)},rt.useActionState=function(P,Q,xe){return I.H.useActionState(P,Q,xe)},rt.useCallback=function(P,Q){return I.H.useCallback(P,Q)},rt.useContext=function(P){return I.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,Q){return I.H.useDeferredValue(P,Q)},rt.useEffect=function(P,Q){return I.H.useEffect(P,Q)},rt.useEffectEvent=function(P){return I.H.useEffectEvent(P)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(P,Q,xe){return I.H.useImperativeHandle(P,Q,xe)},rt.useInsertionEffect=function(P,Q){return I.H.useInsertionEffect(P,Q)},rt.useLayoutEffect=function(P,Q){return I.H.useLayoutEffect(P,Q)},rt.useMemo=function(P,Q){return I.H.useMemo(P,Q)},rt.useOptimistic=function(P,Q){return I.H.useOptimistic(P,Q)},rt.useReducer=function(P,Q,xe){return I.H.useReducer(P,Q,xe)},rt.useRef=function(P){return I.H.useRef(P)},rt.useState=function(P){return I.H.useState(P)},rt.useSyncExternalStore=function(P,Q,xe){return I.H.useSyncExternalStore(P,Q,xe)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.0",rt}var S_;function hu(){return S_||(S_=1,wd.exports=n1()),wd.exports}var nt=hu(),Dd={exports:{}},ko={},Nd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function i1(){return y_||(y_=1,(function(r){function e(O,F){var oe=O.length;O.push(F);e:for(;0<oe;){var ge=oe-1>>>1,Me=O[ge];if(0<l(Me,F))O[ge]=F,O[oe]=Me,oe=ge;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var F=O[0],oe=O.pop();if(oe!==F){O[0]=oe;e:for(var ge=0,Me=O.length,P=Me>>>1;ge<P;){var Q=2*(ge+1)-1,xe=O[Q],Ae=Q+1,De=O[Ae];if(0>l(xe,oe))Ae<Me&&0>l(De,xe)?(O[ge]=De,O[Ae]=oe,ge=Ae):(O[ge]=xe,O[Q]=oe,ge=Q);else if(Ae<Me&&0>l(De,oe))O[ge]=De,O[Ae]=oe,ge=Ae;else break e}}return F}function l(O,F){var oe=O.sortIndex-F.sortIndex;return oe!==0?oe:O.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,_=null,g=3,M=!1,b=!1,D=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=O)s(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(p)}}function G(O){if(D=!1,U(O),!b)if(i(m)!==null)b=!0,L||(L=!0,J());else{var F=i(p);F!==null&&q(G,F.startTime-O)}}var L=!1,I=-1,T=5,z=-1;function Z(){return y?!0:!(r.unstable_now()-z<T)}function V(){if(y=!1,L){var O=r.unstable_now();z=O;var F=!0;try{e:{b=!1,D&&(D=!1,R(I),I=-1),M=!0;var oe=g;try{t:{for(U(O),_=i(m);_!==null&&!(_.expirationTime>O&&Z());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,g=_.priorityLevel;var Me=ge(_.expirationTime<=O);if(O=r.unstable_now(),typeof Me=="function"){_.callback=Me,U(O),F=!0;break t}_===i(m)&&s(m),U(O)}else s(m);_=i(m)}if(_!==null)F=!0;else{var P=i(p);P!==null&&q(G,P.startTime-O),F=!1}}break e}finally{_=null,g=oe,M=!1}F=void 0}}finally{F?J():L=!1}}}var J;if(typeof N=="function")J=function(){N(V)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=V,J=function(){pe.postMessage(null)}}else J=function(){S(V,0)};function q(O,F){I=S(function(){O(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var oe=g;g=F;try{return O()}finally{g=oe}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var oe=g;g=O;try{return F()}finally{g=oe}},r.unstable_scheduleCallback=function(O,F,oe){var ge=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?ge+oe:ge):oe=ge,O){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=oe+Me,O={id:x++,callback:F,priorityLevel:O,startTime:oe,expirationTime:Me,sortIndex:-1},oe>ge?(O.sortIndex=oe,e(p,O),i(m)===null&&O===i(p)&&(D?(R(I),I=-1):D=!0,q(G,oe-ge))):(O.sortIndex=Me,e(m,O),b||M||(b=!0,L||(L=!0,J()))),O},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(O){var F=g;return function(){var oe=g;g=F;try{return O.apply(this,arguments)}finally{g=oe}}}})(Ud)),Ud}var M_;function a1(){return M_||(M_=1,Nd.exports=i1()),Nd.exports}var Ld={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function r1(){if(E_)return Ln;E_=1;var r=hu();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Ln.flushSync=function(m){var p=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=x,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.0",Ln}var b_;function s1(){if(b_)return Ld.exports;b_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ld.exports=r1(),Ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function o1(){if(T_)return ko;T_=1;var r=a1(),e=hu(),i=s1();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,o=f;break}if(C===o){v=!0,o=u,a=f;break}C=C.sibling}if(!v){for(C=f.child;C;){if(C===a){v=!0,a=f,o=u;break}if(C===o){v=!0,o=f,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case G:return"Suspense";case L:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var q=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},ge=[],Me=-1;function P(t){return{current:t}}function Q(t){0>Me||(t.current=ge[Me],ge[Me]=null,Me--)}function xe(t,n){Me++,ge[Me]=t.current,t.current=n}var Ae=P(null),De=P(null),se=P(null),Se=P(null);function be(t,n){switch(xe(se,n),xe(De,t),xe(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Hg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Hg(n),t=Gg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ae),xe(Ae,t)}function He(){Q(Ae),Q(De),Q(se)}function $e(t){t.memoizedState!==null&&xe(Se,t);var n=Ae.current,a=Gg(n,t.type);n!==a&&(xe(De,t),xe(Ae,a))}function Qe(t){De.current===t&&(Q(Ae),Q(De)),Se.current===t&&(Q(Se),Fo._currentValue=oe)}var Xt,dt;function vt(t){if(Xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+dt}var Nt=!1;function ct(t,n){if(!t||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var re=le}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(le){re=le}t.call(ve.prototype)}}else{try{throw Error()}catch(le){re=le}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],C=f[1];if(v&&C){var B=v.split(`
`),ee=C.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ee.length)for(o=B.length-1,u=ee.length-1;1<=o&&0<=u&&B[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ee[u]){var de=`
`+B[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function rn(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return vt("Activity");default:return""}}function qt(t){try{var n="",a=null;do n+=rn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var En=Object.prototype.hasOwnProperty,W=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,ht=r.unstable_shouldYield,Bt=r.unstable_requestPaint,Ce=r.unstable_now,Kt=r.unstable_getCurrentPriorityLevel,w=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,_e=r.unstable_LowPriority,Ee=r.unstable_IdlePriority,Re=r.log,Le=r.unstable_setDisableYieldValue,ce=null,ue=null;function Oe(t){if(typeof Re=="function"&&Le(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(ce,t)}catch{}}var Pe=Math.clz32?Math.clz32:it,Ne=Math.log,we=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Ne(t)/we|0)|0}var at=256,pt=262144,k=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Te(o):(v&=C,v!==0?u=Te(v):a||(a=C&~t,a!==0&&(u=Te(a))))):(C=o&~f,C!==0?u=Te(C):v!==0?u=Te(v):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function je(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function et(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,o,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(a=v&~a;0<a;){var de=31-Pe(a),ve=1<<de;C[de]=0,B[de]=-1;var re=ee[de];if(re!==null)for(ee[de]=null,de=0;de<re.length;de++){var le=re[de];le!==null&&(le.lane&=-536870913)}a&=~ve}o!==0&&Rt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Rt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ci(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Zn(t,n){var a=n&-n;return a=(a&42)!==0?1:hr(a),(a&(t.suspendedLanes|n))!==0?0:a}function hr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ks(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:u_(t.type))}function Qs(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Nn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Nn,bn="__reactProps$"+Nn,Zi="__reactContainer$"+Nn,Ra="__reactEvents$"+Nn,cl="__reactListeners$"+Nn,Yr="__reactHandles$"+Nn,Js="__reactResources$"+Nn,wa="__reactMarker$"+Nn;function $s(t){delete t[sn],delete t[bn],delete t[Ra],delete t[cl],delete t[Yr]}function Da(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Zi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Yg(t);t!==null;){if(a=t[sn])return a;t=Yg(t)}return n}t=a,a=t.parentNode}return null}function Na(t){if(t=t[sn]||t[Zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function pr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ua(t){var n=t[Js];return n||(n=t[Js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(t){t[wa]=!0}var ul=new Set,A={};function j(t,n){ae(t,n),ae(t+"Capture",n)}function ae(t,n){for(A[t]=n,t=0;t<n.length;t++)ul.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},ze={};function Ve(t){return En.call(ze,t)?!0:En.call(ne,t)?!1:te.test(t)?ze[t]=!0:(ne[t]=!0,!1)}function Ie(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tt(t){if(!t._valueTracker){var n=ot(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ut=/[\n"\\]/g;function Lt(t){return t.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,f,v,C){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ze(n)):t.value!==""+Ze(n)&&(t.value=""+Ze(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?mt(t,v,Ze(n)):a!=null?mt(t,v,Ze(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Ze(C):t.removeAttribute("name")}function Un(t,n,a,o,u,f,v,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Tt(t);return}a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Tt(t)}function mt(t,n,a){n==="number"&&Wt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Kn(t,n,a){if(n!=null&&(n=""+Ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ze(a):""}function Ei(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Tt(t)}function Qn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ot=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ot.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Jt(t,f,n[f])}function Dt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),La=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mr(t){return La.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var bu=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zr=null,Kr=null;function Bp(t){var n=Na(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[bn]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":Kn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var Au=!1;function Hp(t,n,a){if(Au)return t(n,a);Au=!0;try{var o=t(n);return o}finally{if(Au=!1,(Zr!==null||Kr!==null)&&(Ql(),Zr&&(n=Zr,t=Kr,Kr=Zr=null,Bp(n),t)))for(n=0;n<t.length;n++)Bp(t[n])}}function eo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(Qi)try{var to={};Object.defineProperty(to,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Cu=!1}var Oa=null,Ru=null,fl=null;function Gp(){if(fl)return fl;var t,n=Ru,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return fl=u.slice(t,1<o?1-o:void 0)}function dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function Vp(){return!1}function Hn(t){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?hl:Vp,this.isPropagationStopped=Vp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Hn(gr),no=_({},gr,{view:0,detail:0}),Jx=Hn(no),wu,Du,io,ml=_({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(wu=t.screenX-io.screenX,Du=t.screenY-io.screenY):Du=wu=0,io=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),kp=Hn(ml),$x=_({},ml,{dataTransfer:0}),eS=Hn($x),tS=_({},no,{relatedTarget:0}),Nu=Hn(tS),nS=_({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=Hn(nS),aS=_({},gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=Hn(aS),sS=_({},gr,{data:0}),Xp=Hn(sS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=cS[t])?!!n[t]:!1}function Uu(){return uS}var fS=_({},no,{key:function(t){if(t.key){var n=oS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dS=Hn(fS),hS=_({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Hn(hS),pS=_({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),mS=Hn(pS),gS=_({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=Hn(gS),vS=_({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=Hn(vS),SS=_({},gr,{newState:0,oldState:0}),yS=Hn(SS),MS=[9,13,27,32],Lu=Qi&&"CompositionEvent"in window,ao=null;Qi&&"documentMode"in document&&(ao=document.documentMode);var ES=Qi&&"TextEvent"in window&&!ao,jp=Qi&&(!Lu||ao&&8<ao&&11>=ao),qp=" ",Yp=!1;function Zp(t,n){switch(t){case"keyup":return MS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function bS(t,n){switch(t){case"compositionend":return Kp(n);case"keypress":return n.which!==32?null:(Yp=!0,qp);case"textInput":return t=n.data,t===qp&&Yp?null:t;default:return null}}function TS(t,n){if(Qr)return t==="compositionend"||!Lu&&Zp(t,n)?(t=Gp(),fl=Ru=Oa=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jp&&n.locale!=="ko"?null:n.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!AS[t.type]:n==="textarea"}function Jp(t,n,a,o){Zr?Kr?Kr.push(o):Kr=[o]:Zr=o,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ro=null,so=null;function CS(t){Og(t,0)}function gl(t){var n=pr(t);if(Qt(n))return t}function $p(t,n){if(t==="change")return n}var em=!1;if(Qi){var Ou;if(Qi){var Pu="oninput"in document;if(!Pu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Pu=typeof tm.oninput=="function"}Ou=Pu}else Ou=!1;em=Ou&&(!document.documentMode||9<document.documentMode)}function nm(){ro&&(ro.detachEvent("onpropertychange",im),so=ro=null)}function im(t){if(t.propertyName==="value"&&gl(so)){var n=[];Jp(n,so,t,Tu(t)),Hp(CS,n)}}function RS(t,n,a){t==="focusin"?(nm(),ro=n,so=a,ro.attachEvent("onpropertychange",im)):t==="focusout"&&nm()}function wS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(so)}function DS(t,n){if(t==="click")return gl(n)}function NS(t,n){if(t==="input"||t==="change")return gl(n)}function US(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:US;function oo(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!En.call(n,u)||!Jn(t[u],n[u]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rm(t,n){var a=am(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=am(a)}}function sm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function om(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Wt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Wt(t.document)}return n}function Iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var LS=Qi&&"documentMode"in document&&11>=document.documentMode,Jr=null,zu=null,lo=null,Fu=!1;function lm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||Jr==null||Jr!==Wt(o)||(o=Jr,"selectionStart"in o&&Iu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=ac(zu,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Jr)))}function _r(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $r={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Bu={},cm={};Qi&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function vr(t){if(Bu[t])return Bu[t];if(!$r[t])return t;var n=$r[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cm)return Bu[t]=n[a];return t}var um=vr("animationend"),fm=vr("animationiteration"),dm=vr("animationstart"),OS=vr("transitionrun"),PS=vr("transitionstart"),IS=vr("transitioncancel"),hm=vr("transitionend"),pm=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function Ti(t,n){pm.set(t,n),j(n,[t])}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],es=0,Gu=0;function vl(){for(var t=es,n=Gu=es=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&mm(a,u,f)}}function xl(t,n,a,o){ui[es++]=t,ui[es++]=n,ui[es++]=a,ui[es++]=o,Gu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Vu(t,n,a,o){return xl(t,n,a,o),Sl(t)}function xr(t,n){return xl(t,null,null,n),Sl(t)}function mm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Sl(t){if(50<No)throw No=0,Jf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ts={};function zS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new zS(t,n,a,o)}function ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,f){var v=0;if(o=t,typeof t=="function")ku(t)&&(v=1);else if(typeof t=="string")v=Vy(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=$n(31,a,n,u),t.elementType=z,t.lanes=f,t;case D:return Sr(a.children,u,f,n);case y:v=8,u|=24;break;case S:return t=$n(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case G:return t=$n(13,a,n,u),t.elementType=G,t.lanes=f,t;case L:return t=$n(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:v=10;break e;case R:v=9;break e;case U:v=11;break e;case I:v=14;break e;case T:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=$n(v,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Sr(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function Xu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function _m(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Wu(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=vm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qt(n)},vm.set(t,n),n)}return{value:t,source:n,stack:qt(n)}}var ns=[],is=0,Ml=null,co=0,di=[],hi=0,Pa=null,zi=1,Fi="";function $i(t,n){ns[is++]=co,ns[is++]=Ml,Ml=t,co=n}function xm(t,n,a){di[hi++]=zi,di[hi++]=Fi,di[hi++]=Pa,Pa=t;var o=zi;t=Fi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var f=32-Pe(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,zi=1<<32-Pe(n)+u|a<<u|o,Fi=f+t}else zi=1<<f|a<<u|o,Fi=t}function ju(t){t.return!==null&&($i(t,1),xm(t,1,0))}function qu(t){for(;t===Ml;)Ml=ns[--is],ns[is]=null,co=ns[--is],ns[is]=null;for(;t===Pa;)Pa=di[--hi],di[hi]=null,Fi=di[--hi],di[hi]=null,zi=di[--hi],di[hi]=null}function Sm(t,n){di[hi++]=zi,di[hi++]=Fi,di[hi++]=Pa,zi=n.id,Fi=n.overflow,Pa=t}var Tn=null,Yt=null,yt=!1,Ia=null,pi=!1,Yu=Error(s(519));function za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(fi(n,t)),Yu}function ym(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[bn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)_t(Lo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Fg(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||za(t,!0)}function Mm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Tn=Tn.return}}function as(t){if(t!==Tn)return!1;if(!yt)return Mm(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||hd(t.type,t.memoizedProps)),a=!a),a&&Yt&&za(t),Mm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=qg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=qg(t)}else n===27?(n=Yt,Qa(t.type)?(t=vd,vd=null,Yt=t):Yt=n):Yt=Tn?gi(t.stateNode.nextSibling):null;return!0}function yr(){Yt=Tn=null,yt=!1}function Zu(){var t=Ia;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Ia=null),t}function uo(t){Ia===null?Ia=[t]:Ia.push(t)}var Ku=P(null),Mr=null,ea=null;function Fa(t,n,a){xe(Ku,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=Ku.current,Q(Ku)}function Qu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ju(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var B=0;B<n.length;B++)if(C.context===n[B]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Qu(f.return,a,t),o||(v=null);break e}f=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Qu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function rs(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;Jn(u.pendingProps.value,v.value)||(t!==null?t.push(C):t=[C])}}else if(u===Se.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fo):t=[Fo])}u=u.return}t!==null&&Ju(n,t,a,o),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){Mr=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Em(Mr,t)}function bl(t,n){return Mr===null&&Er(t),Em(t,n)}function Em(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(t===null)throw Error(s(308));ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ea=ea.next=n;return a}var FS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},BS=r.unstable_scheduleCallback,HS=r.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new FS,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&BS(HS,function(){t.controller.abort()})}var ho=null,ef=0,ss=0,os=null;function GS(t,n){if(ho===null){var a=ho=[];ef=0,ss=ad(),os={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ef++,n.then(bm,bm),n}function bm(){if(--ef===0&&ho!==null){os!==null&&(os.status="fulfilled");var t=ho;ho=null,ss=0,os=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function VS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Tm=O.S;O.S=function(t,n){lg=Ce(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&GS(t,n),Tm!==null&&Tm(t,n)};var br=P(null);function tf(){var t=br.current;return t!==null?t:jt.pooledCache}function Tl(t,n){n===null?xe(br,br.current):xe(br,n.pool)}function Am(){var t=tf();return t===null?null:{parent:fn._currentValue,pool:t}}var ls=Error(s(460)),nf=Error(s(474)),Al=Error(s(542)),Cl={then:function(){}};function Cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dm(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dm(t),t}throw Ar=n,ls}}function Tr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ar=a,ls):a}}var Ar=null;function wm(){if(Ar===null)throw Error(s(459));var t=Ar;return Ar=null,t}function Dm(t){if(t===ls||t===Al)throw Error(s(483))}var cs=null,po=0;function Rl(t){var n=po;return po+=1,cs===null&&(cs=[]),Rm(cs,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Nm(t){function n(Y,X){if(t){var $=Y.deletions;$===null?(Y.deletions=[X],Y.flags|=16):$.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=Ji(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<X?(Y.flags|=67108866,X):$):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function v(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function C(Y,X,$,me){return X===null||X.tag!==6?(X=Xu($,Y.mode,me),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function B(Y,X,$,me){var Ke=$.type;return Ke===D?de(Y,X,$.props.children,me,$.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===T&&Tr(Ke)===X.type)?(X=u(X,$.props),mo(X,$),X.return=Y,X):(X=yl($.type,$.key,$.props,null,Y.mode,me),mo(X,$),X.return=Y,X)}function ee(Y,X,$,me){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Wu($,Y.mode,me),X.return=Y,X):(X=u(X,$.children||[]),X.return=Y,X)}function de(Y,X,$,me,Ke){return X===null||X.tag!==7?(X=Sr($,Y.mode,me,Ke),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function ve(Y,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Xu(""+X,Y.mode,$),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return $=yl(X.type,X.key,X.props,null,Y.mode,$),mo($,X),$.return=Y,$;case b:return X=Wu(X,Y.mode,$),X.return=Y,X;case T:return X=Tr(X),ve(Y,X,$)}if(q(X)||J(X))return X=Sr(X,Y.mode,$,null),X.return=Y,X;if(typeof X.then=="function")return ve(Y,Rl(X),$);if(X.$$typeof===N)return ve(Y,bl(Y,X),$);wl(Y,X)}return null}function re(Y,X,$,me){var Ke=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ke!==null?null:C(Y,X,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Ke?B(Y,X,$,me):null;case b:return $.key===Ke?ee(Y,X,$,me):null;case T:return $=Tr($),re(Y,X,$,me)}if(q($)||J($))return Ke!==null?null:de(Y,X,$,me,null);if(typeof $.then=="function")return re(Y,X,Rl($),me);if($.$$typeof===N)return re(Y,X,bl(Y,$),me);wl(Y,$)}return null}function le(Y,X,$,me,Ke){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get($)||null,C(X,Y,""+me,Ke);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case M:return Y=Y.get(me.key===null?$:me.key)||null,B(X,Y,me,Ke);case b:return Y=Y.get(me.key===null?$:me.key)||null,ee(X,Y,me,Ke);case T:return me=Tr(me),le(Y,X,$,me,Ke)}if(q(me)||J(me))return Y=Y.get($)||null,de(X,Y,me,Ke,null);if(typeof me.then=="function")return le(Y,X,$,Rl(me),Ke);if(me.$$typeof===N)return le(Y,X,$,bl(X,me),Ke);wl(X,me)}return null}function We(Y,X,$,me){for(var Ke=null,At=null,qe=X,ut=X=0,St=null;qe!==null&&ut<$.length;ut++){qe.index>ut?(St=qe,qe=null):St=qe.sibling;var Ct=re(Y,qe,$[ut],me);if(Ct===null){qe===null&&(qe=St);break}t&&qe&&Ct.alternate===null&&n(Y,qe),X=f(Ct,X,ut),At===null?Ke=Ct:At.sibling=Ct,At=Ct,qe=St}if(ut===$.length)return a(Y,qe),yt&&$i(Y,ut),Ke;if(qe===null){for(;ut<$.length;ut++)qe=ve(Y,$[ut],me),qe!==null&&(X=f(qe,X,ut),At===null?Ke=qe:At.sibling=qe,At=qe);return yt&&$i(Y,ut),Ke}for(qe=o(qe);ut<$.length;ut++)St=le(qe,Y,ut,$[ut],me),St!==null&&(t&&St.alternate!==null&&qe.delete(St.key===null?ut:St.key),X=f(St,X,ut),At===null?Ke=St:At.sibling=St,At=St);return t&&qe.forEach(function(nr){return n(Y,nr)}),yt&&$i(Y,ut),Ke}function Je(Y,X,$,me){if($==null)throw Error(s(151));for(var Ke=null,At=null,qe=X,ut=X=0,St=null,Ct=$.next();qe!==null&&!Ct.done;ut++,Ct=$.next()){qe.index>ut?(St=qe,qe=null):St=qe.sibling;var nr=re(Y,qe,Ct.value,me);if(nr===null){qe===null&&(qe=St);break}t&&qe&&nr.alternate===null&&n(Y,qe),X=f(nr,X,ut),At===null?Ke=nr:At.sibling=nr,At=nr,qe=St}if(Ct.done)return a(Y,qe),yt&&$i(Y,ut),Ke;if(qe===null){for(;!Ct.done;ut++,Ct=$.next())Ct=ve(Y,Ct.value,me),Ct!==null&&(X=f(Ct,X,ut),At===null?Ke=Ct:At.sibling=Ct,At=Ct);return yt&&$i(Y,ut),Ke}for(qe=o(qe);!Ct.done;ut++,Ct=$.next())Ct=le(qe,Y,ut,Ct.value,me),Ct!==null&&(t&&Ct.alternate!==null&&qe.delete(Ct.key===null?ut:Ct.key),X=f(Ct,X,ut),At===null?Ke=Ct:At.sibling=Ct,At=Ct);return t&&qe.forEach(function($y){return n(Y,$y)}),yt&&$i(Y,ut),Ke}function Vt(Y,X,$,me){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var Ke=$.key;X!==null;){if(X.key===Ke){if(Ke=$.type,Ke===D){if(X.tag===7){a(Y,X.sibling),me=u(X,$.props.children),me.return=Y,Y=me;break e}}else if(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===T&&Tr(Ke)===X.type){a(Y,X.sibling),me=u(X,$.props),mo(me,$),me.return=Y,Y=me;break e}a(Y,X);break}else n(Y,X);X=X.sibling}$.type===D?(me=Sr($.props.children,Y.mode,me,$.key),me.return=Y,Y=me):(me=yl($.type,$.key,$.props,null,Y.mode,me),mo(me,$),me.return=Y,Y=me)}return v(Y);case b:e:{for(Ke=$.key;X!==null;){if(X.key===Ke)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Y,X.sibling),me=u(X,$.children||[]),me.return=Y,Y=me;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}me=Wu($,Y.mode,me),me.return=Y,Y=me}return v(Y);case T:return $=Tr($),Vt(Y,X,$,me)}if(q($))return We(Y,X,$,me);if(J($)){if(Ke=J($),typeof Ke!="function")throw Error(s(150));return $=Ke.call($),Je(Y,X,$,me)}if(typeof $.then=="function")return Vt(Y,X,Rl($),me);if($.$$typeof===N)return Vt(Y,X,bl(Y,$),me);wl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Y,X.sibling),me=u(X,$),me.return=Y,Y=me):(a(Y,X),me=Xu($,Y.mode,me),me.return=Y,Y=me),v(Y)):a(Y,X)}return function(Y,X,$,me){try{po=0;var Ke=Vt(Y,X,$,me);return cs=null,Ke}catch(qe){if(qe===ls||qe===Al)throw qe;var At=$n(29,qe,null,Y.mode);return At.lanes=me,At.return=Y,At}finally{}}}var Cr=Nm(!0),Um=Nm(!1),Ba=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(t),mm(t,null,a),n}return xl(t,o,n,a),Sl(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ci(t,a)}}function sf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var of=!1;function _o(){if(of){var t=os;if(t!==null)throw t}}function vo(t,n,a,o){of=!1;var u=t.updateQueue;Ba=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var B=C,ee=B.next;B.next=null,v===null?f=ee:v.next=ee,v=B;var de=t.alternate;de!==null&&(de=de.updateQueue,C=de.lastBaseUpdate,C!==v&&(C===null?de.firstBaseUpdate=ee:C.next=ee,de.lastBaseUpdate=B))}if(f!==null){var ve=u.baseState;v=0,de=ee=B=null,C=f;do{var re=C.lane&-536870913,le=re!==C.lane;if(le?(xt&re)===re:(o&re)===re){re!==0&&re===ss&&(of=!0),de!==null&&(de=de.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var We=t,Je=C;re=n;var Vt=a;switch(Je.tag){case 1:if(We=Je.payload,typeof We=="function"){ve=We.call(Vt,ve,re);break e}ve=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Je.payload,re=typeof We=="function"?We.call(Vt,ve,re):We,re==null)break e;ve=_({},ve,re);break e;case 2:Ba=!0}}re=C.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[re]:le.push(re))}else le={lane:re,tag:C.tag,payload:C.payload,callback:C.callback,next:null},de===null?(ee=de=le,B=ve):de=de.next=le,v|=re;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;le=C,C=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);de===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),ja|=v,t.lanes=v,t.memoizedState=ve}}function Lm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Om(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lm(a[t],n)}var us=P(null),Dl=P(0);function Pm(t,n){t=ua,xe(Dl,t),xe(us,n),ua=t|n.baseLanes}function lf(){xe(Dl,ua),xe(us,us.current)}function cf(){ua=Dl.current,Q(us),Q(Dl)}var ei=P(null),mi=null;function Va(t){var n=t.alternate;xe(on,on.current&1),xe(ei,t),mi===null&&(n===null||us.current!==null||n.memoizedState!==null)&&(mi=t)}function uf(t){xe(on,on.current),xe(ei,t),mi===null&&(mi=t)}function Im(t){t.tag===22?(xe(on,on.current),xe(ei,t),mi===null&&(mi=t)):ka()}function ka(){xe(on,on.current),xe(ei,ei.current)}function ti(t){Q(ei),mi===t&&(mi=null),Q(on)}var on=P(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gd(a)||_d(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,lt=null,Ht=null,dn=null,Ul=!1,fs=!1,Rr=!1,Ll=0,xo=0,ds=null,kS=0;function nn(){throw Error(s(321))}function ff(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Jn(t[a],n[a]))return!1;return!0}function df(t,n,a,o,u,f){return na=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?x0:Cf,Rr=!1,f=a(o,u),Rr=!1,fs&&(f=Fm(n,a,o,u)),zm(t),f}function zm(t){O.H=Mo;var n=Ht!==null&&Ht.next!==null;if(na=0,dn=Ht=lt=null,Ul=!1,xo=0,ds=null,n)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&El(t)&&(hn=!0))}function Fm(t,n,a,o){lt=t;var u=0;do{if(fs&&(ds=null),xo=0,fs=!1,25<=u)throw Error(s(301));if(u+=1,dn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=S0,f=n(a,o)}while(fs);return f}function XS(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?So(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(lt.flags|=1024),n}function hf(){var t=Ll!==0;return Ll=0,t}function pf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function mf(t){if(Ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ul=!1}na=0,dn=Ht=lt=null,fs=!1,xo=Ll=0,ds=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?lt.memoizedState=dn=t:dn=dn.next=t,dn}function ln(){if(Ht===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=dn===null?lt.memoizedState:dn.next;if(n!==null)dn=n,Ht=t;else{if(t===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},dn===null?lt.memoizedState=dn=t:dn=dn.next=t}return dn}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var n=xo;return xo+=1,ds===null&&(ds=[]),t=Rm(ds,t,n),n=lt,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?x0:Cf),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===N)return An(t)}throw Error(s(438,String(t)))}function gf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Z;return n.index++,a}function ia(t,n){return typeof n=="function"?n(t):n}function Il(t){var n=ln();return _f(n,Ht,t)}function _f(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=v=null,B=null,ee=n,de=!1;do{var ve=ee.lane&-536870913;if(ve!==ee.lane?(xt&ve)===ve:(na&ve)===ve){var re=ee.revertLane;if(re===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ve===ss&&(de=!0);else if((na&re)===re){ee=ee.next,re===ss&&(de=!0);continue}else ve={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(C=B=ve,v=f):B=B.next=ve,lt.lanes|=re,ja|=re;ve=ee.action,Rr&&a(f,ve),f=ee.hasEagerState?ee.eagerState:a(f,ve)}else re={lane:ve,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(C=B=re,v=f):B=B.next=re,lt.lanes|=ve,ja|=ve;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?v=f:B.next=C,!Jn(f,t.memoizedState)&&(hn=!0,de&&(a=os,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function vf(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);Jn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Bm(t,n,a){var o=lt,u=ln(),f=yt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Jn((Ht||u).memoizedState,a);if(v&&(u.memoizedState=a,hn=!0),u=u.queue,yf(Vm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,hs(9,{destroy:void 0},Gm.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));f||(na&127)!==0||Hm(o,n,a)}return a}function Hm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Ol(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Gm(t,n,a,o){n.value=a,n.getSnapshot=o,km(n)&&Xm(t)}function Vm(t,n,a){return a(function(){km(n)&&Xm(t)})}function km(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Jn(t,a)}catch{return!0}}function Xm(t){var n=xr(t,2);n!==null&&Wn(n,t,2)}function xf(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Rr){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},n}function Wm(t,n,a,o){return t.baseState=a,_f(t,Ht,typeof o=="function"?o:ia)}function WS(t,n,a,o,u){if(Bl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,jm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function jm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var C=a(u,o),B=O.S;B!==null&&B(v,C),qm(t,n,C)}catch(ee){Sf(t,n,ee)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,o),qm(t,n,f)}catch(ee){Sf(t,n,ee)}}function qm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ym(t,n,o)},function(o){return Sf(t,n,o)}):Ym(t,n,a)}function Ym(t,n,a){n.status="fulfilled",n.value=a,Zm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,jm(t,a)))}function Sf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zm(n),n=n.next;while(n!==o)}t.action=null}function Zm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Km(t,n){return n}function Qm(t,n){if(yt){var a=jt.formState;if(a!==null){e:{var o=lt;if(yt){if(Yt){t:{for(var u=Yt,f=pi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=gi(u.nextSibling),o=u.data==="F!";break e}}za(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Km,lastRenderedState:n},a.queue=o,a=g0.bind(null,lt,o),o.dispatch=a,o=xf(!1),f=Af.bind(null,lt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=WS.bind(null,lt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Jm(t){var n=ln();return $m(n,Ht,t)}function $m(t,n,a){if(n=_f(t,n,Km)[0],t=Il(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(v){throw v===ls?Al:v}else o=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,hs(9,{destroy:void 0},jS.bind(null,u,a),null)),[o,f,t]}function jS(t,n){t.action=n}function e0(t){var n=ln(),a=Ht;if(a!==null)return $m(n,a,t);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function hs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Ol(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function t0(){return ln().memoizedState}function zl(t,n,a,o){var u=zn();lt.flags|=t,u.memoizedState=hs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Fl(t,n,a,o){var u=ln();o=o===void 0?null:o;var f=u.memoizedState.inst;Ht!==null&&o!==null&&ff(o,Ht.memoizedState.deps)?u.memoizedState=hs(n,f,a,o):(lt.flags|=t,u.memoizedState=hs(1|n,f,a,o))}function n0(t,n){zl(8390656,8,t,n)}function yf(t,n){Fl(2048,8,t,n)}function qS(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Ol(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function i0(t){var n=ln().memoizedState;return qS({ref:n,nextImpl:t}),function(){if((wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function a0(t,n){return Fl(4,2,t,n)}function r0(t,n){return Fl(4,4,t,n)}function s0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function o0(t,n,a){a=a!=null?a.concat([t]):null,Fl(4,4,s0.bind(null,n,t),a)}function Mf(){}function l0(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ff(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function c0(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ff(n,o[1]))return o[0];if(o=t(),Rr){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function Ef(t,n,a){return a===void 0||(na&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ug(),lt.lanes|=t,ja|=t,a)}function u0(t,n,a,o){return Jn(a,n)?a:us.current!==null?(t=Ef(t,a,o),Jn(t,n)||(hn=!0),t):(na&42)===0||(na&1073741824)!==0&&(xt&261930)===0?(hn=!0,t.memoizedState=a):(t=ug(),lt.lanes|=t,ja|=t,n)}function f0(t,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var v=O.T,C={};O.T=C,Af(t,!1,n,a);try{var B=u(),ee=O.S;if(ee!==null&&ee(C,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=VS(B,o);yo(t,n,de,ai(t))}else yo(t,n,o,ai(t))}catch(ve){yo(t,n,{then:function(){},status:"rejected",reason:ve},ai())}finally{F.p=f,v!==null&&C.types!==null&&(v.types=C.types),O.T=v}}function YS(){}function bf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=d0(t).queue;f0(t,u,n,oe,a===null?YS:function(){return h0(t),a(o)})}function d0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function h0(t){var n=d0(t);n.next===null&&(n=t.alternate.memoizedState),yo(t,n.next.queue,{},ai())}function Tf(){return An(Fo)}function p0(){return ln().memoizedState}function m0(){return ln().memoizedState}function ZS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Ha(a);var o=Ga(n,t,a);o!==null&&(Wn(o,n,a),go(o,n,a)),n={cache:$u()},t.payload=n;return}n=n.return}}function KS(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(t)?_0(n,a):(a=Vu(t,n,a,o),a!==null&&(Wn(a,t,o),v0(a,n,o)))}function g0(t,n,a){var o=ai();yo(t,n,a,o)}function yo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(t))_0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,C=f(v,a);if(u.hasEagerState=!0,u.eagerState=C,Jn(C,v))return xl(t,n,u,0),jt===null&&vl(),!1}catch{}finally{}if(a=Vu(t,n,u,o),a!==null)return Wn(a,t,o),v0(a,n,o),!0}return!1}function Af(t,n,a,o){if(o={lane:2,revertLane:ad(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(t)){if(n)throw Error(s(479))}else n=Vu(t,a,o,2),n!==null&&Wn(n,t,2)}function Bl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function _0(t,n){fs=Ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function v0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ci(t,a)}}var Mo={readContext:An,use:Pl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Mo.useEffectEvent=nn;var x0={readContext:An,use:Pl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:n0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,zl(4194308,4,s0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(Rr){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Rr){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=KS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,a=g0.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Mf,useDeferredValue:function(t,n){var a=zn();return Ef(a,t,n)},useTransition:function(){var t=xf(!1);return t=f0.bind(null,lt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=zn();if(yt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(xt&127)!==0||Hm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,n0(Vm.bind(null,o,f,t),[t]),o.flags|=2048,hs(9,{destroy:void 0},Gm.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=jt.identifierPrefix;if(yt){var a=Fi,o=zi;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Tf,useFormState:Qm,useActionState:Qm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Af.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:gf,useCacheRefresh:function(){return zn().memoizedState=ZS.bind(null,lt)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Cf={readContext:An,use:Pl,useCallback:l0,useContext:An,useEffect:yf,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:r0,useMemo:c0,useReducer:Il,useRef:t0,useState:function(){return Il(ia)},useDebugValue:Mf,useDeferredValue:function(t,n){var a=ln();return u0(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Il(ia)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Bm,useId:p0,useHostTransitionStatus:Tf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,n){var a=ln();return Wm(a,Ht,t,n)},useMemoCache:gf,useCacheRefresh:m0};Cf.useEffectEvent=i0;var S0={readContext:An,use:Pl,useCallback:l0,useContext:An,useEffect:yf,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:r0,useMemo:c0,useReducer:vf,useRef:t0,useState:function(){return vf(ia)},useDebugValue:Mf,useDeferredValue:function(t,n){var a=ln();return Ht===null?Ef(a,t,n):u0(a,Ht.memoizedState,t,n)},useTransition:function(){var t=vf(ia)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Bm,useId:p0,useHostTransitionStatus:Tf,useFormState:e0,useActionState:e0,useOptimistic:function(t,n){var a=ln();return Ht!==null?Wm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:gf,useCacheRefresh:m0};S0.useEffectEvent=i0;function Rf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,o),n!==null&&(Wn(n,t,o),go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,o),n!==null&&(Wn(n,t,o),go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(t,o,a),n!==null&&(Wn(n,t,a),go(n,t,a))}};function y0(t,n,a,o,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function M0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function wr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function E0(t){_l(t)}function b0(t){console.error(t)}function T0(t){_l(t)}function Hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function A0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Df(t,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(t,n)},a}function C0(t){return t=Ha(t),t.tag=3,t}function R0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){A0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){A0(n,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function QS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rs(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Jl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),td(t,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),td(t,o,u)),!1}throw Error(s(435,a.tag))}return td(t,o,u),Jl(),!1}if(yt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Yu&&(t=Error(s(422),{cause:o}),uo(fi(t,a)))):(o!==Yu&&(n=Error(s(423),{cause:o}),uo(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=Df(t.stateNode,o,u),sf(t,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),Do===null?Do=[f]:Do.push(f),an!==4&&(an=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Df(a.stateNode,o,t),sf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=C0(u),R0(u,t,a,o),sf(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(s(461)),hn=!1;function Cn(t,n,a,o){n.child=t===null?Um(n,null,a,o):Cr(n,t.child,a,o)}function w0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var C in o)C!=="ref"&&(v[C]=o[C])}else v=o;return Er(n),o=df(t,n,a,v,f,u),C=hf(),t!==null&&!hn?(pf(t,n,u),aa(t,n,u)):(yt&&C&&ju(n),n.flags|=1,Cn(t,n,o,u),n.child)}function D0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!ku(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,N0(t,n,f,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Bf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(v,o)&&t.ref===n.ref)return aa(t,n,u)}return n.flags|=1,t=Ji(f,o),t.ref=n.ref,t.return=n,n.child=t}function N0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(oo(f,o)&&t.ref===n.ref)if(hn=!1,n.pendingProps=o=f,Bf(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,aa(t,n,u)}return Uf(t,n,a,o,u)}function U0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return L0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tl(n,f!==null?f.cachePool:null),f!==null?Pm(n,f):lf(),Im(n);else return o=n.lanes=536870912,L0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Tl(n,f.cachePool),Pm(n,f),ka(),n.memoizedState=null):(t!==null&&Tl(n,null),lf(),ka());return Cn(t,n,u,a),n.child}function Eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function L0(t,n,a,o,u){var f=tf();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Tl(n,null),lf(),Im(n),t!==null&&rs(t,n,o,!0),n.childLanes=u,null}function Gl(t,n){return n=kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function O0(t,n,a){return Cr(n,t.child,null,a),t=Gl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function JS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Gl(n,o),n.lanes=536870912,Eo(null,t);if(uf(n),(t=Yt)?(t=jg(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:zi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=_m(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return Gl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(uf(n),u)if(n.flags&256)n.flags&=-257,n=O0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||rs(t,n,a,!1),u=(a&t.childLanes)!==0,hn||u){if(o=jt,o!==null&&(v=Zn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,xr(t,v),Wn(o,t,v),Nf;Jl(),n=O0(t,n,a)}else t=f.treeContext,Yt=gi(v.nextSibling),Tn=n,yt=!0,Ia=null,pi=!1,t!==null&&Sm(n,t),n=Gl(n,o),n.flags|=4096;return n}return t=Ji(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Uf(t,n,a,o,u){return Er(n),a=df(t,n,a,o,void 0,u),o=hf(),t!==null&&!hn?(pf(t,n,u),aa(t,n,u)):(yt&&o&&ju(n),n.flags|=1,Cn(t,n,a,u),n.child)}function P0(t,n,a,o,u,f){return Er(n),n.updateQueue=null,a=Fm(n,o,a,u),zm(t),o=hf(),t!==null&&!hn?(pf(t,n,f),aa(t,n,f)):(yt&&o&&ju(n),n.flags|=1,Cn(t,n,a,f),n.child)}function I0(t,n,a,o,u){if(Er(n),n.stateNode===null){var f=ts,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},af(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):ts,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Rf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&wf.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,B=wr(a,C);f.props=B;var ee=f.context,de=a.contextType;v=ts,typeof de=="object"&&de!==null&&(v=An(de));var ve=a.getDerivedStateFromProps;de=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ee!==v)&&M0(n,f,o,v),Ba=!1;var re=n.memoizedState;f.state=re,vo(n,o,f,u),_o(),ee=n.memoizedState,C||re!==ee||Ba?(typeof ve=="function"&&(Rf(n,a,ve,o),ee=n.memoizedState),(B=Ba||y0(n,a,B,o,re,ee,v))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=v,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,rf(t,n),v=n.memoizedProps,de=wr(a,v),f.props=de,ve=n.pendingProps,re=f.context,ee=a.contextType,B=ts,typeof ee=="object"&&ee!==null&&(B=An(ee)),C=a.getDerivedStateFromProps,(ee=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ve||re!==B)&&M0(n,f,o,B),Ba=!1,re=n.memoizedState,f.state=re,vo(n,o,f,u),_o();var le=n.memoizedState;v!==ve||re!==le||Ba||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof C=="function"&&(Rf(n,a,C,o),le=n.memoizedState),(de=Ba||y0(n,a,de,o,re,le,B)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=B,o=de):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Vl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Cr(n,t.child,null,u),n.child=Cr(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=aa(t,n,u),t}function z0(t,n,a,o){return yr(),n.flags|=256,Cn(t,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Of(t){return{baseLanes:t,cachePool:Am()}}function Pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function F0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Va(n):ka(),(t=Yt)?(t=jg(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:zi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=_m(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw za(n);return _d(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(ka(),u=n.mode,C=kl({mode:"hidden",children:C},u),o=Sr(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Of(a),o.childLanes=Pf(t,v,a),n.memoizedState=Lf,Eo(null,o)):(Va(n),If(n,C))}var B=t.memoizedState;if(B!==null&&(C=B.dehydrated,C!==null)){if(f)n.flags&256?(Va(n),n.flags&=-257,n=zf(t,n,a)):n.memoizedState!==null?(ka(),n.child=t.child,n.flags|=128,n=null):(ka(),C=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),C=Sr(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Cr(n,t.child,null,a),o=n.child,o.memoizedState=Of(a),o.childLanes=Pf(t,v,a),n.memoizedState=Lf,n=Eo(null,o));else if(Va(n),_d(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var ee=v.dgst;v=ee,o=Error(s(419)),o.stack="",o.digest=v,uo({value:o,source:null,stack:null}),n=zf(t,n,a)}else if(hn||rs(t,n,a,!1),v=(a&t.childLanes)!==0,hn||v){if(v=jt,v!==null&&(o=Zn(v,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,xr(t,o),Wn(v,t,o),Nf;gd(C)||Jl(),n=zf(t,n,a)}else gd(C)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Yt=gi(C.nextSibling),Tn=n,yt=!0,Ia=null,pi=!1,t!==null&&Sm(n,t),n=If(n,o.children),n.flags|=4096);return n}return u?(ka(),C=o.fallback,u=n.mode,B=t.child,ee=B.sibling,o=Ji(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ee!==null?C=Ji(ee,C):(C=Sr(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Eo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Of(a):(u=C.cachePool,u!==null?(B=fn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Am(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Pf(t,v,a),n.memoizedState=Lf,Eo(t.child,o)):(Va(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function If(t,n){return n=kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function kl(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function zf(t,n,a){return Cr(n,t.child,null,a),t=If(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function B0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Qu(t.return,n,a)}function Ff(t,n,a,o,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function H0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=on.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,xe(on,v),Cn(t,n,o,a),o=yt?co:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&B0(t,a,n);else if(t.tag===19)B0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ff(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Nl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ff(n,!0,a,null,f,o);break;case"together":Ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(rs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function $S(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Fa(n,fn,t.memoizedState.cache),yr();break;case 27:case 5:$e(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?F0(t,n,a):(Va(n),t=aa(t,n,a),t!==null?t.sibling:null);Va(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return H0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(on,on.current),o)break;return null;case 22:return n.lanes=0,U0(t,n,a,n.pendingProps);case 24:Fa(n,fn,t.memoizedState.cache)}return aa(t,n,a)}function G0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Bf(t,a)&&(n.flags&128)===0)return hn=!1,$S(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,yt&&(n.flags&1048576)!==0&&xm(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Tr(n.elementType),n.type=t,typeof t=="function")ku(t)?(o=wr(t,o),n.tag=1,n=I0(null,n,t,o,a)):(n.tag=0,n=Uf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=w0(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=D0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(s(306,n,""))}}return n;case 0:return Uf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=wr(o,n.pendingProps),I0(t,n,o,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,rf(t,n),vo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Fa(n,fn,o),o!==f.cache&&Ju(n,[fn],a,!0),_o(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=z0(t,n,o,a);break e}else if(o!==u){u=fi(Error(s(424)),n),uo(u),n=z0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=gi(t.firstChild),Tn=n,yt=!0,Ia=null,pi=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(yr(),o===u){n=aa(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Vl(t,n),t===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=rc(se.current).createElement(a),o[sn]=n,o[bn]=t,Rn(o,a,t),un(o),n.stateNode=o):n.memoizedState=Jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $e(n),t===null&&yt&&(o=n.stateNode=Zg(n.type,n.pendingProps,se.current),Tn=n,pi=!0,u=Yt,Qa(n.type)?(vd=u,Yt=gi(o.firstChild)):Yt=u),Cn(t,n,n.pendingProps.children,a),Vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=o=Yt)&&(o=wy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Tn=n,Yt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||za(n)),$e(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,hd(u,f)?o=null:v!==null&&hd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=df(t,n,XS,null,null,a),Fo._currentValue=u),Vl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Yt)&&(a=Dy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||za(n)),null;case 13:return F0(t,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Cr(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return w0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Er(n),u=An(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return D0(t,n,n.type,n.pendingProps,a);case 15:return N0(t,n,n.type,n.pendingProps,a);case 19:return H0(t,n,a);case 31:return JS(t,n,a);case 22:return U0(t,n,a,n.pendingProps);case 24:return Er(n),o=An(fn),t===null?(u=tf(),u===null&&(u=jt,f=$u(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},af(n),Fa(n,fn,u)):((t.lanes&a)!==0&&(rf(t,n),vo(n,null,null,a),_o()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,fn,o)):(o=f.cache,Fa(n,fn,o),o!==u.cache&&Ju(n,[fn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(t){t.flags|=4}function Hf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(pg())t.flags|=8192;else throw Ar=Cl,nf}else t.flags&=-16777217}function V0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!i_(n))if(pg())t.flags|=8192;else throw Ar=Cl,nf}function Xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,_s|=n)}function bo(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ey(t,n,a){var o=n.pendingProps;switch(qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(fn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(as(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zu())),Zt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ra(n),f!==null?(Zt(n),V0(n,f)):(Zt(n),Hf(n,u,null,o,a))):f?f!==t.memoizedState?(ra(n),Zt(n),V0(n,f)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ra(n),Zt(n),Hf(n,u,t,o,a)),null;case 27:if(Qe(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Ae.current,as(n)?ym(n):(t=Zg(u,o,a),n.stateNode=t,ra(n))}return Zt(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(f=Ae.current,as(n))ym(n);else{var v=rc(se.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[sn]=n,f[bn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Rn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ra(n)}}return Zt(n),Hf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,as(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Fg(t.nodeValue,a)),t||za(n,!0)}else t=rc(t).createTextNode(o),t[sn]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=as(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=as(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Zt(n),null);case 4:return He(),t===null&&ld(n.stateNode.containerInfo),Zt(n),null;case 10:return ta(n.type),Zt(n),null;case 19:if(Q(on),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Nl(t),f!==null){for(n.flags|=128,bo(o,!1),t=f.updateQueue,n.updateQueue=t,Xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)gm(a,t),a=a.sibling;return xe(on,on.current&1|2),yt&&$i(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ce()>Zl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Nl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Xl(n,t),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!yt)return Zt(n),null}else 2*Ce()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,a=on.current,xe(on,u?a&1|2:a&1),yt&&$i(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ti(n),cf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(br),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(fn),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ty(t,n){switch(qu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(fn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(on),null;case 4:return He(),null;case 10:return ta(n.type),null;case 22:case 23:return ti(n),cf(),t!==null&&Q(br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(fn),null;case 25:return null;default:return null}}function k0(t,n){switch(qu(n),n.tag){case 3:ta(fn),He();break;case 26:case 27:case 5:Qe(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Q(on);break;case 10:ta(n.type);break;case 22:case 23:ti(n),cf(),t!==null&&Q(br);break;case 24:ta(fn)}}function To(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(C){It(n,n.return,C)}}function Xa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var v=o.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var B=a,ee=C;try{ee()}catch(de){It(u,B,de)}}}o=o.next}while(o!==f)}}catch(de){It(n,n.return,de)}}function X0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Om(n,a)}catch(o){It(t,t.return,o)}}}function W0(t,n,a){a.props=wr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function Bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function j0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function Gf(t,n,a){try{var o=t.stateNode;Ey(o,t.type,a,n),o[bn]=n}catch(u){It(t,t.return,u)}}function q0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function Vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(kf(t,n,a),t=t.sibling;t!==null;)kf(t,n,a),t=t.sibling}function Wl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Wl(t,n,a),t=t.sibling;t!==null;)Wl(t,n,a),t=t.sibling}function Y0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[sn]=t,n[bn]=a}catch(f){It(t,t.return,f)}}var sa=!1,pn=!1,Xf=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function ny(t,n){if(t=t.containerInfo,fd=dc,t=om(t),Iu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,C=-1,B=-1,ee=0,de=0,ve=t,re=null;t:for(;;){for(var le;ve!==a||u!==0&&ve.nodeType!==3||(C=v+u),ve!==f||o!==0&&ve.nodeType!==3||(B=v+o),ve.nodeType===3&&(v+=ve.nodeValue.length),(le=ve.firstChild)!==null;)re=ve,ve=le;for(;;){if(ve===t)break t;if(re===a&&++ee===u&&(C=v),re===f&&++de===o&&(B=v),(le=ve.nextSibling)!==null)break;ve=re,re=ve.parentNode}ve=le}a=C===-1||B===-1?null:{start:C,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(dd={focusedElem:t,selectionRange:a},dc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=wr(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){It(a,a.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)md(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":md(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function K0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(t,a),o&4&&To(5,a);break;case 1:if(la(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){It(a,a.return,v)}else{var u=wr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){It(a,a.return,v)}}o&64&&X0(a),o&512&&Ao(a,a.return);break;case 3:if(la(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Om(t,n)}catch(v){It(a,a.return,v)}}break;case 27:n===null&&o&4&&Y0(a);case 26:case 5:la(t,a),n===null&&o&4&&j0(a),o&512&&Ao(a,a.return);break;case 12:la(t,a);break;case 31:la(t,a),o&4&&$0(t,a);break;case 13:la(t,a),o&4&&eg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=fy.bind(null,a),Ny(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||pn,u=sa;var f=pn;sa=o,(pn=n)&&!f?ca(t,a,(a.subtreeFlags&8772)!==0):la(t,a),sa=u,pn=f}break;case 30:break;default:la(t,a)}}function Q0(t){var n=t.alternate;n!==null&&(t.alternate=null,Q0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$s(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Gn=!1;function oa(t,n,a){for(a=a.child;a!==null;)J0(t,n,a),a=a.sibling}function J0(t,n,a){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:pn||Bi(a,n),oa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Bi(a,n);var o=$t,u=Gn;Qa(a.type)&&($t=a.stateNode,Gn=!1),oa(t,n,a),Po(a.stateNode),$t=o,Gn=u;break;case 5:pn||Bi(a,n);case 6:if(o=$t,u=Gn,$t=null,oa(t,n,a),$t=o,Gn=u,$t!==null)if(Gn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:$t!==null&&(Gn?(t=$t,Xg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ts(t)):Xg($t,a.stateNode));break;case 4:o=$t,u=Gn,$t=a.stateNode.containerInfo,Gn=!0,oa(t,n,a),$t=o,Gn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),pn||Xa(4,a,n),oa(t,n,a);break;case 1:pn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&W0(a,n,o)),oa(t,n,a);break;case 21:oa(t,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,oa(t,n,a),pn=o;break;default:oa(t,n,a)}}function $0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ts(t)}catch(a){It(n,n.return,a)}}}function eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ts(t)}catch(a){It(n,n.return,a)}}function iy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Z0),n;default:throw Error(s(435,t.tag))}}function jl(t,n){var a=iy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=dy.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,v=n,C=v;e:for(;C!==null;){switch(C.tag){case 27:if(Qa(C.type)){$t=C.stateNode,Gn=!1;break e}break;case 5:$t=C.stateNode,Gn=!1;break e;case 3:case 4:$t=C.stateNode.containerInfo,Gn=!0;break e}C=C.return}if($t===null)throw Error(s(160));J0(f,v,u),$t=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tg(n,t),n=n.sibling}var Ai=null;function tg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Xa(3,t,t.return),To(3,t),Xa(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(pn||a===null||Bi(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Vn(n,t),kn(t),o&512&&(pn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wa]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[sn]=t,un(f),o=f;break e;case"link":var v=t_("link","href",u).get(o+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(f=v[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break t}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=t_("meta","content",u).get(o+(a.content||""))){for(C=0;C<v.length;C++)if(f=v[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break t}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[sn]=t,un(f),o=f}t.stateNode=o}else n_(u,t.type,t.stateNode);else t.stateNode=e_(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?n_(u,t.type,t.stateNode):e_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(pn||a===null||Bi(a,a.return)),a!==null&&o&4&&Gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(pn||a===null||Bi(a,a.return)),t.flags&32){u=t.stateNode;try{Qn(u,"")}catch(We){It(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Gf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Xf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){It(t,t.return,We)}}break;case 3:if(lc=null,u=Ai,Ai=sc(n.containerInfo),Vn(n,t),Ai=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ts(n.containerInfo)}catch(We){It(t,t.return,We)}Xf&&(Xf=!1,ng(t));break;case 4:o=Ai,Ai=sc(t.stateNode.containerInfo),Vn(n,t),kn(t),Ai=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yl=Ce()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=sa,de=pn;if(sa=ee||u,pn=de||B,Vn(n,t),pn=de,sa=ee,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||sa||pn||Dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=B.stateNode;var ve=B.memoizedProps.style,re=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;C.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(We){It(B,B.return,We)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(We){It(B,B.return,We)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;u?Wg(le,!0):Wg(B.stateNode,!1)}catch(We){It(B,B.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(q0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Vf(t);Wl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Qn(v,""),a.flags&=-33);var C=Vf(t);Wl(t,C,v);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=Vf(t);kf(t,ee,B);break;default:throw Error(s(161))}}catch(de){It(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function la(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)K0(t,n.alternate,n),n=n.sibling}function Dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Dr(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&W0(n,n.return,a),Dr(n);break;case 27:Po(n.stateNode);case 26:case 5:Bi(n,n.return),Dr(n);break;case 22:n.memoizedState===null&&Dr(n);break;case 30:Dr(n);break;default:Dr(n)}t=t.sibling}}function ca(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),To(4,f);break;case 1:if(ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){It(o,o.return,ee)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Lm(B[u],C)}catch(ee){It(o,o.return,ee)}}a&&v&64&&X0(f),Ao(f,f.return);break;case 27:Y0(f);case 26:case 5:ca(u,f,a),a&&o===null&&v&4&&j0(f),Ao(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&v&4&&$0(u,f);break;case 13:ca(u,f,a),a&&v&4&&eg(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),Ao(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function Wf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(t,n,a,o),n=n.sibling}function ig(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&To(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,C=f.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){It(n,n.return,B)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(t,n,a,o):Co(t,n):f._visibility&2?Ci(t,n,a,o):(f._visibility|=2,ps(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Wf(v,n);break;case 24:Ci(t,n,a,o),u&2048&&jf(n.alternate,n);break;default:Ci(t,n,a,o)}}function ps(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,C=a,B=o,ee=v.flags;switch(v.tag){case 0:case 11:case 15:ps(f,v,C,B,u),To(8,v);break;case 23:break;case 22:var de=v.stateNode;v.memoizedState!==null?de._visibility&2?ps(f,v,C,B,u):Co(f,v):(de._visibility|=2,ps(f,v,C,B,u)),u&&ee&2048&&Wf(v.alternate,v);break;case 24:ps(f,v,C,B,u),u&&ee&2048&&jf(v.alternate,v);break;default:ps(f,v,C,B,u)}n=n.sibling}}function Co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Wf(o.alternate,o);break;case 24:Co(a,o),u&2048&&jf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var Ro=8192;function ms(t,n,a){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)ag(t,n,a),t=t.sibling}function ag(t,n,a){switch(t.tag){case 26:ms(t,n,a),t.flags&Ro&&t.memoizedState!==null&&ky(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:ms(t,n,a);break;case 3:case 4:var o=Ai;Ai=sc(t.stateNode.containerInfo),ms(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,ms(t,n,a),Ro=o):ms(t,n,a));break;default:ms(t,n,a)}}function rg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,og(o,t)}rg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sg(t),t=t.sibling}function sg(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ql(t)):wo(t);break;default:wo(t)}}function ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,og(o,t)}rg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ql(n));break;default:ql(n)}t=t.sibling}}function og(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(Q0(o),o===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var ay={getCacheForType:function(t){var n=An(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(fn).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,wt=0,jt=null,gt=null,xt=0,Pt=0,ni=null,Wa=!1,gs=!1,qf=!1,ua=0,an=0,ja=0,Nr=0,Yf=0,ii=0,_s=0,Do=null,Xn=null,Zf=!1,Yl=0,lg=0,Zl=1/0,Kl=null,qa=null,vn=0,Ya=null,vs=null,fa=0,Kf=0,Qf=null,cg=null,No=0,Jf=null;function ai(){return(wt&2)!==0&&xt!==0?xt&-xt:O.T!==null?ad():Ks()}function ug(){if(ii===0)if((xt&536870912)===0||yt){var t=pt;pt<<=1,(pt&3932160)===0&&(pt=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function Wn(t,n,a){(t===jt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(xs(t,0),Za(t,xt,ii,!1)),et(t,a),((wt&2)===0||t!==jt)&&(t===jt&&((wt&2)===0&&(Nr|=a),an===4&&Za(t,xt,ii,!1)),Hi(t))}function fg(t,n,a){if((wt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),u=o?ly(t,n):ed(t,n,!0),f=o;do{if(u===0){gs&&!o&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!sy(a)){u=ed(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var C=t;u=Do;var B=C.current.memoizedState.isDehydrated;if(B&&(xs(C,v).flags|=256),v=ed(C,v,!1),v!==2){if(qf&&!B){C.errorRecoveryDisabledLanes|=f,Nr|=f,u=4;break e}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){xs(t,0),Za(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,ii,!Wa);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Yl+300-Ce(),10<u)){if(Za(o,n,ii,!Wa),he(o,0,!0)!==0)break e;fa=n,o.timeoutHandle=Vg(dg.bind(null,o,a,Xn,Kl,Zf,n,ii,Nr,_s,Wa,f,"Throttled",-0,0),u);break e}dg(o,a,Xn,Kl,Zf,n,ii,Nr,_s,Wa,f,null,-0,0)}}break}while(!0);Hi(t)}function dg(t,n,a,o,u,f,v,C,B,ee,de,ve,re,le){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},ag(n,f,ve);var We=(f&62914560)===f?Yl-Ce():(f&4194048)===f?lg-Ce():0;if(We=Xy(ve,We),We!==null){fa=f,t.cancelPendingCommit=We(Sg.bind(null,t,n,f,a,o,u,v,C,B,de,ve,null,re,le)),Za(t,f,v,!ee);return}}Sg(t,n,f,a,o,u,v,C,B)}function sy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,o){n&=~Yf,n&=~Nr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Pe(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Rt(t,a,n)}function Ql(){return(wt&6)===0?(Uo(0),!1):!0}function $f(){if(gt!==null){if(Pt===0)var t=gt.return;else t=gt,ea=Mr=null,mf(t),cs=null,po=0,t=gt;for(;t!==null;)k0(t.alternate,t),t=t.return;gt=null}}function xs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ay(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),fa=0,$f(),jt=t,gt=a=Ji(t.current,null),xt=n,Pt=0,ni=null,Wa=!1,gs=Fe(t,n),qf=!1,_s=ii=Yf=Nr=ja=an=0,Xn=Do=null,Zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),f=1<<u;n|=t[u],o&=~f}return ua=n,vl(),a}function hg(t,n){lt=null,O.H=Mo,n===ls||n===Al?(n=wm(),Pt=3):n===nf?(n=wm(),Pt=4):Pt=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,gt===null&&(an=1,Hl(t,fi(n,t.current)))}function pg(){var t=ei.current;return t===null?!0:(xt&4194048)===xt?mi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===mi:!1}function mg(){var t=O.H;return O.H=Mo,t===null?Mo:t}function gg(){var t=O.A;return O.A=ay,t}function Jl(){an=4,Wa||(xt&4194048)!==xt&&ei.current!==null||(gs=!0),(ja&134217727)===0&&(Nr&134217727)===0||jt===null||Za(jt,xt,ii,!1)}function ed(t,n,a){var o=wt;wt|=2;var u=mg(),f=gg();(jt!==t||xt!==n)&&(Kl=null,xs(t,n)),n=!1;var v=an;e:do try{if(Pt!==0&&gt!==null){var C=gt,B=ni;switch(Pt){case 8:$f(),v=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ee=Pt;if(Pt=0,ni=null,Ss(t,C,B,ee),a&&gs){v=0;break e}break;default:ee=Pt,Pt=0,ni=null,Ss(t,C,B,ee)}}oy(),v=an;break}catch(de){hg(t,de)}while(!0);return n&&t.shellSuspendCounter++,ea=Mr=null,wt=o,O.H=u,O.A=f,gt===null&&(jt=null,xt=0,vl()),v}function oy(){for(;gt!==null;)_g(gt)}function ly(t,n){var a=wt;wt|=2;var o=mg(),u=gg();jt!==t||xt!==n?(Kl=null,Zl=Ce()+500,xs(t,n)):gs=Fe(t,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var f=ni;t:switch(Pt){case 1:Pt=0,ni=null,Ss(t,n,f,1);break;case 2:case 9:if(Cm(f)){Pt=0,ni=null,vg(n);break}n=function(){Pt!==2&&Pt!==9||jt!==t||(Pt=7),Hi(t)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:Cm(f)?(Pt=0,ni=null,vg(n)):(Pt=0,ni=null,Ss(t,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var C=gt;if(v?i_(v):C.stateNode.complete){Pt=0,ni=null;var B=C.sibling;if(B!==null)gt=B;else{var ee=C.return;ee!==null?(gt=ee,$l(ee)):gt=null}break t}}Pt=0,ni=null,Ss(t,n,f,5);break;case 6:Pt=0,ni=null,Ss(t,n,f,6);break;case 8:$f(),an=6;break e;default:throw Error(s(462))}}cy();break}catch(de){hg(t,de)}while(!0);return ea=Mr=null,O.H=o,O.A=u,wt=a,gt!==null?0:(jt=null,xt=0,vl(),an)}function cy(){for(;gt!==null&&!ht();)_g(gt)}function _g(t){var n=G0(t.alternate,t,ua);t.memoizedProps=t.pendingProps,n===null?$l(t):gt=n}function vg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=P0(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=P0(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:mf(n);default:k0(a,n),n=gt=gm(n,ua),n=G0(a,n,ua)}t.memoizedProps=t.pendingProps,n===null?$l(t):gt=n}function Ss(t,n,a,o){ea=Mr=null,mf(n),cs=null,po=0;var u=n.return;try{if(QS(t,u,n,a,xt)){an=1,Hl(t,fi(a,t.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;an=1,Hl(t,fi(a,t.current)),gt=null;return}n.flags&32768?(yt||o===1?t=!0:gs||(xt&536870912)!==0?t=!1:(Wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),xg(n,t)):$l(n)}function $l(t){var n=t;do{if((n.flags&32768)!==0){xg(n,Wa);return}t=n.return;var a=ey(n.alternate,n,ua);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);an===0&&(an=5)}function xg(t,n){do{var a=ty(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);an=6,gt=null}function Sg(t,n,a,o,u,f,v,C,B){t.cancelPendingCommit=null;do ec();while(vn!==0);if((wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Gu,tn(t,a,f,v,C,B),t===jt&&(gt=jt=null,xt=0),vs=n,Ya=t,fa=a,Kf=f,Qf=u,cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,hy(K,function(){return Tg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=F.p,F.p=2,v=wt,wt|=4;try{ny(t,n,a)}finally{wt=v,F.p=u,O.T=o}}vn=1,yg(),Mg(),Eg()}}function yg(){if(vn===1){vn=0;var t=Ya,n=vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=wt;wt|=4;try{tg(n,t);var f=dd,v=om(t.containerInfo),C=f.focusedElem,B=f.selectionRange;if(v!==C&&C&&C.ownerDocument&&sm(C.ownerDocument.documentElement,C)){if(B!==null&&Iu(C)){var ee=B.start,de=B.end;if(de===void 0&&(de=ee),"selectionStart"in C)C.selectionStart=ee,C.selectionEnd=Math.min(de,C.value.length);else{var ve=C.ownerDocument||document,re=ve&&ve.defaultView||window;if(re.getSelection){var le=re.getSelection(),We=C.textContent.length,Je=Math.min(B.start,We),Vt=B.end===void 0?Je:Math.min(B.end,We);!le.extend&&Je>Vt&&(v=Vt,Vt=Je,Je=v);var Y=rm(C,Je),X=rm(C,Vt);if(Y&&X&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var $=ve.createRange();$.setStart(Y.node,Y.offset),le.removeAllRanges(),Je>Vt?(le.addRange($),le.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),le.addRange($))}}}}for(ve=[],le=C;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ve.length;C++){var me=ve[C];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}dc=!!fd,dd=fd=null}finally{wt=u,F.p=o,O.T=a}}t.current=n,vn=2}}function Mg(){if(vn===2){vn=0;var t=Ya,n=vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=wt;wt|=4;try{K0(t,n.alternate,n)}finally{wt=u,F.p=o,O.T=a}}vn=3}}function Eg(){if(vn===4||vn===3){vn=0,Bt();var t=Ya,n=vs,a=fa,o=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,vs=Ya=null,bg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(qa=null),Zs(a),n=n.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=F.p,F.p=2,O.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var C=o[v];f(C.value,{componentStack:C.stack})}}finally{O.T=n,F.p=u}}(fa&3)!==0&&ec(),Hi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Jf?No++:(No=0,Jf=t):No=0,Uo(0)}}function bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function ec(){return yg(),Mg(),Eg(),Tg()}function Tg(){if(vn!==5)return!1;var t=Ya,n=Kf;Kf=0;var a=Zs(fa),o=O.T,u=F.p;try{F.p=32>a?32:a,O.T=null,a=Qf,Qf=null;var f=Ya,v=fa;if(vn=0,vs=Ya=null,fa=0,(wt&6)!==0)throw Error(s(331));var C=wt;if(wt|=4,sg(f.current),ig(f,f.current,v,a),wt=C,Uo(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(ce,f)}catch{}return!0}finally{F.p=u,O.T=o,bg(t,n)}}function Ag(t,n,a){n=fi(a,n),n=Df(t.stateNode,n,2),t=Ga(t,n,2),t!==null&&(et(t,2),Hi(t))}function It(t,n,a){if(t.tag===3)Ag(t,t,a);else for(;n!==null;){if(n.tag===3){Ag(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){t=fi(a,t),a=C0(2),o=Ga(n,a,2),o!==null&&(R0(a,o,n,t),et(o,2),Hi(o));break}}n=n.return}}function td(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ry;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qf=!0,u.add(a),t=uy.bind(null,t,n,a),n.then(t,t))}function uy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(xt&a)===a&&(an===4||an===3&&(xt&62914560)===xt&&300>Ce()-Yl?(wt&2)===0&&xs(t,0):Yf|=a,_s===xt&&(_s=0)),Hi(t)}function Cg(t,n){n===0&&(n=ye()),t=xr(t,n),t!==null&&(et(t,n),Hi(t))}function fy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(t,a)}function dy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Cg(t,a)}function hy(t,n){return W(t,n)}var tc=null,ys=null,nd=!1,nc=!1,id=!1,Ka=0;function Hi(t){t!==ys&&t.next===null&&(ys===null?tc=ys=t:ys=ys.next=t),nc=!0,nd||(nd=!0,my())}function Uo(t,n){if(!id&&nc){id=!0;do for(var a=!1,o=tc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=u&~(v&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ng(o,f))}else f=xt,f=he(o,o===jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fe(o,f)||(a=!0,Ng(o,f));o=o.next}while(a);id=!1}}function py(){Rg()}function Rg(){nc=nd=!1;var t=0;Ka!==0&&Ty()&&(t=Ka);for(var n=Ce(),a=null,o=tc;o!==null;){var u=o.next,f=wg(o,n);f===0?(o.next=null,a===null?tc=u:a.next=u,u===null&&(ys=a)):(a=o,(t!==0||(f&3)!==0)&&(nc=!0)),o=u}vn!==0&&vn!==5||Uo(t),Ka!==0&&(Ka=0)}function wg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Pe(f),C=1<<v,B=u[v];B===-1?((C&a)===0||(C&o)!==0)&&(u[v]=Ue(C,n)):B<=n&&(t.expiredLanes|=C),f&=~C}if(n=jt,a=xt,a=he(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&en(o),Zs(a)){case 2:case 8:a=E;break;case 32:a=K;break;case 268435456:a=Ee;break;default:a=K}return o=Dg.bind(null,t),a=W(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&en(o),t.callbackPriority=2,t.callbackNode=null,2}function Dg(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ec()&&t.callbackNode!==a)return null;var o=xt;return o=he(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(fg(t,o,n),wg(t,Ce()),t.callbackNode!=null&&t.callbackNode===a?Dg.bind(null,t):null)}function Ng(t,n){if(ec())return null;fg(t,n,!0)}function my(){Cy(function(){(wt&6)!==0?W(w,py):Rg()})}function ad(){if(Ka===0){var t=ss;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),Ka=t}return Ka}function Ug(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:mr(""+t)}function Lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function gy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ug((u[bn]||null).action),v=o.submitter;v&&(n=(n=v[bn]||null)?Ug(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var C=new pl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var B=v?Lg(u,v):new FormData(u);bf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(C.preventDefault(),B=v?Lg(u,v):new FormData(u),bf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var rd=0;rd<Hu.length;rd++){var sd=Hu[rd],_y=sd.toLowerCase(),vy=sd[0].toUpperCase()+sd.slice(1);Ti(_y,"on"+vy)}Ti(um,"onAnimationEnd"),Ti(fm,"onAnimationIteration"),Ti(dm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(OS,"onTransitionRun"),Ti(PS,"onTransitionStart"),Ti(IS,"onTransitionCancel"),Ti(hm,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Og(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var C=o[v],B=C.instance,ee=C.currentTarget;if(C=C.listener,B!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ee;try{f(u)}catch(de){_l(de)}u.currentTarget=null,f=B}else for(v=0;v<o.length;v++){if(C=o[v],B=C.instance,ee=C.currentTarget,C=C.listener,B!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ee;try{f(u)}catch(de){_l(de)}u.currentTarget=null,f=B}}}}function _t(t,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=t+"__bubble";a.has(o)||(Pg(n,t,2,!1),a.add(o))}function od(t,n,a){var o=0;n&&(o|=4),Pg(a,t,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function ld(t){if(!t[ic]){t[ic]=!0,ul.forEach(function(a){a!=="selectionchange"&&(xy.has(a)||od(a,!1,t),od(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ic]||(n[ic]=!0,od("selectionchange",!1,n))}}function Pg(t,n,a,o){switch(u_(n)){case 2:var u=qy;break;case 8:u=Yy;break;default:u=Ed}a=u.bind(null,n,a,t),u=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function cd(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var C=o.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=o.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=Da(C),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){o=f=v;continue e}C=C.parentNode}}o=o.return}Hp(function(){var ee=f,de=Tu(a),ve=[];e:{var re=pm.get(t);if(re!==void 0){var le=pl,We=t;switch(t){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":le=dS;break;case"focusin":We="focus",le=Nu;break;case"focusout":We="blur",le=Nu;break;case"beforeblur":case"afterblur":le=Nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=eS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=mS;break;case um:case fm:case dm:le=iS;break;case hm:le=_S;break;case"scroll":case"scrollend":le=Jx;break;case"wheel":le=xS;break;case"copy":case"cut":case"paste":le=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Wp;break;case"toggle":case"beforetoggle":le=yS}var Je=(n&4)!==0,Vt=!Je&&(t==="scroll"||t==="scrollend"),Y=Je?re!==null?re+"Capture":null:re;Je=[];for(var X=ee,$;X!==null;){var me=X;if($=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||$===null||Y===null||(me=eo(X,Y),me!=null&&Je.push(Oo(X,me,$))),Vt)break;X=X.return}0<Je.length&&(re=new le(re,We,null,a,de),ve.push({event:re,listeners:Je}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&a!==bu&&(We=a.relatedTarget||a.fromElement)&&(Da(We)||We[Zi]))break e;if((le||re)&&(re=de.window===de?de:(re=de.ownerDocument)?re.defaultView||re.parentWindow:window,le?(We=a.relatedTarget||a.toElement,le=ee,We=We?Da(We):null,We!==null&&(Vt=c(We),Je=We.tag,We!==Vt||Je!==5&&Je!==27&&Je!==6)&&(We=null)):(le=null,We=ee),le!==We)){if(Je=kp,me="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Wp,me="onPointerLeave",Y="onPointerEnter",X="pointer"),Vt=le==null?re:pr(le),$=We==null?re:pr(We),re=new Je(me,X+"leave",le,a,de),re.target=Vt,re.relatedTarget=$,me=null,Da(de)===ee&&(Je=new Je(Y,X+"enter",We,a,de),Je.target=$,Je.relatedTarget=Vt,me=Je),Vt=me,le&&We)t:{for(Je=Sy,Y=le,X=We,$=0,me=Y;me;me=Je(me))$++;me=0;for(var Ke=X;Ke;Ke=Je(Ke))me++;for(;0<$-me;)Y=Je(Y),$--;for(;0<me-$;)X=Je(X),me--;for(;$--;){if(Y===X||X!==null&&Y===X.alternate){Je=Y;break t}Y=Je(Y),X=Je(X)}Je=null}else Je=null;le!==null&&Ig(ve,re,le,Je,!1),We!==null&&Vt!==null&&Ig(ve,Vt,We,Je,!0)}}e:{if(re=ee?pr(ee):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var At=$p;else if(Qp(re))if(em)At=NS;else{At=wS;var qe=RS}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ee&&Dt(ee.elementType)&&(At=$p):At=DS;if(At&&(At=At(t,ee))){Jp(ve,At,a,de);break e}qe&&qe(t,re,ee),t==="focusout"&&ee&&re.type==="number"&&ee.memoizedProps.value!=null&&mt(re,"number",re.value)}switch(qe=ee?pr(ee):window,t){case"focusin":(Qp(qe)||qe.contentEditable==="true")&&(Jr=qe,zu=ee,lo=null);break;case"focusout":lo=zu=Jr=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,lm(ve,a,de);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":lm(ve,a,de)}var ut;if(Lu)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Qr?Zp(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(jp&&a.locale!=="ko"&&(Qr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Qr&&(ut=Gp()):(Oa=de,Ru="value"in Oa?Oa.value:Oa.textContent,Qr=!0)),qe=ac(ee,St),0<qe.length&&(St=new Xp(St,t,null,a,de),ve.push({event:St,listeners:qe}),ut?St.data=ut:(ut=Kp(a),ut!==null&&(St.data=ut)))),(ut=ES?bS(t,a):TS(t,a))&&(St=ac(ee,"onBeforeInput"),0<St.length&&(qe=new Xp("onBeforeInput","beforeinput",null,a,de),ve.push({event:qe,listeners:St}),qe.data=ut)),gy(ve,t,ee,a,de)}Og(ve,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ac(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(t,a),u!=null&&o.unshift(Oo(t,u,f)),u=eo(t,n),u!=null&&o.push(Oo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Sy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ig(t,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var C=a,B=C.alternate,ee=C.stateNode;if(C=C.tag,B!==null&&B===o)break;C!==5&&C!==26&&C!==27||ee===null||(B=ee,u?(ee=eo(a,f),ee!=null&&v.unshift(Oo(a,ee,B))):u||(ee=eo(a,f),ee!=null&&v.push(Oo(a,ee,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var yy=/\r\n?/g,My=/\u0000|\uFFFD/g;function zg(t){return(typeof t=="string"?t:""+t).replace(yy,`
`).replace(My,"")}function Fg(t,n){return n=zg(n),zg(t)===n}function Gt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Qn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Qn(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":bi(t,o,f);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=mr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=mr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=mr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ii.get(a)||a,Ie(t,a,o))}}function ud(t,n,a,o,u,f){switch(a){case"style":bi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Qn(t,o):(typeof o=="number"||typeof o=="bigint")&&Qn(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ie(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,f,v,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var C=f=v=u=null,B=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":v=de;break;case"checked":B=de;break;case"defaultChecked":ee=de;break;case"value":f=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Gt(t,n,o,de,a,null)}}Un(t,f,C,B,ee,v,u,!1);return;case"select":_t("invalid",t),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":v=C;break;case"multiple":o=C;default:Gt(t,n,u,C,a,null)}n=f,a=v,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":_t("invalid",t),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Gt(t,n,v,C,a,null)}Ei(t,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,B,o,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)_t(Lo[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,ee,o,a,null)}return;default:if(Dt(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&ud(t,n,de,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Gt(t,n,C,o,a,null))}function Ey(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,C=null,B=null,ee=null,de=null;for(le in a){var ve=a[le];if(a.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=ve;default:o.hasOwnProperty(le)||Gt(t,n,le,null,o,ve)}}for(var re in o){var le=o[re];if(ve=a[re],o.hasOwnProperty(re)&&(le!=null||ve!=null))switch(re){case"type":f=le;break;case"name":u=le;break;case"checked":ee=le;break;case"defaultChecked":de=le;break;case"value":v=le;break;case"defaultValue":C=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ve&&Gt(t,n,re,le,o,ve)}}Ge(t,v,C,B,ee,de,f,u);return;case"select":le=v=C=re=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":re=f;break;case"defaultValue":C=f;break;case"multiple":v=f;default:f!==B&&Gt(t,n,u,f,o,B)}n=C,a=v,o=le,re!=null?_n(t,!!a,re,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":le=re=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Gt(t,n,C,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":re=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Gt(t,n,v,u,o,f)}Kn(t,re,le);return;case"option":for(var We in a)if(re=a[We],a.hasOwnProperty(We)&&re!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Gt(t,n,We,null,o,re)}for(B in o)if(re=o[B],le=a[B],o.hasOwnProperty(B)&&re!==le&&(re!=null||le!=null))switch(B){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Gt(t,n,B,re,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)re=a[Je],a.hasOwnProperty(Je)&&re!=null&&!o.hasOwnProperty(Je)&&Gt(t,n,Je,null,o,re);for(ee in o)if(re=o[ee],le=a[ee],o.hasOwnProperty(ee)&&re!==le&&(re!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Gt(t,n,ee,re,o,le)}return;default:if(Dt(n)){for(var Vt in a)re=a[Vt],a.hasOwnProperty(Vt)&&re!==void 0&&!o.hasOwnProperty(Vt)&&ud(t,n,Vt,void 0,o,re);for(de in o)re=o[de],le=a[de],!o.hasOwnProperty(de)||re===le||re===void 0&&le===void 0||ud(t,n,de,re,o,le);return}}for(var Y in a)re=a[Y],a.hasOwnProperty(Y)&&re!=null&&!o.hasOwnProperty(Y)&&Gt(t,n,Y,null,o,re);for(ve in o)re=o[ve],le=a[ve],!o.hasOwnProperty(ve)||re===le||re==null&&le==null||Gt(t,n,ve,re,o,le)}function Bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function by(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,C=u.duration;if(f&&C&&Bg(v)){for(v=0,C=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],ee=B.startTime;if(ee>C)break;var de=B.transferSize,ve=B.initiatorType;de&&Bg(ve)&&(B=B.responseEnd,v+=de*(B<C?1:(C-ee)/(B-ee)))}if(--o,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var fd=null,dd=null;function rc(t){return t.nodeType===9?t:t.ownerDocument}function Hg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pd=null;function Ty(){var t=window.event;return t&&t.type==="popstate"?t===pd?!1:(pd=t,!0):(pd=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(Ry)}:Vg;function Ry(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function Xg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ts(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var v=f.nextSibling,C=f.nodeName;f[wa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);Ts(n)}function Wg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function md(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":md(a),$s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function wy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function Dy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function jg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function gd(t){return t.data==="$?"||t.data==="$~"}function _d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ny(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vd=null;function qg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Zg(t,n,a){switch(n=rc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$s(t)}var _i=new Map,Kg=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=F.d;F.d={f:Uy,r:Ly,D:Oy,C:Py,L:Iy,m:zy,X:By,S:Fy,M:Hy};function Uy(){var t=da.f(),n=Ql();return t||n}function Ly(t){var n=Na(t);n!==null&&n.tag===5&&n.type==="form"?h0(n):da.r(t)}var Ms=typeof document>"u"?null:document;function Qg(t,n,a){var o=Ms;if(o&&typeof n=="string"&&n){var u=Lt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Kg.has(u)||(Kg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),un(n),o.head.appendChild(n)))}}function Oy(t){da.D(t),Qg("dns-prefetch",t,null)}function Py(t,n){da.C(t,n),Qg("preconnect",t,n)}function Iy(t,n,a){da.L(t,n,a);var o=Ms;if(o&&t&&n){var u='link[rel="preload"][as="'+Lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Lt(a.imageSizes)+'"]')):u+='[href="'+Lt(t)+'"]';var f=u;switch(n){case"style":f=Es(t);break;case"script":f=bs(t)}_i.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(f))||n==="script"&&o.querySelector(zo(f))||(n=o.createElement("link"),Rn(n,"link",t),un(n),o.head.appendChild(n)))}}function zy(t,n){da.m(t,n);var a=Ms;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Lt(o)+'"][href="'+Lt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=bs(t)}if(!_i.has(f)&&(t=_({rel:"modulepreload",href:t},n),_i.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}o=a.createElement("link"),Rn(o,"link",t),un(o),a.head.appendChild(o)}}}function Fy(t,n,a){da.S(t,n,a);var o=Ms;if(o&&t){var u=Ua(o).hoistableStyles,f=Es(t);n=n||"default";var v=u.get(f);if(!v){var C={loading:0,preload:null};if(v=o.querySelector(Io(f)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(f))&&xd(t,a);var B=v=o.createElement("link");un(B),Rn(B,"link",t),B._p=new Promise(function(ee,de){B.onload=ee,B.onerror=de}),B.addEventListener("load",function(){C.loading|=1}),B.addEventListener("error",function(){C.loading|=2}),C.loading|=4,oc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(f,v)}}}function By(t,n){da.X(t,n);var a=Ms;if(a&&t){var o=Ua(a).hoistableScripts,u=bs(t),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(t=_({src:t,async:!0},n),(n=_i.get(u))&&Sd(t,n),f=a.createElement("script"),un(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Hy(t,n){da.M(t,n);var a=Ms;if(a&&t){var o=Ua(a).hoistableScripts,u=bs(t),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&Sd(t,n),f=a.createElement("script"),un(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Jg(t,n,a,o){var u=(u=se.current)?sc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Es(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Es(a.href);var f=Ua(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Io(t)))&&!f._p&&(v.instance=f,v.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),f||Gy(u,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=bs(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Es(t){return'href="'+Lt(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function $g(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Gy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),un(n),t.head.appendChild(n))}function bs(t){return'[src="'+Lt(t)+'"]'}function zo(t){return"script[async]"+t}function e_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Lt(a.href)+'"]');if(o)return n.instance=o,un(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),un(o),Rn(o,"style",u),oc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Es(a.href);var f=t.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,un(f),f;o=$g(a),(u=_i.get(u))&&xd(o,u),f=(t.ownerDocument||t).createElement("link"),un(f);var v=f;return v._p=new Promise(function(C,B){v.onload=C,v.onerror=B}),Rn(f,"link",o),n.state.loading|=4,oc(f,a.precedence,t),n.instance=f;case"script":return f=bs(a.src),(u=t.querySelector(zo(f)))?(n.instance=u,un(u),u):(o=a,(u=_i.get(f))&&(o=_({},a),Sd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),un(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,t));return n.instance}function oc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var C=o[v];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function t_(t,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[wa]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var C=o.get(v);C?C.push(f):o.set(v,[f])}}return o}function n_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Vy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ky(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Es(o.href),f=n.querySelector(Io(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,un(f);return}f=n.ownerDocument||n,o=$g(o),(u=_i.get(u))&&xd(o,u),f=f.createElement("link"),un(f);var v=f;v._p=new Promise(function(C,B){v.onload=C,v.onerror=B}),Rn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var yd=0;function Xy(t,n){return t.stylesheets&&t.count===0&&fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&yd===0&&(yd=62500*by());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>yd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uc=null;function fc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(Wy,t),uc=null,cc.call(t))}function Wy(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var o=a.get(null);else{a=new Map,uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fo={$$typeof:N,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function jy(t,n,a,o,u,f,v,C,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function a_(t,n,a,o,u,f,v,C,B,ee,de,ve){return t=new jy(t,n,a,v,B,ee,de,ve,C),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=$u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},af(f),t}function r_(t){return t?(t=ts,t):ts}function s_(t,n,a,o,u,f){u=r_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ga(t,o,n),a!==null&&(Wn(a,t,n),go(a,t,n))}function o_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Md(t,n){o_(t,n),(t=t.alternate)&&o_(t,n)}function l_(t){if(t.tag===13||t.tag===31){var n=xr(t,67108864);n!==null&&Wn(n,t,67108864),Md(t,67108864)}}function c_(t){if(t.tag===13||t.tag===31){var n=ai();n=hr(n);var a=xr(t,n);a!==null&&Wn(a,t,n),Md(t,n)}}var dc=!0;function qy(t,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=2,Ed(t,n,a,o)}finally{F.p=f,O.T=u}}function Yy(t,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=8,Ed(t,n,a,o)}finally{F.p=f,O.T=u}}function Ed(t,n,a,o){if(dc){var u=bd(o);if(u===null)cd(t,n,o,hc,a),f_(t,o);else if(Ky(u,t,n,a,o))o.stopPropagation();else if(f_(t,o),n&4&&-1<Zy.indexOf(t)){for(;u!==null;){var f=Na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Te(f.pendingLanes);if(v!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var B=1<<31-Pe(v);C.entanglements[1]|=B,v&=~B}Hi(f),(wt&6)===0&&(Zl=Ce()+500,Uo(0))}}break;case 31:case 13:C=xr(f,2),C!==null&&Wn(C,f,2),Ql(),Md(f,2)}if(f=bd(o),f===null&&cd(t,n,o,hc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else cd(t,n,o,null,a)}}function bd(t){return t=Tu(t),Td(t)}var hc=null;function Td(t){if(hc=null,t=Da(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hc=t,null}function u_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kt()){case w:return 2;case E:return 8;case K:case _e:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var Ad=!1,Ja=null,$a=null,er=null,Bo=new Map,Ho=new Map,tr=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f_(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&l_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ky(t,n,a,o,u){switch(n){case"focusin":return Ja=Go(Ja,t,n,a,o,u),!0;case"dragenter":return $a=Go($a,t,n,a,o,u),!0;case"mouseover":return er=Go(er,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Bo.set(f,Go(Bo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Go(Ho.get(f)||null,t,n,a,o,u)),!0}return!1}function d_(t){var n=Da(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){c_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){c_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=bd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);bu=o,a.target.dispatchEvent(o),bu=null}else return n=Na(a),n!==null&&l_(n),t.blockedOn=a,!1;n.shift()}return!0}function h_(t,n,a){pc(t)&&a.delete(n)}function Qy(){Ad=!1,Ja!==null&&pc(Ja)&&(Ja=null),$a!==null&&pc($a)&&($a=null),er!==null&&pc(er)&&(er=null),Bo.forEach(h_),Ho.forEach(h_)}function mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ad||(Ad=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Qy)))}var gc=null;function p_(t){gc!==t&&(gc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Td(o||a)===null)continue;break}var f=Na(a);f!==null&&(t.splice(n,3),n-=3,bf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ts(t){function n(B){return mc(B,t)}Ja!==null&&mc(Ja,t),$a!==null&&mc($a,t),er!==null&&mc(er,t),Bo.forEach(n),Ho.forEach(n);for(var a=0;a<tr.length;a++){var o=tr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)d_(a),a.blockedOn===null&&tr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[bn]||null;if(typeof f=="function")v||p_(a);else if(v){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[bn]||null)C=v.formAction;else if(Td(u)!==null)continue}else C=v.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),p_(a)}}}function m_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Cd(t){this._internalRoot=t}_c.prototype.render=Cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();s_(a,o,t,n,null,null)},_c.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;s_(t.current,2,null,t,null,null),Ql(),n[Zi]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ks();t={blockedOn:null,target:t,priority:n};for(var a=0;a<tr.length&&n!==0&&n<tr[a].priority;a++);tr.splice(a,0,t),a===0&&d_(t)}};var g_=e.version;if(g_!=="19.2.0")throw Error(s(527,g_,"19.2.0"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Jy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{ce=vc.inject(Jy),ue=vc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=E0,f=b0,v=T0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=a_(t,1,!1,null,null,a,o,null,u,f,v,m_),t[Zi]=n.current,ld(t),new Cd(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=E0,v=b0,C=T0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=a_(t,1,!0,n,a??null,o,u,B,f,v,C,m_),n.context=r_(null),a=n.current,o=ai(),o=hr(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,et(n,a),Hi(n),t[Zi]=n.current,ld(t),new _c(n)},ko.version="19.2.0",ko}var A_;function l1(){if(A_)return Dd.exports;A_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dd.exports=o1(),Dd.exports}var c1=l1(),Od={exports:{}},Pd={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function u1(){if(C_)return Pd;C_=1;var r=hu();function e(m,p){return m===p&&(m!==0||1/m===1/p)||m!==m&&p!==p}var i=typeof Object.is=="function"?Object.is:e,s=r.useSyncExternalStore,l=r.useRef,c=r.useEffect,d=r.useMemo,h=r.useDebugValue;return Pd.useSyncExternalStoreWithSelector=function(m,p,x,_,g){var M=l(null);if(M.current===null){var b={hasValue:!1,value:null};M.current=b}else b=M.current;M=d(function(){function y(G){if(!S){if(S=!0,R=G,G=_(G),g!==void 0&&b.hasValue){var L=b.value;if(g(L,G))return N=L}return N=G}if(L=N,i(R,G))return L;var I=_(G);return g!==void 0&&g(L,I)?(R=G,L):(R=G,N=I)}var S=!1,R,N,U=x===void 0?null:x;return[function(){return y(p())},U===null?void 0:function(){return y(U())}]},[p,x,_,g]);var D=s(m,M[0],M[1]);return c(function(){b.hasValue=!0,b.value=D},[D]),h(D),D},Pd}var R_;function f1(){return R_||(R_=1,Od.exports=u1()),Od.exports}var d1=f1();function h1(r){r()}function p1(){let r=null,e=null;return{clear(){r=null,e=null},notify(){h1(()=>{let i=r;for(;i;)i.callback(),i=i.next})},get(){const i=[];let s=r;for(;s;)i.push(s),s=s.next;return i},subscribe(i){let s=!0;const l=e={callback:i,next:null,prev:e};return l.prev?l.prev.next=l:r=l,function(){!s||r===null||(s=!1,l.next?l.next.prev=l.prev:e=l.prev,l.prev?l.prev.next=l.next:r=l.next)}}}}var w_={notify(){},get:()=>[]};function m1(r,e){let i,s=w_,l=0,c=!1;function d(D){x();const y=s.subscribe(D);let S=!1;return()=>{S||(S=!0,y(),_())}}function h(){s.notify()}function m(){b.onStateChange&&b.onStateChange()}function p(){return c}function x(){l++,i||(i=r.subscribe(m),s=p1())}function _(){l--,i&&l===0&&(i(),i=void 0,s.clear(),s=w_)}function g(){c||(c=!0,x())}function M(){c&&(c=!1,_())}const b={addNestedSub:d,notifyNestedSubs:h,handleChangeWrapper:m,isSubscribed:p,trySubscribe:g,tryUnsubscribe:M,getListeners:()=>s};return b}var g1=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_1=g1(),v1=()=>typeof navigator<"u"&&navigator.product==="ReactNative",x1=v1(),S1=()=>_1||x1?nt.useLayoutEffect:nt.useEffect,y1=S1(),M1=Symbol.for("react-redux-context"),E1=typeof globalThis<"u"?globalThis:{};function b1(){if(!nt.createContext)return{};const r=E1[M1]??=new Map;let e=r.get(nt.createContext);return e||(e=nt.createContext(null),r.set(nt.createContext,e)),e}var fr=b1();function T1(r){const{children:e,context:i,serverState:s,store:l}=r,c=nt.useMemo(()=>{const m=m1(l);return{store:l,subscription:m,getServerState:s?()=>s:void 0}},[l,s]),d=nt.useMemo(()=>l.getState(),[l]);y1(()=>{const{subscription:m}=c;return m.onStateChange=m.notifyNestedSubs,m.trySubscribe(),d!==l.getState()&&m.notifyNestedSubs(),()=>{m.tryUnsubscribe(),m.onStateChange=void 0}},[c,d]);const h=i||fr;return nt.createElement(h.Provider,{value:c},e)}var A1=T1;function _p(r=fr){return function(){return nt.useContext(r)}}var Yv=_p();function Zv(r=fr){const e=r===fr?Yv:_p(r),i=()=>{const{store:s}=e();return s};return Object.assign(i,{withTypes:()=>i}),i}var C1=Zv();function R1(r=fr){const e=r===fr?C1:Zv(r),i=()=>e().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var Kv=R1(),w1=(r,e)=>r===e;function D1(r=fr){const e=r===fr?Yv:_p(r),i=(s,l={})=>{const{equalityFn:c=w1}=typeof l=="function"?{equalityFn:l}:l,d=e(),{store:h,subscription:m,getServerState:p}=d;nt.useRef(!0);const x=nt.useCallback({[s.name](g){return s(g)}}[s.name],[s]),_=d1.useSyncExternalStoreWithSelector(m.addNestedSub,h.getState,p||h.getState,x,c);return nt.useDebugValue(_),_};return Object.assign(i,{withTypes:()=>i}),i}var pu=D1();function wn(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var N1=typeof Symbol=="function"&&Symbol.observable||"@@observable",D_=N1,Id=()=>Math.random().toString(36).substring(7).split("").join("."),U1={INIT:`@@redux/INIT${Id()}`,REPLACE:`@@redux/REPLACE${Id()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Id()}`},$c=U1;function vp(r){if(typeof r!="object"||r===null)return!1;let e=r;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e||Object.getPrototypeOf(r)===null}function Qv(r,e,i){if(typeof r!="function")throw new Error(wn(2));if(typeof e=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(wn(0));if(typeof e=="function"&&typeof i>"u"&&(i=e,e=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(wn(1));return i(Qv)(r,e)}let s=r,l=e,c=new Map,d=c,h=0,m=!1;function p(){d===c&&(d=new Map,c.forEach((y,S)=>{d.set(S,y)}))}function x(){if(m)throw new Error(wn(3));return l}function _(y){if(typeof y!="function")throw new Error(wn(4));if(m)throw new Error(wn(5));let S=!0;p();const R=h++;return d.set(R,y),function(){if(S){if(m)throw new Error(wn(6));S=!1,p(),d.delete(R),c=null}}}function g(y){if(!vp(y))throw new Error(wn(7));if(typeof y.type>"u")throw new Error(wn(8));if(typeof y.type!="string")throw new Error(wn(17));if(m)throw new Error(wn(9));try{m=!0,l=s(l,y)}finally{m=!1}return(c=d).forEach(R=>{R()}),y}function M(y){if(typeof y!="function")throw new Error(wn(10));s=y,g({type:$c.REPLACE})}function b(){const y=_;return{subscribe(S){if(typeof S!="object"||S===null)throw new Error(wn(11));function R(){const U=S;U.next&&U.next(x())}return R(),{unsubscribe:y(R)}},[D_](){return this}}}return g({type:$c.INIT}),{dispatch:g,subscribe:_,getState:x,replaceReducer:M,[D_]:b}}function L1(r){Object.keys(r).forEach(e=>{const i=r[e];if(typeof i(void 0,{type:$c.INIT})>"u")throw new Error(wn(12));if(typeof i(void 0,{type:$c.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(wn(13))})}function O1(r){const e=Object.keys(r),i={};for(let c=0;c<e.length;c++){const d=e[c];typeof r[d]=="function"&&(i[d]=r[d])}const s=Object.keys(i);let l;try{L1(i)}catch(c){l=c}return function(d={},h){if(l)throw l;let m=!1;const p={};for(let x=0;x<s.length;x++){const _=s[x],g=i[_],M=d[_],b=g(M,h);if(typeof b>"u")throw h&&h.type,new Error(wn(14));p[_]=b,m=m||b!==M}return m=m||s.length!==Object.keys(d).length,m?p:d}}function eu(...r){return r.length===0?e=>e:r.length===1?r[0]:r.reduce((e,i)=>(...s)=>e(i(...s)))}function P1(...r){return e=>(i,s)=>{const l=e(i,s);let c=()=>{throw new Error(wn(15))};const d={getState:l.getState,dispatch:(m,...p)=>c(m,...p)},h=r.map(m=>m(d));return c=eu(...h)(l.dispatch),{...l,dispatch:c}}}function I1(r){return vp(r)&&"type"in r&&typeof r.type=="string"}var Jv=Symbol.for("immer-nothing"),N_=Symbol.for("immer-draftable"),oi=Symbol.for("immer-state");function Ni(r,...e){throw new Error(`[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`)}var Vs=Object.getPrototypeOf;function Vr(r){return!!r&&!!r[oi]}function ba(r){return r?$v(r)||Array.isArray(r)||!!r[N_]||!!r.constructor?.[N_]||al(r)||gu(r):!1}var z1=Object.prototype.constructor.toString();function $v(r){if(!r||typeof r!="object")return!1;const e=Vs(r);if(e===null)return!0;const i=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===z1}function tu(r,e){mu(r)===0?Reflect.ownKeys(r).forEach(i=>{e(i,r[i],r)}):r.forEach((i,s)=>e(s,i,r))}function mu(r){const e=r[oi];return e?e.type_:Array.isArray(r)?1:al(r)?2:gu(r)?3:0}function vh(r,e){return mu(r)===2?r.has(e):Object.prototype.hasOwnProperty.call(r,e)}function ex(r,e,i){const s=mu(r);s===2?r.set(e,i):s===3?r.add(i):r[e]=i}function F1(r,e){return r===e?r!==0||1/r===1/e:r!==r&&e!==e}function al(r){return r instanceof Map}function gu(r){return r instanceof Set}function Ir(r){return r.copy_||r.base_}function xh(r,e){if(al(r))return new Map(r);if(gu(r))return new Set(r);if(Array.isArray(r))return Array.prototype.slice.call(r);const i=$v(r);if(e===!0||e==="class_only"&&!i){const s=Object.getOwnPropertyDescriptors(r);delete s[oi];let l=Reflect.ownKeys(s);for(let c=0;c<l.length;c++){const d=l[c],h=s[d];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(s[d]={configurable:!0,writable:!0,enumerable:h.enumerable,value:r[d]})}return Object.create(Vs(r),s)}else{const s=Vs(r);if(s!==null&&i)return{...r};const l=Object.create(s);return Object.assign(l,r)}}function xp(r,e=!1){return _u(r)||Vr(r)||!ba(r)||(mu(r)>1&&Object.defineProperties(r,{set:{value:xc},add:{value:xc},clear:{value:xc},delete:{value:xc}}),Object.freeze(r),e&&Object.values(r).forEach(i=>xp(i,!0))),r}function xc(){Ni(2)}function _u(r){return Object.isFrozen(r)}var B1={};function kr(r){const e=B1[r];return e||Ni(0,r),e}var el;function tx(){return el}function H1(r,e){return{drafts_:[],parent_:r,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function U_(r,e){e&&(kr("Patches"),r.patches_=[],r.inversePatches_=[],r.patchListener_=e)}function Sh(r){yh(r),r.drafts_.forEach(G1),r.drafts_=null}function yh(r){r===el&&(el=r.parent_)}function L_(r){return el=H1(el,r)}function G1(r){const e=r[oi];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function O_(r,e){e.unfinalizedDrafts_=e.drafts_.length;const i=e.drafts_[0];return r!==void 0&&r!==i?(i[oi].modified_&&(Sh(e),Ni(4)),ba(r)&&(r=nu(e,r),e.parent_||iu(e,r)),e.patches_&&kr("Patches").generateReplacementPatches_(i[oi].base_,r,e.patches_,e.inversePatches_)):r=nu(e,i,[]),Sh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),r!==Jv?r:void 0}function nu(r,e,i){if(_u(e))return e;const s=e[oi];if(!s)return tu(e,(l,c)=>P_(r,s,e,l,c,i)),e;if(s.scope_!==r)return e;if(!s.modified_)return iu(r,s.base_,!0),s.base_;if(!s.finalized_){s.finalized_=!0,s.scope_.unfinalizedDrafts_--;const l=s.copy_;let c=l,d=!1;s.type_===3&&(c=new Set(l),l.clear(),d=!0),tu(c,(h,m)=>P_(r,s,l,h,m,i,d)),iu(r,l,!1),i&&r.patches_&&kr("Patches").generatePatches_(s,i,r.patches_,r.inversePatches_)}return s.copy_}function P_(r,e,i,s,l,c,d){if(Vr(l)){const h=c&&e&&e.type_!==3&&!vh(e.assigned_,s)?c.concat(s):void 0,m=nu(r,l,h);if(ex(i,s,m),Vr(m))r.canAutoFreeze_=!1;else return}else d&&i.add(l);if(ba(l)&&!_u(l)){if(!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1)return;nu(r,l),(!e||!e.scope_.parent_)&&typeof s!="symbol"&&(al(i)?i.has(s):Object.prototype.propertyIsEnumerable.call(i,s))&&iu(r,l)}}function iu(r,e,i=!1){!r.parent_&&r.immer_.autoFreeze_&&r.canAutoFreeze_&&xp(e,i)}function V1(r,e){const i=Array.isArray(r),s={type_:i?1:0,scope_:e?e.scope_:tx(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:r,draft_:null,copy_:null,revoke_:null,isManual_:!1};let l=s,c=Sp;i&&(l=[s],c=tl);const{revoke:d,proxy:h}=Proxy.revocable(l,c);return s.draft_=h,s.revoke_=d,h}var Sp={get(r,e){if(e===oi)return r;const i=Ir(r);if(!vh(i,e))return k1(r,i,e);const s=i[e];return r.finalized_||!ba(s)?s:s===zd(r.base_,e)?(Fd(r),r.copy_[e]=Eh(s,r)):s},has(r,e){return e in Ir(r)},ownKeys(r){return Reflect.ownKeys(Ir(r))},set(r,e,i){const s=nx(Ir(r),e);if(s?.set)return s.set.call(r.draft_,i),!0;if(!r.modified_){const l=zd(Ir(r),e),c=l?.[oi];if(c&&c.base_===i)return r.copy_[e]=i,r.assigned_[e]=!1,!0;if(F1(i,l)&&(i!==void 0||vh(r.base_,e)))return!0;Fd(r),Mh(r)}return r.copy_[e]===i&&(i!==void 0||e in r.copy_)||Number.isNaN(i)&&Number.isNaN(r.copy_[e])||(r.copy_[e]=i,r.assigned_[e]=!0),!0},deleteProperty(r,e){return zd(r.base_,e)!==void 0||e in r.base_?(r.assigned_[e]=!1,Fd(r),Mh(r)):delete r.assigned_[e],r.copy_&&delete r.copy_[e],!0},getOwnPropertyDescriptor(r,e){const i=Ir(r),s=Reflect.getOwnPropertyDescriptor(i,e);return s&&{writable:!0,configurable:r.type_!==1||e!=="length",enumerable:s.enumerable,value:i[e]}},defineProperty(){Ni(11)},getPrototypeOf(r){return Vs(r.base_)},setPrototypeOf(){Ni(12)}},tl={};tu(Sp,(r,e)=>{tl[r]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});tl.deleteProperty=function(r,e){return tl.set.call(this,r,e,void 0)};tl.set=function(r,e,i){return Sp.set.call(this,r[0],e,i,r[0])};function zd(r,e){const i=r[oi];return(i?Ir(i):r)[e]}function k1(r,e,i){const s=nx(e,i);return s?"value"in s?s.value:s.get?.call(r.draft_):void 0}function nx(r,e){if(!(e in r))return;let i=Vs(r);for(;i;){const s=Object.getOwnPropertyDescriptor(i,e);if(s)return s;i=Vs(i)}}function Mh(r){r.modified_||(r.modified_=!0,r.parent_&&Mh(r.parent_))}function Fd(r){r.copy_||(r.copy_=xh(r.base_,r.scope_.immer_.useStrictShallowCopy_))}var X1=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,i,s)=>{if(typeof e=="function"&&typeof i!="function"){const c=i;i=e;const d=this;return function(m=c,...p){return d.produce(m,x=>i.call(this,x,...p))}}typeof i!="function"&&Ni(6),s!==void 0&&typeof s!="function"&&Ni(7);let l;if(ba(e)){const c=L_(this),d=Eh(e,void 0);let h=!0;try{l=i(d),h=!1}finally{h?Sh(c):yh(c)}return U_(c,s),O_(l,c)}else if(!e||typeof e!="object"){if(l=i(e),l===void 0&&(l=e),l===Jv&&(l=void 0),this.autoFreeze_&&xp(l,!0),s){const c=[],d=[];kr("Patches").generateReplacementPatches_(e,l,c,d),s(c,d)}return l}else Ni(1,e)},this.produceWithPatches=(e,i)=>{if(typeof e=="function")return(d,...h)=>this.produceWithPatches(d,m=>e(m,...h));let s,l;return[this.produce(e,i,(d,h)=>{s=d,l=h}),s,l]},typeof r?.autoFreeze=="boolean"&&this.setAutoFreeze(r.autoFreeze),typeof r?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(r.useStrictShallowCopy)}createDraft(r){ba(r)||Ni(8),Vr(r)&&(r=W1(r));const e=L_(this),i=Eh(r,void 0);return i[oi].isManual_=!0,yh(e),i}finishDraft(r,e){const i=r&&r[oi];(!i||!i.isManual_)&&Ni(9);const{scope_:s}=i;return U_(s,e),O_(void 0,s)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}applyPatches(r,e){let i;for(i=e.length-1;i>=0;i--){const l=e[i];if(l.path.length===0&&l.op==="replace"){r=l.value;break}}i>-1&&(e=e.slice(i+1));const s=kr("Patches").applyPatches_;return Vr(r)?s(r,e):this.produce(r,l=>s(l,e))}};function Eh(r,e){const i=al(r)?kr("MapSet").proxyMap_(r,e):gu(r)?kr("MapSet").proxySet_(r,e):V1(r,e);return(e?e.scope_:tx()).drafts_.push(i),i}function W1(r){return Vr(r)||Ni(10,r),ix(r)}function ix(r){if(!ba(r)||_u(r))return r;const e=r[oi];let i;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,i=xh(r,e.scope_.immer_.useStrictShallowCopy_)}else i=xh(r,!0);return tu(i,(s,l)=>{ex(i,s,ix(l))}),e&&(e.finalized_=!1),i}var j1=new X1,ax=j1.produce;function rx(r){return({dispatch:i,getState:s})=>l=>c=>typeof c=="function"?c(i,s,r):l(c)}var q1=rx(),Y1=rx,Z1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?eu:eu.apply(null,arguments)};function I_(r,e){function i(...s){if(e){let l=e(...s);if(!l)throw new Error(Sa(0));return{type:r,payload:l.payload,..."meta"in l&&{meta:l.meta},..."error"in l&&{error:l.error}}}return{type:r,payload:s[0]}}return i.toString=()=>`${r}`,i.type=r,i.match=s=>I1(s)&&s.type===r,i}var sx=class Qo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Qo.prototype)}static get[Symbol.species](){return Qo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Qo(...e[0].concat(this)):new Qo(...e.concat(this))}};function z_(r){return ba(r)?ax(r,()=>{}):r}function Sc(r,e,i){return r.has(e)?r.get(e):r.set(e,i(e)).get(e)}function K1(r){return typeof r=="boolean"}var Q1=()=>function(e){const{thunk:i=!0,immutableCheck:s=!0,serializableCheck:l=!0,actionCreatorCheck:c=!0}=e??{};let d=new sx;return i&&(K1(i)?d.push(q1):d.push(Y1(i.extraArgument))),d},J1="RTK_autoBatch",F_=r=>e=>{setTimeout(e,r)},$1=(r={type:"raf"})=>e=>(...i)=>{const s=e(...i);let l=!0,c=!1,d=!1;const h=new Set,m=r.type==="tick"?queueMicrotask:r.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:F_(10):r.type==="callback"?r.queueNotification:F_(r.timeout),p=()=>{d=!1,c&&(c=!1,h.forEach(x=>x()))};return Object.assign({},s,{subscribe(x){const _=()=>l&&x(),g=s.subscribe(_);return h.add(x),()=>{g(),h.delete(x)}},dispatch(x){try{return l=!x?.meta?.[J1],c=!l,c&&(d||(d=!0,m(p))),s.dispatch(x)}finally{l=!0}}})},eM=r=>function(i){const{autoBatch:s=!0}=i??{};let l=new sx(r);return s&&l.push($1(typeof s=="object"?s:void 0)),l};function tM(r){const e=Q1(),{reducer:i=void 0,middleware:s,devTools:l=!0,preloadedState:c=void 0,enhancers:d=void 0}=r||{};let h;if(typeof i=="function")h=i;else if(vp(i))h=O1(i);else throw new Error(Sa(1));let m;typeof s=="function"?m=s(e):m=e();let p=eu;l&&(p=Z1({trace:!1,...typeof l=="object"&&l}));const x=P1(...m),_=eM(x);let g=typeof d=="function"?d(_):_();const M=p(...g);return Qv(h,c,M)}function ox(r){const e={},i=[];let s;const l={addCase(c,d){const h=typeof c=="string"?c:c.type;if(!h)throw new Error(Sa(28));if(h in e)throw new Error(Sa(29));return e[h]=d,l},addAsyncThunk(c,d){return d.pending&&(e[c.pending.type]=d.pending),d.rejected&&(e[c.rejected.type]=d.rejected),d.fulfilled&&(e[c.fulfilled.type]=d.fulfilled),d.settled&&i.push({matcher:c.settled,reducer:d.settled}),l},addMatcher(c,d){return i.push({matcher:c,reducer:d}),l},addDefaultCase(c){return s=c,l}};return r(l),[e,i,s]}function nM(r){return typeof r=="function"}function iM(r,e){let[i,s,l]=ox(e),c;if(nM(r))c=()=>z_(r());else{const h=z_(r);c=()=>h}function d(h=c(),m){let p=[i[m.type],...s.filter(({matcher:x})=>x(m)).map(({reducer:x})=>x)];return p.filter(x=>!!x).length===0&&(p=[l]),p.reduce((x,_)=>{if(_)if(Vr(x)){const M=_(x,m);return M===void 0?x:M}else{if(ba(x))return ax(x,g=>_(g,m));{const g=_(x,m);if(g===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return x},h)}return d.getInitialState=c,d}var aM=Symbol.for("rtk-slice-createasyncthunk");function rM(r,e){return`${r}/${e}`}function sM({creators:r}={}){const e=r?.asyncThunk?.[aM];return function(s){const{name:l,reducerPath:c=l}=s;if(!l)throw new Error(Sa(11));const d=(typeof s.reducers=="function"?s.reducers(cM()):s.reducers)||{},h=Object.keys(d),m={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},p={addCase(N,U){const G=typeof N=="string"?N:N.type;if(!G)throw new Error(Sa(12));if(G in m.sliceCaseReducersByType)throw new Error(Sa(13));return m.sliceCaseReducersByType[G]=U,p},addMatcher(N,U){return m.sliceMatchers.push({matcher:N,reducer:U}),p},exposeAction(N,U){return m.actionCreators[N]=U,p},exposeCaseReducer(N,U){return m.sliceCaseReducersByName[N]=U,p}};h.forEach(N=>{const U=d[N],G={reducerName:N,type:rM(l,N),createNotation:typeof s.reducers=="function"};fM(U)?hM(G,U,p,e):uM(G,U,p)});function x(){const[N={},U=[],G=void 0]=typeof s.extraReducers=="function"?ox(s.extraReducers):[s.extraReducers],L={...N,...m.sliceCaseReducersByType};return iM(s.initialState,I=>{for(let T in L)I.addCase(T,L[T]);for(let T of m.sliceMatchers)I.addMatcher(T.matcher,T.reducer);for(let T of U)I.addMatcher(T.matcher,T.reducer);G&&I.addDefaultCase(G)})}const _=N=>N,g=new Map,M=new WeakMap;let b;function D(N,U){return b||(b=x()),b(N,U)}function y(){return b||(b=x()),b.getInitialState()}function S(N,U=!1){function G(I){let T=I[N];return typeof T>"u"&&U&&(T=Sc(M,G,y)),T}function L(I=_){const T=Sc(g,U,()=>new WeakMap);return Sc(T,I,()=>{const z={};for(const[Z,V]of Object.entries(s.selectors??{}))z[Z]=oM(V,I,()=>Sc(M,I,y),U);return z})}return{reducerPath:N,getSelectors:L,get selectors(){return L(G)},selectSlice:G}}const R={name:l,reducer:D,actions:m.actionCreators,caseReducers:m.sliceCaseReducersByName,getInitialState:y,...S(c),injectInto(N,{reducerPath:U,...G}={}){const L=U??c;return N.inject({reducerPath:L,reducer:D},G),{...R,...S(L,!0)}}};return R}}function oM(r,e,i,s){function l(c,...d){let h=e(c);return typeof h>"u"&&s&&(h=i()),r(h,...d)}return l.unwrapped=r,l}var lM=sM();function cM(){function r(e,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...i}}return r.withTypes=()=>r,{reducer(e){return Object.assign({[e.name](...i){return e(...i)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:i}},asyncThunk:r}}function uM({type:r,reducerName:e,createNotation:i},s,l){let c,d;if("reducer"in s){if(i&&!dM(s))throw new Error(Sa(17));c=s.reducer,d=s.prepare}else c=s;l.addCase(r,c).exposeCaseReducer(e,c).exposeAction(e,d?I_(r,d):I_(r))}function fM(r){return r._reducerDefinitionType==="asyncThunk"}function dM(r){return r._reducerDefinitionType==="reducerWithPrepare"}function hM({type:r,reducerName:e},i,s,l){if(!l)throw new Error(Sa(18));const{payloadCreator:c,fulfilled:d,pending:h,rejected:m,settled:p,options:x}=i,_=l(r,c,x);s.exposeAction(e,_),d&&s.addCase(_.fulfilled,d),h&&s.addCase(_.pending,h),m&&s.addCase(_.rejected,m),p&&s.addMatcher(_.settled,p),s.exposeCaseReducer(e,{fulfilled:d||yc,pending:h||yc,rejected:m||yc,settled:p||yc})}function yc(){}function Sa(r){return`Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}const pM={mode:"light"},lx=lM({name:"theme",initialState:pM,reducers:{toggleTheme:r=>{r.mode=r.mode==="light"?"dark":"light"},setTheme:(r,e)=>{r.mode=e.payload}}}),{toggleTheme:mM,setTheme:B_}=lx.actions,gM=lx.reducer,_M=tM({reducer:{theme:gM}});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xM=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),H_=r=>{const e=xM(r);return e.charAt(0).toUpperCase()+e.slice(1)},cx=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),SM=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=nt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>nt.createElement("svg",{ref:m,...yM,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:cx("lucide",l),...!c&&!SM(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,x])=>nt.createElement(p,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=(r,e)=>{const i=nt.forwardRef(({className:s,...l},c)=>nt.createElement(MM,{ref:c,iconNode:e,className:cx(`lucide-${vM(H_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=H_(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ux=li("award",EM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],fx=li("calendar",bM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],yp=li("external-link",TM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],dx=li("file-text",AM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],vu=li("github",CM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],bh=li("linkedin",RM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Mp=li("map-pin",wM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],NM=li("menu",DM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],G_=li("moon",UM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]],OM=li("move-right",LM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],V_=li("sun",PM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],zM=li("wrench",IM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hx=li("x",FM),k_=()=>{const r=Kv(),e=pu(i=>i.theme.mode);return H.jsx("button",{className:"theme-toggle",onClick:()=>r(mM()),"aria-label":"Toggle theme",children:H.jsxs("div",{className:"toggle-track",children:[H.jsx("div",{className:`toggle-thumb ${e==="dark"?"dark":"light"}`,children:e==="light"?H.jsx(V_,{size:16}):H.jsx(G_,{size:16})}),H.jsxs("div",{className:"toggle-icons",children:[H.jsx(V_,{size:14,className:"sun-icon"}),H.jsx(G_,{size:14,className:"moon-icon"})]})]})})},BM=()=>{const[r,e]=nt.useState(!1),[i,s]=nt.useState(!1),[l,c]=nt.useState("hero");nt.useEffect(()=>{const m=()=>{s(window.scrollY>50)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]),nt.useEffect(()=>{const m=["hero","about","education","experience","skills","projects","contact"],p=()=>{const x=window.scrollY+150;let _="hero";for(const g of m){const M=document.getElementById(g);if(M){const{offsetTop:b,offsetHeight:D}=M;if(x>=b&&x<b+D){_=g;break}}}c(_)};return p(),window.addEventListener("scroll",p),window.addEventListener("resize",p),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[]);const d=[{name:"Home",id:"hero"},{name:"About Me",id:"about"},{name:"Education",id:"education"},{name:"Experience",id:"experience"},{name:"Projects",id:"projects"},{name:"Skills",id:"skills"},{name:"Contact",id:"contact"}],h=m=>{const p=document.getElementById(m);if(p){const _=p.offsetTop-80;window.scrollTo({top:_,behavior:"smooth"}),e(!1)}};return H.jsxs("nav",{className:`navbar ${i?"scrolled":""} ${l==="hero"?"hide-brand":""}`,"data-section":l,children:[H.jsxs("div",{className:"nav-container",children:[H.jsxs("div",{className:"nav-brand",children:[H.jsx("span",{className:"brand-full",children:"Kaushik Parthasarathy"}),H.jsx("span",{className:"brand-short",children:"KP"})]}),H.jsxs("div",{className:"nav-desktop",children:[d.map(m=>H.jsx("button",{onClick:()=>h(m.id),className:`nav-link ${l===m.id?"active":""}`,children:m.name},m.id)),H.jsx(k_,{})]}),H.jsxs("div",{className:"nav-mobile",children:[H.jsx(k_,{}),H.jsx("button",{className:"hamburger",onClick:()=>e(!r),children:r?H.jsx(hx,{size:24}):H.jsx(NM,{size:24})})]})]}),r&&H.jsx("div",{className:"mobile-menu",children:d.map(m=>H.jsx("button",{onClick:()=>h(m.id),className:`mobile-link ${l===m.id?"active":""}`,children:m.name},m.id))})]})},HM="Kaushik Parthasarathy",GM="Software Engineer | AI/ML Systems | Distributed & Full-Stack",VM=`I build reliable software systems, from architecture and algorithms to production deployment. My work spans full-stack platforms, AI/ML pipelines, agentic LLM systems, and production infrastructure, with a focus on modular architectures that stay maintainable as they scale.

The thread through most of what I build is information provenance: where an answer came from, how we know it is correct, and how to make it structurally impossible for a system to lose that trace. I care about clear abstractions, concrete tradeoffs between performance and flexibility, and systems that are easy to extend and operate in real environments.

Previously, I worked on fintech systems at Wells Fargo supporting portfolio applications managing $400B+ in assets, and on computer vision data pipelines developed in collaboration with ISRO and NIT Trichy. I'm currently pursuing an MS in Computer Science at UMass Amherst, focused on AI/ML systems and scalable software engineering.`,kM="https://linkedin.com/in/kaushikparthasarathy",XM="https://github.com/vpk-11",WM="https://drive.google.com/file/d/1dGTLIkyNHbv8OMUUEAz_KWescgxd_f3J/view?usp=drive_link",jM="Amherst, MA | MS CS @ UMass",qM="Open to Work",YM=["Software Engineering","AI / ML Engineering","Full-Stack","Frontend","Backend","Research","Data Science","Systems Engineering","Project / Product Management"],ZM="F-1 · CPT authorized · Will require STEM OPT / H-1B sponsorship",KM=["Clean abstractions beat clever code","Scalable systems should be boring in production","ML is engineering, not magic","Deployment is part of the feature","Ship early, iterate deliberately","Good architecture makes the next change easier"],QM="I'm currently looking for new opportunities. Whether you have a question or just want to connect, feel free to reach out on LinkedIn!",Ep={name:HM,title:GM,bio:VM,linkedin:kM,github:XM,resume:WM,location:jM,availability:qM,targetRoles:YM,workAuthorization:ZM,principles:KM,txt:QM},JM=()=>{const r=Ep,[e,...i]=r.name.split(" "),s=i.join(" "),l=r.workAuthorization.split("·").slice(0,2).map(c=>c.trim()).join(" · ");return H.jsxs("section",{id:"hero",className:"section hero-section",children:[H.jsx("div",{className:"hero-watermark","aria-hidden":"true",children:"VPK"}),H.jsx("div",{className:"container",children:H.jsxs("div",{className:"hero-content",children:[H.jsxs("h1",{className:"hero-name",children:[H.jsx("span",{className:"hero-fn",children:e}),H.jsx("span",{className:"hero-ln",children:s})]}),H.jsx("div",{className:"hero-divider","aria-hidden":"true"}),H.jsx("p",{className:"hero-role",children:r.title}),H.jsxs("div",{className:"hero-status-bar",children:[H.jsxs("span",{className:"hero-avail-badge",children:[H.jsx("span",{className:"status-dot","aria-hidden":"true"}),r.availability.toLowerCase()]}),H.jsx("span",{className:"hero-meta-sep","aria-hidden":"true",children:"·"}),H.jsxs("span",{className:"hero-meta",children:[H.jsx(Mp,{size:16}),r.location]}),H.jsx("span",{className:"hero-meta-sep","aria-hidden":"true",children:"·"}),H.jsx("span",{className:"hero-meta",children:l})]}),H.jsxs("div",{className:"hero-links",children:[H.jsxs("a",{href:r.linkedin,target:"_blank",rel:"noopener noreferrer",className:"hero-link hero-link-primary",children:[H.jsx(bh,{size:18}),H.jsx("span",{children:"LinkedIn"})]}),H.jsxs("a",{href:r.github,target:"_blank",rel:"noopener noreferrer",className:"hero-link hero-link-secondary",children:[H.jsx(vu,{size:18}),H.jsx("span",{children:"GitHub"})]}),H.jsxs("a",{href:r.resume,target:"_blank",rel:"noopener noreferrer",className:"hero-link hero-link-secondary",children:[H.jsx(dx,{size:18}),H.jsx("span",{children:"Resume"})]})]})]})})]})},$M=[{id:1,role:"Program Associate - Software Engineer",company:"Wells Fargo",location:"Bengaluru, KA, India",duration:"Aug 2024 - Jul 2025",description:"**Software Engineer** in the Investment Portfolio Technology division (CCIBT, Commercial & Corporate Investment Banking).",achievements:["Built **React UI components**, **.NET APIs**, and **Python** backend utilities for portfolio management applications handling **$400B+ in assets**, owning each feature from API design and component architecture through backend logic and deployment.","Built the **OpenShift (Kubernetes)** deployment architecture for the team, achieving **100% adoption across the division**, and migrated applications to the cloud, improving performance and reducing infrastructure dependencies.","Managed **on-call production operations** across **Agile** sprint cycles, investigating user-reported issues, analyzing logs, and applying targeted fixes to keep critical financial systems stable."],tech:["React",".NET","Python","OpenShift","Kubernetes","Docker","GitHub Actions","Agile","CI/CD"]},{id:2,role:"Research Intern",company:"Indian Space Research Organisation",location:"Trichy, TN, India",duration:"Mar 2024 - Jul 2024",description:"Research internship under **Dr. M. Sridevi (Associate Professor, NIT Trichy CSE)** in collaboration with **ISRO Yukti Sanchita**, contributing to the project *'Development of Computer Vision System for an AI Assistant'*: a real-time **computer vision data pipeline** for AI-driven image analysis.",achievements:["Designed a **modular computer vision pipeline** integrating four image-processing models in **Python (PyTorch and TensorFlow)**, with a unified interface enabling seamless model swapping across frameworks without modifying pipeline logic.","Reduced real-time image-processing **latency** by over **90%** using threading, **parallel processing**, and internal REST API calls, enabling four models to run concurrently rather than sequentially.","Engineered each model component for independent retraining and replacement, enabling **continuous pipeline improvement** without restarting the full system or modifying upstream or downstream logic."],tech:["Python","PyTorch","TensorFlow","Computer Vision","Deep Learning","REST APIs","Parallel Processing","Data Pipelines"]},{id:3,role:"Intern Analyst",company:"Wells Fargo",location:"Bengaluru, KA, India",duration:"May 2023 - Jul 2023",description:"**Software Development Intern** in the Capital Markets Technology division (CCIBT, Commercial & Corporate Investment Banking).",achievements:["Built a **full-stack MERN application** for Capital Markets Technology, owning UI components, REST APIs, backend logic, and UX design end-to-end.","Integrated **ML modules** for financial time-series analysis and prediction into the MERN application, enabling end-to-end prototype workflows demonstrated to Capital Markets Technology stakeholders."],tech:["React","Node.js","MongoDB","Express","REST APIs","Python","ML"]}],au=r=>r.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g).map((i,s)=>{if(i.startsWith("**")&&i.endsWith("**"))return H.jsx("strong",{children:i.slice(2,-2)},s);if(i.startsWith("*")&&i.endsWith("*"))return H.jsx("em",{children:i.slice(1,-1)},s);const l=i.match(/\[(.*?)\]\((.*?)\)/);return l?H.jsx("a",{href:l[2],target:"_blank",rel:"noopener noreferrer",children:l[1]},s):H.jsx("span",{children:i},s)});function eE(){const[r,e]=nt.useState(()=>window.innerWidth);return nt.useEffect(()=>{let i;const s=()=>{i=requestAnimationFrame(()=>e(window.innerWidth))};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),cancelAnimationFrame(i)}},[]),r}function tE(){const[r,e]=nt.useState(()=>window.innerHeight);return nt.useEffect(()=>{let i;const s=()=>{i=requestAnimationFrame(()=>e(window.innerHeight))};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),cancelAnimationFrame(i)}},[]),r}const X_=({exp:r})=>H.jsxs("div",{className:"experience-card",children:[H.jsx("h3",{className:"ex-ct card-title",children:r.role}),H.jsx("h4",{className:"ex-cs card-subtitle",children:r.company}),H.jsxs("div",{className:"card-meta",children:[H.jsxs("div",{className:"meta-item",children:[H.jsx(fx,{size:14,className:"ex-mi meta-icon"}),H.jsx("span",{className:"card-duration",children:r.duration})]}),H.jsxs("div",{className:"meta-item",children:[H.jsx(Mp,{size:14,className:"ex-mi meta-icon"}),H.jsx("span",{className:"card-location",children:r.location})]})]}),H.jsx("p",{className:"ex-description",children:au(r.description)}),r.achievements&&r.achievements.length>0&&H.jsx("ul",{className:"ex-achievements",children:r.achievements.map((e,i)=>H.jsxs("li",{className:"ex-achievement-item",children:[H.jsx("span",{className:"ex-bullet","aria-hidden":"true",children:"—"}),H.jsx("span",{children:au(e)})]},i))}),r.tech&&r.tech.length>0&&H.jsx("div",{className:"ex-tech-stack",children:r.tech.map(e=>H.jsx("span",{className:"ex-tech-tag",children:e},e))})]}),nE=()=>{const r=$M,e=r.length,i=tE(),l=eE()<=768,d=!l&&i>=800?2:1,[h,m]=nt.useState(0),[p,x]=nt.useState(0),_=nt.useRef(null),g=nt.useCallback(S=>{if(l){x(S);return}S>=h&&S<h+d||m(Math.min(S,Math.max(0,e-d)))},[l,h,d,e]),M=S=>l?S===p:S>=h&&S<h+d,b=S=>{_.current=S.touches[0].clientX},D=S=>{if(_.current===null)return;const R=_.current-S.changedTouches[0].clientX;Math.abs(R)>44&&x(N=>R>0?Math.min(N+1,e-1):Math.max(N-1,0)),_.current=null},y=Array.from({length:d},(S,R)=>h+R).filter(S=>S<e);return H.jsx("section",{id:"experience",className:"section experience-section",children:H.jsxs("div",{className:"container",children:[H.jsx("h2",{className:"ex-t section-title",children:"Experience"}),H.jsxs("div",{className:"exp-layout",children:[!l&&H.jsxs("nav",{className:"exp-timeline","aria-label":"Experience list",children:[H.jsx("div",{className:"etl-rail"}),r.map((S,R)=>H.jsxs("button",{className:`exp-tl-item ${M(R)?"active":""}`,onClick:()=>g(R),"aria-pressed":M(R),children:[H.jsx("span",{className:"etl-dot"}),H.jsxs("span",{className:"etl-text",children:[H.jsx("span",{className:"etl-company",children:S.company}),H.jsx("span",{className:"etl-role",children:S.role}),H.jsx("span",{className:"etl-dur",children:S.duration})]})]},S.id))]}),l?H.jsxs("div",{className:"exp-mobile",onTouchStart:b,onTouchEnd:D,children:[H.jsx("div",{className:"exp-mobile-slide",children:H.jsx(X_,{exp:r[p]})},p),e>1&&H.jsx("div",{className:"exp-mobile-dots",children:r.map((S,R)=>H.jsx("button",{className:`exp-mdot ${R===p?"active":""}`,onClick:()=>x(R),"aria-label":`Experience ${R+1}`},R))})]}):H.jsx("div",{className:"exp-cards",children:y.map((S,R)=>H.jsx("div",{className:"exp-card-wrap",style:{animationDelay:`${R*60}ms`},children:H.jsx(X_,{exp:r[S]})},S))},h)]})]})})},iE=[{category:"Programming Languages",items:["Python","TypeScript","JavaScript","C#","C++","C","SQL"]},{category:"Frontend",items:["React","Redux","Vite","Tailwind CSS","HTML5","CSS3","SCSS / SASS","Responsive Design"]},{category:"Backend",items:["FastAPI","Node.js","Express.js","ASP.NET","Flask","LiteLLM","Pydantic v2","MongoDB","PostgreSQL","MySQL","OracleSQL","Redis","tRPC","Drizzle ORM","REST APIs","gRPC","Authentication","Database Design","Model Context Protocol (MCP)"]},{category:"Machine Learning",items:["PyTorch","TensorFlow","Scikit-learn","Large Language Models (LLM)","Agentic AI / Pipelines","Multi-Agent Systems","Deep Learning","Computer Vision","Natural Language Processing"]},{category:"Design & UX",items:["Figma","UI/UX Design","Wireframing"]},{category:"Tools & DevOps",items:["Docker","Kubernetes","OpenShift","GitHub Actions","Jenkins","CI/CD","Linux","Git","GitHub","Postman","Webpack","Agile","Blockchain","DevOps"]}],aE=[{id:1,name:"Introduction to Model Context Protocol (MCP)",issuer:"Anthropic",link:"https://verify.skilljar.com/c/tcrh98cstxej",issueDate:"March 2026"},{id:2,name:"AI Fluency Framework & Foundations",issuer:"Anthropic",link:"https://verify.skilljar.com/c/bwat4u68chik",issueDate:"March 2026"},{id:3,name:"AI Fluency for students",issuer:"Anthropic",link:"https://verify.skilljar.com/c/99ttkg6r3q36",issueDate:"March 2026"},{id:4,name:"Machine Learning",issuer:"IBM (eDX)",issueDate:"October 2023",link:"https://courses.edx.org/certificates/41c8516b32174ad1bcdde8eccd5c8e3f"},{id:5,name:"Web Development",issuer:"Udemy - Angela Yu",issueDate:"September 2023",link:"https://ude.my/UC-b6eb6181-8475-4f6d-be5d-6ff4b917c633"},{id:6,name:"Mastering Data Structures & Algorithms using C and C++",issuer:"Udemy - Abdul Bari",issueDate:"June 2022",link:"https://ude.my/UC-aaa5d800-79dd-46be-a09b-81a2ee5de1ad/"}],rE=()=>{const r=iE,e=aE,[i,s]=nt.useState("skills");return H.jsx("section",{id:"skills",className:"section skills-section",children:H.jsxs("div",{className:"container",children:[H.jsx("h2",{className:"sk-t section-title",children:"Skills & Certifications"}),H.jsxs("div",{className:"sk-tabs",role:"tablist",children:[H.jsxs("button",{role:"tab","aria-selected":i==="skills",className:`sk-tab ${i==="skills"?"active":""}`,onClick:()=>s("skills"),children:[H.jsx(zM,{size:15}),"Skills"]}),H.jsxs("button",{role:"tab","aria-selected":i==="certifications",className:`sk-tab ${i==="certifications"?"active":""}`,onClick:()=>s("certifications"),children:[H.jsx(ux,{size:15}),"Certifications"]})]}),i==="skills"&&(()=>{const l=r.length,c=l===4?"sk-cols-4":`sk-cols-${Math.min(l,3)}`;return H.jsx("div",{className:`skills-grid ${c} sk-panel`,children:r.map(d=>H.jsxs("div",{className:"skill-category",children:[H.jsx("h4",{className:"category-title",children:d.category}),H.jsx("div",{className:"skill-tags",children:d.items.map(h=>H.jsx("span",{className:"skill-tag",children:h},h))})]},d.category))})})(),i==="certifications"&&(()=>{const c=e.length%3,d=h=>c===0||h>=c?"":c===1?"cert-span-full":"cert-span-half";return H.jsx("div",{className:"certifications-list sk-panel",children:e.map((h,m)=>H.jsxs("a",{href:h.link,target:"_blank",rel:"noopener noreferrer",className:`certification-item ${d(m)}`,children:[H.jsxs("div",{className:"cert-content",children:[H.jsx("h4",{className:"cert-name",children:h.name}),H.jsx("p",{className:"cert-issuer",children:h.issuer}),H.jsx("p",{className:"cert-date",children:h.issueDate})]}),H.jsx(yp,{size:20,className:"cert-icon"})]},h.id))})})()]})})},sE=JSON.parse(`[{"id":1,"title":"Narada","shortDescription":"7-step **agentic AI search** pipeline that extracts source-traced entity tables from the web through a single **LiteLLM** integration.","description":"Built a **7-step agentic AI search pipeline** in Python/FastAPI that takes any topic query, concurrently scrapes the web, runs **LLM extraction** to produce structured entity tables, and returns results with **per-cell source traceability**: every value links to its origin URL, enforced at the data model level.\\n\\nDesigned a **provider abstraction layer over a single LiteLLM integration**, supporting **major LLM providers** (like OpenAI, Anthropic, Groq, Ollama) and **3 search providers** (Tavily, Brave, DuckDuckGo), all hot-swappable via env config with **per-step model configuration** so each stage of the pipeline can run on a different model for cost and quality tradeoffs.\\n\\nDeployed with a **zero-server-side-secret** architecture: users supply their own API keys via browser sessionStorage, keys travel as request headers and are discarded per-request, with CSP headers blocking XSS.","tech":["Python","FastAPI","React","Pydantic v2","LLM","LiteLLM","Agentic AI","Agentic Search","Groq","Ollama","Tavily"],"demoLink":"https://narada-heij.onrender.com","githubLink":"https://github.com/vpk-11/narada","featured":true,"categories":["Fullstack","ML","Agentic AI"]},{"id":2,"title":"RiskWise","shortDescription":"Maritime supply chain intelligence platform with **3-agent LLM orchestration** that scores route risk from **3 live sources** and tracks history.","description":"Built a **maritime risk intelligence platform** that takes a shipping route and returns a comprehensive real-time risk assessment. Input a route (\\"Shanghai to Rotterdam\\") and the system fetches live disruptions from **3 public sources in parallel** (NASA EONET, USGS Earthquakes, GDELT RSS geopolitical feed), runs three specialized **LLM agents** that each process the data differently, and returns a **0-100 risk score** with 4-factor breakdown, narrative explanation, alternative routes, and historical trend analysis.\\n\\n**Three agents, three concerns:** Athena gathers intelligence (which disruptions affect this specific route). Hermes quantifies risk across 4 independent factors (weather, labor, geopolitical, congestion). Apollo generates safer alternatives if risk exceeds threshold. Each agent takes structured JSON in, produces structured JSON out, making the pipeline modular and independently improvable.\\n\\nDesigned a **cascading fallback system** for reliability: live sources, then database, then LLM synthesis, ensuring zero-failure evaluations even when external APIs are unavailable. Built a **4-page React dashboard** (MapView with MapLibre GL JS visualization, RouteAnalyzer with live agent terminal, ActiveDisruptions threat feed with freshness metadata, RouteHistory with trend sparklines). Type-safe end-to-end with **tRPC** and **Drizzle ORM** on PostgreSQL, supporting 4 relational tables and persistent evaluation history.","tech":["React","TypeScript","tRPC","Express","Drizzle ORM","PostgreSQL","MapLibre GL JS","Recharts","Tailwind CSS","LLM","Agentic AI","Real-time Data"],"demoLink":"","githubLink":"https://github.com/vpk-11/riskwise","featured":true,"categories":["Fullstack","ML","Agentic AI"]},{"id":3,"title":"Donna","shortDescription":"**AI executive assistant** for service businesses: isolated **per-client agents**, central orchestrator, and **MCP-gated** mutations.","description":"Built an **AI executive assistant** for service businesses (gyms, studios, consultants) in Python/FastAPI: a **central orchestrator** handles admin-facing requests while an **isolated agent spawns per active client conversation**, eliminating cross-client context bleed and resolving scheduling conflicts without manual intervention.\\n\\nGated every database mutation (booking, rescheduling, cancellation) behind a **typed MCP tool layer**, so LLM output is validated before it ever reaches the database, backed by **Redis** for the agent registry and per-conversation state.\\n\\nLayered an **LLM judge** that routes each client message to autonomous handling, admin notification, or escalation, alongside a **two-stage LLM firewall** screening inbound messages for prompt injection and outbound messages for hallucinated bookings.","tech":["Python","FastAPI","Redis","FastMCP","LiteLLM","SQLAlchemy","Pydantic v2","Multi-Agent Systems"],"demoLink":"","githubLink":"https://github.com/vpk-11/donna","featured":true,"categories":["ML","Agentic AI"]},{"id":4,"title":"Clinical Copilot","shortDescription":"**6-agent clinical chart pipeline** that outputs a SOAP note, red-flag list, and medication reconciliation, with **deterministic fallback** per agent.","description":"Built a **6-agent clinical chart analysis pipeline** in Python/FastAPI that converts raw patient notes into a structured SOAP note, red-flag list, medication reconciliation, and medical timeline, with **deterministic fallback extraction** in every agent so the system returns clinically usable output even on LLM failure.\\n\\nRan **medication and timeline agents in parallel** while sequencing risk and synthesis downstream, and integrated the **OpenFDA drug label API** to enrich LLM-extracted medication data with real interaction lookups beyond text summarization.\\n\\nWired **W&B Weave observability** into every agent call at the framework level and generated **two distinct report formats** from a single analysis run: a clinician-facing structured report and a patient-facing plain-language explanation.","tech":["Python","FastAPI","LiteLLM","W&B Weave","OpenFDA API","React","Tailwind CSS","Multi-Agent Systems"],"demoLink":"","githubLink":"https://github.com/vpk-11/clinical-copilot","featured":true,"categories":["Fullstack","ML","Agentic AI"]},{"id":5,"title":"Deepfake Deconstruction","shortDescription":"**Modular deep-learning pipeline** to reverse-engineer face-swap **deepfakes**, identifying source images with **85%+** accuracy on 10,000+ images.","description":"Designed a modular deep-learning pipeline to **reverse-engineer face-swap deepfakes**, identifying the original source image with **85%+ accuracy** on a custom dataset of 10,000+ manipulated images. Implemented convolutional architectures with feature extraction layers, enabling **component-level model swapping** for improved scalability. Addressed a **real-world AI safety problem** by going beyond detection to trace the origins of manipulation.","tech":["Python","PyTorch","Computer Vision","Deep Learning","Machine Learning","AI Safety"],"demoLink":"","githubLink":"https://github.com/vpk-11/fyp-deepfake-decon","featured":true,"categories":["ML"]},{"id":6,"title":"DKeeper","shortDescription":"**Decentralized note-taking app** on the Internet Computer: React calls a Motoko canister directly via **Candid bindings**, no REST API.","description":"Built a decentralized note-taking app on the **Internet Computer**, with a **React** frontend calling a **Motoko** backend canister directly through generated **Candid bindings**, removing the need for a REST API or any backend server in between.\\n\\nPersisted every note in **canister stable memory** instead of a database or browser storage, so data survives canister upgrades and the app has zero dependency on centralized server infrastructure.\\n\\nEnforced **type safety end-to-end** via the canister's typed Candid interface, with TypeScript bindings generated directly from the contract so frontend and backend types can never drift out of sync.","tech":["React","TypeScript","Motoko","DFinity ICP","Blockchain","Smart Contracts"],"demoLink":"","githubLink":"https://github.com/vpk-11/dkeeper","featured":true,"categories":["Fullstack","Blockchain"]},{"id":7,"title":"File Vault","shortDescription":"**Personal file hosting service**: a React SPA talks to an Express/TypeScript API backed by MongoDB, with ownership verification on every file route.","description":"Built a personal file hosting service: a **React** SPA talks to an **Express/TypeScript API** backed by **MongoDB**, handling per-user upload, download, and delete with ownership verification on every file route.\\n\\nHardened file access against **path traversal** with a filename allowlist and resolved-path boundary check, paired with **bcrypt** password hashing and a MongoDB-backed session store.\\n\\nBuilt drag-and-drop upload with UUID-prefixed storage and filename sanitization at write time.","tech":["React","TypeScript","Node.js","Express","MongoDB","REST API"],"demoLink":"","githubLink":"https://github.com/vpk-11/file-vault","categories":["Fullstack"]},{"id":8,"title":"URL Shortener","shortDescription":"**URL shortener** with nanoid-based short codes, MongoDB-backed deduplication, and database-level collision safety.","description":"Built a URL shortener: a **Node.js/Express/TypeScript** API generates **nanoid**-based short codes backed by **MongoDB**, with deduplication so the same long URL submitted twice returns the existing short code instead of creating a duplicate.\\n\\nValidated every submitted URL against an **http/https protocol allowlist** to block javascript: and other XSS-prone schemes, and enforced short-code uniqueness at the **database layer** with a unique index and a single automatic retry on collision.","tech":["Node.js","Express","TypeScript","MongoDB","REST API"],"demoLink":"","githubLink":"https://github.com/vpk-11/url-shortener","categories":["Fullstack"]},{"id":9,"title":"Data Compression Analysis","shortDescription":"Comparative analysis of **Huffman Encoding**, **LZW**, and **LZ77** algorithms, evaluating time and space complexity tradeoffs across test cases.","description":"Implemented and compared **Huffman Encoding, LZW, and LZ77** compression algorithms in C/C++, analyzing **time and space complexity** across multiple test cases. Tabulated results to identify efficiency tradeoffs across algorithm types and input characteristics, highlighting conditions where each approach performs best.","tech":["C","C++","Algorithms","Data Structures","Systems"],"demoLink":"","githubLink":"","categories":["Systems"]}]`),W_=150;function j_(r,e){return r.length<=e?r:r.slice(0,r.lastIndexOf(" ",e))+"…"}function ru(r){if(r)return r.startsWith("http")?r:`https://${r}`}const oE=({project:r,onSelect:e})=>{const i=r.shortDescription?j_(r.shortDescription,W_):j_(r.description,W_);return H.jsxs("div",{className:"project-card",onClick:()=>{window.innerWidth>1024&&e(r)},children:[r.demoLink&&H.jsxs("span",{className:"live-badge",children:[H.jsx("span",{className:"live-dot","aria-hidden":"true"}),"Live"]}),H.jsx("h3",{className:"pr-ct card-title",children:r.title}),H.jsx("p",{className:"card-description",children:au(i)}),H.jsx("div",{className:"tech-stack",children:r.tech.map(s=>H.jsx("span",{className:"tech-tag",children:s},s))}),H.jsxs("div",{className:"pr-card-footer",children:[H.jsxs("div",{className:"project-links",children:[r.githubLink&&H.jsxs("a",{href:ru(r.githubLink),target:"_blank",rel:"noopener noreferrer",className:"project-link",onClick:s=>s.stopPropagation(),children:[H.jsx(vu,{size:13}),"GitHub"]}),r.demoLink&&H.jsxs("a",{href:ru(r.demoLink),target:"_blank",rel:"noopener noreferrer",className:"project-link",onClick:s=>s.stopPropagation(),children:[H.jsx(yp,{size:13}),"Live Demo"]})]}),H.jsxs("button",{className:"pr-view-btn",onClick:()=>e(r),children:["View ",H.jsx(OM,{size:14})]})]})]})},lE=({project:r,onClose:e})=>H.jsx("div",{className:"pr-modal-backdrop",onClick:e,children:H.jsxs("div",{className:"pr-modal",onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[H.jsx("button",{className:"pr-modal-close",onClick:e,"aria-label":"Close",autoFocus:!0,children:H.jsx(hx,{size:16})}),H.jsx("h2",{id:"modal-title",className:"pr-modal-title",children:r.title}),H.jsxs("div",{className:"pr-modal-links",children:[r.githubLink&&H.jsxs("a",{href:ru(r.githubLink),target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[H.jsx(vu,{size:14}),"GitHub"]}),r.demoLink&&H.jsxs("a",{href:ru(r.demoLink),target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[H.jsx(yp,{size:14}),"Live Demo"]}),r.demoLink&&H.jsxs("span",{className:"pr-modal-live",children:[H.jsx("span",{className:"live-dot","aria-hidden":"true"}),"Live"]})]}),H.jsx("div",{className:"pr-modal-body",children:r.description.split(`

`).map((i,s)=>H.jsx("p",{children:au(i)},s))}),H.jsx("div",{className:"tech-stack",children:r.tech.map(i=>H.jsx("span",{className:"tech-tag",children:i},i))})]})}),cE=()=>{const r=sE,[e,i]=nt.useState(null),s=nt.useMemo(()=>{const _=new Set;return r.forEach(g=>(g.categories??[]).forEach(M=>_.add(M))),Array.from(_)},[r]),l=nt.useMemo(()=>["Featured","All",...s],[s]),[c,d]=nt.useState("Featured"),h=nt.useMemo(()=>c==="Featured"?r.filter(_=>_.featured===!0):c==="All"?r:r.filter(_=>(_.categories??[]).includes(c)),[r,c]);function m(_){return _==="Featured"?r.filter(g=>g.featured===!0).length:_==="All"?r.length:r.filter(g=>(g.categories??[]).includes(_)).length}const p=nt.useCallback(_=>{_.key==="Escape"&&i(null)},[]);nt.useEffect(()=>(e?(document.addEventListener("keydown",p),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.removeEventListener("keydown",p),document.body.style.overflow=""}),[e,p]);const x=h.length===4?"pr-cols-4":`pr-cols-${Math.min(h.length,3)}`;return H.jsxs("section",{id:"projects",className:"section projects-section",children:[H.jsxs("div",{className:"container",children:[H.jsx("h2",{className:"pr-title section-title",children:"Projects"}),l.length>0&&H.jsx("div",{className:"pr-tabs",role:"tablist",children:l.map(_=>H.jsxs("button",{role:"tab","aria-selected":c===_,className:`pr-tab ${c===_?"active":""}`,onClick:()=>d(_),children:[_,H.jsx("span",{className:"pr-tab-count",children:m(_)})]},_))}),H.jsx("div",{className:`projects-grid ${x}`,role:"tabpanel","aria-label":c,children:h.map(_=>H.jsx(oE,{project:_,onSelect:i},_.id))})]}),e&&H.jsx(lE,{project:e,onClose:()=>i(null)})]})},uE=[{id:1,degree:"Masters of Science in Computer Science",institution:"University of Massachusetts, Amherst",duration:"Sep 2025 - Present (Exp May 2027)",location:"Amherst, MA, USA",gpa:"3.95 / 4.0",coursework:["Machine Learning","Software Engineering","Advanced Cryptography","Neural Networks","Data Science","Computing for Digital Biomarkers in Healthcare"]},{id:2,degree:"Bachelor's of Technology in Computer Science & Engineering",institution:"National Institute of Technology, Tiruchirappalli",duration:"Dec 2020 - May 2024",gpa:"8.41 / 10.0",location:"Tiruchirappalli, TN, India",coursework:["Data Structures & Algorithms","Database Management Systems","Computer Networks & Security","Operating Systems","Artificial Intelligence","Machine Learning","Deep Learning","NLP","Cryptography"]}],fE=()=>{const r=uE;return H.jsx("section",{id:"education",className:"section education-section",children:H.jsxs("div",{className:"container",children:[H.jsx("h2",{className:"ed-t section-title",children:"Education"}),H.jsx("div",{className:"education-grid",children:r.map(e=>H.jsxs("div",{className:"education-card",children:[H.jsx("h3",{className:"ed-ct card-title",children:e.degree}),H.jsx("h4",{className:"ed-cs card-subtitle",children:e.institution}),H.jsxs("div",{className:"card-meta",children:[H.jsxs("div",{className:"meta-item",children:[H.jsx(fx,{size:16,className:"ed-mi meta-icon"}),H.jsx("span",{className:"card-duration",children:e.duration})]}),H.jsxs("div",{className:"meta-item",children:[H.jsx(Mp,{size:16,className:"ed-mi meta-icon"}),H.jsx("span",{className:"card-location",children:e.location})]})]}),e.gpa&&H.jsxs("div",{className:"ed-gpa card-gpa",children:[H.jsx(ux,{size:16,className:"gpa-icon"}),H.jsxs("span",{className:"gpa-text",children:["GPA: ",e.gpa]})]}),e.coursework&&e.coursework.length>0&&H.jsxs("div",{className:"ed-coursework",children:[H.jsx("p",{className:"coursework-label",children:"Relevant Coursework"}),H.jsx("div",{className:"coursework-tags",children:e.coursework.map(i=>H.jsx("span",{className:"coursework-tag",children:i},i))})]})]},e.id))})]})})},dE=()=>{const r=Ep,e=r.bio.split(`

`);return H.jsx("section",{id:"about",className:"section about-section",children:H.jsxs("div",{className:"container",children:[H.jsx("h2",{className:"ab-t section-title",children:"About Me"}),H.jsxs("div",{className:"about-grid",children:[H.jsx("div",{className:"about-bio",children:e.map((i,s)=>H.jsx("p",{children:i},s))}),H.jsxs("div",{className:"about-principles",children:[H.jsx("p",{className:"principles-label",children:"// ENGINEERING PRINCIPLES"}),H.jsx("ul",{className:"principles-list",children:r.principles.map((i,s)=>H.jsxs("li",{className:"principle-item",children:[H.jsx("span",{className:"principle-chevron","aria-hidden":"true",children:">"}),H.jsx("span",{children:i})]},s))})]})]})]})})},hE=()=>{const r=Ep,e=new Date().getFullYear();return H.jsx("section",{id:"contact",className:"section contact-section",children:H.jsxs("div",{className:"container",children:[H.jsxs("div",{className:"contact-main",children:[H.jsx("h2",{className:"co-t section-title",children:"Get In Touch"}),H.jsx("p",{className:"contact-text",children:r.txt}),H.jsxs("div",{className:"contact-looking-for",children:[H.jsxs("div",{className:"looking-for-roles",children:[H.jsx("p",{className:"looking-for-label",children:"Open to"}),H.jsx("div",{className:"looking-for-tags",children:r.targetRoles.map(i=>H.jsx("span",{className:"looking-for-tag",children:i},i))})]}),H.jsxs("div",{className:"looking-for-auth",children:[H.jsx("p",{className:"looking-for-label",children:"Work Authorization"}),H.jsx("p",{className:"auth-text",children:r.workAuthorization})]})]}),H.jsxs("a",{href:r.linkedin,target:"_blank",rel:"noopener noreferrer",className:"contact-button",children:[H.jsx(bh,{size:24}),H.jsx("span",{children:"Message on LinkedIn"})]})]}),H.jsxs("div",{className:"contact-footer",children:[H.jsxs("p",{className:"footer-copyright",children:["© ",e," Kaushik Parthasarathy. All rights reserved."]}),H.jsxs("div",{className:"footer-links",children:[H.jsx("a",{href:r.linkedin,target:"_blank",rel:"noopener noreferrer",className:"footer-link","aria-label":"LinkedIn",children:H.jsx(bh,{size:18})}),H.jsx("a",{href:r.github,target:"_blank",rel:"noopener noreferrer",className:"footer-link","aria-label":"GitHub",children:H.jsx(vu,{size:18})}),H.jsx("a",{href:r.resume,target:"_blank",rel:"noopener noreferrer",className:"footer-link","aria-label":"Resume",children:H.jsx(dx,{size:18})})]})]})]})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bp="184",pE=0,q_=1,mE=2,qc=1,gE=2,Jo=3,dr=0,qn=1,va=2,ya=0,Hs=1,Y_=2,Z_=3,K_=4,_E=5,Fr=100,vE=101,xE=102,SE=103,yE=104,ME=200,EE=201,bE=202,TE=203,Th=204,Ah=205,AE=206,CE=207,RE=208,wE=209,DE=210,NE=211,UE=212,LE=213,OE=214,Ch=0,Rh=1,wh=2,ks=3,Dh=4,Nh=5,Uh=6,Lh=7,px=0,PE=1,IE=2,ji=0,mx=1,gx=2,_x=3,vx=4,xx=5,Sx=6,yx=7,Mx=300,Xr=301,Xs=302,Bd=303,Hd=304,xu=306,Oh=1e3,xa=1001,Ph=1002,Dn=1003,zE=1004,Mc=1005,In=1006,Gd=1007,Hr=1008,yi=1009,Ex=1010,bx=1011,nl=1012,Tp=1013,Yi=1014,Xi=1015,Ta=1016,Ap=1017,Cp=1018,il=1020,Tx=35902,Ax=35899,Cx=1021,Rx=1022,Li=1023,Aa=1026,Gr=1027,wx=1028,Rp=1029,Wr=1030,wp=1031,Dp=1033,Yc=33776,Zc=33777,Kc=33778,Qc=33779,Ih=35840,zh=35841,Fh=35842,Bh=35843,Hh=36196,Gh=37492,Vh=37496,kh=37488,Xh=37489,su=37490,Wh=37491,jh=37808,qh=37809,Yh=37810,Zh=37811,Kh=37812,Qh=37813,Jh=37814,$h=37815,ep=37816,tp=37817,np=37818,ip=37819,ap=37820,rp=37821,sp=36492,op=36494,lp=36495,cp=36283,up=36284,ou=36285,fp=36286,FE=3200,Q_=0,BE=1,cr="",xi="srgb",lu="srgb-linear",cu="linear",zt="srgb",As=7680,J_=519,HE=512,GE=513,VE=514,Np=515,kE=516,XE=517,Up=518,WE=519,$_=35044,ev="300 es",Wi=2e3,uu=2001;function jE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qE(){const r=fu("canvas");return r.style.display="block",r}const tv={};function nv(...r){const e="THREE."+r.shift();console.log(e,...r)}function Dx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function tt(...r){r=Dx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function bt(...r){r=Dx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function dp(...r){const e=r.join(" ");e in tv||(tv[e]=!0,tt(...r))}function YE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const ZE={[Ch]:Rh,[wh]:Uh,[Dh]:Lh,[ks]:Nh,[Rh]:Ch,[Uh]:wh,[Lh]:Dh,[Nh]:ks};class qr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=Math.PI/180,hp=180/Math.PI;function rl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function KE(r,e){return(r%e+e)%e}function kd(r,e,i){return(1-i)*r+i*e}function Xo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Op=class Op{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Op.prototype.isVector2=!0;let kt=Op;class qs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],x=s[l+2],_=s[l+3],g=c[d+0],M=c[d+1],b=c[d+2],D=c[d+3];if(_!==D||m!==g||p!==M||x!==b){let y=m*g+p*M+x*b+_*D;y<0&&(g=-g,M=-M,b=-b,D=-D,y=-y);let S=1-h;if(y<.9995){const R=Math.acos(y),N=Math.sin(R);S=Math.sin(S*R)/N,h=Math.sin(h*R)/N,m=m*S+g*h,p=p*S+M*h,x=x*S+b*h,_=_*S+D*h}else{m=m*S+g*h,p=p*S+M*h,x=x*S+b*h,_=_*S+D*h;const R=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=R,p*=R,x*=R,_*=R}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],_=c[d],g=c[d+1],M=c[d+2],b=c[d+3];return e[i]=h*b+x*_+m*M-p*g,e[i+1]=m*b+x*g+p*_-h*M,e[i+2]=p*b+x*M+h*g-m*_,e[i+3]=x*b-h*_-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),_=h(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*x*_+p*M*b,this._y=p*M*_-g*x*b,this._z=p*x*b+g*M*_,this._w=p*x*_-g*M*b;break;case"YXZ":this._x=g*x*_+p*M*b,this._y=p*M*_-g*x*b,this._z=p*x*b-g*M*_,this._w=p*x*_+g*M*b;break;case"ZXY":this._x=g*x*_-p*M*b,this._y=p*M*_+g*x*b,this._z=p*x*b+g*M*_,this._w=p*x*_-g*M*b;break;case"ZYX":this._x=g*x*_-p*M*b,this._y=p*M*_+g*x*b,this._z=p*x*b-g*M*_,this._w=p*x*_+g*M*b;break;case"YZX":this._x=g*x*_+p*M*b,this._y=p*M*_+g*x*b,this._z=p*x*b-g*M*_,this._w=p*x*_-g*M*b;break;case"XZY":this._x=g*x*_-p*M*b,this._y=p*M*_-g*x*b,this._z=p*x*b+g*M*_,this._w=p*x*_+g*M*b;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],_=i[10],g=s+h+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-s*p,this._z=c*x+d*p+s*m-l*h,this._w=d*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pp=class Pp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(iv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(iv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),x=2*(h*i-c*l),_=2*(c*s-d*i);return this.x=i+m*p+d*_-h*x,this.y=s+m*x+h*p-c*_,this.z=l+m*_+c*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pp.prototype.isVector3=!0;let ie=Pp;const Xd=new ie,iv=new qs,Ip=class Ip{constructor(e,i,s,l,c,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],_=s[7],g=s[2],M=s[5],b=s[8],D=l[0],y=l[3],S=l[6],R=l[1],N=l[4],U=l[7],G=l[2],L=l[5],I=l[8];return c[0]=d*D+h*R+m*G,c[3]=d*y+h*N+m*L,c[6]=d*S+h*U+m*I,c[1]=p*D+x*R+_*G,c[4]=p*y+x*N+_*L,c[7]=p*S+x*U+_*I,c[2]=g*D+M*R+b*G,c[5]=g*y+M*N+b*L,c[8]=g*S+M*U+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-s*c*x+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],_=x*d-h*p,g=h*m-x*c,M=p*c-d*m,b=i*_+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=_*D,e[1]=(l*p-x*s)*D,e[2]=(h*s-l*d)*D,e[3]=g*D,e[4]=(x*i-l*m)*D,e[5]=(l*c-h*i)*D,e[6]=M*D,e[7]=(s*m-p*i)*D,e[8]=(d*i-s*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Wd.makeScale(e,i)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Wd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ip.prototype.isMatrix3=!0;let st=Ip;const Wd=new st,av=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QE(){const r={enabled:!0,workingColorSpace:lu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===zt&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===zt&&(l.r=Gs(l.r),l.g=Gs(l.g),l.b=Gs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cr?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return dp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return dp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[lu]:{primaries:e,whitePoint:s,transfer:cu,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:s,transfer:zt,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Mt=QE();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cs;class JE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Cs===void 0&&(Cs=fu("canvas")),Cs.width=e.width,Cs.height=e.height;const l=Cs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Cs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ma(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $E=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(jd(l[d].image)):c.push(jd(l[d]))}else c=jd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function jd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?JE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let e3=0;const qd=new ie;class Bn extends qr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=xa,l=xa,c=In,d=Hr,h=Li,m=yi,p=Bn.DEFAULT_ANISOTROPY,x=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e3++}),this.uuid=rl(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){tt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){tt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oh:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oh:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Mx;Bn.DEFAULT_ANISOTROPY=1;const zp=class zp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],_=m[8],g=m[1],M=m[5],b=m[9],D=m[2],y=m[6],S=m[10];if(Math.abs(x-g)<.01&&Math.abs(_-D)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+g)<.1&&Math.abs(_+D)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(M+1)/2,G=(S+1)/2,L=(x+g)/4,I=(_+D)/4,T=(b+y)/4;return N>U&&N>G?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=L/s,c=I/s):U>G?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=L/l,c=T/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=I/c,l=T/c),this.set(s,l,c,i),this}let R=Math.sqrt((y-b)*(y-b)+(_-D)*(_-D)+(g-x)*(g-x));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(_-D)/R,this.z=(g-x)/R,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zp.prototype.isVector4=!0;let cn=zp;class t3 extends qr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Bn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Lp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends t3{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Nx extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n3 extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=class du{constructor(e,i,s,l,c,d,h,m,p,x,_,g,M,b,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,x,_,g,M,b,D,y)}set(e,i,s,l,c,d,h,m,p,x,_,g,M,b,D,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=_,S[14]=g,S[3]=M,S[7]=b,S[11]=D,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),d=1/Rs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=d*x,M=d*_,b=h*x,D=h*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=g-D*p,i[9]=-h*m,i[2]=D-g*p,i[6]=b+M*p,i[10]=d*m}else if(e.order==="YXZ"){const g=m*x,M=m*_,b=p*x,D=p*_;i[0]=g+D*h,i[4]=b*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=M*h-b,i[6]=D+g*h,i[10]=d*m}else if(e.order==="ZXY"){const g=m*x,M=m*_,b=p*x,D=p*_;i[0]=g-D*h,i[4]=-d*_,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*x,i[9]=D-g*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const g=d*x,M=d*_,b=h*x,D=h*_;i[0]=m*x,i[4]=b*p-M,i[8]=g*p+D,i[1]=m*_,i[5]=D*p+g,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,M=d*p,b=h*m,D=h*p;i[0]=m*x,i[4]=D-g*_,i[8]=b*_+M,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*_+b,i[10]=g-D*_}else if(e.order==="XZY"){const g=d*m,M=d*p,b=h*m,D=h*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=g*_+D,i[5]=d*x,i[9]=M*_-b,i[2]=b*_-M,i[6]=h*x,i[10]=D*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i3,e,a3)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ir.crossVectors(s,ri),ir.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ir.crossVectors(s,ri)),ir.normalize(),Ec.crossVectors(ri,ir),l[0]=ir.x,l[4]=Ec.x,l[8]=ri.x,l[1]=ir.y,l[5]=Ec.y,l[9]=ri.y,l[2]=ir.z,l[6]=Ec.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],_=s[5],g=s[9],M=s[13],b=s[2],D=s[6],y=s[10],S=s[14],R=s[3],N=s[7],U=s[11],G=s[15],L=l[0],I=l[4],T=l[8],z=l[12],Z=l[1],V=l[5],J=l[9],fe=l[13],pe=l[2],q=l[6],O=l[10],F=l[14],oe=l[3],ge=l[7],Me=l[11],P=l[15];return c[0]=d*L+h*Z+m*pe+p*oe,c[4]=d*I+h*V+m*q+p*ge,c[8]=d*T+h*J+m*O+p*Me,c[12]=d*z+h*fe+m*F+p*P,c[1]=x*L+_*Z+g*pe+M*oe,c[5]=x*I+_*V+g*q+M*ge,c[9]=x*T+_*J+g*O+M*Me,c[13]=x*z+_*fe+g*F+M*P,c[2]=b*L+D*Z+y*pe+S*oe,c[6]=b*I+D*V+y*q+S*ge,c[10]=b*T+D*J+y*O+S*Me,c[14]=b*z+D*fe+y*F+S*P,c[3]=R*L+N*Z+U*pe+G*oe,c[7]=R*I+N*V+U*q+G*ge,c[11]=R*T+N*J+U*O+G*Me,c[15]=R*z+N*fe+U*F+G*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],_=e[6],g=e[10],M=e[14],b=e[3],D=e[7],y=e[11],S=e[15],R=m*M-p*g,N=h*M-p*_,U=h*g-m*_,G=d*M-p*x,L=d*g-m*x,I=d*_-h*x;return i*(D*R-y*N+S*U)-s*(b*R-y*G+S*L)+l*(b*N-D*G+S*I)-c*(b*U-D*L+y*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],_=e[9],g=e[10],M=e[11],b=e[12],D=e[13],y=e[14],S=e[15],R=i*h-s*d,N=i*m-l*d,U=i*p-c*d,G=s*m-l*h,L=s*p-c*h,I=l*p-c*m,T=x*D-_*b,z=x*y-g*b,Z=x*S-M*b,V=_*y-g*D,J=_*S-M*D,fe=g*S-M*y,pe=R*fe-N*J+U*V+G*Z-L*z+I*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/pe;return e[0]=(h*fe-m*J+p*V)*q,e[1]=(l*J-s*fe-c*V)*q,e[2]=(D*I-y*L+S*G)*q,e[3]=(g*L-_*I-M*G)*q,e[4]=(m*Z-d*fe-p*z)*q,e[5]=(i*fe-l*Z+c*z)*q,e[6]=(y*U-b*I-S*N)*q,e[7]=(x*I-g*U+M*N)*q,e[8]=(d*J-h*Z+p*T)*q,e[9]=(s*Z-i*J-c*T)*q,e[10]=(b*L-D*U+S*R)*q,e[11]=(_*U-x*L-M*R)*q,e[12]=(h*z-d*V-m*T)*q,e[13]=(i*V-s*z+l*T)*q,e[14]=(D*N-b*G-y*R)*q,e[15]=(x*G-_*N+g*R)*q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,x=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,_=h+h,g=c*p,M=c*x,b=c*_,D=d*x,y=d*_,S=h*_,R=m*p,N=m*x,U=m*_,G=s.x,L=s.y,I=s.z;return l[0]=(1-(D+S))*G,l[1]=(M+U)*G,l[2]=(b-N)*G,l[3]=0,l[4]=(M-U)*L,l[5]=(1-(g+S))*L,l[6]=(y+R)*L,l[7]=0,l[8]=(b+N)*I,l[9]=(y-R)*I,l[10]=(1-(g+D))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Rs.set(l[0],l[1],l[2]).length();const h=Rs.set(l[4],l[5],l[6]).length(),m=Rs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ri.copy(this);const p=1/d,x=1/h,_=1/m;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=d,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,d,h=Wi,m=!1){const p=this.elements,x=2*c/(i-e),_=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let b,D;if(m)b=c/(d-c),D=d*c/(d-c);else if(h===Wi)b=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(h===uu)b=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Wi,m=!1){const p=this.elements,x=2/(i-e),_=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,D;if(m)b=1/(d-c),D=d/(d-c);else if(h===Wi)b=-2/(d-c),D=-(d+c)/(d-c);else if(h===uu)b=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};du.prototype.isMatrix4=!0;let gn=du;const Rs=new ie,Ri=new gn,i3=new ie(0,0,0),a3=new ie(1,1,1),ir=new ie,Ec=new ie,ri=new ie,sv=new gn,ov=new qs;class jr{constructor(e=0,i=0,s=0,l=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],_=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ov.setFromEuler(this),this.setFromQuaternion(ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r3=0;const lv=new ie,ws=new qs,ha=new gn,bc=new ie,Wo=new ie,s3=new ie,o3=new qs,cv=new ie(1,0,0),uv=new ie(0,1,0),fv=new ie(0,0,1),dv={type:"added"},l3={type:"removed"},Ds={type:"childadded",child:null},Yd={type:"childremoved",child:null};class Yn extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r3++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new ie,i=new jr,s=new qs,l=new ie(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new gn},normalMatrix:{value:new st}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ws.setFromAxisAngle(e,i),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,i){return ws.setFromAxisAngle(e,i),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(cv,e)}rotateY(e){return this.rotateOnAxis(uv,e)}rotateZ(e){return this.rotateOnAxis(fv,e)}translateOnAxis(e,i){return lv.copy(e).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(cv,e)}translateY(e){return this.translateOnAxis(uv,e)}translateZ(e){return this.translateOnAxis(fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?bc.copy(e):bc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Wo,bc,this.up):ha.lookAt(bc,Wo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),ws.setFromRotationMatrix(ha),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dv),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(l3),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dv),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,s3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,o3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),_=d(e.shapes),g=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new ie(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tc extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c3={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const D of e.hand.values()){const y=i.getJointPose(D,s),S=this._getHandJoint(p,D);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=x.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&g>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(c3)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Kd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ft{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Mt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Mt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Mt.workingColorSpace){if(e=KE(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Kd(d,c,e+1/3),this.g=Kd(d,c,e),this.b=Kd(d,c,e-1/3)}return Mt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:tt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const s=Lx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Mt.workingToColorSpace(Pn.copy(this),e),Math.round(Et(Pn.r*255,0,255))*65536+Math.round(Et(Pn.g*255,0,255))*256+Math.round(Et(Pn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Mt.workingColorSpace){Mt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Mt.workingColorSpace){return Mt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=xi){Mt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+i,ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ar),e.getHSL(Ac);const s=kd(ar.h,Ac.h,i),l=kd(ar.s,Ac.s,i),c=kd(ar.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ft;Ft.NAMES=Lx;class u3 extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new ie,pa=new ie,Qd=new ie,ma=new ie,Ns=new ie,Us=new ie,hv=new ie,Jd=new ie,$d=new ie,eh=new ie,th=new cn,nh=new cn,ih=new cn;class Ui{constructor(e=new ie,i=new ie,s=new ie){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){wi.subVectors(l,i),pa.subVectors(s,i),Qd.subVectors(e,i);const d=wi.dot(wi),h=wi.dot(pa),m=wi.dot(Qd),p=pa.dot(pa),x=pa.dot(Qd),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const g=1/_,M=(p*m-h*x)*g,b=(d*x-h*m)*g;return c.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(d,ma.y),m.addScaledVector(h,ma.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return th.setScalar(0),nh.setScalar(0),ih.setScalar(0),th.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,s),ih.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(th,c.x),d.addScaledVector(nh,c.y),d.addScaledVector(ih,c.z),d}static isFrontFacing(e,i,s,l){return wi.subVectors(s,i),pa.subVectors(e,i),wi.cross(pa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),wi.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Ns.subVectors(l,s),Us.subVectors(c,s),Jd.subVectors(e,s);const m=Ns.dot(Jd),p=Us.dot(Jd);if(m<=0&&p<=0)return i.copy(s);$d.subVectors(e,l);const x=Ns.dot($d),_=Us.dot($d);if(x>=0&&_<=x)return i.copy(l);const g=m*_-x*p;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Ns,d);eh.subVectors(e,c);const M=Ns.dot(eh),b=Us.dot(eh);if(b>=0&&M<=b)return i.copy(c);const D=M*p-m*b;if(D<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(Us,h);const y=x*b-M*_;if(y<=0&&_-x>=0&&M-b>=0)return hv.subVectors(c,l),h=(_-x)/(_-x+(M-b)),i.copy(l).addScaledVector(hv,h);const S=1/(y+D+g);return d=D*S,h=g*S,i.copy(s).addScaledVector(Ns,d).addScaledVector(Us,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sl{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cc.copy(s.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Rc.subVectors(this.max,jo),Ls.subVectors(e.a,jo),Os.subVectors(e.b,jo),Ps.subVectors(e.c,jo),rr.subVectors(Os,Ls),sr.subVectors(Ps,Os),Ur.subVectors(Ls,Ps);let i=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Ur.z,Ur.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Ur.z,0,-Ur.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Ur.y,Ur.x,0];return!ah(i,Ls,Os,Ps,Rc)||(i=[1,0,0,0,1,0,0,0,1],!ah(i,Ls,Os,Ps,Rc))?!1:(wc.crossVectors(rr,sr),i=[wc.x,wc.y,wc.z],ah(i,Ls,Os,Ps,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Di=new ie,Cc=new sl,Ls=new ie,Os=new ie,Ps=new ie,rr=new ie,sr=new ie,Ur=new ie,jo=new ie,Rc=new ie,wc=new ie,Lr=new ie;function ah(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Lr.fromArray(r,c);const h=l.x*Math.abs(Lr.x)+l.y*Math.abs(Lr.y)+l.z*Math.abs(Lr.z),m=e.dot(Lr),p=i.dot(Lr),x=s.dot(Lr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const mn=new ie,Dc=new kt;let f3=0;class Mi extends qr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f3++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=$_,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ox extends Mi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Px extends Mi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ea extends Mi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const d3=new sl,qo=new ie,rh=new ie;class Su{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):d3.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(rh)),this.expandByPoint(qo.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let h3=0;const vi=new gn,sh=new Yn,Is=new ie,si=new sl,Yo=new sl,Mn=new ie;class Pi extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h3++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jE(e)?Px:Ox)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new st().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,s){return vi.makeTranslation(e,i,s),this.applyMatrix4(vi),this}scale(e,i,s){return vi.makeScale(e,i,s),this.applyMatrix4(vi),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ea(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Yo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(si.min,Yo.min),si.expandByPoint(Mn),Mn.addVectors(si.max,Yo.max),si.expandByPoint(Mn)):(si.expandByPoint(Yo.min),si.expandByPoint(Yo.max))}si.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Mn.fromBufferAttribute(h,p),m&&(Is.fromBufferAttribute(e,p),Mn.add(Is)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new ie,m[T]=new ie;const p=new ie,x=new ie,_=new ie,g=new kt,M=new kt,b=new kt,D=new ie,y=new ie;function S(T,z,Z){p.fromBufferAttribute(s,T),x.fromBufferAttribute(s,z),_.fromBufferAttribute(s,Z),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,z),b.fromBufferAttribute(c,Z),x.sub(p),_.sub(p),M.sub(g),b.sub(g);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(D.copy(x).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(V),y.copy(_).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(V),h[T].add(D),h[z].add(D),h[Z].add(D),m[T].add(y),m[z].add(y),m[Z].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,z=R.length;T<z;++T){const Z=R[T],V=Z.start,J=Z.count;for(let fe=V,pe=V+J;fe<pe;fe+=3)S(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const N=new ie,U=new ie,G=new ie,L=new ie;function I(T){G.fromBufferAttribute(l,T),L.copy(G);const z=h[T];N.copy(z),N.sub(G.multiplyScalar(G.dot(z))).normalize(),U.crossVectors(L,z);const V=U.dot(m[T])<0?-1:1;d.setXYZW(T,N.x,N.y,N.z,V)}for(let T=0,z=R.length;T<z;++T){const Z=R[T],V=Z.start,J=Z.count;for(let fe=V,pe=V+J;fe<pe;fe+=3)I(e.getX(fe+0)),I(e.getX(fe+1)),I(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new ie,c=new ie,d=new ie,h=new ie,m=new ie,p=new ie,x=new ie,_=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),D=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,y),h.add(x),m.add(x),p.add(x),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,_=h.normalized,g=new p.constructor(m.length*x);let M=0,b=0;for(let D=0,y=m.length;D<y;D++){h.isInterleavedBufferAttribute?M=m[D]*h.data.stride+h.offset:M=m[D]*x;for(let S=0;S<x;S++)g[b++]=p[M++]}return new Mi(g,x,_)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,_=p.length;x<_;x++){const g=p[x],M=e(g,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,g=p.length;_<g;_++){const M=p[_];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],_=c[p];for(let g=0,M=_.length;g<M;g++)x.push(_[g].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let p3=0;class ol extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p3++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Hs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ah,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){tt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){tt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(s.blending=this.blending),this.side!==dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Th&&(s.blendSrc=this.blendSrc),this.blendDst!==Ah&&(s.blendDst=this.blendDst),this.blendEquation!==Fr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(s.stencilFail=this.stencilFail),this.stencilZFail!==As&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _a=new ie,oh=new ie,Nc=new ie,or=new ie,lh=new ie,Uc=new ie,ch=new ie;class Ix{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){oh.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),or.copy(this.origin).sub(oh);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Nc),h=or.dot(this.direction),m=-or.dot(Nc),p=or.lengthSq(),x=Math.abs(1-d*d);let _,g,M,b;if(x>0)if(_=d*m-h,g=d*h-m,b=c*x,_>=0)if(g>=-b)if(g<=b){const D=1/x;_*=D,g*=D,M=_*(_+d*g+2*h)+g*(d*_+g+2*m)+p}else g=c,_=Math.max(0,-(d*g+h)),M=-_*_+g*(g+2*m)+p;else g=-c,_=Math.max(0,-(d*g+h)),M=-_*_+g*(g+2*m)+p;else g<=-b?(_=Math.max(0,-(-d*c+h)),g=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+p):g<=b?(_=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(_=Math.max(0,-(d*c+h)),g=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+p);else g=d>0?-c:c,_=Math.max(0,-(d*g+h)),M=-_*_+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(oh).addScaledVector(Nc,g),M}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),x>=0?(c=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,s,l,c){lh.subVectors(i,e),Uc.subVectors(s,e),ch.crossVectors(lh,Uc);let d=this.direction.dot(ch),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;or.subVectors(this.origin,e);const m=h*this.direction.dot(Uc.crossVectors(or,Uc));if(m<0)return null;const p=h*this.direction.dot(lh.cross(or));if(p<0||m+p>d)return null;const x=-h*or.dot(ch);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zx extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=px,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pv=new gn,Or=new Ix,Lc=new Su,mv=new ie,Oc=new ie,Pc=new ie,Ic=new ie,uh=new ie,zc=new ie,gv=new ie,Fc=new ie;class Ca extends Yn{constructor(e=new Pi,i=new zx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],_=c[m];x!==0&&(uh.fromBufferAttribute(_,e),d?zc.addScaledVector(uh,x):zc.addScaledVector(uh.sub(i),x))}i.add(zc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),Or.copy(e.ray).recast(e.near),!(Lc.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Lc,mv)===null||Or.origin.distanceToSquared(mv)>(e.far-e.near)**2))&&(pv.copy(c).invert(),Or.copy(e.ray).applyMatrix4(pv),!(s.boundingBox!==null&&Or.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Or)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,D=g.length;b<D;b++){const y=g[b],S=d[y.materialIndex],R=Math.max(y.start,M.start),N=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let U=R,G=N;U<G;U+=3){const L=h.getX(U),I=h.getX(U+1),T=h.getX(U+2);l=Bc(this,S,e,s,p,x,_,L,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=b,S=D;y<S;y+=3){const R=h.getX(y),N=h.getX(y+1),U=h.getX(y+2);l=Bc(this,d,e,s,p,x,_,R,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,D=g.length;b<D;b++){const y=g[b],S=d[y.materialIndex],R=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=R,G=N;U<G;U+=3){const L=U,I=U+1,T=U+2;l=Bc(this,S,e,s,p,x,_,L,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),D=Math.min(m.count,M.start+M.count);for(let y=b,S=D;y<S;y+=3){const R=y,N=y+1,U=y+2;l=Bc(this,d,e,s,p,x,_,R,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function m3(r,e,i,s,l,c,d,h){let m;if(e.side===qn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===dr,h),m===null)return null;Fc.copy(h),Fc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:r}}function Bc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Oc),r.getVertexPosition(m,Pc),r.getVertexPosition(p,Ic);const x=m3(r,e,i,s,Oc,Pc,Ic,gv);if(x){const _=new ie;Ui.getBarycoord(gv,Oc,Pc,Ic,_),l&&(x.uv=Ui.getInterpolatedAttribute(l,h,m,p,_,new kt)),c&&(x.uv1=Ui.getInterpolatedAttribute(c,h,m,p,_,new kt)),d&&(x.normal=Ui.getInterpolatedAttribute(d,h,m,p,_,new ie),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ie,materialIndex:0};Ui.getNormal(Oc,Pc,Ic,g.normal),x.face=g,x.barycoord=_}return x}class g3 extends Bn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=Dn,x=Dn,_,g){super(null,d,h,m,p,x,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fh=new ie,_3=new ie,v3=new st;class zr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=fh.subVectors(s,i).cross(_3.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(fh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||v3.getNormalMatrix(e),l=this.coplanarPoint(fh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Su,x3=new kt(.5,.5),Hc=new ie;class Fx{constructor(e=new zr,i=new zr,s=new zr,l=new zr,c=new zr,d=new zr){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Wi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],_=c[5],g=c[6],M=c[7],b=c[8],D=c[9],y=c[10],S=c[11],R=c[12],N=c[13],U=c[14],G=c[15];if(l[0].setComponents(p-d,M-x,S-b,G-R).normalize(),l[1].setComponents(p+d,M+x,S+b,G+R).normalize(),l[2].setComponents(p+h,M+_,S+D,G+N).normalize(),l[3].setComponents(p-h,M-_,S-D,G-N).normalize(),s)l[4].setComponents(m,g,y,U).normalize(),l[5].setComponents(p-m,M-g,S-y,G-U).normalize();else if(l[4].setComponents(p-m,M-g,S-y,G-U).normalize(),i===Wi)l[5].setComponents(p+m,M+g,S+y,G+U).normalize();else if(i===uu)l[5].setComponents(m,g,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const i=x3.distanceTo(e.center);return Pr.radius=.7071067811865476+i,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?e.max.x:e.min.x,Hc.y=l.normal.y>0?e.max.y:e.min.y,Hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S3 extends ol{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _v=new gn,pp=new Ix,Gc=new Su,Vc=new ie;class y3 extends Yn{constructor(e=new Pi,i=new S3){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,e.ray.intersectsSphere(Gc)===!1)return;_v.copy(l).invert(),pp.copy(e.ray).applyMatrix4(_v);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const g=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let b=g,D=M;b<D;b++){const y=p.getX(b);Vc.fromBufferAttribute(_,y),vv(Vc,y,m,l,e,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let b=g,D=M;b<D;b++)Vc.fromBufferAttribute(_,b),vv(Vc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function vv(r,e,i,s,l,c,d){const h=pp.distanceSqToPoint(r);if(h<i){const m=new ie;pp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Bx extends Bn{constructor(e=[],i=Xr,s,l,c,d,h,m,p,x){super(e,i,s,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ws extends Bn{constructor(e,i,s=Yi,l,c,d,h=Dn,m=Dn,p,x=Aa,_=1){if(x!==Aa&&x!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,d,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class M3 extends Ws{constructor(e,i=Yi,s=Xr,l,c,d=Dn,h=Dn,m,p=Aa){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,s,l,c,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends Pi{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],_=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,e,d,c,0),b("z","y","x",1,-1,s,i,-e,d,c,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ea(p,3)),this.setAttribute("normal",new Ea(x,3)),this.setAttribute("uv",new Ea(_,2));function b(D,y,S,R,N,U,G,L,I,T,z){const Z=U/I,V=G/T,J=U/2,fe=G/2,pe=L/2,q=I+1,O=T+1;let F=0,oe=0;const ge=new ie;for(let Me=0;Me<O;Me++){const P=Me*V-fe;for(let Q=0;Q<q;Q++){const xe=Q*Z-J;ge[D]=xe*R,ge[y]=P*N,ge[S]=pe,p.push(ge.x,ge.y,ge.z),ge[D]=0,ge[y]=0,ge[S]=L>0?1:-1,x.push(ge.x,ge.y,ge.z),_.push(Q/I),_.push(1-Me/T),F+=1}}for(let Me=0;Me<T;Me++)for(let P=0;P<I;P++){const Q=g+P+q*Me,xe=g+P+q*(Me+1),Ae=g+(P+1)+q*(Me+1),De=g+(P+1)+q*Me;m.push(Q,xe,De),m.push(xe,Ae,De),oe+=6}h.addGroup(M,oe,z),M+=oe,g+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yu extends Pi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,_=e/h,g=i/m,M=[],b=[],D=[],y=[];for(let S=0;S<x;S++){const R=S*g-d;for(let N=0;N<p;N++){const U=N*_-c;b.push(U,-R,0),D.push(0,0,1),y.push(N/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let R=0;R<h;R++){const N=R+p*S,U=R+p*(S+1),G=R+1+p*(S+1),L=R+1+p*S;M.push(N,U,L),M.push(U,G,L)}this.setIndex(M),this.setAttribute("position",new Ea(b,3)),this.setAttribute("normal",new Ea(D,3)),this.setAttribute("uv",new Ea(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.widthSegments,e.heightSegments)}}function js(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(xv(l))l.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(xv(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Fn(r){const e={};for(let i=0;i<r.length;i++){const s=js(r[i]);for(const l in s)e[l]=s[l]}return e}function xv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function E3(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Gx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const b3={clone:js,merge:Fn};var T3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T3,this.fragmentShader=A3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=E3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class C3 extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class R3 extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w3 extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kc=new ie,Xc=new qs,Gi=new ie;class Vx extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,Xc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(kc,Xc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const lr=new ie,Sv=new kt,yv=new kt;class Si extends Vx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,i){return this.getViewBounds(e,Sv,yv),i.subVectors(yv,Sv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Vd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kx extends Vx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const zs=-90,Fs=1;class D3 extends Yn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(zs,Fs,e,i);l.layers=this.layers,this.add(l);const c=new Si(zs,Fs,e,i);c.layers=this.layers,this.add(c);const d=new Si(zs,Fs,e,i);d.layers=this.layers,this.add(d);const h=new Si(zs,Fs,e,i);h.layers=this.layers,this.add(h);const m=new Si(zs,Fs,e,i);m.layers=this.layers,this.add(m);const p=new Si(zs,Fs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(_,g,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class N3 extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fp=class Fp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Fp.prototype.isMatrix2=!0;let Mv=Fp;function Ev(r,e,i,s){const l=U3(s);switch(i){case Cx:return r*e;case wx:return r*e/l.components*l.byteLength;case Rp:return r*e/l.components*l.byteLength;case Wr:return r*e*2/l.components*l.byteLength;case wp:return r*e*2/l.components*l.byteLength;case Rx:return r*e*3/l.components*l.byteLength;case Li:return r*e*4/l.components*l.byteLength;case Dp:return r*e*4/l.components*l.byteLength;case Yc:case Zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:case Bh:return Math.max(r,16)*Math.max(e,8)/4;case Ih:case Fh:return Math.max(r,8)*Math.max(e,8)/2;case Hh:case Gh:case kh:case Xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vh:case su:case Wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $h:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case sp:case op:case lp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case cp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ou:case fp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function U3(r){switch(r){case yi:case Ex:return{byteLength:1,components:1};case nl:case bx:case Ta:return{byteLength:2,components:1};case Ap:case Cp:return{byteLength:2,components:4};case Yi:case Tp:case Xi:return{byteLength:4,components:1};case Tx:case Ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xx(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function L3(r){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,_=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const x=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,x);else{_.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<_.length;M++){const b=_[g],D=_[M];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++g,_[g]=D)}_.length=g+1;for(let M=0,b=_.length;M<b;M++){const D=_[M];r.bufferSubData(p,D.start*x.BYTES_PER_ELEMENT,x,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var O3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,k3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Z3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ab=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ab=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ub=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ib=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$b=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,x2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:O3,alphahash_pars_fragment:P3,alphamap_fragment:I3,alphamap_pars_fragment:z3,alphatest_fragment:F3,alphatest_pars_fragment:B3,aomap_fragment:H3,aomap_pars_fragment:G3,batching_pars_vertex:V3,batching_vertex:k3,begin_vertex:X3,beginnormal_vertex:W3,bsdfs:j3,iridescence_fragment:q3,bumpmap_pars_fragment:Y3,clipping_planes_fragment:Z3,clipping_planes_pars_fragment:K3,clipping_planes_pars_vertex:Q3,clipping_planes_vertex:J3,color_fragment:$3,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:ab,defaultnormal_vertex:rb,displacementmap_pars_vertex:sb,displacementmap_vertex:ob,emissivemap_fragment:lb,emissivemap_pars_fragment:cb,colorspace_fragment:ub,colorspace_pars_fragment:fb,envmap_fragment:db,envmap_common_pars_fragment:hb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Ab,envmap_vertex:gb,fog_vertex:_b,fog_pars_vertex:vb,fog_fragment:xb,fog_pars_fragment:Sb,gradientmap_pars_fragment:yb,lightmap_pars_fragment:Mb,lights_lambert_fragment:Eb,lights_lambert_pars_fragment:bb,lights_pars_begin:Tb,lights_toon_fragment:Cb,lights_toon_pars_fragment:Rb,lights_phong_fragment:wb,lights_phong_pars_fragment:Db,lights_physical_fragment:Nb,lights_physical_pars_fragment:Ub,lights_fragment_begin:Lb,lights_fragment_maps:Ob,lights_fragment_end:Pb,lightprobes_pars_fragment:Ib,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:Hb,map_fragment:Gb,map_pars_fragment:Vb,map_particle_fragment:kb,map_particle_pars_fragment:Xb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:jb,morphinstance_vertex:qb,morphcolor_vertex:Yb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Kb,morphtarget_vertex:Qb,normal_fragment_begin:Jb,normal_fragment_maps:$b,normal_pars_fragment:e2,normal_pars_vertex:t2,normal_vertex:n2,normalmap_pars_fragment:i2,clearcoat_normal_fragment_begin:a2,clearcoat_normal_fragment_maps:r2,clearcoat_pars_fragment:s2,iridescence_pars_fragment:o2,opaque_fragment:l2,packing:c2,premultiplied_alpha_fragment:u2,project_vertex:f2,dithering_fragment:d2,dithering_pars_fragment:h2,roughnessmap_fragment:p2,roughnessmap_pars_fragment:m2,shadowmap_pars_fragment:g2,shadowmap_pars_vertex:_2,shadowmap_vertex:v2,shadowmask_pars_fragment:x2,skinbase_vertex:S2,skinning_pars_vertex:y2,skinning_vertex:M2,skinnormal_vertex:E2,specularmap_fragment:b2,specularmap_pars_fragment:T2,tonemapping_fragment:A2,tonemapping_pars_fragment:C2,transmission_fragment:R2,transmission_pars_fragment:w2,uv_pars_fragment:D2,uv_pars_vertex:N2,uv_vertex:U2,worldpos_vertex:L2,background_vert:O2,background_frag:P2,backgroundCube_vert:I2,backgroundCube_frag:z2,cube_vert:F2,cube_frag:B2,depth_vert:H2,depth_frag:G2,distance_vert:V2,distance_frag:k2,equirect_vert:X2,equirect_frag:W2,linedashed_vert:j2,linedashed_frag:q2,meshbasic_vert:Y2,meshbasic_frag:Z2,meshlambert_vert:K2,meshlambert_frag:Q2,meshmatcap_vert:J2,meshmatcap_frag:$2,meshnormal_vert:eT,meshnormal_frag:tT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:aT,meshphysical_frag:rT,meshtoon_vert:sT,meshtoon_frag:oT,points_vert:lT,points_frag:cT,shadow_vert:uT,shadow_frag:fT,sprite_vert:dT,sprite_frag:hT},Be={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ki={basic:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Fn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Fn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Fn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Fn([Be.points,Be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Fn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Fn([Be.common,Be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Fn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Fn([Be.sprite,Be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Fn([Be.common,Be.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Fn([Be.lights,Be.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ki.physical={uniforms:Fn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Wc={r:0,b:0,g:0},pT=new gn,Wx=new st;Wx.set(-1,0,0,0,1,0,0,0,1);function mT(r,e,i,s,l,c){const d=new Ft(0);let h=l===!0?0:1,m,p,x=null,_=0,g=null;function M(R){let N=R.isScene===!0?R.background:null;if(N&&N.isTexture){const U=R.backgroundBlurriness>0;N=e.get(N,U)}return N}function b(R){let N=!1;const U=M(R);U===null?y(d,h):U&&U.isColor&&(y(U,1),N=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(R,N){const U=M(N);U&&(U.isCubeTexture||U.mapping===xu)?(p===void 0&&(p=new Ca(new ll(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:js(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(G,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=U,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(pT.makeRotationFromEuler(N.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Wx),p.material.toneMapped=Mt.getTransfer(U.colorSpace)!==zt,(x!==U||_!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,x=U,_=U.version,g=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Ca(new yu(2,2),new Oi({name:"BackgroundMaterial",uniforms:js(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(U.colorSpace)!==zt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||_!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=U,_=U.version,g=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,N){R.getRGB(Wc,Gx(r)),i.buffers.color.setClear(Wc.r,Wc.g,Wc.b,N,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,N=1){d.set(R),h=N,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(d,h)},render:b,addToRenderList:D,dispose:S}}function gT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function h(V,J,fe,pe,q){let O=!1;const F=_(V,pe,fe,J);c!==F&&(c=F,p(c.object)),O=M(V,pe,fe,q),O&&b(V,pe,fe,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,U(V,J,fe,pe),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function x(V){return r.deleteVertexArray(V)}function _(V,J,fe,pe){const q=pe.wireframe===!0;let O=s[J.id];O===void 0&&(O={},s[J.id]=O);const F=V.isInstancedMesh===!0?V.id:0;let oe=O[F];oe===void 0&&(oe={},O[F]=oe);let ge=oe[fe.id];ge===void 0&&(ge={},oe[fe.id]=ge);let Me=ge[q];return Me===void 0&&(Me=g(m()),ge[q]=Me),Me}function g(V){const J=[],fe=[],pe=[];for(let q=0;q<i;q++)J[q]=0,fe[q]=0,pe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:fe,attributeDivisors:pe,object:V,attributes:{},index:null}}function M(V,J,fe,pe){const q=c.attributes,O=J.attributes;let F=0;const oe=fe.getAttributes();for(const ge in oe)if(oe[ge].location>=0){const P=q[ge];let Q=O[ge];if(Q===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),P===void 0||P.attribute!==Q||Q&&P.data!==Q.data)return!0;F++}return c.attributesNum!==F||c.index!==pe}function b(V,J,fe,pe){const q={},O=J.attributes;let F=0;const oe=fe.getAttributes();for(const ge in oe)if(oe[ge].location>=0){let P=O[ge];P===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const Q={};Q.attribute=P,P&&P.data&&(Q.data=P.data),q[ge]=Q,F++}c.attributes=q,c.attributesNum=F,c.index=pe}function D(){const V=c.newAttributes;for(let J=0,fe=V.length;J<fe;J++)V[J]=0}function y(V){S(V,0)}function S(V,J){const fe=c.newAttributes,pe=c.enabledAttributes,q=c.attributeDivisors;fe[V]=1,pe[V]===0&&(r.enableVertexAttribArray(V),pe[V]=1),q[V]!==J&&(r.vertexAttribDivisor(V,J),q[V]=J)}function R(){const V=c.newAttributes,J=c.enabledAttributes;for(let fe=0,pe=J.length;fe<pe;fe++)J[fe]!==V[fe]&&(r.disableVertexAttribArray(fe),J[fe]=0)}function N(V,J,fe,pe,q,O,F){F===!0?r.vertexAttribIPointer(V,J,fe,q,O):r.vertexAttribPointer(V,J,fe,pe,q,O)}function U(V,J,fe,pe){D();const q=pe.attributes,O=fe.getAttributes(),F=J.defaultAttributeValues;for(const oe in O){const ge=O[oe];if(ge.location>=0){let Me=q[oe];if(Me===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(Me=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(Me=V.instanceColor)),Me!==void 0){const P=Me.normalized,Q=Me.itemSize,xe=e.get(Me);if(xe===void 0)continue;const Ae=xe.buffer,De=xe.type,se=xe.bytesPerElement,Se=De===r.INT||De===r.UNSIGNED_INT||Me.gpuType===Tp;if(Me.isInterleavedBufferAttribute){const be=Me.data,He=be.stride,$e=Me.offset;if(be.isInstancedInterleavedBuffer){for(let Qe=0;Qe<ge.locationSize;Qe++)S(ge.location+Qe,be.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Qe=0;Qe<ge.locationSize;Qe++)y(ge.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Qe=0;Qe<ge.locationSize;Qe++)N(ge.location+Qe,Q/ge.locationSize,De,P,He*se,($e+Q/ge.locationSize*Qe)*se,Se)}else{if(Me.isInstancedBufferAttribute){for(let be=0;be<ge.locationSize;be++)S(ge.location+be,Me.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let be=0;be<ge.locationSize;be++)y(ge.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let be=0;be<ge.locationSize;be++)N(ge.location+be,Q/ge.locationSize,De,P,Q*se,Q/ge.locationSize*be*se,Se)}}else if(F!==void 0){const P=F[oe];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(ge.location,P);break;case 3:r.vertexAttrib3fv(ge.location,P);break;case 4:r.vertexAttrib4fv(ge.location,P);break;default:r.vertexAttrib1fv(ge.location,P)}}}}R()}function G(){z();for(const V in s){const J=s[V];for(const fe in J){const pe=J[fe];for(const q in pe){const O=pe[q];for(const F in O)x(O[F].object),delete O[F];delete pe[q]}}delete s[V]}}function L(V){if(s[V.id]===void 0)return;const J=s[V.id];for(const fe in J){const pe=J[fe];for(const q in pe){const O=pe[q];for(const F in O)x(O[F].object),delete O[F];delete pe[q]}}delete s[V.id]}function I(V){for(const J in s){const fe=s[J];for(const pe in fe){const q=fe[pe];if(q[V.id]===void 0)continue;const O=q[V.id];for(const F in O)x(O[F].object),delete O[F];delete q[V.id]}}}function T(V){for(const J in s){const fe=s[J],pe=V.isInstancedMesh===!0?V.id:0,q=fe[pe];if(q!==void 0){for(const O in q){const F=q[O];for(const oe in F)x(F[oe].object),delete F[oe];delete q[O]}delete fe[pe],Object.keys(fe).length===0&&delete s[J]}}}function z(){Z(),d=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:Z,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:y,disableUnusedAttributes:R}}function _T(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,x){x!==0&&(r.drawArraysInstanced(s,m,p,x),i.update(p,s,x))}function h(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let g=0;for(let M=0;M<x;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function vT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Li&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const T=I===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==yi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xi&&!T)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(tt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:N,maxFragmentUniforms:U,maxSamples:G,samples:L}}function xT(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new zr,h=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||s!==0||l;return l=g,s=_.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=x(_,g,0)},this.setState=function(_,g,M){const b=_.clippingPlanes,D=_.clipIntersection,y=_.clipShadows,S=r.get(_);if(!l||b===null||b.length===0||c&&!y)c?x(null):p();else{const R=c?0:s,N=R*4;let U=S.clippingState||null;m.value=U,U=x(b,g,N,M);for(let G=0;G!==N;++G)U[G]=i[G];S.clippingState=U,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(_,g,M,b){const D=_!==null?_.length:0;let y=null;if(D!==0){if(y=m.value,b!==!0||y===null){const S=M+D*4,R=g.matrixWorldInverse;h.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,U=M;N!==D;++N,U+=4)d.copy(_[N]).applyMatrix4(R,h),d.normal.toArray(y,U),y[U+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const ur=4,bv=[.125,.215,.35,.446,.526,.582],Br=20,ST=256,Zo=new kx,Tv=new Ft;let dh=null,hh=0,ph=0,mh=!1;const yT=new ie;class Av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=yT}=c;dh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,hh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Xr||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ta,format:Li,colorSpace:lu,depthBuffer:!1},l=Cv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MT(c)),this._blurMaterial=bT(c,e,i),this._ggxMaterial=ET(c,e,i)}return l}_compileMaterial(e){const i=new Ca(new Pi,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,s,l,c){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(Tv),_.toneMapping=ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ca(new ll,new zx({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(Tv),S=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const G=this._cubeSize;Bs(l,U*G,N>2?G:0,G,G),_.setRenderTarget(l),S&&_.render(D,m),_.render(e,m)}_.toneMapping=M,_.autoClear=g,e.background=R}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Xr||e.mapping===Xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Bs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),g=0+p*1.25,M=_*g,{_lodMax:b}=this,D=this._sizeLods[s],y=3*D*(s>b-ur?s-b+ur:0),S=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Bs(c,y,S,3*D,2*D),l.setRenderTarget(c),l.render(h,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Bs(e,y,S,3*D,2*D),l.setRenderTarget(e),l.render(h,Zo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&bt("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Br-1),D=c/b,y=isFinite(c)?1+Math.floor(x*D):Br;y>Br&&tt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Br}`);const S=[];let R=0;for(let I=0;I<Br;++I){const T=I/D,z=Math.exp(-T*T/2);S.push(z),I===0?R+=z:I<y&&(R+=2*z)}for(let I=0;I<S.length;I++)S[I]=S[I]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-s;const U=this._sizeLods[l],G=3*U*(l>N-ur?l-N+ur:0),L=4*(this._cubeSize-U);Bs(i,G,L,3*U,2*U),m.setRenderTarget(i),m.render(_,Zo)}}function MT(r){const e=[],i=[],s=[];let l=r;const c=r-ur+1+bv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-ur?m=bv[d-r+ur-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,_=1+p,g=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,b=6,D=3,y=2,S=1,R=new Float32Array(D*b*M),N=new Float32Array(y*b*M),U=new Float32Array(S*b*M);for(let L=0;L<M;L++){const I=L%3*2/3-1,T=L>2?0:-1,z=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];R.set(z,D*b*L),N.set(g,y*b*L);const Z=[L,L,L,L,L,L];U.set(Z,S*b*L)}const G=new Pi;G.setAttribute("position",new Mi(R,D)),G.setAttribute("uv",new Mi(N,y)),G.setAttribute("faceIndex",new Mi(U,S)),s.push(new Ca(G,null)),l>ur&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Cv(r,e,i){const s=new qi(r,e,i);return s.texture.mapping=xu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Bs(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function ET(r,e,i){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ST,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function bT(r,e,i){const s=new Float32Array(Br),l=new ie(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Rv(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function wv(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class jx extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Bx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ll(5,5,5),c=new Oi({name:"CubemapFromEquirect",uniforms:js(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:ya});c.uniforms.tEquirect.value=i;const d=new Ca(l,c),h=i.minFilter;return i.minFilter===Hr&&(i.minFilter=In),new D3(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function TT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Bd||M===Hd)if(e.has(g)){const b=e.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const D=new jx(b.height);return D.fromEquirectangularTexture(r,g),e.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===Bd||M===Hd,D=M===Xr||M===Xs;if(b||D){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Av(r)),y=b?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return b&&R&&R.height>0||D&&R&&m(R)?(s===null&&(s=new Av(r)),y=b?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",x),y.texture):null}}}return g}function h(g,M){return M===Bd?g.mapping=Xr:M===Hd&&(g.mapping=Xs),g}function m(g){let M=0;const b=6;for(let D=0;D<b;D++)g[D]!==void 0&&M++;return M===b}function p(g){const M=g.target;M.removeEventListener("dispose",p);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function AT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&dp("WebGLRenderer: "+s+" extension not supported."),l}}}function CT(r,e,i,s){const l={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(_,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(_){const g=[],M=_.index,b=_.attributes.position;let D=0;if(b===void 0)return;if(M!==null){const R=M.array;D=M.version;for(let N=0,U=R.length;N<U;N+=3){const G=R[N+0],L=R[N+1],I=R[N+2];g.push(G,L,L,I,I,G)}}else{const R=b.array;D=b.version;for(let N=0,U=R.length/3-1;N<U;N+=3){const G=N+0,L=N+1,I=N+2;g.push(G,L,L,I,I,G)}}const y=new(b.count>=65535?Px:Ox)(g,1);y.version=D;const S=c.get(_);S&&e.remove(S),c.set(_,y)}function x(_){const g=c.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:x}}function RT(r,e,i){let s;function l(_){s=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function m(_,g){r.drawElements(s,g,c,_*d),i.update(g,s,1)}function p(_,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,_*d,M),i.update(g,s,M))}function x(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,_,0,M);let D=0;for(let y=0;y<M;y++)D+=g[y];i.update(D,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function wT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:bt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function DT(r,e,i){const s=new WeakMap,l=new cn;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let Z=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",Z)};var M=Z;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let U=0;b===!0&&(U=1),D===!0&&(U=2),y===!0&&(U=3);let G=h.attributes.position.count*U,L=1;G>e.maxTextureSize&&(L=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*L*4*_),T=new Nx(I,G,L,_);T.type=Xi,T.needsUpdate=!0;const z=U*4;for(let V=0;V<_;V++){const J=S[V],fe=R[V],pe=N[V],q=G*L*4*V;for(let O=0;O<J.count;O++){const F=O*z;b===!0&&(l.fromBufferAttribute(J,O),I[q+F+0]=l.x,I[q+F+1]=l.y,I[q+F+2]=l.z,I[q+F+3]=0),D===!0&&(l.fromBufferAttribute(fe,O),I[q+F+4]=l.x,I[q+F+5]=l.y,I[q+F+6]=l.z,I[q+F+7]=0),y===!0&&(l.fromBufferAttribute(pe,O),I[q+F+8]=l.x,I[q+F+9]=l.y,I[q+F+10]=l.z,I[q+F+11]=pe.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new kt(G,L)},s.set(h,g),h.addEventListener("dispose",Z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const D=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function NT(r,e,i,s,l){let c=new WeakMap;function d(p){const x=l.render.frame,_=p.geometry,g=e.get(p,_);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==x&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==x&&(M.update(),c.set(M,x))}return g}function h(){c=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const UT={[mx]:"LINEAR_TONE_MAPPING",[gx]:"REINHARD_TONE_MAPPING",[_x]:"CINEON_TONE_MAPPING",[vx]:"ACES_FILMIC_TONE_MAPPING",[Sx]:"AGX_TONE_MAPPING",[yx]:"NEUTRAL_TONE_MAPPING",[xx]:"CUSTOM_TONE_MAPPING"};function LT(r,e,i,s,l){const c=new qi(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Ws(e,i):void 0}),d=new qi(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),h=new Pi;h.setAttribute("position",new Ea([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ea([0,2,0,0,2,0],2));const m=new C3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ca(h,m),x=new kx(-1,1,1,-1,0,1);let _=null,g=null,M=!1,b,D=null,y=[],S=!1;this.setSize=function(R,N){c.setSize(R,N),d.setSize(R,N);for(let U=0;U<y.length;U++){const G=y[U];G.setSize&&G.setSize(R,N)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const N=c.width,U=c.height;for(let G=0;G<y.length;G++){const L=y[G];L.setSize&&L.setSize(N,U)}},this.begin=function(R,N){if(M||R.toneMapping===ji&&y.length===0)return!1;if(D=N,N!==null){const U=N.width,G=N.height;(c.width!==U||c.height!==G)&&this.setSize(U,G)}return S===!1&&R.setRenderTarget(c),b=R.toneMapping,R.toneMapping=ji,!0},this.hasRenderPass=function(){return S},this.end=function(R,N){R.toneMapping=b,M=!0;let U=c,G=d;for(let L=0;L<y.length;L++){const I=y[L];if(I.enabled!==!1&&(I.render(R,G,U,N),I.needsSwap!==!1)){const T=U;U=G,G=T}}if(_!==R.outputColorSpace||g!==R.toneMapping){_=R.outputColorSpace,g=R.toneMapping,m.defines={},Mt.getTransfer(_)===zt&&(m.defines.SRGB_TRANSFER="");const L=UT[g];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(D),R.render(p,x),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const qx=new Bn,mp=new Ws(1,1),Yx=new Nx,Zx=new n3,Kx=new Bx,Dv=[],Nv=[],Uv=new Float32Array(16),Lv=new Float32Array(9),Ov=new Float32Array(4);function Ys(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Dv[l];if(c===void 0&&(c=new Float32Array(l),Dv[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function xn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Sn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Eu(r,e){let i=Nv[e];i===void 0&&(i=new Int32Array(e),Nv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function OT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function PT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2fv(this.addr,e),Sn(i,e)}}function IT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;r.uniform3fv(this.addr,e),Sn(i,e)}}function zT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4fv(this.addr,e),Sn(i,e)}}function FT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;Ov.set(s),r.uniformMatrix2fv(this.addr,!1,Ov),Sn(i,s)}}function BT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;Lv.set(s),r.uniformMatrix3fv(this.addr,!1,Lv),Sn(i,s)}}function HT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;Uv.set(s),r.uniformMatrix4fv(this.addr,!1,Uv),Sn(i,s)}}function GT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function VT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2iv(this.addr,e),Sn(i,e)}}function kT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;r.uniform3iv(this.addr,e),Sn(i,e)}}function XT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4iv(this.addr,e),Sn(i,e)}}function WT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function jT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2uiv(this.addr,e),Sn(i,e)}}function qT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;r.uniform3uiv(this.addr,e),Sn(i,e)}}function YT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4uiv(this.addr,e),Sn(i,e)}}function ZT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(mp.compareFunction=i.isReversedDepthBuffer()?Up:Np,c=mp):c=qx,i.setTexture2D(e||c,l)}function KT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Zx,l)}function QT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Kx,l)}function JT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Yx,l)}function $T(r){switch(r){case 5126:return OT;case 35664:return PT;case 35665:return IT;case 35666:return zT;case 35674:return FT;case 35675:return BT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return jT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}function eA(r,e){r.uniform1fv(this.addr,e)}function tA(r,e){const i=Ys(e,this.size,2);r.uniform2fv(this.addr,i)}function nA(r,e){const i=Ys(e,this.size,3);r.uniform3fv(this.addr,i)}function iA(r,e){const i=Ys(e,this.size,4);r.uniform4fv(this.addr,i)}function aA(r,e){const i=Ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function rA(r,e){const i=Ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function sA(r,e){const i=Ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function oA(r,e){r.uniform1iv(this.addr,e)}function lA(r,e){r.uniform2iv(this.addr,e)}function cA(r,e){r.uniform3iv(this.addr,e)}function uA(r,e){r.uniform4iv(this.addr,e)}function fA(r,e){r.uniform1uiv(this.addr,e)}function dA(r,e){r.uniform2uiv(this.addr,e)}function hA(r,e){r.uniform3uiv(this.addr,e)}function pA(r,e){r.uniform4uiv(this.addr,e)}function mA(r,e,i){const s=this.cache,l=e.length,c=Eu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=mp:d=qx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function gA(r,e,i){const s=this.cache,l=e.length,c=Eu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Zx,c[d])}function _A(r,e,i){const s=this.cache,l=e.length,c=Eu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Kx,c[d])}function vA(r,e,i){const s=this.cache,l=e.length,c=Eu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Yx,c[d])}function xA(r){switch(r){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return aA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return oA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return fA;case 36294:return dA;case 36295:return hA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return vA}}class SA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=$T(i.type)}}class yA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xA(i.type)}}class MA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function Pv(r,e){r.seq.push(e),r.map[e.id]=e}function EA(r,e,i){const s=r.name,l=s.length;for(gh.lastIndex=0;;){const c=gh.exec(s),d=gh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Pv(i,p===void 0?new SA(h,r,e):new yA(h,r,e));break}else{let _=i.map[h];_===void 0&&(_=new MA(h),Pv(i,_)),i=_}}}class Jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);EA(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Iv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const bA=37297;let TA=0;function AA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const zv=new st;function CA(r){Mt._getMatrix(zv,Mt.workingColorSpace,r);const e=`mat3( ${zv.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(r)){case cu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Fv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+AA(r.getShaderSource(e),h)}else return c}function RA(r,e){const i=CA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const wA={[mx]:"Linear",[gx]:"Reinhard",[_x]:"Cineon",[vx]:"ACESFilmic",[Sx]:"AgX",[yx]:"Neutral",[xx]:"Custom"};function DA(r,e){const i=wA[e];return i===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new ie;function NA(){Mt.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function LA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function OA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function $o(r){return r!==""}function Bv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(r){return r.replace(PA,zA)}const IA=new Map;function zA(r,e){let i=ft[e];if(i===void 0){const s=IA.get(e);if(s!==void 0)i=ft[s],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return gp(i)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(r){return r.replace(FA,BA)}function BA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Vv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HA={[qc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function GA(r){return HA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VA={[Xr]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function kA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":VA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const XA={[Xs]:"ENVMAP_MODE_REFRACTION"};function WA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":XA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jA={[px]:"ENVMAP_BLENDING_MULTIPLY",[PE]:"ENVMAP_BLENDING_MIX",[IE]:"ENVMAP_BLENDING_ADD"};function qA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jA[r.combine]||"ENVMAP_BLENDING_NONE"}function YA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function ZA(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=GA(i),p=kA(i),x=WA(i),_=qA(i),g=YA(i),M=UA(i),b=LA(c),D=l.createProgram();let y,S,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),S.length>0&&(S+=`
`)):(y=[Vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),S=[Vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?ft.tonemapping_pars_fragment:"",i.toneMapping!==ji?DA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,RA("linearToOutputTexel",i.outputColorSpace),NA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),d=gp(d),d=Bv(d,i),d=Hv(d,i),h=gp(h),h=Bv(h,i),h=Hv(h,i),d=Gv(d),h=Gv(h),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=R+y+d,U=R+S+h,G=Iv(l,l.VERTEX_SHADER,N),L=Iv(l,l.FRAGMENT_SHADER,U);l.attachShader(D,G),l.attachShader(D,L),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function I(V){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(D)||"",fe=l.getShaderInfoLog(G)||"",pe=l.getShaderInfoLog(L)||"",q=J.trim(),O=fe.trim(),F=pe.trim();let oe=!0,ge=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,G,L);else{const Me=Fv(l,G,"vertex"),P=Fv(l,L,"fragment");bt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+Me+`
`+P)}else q!==""?tt("WebGLProgram: Program Info Log:",q):(O===""||F==="")&&(ge=!1);ge&&(V.diagnostics={runnable:oe,programLog:q,vertexShader:{log:O,prefix:y},fragmentShader:{log:F,prefix:S}})}l.deleteShader(G),l.deleteShader(L),T=new Jc(l,D),z=OA(l,D)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let z;this.getAttributes=function(){return z===void 0&&I(this),z};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(D,bA)),Z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=TA++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=G,this.fragmentShader=L,this}let KA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new JA(e),i.set(e,s)),s}}class JA{constructor(e){this.id=KA++,this.code=e,this.usedTimes=0}}function $A(r){return r===Wr||r===su||r===ou}function eC(r,e,i,s,l,c){const d=new Ux,h=new QA,m=new Set,p=[],x=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,z,Z,V,J,fe){const pe=V.fog,q=J.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,oe=e.get(T.envMap||O,F),ge=oe&&oe.mapping===xu?oe.image.height:null,Me=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&tt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Q=P!==void 0?P.length:0;let xe=0;q.morphAttributes.position!==void 0&&(xe=1),q.morphAttributes.normal!==void 0&&(xe=2),q.morphAttributes.color!==void 0&&(xe=3);let Ae,De,se,Se;if(Me){const et=ki[Me];Ae=et.vertexShader,De=et.fragmentShader}else Ae=T.vertexShader,De=T.fragmentShader,h.update(T),se=h.getVertexShaderID(T),Se=h.getFragmentShaderID(T);const be=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),$e=J.isInstancedMesh===!0,Qe=J.isBatchedMesh===!0,Xt=!!T.map,dt=!!T.matcap,vt=!!oe,Nt=!!T.aoMap,ct=!!T.lightMap,rn=!!T.bumpMap,qt=!!T.normalMap,En=!!T.displacementMap,W=!!T.emissiveMap,en=!!T.metalnessMap,ht=!!T.roughnessMap,Bt=T.anisotropy>0,Ce=T.clearcoat>0,Kt=T.dispersion>0,w=T.iridescence>0,E=T.sheen>0,K=T.transmission>0,_e=Bt&&!!T.anisotropyMap,Ee=Ce&&!!T.clearcoatMap,Re=Ce&&!!T.clearcoatNormalMap,Le=Ce&&!!T.clearcoatRoughnessMap,ce=w&&!!T.iridescenceMap,ue=w&&!!T.iridescenceThicknessMap,Oe=E&&!!T.sheenColorMap,Pe=E&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,we=!!T.specularColorMap,it=!!T.specularIntensityMap,at=K&&!!T.transmissionMap,pt=K&&!!T.thicknessMap,k=!!T.gradientMap,Te=!!T.alphaMap,he=T.alphaTest>0,Fe=!!T.alphaHash,Ue=!!T.extensions;let ye=ji;T.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ye=r.toneMapping);const je={shaderID:Me,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:De,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&J._colorsTexture!==null,instancing:$e,instancingColor:$e&&J.instanceColor!==null,instancingMorph:$e&&J.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Xt,matcap:dt,envMap:vt,envMapMode:vt&&oe.mapping,envMapCubeUVHeight:ge,aoMap:Nt,lightMap:ct,bumpMap:rn,normalMap:qt,displacementMap:En,emissiveMap:W,normalMapObjectSpace:qt&&T.normalMapType===BE,normalMapTangentSpace:qt&&T.normalMapType===Q_,packedNormalMap:qt&&T.normalMapType===Q_&&$A(T.normalMap.format),metalnessMap:en,roughnessMap:ht,anisotropy:Bt,anisotropyMap:_e,clearcoat:Ce,clearcoatMap:Ee,clearcoatNormalMap:Re,clearcoatRoughnessMap:Le,dispersion:Kt,iridescence:w,iridescenceMap:ce,iridescenceThicknessMap:ue,sheen:E,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ne,specularColorMap:we,specularIntensityMap:it,transmission:K,transmissionMap:at,thicknessMap:pt,gradientMap:k,opaque:T.transparent===!1&&T.blending===Hs&&T.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:Fe,combine:T.combine,mapUv:Xt&&b(T.map.channel),aoMapUv:Nt&&b(T.aoMap.channel),lightMapUv:ct&&b(T.lightMap.channel),bumpMapUv:rn&&b(T.bumpMap.channel),normalMapUv:qt&&b(T.normalMap.channel),displacementMapUv:En&&b(T.displacementMap.channel),emissiveMapUv:W&&b(T.emissiveMap.channel),metalnessMapUv:en&&b(T.metalnessMap.channel),roughnessMapUv:ht&&b(T.roughnessMap.channel),anisotropyMapUv:_e&&b(T.anisotropyMap.channel),clearcoatMapUv:Ee&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(T.sheenRoughnessMap.channel),specularMapUv:Ne&&b(T.specularMap.channel),specularColorMapUv:we&&b(T.specularColorMap.channel),specularIntensityMapUv:it&&b(T.specularIntensityMap.channel),transmissionMapUv:at&&b(T.transmissionMap.channel),thicknessMapUv:pt&&b(T.thicknessMap.channel),alphaMapUv:Te&&b(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qt||Bt),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!q.attributes.uv&&(Xt||Te),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&qt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:J.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xe,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Z.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&Mt.getTransfer(T.map.colorSpace)===zt,decodeVideoTextureEmissive:W&&T.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(T.emissiveMap.colorSpace)===zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===va,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)z.push(Z),z.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(S(z,T),R(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function S(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function R(T,z){d.disableAll(),z.instancing&&d.enable(0),z.instancingColor&&d.enable(1),z.instancingMorph&&d.enable(2),z.matcap&&d.enable(3),z.envMap&&d.enable(4),z.normalMapObjectSpace&&d.enable(5),z.normalMapTangentSpace&&d.enable(6),z.clearcoat&&d.enable(7),z.iridescence&&d.enable(8),z.alphaTest&&d.enable(9),z.vertexColors&&d.enable(10),z.vertexAlphas&&d.enable(11),z.vertexUv1s&&d.enable(12),z.vertexUv2s&&d.enable(13),z.vertexUv3s&&d.enable(14),z.vertexTangents&&d.enable(15),z.anisotropy&&d.enable(16),z.alphaHash&&d.enable(17),z.batching&&d.enable(18),z.dispersion&&d.enable(19),z.batchingColor&&d.enable(20),z.gradientMap&&d.enable(21),z.packedNormalMap&&d.enable(22),z.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),z.fog&&d.enable(0),z.useFog&&d.enable(1),z.flatShading&&d.enable(2),z.logarithmicDepthBuffer&&d.enable(3),z.reversedDepthBuffer&&d.enable(4),z.skinning&&d.enable(5),z.morphTargets&&d.enable(6),z.morphNormals&&d.enable(7),z.morphColors&&d.enable(8),z.premultipliedAlpha&&d.enable(9),z.shadowMapEnabled&&d.enable(10),z.doubleSided&&d.enable(11),z.flipSided&&d.enable(12),z.useDepthPacking&&d.enable(13),z.dithering&&d.enable(14),z.transmission&&d.enable(15),z.sheen&&d.enable(16),z.opaque&&d.enable(17),z.pointsUvs&&d.enable(18),z.decodeVideoTexture&&d.enable(19),z.decodeVideoTextureEmissive&&d.enable(20),z.alphaToCoverage&&d.enable(21),z.numLightProbeGrids>0&&d.enable(22),T.push(d.mask)}function N(T){const z=M[T.type];let Z;if(z){const V=ki[z];Z=b3.clone(V.uniforms)}else Z=T.uniforms;return Z}function U(T,z){let Z=x.get(z);return Z!==void 0?++Z.usedTimes:(Z=new ZA(r,z,T,l),p.push(Z),x.set(z,Z)),Z}function G(T){if(--T.usedTimes===0){const z=p.indexOf(T);p[z]=p[p.length-1],p.pop(),x.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function I(){h.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:N,acquireProgram:U,releaseProgram:G,releaseShaderCache:L,programs:p,dispose:I}}function tC(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function nC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function kv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,b,D,y,S){let R=r[e];return R===void 0?(R={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:y,group:S},r[e]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=b,R.materialVariant=d(g),R.groupOrder=D,R.renderOrder=g.renderOrder,R.z=y,R.group=S),e++,R}function m(g,M,b,D,y,S){const R=h(g,M,b,D,y,S);b.transmission>0?s.push(R):b.transparent===!0?l.push(R):i.push(R)}function p(g,M,b,D,y,S){const R=h(g,M,b,D,y,S);b.transmission>0?s.unshift(R):b.transparent===!0?l.unshift(R):i.unshift(R)}function x(g,M){i.length>1&&i.sort(g||nC),s.length>1&&s.sort(M||kv),l.length>1&&l.sort(M||kv)}function _(){for(let g=e,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:_,sort:x}}function iC(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Xv,r.set(s,[d])):l>=c.length?(d=new Xv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function aC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Ft};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":i={color:new Ft,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=i,i}}}function rC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let sC=0;function oC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lC(r){const e=new aC,i=rC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const l=new ie,c=new gn,d=new gn;function h(p){let x=0,_=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let M=0,b=0,D=0,y=0,S=0,R=0,N=0,U=0,G=0,L=0,I=0;p.sort(oC);for(let z=0,Z=p.length;z<Z;z++){const V=p[z],J=V.color,fe=V.intensity,pe=V.distance;let q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Wr?q=V.shadow.map.texture:q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=J.r*fe,_+=J.g*fe,g+=J.b*fe;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],fe);I++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const F=V.shadow,oe=i.get(V);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,s.directionalShadow[M]=oe,s.directionalShadowMap[M]=q,s.directionalShadowMatrix[M]=V.shadow.matrix,R++}s.directional[M]=O,M++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(J).multiplyScalar(fe),O.distance=pe,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[D]=O;const F=V.shadow;if(V.map&&(s.spotLightMap[G]=V.map,G++,F.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[D]=F.matrix,V.castShadow){const oe=i.get(V);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,s.spotShadow[D]=oe,s.spotShadowMap[D]=q,U++}D++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(J).multiplyScalar(fe),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=O,y++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const F=V.shadow,oe=i.get(V);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,oe.shadowCameraNear=F.camera.near,oe.shadowCameraFar=F.camera.far,s.pointShadow[b]=oe,s.pointShadowMap[b]=q,s.pointShadowMatrix[b]=V.shadow.matrix,N++}s.point[b]=O,b++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(fe),O.groundColor.copy(V.groundColor).multiplyScalar(fe),s.hemi[S]=O,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==D||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==G||T.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=D,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+G-L,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=I,T.directionalLength=M,T.pointLength=b,T.spotLength=D,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=G,T.numLightProbes=I,s.version=sC++)}function m(p,x){let _=0,g=0,M=0,b=0,D=0;const y=x.matrixWorldInverse;for(let S=0,R=p.length;S<R;S++){const N=p[S];if(N.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),_++}else if(N.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),d.identity(),c.copy(N.matrixWorld),c.premultiply(y),d.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),b++}else if(N.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),g++}else if(N.isHemisphereLight){const U=s.hemi[D];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),D++}}}return{setup:h,setupView:m,state:s}}function Wv(r){const e=new lC(r),i=[],s=[],l=[];function c(g){_.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function x(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function cC(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Wv(r),e.set(l,[h])):c>=d.length?(h=new Wv(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const uC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dC=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],hC=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],jv=new gn,Ko=new ie,_h=new ie;function pC(r,e,i){let s=new Fx;const l=new kt,c=new kt,d=new cn,h=new R3,m=new w3,p={},x=i.maxTextureSize,_={[dr]:qn,[qn]:dr,[va]:va},g=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:uC,fragmentShader:fC}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Pi;b.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ca(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let S=this.type;this.render=function(L,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===gE&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qc);const z=r.getRenderTarget(),Z=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),J=r.state;J.setBlending(ya),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const fe=S!==this.type;fe&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(q=>q.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,q=L.length;pe<q;pe++){const O=L[pe],F=O.shadow;if(F===void 0){tt("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const oe=F.getFrameExtents();l.multiply(oe),c.copy(F.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/oe.x),l.x=c.x*oe.x,F.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/oe.y),l.y=c.y*oe.y,F.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ge,F.map===null||fe===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Jo){if(O.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new qi(l.x,l.y,{format:Wr,type:Ta,minFilter:In,magFilter:In,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new Ws(l.x,l.y,Xi),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=Aa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dn,F.map.depthTexture.magFilter=Dn}else O.isPointLight?(F.map=new jx(l.x),F.map.depthTexture=new M3(l.x,Yi)):(F.map=new qi(l.x,l.y),F.map.depthTexture=new Ws(l.x,l.y,Yi)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=Aa,this.type===qc?(F.map.depthTexture.compareFunction=ge?Up:Np,F.map.depthTexture.minFilter=In,F.map.depthTexture.magFilter=In):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dn,F.map.depthTexture.magFilter=Dn);F.camera.updateProjectionMatrix()}const Me=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Me;P++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,P),r.clear();else{P===0&&(r.setRenderTarget(F.map),r.clear());const Q=F.getViewport(P);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),J.viewport(d)}if(O.isPointLight){const Q=F.camera,xe=F.matrix,Ae=O.distance||Q.far;Ae!==Q.far&&(Q.far=Ae,Q.updateProjectionMatrix()),Ko.setFromMatrixPosition(O.matrixWorld),Q.position.copy(Ko),_h.copy(Q.position),_h.add(dC[P]),Q.up.copy(hC[P]),Q.lookAt(_h),Q.updateMatrixWorld(),xe.makeTranslation(-Ko.x,-Ko.y,-Ko.z),jv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(jv,Q.coordinateSystem,Q.reversedDepth)}else F.updateMatrices(O);s=F.getFrustum(),U(I,T,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Jo&&R(F,T),F.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(z,Z,V)};function R(L,I){const T=e.update(D);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(l.x,l.y,{format:Wr,type:Ta})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(I,null,T,g,D,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(I,null,T,M,D,null)}function N(L,I,T,z){let Z=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)Z=V;else if(Z=T.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=Z.uuid,fe=I.uuid;let pe=p[J];pe===void 0&&(pe={},p[J]=pe);let q=pe[fe];q===void 0&&(q=Z.clone(),pe[fe]=q,I.addEventListener("dispose",G)),Z=q}if(Z.visible=I.visible,Z.wireframe=I.wireframe,z===Jo?Z.side=I.shadowSide!==null?I.shadowSide:I.side:Z.side=I.shadowSide!==null?I.shadowSide:_[I.side],Z.alphaMap=I.alphaMap,Z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Z.map=I.map,Z.clipShadows=I.clipShadows,Z.clippingPlanes=I.clippingPlanes,Z.clipIntersection=I.clipIntersection,Z.displacementMap=I.displacementMap,Z.displacementScale=I.displacementScale,Z.displacementBias=I.displacementBias,Z.wireframeLinewidth=I.wireframeLinewidth,Z.linewidth=I.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const J=r.properties.get(Z);J.light=T}return Z}function U(L,I,T,z,Z){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Z===Jo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const fe=e.update(L),pe=L.material;if(Array.isArray(pe)){const q=fe.groups;for(let O=0,F=q.length;O<F;O++){const oe=q[O],ge=pe[oe.materialIndex];if(ge&&ge.visible){const Me=N(L,ge,z,Z);L.onBeforeShadow(r,L,I,T,fe,Me,oe),r.renderBufferDirect(T,null,fe,Me,L,oe),L.onAfterShadow(r,L,I,T,fe,Me,oe)}}}else if(pe.visible){const q=N(L,pe,z,Z);L.onBeforeShadow(r,L,I,T,fe,q,null),r.renderBufferDirect(T,null,fe,q,L,null),L.onAfterShadow(r,L,I,T,fe,q,null)}}const J=L.children;for(let fe=0,pe=J.length;fe<pe;fe++)U(J[fe],I,T,z,Z)}function G(L){L.target.removeEventListener("dispose",G);for(const T in p){const z=p[T],Z=L.target.uuid;Z in z&&(z[Z].dispose(),delete z[Z])}}}function mC(r,e){function i(){let k=!1;const Te=new cn;let he=null;const Fe=new cn(0,0,0,0);return{setMask:function(Ue){he!==Ue&&!k&&(r.colorMask(Ue,Ue,Ue,Ue),he=Ue)},setLocked:function(Ue){k=Ue},setClear:function(Ue,ye,je,et,tn){tn===!0&&(Ue*=et,ye*=et,je*=et),Te.set(Ue,ye,je,et),Fe.equals(Te)===!1&&(r.clearColor(Ue,ye,je,et),Fe.copy(Te))},reset:function(){k=!1,he=null,Fe.set(-1,0,0,0)}}}function s(){let k=!1,Te=!1,he=null,Fe=null,Ue=null;return{setReversed:function(ye){if(Te!==ye){const je=e.get("EXT_clip_control");ye?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Te=ye;const et=Ue;Ue=null,this.setClear(et)}},getReversed:function(){return Te},setTest:function(ye){ye?be(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(ye){he!==ye&&!k&&(r.depthMask(ye),he=ye)},setFunc:function(ye){if(Te&&(ye=ZE[ye]),Fe!==ye){switch(ye){case Ch:r.depthFunc(r.NEVER);break;case Rh:r.depthFunc(r.ALWAYS);break;case wh:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case Dh:r.depthFunc(r.EQUAL);break;case Nh:r.depthFunc(r.GEQUAL);break;case Uh:r.depthFunc(r.GREATER);break;case Lh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Ue!==ye&&(Ue=ye,Te&&(ye=1-ye),r.clearDepth(ye))},reset:function(){k=!1,he=null,Fe=null,Ue=null,Te=!1}}}function l(){let k=!1,Te=null,he=null,Fe=null,Ue=null,ye=null,je=null,et=null,tn=null;return{setTest:function(Rt){k||(Rt?be(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Rt){Te!==Rt&&!k&&(r.stencilMask(Rt),Te=Rt)},setFunc:function(Rt,ci,Zn){(he!==Rt||Fe!==ci||Ue!==Zn)&&(r.stencilFunc(Rt,ci,Zn),he=Rt,Fe=ci,Ue=Zn)},setOp:function(Rt,ci,Zn){(ye!==Rt||je!==ci||et!==Zn)&&(r.stencilOp(Rt,ci,Zn),ye=Rt,je=ci,et=Zn)},setLocked:function(Rt){k=Rt},setClear:function(Rt){tn!==Rt&&(r.clearStencil(Rt),tn=Rt)},reset:function(){k=!1,Te=null,he=null,Fe=null,Ue=null,ye=null,je=null,et=null,tn=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},_={},g={},M=new WeakMap,b=[],D=null,y=!1,S=null,R=null,N=null,U=null,G=null,L=null,I=null,T=new Ft(0,0,0),z=0,Z=!1,V=null,J=null,fe=null,pe=null,q=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,oe=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ge)[1]),F=oe>=1):ge.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),F=oe>=2);let Me=null,P={};const Q=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Ae=new cn().fromArray(Q),De=new cn().fromArray(xe);function se(k,Te,he,Fe){const Ue=new Uint8Array(4),ye=r.createTexture();r.bindTexture(k,ye),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<he;je++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Te+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return ye}const Se={};Se[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(r.DEPTH_TEST),d.setFunc(ks),rn(!1),qt(q_),be(r.CULL_FACE),Nt(ya);function be(k){x[k]!==!0&&(r.enable(k),x[k]=!0)}function He(k){x[k]!==!1&&(r.disable(k),x[k]=!1)}function $e(k,Te){return g[k]!==Te?(r.bindFramebuffer(k,Te),g[k]=Te,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Qe(k,Te){let he=b,Fe=!1;if(k){he=M.get(Te),he===void 0&&(he=[],M.set(Te,he));const Ue=k.textures;if(he.length!==Ue.length||he[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,je=Ue.length;ye<je;ye++)he[ye]=r.COLOR_ATTACHMENT0+ye;he.length=Ue.length,Fe=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(he)}function Xt(k){return D!==k?(r.useProgram(k),D=k,!0):!1}const dt={[Fr]:r.FUNC_ADD,[vE]:r.FUNC_SUBTRACT,[xE]:r.FUNC_REVERSE_SUBTRACT};dt[SE]=r.MIN,dt[yE]=r.MAX;const vt={[ME]:r.ZERO,[EE]:r.ONE,[bE]:r.SRC_COLOR,[Th]:r.SRC_ALPHA,[DE]:r.SRC_ALPHA_SATURATE,[RE]:r.DST_COLOR,[AE]:r.DST_ALPHA,[TE]:r.ONE_MINUS_SRC_COLOR,[Ah]:r.ONE_MINUS_SRC_ALPHA,[wE]:r.ONE_MINUS_DST_COLOR,[CE]:r.ONE_MINUS_DST_ALPHA,[NE]:r.CONSTANT_COLOR,[UE]:r.ONE_MINUS_CONSTANT_COLOR,[LE]:r.CONSTANT_ALPHA,[OE]:r.ONE_MINUS_CONSTANT_ALPHA};function Nt(k,Te,he,Fe,Ue,ye,je,et,tn,Rt){if(k===ya){y===!0&&(He(r.BLEND),y=!1);return}if(y===!1&&(be(r.BLEND),y=!0),k!==_E){if(k!==S||Rt!==Z){if((R!==Fr||G!==Fr)&&(r.blendEquation(r.FUNC_ADD),R=Fr,G=Fr),Rt)switch(k){case Hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y_:r.blendFunc(r.ONE,r.ONE);break;case Z_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case K_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:bt("WebGLState: Invalid blending: ",k);break}else switch(k){case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Z_:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K_:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",k);break}N=null,U=null,L=null,I=null,T.set(0,0,0),z=0,S=k,Z=Rt}return}Ue=Ue||Te,ye=ye||he,je=je||Fe,(Te!==R||Ue!==G)&&(r.blendEquationSeparate(dt[Te],dt[Ue]),R=Te,G=Ue),(he!==N||Fe!==U||ye!==L||je!==I)&&(r.blendFuncSeparate(vt[he],vt[Fe],vt[ye],vt[je]),N=he,U=Fe,L=ye,I=je),(et.equals(T)===!1||tn!==z)&&(r.blendColor(et.r,et.g,et.b,tn),T.copy(et),z=tn),S=k,Z=!1}function ct(k,Te){k.side===va?He(r.CULL_FACE):be(r.CULL_FACE);let he=k.side===qn;Te&&(he=!he),rn(he),k.blending===Hs&&k.transparent===!1?Nt(ya):Nt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const Fe=k.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),W(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function rn(k){V!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),V=k)}function qt(k){k!==pE?(be(r.CULL_FACE),k!==J&&(k===q_?r.cullFace(r.BACK):k===mE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),J=k}function En(k){k!==fe&&(F&&r.lineWidth(k),fe=k)}function W(k,Te,he){k?(be(r.POLYGON_OFFSET_FILL),(pe!==Te||q!==he)&&(pe=Te,q=he,d.getReversed()&&(Te=-Te),r.polygonOffset(Te,he))):He(r.POLYGON_OFFSET_FILL)}function en(k){k?be(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function ht(k){k===void 0&&(k=r.TEXTURE0+O-1),Me!==k&&(r.activeTexture(k),Me=k)}function Bt(k,Te,he){he===void 0&&(Me===null?he=r.TEXTURE0+O-1:he=Me);let Fe=P[he];Fe===void 0&&(Fe={type:void 0,texture:void 0},P[he]=Fe),(Fe.type!==k||Fe.texture!==Te)&&(Me!==he&&(r.activeTexture(he),Me=he),r.bindTexture(k,Te||Se[k]),Fe.type=k,Fe.texture=Te)}function Ce(){const k=P[Me];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Kt(){try{r.compressedTexImage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function w(){try{r.compressedTexImage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function E(){try{r.texSubImage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function K(){try{r.texSubImage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function _e(){try{r.compressedTexSubImage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function Re(){try{r.texStorage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function Le(){try{r.texStorage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function ce(){try{r.texImage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function ue(){try{r.texImage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function Oe(k){return _[k]!==void 0?_[k]:r.getParameter(k)}function Pe(k,Te){_[k]!==Te&&(r.pixelStorei(k,Te),_[k]=Te)}function Ne(k){Ae.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function we(k){De.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function it(k,Te){let he=p.get(Te);he===void 0&&(he=new WeakMap,p.set(Te,he));let Fe=he.get(k);Fe===void 0&&(Fe=r.getUniformBlockIndex(Te,k.name),he.set(k,Fe))}function at(k,Te){const Fe=p.get(Te).get(k);m.get(Te)!==Fe&&(r.uniformBlockBinding(Te,Fe,k.__bindingPointIndex),m.set(Te,Fe))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},_={},Me=null,P={},g={},M=new WeakMap,b=[],D=null,y=!1,S=null,R=null,N=null,U=null,G=null,L=null,I=null,T=new Ft(0,0,0),z=0,Z=!1,V=null,J=null,fe=null,pe=null,q=null,Ae.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:be,disable:He,bindFramebuffer:$e,drawBuffers:Qe,useProgram:Xt,setBlending:Nt,setMaterial:ct,setFlipSided:rn,setCullFace:qt,setLineWidth:En,setPolygonOffset:W,setScissorTest:en,activeTexture:ht,bindTexture:Bt,unbindTexture:Ce,compressedTexImage2D:Kt,compressedTexImage3D:w,texImage2D:ce,texImage3D:ue,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Re,texStorage3D:Le,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:Ne,viewport:we,reset:pt}}function gC(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new kt,x=new WeakMap,_=new Set;let g;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(w,E){return b?new OffscreenCanvas(w,E):fu("canvas")}function y(w,E,K){let _e=1;const Ee=Kt(w);if((Ee.width>K||Ee.height>K)&&(_e=K/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Re=Math.floor(_e*Ee.width),Le=Math.floor(_e*Ee.height);g===void 0&&(g=D(Re,Le));const ce=E?D(Re,Le):g;return ce.width=Re,ce.height=Le,ce.getContext("2d").drawImage(w,0,0,Re,Le),tt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Re+"x"+Le+")."),ce}else return"data"in w&&tt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),w;return w}function S(w){return w.generateMipmaps}function R(w){r.generateMipmap(w)}function N(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(w,E,K,_e,Ee,Re=!1){if(w!==null){if(r[w]!==void 0)return r[w];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Le;_e&&(Le=e.get("EXT_texture_norm16"),Le||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===r.RED&&(K===r.FLOAT&&(ce=r.R32F),K===r.HALF_FLOAT&&(ce=r.R16F),K===r.UNSIGNED_BYTE&&(ce=r.R8),K===r.UNSIGNED_SHORT&&Le&&(ce=Le.R16_EXT),K===r.SHORT&&Le&&(ce=Le.R16_SNORM_EXT)),E===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ce=r.R8UI),K===r.UNSIGNED_SHORT&&(ce=r.R16UI),K===r.UNSIGNED_INT&&(ce=r.R32UI),K===r.BYTE&&(ce=r.R8I),K===r.SHORT&&(ce=r.R16I),K===r.INT&&(ce=r.R32I)),E===r.RG&&(K===r.FLOAT&&(ce=r.RG32F),K===r.HALF_FLOAT&&(ce=r.RG16F),K===r.UNSIGNED_BYTE&&(ce=r.RG8),K===r.UNSIGNED_SHORT&&Le&&(ce=Le.RG16_EXT),K===r.SHORT&&Le&&(ce=Le.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ce=r.RG8UI),K===r.UNSIGNED_SHORT&&(ce=r.RG16UI),K===r.UNSIGNED_INT&&(ce=r.RG32UI),K===r.BYTE&&(ce=r.RG8I),K===r.SHORT&&(ce=r.RG16I),K===r.INT&&(ce=r.RG32I)),E===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),K===r.UNSIGNED_INT&&(ce=r.RGB32UI),K===r.BYTE&&(ce=r.RGB8I),K===r.SHORT&&(ce=r.RGB16I),K===r.INT&&(ce=r.RGB32I)),E===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),K===r.UNSIGNED_INT&&(ce=r.RGBA32UI),K===r.BYTE&&(ce=r.RGBA8I),K===r.SHORT&&(ce=r.RGBA16I),K===r.INT&&(ce=r.RGBA32I)),E===r.RGB&&(K===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGB16_EXT),K===r.SHORT&&Le&&(ce=Le.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),E===r.RGBA){const ue=Re?cu:Mt.getTransfer(Ee);K===r.FLOAT&&(ce=r.RGBA32F),K===r.HALF_FLOAT&&(ce=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ce=ue===zt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGBA16_EXT),K===r.SHORT&&Le&&(ce=Le.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function G(w,E){let K;return w?E===null||E===Yi||E===il?K=r.DEPTH24_STENCIL8:E===Xi?K=r.DEPTH32F_STENCIL8:E===nl&&(K=r.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===il?K=r.DEPTH_COMPONENT24:E===Xi?K=r.DEPTH_COMPONENT32F:E===nl&&(K=r.DEPTH_COMPONENT16),K}function L(w,E){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dn&&w.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function I(w){const E=w.target;E.removeEventListener("dispose",I),z(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&_.delete(E)}function T(w){const E=w.target;E.removeEventListener("dispose",T),V(E)}function z(w){const E=s.get(w);if(E.__webglInit===void 0)return;const K=w.source,_e=M.get(K);if(_e){const Ee=_e[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&Z(w),Object.keys(_e).length===0&&M.delete(K)}s.remove(w)}function Z(w){const E=s.get(w);r.deleteTexture(E.__webglTexture);const K=w.source,_e=M.get(K);delete _e[E.__cacheKey],d.memory.textures--}function V(w){const E=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ee=0;Ee<E.__webglFramebuffer[_e].length;Ee++)r.deleteFramebuffer(E.__webglFramebuffer[_e][Ee]);else r.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)r.deleteFramebuffer(E.__webglFramebuffer[_e]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=w.textures;for(let _e=0,Ee=K.length;_e<Ee;_e++){const Re=s.get(K[_e]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),d.memory.textures--),s.remove(K[_e])}s.remove(w)}let J=0;function fe(){J=0}function pe(){return J}function q(w){J=w}function O(){const w=J;return w>=l.maxTextures&&tt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),J+=1,w}function F(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function oe(w,E){const K=s.get(w);if(w.isVideoTexture&&Bt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&K.__version!==w.version){const _e=w.image;if(_e===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(K,w,E);return}}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+E)}function ge(w,E){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){He(K,w,E);return}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+E)}function Me(w,E){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){He(K,w,E);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+E)}function P(w,E){const K=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&K.__version!==w.version){$e(K,w,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+E)}const Q={[Oh]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[Ph]:r.MIRRORED_REPEAT},xe={[Dn]:r.NEAREST,[zE]:r.NEAREST_MIPMAP_NEAREST,[Mc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Gd]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},Ae={[HE]:r.NEVER,[WE]:r.ALWAYS,[GE]:r.LESS,[Np]:r.LEQUAL,[VE]:r.EQUAL,[Up]:r.GEQUAL,[kE]:r.GREATER,[XE]:r.NOTEQUAL};function De(w,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Gd||E.magFilter===Mc||E.magFilter===Hr||E.minFilter===In||E.minFilter===Gd||E.minFilter===Mc||E.minFilter===Hr)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Q[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,xe[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==Mc&&E.minFilter!==Hr||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function se(w,E){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",I));const _e=E.source;let Ee=M.get(_e);Ee===void 0&&(Ee={},M.set(_e,Ee));const Re=F(E);if(Re!==w.__cacheKey){Ee[Re]===void 0&&(Ee[Re]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,K=!0),Ee[Re].usedTimes++;const Le=Ee[w.__cacheKey];Le!==void 0&&(Ee[w.__cacheKey].usedTimes--,Le.usedTimes===0&&Z(E)),w.__cacheKey=Re,w.__webglTexture=Ee[Re].texture}return K}function Se(w,E,K){return Math.floor(Math.floor(w/K)/E)}function be(w,E,K,_e){const Re=w.updateRanges;if(Re.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,K,_e,E.data);else{Re.sort((Pe,Ne)=>Pe.start-Ne.start);let Le=0;for(let Pe=1;Pe<Re.length;Pe++){const Ne=Re[Le],we=Re[Pe],it=Ne.start+Ne.count,at=Se(we.start,E.width,4),pt=Se(Ne.start,E.width,4);we.start<=it+1&&at===pt&&Se(we.start+we.count-1,E.width,4)===at?Ne.count=Math.max(Ne.count,we.start+we.count-Ne.start):(++Le,Re[Le]=we)}Re.length=Le+1;const ce=i.getParameter(r.UNPACK_ROW_LENGTH),ue=i.getParameter(r.UNPACK_SKIP_PIXELS),Oe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,Ne=Re.length;Pe<Ne;Pe++){const we=Re[Pe],it=Math.floor(we.start/4),at=Math.ceil(we.count/4),pt=it%E.width,k=Math.floor(it/E.width),Te=at,he=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,pt,k,Te,he,K,_e,E.data)}w.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ce),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function He(w,E,K){let _e=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=r.TEXTURE_3D);const Ee=se(w,E),Re=E.source;i.bindTexture(_e,w.__webglTexture,r.TEXTURE0+K);const Le=s.get(Re);if(Re.version!==Le.__version||Ee===!0){if(i.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const he=Mt.getPrimaries(Mt.workingColorSpace),Fe=E.colorSpace===cr?null:Mt.getPrimaries(E.colorSpace),Ue=E.colorSpace===cr||he===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ue=y(E.image,!1,l.maxTextureSize);ue=Ce(E,ue);const Oe=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type);let Ne=U(E.internalFormat,Oe,Pe,E.normalized,E.colorSpace,E.isVideoTexture);De(_e,E);let we;const it=E.mipmaps,at=E.isVideoTexture!==!0,pt=Le.__version===void 0||Ee===!0,k=Re.dataReady,Te=L(E,ue);if(E.isDepthTexture)Ne=G(E.format===Gr,E.type),pt&&(at?i.texStorage2D(r.TEXTURE_2D,1,Ne,ue.width,ue.height):i.texImage2D(r.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Oe,Pe,null));else if(E.isDataTexture)if(it.length>0){at&&pt&&i.texStorage2D(r.TEXTURE_2D,Te,Ne,it[0].width,it[0].height);for(let he=0,Fe=it.length;he<Fe;he++)we=it[he],at?k&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,we.width,we.height,Oe,Pe,we.data):i.texImage2D(r.TEXTURE_2D,he,Ne,we.width,we.height,0,Oe,Pe,we.data);E.generateMipmaps=!1}else at?(pt&&i.texStorage2D(r.TEXTURE_2D,Te,Ne,ue.width,ue.height),k&&be(E,ue,Oe,Pe)):i.texImage2D(r.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Oe,Pe,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ne,it[0].width,it[0].height,ue.depth);for(let he=0,Fe=it.length;he<Fe;he++)if(we=it[he],E.format!==Li)if(Oe!==null)if(at){if(k)if(E.layerUpdates.size>0){const Ue=Ev(we.width,we.height,E.format,E.type);for(const ye of E.layerUpdates){const je=we.data.subarray(ye*Ue/we.data.BYTES_PER_ELEMENT,(ye+1)*Ue/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,ye,we.width,we.height,1,Oe,je)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,ue.depth,Oe,we.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,Ne,we.width,we.height,ue.depth,0,we.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,ue.depth,Oe,Pe,we.data):i.texImage3D(r.TEXTURE_2D_ARRAY,he,Ne,we.width,we.height,ue.depth,0,Oe,Pe,we.data)}else{at&&pt&&i.texStorage2D(r.TEXTURE_2D,Te,Ne,it[0].width,it[0].height);for(let he=0,Fe=it.length;he<Fe;he++)we=it[he],E.format!==Li?Oe!==null?at?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,we.width,we.height,Oe,we.data):i.compressedTexImage2D(r.TEXTURE_2D,he,Ne,we.width,we.height,0,we.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?k&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,we.width,we.height,Oe,Pe,we.data):i.texImage2D(r.TEXTURE_2D,he,Ne,we.width,we.height,0,Oe,Pe,we.data)}else if(E.isDataArrayTexture)if(at){if(pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ne,ue.width,ue.height,ue.depth),k)if(E.layerUpdates.size>0){const he=Ev(ue.width,ue.height,E.format,E.type);for(const Fe of E.layerUpdates){const Ue=ue.data.subarray(Fe*he/ue.data.BYTES_PER_ELEMENT,(Fe+1)*he/ue.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Fe,ue.width,ue.height,1,Oe,Pe,Ue)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Oe,Pe,ue.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,Oe,Pe,ue.data);else if(E.isData3DTexture)at?(pt&&i.texStorage3D(r.TEXTURE_3D,Te,Ne,ue.width,ue.height,ue.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Oe,Pe,ue.data)):i.texImage3D(r.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,Oe,Pe,ue.data);else if(E.isFramebufferTexture){if(pt)if(at)i.texStorage2D(r.TEXTURE_2D,Te,Ne,ue.width,ue.height);else{let he=ue.width,Fe=ue.height;for(let Ue=0;Ue<Te;Ue++)i.texImage2D(r.TEXTURE_2D,Ue,Ne,he,Fe,0,Oe,Pe,null),he>>=1,Fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const he=r.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ue.parentNode!==he){he.appendChild(ue),_.add(E),he.onpaint=et=>{const tn=et.changedElements;for(const Rt of _)tn.includes(Rt.image)&&(Rt.needsUpdate=!0)},he.requestPaint();return}const Fe=0,Ue=r.RGBA,ye=r.RGBA,je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Fe,Ue,ye,je,ue),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&pt){const he=Kt(it[0]);i.texStorage2D(r.TEXTURE_2D,Te,Ne,he.width,he.height)}for(let he=0,Fe=it.length;he<Fe;he++)we=it[he],at?k&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,Oe,Pe,we):i.texImage2D(r.TEXTURE_2D,he,Ne,Oe,Pe,we);E.generateMipmaps=!1}else if(at){if(pt){const he=Kt(ue);i.texStorage2D(r.TEXTURE_2D,Te,Ne,he.width,he.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,ue)}else i.texImage2D(r.TEXTURE_2D,0,Ne,Oe,Pe,ue);S(E)&&R(_e),Le.__version=Re.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function $e(w,E,K){if(E.image.length!==6)return;const _e=se(w,E),Ee=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+K);const Re=s.get(Ee);if(Ee.version!==Re.__version||_e===!0){i.activeTexture(r.TEXTURE0+K);const Le=Mt.getPrimaries(Mt.workingColorSpace),ce=E.colorSpace===cr?null:Mt.getPrimaries(E.colorSpace),ue=E.colorSpace===cr||Le===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let ye=0;ye<6;ye++)!Oe&&!Pe?Ne[ye]=y(E.image[ye],!0,l.maxCubemapSize):Ne[ye]=Pe?E.image[ye].image:E.image[ye],Ne[ye]=Ce(E,Ne[ye]);const we=Ne[0],it=c.convert(E.format,E.colorSpace),at=c.convert(E.type),pt=U(E.internalFormat,it,at,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Te=Re.__version===void 0||_e===!0,he=Ee.dataReady;let Fe=L(E,we);De(r.TEXTURE_CUBE_MAP,E);let Ue;if(Oe){k&&Te&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,pt,we.width,we.height);for(let ye=0;ye<6;ye++){Ue=Ne[ye].mipmaps;for(let je=0;je<Ue.length;je++){const et=Ue[je];E.format!==Li?it!==null?k?he&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je,0,0,et.width,et.height,it,et.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je,pt,et.width,et.height,0,et.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je,0,0,et.width,et.height,it,at,et.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je,pt,et.width,et.height,0,it,at,et.data)}}}else{if(Ue=E.mipmaps,k&&Te){Ue.length>0&&Fe++;const ye=Kt(Ne[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,pt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Pe){k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ne[ye].width,Ne[ye].height,it,at,Ne[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,Ne[ye].width,Ne[ye].height,0,it,at,Ne[ye].data);for(let je=0;je<Ue.length;je++){const tn=Ue[je].image[ye].image;k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je+1,0,0,tn.width,tn.height,it,at,tn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je+1,pt,tn.width,tn.height,0,it,at,tn.data)}}else{k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,it,at,Ne[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,it,at,Ne[ye]);for(let je=0;je<Ue.length;je++){const et=Ue[je];k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je+1,0,0,it,at,et.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je+1,pt,it,at,et.image[ye])}}}S(E)&&R(r.TEXTURE_CUBE_MAP),Re.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Qe(w,E,K,_e,Ee,Re){const Le=c.convert(K.format,K.colorSpace),ce=c.convert(K.type),ue=U(K.internalFormat,Le,ce,K.normalized,K.colorSpace),Oe=s.get(E),Pe=s.get(K);if(Pe.__renderTarget=E,!Oe.__hasExternalTextures){const Ne=Math.max(1,E.width>>Re),we=Math.max(1,E.height>>Re);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?i.texImage3D(Ee,Re,ue,Ne,we,E.depth,0,Le,ce,null):i.texImage2D(Ee,Re,ue,Ne,we,0,Le,ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),ht(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Ee,Pe.__webglTexture,0,en(E)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Ee,Pe.__webglTexture,Re),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(w,E,K){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer){const _e=E.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,Re=G(E.stencilBuffer,Ee),Le=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(E),Re,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(E),Re,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Re,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,w)}else{const _e=E.textures;for(let Ee=0;Ee<_e.length;Ee++){const Re=_e[Ee],Le=c.convert(Re.format,Re.colorSpace),ce=c.convert(Re.type),ue=U(Re.internalFormat,Le,ce,Re.normalized,Re.colorSpace);ht(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(E),ue,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(E),ue,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ue,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(w,E,K){const _e=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(E.depthTexture);if(Ee.__renderTarget=E,(!Ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),Ee.__webglTexture===void 0){Ee.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),De(r.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=c.convert(E.depthTexture.format),Pe=c.convert(E.depthTexture.type);let Ne;E.depthTexture.format===Aa?Ne=r.DEPTH_COMPONENT24:E.depthTexture.format===Gr&&(Ne=r.DEPTH24_STENCIL8);for(let we=0;we<6;we++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ne,E.width,E.height,0,Oe,Pe,null)}}else oe(E.depthTexture,0);const Re=Ee.__webglTexture,Le=en(E),ce=_e?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,ue=E.depthTexture.format===Gr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)ht(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,ce,Re,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,ue,ce,Re,0);else if(E.depthTexture.format===Gr)ht(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,ce,Re,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,ue,ce,Re,0);else throw new Error("Unknown depthTexture format")}function vt(w){const E=s.get(w),K=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const _e=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=_e}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let _e=0;_e<6;_e++)dt(E.__webglFramebuffer[_e],w,_e);else{const _e=w.texture.mipmaps;_e&&_e.length>0?dt(E.__webglFramebuffer[0],w,0):dt(E.__webglFramebuffer,w,0)}else if(K){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=r.createRenderbuffer(),Xt(E.__webglDepthbuffer[_e],w,!1);else{const Ee=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,Re)}}else{const _e=w.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Xt(E.__webglDepthbuffer,w,!1);else{const Ee=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,Re)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(w,E,K){const _e=s.get(w);E!==void 0&&Qe(_e.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&vt(w)}function ct(w){const E=w.texture,K=s.get(w),_e=s.get(E);w.addEventListener("dispose",T);const Ee=w.textures,Re=w.isWebGLCubeRenderTarget===!0,Le=Ee.length>1;if(Le||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=E.version,d.memory.textures++),Re){K.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[ce]=[];for(let ue=0;ue<E.mipmaps.length;ue++)K.__webglFramebuffer[ce][ue]=r.createFramebuffer()}else K.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)K.__webglFramebuffer[ce]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ce=0,ue=Ee.length;ce<ue;ce++){const Oe=s.get(Ee[ce]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),d.memory.textures++)}if(w.samples>0&&ht(w)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ce=0;ce<Ee.length;ce++){const ue=Ee[ce];K.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ce]);const Oe=c.convert(ue.format,ue.colorSpace),Pe=c.convert(ue.type),Ne=U(ue.internalFormat,Oe,Pe,ue.normalized,ue.colorSpace,w.isXRRenderTarget===!0),we=en(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,Ne,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,K.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(K.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Re){i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),De(r.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)Qe(K.__webglFramebuffer[ce][ue],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else Qe(K.__webglFramebuffer[ce],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);S(E)&&R(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ce=0,ue=Ee.length;ce<ue;ce++){const Oe=Ee[ce],Pe=s.get(Oe);let Ne=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ne=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Pe.__webglTexture),De(Ne,Oe),Qe(K.__webglFramebuffer,w,Oe,r.COLOR_ATTACHMENT0+ce,Ne,0),S(Oe)&&R(Ne)}i.unbindTexture()}else{let ce=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ce,_e.__webglTexture),De(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)Qe(K.__webglFramebuffer[ue],w,E,r.COLOR_ATTACHMENT0,ce,ue);else Qe(K.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,ce,0);S(E)&&R(ce),i.unbindTexture()}w.depthBuffer&&vt(w)}function rn(w){const E=w.textures;for(let K=0,_e=E.length;K<_e;K++){const Ee=E[K];if(S(Ee)){const Re=N(w),Le=s.get(Ee).__webglTexture;i.bindTexture(Re,Le),R(Re),i.unbindTexture()}}}const qt=[],En=[];function W(w){if(w.samples>0){if(ht(w)===!1){const E=w.textures,K=w.width,_e=w.height;let Ee=r.COLOR_BUFFER_BIT;const Re=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(w),ce=E.length>1;if(ce)for(let Oe=0;Oe<E.length;Oe++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const ue=w.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,K,_e,0,0,K,_e,Ee,r.NEAREST),m===!0&&(qt.length=0,En.length=0,qt.push(r.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(qt.push(Re),En.push(Re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,En)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Oe=0;Oe<E.length;Oe++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const E=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function en(w){return Math.min(l.maxSamples,w.samples)}function ht(w){const E=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(w){const E=d.render.frame;x.get(w)!==E&&(x.set(w,E),w.update())}function Ce(w,E){const K=w.colorSpace,_e=w.format,Ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||K!==lu&&K!==cr&&(Mt.getTransfer(K)===zt?(_e!==Li||Ee!==yi)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",K)),E}function Kt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=O,this.resetTextureUnits=fe,this.getTextureUnits=pe,this.setTextureUnits=q,this.setTexture2D=oe,this.setTexture2DArray=ge,this.setTexture3D=Me,this.setTextureCube=P,this.rebindTextures=Nt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=rn,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function _C(r,e){function i(s,l=cr){let c;const d=Mt.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===Ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Ax)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ex)return r.BYTE;if(s===bx)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===Tp)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===Cx)return r.ALPHA;if(s===Rx)return r.RGB;if(s===Li)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===Gr)return r.DEPTH_STENCIL;if(s===wx)return r.RED;if(s===Rp)return r.RED_INTEGER;if(s===Wr)return r.RG;if(s===wp)return r.RG_INTEGER;if(s===Dp)return r.RGBA_INTEGER;if(s===Yc||s===Zc||s===Kc||s===Qc)if(d===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ih||s===zh||s===Fh||s===Bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ih)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===su||s===Wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Hh||s===Gh)return d===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Vh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===kh)return c.COMPRESSED_R11_EAC;if(s===Xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===su)return c.COMPRESSED_RG11_EAC;if(s===Wh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===jh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===rp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===jh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$h)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ep)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tp)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===np)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ip)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ap)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rp)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sp||s===op||s===lp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===sp)return d===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===op)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cp||s===up||s===ou||s===fp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===cp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ou)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const vC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Hx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Oi({vertexShader:vC,fragmentShader:xC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ca(new yu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yC extends qr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,_=null,g=null,M=null,b=null;const D=typeof XRWebGLBinding<"u",y=new SC,S={},R=i.getContextAttributes();let N=null,U=null;const G=[],L=[],I=new kt;let T=null;const z=new Si;z.viewport=new cn;const Z=new Si;Z.viewport=new cn;const V=[z,Z],J=new N3;let fe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=G[se];return Se===void 0&&(Se=new Zd,G[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=G[se];return Se===void 0&&(Se=new Zd,G[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=G[se];return Se===void 0&&(Se=new Zd,G[se]=Se),Se.getHandSpace()};function q(se){const Se=L.indexOf(se.inputSource);if(Se===-1)return;const be=G[Se];be!==void 0&&(be.update(se.inputSource,se.frame,p||d),be.dispatchEvent({type:se.type,data:se.inputSource}))}function O(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",F);for(let se=0;se<G.length;se++){const Se=L[se];Se!==null&&(L[se]=null,G[se].disconnect(Se))}fe=null,pe=null,y.reset();for(const se in S)delete S[se];e.setRenderTarget(N),M=null,g=null,_=null,l=null,U=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,s.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&D&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",O),l.addEventListener("inputsourceschange",F),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,$e=null;R.depth&&($e=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=R.stencil?Gr:Aa,He=R.stencil?il:Yi);const Qe={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new qi(g.textureWidth,g.textureHeight,{format:Li,type:yi,depthTexture:new Ws(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new qi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),De.setContext(l),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(se){for(let Se=0;Se<se.removed.length;Se++){const be=se.removed[Se],He=L.indexOf(be);He>=0&&(L[He]=null,G[He].disconnect(be))}for(let Se=0;Se<se.added.length;Se++){const be=se.added[Se];let He=L.indexOf(be);if(He===-1){for(let Qe=0;Qe<G.length;Qe++)if(Qe>=L.length){L.push(be),He=Qe;break}else if(L[Qe]===null){L[Qe]=be,He=Qe;break}if(He===-1)break}const $e=G[He];$e&&$e.connect(be)}}const oe=new ie,ge=new ie;function Me(se,Se,be){oe.setFromMatrixPosition(Se.matrixWorld),ge.setFromMatrixPosition(be.matrixWorld);const He=oe.distanceTo(ge),$e=Se.projectionMatrix.elements,Qe=be.projectionMatrix.elements,Xt=$e[14]/($e[10]-1),dt=$e[14]/($e[10]+1),vt=($e[9]+1)/$e[5],Nt=($e[9]-1)/$e[5],ct=($e[8]-1)/$e[0],rn=(Qe[8]+1)/Qe[0],qt=Xt*ct,En=Xt*rn,W=He/(-ct+rn),en=W*-ct;if(Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(en),se.translateZ(W),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),$e[10]===-1)se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const ht=Xt+W,Bt=dt+W,Ce=qt-en,Kt=En+(He-en),w=vt*dt/Bt*ht,E=Nt*dt/Bt*ht;se.projectionMatrix.makePerspective(Ce,Kt,w,E,ht,Bt),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function P(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Se=se.near,be=se.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(be=y.depthFar)),J.near=Z.near=z.near=Se,J.far=Z.far=z.far=be,(fe!==J.near||pe!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),fe=J.near,pe=J.far),J.layers.mask=se.layers.mask|6,z.layers.mask=J.layers.mask&-5,Z.layers.mask=J.layers.mask&-3;const He=se.parent,$e=J.cameras;P(J,He);for(let Qe=0;Qe<$e.length;Qe++)P($e[Qe],He);$e.length===2?Me(J,z,Z):J.projectionMatrix.copy(z.projectionMatrix),Q(se,J,He)};function Q(se,Se,be){be===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(be.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=hp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(se){return S[se]};let xe=null;function Ae(se,Se){if(x=Se.getViewerPose(p||d),b=Se,x!==null){const be=x.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let He=!1;be.length!==J.cameras.length&&(J.cameras.length=0,He=!0);for(let dt=0;dt<be.length;dt++){const vt=be[dt];let Nt=null;if(M!==null)Nt=M.getViewport(vt);else{const rn=_.getViewSubImage(g,vt);Nt=rn.viewport,dt===0&&(e.setRenderTargetTextures(U,rn.colorTexture,rn.depthStencilTexture),e.setRenderTarget(U))}let ct=V[dt];ct===void 0&&(ct=new Si,ct.layers.enable(dt),ct.viewport=new cn,V[dt]=ct),ct.matrix.fromArray(vt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(vt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),dt===0&&(J.matrix.copy(ct.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),He===!0&&J.cameras.push(ct)}const $e=l.enabledFeatures;if($e&&$e.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){_=s.getBinding();const dt=_.getDepthInformation(be[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,l.renderState)}if($e&&$e.includes("camera-access")&&D){e.state.unbindTexture(),_=s.getBinding();for(let dt=0;dt<be.length;dt++){const vt=be[dt].camera;if(vt){let Nt=S[vt];Nt||(Nt=new Hx,S[vt]=Nt);const ct=_.getCameraImage(vt);Nt.sourceTexture=ct}}}}for(let be=0;be<G.length;be++){const He=L[be],$e=G[be];He!==null&&$e!==void 0&&$e.update(He,Se,p||d)}xe&&xe(se,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),b=null}const De=new Xx;De.setAnimationLoop(Ae),this.setAnimationLoop=function(se){xe=se},this.dispose=function(){}}}const MC=new gn,Qx=new st;Qx.set(-1,0,0,0,1,0,0,0,1);function EC(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Gx(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,R,N,U){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,U)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),D(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,R,N):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),N=R.envMap,U=R.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(MC.makeRotationFromEuler(U)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Qx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,R,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=N*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function D(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function bC(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,N){const U=N.program;s.uniformBlockBinding(R,U)}function p(R,N){let U=l[R.id];U===void 0&&(b(R),U=x(R),l[R.id]=U,R.addEventListener("dispose",y));const G=N.program;s.updateUBOMapping(R,G);const L=e.render.frame;c[R.id]!==L&&(g(R),c[R.id]=L)}function x(R){const N=_();R.__bindingPointIndex=N;const U=r.createBuffer(),G=R.__size,L=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,G,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function _(){for(let R=0;R<h;R++)if(d.indexOf(R)===-1)return d.push(R),R;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const N=l[R.id],U=R.uniforms,G=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let L=0,I=U.length;L<I;L++){const T=Array.isArray(U[L])?U[L]:[U[L]];for(let z=0,Z=T.length;z<Z;z++){const V=T[z];if(M(V,L,z,G)===!0){const J=V.__offset,fe=Array.isArray(V.value)?V.value:[V.value];let pe=0;for(let q=0;q<fe.length;q++){const O=fe[q],F=D(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,J+pe,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):ArrayBuffer.isView(O)?V.__data.set(new O.constructor(O.buffer,O.byteOffset,V.__data.length)):(O.toArray(V.__data,pe),pe+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(R,N,U,G){const L=R.value,I=N+"_"+U;if(G[I]===void 0)return typeof L=="number"||typeof L=="boolean"?G[I]=L:ArrayBuffer.isView(L)?G[I]=L.slice():G[I]=L.clone(),!0;{const T=G[I];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return G[I]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(T.equals(L)===!1)return T.copy(L),!0}}return!1}function b(R){const N=R.uniforms;let U=0;const G=16;for(let I=0,T=N.length;I<T;I++){const z=Array.isArray(N[I])?N[I]:[N[I]];for(let Z=0,V=z.length;Z<V;Z++){const J=z[Z],fe=Array.isArray(J.value)?J.value:[J.value];for(let pe=0,q=fe.length;pe<q;pe++){const O=fe[pe],F=D(O),oe=U%G,ge=oe%F.boundary,Me=oe+ge;U+=ge,Me!==0&&G-Me<F.storage&&(U+=G-Me),J.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=F.storage}}}const L=U%G;return L>0&&(U+=G-L),R.__size=U,R.__cache={},this}function D(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",R),N}function y(R){const N=R.target;N.removeEventListener("dispose",y);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const R in l)r.deleteBuffer(l[R]);d=[],l={},c={}}return{bind:m,update:p,dispose:S}}const TC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function AC(){return Vi===null&&(Vi=new g3(TC,16,16,Wr,Ta),Vi.name="DFG_LUT",Vi.minFilter=In,Vi.magFilter=In,Vi.wrapS=xa,Vi.wrapT=xa,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class CC{constructor(e={}){const{canvas:i=qE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=yi}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const D=M,y=new Set([Dp,wp,Rp]),S=new Set([yi,Yi,nl,il,Ap,Cp]),R=new Uint32Array(4),N=new Int32Array(4),U=new ie;let G=null,L=null;const I=[],T=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let V=!1,J=null;this._outputColorSpace=xi;let fe=0,pe=0,q=null,O=-1,F=null;const oe=new cn,ge=new cn;let Me=null;const P=new Ft(0);let Q=0,xe=i.width,Ae=i.height,De=1,se=null,Se=null;const be=new cn(0,0,xe,Ae),He=new cn(0,0,xe,Ae);let $e=!1;const Qe=new Fx;let Xt=!1,dt=!1;const vt=new gn,Nt=new ie,ct=new cn,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function En(){return q===null?De:1}let W=s;function en(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bp}`),i.addEventListener("webglcontextlost",ye,!1),i.addEventListener("webglcontextrestored",je,!1),i.addEventListener("webglcontextcreationerror",et,!1),W===null){const j="webgl2";if(W=en(j,A),W===null)throw en(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw bt("WebGLRenderer: "+A.message),A}let ht,Bt,Ce,Kt,w,E,K,_e,Ee,Re,Le,ce,ue,Oe,Pe,Ne,we,it,at,pt,k,Te,he;function Fe(){ht=new AT(W),ht.init(),k=new _C(W,ht),Bt=new vT(W,ht,e,k),Ce=new mC(W,ht),Bt.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Kt=new wT(W),w=new tC,E=new gC(W,ht,Ce,w,Bt,k,Kt),K=new TT(Z),_e=new L3(W),Te=new gT(W,_e),Ee=new CT(W,_e,Kt,Te),Re=new NT(W,Ee,_e,Te,Kt),it=new DT(W,Bt,E),Pe=new xT(w),Le=new eC(Z,K,ht,Bt,Te,Pe),ce=new EC(Z,w),ue=new iC,Oe=new cC(ht),we=new mT(Z,K,Ce,Re,b,m),Ne=new pC(Z,Re,Bt),he=new bC(W,Kt,Bt,Ce),at=new _T(W,ht,Kt),pt=new RT(W,ht,Kt),Kt.programs=Le.programs,Z.capabilities=Bt,Z.extensions=ht,Z.properties=w,Z.renderLists=ue,Z.shadowMap=Ne,Z.state=Ce,Z.info=Kt}Fe(),D!==yi&&(z=new LT(D,i.width,i.height,l,c));const Ue=new yC(Z,W);this.xr=Ue,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(A){A!==void 0&&(De=A,this.setSize(xe,Ae,!1))},this.getSize=function(A){return A.set(xe,Ae)},this.setSize=function(A,j,ae=!0){if(Ue.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,Ae=j,i.width=Math.floor(A*De),i.height=Math.floor(j*De),ae===!0&&(i.style.width=A+"px",i.style.height=j+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(xe*De,Ae*De).floor()},this.setDrawingBufferSize=function(A,j,ae){xe=A,Ae=j,De=ae,i.width=Math.floor(A*ae),i.height=Math.floor(j*ae),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(D===yi){bt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){tt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,j,ae,te){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,j,ae,te),Ce.viewport(oe.copy(be).multiplyScalar(De).round())},this.getScissor=function(A){return A.copy(He)},this.setScissor=function(A,j,ae,te){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,j,ae,te),Ce.scissor(ge.copy(He).multiplyScalar(De).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){Ce.setScissorTest($e=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ae=!0){let te=0;if(A){let ne=!1;if(q!==null){const ze=q.texture.format;ne=y.has(ze)}if(ne){const ze=q.texture.type,Ve=S.has(ze),Ie=we.getClearColor(),Xe=we.getClearAlpha(),ke=Ie.r,Ze=Ie.g,ot=Ie.b;Ve?(R[0]=ke,R[1]=Ze,R[2]=ot,R[3]=Xe,W.clearBufferuiv(W.COLOR,0,R)):(N[0]=ke,N[1]=Ze,N[2]=ot,N[3]=Xe,W.clearBufferiv(W.COLOR,0,N))}else te|=W.COLOR_BUFFER_BIT}j&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",ye,!1),i.removeEventListener("webglcontextrestored",je,!1),i.removeEventListener("webglcontextcreationerror",et,!1),we.dispose(),ue.dispose(),Oe.dispose(),w.dispose(),K.dispose(),Re.dispose(),Te.dispose(),he.dispose(),Le.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Ks),Ue.removeEventListener("sessionend",Qs),Nn.stop()};function ye(A){A.preventDefault(),nv("WebGLRenderer: Context Lost."),V=!0}function je(){nv("WebGLRenderer: Context Restored."),V=!1;const A=Kt.autoReset,j=Ne.enabled,ae=Ne.autoUpdate,te=Ne.needsUpdate,ne=Ne.type;Fe(),Kt.autoReset=A,Ne.enabled=j,Ne.autoUpdate=ae,Ne.needsUpdate=te,Ne.type=ne}function et(A){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){const j=A.target;j.removeEventListener("dispose",tn),Rt(j)}function Rt(A){ci(A),w.remove(A)}function ci(A){const j=w.get(A).programs;j!==void 0&&(j.forEach(function(ae){Le.releaseProgram(ae)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ae,te,ne,ze){j===null&&(j=rn);const Ve=ne.isMesh&&ne.matrixWorld.determinant()<0,Ie=Da(A,j,ae,te,ne);Ce.setMaterial(te,Ve);let Xe=ae.index,ke=1;if(te.wireframe===!0){if(Xe=Ee.getWireframeAttribute(ae),Xe===void 0)return;ke=2}const Ze=ae.drawRange,ot=ae.attributes.position;let Ye=Ze.start*ke,Tt=(Ze.start+Ze.count)*ke;ze!==null&&(Ye=Math.max(Ye,ze.start*ke),Tt=Math.min(Tt,(ze.start+ze.count)*ke)),Xe!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,Xe.count)):ot!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,ot.count));const Qt=Tt-Ye;if(Qt<0||Qt===1/0)return;Te.setup(ne,te,Ie,ae,Xe);let Wt,Ut=at;if(Xe!==null&&(Wt=_e.get(Xe),Ut=pt,Ut.setIndex(Wt)),ne.isMesh)te.wireframe===!0?(Ce.setLineWidth(te.wireframeLinewidth*En()),Ut.setMode(W.LINES)):Ut.setMode(W.TRIANGLES);else if(ne.isLine){let Lt=te.linewidth;Lt===void 0&&(Lt=1),Ce.setLineWidth(Lt*En()),ne.isLineSegments?Ut.setMode(W.LINES):ne.isLineLoop?Ut.setMode(W.LINE_LOOP):Ut.setMode(W.LINE_STRIP)}else ne.isPoints?Ut.setMode(W.POINTS):ne.isSprite&&Ut.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Lt=ne._multiDrawStarts,Ge=ne._multiDrawCounts,Un=ne._multiDrawCount,mt=Xe?_e.get(Xe).bytesPerElement:1,_n=w.get(te).currentProgram.getUniforms();for(let Kn=0;Kn<Un;Kn++)_n.setValue(W,"_gl_DrawID",Kn),Ut.render(Lt[Kn]/mt,Ge[Kn])}else if(ne.isInstancedMesh)Ut.renderInstances(Ye,Qt,ne.count);else if(ae.isInstancedBufferGeometry){const Lt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ge=Math.min(ae.instanceCount,Lt);Ut.renderInstances(Ye,Qt,Ge)}else Ut.render(Ye,Qt)};function Zn(A,j,ae){A.transparent===!0&&A.side===va&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Yr(A,j,ae),A.side=dr,A.needsUpdate=!0,Yr(A,j,ae),A.side=va):Yr(A,j,ae)}this.compile=function(A,j,ae=null){ae===null&&(ae=A),L=Oe.get(ae),L.init(j),T.push(L),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),A!==ae&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const ze=ne.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){const Ie=ze[Ve];Zn(Ie,ae,ne),te.add(Ie)}else Zn(ze,ae,ne),te.add(ze)}),L=T.pop(),te},this.compileAsync=function(A,j,ae=null){const te=this.compile(A,j,ae);return new Promise(ne=>{function ze(){if(te.forEach(function(Ve){w.get(Ve).currentProgram.isReady()&&te.delete(Ve)}),te.size===0){ne(A);return}setTimeout(ze,10)}ht.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let hr=null;function Zs(A){hr&&hr(A)}function Ks(){Nn.stop()}function Qs(){Nn.start()}const Nn=new Xx;Nn.setAnimationLoop(Zs),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){hr=A,Ue.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Ue.addEventListener("sessionstart",Ks),Ue.addEventListener("sessionend",Qs),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;J!==null&&J.renderStart(A,j);const ae=Ue.enabled===!0&&Ue.isPresenting===!0,te=z!==null&&(q===null||ae)&&z.begin(Z,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(j),j=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,j,q),L=Oe.get(A,T.length),L.init(j),L.state.textureUnits=E.getTextureUnits(),T.push(L),vt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Qe.setFromProjectionMatrix(vt,Wi,j.reversedDepth),dt=this.localClippingEnabled,Xt=Pe.init(this.clippingPlanes,dt),G=ue.get(A,I.length),G.init(),I.push(G),Ue.enabled===!0&&Ue.isPresenting===!0){const Ve=Z.xr.getDepthSensingMesh();Ve!==null&&sn(Ve,j,-1/0,Z.sortObjects)}sn(A,j,0,Z.sortObjects),G.finish(),Z.sortObjects===!0&&G.sort(se,Se),qt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,qt&&we.addToRenderList(G,A),this.info.render.frame++,Xt===!0&&Pe.beginShadows();const ne=L.state.shadowsArray;if(Ne.render(ne,A,j),Xt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&z.hasRenderPass())===!1){const Ve=G.opaque,Ie=G.transmissive;if(L.setupLights(),j.isArrayCamera){const Xe=j.cameras;if(Ie.length>0)for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const ot=Xe[ke];Zi(Ve,Ie,A,ot)}qt&&we.render(A);for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const ot=Xe[ke];bn(G,A,ot,ot.viewport)}}else Ie.length>0&&Zi(Ve,Ie,A,j),qt&&we.render(A),bn(G,A,j)}q!==null&&pe===0&&(E.updateMultisampleRenderTarget(q),E.updateRenderTargetMipmap(q)),te&&z.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,j),Te.resetDefaultState(),O=-1,F=null,T.pop(),T.length>0?(L=T[T.length-1],E.setTextureUnits(L.state.textureUnits),Xt===!0&&Pe.setGlobalState(Z.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?G=I[I.length-1]:G=null,J!==null&&J.renderEnd()};function sn(A,j,ae,te){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){te&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(vt);const Ve=Re.update(A),Ie=A.material;Ie.visible&&G.push(A,Ve,Ie,ae,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){const Ve=Re.update(A),Ie=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ct.copy(Ve.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(vt)),Array.isArray(Ie)){const Xe=Ve.groups;for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const ot=Xe[ke],Ye=Ie[ot.materialIndex];Ye&&Ye.visible&&G.push(A,Ve,Ye,ae,ct.z,ot)}}else Ie.visible&&G.push(A,Ve,Ie,ae,ct.z,null)}}const ze=A.children;for(let Ve=0,Ie=ze.length;Ve<Ie;Ve++)sn(ze[Ve],j,ae,te)}function bn(A,j,ae,te){const{opaque:ne,transmissive:ze,transparent:Ve}=A;L.setupLightsView(ae),Xt===!0&&Pe.setGlobalState(Z.clippingPlanes,ae),te&&Ce.viewport(oe.copy(te)),ne.length>0&&Ra(ne,j,ae),ze.length>0&&Ra(ze,j,ae),Ve.length>0&&Ra(Ve,j,ae),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Zi(A,j,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const Ye=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new qi(1,1,{generateMipmaps:!0,type:Ye?Ta:yi,minFilter:Hr,samples:Math.max(4,Bt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const ze=L.state.transmissionRenderTarget[te.id],Ve=te.viewport||oe;ze.setSize(Ve.z*Z.transmissionResolutionScale,Ve.w*Z.transmissionResolutionScale);const Ie=Z.getRenderTarget(),Xe=Z.getActiveCubeFace(),ke=Z.getActiveMipmapLevel();Z.setRenderTarget(ze),Z.getClearColor(P),Q=Z.getClearAlpha(),Q<1&&Z.setClearColor(16777215,.5),Z.clear(),qt&&we.render(ae);const Ze=Z.toneMapping;Z.toneMapping=ji;const ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),Xt===!0&&Pe.setGlobalState(Z.clippingPlanes,te),Ra(A,ae,te),E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Tt=0,Qt=j.length;Tt<Qt;Tt++){const Wt=j[Tt],{object:Ut,geometry:Lt,material:Ge,group:Un}=Wt;if(Ge.side===va&&Ut.layers.test(te.layers)){const mt=Ge.side;Ge.side=qn,Ge.needsUpdate=!0,cl(Ut,ae,te,Lt,Ge,Un),Ge.side=mt,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze))}Z.setRenderTarget(Ie,Xe,ke),Z.setClearColor(P,Q),ot!==void 0&&(te.viewport=ot),Z.toneMapping=Ze}function Ra(A,j,ae){const te=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,ze=A.length;ne<ze;ne++){const Ve=A[ne],{object:Ie,geometry:Xe,group:ke}=Ve;let Ze=Ve.material;Ze.allowOverride===!0&&te!==null&&(Ze=te),Ie.layers.test(ae.layers)&&cl(Ie,j,ae,Xe,Ze,ke)}}function cl(A,j,ae,te,ne,ze){A.onBeforeRender(Z,j,ae,te,ne,ze),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(Z,j,ae,te,A,ze),ne.transparent===!0&&ne.side===va&&ne.forceSinglePass===!1?(ne.side=qn,ne.needsUpdate=!0,Z.renderBufferDirect(ae,j,te,ne,A,ze),ne.side=dr,ne.needsUpdate=!0,Z.renderBufferDirect(ae,j,te,ne,A,ze),ne.side=va):Z.renderBufferDirect(ae,j,te,ne,A,ze),A.onAfterRender(Z,j,ae,te,ne,ze)}function Yr(A,j,ae){j.isScene!==!0&&(j=rn);const te=w.get(A),ne=L.state.lights,ze=L.state.shadowsArray,Ve=ne.state.version,Ie=Le.getParameters(A,ne.state,ze,j,ae,L.state.lightProbeGridArray),Xe=Le.getProgramCacheKey(Ie);let ke=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,te.fog=j.fog;const Ze=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=K.get(A.envMap||te.environment,Ze),te.envMapRotation=te.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",tn),ke=new Map,te.programs=ke);let ot=ke.get(Xe);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===Ve)return wa(A,Ie),ot}else Ie.uniforms=Le.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,ae,Ie),A.onBeforeCompile(Ie,Z),ot=Le.acquireProgram(Ie,Xe),ke.set(Xe,ot),te.uniforms=Ie.uniforms;const Ye=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Pe.uniform),wa(A,Ie),te.needsLights=pr(A),te.lightsStateVersion=Ve,te.needsLights&&(Ye.ambientLightColor.value=ne.state.ambient,Ye.lightProbe.value=ne.state.probe,Ye.directionalLights.value=ne.state.directional,Ye.directionalLightShadows.value=ne.state.directionalShadow,Ye.spotLights.value=ne.state.spot,Ye.spotLightShadows.value=ne.state.spotShadow,Ye.rectAreaLights.value=ne.state.rectArea,Ye.ltc_1.value=ne.state.rectAreaLTC1,Ye.ltc_2.value=ne.state.rectAreaLTC2,Ye.pointLights.value=ne.state.point,Ye.pointLightShadows.value=ne.state.pointShadow,Ye.hemisphereLights.value=ne.state.hemi,Ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ne.state.spotLightMatrix,Ye.spotLightMap.value=ne.state.spotLightMap,Ye.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=ot,te.uniformsList=null,ot}function Js(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Jc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function wa(A,j){const ae=w.get(A);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function $s(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;U.setFromMatrixPosition(j.matrixWorld);for(let ae=0,te=A.length;ae<te;ae++){const ne=A[ae];if(ne.texture!==null&&ne.boundingBox.containsPoint(U))return ne}return null}function Da(A,j,ae,te,ne){j.isScene!==!0&&(j=rn),E.resetTextureUnits();const ze=j.fog,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?j.environment:null,Ie=q===null?Z.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Mt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ke=K.get(te.envMap||Ve,Xe),Ze=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ye=!!ae.morphAttributes.position,Tt=!!ae.morphAttributes.normal,Qt=!!ae.morphAttributes.color;let Wt=ji;te.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Wt=Z.toneMapping);const Ut=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Lt=Ut!==void 0?Ut.length:0,Ge=w.get(te),Un=L.state.lights;if(Xt===!0&&(dt===!0||A!==F)){const Dt=A===F&&te.id===O;Pe.setState(te,A,Dt)}let mt=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Un.state.version||Ge.outputColorSpace!==Ie||ne.isBatchedMesh&&Ge.batching===!1||!ne.isBatchedMesh&&Ge.batching===!0||ne.isBatchedMesh&&Ge.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ge.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ge.instancing===!1||!ne.isInstancedMesh&&Ge.instancing===!0||ne.isSkinnedMesh&&Ge.skinning===!1||!ne.isSkinnedMesh&&Ge.skinning===!0||ne.isInstancedMesh&&Ge.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ge.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ge.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ge.instancingMorph===!1&&ne.morphTexture!==null||Ge.envMap!==ke||te.fog===!0&&Ge.fog!==ze||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==ot||Ge.morphTargets!==Ye||Ge.morphNormals!==Tt||Ge.morphColors!==Qt||Ge.toneMapping!==Wt||Ge.morphTargetsCount!==Lt||!!Ge.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ge.__version=te.version);let _n=Ge.currentProgram;mt===!0&&(_n=Yr(te,j,ne),J&&te.isNodeMaterial&&J.onUpdateProgram(te,_n,Ge));let Kn=!1,Ei=!1,Qn=!1;const Ot=_n.getUniforms(),Jt=Ge.uniforms;if(Ce.useProgram(_n.program)&&(Kn=!0,Ei=!0,Qn=!0),te.id!==O&&(O=te.id,Ei=!0),Ge.needsLights){const Dt=$s(L.state.lightProbeGridArray,ne);Ge.lightProbeGrid!==Dt&&(Ge.lightProbeGrid=Dt,Ei=!0)}if(Kn||F!==A){Ce.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(W,"projectionMatrix",A.projectionMatrix),Ot.setValue(W,"viewMatrix",A.matrixWorldInverse);const Ii=Ot.map.cameraPosition;Ii!==void 0&&Ii.setValue(W,Nt.setFromMatrixPosition(A.matrixWorld)),Bt.logarithmicDepthBuffer&&Ot.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ot.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,Ei=!0,Qn=!0)}if(Ge.needsLights&&(Un.state.directionalShadowMap.length>0&&Ot.setValue(W,"directionalShadowMap",Un.state.directionalShadowMap,E),Un.state.spotShadowMap.length>0&&Ot.setValue(W,"spotShadowMap",Un.state.spotShadowMap,E),Un.state.pointShadowMap.length>0&&Ot.setValue(W,"pointShadowMap",Un.state.pointShadowMap,E)),ne.isSkinnedMesh){Ot.setOptional(W,ne,"bindMatrix"),Ot.setOptional(W,ne,"bindMatrixInverse");const Dt=ne.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ot.setValue(W,"boneTexture",Dt.boneTexture,E))}ne.isBatchedMesh&&(Ot.setOptional(W,ne,"batchingTexture"),Ot.setValue(W,"batchingTexture",ne._matricesTexture,E),Ot.setOptional(W,ne,"batchingIdTexture"),Ot.setValue(W,"batchingIdTexture",ne._indirectTexture,E),Ot.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ot.setValue(W,"batchingColorTexture",ne._colorsTexture,E));const bi=ae.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&it.update(ne,ae,_n),(Ei||Ge.receiveShadow!==ne.receiveShadow)&&(Ge.receiveShadow=ne.receiveShadow,Ot.setValue(W,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&j.environment!==null&&(Jt.envMapIntensity.value=j.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=AC()),Ei){if(Ot.setValue(W,"toneMappingExposure",Z.toneMappingExposure),Ge.needsLights&&Na(Jt,Qn),ze&&te.fog===!0&&ce.refreshFogUniforms(Jt,ze),ce.refreshMaterialUniforms(Jt,te,De,Ae,L.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Dt=Ge.lightProbeGrid;Jt.probesSH.value=Dt.texture,Jt.probesMin.value.copy(Dt.boundingBox.min),Jt.probesMax.value.copy(Dt.boundingBox.max),Jt.probesResolution.value.copy(Dt.resolution)}Jc.upload(W,Js(Ge),Jt,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Jc.upload(W,Js(Ge),Jt,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ot.setValue(W,"center",ne.center),Ot.setValue(W,"modelViewMatrix",ne.modelViewMatrix),Ot.setValue(W,"normalMatrix",ne.normalMatrix),Ot.setValue(W,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Dt=te.uniformsGroups;for(let Ii=0,La=Dt.length;Ii<La;Ii++){const mr=Dt[Ii];he.update(mr,_n),he.bind(mr,_n)}}return _n}function Na(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function pr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,j,ae){const te=w.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=j,w.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ae=w.get(A);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const Ua=W.createFramebuffer();this.setRenderTarget=function(A,j=0,ae=0){q=A,fe=j,pe=ae;let te=null,ne=!1,ze=!1;if(A){const Ie=w.get(A);if(Ie.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(W.FRAMEBUFFER,Ie.__webglFramebuffer),oe.copy(A.viewport),ge.copy(A.scissor),Me=A.scissorTest,Ce.viewport(oe),Ce.scissor(ge),Ce.setScissorTest(Me),O=-1;return}else if(Ie.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ie.__hasExternalTextures)E.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Ie.__boundDepthTexture!==Ze){if(Ze!==null&&w.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ze=!0);const ke=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?te=ke[j][ae]:te=ke[j],ne=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?te=w.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?te=ke[ae]:te=ke,oe.copy(A.viewport),ge.copy(A.scissor),Me=A.scissorTest}else oe.copy(be).multiplyScalar(De).floor(),ge.copy(He).multiplyScalar(De).floor(),Me=$e;if(ae!==0&&(te=Ua),Ce.bindFramebuffer(W.FRAMEBUFFER,te)&&Ce.drawBuffers(A,te),Ce.viewport(oe),Ce.scissor(ge),Ce.setScissorTest(Me),ne){const Ie=w.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,ae)}else if(ze){const Ie=j;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=w.get(A.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,ae,Ie)}}else if(A!==null&&ae!==0){const Ie=w.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ie.__webglTexture,ae)}O=-1},this.readRenderTargetPixels=function(A,j,ae,te,ne,ze,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Ce.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const ke=A.textures[Ie],Ze=ke.format,ot=ke.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ie),!Bt.textureFormatReadable(Ze)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(ot)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-te&&ae>=0&&ae<=A.height-ne&&W.readPixels(j,ae,te,ne,k.convert(Ze),k.convert(ot),ze)}finally{const ke=q!==null?w.get(q).__webglFramebuffer:null;Ce.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,ae,te,ne,ze,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(j>=0&&j<=A.width-te&&ae>=0&&ae<=A.height-ne){Ce.bindFramebuffer(W.FRAMEBUFFER,Xe);const ke=A.textures[Ie],Ze=ke.format,ot=ke.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ie),!Bt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.bufferData(W.PIXEL_PACK_BUFFER,ze.byteLength,W.STREAM_READ),W.readPixels(j,ae,te,ne,k.convert(Ze),k.convert(ot),0);const Tt=q!==null?w.get(q).__webglFramebuffer:null;Ce.bindFramebuffer(W.FRAMEBUFFER,Tt);const Qt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await YE(W,Qt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ze),W.deleteBuffer(Ye),W.deleteSync(Qt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ae=0){const te=Math.pow(2,-ae),ne=Math.floor(A.image.width*te),ze=Math.floor(A.image.height*te),Ve=j!==null?j.x:0,Ie=j!==null?j.y:0;E.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ae,0,0,Ve,Ie,ne,ze),Ce.unbindTexture()};const un=W.createFramebuffer(),ul=W.createFramebuffer();this.copyTextureToTexture=function(A,j,ae=null,te=null,ne=0,ze=0){let Ve,Ie,Xe,ke,Ze,ot,Ye,Tt,Qt;const Wt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(ae!==null)Ve=ae.max.x-ae.min.x,Ie=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,ke=ae.min.x,Ze=ae.min.y,ot=ae.isBox3?ae.min.z:0;else{const Jt=Math.pow(2,-ne);Ve=Math.floor(Wt.width*Jt),Ie=Math.floor(Wt.height*Jt),A.isDataArrayTexture?Xe=Wt.depth:A.isData3DTexture?Xe=Math.floor(Wt.depth*Jt):Xe=1,ke=0,Ze=0,ot=0}te!==null?(Ye=te.x,Tt=te.y,Qt=te.z):(Ye=0,Tt=0,Qt=0);const Ut=k.convert(j.format),Lt=k.convert(j.type);let Ge;j.isData3DTexture?(E.setTexture3D(j,0),Ge=W.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),Ge=W.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),Ge=W.TEXTURE_2D),Ce.activeTexture(W.TEXTURE0),Ce.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),Ce.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Ce.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment);const Un=Ce.getParameter(W.UNPACK_ROW_LENGTH),mt=Ce.getParameter(W.UNPACK_IMAGE_HEIGHT),_n=Ce.getParameter(W.UNPACK_SKIP_PIXELS),Kn=Ce.getParameter(W.UNPACK_SKIP_ROWS),Ei=Ce.getParameter(W.UNPACK_SKIP_IMAGES);Ce.pixelStorei(W.UNPACK_ROW_LENGTH,Wt.width),Ce.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Wt.height),Ce.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),Ce.pixelStorei(W.UNPACK_SKIP_ROWS,Ze),Ce.pixelStorei(W.UNPACK_SKIP_IMAGES,ot);const Qn=A.isDataArrayTexture||A.isData3DTexture,Ot=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const Jt=w.get(A),bi=w.get(j),Dt=w.get(Jt.__renderTarget),Ii=w.get(bi.__renderTarget);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let La=0;La<Xe;La++)Qn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,w.get(A).__webglTexture,ne,ot+La),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,w.get(j).__webglTexture,ze,Qt+La)),W.blitFramebuffer(ke,Ze,Ve,Ie,Ye,Tt,Ve,Ie,W.DEPTH_BUFFER_BIT,W.NEAREST);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||w.has(A)){const Jt=w.get(A),bi=w.get(j);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,un),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,ul);for(let Dt=0;Dt<Xe;Dt++)Qn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Jt.__webglTexture,ne,ot+Dt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Jt.__webglTexture,ne),Ot?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,bi.__webglTexture,ze,Qt+Dt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,bi.__webglTexture,ze),ne!==0?W.blitFramebuffer(ke,Ze,Ve,Ie,Ye,Tt,Ve,Ie,W.COLOR_BUFFER_BIT,W.NEAREST):Ot?W.copyTexSubImage3D(Ge,ze,Ye,Tt,Qt+Dt,ke,Ze,Ve,Ie):W.copyTexSubImage2D(Ge,ze,Ye,Tt,ke,Ze,Ve,Ie);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ot?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Ge,ze,Ye,Tt,Qt,Ve,Ie,Xe,Ut,Lt,Wt.data):j.isCompressedArrayTexture?W.compressedTexSubImage3D(Ge,ze,Ye,Tt,Qt,Ve,Ie,Xe,Ut,Wt.data):W.texSubImage3D(Ge,ze,Ye,Tt,Qt,Ve,Ie,Xe,Ut,Lt,Wt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ze,Ye,Tt,Ve,Ie,Ut,Lt,Wt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ze,Ye,Tt,Wt.width,Wt.height,Ut,Wt.data):W.texSubImage2D(W.TEXTURE_2D,ze,Ye,Tt,Ve,Ie,Ut,Lt,Wt);Ce.pixelStorei(W.UNPACK_ROW_LENGTH,Un),Ce.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt),Ce.pixelStorei(W.UNPACK_SKIP_PIXELS,_n),Ce.pixelStorei(W.UNPACK_SKIP_ROWS,Kn),Ce.pixelStorei(W.UNPACK_SKIP_IMAGES,Ei),ze===0&&j.generateMipmaps&&W.generateMipmap(Ge),Ce.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){fe=0,pe=0,q=null,Ce.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Mt._getUnpackColorSpace()}}function qv(r){return r==="dark"?{color:new ie(.216,.216,.216),alpha:1}:{color:new ie(.39,.455,.545),alpha:.25}}const RC=`
  attribute float scale;
  uniform float uTime;
  void main() {
    vec3 p = position;
    float s = scale;
    p.y += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
    p.x += (sin(p.y + uTime) * 0.5);
    s += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = s * 19.0 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`,wC=`
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha);
  }
`,DC=()=>{const r=pu(s=>s.theme.mode),e=nt.useRef(null),i=nt.useRef(null);return nt.useEffect(()=>{if(!e.current)return;const s=e.current,l=window.innerWidth,c=window.innerHeight,d=new Si(75,l/c,.01,1e3);d.position.set(0,6,5);const h=new u3,m=new CC({canvas:s,antialias:!0,alpha:!0});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setSize(l,c),m.setClearColor(0,0);const p=.3,x=200,_=x*x,g=new Float32Array(_*3),M=new Float32Array(_);let b=0,D=0;for(let I=0;I<x;I++)for(let T=0;T<x;T++)g[b]=I*p-x*p/2,g[b+1]=0,g[b+2]=T*p-x*p/2,M[D]=1,b+=3,D++;const y=new Pi;y.setAttribute("position",new Mi(g,3)),y.setAttribute("scale",new Mi(M,1));const{color:S,alpha:R}=qv(r),N=new Oi({transparent:!0,vertexShader:RC,fragmentShader:wC,uniforms:{uTime:{value:0},uColor:{value:S},uAlpha:{value:R}}});h.add(new y3(y,N)),d.lookAt(h.position);const U=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",U);let G=0;const L=()=>{G=requestAnimationFrame(L),N.uniforms.uTime.value+=.008,m.render(h,d)};return L(),i.current={renderer:m,scene:h,camera:d,material:N,raf:G},()=>{cancelAnimationFrame(G),window.removeEventListener("resize",U),y.dispose(),N.dispose(),m.dispose(),i.current=null}},[]),nt.useEffect(()=>{const s=i.current;if(!s)return;const{color:l,alpha:c}=qv(r);s.material.uniforms.uColor.value=l,s.material.uniforms.uAlpha.value=c},[r]),H.jsx("canvas",{ref:e,className:"particle-wave-canvas"})},NC={light:{bg:"#fafafa",accent:"#2563EB"},dark:{bg:"#0a0a0a",accent:"#E09B5F"}},UC=`M473.000000,1025.000000 
	C315.333344,1025.000000 158.166672,1025.000000 1.000000,1025.000000 
	C1.000000,683.666687 1.000000,342.333344 1.000000,1.000000 
	C342.333344,1.000000 683.666687,1.000000 1025.000000,1.000000 
	C1025.000000,342.333344 1025.000000,683.666687 1025.000000,1025.000000 
	C841.166687,1025.000000 657.333313,1025.000000 473.000000,1025.000000 
M852.436829,565.029724 
	C838.731995,547.843201 825.058655,530.631348 811.289612,513.496460 
	C809.133301,510.812927 808.489868,508.721161 811.007446,505.705170 
	C842.172119,468.371460 873.234863,430.952545 904.298645,393.534607 
	C909.231812,387.592377 914.040894,381.547119 919.536072,374.774628 
	C916.970703,374.482056 915.548340,374.177368 914.126160,374.178833 
	C889.465027,374.204285 864.802734,374.167786 840.144592,374.468262 
	C837.531677,374.500092 834.141235,375.862213 832.474854,377.787323 
	C822.123596,389.745331 812.094910,401.985779 802.084717,414.234985 
	C781.851013,438.994202 761.710205,463.829346 741.482483,488.593445 
	C740.096680,490.290100 738.307251,491.656982 736.705566,493.177246 
	C736.081848,493.000488 735.458191,492.823730 734.834534,492.646973 
	C734.199036,456.016296 734.817871,419.357422 734.569275,381.257874 
	C732.856567,383.247894 732.178406,383.929108 731.621643,384.698151 
	C711.318359,412.745636 690.976562,440.765656 670.827881,468.923859 
	C669.226257,471.162140 668.214966,474.363678 668.206665,477.121399 
	C668.035095,533.773376 668.093872,590.426025 667.943176,647.078064 
	C667.931030,651.656738 669.559509,652.586548 673.822571,652.511780 
	C691.978699,652.192932 710.143433,652.056335 728.299866,652.277100 
	C733.047241,652.334778 734.639404,651.296570 734.620422,646.303467 
	C734.477295,608.646301 734.612122,570.987915 734.685608,533.330017 
	C734.688599,531.776917 734.945496,530.224304 735.194275,527.437012 
	C737.187317,529.121582 738.390198,529.880493 739.258667,530.919067 
	C742.247498,534.493164 745.112915,538.170349 748.036987,541.798828 
	C776.778381,577.464600 805.548645,613.107117 834.213135,648.834534 
	C836.433716,651.602295 838.784912,652.565430 842.293701,652.533020 
	C867.284180,652.301941 892.276550,652.289978 917.268311,652.179749 
	C918.463196,652.174500 919.656921,651.900940 921.974304,651.612488 
	C898.484131,622.388550 875.665466,594.000061 852.436829,565.029724 
M535.422119,498.205322 
	C526.258362,498.257629 517.086060,498.113281 507.937408,498.511871 
	C505.863708,498.602264 503.100830,500.058563 501.955719,501.760925 
	C474.725098,542.244995 447.833313,582.958008 420.442108,623.332336 
	C415.381622,630.791382 411.836548,637.912720 412.686371,647.175842 
	C413.057587,651.221802 413.737823,652.559204 418.032257,652.494751 
	C436.521362,652.217224 455.018005,652.191650 473.507965,652.409607 
	C477.825806,652.460510 479.297119,651.443665 479.266174,646.928406 
	C479.083252,620.268799 479.262970,593.606812 479.109558,566.946777 
	C479.086853,562.996521 480.239594,561.694214 484.194580,561.783386 
	C493.187012,561.986145 502.188782,561.788818 511.186646,561.737305 
	C524.180969,561.663025 537.280090,562.611938 550.151306,561.311401 
	C606.219910,555.645996 642.451599,504.917358 635.405151,453.701111 
	C629.524536,410.958160 591.615845,375.102570 548.283630,374.408875 
	C504.470642,373.707458 460.638153,374.246643 416.814453,374.150635 
	C413.529572,374.143433 412.491547,375.212036 412.581879,378.506378 
	C412.814636,386.996979 412.713440,395.497192 412.713867,403.993591 
	C412.717133,468.808258 412.709991,533.622925 412.735809,598.437561 
	C412.736237,599.488831 413.110687,600.540039 413.491943,602.544922 
	C414.993378,600.730225 416.027039,599.702942 416.804352,598.508850 
	C436.702667,567.942749 456.638397,537.400391 476.339813,506.707672 
	C478.095367,503.972656 479.047394,500.252014 479.097168,496.969757 
	C479.375244,478.644135 479.273529,460.312531 479.265442,441.982971 
	C479.264282,439.291473 479.378296,436.861603 483.019623,436.874023 
	C502.179016,436.939362 521.367615,436.353485 540.488892,437.234283 
	C556.303833,437.962830 568.286926,451.031372 569.323242,466.036530 
	C570.443542,482.257904 556.550354,499.257324 535.422119,498.205322 
M220.648636,482.803345 
	C219.462326,480.052917 218.245285,477.315277 217.094391,474.550110 
	C203.795166,442.597168 190.480148,410.650757 177.254242,378.667480 
	C175.938400,375.485504 174.155441,374.141327 170.528458,374.169952 
	C149.536346,374.335388 128.542130,374.229034 107.548683,374.251953 
	C106.175407,374.253448 104.802467,374.565247 103.094101,374.773621 
	C103.573097,376.372803 103.769768,377.331757 104.139008,378.218872 
	C124.608322,427.396088 145.042511,476.587982 165.589691,525.732666 
	C182.666565,566.577087 199.918732,607.348328 216.950928,648.211304 
	C218.282288,651.405457 220.013550,652.359680 223.298203,652.329468 
	C237.790192,652.195923 252.286377,652.166321 266.776337,652.395508 
	C270.555603,652.455322 272.468018,651.181519 273.886719,647.726440 
	C279.068726,635.106445 284.675415,622.659241 289.745270,609.996033 
	C290.665405,607.697815 290.622864,604.346436 289.653381,602.063660 
	C280.935730,581.536499 271.937195,561.128235 262.958435,540.712646 
	C260.845947,535.909241 258.496368,531.210083 255.852295,525.607971 
	C252.860397,531.939880 250.325211,537.305237 247.790024,542.670593 
	C247.112686,542.628418 246.435333,542.586243 245.757996,542.544128 
	C237.471619,522.870667 229.185226,503.197205 220.648636,482.803345 
M341.500305,374.335907 
	C337.669647,374.341370 333.775635,374.795013 330.020844,374.263977 
	C320.686951,372.943787 315.922546,376.046143 312.224670,385.546051 
	C297.622955,423.058319 281.748016,460.074158 266.524689,497.347412 
	C265.697296,499.373260 265.765869,502.386383 266.652313,504.394928 
	C275.788818,525.097107 285.166473,545.693054 294.510345,566.303406 
	C296.719910,571.177246 299.054382,575.994507 301.983307,582.224426 
	C331.294342,512.390381 360.007965,443.979675 389.239166,374.335846 
	C372.633972,374.335846 357.567139,374.335846 341.500305,374.335907 
M708.301147,374.224579 
	C696.476990,374.245331 684.649963,374.420105 672.830139,374.202393 
	C668.751953,374.127258 667.835571,375.531189 667.875427,379.422485 
	C668.071655,398.569672 667.944214,417.720093 667.975403,436.869293 
	C667.977356,438.057129 668.358704,439.244385 668.563538,440.431946 
	C668.992859,440.556732 669.422119,440.681549 669.851440,440.806335 
	C685.239197,419.042542 700.626953,397.278748 716.014709,375.514954 
	C715.695923,375.084930 715.377136,374.654938 715.058411,374.224915 
	C713.115173,374.224915 711.171997,374.224915 708.301147,374.224579 
z`,LC=`M852.641785,565.320679 
	C875.665466,594.000061 898.484131,622.388550 921.974304,651.612488 
	C919.656921,651.900940 918.463196,652.174500 917.268311,652.179749 
	C892.276550,652.289978 867.284180,652.301941 842.293701,652.533020 
	C838.784912,652.565430 836.433716,651.602295 834.213135,648.834534 
	C805.548645,613.107117 776.778381,577.464600 748.036987,541.798828 
	C745.112915,538.170349 742.247498,534.493164 739.258667,530.919067 
	C738.390198,529.880493 737.187317,529.121582 735.194275,527.437012 
	C734.945496,530.224304 734.688599,531.776917 734.685608,533.330017 
	C734.612122,570.987915 734.477295,608.646301 734.620422,646.303467 
	C734.639404,651.296570 733.047241,652.334778 728.299866,652.277100 
	C710.143433,652.056335 691.978699,652.192932 673.822571,652.511780 
	C669.559509,652.586548 667.931030,651.656738 667.943176,647.078064 
	C668.093872,590.426025 668.035095,533.773376 668.206665,477.121399 
	C668.214966,474.363678 669.226257,471.162140 670.827881,468.923859 
	C690.976562,440.765656 711.318359,412.745636 731.621643,384.698151 
	C732.178406,383.929108 732.856567,383.247894 734.569275,381.257874 
	C734.817871,419.357422 734.199036,456.016296 734.834534,492.646973 
	C735.458191,492.823730 736.081848,493.000488 736.705566,493.177246 
	C738.307251,491.656982 740.096680,490.290100 741.482483,488.593445 
	C761.710205,463.829346 781.851013,438.994202 802.084717,414.234985 
	C812.094910,401.985779 822.123596,389.745331 832.474854,377.787323 
	C834.141235,375.862213 837.531677,374.500092 840.144592,374.468262 
	C864.802734,374.167786 889.465027,374.204285 914.126160,374.178833 
	C915.548340,374.177368 916.970703,374.482056 919.536072,374.774628 
	C914.040894,381.547119 909.231812,387.592377 904.298645,393.534607 
	C873.234863,430.952545 842.172119,468.371460 811.007446,505.705170 
	C808.489868,508.721161 809.133301,510.812927 811.289612,513.496460 
	C825.058655,530.631348 838.731995,547.843201 852.641785,565.320679 
z`,OC=`M535.907593,498.202637 
	C556.550354,499.257324 570.443542,482.257904 569.323242,466.036530 
	C568.286926,451.031372 556.303833,437.962830 540.488892,437.234283 
	C521.367615,436.353485 502.179016,436.939362 483.019623,436.874023 
	C479.378296,436.861603 479.264282,439.291473 479.265442,441.982971 
	C479.273529,460.312531 479.375244,478.644135 479.097168,496.969757 
	C479.047394,500.252014 478.095367,503.972656 476.339813,506.707672 
	C456.638397,537.400391 436.702667,567.942749 416.804352,598.508850 
	C416.027039,599.702942 414.993378,600.730225 413.491943,602.544922 
	C413.110687,600.540039 412.736237,599.488831 412.735809,598.437561 
	C412.709991,533.622925 412.717133,468.808258 412.713867,403.993591 
	C412.713440,395.497192 412.814636,386.996979 412.581879,378.506378 
	C412.491547,375.212036 413.529572,374.143433 416.814453,374.150635 
	C460.638153,374.246643 504.470642,373.707458 548.283630,374.408875 
	C591.615845,375.102570 629.524536,410.958160 635.405151,453.701111 
	C642.451599,504.917358 606.219910,555.645996 550.151306,561.311401 
	C537.280090,562.611938 524.180969,561.663025 511.186646,561.737305 
	C502.188782,561.788818 493.187012,561.986145 484.194580,561.783386 
	C480.239594,561.694214 479.086853,562.996521 479.109558,566.946777 
	C479.262970,593.606812 479.083252,620.268799 479.266174,646.928406 
	C479.297119,651.443665 477.825806,652.460510 473.507965,652.409607 
	C455.018005,652.191650 436.521362,652.217224 418.032257,652.494751 
	C413.737823,652.559204 413.057587,651.221802 412.686371,647.175842 
	C411.836548,637.912720 415.381622,630.791382 420.442108,623.332336 
	C447.833313,582.958008 474.725098,542.244995 501.955719,501.760925 
	C503.100830,500.058563 505.863708,498.602264 507.937408,498.511871 
	C517.086060,498.113281 526.258362,498.257629 535.907593,498.202637 
z`,PC=`M220.773743,483.163544 
	C229.185226,503.197205 237.471619,522.870667 245.757996,542.544128 
	C246.435333,542.586243 247.112686,542.628418 247.790024,542.670593 
	C250.325211,537.305237 252.860397,531.939880 255.852295,525.607971 
	C258.496368,531.210083 260.845947,535.909241 262.958435,540.712646 
	C271.937195,561.128235 280.935730,581.536499 289.653381,602.063660 
	C290.622864,604.346436 290.665405,607.697815 289.745270,609.996033 
	C284.675415,622.659241 279.068726,635.106445 273.886719,647.726440 
	C272.468018,651.181519 270.555603,652.455322 266.776337,652.395508 
	C252.286377,652.166321 237.790192,652.195923 223.298203,652.329468 
	C220.013550,652.359680 218.282288,651.405457 216.950928,648.211304 
	C199.918732,607.348328 182.666565,566.577087 165.589691,525.732666 
	C145.042511,476.587982 124.608322,427.396088 104.139008,378.218872 
	C103.769768,377.331757 103.573097,376.372803 103.094101,374.773621 
	C104.802467,374.565247 106.175407,374.253448 107.548683,374.251953 
	C128.542130,374.229034 149.536346,374.335388 170.528458,374.169952 
	C174.155441,374.141327 175.938400,375.485504 177.254242,378.667480 
	C190.480148,410.650757 203.795166,442.597168 217.094391,474.550110 
	C218.245285,477.315277 219.462326,480.052917 220.773743,483.163544 
z`,IC=`M342.000305,374.335876 
	C357.567139,374.335846 372.633972,374.335846 389.239166,374.335846 
	C360.007965,443.979675 331.294342,512.390381 301.983307,582.224426 
	C299.054382,575.994507 296.719910,571.177246 294.510345,566.303406 
	C285.166473,545.693054 275.788818,525.097107 266.652313,504.394928 
	C265.765869,502.386383 265.697296,499.373260 266.524689,497.347412 
	C281.748016,460.074158 297.622955,423.058319 312.224670,385.546051 
	C315.922546,376.046143 320.686951,372.943787 330.020844,374.263977 
	C333.775635,374.795013 337.669647,374.341370 342.000305,374.335876 
z`,zC=`M708.765015,374.224731 
	C711.171997,374.224915 713.115173,374.224915 715.058411,374.224915 
	C715.377136,374.654938 715.695923,375.084930 716.014709,375.514954 
	C700.626953,397.278748 685.239197,419.042542 669.851440,440.806335 
	C669.422119,440.681549 668.992859,440.556732 668.563538,440.431946 
	C668.358704,439.244385 667.977356,438.057129 667.975403,436.869293 
	C667.944214,417.720093 668.071655,398.569672 667.875427,379.422485 
	C667.835571,375.531189 668.751953,374.127258 672.830139,374.202393 
	C684.649963,374.420105 696.476990,374.245331 708.765015,374.224731 
z`;function FC(r,e){const i=[LC,OC,PC,IC,zC].map(l=>`<path fill="${e}" opacity="1" stroke="none" d="${l}"/>`).join(""),s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path fill="${r}" opacity="1" stroke="none" d="${UC}"/>
    ${i}
  </svg>`;return`data:image/svg+xml,${encodeURIComponent(s)}`}function BC(){const r=pu(e=>e.theme.mode);nt.useEffect(()=>{const e=document.querySelector("link[rel~='icon']");if(!e)return;const{bg:i,accent:s}=NC[r];e.href=FC(i,s)},[r])}const HC=()=>{const r=pu(i=>i.theme.mode),e=Kv();return BC(),nt.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)");e(B_(i.matches?"dark":"light"));const s=l=>{e(B_(l.matches?"dark":"light"))};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[e]),nt.useEffect(()=>{document.body.className=`theme-${r}`},[r]),H.jsxs(H.Fragment,{children:[H.jsx(DC,{}),H.jsxs("div",{className:"app",children:[H.jsx(BM,{}),H.jsx(JM,{}),H.jsx(dE,{}),H.jsx(fE,{}),H.jsx(nE,{}),H.jsx(cE,{}),H.jsx(rE,{}),H.jsx(hE,{})]})]})},GC=()=>H.jsx(A1,{store:_M,children:H.jsx(HC,{})});c1.createRoot(document.getElementById("root")).render(H.jsx(nt.StrictMode,{children:H.jsx(GC,{})}));
