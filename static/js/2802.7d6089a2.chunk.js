"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2802],{82802:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r=e(60920),a=e(75961),o=e(39299),c=e(19565),u=e(8135),i=e(27652),s=e(10279),l=e(59423),f=e(42860),d="container_CJP8Y",p="selected-tags_tS_Dz",v="passages-container_Pg1B9",g="passage-operations_dToIs",h=e(86498),m=function(n){var t=n.onEnterPassage,e=n.catalogue,o=(0,a.s0)(),m=(0,a.e0)(),x=m.onReplaceTags,Z=m.onRemoveTag,w=m.onSelectTag,j=m.tags,b=(0,r.useMemo)((function(){return Object.values(e||{})}),[e]),k=function(n){null===t||void 0===t||t(n),o("/passage/".concat(n["json-path"]))},C=function(){var n=(0,u.Z)((0,c.Z)().mark((function n(t){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.J)("".concat(window.location.protocol,"//").concat(window.location.host,"/#/passage/").concat(t["json-path"]));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:d,children:[!!j.length&&(0,h.jsxs)("div",{className:(0,s.Z)("blur","border-radius-normal",p),children:[null===j||void 0===j?void 0:j.map((function(n){return(0,h.jsx)(l.Vp,{selected:!0,onRemove:function(){return Z(n)},children:n})})),(0,h.jsx)(i.Z,{size:"small",color:"primary",onClick:function(){return x([])},children:"\u6e05\u9664"})]}),(0,h.jsx)("div",{className:v,children:b.map((function(n){var t,e;return(0,h.jsx)(l.Zb,{width:450,onClickImage:function(){return k(n)},title:n.title,icon:n.icon,headerImage:n.cover,extraInfoHover:n.mdate,extraInfo:(0,h.jsx)("div",{children:null===n||void 0===n||null===(t=n.tags)||void 0===t||null===(e=t.map)||void 0===e?void 0:e.call(t,(function(n){return(0,h.jsx)(l.Vp,{onClick:function(){return w(n)},children:n},n)}))}),hoverContent:(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)(l.JO,{className:"rp-faxian",text:"\u9605\u8bfb",onClick:function(){return k(n)}}),(0,h.jsx)(l.JO,{className:"rp-fuzhi",text:"\u590d\u5236",onClick:function(){return C(n)}})]})})}))})]})},x=e(99641),Z=e(56495),w=e(63114),j=e(20810),b={tagsMap:new Map,catalogue:{}};function k(){var n=(0,a.il)(j.Z),t=(0,w.Z)(n,3),e=t[0],o=t[1],i=t[2],s=(0,a.e0)().tags,l=(0,a.gz)(b),f=(0,w.Z)(l,2),d=f[0],p=f[1],v=(0,a.tG)((function(n){return Object.keys(n).reduce((function(t,e){var r,a=n[e];return 0===s.length||null!==(r=a.tags)&&void 0!==r&&r.some((function(n){return s.includes(n)}))?(0,Z.Z)((0,Z.Z)({},t),{},(0,x.Z)({},e,a)):t}),{})}));return(0,a.bd)((0,u.Z)((0,c.Z)().mark((function n(){var t,r,a;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.data,a=new Map,Object.values(r).reduce((function(n,t){var e=t.tags;return(void 0===e?[]:e).forEach((function(e){var r=n.get(e)||[];r.push(t),n.set(e,r)})),n}),a),p({tagsMap:a,catalogue:v(r)});case 7:case"end":return n.stop()}}),n)}))),[s.join(","),v,p]),(0,r.useEffect)((function(){var n=(null===o||void 0===o?void 0:o.data)||{};p({catalogue:v(n)})}),[v,null===o||void 0===o?void 0:o.data,p]),(0,Z.Z)({loading:i},d)}var C=function(){var n=(0,a.Gm)().setStates,t=k().catalogue;return(0,r.useEffect)((function(){null===n||void 0===n||n({title:o.TN})}),[n]),(0,h.jsx)(m,{catalogue:t})},y=(0,r.memo)(C)},20810:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(19565),a=e(8135),o=e(60902),c=e.n(o);function u(){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/md/catalogue.json?r=".concat(Math.random()));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},42860:function(n,t,e){e.d(t,{J:function(){return o}});var r=e(19565),a=e(8135);function o(n){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("http:"!==window.location.protocol){n.next=3;break}return console.info("\u6d4b\u8bd5\u73af\u5883\u4e0d\u652f\u6301\u590d\u5236"),n.abrupt("return");case 3:return n.next=5,navigator.clipboard.writeText(t);case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);