"use strict";(self.webpackChunkexample_graphiql_create_react_app=self.webpackChunkexample_graphiql_create_react_app||[]).push([[936],{3936:function(e,r,n){n.r(r),n.d(r,{b:function(){return f}});var t=n(8457),i=Object.defineProperty,o=function(e,r){return i(e,"name",{value:r,configurable:!0})};function a(e,r){return r.forEach((function(r){r&&"string"!==typeof r&&!Array.isArray(r)&&Object.keys(r).forEach((function(n){if("default"!==n&&!(n in e)){var t=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return r[n]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}o(a,"_mergeNamespaces");var l={exports:{}};!function(e){function r(r){return function(n,t){var i=t.line,a=n.getLine(i);function l(r){for(var o,l=t.ch,f=0;;){var u=l<=0?-1:a.lastIndexOf(r[0],l-1);if(-1!=u){if(1==f&&u<t.ch)break;if(o=n.getTokenTypeAt(e.Pos(i,u+1)),!/^(comment|string)/.test(o))return{ch:u+1,tokenType:o,pair:r};l=u-1}else{if(1==f)break;f=1,l=a.length}}}function f(r){var t,o,a=1,l=n.lastLine(),f=r.ch;e:for(var u=i;u<=l;++u)for(var s=n.getLine(u),c=u==i?f:0;;){var p=s.indexOf(r.pair[0],c),g=s.indexOf(r.pair[1],c);if(p<0&&(p=s.length),g<0&&(g=s.length),(c=Math.min(p,g))==s.length)break;if(n.getTokenTypeAt(e.Pos(u,c+1))==r.tokenType)if(c==p)++a;else if(! --a){t=u,o=c;break e}++c}return null==t||i==t?null:{from:e.Pos(i,f),to:e.Pos(t,o)}}o(l,"findOpening"),o(f,"findRange");for(var u=[],s=0;s<r.length;s++){var c=l(r[s]);c&&u.push(c)}for(u.sort((function(e,r){return e.ch-r.ch})),s=0;s<u.length;s++){var p=f(u[s]);if(p)return p}return null}}o(r,"bracketFolding"),e.registerHelper("fold","brace",r([["{","}"],["[","]"]])),e.registerHelper("fold","brace-paren",r([["{","}"],["[","]"],["(",")"]])),e.registerHelper("fold","import",(function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null;var t=r.getTokenAt(e.Pos(n,1));if(/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"keyword"!=t.type||"import"!=t.string)return null;for(var i=n,o=Math.min(r.lastLine(),n+10);i<=o;++i){var a=r.getLine(i).indexOf(";");if(-1!=a)return{startCh:t.end,end:e.Pos(i,a)}}}o(t,"hasImport");var i,a=n.line,l=t(a);if(!l||t(a-1)||(i=t(a-2))&&i.end.line==a-1)return null;for(var f=l.end;;){var u=t(f.line+1);if(null==u)break;f=u.end}return{from:r.clipPos(e.Pos(a,l.startCh+1)),to:f}})),e.registerHelper("fold","include",(function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null;var t=r.getTokenAt(e.Pos(n,1));return/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"meta"==t.type&&"#include"==t.string.slice(0,8)?t.start+8:void 0}o(t,"hasInclude");var i=n.line,a=t(i);if(null==a||null!=t(i-1))return null;for(var l=i;null!=t(l+1);)++l;return{from:e.Pos(i,a+1),to:r.clipPos(e.Pos(l))}}))}(t.a.exports);var f=a({__proto__:null,default:l.exports},[l.exports])}}]);
//# sourceMappingURL=936.750419c9.chunk.js.map