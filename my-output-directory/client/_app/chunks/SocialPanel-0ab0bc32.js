import{S as v,i as S,s as j,V as B,v as m,w as $,x as p,p as c,n as f,A as u,W as C,a8 as q,j as k,l as h,f as g,d as _,t as A,g as O,h as P,k as w,m as G,o as L,Z as M,ad as T,ae as U,ag as W,af as N}from"./vendor-fbdada6f.js";const b={insta:{img:"img/social/insta_black.png",link:"https://www.instagram.com/darkdev.games/"},youtube:{img:"img/social/youtube_black.png",link:"https://www.youtube.com/channel/UCkOSmUpGfWuLXMskYTymLGA"},tg:{img:"img/social/telega_black.png",link:"https://t.me/darkdev_games"},fb:{img:"img/social/fb_black.png",link:""},twitter:{img:"img/social/tweeter_black.png",link:""},patronite:{img:"img/social/patronite_black.png",link:""},pinterest:{img:"img/social/pinterest_black.png",link:"www.pinterest.com/darkdev_games"},in:{img:"img/social/in_black.png",link:"https://www.linkedin.com/groups/13745684/"},etsy:{img:"img/social/etsy_black.png",link:""}};function x(s,t,l){const e=s.slice();return e[2]=t[l],e}function R(s){let t=s[0]+" \u{1F499}",l;return{c(){l=A(t)},l(e){l=O(e,t)},m(e,a){g(e,l,a)},p(e,a){a&1&&t!==(t=e[0]+" \u{1F499}")&&P(l,t)},d(e){e&&_(l)}}}function V(s){let t,l;return t=new W({props:{class:"card-media-square",style:"background-image: url('"+s[2].img+"');",aspectRatio:"square"}}),{c(){m(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){p(t,e,a),l=!0},p:N,i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){f(t.$$.fragment,e),l=!1},d(e){u(t,e)}}}function X(s){let t,l,e;function a(){return s[1](s[2])}return t=new U({props:{$$slots:{default:[V]},$$scope:{ctx:s}}}),t.$on("click",a),{c(){m(t.$$.fragment),l=k()},l(n){$(t.$$.fragment,n),l=h(n)},m(n,r){p(t,n,r),g(n,l,r),e=!0},p(n,r){s=n;const i={};r&32&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(n){e||(c(t.$$.fragment,n),e=!0)},o(n){f(t.$$.fragment,n),e=!1},d(n){u(t,n),n&&_(l)}}}function y(s){let t,l;return t=new T({props:{style:"width: 70px; margin: 5px;",$$slots:{default:[X]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){p(t,e,a),l=!0},p(e,a){const n={};a&32&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){f(t.$$.fragment,e),l=!1},d(e){u(t,e)}}}function Y(s){let t,l,e=Object.values(b),a=[];for(let r=0;r<e.length;r+=1)a[r]=y(x(s,e,r));const n=r=>f(a[r],1,1,()=>{a[r]=null});return{c(){for(let r=0;r<a.length;r+=1)a[r].c();t=w()},l(r){for(let i=0;i<a.length;i+=1)a[i].l(r);t=w()},m(r,i){for(let o=0;o<a.length;o+=1)a[o].m(r,i);g(r,t,i),l=!0},p(r,i){if(i&0){e=Object.values(b);let o;for(o=0;o<e.length;o+=1){const d=x(r,e,o);a[o]?(a[o].p(d,i),c(a[o],1)):(a[o]=y(d),a[o].c(),c(a[o],1),a[o].m(t.parentNode,t))}for(G(),o=e.length;o<a.length;o+=1)n(o);L()}},i(r){if(!l){for(let i=0;i<e.length;i+=1)c(a[i]);l=!0}},o(r){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)f(a[i]);l=!1},d(r){M(a,r),r&&_(t)}}}function Z(s){let t,l,e,a;return t=new C({props:{style:"font: 30px 'grafitty'; text-align: center; color: #fff;",$$slots:{default:[R]},$$scope:{ctx:s}}}),e=new q({props:{style:"display: flex; flex-direction: row; align-content: center; width: 100%; min-width: 300px; flex-wrap: wrap;",$$slots:{default:[Y]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment),l=k(),m(e.$$.fragment)},l(n){$(t.$$.fragment,n),l=h(n),$(e.$$.fragment,n)},m(n,r){p(t,n,r),g(n,l,r),p(e,n,r),a=!0},p(n,r){const i={};r&33&&(i.$$scope={dirty:r,ctx:n}),t.$set(i);const o={};r&32&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){a||(c(t.$$.fragment,n),c(e.$$.fragment,n),a=!0)},o(n){f(t.$$.fragment,n),f(e.$$.fragment,n),a=!1},d(n){u(t,n),n&&_(l),u(e,n)}}}function z(s){let t,l;return t=new B({props:{style:"margin: 0 auto; max-width: 340px; height: auto; margin-bottom: 25px; border: 2px solid #47babb; background-color: #191B1B;",class:"paper-demo",$$slots:{default:[Z]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){p(t,e,a),l=!0},p(e,[a]){const n={};a&33&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){f(t.$$.fragment,e),l=!1},d(e){u(t,e)}}}function D(s,t,l){let{title:e=""}=t;const a=n=>location.href=n.link;return s.$$set=n=>{"title"in n&&l(0,e=n.title)},[e,a]}class F extends v{constructor(t){super();S(this,t,D,z,j,{title:0})}}export{F as S,b as s};
