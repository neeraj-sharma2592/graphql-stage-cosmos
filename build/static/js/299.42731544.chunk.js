"use strict";(self.webpackChunkexample_graphiql_create_react_app=self.webpackChunkexample_graphiql_create_react_app||[]).push([[299],{2332:function(e,t,n){n.d(t,{i:function(){return a}});function a(e,t){var n,a,r=e.levels,u=e.indentLevel;return((r&&0!==r.length?r.at(-1)-((null===(n=this.electricInput)||void 0===n?void 0:n.test(t))?1:0):u)||0)*((null===(a=this.config)||void 0===a?void 0:a.indentUnit)||0)}(0,Object.defineProperty)(a,"name",{value:"indent",configurable:!0})},9299:function(e,t,n){n.r(t);var a=n(8457),r=n(2212),u=n(2332),l=(n(9867),n(2834),n(8544),Object.defineProperty);a.C.defineMode("graphql-variables",(function(e){var t=(0,r.o)({eatWhitespace:function(e){return e.eatSpace()},lexRules:i,parseRules:c,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:u.i,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}}));var i={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},c={Document:[(0,r.p)("{"),(0,r.l)("Variable",(0,r.b)((0,r.p)(","))),(0,r.p)("}")],Variable:[o("variable"),(0,r.p)(":"),"Value"],Value:function(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[(0,r.t)("Number","number")],StringValue:[(0,r.t)("String","string")],BooleanValue:[(0,r.t)("Keyword","builtin")],NullValue:[(0,r.t)("Keyword","keyword")],ListValue:[(0,r.p)("["),(0,r.l)("Value",(0,r.b)((0,r.p)(","))),(0,r.p)("]")],ObjectValue:[(0,r.p)("{"),(0,r.l)("ObjectField",(0,r.b)((0,r.p)(","))),(0,r.p)("}")],ObjectField:[o("attribute"),(0,r.p)(":"),"Value"]};function o(e){return{style:e,match:function(e){return"String"===e.kind},update:function(e,t){e.name=t.value.slice(1,-1)}}}l(o,"name",{value:"namedKey",configurable:!0})}}]);
//# sourceMappingURL=299.42731544.chunk.js.map