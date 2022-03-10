"use strict";(self.webpackChunkeden=self.webpackChunkeden||[]).push([[652],{8652:function(e,n,s){s.r(n),s.d(n,{default:function(){return F}});var t=s(2791),o=s(1413),i=s(885),r=s(4925),a=s(8820),c=s(184);var l=function(e){var n=e.title,s=e.lists,o=e.cleaningPlan,r=(0,t.useState)(!1),l=(0,i.Z)(r,2),d=l[0],u=l[1];return(0,c.jsxs)("div",{className:"extra extra-cleaning",children:[(0,c.jsxs)("div",{className:"extra-title",children:[(0,c.jsx)("h5",{children:n}),(0,c.jsx)("button",{className:"btn-expand extra-btn",onClick:function(){return u((function(e){return!e}))},children:d?(0,c.jsx)(a._nT,{}):(0,c.jsx)(a.dEn,{})})]}),(0,c.jsx)("div",{className:"construction"===o&&d?"extra-detail":"hide",children:"Post construction is the cleaning done to new or renovated buildings. This kind of cleaning is done to the whole of an apartment, house or facility from top to bottom."}),(0,c.jsx)("ul",{className:d?"extra-description":"hide",children:s.map((function(e,n){return(0,c.jsx)("li",{children:e},"detail".concat(n))}))})]})},d=s(6856),u=["roomIncrease","roomDecrease"];var h=function(e){var n=e.roomIncrease,s=e.roomDecrease,o=(0,r.Z)(e,u),l=(0,t.useState)(!1),h=(0,i.Z)(l,2),x=h[0],j=h[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"select",children:(0,c.jsxs)("div",{className:"selector",children:[(0,c.jsx)("div",{className:"label",children:(0,c.jsxs)("span",{children:[o.bed<=0?null:"".concat(o.bed," Bedrooms, ")," ",o.dining<=0?null:"".concat(o.dining," Living Rooms /\n              Dining Areas, "),o.toilet<=0?null:"".concat(o.toilet,"  Toilets / Bathrooms, "),o.kitchen<=0?null:"".concat(o.kitchen," Kitchen, "),o.store<=0?null:"".concat(o.store," Study / Store, "),o.outdoor<=0?null:"".concat(o.outdoor," Outdoor / Balcony")]})}),(0,c.jsx)(d.x3N,{className:x?"icon rotate":"icon",onClick:function(){return j((function(e){return!e}))}}),(0,c.jsx)("div",{className:x?"hidden":"hide",children:(0,c.jsxs)("div",{className:"selector-items",children:[(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Bedroom"}),(0,c.jsxs)("span",{"data-item":"bed",children:[(0,c.jsx)("button",{onClick:s,children:(0,c.jsx)(a.ywL,{})}),(0,c.jsxs)("span",{children:[" ",o.bed," "]}),(0,c.jsx)("button",{onClick:n,children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Living Rooms / Dining Areas"}),(0,c.jsxs)("span",{"data-item":"dining",children:[(0,c.jsx)("button",{onClick:s,children:(0,c.jsx)(a.ywL,{})}),(0,c.jsxs)("span",{children:[o.dining," "]}),(0,c.jsx)("button",{onClick:n,children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Toilets / Bathroom"}),(0,c.jsxs)("span",{"data-item":"toilet",children:[(0,c.jsx)("button",{onClick:s,children:(0,c.jsx)(a.ywL,{})}),(0,c.jsx)("span",{children:o.toilet}),(0,c.jsx)("button",{onClick:n,children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Kitchen"}),(0,c.jsxs)("span",{"data-item":"kitchen",children:[(0,c.jsx)("button",{onClick:s,children:(0,c.jsx)(a.ywL,{})}),(0,c.jsx)("span",{children:o.kitchen}),(0,c.jsx)("button",{onClick:n,children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Study / Store"}),(0,c.jsxs)("span",{"data-item":"store",children:[(0,c.jsx)("button",{onClick:s,children:(0,c.jsx)(a.ywL,{})}),(0,c.jsxs)("span",{children:[o.store," "]}),(0,c.jsx)("button",{onClick:n,children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Outdoor / Balcony"}),(0,c.jsxs)("span",{"data-item":"outdoor",children:[(0,c.jsx)("button",{onClick:s,children:(0,c.jsx)(a.ywL,{})}),(0,c.jsxs)("span",{children:[" ",o.outdoor," "]}),(0,c.jsx)("button",{onClick:n,children:(0,c.jsx)(a.Lfi,{})})]})]})]}),(0,c.jsx)("button",{className:"done-btn",onClick:function(){return j((function(e){return!e}))},children:"Done"})]})})]})})})},x=["title","price","active","setActive","lists","roomIncrease","roomDecrease"];var j=function(e){var n=e.title,s=e.price,t=e.active,i=e.setActive,a=e.lists,d=e.roomIncrease,u=e.roomDecrease,j=(0,r.Z)(e,x),m=Intl.NumberFormat("en-US");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{title:n,lists:a}),(0,c.jsxs)("div",{className:"home-input",children:[(0,c.jsx)("label",{htmlFor:"home",children:"Tell us about your home"}),(0,c.jsx)(h,(0,o.Z)({roomIncrease:d,roomDecrease:u},j))]}),(0,c.jsxs)("div",{className:"foodPlan__item",children:[(0,c.jsx)("p",{children:(0,c.jsx)("span",{children:"Frequency"})}),(0,c.jsxs)("div",{className:"btn--group",children:[(0,c.jsx)("button",{className:"once"===t?"btn-freq active":"btn-freq",onClick:function(){return i("once")},children:"Once A Week"}),(0,c.jsx)("button",{className:"twice"===t?"btn-freq active":"btn-freq",onClick:function(){return i("twice")},children:"Every 2 weeks"}),(0,c.jsx)("button",{className:"monthly"===t?"btn-freq active":"btn-freq",onClick:function(){return i("monthly")},children:"Once A Month"})]})]}),(0,c.jsxs)("div",{className:"foodPlan__bottom",children:[(0,c.jsxs)("h5",{children:[(0,c.jsx)("span",{children:"Price"}),(0,c.jsx)("span",{children:"\ud83d\udc49"}),"NGN ",m.format(s),".00"]}),(0,c.jsx)("p",{children:"Monthly"})]})]})},m=["  Scraping of cements and paint stains on the floor, windows and doors"," Washing of windows and doors"," Scraping of POP from wall tiles"," Washing of the walls"," Dusting and wiping of all surfaces"," Sweeping and mopping of the floor","Cobweb removal from all surfaces","Resurfacing of the tiles to maintain quality","Polishing of all wooden surfaces"],f=["active","setActive","cleaningPlan","roomIncrease","roomDecrease","totalRooms"];var p=function(e){var n=e.active,s=e.setActive,a=e.cleaningPlan,l=e.roomIncrease,d=e.roomDecrease,u=e.totalRooms,h=(0,r.Z)(e,f),x=(0,t.useState)(112e3),p=(0,i.Z)(x,2),v=p[0],b=p[1],k=(0,t.useState)(0),N=(0,i.Z)(k,2),g=N[0],y=N[1],w=(0,t.useState)(0),Z=(0,i.Z)(w,2),C=Z[0],S=Z[1],_=(0,t.useState)(0),P=(0,i.Z)(_,2),D=P[0],A=P[1],I=(0,t.useState)(0),L=(0,i.Z)(I,2),F=L[0],E=L[1],q=(0,t.useCallback)((function(){return y("once"===n?28e3:"twice"===n?14e3:7e3),g}),[g,n]),R=(0,t.useCallback)((function(){var e;return u<5?h.store<3?A(h.store):h.store>=3&&A(h.store-1.67):u>=5?h.store<=1?A(h.store):A(h.store-1.67):6===u&&(0===h.store?A(0):A(h.store-1.67)),e="once"===n?24e3:"twice"===n?12e3:6e3,1e3*Math.round(D*e/1e3)}),[n,u,h.store,D]),B=(0,t.useCallback)((function(){var e=h.outdoor+u;u<10?E(e<5?0:e>=5&&e<7?h.outdoor:e>=7&&e<11?h.outdoor-1.425:h.outdoor-2.425):u>=10&&E(h.outdoor-.715);var s=28e3;return s="once"===n?28e3:"twice"===n?14e3:7e3,1e3*Math.round(F*s/1e3)}),[u,F,h.outdoor,n]),T=(0,t.useCallback)((function(){return q(),S(u<5||u>=5&&u<7?u:u>=7&&u<11?u-1.425:u-2.425),1e3*Math.round(C*g/1e3)}),[u,C,g,q]);return(0,t.useEffect)((function(){var e=T()+R()+B();b(e)}),[T,R,B]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(j,(0,o.Z)({title:"What will Post Construction entail?",active:n,setActive:s,price:v,setPrice:b,lists:m,cleaningPlan:a,roomIncrease:l,roomDecrease:d,totalRooms:u},h))})},v=["Sweeping and mopping of all floors","Dust and wipe all surfaces","Cobweb removal from all surfaces","Wash dirty dishes","Arrange furniture, lay beds and fold clothes","Polish all wood and glass surfaces"," Disinfect and wash toilet and urinals","Empty and clean trash can","Scrape floors, walls and clean all surfaces","Clean internal and external parts of home appliances (Gas cooker, refrigerators etc)","Clean cupboards and cabinets"," AC vents cleaned"],b=["active","setActive","roomIncrease","roomDecrease","totalRooms"];var k=function(e){var n=e.active,s=e.setActive,a=e.roomIncrease,l=e.roomDecrease,d=e.totalRooms,u=(0,r.Z)(e,b),h=(0,t.useState)(8e4),x=(0,i.Z)(h,2),m=x[0],f=x[1],p=(0,t.useState)(0),k=(0,i.Z)(p,2),N=k[0],g=k[1],y=(0,t.useState)(0),w=(0,i.Z)(y,2),Z=w[0],C=w[1],S=(0,t.useState)(0),_=(0,i.Z)(S,2),P=_[0],D=_[1],A=(0,t.useState)(0),I=(0,i.Z)(A,2),L=I[0],F=I[1],E=(0,t.useCallback)((function(){return g("once"===n?2e4:"twice"===n?1e4:5e3),N}),[N,n]),q=(0,t.useCallback)((function(){d<5?3===u.store||4===u.store?D(u.store-1.25):u.store<3?D(u.store):D(u.store-2.5):d>=5&&(2===u.store||3===u.store?D(u.store-1.25):u.store>3&&u.store<7?D(u.store-2.5):u.store<=1?D(u.store):D(u.store-3.75));return P*("once"===n?16e3:"twice"===n?8e3:4e3)}),[P,u.store,d,n]),R=(0,t.useCallback)((function(){d<5?u.outdoor%2===0&&u.outdoor<8?F(0):1===u.outdoor?F(u.outdoor):3===u.outdoor?F(2):5===u.outdoor?F(3):7===u.outdoor?F(4):F(u.outdoor-3):d>=5&&d%2===1&&d<10?u.outdoor<1||u.outdoor%2===1&&u.outdoor<7?F(0):u.outdoor>1||u.outdoor%2===0&&u.outdoor<7?F(u.outdoor/2):F(u.outdoor-3):d>=5&&d%2===0&&d<10?1===u.outdoor?F(1):u.outdoor>1||u.outdoor%2===0&&u.outdoor<6?F(0):3===u.outdoor?F(2):5===u.outdoor?F(3):F(u.outdoor-2):d>=10&&F(u.outdoor);return L*("once"===n?2e4:"twice"===n?1e4:5e3)}),[d,u.outdoor,n,L]),B=(0,t.useCallback)((function(){return E(),C(d<5?d:5===d||6===d?5:7===d||8===d?6:9===d||10===d?7:d-3),Z*N}),[Z,N,E,d]);return(0,t.useEffect)((function(){var e=B()+q()+R();f(e)}),[B,q,R]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(j,(0,o.Z)({title:"What will Deep Cleaning entail?",active:n,setActive:s,price:m,lists:v,roomIncrease:a,roomDecrease:l,totalRooms:d},u))})},N=["Sweeping and mopping of all floors"," Dust and wipe all surfaces","Cobweb removal from all surfaces","Wash dirty dishes","Arrange furniture, lay beds and fold clothes","Polish all wood and glass surfaces","Disinfect and wash toilet and urinals","Empty and clean trash can"],g=["active","setActive","roomIncrease","roomDecrease","totalRooms"];var y=function(e){var n=e.active,s=e.setActive,a=e.roomIncrease,l=e.roomDecrease,d=e.totalRooms,u=(0,r.Z)(e,g),h=(0,t.useState)(2e4),x=(0,i.Z)(h,2),m=x[0],f=x[1],p=(0,t.useState)(0),v=(0,i.Z)(p,2),b=v[0],k=v[1],y=(0,t.useState)(0),w=(0,i.Z)(y,2),Z=w[0],C=w[1],S=(0,t.useState)(0),_=(0,i.Z)(S,2),P=_[0],D=_[1],A=(0,t.useState)(0),I=(0,i.Z)(A,2),L=I[0],F=I[1],E=(0,t.useCallback)((function(){return k("once"===n?4e3:"twice"===n?2e3:1e3),b}),[b,n]),q=(0,t.useCallback)((function(){d<5?u.outdoor<=1||u.outdoor%2===1&&u.outdoor<7?F(0):u.outdoor>=7?F(u.outdoor-3):F(u.outdoor/2):d>=5&&d%2===1&&d<10?u.outdoor<1||u.outdoor%2===0&&u.outdoor<6?F(0):1===u.outdoor?F(1):F(u.outdoor-2):d>=5&&d%2===0&&d<10?u.outdoor%2===1&&u.outdoor<5?F(0):u.outdoor%2===0&&u.outdoor<5?F(u.outdoor/2):u.outdoor>=5&&F(u.outdoor-2):d>=10&&F(u.outdoor);return L*("once"===n?4e3:"twice"===n?2e3:1e3)}),[d,u.outdoor,n,L]),R=(0,t.useCallback)((function(){d<5&&u.store>2?D(u.store-2):d<5&&u.store<=2?D(0):d>=5&&4===u.store?D(2):d>=5&&u.store<4?D(u.store):d>=5&&u.store>=5&&D(u.store-1);return P*("once"===n?2e3:"twice"===n?1e3:500)}),[n,P,u.store,d]),B=(0,t.useCallback)((function(){return E(),C(d<=5?5:6===d||7===d?6:8===d||9===d?7:10===d?8:d>10&&d<15?d-2:d-3),Z*b}),[Z,b,d,E]);return(0,t.useEffect)((function(){var e=B()+R()+q();f(e)}),[B,R,q]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(j,(0,o.Z)({title:"What will Standard Cleaning entail?",active:n,setActive:s,price:m,setPrice:f,lists:N,roomIncrease:a,roomDecrease:l},u))})};var w=function(){var e=(0,t.useState)("standard"),n=(0,i.Z)(e,2),s=n[0],r=n[1],a=(0,t.useState)("once"),l=(0,i.Z)(a,2),d=l[0],u=l[1],h=(0,t.useState)({bed:1,dining:1,toilet:1,kitchen:1,store:0,outdoor:0}),x=(0,i.Z)(h,2),j=x[0],m=x[1],f=j.bed+j.dining+j.kitchen+j.toilet,v=function(e){var n=e.target.parentElement.dataset.item;"bed"===n?m((0,o.Z)((0,o.Z)({},j),{},{bed:j.bed+1})):"dining"===n?m((0,o.Z)((0,o.Z)({},j),{},{dining:j.dining+1})):"toilet"===n?m((0,o.Z)((0,o.Z)({},j),{},{toilet:j.toilet+1})):"kitchen"===n?m((0,o.Z)((0,o.Z)({},j),{},{kitchen:j.kitchen+1})):"store"===n?m((0,o.Z)((0,o.Z)({},j),{},{store:j.store+1})):"outdoor"===n&&m((0,o.Z)((0,o.Z)({},j),{},{outdoor:j.outdoor+1}))},b=function(e){var n=e.target.parentElement.dataset.item;"bed"===n?m((0,o.Z)((0,o.Z)({},j),{},{bed:j.bed-1})):"dining"===n?m((0,o.Z)((0,o.Z)({},j),{},{dining:j.dining-1})):"toilet"===n?m((0,o.Z)((0,o.Z)({},j),{},{toilet:j.toilet-1})):"kitchen"===n?m((0,o.Z)((0,o.Z)({},j),{},{kitchen:j.kitchen-1})):"store"===n?m((0,o.Z)((0,o.Z)({},j),{},{store:j.store-1})):"outdoor"===n&&m((0,o.Z)((0,o.Z)({},j),{},{outdoor:j.outdoor-1}))};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("ul",{className:"price-lists",children:[(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:"standard"===s?"cleaning active":"",onClick:function(){r("standard")},children:"Standard Cleaning"})}),(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:"deep"===s?"cleaning active":"",onClick:function(){r("deep")},children:"Deep Cleaning"})}),(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:"construction"===s?"cleaning active":"",onClick:function(){r("construction")},children:"Post Construction Cleaning"})})]}),(0,c.jsx)("div",{className:"standard"===s?"foodPlan__price--weekly active":"foodPlan__price--weekly",children:(0,c.jsx)(y,(0,o.Z)({active:d,setActive:u,roomDecrease:b,roomIncrease:v,totalRooms:f},j))}),(0,c.jsx)("div",{className:"deep"===s?"foodPlan__price--daily active":"foodPlan__price--daily",children:(0,c.jsx)(k,(0,o.Z)({active:d,setActive:u,roomDecrease:b,roomIncrease:v,totalRooms:f},j))}),(0,c.jsx)("div",{className:"construction"===s?"foodPlan__price--other active":"foodPlan__price--other",children:(0,c.jsx)(p,(0,o.Z)({active:d,setActive:u,cleaningPlan:s,roomDecrease:b,roomIncrease:v,totalRooms:f},j))})]})};var Z=function(){var e=(0,t.useState)(!1),n=(0,i.Z)(e,2),s=n[0],o=n[1];return(0,c.jsxs)("div",{className:"extra",children:[(0,c.jsxs)("div",{className:"extra-title",children:[(0,c.jsx)("h5",{children:"Items that will cost you extra"}),(0,c.jsx)("button",{className:"btn-expand extra-btn",onClick:function(){return o((function(e){return!e}))},children:s?(0,c.jsx)(a._nT,{}):(0,c.jsx)(a.dEn,{})})]}),(0,c.jsxs)("ul",{className:s?"extra-description":"hide",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Extra item "}),(0,c.jsx)("span",{children:"\u20a6 250"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Big size towel (2 items) "}),(0,c.jsx)("span",{children:"\u20a6 500"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Bedsheet (3 items) "}),(0,c.jsx)("span",{children:"\u20a6 750"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Blanket (3 items)"}),(0,c.jsx)("span",{children:"\u20a6 750"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:" 3 piece Agbada (5 items)"}),(0,c.jsx)("span",{children:"\u20a6 1500"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Curtain (8 items)"}),(0,c.jsx)("span",{children:"\u20a6 2000"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Duvet (10 items)"}),(0,c.jsx)("span",{children:"\u20a6 2500"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"A pair of suit (10 items)"}),(0,c.jsx)("span",{children:"\u20a6 2500"})]})]})]})};var C=function(e){var n=e.handleIncrease,s=e.handleDecrease,t=e.active,o=e.setActive,i=e.laundryBag,r=e.price,l=Intl.NumberFormat("en-US");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"foodPlan__item daily",children:[(0,c.jsx)(Z,{}),(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{children:"Number of laundry bags"}),(0,c.jsx)("span",{children:"Approx 30 items per bag"})]}),(0,c.jsxs)("div",{className:"btn--group",children:[(0,c.jsx)("button",{className:"btn--minus btn",onClick:s,children:(0,c.jsx)(a.ywL,{})}),(0,c.jsx)("input",{type:"number",value:i,readOnly:!0}),(0,c.jsx)("button",{className:"btn--plus btn",onClick:n,children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("div",{className:"foodPlan__item",children:[(0,c.jsx)("p",{children:(0,c.jsx)("span",{children:"Frequency"})}),(0,c.jsxs)("div",{className:"btn--group",children:[(0,c.jsx)("button",{className:"once"===t?"btn-freq active":"btn-freq",onClick:function(){return o("once")},children:"Once A Week"}),(0,c.jsx)("button",{className:"twice"===t?"btn-freq active":"btn-freq",onClick:function(){return o("twice")},children:"Every 2 weeks"}),(0,c.jsx)("button",{className:"monthly"===t?"btn-freq active":"btn-freq",onClick:function(){return o("monthly")},children:"Once A Month"})]})]}),(0,c.jsxs)("div",{className:"foodPlan__bottom",children:[(0,c.jsxs)("h5",{children:[(0,c.jsx)("span",{children:"Price"}),(0,c.jsx)("span",{children:"\ud83d\udc49"}),"NGN ",l.format(r),".00"]}),(0,c.jsx)("p",{children:"Monthly"})]})]})};var S=function(){var e=(0,t.useState)(27e3),n=(0,i.Z)(e,2),s=n[0],o=n[1],r=(0,t.useState)(1),a=(0,i.Z)(r,2),l=a[0],d=a[1],u=(0,t.useState)("once"),h=(0,i.Z)(u,2),x=h[0],j=h[1],m=(0,t.useState)(48e3),f=(0,i.Z)(m,2),p=f[0],v=f[1],b=(0,t.useCallback)((function(){return"once"===x?o(27e3):"twice"===x?o(13500):"monthly"===x&&o(6750),s*l}),[l,x,s,o]);return(0,t.useEffect)((function(){v(b())}),[b]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(C,{active:x,setActive:j,laundryBag:l,price:p,handleIncrease:function(){d((function(e){return e+1})),console.log("increase")},handleDecrease:function(){d((function(e){return e<=1?1:e-1}))}})})};var _=function(){var e=(0,t.useState)(48e3),n=(0,i.Z)(e,2),s=n[0],o=n[1],r=(0,t.useState)(1),a=(0,i.Z)(r,2),l=a[0],d=a[1],u=(0,t.useState)("once"),h=(0,i.Z)(u,2),x=h[0],j=h[1],m=(0,t.useState)(48e3),f=(0,i.Z)(m,2),p=f[0],v=f[1],b=(0,t.useCallback)((function(){return"once"===x?o(48e3):"twice"===x?o(24e3):"monthly"===x&&o(12e3),s*l}),[l,x,s,o]);return(0,t.useEffect)((function(){v(b())}),[b]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(C,{active:x,setActive:j,laundryBag:l,price:p,handleIncrease:function(){d((function(e){return e+1})),console.log("increase")},handleDecrease:function(){d((function(e){return e<=1?1:e-1}))}})})};var P=function(){var e=(0,t.useState)("fold"),n=(0,i.Z)(e,2),s=n[0],o=n[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("ul",{className:"price-lists",children:[(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:"fold"===s?"active":"",onClick:function(){o("fold")},children:"Wash & Fold"})}),(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:"iron"===s?"active":"",onClick:function(){o("iron")},children:"Wash & Iron"})})]}),(0,c.jsx)("div",{className:"iron"===s?"foodPlan__price--weekly active":"foodPlan__price--weekly",children:(0,c.jsx)(_,{})}),(0,c.jsx)("div",{className:"fold"===s?"foodPlan__price--daily active":"foodPlan__price--daily",children:(0,c.jsx)(S,{})})]})},D=s(3540);var A=function(){var e=(0,t.useState)(1),n=(0,i.Z)(e,2),s=n[0],o=n[1],r=(0,t.useState)(55e3),l=(0,i.Z)(r,2),d=l[0],u=l[1],h=(0,t.useState)(55e3),x=(0,i.Z)(h,2),j=x[0],m=x[1],f=Intl.NumberFormat("en-US"),p=(0,t.useCallback)((function(){return m(1===s?55e3:5e4),s*j}),[s,j]);return(0,t.useEffect)((function(){u(p())}),[j,p]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"foodPlan__item daily",children:[(0,c.jsx)("p",{children:"How many meals do you want daily?"}),(0,c.jsxs)("div",{className:"btn--group",children:[(0,c.jsx)("button",{className:"btn--minus btn",onClick:function(){o((function(e){return e<=1?1:e-1})),p()},children:(0,c.jsx)(a.ywL,{})}),(0,c.jsx)("input",{type:"number",value:s,readOnly:!0}),(0,c.jsx)("button",{className:"btn--plus btn",onClick:function(){o((function(e){return e+1})),p()},children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("div",{className:"foodPlan__bottom",children:[(0,c.jsxs)("h5",{children:[(0,c.jsx)("span",{children:"Price"}),(0,c.jsx)("span",{children:"\ud83d\udc49"}),"NGN ",(0,D.ZP)(f.format(d)),".00"]}),(0,c.jsx)("p",{children:"Monthly"})]})]})};var I=function(){var e=(0,t.useState)(5),n=(0,i.Z)(e,2),s=n[0],o=n[1],r=(0,t.useState)(47500),l=(0,i.Z)(r,2),d=l[0],u=l[1],h=(0,t.useState)(9500),x=(0,i.Z)(h,2),j=x[0],m=x[1],f=(0,t.useState)(1),p=(0,i.Z)(f,2),v=p[0],b=p[1],k=(0,t.useRef)(),N=Intl.NumberFormat("en-US"),g=(0,t.useCallback)((function(){return 1===s?(m(11e3),b(1)):m(s>1&&s<=3?1e4:s>=4&&s<=5?9500:s>=6&&s<=9?9e3:s>=10&&s<=13?8e3:s>=14&&s<=19?7760:7500),s*j*v}),[s,j,v]);return(0,t.useEffect)((function(){u(g())}),[j,g]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"foodPlan__item weekly1",children:[(0,c.jsx)("p",{children:"Number of meals per delivery?"}),(0,c.jsxs)("div",{className:"btn--group",children:[(0,c.jsx)("button",{className:"btn--minus btn",onClick:function(){o((function(e){return e>1?e-1:1})),g()},children:(0,c.jsx)(a.ywL,{})}),(0,c.jsx)("input",{type:"number",value:s,min:1,ref:k,readOnly:!0}),(0,c.jsx)("button",{className:"btn--plus btn",onClick:function(){o((function(e){return e+1})),g(j)},children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("div",{className:"foodPlan__item weekly2",children:[(0,c.jsx)("p",{className:"p2",children:"Should we deliver all once or twice weekly?"}),(0,c.jsxs)("div",{className:"btn--group",children:[(0,c.jsx)("button",{className:"btn--minus btn",onClick:function(){b((function(e){return e<=1?1:e-1}))},children:(0,c.jsx)(a.ywL,{})}),(0,c.jsx)("input",{type:"number",value:v,readOnly:!0}),(0,c.jsx)("button",{className:"btn--plus btn",onClick:function(){b((function(e){return e>=2?2:1===s?1:e+1}))},children:(0,c.jsx)(a.Lfi,{})})]})]}),(0,c.jsxs)("div",{className:"foodPlan__bottom",children:[(0,c.jsxs)("h5",{children:[(0,c.jsx)("span",{children:"Price"}),(0,c.jsx)("span",{children:"\ud83d\udc49"}),"NGN ",(0,D.ZP)(N.format(d)),".00"]}),(0,c.jsx)("p",{children:"Monthly"})]})]})};var L=function(){var e=(0,t.useState)("weekly"),n=(0,i.Z)(e,2),s=n[0],o=n[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("ul",{className:"price-lists",children:[(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:"daily"===s?"active":"",onClick:function(){o("daily")},children:"Daily"})}),(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:"weekly"===s?"active":"",onClick:function(){o("weekly")},children:"Weekly"})})]}),(0,c.jsx)("div",{className:"weekly"===s?"foodPlan__price--weekly active":"foodPlan__price--weekly",children:(0,c.jsx)(I,{})}),(0,c.jsx)("div",{className:"daily"===s?"foodPlan__price--daily active":"foodPlan__price--daily",children:(0,c.jsx)(A,{})})]})};var F=function(e){var n=e.title,s=e.subtitle,t=e.iconTitle1,o=e.iconSubTitle1,i=e.iconTitle2,r=e.iconSubTitle2,a=e.iconTitle3,l=e.iconSubTitle3,d=e.plan;return(0,c.jsx)("section",{className:"foodPlan",id:"plan",children:(0,c.jsxs)("div",{className:"foodPlan__content wrapper",children:[(0,c.jsxs)("div",{className:"foodPlan__title",children:[(0,c.jsxs)("h3",{children:[n,":"]}),(0,c.jsx)("p",{children:s}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("h5",{className:"icon icon--one",children:"\ud83d\udc40"}),(0,c.jsxs)("div",{className:"icon--text",children:[(0,c.jsx)("h5",{children:t}),(0,c.jsx)("p",{children:o})]})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("h5",{className:"icon icon--two",children:"\ud83d\ude9b"}),(0,c.jsxs)("div",{className:"icon--text",children:[(0,c.jsx)("h5",{children:i}),(0,c.jsx)("p",{children:r})]})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("h5",{className:"icon icon--three",children:"\ud83d\udc7c"}),(0,c.jsxs)("div",{className:"icon--text",children:[(0,c.jsx)("h5",{children:a}),(0,c.jsx)("p",{children:l})]})]})]})]}),(0,c.jsx)("div",{className:"foodPlan__price",children:"food"===d?(0,c.jsx)(L,{}):"laundry"===d?(0,c.jsx)(P,{}):(0,c.jsx)(w,{})})]})})}}}]);
//# sourceMappingURL=652.515385e9.chunk.js.map