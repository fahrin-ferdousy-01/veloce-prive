var hm=Object.defineProperty;var um=(s,e,t)=>e in s?hm(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var we=(s,e,t)=>um(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="170",fm=0,su=1,dm=2,fd=1,pm=2,Ii=3,Gi=0,vn=1,Sn=2,zi=0,mr=1,Oo=2,ru=3,au=4,mm=5,Is=100,gm=101,_m=102,bm=103,vm=104,xm=200,ym=201,Mm=202,Sm=203,sc=204,rc=205,wm=206,Tm=207,Em=208,Am=209,Rm=210,Cm=211,Pm=212,Lm=213,Dm=214,ac=0,oc=1,lc=2,Mr=3,cc=4,hc=5,uc=6,fc=7,dd=0,Im=1,Nm=2,us=0,Um=1,Om=2,Fm=3,km=4,Bm=5,pd=6,zm=7,ou="attached",Hm="detached",md=300,Sr=301,wr=302,dc=303,pc=304,$o=306,Vi=1e3,ki=1001,Fo=1002,xn=1003,gd=1004,sa=1005,_n=1006,To=1007,Kn=1008,Wi=1009,_d=1010,bd=1011,Sa=1012,gh=1013,Hs=1014,ai=1015,Hn=1016,_h=1017,bh=1018,Tr=1020,vd=35902,xd=1021,yd=1022,Tn=1023,Md=1024,Sd=1025,gr=1026,Er=1027,vh=1028,xh=1029,wd=1030,yh=1031,Mh=1033,Eo=33776,Ao=33777,Ro=33778,Co=33779,mc=35840,gc=35841,_c=35842,bc=35843,vc=36196,xc=37492,yc=37496,Mc=37808,Sc=37809,wc=37810,Tc=37811,Ec=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Dc=37818,Ic=37819,Nc=37820,Uc=37821,Po=36492,Oc=36494,Fc=36495,Td=36283,kc=36284,Bc=36285,zc=36286,wa=2300,Ta=2301,rl=2302,lu=2400,cu=2401,hu=2402,Gm=2500,Vm=0,Ed=1,Hc=2,Wm=3200,Xm=3201,Ad=0,qm=1,Fi="",St="srgb",fn="srgb-linear",Jo="linear",pt="srgb",js=7680,uu=519,jm=512,Ym=513,Km=514,Rd=515,$m=516,Jm=517,Zm=518,Qm=519,Gc=35044,fu="300 es",Bi=2e3,ko=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const fa=Math.PI/180,Ar=180/Math.PI;function Zn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function Sh(s,e){return(s%e+e)%e}function eg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function tg(s,e,t){return s!==e?(t-s)/(e-s):0}function da(s,e,t){return(1-t)*s+t*e}function ng(s,e,t,n){return da(s,e,1-Math.exp(-t*n))}function ig(s,e=1){return e-Math.abs(Sh(s,e*2)-e)}function sg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function rg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ag(s,e){return s+Math.floor(Math.random()*(e-s+1))}function og(s,e){return s+Math.random()*(e-s)}function lg(s){return s*(.5-Math.random())}function cg(s){s!==void 0&&(du=s);let e=du+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hg(s){return s*fa}function ug(s){return s*Ar}function fg(s){return(s&s-1)===0&&s!==0}function dg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mg(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nt={DEG2RAD:fa,RAD2DEG:Ar,generateUUID:Zn,clamp:Kt,euclideanModulo:Sh,mapLinear:eg,inverseLerp:tg,lerp:da,damp:ng,pingpong:ig,smoothstep:sg,smootherstep:rg,randInt:ag,randFloat:og,randFloatSpread:lg,seededRandom:cg,degToRad:hg,radToDeg:ug,isPowerOfTwo:fg,ceilPowerOfTwo:dg,floorPowerOfTwo:pg,setQuaternionFromProperEuler:mg,normalize:ut,denormalize:si};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],v=i[4],x=i[7],S=i[2],R=i[5],E=i[8];return r[0]=a*_+o*b+l*S,r[3]=a*m+o*v+l*R,r[6]=a*p+o*x+l*E,r[1]=c*_+h*b+u*S,r[4]=c*m+h*v+u*R,r[7]=c*p+h*x+u*E,r[2]=f*_+d*b+g*S,r[5]=f*m+d*v+g*R,r[8]=f*p+d*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const al=new Xe;function Cd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gg(){const s=Ea("canvas");return s.style.display="block",s}const pu={};function ra(s){s in pu||(pu[s]=!0,console.warn(s))}function _g(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function bg(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vg(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Jo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const mu=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],_u=[.3127,.329],bu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[fn]:{primaries:mu,whitePoint:_u,transfer:Jo,toXYZ:bu,fromXYZ:vu,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:mu,whitePoint:_u,transfer:pt,toXYZ:bu,fromXYZ:vu,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});let Ys;class xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ys===void 0&&(Ys=Ea("canvas")),Ys.width=e.width,Ys.height=e.height;const n=Ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Hi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class Pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ol(i[a].image)):r.push(ol(i[a]))}else r=ol(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ol(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mg=0;class Vt extends kr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=ki,i=ki,r=_n,a=Kn,o=Tn,l=Wi,c=Vt.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Zn(),this.name="",this.source=new Pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=md;Vt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,S=(p+1)/2,R=(h+f)/4,E=(u+_)/4,C=(g+m)/4;return v>x&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=E/n):x>S?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=C/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sg extends kr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends Sg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ld extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wg extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),R=Math.atan2(S,p*b);m=Math.sin(m*R)/S,o=Math.sin(o*R)/S}const x=o*b;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new I,xu=new bs;class hn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),qa.subVectors(this.max,Wr),Ks.subVectors(e.a,Wr),$s.subVectors(e.b,Wr),Js.subVectors(e.c,Wr),Ki.subVectors($s,Ks),$i.subVectors(Js,$s),ys.subVectors(Ks,Js);let t=[0,-Ki.z,Ki.y,0,-$i.z,$i.y,0,-ys.z,ys.y,Ki.z,0,-Ki.x,$i.z,0,-$i.x,ys.z,0,-ys.x,-Ki.y,Ki.x,0,-$i.y,$i.x,0,-ys.y,ys.x,0];return!cl(t,Ks,$s,Js,qa)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,Ks,$s,Js,qa))?!1:(ja.crossVectors(Ki,$i),t=[ja.x,ja.y,ja.z],cl(t,Ks,$s,Js,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new I,new I,new I,new I,new I,new I,new I,new I],ei=new I,Xa=new hn,Ks=new I,$s=new I,Js=new I,Ki=new I,$i=new I,ys=new I,Wr=new I,qa=new I,ja=new I,Ms=new I;function cl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ms.fromArray(s,r);const o=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tg=new hn,Xr=new I,hl=new I;class vi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(hl)),this.expandByPoint(Xr.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new I,ul=new I,Ya=new I,Ji=new I,fl=new I,Ka=new I,dl=new I;class za{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ul.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(ul);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),o=Ji.dot(this.direction),l=-Ji.dot(Ya),c=Ji.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ul).addScaledVector(Ya,f),d}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,i,r){fl.subVectors(t,e),Ka.subVectors(n,e),dl.crossVectors(fl,Ka);let a=this.direction.dot(dl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);const l=o*this.direction.dot(Ka.crossVectors(Ji,Ka));if(l<0)return null;const c=o*this.direction.dot(fl.cross(Ji));if(c<0||l+c>a)return null;const h=-o*Ji.dot(dl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eg,e,Ag)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Zi.crossVectors(n,Dn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Zi.crossVectors(n,Dn)),Zi.normalize(),$a.crossVectors(Dn,Zi),i[0]=Zi.x,i[4]=$a.x,i[8]=Dn.x,i[1]=Zi.y,i[5]=$a.y,i[9]=Dn.y,i[2]=Zi.z,i[6]=$a.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],v=n[7],x=n[11],S=n[15],R=i[0],E=i[4],C=i[8],y=i[12],M=i[1],w=i[5],D=i[9],L=i[13],N=i[2],O=i[6],k=i[10],V=i[14],G=i[3],te=i[7],he=i[11],ce=i[15];return r[0]=a*R+o*M+l*N+c*G,r[4]=a*E+o*w+l*O+c*te,r[8]=a*C+o*D+l*k+c*he,r[12]=a*y+o*L+l*V+c*ce,r[1]=h*R+u*M+f*N+d*G,r[5]=h*E+u*w+f*O+d*te,r[9]=h*C+u*D+f*k+d*he,r[13]=h*y+u*L+f*V+d*ce,r[2]=g*R+_*M+m*N+p*G,r[6]=g*E+_*w+m*O+p*te,r[10]=g*C+_*D+m*k+p*he,r[14]=g*y+_*L+m*V+p*ce,r[3]=b*R+v*M+x*N+S*G,r[7]=b*E+v*w+x*O+S*te,r[11]=b*C+v*D+x*k+S*he,r[15]=b*y+v*L+x*V+S*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,x=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,S=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,R=t*b+n*v+i*x+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=b*E,e[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*E,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*E,e[4]=v*E,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*E,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*E,e[8]=x*E,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*E,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*E,e[12]=S*E,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*E,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*E,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,b=l*c,v=l*h,x=l*u,S=n.x,R=n.y,E=n.z;return i[0]=(1-(_+p))*S,i[1]=(d+x)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(d-x)*R,i[5]=(1-(f+p))*R,i[6]=(m+b)*R,i[7]=0,i[8]=(g+v)*E,i[9]=(m-b)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zs.set(i[0],i[1],i[2]).length();const a=Zs.set(i[4],i[5],i[6]).length(),o=Zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ti.copy(this);const c=1/r,h=1/a,u=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,t.setFromRotationMatrix(ti),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Bi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===Bi)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ko)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Bi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,d=(n+i)*h;let g,_;if(o===Bi)g=(a+r)*u,_=-2*u;else if(o===ko)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zs=new I,ti=new Pe,Eg=new I(0,0,0),Ag=new I(1,1,1),Zi=new I,$a=new I,Dn=new I,yu=new Pe,Mu=new bs;class _i{constructor(e=0,t=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rg=0;const Su=new I,Qs=new bs,Ai=new Pe,Ja=new I,qr=new I,Cg=new I,Pg=new bs,wu=new I(1,0,0),Tu=new I(0,1,0),Eu=new I(0,0,1),Au={type:"added"},Lg={type:"removed"},er={type:"childadded",child:null},pl={type:"childremoved",child:null};class Pt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new I,t=new _i,n=new bs,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Xe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(qr,Ja,this.up):Ai.lookAt(Ja,qr,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),Qs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lg),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new I,Ri=new I,ml=new I,Ci=new I,tr=new I,nr=new I,Ru=new I,gl=new I,_l=new I,bl=new I,vl=new at,xl=new at,yl=new at;class ri{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ni.subVectors(e,t),i.cross(ni);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ni.subVectors(i,t),Ri.subVectors(n,t),ml.subVectors(e,t);const a=ni.dot(ni),o=ni.dot(Ri),l=ni.dot(ml),c=Ri.dot(Ri),h=Ri.dot(ml),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return vl.setScalar(0),xl.setScalar(0),yl.setScalar(0),vl.fromBufferAttribute(e,t),xl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vl,r.x),a.addScaledVector(xl,r.y),a.addScaledVector(yl,r.z),a}static isFrontFacing(e,t,n,i){return ni.subVectors(n,t),Ri.subVectors(e,t),ni.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ni.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;tr.subVectors(i,n),nr.subVectors(r,n),gl.subVectors(e,n);const l=tr.dot(gl),c=nr.dot(gl);if(l<=0&&c<=0)return t.copy(n);_l.subVectors(e,i);const h=tr.dot(_l),u=nr.dot(_l);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(tr,a);bl.subVectors(e,r);const d=tr.dot(bl),g=nr.dot(bl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(nr,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ru.subVectors(r,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Ru,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Ml(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Sh(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ml(a,r,e+1/3),this.g=Ml(a,r,e),this.b=Ml(a,r,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return it.fromWorkingColorSpace(an.copy(this),e),Math.round(Kt(an.r*255,0,255))*65536+Math.round(Kt(an.g*255,0,255))*256+Math.round(Kt(an.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(an.copy(this),t);const n=an.r,i=an.g,r=an.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=St){it.fromWorkingColorSpace(an.copy(this),e);const t=an.r,n=an.g,i=an.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Za);const n=da(Qi.h,Za.h,t),i=da(Qi.s,Za.s,t),r=da(Qi.l,Za.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ve;ve.NAMES=Dd;let Dg=0;class gi extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Zn(),this.name="",this.blending=mr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==Is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gt extends gi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new I,Qa=new oe;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class Id extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nd extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ig=0;const qn=new Pe,Sl=new Pt,ir=new I,In=new hn,jr=new hn,Yt=new I;class dn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Nd:Id)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(In.min,jr.min),In.expandByPoint(Yt),Yt.addVectors(In.max,jr.max),In.expandByPoint(Yt)):(In.expandByPoint(jr.min),In.expandByPoint(jr.max))}In.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(e,c),Yt.add(ir)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,h=new I,u=new I,f=new oe,d=new oe,g=new oe,_=new I,m=new I;function p(C,y,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(w),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),o[C].add(_),o[y].add(_),o[M].add(_),l[C].add(m),l[y].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,y=b.length;C<y;++C){const M=b[C],w=M.start,D=M.count;for(let L=w,N=w+D;L<N;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new I,x=new I,S=new I,R=new I;function E(C){S.fromBufferAttribute(i,C),R.copy(S);const y=o[C];v.copy(y),v.sub(S.multiplyScalar(S.dot(y))).normalize(),x.crossVectors(R,y);const w=x.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,w)}for(let C=0,y=b.length;C<y;++C){const M=b[C],w=M.start,D=M.count;for(let L=w,N=w+D;L<N;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new $t(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new Pe,Ss=new za,eo=new vi,Pu=new I,to=new I,no=new I,io=new I,wl=new I,so=new I,Lu=new I,ro=new I;class st extends Pt{constructor(e=new dn,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(wl.fromBufferAttribute(u,e),a?so.addScaledVector(wl,h):so.addScaledVector(wl.sub(t),h))}t.add(so)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(eo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(eo,Pu)===null||Ss.origin.distanceToSquared(Pu)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,S=v;x<S;x+=3){const R=o.getX(x),E=o.getX(x+1),C=o.getX(x+2);i=ao(this,p,e,n,c,h,u,R,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);i=ao(this,a,e,n,c,h,u,b,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,S=v;x<S;x+=3){const R=x,E=x+1,C=x+2;i=ao(this,p,e,n,c,h,u,R,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,v=m+1,x=m+2;i=ao(this,a,e,n,c,h,u,b,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ng(s,e,t,n,i,r,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Gi,o),l===null)return null;ro.copy(o),ro.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:s}}function ao(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,to),s.getVertexPosition(l,no),s.getVertexPosition(c,io);const h=Ng(s,e,t,n,to,no,io,Lu);if(h){const u=new I;ri.getBarycoord(Lu,to,no,io,u),i&&(h.uv=ri.getInterpolatedAttribute(i,o,l,c,u,new oe)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,l,c,u,new oe)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};ri.getNormal(to,no,io,f.normal),h.face=f,h.barycoord=u}return h}class vs extends dn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function g(_,m,p,b,v,x,S,R,E,C,y){const M=x/E,w=S/C,D=x/2,L=S/2,N=R/2,O=E+1,k=C+1;let V=0,G=0;const te=new I;for(let he=0;he<k;he++){const ce=he*w-L;for(let Se=0;Se<O;Se++){const Qe=Se*M-D;te[_]=Qe*b,te[m]=ce*v,te[p]=N,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=R>0?1:-1,h.push(te.x,te.y,te.z),u.push(Se/E),u.push(1-he/C),V+=1}}for(let he=0;he<C;he++)for(let ce=0;ce<E;ce++){const Se=f+ce+O*he,Qe=f+ce+O*(he+1),K=f+(ce+1)+O*(he+1),ne=f+(ce+1)+O*he;l.push(Se,Qe,ne),l.push(Qe,K,ne),G+=6}o.addGroup(d,G,y),d+=G,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(s){const e={};for(let t=0;t<s.length;t++){const n=Rr(s[t]);for(const i in n)e[i]=n[i]}return e}function Ug(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ud(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Aa={clone:Rr,merge:mn};var Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends gi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Od extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new I,Du=new oe,Iu=new oe;class ln extends Od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Iu),t.subVectors(Iu,Du)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=-90,rr=1;class kg extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(sr,rr,e,t);i.layers=this.layers,this.add(i);const r=new ln(sr,rr,e,t);r.layers=this.layers,this.add(r);const a=new ln(sr,rr,e,t);a.layers=this.layers,this.add(a);const o=new ln(sr,rr,e,t);o.layers=this.layers,this.add(o);const l=new ln(sr,rr,e,t);l.layers=this.layers,this.add(l);const c=new ln(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fd extends Vt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bg extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vs(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:zi});r.uniforms.tEquirect.value=t;const a=new st(i,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=_n),new kg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Tl=new I,zg=new I,Hg=new Xe;class ss{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Tl.subVectors(n,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hg.getNormalMatrix(e),i=this.coplanarPoint(Tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new vi,oo=new I;class Th{constructor(e=new ss,t=new ss,n=new ss,i=new ss,r=new ss,a=new ss){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,m-d,x-p).normalize(),n[1].setComponents(l+r,f+c,m+d,x+p).normalize(),n[2].setComponents(l+a,f+h,m+g,x+b).normalize(),n[3].setComponents(l-a,f-h,m-g,x-b).normalize(),n[4].setComponents(l-o,f-u,m-_,x-v).normalize(),t===Bi)n[5].setComponents(l+o,f+u,m+_,x+v).normalize();else if(t===ko)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oo.x=i.normal.x>0?e.max.x:e.min.x,oo.y=i.normal.y>0?e.max.y:e.min.y,oo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gg(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class bn extends dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*f-a;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const v=b+c*p,x=b+c*(p+1),S=b+1+c*(p+1),R=b+1+c*p;d.push(v,x,R),d.push(x,S,R)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
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
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f0=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,L0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#endif`,U0=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,H0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`#ifdef USE_MORPHTARGETS
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
#endif`,r_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u_=`#ifdef USE_NORMALMAP
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
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,A_=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
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
#endif`,D_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`#include <common>
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
}`,K_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$_=`#define DISTANCE
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
}`,J_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`uniform float scale;
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 diffuse;
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
}`,sb=`#define LAMBERT
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
}`,rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ab=`#define MATCAP
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
}`,ob=`#define MATCAP
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
}`,lb=`#define NORMAL
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
}`,cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hb=`#define PHONG
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
}`,ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fb=`#define STANDARD
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
}`,db=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,pb=`#define TOON
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
}`,mb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,gb=`uniform float size;
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
}`,_b=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xb=`uniform float rotation;
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
}`,yb=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Vg,alphahash_pars_fragment:Wg,alphamap_fragment:Xg,alphamap_pars_fragment:qg,alphatest_fragment:jg,alphatest_pars_fragment:Yg,aomap_fragment:Kg,aomap_pars_fragment:$g,batching_pars_vertex:Jg,batching_vertex:Zg,begin_vertex:Qg,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:h0,color_vertex:u0,common:f0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:_0,emissivemap_pars_fragment:b0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:y0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:U0,envmap_vertex:T0,fog_vertex:E0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:L0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:I0,lights_pars_begin:N0,lights_toon_fragment:O0,lights_toon_pars_fragment:F0,lights_phong_fragment:k0,lights_phong_pars_fragment:B0,lights_physical_fragment:z0,lights_physical_pars_fragment:H0,lights_fragment_begin:G0,lights_fragment_maps:V0,lights_fragment_end:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Y0,map_fragment:K0,map_pars_fragment:$0,map_particle_fragment:J0,map_particle_pars_fragment:Z0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:e_,morphinstance_vertex:t_,morphcolor_vertex:n_,morphnormal_vertex:i_,morphtarget_pars_vertex:s_,morphtarget_vertex:r_,normal_fragment_begin:a_,normal_fragment_maps:o_,normal_pars_fragment:l_,normal_pars_vertex:c_,normal_vertex:h_,normalmap_pars_fragment:u_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:m_,opaque_fragment:g_,packing:__,premultiplied_alpha_fragment:b_,project_vertex:v_,dithering_fragment:x_,dithering_pars_fragment:y_,roughnessmap_fragment:M_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:w_,shadowmap_pars_vertex:T_,shadowmap_vertex:E_,shadowmask_pars_fragment:A_,skinbase_vertex:R_,skinning_pars_vertex:C_,skinning_vertex:P_,skinnormal_vertex:L_,specularmap_fragment:D_,specularmap_pars_fragment:I_,tonemapping_fragment:N_,tonemapping_pars_fragment:U_,transmission_fragment:O_,transmission_pars_fragment:F_,uv_pars_fragment:k_,uv_pars_vertex:B_,uv_vertex:z_,worldpos_vertex:H_,background_vert:G_,background_frag:V_,backgroundCube_vert:W_,backgroundCube_frag:X_,cube_vert:q_,cube_frag:j_,depth_vert:Y_,depth_frag:K_,distanceRGBA_vert:$_,distanceRGBA_frag:J_,equirect_vert:Z_,equirect_frag:Q_,linedashed_vert:eb,linedashed_frag:tb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:sb,meshlambert_frag:rb,meshmatcap_vert:ab,meshmatcap_frag:ob,meshnormal_vert:lb,meshnormal_frag:cb,meshphong_vert:hb,meshphong_frag:ub,meshphysical_vert:fb,meshphysical_frag:db,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:_b,shadow_vert:bb,shadow_frag:vb,sprite_vert:xb,sprite_frag:yb},me={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},fi={basic:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ve(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:mn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:mn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ve(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:mn([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:mn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:mn([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:mn([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:mn([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:mn([me.lights,me.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};fi.physical={uniforms:mn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const lo={r:0,b:0,g:0},Ts=new _i,Mb=new Pe;function Sb(s,e,t,n,i,r,a){const o=new ve(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1;const x=g(b);x===null?p(o,l):x&&x.isColor&&(p(x,1),v=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===$o)?(h===void 0&&(h=new st(new vs(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Rr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ts.copy(v.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(Ts)),h.material.toneMapped=it.getTransfer(x.colorSpace)!==pt,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new st(new bn(2,2),new Ut({name:"BackgroundMaterial",uniforms:Rr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(lo,Ud(s)),n.buffers.color.setClear(lo.r,lo.g,lo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m}}function wb(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,w,D,L,N){let O=!1;const k=u(L,D,w);r!==k&&(r=k,c(r.object)),O=d(M,L,D,N),O&&g(M,L,D,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,x(M,w,D,L),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,w,D){const L=D.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let O=N[w.id];O===void 0&&(O={},N[w.id]=O);let k=O[L];return k===void 0&&(k=f(l()),O[L]=k),k}function f(M){const w=[],D=[],L=[];for(let N=0;N<t;N++)w[N]=0,D[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:D,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,w,D,L){const N=r.attributes,O=w.attributes;let k=0;const V=D.getAttributes();for(const G in V)if(V[G].location>=0){const he=N[G];let ce=O[G];if(ce===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),he===void 0||he.attribute!==ce||ce&&he.data!==ce.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function g(M,w,D,L){const N={},O=w.attributes;let k=0;const V=D.getAttributes();for(const G in V)if(V[G].location>=0){let he=O[G];he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ce={};ce.attribute=he,he&&he.data&&(ce.data=he.data),N[G]=ce,k++}r.attributes=N,r.attributesNum=k,r.index=L}function _(){const M=r.newAttributes;for(let w=0,D=M.length;w<D;w++)M[w]=0}function m(M){p(M,0)}function p(M,w){const D=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;D[M]=1,L[M]===0&&(s.enableVertexAttribArray(M),L[M]=1),N[M]!==w&&(s.vertexAttribDivisor(M,w),N[M]=w)}function b(){const M=r.newAttributes,w=r.enabledAttributes;for(let D=0,L=w.length;D<L;D++)w[D]!==M[D]&&(s.disableVertexAttribArray(D),w[D]=0)}function v(M,w,D,L,N,O,k){k===!0?s.vertexAttribIPointer(M,w,D,N,O):s.vertexAttribPointer(M,w,D,L,N,O)}function x(M,w,D,L){_();const N=L.attributes,O=D.getAttributes(),k=w.defaultAttributeValues;for(const V in O){const G=O[V];if(G.location>=0){let te=N[V];if(te===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const he=te.normalized,ce=te.itemSize,Se=e.get(te);if(Se===void 0)continue;const Qe=Se.buffer,K=Se.type,ne=Se.bytesPerElement,de=K===s.INT||K===s.UNSIGNED_INT||te.gpuType===gh;if(te.isInterleavedBufferAttribute){const fe=te.data,Le=fe.stride,Fe=te.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,fe.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let ke=0;ke<G.locationSize;ke++)v(G.location+ke,ce/G.locationSize,K,he,Le*ne,(Fe+ce/G.locationSize*ke)*ne,de)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)p(G.location+fe,te.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let fe=0;fe<G.locationSize;fe++)v(G.location+fe,ce/G.locationSize,K,he,ce*ne,ce/G.locationSize*fe*ne,de)}}else if(k!==void 0){const he=k[V];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(G.location,he);break;case 3:s.vertexAttrib3fv(G.location,he);break;case 4:s.vertexAttrib4fv(G.location,he);break;default:s.vertexAttrib1fv(G.location,he)}}}}b()}function S(){C();for(const M in n){const w=n[M];for(const D in w){const L=w[D];for(const N in L)h(L[N].object),delete L[N];delete w[D]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const D in w){const L=w[D];for(const N in L)h(L[N].object),delete L[N];delete w[D]}delete n[M.id]}function E(M){for(const w in n){const D=n[w];if(D[M.id]===void 0)continue;const L=D[M.id];for(const N in L)h(L[N].object),delete L[N];delete D[M.id]}}function C(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Tb(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Eb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Tn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Wi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ai&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:S,maxSamples:R}}function Ab(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ss,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,v=b*4;let x=p.clippingState||null;l.value=x,x=h(g,f,v,d);for(let S=0;S!==v;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Rb(s){let e=new WeakMap;function t(a,o){return o===dc?a.mapping=Sr:o===pc&&(a.mapping=wr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dc||o===pc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bg(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Gs extends Od{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,Nu=[.125,.215,.35,.446,.526,.582],Ns=20,El=new Gs,Uu=new ve;let Al=null,Rl=0,Cl=0,Pl=!1;const Ls=(1+Math.sqrt(5))/2,ar=1/Ls,Ou=[new I(-Ls,ar,0),new I(Ls,ar,0),new I(-ar,0,Ls),new I(ar,0,Ls),new I(0,Ls,-ar),new I(0,Ls,ar),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Al,Rl,Cl),this._renderer.xr.enabled=Pl,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Hn,format:Tn,colorSpace:fn,depthBuffer:!1},i=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(r)),this._blurMaterial=Pb(r,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,i){const o=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Uu),h.toneMapping=us,h.autoClear=!1;const d=new Gt({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new st(new vs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Uu),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;co(i,b*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Sr||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,El)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ou[(i-r-1)%Ou.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ns-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ns;m>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ns}`);const p=[];let b=0;for(let E=0;E<Ns;++E){const C=E/_,y=Math.exp(-C*C/2);p.push(y),E===0?b+=y:E<m&&(b+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[i],S=3*x*(i>v-hr?i-v+hr:0),R=4*(this._cubeSize-x);co(t,S,R,3*x,2*x),l.setRenderTarget(t),l.render(u,El)}}function Cb(s){const e=[],t=[],n=[];let i=s;const r=s-hr+1+Nu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-hr?l=Nu[a-s+hr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let R=0;R<d;R++){const E=R%3*2/3-1,C=R>2?0:-1,y=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];b.set(y,_*g*R),v.set(f,m*g*R);const M=[R,R,R,R,R,R];x.set(M,p*g*R)}const S=new dn;S.setAttribute("position",new $t(b,_)),S.setAttribute("uv",new $t(v,m)),S.setAttribute("faceIndex",new $t(x,p)),e.push(S),i>hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fu(s,e,t){const n=new nn(s,e,t);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Pb(s,e,t){const n=new Float32Array(Ns),i=new I(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ku(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Bu(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function Lb(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===dc||l===pc,h=l===Sr||l===wr;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Vc(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Vc(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Db(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ra("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ib(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let v=0,x=b.length;v<x;v+=3){const S=b[v+0],R=b[v+1],E=b[v+2];f.push(S,R,R,E,E,S)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,x=b.length/3-1;v<x;v+=3){const S=v+0,R=v+1,E=v+2;f.push(S,R,R,E,E,S)}}else return;const m=new(Cd(f)?Nd:Id)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Nb(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ub(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ob(s,e,t){const n=new WeakMap,i=new at;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let S=o.attributes.position.count*x,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*R*4*u),C=new Ld(E,S,R,u);C.type=ai,C.needsUpdate=!0;const y=x*4;for(let w=0;w<u;w++){const D=p[w],L=b[w],N=v[w],O=S*R*4*w;for(let k=0;k<D.count;k++){const V=k*y;g===!0&&(i.fromBufferAttribute(D,k),E[O+V+0]=i.x,E[O+V+1]=i.y,E[O+V+2]=i.z,E[O+V+3]=0),_===!0&&(i.fromBufferAttribute(L,k),E[O+V+4]=i.x,E[O+V+5]=i.y,E[O+V+6]=i.z,E[O+V+7]=0),m===!0&&(i.fromBufferAttribute(N,k),E[O+V+8]=i.x,E[O+V+9]=i.y,E[O+V+10]=i.z,E[O+V+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new oe(S,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Fb(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Bd extends Vt{constructor(e,t,n,i,r,a,o,l,c,h=gr){if(h!==gr&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=Hs),n===void 0&&h===Er&&(n=Tr),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zd=new Vt,zu=new Bd(1,1),Hd=new Ld,Gd=new wg,Vd=new Fd,Hu=[],Gu=[],Vu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function Br(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Hu[i];if(r===void 0&&(r=new Float32Array(i),Hu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Zo(s,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2fv(this.addr,e),Xt(t,e)}}function zb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;s.uniform3fv(this.addr,e),Xt(t,e)}}function Hb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4fv(this.addr,e),Xt(t,e)}}function Gb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Xu.set(n),s.uniformMatrix2fv(this.addr,!1,Xu),Xt(t,n)}}function Vb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Wu.set(n),s.uniformMatrix3fv(this.addr,!1,Wu),Xt(t,n)}}function Wb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Vu.set(n),s.uniformMatrix4fv(this.addr,!1,Vu),Xt(t,n)}}function Xb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2iv(this.addr,e),Xt(t,e)}}function jb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3iv(this.addr,e),Xt(t,e)}}function Yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4iv(this.addr,e),Xt(t,e)}}function Kb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $b(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2uiv(this.addr,e),Xt(t,e)}}function Jb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3uiv(this.addr,e),Xt(t,e)}}function Zb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4uiv(this.addr,e),Xt(t,e)}}function Qb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zu.compareFunction=Rd,r=zu):r=zd,t.setTexture2D(e||r,i)}function ev(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gd,i)}function tv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vd,i)}function nv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hd,i)}function iv(s){switch(s){case 5126:return kb;case 35664:return Bb;case 35665:return zb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return qb;case 35668:case 35672:return jb;case 35669:case 35673:return Yb;case 5125:return Kb;case 36294:return $b;case 36295:return Jb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function sv(s,e){s.uniform1fv(this.addr,e)}function rv(s,e){const t=Br(e,this.size,2);s.uniform2fv(this.addr,t)}function av(s,e){const t=Br(e,this.size,3);s.uniform3fv(this.addr,t)}function ov(s,e){const t=Br(e,this.size,4);s.uniform4fv(this.addr,t)}function lv(s,e){const t=Br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cv(s,e){const t=Br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hv(s,e){const t=Br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function uv(s,e){s.uniform1iv(this.addr,e)}function fv(s,e){s.uniform2iv(this.addr,e)}function dv(s,e){s.uniform3iv(this.addr,e)}function pv(s,e){s.uniform4iv(this.addr,e)}function mv(s,e){s.uniform1uiv(this.addr,e)}function gv(s,e){s.uniform2uiv(this.addr,e)}function _v(s,e){s.uniform3uiv(this.addr,e)}function bv(s,e){s.uniform4uiv(this.addr,e)}function vv(s,e,t){const n=this.cache,i=e.length,r=Zo(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||zd,r[a])}function xv(s,e,t){const n=this.cache,i=e.length,r=Zo(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Gd,r[a])}function yv(s,e,t){const n=this.cache,i=e.length,r=Zo(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vd,r[a])}function Mv(s,e,t){const n=this.cache,i=e.length,r=Zo(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hd,r[a])}function Sv(s){switch(s){case 5126:return sv;case 35664:return rv;case 35665:return av;case 35666:return ov;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}class wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iv(t.type)}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sv(t.type)}}class Ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function qu(s,e){s.seq.push(e),s.map[e.id]=e}function Av(s,e,t){const n=s.name,i=n.length;for(Ll.lastIndex=0;;){const r=Ll.exec(n),a=Ll.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qu(t,c===void 0?new wv(o,s,e):new Tv(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ev(o),qu(t,u)),t=u}}}class Lo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Av(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ju(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Rv=37297;let Cv=0;function Pv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Yu=new Xe;function Lv(s){it._getMatrix(Yu,it.workingColorSpace,s);const e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Jo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ku(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Pv(s.getShaderSource(e),a)}else return i}function Dv(s,e){const t=Lv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Iv(s,e){let t;switch(e){case Um:t="Linear";break;case Om:t="Reinhard";break;case Fm:t="Cineon";break;case km:t="ACESFilmic";break;case pd:t="AgX";break;case zm:t="Neutral";break;case Bm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ho=new I;function Nv(){it.getLuminanceCoefficients(ho);const s=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function Ov(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function aa(s){return s!==""}function $u(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(s){return s.replace(kv,zv)}const Bv=new Map;function zv(s,e){let t=je[e];if(t===void 0){const n=Bv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}const Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(s){return s.replace(Hv,Gv)}function Gv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Wv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Sr:case wr:e="ENVMAP_TYPE_CUBE";break;case $o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function qv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case Im:e="ENVMAP_BLENDING_MIX";break;case Nm:e="ENVMAP_BLENDING_ADD";break}return e}function jv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vv(t),c=Wv(t),h=Xv(t),u=qv(t),f=jv(t),d=Uv(t),g=Ov(r),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?je.tonemapping_pars_fragment:"",t.toneMapping!==us?Iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=Wc(a),a=$u(a,t),a=Ju(a,t),o=Wc(o),o=$u(o,t),o=Ju(o,t),a=Zu(a),o=Zu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=b+m+a,x=b+p+o,S=ju(i,i.VERTEX_SHADER,v),R=ju(i,i.FRAGMENT_SHADER,x);i.attachShader(_,S),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(w){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(R).trim();let O=!0,k=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,R);else{const V=Ku(i,S,"vertex"),G=Ku(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+D+`
`+V+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||N==="")&&(k=!1);k&&(w.diagnostics={runnable:O,programLog:D,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(S),i.deleteShader(R),C=new Lo(i,_),y=Fv(i,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Rv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=R,this}let Kv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jv(e),t.set(e,n)),n}}class Jv{constructor(e){this.id=Kv++,this.code=e,this.usedTimes=0}}function Zv(s,e,t,n,i,r,a){const o=new wh,l=new $v,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,w,D,L){const N=D.fog,O=L.geometry,k=y.isMeshStandardMaterial?D.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),G=V&&V.mapping===$o?V.image.height:null,te=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const he=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=he!==void 0?he.length:0;let Se=0;O.morphAttributes.position!==void 0&&(Se=1),O.morphAttributes.normal!==void 0&&(Se=2),O.morphAttributes.color!==void 0&&(Se=3);let Qe,K,ne,de;if(te){const U=fi[te];Qe=U.vertexShader,K=U.fragmentShader}else Qe=y.vertexShader,K=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const fe=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,ke=L.isBatchedMesh===!0,Be=!!y.map,Ke=!!y.matcap,Tt=!!V,H=!!y.aoMap,yn=!!y.lightMap,et=!!y.bumpMap,Ye=!!y.normalMap,Ue=!!y.displacementMap,mt=!!y.emissiveMap,Ne=!!y.metalnessMap,P=!!y.roughnessMap,T=y.anisotropy>0,W=y.clearcoat>0,Z=y.dispersion>0,ie=y.iridescence>0,J=y.sheen>0,Te=y.transmission>0,ge=T&&!!y.anisotropyMap,ue=W&&!!y.clearcoatMap,tt=W&&!!y.clearcoatNormalMap,re=W&&!!y.clearcoatRoughnessMap,be=ie&&!!y.iridescenceMap,Ie=ie&&!!y.iridescenceThicknessMap,Oe=J&&!!y.sheenColorMap,Me=J&&!!y.sheenRoughnessMap,Je=!!y.specularMap,ze=!!y.specularColorMap,ht=!!y.specularIntensityMap,F=Te&&!!y.transmissionMap,pe=Te&&!!y.thicknessMap,Y=!!y.gradientMap,Q=!!y.alphaMap,xe=y.alphaTest>0,_e=!!y.alphaHash,He=!!y.extensions;let gt=us;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(gt=s.toneMapping);const qt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Qe,fragmentShader:K,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ke,batchingColor:ke&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:fn,alphaToCoverage:!!y.alphaToCoverage,map:Be,matcap:Ke,envMap:Tt,envMapMode:Tt&&V.mapping,envMapCubeUVHeight:G,aoMap:H,lightMap:yn,bumpMap:et,normalMap:Ye,displacementMap:f&&Ue,emissiveMap:mt,normalMapObjectSpace:Ye&&y.normalMapType===qm,normalMapTangentSpace:Ye&&y.normalMapType===Ad,metalnessMap:Ne,roughnessMap:P,anisotropy:T,anisotropyMap:ge,clearcoat:W,clearcoatMap:ue,clearcoatNormalMap:tt,clearcoatRoughnessMap:re,dispersion:Z,iridescence:ie,iridescenceMap:be,iridescenceThicknessMap:Ie,sheen:J,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:Je,specularColorMap:ze,specularIntensityMap:ht,transmission:Te,transmissionMap:F,thicknessMap:pe,gradientMap:Y,opaque:y.transparent===!1&&y.blending===mr&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:xe,alphaHash:_e,combine:y.combine,mapUv:Be&&_(y.map.channel),aoMapUv:H&&_(y.aoMap.channel),lightMapUv:yn&&_(y.lightMap.channel),bumpMapUv:et&&_(y.bumpMap.channel),normalMapUv:Ye&&_(y.normalMap.channel),displacementMapUv:Ue&&_(y.displacementMap.channel),emissiveMapUv:mt&&_(y.emissiveMap.channel),metalnessMapUv:Ne&&_(y.metalnessMap.channel),roughnessMapUv:P&&_(y.roughnessMap.channel),anisotropyMapUv:ge&&_(y.anisotropyMap.channel),clearcoatMapUv:ue&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(y.sheenRoughnessMap.channel),specularMapUv:Je&&_(y.specularMap.channel),specularColorMapUv:ze&&_(y.specularColorMap.channel),specularIntensityMapUv:ht&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:pe&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ye||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Be||Q),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:gt,decodeVideoTexture:Be&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===pt,decodeVideoTextureEmissive:mt&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sn,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:He&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&y.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)M.push(w),M.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(b(M,y),v(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const M=g[y.type];let w;if(M){const D=fi[M];w=Aa.clone(D.uniforms)}else w=y.uniforms;return w}function S(y,M){let w;for(let D=0,L=h.length;D<L;D++){const N=h[D];if(N.cacheKey===M){w=N,++w.usedTimes;break}}return w===void 0&&(w=new Yv(s,M,y,r),h.push(w)),w}function R(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:C}}function Qv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ex(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ef(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||ex),n.length>1&&n.sort(f||ef),i.length>1&&i.sort(f||ef)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function tx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new tf,s.set(n,[a])):i>=r.length?(a=new tf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function nx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ve};break;case"SpotLight":t={position:new I,direction:new I,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function ix(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let sx=0;function rx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ax(s){const e=new nx,t=ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Pe,a=new Pe;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,v=0,x=0,S=0,R=0,E=0;c.sort(rx);for(let y=0,M=c.length;y<M;y++){const w=c[y],D=w.color,L=w.intensity,N=w.distance,O=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=D.r*L,u+=D.g*L,f+=D.b*L;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],L);E++}else if(w.isDirectionalLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const V=w.shadow,G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=w.shadow.matrix,b++}n.directional[d]=k,d++}else if(w.isSpotLight){const k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(D).multiplyScalar(L),k.distance=N,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[_]=k;const V=w.shadow;if(w.map&&(n.spotLightMap[S]=w.map,S++,V.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[_]=V.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=O,x++}_++}else if(w.isRectAreaLight){const k=e.get(w);k.color.copy(D).multiplyScalar(L),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=k,m++}else if(w.isPointLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const V=w.shadow,G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=w.shadow.matrix,v++}n.point[g]=k,g++}else if(w.isHemisphereLight){const k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(L),k.groundColor.copy(w.groundColor).multiplyScalar(L),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==S||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=S,C.numLightProbes=E,n.version=sx++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function nf(s){const e=new ax(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ox(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new nf(s),e.set(i,[o])):r>=a.length?(o=new nf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class lx extends gi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cx extends gi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fx(s,e,t){let n=new Th;const i=new oe,r=new oe,a=new at,o=new lx({depthPacking:Xm}),l=new cx,c={},h=t.maxTextureSize,u={[Gi]:vn,[vn]:Gi,[Sn]:Sn},f=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let p=this.type;this.render=function(R,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),D=s.state;D.setBlending(zi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=p!==Ii&&this.type===Ii,N=p===Ii&&this.type!==Ii;for(let O=0,k=R.length;O<k;O++){const V=R[O],G=V.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const te=G.getFrameExtents();if(i.multiply(te),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,G.mapSize.y=r.y)),G.map===null||L===!0||N===!0){const ce=this.type!==Ii?{minFilter:xn,magFilter:xn}:{};G.map!==null&&G.map.dispose(),G.map=new nn(i.x,i.y,ce),G.map.texture.name=V.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const he=G.getViewportCount();for(let ce=0;ce<he;ce++){const Se=G.getViewport(ce);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),D.viewport(a),G.updateMatrices(V,ce),n=G.getFrustum(),x(E,C,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===Ii&&b(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,w)};function b(R,E){const C=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new nn(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(E,null,C,d,_,null)}function v(R,E,C,y){let M=null;const w=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=M.uuid,L=E.uuid;let N=c[D];N===void 0&&(N={},c[D]=N);let O=N[L];O===void 0&&(O=M.clone(),N[L]=O,E.addEventListener("dispose",S)),M=O}if(M.visible=E.visible,M.wireframe=E.wireframe,y===Ii?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=C}return M}function x(R,E,C,y,M){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Ii)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const L=e.update(R),N=R.material;if(Array.isArray(N)){const O=L.groups;for(let k=0,V=O.length;k<V;k++){const G=O[k],te=N[G.materialIndex];if(te&&te.visible){const he=v(R,te,y,M);R.onBeforeShadow(s,R,E,C,L,he,G),s.renderBufferDirect(C,null,L,he,R,G),R.onAfterShadow(s,R,E,C,L,he,G)}}}else if(N.visible){const O=v(R,N,y,M);R.onBeforeShadow(s,R,E,C,L,O,null),s.renderBufferDirect(C,null,L,O,R,null),R.onAfterShadow(s,R,E,C,L,O,null)}}const D=R.children;for(let L=0,N=D.length;L<N;L++)x(D[L],E,C,y,M)}function S(R){R.target.removeEventListener("dispose",S);for(const C in c){const y=c[C],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const dx={[ac]:oc,[lc]:uc,[cc]:fc,[Mr]:hc,[oc]:ac,[uc]:lc,[fc]:cc,[hc]:Mr};function px(s,e){function t(){let F=!1;const pe=new at;let Y=null;const Q=new at(0,0,0,0);return{setMask:function(xe){Y!==xe&&!F&&(s.colorMask(xe,xe,xe,xe),Y=xe)},setLocked:function(xe){F=xe},setClear:function(xe,_e,He,gt,qt){qt===!0&&(xe*=gt,_e*=gt,He*=gt),pe.set(xe,_e,He,gt),Q.equals(pe)===!1&&(s.clearColor(xe,_e,He,gt),Q.copy(pe))},reset:function(){F=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,Y=null,Q=null,xe=null;return{setReversed:function(_e){if(pe!==_e){const He=e.get("EXT_clip_control");pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const gt=xe;xe=null,this.setClear(gt)}pe=_e},getReversed:function(){return pe},setTest:function(_e){_e?fe(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(_e){Y!==_e&&!F&&(s.depthMask(_e),Y=_e)},setFunc:function(_e){if(pe&&(_e=dx[_e]),Q!==_e){switch(_e){case ac:s.depthFunc(s.NEVER);break;case oc:s.depthFunc(s.ALWAYS);break;case lc:s.depthFunc(s.LESS);break;case Mr:s.depthFunc(s.LEQUAL);break;case cc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=_e}},setLocked:function(_e){F=_e},setClear:function(_e){xe!==_e&&(pe&&(_e=1-_e),s.clearDepth(_e),xe=_e)},reset:function(){F=!1,Y=null,Q=null,xe=null,pe=!1}}}function i(){let F=!1,pe=null,Y=null,Q=null,xe=null,_e=null,He=null,gt=null,qt=null;return{setTest:function(U){F||(U?fe(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(U){pe!==U&&!F&&(s.stencilMask(U),pe=U)},setFunc:function(U,j,ee){(Y!==U||Q!==j||xe!==ee)&&(s.stencilFunc(U,j,ee),Y=U,Q=j,xe=ee)},setOp:function(U,j,ee){(_e!==U||He!==j||gt!==ee)&&(s.stencilOp(U,j,ee),_e=U,He=j,gt=ee)},setLocked:function(U){F=U},setClear:function(U){qt!==U&&(s.clearStencil(U),qt=U)},reset:function(){F=!1,pe=null,Y=null,Q=null,xe=null,_e=null,He=null,gt=null,qt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,v=null,x=null,S=null,R=null,E=new ve(0,0,0),C=0,y=!1,M=null,w=null,D=null,L=null,N=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=V>=2);let te=null,he={};const ce=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Qe=new at().fromArray(ce),K=new at().fromArray(Se);function ne(F,pe,Y,Q){const xe=new Uint8Array(4),_e=s.createTexture();s.bindTexture(F,_e),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Y;He++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(pe+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return _e}const de={};de[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(s.DEPTH_TEST),a.setFunc(Mr),et(!1),Ye(su),fe(s.CULL_FACE),H(zi);function fe(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Le(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Fe(F,pe){return u[F]!==pe?(s.bindFramebuffer(F,pe),u[F]=pe,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pe),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function ke(F,pe){let Y=d,Q=!1;if(F){Y=f.get(pe),Y===void 0&&(Y=[],f.set(pe,Y));const xe=F.textures;if(Y.length!==xe.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,He=xe.length;_e<He;_e++)Y[_e]=s.COLOR_ATTACHMENT0+_e;Y.length=xe.length,Q=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Y)}function Be(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Ke={[Is]:s.FUNC_ADD,[gm]:s.FUNC_SUBTRACT,[_m]:s.FUNC_REVERSE_SUBTRACT};Ke[bm]=s.MIN,Ke[vm]=s.MAX;const Tt={[xm]:s.ZERO,[ym]:s.ONE,[Mm]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[Rm]:s.SRC_ALPHA_SATURATE,[Em]:s.DST_COLOR,[wm]:s.DST_ALPHA,[Sm]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[Am]:s.ONE_MINUS_DST_COLOR,[Tm]:s.ONE_MINUS_DST_ALPHA,[Cm]:s.CONSTANT_COLOR,[Pm]:s.ONE_MINUS_CONSTANT_COLOR,[Lm]:s.CONSTANT_ALPHA,[Dm]:s.ONE_MINUS_CONSTANT_ALPHA};function H(F,pe,Y,Q,xe,_e,He,gt,qt,U){if(F===zi){_===!0&&(Le(s.BLEND),_=!1);return}if(_===!1&&(fe(s.BLEND),_=!0),F!==mm){if(F!==m||U!==y){if((p!==Is||x!==Is)&&(s.blendEquation(s.FUNC_ADD),p=Is,x=Is),U)switch(F){case mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oo:s.blendFunc(s.ONE,s.ONE);break;case ru:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case au:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ru:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case au:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,v=null,S=null,R=null,E.set(0,0,0),C=0,m=F,y=U}return}xe=xe||pe,_e=_e||Y,He=He||Q,(pe!==p||xe!==x)&&(s.blendEquationSeparate(Ke[pe],Ke[xe]),p=pe,x=xe),(Y!==b||Q!==v||_e!==S||He!==R)&&(s.blendFuncSeparate(Tt[Y],Tt[Q],Tt[_e],Tt[He]),b=Y,v=Q,S=_e,R=He),(gt.equals(E)===!1||qt!==C)&&(s.blendColor(gt.r,gt.g,gt.b,qt),E.copy(gt),C=qt),m=F,y=!1}function yn(F,pe){F.side===Sn?Le(s.CULL_FACE):fe(s.CULL_FACE);let Y=F.side===vn;pe&&(Y=!Y),et(Y),F.blending===mr&&F.transparent===!1?H(zi):H(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Q=F.stencilWrite;o.setTest(Q),Q&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),mt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){M!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),M=F)}function Ye(F){F!==fm?(fe(s.CULL_FACE),F!==w&&(F===su?s.cullFace(s.BACK):F===dm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),w=F}function Ue(F){F!==D&&(k&&s.lineWidth(F),D=F)}function mt(F,pe,Y){F?(fe(s.POLYGON_OFFSET_FILL),(L!==pe||N!==Y)&&(s.polygonOffset(pe,Y),L=pe,N=Y)):Le(s.POLYGON_OFFSET_FILL)}function Ne(F){F?fe(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function P(F){F===void 0&&(F=s.TEXTURE0+O-1),te!==F&&(s.activeTexture(F),te=F)}function T(F,pe,Y){Y===void 0&&(te===null?Y=s.TEXTURE0+O-1:Y=te);let Q=he[Y];Q===void 0&&(Q={type:void 0,texture:void 0},he[Y]=Q),(Q.type!==F||Q.texture!==pe)&&(te!==Y&&(s.activeTexture(Y),te=Y),s.bindTexture(F,pe||de[F]),Q.type=F,Q.texture=pe)}function W(){const F=he[te];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){Qe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Qe.copy(F))}function Me(F){K.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function Je(F,pe){let Y=c.get(pe);Y===void 0&&(Y=new WeakMap,c.set(pe,Y));let Q=Y.get(F);Q===void 0&&(Q=s.getUniformBlockIndex(pe,F.name),Y.set(F,Q))}function ze(F,pe){const Q=c.get(pe).get(F);l.get(pe)!==Q&&(s.uniformBlockBinding(pe,Q,F.__bindingPointIndex),l.set(pe,Q))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,he={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,v=null,x=null,S=null,R=null,E=new ve(0,0,0),C=0,y=!1,M=null,w=null,D=null,L=null,N=null,Qe.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Le,bindFramebuffer:Fe,drawBuffers:ke,useProgram:Be,setBlending:H,setMaterial:yn,setFlipSided:et,setCullFace:Ye,setLineWidth:Ue,setPolygonOffset:mt,setScissorTest:Ne,activeTexture:P,bindTexture:T,unbindTexture:W,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:be,texImage3D:Ie,updateUBOMapping:Je,uniformBlockBinding:ze,texStorage2D:tt,texStorage3D:re,texSubImage2D:J,texSubImage3D:Te,compressedTexSubImage2D:ge,compressedTexSubImage3D:ue,scissor:Oe,viewport:Me,reset:ht}}function sf(s,e,t,n){const i=mx(n);switch(t){case xd:return s*e;case Md:return s*e;case Sd:return s*e*2;case vh:return s*e/i.components*i.byteLength;case xh:return s*e/i.components*i.byteLength;case wd:return s*e*2/i.components*i.byteLength;case yh:return s*e*2/i.components*i.byteLength;case yd:return s*e*3/i.components*i.byteLength;case Tn:return s*e*4/i.components*i.byteLength;case Mh:return s*e*4/i.components*i.byteLength;case Eo:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gc:case bc:return Math.max(s,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(s,8)*Math.max(e,8)/2;case vc:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Po:case Oc:case Fc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Td:case kc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bc:case zc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mx(s){switch(s){case Wi:case _d:return{byteLength:1,components:1};case Sa:case bd:case Hn:return{byteLength:2,components:1};case _h:case bh:return{byteLength:2,components:4};case Hs:case gh:case ai:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function gx(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):Ea("canvas")}function _(P,T,W){let Z=1;const ie=Ne(P);if((ie.width>W||ie.height>W)&&(Z=W/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(Z*ie.width),Te=Math.floor(Z*ie.height);u===void 0&&(u=g(J,Te));const ge=T?g(J,Te):u;return ge.width=J,ge.height=Te,ge.getContext("2d").drawImage(P,0,0,J,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Te+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,T,W,Z,ie=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=T;if(T===s.RED&&(W===s.FLOAT&&(J=s.R32F),W===s.HALF_FLOAT&&(J=s.R16F),W===s.UNSIGNED_BYTE&&(J=s.R8)),T===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.R8UI),W===s.UNSIGNED_SHORT&&(J=s.R16UI),W===s.UNSIGNED_INT&&(J=s.R32UI),W===s.BYTE&&(J=s.R8I),W===s.SHORT&&(J=s.R16I),W===s.INT&&(J=s.R32I)),T===s.RG&&(W===s.FLOAT&&(J=s.RG32F),W===s.HALF_FLOAT&&(J=s.RG16F),W===s.UNSIGNED_BYTE&&(J=s.RG8)),T===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RG8UI),W===s.UNSIGNED_SHORT&&(J=s.RG16UI),W===s.UNSIGNED_INT&&(J=s.RG32UI),W===s.BYTE&&(J=s.RG8I),W===s.SHORT&&(J=s.RG16I),W===s.INT&&(J=s.RG32I)),T===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGB8UI),W===s.UNSIGNED_SHORT&&(J=s.RGB16UI),W===s.UNSIGNED_INT&&(J=s.RGB32UI),W===s.BYTE&&(J=s.RGB8I),W===s.SHORT&&(J=s.RGB16I),W===s.INT&&(J=s.RGB32I)),T===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),W===s.UNSIGNED_INT&&(J=s.RGBA32UI),W===s.BYTE&&(J=s.RGBA8I),W===s.SHORT&&(J=s.RGBA16I),W===s.INT&&(J=s.RGBA32I)),T===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),T===s.RGBA){const Te=ie?Jo:it.getTransfer(Z);W===s.FLOAT&&(J=s.RGBA32F),W===s.HALF_FLOAT&&(J=s.RGBA16F),W===s.UNSIGNED_BYTE&&(J=Te===pt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(P,T){let W;return P?T===null||T===Hs||T===Tr?W=s.DEPTH24_STENCIL8:T===ai?W=s.DEPTH32F_STENCIL8:T===Sa&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hs||T===Tr?W=s.DEPTH_COMPONENT24:T===ai?W=s.DEPTH_COMPONENT32F:T===Sa&&(W=s.DEPTH_COMPONENT16),W}function S(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==xn&&P.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function R(P){const T=P.target;T.removeEventListener("dispose",R),C(T),T.isVideoTexture&&h.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),M(T)}function C(P){const T=n.get(P);if(T.__webglInit===void 0)return;const W=P.source,Z=f.get(W);if(Z){const ie=Z[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&y(P),Object.keys(Z).length===0&&f.delete(W)}n.remove(P)}function y(P){const T=n.get(P);s.deleteTexture(T.__webglTexture);const W=P.source,Z=f.get(W);delete Z[T.__cacheKey],a.memory.textures--}function M(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let ie=0;ie<T.__webglFramebuffer[Z].length;ie++)s.deleteFramebuffer(T.__webglFramebuffer[Z][ie]);else s.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)s.deleteFramebuffer(T.__webglFramebuffer[Z]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=P.textures;for(let Z=0,ie=W.length;Z<ie;Z++){const J=n.get(W[Z]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(W[Z])}n.remove(P)}let w=0;function D(){w=0}function L(){const P=w;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),w+=1,P}function N(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function O(P,T){const W=n.get(P);if(P.isVideoTexture&&Ue(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,P,T);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+T)}function k(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){K(W,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+T)}function V(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){K(W,P,T);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+T)}function G(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){ne(W,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+T)}const te={[Vi]:s.REPEAT,[ki]:s.CLAMP_TO_EDGE,[Fo]:s.MIRRORED_REPEAT},he={[xn]:s.NEAREST,[gd]:s.NEAREST_MIPMAP_NEAREST,[sa]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[To]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},ce={[jm]:s.NEVER,[Qm]:s.ALWAYS,[Ym]:s.LESS,[Rd]:s.LEQUAL,[Km]:s.EQUAL,[Zm]:s.GEQUAL,[$m]:s.GREATER,[Jm]:s.NOTEQUAL};function Se(P,T){if(T.type===ai&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_n||T.magFilter===To||T.magFilter===sa||T.magFilter===Kn||T.minFilter===_n||T.minFilter===To||T.minFilter===sa||T.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,te[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,te[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,te[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,he[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,he[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xn||T.minFilter!==sa&&T.minFilter!==Kn||T.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Qe(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",R));const Z=T.source;let ie=f.get(Z);ie===void 0&&(ie={},f.set(Z,ie));const J=N(T);if(J!==P.__cacheKey){ie[J]===void 0&&(ie[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[J].usedTimes++;const Te=ie[P.__cacheKey];Te!==void 0&&(ie[P.__cacheKey].usedTimes--,Te.usedTimes===0&&y(T)),P.__cacheKey=J,P.__webglTexture=ie[J].texture}return W}function K(P,T,W){let Z=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=s.TEXTURE_3D);const ie=Qe(P,T),J=T.source;t.bindTexture(Z,P.__webglTexture,s.TEXTURE0+W);const Te=n.get(J);if(J.version!==Te.__version||ie===!0){t.activeTexture(s.TEXTURE0+W);const ge=it.getPrimaries(it.workingColorSpace),ue=T.colorSpace===Fi?null:it.getPrimaries(T.colorSpace),tt=T.colorSpace===Fi||ge===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let re=_(T.image,!1,i.maxTextureSize);re=mt(T,re);const be=r.convert(T.format,T.colorSpace),Ie=r.convert(T.type);let Oe=v(T.internalFormat,be,Ie,T.colorSpace,T.isVideoTexture);Se(Z,T);let Me;const Je=T.mipmaps,ze=T.isVideoTexture!==!0,ht=Te.__version===void 0||ie===!0,F=J.dataReady,pe=S(T,re);if(T.isDepthTexture)Oe=x(T.format===Er,T.type),ht&&(ze?t.texStorage2D(s.TEXTURE_2D,1,Oe,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Oe,re.width,re.height,0,be,Ie,null));else if(T.isDataTexture)if(Je.length>0){ze&&ht&&t.texStorage2D(s.TEXTURE_2D,pe,Oe,Je[0].width,Je[0].height);for(let Y=0,Q=Je.length;Y<Q;Y++)Me=Je[Y],ze?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Me.width,Me.height,be,Ie,Me.data):t.texImage2D(s.TEXTURE_2D,Y,Oe,Me.width,Me.height,0,be,Ie,Me.data);T.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(s.TEXTURE_2D,pe,Oe,re.width,re.height),F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,be,Ie,re.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,re.width,re.height,0,be,Ie,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Oe,Je[0].width,Je[0].height,re.depth);for(let Y=0,Q=Je.length;Y<Q;Y++)if(Me=Je[Y],T.format!==Tn)if(be!==null)if(ze){if(F)if(T.layerUpdates.size>0){const xe=sf(Me.width,Me.height,T.format,T.type);for(const _e of T.layerUpdates){const He=Me.data.subarray(_e*xe/Me.data.BYTES_PER_ELEMENT,(_e+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,_e,Me.width,Me.height,1,be,He)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,re.depth,be,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Oe,Me.width,Me.height,re.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,re.depth,be,Ie,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Oe,Me.width,Me.height,re.depth,0,be,Ie,Me.data)}else{ze&&ht&&t.texStorage2D(s.TEXTURE_2D,pe,Oe,Je[0].width,Je[0].height);for(let Y=0,Q=Je.length;Y<Q;Y++)Me=Je[Y],T.format!==Tn?be!==null?ze?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Me.width,Me.height,be,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Me.width,Me.height,be,Ie,Me.data):t.texImage2D(s.TEXTURE_2D,Y,Oe,Me.width,Me.height,0,be,Ie,Me.data)}else if(T.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Oe,re.width,re.height,re.depth),F)if(T.layerUpdates.size>0){const Y=sf(re.width,re.height,T.format,T.type);for(const Q of T.layerUpdates){const xe=re.data.subarray(Q*Y/re.data.BYTES_PER_ELEMENT,(Q+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,be,Ie,xe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,Ie,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,be,Ie,re.data);else if(T.isData3DTexture)ze?(ht&&t.texStorage3D(s.TEXTURE_3D,pe,Oe,re.width,re.height,re.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,Ie,re.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,be,Ie,re.data);else if(T.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(s.TEXTURE_2D,pe,Oe,re.width,re.height);else{let Y=re.width,Q=re.height;for(let xe=0;xe<pe;xe++)t.texImage2D(s.TEXTURE_2D,xe,Oe,Y,Q,0,be,Ie,null),Y>>=1,Q>>=1}}else if(Je.length>0){if(ze&&ht){const Y=Ne(Je[0]);t.texStorage2D(s.TEXTURE_2D,pe,Oe,Y.width,Y.height)}for(let Y=0,Q=Je.length;Y<Q;Y++)Me=Je[Y],ze?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,be,Ie,Me):t.texImage2D(s.TEXTURE_2D,Y,Oe,be,Ie,Me);T.generateMipmaps=!1}else if(ze){if(ht){const Y=Ne(re);t.texStorage2D(s.TEXTURE_2D,pe,Oe,Y.width,Y.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Ie,re)}else t.texImage2D(s.TEXTURE_2D,0,Oe,be,Ie,re);m(T)&&p(Z),Te.__version=J.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ne(P,T,W){if(T.image.length!==6)return;const Z=Qe(P,T),ie=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+W);const J=n.get(ie);if(ie.version!==J.__version||Z===!0){t.activeTexture(s.TEXTURE0+W);const Te=it.getPrimaries(it.workingColorSpace),ge=T.colorSpace===Fi?null:it.getPrimaries(T.colorSpace),ue=T.colorSpace===Fi||Te===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const tt=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,be=[];for(let Q=0;Q<6;Q++)!tt&&!re?be[Q]=_(T.image[Q],!0,i.maxCubemapSize):be[Q]=re?T.image[Q].image:T.image[Q],be[Q]=mt(T,be[Q]);const Ie=be[0],Oe=r.convert(T.format,T.colorSpace),Me=r.convert(T.type),Je=v(T.internalFormat,Oe,Me,T.colorSpace),ze=T.isVideoTexture!==!0,ht=J.__version===void 0||Z===!0,F=ie.dataReady;let pe=S(T,Ie);Se(s.TEXTURE_CUBE_MAP,T);let Y;if(tt){ze&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Je,Ie.width,Ie.height);for(let Q=0;Q<6;Q++){Y=be[Q].mipmaps;for(let xe=0;xe<Y.length;xe++){const _e=Y[xe];T.format!==Tn?Oe!==null?ze?F&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,_e.width,_e.height,Oe,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,Je,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,_e.width,_e.height,Oe,Me,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,Je,_e.width,_e.height,0,Oe,Me,_e.data)}}}else{if(Y=T.mipmaps,ze&&ht){Y.length>0&&pe++;const Q=Ne(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){ze?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be[Q].width,be[Q].height,Oe,Me,be[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,be[Q].width,be[Q].height,0,Oe,Me,be[Q].data);for(let xe=0;xe<Y.length;xe++){const He=Y[xe].image[Q].image;ze?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,He.width,He.height,Oe,Me,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,Je,He.width,He.height,0,Oe,Me,He.data)}}else{ze?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,Me,be[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Oe,Me,be[Q]);for(let xe=0;xe<Y.length;xe++){const _e=Y[xe];ze?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Oe,Me,_e.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,Je,Oe,Me,_e.image[Q])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),J.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function de(P,T,W,Z,ie,J){const Te=r.convert(W.format,W.colorSpace),ge=r.convert(W.type),ue=v(W.internalFormat,Te,ge,W.colorSpace),tt=n.get(T),re=n.get(W);if(re.__renderTarget=T,!tt.__hasExternalTextures){const be=Math.max(1,T.width>>J),Ie=Math.max(1,T.height>>J);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,ue,be,Ie,T.depth,0,Te,ge,null):t.texImage2D(ie,J,ue,be,Ie,0,Te,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ye(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ie,re.__webglTexture,0,et(T)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ie,re.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(P,T,W){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const Z=T.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,J=x(T.stencilBuffer,ie),Te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=et(T);Ye(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,J,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,J,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,J,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,P)}else{const Z=T.textures;for(let ie=0;ie<Z.length;ie++){const J=Z[ie],Te=r.convert(J.format,J.colorSpace),ge=r.convert(J.type),ue=v(J.internalFormat,Te,ge,J.colorSpace),tt=et(T);W&&Ye(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,ue,T.width,T.height):Ye(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const ie=Z.__webglTexture,J=et(T);if(T.depthTexture.format===gr)Ye(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(T.depthTexture.format===Er)Ye(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=Z}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Le(T.__webglFramebuffer,P)}else if(W){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=s.createRenderbuffer(),fe(T.__webglDepthbuffer[Z],P,!1);else{const ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,J)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),fe(T.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(P,T,W){const Z=n.get(P);T!==void 0&&de(Z.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Fe(P)}function Be(P){const T=P.texture,W=n.get(P),Z=n.get(T);P.addEventListener("dispose",E);const ie=P.textures,J=P.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=T.version,a.memory.textures++),J){W.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ge]=[];for(let ue=0;ue<T.mipmaps.length;ue++)W.__webglFramebuffer[ge][ue]=s.createFramebuffer()}else W.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)W.__webglFramebuffer[ge]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Te)for(let ge=0,ue=ie.length;ge<ue;ge++){const tt=n.get(ie[ge]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Ye(P)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){const ue=ie[ge];W.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);const tt=r.convert(ue.format,ue.colorSpace),re=r.convert(ue.type),be=v(ue.internalFormat,tt,re,ue.colorSpace,P.isXRRenderTarget===!0),Ie=et(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,be,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Se(s.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)de(W.__webglFramebuffer[ge][ue],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ue);else de(W.__webglFramebuffer[ge],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ge=0,ue=ie.length;ge<ue;ge++){const tt=ie[ge],re=n.get(tt);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),Se(s.TEXTURE_2D,tt),de(W.__webglFramebuffer,P,tt,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,0),m(tt)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,Z.__webglTexture),Se(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)de(W.__webglFramebuffer[ue],P,T,s.COLOR_ATTACHMENT0,ge,ue);else de(W.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,ge,0);m(T)&&p(ge),t.unbindTexture()}P.depthBuffer&&Fe(P)}function Ke(P){const T=P.textures;for(let W=0,Z=T.length;W<Z;W++){const ie=T[W];if(m(ie)){const J=b(P),Te=n.get(ie).__webglTexture;t.bindTexture(J,Te),p(J),t.unbindTexture()}}}const Tt=[],H=[];function yn(P){if(P.samples>0){if(Ye(P)===!1){const T=P.textures,W=P.width,Z=P.height;let ie=s.COLOR_BUFFER_BIT;const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(P),ge=T.length>1;if(ge)for(let ue=0;ue<T.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ue=0;ue<T.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const tt=n.get(T[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,W,Z,0,0,W,Z,ie,s.NEAREST),l===!0&&(Tt.length=0,H.length=0,Tt.push(s.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Tt.push(J),H.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let ue=0;ue<T.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const tt=n.get(T[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function et(P){return Math.min(i.maxSamples,P.samples)}function Ye(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ue(P){const T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function mt(P,T){const W=P.colorSpace,Z=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==fn&&W!==Fi&&(it.getTransfer(W)===pt?(Z!==Tn||ie!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=ke,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ye}function _x(s,e){function t(n,i=Fi){let r;const a=it.getTransfer(i);if(n===Wi)return s.UNSIGNED_BYTE;if(n===_h)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_d)return s.BYTE;if(n===bd)return s.SHORT;if(n===Sa)return s.UNSIGNED_SHORT;if(n===gh)return s.INT;if(n===Hs)return s.UNSIGNED_INT;if(n===ai)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===xd)return s.ALPHA;if(n===yd)return s.RGB;if(n===Tn)return s.RGBA;if(n===Md)return s.LUMINANCE;if(n===Sd)return s.LUMINANCE_ALPHA;if(n===gr)return s.DEPTH_COMPONENT;if(n===Er)return s.DEPTH_STENCIL;if(n===vh)return s.RED;if(n===xh)return s.RED_INTEGER;if(n===wd)return s.RG;if(n===yh)return s.RG_INTEGER;if(n===Mh)return s.RGBA_INTEGER;if(n===Eo||n===Ao||n===Ro||n===Co)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===_c||n===bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vc||n===xc||n===yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vc||n===xc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Dc||n===Ic||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Oc||n===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Td||n===kc||n===Bc||n===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class bx extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`;class Mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Vt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ut({vertexShader:xx,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends kr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new Mx,m=t.getContextAttributes();let p=null,b=null;const v=[],x=[],S=new oe;let R=null;const E=new ln;E.viewport=new at;const C=new ln;C.viewport=new at;const y=[E,C],M=new bx;let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=v[K];return ne===void 0&&(ne=new Dl,v[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=v[K];return ne===void 0&&(ne=new Dl,v[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=v[K];return ne===void 0&&(ne=new Dl,v[K]=ne),ne.getHandSpace()};function L(K){const ne=x.indexOf(K.inputSource);if(ne===-1)return;const de=v[ne];de!==void 0&&(de.update(K.inputSource,K.frame,c||a),de.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let K=0;K<v.length;K++){const ne=x[K];ne!==null&&(x[K]=null,v[K].disconnect(ne))}w=null,D=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,b=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new nn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Er:gr,de=m.stencil?Tr:Hs);const Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Le),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new nn(f.textureWidth,f.textureHeight,{format:Tn,type:Wi,depthTexture:new Bd(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(K){for(let ne=0;ne<K.removed.length;ne++){const de=K.removed[ne],fe=x.indexOf(de);fe>=0&&(x[fe]=null,v[fe].disconnect(de))}for(let ne=0;ne<K.added.length;ne++){const de=K.added[ne];let fe=x.indexOf(de);if(fe===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=x.length){x.push(de),fe=Fe;break}else if(x[Fe]===null){x[Fe]=de,fe=Fe;break}if(fe===-1)break}const Le=v[fe];Le&&Le.connect(de)}}const k=new I,V=new I;function G(K,ne,de){k.setFromMatrixPosition(ne.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);const fe=k.distanceTo(V),Le=ne.projectionMatrix.elements,Fe=de.projectionMatrix.elements,ke=Le[14]/(Le[10]-1),Be=Le[14]/(Le[10]+1),Ke=(Le[9]+1)/Le[5],Tt=(Le[9]-1)/Le[5],H=(Le[8]-1)/Le[0],yn=(Fe[8]+1)/Fe[0],et=ke*H,Ye=ke*yn,Ue=fe/(-H+yn),mt=Ue*-H;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(mt),K.translateZ(Ue),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ne=ke+Ue,P=Be+Ue,T=et-mt,W=Ye+(fe-mt),Z=Ke*Be/P*Ne,ie=Tt*Be/P*Ne;K.projectionMatrix.makePerspective(T,W,Z,ie,Ne,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ne=K.near,de=K.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(de=_.depthFar)),M.near=C.near=E.near=ne,M.far=C.far=E.far=de,(w!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,D=M.far),E.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;const fe=K.parent,Le=M.cameras;te(M,fe);for(let Fe=0;Fe<Le.length;Fe++)te(Le[Fe],fe);Le.length===2?G(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),he(K,M,fe)};function he(K,ne,de){de===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ar*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ce=null;function Se(K,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const de=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let fe=!1;de.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let Fe=0;Fe<de.length;Fe++){const ke=de[Fe];let Be=null;if(d!==null)Be=d.getViewport(ke);else{const Tt=u.getViewSubImage(f,ke);Be=Tt.viewport,Fe===0&&(e.setRenderTargetTextures(b,Tt.colorTexture,f.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(b))}let Ke=y[Fe];Ke===void 0&&(Ke=new ln,Ke.layers.enable(Fe),Ke.viewport=new at,y[Fe]=Ke),Ke.matrix.fromArray(ke.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ke.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Be.x,Be.y,Be.width,Be.height),Fe===0&&(M.matrix.copy(Ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Ke)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Fe=u.getDepthInformation(de[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,i.renderState)}}for(let de=0;de<v.length;de++){const fe=x[de],Le=v[de];fe!==null&&Le!==void 0&&Le.update(fe,ne,c||a)}ce&&ce(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Qe=new kd;Qe.setAnimationLoop(Se),this.setAnimationLoop=function(K){ce=K},this.dispose=function(){}}}const Es=new _i,wx=new Pe;function Tx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ud(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),v=b.envMap,x=b.envMapRotation;v&&(m.envMap.value=v,Es.copy(x),Es.x*=-1,Es.y*=-1,Es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Es)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ex(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const x=v.program;n.uniformBlockBinding(b,x)}function c(b,v){let x=i[b.id];x===void 0&&(g(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(b,S);const R=e.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){const v=u();b.__bindingPointIndex=v;const x=s.createBuffer(),S=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,S,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],x=b.uniforms,S=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,E=x.length;R<E;R++){const C=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,M=C.length;y<M;y++){const w=C[y];if(d(w,R,y,S)===!0){const D=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let O=0;O<L.length;O++){const k=L[O],V=_(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,D+N,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,N),N+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,v,x,S){const R=b.value,E=v+"_"+x;if(S[E]===void 0)return typeof R=="number"||typeof R=="boolean"?S[E]=R:S[E]=R.clone(),!0;{const C=S[E];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return S[E]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(b){const v=b.uniforms;let x=0;const S=16;for(let E=0,C=v.length;E<C;E++){const y=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,w=y.length;M<w;M++){const D=y[M],L=Array.isArray(D.value)?D.value:[D.value];for(let N=0,O=L.length;N<O;N++){const k=L[N],V=_(k),G=x%S,te=G%V.boundary,he=G+te;x+=te,he!==0&&S-he<V.storage&&(x+=S-he),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=V.storage}}}const R=x%S;return R>0&&(x+=S-R),b.__size=x,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Ax{constructor(e={}){const{canvas:t=gg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=us,this.toneMappingExposure=1;const x=this;let S=!1,R=0,E=0,C=null,y=-1,M=null;const w=new at,D=new at;let L=null;const N=new ve(0);let O=0,k=t.width,V=t.height,G=1,te=null,he=null;const ce=new at(0,0,k,V),Se=new at(0,0,k,V);let Qe=!1;const K=new Th;let ne=!1,de=!1;const fe=new Pe,Le=new Pe,Fe=new I,ke=new at,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Tt(){return C===null?G:1}let H=n;function yn(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mh}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),H===null){const B="webgl2";if(H=yn(B,A),H===null)throw yn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,Ye,Ue,mt,Ne,P,T,W,Z,ie,J,Te,ge,ue,tt,re,be,Ie,Oe,Me,Je,ze,ht,F;function pe(){et=new Db(H),et.init(),ze=new _x(H,et),Ye=new Eb(H,et,e,ze),Ue=new px(H,et),Ye.reverseDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),mt=new Ub(H),Ne=new Qv,P=new gx(H,et,Ue,Ne,Ye,ze,mt),T=new Rb(x),W=new Lb(x),Z=new Gg(H),ht=new wb(H,Z),ie=new Ib(H,Z,mt,ht),J=new Fb(H,ie,Z,mt),Oe=new Ob(H,Ye,P),re=new Ab(Ne),Te=new Zv(x,T,W,et,Ye,ht,re),ge=new Tx(x,Ne),ue=new tx,tt=new ox(et),Ie=new Sb(x,T,W,Ue,J,d,l),be=new fx(x,J,Ye),F=new Ex(H,mt,Ye,Ue),Me=new Tb(H,et,mt),Je=new Nb(H,et,mt),mt.programs=Te.programs,x.capabilities=Ye,x.extensions=et,x.properties=Ne,x.renderLists=ue,x.shadowMap=be,x.state=Ue,x.info=mt}pe();const Y=new Sx(x,H);this.xr=Y,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(k,V,!1))},this.getSize=function(A){return A.set(k,V)},this.setSize=function(A,B,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,V=B,t.width=Math.floor(A*G),t.height=Math.floor(B*G),X===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(k*G,V*G).floor()},this.setDrawingBufferSize=function(A,B,X){k=A,V=B,G=X,t.width=Math.floor(A*X),t.height=Math.floor(B*X),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,B,X,q){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,B,X,q),Ue.viewport(w.copy(ce).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(Se)},this.setScissor=function(A,B,X,q){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,B,X,q),Ue.scissor(D.copy(Se).multiplyScalar(G).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){Ue.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(A=!0,B=!0,X=!0){let q=0;if(A){let z=!1;if(C!==null){const le=C.texture.format;z=le===Mh||le===yh||le===xh}if(z){const le=C.texture.type,ye=le===Wi||le===Hs||le===Sa||le===Tr||le===_h||le===bh,Ae=Ie.getClearColor(),Re=Ie.getClearAlpha(),Ve=Ae.r,qe=Ae.g,Ce=Ae.b;ye?(g[0]=Ve,g[1]=qe,g[2]=Ce,g[3]=Re,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=Ve,_[1]=qe,_[2]=Ce,_[3]=Re,H.clearBufferiv(H.COLOR,0,_))}else q|=H.COLOR_BUFFER_BIT}B&&(q|=H.DEPTH_BUFFER_BIT),X&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ue.dispose(),tt.dispose(),Ne.dispose(),T.dispose(),W.dispose(),J.dispose(),ht.dispose(),F.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ae),Y.removeEventListener("sessionend",se),$.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=mt.autoReset,B=be.enabled,X=be.autoUpdate,q=be.needsUpdate,z=be.type;pe(),mt.autoReset=A,be.enabled=B,be.autoUpdate=X,be.needsUpdate=q,be.type=z}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){const B=A.target;B.removeEventListener("dispose",He),gt(B)}function gt(A){qt(A),Ne.remove(A)}function qt(A){const B=Ne.get(A).programs;B!==void 0&&(B.forEach(function(X){Te.releaseProgram(X)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,X,q,z,le){B===null&&(B=Be);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Ae=Bt(A,B,X,q,z);Ue.setMaterial(q,ye);let Re=X.index,Ve=1;if(q.wireframe===!0){if(Re=ie.getWireframeAttribute(X),Re===void 0)return;Ve=2}const qe=X.drawRange,Ce=X.attributes.position;let ot=qe.start*Ve,vt=(qe.start+qe.count)*Ve;le!==null&&(ot=Math.max(ot,le.start*Ve),vt=Math.min(vt,(le.start+le.count)*Ve)),Re!==null?(ot=Math.max(ot,0),vt=Math.min(vt,Re.count)):Ce!=null&&(ot=Math.max(ot,0),vt=Math.min(vt,Ce.count));const yt=vt-ot;if(yt<0||yt===1/0)return;ht.setup(z,q,Ae,X,Re);let Mn,lt=Me;if(Re!==null&&(Mn=Z.get(Re),lt=Je,lt.setIndex(Mn)),z.isMesh)q.wireframe===!0?(Ue.setLineWidth(q.wireframeLinewidth*Tt()),lt.setMode(H.LINES)):lt.setMode(H.TRIANGLES);else if(z.isLine){let De=q.linewidth;De===void 0&&(De=1),Ue.setLineWidth(De*Tt()),z.isLineSegments?lt.setMode(H.LINES):z.isLineLoop?lt.setMode(H.LINE_LOOP):lt.setMode(H.LINE_STRIP)}else z.isPoints?lt.setMode(H.POINTS):z.isSprite&&lt.setMode(H.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)lt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const De=z._multiDrawStarts,wi=z._multiDrawCounts,ct=z._multiDrawCount,Qn=Re?Z.get(Re).bytesPerElement:1,qs=Ne.get(q).currentProgram.getUniforms();for(let Ln=0;Ln<ct;Ln++)qs.setValue(H,"_gl_DrawID",Ln),lt.render(De[Ln]/Qn,wi[Ln])}else if(z.isInstancedMesh)lt.renderInstances(ot,yt,z.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wi=Math.min(X.instanceCount,De);lt.renderInstances(ot,yt,wi)}else lt.render(ot,yt)};function U(A,B,X){A.transparent===!0&&A.side===Sn&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,jt(A,B,X),A.side=Gi,A.needsUpdate=!0,jt(A,B,X),A.side=Sn):jt(A,B,X)}this.compile=function(A,B,X=null){X===null&&(X=A),p=tt.get(X),p.init(B),v.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==X&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let ye=0;ye<le.length;ye++){const Ae=le[ye];U(Ae,X,z),q.add(Ae)}else U(le,X,z),q.add(le)}),v.pop(),p=null,q},this.compileAsync=function(A,B,X=null){const q=this.compile(A,B,X);return new Promise(z=>{function le(){if(q.forEach(function(ye){Ne.get(ye).currentProgram.isReady()&&q.delete(ye)}),q.size===0){z(A);return}setTimeout(le,10)}et.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let j=null;function ee(A){j&&j(A)}function ae(){$.stop()}function se(){$.start()}const $=new kd;$.setAnimationLoop(ee),typeof self<"u"&&$.setContext(self),this.setAnimationLoop=function(A){j=A,Y.setAnimationLoop(A),A===null?$.stop():$.start()},Y.addEventListener("sessionstart",ae),Y.addEventListener("sessionend",se),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,C),p=tt.get(A,v.length),p.init(B),v.push(p),Le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Le),de=this.localClippingEnabled,ne=re.init(this.clippingPlanes,de),m=ue.get(A,b.length),m.init(),b.push(m),Y.enabled===!0&&Y.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Ee(le,B,-1/0,x.sortObjects)}Ee(A,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,he),Ke=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ke&&Ie.addToRenderList(m,A),this.info.render.frame++,ne===!0&&re.beginShadows();const X=p.state.shadowsArray;be.render(X,A,B),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const le=B.cameras;if(z.length>0)for(let ye=0,Ae=le.length;ye<Ae;ye++){const Re=le[ye];$e(q,z,A,Re)}Ke&&Ie.render(A);for(let ye=0,Ae=le.length;ye<Ae;ye++){const Re=le[ye];Ge(m,A,Re,Re.viewport)}}else z.length>0&&$e(q,z,A,B),Ke&&Ie.render(A),Ge(m,A,B);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,B),ht.resetDefaultState(),y=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],ne===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ee(A,B,X,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){q&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);const ye=J.update(A),Ae=A.material;Ae.visible&&m.push(A,ye,Ae,X,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const ye=J.update(A),Ae=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ke.copy(ye.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(Ae)){const Re=ye.groups;for(let Ve=0,qe=Re.length;Ve<qe;Ve++){const Ce=Re[Ve],ot=Ae[Ce.materialIndex];ot&&ot.visible&&m.push(A,ye,ot,X,ke.z,Ce)}}else Ae.visible&&m.push(A,ye,Ae,X,ke.z,null)}}const le=A.children;for(let ye=0,Ae=le.length;ye<Ae;ye++)Ee(le[ye],B,X,q)}function Ge(A,B,X,q){const z=A.opaque,le=A.transmissive,ye=A.transparent;p.setupLightsView(X),ne===!0&&re.setGlobalState(x.clippingPlanes,X),q&&Ue.viewport(w.copy(q)),z.length>0&&xt(z,B,X),le.length>0&&xt(le,B,X),ye.length>0&&xt(ye,B,X),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function $e(A,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new nn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Hn:Wi,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const le=p.state.transmissionRenderTarget[q.id],ye=q.viewport||w;le.setSize(ye.z,ye.w);const Ae=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(N),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&Ie.render(X);const Re=x.toneMapping;x.toneMapping=us;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ne===!0&&re.setGlobalState(x.clippingPlanes,q),xt(A,X,q),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le),et.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ce=0,ot=B.length;Ce<ot;Ce++){const vt=B[Ce],yt=vt.object,Mn=vt.geometry,lt=vt.material,De=vt.group;if(lt.side===Sn&&yt.layers.test(q.layers)){const wi=lt.side;lt.side=vn,lt.needsUpdate=!0,kt(yt,X,q,Mn,lt,De),lt.side=wi,lt.needsUpdate=!0,qe=!0}}qe===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le))}x.setRenderTarget(Ae),x.setClearColor(N,O),Ve!==void 0&&(q.viewport=Ve),x.toneMapping=Re}function xt(A,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,le=A.length;z<le;z++){const ye=A[z],Ae=ye.object,Re=ye.geometry,Ve=q===null?ye.material:q,qe=ye.group;Ae.layers.test(X.layers)&&kt(Ae,B,X,Re,Ve,qe)}}function kt(A,B,X,q,z,le){A.onBeforeRender(x,B,X,q,z,le),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,B,X,q,A,le),z.transparent===!0&&z.side===Sn&&z.forceSinglePass===!1?(z.side=vn,z.needsUpdate=!0,x.renderBufferDirect(X,B,q,z,A,le),z.side=Gi,z.needsUpdate=!0,x.renderBufferDirect(X,B,q,z,A,le),z.side=Sn):x.renderBufferDirect(X,B,q,z,A,le),A.onAfterRender(x,B,X,q,z,le)}function jt(A,B,X){B.isScene!==!0&&(B=Be);const q=Ne.get(A),z=p.state.lights,le=p.state.shadowsArray,ye=z.state.version,Ae=Te.getParameters(A,z.state,le,B,X),Re=Te.getProgramCacheKey(Ae);let Ve=q.programs;q.environment=A.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(A.isMeshStandardMaterial?W:T).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",He),Ve=new Map,q.programs=Ve);let qe=Ve.get(Re);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===ye)return Mi(A,Ae),qe}else Ae.uniforms=Te.getUniforms(A),A.onBeforeCompile(Ae,x),qe=Te.acquireProgram(Ae,Re),Ve.set(Re,qe),q.uniforms=Ae.uniforms;const Ce=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=re.uniform),Mi(A,Ae),q.needsLights=Si(A),q.lightsStateVersion=ye,q.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMap.value=z.state.directionalShadowMap,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotShadowMap.value=z.state.spotShadowMap,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMap.value=z.state.pointShadowMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function dt(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Lo.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Mi(A,B){const X=Ne.get(A);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Bt(A,B,X,q,z){B.isScene!==!0&&(B=Be),P.resetTextureUnits();const le=B.fog,ye=q.isMeshStandardMaterial?B.environment:null,Ae=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fn,Re=(q.isMeshStandardMaterial?W:T).get(q.envMap||ye),Ve=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color;let yt=us;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=x.toneMapping);const Mn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=Mn!==void 0?Mn.length:0,De=Ne.get(q),wi=p.state.lights;if(ne===!0&&(de===!0||A!==M)){const Xn=A===M&&q.id===y;re.setState(q,A,Xn)}let ct=!1;q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==wi.state.version||De.outputColorSpace!==Ae||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Re||q.fog===!0&&De.fog!==le||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Ve||De.vertexTangents!==qe||De.morphTargets!==Ce||De.morphNormals!==ot||De.morphColors!==vt||De.toneMapping!==yt||De.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,De.__version=q.version);let Qn=De.currentProgram;ct===!0&&(Qn=jt(q,B,z));let qs=!1,Ln=!1,Gr=!1;const Mt=Qn.getUniforms(),oi=De.uniforms;if(Ue.useProgram(Qn.program)&&(qs=!0,Ln=!0,Gr=!0),q.id!==y&&(y=q.id,Ln=!0),qs||M!==A){Ue.buffers.depth.getReversed()?(fe.copy(A.projectionMatrix),bg(fe),vg(fe),Mt.setValue(H,"projectionMatrix",fe)):Mt.setValue(H,"projectionMatrix",A.projectionMatrix),Mt.setValue(H,"viewMatrix",A.matrixWorldInverse);const ji=Mt.map.cameraPosition;ji!==void 0&&ji.setValue(H,Fe.setFromMatrixPosition(A.matrixWorld)),Ye.logarithmicDepthBuffer&&Mt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Mt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Ln=!0,Gr=!0)}if(z.isSkinnedMesh){Mt.setOptional(H,z,"bindMatrix"),Mt.setOptional(H,z,"bindMatrixInverse");const Xn=z.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Mt.setValue(H,"boneTexture",Xn.boneTexture,P))}z.isBatchedMesh&&(Mt.setOptional(H,z,"batchingTexture"),Mt.setValue(H,"batchingTexture",z._matricesTexture,P),Mt.setOptional(H,z,"batchingIdTexture"),Mt.setValue(H,"batchingIdTexture",z._indirectTexture,P),Mt.setOptional(H,z,"batchingColorTexture"),z._colorsTexture!==null&&Mt.setValue(H,"batchingColorTexture",z._colorsTexture,P));const Vr=X.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0)&&Oe.update(z,X,Qn),(Ln||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,Mt.setValue(H,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(oi.envMap.value=Re,oi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(oi.envMapIntensity.value=B.environmentIntensity),Ln&&(Mt.setValue(H,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&zt(oi,Gr),le&&q.fog===!0&&ge.refreshFogUniforms(oi,le),ge.refreshMaterialUniforms(oi,q,G,V,p.state.transmissionRenderTarget[A.id]),Lo.upload(H,dt(De),oi,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Lo.upload(H,dt(De),oi,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Mt.setValue(H,"center",z.center),Mt.setValue(H,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(H,"normalMatrix",z.normalMatrix),Mt.setValue(H,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Xn=q.uniformsGroups;for(let ji=0,Yi=Xn.length;ji<Yi;ji++){const iu=Xn[ji];F.update(iu,Qn),F.bind(iu,Qn)}}return Qn}function zt(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Si(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,X){Ne.get(A.texture).__webglTexture=B,Ne.get(A.depthTexture).__webglTexture=X;const q=Ne.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const X=Ne.get(A);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,X=0){C=A,R=B,E=X;let q=!0,z=null,le=!1,ye=!1;if(A){const Re=Ne.get(A);if(Re.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(H.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Re.__hasExternalTextures)P.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ce=A.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&Ne.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const qe=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[B])?z=qe[B][X]:z=qe[B],le=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?z=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?z=qe[X]:z=qe,w.copy(A.viewport),D.copy(A.scissor),L=A.scissorTest}else w.copy(ce).multiplyScalar(G).floor(),D.copy(Se).multiplyScalar(G).floor(),L=Qe;if(Ue.bindFramebuffer(H.FRAMEBUFFER,z)&&q&&Ue.drawBuffers(A,z),Ue.viewport(w),Ue.scissor(D),Ue.setScissorTest(L),le){const Re=Ne.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,X)}else if(ye){const Re=Ne.get(A.texture),Ve=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,Ve)}y=-1},this.readRenderTargetPixels=function(A,B,X,q,z,le,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){Ue.bindFramebuffer(H.FRAMEBUFFER,Ae);try{const Re=A.texture,Ve=Re.format,qe=Re.type;if(!Ye.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&X>=0&&X<=A.height-z&&H.readPixels(B,X,q,z,ze.convert(Ve),ze.convert(qe),le)}finally{const Re=C!==null?Ne.get(C).__webglFramebuffer:null;Ue.bindFramebuffer(H.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,B,X,q,z,le,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){const Re=A.texture,Ve=Re.format,qe=Re.type;if(!Ye.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-q&&X>=0&&X<=A.height-z){Ue.bindFramebuffer(H.FRAMEBUFFER,Ae);const Ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ce),H.bufferData(H.PIXEL_PACK_BUFFER,le.byteLength,H.STREAM_READ),H.readPixels(B,X,q,z,ze.convert(Ve),ze.convert(qe),0);const ot=C!==null?Ne.get(C).__webglFramebuffer:null;Ue.bindFramebuffer(H.FRAMEBUFFER,ot);const vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _g(H,vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,le),H.deleteBuffer(Ce),H.deleteSync(vt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,X=0){A.isTexture!==!0&&(ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(A.image.width*q),le=Math.floor(A.image.height*q),ye=B!==null?B.x:0,Ae=B!==null?B.y:0;P.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,ye,Ae,z,le),Ue.unbindTexture()},this.copyTextureToTexture=function(A,B,X=null,q=null,z=0){A.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],B=arguments[2],z=arguments[3]||0,X=null);let le,ye,Ae,Re,Ve,qe,Ce,ot,vt;const yt=A.isCompressedTexture?A.mipmaps[z]:A.image;X!==null?(le=X.max.x-X.min.x,ye=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Ve=X.min.y,qe=X.isBox3?X.min.z:0):(le=yt.width,ye=yt.height,Ae=yt.depth||1,Re=0,Ve=0,qe=0),q!==null?(Ce=q.x,ot=q.y,vt=q.z):(Ce=0,ot=0,vt=0);const Mn=ze.convert(B.format),lt=ze.convert(B.type);let De;B.isData3DTexture?(P.setTexture3D(B,0),De=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),De=H.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),De=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const wi=H.getParameter(H.UNPACK_ROW_LENGTH),ct=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Qn=H.getParameter(H.UNPACK_SKIP_PIXELS),qs=H.getParameter(H.UNPACK_SKIP_ROWS),Ln=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,yt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Re),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ve),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qe);const Gr=A.isDataArrayTexture||A.isData3DTexture,Mt=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const oi=Ne.get(A),Vr=Ne.get(B),Xn=Ne.get(oi.__renderTarget),ji=Ne.get(Vr.__renderTarget);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,Xn.__webglFramebuffer),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Yi=0;Yi<Ae;Yi++)Gr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.get(A).__webglTexture,z,qe+Yi),A.isDepthTexture?(Mt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.get(B).__webglTexture,z,vt+Yi),H.blitFramebuffer(Re,Ve,le,ye,Ce,ot,le,ye,H.DEPTH_BUFFER_BIT,H.NEAREST)):Mt?H.copyTexSubImage3D(De,z,Ce,ot,vt+Yi,Re,Ve,le,ye):H.copyTexSubImage2D(De,z,Ce,ot,vt+Yi,Re,Ve,le,ye);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Mt?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(De,z,Ce,ot,vt,le,ye,Ae,Mn,lt,yt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(De,z,Ce,ot,vt,le,ye,Ae,Mn,yt.data):H.texSubImage3D(De,z,Ce,ot,vt,le,ye,Ae,Mn,lt,yt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,z,Ce,ot,le,ye,Mn,lt,yt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,z,Ce,ot,yt.width,yt.height,Mn,yt.data):H.texSubImage2D(H.TEXTURE_2D,z,Ce,ot,le,ye,Mn,lt,yt);H.pixelStorei(H.UNPACK_ROW_LENGTH,wi),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ct),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qn),H.pixelStorei(H.UNPACK_SKIP_ROWS,qs),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ln),z===0&&B.generateMipmaps&&H.generateMipmap(De),Ue.unbindTexture()},this.copyTextureToTexture3D=function(A,B,X=null,q=null,z=0){return A.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,A=arguments[2],B=arguments[3],z=arguments[4]||0),ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,X,q,z)},this.initRenderTarget=function(A){Ne.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ue.unbindTexture()},this.resetState=function(){R=0,E=0,C=null,Ue.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class Ah{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new Ah(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ra extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new I;class Rh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rf=new I,af=new at,of=new at,Cx=new I,lf=new Pe,uo=new I,Il=new vi,cf=new Pe,Nl=new za;class Px extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ou,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Il.copy(this.boundingSphere),Il.applyMatrix4(i),e.ray.intersectsSphere(Il)!==!1&&(cf.copy(i).invert(),Nl.copy(e.ray).applyMatrix4(cf),!(this.boundingBox!==null&&Nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;af.fromBufferAttribute(i.attributes.skinIndex,e),of.fromBufferAttribute(i.attributes.skinWeight,e),rf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=of.getComponent(r);if(a!==0){const o=af.getComponent(r);lf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cx.copy(rf).applyMatrix4(lf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wd extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qo extends Vt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=xn,h=xn,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hf=new Pe,Lx=new Pe;class Ch{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Lx;hf.multiplyMatrices(o,t[r]),hf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ch(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qo(t,e,e,Tn,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Wd),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Xc extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new Pe,uf=new Pe,fo=[],ff=new hn,Dx=new Pe,Yr=new st,Kr=new vi;class Ix extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),ff.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(ff)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),Kr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,or),uf.multiplyMatrices(n,or),Yr.matrixWorld=uf,Yr.raycast(e,fo);for(let a=0,o=fo.length;a<o;a++){const l=fo[a];l.instanceId=r,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(i*this.count),i,this.count,vh,ai));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xd extends gi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new I,zo=new I,df=new Pe,$r=new za,po=new vi,Ul=new I,pf=new I;class Ph extends Pt{constructor(e=new dn,t=new Xd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Bo.fromBufferAttribute(t,i-1),zo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bo.distanceTo(zo);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;df.copy(i).invert(),$r.copy(e.ray).applyMatrix4(df);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),v=mo(this,e,$r,l,p,b);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=mo(this,e,$r,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=mo(this,e,$r,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=mo(this,e,$r,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mo(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Bo.fromBufferAttribute(a,i),zo.fromBufferAttribute(a,r),t.distanceSqToSegment(Bo,zo,Ul,pf)>n)return;Ul.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ul);if(!(l<e.near||l>e.far))return{distance:l,point:pf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const mf=new I,gf=new I;class Nx extends Ph{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)mf.fromBufferAttribute(t,i),gf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mf.distanceTo(gf);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ux extends Ph{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qd extends gi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _f=new Pe,qc=new za,go=new vi,_o=new I;class Ox extends Pt{constructor(e=new dn,t=new qd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;_f.copy(i).invert(),qc.copy(e.ray).applyMatrix4(_f);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);_o.fromBufferAttribute(u,m),bf(_o,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)_o.fromBufferAttribute(u,g),bf(_o,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bf(s,e,t,n,i,r,a){const o=qc.distanceSqToPoint(s);if(o<t){const l=new I;qc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class el extends Vt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new oe:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],a=[],o=new I,l=new Pe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Kt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Kt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lh extends xi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fx extends Lh{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Dh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const bo=new I,Ol=new Dh,Fl=new Dh,kl=new Dh;class jc extends xi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(bo.subVectors(i[0],i[1]).add(i[0]),c=bo);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(bo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ol.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Fl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),kl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Fl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),kl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ol.calc(l),Fl.calc(l),kl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vf(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function kx(s,e){const t=1-s;return t*t*e}function Bx(s,e){return 2*(1-s)*s*e}function zx(s,e){return s*s*e}function pa(s,e,t,n){return kx(s,e)+Bx(s,t)+zx(s,n)}function Hx(s,e){const t=1-s;return t*t*t*e}function Gx(s,e){const t=1-s;return 3*t*t*s*e}function Vx(s,e){return 3*(1-s)*s*s*e}function Wx(s,e){return s*s*s*e}function ma(s,e,t,n,i){return Hx(s,e)+Gx(s,t)+Vx(s,n)+Wx(s,i)}class jd extends xi{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,i.x,r.x,a.x,o.x),ma(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xx extends xi{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,i.x,r.x,a.x,o.x),ma(e,i.y,r.y,a.y,o.y),ma(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yd extends xi{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qx extends xi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends xi{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(pa(e,i.x,r.x,a.x),pa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jx extends xi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(pa(e,i.x,r.x,a.x),pa(e,i.y,r.y,a.y),pa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(vf(o,l.x,c.x,h.x,u.x),vf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}var xf=Object.freeze({__proto__:null,ArcCurve:Fx,CatmullRomCurve3:jc,CubicBezierCurve:jd,CubicBezierCurve3:Xx,EllipseCurve:Lh,LineCurve:Yd,LineCurve3:qx,QuadraticBezierCurve:Kd,QuadraticBezierCurve3:jx,SplineCurve:$d});class Yx extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new xf[i.type]().fromJSON(i))}return this}}class Yc extends Yx{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yd(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Kd(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new jd(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Lh(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ha extends dn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kc extends Yc{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Yc().fromJSON(i))}return this}}const Kx={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Jd(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=ey(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Ca(r,a,t,o,l,d,0),a}};function Jd(s,e,t,n,i){let r,a;if(i===uy(s,e,t,n)>0)for(r=e;r<t;r+=n)a=yf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=yf(r,s[r],s[r+1],a);return a&&tl(a,a.next)&&(La(a),a=a.next),a}function Vs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(tl(t,t.next)||Rt(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ca(s,e,t,n,i,r,a){if(!s)return;!a&&r&&ry(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Jx(s,n,i,r):$x(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),La(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Zx(Vs(s),e,t),Ca(s,e,t,n,i,r,2)):a===2&&Qx(s,e,t,n,i,r):Ca(Vs(s),e,t,n,i,r,1);break}}}function $x(s){const e=s.prev,t=s,n=s.next;if(Rt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ur(i,o,r,l,a,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jx(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Rt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=$c(d,g,e,t,n),b=$c(_,m,e,t,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&ur(o,h,l,u,c,f,v.x,v.y)&&Rt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ur(o,h,l,u,c,f,x.x,x.y)&&Rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&ur(o,h,l,u,c,f,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ur(o,h,l,u,c,f,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Zx(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!tl(i,r)&&Zd(i,n,n.next,r)&&Pa(i,r)&&Pa(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),La(n),La(n.next),n=s=r),n=n.next}while(n!==s);return Vs(n)}function Qx(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ly(a,o)){let l=Qd(a,o);a=Vs(a,a.next),l=Vs(l,l.next),Ca(a,e,t,n,i,r,0),Ca(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function ey(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Jd(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(oy(c));for(i.sort(ty),r=0;r<i.length;r++)t=ny(i[r],t);return t}function ty(s,e){return s.x-e.x}function ny(s,e){const t=iy(s,e);if(!t)return e;const n=Qd(t,s);return Vs(n,n.next),Vs(t,t.next)}function iy(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ur(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Pa(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&sy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function sy(s,e){return Rt(s.prev,s,e.prev)<0&&Rt(e.next,s,s.next)<0}function ry(s,e,t,n){let i=s;do i.z===0&&(i.z=$c(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ay(i)}function ay(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function $c(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function oy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ur(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function ly(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!cy(s,e)&&(Pa(s,e)&&Pa(e,s)&&hy(s,e)&&(Rt(s.prev,s,e.prev)||Rt(s,e.prev,e))||tl(s,e)&&Rt(s.prev,s,s.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function tl(s,e){return s.x===e.x&&s.y===e.y}function Zd(s,e,t,n){const i=xo(Rt(s,e,t)),r=xo(Rt(s,e,n)),a=xo(Rt(t,n,s)),o=xo(Rt(t,n,e));return!!(i!==r&&a!==o||i===0&&vo(s,t,e)||r===0&&vo(s,n,e)||a===0&&vo(t,s,n)||o===0&&vo(t,e,n))}function vo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function xo(s){return s>0?1:s<0?-1:0}function cy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Pa(s,e){return Rt(s.prev,s,s.next)<0?Rt(s,e,s.next)>=0&&Rt(s,s.prev,e)>=0:Rt(s,e,s.prev)<0||Rt(s,s.next,e)<0}function hy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Qd(s,e){const t=new Jc(s.i,s.x,s.y),n=new Jc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yf(s,e,t,n){const i=new Jc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function La(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uy(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class ga{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ga.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Mf(e),Sf(n,e);let a=e.length;t.forEach(Mf);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Sf(n,t[l]);const o=Kx.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Mf(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Sf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ih extends dn{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new I,g=new oe;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,v=b,x=b+n+1,S=b+n+2,R=b+1;o.push(v,x,R),o.push(x,S,R)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ho extends dn{constructor(e=new Kc([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Lt(i,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;ga.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const b=g[m];ga.isClockWise(b)===!0&&(g[m]=b.reverse())}const _=ga.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){const b=d[m];i.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=_.length;m<p;m++){const b=_[m],v=b[0]+u,x=b[1]+u,S=b[2]+u;n.push(v,x,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return fy(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Ho(n,e.curveSegments)}}function fy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class fs extends gi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class It extends fs{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function yo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function dy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function py(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function ep(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ga{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class my extends Ga{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cu:r=e,o=2*t-n;break;case hu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:a=e,l=2*n-t;break;case hu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+b*a[c+S]+v*a[l+S]+x*a[u+S];return r}}class gy extends Ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class _y extends Ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _y(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new my(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wa:t=this.InterpolantFactoryMethodDiscrete;break;case Ta:t=this.InterpolantFactoryMethodLinear;break;case rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&dy(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===rl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Ta;class zr extends yi{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=wa;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class tp extends yi{}tp.prototype.ValueTypeName="color";class Cr extends yi{}Cr.prototype.ValueTypeName="number";class by extends Ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)bs.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Pr extends yi{InterpolantFactoryMethodLinear(e){return new by(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends yi{constructor(e,t,n){super(e,t,n)}}Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=wa;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends yi{}Lr.prototype.ValueTypeName="vector";class vy{constructor(e="",t=-1,n=[],i=Gm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(yy(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(yi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=py(l);l=wf(l,1,h),c=wf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Cr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];ep(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let b=0;b!==f[g].morphTargets.length;++b){const v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Cr(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(Lr,d+".position",f,"pos",i),n(Pr,d+".quaternion",f,"rot",i),n(Lr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return tp;case"quaternion":return Pr;case"bool":case"boolean":return zr;case"string":return Hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function yy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xy(s.type);if(s.times===void 0){const t=[],n=[];ep(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const os={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class My{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Sy=new My;class Ws{constructor(e){this.manager=e!==void 0?e:Sy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class wy extends Error{constructor(e,t){super(e),this.response=t}}class Go extends Ws{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=os.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:i});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Pi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,E=h.length;R<E;R++){const C=h[R];C.onProgress&&C.onProgress(S)}p.enqueue(x),b()}},v=>{p.error(v)})}}});return new Response(m)}else throw new wy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{os.add(e,c);const h=Pi[e];delete Pi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Pi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ty extends Ws{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=os.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ea("img");function l(){h(),os.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Ey extends Ws{constructor(e){super(e)}load(e,t,n,i){const r=new Vt,a=new Ty(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Nh extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bl=new Pe,Tf=new I,Ef=new I;class Uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Th,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ay extends Uh{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ar*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ry extends Nh{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ay}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Af=new Pe,Jr=new I,zl=new I;class Cy extends Uh{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),zl.copy(n.position),zl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zl),n.updateMatrixWorld(),i.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Af.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af)}}class Py extends Nh{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ly extends Uh{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dy extends Nh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Ly}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _a{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Iy extends Ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=os.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return os.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),os.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});os.add(e,l),r.manager.itemStart(e)}}class Ny{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rf(){return performance.now()}const Oh="\\[\\]\\.:\\/",Uy=new RegExp("["+Oh+"]","g"),Fh="[^"+Oh+"]",Oy="[^"+Oh.replace("\\.","")+"]",Fy=/((?:WC+[\/:])*)/.source.replace("WC",Fh),ky=/(WCOD+)?/.source.replace("WCOD",Oy),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Hy=new RegExp("^"+Fy+ky+By+zy+"$"),Gy=["material","materials","bones","map"];class Vy{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(e){const t=Hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Gy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=Vy;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Cf=new Pe;class Wy{constructor(e,t,n=0,i=1/0){this.ray=new za(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cf),this}intersectObject(e,t=!0,n=[]){return Zc(e,this,n,t),n.sort(Pf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Zc(e[i],this,n,t);return n.sort(Pf),n}}function Pf(s,e){return s.distance-e.distance}function Zc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Zc(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function Ni(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function np(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Da={duration:.5,overwrite:!1,delay:0},kh,sn,wt,$n=1e8,bt=1/$n,Qc=Math.PI*2,Xy=Qc/4,qy=0,ip=Math.sqrt,jy=Math.cos,Yy=Math.sin,Jt=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Xi=function(e){return typeof e=="number"},Bh=function(e){return typeof e>"u"},bi=function(e){return typeof e=="object"},En=function(e){return e!==!1},zh=function(){return typeof window<"u"},Mo=function(e){return Dt(e)||Jt(e)},sp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,Ky=/random\([^)]+\)/g,$y=/,\s*/g,Lf=/(?:-?\.?\d|\.)+/gi,rp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ap=/[+-]=-?[.\d]+/,Jy=/[^,'"\[\]\s]+/gi,Zy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,hi,eh,Hh,Vn={},Vo={},op,lp=function(e){return(Vo=Dr(e,Vn))&&Pn},Gh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ia=function(e,t){return!t&&console.warn(e)},cp=function(e,t){return e&&(Vn[e]=t)&&Vo&&(Vo[e]=t)||Vn},Na=function(){return 0},Qy={suppressEvents:!0,isStart:!0,kill:!1},Do={suppressEvents:!0,kill:!1},eM={suppressEvents:!0},Vh={},ds=[],th={},hp,On={},Gl={},Df=30,Io=[],Wh="",Xh=function(e){var t=e[0],n,i;if(bi(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Io.length;i--&&!Io[i].targetTest(t););n=Io[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Dp(e[i],n)))||e.splice(i,1);return e},Fs=function(e){return e._gsap||Xh(Jn(e))[0]._gsap},up=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():Bh(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},br=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},tM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Wo=function(){var e=ds.length,t=ds.slice(0),n,i;for(th={},ds.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qh=function(e){return!!(e._initted||e._startAt||e.add)},fp=function(e,t,n,i){ds.length&&!sn&&Wo(),e.render(t,n,!!(sn&&t<0&&qh(e))),ds.length&&!sn&&Wo()},dp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jy).length<2?t:Jt(e)?e.trim():e},pp=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Dr=function(e,t){for(var n in t)e[n]=t[n];return e},If=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=bi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Xo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ba=function(e){var t=e.parent||At,n=e.keyframes?nM(un(e.keyframes)):Wn;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},iM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},mp=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},nl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ks=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},sM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nh=function(e,t,n,i){return e._startAt&&(sn?e._startAt.revert(Do):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},rM=function s(e){return!e||e._ts&&s(e.parent)},Nf=function(e){return e._repeat?Ir(e._tTime,e=e.duration()+e._rDelay)*e:0},Ir=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},qo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},il=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},sl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),il(e),n._dirty||ks(n,e)),e},gp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=qo(e.rawTime(),t),(!t._dur||Va(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),ks(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},di=function(e,t,n,i){return t.parent&&ms(t),t._start=Et((Xi(n)?n:n||e!==At?jn(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mp(e,t,"_first","_last",e._sort?"_start":0),ih(t)||(e._recent=t),i||gp(e,t),e._ts<0&&sl(e,e._tTime),e},_p=function(e,t){return(Vn.ScrollTrigger||Gh("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},bp=function(e,t,n,i,r){if(Yh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hp!==kn.frame)return ds.push(e),e._lazy=[r,i],1},aM=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ih=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oM=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&aM(e)&&!(!e._initted&&ih(e))||(e._ts<0||e._dp._ts<0)&&!ih(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Va(0,e._tDur,t),h=Ir(l,o),e._yoyo&&h&1&&(a=1-a),h!==Ir(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||sn||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&bp(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&nh(e,t,n,!0),e._onUpdate&&!n&&Bn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ms(e,1),!n&&!sn&&(Bn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Nr=function(e,t,n,i){var r=e._repeat,a=Et(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Et(a*(r+1)+e._rDelay*r):a,o>0&&!i&&sl(e,e._tTime=e._tDur*o),e.parent&&il(e),n||ks(e.parent,e),e},Uf=function(e){return e instanceof wn?ks(e):Nr(e,e._dur)},cM={_start:0,endTime:Na,totalDuration:Na},jn=function s(e,t,n){var i=e.labels,r=e._recent||cM,a=e.duration()>=$n?r.endTime(!1):e._dur,o,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},va=function(e,t,n){var i=Xi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;a.immediateRender=En(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Ft(t[0],a,t[r+1])},xs=function(e,t){return e||e===0?t(e):t},Va=function(e,t,n){return n<e?e:n>t?t:n},cn=function(e,t){return!Jt(e)||!(t=Zy.exec(e))?"":t[1]},hM=function(e,t,n){return xs(n,function(i){return Va(e,t,i)})},sh=[].slice,vp=function(e,t){return e&&bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bi(e[0]))&&!e.nodeType&&e!==hi},uM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Jt(i)&&!t||vp(i,1)?(r=n).push.apply(r,Jn(i)):n.push(i)})||n},Jn=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):Jt(e)&&!n&&(eh||!Ur())?sh.call((t||Hh).querySelectorAll(e),0):un(e)?uM(e,n):vp(e)?sh.call(e,0):e?[e]:[]},rh=function(e){return e=Jn(e)[0]||Ia("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Jn(t,n.querySelectorAll?n:n===e?Ia("Invalid scope")||Hh.createElement("div"):e)}},xp=function(e){return e.sort(function(){return .5-Math.random()})},yp=function(e){if(Dt(e))return e;var t=bi(e)?e:{each:e},n=Bs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Jt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,b,v,x,S,R,E,C,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,$n])[1],!y){for(E=-$n;E<(E=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=a[_]=[],p=l?Math.min(y,_)*h-.5:i%y,b=y===$n?0:l?_*u/y-.5:i/y|0,E=0,C=$n,R=0;R<_;R++)v=R%y-p,x=b-(R/y|0),m[R]=S=c?Math.abs(c==="y"?x:v):ip(v*v+x*x),S>E&&(E=S),S<C&&(C=S);i==="random"&&xp(m),m.max=E-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=cn(t.amount||t.each)||0,n=n&&_<0?wM(n):n}return _=(m[f]-m.min)/m.max||0,Et(m.b+(n?n(_):_)*m.v)+m.u}},ah=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Et(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xi(n)?0:cn(n))}},Mp=function(e,t){var n=un(e),i,r;return!n&&bi(e)&&(i=n=e.radius||$n,e.values?(e=Jn(e.values),(r=!Xi(e[0]))&&(i*=i)):e=ah(e.increment)),xs(t,n?Dt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=$n,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,r||h===a||Xi(a)?h:h+cn(a)}:ah(e))},Sp=function(e,t,n,i){return xs(un(e)?!t:n===!0?!!(n=0):!i,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},fM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},dM=function(e,t){return function(n){return e(parseFloat(n))+(t||cn(n))}},pM=function(e,t,n){return Tp(e,t,0,1,n)},wp=function(e,t,n){return xs(n,function(i){return e[~~t(i)]})},mM=function s(e,t,n){var i=t-e;return un(e)?wp(e,s(0,e.length),t):xs(n,function(r){return(i+(r-e)%i)%i+e})},gM=function s(e,t,n){var i=t-e,r=i*2;return un(e)?wp(e,s(0,e.length-1),t):xs(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ua=function(e){return e.replace(Ky,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split($y);return Sp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Tp=function(e,t,n,i,r){var a=t-e,o=i-n;return xs(r,function(l){return n+((l-e)/a*o||0)})},_M=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Jt(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=t}else i||(e=Dr(un(e)?[]:{},e));if(!h){for(l in t)jh.call(o,e,l,"get",t[l]);r=function(g){return Jh(g,o)||(a?e.p:e)}}}return xs(n,r)},Of=function(e,t,n){var i=e.labels,r=$n,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Bn=function(e,t,n){var i=e.vars,r=i[t],a=wt,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ds.length&&Wo(),o&&(wt=o),h=l?r.apply(c,l):r.call(c),wt=a,h},oa=function(e){return ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Bn(e,"onInterrupt"),e},dr,Ep=[],Ap=function(e){if(e)if(e=!e.name&&e.default||e,zh()||e.headless){var t=e.name,n=Dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Na,render:Jh,add:jh,kill:NM,modifier:IM,rawVars:0},a={targetTest:0,get:0,getSetter:$h,aliases:{},register:0};if(Ur(),e!==i){if(On[t])return;Wn(i,Wn(Xo(e,r),a)),Dr(i.prototype,Dr(r,Xo(e,a))),On[i.prop=t]=i,e.targetTest&&(Io.push(i),Vh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cp(t,i),e.register&&e.register(Pn,i,Rn)}else Ep.push(e)},_t=255,la={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Vl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},Rp=function(e,t,n){var i=e?Xi(e)?[e>>16,e>>8&_t,e&_t]:0:la.black,r,a,o,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),la[e])i=la[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_t,i&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Lf),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Vl(l+1/3,r,a),i[1]=Vl(l,r,a),i[2]=Vl(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(rp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lf)||la.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/_t,a=i[1]/_t,o=i[2]/_t,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(a-o)/d+(a<o?6:0):u===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Cp=function(e){var t=[],n=[],i=-1;return e.split(ps).forEach(function(r){var a=r.match(fr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Ff=function(e,t,n){var i="",r=(e+i).match(ps),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=Rp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Cp(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ps,"1").split(fr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(ps),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},ps=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in la)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),bM=/hsl[a]?\(/,Pp=function(e){var t=e.join(" "),n;if(ps.lastIndex=0,ps.test(t))return n=bM.test(t),e[1]=Ff(e[1],n),e[0]=Ff(e[0],n,Cp(e[1])),!0},Oa,kn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,f,d,g=function _(m){var p=s()-i,b=m===!0,v,x,S,R;if((p>e||p<0)&&(n+=p-t),i+=p,S=i-n,v=S-a,(v>0||b)&&(R=++u.frame,f=S-u.time*1e3,u.time=S=S/1e3,a+=v+(v>=r?4:r-v),x=1),b||(l=c(_)),x)for(d=0;d<o.length;d++)o[d](S,f,R,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){op&&(!eh&&zh()&&(hi=eh=window,Hh=hi.document||{},Vn.gsap=Pn,(hi.gsapVersions||(hi.gsapVersions=[])).push(Pn.version),lp(Vo||hi.GreenSockGlobals||!hi.gsap&&hi||{}),Ep.forEach(Ap)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Oa=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Oa=0,c=Na},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,b){var v=p?function(x,S,R,E){m(x,S,R,E),u.remove(v)}:m;return u.remove(m),o[b?"unshift":"push"](v),Ur(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u}(),Ur=function(){return!Oa&&kn.wake()},rt={},vM=/^[\d.\-M][\d.\-,\s]/,xM=/["']/g,yM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(xM,"").trim():+c,i=l.substr(o+1).trim();return t},MM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},SM=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yM(t[1])]:MM(e).split(",").map(dp)):rt._CE&&vM.test(e)?rt._CE("",e):n},wM=function(e){return function(t){return 1-e(1-t)}},Bs=function(e,t){return e&&(Dt(e)?e:rt[e]||SM(e))||t},Xs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return An(e,function(o){rt[o]=Vn[o]=r,rt[a=o.toLowerCase()]=n;for(var l in r)rt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=r[l]}),r},Lp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Qc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Yy((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Lp(o);return r=Qc/r,l.config=function(c,h){return s(e,c,h)},l},Xl=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Lp(n);return i.config=function(r){return s(e,r)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Xs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;Xs("Elastic",Wl("in"),Wl("out"),Wl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Xs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Xs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Xs("Circ",function(s){return-(ip(1-s*s)-1)});Xs("Sine",function(s){return s===1?1:-jy(s*Xy)+1});Xs("Back",Xl("in"),Xl("out"),Xl());rt.SteppedEase=rt.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-bt;return function(o){return((i*Va(0,a,o)|0)+r)*n}}};Da.ease=rt["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Wh+=s+","+s+"Params,"});var Dp=function(e,t){this.id=qy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:up,this.set=t?t.getSetter:$h},Fa=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Nr(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Oa||kn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Nr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ur(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(sl(this,n),!r._dp||r.parent||gp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ir(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?qo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(Va(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),il(this),sM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ur(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Et(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=eM);var i=sn;return sn=n,qh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Uf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Uf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(jn(this,n),En(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-bt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Dt(n)?n:pp,l=function(){var h=i.then;i.then=null,r&&r(),Dt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){oa(this)},s}();Wn(Fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var wn=function(s){np(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=En(n.sortChildren),At&&di(n.parent||At,Ni(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&_p(Ni(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return va(0,arguments,this),this},t.from=function(i,r,a){return va(1,arguments,this),this},t.fromTo=function(i,r,a,o){return va(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,ba(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ft(i,r,jn(this,a),1),this},t.call=function(i,r,a){return di(this,Ft.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ft(i,a,jn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,ba(a).immediateRender=En(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,ba(o).immediateRender=En(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Et(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,b,v,x,S,R,E;if(this!==At&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,x=this._start,v=this._ts,p=!v,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Et(h%m),h===l?(_=this._repeat,f=c):(S=Et(h/m),_=~~S,_&&_===S&&(f=c,_--),f>c&&(f=c)),S=Ir(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),R&&_&1&&(f=c-f,E=1),_!==S&&!this._lock){var C=R&&S&1,y=C===(R&&_&1);if(_<S&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Et(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=lM(this,Et(o),Et(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!S&&(Bn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){b=0,g&&(h+=this._zTime=-bt);break}}d=g}else{d=this._last;for(var M=i<0?i:f;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,a||sn&&qh(d)),f!==this._time||!this._ts&&!p){b=0,g&&(h+=this._zTime=M?-bt:bt);break}}d=g}}if(b&&!r&&(this.pause(),b.render(f>=o?0:-bt)._zTime=f>=o?1:-1,this._ts))return this._start=x,il(this),this.render(i,r,a);this._onUpdate&&!r&&Bn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ms(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(Bn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Xi(r)||(r=jn(this,r,i)),!(i instanceof Fa)){if(un(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Jt(i))return this.addLabel(i,r);if(Dt(i))i=Ft.delayedCall(0,i);else return this}return this!==i?di(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-$n);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ft?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Dt(i)?this.killTweensOf(i):(i.parent===this&&nl(this,i),i===this._recent&&(this._recent=this._last),ks(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=jn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Ft.delayedCall(0,r||Na,a);return o.data="isPause",this._hasPause=1,di(this,o,jn(this,i))},t.removePause=function(i){var r=this._first;for(i=jn(this,i);r;)r._start===i&&r.data==="isPause"&&ms(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ls!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Jn(i),l=this._first,c=Xi(r),h;l;)l instanceof Ft?tM(l._targets,o)&&(c?(!ls||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=jn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Ft.to(a,Wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||bt,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Nr(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Wn({startAt:{time:jn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Of(this,jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Of(this,jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Et(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ks(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ks(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=$n,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,di(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Et(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Nr(a,a===At&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(At._ts&&(fp(At,qo(i,At)),hp=kn.frame),kn.frame>=Df){Df+=Gn.autoSleep||120;var r=At._first;if((!r||!r._ts)&&Gn.autoSleep&&kn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||kn.sleep()}}},e}(Fa);Wn(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var TM=function(e,t,n,i,r,a,o){var l=new Rn(this._pt,e,t,0,1,kp,null,r),c=0,h=0,u,f,d,g,_,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ua(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),f=n.match(Hl)||[];u=Hl.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?br(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Hl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ap.test(i)||p)&&(l.e=0),this._pt=l,l},jh=function(e,t,n,i,r,a,o,l,c,h){Dt(i)&&(i=i(r||0,e,a));var u=e[t],f=n!=="get"?n:Dt(u)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Dt(u)?c?PM:Op:Kh,g;if(Jt(i)&&(~i.indexOf("random(")&&(i=Ua(i)),i.charAt(1)==="="&&(g=br(f,i)+(cn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||oh)return!isNaN(f*i)&&i!==""?(g=new Rn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?DM:Fp,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&Gh(t,i),TM.call(this,e,t,f,i,d,l||Gn.stringFilter,c))},EM=function(e,t,n,i,r){if(Dt(e)&&(e=xa(e,r,t,n,i)),!bi(e)||e.style&&e.nodeType||un(e)||sp(e))return Jt(e)?xa(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=xa(e[o],r,t,n,i);return a},Ip=function(e,t,n,i,r,a){var o,l,c,h;if(On[e]&&(o=new On[e]).init(r,o.rawVars?t[e]:EM(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Rn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==dr))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ls,oh,Yh=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!kh,x=e.timeline,S=i.easeReverse||u,R,E,C,y,M,w,D,L,N,O,k,V,G;if(x&&(!f||!r)&&(r="none"),e._ease=Bs(r,Da.ease),e._rEase=S&&(Bs(S)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||f&&!i.stagger){if(L=m[0]?Fs(m[0]).harness:0,V=L&&i[L.prop],R=Xo(i,Vh),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?Do:Qy),_._lazy=0),a){if(ms(e._startAt=Ft.set(m,Wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!d)&&e._startAt.revert(Do),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),C=Wn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&En(l),immediateRender:o,stagger:0,parent:p},R),V&&(C[L.prop]=V),ms(e._startAt=Ft.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(Do):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&En(l)||l&&!g,E=0;E<m.length;E++){if(M=m[E],D=M._gsap||Xh(m)[E]._gsap,e._ptLookup[E]=O={},th[D.id]&&ds.length&&Wo(),k=b===m?E:b.indexOf(M),L&&(N=new L).init(M,V||R,e,k,b)!==!1&&(e._pt=y=new Rn(e._pt,M,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(te){O[te]=y}),N.priority&&(w=1)),!L||V)for(C in R)On[C]&&(N=Ip(C,R,e,k,M,b))?N.priority&&(w=1):O[C]=y=jh.call(e,M,C,"get",R[C],k,b,0,i.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),v&&e._pt&&(ls=e,At.killTweensOf(M,O,e.globalTime(t)),G=!e.parent,ls=0),e._pt&&l&&(th[D.id]=1)}w&&Bp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&x.render($n,!0,!0)},AM=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return oh=1,e.vars[t]="+=0",Yh(e,o),oh=0,l?Ia(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Nt(n)+cn(u.e)),u.b&&(u.b=h.s+cn(u.b))},RM=function(e,t){var n=e[0]?Fs(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Dr({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},CM=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(un(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},xa=function(e,t,n,i,r){return Dt(e)?e.call(t,n,i,r):Jt(e)&&~e.indexOf("random(")?Ua(e):e},Np=Wh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Up={};An(Np+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Up[s]=1});var Ft=function(s){np(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ba(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||At,b=(un(n)||sp(n)?Xi(n[0]):"length"in i)?[n]:Jn(n),v,x,S,R,E,C,y,M;if(o._targets=b.length?Xh(b):Ia("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Mo(c)||Mo(h)){i=o.vars;var w=i.easeReverse||i.yoyoEase;if(v=o.timeline=new wn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:b}),v.kill(),v.parent=v._dp=Ni(o),v._start=0,f||Mo(c)||Mo(h)){if(R=b.length,y=f&&yp(f),bi(f))for(E in f)~Np.indexOf(E)&&(M||(M={}),M[E]=f[E]);for(x=0;x<R;x++)S=Xo(i,Up),S.stagger=0,w&&(S.easeReverse=w),M&&Dr(S,M),C=b[x],S.duration=+xa(c,Ni(o),x,C,b),S.delay=(+xa(h,Ni(o),x,C,b)||0)-o._delay,!f&&R===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),v.to(C,S,y?y(x,C,b):0),v._ease=rt.none;v.duration()?c=h=0:o.timeline=0}else if(g){ba(Wn(v.vars.defaults,{ease:"none"})),v._ease=Bs(g.ease||i.ease||"none");var D=0,L,N,O;if(un(g))g.forEach(function(k){return v.to(b,k,">")}),v.duration();else{S={};for(E in g)E==="ease"||E==="easeEach"||CM(E,g[E],S,g.easeEach);for(E in S)for(L=S[E].sort(function(k,V){return k.t-V.t}),D=0,x=0;x<L.length;x++)N=L[x],O={ease:N.e,duration:(N.t-(x?L[x-1].t:0))/100*c},O[E]=N.v,v.to(b,O,D),D+=O.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!kh&&(ls=Ni(o),At.killTweensOf(b),ls=0),di(p,Ni(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===Et(p._time)&&En(u)&&rM(Ni(o))&&p.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-h)||0)),m&&_p(Ni(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-bt&&!h?l:i<bt?0:i,f,d,g,_,m,p,b,v;if(!c)oM(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(f=Et(u%_),u===l?(g=this._repeat,f=c):(m=Et(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=Ir(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Et(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(bp(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var S=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(x?-1:1)/S:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!m&&(Bn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&nh(this,i,r,a),Bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Bn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&nh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ms(this,1),!r&&!(h&&!o)&&(u||o||p)&&(Bn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){Oa||kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Yh(this,c),h=this._ease(c/this._dur),AM(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(sl(this,0),this.parent||mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?oa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ls&&ls.vars.overwrite!==!0)._first||oa(this),this.parent&&a!==this.timeline.totalDuration()&&Nr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Jn(i):o,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!r||r==="all")&&iM(o,l))return r==="all"&&(this._pt=0),oa(this);for(u=this._op=this._op||[],r!=="all"&&(Jt(r)&&(_={},An(r,function(b){return _[b]=1}),r=_),r=RM(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(u[p]=r,g=f,d={}):(d=u[p]=u[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&nl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&oa(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return va(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return va(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return At.killTweensOf(i,r,a)},e}(Fa);Wn(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(s){Ft[s]=function(){var e=new wn,t=sh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Kh=function(e,t,n){return e[t]=n},Op=function(e,t,n){return e[t](n)},PM=function(e,t,n,i){return e[t](i.fp,n)},LM=function(e,t,n){return e.setAttribute(t,n)},$h=function(e,t){return Dt(e[t])?Op:Bh(e[t])&&e.setAttribute?LM:Kh},Fp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},DM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},kp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Jh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},IM=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},NM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?nl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},UM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Bp=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Rn=function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Fp,this.d=l||this,this.set=c||Kh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=UM,this.m=n,this.mt=r,this.tween=i},s}();An(Wh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Vh[s]=1});Vn.TweenMax=Vn.TweenLite=Ft;Vn.TimelineLite=Vn.TimelineMax=wn;At=new wn({sortChildren:!1,defaults:Da,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=Pp;var zs=[],No={},OM=[],kf=0,FM=0,ql=function(e){return(No[e]||OM).map(function(t){return t()})},lh=function(){var e=Date.now(),t=[];e-kf>2&&(ql("matchMediaInit"),zs.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=hi.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ql("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kf=e,ql("matchMedia"))},zp=function(){function s(t,n){this.selector=n&&rh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=FM++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Dt(n)&&(r=i,i=n,n=Dt);var a=this,o=function(){var c=wt,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=rh(r)),wt=a,u=i.apply(a,arguments),Dt(u)&&a._r.push(u),wt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Dt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=wt;wt=null,n(this),wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ft)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=zs.length;a--;)zs[a].id===this.id&&zs.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),kM=function(){function s(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){bi(n)||(n={matches:n});var a=new zp(0,r||this.scope),o=a.conditions={},l,c,h;wt&&!a.selector&&(a.selector=wt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=hi.matchMedia(n[c]),l&&(zs.indexOf(a)<0&&zs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(lh):l.addEventListener("change",lh)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),jo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ap(i)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=Jn(e)[0]);var r=Fs(e||{}).get,a=n?pp:dp;return n==="native"&&(n=""),e&&(t?a((On[t]&&On[t].get||r)(e,t,n,i)):function(o,l,c){return a((On[o]&&On[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Jn(e),e.length>1){var i=e.map(function(h){return Pn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var a=On[t],o=Fs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;dr._pt=0,u.init(e,n?h+n:h,dr,0,[e]),u.render(1,u),dr._pt&&Jh(1,dr)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=Pn.to(e,Wn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Bs(e.ease,Da.ease)),If(Da,e||{})},config:function(e){return If(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!On[o]&&!Vn[o]&&Ia(t+" effect requires "+o+" plugin.")}),Gl[t]=function(o,l,c){return n(Jn(o),Wn(l||{},r),c)},a&&(wn.prototype[t]=function(o,l,c){return this.add(Gl[t](o,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Bs(t)},parseEase:function(e,t){return arguments.length?Bs(e,t):rt},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),i,r;for(n.smoothChildTiming=En(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,i=At._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ft&&i.vars.onComplete===i._targets[0]))&&di(n,i,i._start-i._delay),i=r;return di(At,n,0),n},context:function(e,t){return e?new zp(e,t):wt},matchMedia:function(e){return new kM(e)},matchMediaRefresh:function(){return zs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||lh()},addEventListener:function(e,t){var n=No[e]||(No[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=No[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:mM,wrapYoyo:gM,distribute:yp,random:Sp,snap:Mp,normalize:pM,getUnit:cn,clamp:hM,splitColor:Rp,toArray:Jn,selector:rh,mapRange:Tp,pipe:fM,unitize:dM,interpolate:_M,shuffle:xp},install:lp,effects:Gl,ticker:kn,updateRoot:wn.updateRoot,plugins:On,globalTimeline:At,core:{PropTween:Rn,globals:cp,Tween:Ft,Timeline:wn,Animation:Fa,getCache:Fs,_removeLinkedListItem:nl,reverting:function(){return sn},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return kh=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return jo[s]=Ft[s]});kn.add(wn.updateRoot);dr=jo.to({},{duration:0});var BM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zM=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=BM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},jl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Jt(r)&&(l={},An(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}zM(o,r)}}}},Pn=jo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},jl("roundProps",ah),jl("modifiers"),jl("snap",Mp))||jo;Ft.version=wn.version=Pn.version="3.15.0";op=1;zh()&&Ur();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bf,cs,vr,Zh,Us,zf,Qh,HM=function(){return typeof window<"u"},qi={},Ds=180/Math.PI,xr=Math.PI/180,lr=Math.atan2,Hf=1e8,eu=/([A-Z])/g,GM=/(left|right|width|margin|padding|x)/i,VM=/[\s,\(]\S/,mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ch=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Hp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YM=function(e,t,n){return e.style[t]=n},KM=function(e,t,n){return e.style.setProperty(t,n)},$M=function(e,t,n){return e._gsap[t]=n},JM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ZM=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},QM=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ct="transform",Cn=Ct+"Origin",eS=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in qi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Oi(i,o)}):this.tfm[e]=a.x?a[e]:Oi(i,e),e===Cn&&(this.tfm.zOrigin=a.zOrigin);else return mi.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(Ct)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=Ct}(r||t)&&this.props.push(e,t,r[e])},Vp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(eu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Qh(),(!r||!r.isStart)&&!n[Ct]&&(Vp(n),i.zOrigin&&n[Cn]&&(n[Cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Wp=function(e,t){var n={target:e,props:[],revert:tS,save:eS};return e._gsap||Pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Xp,hh=function(e,t){var n=cs.createElementNS?cs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cs.createElement(e);return n&&n.style?n:cs.createElement(e)},zn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(eu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Or(t)||t,1)||""},Gf="O,Moz,ms,Ms,Webkit".split(","),Or=function(e,t,n){var i=t||Us,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Gf[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Gf[a]:"")+e},uh=function(){HM()&&window.document&&(Bf=window,cs=Bf.document,vr=cs.documentElement,Us=hh("div")||{style:{}},hh("div"),Ct=Or(Ct),Cn=Ct+"Origin",Us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xp=!!Or("perspective"),Qh=Pn.core.reverting,Zh=1)},Vf=function(e){var t=e.ownerSVGElement,n=hh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),vr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),vr.removeChild(n),r},Wf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},qp=function(e){var t,n;try{t=e.getBBox()}catch{t=Vf(e),n=1}return t&&(t.width||t.height)||n||(t=Vf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Wf(e,["x","cx","x1"])||0,y:+Wf(e,["y","cy","y1"])||0,width:0,height:0}:t},jp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qp(e))},gs=function(e,t){if(t){var n=e.style,i;t in qi&&t!==Cn&&(t=Ct),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(eu,"-$1").toLowerCase())):n.removeAttribute(t)}},hs=function(e,t,n,i,r,a){var o=new Rn(e._pt,t,n,0,1,a?Gp:Hp);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Xf={deg:1,rad:1,turn:1},nS={grid:1,flex:1},_s=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Us.style,l=GM.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!r||Xf[i]||Xf[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&jp(e),(d||a==="%")&&(qi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],Nt(d?r/g*u:r/100*g);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===cs||!_.appendChild)&&(_=cs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===kn.time&&!m.uncache)return Nt(r/m.width*u);if(d&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=u+i,g=e[h],b?e.style[t]=b:gs(e,t)}else(d||a==="%")&&!nS[zn(_,"display")]&&(o.position=zn(e,"position")),_===e&&(o.position="static"),_.appendChild(Us),g=Us[h],_.removeChild(Us),o.position="absolute";return l&&d&&(m=Fs(_),m.time=kn.time,m.width=_[h]),Nt(f?g*r/u:g&&r?u/g*r:0)},Oi=function(e,t,n,i){var r;return Zh||uh(),t in mi&&t!=="transform"&&(t=mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(r=Ba(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ko(zn(e,Cn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Yo[t]&&Yo[t](e,t,n)||zn(e,t)||up(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?_s(e,t,r,n)+n:r},iS=function(e,t,n,i){if(!n||n==="none"){var r=Or(t,e,1),a=r&&zn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var o=new Rn(this._pt,e.style,t,0,1,kp),l=0,c=0,h,u,f,d,g,_,m,p,b,v,x,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=zn(e,t)||i,_?e.style[t]=_:gs(e,t)),h=[n,i],Pp(h),n=h[0],i=h[1],f=n.match(fr)||[],S=i.match(fr)||[],S.length){for(;u=fr.exec(i);)m=u[0],b=i.substring(l,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=br(d,m)+x),p=parseFloat(m),v=m.substr((p+"").length),l=fr.lastIndex-v.length,v||(v=v||Gn.units[t]||x,l===i.length&&(i+=v,o.e+=v)),x!==v&&(d=_s(e,t,_,v)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Gp:Hp;return ap.test(i)&&(o.e=0),this._pt=o,o},qf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=qf[n]||n,t[1]=qf[i]||i,t.join(" ")},rS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],qi[o]&&(l=1,o=o==="transformOrigin"?Cn:Ct),gs(n,o);l&&(gs(n,Ct),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ba(n,1),a.uncache=1,Vp(i)))}},Yo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Rn(e._pt,t,n,0,0,rS);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},ka=[1,0,0,1,0,0],Yp={},Kp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jf=function(e){var t=zn(e,Ct);return Kp(t)?ka:t.substr(7).match(rp).map(Nt)},tu=function(e,t){var n=e._gsap||Fs(e),i=e.style,r=jf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ka:r):(r===ka&&!e.offsetParent&&e!==vr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,vr.appendChild(e)),r=jf(e),l?i.display=l:gs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):vr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},fh=function(e,t,n,i,r,a){var o=e._gsap,l=r||tu(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],b=l[5],v=t.split(" "),x=parseFloat(v[0])||0,S=parseFloat(v[1])||0,R,E,C,y;n?l!==ka&&(E=d*m-g*_)&&(C=x*(m/E)+S*(-_/E)+(_*b-m*p)/E,y=x*(-g/E)+S*(d/E)-(d*b-g*p)/E,x=C,S=y):(R=qp(e),x=R.x+(~v[0].indexOf("%")?x/100*R.width:x),S=R.y+(~(v[1]||v[0]).indexOf("%")?S/100*R.height:S)),i||i!==!1&&o.smooth?(p=x-c,b=S-h,o.xOffset=u+(p*d+b*_)-p,o.yOffset=f+(p*g+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Cn]="0px 0px",a&&(hs(a,o,"xOrigin",c,x),hs(a,o,"yOrigin",h,S),hs(a,o,"xOffset",u,o.xOffset),hs(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Ba=function(e,t){var n=e._gsap||new Dp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=zn(e,Cn)||"0",h,u,f,d,g,_,m,p,b,v,x,S,R,E,C,y,M,w,D,L,N,O,k,V,G,te,he,ce,Se,Qe,K,ne;return h=u=f=_=m=p=b=v=x=0,d=g=1,n.svg=!!(e.getCTM&&jp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ct]!=="none"?l[Ct]:"")),i.scale=i.rotate=i.translate="none"),E=tu(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),fh(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,R=n.yOrigin||0,E!==ka&&(w=E[0],D=E[1],L=E[2],N=E[3],h=O=E[4],u=k=E[5],E.length===6?(d=Math.sqrt(w*w+D*D),g=Math.sqrt(N*N+L*L),_=w||D?lr(D,w)*Ds:0,b=L||N?lr(L,N)*Ds+_:0,b&&(g*=Math.abs(Math.cos(b*xr))),n.svg&&(h-=S-(S*w+R*L),u-=R-(S*D+R*N))):(ne=E[6],Qe=E[7],he=E[8],ce=E[9],Se=E[10],K=E[11],h=E[12],u=E[13],f=E[14],C=lr(ne,Se),m=C*Ds,C&&(y=Math.cos(-C),M=Math.sin(-C),V=O*y+he*M,G=k*y+ce*M,te=ne*y+Se*M,he=O*-M+he*y,ce=k*-M+ce*y,Se=ne*-M+Se*y,K=Qe*-M+K*y,O=V,k=G,ne=te),C=lr(-L,Se),p=C*Ds,C&&(y=Math.cos(-C),M=Math.sin(-C),V=w*y-he*M,G=D*y-ce*M,te=L*y-Se*M,K=N*M+K*y,w=V,D=G,L=te),C=lr(D,w),_=C*Ds,C&&(y=Math.cos(C),M=Math.sin(C),V=w*y+D*M,G=O*y+k*M,D=D*y-w*M,k=k*y-O*M,w=V,O=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Nt(Math.sqrt(w*w+D*D+L*L)),g=Nt(Math.sqrt(k*k+ne*ne)),C=lr(O,k),b=Math.abs(C)>2e-4?C*Ds:0,x=K?1/(K<0?-K:K):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Kp(zn(e,Ct)),V&&e.setAttribute("transform",V))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(d*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Nt(d),n.scaleY=Nt(g),n.rotation=Nt(_)+o,n.rotationX=Nt(m)+o,n.rotationY=Nt(p)+o,n.skewX=b+o,n.skewY=v+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Cn]=Ko(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?oS:Xp?$p:aS,n.uncache=0,n},Ko=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yl=function(e,t,n){var i=cn(t);return Nt(parseFloat(t)+parseFloat(_s(e,"x",n+"px",i)))+i},aS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$p(e,t)},As="0deg",Zr="0px",Rs=") ",$p=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,v=n.zOrigin,x="",S=p==="auto"&&e&&e!==1||p===!0;if(v&&(u!==As||h!==As)){var R=parseFloat(h)*xr,E=Math.sin(R),C=Math.cos(R),y;R=parseFloat(u)*xr,y=Math.cos(R),a=Yl(b,a,E*y*-v),o=Yl(b,o,-Math.sin(R)*-v),l=Yl(b,l,C*y*-v+v)}m!==Zr&&(x+="perspective("+m+Rs),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(S||a!==Zr||o!==Zr||l!==Zr)&&(x+=l!==Zr||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Rs),c!==As&&(x+="rotate("+c+Rs),h!==As&&(x+="rotateY("+h+Rs),u!==As&&(x+="rotateX("+u+Rs),(f!==As||d!==As)&&(x+="skew("+f+", "+d+Rs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Rs),b.style[Ct]=x||"translate(0, 0)"},oS=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,v=parseFloat(a),x=parseFloat(o),S,R,E,C,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=xr,c*=xr,S=Math.cos(l)*u,R=Math.sin(l)*u,E=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=xr,y=Math.tan(c-h),y=Math.sqrt(1+y*y),E*=y,C*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),S*=y,R*=y)),S=Nt(S),R=Nt(R),E=Nt(E),C=Nt(C)):(S=u,C=f,R=E=0),(v&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(v=_s(d,"x",a,"px"),x=_s(d,"y",o,"px")),(g||_||m||p)&&(v=Nt(v+g-(g*S+_*E)+m),x=Nt(x+_-(g*R+_*C)+p)),(i||r)&&(y=d.getBBox(),v=Nt(v+i/100*y.width),x=Nt(x+r/100*y.height)),y="matrix("+S+","+R+","+E+","+C+","+v+","+x+")",d.setAttribute("transform",y),b&&(d.style[Ct]=y)},lS=function(e,t,n,i,r){var a=360,o=Jt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ds:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Hf)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Hf)%a-~~(c/a)*a)),e._pt=f=new Rn(e._pt,t,n,i,c,WM),f.e=h,f.u="deg",e._props.push(n),f},Yf=function(e,t){for(var n in t)e[n]=t[n];return e},cS=function(e,t,n){var i=Yf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ct]=t,o=Ba(n,1),gs(n,Ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ct],a[Ct]=t,o=Ba(n,1),a[Ct]=c);for(l in qi)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(d=cn(c),g=cn(h),u=d!==g?_s(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new Rn(e._pt,o,l,u,f-u,ch),e._pt.u=g||0,e._props.push(l));Yf(o,i)};An("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Yo[e>1?"border"+s:s]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return Oi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var Jp={name:"css",register:uh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,b,v,x,S,R,E,C,y;Zh||uh(),this.styles=this.styles||Wp(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(On[_]&&Ip(_,t,n,i,e,r)))){if(d=typeof h,g=Yo[_],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ua(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",ps.lastIndex=0,ps.test(c)||(m=cn(c),p=cn(h),p?m!==p&&(c=_s(e,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Jt(c)&&~c.indexOf("random(")&&(c=Ua(c)),cn(c+"")||c==="auto"||(c+=Gn.units[_]||cn(Oi(e,_))||""),(c+"").charAt(1)==="="&&(c=Oi(e,_))):c=Oi(e,_),f=parseFloat(c),b=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),_ in mi&&(_==="autoAlpha"&&(f===1&&Oi(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),hs(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=mi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in qi,v){if(this.styles.save(_),y=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=zn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=h,h=zn(e,"perspective"),M?e.style.perspective=M:gs(e,"perspective")}u=parseFloat(h)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ba(e,t.parseTransform),R=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new Rn(this._pt,o,Ct,0,1,S.renderTransform,S,0,-1),x.dep=1),_==="scale")this._pt=new Rn(this._pt,S,"scaleY",S.scaleY,(b?br(S.scaleY,b+u):u)-S.scaleY||0,ch),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Cn,0,o[Cn]),h=sS(h),S.svg?fh(e,h,0,R,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&hs(this,S,"zOrigin",S.zOrigin,p),hs(this,o,_,Ko(c),Ko(h)));continue}else if(_==="svgOrigin"){fh(e,h,1,R,0,this);continue}else if(_ in Yp){lS(this,S,_,f,b?br(f,b+h):h);continue}else if(_==="smoothOrigin"){hs(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){cS(this,h,e);continue}}else _ in o||(_=Or(_)||_);if(v||(u||u===0)&&(f||f===0)&&!VM.test(h)&&_ in o)m=(c+"").substr((f+"").length),u||(u=0),p=cn(h)||(_ in Gn.units?Gn.units[_]:m),m!==p&&(f=_s(e,_,c,p)),this._pt=new Rn(this._pt,v?S:o,_,f,(b?br(f,b+u):u)-f,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?jM:ch),this._pt.u=p||0,v&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=qM):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=XM);else if(_ in o)iS.call(this,e,_,c,b?b+h:h);else if(_ in e)this.add(e,_,c||e[_],b?b+h:h,i,r);else if(_!=="parseTransform"){Gh(_,h);continue}v||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}E&&Bp(this)},render:function(e,t){if(t.tween._time||!Qh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Oi,aliases:mi,getSetter:function(e,t,n){var i=mi[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==Cn&&(e._gsap.x||Oi(e,"x"))?n&&zf===n?t==="scale"?JM:$M:(zf=n||{})&&(t==="scale"?ZM:QM):e.style&&!Bh(e.style[t])?YM:~t.indexOf("-")?KM:$h(e,t)},core:{_removeProperty:gs,_getMatrix:tu}};Pn.utils.checkPrefix=Or;Pn.core.getStyleSaver=Wp;(function(s,e,t,n){var i=An(s+","+e+","+t,function(r){qi[r]=1});An(e,function(r){Gn.units[r]="deg",Yp[r]=1}),mi[i[13]]=s+","+e,An(n,function(r){var a=r.split(":");mi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Gn.units[s]="px"});Pn.registerPlugin(Jp);var Ht=Pn.registerPlugin(Jp)||Pn;Ht.core.Tween;var Kf="1.3.27";function Zp(s,e,t){return Math.max(s,Math.min(e,t))}function hS(s,e,t){return(1-t)*s+t*e}function uS(s,e,t,n){return hS(s,e,1-Math.exp(-t*n))}function fS(s,e){return(s%e+e)%e}var dS=class{constructor(){we(this,"isRunning",!1);we(this,"value",0);we(this,"from",0);we(this,"to",0);we(this,"currentTime",0);we(this,"lerp");we(this,"duration");we(this,"easing");we(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const n=Zp(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=uS(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:i,onStart:r,onUpdate:a}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=a}};function pS(s,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,n)},e)}}var mS=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){we(this,"width",0);we(this,"height",0);we(this,"scrollHeight",0);we(this,"scrollWidth",0);we(this,"debouncedResize");we(this,"wrapperResizeObserver");we(this,"contentResizeObserver");we(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});we(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});we(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=pS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Qp=class{constructor(){we(this,"events",{})}emit(s,...e){var n;const t=this.events[s]||[];for(let i=0,r=t.length;i<r;i++)(n=t[i])==null||n.call(t,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(n=>e!==n)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const gS=100/6,ts={passive:!1};function $f(s,e){return s===1?gS:s===2?e:1}var _S=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){we(this,"touchStart",{x:0,y:0});we(this,"lastDelta",{x:0,y:0});we(this,"window",{width:0,height:0});we(this,"emitter",new Qp);we(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});we(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});we(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});we(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s;const i=$f(n,this.window.width),r=$f(n,this.window.height);e*=i,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});we(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ts),this.element.addEventListener("touchstart",this.onTouchStart,ts),this.element.addEventListener("touchmove",this.onTouchMove,ts),this.element.addEventListener("touchend",this.onTouchEnd,ts)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ts),this.element.removeEventListener("touchstart",this.onTouchStart,ts),this.element.removeEventListener("touchmove",this.onTouchMove,ts),this.element.removeEventListener("touchend",this.onTouchEnd,ts)}};const Jf=s=>Math.min(1,1.001-2**(-10*s));var bS=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f=u==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:b=!0,autoRaf:v=!1,anchors:x=!1,autoToggle:S=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:C=E,stopInertiaOnNavigate:y=!1,respectReducedMotion:M=!0}={}){we(this,"_isScrolling",!1);we(this,"_isStopped",!1);we(this,"_isLocked",!1);we(this,"_preventNextNativeScrollEvent",!1);we(this,"_resetVelocityTimeout",null);we(this,"_rafId",null);we(this,"_isDraggingSelection",!1);we(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));we(this,"isTouching");we(this,"isIos");we(this,"time",0);we(this,"userData",{});we(this,"lastVelocity",0);we(this,"velocity",0);we(this,"direction",0);we(this,"options");we(this,"targetScroll");we(this,"animatedScroll");we(this,"animate",new dS);we(this,"emitter",new Qp);we(this,"dimensions");we(this,"virtualScroll");we(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});we(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});we(this,"onTransitionEnd",s=>{var e;(e=s.propertyName)!=null&&e.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});we(this,"onClick",s=>{const e=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});we(this,"onPointerDown",s=>{s.button===1&&this.reset()});we(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var _,m,p,b,v;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||h==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||h==="horizontal"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-horizontal"))||i&&((b=g.hasAttribute)==null?void 0:b.call(g,"data-lenis-prevent-touch"))||r&&((v=g.hasAttribute)==null?void 0:v.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=t;this.options.gestureOrientation==="both"?u=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(u=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});we(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});we(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Kf,window.lenis||(window.lenis={}),window.lenis.version=Kf,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof o=="number"&&typeof l!="function"?l=Jf:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:b,autoRaf:v,anchors:x,autoToggle:S,allowNestedScroll:R,naiveDimensions:C,stopInertiaOnNavigate:y,respectReducedMotion:M},this.dimensions=new mS(s,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new _S(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],r=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if(this.prefersReducedMotion&&(i?t=!0:(r=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let g=null;if(typeof f=="string"?(g=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),g||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(g=f),g){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),b=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(v)?0:v)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=f-this.animatedScroll;g>this.limit/2?f-=this.limit:g<-this.limit/2&&(f+=this.limit)}}else f=Zp(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=Jf:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const n=Date.now();s._lenis||(s._lenis={});const i=s._lenis;let r,a,o,l,c,h,u,f,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();const R=window.getComputedStyle(s);if(i.computedStyle=R,r=["auto","overlay","scroll"].includes(R.overflowX),a=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),h=["auto"].includes(R.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=a,!(r||a))return!1;u=s.scrollWidth,f=s.scrollHeight,d=s.clientWidth,g=s.clientHeight,o=u>d,l=f>g,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else o=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,a=i.hasOverflowY,u=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,b,v,x,S;if(_==="horizontal")m=Math.round(s.scrollLeft),p=u-d,b=e,v=r,x=o,S=c;else if(_==="vertical")m=Math.round(s.scrollTop),p=f-g,b=t,v=a,x=l,S=h;else return!1;return!S&&(m>=p||m<=0)?!0:(b>0?m<p:m>0)&&v&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?fS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};const em={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vS=new Gs(-1,1,1,-1,0,1);class xS extends dn{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}}const yS=new xS;class tm{constructor(e){this._mesh=new st(yS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nm extends Wa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Aa.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zf extends Wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class MS extends Wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class SS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nm(em),this.copyPass.material.blending=zi,this.clock=new Ny}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zf!==void 0&&(a instanceof Zf?n=!0:a instanceof MS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wS extends Wa{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const TS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Fr extends Wa{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,a,{type:Hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new nn(r,a,{type:Hn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new nn(r,a,{type:Hn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=TS;this.highPassUniforms=Aa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=em;this.copyUniforms=Aa.clone(h.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Oo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new Gt,this.fsQuad=new tm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Fr.BlurDirectionX=new oe(1,0);Fr.BlurDirectionY=new oe(0,1);const en=[{id:"ferrari",number:"01",roomIndex:0,title:"Ferrari 458 Spider",short:"the 458",origin:"Maranello, 2012",engine:"4.5 litre V8, 570 PS",paintName:"Rosso Corsa",line:"The last mid-engine V8 Ferrari built without turbos. Four and a half litres, nine thousand rpm, and the roof folds away in fourteen seconds.",city:"Monaco",rates:{day:2400,three:6500,week:14e3,month:42e3},deposit:15e3,kmPerDay:200,extraKm:5,minAge:25,licenceYears:3,reservedUntil:null,condition:["Factory paint. One chip on the nose, touched in.","A 2 cm kerb mark on this rim, recorded.","Roof folds in fourteen seconds. New seals in 2025.","Exhausts and diffuser clean. No marks."],room:{wall:9134919},glbUrl:"/veloce-prive/models-c2v3/ferrari.glb",rotY:0,targetLength:4.534,rideHeightOffset:-.014,paintHex:7602180,paintRoughness:.3,paintMetalness:.24,caliperHex:13934615,leatherHex:8933158},{id:"porsche",number:"02",roomIndex:1,title:"Porsche 911 GT3",short:"the GT3",origin:"Stuttgart, 2018",engine:"4.0 litre flat six, 500 PS",paintName:"GT Silver",line:"A four-litre flat six with no turbos, built to rev to nine thousand. The quietest car in the collection until it isn’t.",city:"Geneva",rates:{day:2100,three:5700,week:12200,month:36500},deposit:12e3,kmPerDay:200,extraKm:5,minAge:25,licenceYears:3,reservedUntil:null,condition:["Clear film over the nose and mirrors.","Centre-lock wheels, torqued at the last service.","Bucket seats, leather fed in October.","Rear wing and vents unmarked."],room:{wall:9342086,pattern:"boards",ink:!0},glbUrl:"/veloce-prive/models-c2v3/porsche.glb",rotY:Math.PI,straightenFrontWheels:!0,targetLength:4.52,rideHeightOffset:0,paintHex:10134445,paintRoughness:.2,paintMetalness:.72,caliperHex:12850716,leatherHex:1842206},{id:"lamborghini",number:"03",roomIndex:2,title:"Lamborghini Aventador LP 700-4",short:"the Aventador",origin:"Sant’Agata Bolognese, 2012",engine:"6.5 litre V12, 700 PS",paintName:"Verde Ithaca",line:"Six and a half litres and twelve cylinders, mounted behind your shoulders. The doors open upwards, so mind the ceiling in hotel garages.",city:"Milan",rates:{day:3400,three:9200,week:19800,month:59e3},deposit:25e3,kmPerDay:200,extraKm:8,minAge:25,licenceYears:3,reservedUntil:null,condition:["Nose lift works. Use it on every ramp.","Carbon-ceramic brakes, 40% worn.","Roof lining in Alcantara, no wear.","Faint heat marks at the exhausts, normal."],room:{wall:3947063,pattern:"hex"},glbUrl:"/veloce-prive/models-c2v3/aventador.glb",rotY:-Math.PI/2,targetLength:4.78,rideHeightOffset:0,paintHex:3111436,paintRoughness:.24,paintMetalness:.45,caliperHex:1973790,leatherHex:1710360},{id:"gallardo",number:"04",roomIndex:3,title:"Lamborghini Gallardo LP 560-4",short:"the Gallardo",origin:"Sant’Agata Bolognese, 2010",engine:"5.2 litre V10, 560 PS",paintName:"Giallo Midas",line:"Five point two litres of V10 behind your back and all four wheels driven. The smaller Lamborghini, and the one people actually drove.",city:"Monaco",rates:{day:1900,three:5100,week:11e3,month:33e3},deposit:12e3,kmPerDay:200,extraKm:5,minAge:25,licenceYears:3,reservedUntil:null,condition:["Bonnet repainted in 2019, matched to the car.","Original Callisto wheels, refinished.","Six-speed manual in the open gate. A rare one.","Engine cover glass clear. Tips polished."],room:{wall:5920336,pattern:"ashlar"},glbUrl:"/veloce-prive/models-c2v3/lamborghini.glb",rotY:Math.PI,targetLength:4.345,rideHeightOffset:0,paintHex:16762368,paintRoughness:.2,paintMetalness:.2,caliperHex:1973790,leatherHex:1710360},{id:"mclaren",number:"05",roomIndex:4,title:"McLaren Senna",short:"the Senna",origin:"Woking, 2018",engine:"4.0 litre twin-turbo V8, 800 PS",paintName:"Silica White",run:"One of 500",line:"Eight hundred PS from a twin-turbo V8 and glass in the lower doors, so you watch the road pass beside your knees.",city:"Dubai",rates:{day:4200,three:11300,week:24500,month:null},deposit:4e4,kmPerDay:150,extraKm:12,minAge:30,licenceYears:5,reservedUntil:null,condition:["Two light scrapes under the splitter, recorded.","Track tyres, 70% left. Cold, they slide.","Glass in both doors, no cracks.","The wing moves under braking. Checked weekly."],room:{wall:12368307,pattern:"smooth",ink:!0},glbUrl:"/veloce-prive/models-c2v3/mclaren-senna.glb",rotY:Math.PI,targetLength:4.64,rideHeightOffset:0,paintHex:13684424,paintRoughness:.26,paintMetalness:.05,caliperHex:2369580,leatherHex:1710620},{id:"bugatti",number:"06",roomIndex:5,title:"Bugatti Chiron Pur Sport",short:"the Chiron",origin:"Molsheim, 2020",engine:"8.0 litre W16, 1,500 PS",paintName:"French Racing Blue",run:"One of 60",line:"Eight litres, sixteen cylinders, four turbos, fifteen hundred PS. Sixty were made. This one has done eleven thousand kilometres.",city:"Miami",rates:{day:5800,three:15600,week:33800,month:null},deposit:1e5,kmPerDay:150,extraKm:25,minAge:30,licenceYears:5,reservedUntil:"2026-11-14",condition:["Horseshoe grille free of stone marks.","New tyres at 10,000 km.","Leather and carbon, as delivered.","Light bar whole. Exhaust clean."],room:{wall:4937059,pattern:"dado"},glbUrl:"/veloce-prive/models-c2v3/bugatti.glb",rotY:Math.PI,straightenFrontWheels:!0,targetLength:4.56,rideHeightOffset:0,paintHex:735364,paintRoughness:.22,paintMetalness:.52,caliperHex:2106408,leatherHex:1907739}],ES=["Monaco","Geneva","Milan","Dubai","Miami"],Qf=new Set(["Monaco","Geneva","Milan"]);function AS(s,e){return!s||e===s.city?"":Qf.has(s.city)&&Qf.has(e)?`Kept in ${s.city}: allow two days to bring it to ${e}.`:`Kept in ${s.city}: allow ten days to bring it to ${e}.`}function on(s){return`€${Math.round(s).toLocaleString("en-GB")}`}function RS(s,e){const t=[[1,s.rates.day],[3,s.rates.three],[7,s.rates.week]];s.rates.month&&t.push([28,s.rates.month]);const n=new Array(e+1).fill(1/0);n[0]=0;for(let i=1;i<=e;i++)for(const[r,a]of t)n[i]=Math.min(n[i],n[Math.max(0,i-r)]+a);return n[e]}function ed(s,e){if(e===Vm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Hc||e===Ed){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Hc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class CS extends Ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new YS(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=_a.extractUrlBase(e);a=_a.resolveURL(c,this.path)}else a=_a.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Go(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===im){try{a[Ze.KHR_BINARY_GLTF]=new KS(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new DS;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new $S(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new JS;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new ZS;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function PS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LS{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],fn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dy(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Py(h),c.distance=u;break;case"spot":c=new Ry(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class DS{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],fn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}}class IS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class NS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(o,o)}return Promise.all(r)}}class US{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class OS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class FS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],fn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,St)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class kS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class BS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(o[0],o[1],o[2],fn),Promise.all(r)}}class zS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class HS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(o[0],o[1],o[2],fn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,St)),Promise.all(r)}}class GS{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class VS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class WS{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class XS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jS{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class YS{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Yn.TRIANGLES&&c.mode!==Yn.TRIANGLE_STRIP&&c.mode!==Yn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const g of u){const _=new Pe,m=new I,p=new bs,b=new I(1,1,1),v=new Ix(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,p,b));for(const x in l)if(x==="_COLOR_0"){const S=l[x];v.instanceColor=new Xc(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Pt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const im="glTF",Qr=12,td={JSON:1313821514,BIN:5130562};class KS{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qr,r=new DataView(e,Qr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===td.JSON){const c=new Uint8Array(e,Qr+a,o);this.content=n.decode(c)}else if(l===td.BIN){const c=Qr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $S{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=dh[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=dh[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=yr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(d)},o,c,fn,f)})})}}class JS{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ZS{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class sm extends Ga{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,b=1-m,v=p-f+u;for(let x=0;x!==o;x++){const S=a[_+x+o],R=a[_+x+l]*h,E=a[g+x+o],C=a[g+x]*h;r[x]=b*S+v*R+m*E+p*C}return r}}const QS=new bs;class ew extends sm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return QS.fromArray(r).normalize().toArray(r),r}}const Yn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nd={9728:xn,9729:_n,9984:gd,9985:To,9986:sa,9987:Kn},id={33071:ki,33648:Fo,10497:Vi},Kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tw={CUBICSPLINE:void 0,LINEAR:Ta,STEP:wa},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new fs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),s.DefaultMaterial}function Cs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ui(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iw(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function sw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rw(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jl(t.attributes):e=s.indices+":"+Jl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jl(s.targets[n]);return e}function Jl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ph(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ow=new Pe;class lw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Ey(this.options.manager):this.textureLoader=new Iy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Go(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Cs(r,o,i),Ui(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(_a.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Kl[i.type],o=yr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new $t(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Kl[i.type],c=yr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==u){const p=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(b);v||(_=new c(o,p*d,i.count*d/h),v=new Rx(_,d/h),t.cache.add(b,v)),m=new Rh(v,l,f%d/h,g)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),m=new $t(_,l,g);if(i.sparse!==void 0){const p=Kl.SCALAR,b=yr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,S=new b(a[1],v,i.sparse.count*p),R=new c(a[2],x,i.sparse.count*l);o!==null&&(m=new $t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=S.length;E<C;E++){const y=S[E];if(m.setX(y,R[E*l]),l>=2&&m.setY(y,R[E*l+1]),l>=3&&m.setZ(y,R[E*l+2]),l>=4&&m.setW(y,R[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=nd[f.magFilter]||_n,h.minFilter=nd[f.minFilter]||Kn,h.wrapS=id[f.wrapS]||Vi,h.wrapT=id[f.wrapT]||Vi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==xn&&h.minFilter!==_n,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Vt(_);m.needsUpdate=!0,f(m)}),t.load(_a.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ui(u,a),u.userData.mimeType=a.mimeType||aw(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new qd,gi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xd,gi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new ve(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],fn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,St)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Sn);const h=r.alphaMode||$l.OPAQUE;if(h===$l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$l.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Gt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Gt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Gt){const u=r.emissiveFactor;o.emissive=new ve().setRGB(u[0],u[1],u[2],fn)}return r.emissiveTexture!==void 0&&a!==Gt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Ui(u,r),t.associations.set(u,{materials:e}),r.extensions&&Cs(i,u,r),u})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return sd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=rw(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=sd(new dn,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?nw(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const _=h[d],m=a[d];let p;const b=c[d];if(m.mode===Yn.TRIANGLES||m.mode===Yn.TRIANGLE_STRIP||m.mode===Yn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Px(_,b):new st(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Yn.TRIANGLE_STRIP?p.geometry=ed(p.geometry,Ed):m.mode===Yn.TRIANGLE_FAN&&(p.geometry=ed(p.geometry,Hc));else if(m.mode===Yn.LINES)p=new Nx(_,b);else if(m.mode===Yn.LINE_STRIP)p=new Ph(_,b);else if(m.mode===Yn.LINE_LOOP)p=new Ux(_,b);else if(m.mode===Yn.POINTS)p=new Ox(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&sw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ui(p,r),m.extensions&&Cs(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Cs(i,u[0],r),u[0];const f=new tn;r.extensions&&Cs(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(nt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Gs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ui(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new Pe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ch(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let b=0,v=f.length;b<v;b++){const x=f[b],S=d[b],R=g[b],E=_[b],C=m[b];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,S,R,E,C);if(y)for(let M=0;M<y.length;M++)p.push(y[M])}return new vy(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ow)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Wd:c.length>1?h=new tn:c.length===1?h=c[0]:h=new Pt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ui(h,r),r.extensions&&Cs(n,h,r),r.matrix!==void 0){const u=new Pe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new tn;n.name&&(r.name=i.createUniqueName(n.name)),Ui(r,n),n.extensions&&Cs(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof gi||f instanceof Vt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ns[r.path]===ns.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(ns[r.path]){case ns.weights:c=Cr;break;case ns.rotation:c=Pr;break;case ns.position:case ns.scale:c=Lr;break;default:switch(n.itemSize){case 1:c=Cr;break;case 2:case 3:default:c=Lr;break}break}const h=i.interpolation!==void 0?tw[i.interpolation]:Ta,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ns[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ph(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Pr?ew:sm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cw(s,e,t){const n=e.attributes,i=new hn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=ph(yr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=ph(yr[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new vi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function sd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=dh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return it.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Ui(s,e),cw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iw(s,e.targets,t):s})}const Zl=new WeakMap;class hw extends Ws{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Go(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,St,n).catch(n)}decodeDracoFile(e,t,n,i,r=fn,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Zl.has(e)){const l=Zl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Zl.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new dn;e.index&&t.setIndex(new $t(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,l=new $t(a,o);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==St)return;const n=new ve;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),it.toWorkingColorSpace(n,St),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Go(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=uw.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function uw(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,f=new u.Decoder;try{const d=t(u,f,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{u.destroy(f)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let f,d;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)f=new a.Mesh,d=o.DecodeArrayToMesh(l,l.byteLength,f);else if(g===a.POINT_CLOUD)f=new a.PointCloud,d=o.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let b,v;if(c.useUniqueIDs)v=h[m],b=o.GetAttributeByUniqueId(f,v);else{if(v=o.GetAttributeId(f,a[h[m]]),v===-1)continue;b=o.GetAttribute(f,v)}const x=i(a,o,f,m,p,b);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,f)),a.destroy(f),_}function n(a,o,l){const h=l.num_faces()*3,u=h*4,f=a._malloc(u);o.GetTrianglesUInt32Array(l,u,f);const d=new Uint32Array(a.HEAPF32.buffer,f,h).slice();return a._free(f),{array:d,itemSize:1}}function i(a,o,l,c,h,u){const f=u.num_components(),g=l.num_points()*f,_=g*h.BYTES_PER_ELEMENT,m=r(a,h),p=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,u,m,_,p);const b=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:c,array:b,itemSize:f}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var fw=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),v=0;v<p.length;++v){var x=p.charCodeAt(v);b[v]=x>96?x-97:x>64?x-39:x+4}for(var S=0,v=0;v<p.length;++v)b[S++]=b[v]<60?n[b[v]]:(b[v]-60)*64+b[++v];return b.buffer.slice(0,S)}function l(p,b,v,x,S,R){var E=r.exports.sbrk,C=v+3&-4,y=E(C*x),M=E(S.length),w=new Uint8Array(r.exports.memory.buffer);w.set(S,M);var D=p(y,v,x,M,S.length);if(D==0&&R&&R(y,C,x),b.set(w.subarray(y,y+v*x)),E(y-E(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(v){var x=v.data;b.pending-=x.count,b.requests[x.id][x.action](x.value),delete b.requests[x.id]},b}function g(p){for(var b="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),v=new Blob([b],{type:"text/javascript"}),x=URL.createObjectURL(v),S=0;S<p;++S)u[S]=d(x);URL.revokeObjectURL(x)}function _(p,b,v,x,S){for(var R=u[0],E=1;E<u.length;++E)u[E].pending<R.pending&&(R=u[E]);return new Promise(function(C,y){var M=new Uint8Array(v),w=f++;R.pending+=p,R.requests[w]={resolve:C,reject:y},R.object.postMessage({id:w,count:p,size:b,source:M,mode:x,filter:S},[M.buffer])})}function m(p){a.then(function(){var b=p.data;try{var v=new Uint8Array(b.count*b.size);l(r.exports[b.mode],v,b.count,b.size,b.source,r.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:v},[v.buffer])}catch(x){self.postMessage({id:b.id,count:b.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,b,v,x,S){l(r.exports.meshopt_decodeVertexBuffer,p,b,v,x,r.exports[c[S]])},decodeIndexBuffer:function(p,b,v,x){l(r.exports.meshopt_decodeIndexBuffer,p,b,v,x)},decodeIndexSequence:function(p,b,v,x){l(r.exports.meshopt_decodeIndexSequence,p,b,v,x)},decodeGltfBuffer:function(p,b,v,x,S,R){l(r.exports[h[S]],p,b,v,x,r.exports[c[R]])},decodeGltfBufferAsync:function(p,b,v,x,S){return u.length>0?_(p,b,v,h[x],c[S]):a.then(function(){var R=new Uint8Array(p*b);return l(r.exports[h[x]],R,p,b,v,r.exports[c[S]]),R})}}}();let Ql=null;function dw(){if(Ql)return Ql;const s=512,e=256,t=document.createElement("canvas");t.width=s,t.height=e;const n=t.getContext("2d");n.fillStyle="#808080",n.fillRect(0,0,s,e),[.33,.44,.56,.67].forEach(a=>{const o=a*e,l=5,c=n.createLinearGradient(0,o-l,0,o+l);c.addColorStop(0,"#808080"),c.addColorStop(.5,"#202020"),c.addColorStop(1,"#808080"),n.fillStyle=c,n.fillRect(0,o-l,s,l*2)});const r=new el(t);return r.wrapS=Vi,r.wrapT=ki,r.repeat.set(8,1),r.needsUpdate=!0,Ql=r,r}function ec(s,e){const t=s.attributes.position,n=s.attributes.normal,i=s.attributes.uv,r=s.index,a=t.count,o=r?r.count/3:a/3,l=new Map,c=new Int32Array(a);for(let m=0;m<a;m++){const p=Math.round(t.getX(m)*2500),b=Math.round(t.getY(m)*2500),v=Math.round(t.getZ(m)*2500),x=`${p},${b},${v}`;let S=l.get(x);S===void 0&&(S=m,l.set(x,S)),c[m]=S}const h=new Int32Array(a);for(let m=0;m<a;m++)h[m]=m;function u(m){let p=m;for(;h[p]!==p;)p=h[p];let b=m;for(;b!==p;){const v=h[b];h[b]=p,b=v}return p}function f(m,p){const b=u(m),v=u(p);b!==v&&(h[v]=b)}for(let m=0;m<o;m++){const p=r?r.getX(m*3):m*3,b=r?r.getX(m*3+1):m*3+1,v=r?r.getX(m*3+2):m*3+2;f(c[p],c[b]),f(c[p],c[v])}const d=new Map;for(let m=0;m<o;m++){const p=r?r.getX(m*3):m*3,b=r?r.getX(m*3+1):m*3+1,v=r?r.getX(m*3+2):m*3+2,x=u(c[p]);let S=d.get(x);S||(S={sumX:0,sumY:0,sumZ:0,count:0,tris:[]},d.set(x,S));const R=(t.getX(p)+t.getX(b)+t.getX(v))/3,E=(t.getY(p)+t.getY(b)+t.getY(v))/3,C=(t.getZ(p)+t.getZ(b)+t.getZ(v))/3;S.sumX+=R,S.sumY+=E,S.sumZ+=C,S.count+=1,S.tris.push(p,b,v)}const g=new Map;for(const m of d.values()){const p=m.sumX/m.count,b=m.sumY/m.count,v=m.sumZ/m.count,x=e(p,b,v,m.count);g.has(x)||g.set(x,[]);const S=g.get(x);for(let R=0;R<m.tris.length;R++)S.push(m.tris[R])}const _=new Map;for(const[m,p]of g.entries()){const b=new Map,v=[],x=[],S=[],R=[];for(let C=0;C<p.length;C++){const y=p[C];let M=b.get(y);M===void 0&&(M=v.length/3,b.set(y,M),v.push(t.getX(y),t.getY(y),t.getZ(y)),n&&x.push(n.getX(y),n.getY(y),n.getZ(y)),i&&S.push(i.getX(y),i.getY(y))),R.push(M)}const E=new dn;E.setAttribute("position",new Lt(v,3)),x.length>0?E.setAttribute("normal",new Lt(x,3)):E.computeVertexNormals(),S.length>0&&E.setAttribute("uv",new Lt(S,2)),E.setIndex(R),_.set(m,E)}return _}function pw(s,e,t){return t>-.75&&t<-.15&&Math.abs(s)>.86&&e>.74?s<0?"body_mirror_l":"body_mirror_r":t<-1.68?"body_front_bumper":t<-.72&&Math.abs(s)<.56?"body_hood":t<-.58&&Math.abs(s)>=.45?s<0?"body_fender_fl":"body_fender_fr":t>=-.75&&t<=.65&&Math.abs(s)<.56&&e>.82?"body_roof":t>=-.62&&t<=.68&&Math.abs(s)>=.45?s<0?"body_door_l":"body_door_r":t>.62&&t<=1.82&&Math.abs(s)<.58&&e>.68?"body_engine_cover":t>.68&&t<=1.88&&Math.abs(s)>=.48?s<0?"body_quarter_rl":"body_quarter_rr":t>1.45?"body_rear_bumper":t<-.6?"body_hood":t>.65?"body_engine_cover":s<0?"body_door_l":"body_door_r"}function rm(s,e,t,n,i=290){if(!e)return;const r=e.attributes.position,a=e.index;if(!r||!a)return;const o=.00156,l=.84001,c=i/.09871;s.save(),s.fillStyle="#07080a",s.strokeStyle="#07080a",s.lineWidth=.9,s.beginPath();const h=a.count/3;for(let u=0;u<h;u++){const f=a.getX(u*3),d=r.getX(f),g=r.getY(f),_=r.getZ(f);if(Math.abs(d)<.05&&g>.78&&g<.9&&_>2.15&&_<2.22){const m=a.getX(u*3+1),p=a.getX(u*3+2),b=t+(d-o)*c,v=n-(g-l)*c,x=t+(r.getX(m)-o)*c,S=n-(r.getY(m)-l)*c,R=t+(r.getX(p)-o)*c,E=n-(r.getY(p)-l)*c;s.moveTo(b,v),s.lineTo(x,S),s.lineTo(R,E),s.closePath()}}s.fill(),s.stroke(),s.restore()}function mw(s){const e=document.createElement("canvas");e.width=512,e.height=640;const t=e.getContext("2d"),n=t.createRadialGradient(256,300,30,256,320,360);n.addColorStop(0,"#ffe01b"),n.addColorStop(.7,"#f5be00"),n.addColorStop(1,"#d99e00"),t.fillStyle=n,t.fillRect(0,0,512,640),t.fillStyle="#009246",t.fillRect(24,18,464,24),t.fillStyle="#ffffff",t.fillRect(24,42,464,24),t.fillStyle="#ce2b37",t.fillRect(24,66,464,24),t.strokeStyle="#0a0c10",t.lineWidth=4,t.strokeRect(24,18,464,72),rm(t,s,256,336,365),t.fillStyle="#07080a",t.font="700 68px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText("S",112,456),t.fillText("F",400,456),t.strokeStyle="#0a0c10",t.lineWidth=10,t.strokeRect(18,14,476,612);const i=new el(e);return i.colorSpace=St,i.needsUpdate=!0,i}function gw(s){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256;t.fillStyle="#b4c0ce",t.fillRect(0,0,512,512),t.beginPath(),t.arc(n,i,176,0,Math.PI*2),t.fillStyle="#222832",t.fill(),t.beginPath(),t.arc(n,i,168,0,Math.PI*2),t.fillStyle="#dce6f2",t.fill(),t.beginPath(),t.arc(n,i,156,0,Math.PI*2);const r=t.createRadialGradient(n-20,i-20,12,n,i,156);r.addColorStop(0,"#ffe42b"),r.addColorStop(.75,"#f5bc00"),r.addColorStop(1,"#c99200"),t.fillStyle=r,t.fill(),rm(t,s,n,i-4,210);const a=new el(e);return a.colorSpace=St,a.needsUpdate=!0,a}function rd(s,e,t=!1){s.computeBoundingBox();const n=s.boundingBox,i=s.attributes.position,r=new Float32Array(i.count*2),a=Math.max(1e-4,n.max.x-n.min.x),o=Math.max(1e-4,n.max.y-n.min.y),l=Math.max(1e-4,n.max.z-n.min.z);for(let c=0;c<i.count;c++){const h=i.getX(c),u=i.getY(c),f=i.getZ(c);if(e==="nose")r[c*2]=(h-n.min.x)/a,r[c*2+1]=1-(f-n.min.z)/l;else{const d=(f-n.min.z)/l;r[c*2]=t?1-d:d,r[c*2+1]=(u-n.min.y)/o}}s.setAttribute("uv",new $t(r,2))}function ad(s){const e=(s||"").toLowerCase();return e.includes("wheel_")?e.includes("brake")?{category:"brake",isWheel:!1,isAxlePart:!0}:e.includes("tire")?{category:"tire",isWheel:!0,isAxlePart:!0}:e.includes("centre")?{category:"wheel_cap",isWheel:!0,isAxlePart:!0}:{category:"wheel",isWheel:!0,isAxlePart:!0}:e.startsWith("body")?{category:"body",isWheel:!1}:e.startsWith("glass")||e==="glass"?{category:"glass",isWheel:!1}:e.startsWith("badge_")?{category:"scuderia_shield",isWheel:!1}:e==="lights"||e==="leds"?{category:"light_front",isWheel:!1}:e==="brakes"||e.includes("lights_red")||e.includes("taillight")||e.includes("rear_fog")?{category:"light_rear",isWheel:!1}:e.includes("carbon")||e.includes("grill")||e.includes("splitter")||e.includes("diffuser")?{category:"carbon",isWheel:!1}:e==="metal"?{category:"engine",isWheel:!1}:e==="chrome"?{category:"chrome",isWheel:!1}:e.includes("seat")||e.includes("leather")?{category:"leather",isWheel:!1}:{category:"interior",isWheel:!1}}function _w(s){const e=/tyre|tire|side_?wall|rim|logo|steel|brake|disk|disc|clipper|caliper/i,t=/tyre|tire|rubber/i,n=[];s.traverse(l=>{if(!l.isMesh)return;const c=[].concat(l.material).map(u=>(u==null?void 0:u.name)||"").join(" "),h=new hn().setFromObject(l);n.push({o:l,names:c,centre:h.getCenter(new I),size:h.getSize(new I)})});const i=new I,r=(l,c=0,h=0)=>{const u=l.geometry.attributes.position;let f=0,d=0,g=0,_=0,m=0,p=0;for(let C=0;C<u.count;C++)i.fromBufferAttribute(u,C).applyMatrix4(l.matrixWorld),!(c&&Math.sign(i.x-h)!==c)&&(f++,d+=i.x,g+=i.z,_+=i.x*i.x,m+=i.z*i.z,p+=i.x*i.z);const[b,v]=[d/f,g/f],[x,S,R]=[_/f-b*b,m/f-v*v,p/f-b*v];let E=.5*Math.atan2(2*R,x-S)+Math.PI/2;return E=Math.atan2(Math.sin(E),Math.cos(E)),E>Math.PI/2&&(E-=Math.PI),E<=-Math.PI/2&&(E+=Math.PI),{axle:E,x:b,z:v}},a=(l,c,h)=>new Pe().makeTranslation(l,0,c).multiply(new Pe().makeRotationY(h)).multiply(new Pe().makeTranslation(-l,0,-c)),o=l=>Math.abs(l)<nt.degToRad(2);for(const l of n.filter(c=>t.test(c.names))){if(l.size.x<.8){const{axle:h,x:u,z:f}=r(l.o);if(o(h))continue;const d=a(u,f,h);for(const g of n)!e.test(g.names)||g.size.x>.8||Math.hypot(g.centre.x-u,g.centre.z-f)>.5||g.o.geometry.applyMatrix4(g.o.matrixWorld.clone().invert().multiply(d).multiply(g.o.matrixWorld));continue}const c=n.filter(h=>Math.abs(h.centre.z-l.centre.z)<.2&&h.size.z<.95&&h.centre.y<.6&&h.size.y<.8);for(const h of[-1,1]){const{axle:u,x:f,z:d}=r(l.o,h,l.centre.x);if(o(u))continue;const g=a(f,d,u);for(const _ of c){const m=_.o.matrixWorld,p=m.clone().invert().multiply(g).multiply(m),b=new Xe().getNormalMatrix(p),v=_.o.geometry.attributes.position,x=_.o.geometry.attributes.normal;for(let S=0;S<v.count;S++)i.fromBufferAttribute(v,S).applyMatrix4(m),Math.sign(i.x-l.centre.x)===h&&(i.fromBufferAttribute(v,S).applyMatrix4(p),v.setXYZ(S,i.x,i.y,i.z),x&&(i.fromBufferAttribute(x,S).applyMatrix3(b).normalize(),x.setXYZ(S,i.x,i.y,i.z)));v.needsUpdate=!0,x&&(x.needsUpdate=!0),_.o.geometry.computeBoundingBox(),_.o.geometry.computeBoundingSphere()}}}}class bw{constructor(){this.cache=new Map,this.dracoLoader=new hw,this.dracoLoader.setDecoderPath("/veloce-prive/draco/gltf/"),this.gltfLoader=new CS,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.gltfLoader.setMeshoptDecoder(fw)}_recordBaseEnv(e){e.traverse(t=>{if(!t.isMesh||!t.material)return;const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)i.userData.baseEnv===void 0&&(i.userData.baseEnv=i.envMapIntensity??1)})}setLightLevel(e,t){e.root.traverse(n=>{if(!n.isMesh||!n.material)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r.userData.baseEnv!==void 0&&(r.envMapIntensity=r.userData.baseEnv*t)})}async loadCar(e,t=null){if(this.cache.has(e.id)){const r=this.cache.get(e.id);return t&&this.applyEnvMap(r.root,t),r}const n=await new Promise((r,a)=>{this.gltfLoader.load(e.glbUrl,o=>r(o),void 0,o=>a(o))}),i=e.id==="ferrari"?this._buildFerrariBundle(n.scene,e,t):this._buildNativeCarBundle(n.scene,e,t);return this._recordBaseEnv(i.root),this.cache.set(e.id,i),i}applyEnvMap(e,t){e.traverse(n=>{if(!n.isMesh||!n.material)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)"envMap"in r&&(r.envMap=t,r.needsUpdate=!0)})}_buildFerrariBundle(e,t,n){e.updateMatrixWorld(!0);const i=new Pe().makeRotationY(t.rotY||0),r=new hn,a=new I;e.traverse(w=>{if(!w.isMesh||!w.geometry)return;const D=w.geometry.attributes.position;if(!D)return;const L=new Pe().multiplyMatrices(i,w.matrixWorld),N=Math.max(1,Math.floor(D.count/600));for(let O=0;O<D.count;O+=N)a.fromBufferAttribute(D,O).applyMatrix4(L),r.expandByPoint(a)});const o=r.getSize(new I),l=Math.max(.1,o.z),c=(t.targetLength||4.534)/l,h=new Pe().makeScale(c,c,c),u=new Pe().multiplyMatrices(h,i),f=new hn;e.traverse(w=>{if(!w.isMesh||!w.geometry)return;const D=w.geometry.attributes.position;if(!D)return;const L=new Pe().multiplyMatrices(u,w.matrixWorld),N=Math.max(1,Math.floor(D.count/800));for(let O=0;O<D.count;O+=N)a.fromBufferAttribute(D,O).applyMatrix4(L),f.expandByPoint(a)});const d=f.getCenter(new I),g=new Pe().makeTranslation(-d.x,-f.min.y+(t.rideHeightOffset||0),-d.z),_=new Pe().multiplyMatrices(g,u);function m(w){const D=w.geometry.clone(),L=new Pe().multiplyMatrices(_,w.matrixWorld);return D.applyMatrix4(L),D}const p=e.getObjectByName("chrome"),b=p?m(p):null,v=mw(b),x=gw(b),S=dw(),R=new tn;R.name=`C2_Car_${t.id}`;function E(w,D){const L={};if(w&&(w.map&&(L.map=w.map),w.normalMap&&(L.normalMap=w.normalMap),w.aoMap&&(L.aoMap=w.aoMap,L.aoMapIntensity=1),w.roughnessMap&&(L.roughnessMap=w.roughnessMap),w.metalnessMap&&(L.metalnessMap=w.metalnessMap)),D==="body"){const N={};return w&&w.normalMap&&(N.normalMap=w.normalMap),new It({name:"Ferrari_Rosso_Corsa_Gallery",color:new ve(7602180),metalness:.24,roughness:.3,specularIntensity:.08,clearcoat:1,clearcoatRoughness:.03,envMap:n||null,envMapIntensity:.68,...N})}return D==="glass"?new It({name:"Gallery_Automotive_Glass",color:new ve(1053721),metalness:.08,roughness:.04,transmission:0,transparent:!0,opacity:.42,clearcoat:1,clearcoatRoughness:.02,envMap:n||null,envMapIntensity:1.4}):D==="carbon"?new It({name:"Gallery_Carbon_Fiber",color:new ve(1447963),metalness:.36,roughness:.28,clearcoat:.65,clearcoatRoughness:.12,envMap:n||null,envMapIntensity:.8,...L}):D==="wheel"||D==="chrome"?new It({name:"Gallery_Forged_Alloy",color:D==="chrome"?new ve(15133680):new ve(11384255),metalness:.88,roughness:D==="chrome"?.09:.17,clearcoat:.7,envMap:n||null,envMapIntensity:1.25,...L}):D==="brake"?new It({name:"Gallery_Carbon_Ceramic_Rotor",color:new ve(3290684),metalness:.78,roughness:.32,clearcoat:.35,envMap:n||null,envMapIntensity:.85,...L}):D==="tire"?new fs({name:"Gallery_Pirelli_Tire",color:new ve(1118740),bumpMap:L.normalMap?null:S,bumpScale:.008,metalness:.05,roughness:.76,envMap:n||null,envMapIntensity:.32,...L}):D==="light_front"?new It({name:"Gallery_Headlight_Optics",color:new ve(15133680),roughness:.08,metalness:.2,clearcoat:.95,envMap:n||null,envMapIntensity:1.2,...L}):D==="light_rear"?new It({name:"Gallery_Taillight_Optics",color:new ve(9964308),roughness:.12,clearcoat:.95,envMap:n||null,envMapIntensity:1,...L}):D==="scuderia_shield"&&v?new It({name:"Scuderia_Shield",color:new ve(16777215),map:v,metalness:.2,roughness:.18,clearcoat:.9,envMap:n||null,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}):D==="wheel_cap"&&x?new It({name:"Wheel_Cap",color:new ve(16777215),map:x,metalness:.45,roughness:.18,clearcoat:.85,envMap:n||null,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}):D==="engine"?new It({name:"Engine_Intake_Alloy",color:new ve(4606802),metalness:.78,roughness:.28,clearcoat:.3,envMap:n||null,...L}):D==="leather"?new fs({name:"Ferrari_Cuoio_Tan_Leather",color:new ve(8933158),metalness:.04,roughness:.62,envMap:n||null,envMapIntensity:.42}):new fs({name:"Cockpit_Charcoal_Trim",color:new ve(1316120),metalness:.1,roughness:.78,envMap:n||null,envMapIntensity:.35,...L})}function C({id:w,category:D,worldGeo:L,origMat:N,customAxlePivot:O=null}){L.computeBoundingBox();const V=L.boundingBox.getCenter(new I),G=O?O.clone():V.clone(),te=L.clone();te.translate(-G.x,-G.y,-G.z),te.computeBoundingBox(),D==="scuderia_shield"?rd(te,w.includes("nose")?"nose":"side",V.x>0):D==="wheel_cap"&&rd(te,"side",V.x>0);const he=E(N,D),ce=new st(te,he);ce.castShadow=D!=="glass",ce.receiveShadow=!0;const Se=new tn;Se.name=w,Se.position.copy(G),Se.add(ce),R.add(Se)}const y=new Set,M=["wheel_fl","wheel_fr","wheel_rl","wheel_rr"];for(const w of M){const D=e.getObjectByName(w);if(!D)continue;y.add(D);let L=.34,N=w.includes("_f")?-1.34:1.32;const O=D.children.find(k=>k.name.toLowerCase().includes("tire"));if(O&&O.isMesh){const k=m(O);k.computeBoundingBox();const V=k.boundingBox.getCenter(new I);L=V.y,N=V.z}D.traverse(k=>{if(!k.isMesh)return;y.add(k);const V=m(k);V.computeBoundingBox();const G=V.boundingBox.getCenter(new I),te=new I(G.x,L,N),he=ad(`${w}_${k.name}`);C({id:`${w}_${k.name}`,category:he.category,worldGeo:V,origMat:k.material,customAxlePivot:te})})}return e.traverse(w=>{if(!w.isMesh||!w.geometry||y.has(w))return;const D=w.name||"mesh",L=m(w);if(L.computeBoundingBox(),D==="body"){const O=ec(L,pw);for(const[k,V]of O.entries())C({id:k,category:"body",worldGeo:V,origMat:w.material});return}if(D==="yellow_trim"){const O=ec(L,(k,V,G)=>G<-1.5?"badge_nose":Math.abs(k)>.7?k<0?"badge_fender_l":"badge_fender_r":"cockpit_tachometer");for(const[k,V]of O.entries())C({id:k,category:k.startsWith("badge_")?"scuderia_shield":"interior",worldGeo:V,origMat:w.material});return}if(D==="interior"||D==="leather"){const O=ec(L,(k,V,G)=>G>=-.36&&G<=.56&&Math.abs(k)<=.62&&V>=.24&&V<=.86?"cabin_tan_leather":"exterior_charcoal_trim");for(const[k,V]of O.entries())C({id:`${D}_${k}`,category:k==="cabin_tan_leather"?"leather":"interior",worldGeo:V,origMat:w.material});return}const N=ad(D);C({id:`ferrari_${D}`,category:N.category,worldGeo:L,origMat:w.material})}),{id:t.id,spec:t,root:R}}_buildNativeCarBundle(e,t,n){const i=[];e.traverse(d=>{if(!d.isMesh)return;const g=d.name||"";(g==="Obj_Shadow_Plane"||g.startsWith("Obj_Rim_T0B_"))&&(d.visible=!1,i.push(d))}),i.forEach(d=>{d.parent&&d.parent.remove(d)}),e.rotation.set(0,t.rotY||0,0),e.position.set(0,0,0),e.scale.setScalar(1),e.updateMatrixWorld(!0);const a=new hn().setFromObject(e).getSize(new I),o=Math.max(a.x,a.y,a.z,.001),l=(t.targetLength||4.6)/o;e.scale.setScalar(l),e.updateMatrixWorld(!0);const c=new hn().setFromObject(e),h=c.getCenter(new I);e.position.x-=h.x,e.position.y-=c.min.y-(t.rideHeightOffset||0),e.position.z-=h.z,e.updateMatrixWorld(!0),t.straightenFrontWheels&&_w(e);const u=new tn;u.name=`C2_Car_${t.id}`,u.add(e);const f=d=>{const g=(d||"").toLowerCase();return t.id==="lamborghini"?g==="mt_body"||g==="mt_mirrorcover":t.id==="mclaren"?g==="sennapaintmain"||g==="sennapaint":t.id==="porsche"?g==="paint":t.id==="bugatti"?g==="bluebody":t.id==="gallardo"?g==="paint":g.includes("paint")||g.includes("body")};return e.traverse(d=>{if(!d.isMesh||!d.geometry)return;const g=Array.isArray(d.material)?d.material:[d.material];let _=!1;g.forEach(b=>{if(!b)return;"envMap"in b&&(b.envMap=n||null),b.transmission&&b.transmission>0&&(b.transmission=0,b.transparent=!0,b.opacity=Math.min(b.opacity||.42,.42),_=!0);const v=(b.name||"").toLowerCase();(v.includes("glass")||v.includes("window")||v.includes("windshield"))&&(_=!0),b.name==="RedLightBlosm"&&(b.emissive.setRGB(1,.01,.004),b.emissiveIntensity=.7,b.color.setRGB(.35,0,0)),b.needsUpdate=!0});const m=g.findIndex(b=>b&&f(b.name));if(m>=0){const b=g[m],v=new It({name:b.name,color:new ve(t.paintHex),metalness:t.paintMetalness??.55,roughness:t.paintRoughness??.22,clearcoat:1,clearcoatRoughness:.04,normalMap:b.normalMap||null,envMap:n||null,envMapIntensity:1});Array.isArray(d.material)?d.material[m]=v:d.material=v}d.castShadow=!_,d.receiveShadow=!0,(g.some(b=>((b==null?void 0:b.name)||"").toLowerCase()==="license")||(d.name||"").startsWith("Text_"))&&(d.visible=!1)}),{id:t.id,spec:t,root:u}}}const ya=12.44,Uo=6,ca=7,rs=4.8,Un=.44,pi=6.44,ea=11,pr=7,ui=8.4,ii=1.6,Li=3.6,gn=en.length,Fn=s=>-s*ya,Qt={uWash:{value:new Array(gn).fill(0)},uPool:{value:new Array(gn).fill(0)},uLabel:{value:Array.from({length:gn},()=>new oe(3.6,2.1))},uHall:{value:0},uNight:{value:0},uNightRoom:{value:new Array(gn).fill(0)},uTorch:{value:new at(0,-10,0,0)},uPlaster:{value:null},uStone:{value:null},uMirror:{value:null},uMirrorBlur:{value:null},uMirrorMatrix:{value:new Pe},uReflect:{value:1.7},uResolution:{value:new oe(1,1)},uRise:{value:new oe(-.5,0)}};function ha(s,e){const t=Math.sin(s*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function is(s,e,t,n){const i=Math.floor(s),r=Math.floor(e),a=s-i,o=e-r,l=a*a*(3-2*a),c=o*o*(3-2*o),h=(i%t+t)%t,u=(h+1)%t,f=(r%n+n)%n,d=(f+1)%n,g=ha(h,f),_=ha(u,f),m=ha(h,d),p=ha(u,d);return(g*(1-l)+_*l)*(1-c)+(m*(1-l)+p*l)*c}function vw(){const e=new Float32Array(262144);for(let i=0;i<512;i++)for(let r=0;r<512;r++){const a=r/512,o=i/512,l=(is(a*3,o*3,3,3)-.5)*.5,c=(is(a*3+5.2,o*3+9.1,3,3)-.5)*.5,h=is((a+l)*9,(o+c)*13,9,13),u=is((a-c)*24+3.1,(o+l)*30,24,30)*.45,f=is(a*64,o*64,64,64)*.3,d=is(a*128+7.7,o*128,128,128)*.16,g=ha(r,i)*.12;e[i*512+r]=h*.8+u+f+d+g}const t=new Uint8Array(512*512*4);for(let i=0;i<512;i++)for(let r=0;r<512;r++){const a=i*512+r,o=e[(i-1+512)%512*512+r],l=e[(i+1)%512*512+r],c=e[i*512+(r-1+512)%512],h=e[i*512+(r+1)%512],u=(l-o)*1.9,f=(h-c)*.5,d=nt.clamp(.5+u+f*.25,0,1),g=r/512,_=i/512,p=.9+((is(g*2,_*2,2,2)-.5)*.16+(is(g*6+1.7,_*6,6,6)-.5)*.07)+(e[a]-.95)*.03;t[a*4]=Math.round(nt.clamp(p,0,1)*255),t[a*4+1]=Math.round(nt.clamp(p*.995,0,1)*255),t[a*4+2]=Math.round(nt.clamp(p*.985,0,1)*255),t[a*4+3]=Math.round(d*255)}const n=new Qo(t,512,512,Tn);return n.wrapS=n.wrapT=Vi,n.magFilter=_n,n.minFilter=Kn,n.generateMipmaps=!0,n.anisotropy=8,n.needsUpdate=!0,n}function xw(){const e=new Uint8Array(4194304),t=2;for(let i=0;i<1024;i++)for(let r=0;r<1024;r++){const a=r%512,o=i%(1024/2),l=a<t||o<t,c=l?.1:.34,h=l?1:.2,u=(i*1024+r)*4;e[u]=Math.round(nt.clamp(c,0,1)*255),e[u+1]=Math.round(nt.clamp(c*.985,0,1)*255),e[u+2]=Math.round(nt.clamp(c*.96,0,1)*255),e[u+3]=Math.round(h*255)}const n=new Qo(e,1024,1024,Tn);return n.wrapS=n.wrapT=Vi,n.magFilter=_n,n.minFilter=Kn,n.generateMipmaps=!0,n.anisotropy=8,n.needsUpdate=!0,n}function yw(){Qt.uPlaster.value=vw(),Qt.uStone.value=xw()}const Mw=`
uniform float uWash[${gn}];
uniform float uPool[${gn}];
uniform vec2 uLabel[${gn}];
uniform float uHall;
uniform float uNight;
uniform float uNightRoom[${gn}];
uniform vec4 uTorch;
uniform sampler2D uPlaster;
uniform sampler2D uStone;
uniform vec2 uRise;
varying vec3 vGalPos;
varying vec3 vGalNormal;

const vec3 WARM = vec3(1.0, 0.85, 0.7);
const vec3 NEUTRAL = vec3(1.0, 0.90, 0.78);


float galScallop(float u, float y, float fx, float topY) {
  float du = u - fx;
  float dy = topY - y;
  float edge = smoothstep(-0.1, 0.9, dy - 0.5 * du * du);
  float fall = exp(-max(dy - 0.45, 0.0) * 0.42);
  float side = exp(-du * du * 0.26);
  return edge * (0.22 + 0.78 * fall) * side;
}




float galWash(float y, float topY) {
  float dy = topY - y;
  float edge = smoothstep(0.0, 0.5, dy);
  float fall = exp(-max(dy - 0.45, 0.0) * 0.42);
  return edge * (0.22 + 0.78 * fall);
}

float galSoftRect(vec2 q, vec2 halfSize, float soft) {
  vec2 d = abs(q) - halfSize;
  float o = length(max(d, 0.0));
  return 1.0 - smoothstep(0.0, soft, o);
}

vec3 galleryLight(vec3 p, vec3 n, float relief) {
  vec3 L = vec3(0.0);
  float wallShade = mix(1.0, relief * 2.0, 0.38);

  if (p.z > ${pi.toFixed(2)} - 0.001) {

    if (n.z > 0.5) {
      float s = 0.0;
      for (int k = 0; k < 6; k++) s += galScallop(p.x, p.y, -5.5 + 2.2 * float(k), ${(ui-.12).toFixed(2)});
      L += WARM * s * uHall * 0.75 * wallShade;


      float ins = exp(-pow(p.x / 3.5, 2.0)) * exp(-pow((p.y - 5.0) / 1.6, 2.0));
      L += NEUTRAL * ins * uHall * 1.25 * mix(1.0, wallShade, 0.5);
      L += WARM * uHall * 0.06;



      float climb = 1.0 - smoothstep(uRise.x - 1.8, uRise.x, p.y);
      float up = 0.12 + 0.88 * exp(-p.y * 0.38);
      L += vec3(1.0, 0.86, 0.72) * uRise.y * up * climb * mix(1.0, wallShade, 0.85);
    } else if (abs(n.x) > 0.5) {
      float s = galScallop(p.z, p.y, 10.0, 6.0) + galScallop(p.z, p.y, 14.0, 6.0);
      L += WARM * s * uHall * 0.35 * wallShade;
    } else if (n.y < -0.5) {

      L += WARM * uHall * 0.55 * exp(-max(p.z - ${pi.toFixed(2)}, 0.0) * 0.5);
      L += WARM * uHall * 0.16;
      vec2 f1 = p.xz - vec2(-2.8, 11.5);
      vec2 f2 = p.xz - vec2(2.8, 11.5);
      vec2 f3 = p.xz - vec2(0.0, 8.2);
      L += NEUTRAL * uHall * 0.9 * (exp(-dot(f1, f1) * 2.5) + exp(-dot(f2, f2) * 2.5) + exp(-dot(f3, f3) * 2.5));
    } else if (n.y > 0.5) {
      float pools = 0.0;
      pools += exp(-dot(p.xz - vec2(-2.8, 11.5), p.xz - vec2(-2.8, 11.5)) * 0.32);
      pools += exp(-dot(p.xz - vec2(2.8, 11.5), p.xz - vec2(2.8, 11.5)) * 0.32);
      pools += exp(-dot(p.xz - vec2(0.0, 8.2), p.xz - vec2(0.0, 8.2)) * 0.22) * 0.8;
      L += NEUTRAL * pools * uHall * 0.42;

      L += vec3(1.0, 0.86, 0.72) * uRise.y * 0.5 * exp(-max(p.z - ${pi.toFixed(2)}, 0.0) * 5.0);
    }
  } else {
    float fi = clamp(floor((6.22 - p.z) / ${ya.toFixed(2)}), 0.0, ${(gn-1).toFixed(1)});
    int ri = int(fi);
    float zC = -fi * ${ya.toFixed(2)};
    float lz = p.z - zC;
    float wash = uWash[ri];
    float pool = uPool[ri];

    if (abs(n.x) > 0.5) {

      float s = galWash(p.y, ${(rs-.1).toFixed(2)}) * 1.6 * (1.0 - 0.45 * smoothstep(4.2, 6.2, abs(lz)));
      L += WARM * s * wash * 1.0 * wallShade;
      L += WARM * wash * 0.07 * wallShade;

      L += WARM * pool * 0.05 * exp(-p.y * 0.8) * exp(-lz * lz * 0.04);
    } else if (abs(n.z) > 0.5) {

      float side = 0.2 + 0.8 * smoothstep(1.0, 3.0, abs(p.x));
      float s = galWash(p.y, ${(rs-.1).toFixed(2)}) * 1.55 * side * (1.0 - 0.3 * smoothstep(5.6, 7.0, abs(p.x)));
      L += WARM * s * wash * 0.9 * wallShade;
      L += WARM * wash * 0.07 * wallShade;
      if (n.z > 0.5) {

        vec2 d = (p.xy - uLabel[ri]) / vec2(2.3, 1.15);
        L += NEUTRAL * exp(-dot(d, d) * 1.6) * wash * 1.25 * mix(1.0, wallShade, 0.5);
      }
    } else if (n.y < -0.5) {

      L += NEUTRAL * pool * 0.55 * galSoftRect(vec2(p.x, lz), vec2(1.2, 2.9), 1.7);
      L += WARM * wash * 0.12 * smoothstep(4.2, 7.0, abs(p.x));
      L += WARM * wash * 0.03;
    } else if (n.y > 0.5) {
      float pr = galSoftRect(vec2(p.x, lz), vec2(1.5, 3.1), 2.6);
      L += NEUTRAL * pr * pool * 0.75;
      L += WARM * wash * 0.035;

      L += WARM * smoothstep(4.6, 6.95, abs(p.x)) * wash * 0.16;
    }
  }



  float nightHere = uNight;
  if (p.z < ${pi.toFixed(2)} - 0.001) {
    nightHere *= uNightRoom[int(clamp(floor((6.22 - p.z) / ${ya.toFixed(2)}), 0.0, ${(gn-1).toFixed(1)}))];
  }
  if (n.y < 0.5) {
    L += WARM * nightHere * 0.6 * exp(-max(p.y - 0.02, 0.0) * 9.0);
  } else {
    float distToWall = min(${ca.toFixed(2)} - abs(p.x), 99.0);
    if (p.z > ${pi.toFixed(2)}) distToWall = ${pr.toFixed(2)} - abs(p.x);
    L += WARM * nightHere * 0.22 * exp(-max(distToWall, 0.0) * 7.0);
  }


  vec3 td = p - uTorch.xyz;
  L += NEUTRAL * uTorch.w * exp(-dot(td, td) * 1.3);
  return L;
}
`,od={smooth:`
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuse, 0.65);
    galRelief = mix(galRelief, 0.5, 0.7);
  `,boards:`{
    float b = floor(wuv.y / 0.16);
    float f = fract(wuv.y / 0.16);
    float tone = 0.88 + 0.14 * fract(sin(b * 12.9898) * 43758.5453);
    float joint = smoothstep(0.0, 0.05, f) * smoothstep(1.0, 0.95, f);
    float grain = 0.96 + 0.04 * sin(wuv.x * 11.0 + sin(wuv.x * 1.7 + b * 3.1) * 3.0);
    diffuseColor.rgb *= tone * grain * mix(0.5, 1.0, joint);
    galRelief = mix(galRelief, 0.5, 0.5) * mix(0.75, 1.0, joint);
  }`,hex:`{
    vec2 p = wuv / 0.62;
    vec2 r = vec2(1.0, 1.7320508);
    vec2 h = r * 0.5;
    vec2 a = mod(p, r) - h;
    vec2 c = mod(p - h, r) - h;
    bool inA = dot(a, a) < dot(c, c);
    vec2 g = inA ? a : c;
    vec2 cell = inA ? floor(p / r) : floor((p - h) / r) + 0.5;
    vec2 q = abs(g);
    float slant = dot(q, vec2(0.5, 0.8660254));
    float e = 0.5 - max(slant, q.x);
    float aa = fwidth(e);
    float joint = smoothstep(0.011 - aa, 0.011 + aa, e);
    float chamfer = (1.0 - smoothstep(0.011, 0.07, e)) * joint;
    float facing = slant > q.x ? sign(g.y) : 0.0;
    float tone = 0.92 + 0.1 * fract(sin(dot(cell, vec2(41.3, 289.1))) * 43758.5453);
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuse, 0.6) * tone * mix(0.3, 1.0, joint);
    galRelief = mix(galRelief, 0.5, 0.8) + chamfer * facing * 0.55 + 0.05 * g.y * joint;
  }`,ashlar:`{
    float row = floor(wuv.y / 0.6);
    vec2 bp = vec2(wuv.x / 1.2 + 0.5 * mod(row, 2.0), wuv.y / 0.6);
    vec2 id = floor(bp);
    vec2 f = fract(bp);
    float n1 = fract(sin(dot(id, vec2(12.9898, 78.233))) * 43758.5453);
    float n2 = fract(sin(dot(id, vec2(39.346, 11.135))) * 24634.6345);
    vec4 stone = texture2D(uPlaster, wuv / 1.9 + vec2(n1, n2) * 7.0);
    float dx = min(f.x, 1.0 - f.x) * 1.2;
    float dB = f.y * 0.6;
    float dT = (1.0 - f.y) * 0.6;
    float d = min(dx, min(dB, dT));
    float aa = fwidth(d);
    float joint = smoothstep(0.004 - aa, 0.004 + aa, d);
    float bedding = 1.0 + 0.03 * sin(wuv.y * 47.0 + n2 * 20.0 + sin(wuv.x * 1.7 + n1 * 6.0) * 1.2);
    diffuseColor.rgb = diffuse * stone.rgb * (0.9 + 0.12 * n1) * bedding * mix(0.4, 1.0, joint);
    float arris = (1.0 - smoothstep(0.004, 0.018, dT)) * joint;
    float foot = 1.0 - smoothstep(0.0, 0.035, dB);
    galRelief = mix(stone.a, 0.5, 0.6) + arris * 0.36 - foot * 0.2;
  }`,dado:`{
    float y = vGalPos.y;
    float ay = fwidth(y);
    float below = 1.0 - smoothstep(1.1 - ay, 1.1 + ay, y);
    float gap = smoothstep(1.1 - ay, 1.1 + ay, y) * (1.0 - smoothstep(1.114 - ay, 1.114 + ay, y));
    float sx = fract(wuv.x / 1.2);
    float slab = floor(wuv.x / 1.2);
    float dj = min(sx, 1.0 - sx) * 1.2;
    float aj = fwidth(dj);
    float joint = smoothstep(0.0015 - aj, 0.0015 + aj, dj);
    vec2 o = vec2(fract(sin(slab * 12.9898) * 43758.5453), fract(sin(slab * 78.233) * 24634.6345)) * 5.0;


    vec2 vd = vec2(dot(wuv, vec2(0.8, 0.6)) * 0.1, dot(wuv, vec2(-0.6, 0.8)) * 0.45);
    float c1 = (texture2D(uPlaster, vd + o, 3.0).r - 0.9) / 0.12;
    float c2 = (texture2D(uPlaster, vd * 1.7 + o.yx, 3.0).r - 0.9) / 0.12;
    float w1 = fwidth(c1) + 0.01;
    float w2 = fwidth(c2) + 0.008;
    float vein = (1.0 - smoothstep(0.0, w1 * 3.0, abs(c1 - 0.15))) * 0.7 + (1.0 - smoothstep(0.0, w2 * 2.0, abs(c2 + 0.3))) * 0.3;
    vec3 stone = vec3(0.016, 0.016, 0.018) * (0.94 + 0.12 * o.x / 5.0) + vec3(0.3, 0.3, 0.32) * vein * 0.045;
    stone *= (1.0 + 0.3 * smoothstep(0.55, 1.1, y)) * mix(0.4, 1.0, joint);
    diffuseColor.rgb = mix(diffuseColor.rgb, stone, below) * (1.0 - 0.8 * gap);
    float arris = (1.0 - smoothstep(0.0, 0.006 + ay, 1.1 - y)) * below;
    galRelief = mix(galRelief, 0.5 + arris * 0.4, below);
  }`};function Ma(s,e={}){const t=new fs({color:e.color??16777215,roughness:e.roughness??.9,metalness:e.metalness??0,map:e.map??null,transparent:e.transparent??!1,alphaTest:e.alphaTest??0,polygonOffset:e.polygonOffset??!1,polygonOffsetFactor:e.polygonOffset?-2:0,polygonOffsetUnits:e.polygonOffset?-2:0,depthWrite:e.depthWrite??!0,envMap:null});t.userData.galleryKind=s;const n=e.lightBoost??1;return t.onBeforeCompile=i=>{Object.assign(i.uniforms,Qt),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGalPos;
varying vec3 vGalNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
vGalPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vGalNormal = normalize(mat3(modelMatrix) * objectNormal);`);let r="";s==="ceiling"?r=`
        vec4 plaster = texture2D(uPlaster, vGalPos.xz / 3.4);
        diffuseColor.rgb *= plaster.rgb;
        float galRelief = 0.5;
      `:s==="wall"?r=`
        vec2 wuv = abs(vGalNormal.x) > 0.5 ? vec2(vGalPos.z, vGalPos.y) : vec2(vGalPos.x, vGalPos.y);
        vec4 plaster = texture2D(uPlaster, wuv / 2.6);
        diffuseColor.rgb *= plaster.rgb;
        float galRelief = plaster.a;
        ${od[e.pattern]??""}
      `:s==="engraved"?r=`
        vec2 wuv = vec2(vGalPos.x, vGalPos.y);
        vec4 plaster = texture2D(uPlaster, wuv / 2.6);
        diffuseColor.rgb *= plaster.rgb * 2.0;
        float galRelief = plaster.a;
        ${od[e.pattern]??""}
      `:s==="floor"?r=`
        vec4 stone = texture2D(uStone, vGalPos.xz / 2.4);
        diffuseColor.rgb *= stone.rgb;
        float galRelief = 0.5;
      `:r="float galRelief = 0.5;";let a="";s==="floor"&&(a=`
        {
          float rough = stone.a;
          vec4 mp = uMirrorMatrix * vec4(vGalPos, 1.0);
          vec2 muv = mp.xy / mp.w;
          vec3 sharp = texture2D(uMirror, muv).rgb;
          vec3 soft = texture2D(uMirrorBlur, muv).rgb;
          vec3 refl = mix(sharp, soft, clamp(0.12 + rough * 1.1, 0.0, 1.0));

          refl = refl / (1.0 + max(max(refl.r, max(refl.g, refl.b)) - 0.8, 0.0) * 1.2);
          vec3 viewDir = normalize(cameraPosition - vGalPos);
          float cosT = clamp(viewDir.y, 0.0, 1.0);
          float fres = 0.025 + 0.975 * pow(1.0 - cosT, 5.0);
          float isJoint = step(0.98, rough);
          totalEmissiveRadiance += refl * fres * uReflect * (1.0 - isJoint) * (1.0 - rough * 0.55);
        }
      `),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
`+(s==="floor"?`uniform sampler2D uMirror;
uniform sampler2D uMirrorBlur;
uniform mat4 uMirrorMatrix;
uniform float uReflect;
`:"")+Mw).replace("#include <map_fragment>",`#include <map_fragment>
`+r).replace("#include <aomap_fragment>",`#include <aomap_fragment>
         totalEmissiveRadiance += diffuseColor.rgb * galleryLight(vGalPos, normalize(vGalNormal), galRelief) * ${n.toFixed(3)};
         ${a}`)},t.customProgramCacheKey=()=>`gallery-${s}-${n}-${e.pattern??""}`,t}const as={w:3,d:6},ld=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Sw=`
  uniform vec3 uL;
  uniform float uDim;
  varying vec2 vUv;

  float bar(float g, float hw) {
    float f = abs(fract(g + 0.5) - 0.5);
    float fw = fwidth(g);
    return clamp(0.5 + (hw - f) / fw, 0.0, 1.0) * clamp(2.0 * hw / fw, 0.0, 1.0);
  }
  void main() {
    float bay = floor(clamp(vUv.x, 0.0, 0.999) * 3.0);
    float l = bay < 0.5 ? uL.x : bay < 1.5 ? uL.y : uL.z;

    float bx = fract(vUv.x * 3.0);
    float glow = 0.62 + 0.38 * sin(3.14159 * bx) * (0.75 + 0.25 * sin(3.14159 * vUv.y));
    vec2 e = min(vUv, 1.0 - vUv) * vec2(${as.w.toFixed(1)}, ${as.d.toFixed(1)});
    glow *= 0.82 + 0.18 * smoothstep(0.0, 0.18, min(e.x, e.y));

    float bars = max(bar(vUv.x * 3.0, 0.008), bar(vUv.y * 10.0, 0.008 / 0.6));
    gl_FragColor = vec4(mix(vec3(1.0, 0.95, 0.88) * l * 0.95 * glow, vec3(0.16, 0.12, 0.08) * l, bars) * uDim, 1.0);
  }
`,ww=`
  uniform float uL;
  uniform float uDim;
  varying vec2 vUv;
  void main() {
    float t = vUv.y;
    gl_FragColor = vec4(vec3(1.0, 0.93, 0.84) * uL * (0.03 + 0.24 * t * t * t) * uDim, 1.0);
  }
`,ta={depth:.14,bezel:.03},Tw=new ve(1,.82,.62);class Ew{constructor(e,t){this.scene=e,this.envMap=t,this.group=new tn,this.group.name="showroom",e.add(this.group),this.wallMat=Ma("wall",{color:3479832}),this.floorMat=Ma("floor",{color:2762274}),this.ceilingMat=Ma("ceiling",{color:1907481}),this.steelMat=new fs({color:5591372,metalness:1,roughness:.3,envMap:t,envMapIntensity:1.25}),this.rooms=[],this.laylights=[],this.coffers=[],this.bankLevels=Array.from({length:gn},()=>[0,0,0]),this.doorLines=[],this.doorSteel=[],this.wallParts=[],this._buildFloor(),this._buildHall();for(let n=0;n<gn;n++)this._buildRoom(n)}_box(e,t,n,i,r,a,o,l=this.group){const c=new st(new vs(e,t,n),o);return c.position.set(i,r,a),l.add(c),c}_buildFloor(){const e=Fn(gn-1)-Uo-Un,t=pi+ea,n=new bn(ca*2+1,t-e);n.rotateX(-Math.PI/2),this.floor=new st(n,this.floorMat),this.floor.position.set(0,0,(t+e)/2),this.floor.name="floor",this.group.add(this.floor)}_wall(e,t,n,i,r,a,o,l){const c=this._box(e,t,n,i,r,a,this.wallMat,l);return this.wallParts.push({mesh:c,...o}),c}_crossWall(e,t,n,i,r,a){const o=Un;if(!i){this._wall(t*2,n,o,0,n/2,e,a,r);return}const l=t-ii;this._wall(l,n,o,-(ii+l/2),n/2,e,a,r),this._wall(l,n,o,ii+l/2,n/2,e,a,r),this._wall(ii*2,n-Li,o,0,Li+(n-Li)/2,e,a,r);const c=.035,h=this.steelMat.clone();this.doorSteel.push(h),this._box(c,Li,o+.012,-ii+c/2,Li/2,e,h,r),this._box(c,Li,o+.012,ii-c/2,Li/2,e,h,r),this._box(ii*2-2*c,c,o+.012,0,Li-c/2,e,h,r);const u=new Gt({color:0}),f=.02,d=ii-c-f/2,g=Li-c;for(const _ of[-1,1])this._box(f,g-f,.03,_*d,(g-f)/2,e,u,r);this._box(2*(d+f/2),f,.03,0,g-f/2,e,u,r),this.doorLines.push(u)}_buildHall(){const e=new tn;e.name="hall",this.group.add(e);const t=pi+ea,n=pi+ea/2;this._crossWall(pi-Un/2,pr,ui,!0,e,{front:-1,back:0}),this._box(pr*2,ui,Un,0,ui/2,t+Un/2,this.wallMat,e);for(const r of[-1,1])this._box(Un,ui,ea,r*(pr+Un/2),ui/2,n,this.wallMat,e);const i=new st(new bn(pr*2,ea),this.ceilingMat);i.rotation.x=Math.PI/2,i.position.set(0,ui,n),e.add(i),this.hallLampMat=new Gt({color:0});for(const[r,a]of[[-2.8,11.5],[2.8,11.5],[0,8.2]]){const o=new st(new Ha(.075,32),this.hallLampMat);o.rotation.x=Math.PI/2,o.position.set(r,ui-.004,a),e.add(o)}this.hall=e}_buildRoom(e){const t=Fn(e),n=new tn;n.name=`room-${e+1}`,this.group.add(n);for(const p of[-1,1])this._wall(Un,rs,ya+Un,p*(ca+Un/2),rs/2,t,{front:e,back:e},n);const i=e===gn-1;this._crossWall(t-Uo-Un/2,ca,rs,!i,n,{front:e,back:i?e:e+1});const r=as.w/2+ta.bezel,a=as.d/2+ta.bezel,o=(p,b)=>new Yc([new oe(-p,-b),new oe(p,-b),new oe(p,b),new oe(-p,b)]),l=new Kc(o(ca,Uo).getPoints());l.holes.push(o(r,a));const c=new st(new Ho(l),this.ceilingMat);c.rotation.x=Math.PI/2,c.position.set(0,rs,t),n.add(c);const h=rs+ta.depth,u=new Ut({uniforms:{uL:{value:new I},uDim:{value:1}},vertexShader:ld,fragmentShader:Sw}),f=new st(new bn(as.w,as.d),u);f.rotation.x=Math.PI/2,f.position.set(0,h,t),n.add(f);const d=new Kc(o(r,a).getPoints());d.holes.push(o(as.w/2,as.d/2));const g=new st(new Ho(d),new Gt({color:1840657}));g.rotation.x=Math.PI/2,g.position.set(0,h-.001,t),n.add(g);const _=new Ut({uniforms:{uL:{value:0},uDim:{value:1}},vertexShader:ld,fragmentShader:ww,side:Sn});for(const[p,b,v,x]of[[a*2,-r,t,Math.PI/2],[a*2,r,t,Math.PI/2],[r*2,0,t-a,0],[r*2,0,t+a,0]]){const S=new st(new bn(p,ta.depth),_);S.position.set(b,rs+ta.depth/2,v),S.rotation.y=x,n.add(S)}this.laylights.push(u),this.coffers.push(_);const m=new tn;m.position.set(0,0,t),n.add(m),this.rooms.push({index:e,zC:t,group:n,stand:m,car:null,shadow:null,line:null})}setHallLevel(e){this.hallLampMat.color.setRGB(1,.92,.82).multiplyScalar(5*e)}setWallMaterials(e){for(const{mesh:t,front:n,back:i}of this.wallParts){const r=n>=0&&e(n)||this.wallMat,a=i>=0&&e(i)||this.wallMat;t.material=n===i?r:[r,r,r,r,r,a]}}setBankLevels(e,t){this.bankLevels[e]=t,this.laylights[e].uniforms.uL.value.set(t[0],t[1],t[2]),this.coffers[e].uniforms.uL.value=(t[0]+t[1]+t[2])/3}updateDoorLines(e,t,n=1){const i=r=>(r[0]+r[1]+r[2])/3;this.doorLines.forEach((r,a)=>{const o=Math.min(a,gn-1),l=e*(t?t[o]:1),c=i(this.bankLevels[o]);r.color.copy(Tw).multiplyScalar((.3*l+.7*c)*1.3);const h=a===0?n:i(this.bankLevels[a-1]);this.doorSteel[a].envMapIntensity=1.25*Math.min(1,Math.max(l,c,h))})}setReflectionPass(e){for(const t of[...this.laylights,...this.coffers])t.uniforms.uDim.value=e?.18:1}}const tc={uniforms:{tInput:{value:null},uDir:{value:new oe(1,0)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tInput;
    uniform vec2 uDir;
    varying vec2 vUv;
    void main() {

      vec3 c = texture2D(tInput, vUv).rgb * 0.2270270270;
      vec2 o1 = uDir * 1.3846153846;
      vec2 o2 = uDir * 3.2307692308;
      c += texture2D(tInput, vUv + o1).rgb * 0.3162162162;
      c += texture2D(tInput, vUv - o1).rgb * 0.3162162162;
      c += texture2D(tInput, vUv + o2).rgb * 0.0702702703;
      c += texture2D(tInput, vUv - o2).rgb * 0.0702702703;
      gl_FragColor = vec4(c, 1.0);
    }
  `};class Aw{constructor(e,t){this.renderer=e,this.uniforms=t;const n={type:Hn,depthBuffer:!0};this.rt=new nn(16,16,{...n,samples:4}),this.blurA=new nn(16,16,{type:Hn,depthBuffer:!1}),this.blurB=new nn(16,16,{type:Hn,depthBuffer:!1}),this.virtualCamera=new ln,this.textureMatrix=new Pe,this.hidden=[],this.blurMat=new Ut({uniforms:Aa.clone(tc.uniforms),vertexShader:tc.vertexShader,fragmentShader:tc.fragmentShader,depthTest:!1,depthWrite:!1}),this.quad=new st(new bn(2,2),this.blurMat),this.quad.frustumCulled=!1,this.quadScene=new Ra,this.quadScene.add(this.quad),this.quadCam=new Gs(-1,1,1,-1,0,1),t.uMirror.value=this.rt.texture,t.uMirrorBlur.value=this.blurB.texture,t.uMirrorMatrix.value=this.textureMatrix,this._normal=new I(0,1,0),this._planePoint=new I(0,0,0),this._camPos=new I,this._rot=new Pe,this._look=new I,this._target=new I,this._view=new I,this._plane=new ss,this._clip=new at,this._q=new at}setSize(e,t){const n=Math.max(16,Math.round(e*.75)),i=Math.max(16,Math.round(t*.75));this.rt.setSize(n,i),this.blurA.setSize(Math.round(n/3),Math.round(i/3)),this.blurB.setSize(Math.round(n/3),Math.round(i/3))}hide(...e){this.hidden.push(...e)}update(e,t){var m,p;const n=this.renderer,i=this._normal;if(this._camPos.setFromMatrixPosition(t.matrixWorld),this._view.subVectors(this._planePoint,this._camPos),this._view.dot(i)>0)return;this._view.reflect(i).negate().add(this._planePoint),this._rot.extractRotation(t.matrixWorld),this._look.set(0,0,-1).applyMatrix4(this._rot).add(this._camPos),this._target.subVectors(this._planePoint,this._look).reflect(i).negate().add(this._planePoint);const r=this.virtualCamera;r.position.copy(this._view),r.up.set(0,1,0).applyMatrix4(this._rot).reflect(i),r.lookAt(this._target),r.far=t.far,r.near=t.near,r.updateMatrixWorld(),r.projectionMatrix.copy(t.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(r.projectionMatrix),this.textureMatrix.multiply(r.matrixWorldInverse),this._plane.setFromNormalAndCoplanarPoint(i,this._planePoint),this._plane.applyMatrix4(r.matrixWorldInverse);const a=this._clip.set(this._plane.normal.x,this._plane.normal.y,this._plane.normal.z,this._plane.constant),o=r.projectionMatrix,l=this._q;l.x=(Math.sign(a.x)+o.elements[8])/o.elements[0],l.y=(Math.sign(a.y)+o.elements[9])/o.elements[5],l.z=-1,l.w=(1+o.elements[10])/o.elements[14],a.multiplyScalar(2/a.dot(l)),o.elements[2]=a.x,o.elements[6]=a.y,o.elements[10]=a.z+1-.003,o.elements[14]=a.w;const c=this.hidden.map(b=>b.visible);this.hidden.forEach(b=>b.visible=!1),(m=this.onBefore)==null||m.call(this);const h=n.getRenderTarget(),u=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1,n.setRenderTarget(this.rt),n.clear(),n.render(e,r),n.shadowMap.autoUpdate=u,(p=this.onAfter)==null||p.call(this),this.hidden.forEach((b,v)=>b.visible=c[v]);const f=this.blurMat.uniforms,d=this.blurA.width,g=this.blurA.height;let _=this.rt.texture;for(let b=0;b<2;b++){const v=b===0?1:2.2;f.tInput.value=_,f.uDir.value.set(v/d,0),n.setRenderTarget(this.blurA),n.render(this.quadScene,this.quadCam),f.tInput.value=this.blurA.texture,f.uDir.value.set(0,v/g),n.setRenderTarget(this.blurB),n.render(this.quadScene,this.quadCam),_=this.blurB.texture}n.setRenderTarget(h)}}function Rw(s){const e=new Ra;e.background=new ve(328708);const t=new st(new vs(14,4.8,12),new Gt({color:723208,side:vn}));t.position.y=2.4,e.add(t);const n=(o,l,c,h,u,f=0,d=0)=>{const g=new st(new bn(o,l),new Gt({color:new ve(c).multiplyScalar(h),side:Sn}));return g.position.copy(u),g.rotation.set(f,d,0),e.add(g),g};n(3,6,16774116,3.2,new I(0,4.78,0),Math.PI/2);for(const o of[-1,1])n(11,1.6,16768192,1.1,new I(o*6.95,3.8,0),0,o*Math.PI/2),n(11,2.2,16765616,.35,new I(o*6.95,2,0),0,o*Math.PI/2);for(const o of[-1,1])n(4.2,1.4,16768192,.9,new I(-4.4,3.8,o*5.95),0,o>0?Math.PI:0),n(4.2,1.4,16768192,.9,new I(4.4,3.8,o*5.95),0,o>0?Math.PI:0);n(3.6,7,16773344,.55,new I(0,.01,0),-Math.PI/2);for(const o of[-1,1])n(.06,12,16765096,3,new I(o*6.9,.03,0),-Math.PI/2);n(12,10,16773344,.16,new I(0,.012,0),-Math.PI/2);const i=new st(new Ha(3.2,64),new Gt({color:new ve(16774118).multiplyScalar(.3),side:Sn}));i.rotation.x=-Math.PI/2,i.position.y=.016,e.add(i);for(const o of e.children)o.position.y-=.45;const r=new Vc(s),a=r.fromScene(e,0,.1,40);return r.dispose(),e.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a.texture}const Cw=`
  varying float vHeight;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vHeight = wp.y;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Pw=`
  uniform float uMaxHeight;
  varying float vHeight;
  void main() {
    float t = clamp(vHeight / uMaxHeight, 0.0, 1.0);
    float a = pow(1.0 - t, 2.2);
    gl_FragColor = vec4(0.0, 0.0, 0.0, a);
  }
`,Lw=`
  uniform sampler2D tInput;
  uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    float a = texture2D(tInput, vUv).a * 0.2270270270;
    vec2 o1 = uDir * 1.3846153846;
    vec2 o2 = uDir * 3.2307692308;
    a += texture2D(tInput, vUv + o1).a * 0.3162162162;
    a += texture2D(tInput, vUv - o1).a * 0.3162162162;
    a += texture2D(tInput, vUv + o2).a * 0.0702702703;
    a += texture2D(tInput, vUv - o2).a * 0.0702702703;
    gl_FragColor = vec4(0.0, 0.0, 0.0, a);
  }
`;function Dw(s,e,{size:t=512,margin:n=.7,height:i=.9}={}){e.updateMatrixWorld(!0);const r=new hn().setFromObject(e),a=(r.max.x-r.min.x)/2+n,o=(r.max.z-r.min.z)/2+n,l=(r.max.x+r.min.x)/2,c=(r.max.z+r.min.z)/2,h=new Gs(-a,a,o,-o,0,i);h.position.set(l,0,c),h.up.set(0,0,-1),h.lookAt(l,1,c),h.updateMatrixWorld();const u=new nn(t,t,{depthBuffer:!0}),f=new nn(t,t,{depthBuffer:!1}),d=new Ut({uniforms:{uMaxHeight:{value:i}},vertexShader:Cw,fragmentShader:Pw,side:Sn,transparent:!1}),g=new Ra,_=e.parent,m=e.matrix.clone();g.add(e),g.overrideMaterial=d;const p=s.getRenderTarget(),b=s.getClearColor(new ve),v=s.getClearAlpha();s.setClearColor(0,0),s.setRenderTarget(u),s.clear(),s.render(g,h),g.overrideMaterial=null,g.remove(e),_&&_.add(e),e.matrix.copy(m);const x=new Ut({uniforms:{tInput:{value:null},uDir:{value:new oe}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Lw,depthTest:!1,depthWrite:!1,transparent:!1}),S=new st(new bn(2,2),x);S.frustumCulled=!1;const R=new Ra;R.add(S);const E=new Gs(-1,1,1,-1,0,1),C=[1,2,3.5,5];for(const M of C)x.uniforms.tInput.value=u.texture,x.uniforms.uDir.value.set(M/t,0),s.setRenderTarget(f),s.render(R,E),x.uniforms.tInput.value=f.texture,x.uniforms.uDir.value.set(0,M/t),s.setRenderTarget(u),s.render(R,E);s.setRenderTarget(p),s.setClearColor(b,v),f.dispose(),x.dispose(),d.dispose(),S.geometry.dispose();const y=new st(new bn(a*2,o*2),new Gt({map:u.texture,transparent:!0,depthWrite:!1,opacity:.94,color:0}));return y.rotation.x=-Math.PI/2,y.scale.x=-1,y.position.set(l,.004,c),y.renderOrder=2,y.name="contact-shadow",y}function Iw(){return new Ut({toneMapped:!1,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uTime:{value:0},uVignette:{value:.12},uGrain:{value:.035},uFade:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      #include <tonemapping_pars_fragment>
      uniform sampler2D tDiffuse;
      uniform float uTime;
      uniform float uVignette;
      uniform float uGrain;
      uniform float uFade;
      varying vec2 vUv;
      float rnd(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec4 c = texture2D(tDiffuse, vUv);
        c.rgb *= toneMappingExposure;
        c.rgb = AgXToneMapping(c.rgb);
        c = sRGBTransferOETF(c);
        vec2 q = vUv - 0.5;
        float v = 1.0 - uVignette * smoothstep(0.15, 0.85, dot(q, q) * 2.2);
        c.rgb *= v;
        float g = rnd(vUv * 1024.0 + fract(uTime) * 61.0) - 0.5;
        c.rgb += g * uGrain;
        c.rgb *= uFade;
        gl_FragColor = vec4(c.rgb, 1.0);
      }
    `})}const Nn=420;async function Nw(){await Promise.all([document.fonts.load('400 120px "Libre Caslon Display"'),document.fonts.load('500 60px "Libre Franklin"'),document.fonts.load('400 60px "Libre Franklin"'),document.fonts.load('600 60px "Libre Franklin"')])}function nc(s,{align:e="left",maxWidth:t=5,color:n=15525595,dot:i=!1,engrave:r=null}={}){const a=v=>v.font==="caslon"?`400 ${Math.round(v.size*Nn)}px "Libre Caslon Display"`:`${v.weight??500} ${Math.round(v.size*Nn)}px "Libre Franklin"`,o=document.createElement("canvas").getContext("2d");let l=0,c=0;const h=s.map(v=>{o.font=a(v),"letterSpacing"in o&&(o.letterSpacing=`${(v.tracking??0)*v.size*Nn}px`);const x=o.measureText(v.text).width;l=Math.max(l,x);const S=v.size*Nn*(v.font==="caslon"?.92:1.2),R=c+(v.gap??0)*Nn;return c=R+S,{...v,top:R,lineH:S,w:x}}),u=Math.round(.08*Nn),f=Math.min(4096,Math.ceil(l+u*2+(i?.4*Nn:0))),d=Math.min(4096,Math.ceil(c+u*2)),g=document.createElement("canvas");g.width=f,g.height=d;const _=g.getContext("2d");_.fillStyle="#ffffff",_.textBaseline="alphabetic";for(const v of h){_.font=a(v),"letterSpacing"in _&&(_.letterSpacing=`${(v.tracking??0)*v.size*Nn}px`);const x=e==="center"?(f-v.w)/2:u,S=u+v.top+v.lineH*(v.font==="caslon"?.8:.82);_.fillText(v.text,x,S)}r&&Uw(g,r);const m=new el(g);m.colorSpace=r?Fi:St,m.anisotropy=8,m.generateMipmaps=!0,m.minFilter=Kn;const p=Ma(r?"engraved":"lettering",{color:r?r.color:n,pattern:r==null?void 0:r.pattern,map:m,transparent:!0,alphaTest:.02,polygonOffset:!0,depthWrite:!1,roughness:r?.9:.6,lightBoost:r?1:1.5}),b=new st(new bn(f/Nn,d/Nn),p);return b.renderOrder=1,b.userData.size={w:f/Nn,h:d/Nn,pad:u/Nn},b.userData.canvas=g,b.userData.texture=m,b.userData.laid=h,b.userData.pad=u,b}function cd(s,e,t,n,i){let r=0;n[0]=0,i[0]=-1/0,i[1]=1/0;for(let a=1;a<e;a++){let o=(s[a]+a*a-(s[n[r]]+n[r]*n[r]))/(2*a-2*n[r]);for(;o<=i[r];)r--,o=(s[a]+a*a-(s[n[r]]+n[r]*n[r]))/(2*a-2*n[r]);r++,n[r]=a,i[r]=o,i[r+1]=1/0}r=0;for(let a=0;a<e;a++){for(;i[r+1]<a;)r++;t[a]=(a-n[r])*(a-n[r])+s[n[r]]}}function Uw(s,{slope:e=1.5,light:t=[-.6,.75,.28],fill:n=.3,tone:i=.7,deep:r=.25}={}){const a=s.width,o=s.height,l=s.getContext("2d"),c=l.getImageData(0,0,a,o),h=c.data,u=a*o,f=1e12,d=new Float64Array(u);for(let C=0;C<u;C++)d[C]=h[C*4+3]>127?f:0;const g=Math.max(a,o),_=new Float64Array(g),m=new Float64Array(g),p=new Int32Array(g),b=new Float64Array(g+1);for(let C=0;C<a;C++){for(let y=0;y<o;y++)_[y]=d[y*a+C];cd(_,o,m,p,b);for(let y=0;y<o;y++)d[y*a+C]=m[y]}for(let C=0;C<o;C++){for(let y=0;y<a;y++)_[y]=d[C*a+y];cd(_,a,m,p,b);for(let y=0;y<a;y++)d[C*a+y]=Math.sqrt(m[y])}const v=new Float32Array(u);for(let C=0;C<o;C++)for(let y=0;y<a;y++){let M=0;for(let w=-1;w<=1;w++)M+=d[C*a+Math.min(a-1,Math.max(0,y+w))];v[C*a+y]=M/3}const x=new Float32Array(u);for(let C=0;C<o;C++)for(let y=0;y<a;y++){let M=0;for(let w=-1;w<=1;w++)M+=v[Math.min(o-1,Math.max(0,C+w))*a+y];x[C*a+y]=M/3}const S=Math.hypot(...t),R=t.map(C=>C/S),E=R[2];for(let C=0;C<o;C++)for(let y=0;y<a;y++){const M=C*a+y;if(h[M*4+3]===0)continue;const D=(x[C*a+Math.min(a-1,y+1)]-x[C*a+Math.max(0,y-1)])/2,L=(x[Math.max(0,C-1)*a+y]-x[Math.min(o-1,C+1)*a+y])/2,N=Math.max(1,Math.hypot(D,L)),O=e*D/N,k=e*L/N,V=Math.hypot(O,k,1),G=Math.max(0,(O*R[0]+k*R[1]+R[2])/V)/E,te=i*(1-r*Math.min(1,d[M]/12)),he=(n+(1-n)*G)*te,ce=Math.round(Math.min(1,he*.5)*255);h[M*4]=h[M*4+1]=h[M*4+2]=ce}l.putImageData(c,0,0)}const ic={side:.76,clear:.83,pass:.9},Ps=["s-room-1","s-terms","s-room-3","s-room-4","s-room-5"],Ow=["s-room-2","s-room-3","s-room-4","s-room-5","s-room-6"],Fw=s=>Fn(s)-Uo-Un/2,kw=new ve(1,.9,.78),Bw=50,zw={"s-room-1":210,"s-terms":200,"s-room-3":250,"s-room-4":210,"s-room-5":170};function Hw(s){const{V:e,EYE:t,sections:n,lights:i,reduceMotion:r,isPhone:a}=s,o=w=>a()?e(0,-.8,w+.5):e(0,.95,w),l=w=>n.findIndex(D=>D.id===w),c=Ps.map(l),h=Ow.map(l),u=Ps.map(w=>1-Bw/zw[w]),f=Ps.map((w,D)=>(w==="s-terms"?.86:.68)*u[D]),d=(w,D)=>f[D]+(w-.68)/.32*(1-f[D]);function g(w,D,L){const N=Fn(w),O=Fn(w+1);return[{u:d(ic.side,w),pos:e(D*4.8,t,N+1),look:e(D*.3,1.25,N-6.6),fov:L},{u:d(ic.clear,w),pos:e(D*2,t,N-3.7),look:e(-D*.2,a()?-.5:1.2,N-9.5),fov:L,ease:"in"},{u:d(ic.pass,w),pos:e(D*.8,t,N-4.6),look:o(O),fov:L,ease:"out"},{u:1,pos:e(0,t,N-6.22),look:o(O),fov:L,ease:"in"}]}function _(w){return w[1].ease="out",a()&&(w[0].look=o(w[0].pos.z-6.22),w[1].look=w[2].look.clone()),w}function m(w,D,L,N){return _(w),w.forEach(O=>O.u*=u[D]),[...w,...g(D,L,N)]}function p(w,D,L){return w.forEach(N=>N.u*=u[1]),[...w,...g(1,D,L)]}function b(w){var D,L;for(let N=0;N<Ps.length;N++){const O=(D=w[c[N]])==null?void 0:D.beats,k=(L=w[h[N]])==null?void 0:L.beats;if(!O||!k)continue;const V=O[O.length-2],G=O[O.length-1],te=V.pos.distanceTo(G.pos),he=k[0].pos.distanceTo(k[1].pos),ce=n[c[N]].el.offsetHeight,Se=n[h[N]].el.offsetHeight,Qe=he*(1-V.u)*ce/Math.max(.001,te*Se);k[1].u=nt.clamp(Qe,.06,k[2].u-.08)}}const v=w=>u[Ps.indexOf(w)]??1;function x(w,D,L){return D>c[w]?1:D<c[w]?0:nt.clamp((L-f[w])/(1-f[w]),0,1)}const S=nt.smoothstep,R=i.map(()=>[null,null,null]);function E(w,D,L){if(R[w][D]===L)return;R[w][D]=L;const N=["s1","s0","s2"][D],O=i[w];if(Ht.killTweensOf(O,N),r){O[N]=L?1:0;return}L?Ht.timeline().to(O,{[N]:.75,duration:.05,ease:"power1.in"}).to(O,{[N]:.3,duration:.04,ease:"power1.out"}).to(O,{[N]:1,duration:.16,ease:"strike"}):Ht.to(O,{[N]:0,duration:.4,ease:"drain"})}function C(w,D){var L;for(let N=0;N<Ps.length;N++){const O=N+1,k=x(N,w,D);[.04,.12,.2].forEach((G,te)=>E(O,te,k>G));const V=i[O];(L=V.tl)==null||L.kill(),V.wash=S(k,.14,.5),V.lit=k>.2}}const y=[];for(let w=0;w<Ps.length;w++){const D=new Ut({uniforms:{uLevel:{value:0},uColor:{value:kw.clone()}},transparent:!0,depthWrite:!1,blending:Oo,vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uLevel; uniform vec3 uColor; varying vec2 vP;
        void main(){
          float y = 1.75 - vP.y;             // metres from the doorway
          float spread = ${ii.toFixed(2)} + y * 0.35;
          float a = 1.0 - smoothstep(spread * 0.3, spread * 1.3, abs(vP.x));
          a *= exp(-y * 1.1) * smoothstep(0.0, 0.3, y) * (1.0 - smoothstep(2.0, 3.4, y));
          gl_FragColor = vec4(uColor * a * uLevel * 0.035, 1.0);
        }`}),L=new st(new bn(5.2,3.5),D);L.rotation.x=-Math.PI/2,L.position.set(0,.003,Fw(w)+Un/2+1.75),L.renderOrder=2,L.visible=!1,s.showroom.group.add(L),s.mirror.hide(L),y.push(L)}function M(){y.forEach((w,D)=>{const L=i[D+1];w.material.uniforms.uLevel.value=(L.s0+L.s1+L.s2)/3*.7+L.wash*.3,w.visible=w.material.uniforms.uLevel.value>.01})}return{room:m,terms:p,enter:_,match:b,share:v,exit:x,lights:C,update:M}}const ci=Math.PI*2,Gw=30,am=ci/Gw,So=am/2,Vw=[1,5];function Ww(s){const{fleet:e,cars:t,sections:n,threshold:i,yawOf:r,reduceMotion:a,isPhone:o,showroom:l,mirror:c}=s,h=M=>{if(Vw.includes(M.room))return[.42,1];const w=i.share(M.id);return[.3*w,.68*w]},u=new Gt({color:2893086}),f=new Gt({color:7035462}),d=new Gt({color:0,transparent:!0,opacity:.28,depthWrite:!1}),g=e.map((M,w)=>{const D=new tn;D.position.set(0,.004,Fn(w));const L=new st(new Ha(2.92,160),d);L.rotation.x=-Math.PI/2,L.position.y=-.001,D.add(L);const N=new st(new Ih(2.92,2.96,160),u);N.rotation.x=-Math.PI/2,D.add(N);const O=new tn;for(let k=0;k<8;k++){const V=new st(new bn(.03,.22),f);V.rotation.x=-Math.PI/2,V.rotation.z=k/8*ci,V.position.set(Math.sin(k/8*ci)*2.78,.001,Math.cos(k/8*ci)*2.78),O.add(V)}return D.add(O),l.group.add(D),c.hide(D),O}),_=e.map(()=>({angle:0,speed:0,target:0}));let m=n[0],p=0;const b=n.map((M,w)=>{for(let D=w;D>=0;D--)if(n[D].kind==="room")return n[D].room;return-1});let v=-1;const x=document.createElement("div");x.className="cr-layer",x.setAttribute("aria-hidden","true"),document.body.appendChild(x);const S=e.map(M=>M.condition.map((w,D)=>{const L=document.createElement("div");return L.className="cr-note",L.innerHTML=`<span class="cr-dot"></span><span class="cr-card"><span class="cr-n">0${D+1}</span><span>${w}</span></span>`,x.appendChild(L),{el:L,k:D}})),R=(M,w)=>{const D=t[M].box,L=D.getSize(new I),N=(D.min.x+D.max.x)/2;return[[new I(N,D.min.y+.42*L.y,D.min.z+.08*L.z),new I(0,0,-1)],[new I(D.min.x+.06*L.x,D.min.y+.3*L.y,D.min.z+.2*L.z),new I(-1,0,0)],[new I(N,D.max.y-.1*L.y,D.min.z+.52*L.z),null],[new I(N,D.min.y+.55*L.y,D.max.z-.05*L.z),new I(0,0,1)]][w]},E=new I,C=new I,y=new I;return{target(M,w,D){m=M,p=w;const L=b[D];L!==v&&(_.forEach((N,O)=>{O===L?N.target=(Math.floor(N.angle/ci+.02)+1)*ci:O===v&&(N.target=Math.round(N.angle/ci)*ci)}),v=L)},step(M,w){M=Math.min(M,.1),_.forEach((N,O)=>{if(a)N.angle=0;else{const k=N.target-N.angle,V=Math.sign(k)*Math.min(am,Math.sqrt(2*.9*So*Math.abs(k)));if(N.speed+=nt.clamp(V-N.speed,-So*M,So*M),N.angle+=N.speed*M,Math.abs(N.target-N.angle)<.001&&Math.abs(N.speed)<So*M*2){const G=Math.round(N.target/ci);N.angle=N.target=N.target-G*ci,N.speed=0}}t[O]&&(t[O].yawGroup.rotation.y=nt.degToRad(r(O)+180)+N.angle,t[O].yawGroup.updateMatrixWorld()),g[O].rotation.y=N.angle});const D=window.innerWidth,L=window.innerHeight;S.forEach((N,O)=>{var he;const k=t[O];let V=!1;if(k&&m.kind==="room"&&m.room===O){const[ce,Se]=h(m);V=p>ce+.02&&p<Se-.02}const G=V?(he=document.querySelector(`.label[data-car="${e[O].id}"].is-on`))==null?void 0:he.getBoundingClientRect():null;let te=null;N.forEach(ce=>{let Se=!1;if(V){const[Qe,K]=R(O,ce.k);E.copy(Qe).applyMatrix4(k.yawGroup.matrixWorld),y.copy(w.position).sub(E).normalize();const ne=K?C.copy(K).transformDirection(k.yawGroup.matrixWorld).dot(y):1;E.project(w);const de=(E.x+1)/2*D,fe=(1-E.y)/2*L;Se=ne>.25&&E.z<1&&de>40&&de<D-40&&fe>80&&fe<L-60;const Le=ce.el.offsetWidth||260,Fe=de+Le>D-24||G&&de+Le>G.left-16&&fe>G.top-30&&fe<G.bottom+30,ke=Fe?de-Le:de,Be=ce.el.offsetHeight||44;G&&ke<G.right+16&&ke+Le>G.left-16&&fe<G.bottom+16&&fe+Be>G.top-16&&(Se=!1),Se&&o()&&(!te||ne>te.facing)&&(te={n:ce,facing:ne}),ce.el.classList.toggle("is-left",!!Fe),Se&&(ce.el.style.transform=`translate(${(Fe?de-Le+3.5:de-3.5).toFixed(1)}px, ${(fe-3.5).toFixed(1)}px)`)}ce.el.classList.toggle("is-on",Se&&(!o()||(te==null?void 0:te.n)===ce))}),o()&&te&&N.forEach(ce=>ce.el.classList.toggle("is-on",ce===te.n))})}}}const hd=.3,Xw=pi+.09,qw=new ve(1,.86,.72);function jw({scene:s,mirror:e,reduceMotion:t}){const n=Qt.uRise.value,i={level:0,top:0},r=new Gt({color:0}),a=pr-ii;for(const o of[-1,1]){const l=new st(new vs(a,.004,.022),r);l.position.set(o*(ii+a/2),.002,Xw),s.add(l),e.hide(l)}return{play(o,l){if(t){Object.assign(i,{level:hd,top:ui+2});return}o.timeline({delay:l}).to(i,{level:1.8,duration:.05,ease:"power1.in"}).to(i,{level:.35,duration:.05,ease:"power1.out"}).to(i,{level:1.2,duration:.08,ease:"power1.in"}).to(i,{level:hd,duration:1.6,ease:"gallery"},2.5),o.to(i,{top:ui+.2,duration:2.6,ease:"sine.out",delay:l+.1})},get level(){return i.level},update(o){n.set(i.top,i.level*o),r.color.copy(qw).multiplyScalar(2.4*i.level*o)}}}const Yw=["No","One","Two","Three","Four","Five","Six","Seven","Eight"];function Kw(s){const e=(s>>16&255)/255,t=(s>>8&255)/255,n=(s&255)/255,i=Math.max(e,t,n),r=Math.min(e,t,n),a=(i+r)/2,o=i-r,l=o===0?0:o/(1-Math.abs(2*a-1));let c=0;return o&&(c=i===e?(t-n)/o%6:i===t?(n-e)/o+2:(e-t)/o+4),`hsl(${Math.round((c*60+360)%360)} ${Math.round(Math.min(l,.72)*100)}% ${Math.round(Math.max(a,.64)*100)}%)`}function $w({fleet:s,goTo:e,lenis:t,reduceMotion:n}){const i=document.getElementById("nav-where"),r=i.closest(".nav"),a=document.querySelector(".nav-progress i"),o=document.getElementById("ix-open"),l=`${Yw[s.length]??s.length} cars`,c=s.map(p=>Kw(p.paintHex));let h=null;const u=(p,b)=>{if(p.kind==="hero")return`<span class="nw-n">Hall</span>${l}, open tonight`;if(p.kind==="terms")return`<span class="nw-n">${s[1].number}</span>The conditions`;if(p.kind==="works")return`<span class="nw-n">${s[s.length-1].number}</span>The list of works`;if(p.kind==="request")return'<span class="nw-n">Desk</span>Request a loan';const v=s[b];return v?`<span class="nw-n">Room ${v.number}</span><span class="nw-car">${v.title}</span>`:""},f=document.createElement("div");f.className="ix",f.id="ix",f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-label","Visitor’s guide"),f.tabIndex=-1;const d=p=>`€${p.toLocaleString("en-GB")}`;f.innerHTML=`<div class="ix-inner">
    <p class="ix-kicker">Visitor’s guide · ${s.length} rooms, open tonight</p>
    ${s.map((p,b)=>`<button type="button" class="ix-row" data-room="${b}">
          <span class="ix-n">${p.number}</span><span class="ix-t">${p.title}<span class="ix-held" id="ix-held-${p.id}" hidden> · on loan</span></span>
          <span class="ix-o">${p.origin}</span><span class="ix-p">${d(p.rates.day)} a day</span>
        </button>`).join("")}
    <div class="ix-foot"><button type="button" data-go-ix="s-terms">The conditions</button><button type="button" data-go-ix="s-works">The list of works</button><button type="button" data-go-ix="s-request">Request a loan</button></div>
  </div>`,document.body.appendChild(f);const g=[...f.querySelectorAll("button")],_=()=>f.classList.contains("is-open"),m=(p,{returnFocus:b=!0}={})=>{p!==_()&&(f.classList.toggle("is-open",p),o.setAttribute("aria-expanded",String(p)),o.textContent=p?"Close":"Index",p?(t==null||t.stop(),f.focus({preventScroll:!0})):(t==null||t.start(),b&&f.contains(document.activeElement)&&o.focus({preventScroll:!0})))};return o.addEventListener("click",()=>m(!_())),window.addEventListener("keydown",p=>{if(_()&&(p.key==="Escape"&&m(!1),p.key==="Tab")){const b=[...g,o],v=b.indexOf(document.activeElement),x=v<0?p.shiftKey?b.length-1:0:(v+(p.shiftKey?-1:1)+b.length)%b.length;p.preventDefault(),b[x].focus({preventScroll:!0})}}),f.addEventListener("click",p=>p.target===f&&m(!1)),f.querySelectorAll(".ix-row").forEach(p=>p.addEventListener("click",()=>{m(!1,{returnFocus:!1}),e(`s-room-${Number(p.dataset.room)+1}`)})),f.querySelectorAll("[data-go-ix]").forEach(p=>p.addEventListener("click",()=>{m(!1,{returnFocus:!1});const b=p.dataset.goIx;e(b,b==="s-request"?()=>document.getElementById("f-car").focus({preventScroll:!0}):void 0)})),n&&f.classList.add("is-still"),{update(p,b,v){const x=document.documentElement.scrollHeight-innerHeight;a.style.transform=`scaleX(${(v/Math.max(1,x)).toFixed(4)})`;const S=u(p,b);i.innerHTML!==S&&(i.innerHTML=S);const R=p.kind!=="hero"&&p.kind!=="request"?c[b]??null:null;R!==h&&(h=R,R?r.style.setProperty("--car",R):r.style.removeProperty("--car"))}}}const om=new URLSearchParams(location.search),wo=om.has("debug"),Zt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,li=()=>window.innerWidth<768;function nu(s,e,t,n){const i=3*s,r=3*(t-s)-i,a=1-i-r,o=3*e,l=3*(n-e)-o,c=1-o-l,h=d=>((a*d+r)*d+i)*d,u=d=>((c*d+l)*d+o)*d,f=d=>(3*a*d+2*r)*d+i;return d=>{if(d<=0)return 0;if(d>=1)return 1;let g=d;for(let _=0;_<8;_++){const m=h(g)-d;if(Math.abs(m)<1e-5)break;const p=f(g);if(Math.abs(p)<1e-6)break;g-=m/p}return u(Math.min(1,Math.max(0,g)))}}Ht.registerEase("gallery",nu(.16,1,.3,1));Ht.registerEase("drain",nu(.65,0,.35,1));Ht.registerEase("strike",nu(.2,.9,.25,1.15));const Jw=s=>-.5*(Math.cos(Math.PI*nt.clamp(s,0,1))-1),Zw={in:s=>1-Math.cos(Math.PI/2*nt.clamp(s,0,1)),out:s=>Math.sin(Math.PI/2*nt.clamp(s,0,1))},We=(s,e,t)=>new I(s,e,t),na=nt.degToRad,Os=[{yaw:24,phoneYaw:12,desk:{az:-44,dist:6.5,h:1.5,fov:40,frame:[-.34,-.02]},move:{ddist:-.7},phone:{fov:74},letterX:3.9,letterInset:3.55},{yaw:-32,phoneYaw:-16,desk:{az:72,dist:5.9,h:1.26,fov:40,frame:[.3,-.14]},move:{side:.9},phone:{fov:74},letterX:-3.9},{yaw:90,desk:{az:-56,dist:7,h:1.5,fov:42,frame:[-.16,-.2]},move:{side:-.7},phone:{fov:78},phoneYaw:28,letterX:-3.9,letterInset:3},{yaw:-20,phoneYaw:-10,desk:{az:24,dist:6.4,h:1.05,fov:40,frame:[.3,.04]},move:{daz:10,dh:.2},phone:{fov:74},letterX:-3.9,letterInset:3},{yaw:-62,phoneYaw:-55,desk:{az:67,dist:6.2,h:1.5,fov:40,frame:[.42,.08]},move:{daz:-11,dh:-.25},phone:{fov:74},letterX:-3.9,letterInset:3.2},{yaw:-28,phoneYaw:-14,desk:{az:42,dist:6.2,h:1.4,fov:40,frame:[.32,-.02]},move:{daz:14},phone:{fov:74},letterX:-3.9,letterInset:3.3}],cr=1.62,ia=s=>window.innerWidth<768&&Os[s].phoneYaw!==void 0?Os[s].phoneYaw:Os[s].yaw,ud={w:1.05,l:2.42},ua=en.length,Di=ua-1;async function Qw(){const s=performance.now(),e=window.__c2v3Timing={},t=U=>e[U]=Math.round(performance.now()-s),n=document.getElementById("c2v3-canvas");let i;try{i=new Ax({canvas:n,antialias:!1,powerPreference:"high-performance"})}catch{document.getElementById("no-light").hidden=!1,document.getElementById("nav").classList.remove("is-away"),document.body.classList.remove("is-loading");return}let r=1.5;i.setPixelRatio(Math.min(window.devicePixelRatio||1,r)),i.setSize(window.innerWidth,window.innerHeight),i.toneMapping=pd,i.outputColorSpace=St,i.setClearColor(328708,1);const a=new Ra;a.background=new ve(197379),a.fog=new Ah(197379,24,92);const o=new ln(36,window.innerWidth/window.innerHeight,.08,120);nT(),iT();const l=sT();await Nw().catch(()=>{}),t("fonts"),yw(),t("textures");const c=Rw(i);t("env");const h=new Ew(a,c),u=en.map(U=>Ma("wall",{color:U.room.wall,pattern:U.room.pattern}));h.setWallMaterials(U=>u[U]);const f=new Aw(i,Qt);f.hide(h.floor),f.onBefore=()=>h.setReflectionPass(!0),f.onAfter=()=>h.setReflectionPass(!1);const d=jw({scene:a,mirror:f,reduceMotion:Zt}),g={color:h.wallMat.color.getHex()},_={desk:nc([{text:"Veloce Privé",font:"caslon",size:1.25,tracking:-.012},{text:"A PRIVATE COLLECTION",font:"franklin",size:.17,weight:600,tracking:.3,gap:.3}],{align:"center",engrave:g}),phone:nc([{text:"Veloce",font:"caslon",size:.86,tracking:-.012},{text:"Privé",font:"caslon",size:.86,tracking:-.012},{text:"A PRIVATE COLLECTION",font:"franklin",size:.19,weight:600,tracking:.24,gap:.24}],{align:"center",engrave:g})};_.desk.position.set(0,4.9,6.446),_.phone.position.set(0,4.85,6.446),_.phone.scale.setScalar(.88);for(const U of Object.values(_))h.group.add(U),f.hide(U);const m=en.map((U,j)=>{const ee=Os[j],ae=U.title.split(" "),se=U.title.length>20?[ae.slice(0,1).join(" "),ae.slice(1).join(" ")]:[U.title],$=nc([{text:U.number,font:"franklin",size:.14,weight:500},...se.map((kt,jt)=>({text:kt,font:"caslon",size:.36,gap:jt===0?.12:0,tracking:-.01})),{text:U.origin,font:"franklin",size:.12,weight:400,gap:.1},{text:U.engine,font:"franklin",size:.12,weight:400,gap:.02},{text:U.run?`${U.paintName}. ${U.run}`:U.paintName,font:"franklin",size:.12,weight:400,gap:.02}],{align:"left",color:U.room.ink?2762016:void 0}),Ee=Fn(j)-6+.006,Ge=$.userData.size,$e=ee.letterInset??2.25,xt=ee.letterX>0?$e+Ge.w/2:-$e-Ge.w/2;return $.position.set(xt,2.15,Ee),h.group.add($),Qt.uLabel.value[j].set(xt,2.15),f.hide($),$}),p=m.map((U,j)=>{const ee=document.createElement("span");ee.className="red-dot wall-dot",ee.setAttribute("aria-hidden","true"),document.body.appendChild(ee);const{laid:ae,pad:se,size:$}=U.userData,Ee=ae[0],Ge=(se+Ee.w)/420+.16-$.w/2,$e=$.h/2-(se+Ee.top+Ee.lineH*.55)/420,xt=document.querySelector(`.label[data-car="${en[j].id}"]`);return{el:ee,label:xt,anchor:new I(Ge,$e,0),mesh:U,on:!!en[j].reservedUntil}});window.addEventListener("c2v3:reserved",U=>p[U.detail.roomIndex].on=!0);const b=new I;function v(U,j){var ee;for(let ae=0;ae<p.length;ae++){const se=p[ae],$=se.on&&!li()&&U.kind==="room"&&U.room===ae&&((ee=se.label)==null?void 0:ee.classList.contains("is-on"));se.el.classList.toggle("is-on",$),$&&(b.copy(se.anchor),se.mesh.localToWorld(b),b.project(o),se.el.style.transform=`translate(${(b.x+1)/2*window.innerWidth-4.5}px, ${(1-b.y)/2*window.innerHeight-4.5}px)`)}}const x=[];h.group.traverse(U=>{var ee,ae;const j=(ae=(ee=U.material)==null?void 0:ee.userData)==null?void 0:ae.galleryKind;U.isMesh&&(j==="wall"||j==="floor")&&x.push(U)});const S=new oe;i.getDrawingBufferSize(S);const R=new nn(S.x,S.y,{type:Hn,samples:4}),E=new SS(i,R);E.addPass(new wS(a,o));const C=new Fr(new oe(window.innerWidth/2,window.innerHeight/2),.3,.5,2.6);E.addPass(C);const y=Iw(),M=new nm(y);E.addPass(M);const w=()=>{i.setPixelRatio(Math.min(window.devicePixelRatio||1,r)),i.setSize(window.innerWidth,window.innerHeight),E.setPixelRatio(i.getPixelRatio()),E.setSize(window.innerWidth,window.innerHeight),C.resolution.set(window.innerWidth/2,window.innerHeight/2),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix();const U=i.getDrawingBufferSize(new oe);f.setSize(U.x,U.y),Qt.uResolution.value.set(U.x,U.y),_.desk.visible=!li(),_.phone.visible=li(),m.forEach(j=>j.visible=!li()),L.forEach((j,ee)=>j&&(j.yawGroup.rotation.y=na(ia(ee)+180))),mt()},D=new bw,L=new Array(ua).fill(null);wo&&(window.__c2v3Cars=L);async function N(U){const j=en[U],ee=await D.loadCar(j,c),ae=ee.root;ae.position.set(0,0,0),ae.rotation.set(0,0,0);const se=new hn().setFromObject(ae),$=Dw(i,ae,{margin:.75,height:.85});ae.add($),f.hide($);const Ee=new tn;Ee.rotation.y=na(ia(U)+180),Ee.add(ae),h.rooms[U].stand.add(Ee),L[U]={entry:ee,yawGroup:Ee,shadow:$,box:se},Se(U),Ee.visible=!0,await i.compileAsync(a,o).catch(()=>{})}const O=en.map(()=>({s0:0,s1:0,s2:0,wash:0,lit:!1,tl:null}));wo&&(window.__c2v3Lights=O);const k={v:0},V={v:0},G=en.map(()=>({v:0}));let te=0;const he=.09;function ce(U){const j=.08+U*.12;return 1-(1-(U===Di?.2:0))*nt.smoothstep(te,j,j+.16)}function Se(U){const j=L[U];if(!j)return;const ee=O[U],ae=(ee.s0+ee.s1+ee.s2)/3,se=.05+.95*Math.min(1,.6*ae+.4*ee.wash);D.setLightLevel(j.entry,se*ce(U)+.03)}function Qe(){for(let U=0;U<ua;U++){const j=O[U],ee=ce(U);Qt.uWash.value[U]=Math.max(j.wash,he*V.v*G[U].v)*ee,Qt.uNightRoom.value[U]=G[U].v,Qt.uPool.value[U]=(j.s0+j.s1+j.s2)/3*ee,h.setBankLevels(U,[j.s0*ee,j.s1*ee,j.s2*ee]),Se(U)}Qt.uHall.value=k.v*(1-nt.smoothstep(te,0,.14)),d.update(1-nt.smoothstep(te,0,.14)),h.setHallLevel(Qt.uHall.value),Qt.uNight.value=V.v*(1-.6*te),h.updateDoorLines(Qt.uNight.value,Qt.uNightRoom.value,Math.max(Qt.uHall.value,.8*d.level))}function K(U,j=0){var se;const ee=O[U];if(ee.lit)return;if(ee.lit=!0,(se=ee.tl)==null||se.kill(),Zt){Object.assign(ee,{s0:1,s1:1,s2:1,wash:1});return}const ae=Ht.timeline({delay:j});["s1","s0","s2"].forEach(($,Ee)=>{const Ge=Ee*.22;ae.to(ee,{[$]:.75,duration:.05,ease:"power1.in"},Ge).to(ee,{[$]:.3,duration:.04,ease:"power1.out"},Ge+.05).to(ee,{[$]:1,duration:.16,ease:"strike"},Ge+.09)}),ae.to(ee,{wash:1,duration:.95,ease:"gallery"},.5),ee.tl=ae}const ne=[...document.querySelectorAll("main .sec")].map(U=>({el:U,id:U.id,kind:U.dataset.sec,room:U.dataset.room!==void 0?Number(U.dataset.room):null,reveals:[...U.querySelectorAll(".reveal")].map(j=>({el:j,win:(j.dataset.window||"0,1").split(",").map(Number)}))})),de=Hw({V:We,EYE:cr,sections:ne,lights:O,reduceMotion:Zt,isPhone:li,showroom:h,mirror:f}),fe=Ww({fleet:en,cars:L,sections:ne,threshold:de,yawOf:ia,reduceMotion:Zt,isPhone:li,showroom:h,mirror:f});function Le(U){return We(0,0,Fn(U))}function Fe(U,j,ee=null){const se=Os[U][j],$=ee?{...se,az:se.az+(ee.daz??0),dist:se.dist+(ee.ddist??0),h:se.h+(ee.dh??0)}:se,Ee=Le(U);if(j==="phone"){const dt=We($.x??0,1.9,Ee.z+6.08);return{pos:dt,look:ke(dt,We(0,.55,Ee.z),[0,.32],$.fov),fov:$.fov}}const Ge=na(ia(U)+$.az),$e=We(Ee.x+Math.sin(Ge)*$.dist,$.h,Ee.z+Math.cos(Ge)*$.dist);if(ee!=null&&ee.side){const dt=Ee.clone().sub($e).setY(0).normalize();$e.add(new I(-dt.z,0,dt.x).multiplyScalar(ee.side))}$e.x=nt.clamp($e.x,-6.2,6.2);const xt=Ee.z+5.7;$e.z>xt&&Math.abs($e.x)>1.3&&($e.z=xt);const kt=We(Ee.x,.62,Ee.z),jt=ke($e,kt,$.frame,$.fov);return{pos:$e,look:jt,fov:$.fov}}function ke(U,j,ee,ae){const se=j.clone().sub(U),$=se.length();se.normalize();const Ee=window.innerWidth/window.innerHeight,Ge=Math.tan(na(ae/2)),$e=Math.atan(ee[0]*Ge*Ee),xt=Math.atan(ee[1]*Ge),kt=new I().crossVectors(se,We(0,1,0)).normalize();return se.applyAxisAngle(We(0,1,0),$e),se.applyAxisAngle(kt,-xt),U.clone().add(se.multiplyScalar($))}const Be=(U,j,ee,ae)=>({u:U,pos:j,look:ee,fov:ae});function Ke(U,j,ee){const ae=Fn(U),se=j==="phone"?62:38,$=Fe(U,j),Ee=Le(U),Ge=$.pos.x>=.4?1:$.pos.x<=-.4||Os[U].letterX>0?-1:1,$e=Be(0,We(0,cr,ae+6.22),We(0,.95,ae),se),xt=Be(.16,We(nt.lerp(0,$.pos.x,.5),nt.lerp(cr,$.pos.y,.5),nt.lerp(ae+6,$.pos.z,.55)),$.look.clone().lerp(Ee.clone().setY(.7),.4),nt.lerp(se,$.fov,.5)),kt=j==="phone"?null:Fe(U,j,Os[U].move),jt=kt?kt.pos:$.pos.clone().lerp(Ee.clone().setY($.pos.y),.05),dt=kt?kt.look:$.look;if(ee==="toHold"){const Mi=[$e,{...xt,u:.24},Be(.42,$.pos,$.look,$.fov),Be(1,jt,dt,$.fov)];return de.enter(Mi)}return de.room([$e,xt,Be(.3,$.pos,$.look,$.fov),Be(.68,jt,dt,$.fov)],U,Ge,se)}function Tt(U){const j=U==="phone",ee=j?70:39,ae=j?13.2:16.7,se=j?2.75:2.87;return[Be(0,We(0,1.66,ae),We(0,se,6.44),ee),Be(.3,We(0,1.66,ae-.35),We(0,se,6.44),ee),Be(.72,We(0,1.64,10.6),We(0,1.2,-2),ee),Be(1,We(0,cr,6.22),We(0,.95,0),j?62:38)]}function H(U,j){const ee=Fn(1),ae=U==="phone",se=ae?We(3.9,1.85,ee+5.4):We(-3.4,1.62,ee+5.2),$=ae?62:40,Ee=ke(se,We(0,.6,ee),ae?[0,.52]:[.8,-.46],$),Ge=[Be(0,j.pos,j.look,j.fov),Be(.22,se,Ee,$),Be(.86,se.clone().add(We(.14,0,-.16)),Ee,$)];return de.terms(Ge,Math.sign(se.x),ae?62:38)}function yn(U,j){const ee=Fn(Di),ae=U==="phone",se=ae?We(-1.6,1.8,ee-5.3):We(-1.25,1.78,ee-5.5),$=ae?60:42,Ee=ae?ke(se,We(0,.7,ee),[.1,.62],$):We(-6.2,.55,ee+40);return[Be(0,j.pos,j.look,j.fov),Be(.14,We(3.9,cr,ee+1.2),We(0,.6,ee),ae?62:38),Be(.28,We(3.5,cr,ee-3.8),We(0,.7,ee-1.2),ae?62:40),Be(.44,se,Ee,$),Be(1,se.clone().add(We(.05,0,.08)),Ee,$)]}function et(U,j){const ee=Fn(Di),ae=U==="phone",se=ae?We(-2.6,1.6,ee-4.6):We(-5.2,1.48,ee-4.2),$=We(0,.65,ee),Ee=ae?ke(se,$,[0,.62],60):ke(se,$,[.56,0],38),Ge=ae?60:38;return[Be(0,j.pos,j.look,j.fov),Be(.32,se,Ee,Ge),Be(1,se.clone().add(We(.04,0,.06)),Ee,Ge)]}let Ye=[];function Ue(U){const j=new jc(U.map(ae=>ae.pos),!1,"centripetal"),ee=new jc(U.map(ae=>ae.look),!1,"centripetal");return{beats:U,posCurve:j,lookCurve:ee}}function mt(){const U=li()?"phone":"desk",j=[],ee=Tt(U);j.push(ee),j.push(Ke(0,U));const ae=Ke(1,U,"toHold");j.push(ae),j.push(H(U,ae[ae.length-1]));for(let Ee=2;Ee<Di;Ee++)j.push(Ke(Ee,U));const se=Ke(Di,U,"toHold");j.push(se);const $=yn(U,se[se.length-1]);j.push($),j.push(et(U,$[$.length-1])),Ye=j.map(Ue),de.match(Ye),wo&&Ne()}function Ne(){const U=new I;Ye.forEach((j,ee)=>{var ae;for(let se=0;se<=400;se++){j.posCurve.getPoint(se/400,U);for(let $=0;$<ua;$++){const Ee=-na(ia($)),Ge=U.x,$e=U.z-Fn($),xt=Ge*Math.cos(Ee)+$e*Math.sin(Ee),kt=-Ge*Math.sin(Ee)+$e*Math.cos(Ee),jt=Math.max(Math.abs(xt)-ud.w,0),dt=Math.max(Math.abs(kt)-ud.l,0),Mi=Math.hypot(jt,dt);if(Mi<.9){console.info(`[clearance] section ${(ae=ne[ee])==null?void 0:ae.id} passes ${Mi.toFixed(2)} m from car ${$+1}`);break}}}})}const P={hero:0,room:2,terms:1,works:3,request:1},T=(U,j)=>Math.min(P[U.kind]??0,j.length-1);function W(U,j){const ee=window.innerHeight;let ae=0;for(let dt=0;dt<ne.length;dt++)U>=ne[dt].el.offsetTop&&(ae=dt);const se=ne[ae],$=nt.clamp((U-se.el.offsetTop)/se.el.offsetHeight,0,1),Ee=Ye[ae],Ge=Ee.beats;let $e=0;for(;$e<Ge.length-2&&$>Ge[$e+1].u;)$e++;let xt;if(Zt){const dt=T(se,Ge);return j.pos.copy(Ge[dt].pos),j.look.copy(Ge[dt].look),j.fov=Ge[dt].fov,{si:ae,u:$}}const kt=($-Ge[$e].u)/Math.max(1e-4,Ge[$e+1].u-Ge[$e].u);xt=(Zw[Ge[$e+1].ease]??Jw)(kt);const jt=($e+xt)/(Ge.length-1);return Ee.posCurve.getPoint(jt,j.pos),Ee.lookCurve.getPoint(jt,j.look),j.fov=nt.lerp(Ge[$e].fov,Ge[$e+1].fov,xt),{si:ae,u:$,vh:ee}}let Z=null;Zt||(Z=new bS({lerp:.07,smoothWheel:!0,wheelMultiplier:.9}),Ht.ticker.add(U=>Z.raf(U*1e3)),Ht.ticker.lagSmoothing(0));function ie(U,j){const ee=document.getElementById(U);if(!ee)return;const ae=window.innerHeight;let se=ee.offsetTop;const $=ee.dataset.sec;$==="room"&&(se+=ee.offsetHeight*.48),$==="terms"&&(se+=ee.offsetHeight*.5),$==="works"&&(se+=ee.offsetHeight*.62),$==="request"&&(se+=ee.offsetHeight*.42),U==="s-hero"&&(se=0),se=Math.min(se,document.documentElement.scrollHeight-ae),Z?Z.scrollTo(se,{duration:2.4,easing:Ht.parseEase("power3.inOut"),onComplete:j}):(window.scrollTo(0,se),j==null||j())}const J=document.getElementById("nav"),Te=.62,ge=$w({fleet:en,goTo:ie,lenis:Z,reduceMotion:Zt});document.querySelectorAll("[data-go]").forEach(U=>U.addEventListener("click",j=>{j.preventDefault();const ee=U.dataset.go==="s-request"?()=>document.getElementById("f-car").focus({preventScroll:!0}):void 0;ie(U.dataset.go,ee)})),document.querySelector(".skip-link").addEventListener("click",U=>{U.preventDefault(),ie("s-request",()=>document.getElementById("f-car").focus({preventScroll:!0}))}),document.addEventListener("click",U=>{const j=U.target.closest("[data-request]");j&&(U.preventDefault(),l.choose(j.dataset.request),ie("s-request",()=>document.getElementById("f-from").focus({preventScroll:!0})))});const ue={ndc:new oe,active:!1,pos:We(0,-10,0),target:We(0,-10,0),w:0};wo&&(window.__c2v3Torch=ue);const tt=new Wy;window.addEventListener("pointermove",U=>{if(U.pointerType!=="mouse")return;ue.ndc.set(U.clientX/window.innerWidth*2-1,-(U.clientY/window.innerHeight)*2+1);const j=document.elementFromPoint(U.clientX,U.clientY);ue.active=!j||j===n||j.classList.contains("pin")||j.tagName==="MAIN"||j.classList.contains("sec")}),document.addEventListener("pointerleave",()=>ue.active=!1);let re=0;window.addEventListener("pointerdown",U=>{if(U.pointerType==="mouse")return;const j=document.elementFromPoint(U.clientX,U.clientY);j&&j!==n&&j.closest("a, button, input, select, label, p, h1, h2, h3, li")||(ue.ndc.set(U.clientX/window.innerWidth*2-1,-(U.clientY/window.innerHeight)*2+1),re=performance.now()+1400)});const be={pos:We(0,1.66,16.7),look:We(0,3.05,6.44),fov:36},Ie={pos:We(),look:We(),fov:36};let Oe=!0;window.__snapScroll=()=>Oe=!0;const Me=document.getElementById("s-footer"),Je=[...document.querySelectorAll(".term")];let ze=!1,ht=performance.now(),F=0,pe=-1,Y=0,Q=0;function xe(U){const j=window.innerHeight,ee=W(U,Ie),{si:ae,u:se}=ee,$=ne[ae];fe.target($,se,ae);const Ee=nt.clamp((U+j-Me.offsetTop)/Me.offsetHeight,0,1);for(const Bt of ne){const zt=(U-Bt.el.offsetTop)/Bt.el.offsetHeight;for(const Si of Bt.reveals){const A=Zt?.02:Si.win[0],B=Zt?1.01:Si.win[1];let X=Bt===$&&zt>=A&&zt<=B&&ze;Bt.kind==="request"&&(X=Bt===$&&zt>=Si.win[0]&&Ee<.22&&ze),Bt.kind==="hero"&&(X=Bt===$&&zt<=Si.win[1]&&He),Si.el.classList.toggle("is-on",X)}}const Ge=se/de.share($.id);if($.kind==="terms"&&li()){const Bt=Ge<.42?0:Ge<.63?1:2;Je.forEach(zt=>zt.classList.toggle("is-page",Number(zt.dataset.page)===Bt))}else li()||Je.forEach(Bt=>Bt.classList.add("is-page"));ze&&gt&&de.lights(ae,se),te=Zt?0:Ee,Zt&&Ee>.6&&(te=1),y.uniforms.uFade.value=1-.2*nt.smoothstep(Ee,.7,1);const $e=$.kind!=="hero"?0:Zt?1:1-nt.smoothstep(se,.42,.6);_.desk.material.opacity=_.phone.material.opacity=$e;const xt=$.kind==="room"?$.room:$.kind==="terms"?1:$.kind==="hero"?-1:Di;m.forEach((Bt,zt)=>{const Si=Zt?+(zt===xt):zt===0?$.kind==="hero"?nt.smoothstep(se,.85,1):1:nt.smoothstep(de.exit(zt-1,ae,se),.8,.97),A=zt<Di?nt.smoothstep(de.exit(zt,ae,se),.3,.55):0,B=zt===1&&$.kind==="terms"?nt.smoothstep(Ge,0,.1):0;Bt.material.opacity=Si*(1-A)*(1-B)});const kt=$.kind==="hero"||$.kind==="works"||$.kind==="request",jt=$.kind==="room"?$.room:$.kind==="terms"?1:0;L.forEach((Bt,zt)=>{Bt&&(Bt.yawGroup.visible=kt||Math.abs(zt-jt)<=1||$.kind==="terms"&&zt===2)});const dt=$.kind==="room"?$.room:$.kind==="terms"?1:null,Mi=dt===null?nt.clamp(Math.floor((6.22-Ie.pos.z)/12.44),-1,Di):dt<Di&&de.exit(dt,ae,se)>.8?dt+1:dt;ge.update($,Mi,U),J.classList.toggle("is-away",$.kind==="hero"&&se<Te),ae!==pe&&(pe=ae,document.body.dataset.section=$.id)}function _e(U){requestAnimationFrame(_e);const j=Math.min(.05,(U-ht)/1e3);ht=U;const ee=window.scrollY;xe(ee);const ae=Oe||Zt?1:1-Math.exp(-j/.13);Oe=!1,be.pos.lerp(Ie.pos,ae),be.look.lerp(Ie.look,ae),be.fov+=(Ie.fov-be.fov)*ae,o.position.copy(be.pos),o.lookAt(be.look),Math.abs(o.fov-be.fov)>.001&&(o.fov=be.fov,o.updateProjectionMatrix()),o.updateMatrixWorld(),fe.step(j,o);const se=U<re;if((ue.active&&!li()||se)&&!Zt){tt.setFromCamera(ue.ndc,o);const $=tt.intersectObjects(x,!1)[0];$&&ue.target.copy($.point),ue.w+=((se?2.2:1.6)-ue.w)*(1-Math.exp(-j/.3))}else ue.w+=(0-ue.w)*(1-Math.exp(-j/.4));ue.pos.lerp(ue.target,1-Math.exp(-j/.12)),Qt.uTorch.value.set(ue.pos.x,ue.pos.y,ue.pos.z,ue.w*(1-te)),Qe(),de.update(),v(ne[pe]??ne[0]),y.uniforms.uTime.value=U/1e3,f.update(a,o),E.render(j),F++,F===3&&ze&&(window.__c2v3Ready=!0),gt&&window.__c2v3AllLoaded&&!document.hidden&&!om.has("hq")&&j<.05&&(Y+=j,Q++,Q===90&&(Y/Q>.019&&i.getPixelRatio()>1&&(r=Math.max(1,i.getPixelRatio()-.25),w(),e.dprStep=(e.dprStep||0)+1),Y=0,Q=0))}w(),window.addEventListener("resize",()=>{w(),Oe=!0});let He=!1,gt=!1;if(t("showroom"),await N(0),t("ferrari"),ze=!0,requestAnimationFrame(_e),document.body.classList.add("is-lit"),Zt?document.body.classList.remove("is-loading"):Ht.delayedCall(2.4,()=>document.body.classList.remove("is-loading")),Zt){for(let U=0;U<ua;U++)Object.assign(O[U],{s0:1,s1:1,s2:1,wash:1,lit:!0});k.v=1,V.v=1,G.forEach(U=>U.v=1),d.play(Ht,0),He=!0,gt=!0}else d.play(Ht,.9),Ht.to(k,{v:1,duration:1.4,ease:"gallery",delay:2}),Ht.to(V,{v:1,duration:1.2,ease:"gallery",delay:2.2}),K(0,2.6),G.forEach((U,j)=>{const ee=j===0?2.6:3.4+(j-1)*.4;Ht.timeline({delay:ee}).to(U,{v:.75,duration:.05,ease:"power1.in"}).to(U,{v:.3,duration:.04,ease:"power1.out"}).to(U,{v:1,duration:.7,ease:"gallery"})}),Ht.delayedCall(2.7,()=>He=!0),Ht.delayedCall(3,()=>gt=!0);const qt=[1,2,3,4,5];window.__c2v3AllCars=(async()=>{for(const U of qt)try{await N(U)}catch{eT(U)}window.__c2v3AllLoaded=!0})()}function eT(s){const e=document.querySelector(`.label[data-car="${en[s].id}"]`);if(e){const t=document.createElement("p");t.className="label-reserved",t.textContent="The lights are off in this room tonight. The car is still in the collection: request it below.",e.insertBefore(t,e.querySelector(".ulink-btn"))}}const lm=s=>s.replace(/(LP \d+-\d)/,'<span class="nw">$1</span>');function tT(s){const e=s.rates,t=e.month?on(e.month):"On request";return`
    <li><span>One day</span><span class="num">${on(e.day)}</span></li>
    <li><span>Three days</span><span class="num">${on(e.three)}</span></li>
    <li><span>A week</span><span class="num">${on(e.week)}</span></li>
    <li><span>A month</span><span class="num">${t}</span></li>`}function cm(s){if(!s.reservedUntil)return"";const e=new Date(s.reservedUntil+"T12:00:00");return`On loan until ${e.getDate()} ${e.toLocaleString("en-GB",{month:"long"})}`}function nT(){document.querySelectorAll(".label[data-car]").forEach(s=>{const e=en.find(n=>n.id===s.dataset.car),t=e.reservedUntil;s.innerHTML=`
      <p class="label-num"><span class="num">${e.number}</span>${t?`<span class="red-dot" title="Reserved"></span><span>${cm(e)}</span>`:'<span class="red-dot" hidden></span>'}</p>
      <h2 class="label-title">${lm(e.title)}</h2>
      <p class="label-origin">${e.origin}. Kept in ${e.city}.</p>
      <p class="label-kept">Kept in ${e.city}, delivered to all five cities.</p>
      <p class="label-line">${e.line}</p>
      <ul class="label-rates">${tT(e)}</ul>
      <p class="label-terms"><strong>Deposit ${on(e.deposit)}.</strong> ${e.kmPerDay} km a day included, then ${on(e.extraKm)} a km. Borrowers from ${e.minAge}, licence held ${e.licenceYears===3?"three":"five"} years.</p>
      ${t?'<p class="label-reserved">Requests are open from 15 November.</p>':""}
      <button type="button" class="ulink-btn" data-request="${e.id}">Request this car</button>
    `,s.classList.toggle("on-light",!!e.room.ink&&s.matches(".label-tl, .label-tr, .label-ml"))})}function iT(){const s=document.getElementById("works-rows");s.innerHTML=en.map(e=>{const t=e.rates,n=`Request the ${e.title}: ${on(t.day)} a day, kept in ${e.city}`;return`<button type="button" class="works-row" data-request="${e.id}" aria-label="${n}">
      <span class="w-num num">${e.number}</span>
      <span class="w-title"><span class="w-name"><span>${lm(e.title)}</span><span class="red-dot" ${e.reservedUntil?"":"hidden"} id="works-dot-${e.id}"></span></span><span class="w-city">Kept in ${e.city}</span><span class="w-more num">${on(t.week)} a week, deposit ${on(e.deposit)}</span></span>
      <span class="r w-day num">${on(t.day)}</span>
      <span class="r num">${on(t.three)}</span>
      <span class="r num">${on(t.week)}</span>
      <span class="r num nw">${t.month?on(t.month):"On request"}</span>
      <span class="r num w-muted">${on(e.deposit)}</span>
    </button>`}).join("")}function sT(){const s={form:document.getElementById("loan-form"),car:document.getElementById("f-car"),city:document.getElementById("f-city"),from:document.getElementById("f-from"),to:document.getElementById("f-to"),name:document.getElementById("f-name"),contact:document.getElementById("f-contact"),fee:document.getElementById("fee"),btn:document.getElementById("btn-request"),confirm:document.getElementById("confirm")};s.car.innerHTML=en.map(b=>`<option value="${b.id}">${b.number}  ${b.title}</option>`).join(""),s.city.innerHTML=ES.map(b=>`<option>${b}</option>`).join("");const e=b=>b.toISOString().slice(0,10),t=new Date;t.setHours(12,0,0,0);const n=new Date(t.getTime()+864e5),i=new Date(t.getTime()+14*864e5),r=new Date(i.getTime()+3*864e5);s.from.min=e(n),s.to.min=e(new Date(n.getTime()+864e5)),s.from.value=e(i),s.to.value=e(r);const a=b=>en.find(v=>v.id===b)||en[0],o=()=>{const b=new Date(s.from.value+"T12:00:00"),v=new Date(s.to.value+"T12:00:00");return Math.round((v-b)/864e5)},l=b=>b.toLocaleString("en-GB",{month:"long"}),c=b=>{const v=new Date(b+"T12:00:00");return`${v.getDate()} ${l(v)}`},h=(b,v)=>{const x=new Date(b+"T12:00:00"),S=new Date(v+"T12:00:00");return x.getMonth()===S.getMonth()?`${x.getDate()} to ${S.getDate()} ${l(S)}`:`${c(b)} to ${c(v)}`},u=["","One day","Two days","Three days","Four days","Five days","Six days","A week","Eight days","Nine days","Ten days","Eleven days","Twelve days","Thirteen days","Two weeks"],f=b=>u[b]||(b===21?"Three weeks":b===28?"Four weeks":`${b} days`);function d(b){if(!s.from.value||!s.to.value)return"Choose the day it arrives and the day it leaves.";const v=o();return v<1?"The car leaves after it arrives. Try the dates the other way round.":s.from.value<s.from.min?"We need a day’s notice. The first possible day is tomorrow.":v>60?"For loans over two months, call the registrar.":b.reservedUntil&&s.from.value<=b.reservedUntil?`${b.title.split(" ")[0]} is on loan until ${c(b.reservedUntil)}. The first free day is 15 November.`:""}const g=b=>b?new Date(b+"T12:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"long"}):"";function _(){document.getElementById("f-from-shown").textContent=g(s.from.value),document.getElementById("f-to-shown").textContent=g(s.to.value)}function m(){_();const b=a(s.car.value),v=d(b);if(v&&s.from.value&&s.to.value&&o()>=1&&!(b.reservedUntil&&s.from.value<=b.reservedUntil)){s.fee.textContent=v;return}if(b.reservedUntil&&s.from.value&&s.from.value<=b.reservedUntil){s.fee.innerHTML=`${cm(b)}. <span class="fee-note">Requests are open from 15 November. Move your dates and the fee appears here.</span>`;return}const x=Math.max(1,o()),S=RS(b,x),R=b.kmPerDay*x,E=AS(b,s.city.value);s.fee.innerHTML=`${h(s.from.value,s.to.value)}, ${f(x).toLowerCase()} in ${s.city.value}. Loan fee <strong class="num">${on(S)}</strong>. Deposit held ${on(b.deposit)}. ${R.toLocaleString("en-GB")} km included.${E?`<span class="fee-note">${E}</span>`:""}`}function p(b,v){const x=document.getElementById(b);x.textContent=v,x.closest(".field").classList.toggle("has-error",!!v)}return s.car.addEventListener("change",()=>{s.city.value=a(s.car.value).city,m()}),[s.city,s.from,s.to].forEach(b=>b.addEventListener("change",()=>{if(b===s.from&&s.to.value<=s.from.value){const v=new Date(s.from.value+"T12:00:00");s.to.value=e(new Date(v.getTime()+3*864e5))}p("err-dates",""),m()})),s.name.addEventListener("input",()=>p("err-name","")),s.contact.addEventListener("input",()=>p("err-contact","")),m(),s.form.addEventListener("submit",b=>{b.preventDefault();const v=a(s.car.value),x=d(v),S=s.name.value.trim().length<2?"Your name, as it is on your licence.":"",R=s.contact.value.trim(),C=/\S+@\S+\.\S+/.test(R)||R.replace(/\D/g,"").length>=7?"":"A phone number or an email, so the registrar can call you back.";p("err-dates",x),p("err-name",S),p("err-contact",C);const y=x?s.from:S?s.name:C?s.contact:null;if(y){y.focus();return}s.btn.classList.add("is-sending"),s.btn.querySelector("span").textContent="Sending",setTimeout(()=>{const M=s.name.value.trim().split(/\s+/)[0],w=v.short.charAt(0).toUpperCase()+v.short.slice(1);document.getElementById("confirm-work").textContent=v.title,document.getElementById("confirm-line").textContent=`Thank you, ${M}. ${w} is held for you from ${c(s.from.value)} while our registrar calls to confirm, usually within the hour.`,s.form.hidden=!0,s.confirm.hidden=!1,document.querySelector(".request-title").innerHTML='Requested<span class="period">.</span>',s.confirm.focus({preventScroll:!0}),rT(v)},700)}),{choose(b){const v=a(b);s.car.value=v.id,s.city.value=v.city,v.reservedUntil&&s.from.value<=v.reservedUntil&&(s.from.value="2026-11-15",s.to.value="2026-11-18"),m()}}}function rT(s){const e=document.getElementById(`ix-held-${s.id}`);e&&(e.hidden=!1);const t=document.getElementById(`works-dot-${s.id}`);t&&(t.hidden=!1);const n=document.querySelector(`.label[data-car="${s.id}"]`),i=n==null?void 0:n.querySelector(".label-num .red-dot");if(i&&(i.hidden=!1,!n.querySelector(".held"))){const r=document.createElement("span");r.className="held",r.textContent="Held for you",i.after(r)}window.dispatchEvent(new CustomEvent("c2v3:reserved",{detail:s}))}Qw();
