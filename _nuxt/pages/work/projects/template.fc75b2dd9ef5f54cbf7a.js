webpackJsonp([3],{"/iyj":function(e,t,n){"use strict";t.a={props:{fullWidth:{type:Boolean,default:!1},relativeElementSelector:{type:String,required:!0},className:{type:String,required:!1},z:{type:Number,required:!1},offset:{type:Object,default:function(){return{top:80,bottom:0}}}},computed:{placeholder:function(){return this.$refs.jsPlaceholder},actual:function(){return this.$refs.jsActual},classObject:function(){return{"l-affix--full-width":this.fullWidth}}},methods:{setPlaceholderHeight:function(){this.$refs.jsPlaceholder.style.visibility="hidden",this.$refs.jsActual.style.visibility="visible"},removePlaceholderHeight:function(){this.$refs.jsPlaceholder.style.visibility="visible",this.$refs.jsActual.style.visibility="hidden"},affixTopHandler:function(){this.removePlaceholderHeight()},affixBottomHandler:function(){this.setPlaceholderHeight()},affixHandler:function(){this.setPlaceholderHeight()}},mounted:function(){this.removePlaceholderHeight()}}},"6STP":function(e,t){e.exports=function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}},"6Xxn":function(e,t,n){"use strict";function a(e){n("mLsj")}var r=n("7xVE"),i=n("Xkem"),o=n("VU/8"),s=a,l=o(r.a,i.a,!1,s,"data-v-73ad3fb6",null);t.a=l.exports},"70Rd":function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(t)}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function a(e,t){var n=e&&e.exec(t);return n&&0===n.index}function r(e){return C.test(e)}function i(e){var t,n,a,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",n=O.exec(o))return x(n[1])?n[1]:"no-highlight";for(o=o.split(/\s+/),t=0,a=o.length;t<a;t++)if(i=o[t],r(i)||x(i))return i}function o(e){var t,n={},a=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return a.forEach(function(e){for(t in e)n[t]=e[t]}),n}function s(e){var t=[];return function e(a,r){for(var i=a.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:r,node:i}),r=e(i,r),n(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:i}));return r}(e,0),t}function l(e,a,r){function i(){return e.length&&a.length?e[0].offset!==a[0].offset?e[0].offset<a[0].offset?e:a:"start"===a[0].event?e:a:e.length?e:a}function o(e){function a(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}d+="<"+n(e)+y.map.call(e.attributes,a).join("")+">"}function s(e){d+="</"+n(e)+">"}function l(e){("start"===e.event?o:s)(e.node)}for(var c=0,d="",u=[];e.length||a.length;){var g=i();if(d+=t(r.substring(c,g[0].offset)),c=g[0].offset,g===e){u.reverse().forEach(s);do{l(g.splice(0,1)[0]),g=i()}while(g===e&&g.length&&g[0].offset===c);u.reverse().forEach(o)}else"start"===g[0].event?u.push(g[0].node):u.pop(),l(g.splice(0,1)[0])}return d+t(r.substr(c))}function c(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return o(e,{variants:null},t)})),e.cached_variants||e.endsWithParent&&[o(e)]||[e]}function d(e){function t(e){return e&&e.source||e}function n(n,a){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}function a(r,i){if(!r.compiled){if(r.compiled=!0,r.keywords=r.keywords||r.beginKeywords,r.keywords){var o={},s=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");o[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof r.keywords?s("keyword",r.keywords):w(r.keywords).forEach(function(e){s(e,r.keywords[e])}),r.keywords=o}r.lexemesRe=n(r.lexemes||/\w+/,!0),i&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=n(r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=n(r.end)),r.terminator_end=t(r.end)||"",r.endsWithParent&&i.terminator_end&&(r.terminator_end+=(r.end?"|":"")+i.terminator_end)),r.illegal&&(r.illegalRe=n(r.illegal)),null==r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=Array.prototype.concat.apply([],r.contains.map(function(e){return c("self"===e?r:e)})),r.contains.forEach(function(e){a(e,r)}),r.starts&&a(r.starts,i);var l=r.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([r.terminator_end,r.illegal]).map(t).filter(Boolean);r.terminators=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}a(e)}function u(e,n,r,i){function o(e,t){var n,r;for(n=0,r=t.contains.length;n<r;n++)if(a(t.contains[n].beginRe,e))return t.contains[n]}function s(e,t){if(a(e.endRe,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return s(e.parent,t)}function l(e,t){return!r&&a(t.illegalRe,e)}function c(e,t){var n=v.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function f(e,t,n,a){var r=a?"":k.classPrefix,i='<span class="'+r,o=n?"":R;return(i+=e+'">')+t+o}function m(){var e,n,a,r;if(!y.keywords)return t(C);for(r="",n=0,y.lexemesRe.lastIndex=0,a=y.lexemesRe.exec(C);a;)r+=t(C.substring(n,a.index)),e=c(y,a),e?(O+=e[1],r+=f(e[0],t(a[0]))):r+=t(a[0]),n=y.lexemesRe.lastIndex,a=y.lexemesRe.exec(C);return r+t(C.substr(n))}function p(){var e="string"==typeof y.subLanguage;if(e&&!N[y.subLanguage])return t(C);var n=e?u(y.subLanguage,C,!0,w[y.subLanguage]):g(C,y.subLanguage.length?y.subLanguage:void 0);return y.relevance>0&&(O+=n.relevance),e&&(w[y.subLanguage]=n.top),f(n.language,n.value,!1,!0)}function b(){j+=null!=y.subLanguage?p():m(),C=""}function h(e){j+=e.className?f(e.className,"",!0):"",y=Object.create(e,{parent:{value:y}})}function _(e,t){if(C+=e,null==t)return b(),0;var n=o(t,y);if(n)return n.skip?C+=t:(n.excludeBegin&&(C+=t),b(),n.returnBegin||n.excludeBegin||(C=t)),h(n,t),n.returnBegin?0:t.length;var a=s(y,t);if(a){var r=y;r.skip?C+=t:(r.returnEnd||r.excludeEnd||(C+=t),b(),r.excludeEnd&&(C=t));do{y.className&&(j+=R),y.skip||(O+=y.relevance),y=y.parent}while(y!==a.parent);return a.starts&&h(a.starts,""),r.returnEnd?0:t.length}if(l(t,y))throw new Error('Illegal lexeme "'+t+'" for mode "'+(y.className||"<unnamed>")+'"');return C+=t,t.length||1}var v=x(e);if(!v)throw new Error('Unknown language: "'+e+'"');d(v);var E,y=i||v,w={},j="";for(E=y;E!==v;E=E.parent)E.className&&(j=f(E.className,"",!0)+j);var C="",O=0;try{for(var M,S,A=0;;){if(y.terminators.lastIndex=A,!(M=y.terminators.exec(n)))break;S=_(n.substring(A,M.index),M[0]),A=M.index+S}for(_(n.substr(A)),E=y;E.parent;E=E.parent)E.className&&(j+=R);return{relevance:O,value:j,language:e,top:y}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:t(n)};throw e}}function g(e,n){n=n||k.languages||w(N);var a={relevance:0,value:t(e)},r=a;return n.filter(x).forEach(function(t){var n=u(t,e,!1);n.language=t,n.relevance>r.relevance&&(r=n),n.relevance>a.relevance&&(r=a,a=n)}),r.language&&(a.second_best=r),a}function f(e){return k.tabReplace||k.useBR?e.replace(M,function(e,t){return k.useBR&&"\n"===e?"<br>":k.tabReplace?t.replace(/\t/g,k.tabReplace):""}):e}function m(e,t,n){var a=t?j[t]:n,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(a)&&r.push(a),r.join(" ").trim()}function p(e){var t,n,a,o,c,d=i(e);r(d)||(k.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,c=t.textContent,a=d?u(d,c,!0):g(c),n=s(t),n.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=a.value,a.value=l(n,s(o),c)),a.value=f(a.value),e.innerHTML=a.value,e.className=m(e.className,d,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function b(e){k=o(k,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");y.forEach.call(e,p)}}function _(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function v(t,n){var a=N[t]=n(e);a.aliases&&a.aliases.forEach(function(e){j[e]=t})}function E(){return w(N)}function x(e){return e=(e||"").toLowerCase(),N[e]||N[j[e]]}var y=[],w=Object.keys,N={},j={},C=/^(no-?highlight|plain|text)$/i,O=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,R="</span>",k={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=u,e.highlightAuto=g,e.fixMarkup=f,e.highlightBlock=p,e.configure=b,e.initHighlighting=h,e.initHighlightingOnLoad=_,e.registerLanguage=v,e.listLanguages=E,e.getLanguage=x,e.inherit=o,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,a){var r=e.inherit({className:"comment",begin:t,end:n,contains:[]},a||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},"7xVE":function(e,t,n){"use strict";var a=n("u19a");t.a={props:{testimonials:{type:Array,required:!0}},methods:{detectContrast:function(e){return Object(a.a)(e)}}}},"8G7y":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"",""])},Dt9y:function(e,t,n){var a=n("qiy3");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("8c573a78",a,!0)},F1Ta:function(e,t,n){"use strict";function a(e){n("VEjj")}var r=n("/iyj"),i=n("mjLw"),o=n("VU/8"),s=a,l=o(r.a,i.a,!1,s,"data-v-63ecf022",null);t.a=l.exports},GdJY:function(e,t){e.exports=function(e){var t={literal:"true false null"},n=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:n,keywords:t},r={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(a,{begin:/:/})],illegal:"\\S"},i={begin:"\\[",end:"\\]",contains:[e.inherit(a)],illegal:"\\S"};return n.splice(n.length,0,r,i),{contains:n,keywords:t,illegal:"\\S"}}},IZDm:function(e,t){e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]};r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,a,e.REGEXP_MODE];var o=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:o}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},THnY:function(e,t,n){"use strict";function a(e){n("Dt9y")}var r=n("VH1Q"),i=n("zHUE"),o=n("VU/8"),s=a,l=o(r.a,i.a,!1,s,null,null);t.a=l.exports},VEjj:function(e,t,n){var a=n("lEWA");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("18bf5845",a,!0)},VH1Q:function(e,t,n){"use strict";var a=n("sxGK"),r=n.n(a),i=n("F1Ta");t.a={components:{lAffix:i.a},data:function(){return{content:"loading code",lineCount:0}},props:{languages:{type:Array,default:function(){return["html","scss","css","javascript","json"]}},code:{required:!1},filename:{type:String,required:!1}},computed:{preComputedCode:function(){return r.a.highlightAuto(this.code,this.languages).value}},methods:{getLineCount:function(e){return e.split(/\r\n|\r|\n/).length},removeExtraIndent:function(e){var t=e.split("\n");""===t[0]&&t.shift();var n,a=null!==(n=/^[\s\t]+/.exec(t[0]))?n[0]:null;return a&&(t=t.map(function(e){return e=e.replace(a,""),e.replace(/\t/g,"    ")}),e=t.join("\n").trim()),e},setContentFromSlot:function(){var e,t=this;this.$slots.default.forEach(function(n){if("pre"===n.tag){var a=n.elm.innerHTML;e=t.removeExtraIndent(a)}else e=t.$refs.slotWrapper.innerHTML});var n=e.toString();return r.a.highlightAuto(n,this.languages).value}},mounted:function(){this.code?this.content=this.preComputedCode:this.$slots.default.length>0&&(this.content=this.setContentFromSlot()),this.lineCount=this.getLineCount(this.content)}}},XHeD:function(e,t,n){"use strict";var a=n("6Xxn"),r=n("THnY");t.a={components:{cTestimonials:a.a,cCode:r.a},data:function(){return{testimonials:[{name:"Dejan Ulcej",company:"trivago",role:"Product Designer",character:"characters/character-07.svg",color:"#2071BA",quote:"Rerum voluptatem minima distinctio. Fugit odio qui repudiandae architecto omnis adipisci. Quo fuga aut nostrum. Reiciendis nihil vero praesentium non. Perferendis cupiditate impedit ipsum tenetur."},{name:"Dan Ardenleneu",company:"trivago",role:"Product Designer",character:"characters/character-07.svg",color:"#2071BA",quote:"Hic mollitia temporibus iure nemo voluptatem. Eveniet non iusto cupiditate odio. Perferendis corrupti quia saepe. Ex aperiam neque sunt reprehenderit numquam voluptatum non accusantium."},{name:"Someone Else",company:"trivago",role:"Product Designer",character:"characters/character-07.svg",color:"#2071BA",quote:"Eos ut sit minima. Repellat dolore tempora dolore veniam fugit veniam. Sit nam voluptatibus quia quod."}]}},computed:{codeData:function(){return n("xIjq")}}}},Xkem:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-testimonials"},[n("l-grid",{attrs:{list:""}},e._l(e.testimonials,function(t){return n("li",{key:t.id,staticClass:"_entry l-grid__cell"},[n("l-grid",[n("div",{staticClass:"_image-cell l-grid__cell u-1/5"},[n("div",{staticClass:"_image-wrapper",style:"background-color:"+t.color},[t.character?n("c-image",{attrs:{altText:"Picture of a minimal, illustated person",fit:"cover",imageSrc:t.character}}):e._e()],1)]),n("div",{staticClass:"_details-wrapper  l-grid__cell u-2/5@mobile u-1/5@tablet"},[t.color?n("span",{staticClass:"o-text _name",class:"c-testimonials__name--"+e.detectContrast(t.color),style:"background-color:"+t.color},[e._v("\n            "+e._s(t.name)+"\n          ")]):n("span",{staticClass:"o-text _name"},[e._v("\n            "+e._s(t.name)+"\n          ")]),n("p",{staticClass:"o-text _role"},[e._v(e._s(t.role))]),n("p",{staticClass:"o-text _company"},[e._v("@"+e._s(t.company))])]),n("div",{staticClass:"l-grid__cell u-2/5@mobile u-3/5@tablet"},[n("p",{staticClass:"o-text o-text--lg _quote"},[n("span",{staticClass:"_quote-mark open"},[e._v("“")]),e._v("\n            "+e._s(t.quote)+"\n            "),n("span",{staticClass:"_quote-mark close"},[e._v("”")])])])])],1)}))],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},"Yz/x":function(e,t,n){"use strict";function a(e){n("fWcc")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("XHeD"),i=n("mQjd"),o=n("VU/8"),s=a,l=o(r.a,i.a,!1,s,null,null);t.default=l.exports},"bV+X":function(e,t){e.exports=function(e){var t={className:"variable",begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"},n={className:"number",begin:"#[0-9A-Fa-f]+"};e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE;return{case_insensitive:!0,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:"\\#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{className:"selector-tag",begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",relevance:0},{begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},t,{className:"attribute",begin:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",illegal:"[^\\s]"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:":",end:";",contains:[t,n,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"meta",begin:"!important"}]},{begin:"@",end:"[{;]",keywords:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",contains:[t,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,n,e.CSS_NUMBER_MODE,{begin:"\\s[A-Za-z0-9_.-]+",relevance:0}]}]}}},fWcc:function(e,t,n){var a=n("8G7y");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("cd9f6dfe",a,!0)},"i/dG":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".c-testimonials[data-v-73ad3fb6]{text-align:left}._image-cell[data-v-73ad3fb6]{position:relative}._name[data-v-73ad3fb6]{color:#15110e;font-weight:600}._heading[data-v-73ad3fb6]{margin-bottom:2rem}._image-wrapper[data-v-73ad3fb6]{width:4rem;height:4rem;border-radius:100%;overflow:hidden}@media (max-width:33.74em){._image-wrapper[data-v-73ad3fb6]{margin-bottom:1rem}}@media (min-width:33.75em){._image-wrapper[data-v-73ad3fb6]{position:absolute;top:0;left:0}}@media (min-width:46.25em){._image-wrapper[data-v-73ad3fb6]{width:6rem;height:6rem}}@media (max-width:46.24em){._details-wrapper[data-v-73ad3fb6]{margin-bottom:1rem}}._quote[data-v-73ad3fb6]{font-style:italic;display:inline;position:relative;z-index:1}._quote-mark[data-v-73ad3fb6]{font-family:serif;font-size:9rem;line-height:0;display:inline-block;color:#15110e;position:absolute;z-index:-1;opacity:.1}._quote-mark.open[data-v-73ad3fb6]{top:2rem;left:-2rem}@media (min-width:33.75em){._quote-mark.open[data-v-73ad3fb6]{left:-3rem}}._quote-mark.close[data-v-73ad3fb6]{bottom:-1.5rem;right:-3rem}._entry[data-v-73ad3fb6]{margin-bottom:2rem}@media (min-width:33.75em){._entry[data-v-73ad3fb6]{margin-bottom:4rem}}@media (min-width:46.25em){._entry[data-v-73ad3fb6]{margin-bottom:6rem}}._company[data-v-73ad3fb6],._role[data-v-73ad3fb6]{color:#5b5756}.c-testimonials__name--light[data-v-73ad3fb6]{color:#fcfcfc}.c-testimonials__name--dark[data-v-73ad3fb6]{color:#15110e}",""])},izbv:function(e,t){e.exports=function(e){var t={begin:/[A-Z\_\.\-]+\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{begin:"@",end:"[{;]",illegal:/:/,contains:[{className:"keyword",begin:/\w+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,t]}]}}},lEWA:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".l-affix[data-v-63ecf022]{position:relative}.l-affix--full-width[data-v-63ecf022]{width:100%}.l-affix__actual[data-v-63ecf022]{height:0;overflow:visible;position:relative}.l-affix__placeholder[data-v-63ecf022]{position:relative;display:block}",""])},mLsj:function(e,t,n){var a=n("i/dG");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("1359d8ed",a,!0)},mQjd:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"o-heading o-heading--alpha"},[e._v("Ratings Slideout XX")]),n("l-wrapper",[n("c-code",{attrs:{filename:"projects.json",code:e.codeData,langauges:["js"]}}),n("c-code",{attrs:{filename:"projects.json",code:e.codeData,langauges:["js"]}}),n("c-code",{attrs:{filename:"test.json",languages:["js"]}},[n("pre",[e._v("      function $initHighlight(block, cls) {\n        try {\n          if (cls.search(/\\bno\\-highlight\\b/) != -1)\n            return process(block, true, 0x0F) +\n                  ` class=\"${cls}\"`;\n        } catch (e) {\n          /* handle exception */\n        }\n        for (var i = 0 / 2; i < classes.length; i++) {\n          if (checkCondition(classes[i]) === undefined)\n            console.log('undefined');\n        }\n      }\n\n      export  $initHighlight;\n      ")])]),n("c-testimonials",{attrs:{testimonials:e.testimonials}})],1)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},mjLw:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"l-affix"},[n("div",{ref:"jsActual",staticClass:"l-affix__actual"},[n("f-no-ssr",[n("affix",{class:[e.className,e.classObject],style:"z-index:"+e.z,attrs:{offset:e.offset,"relative-element-selector":e.relativeElementSelector},on:{affixtop:e.affixTopHandler,affixbottom:e.affixBottomHandler,affix:e.affixHandler}},[e._t("contents")],2)],1)],1),n("div",{ref:"jsPlaceholder",staticClass:"l-affix__placeholder"},[e._t("contents")],2)])},r=[],i={render:a,staticRenderFns:r};t.a=i},qiy3:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".c-code{text-align:left;margin-bottom:2rem;color:#fcfcfc}@media (max-width:46.24em){.c-code{margin-left:-1.5rem;margin-right:-1.5rem}}.c-code__baselines{opacity:.5}.c-code__slot-wrapper{display:none}.c-code__header-reference{padding-left:3rem;padding-right:1rem;position:relative}.c-code__header{width:100%;position:relative;color:#15110e}.c-code__affix.affix{padding-top:.5rem;background-color:#fcfcfc}.c-code__reference-wrapper{overflow-y:scroll;padding-bottom:1rem;position:relative}.c-code_code-area{background-color:#211c1a;position:relative;padding-left:3rem}.c-code__code-block{padding-top:1rem;color:#fcfcfc;overflow-x:scroll;position:relative}.c-code__gutter,.c-code__header-gutter{width:3rem;text-align:right;position:absolute;padding-right:1rem;top:0;left:0}.c-code__gutter{padding-top:1rem}.c-code__number{color:#b7b6b5}.c-code__icon{height:1em;width:auto}.hljs-keyword,.hljs-link,.hljs-literal,.hljs-name,.hljs-symbol{color:#569cd6}.hljs-link{text-decoration:underline}.hljs-built_in,.hljs-type{color:#4ec9b0}.hljs-class,.hljs-number{color:#b8d7a3}.hljs-meta-string,.hljs-string{color:#d69d85}.hljs-regexp,.hljs-template-tag{color:#9a5334}.hljs-formula,.hljs-function,.hljs-params,.hljs-subst,.hljs-title{color:#dcdcdc}.hljs-comment,.hljs-quote{color:#57a64a}.hljs-doctag{color:#608b4e}.hljs-meta,.hljs-meta-keyword,.hljs-tag{color:#9b9b9b}.hljs-template-variable,.hljs-variable{color:#bd63c5}.hljs-attr,.hljs-attribute,.hljs-builtin-name{color:#9cdcfe}.hljs-section{color:gold}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-bullet,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-selector-tag{color:#d7ba7d}.hljs-addition{background-color:#144212}.hljs-addition,.hljs-deletion{display:inline-block;width:100%}.hljs-deletion{background-color:#600}",""])},sxGK:function(e,t,n){var a=n("70Rd");a.registerLanguage("xml",n("6STP")),a.registerLanguage("css",n("izbv")),a.registerLanguage("javascript",n("IZDm")),a.registerLanguage("json",n("GdJY")),a.registerLanguage("scss",n("bV+X")),e.exports=a},xIjq:function(e,t){e.exports="import dataProjects from '~/data/projects.json';\nimport detectContrast from '~/utils/detectContrast.js';\n\nvar getProjectsArray = function getProjectsArray() {\n  var projectGroups = dataProjects.projectGroups;\n  var projectsArray = [];\n  for (var i = 0; i < projectGroups.length; i++) {\n    var projects = projectGroups[i].projects;\n    for (var ix = 0; ix < projects.length; ix++) {\n      /**\n       * Add the new properties .group and .groupLink to each project\n       * from their parent projectGroup\n       */\n      projects[ix].key = ix;\n      projects[ix].group = projectGroups[i].name;\n      projects[ix].groupLink = projectGroups[i].link;\n      /** Set contrasting color */\n      projects[ix].contrastingColor = detectContrast(projects[ix].color);\n      /**\n       * Push to projectsArray (local variable)\n       */\n      // projects[-1] = 5\n      projectsArray.push(projects[ix]);\n    }\n  }\n  return projectsArray;\n};\n\nexport default getProjectsArray;"},zHUE:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-code"},[n("div",{ref:"codeReference",staticClass:"c-code__reference-wrapper",attrs:{id:"code-reference-"+e._uid}},[n("l-affix",{attrs:{className:"c-code__affix",relativeElementSelector:"#code-reference-"+e._uid,z:200,offset:{top:144,bottom:0}},scopedSlots:e._u([{key:"contents",fn:function(t){return[e.filename?n("div",{staticClass:"c-code__header"},[n("div",{staticClass:"c-code__header-reference"},[n("span",{staticClass:"c-code__header-gutter  o-code"},[n("c-icon",{staticClass:"c-code__icon",attrs:{name:"file"}})],1),n("span",{staticClass:"c-code_filename o-code o-code--sm"},[e._v(e._s(e.filename))])])]):e._e()]}}])}),n("div",{staticClass:"c-code_code-area"},[n("c-baselines",{staticClass:"c-code__baselines",attrs:{inverse:!0}}),n("div",{staticClass:"c-code__gutter"},e._l(e.lineCount,function(t){return n("div",{key:t,staticClass:"c-code__number o-code"},[e._v(e._s(t))])})),n("div",{staticClass:"c-code__code-block"},[n("pre",[n("code",{staticClass:"c-code_code  o-code",domProps:{innerHTML:e._s(e.content)}},[e._v("\n        ")])])])],1)],1),n("span",{ref:"slotWrapper",staticClass:"c-code__slot-wrapper"},[e._t("default")],2)])},r=[],i={render:a,staticRenderFns:r};t.a=i}});
//# sourceMappingURL=template.fc75b2dd9ef5f54cbf7a.js.map