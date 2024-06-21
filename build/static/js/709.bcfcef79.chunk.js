"use strict";(self.webpackChunkexample_graphiql_create_react_app=self.webpackChunkexample_graphiql_create_react_app||[]).push([[709],{757:function(e,n,t){t.d(n,{a:function(){return f},b:function(){return s},c:function(){return d},d:function(){return m},e:function(){return v},g:function(){return l}});var i=t(7593),r=t(2212),a=t(7250),u=Object.defineProperty,o=function(e,n){return u(e,"name",{value:n,configurable:!0})};function l(e,n){var t={schema:e,type:null,parentType:null,inputType:null,directiveDef:null,fieldDef:null,argDef:null,argDefs:null,objectFieldDefs:null};return(0,a.f)(n,(function(n){var r,a;switch(n.kind){case"Query":case"ShortQuery":t.type=e.getQueryType();break;case"Mutation":t.type=e.getMutationType();break;case"Subscription":t.type=e.getSubscriptionType();break;case"InlineFragment":case"FragmentDefinition":n.type&&(t.type=e.getType(n.type));break;case"Field":case"AliasedField":t.fieldDef=t.type&&n.name?p(e,t.parentType,n.name):null,t.type=null===(r=t.fieldDef)||void 0===r?void 0:r.type;break;case"SelectionSet":t.parentType=t.type?(0,i.xC)(t.type):null;break;case"Directive":t.directiveDef=n.name?e.getDirective(n.name):null;break;case"Arguments":var u=n.prevState?"Field"===n.prevState.kind?t.fieldDef:"Directive"===n.prevState.kind?t.directiveDef:"AliasedField"===n.prevState.kind?n.prevState.name&&p(e,t.parentType,n.prevState.name):null:null;t.argDefs=u?u.args:null;break;case"Argument":if(t.argDef=null,t.argDefs)for(var o=0;o<t.argDefs.length;o++)if(t.argDefs[o].name===n.name){t.argDef=t.argDefs[o];break}t.inputType=null===(a=t.argDef)||void 0===a?void 0:a.type;break;case"EnumValue":var l=t.inputType?(0,i.xC)(t.inputType):null;t.enumValue=l instanceof i.mR?c(l.getValues(),(function(e){return e.value===n.name})):null;break;case"ListValue":var f=t.inputType?(0,i.tf)(t.inputType):null;t.inputType=f instanceof i.p2?f.ofType:null;break;case"ObjectValue":var s=t.inputType?(0,i.xC)(t.inputType):null;t.objectFieldDefs=s instanceof i.sR?s.getFields():null;break;case"ObjectField":var d=n.name&&t.objectFieldDefs?t.objectFieldDefs[n.name]:null;t.inputType=null===d||void 0===d?void 0:d.type;break;case"NamedType":t.type=n.name?e.getType(n.name):null}})),t}function p(e,n,t){return t===r.S.name&&e.getQueryType()===n?r.S:t===r.T.name&&e.getQueryType()===n?r.T:t===r.a.name&&(0,i.Gv)(n)?r.a:n&&n.getFields?n.getFields()[t]:void 0}function c(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return e[t]}function f(e){return{kind:"Field",schema:e.schema,field:e.fieldDef,type:g(e.fieldDef)?null:e.parentType}}function s(e){return{kind:"Directive",schema:e.schema,directive:e.directiveDef}}function d(e){return e.directiveDef?{kind:"Argument",schema:e.schema,argument:e.argDef,directive:e.directiveDef}:{kind:"Argument",schema:e.schema,argument:e.argDef,field:e.fieldDef,type:g(e.fieldDef)?null:e.parentType}}function m(e){return{kind:"EnumValue",value:e.enumValue||void 0,type:e.inputType?(0,i.xC)(e.inputType):void 0}}function v(e,n){return{kind:"Type",schema:e.schema,type:n||e.type}}function g(e){return"__"===e.name.slice(0,2)}o(l,"getTypeInfo"),o(p,"getFieldDef"),o(c,"find"),o(f,"getFieldReference"),o(s,"getDirectiveReference"),o(d,"getArgumentReference"),o(m,"getEnumValueReference"),o(v,"getTypeReference"),o(g,"isMetaField")},7250:function(e,n,t){t.d(n,{f:function(){return i}});function i(e,n){for(var t=[],i=e;null===i||void 0===i?void 0:i.kind;)t.push(i),i=i.prevState;for(var r=t.length-1;r>=0;r--)n(t[r])}(0,Object.defineProperty)(i,"name",{value:"forEachState",configurable:!0})},7709:function(e,n,t){t.r(n);var i=t(8457),r=t(757),a=(t(2212),t(9867),t(2834),t(8544),t(7250),Object.defineProperty),u=function(e,n){return a(e,"name",{value:n,configurable:!0})};function o(e,n){var t=n.target||n.srcElement;if(t instanceof HTMLElement&&"SPAN"===(null===t||void 0===t?void 0:t.nodeName)){var i=t.getBoundingClientRect(),r={left:(i.left+i.right)/2,top:(i.top+i.bottom)/2};e.state.jump.cursor=r,e.state.jump.isHoldingModifier&&s(e)}}function l(e){e.state.jump.isHoldingModifier||!e.state.jump.cursor?e.state.jump.isHoldingModifier&&e.state.jump.marker&&d(e):e.state.jump.cursor=null}function p(e,n){if(!e.state.jump.isHoldingModifier&&f(n.key)){e.state.jump.isHoldingModifier=!0,e.state.jump.cursor&&s(e);var t=u((function(u){u.code===n.code&&(e.state.jump.isHoldingModifier=!1,e.state.jump.marker&&d(e),i.C.off(document,"keyup",t),i.C.off(document,"click",r),e.off("mousedown",a))}),"onKeyUp"),r=u((function(n){var t=e.state.jump,i=t.destination,r=t.options;i&&r.onClick(i,n)}),"onClick"),a=u((function(n,t){e.state.jump.destination&&(t.codemirrorIgnore=!0)}),"onMouseDown");i.C.on(document,"keyup",t),i.C.on(document,"click",r),e.on("mousedown",a)}}i.C.defineOption("jump",!1,(function(e,n,t){if(t&&t!==i.C.Init){var r=e.state.jump.onMouseOver;i.C.off(e.getWrapperElement(),"mouseover",r);var a=e.state.jump.onMouseOut;i.C.off(e.getWrapperElement(),"mouseout",a),i.C.off(document,"keydown",e.state.jump.onKeyDown),delete e.state.jump}if(n){var u=e.state.jump={options:n,onMouseOver:o.bind(null,e),onMouseOut:l.bind(null,e),onKeyDown:p.bind(null,e)};i.C.on(e.getWrapperElement(),"mouseover",u.onMouseOver),i.C.on(e.getWrapperElement(),"mouseout",u.onMouseOut),i.C.on(document,"keydown",u.onKeyDown)}})),u(o,"onMouseOver"),u(l,"onMouseOut"),u(p,"onKeyDown");var c="undefined"!==typeof navigator&&navigator&&navigator.appVersion.includes("Mac");function f(e){return e===(c?"Meta":"Control")}function s(e){if(!e.state.jump.marker){var n=e.state.jump,t=n.cursor,i=n.options,r=e.coordsChar(t),a=e.getTokenAt(r,!0),u=i.getDestination||e.getHelper(r,"jump");if(u){var o=u(a,i,e);if(o){var l=e.markText({line:r.line,ch:a.start},{line:r.line,ch:a.end},{className:"CodeMirror-jump-token"});e.state.jump.marker=l,e.state.jump.destination=o}}}}function d(e){var n=e.state.jump.marker;e.state.jump.marker=null,e.state.jump.destination=null,n.clear()}u(f,"isJumpModifier"),u(s,"enableJumpMode"),u(d,"disableJumpMode"),i.C.registerHelper("jump","graphql",(function(e,n){if(n.schema&&n.onClick&&e.state){var t=e.state,i=t.kind,a=t.step,u=(0,r.g)(n.schema,t);return"Field"===i&&0===a&&u.fieldDef||"AliasedField"===i&&2===a&&u.fieldDef?(0,r.a)(u):"Directive"===i&&1===a&&u.directiveDef?(0,r.b)(u):"Argument"===i&&0===a&&u.argDef?(0,r.c)(u):"EnumValue"===i&&u.enumValue?(0,r.d)(u):"NamedType"===i&&u.type?(0,r.e)(u):void 0}}))}}]);
//# sourceMappingURL=709.bcfcef79.chunk.js.map