"use strict";var b=function(s,i){return function(){return i||s((i={exports:{}}).exports,i),i.exports}};var E=b(function(U,R){
var j=require('@stdlib/constants-float64-max/dist'),_=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-special-abs2/dist'),p=require('@stdlib/math-base-special-sqrt/dist'),k=require('@stdlib/strided-base-reinterpret-complex128/dist'),A=14916681462400413e-170,O=1997919072202235e131,d=44989137945431964e145,l=11113793747425387e-178;function B(s,i,m,h){var n,v,x,t,r,a,f,c,u,e,o,z,y;if(s<=0)return 0;for(x=k(i,0),z=m*2,o=h*2,n=!0,v=0,t=0,r=0,a=0,u=1,y=0;y<s;y++)e=_(x[o]),e>O?(t+=q(e*l),n=!1):e<A?n&&(a+=q(e*d)):r+=e*e,e=_(x[o+1]),e>O?(t+=q(e*l),n=!1):e<A?n&&(a+=q(e*d)):r+=e*e,o+=z;return t>0?((r>0||r>j||r!==r)&&(t+=r*l*l),u=1/l,v=t):a>0?r>0||r>j||r!==r?(r=p(r),a=p(a)/d,a>r?(c=r,f=a):(c=a,f=r),u=1,v=f*f*(1+q(c/f))):(u=1/d,v=a):(u=1,v=r),p(v)*u}R.exports=B
});var F=b(function(V,w){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=E();function G(s,i,m){return D(s,i,m,C(s,m))}w.exports=G
});var T=b(function(W,M){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=F(),I=E();H(L,"ndarray",I);M.exports=L
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=T(),g,X=K(J(__dirname,"./native.js"));P(X)?g=Q:g=X;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
