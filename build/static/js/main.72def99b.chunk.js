(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(25),i=a.n(n),r=(a(74),a(75),a(76),a(4));var j=function(e){var t=e.active,a=e.text,s=e.Icon;return Object(r.jsxs)("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),children:[Object(r.jsx)(s,{}),Object(r.jsx)("h2",{children:a})]})},o=a(48),l=a.n(o),d=a(53),x=a.n(d),b=a(41),p=a.n(b),u=a(54),O=a.n(u),h=a(55),m=a.n(h),f=a(56),v=a.n(f),_=a(57),g=a.n(_),N=a(58),w=a.n(N),I=a(59),y=a.n(I),S=a(105);var B=function(){return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)(l.a,{className:"sidebar__twitterIcon"}),Object(r.jsx)(j,{active:!0,Icon:x.a,text:"Home"}),Object(r.jsx)(j,{Icon:p.a,text:"Explore"}),Object(r.jsx)(j,{Icon:O.a,text:"Notifications"}),Object(r.jsx)(j,{Icon:m.a,text:"Messages"}),Object(r.jsx)(j,{Icon:v.a,text:"Bookmarks"}),Object(r.jsx)(j,{Icon:g.a,text:"Lists"}),Object(r.jsx)(j,{Icon:w.a,text:"Profile"}),Object(r.jsx)(j,{Icon:y.a,text:"More"}),Object(r.jsx)(S.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0,children:"Tweet"})]})},k=(a(82),a(36)),C=(a(83),a(84),a(106)),T=a(67).a.initializeApp({apiKey:"AIzaSyDp15QSdxP0U2eRylVW6dncMJ0YJcH8VXw",authDomain:"twitter-clone-hk22.firebaseapp.com",projectId:"twitter-clone-hk22",storageBucket:"twitter-clone-hk22.appspot.com",messagingSenderId:"882852363425",appId:"1:882852363425:web:8ba802aa805d7fef0a04e0",measurementId:"G-5DE7R7KBXP"}).firestore();var z=function(){var e=Object(s.useState)(""),t=Object(k.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(k.a)(n,2),j=i[0],o=i[1];return Object(r.jsx)("div",{className:"tweetBox",children:Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"tweetBox__input",children:[Object(r.jsx)(C.a,{src:"https://pbs.twimg.com/profile_images/1160850791013343234/VCFehNUA_400x400.jpg"}),Object(r.jsx)("input",{onChange:function(e){return c(e.target.value)},value:a,placeholder:"What's happening?",type:"text"})]}),Object(r.jsx)("input",{value:j,onChange:function(e){return o(e.target.value)},className:"tweetBox__imageInput",placeholder:"Optional: Enter image URL",type:"text"}),Object(r.jsx)(S.a,{onClick:function(e){e.preventDefault(),T.collection("posts").add({displayName:"harry",username:"harry122132",verified:!0,text:a,image:j,avatar:"https://pbs.twimg.com/profile_images/1160850791013343234/VCFehNUA_400x400.jpg"}),c(""),o("")},type:"submit",className:"tweetBox__tweetButton",children:"Tweet"})]})})},D=(a(88),a(61)),F=a.n(D),E=a(62),P=a.n(E),A=a(63),J=a.n(A),L=a(64),M=a.n(L),R=a(65),U=a.n(R),V=Object(s.forwardRef)((function(e,t){var a=e.displayName,s=e.username,c=e.verified,n=e.text,i=e.image,j=e.avatar;return Object(r.jsxs)("div",{className:"post",ref:t,children:[Object(r.jsx)("div",{className:"post__avatar",children:Object(r.jsx)(C.a,{src:j})}),Object(r.jsxs)("div",{className:"post__body",children:[Object(r.jsxs)("div",{className:"post__header",children:[Object(r.jsx)("div",{className:"post__headerText",children:Object(r.jsxs)("h3",{children:[a," ",Object(r.jsxs)("span",{className:"post__headerSpecial",children:[c&&Object(r.jsx)(F.a,{className:"post__badge"})," @",s]})]})}),Object(r.jsx)("div",{className:"post__headerDescription",children:Object(r.jsx)("p",{children:n})})]}),Object(r.jsx)("img",{src:i,alt:""}),Object(r.jsxs)("div",{className:"post__footer",children:[Object(r.jsx)(P.a,{fontSize:"small"}),Object(r.jsx)(J.a,{fontSize:"small"}),Object(r.jsx)(M.a,{fontSize:"small"}),Object(r.jsx)(U.a,{fontSize:"small"})]})]})]})})),W=a(66);var H=function(){var e=Object(s.useState)([]),t=Object(k.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){T.collection("posts").onSnapshot((function(e){return c(e.docs.map((function(e){return e.data()})))}))}),[]),Object(r.jsxs)("div",{className:"feed",children:[Object(r.jsx)("div",{className:"feed__header",children:Object(r.jsx)("h2",{children:"Home"})}),Object(r.jsx)(z,{}),Object(r.jsx)(W.a,{children:a.map((function(e){return Object(r.jsx)(V,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image},e.text)}))})]})},K=(a(89),a(45));var X=function(){return Object(r.jsxs)("div",{className:"widgets",children:[Object(r.jsxs)("div",{className:"widgets__input",children:[Object(r.jsx)(p.a,{className:"widgets__searchIcon"}),Object(r.jsx)("input",{placeholder:"Search Twitter",type:"text"})]}),Object(r.jsxs)("div",{className:"widgets__widgetContainer",children:[Object(r.jsx)("h2",{children:"What's happening"}),Object(r.jsx)(K.b,{tweetId:"1385260534325411842"}),Object(r.jsx)(K.a,{sourceType:"profile",screenName:"harry122132",options:{height:400}})]})]})};var G=function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(B,{}),Object(r.jsx)(H,{}),Object(r.jsx)(X,{})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),Q()}},[[91,1,2]]]);
//# sourceMappingURL=main.72def99b.chunk.js.map