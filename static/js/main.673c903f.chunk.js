(this["webpackJsonpreact-coin-flip"]=this["webpackJsonpreact-coin-flip"]||[]).push([[0],{11:function(t,e,i){},12:function(t,e,i){"use strict";i.r(e);var s=i(0),a=i(1),c=i.n(a),r=i(5),n=i.n(r),l=i(4),o=i(3);function d({img:t,text:e}){return Object(s.jsx)("img",{alt:e,src:t})}function j({heads:t,tails:e,flips:i}){return Object(s.jsxs)("p",{children:["Out of ",i," flips, there were ",t," heads and ",e," tails."]})}i(11);function p(){var t=[{side:"heads",url:"https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},{side:"tails",url:"https://i.imgur.com/QUgWetL.jpg"}],e=Object(a.useState)(""),i=Object(o.a)(e,2),c=i[0],r=i[1],n=Object(a.useState)({heads:0,tails:0,flips:0}),p=Object(o.a)(n,2),u=p[0],b=p[1];return Object(s.jsxs)("div",{className:"coin-flip",children:[c&&Object(s.jsx)(d,Object(l.a)({},c)),Object(s.jsx)(j,Object(l.a)({},u)),Object(s.jsx)("button",{onClick:()=>{var e=Math.floor(2*Math.random()),i=u;i.flips=++u.flips;var s={img:t[e].url,text:t[e].text};s.img.includes("wiki")?i.heads=++u.heads:i.tails=++u.tails,r(s),b(i)},children:"Flip!"})]})}var u=document.getElementById("root");n.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p,{})}),u)}},[[12,1,2]]]);
//# sourceMappingURL=main.673c903f.chunk.js.map