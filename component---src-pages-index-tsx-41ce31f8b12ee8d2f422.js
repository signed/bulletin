(self.webpackChunkbulletin=self.webpackChunkbulletin||[]).push([[691],{9572:function(e,t,r){var n;e=r.nmd(e),n=function(){var e=null,t={};h();var r=[];function n(e){if(r.length>0){var t=f(a=b(e.hue)),n=(a[1]-a[0])/r.length,i=parseInt((t-a[0])/n);return!0===r[i]?i=(i+2)%r.length:r[i]=!0,(t=f(a=[(a[0]+i*n)%359,(a[0]+(i+1)*n)%359]))<0&&(t=360+t),t}var a;return(t=f(a=l(e.hue)))<0&&(t=360+t),t}function i(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return f([0,100]);var r=u(e),n=r[0],i=r[1];switch(t.luminosity){case"bright":n=55;break;case"dark":n=i-10;break;case"light":i=55}return f([n,i])}function a(e,t,r){var n=s(e,t),i=100;switch(r.luminosity){case"dark":i=n+20;break;case"light":n=(i+n)/2;break;case"random":n=0,i=100}return f([n,i])}function o(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return g(e);case"hsl":var r=g(e);return"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)";case"hsla":var n=g(e),i=t.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+i+")";case"rgbArray":return v(e);case"rgb":return"rgb("+v(e).join(", ")+")";case"rgba":var a=v(e);return i=t.alpha||Math.random(),"rgba("+a.join(", ")+", "+i+")";default:return d(e)}}function s(e,t){for(var r=c(e).lowerBounds,n=0;n<r.length-1;n++){var i=r[n][0],a=r[n][1],o=r[n+1][0],s=r[n+1][1];if(t>=i&&t<=o){var l=(s-a)/(o-i);return l*t+(a-l*i)}}return 0}function l(e){if("number"==typeof parseInt(e)){var r=parseInt(e);if(r<360&&r>0)return[r,r]}if("string"==typeof e)if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var i=m(e)[0];return[i,i]}return[0,360]}function u(e){return c(e).saturationRange}function c(e){for(var r in e>=334&&e<=360&&(e-=360),t){var n=t[r];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return t[r]}return"Color not found"}function f(t){if(null===e){var r=.618033988749895,n=Math.random();return n+=r,n%=1,Math.floor(t[0]+n*(t[1]+1-t[0]))}var i=t[1]||1,a=t[0]||0,o=(e=(9301*e+49297)%233280)/233280;return Math.floor(a+o*(i-a))}function d(e){var t=v(e);function r(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+r(t[0])+r(t[1])+r(t[2])}function p(e,r,n){var i=n[0][0],a=n[n.length-1][0],o=n[n.length-1][1],s=n[0][1];t[e]={hueRange:r,lowerBounds:n,saturationRange:[i,a],brightnessRange:[o,s]}}function h(){p("monochrome",null,[[0,0],[100,0]]),p("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),p("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),p("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),p("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),p("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),p("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),p("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function v(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var r=e[1]/100,n=e[2]/100,i=Math.floor(6*t),a=6*t-i,o=n*(1-r),s=n*(1-a*r),l=n*(1-(1-a)*r),u=256,c=256,f=256;switch(i){case 0:u=n,c=l,f=o;break;case 1:u=s,c=n,f=o;break;case 2:u=o,c=n,f=l;break;case 3:u=o,c=s,f=n;break;case 4:u=l,c=o,f=n;break;case 5:u=n,c=o,f=s}return[Math.floor(255*u),Math.floor(255*c),Math.floor(255*f)]}function m(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,r=parseInt(e.substr(2,2),16)/255,n=parseInt(e.substr(4,2),16)/255,i=Math.max(t,r,n),a=i-Math.min(t,r,n),o=i?a/i:0;switch(i){case t:return[(r-n)/a%6*60||0,o,i];case r:return[60*((n-t)/a+2)||0,o,i];case n:return[60*((t-r)/a+4)||0,o,i]}}function g(e){var t=e[0],r=e[1]/100,n=e[2]/100,i=(2-r)*n;return[t,Math.round(r*n/(i<1?i:2-i)*1e4)/100,i/2*100]}function y(e){for(var t=0,r=0;r!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);r++)t+=e.charCodeAt(r);return t}function b(e){if(isNaN(e)){if("string"==typeof e)if(t[e]){var r=t[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return c(m(e)[0]).hueRange}else{var n=parseInt(e);if(n<360&&n>0)return c(e).hueRange}return[0,360]}return function t(s){if(void 0!==(s=s||{}).seed&&null!==s.seed&&s.seed===parseInt(s.seed,10))e=s.seed;else if("string"==typeof s.seed)e=y(s.seed);else{if(void 0!==s.seed&&null!==s.seed)throw new TypeError("The seed value must be an integer or string");e=null}var l,u;if(null!==s.count&&void 0!==s.count){for(var c=s.count,f=[],d=0;d<s.count;d++)r.push(!1);for(s.count=null;c>f.length;){var p=t(s);null!==e&&(s.seed=e),f.push(p)}return s.count=c,f}return o([l=n(s),u=i(l,s),a(l,u,s)],s)}}(),e&&e.exports&&(t=e.exports=n),t.randomColor=n},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(!a(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!o.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!a(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],o[u[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},9063:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ge}});var n=r(7294);function i(e){return n.forwardRef(e)}var a=r(204),o=r(4526),s=r(4238),l=(r(7154),r(7462)),u=r(7548),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,f=(0,u.Z)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=r(8682),p=r(4660),h=r(4418),v=f,m=function(e){return"theme"!==e},g=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?v:m},y=function(e,t,r){var n;if(t){var i=t.shouldForwardProp;n=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},b=function e(t,r){var i,a,o=t.__emotion_real===t,s=o&&t.__emotion_base||t;void 0!==r&&(i=r.label,a=r.target);var u=y(t,r,o),c=u||g(s),f=!c("as");return function(){var v=arguments,m=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&m.push("label:"+i+";"),null==v[0]||void 0===v[0].raw)m.push.apply(m,v);else{0,m.push(v[0][0]);for(var b=v.length,k=1;k<b;k++)m.push(v[k],v[0][k])}var x=(0,d.w)((function(e,t,r){var i=f&&e.as||s,o="",l=[],v=e;if(null==e.theme){for(var y in v={},e)v[y]=e[y];v.theme=(0,n.useContext)(d.T)}"string"==typeof e.className?o=(0,p.f)(t.registered,l,e.className):null!=e.className&&(o=e.className+" ");var b=(0,h.O)(m.concat(l),t.registered,v);(0,p.M)(t,b,"string"==typeof i);o+=t.key+"-"+b.name,void 0!==a&&(o+=" "+a);var k=f&&void 0===u?g(i):c,x={};for(var w in e)f&&"as"===w||k(w)&&(x[w]=e[w]);return x.className=o,x.ref=r,(0,n.createElement)(i,x)}));return x.displayName=void 0!==i?i:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=s,x.__emotion_styles=m,x.__emotion_forwardProp=u,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,n){return e(t,(0,l.Z)({},r,n,{shouldForwardProp:y(x,n,!0)})).apply(void 0,m)},x}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){b[e]=b(e)}));var k=b,x=r(5619),w=new Set([].concat((0,x.Z)(a.propNames),["textStyle","layerStyle","apply","isTruncated","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"])),O=new Set(["htmlWidth","htmlHeight","htmlSize"]),R=function(e){return O.has(e)||!w.has(e)};function S(e){return(0,o.CE)(e,["styleConfig","size","variant","colorScheme"])}function _(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var P=function(e,t){var r=null!=t?t:{},n=r.baseStyle,i=_(r,["baseStyle"]);i.shouldForwardProp||(i.shouldForwardProp=R);var l=function(e){var t=e.baseStyle;return function(e){var r=e.css,n=e.__css,i=e.sx,l=_(e,["theme","css","__css","sx"]),u=(0,o.lw)(l,(function(e,t){return(0,a.isStyleProp)(t)})),c=(0,s.Pu)(t,e),f=Object.assign({},n,c,(0,o.YU)(u),i),d=(0,a.css)(f)(e.theme);return r?[d,r]:d}}({baseStyle:n});return k(e,i)(l)};["a","b","article","aside","blockquote","button","caption","cite","circle","code","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","img","input","kbd","label","li","main","mark","nav","ol","p","path","pre","q","rect","s","svg","section","select","strong","small","span","sub","sup","table","tbody","td","textarea","tfoot","th","thead","tr","ul"].forEach((function(e){P[e]=P(e)}));var C=r(4667);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var T=i((function(e,t){var r=e.direction,i=e.align,a=e.justify,o=e.wrap,s=e.basis,l=e.grow,u=e.shrink,c=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["direction","align","justify","wrap","basis","grow","shrink"]),f={display:"flex",flexDirection:r,alignItems:i,justifyContent:a,flexWrap:o,flexBasis:s,flexGrow:l,flexShrink:u};return n.createElement(P.div,E({ref:t,__css:f},c))}));C.Ts&&(T.displayName="Flex");var A=r(5587),I=r(8395),j=r(4207);var M=r(3971),F=r.n(M),N=r(2993),B=r.n(N),q=r(5623),z=r(9735);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(){return D({},(0,q.If)(),{theme:(0,z.Fg)()})}function H(e,t,r){var i,a;void 0===t&&(t={}),void 0===r&&(r={});var l=t.styleConfig,u=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,["styleConfig"]),c=L(),f=c.theme,d=c.colorMode,p=(0,o.Wf)(f,"components."+e),h=l||p,v=F()({theme:f,colorMode:d},null!=(i=null==h?void 0:h.defaultProps)?i:{},(0,o.YU)((0,o.CE)(u,["children"]))),m=(0,n.useRef)({});return(0,n.useMemo)((function(){if(h){var e,t,n,i,a,o,l=(0,s.Pu)(null!=(e=h.baseStyle)?e:{},v),u=(0,s.Pu)(null!=(t=null==(n=h.variants)?void 0:n[v.variant])?t:{},v),c=(0,s.Pu)(null!=(i=null==(a=h.sizes)?void 0:a[v.size])?i:{},v),f=F()({},l,c,u);null!=(o=r)&&o.isMultiPart&&h.parts&&h.parts.forEach((function(e){var t;f[e]=null!=(t=f[e])?t:{}})),B()(m.current,f)||(m.current=f)}return m.current}),[h,v,null==(a=r)?void 0:a.isMultiPart])}function U(e,t){return H(e,t,{isMultiPart:!0})}function W(e,t){if(null!=e)if((0,C.mf)(e))e(t);else try{e.current=t}catch(r){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function Z(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){t.forEach((function(t){return W(t,e)}))}}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var Y=(0,r(8308).k)({strict:!1,name:"FormControlContext"}),$=(0,I.Z)(Y,2),G=$[0],K=$[1];function Q(e){var t=e.id,r=e.isRequired,i=e.isInvalid,a=e.isDisabled,o=e.isReadOnly,l=X(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),u=(0,j.Me)(),c=t||"field-"+u,f=c+"-label",d=c+"-feedback",p=c+"-helptext",h=n.useState(!1),v=(0,I.Z)(h,2),m=v[0],g=v[1],y=n.useState(!1),b=(0,I.Z)(y,2),k=b[0],x=b[1],w=function(e){void 0===e&&(e=!1);var t=(0,n.useState)(e),r=(0,I.Z)(t,2),i=r[0],a=r[1];return[i,{on:(0,n.useCallback)((function(){a(!0)}),[]),off:(0,n.useCallback)((function(){a(!1)}),[]),toggle:(0,n.useCallback)((function(){a((function(e){return!e}))}),[])}]}(),O=(0,I.Z)(w,2),R=O[0],S=O[1],_=n.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),V({id:p},e,{ref:Z(t,(function(e){e&&x(!0)}))})}),[p]),P=n.useCallback((function(e,t){var r,n;return void 0===e&&(e={}),void 0===t&&(t=null),V({},e,{ref:t,"data-focus":(0,A.PB)(R),"data-disabled":(0,A.PB)(a),"data-invalid":(0,A.PB)(i),"data-readonly":(0,A.PB)(o),id:null!=(r=e.id)?r:f,htmlFor:null!=(n=e.htmlFor)?n:c})}),[c,a,R,i,o,f]),C=n.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),V({id:d},e,{ref:Z(t,(function(e){e&&g(!0)})),"aria-live":"polite"})}),[d]),E=n.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),V({},e,l,{ref:t,role:"group"})}),[l]),T=n.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),V({},e,{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),M=n.useCallback((function(){(0,s.A4)(S.on)}),[S]);return{isRequired:!!r,isInvalid:!!i,isReadOnly:!!o,isDisabled:!!a,isFocused:!!R,onFocus:M,onBlur:S.off,hasFeedbackText:m,setHasFeedbackText:g,hasHelpText:k,setHasHelpText:x,id:c,labelId:f,feedbackId:d,helpTextId:p,htmlProps:l,getHelpTextProps:_,getErrorMessageProps:C,getRootProps:E,getLabelProps:P,getRequiredIndicatorProps:T}}var J=i((function(e,t){var r=U("Form",e),i=Q(S(e)),a=i.getRootProps,o=X(i,["getRootProps","htmlProps"]),s=(0,A.cx)("chakra-form-control",e.className),l=n.useMemo((function(){return o}),[o]);return n.createElement(G,{value:l},n.createElement(z.Fo,{value:r},n.createElement(P.div,V({},a({},t),{className:s,__css:{width:"100%",position:"relative"}}))))}));C.Ts&&(J.displayName="FormControl");var ee=i((function(e,t){var r=K(),i=(0,z.yK)(),a=(0,A.cx)("chakra-form__helper-text",e.className);return n.createElement(P.div,V({},null==r?void 0:r.getHelpTextProps(e,t),{__css:i.helperText,className:a}))}));function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}function ne(e){var t=function(e){var t,r,n,i=K(),a=e.id,o=e.disabled,l=e.readOnly,u=e.required,c=e.isRequired,f=e.isInvalid,d=e.isReadOnly,p=e.isDisabled,h=e.onFocus,v=e.onBlur,m=re(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),g=[];null!=i&&i.hasFeedbackText&&null!=i&&i.isInvalid&&g.push(i.feedbackId);null!=i&&i.hasHelpText&&g.push(i.helpTextId);return te({},m,{"aria-describedby":g.join(" ")||void 0,id:null!=a?a:null==i?void 0:i.id,isDisabled:null!=(t=null!=o?o:p)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(r=null!=l?l:d)?r:null==i?void 0:i.isReadOnly,isRequired:null!=(n=null!=u?u:c)?n:null==i?void 0:i.isRequired,isInvalid:null!=f?f:null==i?void 0:i.isInvalid,onFocus:(0,s.v0)(null==i?void 0:i.onFocus,h),onBlur:(0,s.v0)(null==i?void 0:i.onBlur,v)})}(e),r=t.isDisabled,n=t.isInvalid,i=t.isReadOnly,a=t.isRequired;return te({},re(t,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:r,readOnly:i,required:a,"aria-invalid":(0,A.Qm)(n),"aria-required":(0,A.Qm)(a),"aria-readonly":(0,A.Qm)(i)})}function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}C.Ts&&(ee.displayName="FormHelperText");var ae=i((function(e,t){var r=U("Input",e),i=ne(S(e)),a=(0,A.cx)("chakra-input",e.className);return n.createElement(P.input,ie({},i,{__css:r.field,ref:t,className:a}))}));function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}C.Ts&&(ae.displayName="Input"),ae.id="Input";var se=i((function(e,t){var r=H("Text",e),i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(S(e),["className","align","decoration","casing"]),a=(0,o.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.createElement(P.p,oe({ref:t,className:(0,A.cx)("chakra-text",e.className)},a,i,{__css:r}))}));C.Ts&&(se.displayName="Text");var le=r(8228),ue=r(4959),ce=function(e){return n.createElement(T,{as:"div",justifyContent:"space-around",alignItems:"center",flexBasis:"5.5em",height:"3.3333333333em",width:"3.3333333333em",margin:"5px",borderRadius:"10px",backgroundColor:"#f5f5f5",opacity:.5,border:"1px solid #3c3c3c",fontSize:"1em",fontFamily:"Roboto",fontWeight:"300"},e.children)};function fe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var de=r(9572),pe=r.n(de),he=function(){return{text:pe()(),background:pe()()}},ve=function(){function e(e,t){this._entries=[],this.index=0,this.themeSource=e,this.size=t,this._entries.push(this.themeSource())}var t,r,n,i=e.prototype;return i.next=function(){if(!(this.index===this._entries.length-1))return this.index++,this.current;this.entries.length===this.size&&(this._entries.shift(),this.index--);var e=this.themeSource();return this._entries.push(e),this.index++,this.current},i.previous=function(){return this.index=Math.max(0,this.index-1),this.current},t=e,(r=[{key:"entries",get:function(){return(0,x.Z)(this._entries)}},{key:"current",get:function(){return this._entries[this.index]}}])&&fe(t.prototype,r),n&&fe(t,n),e}(),me=function(e){var t,r,i=((t=(0,n.useState)(!0))[0],r=t[1],{forceRender:function(){return r((function(e){return!e}))}}).forceRender,a=(0,n.useRef)(new ve(he,e)).current;return{theme:a.current,entries:a.entries,next:function(){a.next(),i()},previous:function(){a.previous(),i()}}},ge=function(){var e=(0,n.useState)((function(){var e;return null!==(e=new URLSearchParams(document.location.search).get("text"))&&void 0!==e?e:(new Date).toISOString()})),t=e[0],r=e[1],i=(0,n.useState)(!1),a=i[0],o=i[1],s=me(5),l=s.theme,u=s.next,c=s.previous,f=n.createRef(),d=n.createRef(),p={fontSize:"5xl",fontWeight:"black",color:l.text,background:l.background,textAlign:"center"};(0,n.useEffect)((function(){r((function(){var e;return null!==(e=new URLSearchParams(document.location.search).get("text"))&&void 0!==e?e:(new Date).toISOString()}))}),[]),(0,n.useEffect)((function(){var e=function(e){e.altKey&&("ArrowLeft"===e.key&&c(),"ArrowRight"===e.key&&u())};return window.addEventListener("keyup",e),function(){window.removeEventListener("keyup",e)}}),[]),(0,n.useEffect)((function(){document.title=t}),[t]);var h=a?"unset":"none",v=a?"none":"unset";return n.createElement(le.x,null,n.createElement(ue.m,null),n.createElement(T,{direction:"column",justify:"center",alignItems:"center",height:"100vh",background:l.background,ref:d},n.createElement(T,{as:"div",position:"absolute",bottom:"5px",left:"5px"},n.createElement(ce,null,"←"),n.createElement(ce,null,"alt"),n.createElement(ce,null,"→")),n.createElement(ae,Object.assign({display:h,onKeyDown:function(e){"Enter"!==e.key&&"Escape"!==e.key||o(!1)}},p,{placeholder:"Type here...",value:t,onChange:function(e){return r(e.target.value)},onBlur:function(){o(!1)},focusBorderColor:"transparent",ref:f})),n.createElement(se,Object.assign({display:v,as:"span",onClick:function(){o(!0);var e=f.current;setTimeout((function(){e.focus(),e.select()}))}},p),t)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-41ce31f8b12ee8d2f422.js.map