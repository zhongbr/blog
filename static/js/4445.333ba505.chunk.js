"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4445],{4445:function(n,r,e){e.r(r),e.d(r,{default:function(){return F}});var t=e(6495),s=e(9565),a=e(8135),c=e(3114),i=e(920),o=e(2587),u=e(5549),l=e(2413),d=e(9299),p=e(279),h=e(2662),f="hover-container_YxT5M",v="card_bVIug",m="head_lohEi",x="title_Fjwmk",j="operation_X05Zw",N="desc_ZdTdF",g="icon_BzJUH",w="tags_lK0py",Z="footer_T8zPT",y="hover_ihrvX",b="passages-list_ofE7i",k="passage-list-item_uvPGA",C=e(6498),_="card-group_OX8oL",O=function(n){var r=n.rowCount,e=void 0===r?3:r,t=n.gap,s=void 0===t?"8px":t,a=n.className,c=n.children;return(0,C.jsx)("div",{className:(0,p.Z)(_,a),style:{"--gap":s,"--row-count":e},children:c})};O.displayName="Group";var T=O,J=function(n){var r=n.icon,e=n.topicName,t=n.desc,s=n.color,a=void 0===s?"#7adfb032":s,c=n.tags,i=n.passages,u=(0,o.e0)().onOpenTags,d=(0,o.s0)();return(0,C.jsx)(l.TM,{className:f,triggerInHover:!1,hoverContent:(0,C.jsx)(h.tK.Consumer,{children:function(n){var r=n.toggle;return(0,C.jsxs)("div",{className:(0,p.Z)("blur","border-radius-normal",y),children:[(0,C.jsxs)("div",{className:m,children:[(0,C.jsxs)("div",{className:j,onClick:function(){return r()},children:[(0,C.jsx)(l.JO,{className:"rp-arrow-left-bold"}),"\u8fd4\u56de"]}),(0,C.jsx)("div",{className:x,children:"\u7cbe\u9009\u6587\u7ae0"})]}),(0,C.jsx)("div",{className:b,children:null===i||void 0===i?void 0:i.map((function(n){return(0,C.jsxs)("div",{className:k,children:[(0,C.jsx)(l.JO,{className:"rp-dianzan"}),(0,C.jsx)("div",{className:x,children:n.title}),(0,C.jsx)(l.JO,{className:(0,p.Z)("rp-arrow-right",g),onClick:function(){return function(n){d("/passage/".concat(encodeURIComponent(n["json-path"])))}(n)}})]})}))})]})}}),children:(0,C.jsx)(h.tK.Consumer,{children:function(n){var s=n.toggle;return(0,C.jsxs)("div",{className:(0,p.Z)("border-radius-normal",v),style:{"--color":a},children:[(0,C.jsxs)("div",{className:m,children:[(0,C.jsx)("div",{className:x,children:e}),(0,C.jsxs)("div",{className:j,onClick:function(){return s(!0)},children:["\u7cbe\u9009\u6587\u7ae0",(0,C.jsx)(l.JO,{className:"rp-arrow-right"})]})]}),(0,C.jsxs)("div",{className:N,children:[(0,C.jsx)("span",{className:x,children:t}),(0,C.jsx)("div",{className:g,children:(0,C.jsx)(l.JO,{className:r})})]}),(0,C.jsx)("div",{className:w,children:null===c||void 0===c?void 0:c.map((function(n){return(0,C.jsx)(l.Vp,{onClick:function(){return u([n])},children:n},n)}))}),(0,C.jsx)("div",{className:Z,children:(0,C.jsxs)("div",{className:j,onClick:function(){return u(c)},children:["\u67e5\u770b\u6240\u6709\u6587\u7ae0",(0,C.jsx)(l.JO,{className:"rp-arrow-right"})]})})]})}})})};J.displayName="TopicCard";var P=J,M="topicsPage_h1ErI",E="topics-container_lQRWU",I=function(n){var r,e,p,h=(0,o.il)(u.F5),f=(0,c.Z)(h,2),v=f[0],m=f[1],x=(0,o.Gm)(),j=x.setStates,N=x.widthLevel,g=x.onPageReady,w=(0,l.UD)().success,Z=N===o.uo.tiny?1:2;return(0,o.bd)((0,a.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v();case 2:null===g||void 0===g||g(),w({title:"\u9875\u9762\u52a0\u8f7d\u5b8c\u6210",content:"\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u5566\uff01"});case 4:case"end":return n.stop()}}),n)}))),[v]),(0,i.useEffect)((function(){null===j||void 0===j||j({title:d.TN,footer:{showICP:!0,showPublicSecurity:!0,showCopyRight:!0}})}),[j]),(0,C.jsx)("div",{className:M,children:(0,C.jsx)(T,{rowCount:Z,className:E,children:null===m||void 0===m||null===(r=m.data)||void 0===r||null===(e=r.topics)||void 0===e||null===(p=e.map)||void 0===p?void 0:p.call(e,(function(n){return(0,C.jsx)(P,(0,t.Z)({},n),n.id)}))})})};I.displayName="Topics";var F=I},810:function(n,r,e){e.d(r,{Z:function(){return i}});var t=e(9565),s=e(8135),a=e(902),c=e.n(a);function i(){return o.apply(this,arguments)}function o(){return(o=(0,s.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/md/catalogue.json?r=".concat(Math.random()));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5549:function(n,r,e){e.d(r,{uO:function(){return t.Z},Wl:function(){return h},Ps:function(){return o},F5:function(){return l}});var t=e(810),s=e(9565),a=e(8135),c=e(902),i=e.n(c);function o(n){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,s.Z)().mark((function n(r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/md/".concat(r.path,"?r=").concat(Math.random()));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/md/topic.json?r=".concat(Math.random()));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var p=e(5181);function h(n){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,s.Z)().mark((function n(r){var e,t;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.url){n.next=2;break}return n.abrupt("return",{data:[]});case 2:return n.next=4,fetch("".concat(r.url,"?r=").concat(Math.random()));case 4:return e=n.sent,n.next=7,e.text();case 7:return t=n.sent,n.abrupt("return",(0,p.parse)(t,{skipEmptyLines:!0}));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);