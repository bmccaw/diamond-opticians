(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),o=a(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(148);var l=r.a.createContext({}),d=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Diamond Opticians"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(156),l=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,d=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s",meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cinzel",rel:"stylesheet"}))}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Diamond Opticians",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Brendan McCaughey"}}}}},154:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(147),l=a(146),d=function(){return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"0",position:"fixed",top:"0",width:"100%",zIndex:"1",borderBottom:"solid white 1px"}},i.a.createElement("div",{style:{margin:"auto",maxWidth:"100vw",padding:"1.45rem 1.0875rem",paddingBottom:"3rem"}},i.a.createElement("h3",{style:{margin:0}},i.a.createElement(m,{to:"/#eyeglasses"},"Eyeglasses")),i.a.createElement("h3",{style:{margin:0}},i.a.createElement(m,{to:"/#sunglasses"},"Sunglasses")),i.a.createElement("h3",{style:{margin:0}},i.a.createElement(m,{to:"/#sportglasses"},"Sport Glasses")),i.a.createElement("h3",{style:{margin:0}},i.a.createElement(m,{to:"/#contact"},"Contact"))))};d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var u=d,m=Object(l.a)(c.a).withConfig({displayName:"header__NavLink",componentId:"sc-31ozxh-0"})(['color:white;text-align:center;text-decoration:none;position:relative;display:block;float:left;width:25%;font-family:"Cinzel",serif;&:hover,&:active{background-color:black;}']),p=(a(155),function(e){var t=e.children;return i.a.createElement(c.b,{query:"2475091329",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100vw",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement(g,null,"© ",(new Date).getFullYear()," Diamond Opticians")))},data:n})});p.propTypes={children:s.a.node.isRequired};t.a=p;var g=l.a.div.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-0"})(["background-color:black;color:white;z-index:1;font-size:12px;"])}}]);
//# sourceMappingURL=component---src-pages-404-js-c4231ab3197eaf6693f8.js.map