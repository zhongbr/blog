"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2802],{2802:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var a=t(920),o=t(276),r=t(9299),c=t(9565),i=t(8135),u=t(279),s=t(2413),l=t(2860),d="container_CJP8Y",f="selected-tags_tS_Dz",p="passages-container_Pg1B9",v="passage-operations_dToIs",h=t(6498),g=new Map([[o.uo.tiny,1],[o.uo.mid,2],[o.uo.normal,3],[o.uo.large,3]]),m=function(n){var e=n.onEnterPassage,t=n.catalogue,r=(0,o.s0)(),m=(0,o.e0)(),w=m.onReplaceTags,x=m.onRemoveTag,j=m.onSelectTag,Z=m.tags,b=(0,o.Gm)(),k=b.screenWidth,y=b.widthLevel,C=g.get(y||o.uo.normal)||3,M=Math.min(1416,k||window.innerWidth),I=Math.floor((M-40-10*(C-1)-2*C)/C),N=(0,a.useMemo)((function(){return Object.values(t||{})}),[t]),R=function(n){null===e||void 0===e||e(n),r("/passage/".concat(n["json-path"]))},P=function(){var n=(0,i.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.J)("".concat(window.location.protocol,"//").concat(window.location.host,"/#/passage/").concat(e["json-path"]));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:d,style:{"--passages-list-width":"".concat(M,"px")},children:[!!Z.length&&(0,h.jsxs)("div",{className:(0,u.Z)("blur","border-radius-normal",f),children:[null===Z||void 0===Z?void 0:Z.map((function(n){return(0,h.jsx)(s.Vp,{selected:!0,onRemove:function(){return x(n)},children:n})})),(0,h.jsx)(s.Vp,{hideIcon:!0,onClick:function(){return w([])},children:"\u6e05\u9664"})]}),(0,h.jsx)("div",{className:p,children:N.map((function(n){var e,t;return(0,h.jsx)(s.Zb,{width:"".concat(I,"px"),onClickImage:function(){return R(n)},title:n.title,icon:n.icon,headerImage:n.cover,extraInfoHover:n.mdate,extraInfo:(0,h.jsx)("div",{children:null===n||void 0===n||null===(e=n.tags)||void 0===e||null===(t=e.map)||void 0===t?void 0:t.call(e,(function(n){return(0,h.jsx)(s.Vp,{onClick:function(){return j(n)},children:n},n)}))}),hoverContent:(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)(s.JO,{className:"rp-faxian",text:"\u9605\u8bfb",onClick:function(){return R(n)}}),(0,h.jsx)(s.JO,{className:"rp-fuzhi",text:"\u590d\u5236",onClick:function(){return P(n)}})]})})}))})]})},w=t(9641),x=t(6495),j=t(3114),Z=t(810),b={tagsMap:new Map,catalogue:{}};function k(n){var e=n.onReady,t=(0,o.il)(Z.Z),r=(0,j.Z)(t,3),u=r[0],s=r[1],l=r[2],d=(0,o.e0)().tags,f=(0,o.gz)(b),p=(0,j.Z)(f,2),v=p[0],h=p[1],g=(0,o.tG)((function(n){return Object.keys(n).reduce((function(e,t){var a,o=n[t];return 0===d.length||null!==(a=o.tags)&&void 0!==a&&a.some((function(n){return d.includes(n)}))?(0,x.Z)((0,x.Z)({},e),{},(0,w.Z)({},t,o)):e}),{})}));return(0,o.bd)((0,i.Z)((0,c.Z)().mark((function n(){var t,a,o;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u();case 2:t=n.sent,a=t.data,o=new Map,Object.values(a).reduce((function(n,e){var t=e.tags;return(void 0===t?[]:t).forEach((function(t){var a=n.get(t)||[];a.push(e),n.set(t,a)})),n}),o),h({tagsMap:o,catalogue:g(a)}),null===e||void 0===e||e();case 8:case"end":return n.stop()}}),n)}))),[d.join(","),g,h]),(0,a.useEffect)((function(){var n=(null===s||void 0===s?void 0:s.data)||{};h({catalogue:g(n)})}),[g,null===s||void 0===s?void 0:s.data,h]),(0,x.Z)({loading:l},v)}var y=function(){var n=(0,o.Gm)(),e=n.setStates,t=k({onReady:n.onPageReady}).catalogue;return(0,a.useEffect)((function(){null===e||void 0===e||e({title:r.TN,footer:{showICP:!0,showCopyRight:!0,showPublicSecurity:!0}})}),[e]),(0,h.jsx)(m,{catalogue:t})},C=(0,a.memo)(y)},810:function(n,e,t){t.d(e,{Z:function(){return i}});var a=t(9565),o=t(8135),r=t(902),c=t.n(r);function i(){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/md/catalogue.json?r=".concat(Math.random()));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);