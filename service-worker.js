if(!self.define){let s,i={};const l=(l,n)=>(l=new URL(l+".js",n).href,i[l]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=i,document.head.appendChild(s)}else s=l,importScripts(l),i()})).then((()=>{let s=i[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,e)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let u={};const r=s=>l(s,c),t={module:{uri:c},exports:u,require:r};i[c]=Promise.all(n.map((s=>t[s]||r(s)))).then((s=>(e(...s),u)))}}define(["./workbox-bb2e0bf1"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin-plus"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"index.html",revision:"50bad5ec68410a4003850bada3245a74"},{url:"json/china.json",revision:"32a9d07a4892a8ad7666cb6c4d1a4bdb"},{url:"manifest.json",revision:"76b3625bb9dd0cf9b7e3873b860c21ed"},{url:"static/css/379.5938258e.css",revision:null},{url:"static/css/39.4fba4dd1.css",revision:null},{url:"static/css/525.03a9b9b7.css",revision:null},{url:"static/css/903.286da717.css",revision:null},{url:"static/css/app.f2780c41.css",revision:null},{url:"static/css/element-plus.c2900a8d.css",revision:null},{url:"static/css/loading.css",revision:"deb843e8a179e15d936633e759d8d308"},{url:"static/css/vab-chunk-02ec2db9.f8856825.css",revision:null},{url:"static/css/vab-chunk-4e2fb6b0.52ad84c4.css",revision:null},{url:"static/css/vab-chunk-8cbd2506.d160a522.css",revision:null},{url:"static/css/vab-plugins.c99fb4c1.css",revision:null},{url:"static/fonts/remixicon.31d28485.f12fd1a0.eot",revision:null},{url:"static/fonts/remixicon.881fbc46.1e0fb76b.woff",revision:null},{url:"static/fonts/remixicon.888e61f0.e313410c.ttf",revision:null},{url:"static/fonts/remixicon.9915fef9.5400338c.woff2",revision:null},{url:"static/img/403.17c6c30c.png",revision:null},{url:"static/img/404.1f87f517.png",revision:null},{url:"static/img/background-1.31e3a0ac.png",revision:null},{url:"static/img/background.d7764eb5.jpg",revision:null},{url:"static/img/login_form.26aa56cf.png",revision:null},{url:"static/img/mobile.244ab3b4.png",revision:null},{url:"static/img/remixicon.95138f36.2b2ee314.svg",revision:null},{url:"static/img/user.2e7840a2.png",revision:null},{url:"static/js/369.e0fc7742.js",revision:null},{url:"static/js/379.edc32844.js",revision:null},{url:"static/js/39.93d25754.js",revision:null},{url:"static/js/525.b90a3721.js",revision:null},{url:"static/js/614.05969eb0.js",revision:null},{url:"static/js/903.1faaf9ae.js",revision:null},{url:"static/js/app.f2c81e03.js",revision:null},{url:"static/js/element-plus.38ecc042.js",revision:null},{url:"static/js/vab-chunk-00833fa6.5969ee21.js",revision:null},{url:"static/js/vab-chunk-02ec2db9.8c47ac91.js",revision:null},{url:"static/js/vab-chunk-06b9cdb9.50e323c4.js",revision:null},{url:"static/js/vab-chunk-1656f0b4.f1f8d443.js",revision:null},{url:"static/js/vab-chunk-3e2fe043.55fabf32.js",revision:null},{url:"static/js/vab-chunk-47257c03.c18ffe91.js",revision:null},{url:"static/js/vab-chunk-4e2fb6b0.adf3ff12.js",revision:null},{url:"static/js/vab-chunk-5add3539.c2aada3e.js",revision:null},{url:"static/js/vab-chunk-8cbd2506.8d40e10e.js",revision:null},{url:"static/js/vab-chunk-9386b7e9.9a858907.js",revision:null},{url:"static/js/vab-chunk-b886e5fb.58225021.js",revision:null},{url:"static/js/vab-plugins.11be9447.js",revision:null}],{})}));
