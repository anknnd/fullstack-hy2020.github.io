(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return S}),a.d(t,"partInfoQuery",function(){return B});a(451),a(67),a(46),a(226),a(453);var n=a(293),r=a(154),l=a(147),o=a(159),i=a(161),c=a(247),s=a.n(c),u=a(326),m=a(0),p=a.n(m),f=a(160),g=a(153),d=a(324),b=a.n(d),k=a(602),v=a.n(k),h=a(241),E=a.n(h),y=a(157),N=a.n(y),w=a(221),x=a.n(w),C=a(361),_=a(292),j=a.n(_),O=a(248),F=a.n(O);function S(e){var t=e.data.markdownRemark,a=t.frontmatter,c=t.html,m=a.mainImage,d=a.part,k=a.lang,h=v()(x.a[k][d])?[]:Object.keys(x.a[k][d]),y={replace:function(e){var t=e.type,a=e.attribs,n=e.children;if("tag"===t&&"intro"===a.class)return p.a.createElement("div",{className:"col-7"},b()(n,y))}};return p.a.createElement(i.a,null,p.a.createElement(f.a,{lang:k,title:"Fullstack "+("en"===k?"part":"osa")+d,description:E.a[k],keywords:[].concat(N.a,[x.a[k][d]?Object.values(x.a[k][d]):[]])}),p.a.createElement("div",{className:"spacing--after"},p.a.createElement(r.a,{className:"part-intro__banner spacing--mobile--small",style:{backgroundImage:"url("+j.a.resolve(m.publicURL)+")",backgroundColor:g[C.a[d]]}},p.a.createElement(l.a,{className:"container"},p.a.createElement(n.a,{className:"breadcrumb",content:[{backgroundColor:g[C.a[d]],text:"Fullstack",link:"/"+("en"===k?"en/":"")+"#course-contents"},{backgroundColor:g.black,text:("en"===k?"Part":"Osa")+" "+d}]}),p.a.createElement("div",{className:"part-intro col-7 col-10--mobile spacing--after-small"},s()(c,y)),h&&p.a.createElement(n.a,{wrapperClassName:"spacing--mobile--large",stack:!0,content:h.map(function(e){return{backgroundColor:g.white,letter:e,path:"/"+("en"===k?"en/part":"osa")+d+"/"+F()(x.a[k][d][e]),text:e+" "+x.a[k][d][e]}})}))),p.a.createElement(u.a,{part:d,lang:k})),p.a.createElement(o.a,{lang:k}))}var B="412899762"},153:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(28);var n=a(148),r=a.n(n),l=(a(162),a(4)),o=a.n(l),i=a(0),c=a.n(i),s=function(e){var t=e.className,a=e.backgroundColor,n=r()(e,["className","backgroundColor"]),l=a?{backgroundColor:a}:null;return c.a.createElement("div",Object.assign({className:"banner "+t,style:l},n))};s.defaultProps={className:""},s.propTypes={className:o.a.string}},157:function(e,t){e.exports=["fullstack","full stack open 2019","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi","university of helsinki","department of computer science","web development","software development","web","web application","single page app","programming"]},159:function(e,t,a){"use strict";a(163);var n=a(147),r=a(149),l=a(146),o=a(0),i=a.n(o),c=a(155),s=a.n(c),u=a(220),m=a(152),p=[{src:a.n(m).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:s.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(e){var t=e.lang;return i.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},i.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return i.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},i.a.createElement(r.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),i.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},i.a.createElement("div",{className:"footer__navigation-link-container"},u.b[t].map(function(e){return i.a.createElement(l.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},162:function(e,t,a){},163:function(e,t,a){},221:function(e,t){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{},3:{},4:{},5:{},6:{},7:{},8:{}},en:{0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{}}}},226:function(e,t,a){var n=a(30),r=a(29);a(238)("keys",function(){return function(e){return r(n(e))}})},238:function(e,t,a){var n=a(21),r=a(15),l=a(22);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*l(function(){a(1)}),"Object",o)}},241:function(e,t){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},293:function(e,t,a){"use strict";a(28),a(245),a(295);var n=a(148),r=a.n(n),l=(a(296),a(147)),o=a(146),i=a(4),c=a.n(i),s=a(0),u=a.n(s),m=a(153),p=function(e){var t,a=e.className,n=e.wrapperClassName,i=e.link,c=e.content,s=e.stack,p=e.bold,f=e.thickBorder,g=e.upperCase,d=r()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),b=u.a.createElement("div",{className:"arrow__container arrows--horizontal "+a},c.map(function(e,t){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement("div",Object.assign({key:"arrow"+t,className:"arrow__wrapper"},d),u.a.createElement("div",{className:"arrow__rectangle "+(p?"bold":"")+" "+(f?"arrow__rectangle--thick-border":""),style:a},e.link?u.a.createElement(o.Link,{to:e.link},g?e.text.toUpperCase():e.text):g?e.text.toUpperCase():e.text),u.a.createElement("div",{className:"arrow__point "+(f?"arrow__point--thick-border":""),style:a}))}));return s||i?!s&&i?t=u.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},u.a.createElement(o.Link,{to:i,style:{display:"inline-block"}},b)):s&&(t=u.a.createElement("div",{className:"col-10 spacing--after "+n},u.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},c.map(function(e){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+a},d),u.a.createElement(l.a,{flex:!0,className:"arrow__rectangle",style:t},u.a.createElement("p",{className:"arrow--stacked-title"},u.a.createElement("span",null,e.text))),u.a.createElement("div",{className:"arrow__point",style:t}))})))):t=u.a.createElement("div",{className:"col-10 spacing--after"},b),t};p.propTypes={className:c.a.string,wrapperClassName:c.a.string,link:c.a.string,content:c.a.array.isRequired,stack:c.a.bool,upperCase:c.a.bool,bold:c.a.bool,thickBorder:c.a.bool},p.defaultProps={className:"",wrapperClassName:""},t.a=p},295:function(e,t,a){"use strict";a(294)("link",function(e){return function(t){return e(this,"a","href",t)}})},296:function(e,t,a){},297:function(e,t,a){"use strict";var n=a(10);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},326:function(e,t,a){"use strict";a(327),a(67),a(46),a(226),a(329),a(330),a(333);var n=a(147),r=a(146),l=a(4),o=a(0),i=a.n(o),c=a(221),s=a.n(c),u=a(248),m=a.n(u),p=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},f=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},g=function(e,t){return Object.keys(s.a[t]).includes(e.toString())},d=function(e,t,a){return f(e)in s.a[a][t]},b=function(e,t,a){return!e&&g(t+1,a)||e&&d(e,t,a)},k=function(e){return"en"===e?"Part":"Osa"},v=function(e){return"en"===e?"Previous part":"Edellinen osa"},h=function(e){return"en"===e?"Next part":"Seuraava osa"},E=function(e){return"/"+("en"===e?"en/part":"osa")},y=function(e){var t=e.part,a=e.letter,l=e.lang;return i.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!a&&g(t-1,l)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+(t-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(l)," ",t-1),i.a.createElement("b",null,v(l)))),b(a,t,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):a?"a"!==a?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+t+"/"+m()(s.a[l][t][p(a)]),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(l)," ",""+t+p(a)),i.a.createElement("b",null,v(l)))),b(a,t,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):g(t-1,l)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+(t-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(l)," ",t-1),i.a.createElement("b",null,v(l)))),b(a,t,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):i.a.createElement(n.a,{className:"push-right-1"}):i.a.createElement(n.a,{className:"push-right-1"}),!a&&g(t+1,l)?i.a.createElement(r.Link,{to:""+E(l)+(t+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(l)," ",t+1),i.a.createElement("b",null,h(l)))):a?d(a,t,l)?i.a.createElement(r.Link,{to:""+E(l)+t+"/"+m()(s.a[l][t][f(a)]),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(l)," ",""+t+f(a)),i.a.createElement("b",null,h(l)))):g(t+1,l)?i.a.createElement(r.Link,{to:""+E(l)+(t+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(l)," ",t+1),i.a.createElement("b",null,h(l)))):i.a.createElement(n.a,{className:"push-left-1"}):i.a.createElement(n.a,{className:"push-left-1"}))};y.defaultProps={part:void 0,letter:void 0},y.propTypes={part:l.PropTypes.number,letter:l.PropTypes.string,lang:l.PropTypes.string.isRequired},t.a=y},327:function(e,t,a){"use strict";a(328);var n=a(10),r=a(297),l=a(14),o=/./.toString,i=function(e){a(16)(RegExp.prototype,"toString",e,!0)};a(22)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&i(function(){return o.call(this)})},328:function(e,t,a){a(14)&&"g"!=/./g.flags&&a(23).f(RegExp.prototype,"flags",{configurable:!0,get:a(297)})},329:function(e,t,a){"use strict";var n=a(21),r=a(68)(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(48)("includes")},330:function(e,t,a){"use strict";var n=a(21),r=a(331);n(n.P+n.F*a(332)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},331:function(e,t,a){var n=a(72),r=a(24);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},332:function(e,t,a){var n=a(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}},333:function(e,t,a){},361:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},451:function(e,t,a){var n=a(21),r=a(452)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},452:function(e,t,a){var n=a(29),r=a(32),l=a(73).f;e.exports=function(e){return function(t){for(var a,o=r(t),i=n(o),c=i.length,s=0,u=[];c>s;)l.call(o,a=i[s++])&&u.push(e?[a,o[a]]:o[a]);return u}}},453:function(e,t,a){},602:function(e,t,a){var n=a(334)("isEmpty",a(603),a(360));n.placeholder=a(308),e.exports=n},603:function(e,t,a){var n=a(350),r=a(291),l=a(314),o=a(223),i=a(351),c=a(315),s=a(316),u=a(346),m="[object Map]",p="[object Set]",f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||l(e)))return!e.length;var t=r(e);if(t==m||t==p)return!e.size;if(s(e))return!n(e).length;for(var a in e)if(f.call(e,a))return!1;return!0}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-af27e1655a2feeb133b9.js.map