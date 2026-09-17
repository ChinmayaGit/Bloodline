(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="170",Mc=0,wa=1,Sc=2,sa=1,yc=2,an=3,En=0,Re=1,Ce=2,Sn=0,ri=1,Xe=2,Aa=3,Ca=4,Ec=5,Nn=100,bc=101,Tc=102,wc=103,Ac=104,Cc=200,Rc=201,Pc=202,Lc=203,gr=204,_r=205,Ic=206,Dc=207,Uc=208,Nc=209,kc=210,Fc=211,Oc=212,Bc=213,Hc=214,vr=0,xr=1,Mr=2,li=3,Sr=4,yr=5,Er=6,br=7,ko=0,zc=1,Gc=2,yn=0,Vc=1,Wc=2,Xc=3,Fo=4,Kc=5,Yc=6,qc=7,Oo=300,hi=301,ui=302,Tr=303,wr=304,Ds=306,Ui=1e3,Fn=1001,Ar=1002,Ye=1003,jc=1004,Ki=1005,$e=1006,Fs=1007,On=1008,hn=1009,Bo=1010,Ho=1011,Ni=1012,ra=1013,Bn=1014,on=1015,Bi=1016,aa=1017,oa=1018,di=1020,zo=35902,Go=1021,Vo=1022,Ke=1023,Wo=1024,Xo=1025,ai=1026,fi=1027,Ko=1028,ca=1029,Yo=1030,la=1031,ha=1033,Ms=33776,Ss=33777,ys=33778,Es=33779,Cr=35840,Rr=35841,Pr=35842,Lr=35843,Ir=36196,Dr=37492,Ur=37496,Nr=37808,kr=37809,Fr=37810,Or=37811,Br=37812,Hr=37813,zr=37814,Gr=37815,Vr=37816,Wr=37817,Xr=37818,Kr=37819,Yr=37820,qr=37821,bs=36492,jr=36494,$r=36495,qo=36283,Zr=36284,Jr=36285,Qr=36286,$c=3200,Zc=3201,jo=0,Jc=1,xn="",Oe="srgb",mi="srgb-linear",Us="linear",ne="srgb",Vn=7680,Ra=519,Qc=512,tl=513,el=514,$o=515,nl=516,il=517,sl=518,rl=519,Pa=35044,La="300 es",cn=2e3,As=2001;class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ia=1234567;const oi=Math.PI/180,ki=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function ua(s,t){return(s%t+t)%t}function al(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ol(s,t,e){return s!==t?(e-s)/(t-s):0}function Li(s,t,e){return(1-e)*s+e*t}function cl(s,t,e,n){return Li(s,t,1-Math.exp(-e*n))}function ll(s,t=1){return t-Math.abs(ua(s,t*2)-t)}function hl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ul(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function dl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function fl(s,t){return s+Math.random()*(t-s)}function pl(s){return s*(.5-Math.random())}function ml(s){s!==void 0&&(Ia=s);let t=Ia+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gl(s){return s*oi}function _l(s){return s*ki}function vl(s){return(s&s-1)===0&&s!==0}function xl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ml(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sl(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:oi,RAD2DEG:ki,generateUUID:_i,clamp:Te,euclideanModulo:ua,mapLinear:al,inverseLerp:ol,lerp:Li,damp:cl,pingpong:ll,smoothstep:hl,smootherstep:ul,randInt:dl,randFloat:fl,randFloatSpread:pl,seededRandom:ml,degToRad:gl,radToDeg:_l,isPowerOfTwo:vl,ceilPowerOfTwo:xl,floorPowerOfTwo:Ml,setQuaternionFromProperEuler:Sl,normalize:Ee,denormalize:ii};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,r,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],E=i[1],b=i[4],S=i[7],L=i[2],A=i[5],w=i[8];return r[0]=a*_+o*E+c*L,r[3]=a*m+o*b+c*A,r[6]=a*f+o*S+c*w,r[1]=l*_+h*E+u*L,r[4]=l*m+h*b+u*A,r[7]=l*f+h*S+u*w,r[2]=d*_+p*E+g*L,r[5]=d*m+p*b+g*A,r[8]=d*f+p*S+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Ft;function Zo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yl(){const s=Cs("canvas");return s.style.display="block",s}const Da={};function Ri(s){s in Da||(Da[s]=!0,console.warn(s))}function El(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?Us:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ci(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ua=[.64,.33,.3,.6,.15,.06],Na=[.2126,.7152,.0722],ka=[.3127,.329],Fa=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oa=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[mi]:{primaries:Ua,whitePoint:ka,transfer:Us,toXYZ:Fa,fromXYZ:Oa,luminanceCoefficients:Na,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Ua,whitePoint:ka,transfer:ne,toXYZ:Fa,fromXYZ:Oa,luminanceCoefficients:Na,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let Wn;class wl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=Cs("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Al=0;class Jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Bs(i[a].image)):r.push(Bs(i[a]))}else r=Bs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Bs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cl=0;class we extends gi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Fn,i=Fn,r=$e,a=On,o=Ke,c=hn,l=we.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=_i(),this.name="",this.source=new Jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Oo;we.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,S=(p+1)/2,L=(f+1)/2,A=(h+d)/4,w=(u+_)/4,R=(g+m)/4;return b>S&&b>L?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=w/n):S>L?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=R/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=w/r,i=R/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rl extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qo extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pl extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-o;const f=c*d+l*p+h*g+u*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const L=Math.sqrt(b),A=Math.atan2(L,f*E);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const S=o*E;if(c=c*m+d*S,l=l*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new P,Ba=new Hi;class zi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(r,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yi.copy(n.boundingBox)),Yi.applyMatrix4(t.matrixWorld),this.union(Yi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),qi.subVectors(this.max,Ei),Xn.subVectors(t.a,Ei),Kn.subVectors(t.b,Ei),Yn.subVectors(t.c,Ei),fn.subVectors(Kn,Xn),pn.subVectors(Yn,Kn),wn.subVectors(Xn,Yn);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-wn.z,wn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,wn.z,0,-wn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-wn.y,wn.x,0];return!zs(e,Xn,Kn,Yn,qi)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,Xn,Kn,Yn,qi))?!1:(ji.crossVectors(fn,pn),e=[ji.x,ji.y,ji.z],zs(e,Xn,Kn,Yn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const tn=[new P,new P,new P,new P,new P,new P,new P,new P],Ge=new P,Yi=new zi,Xn=new P,Kn=new P,Yn=new P,fn=new P,pn=new P,wn=new P,Ei=new P,qi=new P,ji=new P,An=new P;function zs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){An.fromArray(s,r);const o=i.x*Math.abs(An.x)+i.y*Math.abs(An.y)+i.z*Math.abs(An.z),c=t.dot(An),l=e.dot(An),h=n.dot(An);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ll=new zi,bi=new P,Gs=new P;class Gi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ll.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bi.subVectors(t,this.center);const e=bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bi.copy(t.center).add(Gs)),this.expandByPoint(bi.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new P,Vs=new P,$i=new P,mn=new P,Ws=new P,Zi=new P,Xs=new P;class da{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vs.copy(t).add(e).multiplyScalar(.5),$i.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(Vs);const r=t.distanceTo(e)*.5,a=-this.direction.dot($i),o=mn.dot(this.direction),c=-mn.dot($i),l=mn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Vs).addScaledVector($i,d),p}intersectSphere(t,e){en.subVectors(t.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,i,r){Ws.subVectors(e,t),Zi.subVectors(n,t),Xs.crossVectors(Ws,Zi);let a=this.direction.dot(Xs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,t);const c=o*this.direction.dot(Zi.crossVectors(mn,Zi));if(c<0)return null;const l=o*this.direction.dot(Ws.cross(mn));if(l<0||c+l>a)return null;const h=-o*mn.dot(Xs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,i,r,a,o,c,l,h,u,d,p,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,p,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/qn.setFromMatrixColumn(t,0).length(),r=1/qn.setFromMatrixColumn(t,1).length(),a=1/qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Il,t,Dl)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),gn.crossVectors(n,Ie),gn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),gn.crossVectors(n,Ie)),gn.normalize(),Ji.crossVectors(Ie,gn),i[0]=gn.x,i[4]=Ji.x,i[8]=Ie.x,i[1]=gn.y,i[5]=Ji.y,i[9]=Ie.y,i[2]=gn.z,i[6]=Ji.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],b=n[7],S=n[11],L=n[15],A=i[0],w=i[4],R=i[8],M=i[12],v=i[1],C=i[5],O=i[9],k=i[13],K=i[2],F=i[6],G=i[10],X=i[14],W=i[3],nt=i[7],Q=i[11],ot=i[15];return r[0]=a*A+o*v+c*K+l*W,r[4]=a*w+o*C+c*F+l*nt,r[8]=a*R+o*O+c*G+l*Q,r[12]=a*M+o*k+c*X+l*ot,r[1]=h*A+u*v+d*K+p*W,r[5]=h*w+u*C+d*F+p*nt,r[9]=h*R+u*O+d*G+p*Q,r[13]=h*M+u*k+d*X+p*ot,r[2]=g*A+_*v+m*K+f*W,r[6]=g*w+_*C+m*F+f*nt,r[10]=g*R+_*O+m*G+f*Q,r[14]=g*M+_*k+m*X+f*ot,r[3]=E*A+b*v+S*K+L*W,r[7]=E*w+b*C+S*F+L*nt,r[11]=E*R+b*O+S*G+L*Q,r[15]=E*M+b*k+S*X+L*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*p-n*c*p)+_*(+e*c*p-e*l*d+r*a*d-i*a*p+i*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-i*o*h-e*c*u+e*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*l-_*d*l+_*c*p-o*m*p-u*c*f+o*d*f,b=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,S=h*_*l-g*u*l+g*o*p-a*_*p-h*o*f+a*u*f,L=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,A=e*E+n*b+i*S+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=E*w,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*w,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*f+n*c*f)*w,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*p-n*c*p)*w,t[4]=b*w,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*w,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*f-e*c*f)*w,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*p+e*c*p)*w,t[8]=S*w,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*w,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*w,t[12]=L*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,E=c*l,b=c*h,S=c*u,L=n.x,A=n.y,w=n.z;return i[0]=(1-(_+f))*L,i[1]=(p+S)*L,i[2]=(g-b)*L,i[3]=0,i[4]=(p-S)*A,i[5]=(1-(d+f))*A,i[6]=(m+E)*A,i[7]=0,i[8]=(g+b)*w,i[9]=(m-E)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=qn.set(i[0],i[1],i[2]).length();const a=qn.set(i[4],i[5],i[6]).length(),o=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ve.copy(this);const l=1/r,h=1/a,u=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=u,Ve.elements[9]*=u,Ve.elements[10]*=u,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=cn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===cn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===As)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=cn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*l,p=(n+i)*h;let g,_;if(o===cn)g=(a+r)*u,_=-2*u;else if(o===As)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qn=new P,Ve=new he,Il=new P(0,0,0),Dl=new P(1,1,1),gn=new P,Ji=new P,Ie=new P,Ha=new he,za=new Hi;class Ze{constructor(t=0,e=0,n=0,i=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ha.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ha,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return za.setFromEuler(this),this.setFromQuaternion(za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ul=0;const Ga=new P,jn=new Hi,nn=new he,Qi=new P,Ti=new P,Nl=new P,kl=new Hi,Va=new P(1,0,0),Wa=new P(0,1,0),Xa=new P(0,0,1),Ka={type:"added"},Fl={type:"removed"},$n={type:"childadded",child:null},Ks={type:"childremoved",child:null};class _e extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new P,e=new Ze,n=new Hi,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new Ft}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(Va,t)}rotateY(t){return this.rotateOnAxis(Wa,t)}rotateZ(t){return this.rotateOnAxis(Xa,t)}translateOnAxis(t,e){return Ga.copy(t).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Va,t)}translateY(t){return this.translateOnAxis(Wa,t)}translateZ(t){return this.translateOnAxis(Xa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qi.copy(t):Qi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ti,Qi,this.up):nn.lookAt(Qi,Ti,this.up),this.quaternion.setFromRotationMatrix(nn),i&&(nn.extractRotation(i.matrixWorld),jn.setFromRotationMatrix(nn),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ka),$n.child=t,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fl),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ka),$n.child=t,this.dispatchEvent($n),$n.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,Nl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,kl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new P(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new P,sn=new P,Ys=new P,rn=new P,Zn=new P,Jn=new P,Ya=new P,qs=new P,js=new P,$s=new P,Zs=new ie,Js=new ie,Qs=new ie;class Be{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),We.subVectors(t,e),i.cross(We);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){We.subVectors(i,e),sn.subVectors(n,e),Ys.subVectors(t,e);const a=We.dot(We),o=We.dot(sn),c=We.dot(Ys),l=sn.dot(sn),h=sn.dot(Ys),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Zs.setScalar(0),Js.setScalar(0),Qs.setScalar(0),Zs.fromBufferAttribute(t,e),Js.fromBufferAttribute(t,n),Qs.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Zs,r.x),a.addScaledVector(Js,r.y),a.addScaledVector(Qs,r.z),a}static isFrontFacing(t,e,n,i){return We.subVectors(n,e),sn.subVectors(t,e),We.cross(sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),We.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Zn.subVectors(i,n),Jn.subVectors(r,n),qs.subVectors(t,n);const c=Zn.dot(qs),l=Jn.dot(qs);if(c<=0&&l<=0)return e.copy(n);js.subVectors(t,i);const h=Zn.dot(js),u=Jn.dot(js);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Zn,a);$s.subVectors(t,r);const p=Zn.dot($s),g=Jn.dot($s);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Jn,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ya.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Ya,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(Zn,a).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ts={h:0,s:0,l:0};function tr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=ua(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=tr(a,r,t+1/3),this.g=tr(a,r,t),this.b=tr(a,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return jt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Te(ye.r*255,0,255))*65536+Math.round(Te(ye.g*255,0,255))*256+Math.round(Te(ye.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,r=ye.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Oe){jt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(ts);const n=Li(_n.h,ts.h,e),i=Li(_n.s,ts.s,e),r=Li(_n.l,ts.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Ut;Ut.NAMES=ec;let Ol=0;class zn extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=_i(),this.name="",this.blending=ri,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=_r,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ra,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ra&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zt extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new P,es=new Xt;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}}class nc extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ic extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bl=0;const Fe=new he,er=new _e,Qn=new P,De=new zi,wi=new zi,ge=new P;class ve extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zo(t)?ic:nc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return er.lookAt(t),er.updateMatrix(),this.applyMatrix4(er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(De.min,wi.min),De.expandByPoint(ge),ge.addVectors(De.max,wi.max),De.expandByPoint(ge)):(De.expandByPoint(wi.min),De.expandByPoint(wi.max))}De.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ge.fromBufferAttribute(o,l),c&&(Qn.fromBufferAttribute(t,l),ge.add(Qn)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new P,c[R]=new P;const l=new P,h=new P,u=new P,d=new Xt,p=new Xt,g=new Xt,_=new P,m=new P;function f(R,M,v){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[R].add(_),o[M].add(_),o[v].add(_),c[R].add(m),c[M].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,M=E.length;R<M;++R){const v=E[R],C=v.start,O=v.count;for(let k=C,K=C+O;k<K;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new P,S=new P,L=new P,A=new P;function w(R){L.fromBufferAttribute(i,R),A.copy(L);const M=o[R];b.copy(M),b.sub(L.multiplyScalar(L.dot(M))).normalize(),S.crossVectors(A,M);const C=S.dot(c[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,M=E.length;R<M;++R){const v=E[R],C=v.start,O=v.count;for(let k=C,K=C+O;k<K;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new he,Cn=new da,ns=new Gi,ja=new P,is=new P,ss=new P,rs=new P,nr=new P,as=new P,$a=new P,os=new P;class gt extends _e{constructor(t=new ve,e=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){as.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(nr.fromBufferAttribute(u,t),a?as.addScaledVector(nr,h):as.addScaledVector(nr.sub(e),h))}e.add(as)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(ns.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(ns,ja)===null||Cn.origin.distanceToSquared(ja)>(t.far-t.near)**2))&&(qa.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(qa),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,L=b;S<L;S+=3){const A=o.getX(S),w=o.getX(S+1),R=o.getX(S+2);i=cs(this,f,t,n,l,h,u,A,w,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);i=cs(this,a,t,n,l,h,u,E,b,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,L=b;S<L;S+=3){const A=S,w=S+1,R=S+2;i=cs(this,f,t,n,l,h,u,A,w,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,b=m+1,S=m+2;i=cs(this,a,t,n,l,h,u,E,b,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Hl(s,t,e,n,i,r,a,o){let c;if(t.side===Re?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===En,o),c===null)return null;os.copy(o),os.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(os);return l<e.near||l>e.far?null:{distance:l,point:os.clone(),object:s}}function cs(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,is),s.getVertexPosition(c,ss),s.getVertexPosition(l,rs);const h=Hl(s,t,e,n,is,ss,rs,$a);if(h){const u=new P;Be.getBarycoord($a,is,ss,rs,u),i&&(h.uv=Be.getInterpolatedAttribute(i,o,c,l,u,new Xt)),r&&(h.uv1=Be.getInterpolatedAttribute(r,o,c,l,u,new Xt)),a&&(h.normal=Be.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};Be.getNormal(is,ss,rs,d.normal),h.face=d,h.barycoord=u}return h}class Rt extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,m,f,E,b,S,L,A,w,R,M){const v=S/w,C=L/R,O=S/2,k=L/2,K=A/2,F=w+1,G=R+1;let X=0,W=0;const nt=new P;for(let Q=0;Q<G;Q++){const ot=Q*C-k;for(let Tt=0;Tt<F;Tt++){const qt=Tt*v-O;nt[_]=qt*E,nt[m]=ot*b,nt[f]=K,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[f]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Tt/w),u.push(1-Q/R),X+=1}}for(let Q=0;Q<R;Q++)for(let ot=0;ot<w;ot++){const Tt=d+ot+F*Q,qt=d+ot+F*(Q+1),Y=d+(ot+1)+F*(Q+1),J=d+(ot+1)+F*Q;c.push(Tt,qt,J),c.push(qt,Y,J),W+=6}o.addGroup(p,W,M),p+=W,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(s){const t={};for(let e=0;e<s.length;e++){const n=pi(s[e]);for(const i in n)t[i]=n[i]}return t}function zl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function sc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Gl={clone:pi,merge:be};var Vl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vl,this.fragmentShader=Wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=zl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rc extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new P,Za=new Xt,Ja=new Xt;class Ne extends rc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,Za,Ja),e.subVectors(Ja,Za)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class Xl extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ne(ti,ei,t,e);i.layers=this.layers,this.add(i);const r=new Ne(ti,ei,t,e);r.layers=this.layers,this.add(r);const a=new Ne(ti,ei,t,e);a.layers=this.layers,this.add(a);const o=new Ne(ti,ei,t,e);o.layers=this.layers,this.add(o);const c=new Ne(ti,ei,t,e);c.layers=this.layers,this.add(c);const l=new Ne(ti,ei,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ac extends we{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:hi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kl extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ac(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Sn});r.uniforms.tEquirect.value=e;const a=new gt(i,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=$e),new Xl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const ir=new P,Yl=new P,ql=new Ft;class Dn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ir.subVectors(n,e).cross(Yl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ir),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ql.getNormalMatrix(t),i=this.coplanarPoint(ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Gi,ls=new P;class fa{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],E=i[13],b=i[14],S=i[15];if(n[0].setComponents(c-r,d-l,m-p,S-f).normalize(),n[1].setComponents(c+r,d+l,m+p,S+f).normalize(),n[2].setComponents(c+a,d+h,m+g,S+E).normalize(),n[3].setComponents(c-a,d-h,m-g,S-E).normalize(),n[4].setComponents(c-o,d-u,m-_,S-b).normalize(),e===cn)n[5].setComponents(c+o,d+u,m+_,S+b).normalize();else if(e===As)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ls.x=i.normal.x>0?t.max.x:t.min.x,ls.y=i.normal.y>0?t.max.y:t.min.y,ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function jl(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class xe extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-a;for(let b=0;b<l;b++){const S=b*u-r;g.push(S,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const b=E+l*f,S=E+l*(f+1),L=E+1+l*(f+1),A=E+1+l*f;p.push(b,S,A),p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.widthSegments,t.heightSegments)}}var $l=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zl=`#ifdef USE_ALPHAHASH
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
#endif`,Jl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ql=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
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
#endif`,ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
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
#endif`,rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lh=`#ifdef USE_IRIDESCENCE
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
#endif`,hh=`#ifdef USE_BUMPMAP
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
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xh=`#define PI 3.141592653589793
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
} // validated`,Mh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
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
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ah=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fh=`#ifdef USE_GRADIENTMAP
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
}`,Oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
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
#endif`,Gh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yh=`PhysicalMaterial material;
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
#endif`,qh=`struct PhysicalMaterial {
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
}`,jh=`
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
#endif`,$h=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ru=`#if defined( USE_POINTS_UV )
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
#endif`,au=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uu=`#ifdef USE_MORPHTARGETS
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
#endif`,du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vu=`#ifdef USE_NORMALMAP
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
#endif`,xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Au=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ru=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Du=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uu=`float getShadowMask() {
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
}`,Nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Fu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ou=`#ifdef USE_SKINNING
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
#endif`,Bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vu=`#ifdef USE_TRANSMISSION
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
#endif`,Wu=`#ifdef USE_TRANSMISSION
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
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
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
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`#include <common>
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
}`,nd=`#if DEPTH_PACKING == 3200
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
}`,id=`#define DISTANCE
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
}`,sd=`#define DISTANCE
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
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`uniform float scale;
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
}`,cd=`uniform vec3 diffuse;
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
}`,ld=`#include <common>
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
}`,hd=`uniform vec3 diffuse;
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
}`,ud=`#define LAMBERT
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
}`,dd=`#define LAMBERT
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
}`,fd=`#define MATCAP
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
}`,pd=`#define MATCAP
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
}`,md=`#define NORMAL
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
}`,gd=`#define NORMAL
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
}`,_d=`#define PHONG
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
}`,vd=`#define PHONG
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
}`,xd=`#define STANDARD
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
}`,Md=`#define STANDARD
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
}`,Sd=`#define TOON
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
}`,yd=`#define TOON
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
}`,Ed=`uniform float size;
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
}`,bd=`uniform vec3 diffuse;
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
}`,Td=`#include <common>
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
}`,wd=`uniform vec3 color;
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
}`,Ad=`uniform float rotation;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:$l,alphahash_pars_fragment:Zl,alphamap_fragment:Jl,alphamap_pars_fragment:Ql,alphatest_fragment:th,alphatest_pars_fragment:eh,aomap_fragment:nh,aomap_pars_fragment:ih,batching_pars_vertex:sh,batching_vertex:rh,begin_vertex:ah,beginnormal_vertex:oh,bsdfs:ch,iridescence_fragment:lh,bumpmap_pars_fragment:hh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:ph,color_fragment:mh,color_pars_fragment:gh,color_pars_vertex:_h,color_vertex:vh,common:xh,cube_uv_reflection_fragment:Mh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:yh,displacementmap_vertex:Eh,emissivemap_fragment:bh,emissivemap_pars_fragment:Th,colorspace_fragment:wh,colorspace_pars_fragment:Ah,envmap_fragment:Ch,envmap_common_pars_fragment:Rh,envmap_pars_fragment:Ph,envmap_pars_vertex:Lh,envmap_physical_pars_fragment:Gh,envmap_vertex:Ih,fog_vertex:Dh,fog_pars_vertex:Uh,fog_fragment:Nh,fog_pars_fragment:kh,gradientmap_pars_fragment:Fh,lightmap_pars_fragment:Oh,lights_lambert_fragment:Bh,lights_lambert_pars_fragment:Hh,lights_pars_begin:zh,lights_toon_fragment:Vh,lights_toon_pars_fragment:Wh,lights_phong_fragment:Xh,lights_phong_pars_fragment:Kh,lights_physical_fragment:Yh,lights_physical_pars_fragment:qh,lights_fragment_begin:jh,lights_fragment_maps:$h,lights_fragment_end:Zh,logdepthbuf_fragment:Jh,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:tu,logdepthbuf_vertex:eu,map_fragment:nu,map_pars_fragment:iu,map_particle_fragment:su,map_particle_pars_fragment:ru,metalnessmap_fragment:au,metalnessmap_pars_fragment:ou,morphinstance_vertex:cu,morphcolor_vertex:lu,morphnormal_vertex:hu,morphtarget_pars_vertex:uu,morphtarget_vertex:du,normal_fragment_begin:fu,normal_fragment_maps:pu,normal_pars_fragment:mu,normal_pars_vertex:gu,normal_vertex:_u,normalmap_pars_fragment:vu,clearcoat_normal_fragment_begin:xu,clearcoat_normal_fragment_maps:Mu,clearcoat_pars_fragment:Su,iridescence_pars_fragment:yu,opaque_fragment:Eu,packing:bu,premultiplied_alpha_fragment:Tu,project_vertex:wu,dithering_fragment:Au,dithering_pars_fragment:Cu,roughnessmap_fragment:Ru,roughnessmap_pars_fragment:Pu,shadowmap_pars_fragment:Lu,shadowmap_pars_vertex:Iu,shadowmap_vertex:Du,shadowmask_pars_fragment:Uu,skinbase_vertex:Nu,skinning_pars_vertex:ku,skinning_vertex:Fu,skinnormal_vertex:Ou,specularmap_fragment:Bu,specularmap_pars_fragment:Hu,tonemapping_fragment:zu,tonemapping_pars_fragment:Gu,transmission_fragment:Vu,transmission_pars_fragment:Wu,uv_pars_fragment:Xu,uv_pars_vertex:Ku,uv_vertex:Yu,worldpos_vertex:qu,background_vert:ju,background_frag:$u,backgroundCube_vert:Zu,backgroundCube_frag:Ju,cube_vert:Qu,cube_frag:td,depth_vert:ed,depth_frag:nd,distanceRGBA_vert:id,distanceRGBA_frag:sd,equirect_vert:rd,equirect_frag:ad,linedashed_vert:od,linedashed_frag:cd,meshbasic_vert:ld,meshbasic_frag:hd,meshlambert_vert:ud,meshlambert_frag:dd,meshmatcap_vert:fd,meshmatcap_frag:pd,meshnormal_vert:md,meshnormal_frag:gd,meshphong_vert:_d,meshphong_frag:vd,meshphysical_vert:xd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:yd,points_vert:Ed,points_frag:bd,shadow_vert:Td,shadow_frag:wd,sprite_vert:Ad,sprite_frag:Cd},lt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},je={basic:{uniforms:be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:be([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:be([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:be([lt.points,lt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:be([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:be([lt.common,lt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:be([lt.sprite,lt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:be([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:be([lt.lights,lt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};je.physical={uniforms:be([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const hs={r:0,b:0,g:0},Pn=new Ze,Rd=new he;function Pd(s,t,e,n,i,r,a){const o=new Ut(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const S=g(E);S===null?f(o,c):S&&S.isColor&&(f(S,1),b=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===Ds)?(h===void 0&&(h=new gt(new Rt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:pi(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Pn.copy(b.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rd.makeRotationFromEuler(Pn)),h.material.toneMapped=jt.getTransfer(S.colorSpace)!==ne,(u!==S||d!==S.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new gt(new xe(2,2),new bn({name:"BackgroundMaterial",uniforms:pi(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=jt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,b){E.getRGB(hs,sc(s)),n.buffers.color.setClear(hs.r,hs.g,hs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:_,addToRenderList:m}}function Ld(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,C,O,k,K){let F=!1;const G=u(k,O,C);r!==G&&(r=G,l(r.object)),F=p(v,k,O,K),F&&g(v,k,O,K),K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(v,C,O,k),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,C,O){const k=O.wireframe===!0;let K=n[v.id];K===void 0&&(K={},n[v.id]=K);let F=K[C.id];F===void 0&&(F={},K[C.id]=F);let G=F[k];return G===void 0&&(G=d(c()),F[k]=G),G}function d(v){const C=[],O=[],k=[];for(let K=0;K<e;K++)C[K]=0,O[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,C,O,k){const K=r.attributes,F=C.attributes;let G=0;const X=O.getAttributes();for(const W in X)if(X[W].location>=0){const Q=K[W];let ot=F[W];if(ot===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),Q===void 0||Q.attribute!==ot||ot&&Q.data!==ot.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(v,C,O,k){const K={},F=C.attributes;let G=0;const X=O.getAttributes();for(const W in X)if(X[W].location>=0){let Q=F[W];Q===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const ot={};ot.attribute=Q,Q&&Q.data&&(ot.data=Q.data),K[W]=ot,G++}r.attributes=K,r.attributesNum=G,r.index=k}function _(){const v=r.newAttributes;for(let C=0,O=v.length;C<O;C++)v[C]=0}function m(v){f(v,0)}function f(v,C){const O=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;O[v]=1,k[v]===0&&(s.enableVertexAttribArray(v),k[v]=1),K[v]!==C&&(s.vertexAttribDivisor(v,C),K[v]=C)}function E(){const v=r.newAttributes,C=r.enabledAttributes;for(let O=0,k=C.length;O<k;O++)C[O]!==v[O]&&(s.disableVertexAttribArray(O),C[O]=0)}function b(v,C,O,k,K,F,G){G===!0?s.vertexAttribIPointer(v,C,O,K,F):s.vertexAttribPointer(v,C,O,k,K,F)}function S(v,C,O,k){_();const K=k.attributes,F=O.getAttributes(),G=C.defaultAttributeValues;for(const X in F){const W=F[X];if(W.location>=0){let nt=K[X];if(nt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){const Q=nt.normalized,ot=nt.itemSize,Tt=t.get(nt);if(Tt===void 0)continue;const qt=Tt.buffer,Y=Tt.type,J=Tt.bytesPerElement,ut=Y===s.INT||Y===s.UNSIGNED_INT||nt.gpuType===ra;if(nt.isInterleavedBufferAttribute){const it=nt.data,ht=it.stride,_t=nt.offset;if(it.isInstancedInterleavedBuffer){for(let Pt=0;Pt<W.locationSize;Pt++)f(W.location+Pt,it.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Pt=0;Pt<W.locationSize;Pt++)m(W.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let Pt=0;Pt<W.locationSize;Pt++)b(W.location+Pt,ot/W.locationSize,Y,Q,ht*J,(_t+ot/W.locationSize*Pt)*J,ut)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<W.locationSize;it++)f(W.location+it,nt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<W.locationSize;it++)m(W.location+it);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let it=0;it<W.locationSize;it++)b(W.location+it,ot/W.locationSize,Y,Q,ot*J,ot/W.locationSize*it*J,ut)}}else if(G!==void 0){const Q=G[X];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(W.location,Q);break;case 3:s.vertexAttrib3fv(W.location,Q);break;case 4:s.vertexAttrib4fv(W.location,Q);break;default:s.vertexAttrib1fv(W.location,Q)}}}}E()}function L(){R();for(const v in n){const C=n[v];for(const O in C){const k=C[O];for(const K in k)h(k[K].object),delete k[K];delete C[O]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const O in C){const k=C[O];for(const K in k)h(k[K].object),delete k[K];delete C[O]}delete n[v.id]}function w(v){for(const C in n){const O=n[C];if(O[v.id]===void 0)continue;const k=O[v.id];for(const K in k)h(k[K].object),delete k[K];delete O[v.id]}}function R(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Id(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Dd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Ke&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==on&&!R)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:L,maxSamples:A}}function Ud(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Dn,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,b=E*4;let S=f.clippingState||null;c.value=S,S=h(g,d,b,p);for(let L=0;L!==b;++L)S[L]=e[L];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=p;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Nd(s){let t=new WeakMap;function e(a,o){return o===Tr?a.mapping=hi:o===wr&&(a.mapping=ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tr||o===wr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Kl(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class cc extends rc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const si=4,Qa=[.125,.215,.35,.446,.526,.582],kn=20,sr=new cc,to=new Ut;let rr=null,ar=0,or=0,cr=!1;const Un=(1+Math.sqrt(5))/2,ni=1/Un,eo=[new P(-Un,ni,0),new P(Un,ni,0),new P(-ni,0,Un),new P(ni,0,Un),new P(0,Un,-ni),new P(0,Un,ni),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class no{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){rr=this._renderer.getRenderTarget(),ar=this._renderer.getActiveCubeFace(),or=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rr,ar,or),this._renderer.xr.enabled=cr,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rr=this._renderer.getRenderTarget(),ar=this._renderer.getActiveCubeFace(),or=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Bi,format:Ke,colorSpace:mi,depthBuffer:!1},i=io(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=io(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kd(r)),this._blurMaterial=Fd(r,t,e)}return i}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,sr)}_sceneToCubeUV(t,e,n,i){const o=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(to),h.toneMapping=yn,h.autoClear=!1;const p=new zt({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new gt(new Rt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(to),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const b=this._cubeSize;us(i,E*b,f>2?b:0,b,b),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===hi||t.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eo[(i-r-1)%eo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gt(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const f=[];let E=0;for(let w=0;w<kn;++w){const R=w/_,M=Math.exp(-R*R/2);f.push(M),w===0?E+=M:w<m&&(E+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const S=this._sizeLods[i],L=3*S*(i>b-si?i-b+si:0),A=4*(this._cubeSize-S);us(e,L,A,3*S,2*S),c.setRenderTarget(e),c.render(u,sr)}}function kd(s){const t=[],e=[],n=[];let i=s;const r=s-si+1+Qa.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-si?c=Qa[a-s+si-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,R=A>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];E.set(M,_*g*A),b.set(d,m*g*A);const v=[A,A,A,A,A,A];S.set(v,f*g*A)}const L=new ve;L.setAttribute("position",new Pe(E,_)),L.setAttribute("uv",new Pe(b,m)),L.setAttribute("faceIndex",new Pe(S,f)),t.push(L),i>si&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function io(s,t,e){const n=new Hn(s,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Fd(s,t,e){const n=new Float32Array(kn),i=new P(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function so(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ro(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function pa(){return`

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
	`}function Od(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Tr||c===wr,h=c===hi||c===ui;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new no(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new no(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ri("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hd(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,S=E.length;b<S;b+=3){const L=E[b+0],A=E[b+1],w=E[b+2];d.push(L,A,A,w,w,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const L=b+0,A=b+1,w=b+2;d.push(L,A,A,w,w,L)}}else return;const m=new(Zo(d)?ic:nc)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function zd(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Vd(s,t,e){const n=new WeakMap,i=new ie;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let L=o.attributes.position.count*S,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*A*4*u),R=new Qo(w,L,A,u);R.type=on,R.needsUpdate=!0;const M=S*4;for(let C=0;C<u;C++){const O=f[C],k=E[C],K=b[C],F=L*A*4*C;for(let G=0;G<O.count;G++){const X=G*M;g===!0&&(i.fromBufferAttribute(O,G),w[F+X+0]=i.x,w[F+X+1]=i.y,w[F+X+2]=i.z,w[F+X+3]=0),_===!0&&(i.fromBufferAttribute(k,G),w[F+X+4]=i.x,w[F+X+5]=i.y,w[F+X+6]=i.z,w[F+X+7]=0),m===!0&&(i.fromBufferAttribute(K,G),w[F+X+8]=i.x,w[F+X+9]=i.y,w[F+X+10]=i.z,w[F+X+11]=K.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new Xt(L,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Wd(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class lc extends we{constructor(t,e,n,i,r,a,o,c,l,h=ai){if(h!==ai&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=Bn),n===void 0&&h===fi&&(n=di),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hc=new we,ao=new lc(1,1),uc=new Qo,dc=new Pl,fc=new ac,oo=[],co=[],lo=new Float32Array(16),ho=new Float32Array(9),uo=new Float32Array(4);function vi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=oo[i];if(r===void 0&&(r=new Float32Array(i),oo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ns(s,t){let e=co[t];e===void 0&&(e=new Int32Array(t),co[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Xd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2fv(this.addr,t),pe(e,t)}}function Yd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;s.uniform3fv(this.addr,t),pe(e,t)}}function qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4fv(this.addr,t),pe(e,t)}}function jd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;uo.set(n),s.uniformMatrix2fv(this.addr,!1,uo),pe(e,n)}}function $d(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;ho.set(n),s.uniformMatrix3fv(this.addr,!1,ho),pe(e,n)}}function Zd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;lo.set(n),s.uniformMatrix4fv(this.addr,!1,lo),pe(e,n)}}function Jd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2iv(this.addr,t),pe(e,t)}}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3iv(this.addr,t),pe(e,t)}}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4iv(this.addr,t),pe(e,t)}}function nf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2uiv(this.addr,t),pe(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3uiv(this.addr,t),pe(e,t)}}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4uiv(this.addr,t),pe(e,t)}}function of(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ao.compareFunction=$o,r=ao):r=hc,e.setTexture2D(t||r,i)}function cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dc,i)}function lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fc,i)}function hf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uc,i)}function uf(s){switch(s){case 5126:return Xd;case 35664:return Kd;case 35665:return Yd;case 35666:return qd;case 35674:return jd;case 35675:return $d;case 35676:return Zd;case 5124:case 35670:return Jd;case 35667:case 35671:return Qd;case 35668:case 35672:return tf;case 35669:case 35673:return ef;case 5125:return nf;case 36294:return sf;case 36295:return rf;case 36296:return af;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return hf}}function df(s,t){s.uniform1fv(this.addr,t)}function ff(s,t){const e=vi(t,this.size,2);s.uniform2fv(this.addr,e)}function pf(s,t){const e=vi(t,this.size,3);s.uniform3fv(this.addr,e)}function mf(s,t){const e=vi(t,this.size,4);s.uniform4fv(this.addr,e)}function gf(s,t){const e=vi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _f(s,t){const e=vi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vf(s,t){const e=vi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function xf(s,t){s.uniform1iv(this.addr,t)}function Mf(s,t){s.uniform2iv(this.addr,t)}function Sf(s,t){s.uniform3iv(this.addr,t)}function yf(s,t){s.uniform4iv(this.addr,t)}function Ef(s,t){s.uniform1uiv(this.addr,t)}function bf(s,t){s.uniform2uiv(this.addr,t)}function Tf(s,t){s.uniform3uiv(this.addr,t)}function wf(s,t){s.uniform4uiv(this.addr,t)}function Af(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||hc,r[a])}function Cf(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||dc,r[a])}function Rf(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||fc,r[a])}function Pf(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||uc,r[a])}function Lf(s){switch(s){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return _f;case 35676:return vf;case 5124:case 35670:return xf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return yf;case 5125:return Ef;case 36294:return bf;case 36295:return Tf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Pf}}class If{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uf(e.type)}}class Df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lf(e.type)}}class Uf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const lr=/(\w+)(\])?(\[|\.)?/g;function fo(s,t){s.seq.push(t),s.map[t.id]=t}function Nf(s,t,e){const n=s.name,i=n.length;for(lr.lastIndex=0;;){const r=lr.exec(n),a=lr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){fo(e,l===void 0?new If(o,s,t):new Df(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Uf(o),fo(e,u)),e=u}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Nf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function po(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const kf=37297;let Ff=0;function Of(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const mo=new Ft;function Bf(s){jt._getMatrix(mo,jt.workingColorSpace,s);const t=`mat3( ${mo.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case Us:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function go(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Of(s.getShaderSource(t),a)}else return i}function Hf(s,t){const e=Bf(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zf(s,t){let e;switch(t){case Vc:e="Linear";break;case Wc:e="Reinhard";break;case Xc:e="Cineon";break;case Fo:e="ACESFilmic";break;case Yc:e="AgX";break;case qc:e="Neutral";break;case Kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new P;function Gf(){jt.getLuminanceCoefficients(ds);const s=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}function Wf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Pi(s){return s!==""}function _o(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(s){return s.replace(Kf,qf)}const Yf=new Map;function qf(s,t){let e=Ot[t];if(e===void 0){const n=Yf.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ta(e)}const jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xo(s){return s.replace(jf,$f)}function $f(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mo(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sa?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function Jf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hi:case ui:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ui:t="ENVMAP_MODE_REFRACTION";break}return t}function tp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ko:t="ENVMAP_BLENDING_MULTIPLY";break;case zc:t="ENVMAP_BLENDING_MIX";break;case Gc:t="ENVMAP_BLENDING_ADD";break}return t}function ep(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function np(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Zf(e),l=Jf(e),h=Qf(e),u=tp(e),d=ep(e),p=Vf(e),g=Wf(r),_=i.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pi).join(`
`),f.length>0&&(f+=`
`)):(m=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),f=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==yn?zf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Hf("linearToOutputTexel",e.outputColorSpace),Gf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),a=ta(a),a=_o(a,e),a=vo(a,e),o=ta(o),o=_o(o,e),o=vo(o,e),a=xo(a),o=xo(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+a,S=E+f+o,L=po(i,i.VERTEX_SHADER,b),A=po(i,i.FRAGMENT_SHADER,S);i.attachShader(_,L),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(L).trim(),K=i.getShaderInfoLog(A).trim();let F=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,A);else{const X=go(i,L,"vertex"),W=go(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+X+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||K==="")&&(G=!1);G&&(C.diagnostics={runnable:F,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:K,prefix:f}})}i.deleteShader(L),i.deleteShader(A),R=new Ts(i,_),M=Xf(i,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,kf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let ip=0;class sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rp(t),e.set(t,n)),n}}class rp{constructor(t){this.id=ip++,this.code=t,this.usedTimes=0}}function ap(s,t,e,n,i,r,a){const o=new tc,c=new sp,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,C,O,k){const K=O.fog,F=k.geometry,G=M.isMeshStandardMaterial?O.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),W=X&&X.mapping===Ds?X.image.height:null,nt=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=Q!==void 0?Q.length:0;let Tt=0;F.morphAttributes.position!==void 0&&(Tt=1),F.morphAttributes.normal!==void 0&&(Tt=2),F.morphAttributes.color!==void 0&&(Tt=3);let qt,Y,J,ut;if(nt){const te=je[nt];qt=te.vertexShader,Y=te.fragmentShader}else qt=M.vertexShader,Y=M.fragmentShader,c.update(M),J=c.getVertexShaderID(M),ut=c.getFragmentShaderID(M);const it=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),_t=k.isInstancedMesh===!0,Pt=k.isBatchedMesh===!0,ae=!!M.map,Kt=!!M.matcap,re=!!X,N=!!M.aoMap,me=!!M.lightMap,Ht=!!M.bumpMap,Wt=!!M.normalMap,Et=!!M.displacementMap,ee=!!M.emissiveMap,At=!!M.metalnessMap,T=!!M.roughnessMap,x=M.anisotropy>0,B=M.clearcoat>0,$=M.dispersion>0,Z=M.iridescence>0,q=M.sheen>0,xt=M.transmission>0,at=x&&!!M.anisotropyMap,ft=B&&!!M.clearcoatMap,Gt=B&&!!M.clearcoatNormalMap,tt=B&&!!M.clearcoatRoughnessMap,pt=Z&&!!M.iridescenceMap,wt=Z&&!!M.iridescenceThicknessMap,Ct=q&&!!M.sheenColorMap,mt=q&&!!M.sheenRoughnessMap,Nt=!!M.specularMap,Dt=!!M.specularColorMap,Zt=!!M.specularIntensityMap,I=xt&&!!M.transmissionMap,ct=xt&&!!M.thicknessMap,H=!!M.gradientMap,j=!!M.alphaMap,st=M.alphaTest>0,rt=!!M.alphaHash,Lt=!!M.extensions;let ue=yn;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Me={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:qt,fragmentShader:Y,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pt,batchingColor:Pt&&k._colorsTexture!==null,instancing:_t,instancingColor:_t&&k.instanceColor!==null,instancingMorph:_t&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:mi,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:Kt,envMap:re,envMapMode:re&&X.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:me,bumpMap:Ht,normalMap:Wt,displacementMap:d&&Et,emissiveMap:ee,normalMapObjectSpace:Wt&&M.normalMapType===Jc,normalMapTangentSpace:Wt&&M.normalMapType===jo,metalnessMap:At,roughnessMap:T,anisotropy:x,anisotropyMap:at,clearcoat:B,clearcoatMap:ft,clearcoatNormalMap:Gt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Z,iridescenceMap:pt,iridescenceThicknessMap:wt,sheen:q,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Nt,specularColorMap:Dt,specularIntensityMap:Zt,transmission:xt,transmissionMap:I,thicknessMap:ct,gradientMap:H,opaque:M.transparent===!1&&M.blending===ri&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:st,alphaHash:rt,combine:M.combine,mapUv:ae&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:me&&_(M.lightMap.channel),bumpMapUv:Ht&&_(M.bumpMap.channel),normalMapUv:Wt&&_(M.normalMap.channel),displacementMapUv:Et&&_(M.displacementMap.channel),emissiveMapUv:ee&&_(M.emissiveMap.channel),metalnessMapUv:At&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:ft&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(M.sheenRoughnessMap.channel),specularMapUv:Nt&&_(M.specularMap.channel),specularColorMapUv:Dt&&_(M.specularColorMap.channel),specularIntensityMapUv:Zt&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:j&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Wt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(ae||j),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ht,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Tt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===ne,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ce,flipSided:M.side===Re,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Lt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&M.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function f(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)v.push(C),v.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(E(v,M),b(v,M),v.push(s.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function b(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const v=g[M.type];let C;if(v){const O=je[v];C=Gl.clone(O.uniforms)}else C=M.uniforms;return C}function L(M,v){let C;for(let O=0,k=h.length;O<k;O++){const K=h[O];if(K.cacheKey===v){C=K,++C.usedTimes;break}}return C===void 0&&(C=new np(s,v,M,r),h.push(C)),C}function A(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function op(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function cp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function So(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||cp),n.length>1&&n.sort(d||So),i.length>1&&i.sort(d||So)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function lp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new yo,s.set(n,[a])):i>=r.length?(a=new yo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function hp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ut};break;case"SpotLight":e={position:new P,direction:new P,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function up(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let dp=0;function fp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function pp(s){const t=new hp,e=up(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new he,a=new he;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,b=0,S=0,L=0,A=0,w=0;l.sort(fp);for(let M=0,v=l.length;M<v;M++){const C=l[M],O=C.color,k=C.intensity,K=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=O.r*k,u+=O.g*k,d+=O.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],k);w++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,W=e.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=G,p++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(O).multiplyScalar(k),G.distance=K,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;const X=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,X.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,C.castShadow){const W=e.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=F,S++}_++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(O).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const X=C.shadow,W=e.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[f]=G,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==E||R.numPointShadows!==b||R.numSpotShadows!==S||R.numSpotMaps!==L||R.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=E,R.numPointShadows=b,R.numSpotShadows=S,R.numSpotMaps=L,R.numLightProbes=w,n.version=dp++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const b=l[f];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Eo(s){const t=new pp(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function mp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Eo(s),t.set(i,[o])):r>=a.length?(o=new Eo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class gp extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _p extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
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
}`;function Mp(s,t,e){let n=new fa;const i=new Xt,r=new Xt,a=new ie,o=new gp({depthPacking:Zc}),c=new _p,l={},h=e.maxTextureSize,u={[En]:Re,[Re]:En,[Ce]:Ce},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:vp,fragmentShader:xp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let f=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),v=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Sn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=f!==an&&this.type===an,K=f===an&&this.type!==an;for(let F=0,G=A.length;F<G;F++){const X=A[F],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const nt=W.getFrameExtents();if(i.multiply(nt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,W.mapSize.y=r.y)),W.map===null||k===!0||K===!0){const ot=this.type!==an?{minFilter:Ye,magFilter:Ye}:{};W.map!==null&&W.map.dispose(),W.map=new Hn(i.x,i.y,ot),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Q=W.getViewportCount();for(let ot=0;ot<Q;ot++){const Tt=W.getViewport(ot);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),O.viewport(a),W.updateMatrices(X,ot),n=W.getFrustum(),S(w,R,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===an&&E(W,R),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,v,C)};function E(A,w){const R=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,R,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,R,p,_,null)}function b(A,w,R,M){let v=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=R.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=v.uuid,k=w.uuid;let K=l[O];K===void 0&&(K={},l[O]=K);let F=K[k];F===void 0&&(F=v.clone(),K[k]=F,w.addEventListener("dispose",L)),v=F}if(v.visible=w.visible,v.wireframe=w.wireframe,M===an?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=s.properties.get(v);O.light=R}return v}function S(A,w,R,M,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===an)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const k=t.update(A),K=A.material;if(Array.isArray(K)){const F=k.groups;for(let G=0,X=F.length;G<X;G++){const W=F[G],nt=K[W.materialIndex];if(nt&&nt.visible){const Q=b(A,nt,M,v);A.onBeforeShadow(s,A,w,R,k,Q,W),s.renderBufferDirect(R,null,k,Q,A,W),A.onAfterShadow(s,A,w,R,k,Q,W)}}}else if(K.visible){const F=b(A,K,M,v);A.onBeforeShadow(s,A,w,R,k,F,null),s.renderBufferDirect(R,null,k,F,A,null),A.onAfterShadow(s,A,w,R,k,F,null)}}const O=A.children;for(let k=0,K=O.length;k<K;k++)S(O[k],w,R,M,v)}function L(A){A.target.removeEventListener("dispose",L);for(const R in l){const M=l[R],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const Sp={[vr]:xr,[Mr]:Er,[Sr]:br,[li]:yr,[xr]:vr,[Er]:Mr,[br]:Sr,[yr]:li};function yp(s,t){function e(){let I=!1;const ct=new ie;let H=null;const j=new ie(0,0,0,0);return{setMask:function(st){H!==st&&!I&&(s.colorMask(st,st,st,st),H=st)},setLocked:function(st){I=st},setClear:function(st,rt,Lt,ue,Me){Me===!0&&(st*=ue,rt*=ue,Lt*=ue),ct.set(st,rt,Lt,ue),j.equals(ct)===!1&&(s.clearColor(st,rt,Lt,ue),j.copy(ct))},reset:function(){I=!1,H=null,j.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,H=null,j=null,st=null;return{setReversed:function(rt){if(ct!==rt){const Lt=t.get("EXT_clip_control");ct?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ue=st;st=null,this.setClear(ue)}ct=rt},getReversed:function(){return ct},setTest:function(rt){rt?it(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(rt){H!==rt&&!I&&(s.depthMask(rt),H=rt)},setFunc:function(rt){if(ct&&(rt=Sp[rt]),j!==rt){switch(rt){case vr:s.depthFunc(s.NEVER);break;case xr:s.depthFunc(s.ALWAYS);break;case Mr:s.depthFunc(s.LESS);break;case li:s.depthFunc(s.LEQUAL);break;case Sr:s.depthFunc(s.EQUAL);break;case yr:s.depthFunc(s.GEQUAL);break;case Er:s.depthFunc(s.GREATER);break;case br:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=rt}},setLocked:function(rt){I=rt},setClear:function(rt){st!==rt&&(ct&&(rt=1-rt),s.clearDepth(rt),st=rt)},reset:function(){I=!1,H=null,j=null,st=null,ct=!1}}}function i(){let I=!1,ct=null,H=null,j=null,st=null,rt=null,Lt=null,ue=null,Me=null;return{setTest:function(te){I||(te?it(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(te){ct!==te&&!I&&(s.stencilMask(te),ct=te)},setFunc:function(te,He,Je){(H!==te||j!==He||st!==Je)&&(s.stencilFunc(te,He,Je),H=te,j=He,st=Je)},setOp:function(te,He,Je){(rt!==te||Lt!==He||ue!==Je)&&(s.stencilOp(te,He,Je),rt=te,Lt=He,ue=Je)},setLocked:function(te){I=te},setClear:function(te){Me!==te&&(s.clearStencil(te),Me=te)},reset:function(){I=!1,ct=null,H=null,j=null,st=null,rt=null,Lt=null,ue=null,Me=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,S=null,L=null,A=null,w=new Ut(0,0,0),R=0,M=!1,v=null,C=null,O=null,k=null,K=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=X>=2);let nt=null,Q={};const ot=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),qt=new ie().fromArray(ot),Y=new ie().fromArray(Tt);function J(I,ct,H,j){const st=new Uint8Array(4),rt=s.createTexture();s.bindTexture(I,rt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<H;Lt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(ct+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return rt}const ut={};ut[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc(li),Ht(!1),Wt(wa),it(s.CULL_FACE),N(Sn);function it(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function ht(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function _t(I,ct){return u[I]!==ct?(s.bindFramebuffer(I,ct),u[I]=ct,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Pt(I,ct){let H=p,j=!1;if(I){H=d.get(ct),H===void 0&&(H=[],d.set(ct,H));const st=I.textures;if(H.length!==st.length||H[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Lt=st.length;rt<Lt;rt++)H[rt]=s.COLOR_ATTACHMENT0+rt;H.length=st.length,j=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,j=!0);j&&s.drawBuffers(H)}function ae(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Kt={[Nn]:s.FUNC_ADD,[bc]:s.FUNC_SUBTRACT,[Tc]:s.FUNC_REVERSE_SUBTRACT};Kt[wc]=s.MIN,Kt[Ac]=s.MAX;const re={[Cc]:s.ZERO,[Rc]:s.ONE,[Pc]:s.SRC_COLOR,[gr]:s.SRC_ALPHA,[kc]:s.SRC_ALPHA_SATURATE,[Uc]:s.DST_COLOR,[Ic]:s.DST_ALPHA,[Lc]:s.ONE_MINUS_SRC_COLOR,[_r]:s.ONE_MINUS_SRC_ALPHA,[Nc]:s.ONE_MINUS_DST_COLOR,[Dc]:s.ONE_MINUS_DST_ALPHA,[Fc]:s.CONSTANT_COLOR,[Oc]:s.ONE_MINUS_CONSTANT_COLOR,[Bc]:s.CONSTANT_ALPHA,[Hc]:s.ONE_MINUS_CONSTANT_ALPHA};function N(I,ct,H,j,st,rt,Lt,ue,Me,te){if(I===Sn){_===!0&&(ht(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),I!==Ec){if(I!==m||te!==M){if((f!==Nn||S!==Nn)&&(s.blendEquation(s.FUNC_ADD),f=Nn,S=Nn),te)switch(I){case ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xe:s.blendFunc(s.ONE,s.ONE);break;case Aa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ca:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xe:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Aa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ca:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,L=null,A=null,w.set(0,0,0),R=0,m=I,M=te}return}st=st||ct,rt=rt||H,Lt=Lt||j,(ct!==f||st!==S)&&(s.blendEquationSeparate(Kt[ct],Kt[st]),f=ct,S=st),(H!==E||j!==b||rt!==L||Lt!==A)&&(s.blendFuncSeparate(re[H],re[j],re[rt],re[Lt]),E=H,b=j,L=rt,A=Lt),(ue.equals(w)===!1||Me!==R)&&(s.blendColor(ue.r,ue.g,ue.b,Me),w.copy(ue),R=Me),m=I,M=!1}function me(I,ct){I.side===Ce?ht(s.CULL_FACE):it(s.CULL_FACE);let H=I.side===Re;ct&&(H=!H),Ht(H),I.blending===ri&&I.transparent===!1?N(Sn):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(I){v!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),v=I)}function Wt(I){I!==Mc?(it(s.CULL_FACE),I!==C&&(I===wa?s.cullFace(s.BACK):I===Sc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),C=I}function Et(I){I!==O&&(G&&s.lineWidth(I),O=I)}function ee(I,ct,H){I?(it(s.POLYGON_OFFSET_FILL),(k!==ct||K!==H)&&(s.polygonOffset(ct,H),k=ct,K=H)):ht(s.POLYGON_OFFSET_FILL)}function At(I){I?it(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function T(I){I===void 0&&(I=s.TEXTURE0+F-1),nt!==I&&(s.activeTexture(I),nt=I)}function x(I,ct,H){H===void 0&&(nt===null?H=s.TEXTURE0+F-1:H=nt);let j=Q[H];j===void 0&&(j={type:void 0,texture:void 0},Q[H]=j),(j.type!==I||j.texture!==ct)&&(nt!==H&&(s.activeTexture(H),nt=H),s.bindTexture(I,ct||ut[I]),j.type=I,j.texture=ct)}function B(){const I=Q[nt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(I){qt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),qt.copy(I))}function mt(I){Y.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Nt(I,ct){let H=l.get(ct);H===void 0&&(H=new WeakMap,l.set(ct,H));let j=H.get(I);j===void 0&&(j=s.getUniformBlockIndex(ct,I.name),H.set(I,j))}function Dt(I,ct){const j=l.get(ct).get(I);c.get(ct)!==j&&(s.uniformBlockBinding(ct,j,I.__bindingPointIndex),c.set(ct,j))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,Q={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,S=null,L=null,A=null,w=new Ut(0,0,0),R=0,M=!1,v=null,C=null,O=null,k=null,K=null,qt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:ht,bindFramebuffer:_t,drawBuffers:Pt,useProgram:ae,setBlending:N,setMaterial:me,setFlipSided:Ht,setCullFace:Wt,setLineWidth:Et,setPolygonOffset:ee,setScissorTest:At,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:pt,texImage3D:wt,updateUBOMapping:Nt,uniformBlockBinding:Dt,texStorage2D:Gt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:Zt}}function bo(s,t,e,n){const i=Ep(n);switch(e){case Go:return s*t;case Wo:return s*t;case Xo:return s*t*2;case Ko:return s*t/i.components*i.byteLength;case ca:return s*t/i.components*i.byteLength;case Yo:return s*t*2/i.components*i.byteLength;case la:return s*t*2/i.components*i.byteLength;case Vo:return s*t*3/i.components*i.byteLength;case Ke:return s*t*4/i.components*i.byteLength;case ha:return s*t*4/i.components*i.byteLength;case Ms:case Ss:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ys:case Es:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rr:case Lr:return Math.max(s,16)*Math.max(t,8)/4;case Cr:case Pr:return Math.max(s,8)*Math.max(t,8)/2;case Ir:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case zr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case qr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case bs:case jr:case $r:return Math.ceil(s/4)*Math.ceil(t/4)*16;case qo:case Zr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jr:case Qr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ep(s){switch(s){case hn:case Bo:return{byteLength:1,components:1};case Ni:case Ho:case Bi:return{byteLength:2,components:1};case aa:case oa:return{byteLength:2,components:4};case Bn:case ra:case on:return{byteLength:4,components:1};case zo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function bp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Cs("canvas")}function _(T,x,B){let $=1;const Z=At(T);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor($*Z.width),xt=Math.floor($*Z.height);u===void 0&&(u=g(q,xt));const at=x?g(q,xt):u;return at.width=q,at.height=xt,at.getContext("2d").drawImage(T,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+xt+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,x,B,$,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),x===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),x===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),x===s.RGBA){const xt=Z?Us:jt.getTransfer($);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=xt===ne?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(T,x){let B;return T?x===null||x===Bn||x===di?B=s.DEPTH24_STENCIL8:x===on?B=s.DEPTH32F_STENCIL8:x===Ni&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bn||x===di?B=s.DEPTH_COMPONENT24:x===on?B=s.DEPTH_COMPONENT32F:x===Ni&&(B=s.DEPTH_COMPONENT16),B}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ye&&T.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),R(x),x.isVideoTexture&&h.delete(x)}function w(T){const x=T.target;x.removeEventListener("dispose",w),v(x)}function R(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,$=d.get(B);if($){const Z=$[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(T),Object.keys($).length===0&&d.delete(B)}n.remove(T)}function M(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const B=T.source,$=d.get(B);delete $[x.__cacheKey],a.memory.textures--}function v(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Z=0;Z<x.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)s.deleteFramebuffer(x.__webglFramebuffer[$]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,Z=B.length;$<Z;$++){const q=n.get(B[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(T)}let C=0;function O(){C=0}function k(){const T=C;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),C+=1,T}function K(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function F(T,x){const B=n.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,T,x);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function G(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Y(B,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function X(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Y(B,T,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function W(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){J(B,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}const nt={[Ui]:s.REPEAT,[Fn]:s.CLAMP_TO_EDGE,[Ar]:s.MIRRORED_REPEAT},Q={[Ye]:s.NEAREST,[jc]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[$e]:s.LINEAR,[Fs]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},ot={[Qc]:s.NEVER,[rl]:s.ALWAYS,[tl]:s.LESS,[$o]:s.LEQUAL,[el]:s.EQUAL,[sl]:s.GEQUAL,[nl]:s.GREATER,[il]:s.NOTEQUAL};function Tt(T,x){if(x.type===on&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===$e||x.magFilter===Fs||x.magFilter===Ki||x.magFilter===On||x.minFilter===$e||x.minFilter===Fs||x.minFilter===Ki||x.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,nt[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,nt[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,nt[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Q[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==Ki&&x.minFilter!==On||x.type===on&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function qt(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const $=x.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const q=K(x);if(q!==T.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[q].usedTimes++;const xt=Z[T.__cacheKey];xt!==void 0&&(Z[T.__cacheKey].usedTimes--,xt.usedTimes===0&&M(x)),T.__cacheKey=q,T.__webglTexture=Z[q].texture}return B}function Y(T,x,B){let $=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=s.TEXTURE_3D);const Z=qt(T,x),q=x.source;e.bindTexture($,T.__webglTexture,s.TEXTURE0+B);const xt=n.get(q);if(q.version!==xt.__version||Z===!0){e.activeTexture(s.TEXTURE0+B);const at=jt.getPrimaries(jt.workingColorSpace),ft=x.colorSpace===xn?null:jt.getPrimaries(x.colorSpace),Gt=x.colorSpace===xn||at===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let tt=_(x.image,!1,i.maxTextureSize);tt=ee(x,tt);const pt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type);let Ct=b(x.internalFormat,pt,wt,x.colorSpace,x.isVideoTexture);Tt($,x);let mt;const Nt=x.mipmaps,Dt=x.isVideoTexture!==!0,Zt=xt.__version===void 0||Z===!0,I=q.dataReady,ct=L(x,tt);if(x.isDepthTexture)Ct=S(x.format===fi,x.type),Zt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,wt,null));else if(x.isDataTexture)if(Nt.length>0){Dt&&Zt&&e.texStorage2D(s.TEXTURE_2D,ct,Ct,Nt[0].width,Nt[0].height);for(let H=0,j=Nt.length;H<j;H++)mt=Nt[H],Dt?I&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,wt,mt.data):e.texImage2D(s.TEXTURE_2D,H,Ct,mt.width,mt.height,0,pt,wt,mt.data);x.generateMipmaps=!1}else Dt?(Zt&&e.texStorage2D(s.TEXTURE_2D,ct,Ct,tt.width,tt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,wt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,wt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Ct,Nt[0].width,Nt[0].height,tt.depth);for(let H=0,j=Nt.length;H<j;H++)if(mt=Nt[H],x.format!==Ke)if(pt!==null)if(Dt){if(I)if(x.layerUpdates.size>0){const st=bo(mt.width,mt.height,x.format,x.type);for(const rt of x.layerUpdates){const Lt=mt.data.subarray(rt*st/mt.data.BYTES_PER_ELEMENT,(rt+1)*st/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,rt,mt.width,mt.height,1,pt,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Ct,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,wt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,Ct,mt.width,mt.height,tt.depth,0,pt,wt,mt.data)}else{Dt&&Zt&&e.texStorage2D(s.TEXTURE_2D,ct,Ct,Nt[0].width,Nt[0].height);for(let H=0,j=Nt.length;H<j;H++)mt=Nt[H],x.format!==Ke?pt!==null?Dt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?I&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,wt,mt.data):e.texImage2D(s.TEXTURE_2D,H,Ct,mt.width,mt.height,0,pt,wt,mt.data)}else if(x.isDataArrayTexture)if(Dt){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Ct,tt.width,tt.height,tt.depth),I)if(x.layerUpdates.size>0){const H=bo(tt.width,tt.height,x.format,x.type);for(const j of x.layerUpdates){const st=tt.data.subarray(j*H/tt.data.BYTES_PER_ELEMENT,(j+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,pt,wt,st)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,wt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,pt,wt,tt.data);else if(x.isData3DTexture)Dt?(Zt&&e.texStorage3D(s.TEXTURE_3D,ct,Ct,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,wt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,pt,wt,tt.data);else if(x.isFramebufferTexture){if(Zt)if(Dt)e.texStorage2D(s.TEXTURE_2D,ct,Ct,tt.width,tt.height);else{let H=tt.width,j=tt.height;for(let st=0;st<ct;st++)e.texImage2D(s.TEXTURE_2D,st,Ct,H,j,0,pt,wt,null),H>>=1,j>>=1}}else if(Nt.length>0){if(Dt&&Zt){const H=At(Nt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Ct,H.width,H.height)}for(let H=0,j=Nt.length;H<j;H++)mt=Nt[H],Dt?I&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,pt,wt,mt):e.texImage2D(s.TEXTURE_2D,H,Ct,pt,wt,mt);x.generateMipmaps=!1}else if(Dt){if(Zt){const H=At(tt);e.texStorage2D(s.TEXTURE_2D,ct,Ct,H.width,H.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,wt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,pt,wt,tt);m(x)&&f($),xt.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function J(T,x,B){if(x.image.length!==6)return;const $=qt(T,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+B);const q=n.get(Z);if(Z.version!==q.__version||$===!0){e.activeTexture(s.TEXTURE0+B);const xt=jt.getPrimaries(jt.workingColorSpace),at=x.colorSpace===xn?null:jt.getPrimaries(x.colorSpace),ft=x.colorSpace===xn||xt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let j=0;j<6;j++)!Gt&&!tt?pt[j]=_(x.image[j],!0,i.maxCubemapSize):pt[j]=tt?x.image[j].image:x.image[j],pt[j]=ee(x,pt[j]);const wt=pt[0],Ct=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),Nt=b(x.internalFormat,Ct,mt,x.colorSpace),Dt=x.isVideoTexture!==!0,Zt=q.__version===void 0||$===!0,I=Z.dataReady;let ct=L(x,wt);Tt(s.TEXTURE_CUBE_MAP,x);let H;if(Gt){Dt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Nt,wt.width,wt.height);for(let j=0;j<6;j++){H=pt[j].mipmaps;for(let st=0;st<H.length;st++){const rt=H[st];x.format!==Ke?Ct!==null?Dt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st,0,0,rt.width,rt.height,Ct,rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st,Nt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st,0,0,rt.width,rt.height,Ct,mt,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st,Nt,rt.width,rt.height,0,Ct,mt,rt.data)}}}else{if(H=x.mipmaps,Dt&&Zt){H.length>0&&ct++;const j=At(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Nt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){Dt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt[j].width,pt[j].height,Ct,mt,pt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Nt,pt[j].width,pt[j].height,0,Ct,mt,pt[j].data);for(let st=0;st<H.length;st++){const Lt=H[st].image[j].image;Dt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st+1,0,0,Lt.width,Lt.height,Ct,mt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st+1,Nt,Lt.width,Lt.height,0,Ct,mt,Lt.data)}}else{Dt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ct,mt,pt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Nt,Ct,mt,pt[j]);for(let st=0;st<H.length;st++){const rt=H[st];Dt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st+1,0,0,Ct,mt,rt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st+1,Nt,Ct,mt,rt.image[j])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ut(T,x,B,$,Z,q){const xt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),ft=b(B.internalFormat,xt,at,B.colorSpace),Gt=n.get(x),tt=n.get(B);if(tt.__renderTarget=x,!Gt.__hasExternalTextures){const pt=Math.max(1,x.width>>q),wt=Math.max(1,x.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,ft,pt,wt,x.depth,0,xt,at,null):e.texImage2D(Z,q,ft,pt,wt,0,xt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,tt.__webglTexture,0,Ht(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,tt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(T,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const $=x.depthTexture,Z=$&&$.isDepthTexture?$.type:null,q=S(x.stencilBuffer,Z),xt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Ht(x);Wt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,q,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,q,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,T)}else{const $=x.textures;for(let Z=0;Z<$.length;Z++){const q=$[Z],xt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ft=b(q.internalFormat,xt,at,q.colorSpace),Gt=Ht(x);B&&Wt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,ft,x.width,x.height):Wt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,ft,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ft,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const Z=$.__webglTexture,q=Ht(x);if(x.depthTexture.format===ai)Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(x.depthTexture.format===fi)Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function _t(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=$}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ht(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=s.createRenderbuffer(),it(x.__webglDepthbuffer[$],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),it(x.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(T,x,B){const $=n.get(T);x!==void 0&&ut($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&_t(T)}function ae(T){const x=T.texture,B=n.get(T),$=n.get(x);T.addEventListener("dispose",w);const Z=T.textures,q=T.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=x.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let ft=0;ft<x.mipmaps.length;ft++)B.__webglFramebuffer[at][ft]=s.createFramebuffer()}else B.__webglFramebuffer[at]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)B.__webglFramebuffer[at]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xt)for(let at=0,ft=Z.length;at<ft;at++){const Gt=n.get(Z[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Wt(T)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ft=Z[at];B.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Gt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=b(ft.internalFormat,Gt,tt,ft.colorSpace,T.isXRRenderTarget===!0),wt=Ht(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,pt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,B.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),it(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)ut(B.__webglFramebuffer[at][ft],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else ut(B.__webglFramebuffer[at],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,ft=Z.length;at<ft;at++){const Gt=Z[at],tt=n.get(Gt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Tt(s.TEXTURE_2D,Gt),ut(B.__webglFramebuffer,T,Gt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(Gt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Tt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)ut(B.__webglFramebuffer[ft],T,x,s.COLOR_ATTACHMENT0,at,ft);else ut(B.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,at,0);m(x)&&f(at),e.unbindTexture()}T.depthBuffer&&_t(T)}function Kt(T){const x=T.textures;for(let B=0,$=x.length;B<$;B++){const Z=x[B];if(m(Z)){const q=E(T),xt=n.get(Z).__webglTexture;e.bindTexture(q,xt),f(q),e.unbindTexture()}}}const re=[],N=[];function me(T){if(T.samples>0){if(Wt(T)===!1){const x=T.textures,B=T.width,$=T.height;let Z=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(T),at=x.length>1;if(at)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Gt=n.get(x[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Gt,0)}s.blitFramebuffer(0,0,B,$,0,0,B,$,Z,s.NEAREST),c===!0&&(re.length=0,N.length=0,re.push(s.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(re.push(q),N.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Gt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ht(T){return Math.min(i.maxSamples,T.samples)}function Wt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function ee(T,x){const B=T.colorSpace,$=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==mi&&B!==xn&&(jt.getTransfer(B)===ne?($!==Ke||Z!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function At(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Wt}function Tp(s,t){function e(n,i=xn){let r;const a=jt.getTransfer(i);if(n===hn)return s.UNSIGNED_BYTE;if(n===aa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return s.BYTE;if(n===Ho)return s.SHORT;if(n===Ni)return s.UNSIGNED_SHORT;if(n===ra)return s.INT;if(n===Bn)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===Bi)return s.HALF_FLOAT;if(n===Go)return s.ALPHA;if(n===Vo)return s.RGB;if(n===Ke)return s.RGBA;if(n===Wo)return s.LUMINANCE;if(n===Xo)return s.LUMINANCE_ALPHA;if(n===ai)return s.DEPTH_COMPONENT;if(n===fi)return s.DEPTH_STENCIL;if(n===Ko)return s.RED;if(n===ca)return s.RED_INTEGER;if(n===Yo)return s.RG;if(n===la)return s.RG_INTEGER;if(n===ha)return s.RGBA_INTEGER;if(n===Ms||n===Ss||n===ys||n===Es)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cr||n===Rr||n===Pr||n===Lr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ir||n===Dr||n===Ur)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ir||n===Dr)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ur)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nr||n===kr||n===Fr||n===Or||n===Br||n===Hr||n===zr||n===Gr||n===Vr||n===Wr||n===Xr||n===Kr||n===Yr||n===qr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Or)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Br)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bs||n===jr||n===$r)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bs)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$r)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Zr||n===Jr||n===Qr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class wp extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bt extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Cp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rp=`
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

}`;class Pp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:Cp,fragmentShader:Rp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lp extends gi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new Pp,m=e.getContextAttributes();let f=null,E=null;const b=[],S=[],L=new Xt;let A=null;const w=new Ne;w.viewport=new ie;const R=new Ne;R.viewport=new ie;const M=[w,R],v=new wp;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=b[Y];return J===void 0&&(J=new hr,b[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=b[Y];return J===void 0&&(J=new hr,b[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=b[Y];return J===void 0&&(J=new hr,b[Y]=J),J.getHandSpace()};function k(Y){const J=S.indexOf(Y.inputSource);if(J===-1)return;const ut=b[J];ut!==void 0&&(ut.update(Y.inputSource,Y.frame,l||a),ut.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",F);for(let Y=0;Y<b.length;Y++){const J=S[Y];J!==null&&(S[Y]=null,b[Y].disconnect(J))}C=null,O=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,E=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",K),i.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Hn(p.framebufferWidth,p.framebufferHeight,{format:Ke,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ut=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?fi:ai,ut=m.stencil?di:Bn);const ht={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ht),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Hn(d.textureWidth,d.textureHeight,{format:Ke,type:hn,depthTexture:new lc(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(Y){for(let J=0;J<Y.removed.length;J++){const ut=Y.removed[J],it=S.indexOf(ut);it>=0&&(S[it]=null,b[it].disconnect(ut))}for(let J=0;J<Y.added.length;J++){const ut=Y.added[J];let it=S.indexOf(ut);if(it===-1){for(let _t=0;_t<b.length;_t++)if(_t>=S.length){S.push(ut),it=_t;break}else if(S[_t]===null){S[_t]=ut,it=_t;break}if(it===-1)break}const ht=b[it];ht&&ht.connect(ut)}}const G=new P,X=new P;function W(Y,J,ut){G.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(ut.matrixWorld);const it=G.distanceTo(X),ht=J.projectionMatrix.elements,_t=ut.projectionMatrix.elements,Pt=ht[14]/(ht[10]-1),ae=ht[14]/(ht[10]+1),Kt=(ht[9]+1)/ht[5],re=(ht[9]-1)/ht[5],N=(ht[8]-1)/ht[0],me=(_t[8]+1)/_t[0],Ht=Pt*N,Wt=Pt*me,Et=it/(-N+me),ee=Et*-N;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ee),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ht[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const At=Pt+Et,T=ae+Et,x=Ht-ee,B=Wt+(it-ee),$=Kt*ae/T*At,Z=re*ae/T*At;Y.projectionMatrix.makePerspective(x,B,$,Z,At,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,ut=Y.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ut=_.depthFar)),v.near=R.near=w.near=J,v.far=R.far=w.far=ut,(C!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,O=v.far),w.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,v.layers.mask=w.layers.mask|R.layers.mask;const it=Y.parent,ht=v.cameras;nt(v,it);for(let _t=0;_t<ht.length;_t++)nt(ht[_t],it);ht.length===2?W(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),Q(Y,v,it)};function Q(Y,J,ut){ut===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ut.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ki*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ot=null;function Tt(Y,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let it=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,it=!0);for(let _t=0;_t<ut.length;_t++){const Pt=ut[_t];let ae=null;if(p!==null)ae=p.getViewport(Pt);else{const re=u.getViewSubImage(d,Pt);ae=re.viewport,_t===0&&(t.setRenderTargetTextures(E,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(E))}let Kt=M[_t];Kt===void 0&&(Kt=new Ne,Kt.layers.enable(_t),Kt.viewport=new ie,M[_t]=Kt),Kt.matrix.fromArray(Pt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Pt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ae.x,ae.y,ae.width,ae.height),_t===0&&(v.matrix.copy(Kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),it===!0&&v.cameras.push(Kt)}const ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const _t=u.getDepthInformation(ut[0]);_t&&_t.isValid&&_t.texture&&_.init(t,_t,i.renderState)}}for(let ut=0;ut<b.length;ut++){const it=S[ut],ht=b[ut];it!==null&&ht!==void 0&&ht.update(it,J,l||a)}ot&&ot(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const qt=new oc;qt.setAnimationLoop(Tt),this.setAnimationLoop=function(Y){ot=Y},this.dispose=function(){}}}const Ln=new Ze,Ip=new he;function Dp(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,sc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,E,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,E,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,Ln.copy(S),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),m.envMapRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(Ln)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Up(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const S=b.program;n.uniformBlockBinding(E,S)}function l(E,b){let S=i[E.id];S===void 0&&(g(E),S=h(E),i[E.id]=S,E.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(E,L);const A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){const b=u();E.__bindingPointIndex=b;const S=s.createBuffer(),L=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=i[E.id],S=E.uniforms,L=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,w=S.length;A<w;A++){const R=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,v=R.length;M<v;M++){const C=R[M];if(p(C,A,M,L)===!0){const O=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let F=0;F<k.length;F++){const G=k[F],X=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,O+K,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,K),K+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,b,S,L){const A=E.value,w=b+"_"+S;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const R=L[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return L[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(E){const b=E.uniforms;let S=0;const L=16;for(let w=0,R=b.length;w<R;w++){const M=Array.isArray(b[w])?b[w]:[b[w]];for(let v=0,C=M.length;v<C;v++){const O=M[v],k=Array.isArray(O.value)?O.value:[O.value];for(let K=0,F=k.length;K<F;K++){const G=k[K],X=_(G),W=S%L,nt=W%X.boundary,Q=W+nt;S+=nt,Q!==0&&L-Q<X.storage&&(S+=L-Q),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=X.storage}}}const A=S%L;return A>0&&(S+=L-A),E.__size=S,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Np{constructor(t={}){const{canvas:e=yl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=yn,this.toneMappingExposure=1;const S=this;let L=!1,A=0,w=0,R=null,M=-1,v=null;const C=new ie,O=new ie;let k=null;const K=new Ut(0);let F=0,G=e.width,X=e.height,W=1,nt=null,Q=null;const ot=new ie(0,0,G,X),Tt=new ie(0,0,G,X);let qt=!1;const Y=new fa;let J=!1,ut=!1;const it=new he,ht=new he,_t=new P,Pt=new ie,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function re(){return R===null?W:1}let N=n;function me(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",rt,!1),N===null){const D="webgl2";if(N=me(D,y),N===null)throw me(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ht,Wt,Et,ee,At,T,x,B,$,Z,q,xt,at,ft,Gt,tt,pt,wt,Ct,mt,Nt,Dt,Zt,I;function ct(){Ht=new Bd(N),Ht.init(),Dt=new Tp(N,Ht),Wt=new Dd(N,Ht,t,Dt),Et=new yp(N,Ht),Wt.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),ee=new Gd(N),At=new op,T=new bp(N,Ht,Et,At,Wt,Dt,ee),x=new Nd(S),B=new Od(S),$=new jl(N),Zt=new Ld(N,$),Z=new Hd(N,$,ee,Zt),q=new Wd(N,Z,$,ee),Ct=new Vd(N,Wt,T),tt=new Ud(At),xt=new ap(S,x,B,Ht,Wt,Zt,tt),at=new Dp(S,At),ft=new lp,Gt=new mp(Ht),wt=new Pd(S,x,B,Et,q,p,c),pt=new Mp(S,q,Wt),I=new Up(N,ee,Wt,Et),mt=new Id(N,Ht,ee),Nt=new zd(N,Ht,ee),ee.programs=xt.programs,S.capabilities=Wt,S.extensions=Ht,S.properties=At,S.renderLists=ft,S.shadowMap=pt,S.state=Et,S.info=ee}ct();const H=new Lp(S,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Ht.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ht.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(G,X,!1))},this.getSize=function(y){return y.set(G,X)},this.setSize=function(y,D,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,X=D,e.width=Math.floor(y*W),e.height=Math.floor(D*W),z===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(G*W,X*W).floor()},this.setDrawingBufferSize=function(y,D,z){G=y,X=D,W=z,e.width=Math.floor(y*z),e.height=Math.floor(D*z),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(ot)},this.setViewport=function(y,D,z,V){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,D,z,V),Et.viewport(C.copy(ot).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(Tt)},this.setScissor=function(y,D,z,V){y.isVector4?Tt.set(y.x,y.y,y.z,y.w):Tt.set(y,D,z,V),Et.scissor(O.copy(Tt).multiplyScalar(W).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(y){Et.setScissorTest(qt=y)},this.setOpaqueSort=function(y){nt=y},this.setTransparentSort=function(y){Q=y},this.getClearColor=function(y){return y.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(y=!0,D=!0,z=!0){let V=0;if(y){let U=!1;if(R!==null){const et=R.texture.format;U=et===ha||et===la||et===ca}if(U){const et=R.texture.type,dt=et===hn||et===Bn||et===Ni||et===di||et===aa||et===oa,Mt=wt.getClearColor(),St=wt.getClearAlpha(),It=Mt.r,kt=Mt.g,yt=Mt.b;dt?(g[0]=It,g[1]=kt,g[2]=yt,g[3]=St,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=It,_[1]=kt,_[2]=yt,_[3]=St,N.clearBufferiv(N.COLOR,0,_))}else V|=N.COLOR_BUFFER_BIT}D&&(V|=N.DEPTH_BUFFER_BIT),z&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ft.dispose(),Gt.dispose(),At.dispose(),x.dispose(),B.dispose(),q.dispose(),Zt.dispose(),I.dispose(),xt.dispose(),H.dispose(),H.removeEventListener("sessionstart",va),H.removeEventListener("sessionend",xa),Tn.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=ee.autoReset,D=pt.enabled,z=pt.autoUpdate,V=pt.needsUpdate,U=pt.type;ct(),ee.autoReset=y,pt.enabled=D,pt.autoUpdate=z,pt.needsUpdate=V,pt.type=U}function rt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Lt(y){const D=y.target;D.removeEventListener("dispose",Lt),ue(D)}function ue(y){Me(y),At.remove(y)}function Me(y){const D=At.get(y).programs;D!==void 0&&(D.forEach(function(z){xt.releaseProgram(z)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,z,V,U,et){D===null&&(D=ae);const dt=U.isMesh&&U.matrixWorld.determinant()<0,Mt=_c(y,D,z,V,U);Et.setMaterial(V,dt);let St=z.index,It=1;if(V.wireframe===!0){if(St=Z.getWireframeAttribute(z),St===void 0)return;It=2}const kt=z.drawRange,yt=z.attributes.position;let $t=kt.start*It,oe=(kt.start+kt.count)*It;et!==null&&($t=Math.max($t,et.start*It),oe=Math.min(oe,(et.start+et.count)*It)),St!==null?($t=Math.max($t,0),oe=Math.min(oe,St.count)):yt!=null&&($t=Math.max($t,0),oe=Math.min(oe,yt.count));const ce=oe-$t;if(ce<0||ce===1/0)return;Zt.setup(U,V,Mt,z,St);let Ae,Jt=mt;if(St!==null&&(Ae=$.get(St),Jt=Nt,Jt.setIndex(Ae)),U.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*re()),Jt.setMode(N.LINES)):Jt.setMode(N.TRIANGLES);else if(U.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Et.setLineWidth(bt*re()),U.isLineSegments?Jt.setMode(N.LINES):U.isLineLoop?Jt.setMode(N.LINE_LOOP):Jt.setMode(N.LINE_STRIP)}else U.isPoints?Jt.setMode(N.POINTS):U.isSprite&&Jt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,Qe=U._multiDrawCounts,Qt=U._multiDrawCount,ze=St?$.get(St).bytesPerElement:1,Gn=At.get(V).currentProgram.getUniforms();for(let Le=0;Le<Qt;Le++)Gn.setValue(N,"_gl_DrawID",Le),Jt.render(bt[Le]/ze,Qe[Le])}else if(U.isInstancedMesh)Jt.renderInstances($t,ce,U.count);else if(z.isInstancedBufferGeometry){const bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Qe=Math.min(z.instanceCount,bt);Jt.renderInstances($t,ce,Qe)}else Jt.render($t,ce)};function te(y,D,z){y.transparent===!0&&y.side===Ce&&y.forceSinglePass===!1?(y.side=Re,y.needsUpdate=!0,Xi(y,D,z),y.side=En,y.needsUpdate=!0,Xi(y,D,z),y.side=Ce):Xi(y,D,z)}this.compile=function(y,D,z=null){z===null&&(z=y),f=Gt.get(z),f.init(D),b.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const V=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let dt=0;dt<et.length;dt++){const Mt=et[dt];te(Mt,z,U),V.add(Mt)}else te(et,z,U),V.add(et)}),b.pop(),f=null,V},this.compileAsync=function(y,D,z=null){const V=this.compile(y,D,z);return new Promise(U=>{function et(){if(V.forEach(function(dt){At.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){U(y);return}setTimeout(et,10)}Ht.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let He=null;function Je(y){He&&He(y)}function va(){Tn.stop()}function xa(){Tn.start()}const Tn=new oc;Tn.setAnimationLoop(Je),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(y){He=y,H.setAnimationLoop(y),y===null?Tn.stop():Tn.start()},H.addEventListener("sessionstart",va),H.addEventListener("sessionend",xa),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,D,R),f=Gt.get(y,b.length),f.init(D),b.push(f),ht.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(ht),ut=this.localClippingEnabled,J=tt.init(this.clippingPlanes,ut),m=ft.get(y,E.length),m.init(),E.push(m),H.enabled===!0&&H.isPresenting===!0){const et=S.xr.getDepthSensingMesh();et!==null&&ks(et,D,-1/0,S.sortObjects)}ks(y,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(nt,Q),Kt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Kt&&wt.addToRenderList(m,y),this.info.render.frame++,J===!0&&tt.beginShadows();const z=f.state.shadowsArray;pt.render(z,y,D),J===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){const et=D.cameras;if(U.length>0)for(let dt=0,Mt=et.length;dt<Mt;dt++){const St=et[dt];Sa(V,U,y,St)}Kt&&wt.render(y);for(let dt=0,Mt=et.length;dt<Mt;dt++){const St=et[dt];Ma(m,y,St,St.viewport)}}else U.length>0&&Sa(V,U,y,D),Kt&&wt.render(y),Ma(m,y,D);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(S,y,D),Zt.resetDefaultState(),M=-1,v=null,b.pop(),b.length>0?(f=b[b.length-1],J===!0&&tt.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ks(y,D,z,V){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){V&&Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ht);const dt=q.update(y),Mt=y.material;Mt.visible&&m.push(y,dt,Mt,z,Pt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const dt=q.update(y),Mt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pt.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Pt.copy(dt.boundingSphere.center)),Pt.applyMatrix4(y.matrixWorld).applyMatrix4(ht)),Array.isArray(Mt)){const St=dt.groups;for(let It=0,kt=St.length;It<kt;It++){const yt=St[It],$t=Mt[yt.materialIndex];$t&&$t.visible&&m.push(y,dt,$t,z,Pt.z,yt)}}else Mt.visible&&m.push(y,dt,Mt,z,Pt.z,null)}}const et=y.children;for(let dt=0,Mt=et.length;dt<Mt;dt++)ks(et[dt],D,z,V)}function Ma(y,D,z,V){const U=y.opaque,et=y.transmissive,dt=y.transparent;f.setupLightsView(z),J===!0&&tt.setGlobalState(S.clippingPlanes,z),V&&Et.viewport(C.copy(V)),U.length>0&&Wi(U,D,z),et.length>0&&Wi(et,D,z),dt.length>0&&Wi(dt,D,z),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Sa(y,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Hn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Bi:hn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=f.state.transmissionRenderTarget[V.id],dt=V.viewport||C;et.setSize(dt.z,dt.w);const Mt=S.getRenderTarget();S.setRenderTarget(et),S.getClearColor(K),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear(),Kt&&wt.render(z);const St=S.toneMapping;S.toneMapping=yn;const It=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),J===!0&&tt.setGlobalState(S.clippingPlanes,V),Wi(y,z,V),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let yt=0,$t=D.length;yt<$t;yt++){const oe=D[yt],ce=oe.object,Ae=oe.geometry,Jt=oe.material,bt=oe.group;if(Jt.side===Ce&&ce.layers.test(V.layers)){const Qe=Jt.side;Jt.side=Re,Jt.needsUpdate=!0,ya(ce,z,V,Ae,Jt,bt),Jt.side=Qe,Jt.needsUpdate=!0,kt=!0}}kt===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}S.setRenderTarget(Mt),S.setClearColor(K,F),It!==void 0&&(V.viewport=It),S.toneMapping=St}function Wi(y,D,z){const V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=y.length;U<et;U++){const dt=y[U],Mt=dt.object,St=dt.geometry,It=V===null?dt.material:V,kt=dt.group;Mt.layers.test(z.layers)&&ya(Mt,D,z,St,It,kt)}}function ya(y,D,z,V,U,et){y.onBeforeRender(S,D,z,V,U,et),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,D,z,V,y,et),U.transparent===!0&&U.side===Ce&&U.forceSinglePass===!1?(U.side=Re,U.needsUpdate=!0,S.renderBufferDirect(z,D,V,U,y,et),U.side=En,U.needsUpdate=!0,S.renderBufferDirect(z,D,V,U,y,et),U.side=Ce):S.renderBufferDirect(z,D,V,U,y,et),y.onAfterRender(S,D,z,V,U,et)}function Xi(y,D,z){D.isScene!==!0&&(D=ae);const V=At.get(y),U=f.state.lights,et=f.state.shadowsArray,dt=U.state.version,Mt=xt.getParameters(y,U.state,et,D,z),St=xt.getProgramCacheKey(Mt);let It=V.programs;V.environment=y.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(y.isMeshStandardMaterial?B:x).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,It===void 0&&(y.addEventListener("dispose",Lt),It=new Map,V.programs=It);let kt=It.get(St);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===dt)return ba(y,Mt),kt}else Mt.uniforms=xt.getUniforms(y),y.onBeforeCompile(Mt,S),kt=xt.acquireProgram(Mt,St),It.set(St,kt),V.uniforms=Mt.uniforms;const yt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=tt.uniform),ba(y,Mt),V.needsLights=xc(y),V.lightsStateVersion=dt,V.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function Ea(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Ts.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function ba(y,D){const z=At.get(y);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function _c(y,D,z,V,U){D.isScene!==!0&&(D=ae),T.resetTextureUnits();const et=D.fog,dt=V.isMeshStandardMaterial?D.environment:null,Mt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mi,St=(V.isMeshStandardMaterial?B:x).get(V.envMap||dt),It=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,kt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),yt=!!z.morphAttributes.position,$t=!!z.morphAttributes.normal,oe=!!z.morphAttributes.color;let ce=yn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ce=S.toneMapping);const Ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=Ae!==void 0?Ae.length:0,bt=At.get(V),Qe=f.state.lights;if(J===!0&&(ut===!0||y!==v)){const ke=y===v&&V.id===M;tt.setState(V,y,ke)}let Qt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Qe.state.version||bt.outputColorSpace!==Mt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==St||V.fog===!0&&bt.fog!==et||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==tt.numPlanes||bt.numIntersection!==tt.numIntersection)||bt.vertexAlphas!==It||bt.vertexTangents!==kt||bt.morphTargets!==yt||bt.morphNormals!==$t||bt.morphColors!==oe||bt.toneMapping!==ce||bt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,bt.__version=V.version);let ze=bt.currentProgram;Qt===!0&&(ze=Xi(V,D,U));let Gn=!1,Le=!1,Si=!1;const le=ze.getUniforms(),qe=bt.uniforms;if(Et.useProgram(ze.program)&&(Gn=!0,Le=!0,Si=!0),V.id!==M&&(M=V.id,Le=!0),Gn||v!==y){Et.buffers.depth.getReversed()?(it.copy(y.projectionMatrix),bl(it),Tl(it),le.setValue(N,"projectionMatrix",it)):le.setValue(N,"projectionMatrix",y.projectionMatrix),le.setValue(N,"viewMatrix",y.matrixWorldInverse);const un=le.map.cameraPosition;un!==void 0&&un.setValue(N,_t.setFromMatrixPosition(y.matrixWorld)),Wt.logarithmicDepthBuffer&&le.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Le=!0,Si=!0)}if(U.isSkinnedMesh){le.setOptional(N,U,"bindMatrix"),le.setOptional(N,U,"bindMatrixInverse");const ke=U.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),le.setValue(N,"boneTexture",ke.boneTexture,T))}U.isBatchedMesh&&(le.setOptional(N,U,"batchingTexture"),le.setValue(N,"batchingTexture",U._matricesTexture,T),le.setOptional(N,U,"batchingIdTexture"),le.setValue(N,"batchingIdTexture",U._indirectTexture,T),le.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&le.setValue(N,"batchingColorTexture",U._colorsTexture,T));const yi=z.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Ct.update(U,z,ze),(Le||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,le.setValue(N,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(qe.envMap.value=St,qe.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(qe.envMapIntensity.value=D.environmentIntensity),Le&&(le.setValue(N,"toneMappingExposure",S.toneMappingExposure),bt.needsLights&&vc(qe,Si),et&&V.fog===!0&&at.refreshFogUniforms(qe,et),at.refreshMaterialUniforms(qe,V,W,X,f.state.transmissionRenderTarget[y.id]),Ts.upload(N,Ea(bt),qe,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ts.upload(N,Ea(bt),qe,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(N,"center",U.center),le.setValue(N,"modelViewMatrix",U.modelViewMatrix),le.setValue(N,"normalMatrix",U.normalMatrix),le.setValue(N,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const ke=V.uniformsGroups;for(let un=0,dn=ke.length;un<dn;un++){const Ta=ke[un];I.update(Ta,ze),I.bind(Ta,ze)}}return ze}function vc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function xc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,D,z){At.get(y.texture).__webglTexture=D,At.get(y.depthTexture).__webglTexture=z;const V=At.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const z=At.get(y);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,z=0){R=y,A=D,w=z;let V=!0,U=null,et=!1,dt=!1;if(y){const St=At.get(y);if(St.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(St.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(St.__hasExternalTextures)T.rebindTextures(y,At.get(y.texture).__webglTexture,At.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const yt=y.depthTexture;if(St.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(y.width!==yt.image.width||y.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const It=y.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);const kt=At.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(kt[D])?U=kt[D][z]:U=kt[D],et=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?U=At.get(y).__webglMultisampledFramebuffer:Array.isArray(kt)?U=kt[z]:U=kt,C.copy(y.viewport),O.copy(y.scissor),k=y.scissorTest}else C.copy(ot).multiplyScalar(W).floor(),O.copy(Tt).multiplyScalar(W).floor(),k=qt;if(Et.bindFramebuffer(N.FRAMEBUFFER,U)&&V&&Et.drawBuffers(y,U),Et.viewport(C),Et.scissor(O),Et.setScissorTest(k),et){const St=At.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,z)}else if(dt){const St=At.get(y.texture),It=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,z||0,It)}M=-1},this.readRenderTargetPixels=function(y,D,z,V,U,et,dt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Et.bindFramebuffer(N.FRAMEBUFFER,Mt);try{const St=y.texture,It=St.format,kt=St.type;if(!Wt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-V&&z>=0&&z<=y.height-U&&N.readPixels(D,z,V,U,Dt.convert(It),Dt.convert(kt),et)}finally{const St=R!==null?At.get(R).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(y,D,z,V,U,et,dt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const St=y.texture,It=St.format,kt=St.type;if(!Wt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-V&&z>=0&&z<=y.height-U){Et.bindFramebuffer(N.FRAMEBUFFER,Mt);const yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(D,z,V,U,Dt.convert(It),Dt.convert(kt),0);const $t=R!==null?At.get(R).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,$t);const oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await El(N,oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(yt),N.deleteSync(oe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,z=0){y.isTexture!==!0&&(Ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-z),U=Math.floor(y.image.width*V),et=Math.floor(y.image.height*V),dt=D!==null?D.x:0,Mt=D!==null?D.y:0;T.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,dt,Mt,U,et),Et.unbindTexture()},this.copyTextureToTexture=function(y,D,z=null,V=null,U=0){y.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let et,dt,Mt,St,It,kt,yt,$t,oe;const ce=y.isCompressedTexture?y.mipmaps[U]:y.image;z!==null?(et=z.max.x-z.min.x,dt=z.max.y-z.min.y,Mt=z.isBox3?z.max.z-z.min.z:1,St=z.min.x,It=z.min.y,kt=z.isBox3?z.min.z:0):(et=ce.width,dt=ce.height,Mt=ce.depth||1,St=0,It=0,kt=0),V!==null?(yt=V.x,$t=V.y,oe=V.z):(yt=0,$t=0,oe=0);const Ae=Dt.convert(D.format),Jt=Dt.convert(D.type);let bt;D.isData3DTexture?(T.setTexture3D(D,0),bt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),bt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const Qe=N.getParameter(N.UNPACK_ROW_LENGTH),Qt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ze=N.getParameter(N.UNPACK_SKIP_PIXELS),Gn=N.getParameter(N.UNPACK_SKIP_ROWS),Le=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,St),N.pixelStorei(N.UNPACK_SKIP_ROWS,It),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt);const Si=y.isDataArrayTexture||y.isData3DTexture,le=D.isDataArrayTexture||D.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const qe=At.get(y),yi=At.get(D),ke=At.get(qe.__renderTarget),un=At.get(yi.__renderTarget);Et.bindFramebuffer(N.READ_FRAMEBUFFER,ke.__webglFramebuffer),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let dn=0;dn<Mt;dn++)Si&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(y).__webglTexture,U,kt+dn),y.isDepthTexture?(le&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(D).__webglTexture,U,oe+dn),N.blitFramebuffer(St,It,et,dt,yt,$t,et,dt,N.DEPTH_BUFFER_BIT,N.NEAREST)):le?N.copyTexSubImage3D(bt,U,yt,$t,oe+dn,St,It,et,dt):N.copyTexSubImage2D(bt,U,yt,$t,oe+dn,St,It,et,dt);Et.bindFramebuffer(N.READ_FRAMEBUFFER,null),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else le?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(bt,U,yt,$t,oe,et,dt,Mt,Ae,Jt,ce.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,U,yt,$t,oe,et,dt,Mt,Ae,ce.data):N.texSubImage3D(bt,U,yt,$t,oe,et,dt,Mt,Ae,Jt,ce):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,yt,$t,et,dt,Ae,Jt,ce.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,yt,$t,ce.width,ce.height,Ae,ce.data):N.texSubImage2D(N.TEXTURE_2D,U,yt,$t,et,dt,Ae,Jt,ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,Qe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Gn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le),U===0&&D.generateMipmaps&&N.generateMipmap(bt),Et.unbindTexture()},this.copyTextureToTexture3D=function(y,D,z=null,V=null,U=0){return y.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,y=arguments[2],D=arguments[3],U=arguments[4]||0),Ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,z,V,U)},this.initRenderTarget=function(y){At.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Et.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Et.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class ma{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kp extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pc extends zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rs=new P,Ps=new P,To=new he,Ai=new da,fs=new Gi,ur=new P,wo=new P;class Fp extends _e{constructor(t=new ve,e=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Rs.fromBufferAttribute(e,i-1),Ps.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Rs.distanceTo(Ps);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(i),fs.radius+=r,t.ray.intersectsSphere(fs)===!1)return;To.copy(i).invert(),Ai.copy(t.ray).applyMatrix4(To);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),E=h.getX(_+1),b=ps(this,t,Ai,c,f,E);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=ps(this,t,Ai,c,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=ps(this,t,Ai,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=ps(this,t,Ai,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ps(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(Rs.fromBufferAttribute(a,i),Ps.fromBufferAttribute(a,r),e.distanceSqToSegment(Rs,Ps,ur,wo)>n)return;ur.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ur);if(!(c<t.near||c>t.far))return{distance:c,point:wo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ao=new P,Co=new P;class Op extends Fp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ao.fromBufferAttribute(e,i),Co.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ao.distanceTo(Co);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ga extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ro=new he,ea=new da,ms=new Gi,gs=new P;class mc extends _e{constructor(t=new ve,e=new ga){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(i),ms.radius+=r,t.ray.intersectsSphere(ms)===!1)return;Ro.copy(i).invert(),ea.copy(t.ray).applyMatrix4(Ro);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);gs.fromBufferAttribute(u,m),Po(gs,m,c,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)gs.fromBufferAttribute(u,g),Po(gs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Po(s,t,e,n,i,r,a){const o=ea.distanceSqToPoint(s);if(o<e){const c=new P;ea.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ws extends we{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new Xt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yt extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(p,2));function E(){const S=new P,L=new P;let A=0;const w=(e-t)/n;for(let R=0;R<=r;R++){const M=[],v=R/r,C=v*(e-t)+t;for(let O=0;O<=i;O++){const k=O/i,K=k*c+o,F=Math.sin(K),G=Math.cos(K);L.x=C*F,L.y=-v*n+m,L.z=C*G,u.push(L.x,L.y,L.z),S.set(F,w,G).normalize(),d.push(S.x,S.y,S.z),p.push(k,1-v),M.push(g++)}_.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){const v=_[M][R],C=_[M+1][R],O=_[M+1][R+1],k=_[M][R+1];(t>0||M!==0)&&(h.push(v,C,k),A+=3),(e>0||M!==r-1)&&(h.push(C,O,k),A+=3)}l.addGroup(f,A,0),f+=A}function b(S){const L=g,A=new Xt,w=new P;let R=0;const M=S===!0?t:e,v=S===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const C=g;for(let O=0;O<=i;O++){const K=O/i*c+o,F=Math.cos(K),G=Math.sin(K);w.x=M*G,w.y=m*v,w.z=M*F,u.push(w.x,w.y,w.z),d.push(0,v,0),A.x=F*.5+.5,A.y=G*.5*v+.5,p.push(A.x,A.y),g++}for(let O=0;O<i;O++){const k=L+O,K=C+O;S===!0?h.push(K,K+1,k):h.push(K+1,K,k),R+=3}l.addGroup(f,R,S===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vt extends Yt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Vt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vi extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const b=new P,S=new P,L=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],b),p(e[A+1],S),p(e[A+2],L),c(b,S,L,E)}function c(E,b,S,L){const A=L+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const M=E.clone().lerp(S,R/A),v=b.clone().lerp(S,R/A),C=A-R;for(let O=0;O<=C;O++)O===0&&R===A?w[R][O]=M:w[R][O]=M.clone().lerp(v,O/C)}for(let R=0;R<A;R++)for(let M=0;M<2*(A-R)-1;M++){const v=Math.floor(M/2);M%2===0?(d(w[R][v+1]),d(w[R+1][v]),d(w[R][v])):(d(w[R][v+1]),d(w[R+1][v+1]),d(w[R+1][v]))}}function l(E){const b=new P;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(E),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function h(){const E=new P;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const S=m(E)/2/Math.PI+.5,L=f(E)/Math.PI+.5;a.push(S,1-L)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const b=a[E+0],S=a[E+2],L=a[E+4],A=Math.max(b,S,L),w=Math.min(b,S,L);A>.9&&w<.1&&(b<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),L<.2&&(a[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,b){const S=E*3;b.x=t[S+0],b.y=t[S+1],b.z=t[S+2]}function g(){const E=new P,b=new P,S=new P,L=new P,A=new Xt,w=new Xt,R=new Xt;for(let M=0,v=0;M<r.length;M+=9,v+=6){E.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),A.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),R.set(a[v+4],a[v+5]),L.copy(E).add(b).add(S).divideScalar(3);const C=m(L);_(A,v+0,E,C),_(w,v+2,b,C),_(R,v+4,S,C)}}function _(E,b,S,L){L<0&&E.x===1&&(a[b]=E.x-1),S.x===0&&S.z===0&&(a[b]=L/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.vertices,t.indices,t.radius,t.details)}}class Fi extends Vi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fi(t.radius,t.detail)}}const _s=new P,vs=new P,dr=new P,xs=new Be;class Bp extends ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(oi*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:f}=xs;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),xs.getNormal(dr),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const b=(E+1)%3,S=u[E],L=u[b],A=xs[h[E]],w=xs[h[b]],R=`${S}_${L}`,M=`${L}_${S}`;M in d&&d[M]?(dr.dot(d[M].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(w.x,w.y,w.z)),d[M]=null):R in d||(d[R]={index0:l[E],index1:l[b],normal:dr.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];_s.fromBufferAttribute(o,_),vs.fromBufferAttribute(o,m),p.push(_s.x,_s.y,_s.z),p.push(vs.x,vs.y,vs.z)}this.setAttribute("position",new se(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ii extends Vi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ii(t.radius,t.detail)}}class Di extends Vi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Di(t.radius,t.detail)}}class Is extends ve{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,p=new P,g=new Xt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const E=f+m,b=E,S=E+n+1,L=E+n+2,A=E+1;o.push(b,S,A),o.push(S,L,A)}}this.setIndex(o),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ue extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,d=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let S=0;f===0&&a===0?S=.5/e:f===n&&c===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const A=L/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+S,1-b),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const b=h[f][E+1],S=h[f][E],L=h[f+1][E],A=h[f+1][E+1];(f!==0||a>0)&&p.push(b,S,A),(f!==n-1||c<Math.PI)&&p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oi extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,E=(i+1)*p+g;a.push(_,m,E),a.push(m,f,E)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vt extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _a extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const fr=new he,Lo=new P,Io=new P;class gc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Lo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lo),Io.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Io),e.updateMatrixWorld(),fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Do=new he,Ci=new P,pr=new P;class Hp extends gc{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ci.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ci),pr.copy(n.position),pr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pr),n.updateMatrixWorld(),i.makeTranslation(-Ci.x,-Ci.y,-Ci.z),Do.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do)}}class na extends _a{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zp extends gc{constructor(){super(new cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mr extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new zp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gp extends _a{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);class Vp{scene;renderer;container;constructor(t){const e=document.getElementById(t);if(!e)throw new Error(`Container #${t} not found`);this.container=e,this.scene=new kp,this.scene.background=new Ut(395280),this.scene.fog=new ma(461590,.025),this.renderer=new Np({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sa,this.renderer.toneMapping=Fo,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){if(!this.container)return;const t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e)}render(t){this.renderer.render(this.scene,t)}getAspectRatio(){return this.container.clientWidth/this.container.clientHeight}}class Wp{group;flashLight;centerChair=null;dustPoints=null;sunBeams=null;spectatorGroup=null;animTime=0;constructor(t){this.group=new Bt,t.add(this.group),this.setupLighting(t),this.buildFloor(),this.buildSunlightEffects(),this.buildCityStorefront(),this.buildSpectators(),this.buildIconicChair(),this.buildAtmosphere(),this.flashLight=new na(16772304,0,24),this.flashLight.position.set(0,3,2),this.group.add(this.flashLight)}setupLighting(t){const e=new Gp(9283272,1.7);t.add(e);const n=new mr(16772304,3.8);n.position.set(-8,18,7),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=1,n.shadow.camera.far=32,n.shadow.camera.left=-16,n.shadow.camera.right=16,n.shadow.camera.top=10,n.shadow.camera.bottom=-4,n.shadow.bias=-.001,t.add(n);const i=new mr(4500223,1.8);i.position.set(6,6,-8),t.add(i);const r=new mr(16755302,.8);r.position.set(0,-5,4),t.add(r)}buildFloor(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#2c313d",e.fillRect(0,0,512,512),e.strokeStyle="#1e222b",e.lineWidth=6;const n=64;for(let d=0;d<=512;d+=n)e.beginPath(),e.moveTo(d,0),e.lineTo(d,512),e.stroke();for(let d=0;d<=512;d+=n)e.beginPath(),e.moveTo(0,d),e.lineTo(512,d),e.stroke();for(let d=0;d<600;d++){const p=Math.random()*512,g=Math.random()*512,_=Math.floor(40+Math.random()*30);e.fillStyle=`rgba(${_}, ${_+4}, ${_+10}, 0.25)`,e.fillRect(p,g,2+Math.random()*4,2+Math.random()*4)}const i=new ws(t);i.wrapS=Ui,i.wrapT=Ui,i.repeat.set(6,3);const r=new xe(38,20),a=new vt({map:i,roughness:.45,metalness:.2}),o=new gt(r,a);o.rotation.x=-Math.PI/2,o.position.y=0,o.receiveShadow=!0,this.group.add(o);const c=new vt({color:16118507,roughness:.7,metalness:.05,side:Ce}),l=new vt({color:16767402,roughness:.7,metalness:.05,side:Ce}),h=new xe(.35,.22);[[-6.5,-.4,.3],[-5.8,-.8,-.2],[-4.2,.8,.7],[-2.1,.2,-.4],[-1.4,-.6,.5],[1.8,-.3,.2],[2.5,.6,-.5],[4.2,-.5,.8],[6.1,.3,-.3],[7.5,-.7,.4]].forEach(([d,p,g],_)=>{const m=new gt(h,_%2===0?c:l);m.rotation.x=-Math.PI/2,m.rotation.z=g,m.position.set(d,.006+_*.001,p),m.receiveShadow=!0,this.group.add(m)}),[-13.5,13.5].forEach(d=>{const p=new xe(.08,14),g=new zt({color:16756787,transparent:!0,opacity:.35}),_=new gt(p,g);_.rotation.x=-Math.PI/2,_.position.set(d,.005,0),this.group.add(_)})}buildSunlightEffects(){const t=new Bt,e=new Ls(2.4,32),n=new zt({color:16776166,transparent:!0,opacity:.95}),i=new gt(e,n);i.position.set(-8.5,11.5,-7.5),t.add(i);const r=new Ls(5.2,32),a=new zt({color:16764006,transparent:!0,opacity:.45,blending:Xe}),o=new gt(r,a);o.position.set(-8.5,11.5,-7.6),t.add(o),this.sunBeams=new Bt;const c=new xe(3.2,18),l=new zt({color:16773324,transparent:!0,opacity:.14,blending:Xe,side:Ce,depthWrite:!1}),h=[-.42,-.36,-.28,-.2],u=[-8,-5.5,-3,0];h.forEach((d,p)=>{const g=new gt(c,l);g.position.set(u[p],7,-2.5+p*.4),g.rotation.z=d,g.rotation.y=.12,this.sunBeams.add(g)}),t.add(this.sunBeams),this.group.add(t)}buildCityStorefront(){const t=new Bt;t.position.set(0,0,-6.5);const e=new xe(40,22),n=new zt({color:4746134}),i=new gt(e,n);i.position.set(0,9,-1),t.add(i);const r=new Rt(38,12,.4),a=new vt({color:2239032,roughness:.35,metalness:.4}),o=new gt(r,a);o.position.set(0,6,0),t.add(o);const c=new vt({color:3364215,roughness:.1,metalness:.8,transparent:!0,opacity:.75}),l=new Rt(15,5,.1),h=new gt(l,c);h.position.set(-8.5,3.2,.22),t.add(h);const u=new zt({color:16737962,transparent:!0,opacity:.25,blending:Xe}),d=new gt(new xe(15,5),u);d.position.set(-8.5,3.2,.15),t.add(d);const p=new Rt(16,5,.1),g=new gt(p,c);g.position.set(8.5,3.2,.22),t.add(g);const _=new zt({color:16755268,transparent:!0,opacity:.3,blending:Xe}),m=new gt(new xe(16,5),_);m.position.set(8.5,3.2,.15),t.add(m);const f=new vt({color:1119776,roughness:.4,metalness:.5});[-15,-9,-3,1,8,15].forEach(ot=>{const Tt=new gt(new Rt(.18,5.2,.25),f);Tt.position.set(ot,3.2,.25),t.add(Tt)});const E=new Rt(38,.35,1.4),b=new vt({color:1712430,roughness:.4,metalness:.6}),S=new gt(E,b);S.position.set(0,6,.7),t.add(S);const L=new vt({color:4016736,roughness:.3,metalness:.7}),A=new gt(new Rt(38,.08,.08),L);A.position.set(0,7.1,1.35),t.add(A);const w=new gt(new Rt(38,.06,.06),L);w.position.set(0,6.55,1.35),t.add(w);for(let ot=-18;ot<=18;ot+=1.8){const Tt=new gt(new Yt(.04,.04,1.1,6),L);Tt.position.set(ot,6.55,1.35),t.add(Tt)}const R=document.createElement("canvas");R.width=1024,R.height=256;const M=R.getContext("2d");M.font='italic 900 110px "Impact", "Arial Black", sans-serif',M.textAlign="center",M.textBaseline="middle",M.shadowColor="#00f0ff",M.shadowBlur=32,M.strokeStyle="#00f0ff",M.lineWidth=14,M.strokeText("HYPER ZONE",512,128),M.shadowColor="#ff3366",M.shadowBlur=24,M.strokeStyle="#ff3366",M.lineWidth=8,M.strokeText("HYPER ZONE",512,128),M.shadowColor="#ffea00",M.shadowBlur=16,M.fillStyle="#fff4cc",M.fillText("HYPER ZONE",512,128);const v=new ws(R),C=new zt({map:v,transparent:!0,blending:Xe}),O=new gt(new xe(9.6,2.4),C);O.position.set(-7.5,7.8,.3),t.add(O);const k=new na(16737860,2.2,10);k.position.set(-7.5,7.8,1.2),t.add(k);const K=document.createElement("canvas");K.width=1024,K.height=512;const F=K.getContext("2d");F.font='900 88px "Impact", "Arial Black", sans-serif',F.textAlign="center",F.shadowColor="#8833ff",F.shadowBlur=25,F.fillStyle="#5522aa",F.fillText("JAVA",680,100),F.fillText("JABBER",680,185);const G=300,X=220;F.fillStyle="#ffaa22",F.beginPath(),F.arc(G-65,X-65,30,0,Math.PI*2),F.arc(G+65,X-65,30,0,Math.PI*2),F.fill(),F.fillStyle="#ffeedd",F.beginPath(),F.arc(G-65,X-65,16,0,Math.PI*2),F.arc(G+65,X-65,16,0,Math.PI*2),F.fill(),F.fillStyle="#ffaa22",F.beginPath(),F.ellipse(G,X,90,80,0,0,Math.PI*2),F.fill(),F.strokeStyle="#221100",F.lineWidth=6,F.beginPath(),F.moveTo(G,X-70),F.lineTo(G,X-40),F.moveTo(G-30,X-65),F.lineTo(G-15,X-45),F.moveTo(G+30,X-65),F.lineTo(G+15,X-45),F.stroke(),F.fillStyle="#fff4e6",F.beginPath(),F.ellipse(G,X+20,50,35,0,0,Math.PI*2),F.fill(),F.fillStyle="#111122",F.beginPath(),F.arc(G-35,X-5,8,0,Math.PI*2),F.arc(G+35,X-5,8,0,Math.PI*2),F.fill(),F.beginPath(),F.arc(G,X+20,18,.2,Math.PI-.2),F.stroke(),F.fillStyle="#4488ff",F.fillRect(G+75,X-10,45,55),F.strokeStyle="#ffffff",F.lineWidth=4,F.strokeRect(G+75,X-10,45,55);const W=new ws(K),nt=new zt({map:W,transparent:!0,opacity:.9}),Q=new gt(new xe(9,4.5),nt);Q.position.set(7.5,7.5,.3),t.add(Q),[-12.5,12.5].forEach(ot=>{const Tt=new Yt(.35,.25,.65,8),qt=new vt({color:16777215,roughness:.3}),Y=new gt(Tt,qt);Y.position.set(ot,.325,.8),t.add(Y);const J=new vt({color:2271812,roughness:.5});for(let ut=0;ut<5;ut++){const it=new gt(new Vt(.18,.9,4),J);it.position.set(ot,.9,.8),it.rotation.set((Math.random()-.5)*.4,ut*Math.PI/2.5,.3),t.add(it)}}),this.group.add(t)}buildSpectators(){this.spectatorGroup=new Bt,this.spectatorGroup.position.set(0,0,-6.1);const t=[3368652,16729224,52394,16755200,7816379];[-11,-9,-6,-4,5,10].forEach((n,i)=>{const r=new Bt;r.position.set(n,1.2,0);const a=new Yt(.24,.28,1.1,6),o=new vt({color:t[i%t.length],roughness:.5}),c=new gt(a,o);r.add(c);const l=new Ue(.2,8,8),h=new vt({color:16106398,roughness:.4}),u=new gt(l,h);u.position.y=.75,r.add(u);const d=new Rt(.28,.1,.28),p=new zt({color:1119778}),g=new gt(d,p);g.position.set(0,.88,.05),r.add(g),this.spectatorGroup.add(r)}),this.group.add(this.spectatorGroup)}buildIconicChair(){const t=new Bt;t.position.set(2.8,0,-3.2);const e=new vt({color:39372,roughness:.35,metalness:.1}),n=h=>{const u=new gt(h,e);return u.castShadow=!0,u},i=new Rt(.75,.06,.7),r=n(i);r.position.y=.55,t.add(r);const a=new Rt(.75,.8,.06),o=n(a);o.position.set(0,.95,-.32),o.rotation.x=-.08,t.add(o);const c=new Yt(.035,.03,.55,8);[[-.32,-.3],[.32,-.3],[-.32,.3],[.32,.3]].forEach(([h,u])=>{const d=n(c);d.position.set(h,.275,u),d.rotation.z=h<0?.06:-.06,d.rotation.x=u<0?-.06:.06,t.add(d)}),this.group.add(t),this.centerChair=t}buildAtmosphere(){const e=new Float32Array(270);for(let r=0;r<90;r++)e[r*3]=(Math.random()-.5)*28,e[r*3+1]=Math.random()*8,e[r*3+2]=(Math.random()-.5)*10;const n=new ve;n.setAttribute("position",new Pe(e,3));const i=new ga({color:16773307,size:.15,transparent:!0,opacity:.55,blending:Xe});this.dustPoints=new mc(n,i),this.group.add(this.dustPoints)}triggerImpactFlash(t=16772304,e=5,n){this.flashLight.color.setHex(t),this.flashLight.intensity=e,n&&this.flashLight.position.copy(n)}setDustVisible(t){this.dustPoints&&(this.dustPoints.visible=t)}update(t){if(this.animTime+=t,this.flashLight.intensity>0&&(this.flashLight.intensity=Math.max(0,this.flashLight.intensity-t*18)),this.dustPoints){const e=this.dustPoints.geometry.attributes.position,n=e.array;for(let i=0;i<n.length;i+=3)n[i+1]+=t*.16,n[i]+=Math.sin(this.animTime+i)*.008,n[i+1]>7.5&&(n[i+1]=.1);e.needsUpdate=!0}this.sunBeams&&this.sunBeams.children.forEach((e,n)=>{const i=e.material;i.opacity=.12+Math.sin(this.animTime*1.5+n)*.03}),this.spectatorGroup&&this.spectatorGroup.children.forEach((e,n)=>{e.position.y=1.2+Math.sin(this.animTime*4+n*1.2)*.05})}}class Xp{camera;trauma=0;shakeOffset=new P;basePosition=new P(0,2.2,7.5);isCinematic=!1;cinematicTarget=new P;cinematicOffset=new P;cinematicTimer=0;isOrbiting=!1;orbitAngle=0;orbitCenter=new P;constructor(t){this.camera=new Ne(48,t,.1,100),this.camera.position.set(0,2.2,7.5)}updateAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}update(t,e,n){if(this.isOrbiting){this.orbitAngle+=t*.8;const d=4.2,p=this.orbitCenter.x+Math.sin(this.orbitAngle)*d,g=this.orbitCenter.z+Math.cos(this.orbitAngle)*d,_=this.orbitCenter.y+1.2;this.camera.position.lerp(new P(p,_,g),.08),this.camera.lookAt(this.orbitCenter.x,this.orbitCenter.y+1,this.orbitCenter.z);return}if(this.isCinematic)if(this.cinematicTimer-=t,this.cinematicTimer<=0)this.isCinematic=!1;else{const d=this.cinematicTarget.clone().add(this.cinematicOffset);this.camera.position.lerp(d,.12),this.camera.lookAt(this.cinematicTarget.x,this.cinematicTarget.y+1.1,this.cinematicTarget.z);return}const i=new P().addVectors(e,n).multiplyScalar(.5),r=Math.abs(e.x-n.x),a=Math.max(e.y,n.y),o=Mn.clamp(5.4+r*.45,5.8,10.5),c=Mn.clamp(1.8+a*.35,1.8,3.8),l=Mn.clamp(i.x,-6.5,6.5),h=new P(l,c,o);if(this.basePosition.lerp(h,.14),this.shakeOffset.set(0,0,0),this.trauma>0){const d=Math.pow(this.trauma,2)*.35;this.shakeOffset.set((Math.random()*2-1)*d,(Math.random()*2-1)*d,(Math.random()*2-1)*d*.3),this.trauma=Math.max(0,this.trauma-t*4)}this.camera.position.copy(this.basePosition).add(this.shakeOffset);const u=new P(l,c-.3,0);this.camera.lookAt(u)}enableShake=!0;addTrauma(t){if(!this.enableShake){this.trauma=0;return}this.trauma=Mn.clamp(this.trauma+t,0,1)}triggerSuperZoom(t,e=.8){this.isCinematic=!0,this.cinematicTarget.copy(t),this.cinematicOffset.set(.6,.4,2.8),this.cinematicTimer=e}triggerKODolly(t){this.isOrbiting=!0,this.orbitCenter.copy(t),this.orbitAngle=Math.atan2(this.camera.position.x-t.x,this.camera.position.z-t.z)}resetOrbit(){this.isOrbiting=!1,this.isCinematic=!1}}class Kp{particles=[];maxParticles=600;pointsMesh;geometry;positions;colors;sizes;rings=[];group;hadParticlesLastFrame=!1;constructor(t){this.group=new Bt,t.add(this.group),this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.geometry=new ve,this.geometry.setAttribute("position",new Pe(this.positions,3)),this.geometry.setAttribute("color",new Pe(this.colors,3)),this.geometry.setAttribute("size",new Pe(this.sizes,1));const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");if(n){const a=n.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),a.addColorStop(.7,"rgba(255, 255, 255, 0.2)"),a.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=a,n.fillRect(0,0,64,64)}const i=new ws(e),r=new ga({size:.35,map:i,transparent:!0,blending:Xe,depthWrite:!1,vertexColors:!0});this.pointsMesh=new mc(this.geometry,r),this.group.add(this.pointsMesh)}emitHitSpark(t,e,n=24,i=6){const r=new Ut(e);for(let a=0;a<n&&!(this.particles.length>=this.maxParticles);a++){const o=Math.random()*Math.PI*2,c=(Math.random()-.5)*Math.PI*.8,l=i*(.4+Math.random()*.8),h=new P(Math.cos(o)*Math.cos(c)*l,Math.sin(c)*l,Math.sin(o)*Math.cos(c)*l*.3);this.particles.push({position:t.clone().add(new P((Math.random()-.5)*.2,(Math.random()-.5)*.2,0)),velocity:h,color:r.clone().lerp(new Ut(16777215),Math.random()*.5),size:.25+Math.random()*.25,alpha:1,life:0,maxLife:.18+Math.random()*.22,drag:.92,gravity:-4})}this.spawnShockwave(t,e,8)}emitBlockSpark(t){this.emitHitSpark(t,54783,16,4)}emitDust(t,e=8){const n=new Ut(7833753);for(let i=0;i<e&&!(this.particles.length>=this.maxParticles);i++){const r=new P((Math.random()-.5)*2.5,Math.random()*1.5,(Math.random()-.5)*.8);this.particles.push({position:new P(t.x,.05,t.z),velocity:r,color:n,size:.35+Math.random()*.25,alpha:.6,life:0,maxLife:.35,drag:.9,gravity:.5})}}emitProjectileTrail(t,e){if(this.particles.length>=this.maxParticles)return;const n=new Ut(e);for(let i=0;i<3;i++)this.particles.push({position:t.clone().add(new P((Math.random()-.5)*.2,(Math.random()-.5)*.2,0)),velocity:new P((Math.random()-.5)*.5,(Math.random()-.5)*.5,0),color:n,size:.3,alpha:.9,life:0,maxLife:.25,drag:.95,gravity:0})}spawnShockwave(t,e,n=7){const i=new Is(.1,.2,32),r=new zt({color:e,transparent:!0,opacity:.9,side:Ce,blending:Xe}),a=new gt(i,r);a.position.copy(t),this.group.add(a),this.rings.push({mesh:a,life:0,maxLife:.22,scaleSpeed:n})}emitSlashArc(t,e,n=1){const i=new Is(.5,.75,16,1,0,Math.PI*.75),r=new zt({color:e,transparent:!0,opacity:.95,side:Ce,blending:Xe}),a=new gt(i,r);a.position.copy(t),a.rotation.z=n===1?-.4:Math.PI+.4,this.group.add(a),this.rings.push({mesh:a,life:0,maxLife:.16,scaleSpeed:5.5})}emitGroundAura(t,e=61695){const n=new Ut(e);for(let i=0;i<6&&!(this.particles.length>=this.maxParticles);i++){const r=(Math.random()-.5)*1.1;this.particles.push({position:new P(t.x+r,.05,t.z+(Math.random()-.5)*.4),velocity:new P((Math.random()-.5)*.3,3.2+Math.random()*2.2,0),color:n.clone().lerp(new Ut(16777215),Math.random()*.6),size:.42+Math.random()*.25,alpha:1,life:0,maxLife:.28+Math.random()*.15,drag:.94,gravity:1.5})}}emitShatterBurst(t,e=16773324,n=26){const i=new Ut(e);for(let r=0;r<n&&!(this.particles.length>=this.maxParticles);r++){const a=Math.random()*Math.PI*2,o=5+Math.random()*5.5;this.particles.push({position:t.clone().add(new P((Math.random()-.5)*.3,(Math.random()-.5)*.3,0)),velocity:new P(Math.cos(a)*o,Math.sin(a)*o,(Math.random()-.5)*1.5),color:i.clone().lerp(new Ut(16777215),Math.random()*.7),size:.35+Math.random()*.25,alpha:1,life:0,maxLife:.25+Math.random()*.2,drag:.91,gravity:-5})}this.spawnShockwave(t,e,9)}update(t){for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.life+=t,i.life>=i.maxLife){this.particles.splice(n,1);continue}i.velocity.x*=i.drag,i.velocity.y+=i.gravity*t,i.velocity.y*=i.drag,i.velocity.z*=i.drag,i.position.addScaledVector(i.velocity,t),i.position.y<.05&&(i.position.y=.05,i.velocity.y*=-.3)}const e=this.particles.length;if(e>0||this.hadParticlesLastFrame){for(let n=0;n<e;n++){const i=this.particles[n],r=n*3;this.positions[r]=i.position.x,this.positions[r+1]=i.position.y,this.positions[r+2]=i.position.z;const o=1-i.life/i.maxLife;this.colors[r]=i.color.r*o,this.colors[r+1]=i.color.g*o,this.colors[r+2]=i.color.b*o,this.sizes[n]=i.size*o}this.geometry.setDrawRange(0,e),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.hadParticlesLastFrame=e>0}for(let n=this.rings.length-1;n>=0;n--){const i=this.rings[n];if(i.life+=t,i.life>=i.maxLife){this.group.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.rings.splice(n,1);continue}const r=i.life/i.maxLife,a=1+r*i.scaleSpeed;i.mesh.scale.set(a,a,1),i.mesh.material.opacity=(1-r)*.9}}}class Yp{ctx=null;isMuted=!1;masterGain=null;bgmGain=null;sfxGain=null;isBgmPlaying=!1;bgmIntervalId=null;bgmStep=0;sharedNoiseBuffer=null;masterVolume=.8;bgmVolume=.6;sfxVolume=.85;constructor(){}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:this.masterVolume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(this.sfxVolume,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.setValueAtTime(this.bgmVolume,this.ctx.currentTime),this.bgmGain.connect(this.masterGain);const e=Math.floor(this.ctx.sampleRate*.4);this.sharedNoiseBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.sharedNoiseBuffer.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1}catch(t){console.warn("Web Audio API not supported",t)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}updateGains(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;this.masterGain.gain.setValueAtTime(this.isMuted?0:this.masterVolume,t),this.sfxGain&&this.sfxGain.gain.setValueAtTime(this.sfxVolume,t),this.bgmGain&&this.bgmGain.gain.setValueAtTime(this.bgmVolume,t)}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.updateGains()}setBgmVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateGains()}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateGains()}setMuted(t){return this.isMuted=t,this.updateGains(),!this.isMuted}toggleMute(){return this.isMuted=!this.isMuted,this.updateGains(),!this.isMuted}getMuted(){return this.isMuted}playWhoosh(t=1){if(!this.ctx||this.isMuted||!this.sfxGain||!this.sharedNoiseBuffer)return;const e=this.ctx.currentTime,n=this.ctx.createBufferSource();n.buffer=this.sharedNoiseBuffer;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(1100*t,e),i.frequency.exponentialRampToValueAtTime(250*t,e+.12),i.Q.setValueAtTime(4,e);const r=this.ctx.createGain();r.gain.setValueAtTime(.01,e),r.gain.linearRampToValueAtTime(.5,e+.03),r.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(i),i.connect(r),r.connect(this.sfxGain),n.start(e)}playHitLight(){if(!this.ctx||this.isMuted||!this.sfxGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(420,t),e.frequency.exponentialRampToValueAtTime(90,t+.07);const n=this.ctx.createGain();n.gain.setValueAtTime(.9,t),n.gain.exponentialRampToValueAtTime(.01,t+.07),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.07)}playHitHeavy(){if(!this.ctx||this.isMuted||!this.sfxGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(32,t+.24);const n=this.ctx.createGain();n.gain.setValueAtTime(1.1,t),n.gain.exponentialRampToValueAtTime(.01,t+.24),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.24);const i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(280,t),i.frequency.exponentialRampToValueAtTime(70,t+.12);const r=this.ctx.createGain();r.gain.setValueAtTime(.7,t),r.gain.exponentialRampToValueAtTime(.01,t+.12),i.connect(r),r.connect(this.sfxGain),i.start(t),i.stop(t+.12)}playBladeSlash(){if(!this.ctx||this.isMuted||!this.sfxGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(1600,t),e.frequency.exponentialRampToValueAtTime(300,t+.16);const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(2200,t),n.Q.setValueAtTime(6,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.8,t),i.gain.exponentialRampToValueAtTime(.001,t+.16),e.connect(n),n.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.16)}playBlock(){if(!this.ctx||this.isMuted||!this.sfxGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator();e.type="square",n.type="square",e.frequency.setValueAtTime(1150,t),n.frequency.setValueAtTime(1680,t);const i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.setValueAtTime(950,t);const r=this.ctx.createGain();r.gain.setValueAtTime(.6,t),r.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(i),n.connect(i),i.connect(r),r.connect(this.sfxGain),e.start(t),n.start(t),e.stop(t+.14),n.stop(t+.14)}playProjectileShoot(){if(!this.ctx||this.isMuted||!this.sfxGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(950,t),e.frequency.exponentialRampToValueAtTime(260,t+.22);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(2600,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.6,t),i.gain.exponentialRampToValueAtTime(.01,t+.22),e.connect(n),n.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.22)}playExplosion(){if(!this.ctx||this.isMuted||!this.sfxGain||!this.sharedNoiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.sharedNoiseBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(1e3,t),n.frequency.linearRampToValueAtTime(80,t+.35);const i=this.ctx.createGain();i.gain.setValueAtTime(.9,t),i.gain.exponentialRampToValueAtTime(.01,t+.35),e.connect(n),n.connect(i),i.connect(this.sfxGain),e.start(t)}playSuperFlash(){if(!this.ctx||this.isMuted||!this.sfxGain)return;const t=this.ctx.currentTime;[220,277.18,329.63,440,554.37].forEach(e=>{if(!this.ctx||!this.sfxGain)return;const n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(e,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.2,t),i.gain.linearRampToValueAtTime(.35,t+.15),i.gain.exponentialRampToValueAtTime(.001,t+.65),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.65)})}playDash(){this.playWhoosh(1.6)}playJump(){if(!this.ctx||this.isMuted||!this.sfxGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(420,t+.1);const n=this.ctx.createGain();n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.01,t+.1),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.1)}announce(t){if(!this.isMuted&&"speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(t);e.rate=1.08,e.pitch=.85,e.volume=1,window.speechSynthesis.speak(e)}catch(e){console.warn("Speech synthesis failed",e)}}startBattleBGM(){if(this.isBgmPlaying||!this.ctx||!this.bgmGain)return;this.isBgmPlaying=!0,this.bgmStep=0;const t=60/138/4*1e3,e=[440,0,523,0,587,0,622,587,523,0,440,0,392,0,440,0,440,0,523,0,587,0,659,0,784,659,587,0,523,0,440,0],n=[55,55,55,55,65.4,65.4,73.4,73.4,55,55,55,55,87.3,87.3,82.4,82.4];this.bgmIntervalId=window.setInterval(()=>{if(!this.ctx||!this.bgmGain||this.isMuted)return;const i=this.ctx.currentTime,r=this.bgmStep%16,a=this.bgmStep%32;if(r===0||r===4||r===8||r===12||r===14){const c=this.ctx.createOscillator();c.type="sine",c.frequency.setValueAtTime(155,i),c.frequency.exponentialRampToValueAtTime(38,i+.09);const l=this.ctx.createGain();l.gain.setValueAtTime(.85,i),l.gain.exponentialRampToValueAtTime(.001,i+.14),c.connect(l),l.connect(this.bgmGain),c.start(i),c.stop(i+.14)}if((r===4||r===12)&&this.sharedNoiseBuffer){const c=this.ctx.createBufferSource();c.buffer=this.sharedNoiseBuffer;const l=this.ctx.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(1400,i);const h=this.ctx.createGain();h.gain.setValueAtTime(.45,i),h.gain.exponentialRampToValueAtTime(.001,i+.12),c.connect(l),l.connect(h),h.connect(this.bgmGain),c.start(i)}if(this.sharedNoiseBuffer){const c=this.ctx.createBufferSource();c.buffer=this.sharedNoiseBuffer;const l=this.ctx.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(7500,i);const h=this.ctx.createGain(),u=r%2===1?.22:.12;h.gain.setValueAtTime(u,i),h.gain.exponentialRampToValueAtTime(.001,i+.04),c.connect(l),l.connect(h),h.connect(this.bgmGain),c.start(i)}if(r%2===0){const c=n[Math.floor(this.bgmStep/2)%n.length],l=this.ctx.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(c,i),l.frequency.exponentialRampToValueAtTime(c*.95,i+.18);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(280,i);const u=this.ctx.createGain();u.gain.setValueAtTime(.45,i),u.gain.exponentialRampToValueAtTime(.01,i+.18),l.connect(h),h.connect(u),u.connect(this.bgmGain),l.start(i),l.stop(i+.18)}const o=e[a];o>0&&this.playPhonkCowbell(o,i),this.bgmStep++},t)}playPhonkCowbell(t,e){if(!this.ctx||!this.bgmGain)return;const n=this.ctx.createOscillator(),i=this.ctx.createOscillator();n.type="square",i.type="square",n.frequency.setValueAtTime(t,e),i.frequency.setValueAtTime(t*1.48,e);const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(t*1.2,e),r.Q.setValueAtTime(5,e);const a=this.ctx.createGain();a.gain.setValueAtTime(.3,e),a.gain.exponentialRampToValueAtTime(.001,e+.25),n.connect(r),i.connect(r),r.connect(a),a.connect(this.bgmGain),n.start(e),i.start(e),n.stop(e+.25),i.stop(e+.25)}stopBattleBGM(){this.bgmIntervalId!==null&&(clearInterval(this.bgmIntervalId),this.bgmIntervalId=null),this.isBgmPlaying=!1}playTeleport(){if(!this.ctx||!this.sfxGain||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,t),e.frequency.exponentialRampToValueAtTime(80,t+.15),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.15)}playThunder(){if(!this.ctx||!this.sfxGain||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.linearRampToValueAtTime(50,t+.22),n.type="lowpass",n.frequency.setValueAtTime(2400,t),n.frequency.exponentialRampToValueAtTime(300,t+.22),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.22)}playShuriken(){if(!this.ctx||!this.sfxGain||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(300,t+.12),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}}class qp{keysDown=new Set;keysJustPressed=new Set;p1LastTapTime={};p2LastTapTime={};doubleTapThreshold=260;constructor(){window.addEventListener("keydown",t=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keysDown.has(t.code)||this.keysJustPressed.add(t.code),this.keysDown.add(t.code)}),window.addEventListener("keyup",t=>{this.keysDown.delete(t.code)}),this.setupTouchListeners()}setupTouchListeners(){document.querySelectorAll(".t-btn").forEach(e=>{const n=e.getAttribute("data-key");if(!n)return;const i=a=>{a.preventDefault(),this.keysDown.has(n)||this.keysJustPressed.add(n),this.keysDown.add(n)},r=a=>{a.preventDefault(),this.keysDown.delete(n)};e.addEventListener("touchstart",i,{passive:!1}),e.addEventListener("touchend",r,{passive:!1}),e.addEventListener("mousedown",i),e.addEventListener("mouseup",r),e.addEventListener("mouseleave",r)})}getPlayerInputs(t,e){const n=t===1,i=this.readGamepad(t-1),r=k=>this.keysDown.has(k),a=k=>this.keysJustPressed.has(k);let o=!1,c=!1,l=!1,h=!1,u=!1,d=!1,p=!1,g=!1,_=!1,m=!1,f=!1,E=!1,b=!1,S=!1,L=!1,A=!1,w=!1,R=!1,M=!1,v=!1;const C=performance.now(),O=n?this.p1LastTapTime:this.p2LastTapTime;if(n){if(o=r("KeyA"),c=r("KeyD"),l=r("KeyW"),h=r("KeyS"),u=r("KeyJ"),d=r("KeyK"),p=r("KeyU"),g=r("KeyI"),_=r("KeyO"),m=r("KeyL"),f=r("Space"),E=a("KeyJ"),b=a("KeyK"),S=a("KeyU"),L=a("KeyI"),A=a("KeyO"),w=a("KeyL"),R=a("Space"),a("KeyD")){const k=C-(O.right||0);k>40&&k<this.doubleTapThreshold&&(e?M=!0:v=!0),O.right=C}if(a("KeyA")){const k=C-(O.left||0);k>40&&k<this.doubleTapThreshold&&(e?v=!0:M=!0),O.left=C}}else{if(o=r("ArrowLeft"),c=r("ArrowRight"),l=r("ArrowUp"),h=r("ArrowDown"),u=r("Numpad1")||r("KeyB"),d=r("Numpad2")||r("KeyN"),p=r("Numpad4")||r("KeyG"),g=r("Numpad5")||r("KeyH"),_=r("Numpad6")||r("KeyY"),m=r("Numpad3")||r("KeyT"),f=r("Enter")||r("KeyM"),E=a("Numpad1")||a("KeyB"),b=a("Numpad2")||a("KeyN"),S=a("Numpad4")||a("KeyG"),L=a("Numpad5")||a("KeyH"),A=a("Numpad6")||a("KeyY"),w=a("Numpad3")||a("KeyT"),R=a("Enter")||a("KeyM"),a("ArrowRight")){const k=C-(O.right||0);k>40&&k<this.doubleTapThreshold&&(e?M=!0:v=!0),O.right=C}if(a("ArrowLeft")){const k=C-(O.left||0);k>40&&k<this.doubleTapThreshold&&(e?v=!0:M=!0),O.left=C}}return i&&(o=o||!!i.left,c=c||!!i.right,l=l||!!i.up,h=h||!!i.down,u=u||!!i.lightPunch,d=d||!!i.heavyPunch,p=p||!!i.lightKick,g=g||!!i.heavyKick,_=_||!!i.special1,m=m||!!i.special2,f=f||!!i.superMove,E=E||!!i.pressedLightPunch,b=b||!!i.pressedHeavyPunch,S=S||!!i.pressedLightKick,L=L||!!i.pressedHeavyKick,A=A||!!i.pressedSpecial1,w=w||!!i.pressedSpecial2,R=R||!!i.pressedSuperMove),{left:o,right:c,up:l,down:h,lightPunch:u,heavyPunch:d,lightKick:p,heavyKick:g,special1:_,special2:m,superMove:f,pressedLightPunch:E,pressedHeavyPunch:b,pressedLightKick:S,pressedHeavyKick:L,pressedSpecial1:A,pressedSpecial2:w,pressedSuperMove:R,dashForward:M,dashBackward:v}}readGamepad(t){if(!navigator.getGamepads)return null;const n=navigator.getGamepads()[t];if(!n||!n.connected)return null;const i=n.axes[0]||0,r=n.axes[1]||0,a=.3,o=c=>n.buttons[c]&&n.buttons[c].pressed;return{left:i<-a||o(14),right:i>a||o(15),up:r<-a||o(12),down:r>a||o(13),lightPunch:o(2),heavyPunch:o(3),lightKick:o(0),heavyKick:o(1),special1:o(5),special2:o(4),superMove:o(7)||o(6),pressedLightPunch:o(2),pressedHeavyPunch:o(3),pressedLightKick:o(0),pressedHeavyKick:o(1),pressedSpecial1:o(5),pressedSpecial2:o(4),pressedSuperMove:o(7)||o(6)}}postUpdate(){this.keysJustPressed.clear()}}class In{debugGroup;debugEnabled=!1;wireframePool=[];activeWireframesCount=0;constructor(t){this.debugGroup=new Bt,this.debugGroup.visible=!1,t.add(this.debugGroup)}setDebugVisible(t){this.debugEnabled=t,this.debugGroup.visible=t}isDebugEnabled(){return this.debugEnabled}static testOverlap(t,e){return Math.abs(t.x-e.x)*2<t.width+e.width&&Math.abs(t.y-e.y)*2<t.height+e.height}resolvePushbox(t,e,n,i,r=13){const a=t.x+e.x,o=n.x+i.x,c=(e.width+i.width)*.5,l=o-a,h=Math.abs(l);if(h<c){const u=c-h,d=l>=0?1:-1,p=t.x<=-r,g=t.x>=r,_=n.x<=-r,m=n.x>=r;p||g?n.x+=u*d:_||m?t.x-=u*d:(t.x-=u*.5*d,n.x+=u*.5*d),t.x=Mn.clamp(t.x,-r,r),n.x=Mn.clamp(n.x,-r,r)}}beginDebugRender(){this.activeWireframesCount=0}drawDebugBox(t,e){if(!this.debugEnabled)return;let n=this.wireframePool[this.activeWireframesCount];if(!n){const i=new Bp(new Rt(1,1,.4)),r=new pc({color:e,depthTest:!1,transparent:!0,opacity:.8});n=new Op(i,r),this.debugGroup.add(n),this.wireframePool.push(n)}n.visible=!0,n.scale.set(t.width,t.height,1),n.position.set(t.x,t.y,0),n.material.color.setHex(e),this.activeWireframesCount++}endDebugRender(){if(this.debugEnabled)for(let t=this.activeWireframesCount;t<this.wireframePool.length;t++)this.wireframePool[t].visible=!1}}class jp{rig;animTime=0;constructor(t){this.rig=t}resetPose(){const t=this.rig;t.pelvis.position.set(0,1,0),t.pelvis.rotation.set(0,0,0),t.torso.rotation.set(0,0,0),t.chest.rotation.set(0,0,0),t.head.rotation.set(0,0,0),t.leftShoulder.rotation.set(0,0,0),t.leftUpperArm.rotation.set(0,0,0),t.leftForearm.rotation.set(0,0,0),t.leftHand.rotation.set(0,0,0),t.rightShoulder.rotation.set(0,0,0),t.rightUpperArm.rotation.set(0,0,0),t.rightForearm.rotation.set(0,0,0),t.rightHand.rotation.set(0,0,0),t.leftHip.rotation.set(0,0,0),t.leftThigh.rotation.set(0,0,0),t.leftShin.rotation.set(0,0,0),t.leftFoot.rotation.set(0,0,0),t.rightHip.rotation.set(0,0,0),t.rightThigh.rotation.set(0,0,0),t.rightShin.rotation.set(0,0,0),t.rightFoot.rotation.set(0,0,0)}update(t,e,n){this.animTime+=n,this.resetPose();const i=this.rig;switch(t){case"IDLE":{const r=Math.sin(this.animTime*7)*.04;i.pelvis.position.y=1.02+r,i.torso.rotation.y=.45,i.chest.rotation.x=-.05,i.leftUpperArm.rotation.z=-.6,i.leftUpperArm.rotation.x=.7,i.leftForearm.rotation.x=1.4,i.rightUpperArm.rotation.z=.4,i.rightUpperArm.rotation.x=.85,i.rightForearm.rotation.x=1.6,i.leftThigh.rotation.z=.28,i.leftShin.rotation.z=-.4,i.rightThigh.rotation.z=-.28,i.rightShin.rotation.z=.4,i.headbandTail&&(i.headbandTail.rotation.z=.25+Math.sin(this.animTime*12)*.2);break}case"WALK_FORWARD":{const r=this.animTime*10,a=Math.sin(r)*.6;i.pelvis.position.y=.96+Math.abs(Math.cos(r))*.05,i.leftThigh.rotation.z=a,i.leftShin.rotation.z=a<0?-.4:.1,i.rightThigh.rotation.z=-a,i.rightShin.rotation.z=-a<0?-.4:.1,i.leftUpperArm.rotation.x=.6-Math.sin(r)*.3,i.rightUpperArm.rotation.x=.8+Math.sin(r)*.3;break}case"WALK_BACKWARD":{const r=this.animTime*8,a=Math.sin(r)*.45;i.pelvis.position.y=.96+Math.abs(Math.cos(r))*.04,i.leftThigh.rotation.z=-a,i.rightThigh.rotation.z=a,i.torso.rotation.x=-.1;break}case"DASH_FORWARD":{i.pelvis.position.y=.8,i.torso.rotation.z=.65,i.leftThigh.rotation.z=.8,i.leftShin.rotation.z=-.7,i.rightThigh.rotation.z=-.6,i.leftUpperArm.rotation.z=-.8,i.rightUpperArm.rotation.z=-.8;break}case"DASH_BACKWARD":{i.pelvis.position.y=.85,i.torso.rotation.z=-.45,i.leftThigh.rotation.z=-.5,i.rightThigh.rotation.z=.6;break}case"JUMP":{i.pelvis.position.y=.9,i.leftThigh.rotation.z=.7,i.leftShin.rotation.z=-.9,i.rightThigh.rotation.z=.5,i.rightShin.rotation.z=-.8,i.leftUpperArm.rotation.z=-1.2,i.rightUpperArm.rotation.z=1.2;break}case"CROUCH":{i.pelvis.position.y=.52,i.leftThigh.rotation.z=1.2,i.leftShin.rotation.z=-1.5,i.rightThigh.rotation.z=1.1,i.rightShin.rotation.z=-1.4,i.torso.rotation.x=.25,i.leftForearm.rotation.x=1.5,i.rightForearm.rotation.x=1.5;break}case"BLOCK_HIGH":{i.pelvis.position.y=.95,i.torso.rotation.z=-.15,i.leftUpperArm.rotation.z=-.2,i.leftUpperArm.rotation.x=1.2,i.leftForearm.rotation.x=1.6,i.rightUpperArm.rotation.z=.2,i.rightUpperArm.rotation.x=1.2,i.rightForearm.rotation.x=1.6;break}case"BLOCK_LOW":{i.pelvis.position.y=.52,i.leftThigh.rotation.z=1.2,i.leftShin.rotation.z=-1.5,i.rightThigh.rotation.z=1.1,i.rightShin.rotation.z=-1.4,i.leftUpperArm.rotation.x=1,i.leftForearm.rotation.x=1.8,i.rightUpperArm.rotation.x=1,i.rightForearm.rotation.x=1.8;break}case"LIGHT_PUNCH":{const r=Math.sin(e*Math.PI);i.torso.rotation.y=.4*r,i.leftUpperArm.rotation.z=-1.4*r,i.leftUpperArm.rotation.x=.3,i.leftForearm.rotation.x=.2*(1-r);break}case"HEAVY_PUNCH":{const r=Math.sin(e*Math.PI);i.torso.rotation.y=-.7*r,i.rightUpperArm.rotation.z=1.6*r,i.rightUpperArm.rotation.x=.2,i.rightForearm.rotation.x=.1*(1-r),i.pelvis.position.y=.92;break}case"LIGHT_KICK":{const r=Math.sin(e*Math.PI);i.leftThigh.rotation.z=1.3*r,i.leftShin.rotation.z=-.1*r,i.rightThigh.rotation.z=-.2,i.torso.rotation.z=-.3*r;break}case"HEAVY_KICK":{const r=Math.sin(e*Math.PI);i.rightThigh.rotation.z=1.8*r,i.rightShin.rotation.z=.2,i.torso.rotation.z=-.6*r,i.torso.rotation.y=-.5*r;break}case"CROUCH_PUNCH":{i.pelvis.position.y=.52,i.leftThigh.rotation.z=1.2,i.leftShin.rotation.z=-1.5,i.rightThigh.rotation.z=1.1,i.rightShin.rotation.z=-1.4;const r=Math.sin(e*Math.PI);i.leftUpperArm.rotation.z=-1.2*r;break}case"CROUCH_KICK":{i.pelvis.position.y=.48;const r=Math.sin(e*Math.PI);i.leftThigh.rotation.z=1.6*r,i.leftShin.rotation.z=.1,i.rightThigh.rotation.z=1.3,i.rightShin.rotation.z=-1.4;break}case"JUMP_ATTACK":{i.leftThigh.rotation.z=1.6,i.leftShin.rotation.z=0,i.rightThigh.rotation.z=-.4,i.rightShin.rotation.z=-.8,i.torso.rotation.z=-.4;break}case"SPECIAL_1":{const r=Math.sin(e*Math.PI);i.pelvis.position.y=.88,i.torso.rotation.z=.3*r,i.leftUpperArm.rotation.z=-1.3*r,i.rightUpperArm.rotation.z=1.3*r,i.leftForearm.rotation.x=.1,i.rightForearm.rotation.x=.1;break}case"SPECIAL_2":{i.pelvis.position.y=1+e*.8,i.torso.rotation.y=e*Math.PI*2,i.rightUpperArm.rotation.z=2.4,i.rightForearm.rotation.x=.1,i.leftThigh.rotation.z=-.4,i.rightThigh.rotation.z=.8,i.rightShin.rotation.z=-1;break}case"SUPER_COMBO":{const r=Math.sin(e*Math.PI*3);i.pelvis.position.y=.9,i.torso.rotation.y=r*.4,i.leftUpperArm.rotation.z=-1.5,i.rightUpperArm.rotation.z=1.5;break}case"HIT_STUN_LIGHT":{const r=Math.sin(e*Math.PI);i.torso.rotation.z=-.4*r,i.head.rotation.z=-.5*r,i.leftUpperArm.rotation.z=.4,i.rightUpperArm.rotation.z=-.4;break}case"HIT_STUN_HEAVY":{const r=Math.sin(e*Math.PI);i.torso.rotation.z=-.8*r,i.head.rotation.z=-.9*r,i.pelvis.position.y=.92;break}case"KNOCKDOWN":{i.pelvis.position.y=Math.max(.15,.9-e*.85),i.torso.rotation.z=-Math.PI/2*Math.min(1,e*1.5),i.leftThigh.rotation.z=.4,i.rightThigh.rotation.z=.6;break}case"WAKEUP":{const r=Math.min(1,e*1.4);i.pelvis.position.y=.15+r*.83,i.torso.rotation.z=-Math.PI/2*(1-r);break}case"VICTORY":{i.pelvis.position.y=1.05,i.torso.rotation.y=.2,i.leftUpperArm.rotation.set(.3,.5,-.6),i.leftForearm.rotation.set(1.4,.4,.2),i.rightUpperArm.rotation.set(.3,-.5,.6),i.rightForearm.rotation.set(1.4,-.4,-.2),i.head.rotation.x=-.15;break}}}}class xi{name;playerIndex;position;velocity;facingDirection=1;health=1e3;maxHealth=1e3;superMeter=0;roundsWon=0;comboHits=0;isDead=!1;isInvincible=!1;rig;anim;currentAnimState="IDLE";stateTimer=0;currentMove=null;movePhase=null;hasHitCurrentMove=!1;canCancel=!1;hitStunRemaining=0;blockStunRemaining=0;invincibilityFrames=0;moveSpeed=5.2;jumpForce=13.2;gravity=38;pushbox;hurtbox;activeHitbox=null;pendingProjectile=null;constructor(t,e,n,i,r){this.name=t,this.playerIndex=e,this.position=new P(n,0,0),this.velocity=new P(0,0,0),this.facingDirection=e===1?1:-1,this.rig=i,this.anim=new jp(i),r.add(this.rig.root),this.pushbox={x:0,y:.9,width:.75,height:1.8},this.hurtbox={id:`hurt_${e}`,box:{x:0,y:.9,width:.85,height:1.8}},this.updateMeshTransform()}resetRound(t,e){this.position.set(t,0,0),this.velocity.set(0,0,0),this.facingDirection=e?1:-1,this.health=this.maxHealth,this.isDead=!1,this.isInvincible=!1,this.comboHits=0,this.currentMove=null,this.movePhase=null,this.activeHitbox=null,this.hitStunRemaining=0,this.blockStunRemaining=0,this.invincibilityFrames=0,this.currentAnimState="IDLE",this.stateTimer=0,this.updateMeshTransform()}tick(t,e,n,i,r,a=13){if(this.invincibilityFrames>0&&(this.invincibilityFrames--,this.isInvincible=this.invincibilityFrames>0),this.isDead){this.applyGravity(1/60),this.updateMeshTransform(),this.anim.update("KNOCKDOWN",1,1/60);return}if(this.currentAnimState==="VICTORY"){this.anim.update("VICTORY",1,1/60),this.updateMeshTransform();return}if(this.hitStunRemaining>0){this.hitStunRemaining--,this.applyGravity(1/60),this.applyFriction(1/60),this.anim.update(this.currentAnimState==="HIT_STUN_HEAVY"?"HIT_STUN_HEAVY":"HIT_STUN_LIGHT",1-this.hitStunRemaining/25,1/60),this.updateMeshTransform();return}if(this.blockStunRemaining>0){this.blockStunRemaining--,this.applyFriction(1/60),this.anim.update(t.down?"BLOCK_LOW":"BLOCK_HIGH",1,1/60),this.updateMeshTransform();return}if(this.currentAnimState==="KNOCKDOWN"){this.stateTimer++,this.applyGravity(1/60),this.applyFriction(1/60),this.stateTimer<35?this.anim.update("KNOCKDOWN",this.stateTimer/35,1/60):!this.isDead&&this.stateTimer<60&&(this.currentAnimState="WAKEUP",this.isInvincible=!0,this.invincibilityFrames=25),this.updateMeshTransform();return}if(this.currentAnimState==="WAKEUP"){this.stateTimer++,this.stateTimer>=60?(this.currentAnimState="IDLE",this.stateTimer=0):this.anim.update("WAKEUP",(this.stateTimer-35)/25,1/60),this.updateMeshTransform();return}const o=this.position.y<=.001;if(this.currentMove){if((this.canCancel||this.hasHitCurrentMove&&this.movePhase!=="STARTUP")&&this.checkAttackInputs(t,i,o)){this.updateMeshTransform();return}this.processActiveMove(i,r),this.applyGravity(1/60),this.applyFriction(1/60),this.updateMeshTransform();return}if(o&&this.currentAnimState!=="DASH_FORWARD"&&this.currentAnimState!=="DASH_BACKWARD"&&(this.facingDirection=e.x>=this.position.x?1:-1),o&&(t.dashForward?(this.currentAnimState="DASH_FORWARD",this.velocity.x=this.facingDirection*this.moveSpeed*1.85,i.playDash(),r.emitDust(this.position,10),this.stateTimer=16):t.dashBackward&&(this.currentAnimState="DASH_BACKWARD",this.velocity.x=-this.facingDirection*this.moveSpeed*1.5,i.playDash(),r.emitDust(this.position,8),this.stateTimer=14)),this.stateTimer>0&&(this.currentAnimState==="DASH_FORWARD"||this.currentAnimState==="DASH_BACKWARD")){this.stateTimer--,this.anim.update(this.currentAnimState,1-this.stateTimer/16,1/60),this.position.x+=this.velocity.x*(1/60),this.position.x=Mn.clamp(this.position.x,-a,a),this.updateMeshTransform();return}if(o&&t.up&&(this.velocity.y=this.jumpForce,t.right?this.velocity.x=this.moveSpeed*.9:t.left&&(this.velocity.x=-this.moveSpeed*.9),i.playJump(),r.emitDust(this.position,8),this.currentAnimState="JUMP"),this.checkAttackInputs(t,i,o)){this.updateMeshTransform();return}if(o)if(this.velocity.y=0,this.position.y=0,t.down){const c=this.facingDirection===1&&t.left||this.facingDirection===-1&&t.right;this.currentAnimState=c&&n?"BLOCK_LOW":"CROUCH",this.velocity.x=0}else if(t.right){const c=this.facingDirection===1;this.velocity.x=this.moveSpeed*(c?1:.75);const l=!c;this.currentAnimState=l&&n?"BLOCK_HIGH":c?"WALK_FORWARD":"WALK_BACKWARD"}else if(t.left){const c=this.facingDirection===-1;this.velocity.x=-this.moveSpeed*(c?1:.75);const l=!c;this.currentAnimState=l&&n?"BLOCK_HIGH":c?"WALK_FORWARD":"WALK_BACKWARD"}else this.velocity.x=0,this.currentAnimState="IDLE";else this.applyGravity(1/60),this.currentAnimState="JUMP";this.position.x+=this.velocity.x*(1/60),this.position.x=Mn.clamp(this.position.x,-a,a),this.anim.update(this.currentAnimState,.5,1/60),this.superMeter>=100&&o&&Math.random()<.18&&r.emitGroundAura(this.position,61695),this.updateColliders(),this.updateMeshTransform()}applyGravity(t){this.velocity.y-=this.gravity*t,this.position.y+=this.velocity.y*t,this.position.y<=0&&(this.position.y=0,this.velocity.y=0)}applyFriction(t){this.velocity.x*=Math.pow(.85,t*60)}processActiveMove(t,e){if(!this.currentMove)return;this.stateTimer++;const{startup:n,active:i,recovery:r}=this.currentMove,a=n+i+r,o=Math.min(1,this.stateTimer/a);if(this.anim.update(this.currentMove.animState,o,1/60),this.movePhase==="STARTUP"){if(this.stateTimer>=n){this.movePhase="ACTIVE",t.playWhoosh(this.currentMove.whooshPitch);const c=this.facingDirection,l=this.currentMove.boxOffset;this.activeHitbox={id:`${this.name}_${this.currentMove.animState}_${Date.now()}`,box:{x:this.position.x+l.x*c,y:this.position.y+l.y,width:l.width,height:l.height},damage:this.currentMove.damage,hitStun:this.currentMove.hitStun,blockStun:this.currentMove.blockStun,knockbackX:this.currentMove.knockbackX*c,knockbackY:this.currentMove.knockbackY,attackType:this.currentMove.attackType,isKnockdown:this.currentMove.isKnockdown,meterGainAttacker:this.currentMove.meterGain,meterGainDefender:Math.floor(this.currentMove.meterGain*.5)}}}else if(this.movePhase==="ACTIVE"){if(this.activeHitbox){const c=this.facingDirection,l=this.currentMove.boxOffset;this.activeHitbox.box.x=this.position.x+l.x*c,this.activeHitbox.box.y=this.position.y+l.y}this.stateTimer>=n+i&&(this.movePhase="RECOVERY",this.activeHitbox=null)}else this.movePhase==="RECOVERY"&&this.stateTimer>=a&&(this.currentMove=null,this.movePhase=null,this.activeHitbox=null,this.hasHitCurrentMove=!1,this.canCancel=!1,this.currentAnimState="IDLE",this.stateTimer=0);this.updateColliders()}executeMove(t){this.currentMove=t,this.movePhase="STARTUP",this.stateTimer=0,this.hasHitCurrentMove=!1,this.canCancel=!1,this.activeHitbox=null,this.currentAnimState=t.animState}takeHit(t,e,n){if(this.isInvincible||this.isDead)return!1;const i=this.currentAnimState==="BLOCK_HIGH",r=this.currentAnimState==="BLOCK_LOW";let a=!1;(i&&(t.attackType==="HIGH"||t.attackType==="MID")||r&&(t.attackType==="LOW"||t.attackType==="MID"))&&(a=!0);const o=new P(t.box.x,t.box.y,0);return a?(e.playBlock(),n.emitBlockSpark(o),n.emitGroundAura(this.position,61695),this.blockStunRemaining=t.blockStun,this.velocity.x=t.knockbackX*.45,this.health=Math.max(1,this.health-Math.floor(t.damage*.1)),this.superMeter=Math.min(100,this.superMeter+4),!1):(this.health=Math.max(0,this.health-t.damage),this.superMeter=Math.min(100,this.superMeter+t.meterGainDefender),t.damage>=90||t.isKnockdown?(e.playHitHeavy(),n.emitShatterBurst(o,16765030,32)):(e.playHitLight(),n.emitHitSpark(o,16777215,18,5)),this.health<=0?(this.isDead=!0,this.currentAnimState="KNOCKDOWN",this.velocity.set(t.knockbackX*1.4,7.5,0),!0):(t.isKnockdown?(this.currentAnimState="KNOCKDOWN",this.stateTimer=0,this.velocity.set(t.knockbackX*1.2,t.knockbackY||6,0)):(this.currentAnimState=t.damage>80?"HIT_STUN_HEAVY":"HIT_STUN_LIGHT",this.hitStunRemaining=t.hitStun,this.velocity.set(t.knockbackX,t.knockbackY>0?t.knockbackY:0,0)),!0))}updateColliders(){const e=this.currentAnimState==="CROUCH"||this.currentAnimState==="BLOCK_LOW"?1.15:1.8,n=this.position.y+e*.5;this.pushbox.x=this.position.x,this.pushbox.y=n,this.pushbox.height=e,this.hurtbox.box.x=this.position.x,this.hurtbox.box.y=n,this.hurtbox.box.height=e}updateMeshTransform(){this.rig.root.position.copy(this.position),this.rig.root.rotation.y=this.facingDirection===1?Math.PI/2:-Math.PI/2}}class Mi{static createPart(t,e){const n=new gt(t,e);return n.castShadow=!0,n.receiveShadow=!1,n}static addAnimeEyes(t,e=2234389,n=!1){const i=new zt({color:16777215}),r=new zt({color:e}),a=new zt({color:1709330}),o=new xe(.06,n?.055:.045),c=new xe(.035,n?.04:.032),l=new Rt(.08,.018,.015),h=new gt(o,i);h.position.set(.185,.25,.065),h.rotation.y=Math.PI/2;const u=new gt(c,r);u.position.set(.187,.25,.065),u.rotation.y=Math.PI/2;const d=new gt(l,a);d.position.set(.185,.29,.065),d.rotation.z=-.12;const p=new gt(o,i);p.position.set(.185,.25,-.065),p.rotation.y=Math.PI/2;const g=new gt(c,r);g.position.set(.187,.25,-.065),g.rotation.y=Math.PI/2;const _=new gt(l,a);_.position.set(.185,.29,-.065),_.rotation.z=.12,t.add(h,u,d,p,g,_)}static buildBlaze(){const t=new vt({color:14459e3,roughness:.45,metalness:.05,flatShading:!0}),e=new vt({color:14178367,roughness:.5,metalness:.05,flatShading:!0}),n=new vt({color:2629660,roughness:.55,metalness:.05,flatShading:!0}),i=new vt({color:4470578,roughness:.45,metalness:.08,flatShading:!0}),r=new vt({color:14010032,roughness:.5,metalness:.05,flatShading:!0}),a=new vt({color:2505288,roughness:.45,metalness:.15,flatShading:!0}),o=new vt({color:2307909,roughness:.5,metalness:.1,flatShading:!0}),c=new vt({color:14178367,roughness:.45,metalness:.1,flatShading:!0}),l=new vt({color:4078134,roughness:.4,metalness:.45,flatShading:!0}),h=new vt({color:2433051,roughness:.6,flatShading:!0}),u=new vt({color:10713659,roughness:.5,metalness:.15,flatShading:!0}),d=new vt({color:11897155,roughness:.5,metalness:.15,flatShading:!0}),p=new vt({color:2630946,roughness:.6,flatShading:!0}),g=new zt({color:16729122}),_=this.assembleHumanoidRig({skinMat:t,chestMat:r,midriffMat:r,pelvisMat:e,pantsMat:o,shoeMat:u,soleMat:p,gloveMat:c,jointMat:t,bladeMat:g,hasKatana:!0,hasLeftBlade:!1}),m=this.createPart(new Yt(.235,.22,.16,10),e);m.position.set(-.02,.32,0),_.head.add(m);const f=this.createPart(new Rt(.16,.028,.22),e);f.position.set(-.16,.31,0),f.rotation.set(0,0,-.15),_.head.add(f);const E=this.createPart(new Yt(.235,.23,.05,12),e);E.position.y=.28,_.head.add(E);const b=this.createPart(new Fi(.12,0),n);b.scale.set(1.15,1.25,.95),b.position.set(.12,.34,0),_.head.add(b),[{geo:new Vt(.1,.28,4),pos:[.13,.4,.01],rot:[-.05,.15,-.32],mat:i,scale:[1.1,1,.9]},{geo:new Vt(.085,.25,4),pos:[.11,.39,.08],rot:[.35,.1,-.32],mat:n,scale:[1,1,.85]},{geo:new Vt(.08,.24,4),pos:[.11,.38,-.07],rot:[-.35,-.1,-.32],mat:n,scale:[1,1,.85]},{geo:new Vt(.075,.22,4),pos:[.06,.42,.02],rot:[-.05,0,-.15],mat:i,scale:[1,.9,1]},{geo:new Vt(.09,.24,4),pos:[.18,.32,.01],rot:[.02,0,-1.68],mat:i,scale:[1.15,1,.85]},{geo:new Vt(.08,.21,4),pos:[.17,.31,.08],rot:[.28,0,-1.6],mat:n,scale:[1,1,.9]},{geo:new Vt(.08,.21,4),pos:[.17,.31,-.08],rot:[-.28,0,-1.6],mat:n,scale:[1,1,.9]},{geo:new Vt(.065,.2,4),pos:[-.06,.23,.19],rot:[.35,0,2.2],mat:n,scale:[1,1,.8]},{geo:new Vt(.065,.2,4),pos:[-.06,.23,-.19],rot:[-.35,0,2.2],mat:n,scale:[1,1,.8]},{geo:new Vt(.05,.16,4),pos:[.05,.2,.19],rot:[.1,0,3],mat:i,scale:[1,1,.8]},{geo:new Vt(.05,.16,4),pos:[.05,.2,-.19],rot:[-.1,0,3],mat:i,scale:[1,1,.8]},{geo:new Vt(.06,.18,4),pos:[-.16,.22,.06],rot:[.15,0,2.8],mat:n,scale:[1,1,.85]},{geo:new Vt(.06,.18,4),pos:[-.16,.22,-.06],rot:[-.15,0,2.8],mat:n,scale:[1,1,.85]}].forEach(ht=>{const _t=this.createPart(ht.geo,ht.mat);_t.position.set(ht.pos[0],ht.pos[1],ht.pos[2]),_t.rotation.set(ht.rot[0],ht.rot[1],ht.rot[2]),ht.scale&&_t.scale.set(ht.scale[0],ht.scale[1],ht.scale[2]),_.head.add(_t)}),this.addAnimeEyes(_.head,2234389,!1);const L=new zt({color:8001560}),A=new zt({color:16777215}),w=new gt(new xe(.08,.05),L);w.position.set(.186,.15,0),w.rotation.y=Math.PI/2;const R=new gt(new xe(.07,.016),A);R.position.set(.187,.167,0),R.rotation.y=Math.PI/2,_.head.add(w,R);const M=this.createPart(new Rt(.14,.32,.09),a);M.position.set(.07,.18,.15),M.rotation.set(0,.15,-.08);const v=this.createPart(new Rt(.14,.32,.09),a);v.position.set(.07,.18,-.15),v.rotation.set(0,-.15,-.08);const C=this.createPart(new Rt(.09,.34,.32),a);C.position.set(-.11,.18,0),_.chest.add(M,v,C);const O=new Vt(.035,.08,4);for(let ht=-1;ht<=1;ht++){const _t=this.createPart(O,a);_t.position.set(0,.33,.18+ht*.05),_t.rotation.set(0,0,Math.PI/2);const Pt=this.createPart(O,a);Pt.position.set(0,.33,-.18-ht*.05),Pt.rotation.set(0,0,-Math.PI/2),_.chest.add(_t,Pt)}const k=new Rt(.035,.04,.024);[-.035,-.012,.012,.035].forEach(ht=>{const _t=this.createPart(k,l);_t.position.set(.055,.01,ht),_.leftHand.add(_t);const Pt=this.createPart(k,l);Pt.position.set(.055,.01,ht),_.rightHand.add(Pt)});const K=this.createPart(new Yt(.22,.2,.16,8),e);K.position.y=.04,_.pelvis.add(K);const F=this.createPart(new Ue(.095,8,8),e);F.position.set(.16,.02,0),_.pelvis.add(F);const G=new Yt(.065,.05,.35,6),X=this.createPart(G,e);X.position.set(.14,-.16,.08),X.rotation.set(.18,0,-.22);const W=this.createPart(new Yt(.055,.055,.04,6),e);W.position.y=-.18,X.add(W),_.pelvis.add(X);const nt=this.createPart(G,e);nt.position.set(.14,-.16,-.08),nt.rotation.set(-.18,0,-.22);const Q=this.createPart(new Yt(.055,.055,.04,6),e);Q.position.y=-.18,nt.add(Q),_.pelvis.add(nt);const ot=this.createPart(new Rt(.08,.22,.28),e);ot.position.set(-.15,-.05,0),_.pelvis.add(ot);const Tt=new Yt(.105,.1,.1,8),qt=this.createPart(Tt,h);qt.position.y=-.4,_.leftShin.add(qt);const Y=this.createPart(Tt,h);Y.position.y=-.4,_.rightShin.add(Y);const J=new Yt(.135,.115,.09,8),ut=this.createPart(J,d);ut.position.y=-.44,_.leftShin.add(ut);const it=this.createPart(J,d);return it.position.y=-.44,_.rightShin.add(it),_}static buildCypher(){const t=new vt({color:16305842,roughness:.45,metalness:.05}),e=new vt({color:16763904,roughness:.4,metalness:.1}),n=new vt({color:1711400,roughness:.45,metalness:.25}),i=new vt({color:15609390,roughness:.45,metalness:.1}),r=new vt({color:16316668,roughness:.35,metalness:.1}),a=new vt({color:8950432,roughness:.5,metalness:.1}),o=new vt({color:1316383,roughness:.5,metalness:.2}),c=new vt({color:1316383,roughness:.5,metalness:.2}),l=new zt({color:61695,transparent:!0,opacity:.95}),h=this.assembleHumanoidRig({skinMat:t,chestMat:e,midriffMat:t,pelvisMat:o,pantsMat:i,shoeMat:r,soleMat:a,gloveMat:c,jointMat:t,bladeMat:l,hasKatana:!0,hasLeftBlade:!1}),u=new Rt(.12,.28,.08),d=this.createPart(u,n);d.position.set(.06,.18,.14),d.rotation.set(0,.15,-.1);const p=this.createPart(u,n);p.position.set(.06,.18,-.14),p.rotation.set(0,-.15,-.1);const g=this.createPart(new Rt(.08,.3,.3),n);g.position.set(-.11,.18,0),h.chest.add(d,p,g);const _=new vt({color:1711400,roughness:.5}),m=new vt({color:15081530,roughness:.4}),f=this.createPart(new Yt(.23,.225,.05,12),m);f.position.y=.27,h.head.add(f);const E=this.createPart(new Yt(.24,.235,.14,12),_);E.position.y=.35,h.head.add(E);const b=this.createPart(new Rt(.16,.03,.22),_);b.position.set(.16,.31,0),b.rotation.set(0,0,-.2),h.head.add(b);const S=new vt({color:6171674,roughness:.5,metalness:.05,flatShading:!0}),L=new vt({color:7879458,roughness:.45,metalness:.05,flatShading:!0}),A=this.createPart(new Fi(.11,0),S);A.position.set(-.2,.26,0),h.head.add(A);const w=this.createPart(new Vt(.075,.24,4),L);w.position.set(-.27,.21,0),w.rotation.set(0,0,1.1);const R=this.createPart(new Vt(.06,.2,4),S);R.position.set(-.26,.16,.04),R.rotation.set(.2,0,1.3),h.head.add(w,R),[{geo:new Vt(.07,.2,4),pos:[.18,.29,.01],rot:[0,0,-1.65],mat:L},{geo:new Vt(.065,.18,4),pos:[.17,.29,.07],rot:[.25,0,-1.55],mat:S},{geo:new Vt(.065,.18,4),pos:[.17,.29,-.07],rot:[-.25,0,-1.55],mat:S},{geo:new Vt(.055,.24,4),pos:[.07,.18,.18],rot:[.1,0,3],mat:L},{geo:new Vt(.055,.24,4),pos:[.07,.18,-.18],rot:[-.1,0,3],mat:L}].forEach(C=>{const O=this.createPart(C.geo,C.mat);O.position.set(C.pos[0],C.pos[1],C.pos[2]),O.rotation.set(C.rot[0],C.rot[1],C.rot[2]),h.head.add(O)}),this.addAnimeEyes(h.head,4007448,!0);const v=this.createPart(new Rt(.04,.24,.03),o);return v.position.set(.12,-.06,.06),v.rotation.z=.15,h.pelvis.add(v),h}static buildShadow(){const t=new vt({color:15777944,roughness:.45}),e=new vt({color:1118486,roughness:.6}),n=new vt({color:2819084,roughness:.45}),i=new vt({color:789520,roughness:.55}),r=new vt({color:1381660,roughness:.5}),a=new zt({color:16711723}),o=new zt({color:16711731,transparent:!0,opacity:.95}),c=this.assembleHumanoidRig({skinMat:t,chestMat:e,midriffMat:e,pelvisMat:n,pantsMat:i,shoeMat:r,soleMat:n,gloveMat:e,jointMat:e,bladeMat:o,hasKatana:!0,hasLeftBlade:!0,weaponType:"DUAL_DAGGERS"}),l=this.createPart(new Yt(.24,.25,.26,8),e);l.position.set(-.02,.3,0),c.head.add(l);const h=new gt(new Rt(.18,.035,.23),a);h.position.set(.13,.26,0),c.head.add(h);const u=new Bt;u.position.set(-.16,.24,0);const d=this.createPart(new Rt(.42,.06,.02),n);d.position.set(-.2,-.02,.03),d.rotation.set(.1,0,.28);const p=this.createPart(new Rt(.36,.05,.02),n);return p.position.set(-.18,-.06,-.03),p.rotation.set(-.1,0,.45),u.add(d,p),c.head.add(u),c.headbandTail=u,c}static buildVolt(){const t=new vt({color:16105110,roughness:.45}),e=new vt({color:16764928,roughness:.3,metalness:.4}),n=new vt({color:2234890,roughness:.5}),i=new vt({color:3351816,roughness:.4}),r=new zt({color:16777011}),a=new zt({color:16771584,transparent:!0,opacity:.95}),o=this.assembleHumanoidRig({skinMat:t,chestMat:e,midriffMat:e,pelvisMat:e,pantsMat:n,shoeMat:i,soleMat:r,gloveMat:e,jointMat:t,bladeMat:a,hasKatana:!0,hasLeftBlade:!1}),c=new Bt;c.position.set(0,.44,0);const l=new Vt(.06,.24,4),h=this.createPart(l,r);h.position.set(.04,.1,.08),h.rotation.set(.3,0,.2);const u=this.createPart(l,r);u.position.set(.04,.1,-.08),u.rotation.set(-.3,0,.2),c.add(h,u),o.head.add(c);const d=new Oi(.07,.018,6,12),p=new gt(d,r);p.rotation.x=Math.PI/2,o.leftHand.add(p);const g=new gt(d,r);return g.rotation.x=Math.PI/2,o.rightHand.add(g),this.addAnimeEyes(o.head,16771584,!1),o}static buildJin(){const t=new vt({color:15048575,roughness:.45,metalness:.05,flatShading:!0}),e=new vt({color:15002867,roughness:.55,metalness:.05,flatShading:!0}),n=new vt({color:15265266,roughness:.55,metalness:.05,flatShading:!0}),i=new vt({color:2106925,roughness:.6,flatShading:!0}),r=new vt({color:4740451,roughness:.4,metalness:.25,flatShading:!0}),a=new vt({color:4008736,roughness:.6,flatShading:!0}),o=new vt({color:9281709,roughness:.6,flatShading:!0}),c=new vt({color:4534050,roughness:.55,flatShading:!0}),l=new vt({color:1579034,roughness:.55,flatShading:!0}),h=new zt({color:14216959,transparent:!0,opacity:.85}),u=this.assembleHumanoidRig({skinMat:t,chestMat:t,midriffMat:t,pelvisMat:i,pantsMat:e,shoeMat:c,soleMat:c,gloveMat:a,jointMat:t,bladeMat:h,hasKatana:!1,hasLeftBlade:!1,weaponType:"FISTS"}),d=this.createPart(new Vt(.24,.36,5),n);d.position.set(-.02,.38,0),d.rotation.set(-.1,0,-.05),u.head.add(d);const p=this.createPart(new Yt(.24,.28,.24,7),n);p.position.set(-.04,.28,0),u.head.add(p);const g=this.createPart(new Yt(.27,.33,.14,6),n);g.position.set(-.03,.08,0),u.head.add(g),[{geo:new Vt(.065,.2,4),pos:[.18,.3,.01],rot:[0,0,-1.65]},{geo:new Vt(.055,.18,4),pos:[.17,.3,.065],rot:[.22,0,-1.55]},{geo:new Vt(.055,.18,4),pos:[.17,.3,-.065],rot:[-.22,0,-1.55]},{geo:new Vt(.045,.15,4),pos:[.15,.29,.11],rot:[.35,0,-1.45]},{geo:new Vt(.045,.15,4),pos:[.15,.29,-.11],rot:[-.35,0,-1.45]}].forEach(Q=>{const ot=this.createPart(Q.geo,l);ot.position.set(Q.pos[0],Q.pos[1],Q.pos[2]),ot.rotation.set(Q.rot[0],Q.rot[1],Q.rot[2]),u.head.add(ot)}),this.addAnimeEyes(u.head,1844268,!1);const m=this.createPart(new Rt(.12,.36,.08),e);m.position.set(.07,.18,.13),m.rotation.set(0,.18,-.12);const f=this.createPart(new Rt(.12,.36,.08),e);f.position.set(.07,.18,-.13),f.rotation.set(0,-.18,-.12);const E=this.createPart(new Rt(.08,.34,.3),e);E.position.set(-.08,.17,0),u.chest.add(m,f,E);const b=new Vt(.035,.09,3);[[.05,.28,.22,.3,0,-.4],[0,.3,.22,.3,0,0],[-.05,.28,.22,.3,0,.4],[.05,.28,-.22,-.3,0,-.4],[0,.3,-.22,-.3,0,0],[-.05,.28,-.22,-.3,0,.4]].forEach(Q=>{const ot=this.createPart(b,e);ot.position.set(Q[0],Q[1],Q[2]),ot.rotation.set(Q[3],Q[4],Q[5]),u.chest.add(ot)});const L=this.createPart(new Rt(.08,.09,.09),i);L.position.set(.18,0,0),u.pelvis.add(L);const A=this.createPart(new Rt(.042,.36,.018),i);A.position.set(.17,-.18,.04),A.rotation.set(.05,0,.06);const w=this.createPart(new Rt(.042,.36,.018),i);w.position.set(.17,-.18,-.04),w.rotation.set(-.05,0,-.06),u.pelvis.add(A,w);const R=this.createPart(new Rt(.09,.22,.04),e);R.position.set(.07,-.1,.14),R.rotation.z=-.08;const M=this.createPart(new Rt(.09,.22,.04),e);M.position.set(.07,-.1,-.14),M.rotation.z=-.08;const v=this.createPart(new Rt(.04,.22,.24),e);v.position.set(-.1,-.1,0),u.pelvis.add(R,M,v);const C=new Yt(.11,.1,.18,6),O=this.createPart(C,r);O.position.set(0,-.22,0),u.leftForearm.add(O);const k=this.createPart(C,r);k.position.set(0,-.22,0),u.rightForearm.add(k);const K=new Yt(.112,.098,.26,8),F=this.createPart(K,o);F.position.set(0,-.2,0),u.leftShin.add(F);const G=this.createPart(K,o);G.position.set(0,-.2,0),u.rightShin.add(G);const X=new Yt(.114,.112,.06,8),W=this.createPart(X,c);W.position.set(0,-.32,0),u.leftShin.add(W);const nt=this.createPart(X,c);return nt.position.set(0,-.32,0),u.rightShin.add(nt),u}static buildMobStickman(t=16777215){const e=new vt({color:16106398,roughness:.45}),n=new vt({color:t,roughness:.4}),i=new vt({color:1712430,roughness:.5}),r=new vt({color:16777215,roughness:.4}),a=new zt({color:t}),o=this.assembleHumanoidRig({skinMat:e,chestMat:n,midriffMat:n,pelvisMat:i,pantsMat:i,shoeMat:r,soleMat:i,gloveMat:n,jointMat:e,bladeMat:a,hasKatana:!1,hasLeftBlade:!1,weaponType:"FISTS"}),c=this.createPart(new Rt(.24,.08,.24),n);return c.position.set(.04,.36,0),o.head.add(c),this.addAnimeEyes(o.head,1118481,!1),o}static assembleHumanoidRig(t){const e=new Bt,{skinMat:n,chestMat:i,midriffMat:r,pelvisMat:a,pantsMat:o,shoeMat:c,soleMat:l,gloveMat:h,jointMat:u,bladeMat:d,hasKatana:p=!0,hasLeftBlade:g=!1,weaponType:_="KATANA"}=t,m=new Yt(.18,.16,.16,8),f=new Yt(.2,.17,.28,8),E=new Yt(.26,.2,.32,8),b=new Yt(.08,.09,.12,6),S=new Ue(.22,12,12),L=new Vt(.12,.14,4),A=new Yt(.085,.075,.36,8),w=new Yt(.085,.075,.36,8),R=new Rt(.11,.09,.11),M=new Yt(.125,.095,.44,8),v=new Yt(.105,.085,.44,8),C=new Rt(.14,.09,.24),O=new Rt(.15,.03,.27),k=new Bt;k.position.y=1.05,e.add(k);const K=this.createPart(m,a);K.position.y=.04,k.add(K);const F=new Bt;F.position.y=.05,k.add(F);const G=this.createPart(f,r);G.position.y=.17,F.add(G);const X=new Bt;X.position.y=.34,F.add(X);const W=this.createPart(E,i);W.position.y=.16,X.add(W);const nt=new Rt(.12,.14,.08),Q=this.createPart(nt,i);Q.position.set(.11,.18,.07),Q.rotation.set(0,0,-.15);const ot=this.createPart(nt,i);ot.position.set(.11,.18,-.07),ot.rotation.set(0,0,-.15),X.add(Q,ot);const Tt=new Bt;Tt.position.y=.38,X.add(Tt);const qt=this.createPart(b,n);qt.position.y=.06,Tt.add(qt);const Y=this.createPart(S,n);Y.position.y=.26,Tt.add(Y);const J=this.createPart(L,n);J.position.set(.08,.14,0),J.rotation.set(0,0,-1.35),Tt.add(J);const ut=new Bt;ut.position.set(0,.28,.22),X.add(ut),ut.add(this.createPart(new Ue(.08,8,8),n));const it=new Bt;ut.add(it);const ht=this.createPart(A,n);ht.position.y=-.19,it.add(ht);const _t=new Bt;_t.position.y=-.38,it.add(_t),_t.add(this.createPart(new Ue(.075,8,8),n));const Pt=this.createPart(w,n);Pt.position.y=-.19,_t.add(Pt);const ae=new Yt(.088,.088,.1,8),Kt=this.createPart(ae,h);Kt.position.y=-.32,_t.add(Kt);const re=new Bt;re.position.y=-.38,_t.add(re);const N=this.createPart(R,h);re.add(N);const me=new Bt;me.position.set(0,.28,-.22),X.add(me),me.add(this.createPart(new Ue(.08,8,8),n));const Ht=new Bt;me.add(Ht);const Wt=this.createPart(A,n);Wt.position.y=-.19,Ht.add(Wt);const Et=new Bt;Et.position.y=-.38,Ht.add(Et),Et.add(this.createPart(new Ue(.075,8,8),n));const ee=this.createPart(w,n);ee.position.y=-.19,Et.add(ee);const At=this.createPart(ae,h);At.position.y=-.32,Et.add(At);const T=new Bt;T.position.y=-.38,Et.add(T);const x=this.createPart(R,h);T.add(x);let B,$;if(_==="DUAL_DAGGERS"||g){const H=new Bt;H.position.set(-.08,-.22,0),H.rotation.z=.35;const j=this.createPart(new Vt(.07,.45,4),d);j.position.y=-.24,j.rotation.x=Math.PI;const st=this.createPart(new Rt(.08,.02,.08),i);st.position.y=-.02;const rt=this.createPart(new Yt(.025,.025,.16,5),h);rt.position.y=.08,H.add(j,st,rt),re.add(H),B=H}if(_==="DUAL_DAGGERS"){const H=new Bt;H.position.set(.08,-.24,0),H.rotation.z=-.35;const j=this.createPart(new Vt(.07,.45,4),d);j.position.y=-.24,j.rotation.x=Math.PI;const st=this.createPart(new Rt(.08,.02,.08),i);st.position.y=-.02;const rt=this.createPart(new Yt(.025,.025,.16,5),h);rt.position.y=.08,H.add(j,st,rt),T.add(H),$=H}else if(p){const H=new Bt;H.position.set(.12,-.34,0),H.rotation.z=-.35;const j=this.createPart(new Rt(.026,1.05,.046),d);j.position.y=-.44;const st=this.createPart(new Vt(.032,.12,4),d);st.position.y=-.98,st.rotation.y=Math.PI/4;const rt=this.createPart(new Yt(.07,.07,.02,8),i);rt.position.y=.09;const Lt=this.createPart(new Yt(.03,.03,.22,8),h);Lt.position.y=.21,H.add(j,st,rt,Lt),T.add(H),$=H}const Z=new Bt;Z.position.set(0,-.05,.14),k.add(Z),Z.add(this.createPart(new Ue(.08,8,8),u));const q=new Bt;Z.add(q);const xt=this.createPart(M,o);xt.position.y=-.225,q.add(xt);const at=new Bt;at.position.y=-.45,q.add(at),at.add(this.createPart(new Ue(.075,8,8),u));const ft=this.createPart(v,o);ft.position.y=-.225,at.add(ft);const Gt=new Bt;Gt.position.y=-.45,at.add(Gt);const tt=this.createPart(C,c);tt.position.set(.04,-.035,0);const pt=this.createPart(O,l);pt.position.set(.04,-.075,0),Gt.add(tt,pt);const wt=new Bt;wt.position.set(0,-.05,-.14),k.add(wt),wt.add(this.createPart(new Ue(.08,8,8),u));const Ct=new Bt;wt.add(Ct);const mt=this.createPart(M,o);mt.position.y=-.225,Ct.add(mt);const Nt=new Bt;Nt.position.y=-.45,Ct.add(Nt),Nt.add(this.createPart(new Ue(.075,8,8),u));const Dt=this.createPart(v,o);Dt.position.y=-.225,Nt.add(Dt);const Zt=new Bt;Zt.position.y=-.45,Nt.add(Zt);const I=this.createPart(C,c);I.position.set(.04,-.035,0);const ct=this.createPart(O,l);return ct.position.set(.04,-.075,0),Zt.add(I,ct),{root:e,pelvis:k,torso:F,chest:X,head:Tt,leftShoulder:ut,leftUpperArm:it,leftForearm:_t,leftHand:re,leftBlade:B,rightShoulder:me,rightUpperArm:Ht,rightForearm:Et,rightHand:T,rightBlade:$,leftHip:Z,leftThigh:q,leftShin:at,leftFoot:Gt,rightHip:wt,rightThigh:Ct,rightShin:Nt,rightFoot:Zt,materials:[n,i,o,c]}}}class $p extends xi{constructor(t,e,n){super("HIRO",t,e,Mi.buildBlaze(),n),this.moveSpeed=6.4}checkAttackInputs(t,e,n){if(t.pressedSuperMove&&this.superMeter>=100&&n){this.superMeter=0,e.playSuperFlash();const i={animState:"SUPER_COMBO",startup:5,active:16,recovery:14,damage:350,hitStun:45,blockStun:24,knockbackX:8,knockbackY:6.5,attackType:"MID",isKnockdown:!0,meterGain:0,boxOffset:{x:1.1,y:1,width:1.6,height:1.5},whooshPitch:1.1};return this.executeMove(i),!0}if(t.pressedSpecial2&&n){this.velocity.y=12,this.velocity.x=this.facingDirection*4.5,this.isInvincible=!0,this.invincibilityFrames=8;const i={animState:"SPECIAL_2",startup:5,active:10,recovery:12,damage:165,hitStun:35,blockStun:18,knockbackX:5.5,knockbackY:7.5,attackType:"MID",isKnockdown:!0,meterGain:15,boxOffset:{x:1,y:1.4,width:1.3,height:1.6},whooshPitch:1.4};return this.executeMove(i),!0}if(t.pressedSpecial1&&n){e.playProjectileShoot(),this.pendingProjectile="FIREBALL";const i={animState:"SPECIAL_1",startup:6,active:4,recovery:8,damage:0,hitStun:0,blockStun:0,knockbackX:0,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:10,boxOffset:{x:0,y:0,width:0,height:0},whooshPitch:1.2};return this.executeMove(i),!0}if(!n&&(t.pressedLightPunch||t.pressedHeavyPunch||t.pressedLightKick||t.pressedHeavyKick)){const i={animState:"JUMP_ATTACK",startup:4,active:8,recovery:6,damage:90,hitStun:22,blockStun:15,knockbackX:3.6,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:8,boxOffset:{x:1,y:.6,width:1.3,height:1.1},whooshPitch:1.2};return this.executeMove(i),!0}if(n&&t.down){if(t.pressedLightPunch||t.pressedHeavyPunch){const i={animState:"CROUCH_PUNCH",startup:3,active:3,recovery:5,damage:55,hitStun:18,blockStun:12,knockbackX:2.2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:.5,width:1.2,height:.7},whooshPitch:1.3};return this.executeMove(i),!0}if(t.pressedLightKick||t.pressedHeavyKick){const i={animState:"CROUCH_KICK",startup:6,active:4,recovery:9,damage:95,hitStun:30,blockStun:14,knockbackX:4.2,knockbackY:4.5,attackType:"LOW",isKnockdown:!0,meterGain:10,boxOffset:{x:1.1,y:.25,width:1.5,height:.5},whooshPitch:1};return this.executeMove(i),!0}}if(n){if(t.pressedLightPunch){const i={animState:"LIGHT_PUNCH",startup:3,active:3,recovery:4,damage:45,hitStun:16,blockStun:12,knockbackX:2,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:1.2,width:1.2,height:.6},whooshPitch:1.4};return this.executeMove(i),!0}if(t.pressedHeavyPunch){const i={animState:"HEAVY_PUNCH",startup:6,active:4,recovery:7,damage:115,hitStun:26,blockStun:16,knockbackX:4.5,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:12,boxOffset:{x:1.2,y:1.1,width:1.4,height:.8},whooshPitch:1};return this.executeMove(i),!0}if(t.pressedLightKick){const i={animState:"LIGHT_KICK",startup:4,active:3,recovery:5,damage:50,hitStun:18,blockStun:12,knockbackX:2.2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:7,boxOffset:{x:1,y:.7,width:1.2,height:.7},whooshPitch:1.2};return this.executeMove(i),!0}if(t.pressedHeavyKick){const i={animState:"HEAVY_KICK",startup:7,active:4,recovery:8,damage:130,hitStun:28,blockStun:18,knockbackX:5.8,knockbackY:2.2,attackType:"HIGH",isKnockdown:!1,meterGain:14,boxOffset:{x:1.2,y:1.3,width:1.4,height:.9},whooshPitch:.9};return this.executeMove(i),!0}}return!1}}class Zp extends xi{constructor(t,e,n){super("ROXY",t,e,Mi.buildCypher(),n),this.moveSpeed=7.2}checkAttackInputs(t,e,n){if(t.pressedSuperMove&&this.superMeter>=100&&n){this.superMeter=0,e.playSuperFlash();const i={animState:"SUPER_COMBO",startup:4,active:16,recovery:12,damage:345,hitStun:48,blockStun:24,knockbackX:8.5,knockbackY:5.5,attackType:"MID",isKnockdown:!0,meterGain:0,boxOffset:{x:1.2,y:1,width:1.8,height:1.5},whooshPitch:1.3};return this.executeMove(i),!0}if(t.pressedSpecial2&&n){this.velocity.x=this.facingDirection*15,e.playBladeSlash(),e.playWhoosh(1.6);const i={animState:"SPECIAL_2",startup:5,active:8,recovery:10,damage:150,hitStun:30,blockStun:14,knockbackX:6.5,knockbackY:3.5,attackType:"MID",isKnockdown:!0,meterGain:14,boxOffset:{x:1.4,y:1,width:1.6,height:1.2},whooshPitch:1.6};return this.executeMove(i),!0}if(t.pressedSpecial1&&n){e.playProjectileShoot(),this.pendingProjectile="SURGE";const i={animState:"SPECIAL_1",startup:5,active:4,recovery:8,damage:0,hitStun:0,blockStun:0,knockbackX:0,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:10,boxOffset:{x:0,y:0,width:0,height:0},whooshPitch:1.3};return this.executeMove(i),!0}if(!n&&(t.pressedLightPunch||t.pressedHeavyPunch||t.pressedLightKick||t.pressedHeavyKick)){const i={animState:"JUMP_ATTACK",startup:4,active:8,recovery:6,damage:90,hitStun:22,blockStun:14,knockbackX:3.5,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:8,boxOffset:{x:1,y:.6,width:1.3,height:1.1},whooshPitch:1.4};return this.executeMove(i),!0}if(n&&t.down){if(t.pressedLightPunch||t.pressedHeavyPunch){const i={animState:"CROUCH_PUNCH",startup:3,active:3,recovery:4,damage:52,hitStun:16,blockStun:10,knockbackX:2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:.5,width:1.2,height:.6},whooshPitch:1.5};return this.executeMove(i),!0}if(t.pressedLightKick||t.pressedHeavyKick){const i={animState:"CROUCH_KICK",startup:5,active:4,recovery:8,damage:90,hitStun:28,blockStun:14,knockbackX:4.5,knockbackY:4,attackType:"LOW",isKnockdown:!0,meterGain:10,boxOffset:{x:1.1,y:.25,width:1.5,height:.5},whooshPitch:1.1};return this.executeMove(i),!0}}if(n){if(t.pressedLightPunch){const i={animState:"LIGHT_PUNCH",startup:3,active:3,recovery:4,damage:42,hitStun:15,blockStun:12,knockbackX:1.8,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:1.2,width:1.2,height:.6},whooshPitch:1.6};return this.executeMove(i),!0}if(t.pressedHeavyPunch){const i={animState:"HEAVY_PUNCH",startup:6,active:4,recovery:7,damage:110,hitStun:24,blockStun:15,knockbackX:4.2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:12,boxOffset:{x:1.3,y:1.1,width:1.5,height:.8},whooshPitch:1.2};return this.executeMove(i),!0}if(t.pressedLightKick){const i={animState:"LIGHT_KICK",startup:4,active:3,recovery:5,damage:48,hitStun:17,blockStun:12,knockbackX:2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:7,boxOffset:{x:1,y:.7,width:1.2,height:.7},whooshPitch:1.3};return this.executeMove(i),!0}if(t.pressedHeavyKick){const i={animState:"HEAVY_KICK",startup:7,active:4,recovery:8,damage:125,hitStun:26,blockStun:16,knockbackX:5.5,knockbackY:2.5,attackType:"HIGH",isKnockdown:!1,meterGain:14,boxOffset:{x:1.2,y:1.3,width:1.4,height:1},whooshPitch:1};return this.executeMove(i),!0}}return!1}}class Jp extends xi{constructor(t,e,n){super("SHADOW",t,e,Mi.buildShadow(),n),this.moveSpeed=7.6}checkAttackInputs(t,e,n){if(t.pressedSuperMove&&this.superMeter>=100&&n){this.superMeter=0,e.playSuperFlash(),e.playBladeSlash();const i={animState:"SUPER_COMBO",startup:4,active:16,recovery:14,damage:360,hitStun:48,blockStun:24,knockbackX:8.5,knockbackY:6,attackType:"MID",isKnockdown:!0,meterGain:0,boxOffset:{x:1.3,y:1,width:1.9,height:1.5},whooshPitch:1.4};return this.executeMove(i),!0}if(t.pressedSpecial2&&n){e.playTeleport(),e.playBladeSlash(),this.velocity.x=this.facingDirection*18,this.isInvincible=!0,this.invincibilityFrames=8;const i={animState:"SPECIAL_2",startup:4,active:8,recovery:10,damage:155,hitStun:30,blockStun:14,knockbackX:6.5,knockbackY:3.5,attackType:"MID",isKnockdown:!0,meterGain:15,boxOffset:{x:1.4,y:1,width:1.6,height:1.2},whooshPitch:1.6};return this.executeMove(i),!0}if(t.pressedSpecial1&&n){e.playShuriken(),this.pendingProjectile="SHURIKEN";const i={animState:"SPECIAL_1",startup:5,active:4,recovery:8,damage:0,hitStun:0,blockStun:0,knockbackX:0,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:10,boxOffset:{x:0,y:0,width:0,height:0},whooshPitch:1.5};return this.executeMove(i),!0}if(!n&&(t.pressedLightPunch||t.pressedHeavyPunch||t.pressedLightKick||t.pressedHeavyKick)){const i={animState:"JUMP_ATTACK",startup:4,active:8,recovery:6,damage:90,hitStun:22,blockStun:15,knockbackX:3.8,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:8,boxOffset:{x:1,y:.6,width:1.3,height:1.1},whooshPitch:1.3};return this.executeMove(i),!0}if(n&&t.down){if(t.pressedLightPunch||t.pressedHeavyPunch){const i={animState:"CROUCH_PUNCH",startup:3,active:3,recovery:5,damage:55,hitStun:18,blockStun:12,knockbackX:2.2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:.5,width:1.2,height:.7},whooshPitch:1.4};return this.executeMove(i),!0}if(t.pressedLightKick||t.pressedHeavyKick){const i={animState:"CROUCH_KICK",startup:5,active:4,recovery:9,damage:95,hitStun:30,blockStun:14,knockbackX:4.2,knockbackY:4.5,attackType:"LOW",isKnockdown:!0,meterGain:10,boxOffset:{x:1.1,y:.25,width:1.5,height:.5},whooshPitch:1};return this.executeMove(i),!0}}if(n){if(t.pressedLightPunch){const i={animState:"LIGHT_PUNCH",startup:3,active:3,recovery:4,damage:45,hitStun:16,blockStun:12,knockbackX:2,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:1.2,width:1.2,height:.6},whooshPitch:1.5};return this.executeMove(i),!0}if(t.pressedHeavyPunch){e.playBladeSlash();const i={animState:"HEAVY_PUNCH",startup:6,active:4,recovery:7,damage:120,hitStun:26,blockStun:16,knockbackX:4.5,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:12,boxOffset:{x:1.2,y:1.1,width:1.4,height:.8},whooshPitch:1.1};return this.executeMove(i),!0}if(t.pressedLightKick){const i={animState:"LIGHT_KICK",startup:4,active:3,recovery:5,damage:50,hitStun:18,blockStun:12,knockbackX:2.2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:7,boxOffset:{x:1,y:.7,width:1.2,height:.7},whooshPitch:1.3};return this.executeMove(i),!0}if(t.pressedHeavyKick){const i={animState:"HEAVY_KICK",startup:7,active:4,recovery:8,damage:130,hitStun:28,blockStun:18,knockbackX:5.8,knockbackY:2.5,attackType:"HIGH",isKnockdown:!1,meterGain:14,boxOffset:{x:1.2,y:1.3,width:1.4,height:.9},whooshPitch:.9};return this.executeMove(i),!0}}return!1}}class Qp extends xi{constructor(t,e,n){super("VOLT",t,e,Mi.buildVolt(),n),this.moveSpeed=6.8}checkAttackInputs(t,e,n){if(t.pressedSuperMove&&this.superMeter>=100&&n){this.superMeter=0,e.playSuperFlash(),e.playThunder();const i={animState:"SUPER_COMBO",startup:4,active:18,recovery:14,damage:365,hitStun:48,blockStun:24,knockbackX:9,knockbackY:7,attackType:"MID",isKnockdown:!0,meterGain:0,boxOffset:{x:1.2,y:1,width:1.8,height:1.5},whooshPitch:1.4};return this.executeMove(i),!0}if(t.pressedSpecial2){e.playThunder(),n?(this.velocity.y=8.5,this.velocity.x=this.facingDirection*8):(this.velocity.y=-14,this.velocity.x=this.facingDirection*9),this.isInvincible=!0,this.invincibilityFrames=8;const i={animState:"SPECIAL_2",startup:5,active:12,recovery:10,damage:160,hitStun:35,blockStun:16,knockbackX:6,knockbackY:5.5,attackType:"HIGH",isKnockdown:!0,meterGain:15,boxOffset:{x:1.1,y:.8,width:1.5,height:1.4},whooshPitch:1.5};return this.executeMove(i),!0}if(t.pressedSpecial1&&n){e.playThunder(),e.playProjectileShoot(),this.pendingProjectile="LIGHTNING";const i={animState:"SPECIAL_1",startup:5,active:4,recovery:8,damage:0,hitStun:0,blockStun:0,knockbackX:0,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:10,boxOffset:{x:0,y:0,width:0,height:0},whooshPitch:1.4};return this.executeMove(i),!0}if(!n&&(t.pressedLightPunch||t.pressedHeavyPunch||t.pressedLightKick||t.pressedHeavyKick)){const i={animState:"JUMP_ATTACK",startup:4,active:8,recovery:6,damage:95,hitStun:22,blockStun:15,knockbackX:3.8,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:8,boxOffset:{x:1,y:.6,width:1.3,height:1.1},whooshPitch:1.3};return this.executeMove(i),!0}if(n&&t.down){if(t.pressedLightPunch||t.pressedHeavyPunch){const i={animState:"CROUCH_PUNCH",startup:3,active:3,recovery:5,damage:55,hitStun:18,blockStun:12,knockbackX:2.2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:.5,width:1.2,height:.7},whooshPitch:1.4};return this.executeMove(i),!0}if(t.pressedLightKick||t.pressedHeavyKick){const i={animState:"CROUCH_KICK",startup:6,active:4,recovery:9,damage:95,hitStun:30,blockStun:14,knockbackX:4.2,knockbackY:4.5,attackType:"LOW",isKnockdown:!0,meterGain:10,boxOffset:{x:1.1,y:.25,width:1.5,height:.5},whooshPitch:1};return this.executeMove(i),!0}}if(n){if(t.pressedLightPunch){const i={animState:"LIGHT_PUNCH",startup:3,active:3,recovery:4,damage:45,hitStun:16,blockStun:12,knockbackX:2,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:1.2,width:1.2,height:.6},whooshPitch:1.5};return this.executeMove(i),!0}if(t.pressedHeavyPunch){e.playHitHeavy();const i={animState:"HEAVY_PUNCH",startup:6,active:4,recovery:7,damage:125,hitStun:26,blockStun:16,knockbackX:4.8,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:12,boxOffset:{x:1.2,y:1.1,width:1.4,height:.8},whooshPitch:1.1};return this.executeMove(i),!0}if(t.pressedLightKick){const i={animState:"LIGHT_KICK",startup:4,active:3,recovery:5,damage:52,hitStun:18,blockStun:12,knockbackX:2.2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:7,boxOffset:{x:1,y:.7,width:1.2,height:.7},whooshPitch:1.3};return this.executeMove(i),!0}if(t.pressedHeavyKick){const i={animState:"HEAVY_KICK",startup:7,active:4,recovery:8,damage:135,hitStun:28,blockStun:18,knockbackX:5.8,knockbackY:2.2,attackType:"HIGH",isKnockdown:!1,meterGain:14,boxOffset:{x:1.2,y:1.3,width:1.4,height:.9},whooshPitch:.9};return this.executeMove(i),!0}}return!1}}class tm extends xi{constructor(t,e,n){super("JIN",t,e,Mi.buildJin(),n),this.moveSpeed=6.6}checkAttackInputs(t,e,n){if(t.pressedSuperMove&&this.superMeter>=100&&n){this.superMeter=0,e.playSuperFlash();const i={animState:"SUPER_COMBO",startup:4,active:16,recovery:14,damage:370,hitStun:48,blockStun:26,knockbackX:9,knockbackY:7,attackType:"MID",isKnockdown:!0,meterGain:0,boxOffset:{x:1.15,y:1.05,width:1.7,height:1.5},whooshPitch:1.25};return this.executeMove(i),!0}if(t.pressedSpecial2&&n){this.velocity.y=12.5,this.velocity.x=this.facingDirection*4.8,this.isInvincible=!0,this.invincibilityFrames=8;const i={animState:"SPECIAL_2",startup:5,active:10,recovery:12,damage:170,hitStun:36,blockStun:18,knockbackX:6,knockbackY:8,attackType:"MID",isKnockdown:!0,meterGain:15,boxOffset:{x:1,y:1.45,width:1.35,height:1.65},whooshPitch:1.4};return this.executeMove(i),!0}if(t.pressedSpecial1&&n){e.playProjectileShoot(),this.pendingProjectile="KI_BLAST";const i={animState:"SPECIAL_1",startup:6,active:4,recovery:8,damage:0,hitStun:0,blockStun:0,knockbackX:0,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:10,boxOffset:{x:0,y:0,width:0,height:0},whooshPitch:1.3};return this.executeMove(i),!0}if(!n&&(t.pressedLightPunch||t.pressedHeavyPunch||t.pressedLightKick||t.pressedHeavyKick)){const i={animState:"JUMP_ATTACK",startup:4,active:8,recovery:6,damage:95,hitStun:24,blockStun:16,knockbackX:3.8,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:8,boxOffset:{x:1,y:.6,width:1.35,height:1.15},whooshPitch:1.25};return this.executeMove(i),!0}if(n&&t.down){if(t.pressedLightPunch||t.pressedHeavyPunch){const i={animState:"CROUCH_PUNCH",startup:3,active:3,recovery:5,damage:55,hitStun:18,blockStun:12,knockbackX:2.2,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:6,boxOffset:{x:1,y:.5,width:1.2,height:.7},whooshPitch:1.3};return this.executeMove(i),!0}if(t.pressedLightKick||t.pressedHeavyKick){const i={animState:"CROUCH_KICK",startup:6,active:4,recovery:9,damage:100,hitStun:32,blockStun:15,knockbackX:4.5,knockbackY:4.8,attackType:"LOW",isKnockdown:!0,meterGain:10,boxOffset:{x:1.15,y:.25,width:1.55,height:.5},whooshPitch:1.05};return this.executeMove(i),!0}}if(n){if(t.pressedLightPunch){const i={animState:"LIGHT_PUNCH",startup:3,active:3,recovery:4,damage:48,hitStun:16,blockStun:12,knockbackX:2.2,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:6,boxOffset:{x:1.05,y:1.2,width:1.25,height:.65},whooshPitch:1.4};return this.executeMove(i),!0}if(t.pressedHeavyPunch){const i={animState:"HEAVY_PUNCH",startup:6,active:4,recovery:7,damage:120,hitStun:28,blockStun:17,knockbackX:4.8,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:12,boxOffset:{x:1.25,y:1.1,width:1.45,height:.85},whooshPitch:1};return this.executeMove(i),!0}if(t.pressedLightKick){const i={animState:"LIGHT_KICK",startup:4,active:3,recovery:5,damage:52,hitStun:18,blockStun:12,knockbackX:2.3,knockbackY:0,attackType:"MID",isKnockdown:!1,meterGain:7,boxOffset:{x:1.05,y:.7,width:1.25,height:.75},whooshPitch:1.2};return this.executeMove(i),!0}if(t.pressedHeavyKick){const i={animState:"HEAVY_KICK",startup:7,active:4,recovery:8,damage:135,hitStun:30,blockStun:19,knockbackX:6,knockbackY:2.5,attackType:"HIGH",isKnockdown:!1,meterGain:14,boxOffset:{x:1.25,y:1.35,width:1.45,height:.95},whooshPitch:.9};return this.executeMove(i),!0}}return!1}}class em extends xi{aiActionTimer=Math.floor(Math.random()*30);spawnSide;deathTimer=0;constructor(t,e,n,i){super(`MOB_${t}`,2,e,Mi.buildMobStickman(n),i),this.spawnSide=e>0?1:-1,this.maxHealth=80,this.health=80,this.moveSpeed=3.6+Math.random()*1.8}checkAttackInputs(t,e,n){if(!n)return!1;if(t.pressedLightPunch){const i={animState:"LIGHT_PUNCH",startup:9,active:5,recovery:11,damage:25,hitStun:18,blockStun:10,knockbackX:3.2,knockbackY:0,attackType:"HIGH",isKnockdown:!1,meterGain:6,boxOffset:{x:.9,y:1.1,width:.9,height:.6},whooshPitch:1.1};return this.executeMove(i),!0}if(t.pressedLightKick){const i={animState:"LIGHT_KICK",startup:11,active:6,recovery:13,damage:35,hitStun:22,blockStun:12,knockbackX:3.8,knockbackY:0,attackType:"LOW",isKnockdown:!1,meterGain:8,boxOffset:{x:.95,y:.45,width:1,height:.6},whooshPitch:.95};return this.executeMove(i),!0}return!1}updateMobAI(t){const e=t.x-this.position.x,n=Math.abs(e),i=e>0,r={left:!1,right:!1,up:!1,down:!1,lightPunch:!1,heavyPunch:!1,lightKick:!1,heavyKick:!1,special1:!1,special2:!1,superMove:!1,pressedLightPunch:!1,pressedHeavyPunch:!1,pressedLightKick:!1,pressedHeavyKick:!1,pressedSpecial1:!1,pressedSpecial2:!1,pressedSuperMove:!1,dashForward:!1,dashBackward:!1};return this.hitStunRemaining>0||this.isDead||(this.aiActionTimer++,n>1.35?i?r.right=!0:r.left=!0:this.aiActionTimer%50===0&&(Math.random()<.6?r.pressedLightPunch=!0:r.pressedLightKick=!0)),r}}class nm{mesh;position;velocity;ownerIndex;hitbox;isDead=!1;lifeTimer=0;maxLife=2.5;colorHex;light;constructor(t,e,n,i,r,a){this.ownerIndex=r,this.position=new P(e,n,0);let o=11;if(a==="SHURIKEN"?(o=14.5,this.colorHex=16711731):a==="LIGHTNING"?(o=13,this.colorHex=16771584):a==="SURGE"?(o=11.5,this.colorHex=58879):a==="KI_BLAST"?(o=12,this.colorHex=14216959):(o=10.5,this.colorHex=16729088),this.velocity=new P(i*o,0,0),this.mesh=new Bt,this.mesh.position.copy(this.position),a==="SHURIKEN"){const c=new Vt(.12,.52,4),l=new zt({color:16711731}),h=new gt(c,l);h.position.y=.26;const u=new gt(c,l);u.position.y=-.26,u.rotation.z=Math.PI;const d=new gt(c,l);d.position.x=.26,d.rotation.z=-Math.PI/2;const p=new gt(c,l);p.position.x=-.26,p.rotation.z=Math.PI/2;const g=new Oi(.08,.02,4,8),_=new zt({color:16777215}),m=new gt(g,_);this.mesh.add(h,u,d,p,m)}else if(a==="LIGHTNING"){const c=new zt({color:16777011}),l=new Rt(.06,.35,.06),h=new gt(l,c);h.position.set(-.16,.14,0),h.rotation.z=-.65;const u=new gt(l,c);u.position.set(.02,0,0),u.rotation.z=.75;const d=new gt(l,c);d.position.set(.18,-.14,0),d.rotation.z=-.65;const p=new Di(.16,0),g=new zt({color:16777215}),_=new gt(p,g);this.mesh.add(h,u,d,_)}else if(a==="SURGE"){const c=new Di(.38,0),l=new zt({color:61695,transparent:!0,opacity:.9}),h=new gt(c,l);h.scale.set(.3,1.3,.8),h.rotation.z=Math.PI/4;const u=new Di(.22,0),d=new zt({color:16777215}),p=new gt(u,d);p.scale.set(.25,1,.6),this.mesh.add(h,p)}else if(a==="KI_BLAST"){const c=new Fi(.24,0),l=new zt({color:16777215}),h=new gt(c,l),u=new Ii(.32,0),d=new zt({color:9489663,wireframe:!0,transparent:!0,opacity:.8}),p=new gt(u,d),g=new Oi(.34,.03,4,12),_=new zt({color:56831}),m=new gt(g,_);this.mesh.add(h,p,m)}else{const c=new Ii(.22,0),l=new zt({color:16777215}),h=new gt(c,l);this.mesh.add(h);const u=new Ii(.34,0),d=new zt({color:this.colorHex,transparent:!0,opacity:.8,wireframe:!1}),p=new gt(u,d);this.mesh.add(p);const g=new Vt(.07,.22,4),_=new zt({color:16742144}),m=new gt(g,_);m.position.set(-.25,.12,0),m.rotation.z=Math.PI/2;const f=new gt(g,_);f.position.set(-.25,-.12,0),f.rotation.z=Math.PI/2,this.mesh.add(m,f)}this.light=new na(this.colorHex,2.8,6),this.mesh.add(this.light),t.add(this.mesh),this.hitbox={id:`proj_${r}_${Date.now()}`,box:{x:e,y:n,width:.8,height:.8},damage:120,hitStun:22,blockStun:14,knockbackX:i*4.5,knockbackY:1.5,attackType:"MID",isKnockdown:!1,meterGainAttacker:10,meterGainDefender:5}}update(t,e,n=13){if(this.lifeTimer+=t,this.lifeTimer>=this.maxLife){this.isDead=!0;return}this.position.addScaledVector(this.velocity,t),this.mesh.position.copy(this.position),this.mesh.rotation.z+=t*25*Math.sign(this.velocity.x),this.hitbox.box.x=this.position.x,this.hitbox.box.y=this.position.y,e.emitProjectileTrail(this.position,this.colorHex),Math.abs(this.position.x)>=n&&(this.isDead=!0,e.emitHitSpark(this.position,this.colorHex,14,5))}destroy(t,e){this.isDead=!0,e.emitHitSpark(this.position,this.colorHex,20,6),t.remove(this.mesh)}}class im{difficulty="NORMAL";dummyBehavior="cpu";actionTimer=0;currentAction="IDLE";computeInput(t,e){if(this.dummyBehavior==="stand")return this.blankInput();if(this.dummyBehavior==="crouch"){const o=this.blankInput();return o.down=!0,o}if(this.dummyBehavior==="jump"){const o=this.blankInput();return t.position.y<=.01&&(o.up=!0),o}if(this.dummyBehavior==="block_all"){const o=this.blankInput();return e.position.x>=t.position.x?o.left=!0:o.right=!0,e.currentMove&&e.currentMove.attackType==="LOW"&&(o.down=!0),o}const n=this.blankInput(),i=Math.abs(t.position.x-e.position.x),r=t.facingDirection===1,a=this.difficulty==="EASY"?.35:this.difficulty==="NORMAL"?.7:.9;if((e.movePhase==="STARTUP"||e.movePhase==="ACTIVE")&&Math.random()<a)return r?n.left=!0:n.right=!0,e.currentMove?.attackType==="LOW"&&(n.down=!0),n;if(e.position.y>1.2&&i<3.2&&t.position.y<=.01&&Math.random()<(this.difficulty==="EASY"?.4:.8))return n.pressedSpecial2=!0,n;if(t.superMeter>=100&&i<3&&Math.random()<.25)return n.pressedSuperMove=!0,n;if(this.actionTimer--,this.actionTimer<=0)if(this.actionTimer=12+Math.floor(Math.random()*20),i>6)this.currentAction=Math.random()<.45?"SPECIAL":"APPROACH";else if(i<1.8)this.currentAction=Math.random()<.6?"POKE":"RETREAT";else{const o=Math.random();o<.4?this.currentAction="APPROACH":o<.7?this.currentAction="POKE":this.currentAction="RETREAT"}switch(this.currentAction){case"APPROACH":r?n.right=!0:n.left=!0,Math.random()<.05&&i>3&&(n.up=!0);break;case"RETREAT":r?n.left=!0:n.right=!0;break;case"SPECIAL":n.pressedSpecial1=!0;break;case"POKE":if(i<1.6){const o=Math.random();o<.35?n.pressedLightPunch=!0:o<.65?n.pressedLightKick=!0:o<.85?n.pressedHeavyPunch=!0:(n.down=!0,n.pressedHeavyKick=!0)}else r?n.right=!0:n.left=!0;break}return n}blankInput(){return{left:!1,right:!1,up:!1,down:!1,lightPunch:!1,heavyPunch:!1,lightKick:!1,heavyKick:!1,special1:!1,special2:!1,superMove:!1,pressedLightPunch:!1,pressedHeavyPunch:!1,pressedLightKick:!1,pressedHeavyKick:!1,pressedSpecial1:!1,pressedSpecial2:!1,pressedSuperMove:!1,dashForward:!1,dashBackward:!1}}}class sm{p1HealthFill;p1DamageBar;p1MeterFill;p1MeterVal;p1Rounds;p2HealthFill;p2DamageBar;p2MeterFill;p2MeterVal;p2Rounds;timerEl;announcerBanner;announcerText;p1ComboEl;p1ComboCount;p2ComboEl;p2ComboCount;hordeStatsEl;hordeWaveEl;hordeKillsEl;p1TargetHealth=1e3;p1DamageDisplay=1e3;p2TargetHealth=1e3;p2DamageDisplay=1e3;lastP1Pct=-1;lastP2Pct=-1;lastP1DamPct=-1;lastP2DamPct=-1;lastP1Meter=-1;lastP2Meter=-1;lastSeconds=-1;p1HpText=null;p2HpText=null;constructor(){this.p1HealthFill=document.getElementById("p1-health"),this.p1DamageBar=document.getElementById("p1-health-damage"),this.p1MeterFill=document.getElementById("p1-meter"),this.p1MeterVal=document.getElementById("p1-meter-val"),this.p1Rounds=document.querySelectorAll("#p1-rounds .round-dot"),this.p1HpText=document.getElementById("p1-hp-val"),this.p2HealthFill=document.getElementById("p2-health"),this.p2DamageBar=document.getElementById("p2-health-damage"),this.p2MeterFill=document.getElementById("p2-meter"),this.p2MeterVal=document.getElementById("p2-meter-val"),this.p2Rounds=document.querySelectorAll("#p2-rounds .round-dot"),this.p2HpText=document.getElementById("p2-hp-val"),this.timerEl=document.getElementById("match-timer"),this.announcerBanner=document.getElementById("announcer-banner"),this.announcerText=document.getElementById("announcer-text"),this.p1ComboEl=document.getElementById("p1-combo-display"),this.p1ComboCount=this.p1ComboEl.querySelector(".combo-count"),this.p2ComboEl=document.getElementById("p2-combo-display"),this.p2ComboCount=this.p2ComboEl.querySelector(".combo-count"),this.hordeStatsEl=document.getElementById("horde-stats"),this.hordeWaveEl=document.getElementById("horde-wave"),this.hordeKillsEl=document.getElementById("horde-kills")}setHordeMode(t){t?(this.timerEl.classList.add("hidden"),this.hordeStatsEl.classList.remove("hidden")):(this.timerEl.classList.remove("hidden"),this.hordeStatsEl.classList.add("hidden"))}updateHordeStats(t,e){this.hordeWaveEl&&(this.hordeWaveEl.textContent=`WAVE ${t}`),this.hordeKillsEl&&(this.hordeKillsEl.textContent=`${e} KILLS`)}setFighterNames(t,e){const n=document.getElementById("p1-name"),i=document.getElementById("p2-name");n&&(n.textContent=t),i&&(i.textContent=e);const r=document.getElementById("p1-portrait-img"),a=document.getElementById("p2-portrait-img");r&&(r.className=`portrait-img char-${t.toLowerCase()}`),a&&(a.className=`portrait-img char-${e.toLowerCase()}`)}updateHealth(t,e,n,i){this.p1TargetHealth=t,this.p2TargetHealth=n,this.p1HpText&&(this.p1HpText.textContent=`${Math.max(0,Math.round(t))}`),this.p2HpText&&(this.p2HpText.textContent=`${Math.max(0,Math.round(n))}`);const r=Math.round(Math.max(0,t/e*100)),a=Math.round(Math.max(0,n/i*100));r!==this.lastP1Pct&&(this.p1HealthFill.style.width=`${r}%`,this.lastP1Pct=r),a!==this.lastP2Pct&&(this.p2HealthFill.style.width=`${a}%`,this.lastP2Pct=a)}updateDelayedDamage(t){if(this.p1DamageDisplay>this.p1TargetHealth){this.p1DamageDisplay=Math.max(this.p1TargetHealth,this.p1DamageDisplay-t*400);const e=Math.round(this.p1DamageDisplay/1e3*100);e!==this.lastP1DamPct&&(this.p1DamageBar.style.width=`${e}%`,this.lastP1DamPct=e)}else this.lastP1DamPct!==this.lastP1Pct&&(this.p1DamageDisplay=this.p1TargetHealth,this.p1DamageBar.style.width=`${this.lastP1Pct}%`,this.lastP1DamPct=this.lastP1Pct);if(this.p2DamageDisplay>this.p2TargetHealth){this.p2DamageDisplay=Math.max(this.p2TargetHealth,this.p2DamageDisplay-t*400);const e=Math.round(this.p2DamageDisplay/1e3*100);e!==this.lastP2DamPct&&(this.p2DamageBar.style.width=`${e}%`,this.lastP2DamPct=e)}else this.lastP2DamPct!==this.lastP2Pct&&(this.p2DamageDisplay=this.p2TargetHealth,this.p2DamageBar.style.width=`${this.lastP2Pct}%`,this.lastP2DamPct=this.lastP2Pct)}updateMeters(t,e){const n=Math.min(100,Math.floor(t)),i=Math.min(100,Math.floor(e));n!==this.lastP1Meter&&(this.p1MeterFill.style.width=`${n}%`,this.p1MeterVal.textContent=`${n}%`,n>=100?this.p1MeterFill.classList.add("max"):this.p1MeterFill.classList.remove("max"),this.lastP1Meter=n),i!==this.lastP2Meter&&(this.p2MeterFill.style.width=`${i}%`,this.p2MeterVal.textContent=`${i}%`,i>=100?this.p2MeterFill.classList.add("max"):this.p2MeterFill.classList.remove("max"),this.lastP2Meter=i)}updateTimer(t){const e=Math.ceil(t);e!==this.lastSeconds&&(this.timerEl.textContent=e.toString().padStart(2,"0"),e<=10?this.timerEl.classList.add("low"):this.timerEl.classList.remove("low"),this.lastSeconds=e)}updateRounds(t,e){this.p1Rounds.forEach((n,i)=>{i<t?n.classList.add("won"):n.classList.remove("won")}),this.p2Rounds.forEach((n,i)=>{i<e?n.classList.add("won"):n.classList.remove("won")})}showAnnouncement(t,e=1200){this.announcerText.textContent=t,this.announcerBanner.classList.remove("hidden"),this.announcerBanner.style.animation="none",this.announcerBanner.offsetWidth,this.announcerBanner.style.animation="",setTimeout(()=>{this.announcerBanner.classList.add("hidden")},e)}showCombo(t,e){const n=t===1?this.p1ComboEl:this.p2ComboEl,i=t===1?this.p1ComboCount:this.p2ComboCount;e>1?(i.textContent=e.toString(),n.classList.remove("hidden")):n.classList.add("hidden")}hideCombos(){this.p1ComboEl.classList.add("hidden"),this.p2ComboEl.classList.add("hidden")}}class rm{overlayEl;toggleHitboxes;toggleFrameData;dummySelect;frameDataBox;fdStartup;fdActive;fdRecovery;fdAdv;constructor(t,e){this.overlayEl=document.getElementById("training-overlay"),this.toggleHitboxes=document.getElementById("toggle-hitboxes"),this.toggleFrameData=document.getElementById("toggle-frame-data"),this.dummySelect=document.getElementById("dummy-action-select"),this.frameDataBox=document.getElementById("frame-data-display"),this.fdStartup=document.getElementById("fd-startup"),this.fdActive=document.getElementById("fd-active"),this.fdRecovery=document.getElementById("fd-recovery"),this.fdAdv=document.getElementById("fd-adv"),this.toggleHitboxes?.addEventListener("change",()=>{t.setDebugVisible(this.toggleHitboxes.checked)}),this.toggleFrameData?.addEventListener("change",()=>{this.toggleFrameData.checked?this.frameDataBox.classList.remove("hidden"):this.frameDataBox.classList.add("hidden")}),this.dummySelect?.addEventListener("change",()=>{e.dummyBehavior=this.dummySelect.value});const n=document.getElementById("btn-toggle-training"),i=document.getElementById("training-header-toggle"),r=()=>{this.overlayEl.classList.toggle("minimized"),n&&(n.textContent=this.overlayEl.classList.contains("minimized")?"▼":"▲")};n?.addEventListener("click",a=>{a.stopPropagation(),r()}),i?.addEventListener("click",()=>{r()})}setVisible(t){t?this.overlayEl.classList.remove("hidden"):this.overlayEl.classList.add("hidden")}updateFrameData(t){this.fdStartup.textContent=`${t.startup}f`,this.fdActive.textContent=`${t.active}f`,this.fdRecovery.textContent=`${t.recovery}f`;const e=t.blockStun-t.recovery,n=t.hitStun-t.recovery,i=e>=0?`+${e}`:`${e}`,r=n>=0?`+${n}`:`${n}`;this.fdAdv.textContent=`Hit: ${r}f | Block: ${i}f`}}class am{renderer;stage;cameraCtrl;particles;sound;input;collision;ai;hud;trainingOverlay;p1=null;p2=null;projectiles=[];mobs=[];hordeWave=1;hordeKills=0;hordeWaveTarget=4;hordeWaveKills=0;mobIdCounter=0;mobSpawnTimer=0;mobColors=[16777215,16724821,61695,16755200,10494192,3800852];matchState="TITLE";matchConfig=null;currentRound=1;roundTimer=99;isPaused=!1;hitStopFrames=0;stateTimer=0;lastTime=0;accumulator=0;fixedStep=1/60;constructor(){this.renderer=new Vp("canvas-container"),this.cameraCtrl=new Xp(this.renderer.getAspectRatio()),this.stage=new Wp(this.renderer.scene),this.particles=new Kp(this.renderer.scene),this.sound=new Yp,this.input=new qp,this.collision=new In(this.renderer.scene),this.ai=new im,this.hud=new sm,this.trainingOverlay=new rm(this.collision,this.ai),window.addEventListener("resize",()=>{this.cameraCtrl.updateAspect(this.renderer.getAspectRatio())}),this.lastTime=performance.now(),requestAnimationFrame(this.gameLoop.bind(this))}startMatch(t){this.matchConfig=t,this.currentRound=1,this.roundTimer=99,this.isPaused=!1,this.hitStopFrames=0,this.cameraCtrl.resetOrbit(),this.p1&&this.renderer.scene.remove(this.p1.rig.root),this.p2&&this.renderer.scene.remove(this.p2.rig.root),this.clearMobs(),this.clearProjectiles();const e=t.mode==="HORDE"?0:-3.2,n=3.2;if(this.p1=this.createFighter(t.p1Char,1,e),this.p2=this.createFighter(t.p2Char,2,n),t.mode==="HORDE"){this.hud.setHordeMode(!0),this.hordeWave=1,this.hordeKills=0,this.hordeWaveTarget=4,this.hordeWaveKills=0,this.hud.updateHordeStats(this.hordeWave,this.hordeKills),this.hud.setFighterNames(this.p1.name,"HORDE"),this.hud.updateRounds(0,0),this.trainingOverlay.setVisible(!1),this.renderer.scene.remove(this.p2.rig.root),this.spawnMob(-5),this.spawnMob(5),this.sound.startBattleBGM(),this.matchState="PLAYING",this.hud.showAnnouncement("SURVIVE THE HORDE!",1600),this.sound.announce("Fight!");return}this.hud.setHordeMode(!1),this.hud.setFighterNames(this.p1.name,this.p2.name),this.hud.updateRounds(0,0),t.mode==="TRAINING"?(this.trainingOverlay.setVisible(!0),this.ai.dummyBehavior="stand"):(this.trainingOverlay.setVisible(!1),this.ai.dummyBehavior="cpu",this.sound.startBattleBGM()),this.startRoundIntro()}quitMatch(){this.matchState="TITLE",this.sound.stopBattleBGM(),this.clearProjectiles(),this.clearMobs(),this.hud.setHordeMode(!1),this.p1&&this.renderer.scene.remove(this.p1.rig.root),this.p2&&this.renderer.scene.remove(this.p2.rig.root),this.p1=null,this.p2=null,this.cameraCtrl.resetOrbit()}startRoundIntro(){if(!this.p1||!this.p2)return;this.matchState="ROUND_INTRO",this.stateTimer=0,this.roundTimer=99,this.p1.resetRound(-3.2,!0),this.p2.resetRound(3.2,!1),this.clearProjectiles();const t=this.currentRound===3?"FINAL ROUND":`ROUND ${this.currentRound}`;this.hud.showAnnouncement(t,1400),this.sound.announce(t)}clearProjectiles(){this.projectiles.forEach(t=>this.renderer.scene.remove(t.mesh)),this.projectiles=[]}createFighter(t,e,n){switch(t){case"shadow":return new Jp(e,n,this.renderer.scene);case"volt":return new Qp(e,n,this.renderer.scene);case"cypher":return new Zp(e,n,this.renderer.scene);case"jin":return new tm(e,n,this.renderer.scene);case"blaze":default:return new $p(e,n,this.renderer.scene)}}clearMobs(){this.mobs.forEach(t=>this.renderer.scene.remove(t.rig.root)),this.mobs=[]}spawnMob(t){const e=++this.mobIdCounter,n=Math.random()<.5?-1:1,i=t!==void 0?t:n*(6.5+Math.random()*2),r=this.mobColors[e%this.mobColors.length],a=new em(e,i,r,this.renderer.scene);this.mobs.push(a)}frameCount=0;fpsSmoothed=60;onFpsUpdate;gameLoop(t){requestAnimationFrame(this.gameLoop.bind(this));const e=Math.min((t-this.lastTime)/1e3,.066);this.lastTime=t;const n=e>0?1/e:60;if(this.fpsSmoothed=this.fpsSmoothed*.9+n*.1,this.frameCount++,this.frameCount%20===0&&this.onFpsUpdate&&this.onFpsUpdate(this.fpsSmoothed),!this.isPaused){this.accumulator+=e;let i=2;for(;this.accumulator>=this.fixedStep&&i>0;)this.tick(),this.accumulator-=this.fixedStep,i--;this.accumulator>this.fixedStep&&(this.accumulator=0)}this.updateRender(e)}tick(){if(this.matchConfig?.mode==="HORDE"){this.tickHorde();return}if(!(!this.p1||!this.p2)){if(this.hitStopFrames>0){this.hitStopFrames--;return}if(this.matchState==="ROUND_INTRO"){this.stateTimer+=this.fixedStep,this.stateTimer>1.2&&this.stateTimer-this.fixedStep<=1.2&&(this.hud.showAnnouncement("FIGHT!",1e3),this.sound.announce("Fight!")),this.stateTimer>=1.8&&(this.matchState="PLAYING");return}if(this.matchState==="ROUND_OVER"&&(this.stateTimer+=this.fixedStep,this.stateTimer>=3))if(this.p1.roundsWon>=2||this.p2.roundsWon>=2||this.matchConfig?.mode==="TRAINING"){this.matchState="MATCH_OVER";const t=this.p1.roundsWon>=2?this.p1:this.p2,e=t===this.p1;this.sound.stopBattleBGM(),t.currentAnimState="VICTORY",this.sound.announce(`${t.name} Wins!`),window.dispatchEvent(new CustomEvent("match-finished",{detail:{winnerName:t.name,isP1Winner:e}}))}else this.currentRound++,this.startRoundIntro();if(this.matchState==="PLAYING"){if(this.matchConfig?.mode!=="TRAINING"&&(this.roundTimer-=this.fixedStep,this.roundTimer<=0)){this.roundTimer=0,this.handleTimeOver();return}this.hud.updateTimer(this.roundTimer);const t=this.input.getPlayerInputs(1,this.p1.facingDirection===1);let e;this.matchConfig?.mode==="PVP"?e=this.input.getPlayerInputs(2,this.p2.facingDirection===1):e=this.ai.computeInput(this.p2,this.p1);const n=this.p1.movePhase==="ACTIVE"||this.p1.movePhase==="STARTUP",i=this.p2.movePhase==="ACTIVE"||this.p2.movePhase==="STARTUP";this.p1.tick(t,this.p2.position,i,this.sound,this.particles),this.p2.tick(e,this.p1.position,n,this.sound,this.particles),this.p1.currentAnimState==="SUPER_COMBO"&&this.p1.stateTimer===1&&(this.cameraCtrl.triggerSuperZoom(this.p1.position),this.stage.triggerImpactFlash(16777215,8,this.p1.position)),this.p2.currentAnimState==="SUPER_COMBO"&&this.p2.stateTimer===1&&(this.cameraCtrl.triggerSuperZoom(this.p2.position),this.stage.triggerImpactFlash(16777215,8,this.p2.position)),this.checkProjectileSpawn(this.p1),this.checkProjectileSpawn(this.p2),this.updateProjectiles(),this.collision.resolvePushbox(this.p1.position,this.p1.pushbox,this.p2.position,this.p2.pushbox),this.checkCombatCollisions(),this.input.postUpdate(),(this.p1.isDead||this.p2.isDead)&&this.handleKnockout(),this.matchConfig?.mode==="TRAINING"&&(this.p1.health<200&&(this.p1.health=1e3),this.p2.health<200&&(this.p2.health=1e3))}this.hud.updateHealth(this.p1.health,this.p1.maxHealth,this.p2.health,this.p2.maxHealth),this.hud.updateMeters(this.p1.superMeter,this.p2.superMeter)}}checkProjectileSpawn(t){if(t.pendingProjectile){const e=t.pendingProjectile;t.pendingProjectile=null;const n=t.position.x+t.facingDirection*1.1,i=t.position.y+1.1,r=new nm(this.renderer.scene,n,i,t.facingDirection,t.playerIndex,e);this.projectiles.push(r)}}updateProjectiles(){for(let t=this.projectiles.length-1;t>=0;t--){const e=this.projectiles[t];e.update(this.fixedStep,this.particles),e.isDead&&(this.renderer.scene.remove(e.mesh),this.projectiles.splice(t,1))}}checkCombatCollisions(){if(!(!this.p1||!this.p2)){this.p1.activeHitbox&&!this.p1.hasHitCurrentMove&&In.testOverlap(this.p1.activeHitbox.box,this.p2.hurtbox.box)&&(this.p1.hasHitCurrentMove=!0,this.p1.canCancel=!0,this.p2.takeHit(this.p1.activeHitbox,this.sound,this.particles)?(this.p1.comboHits++,this.hud.showCombo(1,this.p1.comboHits),this.p1.superMeter=Math.min(100,this.p1.superMeter+this.p1.activeHitbox.meterGainAttacker),this.hitStopFrames=this.p1.currentMove?.animState==="SUPER_COMBO"?5:this.p1.activeHitbox.damage>100?3:2,this.cameraCtrl.addTrauma(.28),this.stage.triggerImpactFlash(16777215,4,this.p2.position)):(this.hitStopFrames=1,this.cameraCtrl.addTrauma(.08)),this.p1.currentMove&&this.trainingOverlay.updateFrameData(this.p1.currentMove)),this.p2.activeHitbox&&!this.p2.hasHitCurrentMove&&In.testOverlap(this.p2.activeHitbox.box,this.p1.hurtbox.box)&&(this.p2.hasHitCurrentMove=!0,this.p2.canCancel=!0,this.p1.takeHit(this.p2.activeHitbox,this.sound,this.particles)?(this.p2.comboHits++,this.hud.showCombo(2,this.p2.comboHits),this.p2.superMeter=Math.min(100,this.p2.superMeter+this.p2.activeHitbox.meterGainAttacker),this.hitStopFrames=this.p2.currentMove?.animState==="SUPER_COMBO"?5:this.p2.activeHitbox.damage>100?3:2,this.cameraCtrl.addTrauma(.28),this.stage.triggerImpactFlash(16777215,4,this.p1.position)):(this.hitStopFrames=1,this.cameraCtrl.addTrauma(.08)),this.p2.currentMove&&this.trainingOverlay.updateFrameData(this.p2.currentMove));for(let t=this.projectiles.length-1;t>=0;t--){const e=this.projectiles[t],n=e.ownerIndex===1?this.p2:this.p1;if(In.testOverlap(e.hitbox.box,n.hurtbox.box)){const i=e.ownerIndex===1?this.p1:this.p2;n.takeHit(e.hitbox,this.sound,this.particles)&&(i.comboHits++,this.hud.showCombo(i.playerIndex,i.comboHits),this.cameraCtrl.addTrauma(.3),this.hitStopFrames=4),e.destroy(this.renderer.scene,this.particles),this.projectiles.splice(t,1)}}this.p2.hitStunRemaining<=0&&this.p1.comboHits>0&&(this.p1.comboHits=0,this.hud.showCombo(1,0)),this.p1.hitStunRemaining<=0&&this.p2.comboHits>0&&(this.p2.comboHits=0,this.hud.showCombo(2,0))}}handleKnockout(){this.matchState="ROUND_OVER",this.stateTimer=0,this.hud.showAnnouncement("K.O.!",2e3),this.sound.announce("K.O.!"),this.sound.playExplosion(),this.cameraCtrl.addTrauma(.8);const t=this.p1?.isDead?this.p2:this.p1;t.roundsWon++,this.hud.updateRounds(this.p1.roundsWon,this.p2.roundsWon),this.cameraCtrl.triggerKODolly(t.position)}handleTimeOver(){this.matchState="ROUND_OVER",this.stateTimer=0,this.hud.showAnnouncement("TIME OVER",2e3),this.sound.announce("Time Over!"),!(!this.p1||!this.p2)&&(this.p1.health>this.p2.health?this.p1.roundsWon++:this.p2.health>this.p1.health&&this.p2.roundsWon++,this.hud.updateRounds(this.p1.roundsWon,this.p2.roundsWon))}tickHorde(){if(!this.p1)return;if(this.hitStopFrames>0){this.hitStopFrames--;return}if(this.matchState==="MATCH_OVER")return;const t=Math.min(5,2+Math.floor(this.hordeWave/2)),e=this.hordeWaveTarget-(this.hordeWaveKills+this.mobs.length);this.mobs.length<t&&e>0&&(this.mobSpawnTimer++,this.mobSpawnTimer>40&&(this.mobSpawnTimer=0,this.spawnMob()));let n=null,i=1/0;for(const h of this.mobs){if(h.isDead)continue;const u=Math.abs(h.position.x-this.p1.position.x);u<i&&(i=u,n=h)}const r=n?n.position:new P(this.p1.position.x+this.p1.facingDirection*2.5,0,0),a=n!==null&&i<2&&(n.movePhase==="ACTIVE"||n.movePhase==="STARTUP"),o=this.input.getPlayerInputs(1,this.p1.facingDirection===1);this.p1.tick(o,r,a,this.sound,this.particles),this.p1.currentAnimState==="SUPER_COMBO"&&this.p1.stateTimer===1&&(this.cameraCtrl.triggerSuperZoom(this.p1.position),this.stage.triggerImpactFlash(16777215,8,this.p1.position)),this.checkProjectileSpawn(this.p1),this.updateProjectiles();const c=this.p1.movePhase==="ACTIVE"||this.p1.movePhase==="STARTUP";for(let h=0;h<this.mobs.length;h++){const u=this.mobs[h],d=u.updateMobAI(this.p1.position);u.tick(d,this.p1.position,c,this.sound,this.particles)}for(const h of this.mobs)h.isDead||this.collision.resolvePushbox(this.p1.position,this.p1.pushbox,h.position,h.pushbox);this.checkHordeCombatCollisions();for(let h=this.mobs.length-1;h>=0;h--){const u=this.mobs[h];u.isDead&&(u.deathTimer++,u.deathTimer>35&&(this.renderer.scene.remove(u.rig.root),this.mobs.splice(h,1)))}this.hordeWaveKills>=this.hordeWaveTarget&&this.mobs.length===0&&(this.hordeWave++,this.hordeWaveKills=0,this.hordeWaveTarget=3+this.hordeWave*2,this.p1.health=Math.min(this.p1.maxHealth,this.p1.health+300),this.hud.showAnnouncement(`WAVE ${this.hordeWave}!`,1800),this.sound.announce("Round 2"),this.hud.updateHordeStats(this.hordeWave,this.hordeKills),this.spawnMob(-5.5),this.spawnMob(5.5)),this.p1.isDead&&(this.matchState="MATCH_OVER",this.sound.stopBattleBGM(),this.sound.announce("Time Over!"),this.sound.playExplosion(),this.cameraCtrl.addTrauma(.8),this.hud.showAnnouncement("DEFEATED",2500),window.dispatchEvent(new CustomEvent("match-finished",{detail:{winnerName:`WAVE ${this.hordeWave} SURVIVED`,isP1Winner:!1}})));const l=Math.max(0,this.hordeWaveTarget-this.hordeWaveKills);this.hud.updateHealth(this.p1.health,this.p1.maxHealth,l,this.hordeWaveTarget),this.hud.updateMeters(this.p1.superMeter,0),this.input.postUpdate()}checkHordeCombatCollisions(){if(this.p1){if(this.p1.activeHitbox&&!this.p1.hasHitCurrentMove){let t=!1;for(const e of this.mobs)e.isDead||In.testOverlap(this.p1.activeHitbox.box,e.hurtbox.box)&&(t=!0,this.p1.canCancel=!0,e.takeHit(this.p1.activeHitbox,this.sound,this.particles)&&(this.p1.comboHits++,this.hud.showCombo(1,this.p1.comboHits),this.p1.superMeter=Math.min(100,this.p1.superMeter+16),this.hitStopFrames=2,this.cameraCtrl.addTrauma(.28),this.stage.triggerImpactFlash(16777215,4,e.position),e.isDead&&(this.hordeKills++,this.hordeWaveKills++,this.hud.updateHordeStats(this.hordeWave,this.hordeKills),this.sound.playExplosion(),this.cameraCtrl.addTrauma(.4),this.stage.triggerImpactFlash(16777215,6,e.position))));t&&(this.p1.hasHitCurrentMove=!0)}for(const t of this.mobs)t.isDead||t.activeHitbox&&!t.hasHitCurrentMove&&In.testOverlap(t.activeHitbox.box,this.p1.hurtbox.box)&&(t.hasHitCurrentMove=!0,this.p1.takeHit(t.activeHitbox,this.sound,this.particles)&&(this.hitStopFrames=2,this.cameraCtrl.addTrauma(.25),this.stage.triggerImpactFlash(16724821,3,this.p1.position)));for(let t=this.projectiles.length-1;t>=0;t--){const e=this.projectiles[t];if(e.ownerIndex===1){for(const n of this.mobs)if(!n.isDead&&In.testOverlap(e.hitbox.box,n.hurtbox.box)){n.takeHit(e.hitbox,this.sound,this.particles)&&(this.p1.comboHits++,this.hud.showCombo(1,this.p1.comboHits),this.cameraCtrl.addTrauma(.25),this.hitStopFrames=2,n.isDead&&(this.hordeKills++,this.hordeWaveKills++,this.hud.updateHordeStats(this.hordeWave,this.hordeKills),this.sound.playExplosion())),e.destroy(this.renderer.scene,this.particles),this.projectiles.splice(t,1);break}}}}}updateRender(t){if(this.matchConfig?.mode==="HORDE"&&this.p1){const e=this.mobs.length>0&&!this.mobs[0].isDead?this.mobs[0].position:new P(this.p1.position.x+this.p1.facingDirection*2.5,0,0);this.cameraCtrl.update(t,this.p1.position,e)}else this.p1&&this.p2&&(this.cameraCtrl.update(t,this.p1.position,this.p2.position),this.collision.isDebugEnabled()&&(this.collision.beginDebugRender(),this.collision.drawDebugBox(this.p1.hurtbox.box,65382),this.collision.drawDebugBox(this.p2.hurtbox.box,65382),this.collision.drawDebugBox(this.p1.pushbox,35071),this.collision.drawDebugBox(this.p2.pushbox,35071),this.p1.activeHitbox&&this.collision.drawDebugBox(this.p1.activeHitbox.box,16711748),this.p2.activeHitbox&&this.collision.drawDebugBox(this.p2.activeHitbox.box,16711748),this.projectiles.forEach(e=>this.collision.drawDebugBox(e.hitbox.box,16759552)),this.collision.endDebugRender()));this.particles.update(t),this.stage.update(t),this.hud.updateDelayedDamage(t),this.renderer.render(this.cameraCtrl.camera)}}class om{titleScreen;charSelectScreen;hudLayer;controlsModal;pauseModal;gameoverModal;selectionStatus;winnerText;winnerSub;soundToggleBtn;currentMode="ARCADE";selectedP1=null;selectedP2=null;selectingPlayer=1;onStartMatchCallback;onPauseStateChange;onQuitMatchCallback;sound;settings;constructor(t,e){this.sound=t,this.settings=e,this.titleScreen=document.getElementById("title-screen"),this.charSelectScreen=document.getElementById("char-select-screen"),this.hudLayer=document.getElementById("hud"),this.controlsModal=document.getElementById("controls-modal"),this.pauseModal=document.getElementById("pause-modal"),this.gameoverModal=document.getElementById("gameover-modal"),this.selectionStatus=document.getElementById("selection-status"),this.winnerText=document.getElementById("winner-text"),this.winnerSub=document.getElementById("winner-sub"),this.soundToggleBtn=document.getElementById("btn-sound-toggle"),this.bindEvents()}registerCallbacks(t,e,n){this.onStartMatchCallback=t,this.onPauseStateChange=e,this.onQuitMatchCallback=n}bindEvents(){document.getElementById("btn-arcade")?.addEventListener("click",()=>{this.sound.init(),this.sound.playWhoosh(1.2),this.openCharSelect("ARCADE")}),document.getElementById("btn-horde")?.addEventListener("click",()=>{this.sound.init(),this.sound.playWhoosh(1.4),this.openCharSelect("HORDE")}),document.getElementById("btn-pvp")?.addEventListener("click",()=>{this.sound.init(),this.sound.playWhoosh(1.2),this.openCharSelect("PVP")}),document.getElementById("btn-training")?.addEventListener("click",()=>{this.sound.init(),this.sound.playWhoosh(1.2),this.openCharSelect("TRAINING")}),document.getElementById("btn-how-to-play")?.addEventListener("click",()=>{this.sound.init(),this.controlsModal.classList.remove("hidden")}),document.getElementById("btn-close-controls")?.addEventListener("click",()=>{this.controlsModal.classList.add("hidden")}),document.getElementById("btn-settings")?.addEventListener("click",()=>{this.settings.openSettings()}),document.getElementById("btn-hud-settings")?.addEventListener("click",()=>{this.settings.openSettings()}),document.getElementById("btn-pause-settings")?.addEventListener("click",()=>{this.settings.openSettings()}),this.soundToggleBtn?.addEventListener("click",()=>{this.sound.init();const t=this.sound.toggleMute();this.soundToggleBtn.textContent=t?"🔊 Sound: ON":"🔇 Sound: OFF"}),document.querySelectorAll(".char-card").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget,i=n.getAttribute("data-char")||n.id.replace("card-","");this.selectCharacter(i)})}),document.getElementById("btn-char-back")?.addEventListener("click",()=>{this.sound.playWhoosh(.9),this.showTitleScreen()}),document.getElementById("btn-resume")?.addEventListener("click",()=>{this.togglePause(!1)}),document.getElementById("btn-pause-moves")?.addEventListener("click",()=>{this.controlsModal.classList.remove("hidden")}),document.getElementById("btn-quit-match")?.addEventListener("click",()=>{this.togglePause(!1),this.showTitleScreen(),this.onQuitMatchCallback?.()}),document.getElementById("btn-rematch")?.addEventListener("click",()=>{this.gameoverModal.classList.add("hidden"),this.selectedP1&&this.selectedP2&&this.onStartMatchCallback?.({mode:this.currentMode,p1Char:this.selectedP1,p2Char:this.selectedP2})}),document.getElementById("btn-char-select-again")?.addEventListener("click",()=>{this.gameoverModal.classList.add("hidden"),this.openCharSelect(this.currentMode)}),document.getElementById("btn-main-menu")?.addEventListener("click",()=>{this.gameoverModal.classList.add("hidden"),this.showTitleScreen(),this.onQuitMatchCallback?.()}),window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(this.settings.isSettingsOpen()){this.settings.closeSettings();return}if(!this.controlsModal.classList.contains("hidden")){this.controlsModal.classList.add("hidden");return}if(!this.hudLayer.classList.contains("hidden")&&this.gameoverModal.classList.contains("hidden")){const e=!this.pauseModal.classList.contains("hidden");this.togglePause(!e)}}})}showTitleScreen(){this.titleScreen.classList.add("active"),this.charSelectScreen.classList.remove("active"),this.hudLayer.classList.add("hidden"),this.pauseModal.classList.add("hidden"),this.controlsModal.classList.add("hidden"),this.gameoverModal.classList.add("hidden")}openCharSelect(t){this.currentMode=t,this.selectedP1=null,this.selectedP2=null,this.selectingPlayer=1,this.titleScreen.classList.remove("active"),this.charSelectScreen.classList.add("active"),this.hudLayer.classList.add("hidden"),t==="HORDE"?this.selectionStatus.textContent="SELECT FIGHTER FOR HORDE SURVIVAL":t==="PVP"?this.selectionStatus.textContent="PLAYER 1: SELECT FIGHTER":this.selectionStatus.textContent="SELECT YOUR FIGHTER"}selectCharacter(t){if(this.sound.playHitLight(),this.currentMode==="ARCADE"||this.currentMode==="TRAINING"||this.currentMode==="HORDE"){this.selectedP1=t;const n=["blaze","cypher","shadow","volt","jin"].filter(i=>i!==t);this.selectedP2=n[Math.floor(Math.random()*n.length)],this.startConfiguredMatch()}else this.currentMode==="PVP"&&(this.selectingPlayer===1?(this.selectedP1=t,this.selectingPlayer=2,this.selectionStatus.textContent="PLAYER 2: SELECT FIGHTER"):(this.selectedP2=t,this.startConfiguredMatch()))}startConfiguredMatch(){!this.selectedP1||!this.selectedP2||(this.charSelectScreen.classList.remove("active"),this.titleScreen.classList.remove("active"),this.hudLayer.classList.remove("hidden"),this.onStartMatchCallback?.({mode:this.currentMode,p1Char:this.selectedP1,p2Char:this.selectedP2}))}togglePause(t){t?(this.pauseModal.classList.remove("hidden"),this.onPauseStateChange?.(!0)):(this.pauseModal.classList.add("hidden"),this.onPauseStateChange?.(!1))}showMatchEnd(t,e){this.winnerText.textContent=`${t} WINS!`,this.winnerSub.textContent=e?"VICTORY ACHIEVED":"DEFEATED",this.gameoverModal.classList.remove("hidden")}}const Uo={masterVolume:80,bgmVolume:60,sfxVolume:85,isMuted:!1,showCombatButtons:!0,enableShake:!0,enableDust:!0,showFps:!1},No="tough_stickman_settings_v1";class cm{settings;sound;cameraCtrl;stage;settingsModal;combatControlsDock;fpsCounter;masterSlider;bgmSlider;sfxSlider;muteToggle;combatButtonsToggle;shakeToggle;dustToggle;fpsToggle;masterLabel;bgmLabel;sfxLabel;onPauseStateChange;constructor(t,e,n){this.sound=t,this.cameraCtrl=e,this.stage=n,this.settings=this.loadSettings(),this.settingsModal=document.getElementById("settings-modal"),this.combatControlsDock=document.getElementById("combat-controls"),this.fpsCounter=document.getElementById("fps-counter"),this.masterSlider=document.getElementById("setting-master-vol"),this.bgmSlider=document.getElementById("setting-bgm-vol"),this.sfxSlider=document.getElementById("setting-sfx-vol"),this.muteToggle=document.getElementById("setting-mute-toggle"),this.combatButtonsToggle=document.getElementById("setting-combat-buttons"),this.shakeToggle=document.getElementById("setting-shake-toggle"),this.dustToggle=document.getElementById("setting-dust-toggle"),this.fpsToggle=document.getElementById("setting-fps-toggle"),this.masterLabel=document.getElementById("label-master-vol"),this.bgmLabel=document.getElementById("label-bgm-vol"),this.sfxLabel=document.getElementById("label-sfx-vol"),this.initUI(),this.bindEvents(),this.applyAll()}registerPauseCallback(t){this.onPauseStateChange=t}loadSettings(){try{const t=localStorage.getItem(No);if(t)return{...Uo,...JSON.parse(t)}}catch(t){console.warn("Could not load settings from localStorage",t)}return{...Uo}}saveSettings(){try{localStorage.setItem(No,JSON.stringify(this.settings))}catch(t){console.warn("Could not save settings to localStorage",t)}}initUI(){this.masterSlider&&(this.masterSlider.value=this.settings.masterVolume.toString()),this.bgmSlider&&(this.bgmSlider.value=this.settings.bgmVolume.toString()),this.sfxSlider&&(this.sfxSlider.value=this.settings.sfxVolume.toString()),this.muteToggle&&(this.muteToggle.checked=this.settings.isMuted),this.combatButtonsToggle&&(this.combatButtonsToggle.checked=this.settings.showCombatButtons),this.shakeToggle&&(this.shakeToggle.checked=this.settings.enableShake),this.dustToggle&&(this.dustToggle.checked=this.settings.enableDust),this.fpsToggle&&(this.fpsToggle.checked=this.settings.showFps),this.updateLabels()}updateLabels(){this.masterLabel&&(this.masterLabel.textContent=`${this.settings.masterVolume}%`),this.bgmLabel&&(this.bgmLabel.textContent=`${this.settings.bgmVolume}%`),this.sfxLabel&&(this.sfxLabel.textContent=`${this.settings.sfxVolume}%`)}bindEvents(){this.masterSlider?.addEventListener("input",t=>{this.sound.init(),this.settings.masterVolume=parseInt(t.target.value,10),this.sound.setMasterVolume(this.settings.masterVolume/100),this.updateLabels(),this.saveSettings()}),this.bgmSlider?.addEventListener("input",t=>{this.sound.init(),this.settings.bgmVolume=parseInt(t.target.value,10),this.sound.setBgmVolume(this.settings.bgmVolume/100),this.updateLabels(),this.saveSettings()}),this.sfxSlider?.addEventListener("input",t=>{this.sound.init(),this.settings.sfxVolume=parseInt(t.target.value,10),this.sound.setSfxVolume(this.settings.sfxVolume/100),this.updateLabels(),this.saveSettings()}),this.muteToggle?.addEventListener("change",t=>{this.sound.init(),this.settings.isMuted=t.target.checked,this.sound.setMuted(this.settings.isMuted),this.saveSettings()}),this.combatButtonsToggle?.addEventListener("change",t=>{this.settings.showCombatButtons=t.target.checked,this.setCombatButtonsVisible(this.settings.showCombatButtons),this.saveSettings()}),this.shakeToggle?.addEventListener("change",t=>{this.settings.enableShake=t.target.checked,this.cameraCtrl.enableShake=this.settings.enableShake,this.saveSettings()}),this.dustToggle?.addEventListener("change",t=>{this.settings.enableDust=t.target.checked,this.stage.setDustVisible(this.settings.enableDust),this.saveSettings()}),this.fpsToggle?.addEventListener("change",t=>{this.settings.showFps=t.target.checked,this.fpsCounter&&(this.settings.showFps?this.fpsCounter.classList.remove("hidden"):this.fpsCounter.classList.add("hidden")),this.saveSettings()}),document.getElementById("btn-close-settings")?.addEventListener("click",()=>{this.closeSettings()}),document.getElementById("btn-toggle-controls-dock")?.addEventListener("click",()=>{this.settings.showCombatButtons=!this.settings.showCombatButtons,this.combatButtonsToggle&&(this.combatButtonsToggle.checked=this.settings.showCombatButtons),this.setCombatButtonsVisible(this.settings.showCombatButtons),this.saveSettings()})}applyAll(){this.sound.setMasterVolume(this.settings.masterVolume/100),this.sound.setBgmVolume(this.settings.bgmVolume/100),this.sound.setSfxVolume(this.settings.sfxVolume/100),this.sound.setMuted(this.settings.isMuted),this.cameraCtrl.enableShake=this.settings.enableShake,this.stage.setDustVisible(this.settings.enableDust),this.setCombatButtonsVisible(this.settings.showCombatButtons),this.fpsCounter&&(this.settings.showFps?this.fpsCounter.classList.remove("hidden"):this.fpsCounter.classList.add("hidden"))}setCombatButtonsVisible(t){this.combatControlsDock||(this.combatControlsDock=document.getElementById("combat-controls")),this.combatControlsDock&&(t?this.combatControlsDock.classList.remove("collapsed"):this.combatControlsDock.classList.add("collapsed"))}openSettings(){this.sound.init(),this.sound.playWhoosh(1.2),this.settingsModal.classList.remove("hidden"),this.onPauseStateChange?.(!0)}closeSettings(){this.sound.playWhoosh(.9),this.settingsModal.classList.add("hidden"),this.onPauseStateChange?.(!1)}isSettingsOpen(){return!this.settingsModal.classList.contains("hidden")}updateFps(t){this.fpsCounter&&this.settings.showFps&&(this.fpsCounter.textContent=`${Math.round(t)} FPS`)}}class lm{engine;settings;menu;constructor(){this.engine=new am,this.settings=new cm(this.engine.sound,this.engine.cameraCtrl,this.engine.stage),this.menu=new om(this.engine.sound,this.settings),this.engine.onFpsUpdate=t=>{this.settings.updateFps(t)},this.setupEventHandlers(),console.log("%c🥋 TOUGH // IMPACT - Stickman Phonk Edition Initialized 🥋","background: #00ddff; color: #000000; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;")}setupEventHandlers(){this.menu.registerCallbacks(t=>{this.engine.startMatch(t)},t=>{this.engine.isPaused=t},()=>{this.engine.quitMatch()}),this.settings.registerPauseCallback(t=>{this.engine.matchState==="PLAYING"&&(this.engine.isPaused=t)}),window.addEventListener("match-finished",t=>{const e=t,{winnerName:n,isP1Winner:i}=e.detail;this.menu.showMatchEnd(n,i)})}}window.addEventListener("DOMContentLoaded",()=>{new lm});
