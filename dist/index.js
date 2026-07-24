"use strict";var b=function(s,i){return function(){try{return i||s((i={exports:{}}).exports,i),i.exports}catch(v){throw (i=0, v)}};};var E=b(function(U,R){
var j=require('@stdlib/constants-float64-max/dist'),_=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/math-base-special-abs2/dist'),p=require('@stdlib/math-base-special-sqrt/dist'),k=require('@stdlib/strided-base-reinterpret-complex128/dist'),A=14916681462400413e-170,O=1997919072202235e131,d=44989137945431964e145,m=11113793747425387e-178;function B(s,i,v,h){var f,t,x,u,r,a,q,c,n,e,o,z,y;if(s<=0)return 0;for(x=k(i,0),z=v*2,o=h*2,f=!0,t=0,u=0,r=0,a=0,n=1,y=0;y<s;y++)e=_(x[o]),e>O?(u+=l(e*m),f=!1):e<A?f&&(a+=l(e*d)):r+=e*e,e=_(x[o+1]),e>O?(u+=l(e*m),f=!1):e<A?f&&(a+=l(e*d)):r+=e*e,o+=z;return u>0?((r>0||r>j||r!==r)&&(u+=r*m*m),n=1/m,t=u):a>0?r>0||r>j||r!==r?(r=p(r),a=p(a)/d,a>r?(c=r,q=a):(c=a,q=r),n=1,t=q*q*(1+l(c/q))):(n=1/d,t=a):(n=1,t=r),p(t)*n}R.exports=B
});var F=b(function(V,w){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=E();function G(s,i,v){return D(s,i,v,C(s,v))}w.exports=G
});var T=b(function(W,M){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=F(),I=E();H(L,"ndarray",I);M.exports=L
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=T(),g,X=K(J(__dirname,"./native.js"));P(X)?g=Q:g=X;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
