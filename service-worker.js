if(!self.define){let s,i={};const n=(n,l)=>(n=new URL(n+".js",l).href,i[n]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=i,document.head.appendChild(s)}else s=n,importScripts(n),i()})).then((()=>{let s=i[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,c)=>{const e=s||("document"in self?document.currentScript.src:"")||location.href;if(i[e])return;let u={};const r=s=>n(s,e),t={module:{uri:e},exports:u,require:r};i[e]=Promise.all(l.map((s=>t[s]||r(s)))).then((s=>(c(...s),u)))}}define(["./workbox-bb2e0bf1"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin-plus"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"index.html",revision:"870f11c6c9a62cc65be92db4112b4f74"},{url:"json/china.json",revision:"32a9d07a4892a8ad7666cb6c4d1a4bdb"},{url:"manifest.json",revision:"76b3625bb9dd0cf9b7e3873b860c21ed"},{url:"static/css/379.7e2def07.css",revision:null},{url:"static/css/836.35f68b37.css",revision:null},{url:"static/css/app.9769ee0e.css",revision:null},{url:"static/css/element-plus.e284966b.css",revision:null},{url:"static/css/loading.css",revision:"deb843e8a179e15d936633e759d8d308"},{url:"static/css/vab-chunk-02ec2db9.e982a9f4.css",revision:null},{url:"static/css/vab-chunk-1656f0b4.f393fce5.css",revision:null},{url:"static/css/vab-chunk-3e2fe043.4418ab80.css",revision:null},{url:"static/css/vab-chunk-4a74ea38.b6fe8f6d.css",revision:null},{url:"static/css/vab-chunk-4e2fb6b0.33eade3c.css",revision:null},{url:"static/css/vab-chunk-69403744.461d7faa.css",revision:null},{url:"static/css/vab-plugins.3f473fe4.css",revision:null},{url:"static/fonts/remixicon.31d28485.f12fd1a0.eot",revision:null},{url:"static/fonts/remixicon.881fbc46.1e0fb76b.woff",revision:null},{url:"static/fonts/remixicon.888e61f0.e313410c.ttf",revision:null},{url:"static/fonts/remixicon.9915fef9.5400338c.woff2",revision:null},{url:"static/img/403.17c6c30c.png",revision:null},{url:"static/img/404.1f87f517.png",revision:null},{url:"static/img/background-1.31e3a0ac.png",revision:null},{url:"static/img/background.d7764eb5.jpg",revision:null},{url:"static/img/login_form.26aa56cf.png",revision:null},{url:"static/img/mobile.244ab3b4.png",revision:null},{url:"static/img/remixicon.95138f36.2b2ee314.svg",revision:null},{url:"static/img/user.2e7840a2.png",revision:null},{url:"static/js/369.b3a0c2b7.js",revision:null},{url:"static/js/379.37dbc13b.js",revision:null},{url:"static/js/836.5781b14f.js",revision:null},{url:"static/js/909.52f11cc4.js",revision:null},{url:"static/js/app.7f795b9b.js",revision:null},{url:"static/js/element-plus.5cf689f9.js",revision:null},{url:"static/js/vab-chunk-00833fa6.239bbdd3.js",revision:null},{url:"static/js/vab-chunk-02ec2db9.3200ed30.js",revision:null},{url:"static/js/vab-chunk-06b9cdb9.ad0ac974.js",revision:null},{url:"static/js/vab-chunk-1656f0b4.384f7dc6.js",revision:null},{url:"static/js/vab-chunk-3e2fe043.c31bd071.js",revision:null},{url:"static/js/vab-chunk-47257c03.d800069e.js",revision:null},{url:"static/js/vab-chunk-4a74ea38.0832eb19.js",revision:null},{url:"static/js/vab-chunk-4e2fb6b0.faa82f85.js",revision:null},{url:"static/js/vab-chunk-5add3539.40459a70.js",revision:null},{url:"static/js/vab-chunk-69403744.c3d2df01.js",revision:null},{url:"static/js/vab-chunk-8cbd2506.8072b4fc.js",revision:null},{url:"static/js/vab-chunk-b886e5fb.0d321dec.js",revision:null},{url:"static/js/vab-plugins.2bc87c33.js",revision:null}],{})}));
