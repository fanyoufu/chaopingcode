if(!self.define){let s,i={};const n=(n,l)=>(n=new URL(n+".js",l).href,i[n]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=i,document.head.appendChild(s)}else s=n,importScripts(n),i()})).then((()=>{let s=i[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,c)=>{const e=s||("document"in self?document.currentScript.src:"")||location.href;if(i[e])return;let u={};const r=s=>n(s,e),t={module:{uri:e},exports:u,require:r};i[e]=Promise.all(l.map((s=>t[s]||r(s)))).then((s=>(c(...s),u)))}}define(["./workbox-bb2e0bf1"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin-plus"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"index.html",revision:"3d4abd6705627cb58feea0424a7539c6"},{url:"json/china.json",revision:"32a9d07a4892a8ad7666cb6c4d1a4bdb"},{url:"manifest.json",revision:"76b3625bb9dd0cf9b7e3873b860c21ed"},{url:"static/css/379.5938258e.css",revision:null},{url:"static/css/974.35f68b37.css",revision:null},{url:"static/css/app.b79ecd68.css",revision:null},{url:"static/css/element-plus.b83681ca.css",revision:null},{url:"static/css/loading.css",revision:"deb843e8a179e15d936633e759d8d308"},{url:"static/css/vab-chunk-02ec2db9.f8856825.css",revision:null},{url:"static/css/vab-chunk-1656f0b4.2fe0ee12.css",revision:null},{url:"static/css/vab-chunk-3e2fe043.b0034b74.css",revision:null},{url:"static/css/vab-chunk-4a74ea38.f0544ef8.css",revision:null},{url:"static/css/vab-chunk-4e2fb6b0.6bda2bd6.css",revision:null},{url:"static/css/vab-chunk-8cbd2506.0ba1a06c.css",revision:null},{url:"static/css/vab-chunk-ad6a2f20.ae6b1552.css",revision:null},{url:"static/css/vab-plugins.8cb7062c.css",revision:null},{url:"static/fonts/remixicon.31d28485.f12fd1a0.eot",revision:null},{url:"static/fonts/remixicon.881fbc46.1e0fb76b.woff",revision:null},{url:"static/fonts/remixicon.888e61f0.e313410c.ttf",revision:null},{url:"static/fonts/remixicon.9915fef9.5400338c.woff2",revision:null},{url:"static/img/403.17c6c30c.png",revision:null},{url:"static/img/404.1f87f517.png",revision:null},{url:"static/img/background-1.31e3a0ac.png",revision:null},{url:"static/img/background.d7764eb5.jpg",revision:null},{url:"static/img/login_form.26aa56cf.png",revision:null},{url:"static/img/mobile.244ab3b4.png",revision:null},{url:"static/img/remixicon.95138f36.2b2ee314.svg",revision:null},{url:"static/img/user.2e7840a2.png",revision:null},{url:"static/js/379.debd7b9c.js",revision:null},{url:"static/js/885.403af30c.js",revision:null},{url:"static/js/909.1fc42eaa.js",revision:null},{url:"static/js/974.4ae42a33.js",revision:null},{url:"static/js/app.99c442e0.js",revision:null},{url:"static/js/element-plus.44588a53.js",revision:null},{url:"static/js/vab-chunk-00833fa6.b60039ae.js",revision:null},{url:"static/js/vab-chunk-02ec2db9.dda80c91.js",revision:null},{url:"static/js/vab-chunk-06b9cdb9.9d447c63.js",revision:null},{url:"static/js/vab-chunk-1656f0b4.e8598dbd.js",revision:null},{url:"static/js/vab-chunk-3e2fe043.93ffe03c.js",revision:null},{url:"static/js/vab-chunk-47257c03.cd566f1a.js",revision:null},{url:"static/js/vab-chunk-4a74ea38.5fbf459c.js",revision:null},{url:"static/js/vab-chunk-4e2fb6b0.59861f90.js",revision:null},{url:"static/js/vab-chunk-5add3539.a9f1a088.js",revision:null},{url:"static/js/vab-chunk-8cbd2506.4d88b91c.js",revision:null},{url:"static/js/vab-chunk-ad6a2f20.1345977f.js",revision:null},{url:"static/js/vab-chunk-b886e5fb.36c5fd15.js",revision:null},{url:"static/js/vab-plugins.2186df3c.js",revision:null}],{})}));
