"use strict";(self.webpackChunkreact_press_website=self.webpackChunkreact_press_website||[]).push([[2483],{3192:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(920),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6498),JsxBlock=function JsxBlock(props){var jsCode=props.jsCode,_props$sources=props.sources,sources=void 0===_props$sources?[]:_props$sources,loadScript=function(e,n){return new Promise((function(r,t){if(console.log("load script",e,n),e&&n){window[n]&&r(window[n]);var a=document.createElement("script");a.src=e,a.onload=function(){window[n]?r(window[n]):t()},a.onerror=function(e){t(e)},document.body.appendChild(a)}else t()}))},Comp=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var func=eval(jsCode||"null");return react__WEBPACK_IMPORTED_MODULE_0__.lazy((function(){return Promise.all(sources.map((function(e){return loadScript(e.cdn,e.name)}))).then((function(){return{default:func.bind(window)()}}))}))}),[jsCode]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:"\u4f9d\u8d56\u52a0\u8f7d\u4e2d",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Comp,{})})})};__webpack_exports__.Z=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(JsxBlock)},2483:function(e,n,r){r.r(n),r.d(n,{default:function(){return je}});var t=r(9565),a=r(8135),i=r(3114),l=r(920),c=r(6116),o=r(1522),s=(r(810),r(902)),d=r.n(s);function u(e){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/md/".concat(n.path));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h,p,v=r(8269);!function(e){e.Document="Document",e.Header="Header",e.Paragraph="Paragraph",e.CodeBlock="CodeBlock",e.BlockQuote="BlockQuote",e.Table="Table",e.TableRow="TableRow",e.TableCell="TableCell",e.Html="Html",e.Image="Image",e.Link="Link",e.Yaml="Yaml",e.Str="Str",e.Strong="Strong",e.Emphasis="Emphasis",e.List="List",e.ListItem="ListItem",e.HorizontalRule="HorizontalRule",e.Delete="Delete"}(h||(h={})),function(e){e.Left="left",e.Right="right",e.Center="center"}(p||(p={}));var m="title_nB5XL",f=r(8650),x=r(6498),g=new Map([[1,"h3"],[2,"h4"],[3,"h5"],[4,"h6"]]),j=function(e){var n=e.node,r=e.children,t=(0,o.s0)(),a=g.get(n.depth||-1)||"h6";return(0,x.jsx)(f.Z,{id:n.key,className:m,onClick:function(){t("#".concat(n.key))},variant:a,gutterBottom:!0,children:r})},k=function(e){var n=e.node;return(0,x.jsx)("span",{id:n.key,children:n.value})},y="strong_IlM1z",b=function(e){var n=e.node,r=e.children;return(0,x.jsx)("span",{id:n.key,className:y,children:r})},w="emphasis_vw7W3",C=function(e){var n=e.node,r=e.children;return(0,x.jsx)("span",{id:n.key,className:w,children:r})},E="delete_RLp88",L=function(e){var n=e.node,r=e.children;return(0,x.jsx)("span",{id:n.key,className:E,children:r})},M="paragraph_dCWzg",N=function(e){var n=e.node,r=e.children;return(0,x.jsx)(f.Z,{id:n.key,className:M,variant:"body1",paragraph:!0,children:r})},D=r(5197),P=r(2956),O=r(3192),Z="container_zux4R",B="lang_SuCE5",R=function(e){var n=e.node;return(0,x.jsxs)(D.Z,{id:n.key,className:Z,variant:"outlined",children:["jsx"===n.lang?(0,x.jsx)(O.Z,{jsCode:n._js,imports:n.imports,sources:n._sources}):(0,x.jsx)(P.Z1,{text:n.value,language:n.lang,theme:P.bW,wrapLongLines:!0}),n.lang&&(0,x.jsxs)("div",{className:B,children:["\u8bed\u8a00: ",n.lang]})]})},S="block-quote_gPVZ9",T=function(e){var n=e.node,r=e.children;return(0,x.jsx)(D.Z,{id:n.key,className:S,variant:"outlined",children:r})},I=function(e){var n=e.node,r=e.children;return(0,x.jsx)("a",{id:n.key,href:n.url,children:r})},A="img_Bpjcz",W=function(e){var n=e.node;return(0,x.jsx)("img",{id:n.key,className:A,src:n.url,alt:n.alt})},H=function(e){var n=e.node;return(0,x.jsx)("div",{id:n.key,dangerouslySetInnerHTML:{__html:n.value}})},U="table_mP6iA",K=function(e){var n=e.node,r=e.children;return(0,x.jsx)("table",{id:n.key,className:U,border:1,cellSpacing:0,children:r})},z="header_jCqx2",q=function(e){var n=e.node,r=e.children,t=n.parent;return(0,l.useMemo)((function(){var e;return 0===(null===t||void 0===t||null===(e=t.children)||void 0===e?void 0:e.indexOf(n))}),[null===t||void 0===t?void 0:t.children,n])?(0,x.jsx)("thead",{id:n.key,className:z,children:(0,x.jsx)("tr",{children:r})}):(0,x.jsx)("tr",{id:n.key,children:r})},F=r(9641),G=r(279),Y="table-cell_Ggw9_",J="header_eEtYh",Q=function(e){var n=e.node,r=e.children,t=n.parent,a=null===t||void 0===t?void 0:t.parent,i=(0,l.useMemo)((function(){var e;if(!t||!a)return"center";var r=t.children.indexOf(n);return(null===(e=a.align)||void 0===e?void 0:e[r])||"center"}),[n,t,a]),c=(0,l.useMemo)((function(){var e;return!(!t||!a)&&0===(null===a||void 0===a||null===(e=a.children)||void 0===e?void 0:e.indexOf(t))}),[t,a]);return(0,x.jsx)("td",{id:n.key,className:(0,G.Z)([Y],(0,F.Z)({},J,c)),style:{textAlign:c?"center":i},children:r})},$="container_Ofr4h",V="code-block_OFD1u",X=function(e){var n=e.node;return(0,x.jsx)(D.Z,{id:n.key,className:$,variant:"outlined",children:(0,x.jsx)("div",{className:V,children:n.value})})},ee=function(e){var n=e.node,r=e.children;return n.ordered?(0,x.jsx)("ol",{id:n.key,children:r}):(0,x.jsx)("ul",{id:n.key,children:r})},ne=function(e){var n=e.node,r=e.children;return(0,x.jsx)("li",{id:n.key,children:r})},re="horizontal-rule_hqd5R",te=function(e){var n=e.node;return(0,x.jsx)("div",{id:n.key,className:re})},ae=new Map([[h.Header,j],[h.Str,k],[h.Strong,b],[h.Emphasis,C],[h.Delete,L],[h.Paragraph,N],[h.CodeBlock,R],[h.BlockQuote,T],[h.Link,I],[h.Image,W],[h.Html,H],[h.Table,K],[h.TableRow,q],[h.TableCell,Q],[h.Yaml,X],[h.List,ee],[h.ListItem,ne],[h.HorizontalRule,te]]),ie=function e(n){var r,t=n.node;if(!t)return(0,x.jsx)(v.gb,{texts:"\ud83d\ude80\ud83d\ude80\u6587\u7ae0\u52a0\u8f7d\u4e2d..."});var a=null===(r=t.children)||void 0===r?void 0:r.map((function(n){return(0,x.jsx)(e,{node:n},n.key)}));if(t.type===h.Document)return(0,x.jsx)(x.Fragment,{children:a});var i=ae.get(t.type);return i?(0,x.jsx)(i,{node:t,children:a}):(0,x.jsx)(x.Fragment,{children:a})},le=(0,l.memo)(ie),ce="container_Gs76A",oe="title_AfoNg",se="item_RLSwA",de="sharp_eXvmU",ue=function(e){var n=e.sketch;return(0,x.jsxs)("div",{className:ce,children:[(0,x.jsx)("div",{className:oe,children:"\u76ee\u5f55"}),n.map((function(e){return(0,x.jsxs)("div",{className:se,style:{marginLeft:"".concat(20*(e.depth-1),"px")},children:[(0,x.jsx)("span",{className:de,children:"#"}),e.text]},e.text)}))]})},_e=r(7629),he=function(e){return String.fromCharCode.apply(String,(0,_e.Z)(e.toString().split("").map((function(e){return Number("a".charCodeAt(0)+Number(e))}))))};function pe(e,n){var r,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e.key="".concat(t?t+"-":"").concat(he(a)),n&&(e.parent=n),null!==e&&void 0!==e&&null!==(r=e.children)&&void 0!==r&&r.length)for(var i=0;i<e.children.length;i++)e.children[i-1]&&(e.children[i].previousSibling=e.children[i-1]),e.children[i+1]&&(e.children[i].nextSibling=e.children[i+1]),pe(e.children[i],e,e.key,i)}function ve(e){var n=[];return function e(r){var t;r.type===h.Header&&n.push({text:r.raw.replace(/#+\s*/g,""),depth:r.depth||0,key:r.key||""}),null!==(t=r.children)&&void 0!==t&&t.length&&r.children.forEach(e)}(e),n}var me="passage-container_FGelG",fe="passage_yFK6h",xe="sketch_RjCip",ge=function(){var e,n,r,s,d,_,h=(0,o.Gm)(),p=h.setStates,m=h.rate,f=void 0===m?0:m,g=(0,c.UO)().path,j=(0,o.il)(u),k=(0,i.Z)(j,2),y=k[0],b=k[1],w=(0,l.useState)([]),C=(0,i.Z)(w,2),E=C[0],L=C[1],M=(0,o.s0)();return(0,l.useEffect)((function(){var e,n;null===p||void 0===p||p({title:null===b||void 0===b||null===(e=b.data)||void 0===e||null===(n=e.catalogue)||void 0===n?void 0:n.title})}),[p,null===b||void 0===b||null===(e=b.data)||void 0===e||null===(n=e.catalogue)||void 0===n?void 0:n.title]),(0,o.bd)((0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y({path:g});case 4:pe((n=e.sent).data.ast),r=ve(n.data.ast),L(r);case 8:case"end":return e.stop()}}),e)}))),[y,g]),(0,x.jsxs)("div",{className:me,children:[(0,x.jsx)("div",{className:xe,style:{top:"".concat(155-75*f,"px")},children:(0,x.jsx)(ue,{sketch:E})}),(0,x.jsx)("div",{className:fe,children:(0,x.jsxs)("div",{className:"content",children:[(0,x.jsx)("div",{children:null===b||void 0===b||null===(r=b.data)||void 0===r||null===(s=r.catalogue)||void 0===s||null===(d=s.tags)||void 0===d?void 0:d.map((function(e){return(0,x.jsx)(v.Vp,{onClick:function(){return M("/?tags=".concat(e))},children:e},e)}))}),(0,x.jsx)(le,{node:null===b||void 0===b||null===(_=b.data)||void 0===_?void 0:_.ast})]})})]})},je=(0,l.memo)(ge)},810:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(9565),a=r(8135),i=r(902),l=r.n(i);function c(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("/md/catalogue.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);