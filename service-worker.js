if(!self.define){let s,i={};const n=(n,l)=>(n=new URL(n+".js",l).href,i[n]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=i,document.head.appendChild(s)}else s=n,importScripts(n),i()})).then((()=>{let s=i[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,e)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let u={};const r=s=>n(s,c),t={module:{uri:c},exports:u,require:r};i[c]=Promise.all(l.map((s=>t[s]||r(s)))).then((s=>(e(...s),u)))}}define(["./workbox-bb2e0bf1"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin-plus"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"index.html",revision:"4eaa7db67a23a4d041f0b50a5378cdb4"},{url:"json/china.json",revision:"32a9d07a4892a8ad7666cb6c4d1a4bdb"},{url:"manifest.json",revision:"76b3625bb9dd0cf9b7e3873b860c21ed"},{url:"static/css/379.7e2def07.css",revision:null},{url:"static/css/836.35f68b37.css",revision:null},{url:"static/css/960.ebf5c10e.css",revision:null},{url:"static/css/app.57bbced7.css",revision:null},{url:"static/css/element-plus.e284966b.css",revision:null},{url:"static/css/loading.css",revision:"deb843e8a179e15d936633e759d8d308"},{url:"static/css/vab-chunk-02ec2db9.499eec2d.css",revision:null},{url:"static/css/vab-chunk-1656f0b4.2fe0ee12.css",revision:null},{url:"static/css/vab-chunk-3e2fe043.d4b5d126.css",revision:null},{url:"static/css/vab-chunk-4a74ea38.34cf67cb.css",revision:null},{url:"static/css/vab-chunk-4e2fb6b0.953a2aaa.css",revision:null},{url:"static/css/vab-plugins.a9230ec8.css",revision:null},{url:"static/fonts/remixicon.31d28485.f12fd1a0.eot",revision:null},{url:"static/fonts/remixicon.881fbc46.1e0fb76b.woff",revision:null},{url:"static/fonts/remixicon.888e61f0.e313410c.ttf",revision:null},{url:"static/fonts/remixicon.9915fef9.5400338c.woff2",revision:null},{url:"static/img/403.17c6c30c.png",revision:null},{url:"static/img/404.1f87f517.png",revision:null},{url:"static/img/background-1.31e3a0ac.png",revision:null},{url:"static/img/background.d7764eb5.jpg",revision:null},{url:"static/img/login_form.26aa56cf.png",revision:null},{url:"static/img/mobile.244ab3b4.png",revision:null},{url:"static/img/remixicon.95138f36.2b2ee314.svg",revision:null},{url:"static/img/user.2e7840a2.png",revision:null},{url:"static/js/379.e6476f24.js",revision:null},{url:"static/js/836.b8d9ba69.js",revision:null},{url:"static/js/885.876fd0f0.js",revision:null},{url:"static/js/909.43bab577.js",revision:null},{url:"static/js/960.b79e1bee.js",revision:null},{url:"static/js/app.afda7e7a.js",revision:null},{url:"static/js/element-plus.ef862771.js",revision:null},{url:"static/js/vab-chunk-00833fa6.e8acbc7f.js",revision:null},{url:"static/js/vab-chunk-02ec2db9.738eb76a.js",revision:null},{url:"static/js/vab-chunk-06b9cdb9.baeb16a4.js",revision:null},{url:"static/js/vab-chunk-1656f0b4.8358c9c8.js",revision:null},{url:"static/js/vab-chunk-3e2fe043.7ddfedd9.js",revision:null},{url:"static/js/vab-chunk-47257c03.04b09868.js",revision:null},{url:"static/js/vab-chunk-4a74ea38.17428ba5.js",revision:null},{url:"static/js/vab-chunk-4e2fb6b0.37c0ed16.js",revision:null},{url:"static/js/vab-chunk-5add3539.eac23221.js",revision:null},{url:"static/js/vab-chunk-8cbd2506.b1804b1c.js",revision:null},{url:"static/js/vab-chunk-b886e5fb.877eb6a9.js",revision:null},{url:"static/js/vab-plugins.8fb99941.js",revision:null}],{})}));
