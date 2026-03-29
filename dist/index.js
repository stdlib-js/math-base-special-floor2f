"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=n(function(g,v){
var o=require('@stdlib/math-base-assert-is-nanf/dist'),q=require('@stdlib/math-base-assert-is-infinitef/dist'),s=require('@stdlib/math-base-special-powf/dist'),l=require('@stdlib/math-base-special-floorf/dist'),N=require('@stdlib/math-base-special-ceilf/dist'),c=require('@stdlib/math-base-special-log2/dist'),f=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/constants-float32-max-base2-exponent/dist'),E=require('@stdlib/constants-float32-min-base2-exponent-subnormal/dist'),O=require('@stdlib/constants-float32-ninf/dist'),a=f(0),I=f(2),u=f(1);function M(r){var e,i;return r=f(r),o(r)||q(r)||r===a?r:(r<a?(r=-r,e=-u):e=u,i=f(c(r)),i===E?f(e*r):(e===u?i=l(i):i=N(i),i>p?O:f(e*s(I,i))))}v.exports=M
});var X=t();module.exports=X;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
