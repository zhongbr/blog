"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4208],{4208:function(e,n,r){r.r(n),r.d(n,{default:function(){return Ne}});var t,a,i=r(9641),l=r(9565),c=r(8135),o=r(3114),s=r(920),u=r(6116),d=r(279),h=r(276),v=r(6805),f=r(2413);!function(e){e.Document="Document",e.Header="Header",e.Paragraph="Paragraph",e.CodeBlock="CodeBlock",e.BlockQuote="BlockQuote",e.Table="Table",e.TableRow="TableRow",e.TableCell="TableCell",e.Html="Html",e.Image="Image",e.Link="Link",e.Yaml="Yaml",e.Str="Str",e.Strong="Strong",e.Emphasis="Emphasis",e.List="List",e.ListItem="ListItem",e.HorizontalRule="HorizontalRule",e.Delete="Delete",e.InlineMath="InlineMath",e.Math="Math"}(t||(t={})),function(e){e.Left="left",e.Right="right",e.Center="center"}(a||(a={}));var m=r(6495),p="title_nB5XL",x=r(6498),g=function(e){var n=e.node,r=e.children,t=(0,h.s0)(),a={id:n.key,className:p,onClick:function(){t("#".concat(n.key))}};switch(n.depth){case 1:return(0,x.jsx)("h1",(0,m.Z)((0,m.Z)({},a),{},{children:r}));case 2:return(0,x.jsx)("h2",(0,m.Z)((0,m.Z)({},a),{},{children:r}));case 3:return(0,x.jsx)("h3",(0,m.Z)((0,m.Z)({},a),{},{children:r}));case 4:return(0,x.jsx)("h4",(0,m.Z)((0,m.Z)({},a),{},{children:r}));case 5:return(0,x.jsx)("h5",(0,m.Z)((0,m.Z)({},a),{},{children:r}));default:return(0,x.jsx)("h6",(0,m.Z)((0,m.Z)({},a),{},{children:r}))}},j=function(e){var n=e.node;return(0,x.jsx)("span",{id:n.key,children:n.value})},k="strong_IlM1z",y=function(e){var n=e.node,r=e.children;return(0,x.jsx)("span",{id:n.key,className:k,children:r})},Z="emphasis_vw7W3",N=function(e){var n=e.node,r=e.children;return(0,x.jsx)("span",{id:n.key,className:Z,children:r})},b="delete_RLp88",w=function(e){var n=e.node,r=e.children;return(0,x.jsx)("span",{id:n.key,className:b,children:r})},_="paragraph_dCWzg",C=function(e){var n=e.node,r=e.children;return(0,x.jsx)("div",{id:n.key,className:_,children:r})},L=r(9482),S=r(2860),R="container_zux4R",M="footer_tFCco",I="item_CyOQe",A="copy_FuU09",T=function(e){var n=e.node,r=(0,s.useState)(!1),t=(0,o.Z)(r,2),a=t[0],i=t[1],u="dark-theme"===(0,h.Gm)().theme?L.Cf:L.bW,v=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.J)(n.value);case 2:i(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{id:n.key,className:R,children:[(0,x.jsx)(L.EK,{showLineNumbers:!0,text:n.value,language:n.lang,theme:(0,m.Z)((0,m.Z)({},u),{},{backgroundColor:"transparent"}),wrapLongLines:!0}),n.lang&&(0,x.jsxs)("div",{className:M,children:[(0,x.jsxs)("div",{className:I,children:[(0,x.jsx)(f.JO,{className:"rp-faxian"}),n.lang]}),(0,x.jsxs)("div",{className:(0,d.Z)(I,A),onClick:v,children:[(0,x.jsx)(f.JO,{className:"rp-fuzhi"}),a?"\u5df2\u590d\u5236":"\u590d\u5236"]})]})]})},B="block-quote_gPVZ9",H=function(e){var n=e.node,r=e.children;return(0,x.jsx)("div",{id:n.key,className:B,children:r})},O=function(e){var n=e.node,r=e.children;return(0,x.jsx)("a",{id:n.key,href:n.url,children:r})},P="img_Bpjcz",z=function(e){var n=e.node;return(0,x.jsx)("img",{id:n.key,className:P,src:n.url,alt:n.alt})},F=function(e){var n=e.node;return(0,x.jsx)("div",{id:n.key,dangerouslySetInnerHTML:{__html:n.value}})},E="table_mP6iA",D=function(e){var n=e.node,r=e.children;return(0,x.jsx)("table",{id:n.key,className:E,children:r})},G="header_jCqx2",q=function(e){var n=e.node,r=e.children,t=n.parent;return(0,s.useMemo)((function(){var e;return 0===(null===t||void 0===t||null===(e=t.children)||void 0===e?void 0:e.indexOf(n))}),[null===t||void 0===t?void 0:t.children,n])?(0,x.jsx)("thead",{id:n.key,className:G,children:(0,x.jsx)("tr",{children:r})}):(0,x.jsx)("tr",{id:n.key,children:r})},Q="table-cell_Ggw9_",Y="header_eEtYh",J=function(e){var n=e.node,r=e.children,t=n.parent,a=null===t||void 0===t?void 0:t.parent,l=(0,s.useMemo)((function(){var e;if(!t||!a)return"center";var r=t.children.indexOf(n);return(null===(e=a.align)||void 0===e?void 0:e[r])||"center"}),[n,t,a]),c=(0,s.useMemo)((function(){var e;return!(!t||!a)&&0===(null===a||void 0===a||null===(e=a.children)||void 0===e?void 0:e.indexOf(t))}),[t,a]);return(0,x.jsx)("td",{id:n.key,className:(0,d.Z)([Q],(0,i.Z)({},Y,c)),style:{textAlign:c?"center":l},children:r})},U="container_Ofr4h",W="code-block_OFD1u",X=function(e){var n=e.node;return(0,x.jsx)("div",{id:n.key,className:U,children:(0,x.jsx)("div",{className:W,children:n.value})})},K=function(e){var n=e.node,r=e.children;return n.ordered?(0,x.jsx)("ol",{id:n.key,children:r}):(0,x.jsx)("ul",{id:n.key,children:r})},V=function(e){var n=e.node,r=e.children;return(0,x.jsx)("li",{id:n.key,children:r})},$="horizontal-rule_hqd5R",ee=function(e){var n=e.node;return(0,x.jsx)("div",{id:n.key,className:$})},ne=function(e){var n=e.node;return(0,x.jsx)("div",{children:(0,x.jsx)(f.NI,{latex:n.value})})},re="inline-math_Os9Bh",te=function(e){var n=e.node;return(0,x.jsx)("span",{className:re,children:(0,x.jsx)(f.NI,{latex:n.value})})},ae=new Map([[t.Header,g],[t.Str,j],[t.Strong,y],[t.Emphasis,N],[t.Delete,w],[t.Paragraph,C],[t.CodeBlock,T],[t.BlockQuote,H],[t.Link,O],[t.Image,z],[t.Html,F],[t.Table,D],[t.TableRow,q],[t.TableCell,J],[t.Yaml,X],[t.List,K],[t.ListItem,V],[t.HorizontalRule,ee],[t.Math,ne],[t.InlineMath,te]]),ie=function e(n){var r,a=n.node;if(!a)return(0,x.jsx)(f.hX,{texts:"\ud83d\ude80\ud83d\ude80\u6587\u7ae0\u52a0\u8f7d\u4e2d..."});var i=null===(r=a.children)||void 0===r?void 0:r.map((function(n){return(0,x.jsx)(e,{node:n},n.key)}));if(a.type===t.Document)return(0,x.jsx)(x.Fragment,{children:i});var l=ae.get(a.type);return l?(0,x.jsx)(l,{node:a,children:i}):(0,x.jsx)(x.Fragment,{children:i})},le=(0,s.memo)(ie);function ce(e,n){var r=e.getBoundingClientRect(),t=r.width,a=r.height,i=r.top;return t||a?i-n.getBoundingClientRect().top:i}function oe(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:450,t=function(e){var n=e.time,r=e.startAxis,t=n,a=e.targetAxis-r;return(t/=e.duration/2)<1?a/2*t*t*t+r:a/2*((t-=2)*t*t+2)+r};return new Promise((function(a){var i=performance.now(),l=n.scrollTop;requestAnimationFrame((function c(o){var s=o-i;n.scrollTop=t({time:Math.min(s,r),startAxis:l,targetAxis:e,duration:r}),s<r?requestAnimationFrame(c):a(void 0)}))}))}var se="container_Gs76A",ue="title_AfoNg",de="item_RLSwA",he="sharp_eXvmU",ve=function(e){var n=e.sketch,r=(0,h.Gm)().scrollRef,t=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(n){var t,a,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.current,!(a=document.getElementById(n))||!t){e.next=6;break}return i=ce(a,t),e.next=6,oe(i,t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:se,children:[(0,x.jsx)("div",{className:ue,children:"\u76ee\u5f55"}),n.map((function(e){return(0,x.jsxs)("div",{onClick:function(){return t(e.key)},className:de,style:{marginLeft:"".concat(20*(e.depth-1),"px")},children:[(0,x.jsx)("span",{className:he,children:"#"}),e.text]},e.text)}))]})},fe=r(7629),me=function(e){return String.fromCharCode.apply(String,(0,fe.Z)(e.toString().split("").map((function(e){return Number("a".charCodeAt(0)+Number(e))}))))};function pe(e,n){var r,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e.key="".concat(t?t+"-":"").concat(me(a)),n&&(e.parent=n),null!==e&&void 0!==e&&null!==(r=e.children)&&void 0!==r&&r.length)for(var i=0;i<e.children.length;i++)e.children[i-1]&&(e.children[i].previousSibling=e.children[i-1]),e.children[i+1]&&(e.children[i].nextSibling=e.children[i+1]),pe(e.children[i],e,e.key,i)}function xe(e){var n=[];return function e(r){var a;r.type===t.Header&&n.push({text:r.raw.replace(/#+\s*/g,""),depth:r.depth||0,key:r.key||""}),null!==(a=r.children)&&void 0!==a&&a.length&&r.children.forEach(e)}(e),n}var ge="passage-container_FGelG",je="passage_yFK6h",ke="sketch_RjCip",ye="display_lC13A",Ze=function(){var e,n,r,t,a,m,p=(0,h.Gm)(),g=p.setStates,j=p.rate,k=void 0===j?0:j,y=p.onPageReady,Z=p.widthLevel,N=(0,u.UO)().path,b=(0,h.il)(v.passage),w=(0,o.Z)(b,2),_=w[0],C=w[1],L=(0,s.useState)([]),S=(0,o.Z)(L,2),R=S[0],M=S[1],I=(0,s.useState)(),A=(0,o.Z)(I,2),T=A[0],B=A[1],H=(0,h.e0)().onOpenTags;return(0,s.useEffect)((function(){var e,n;null===g||void 0===g||g({title:null===C||void 0===C||null===(e=C.data)||void 0===e||null===(n=e.catalogue)||void 0===n?void 0:n.title,footer:{showICP:!1,showCopyRight:!0,showPublicSecurity:!1}})}),[g,null===C||void 0===C||null===(e=C.data)||void 0===e||null===(n=e.catalogue)||void 0===n?void 0:n.title]),(0,h.bd)((0,c.Z)((0,l.Z)().mark((function e(){var n,r,t,a,i,c;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Promise.all([_({path:N}),v.catalogue()]);case 4:r=e.sent,t=(0,o.Z)(r,2),a=t[0],i=t[1],B(null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n[N.replace(/\.json$/,".md")]),pe(a.data.ast),c=xe(a.data.ast),M(c),null===y||void 0===y||y();case 13:case"end":return e.stop()}}),e)}))),[_,N]),(0,x.jsxs)("div",{className:ge,children:[(0,x.jsx)("div",{className:(0,d.Z)(ke,(0,i.Z)({},ye,[h.uo.normal,h.uo.large].includes(Z||h.uo.normal))),style:{top:"".concat(155-75*k,"px")},children:(0,x.jsx)(ve,{sketch:R})}),(0,x.jsx)("div",{className:je,children:(0,x.jsxs)("div",{className:(0,d.Z)("content","blur"),children:[(0,x.jsx)("div",{className:"tags",children:null===C||void 0===C||null===(r=C.data)||void 0===r||null===(t=r.catalogue)||void 0===t||null===(a=t.tags)||void 0===a?void 0:a.map((function(e){return(0,x.jsx)(f.Vp,{onClick:function(){return H([e])},children:e},e)}))}),(null===T||void 0===T?void 0:T.cover)&&(0,x.jsx)("img",{alt:"cover",className:"cover-image",src:T.cover}),(0,x.jsx)(le,{node:null===C||void 0===C||null===(m=C.data)||void 0===m?void 0:m.ast})]})})]})},Ne=(0,s.memo)(Ze)},810:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(9565),a=r(8135),i=r(902),l=r.n(i);function c(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("/md/catalogue.json?r=".concat(Math.random()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},6805:function(e,n,r){r.r(n),r.d(n,{catalogue:function(){return t.Z},passage:function(){return o},topics:function(){return u}});var t=r(810),a=r(9565),i=r(8135),l=r(902),c=r.n(l);function o(e){return s.apply(this,arguments)}function s(){return(s=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/md/".concat(n.path,"?r=").concat(Math.random()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/md/topic.json?r=".concat(Math.random()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);