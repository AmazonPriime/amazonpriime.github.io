(function(e){function t(t){for(var c,l,i=t[0],r=t[1],b=t[2],j=0,f=[];j<i.length;j++)l=i[j],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&f.push(s[l][0]),s[l]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);a&&a(t);while(f.length)f.shift()();return o.push.apply(o,b||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},s={app:0},o=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/phd/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var a=r;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10d0":function(e,t,n){"use strict";n("4436")},2145:function(e,t,n){},"37b1":function(e,t,n){"use strict";n("8df9")},4436:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const s=Object(c["f"])("div",{class:"site-title"}," Physics PhD Locator ",-1),o=Object(c["f"])("div",{class:"site-description"}," This website will obtain listings from several different websites commonly used to find PhD funding projects. ",-1),l={key:0,class:"loading"},i=Object(c["g"])(" Loading PhD listings... "),r=Object(c["f"])("br",null,null,-1),b=Object(c["g"])(" Takes about 30s to a minute :) "),a=[i,r,b];function j(e,t,n,i,r,b){const j=Object(c["l"])("ListingContainer");return Object(c["h"])(),Object(c["e"])(c["a"],null,[s,o,r.loading?(Object(c["h"])(),Object(c["e"])("div",l,a)):(Object(c["h"])(),Object(c["c"])(j,{key:1,jobs:r.jobs},null,8,["jobs"]))],64)}const f=e=>(Object(c["j"])("data-v-65e26f87"),e=e(),Object(c["i"])(),e),d={class:"filters"},u={class:"listings-container"},O={key:0},p={class:"filter-details"},h=Object(c["g"])(" Found "),g=Object(c["g"])(" positions! "),m={key:0,class:"no-listings"},v=Object(c["g"])(" Hmm there seems to be no listings? "),y=f(()=>Object(c["f"])("br",null,null,-1)),w=f(()=>Object(c["f"])("img",{src:"https://media4.giphy.com/media/Y15VREpz6N6MaPflI2/200w.gif?cid=82a1493b3ohkbl3ph8rqkcp09xzr3m51b05y8yjtpvk7mxwl&rid=200w.gif&ct=g"},null,-1)),k=[v,y,w],L={key:1},S={class:"filter-details"},P=Object(c["g"])(" positions based on your filter! "),_={key:0,class:"no-listings"},x=Object(c["g"])(" Hmm there seems to be no listings? "),C=f(()=>Object(c["f"])("br",null,null,-1)),J=f(()=>Object(c["f"])("img",{src:"https://media4.giphy.com/media/Y15VREpz6N6MaPflI2/200w.gif?cid=82a1493b3ohkbl3ph8rqkcp09xzr3m51b05y8yjtpvk7mxwl&rid=200w.gif&ct=g"},null,-1)),M=[x,C,J];function z(e,t,n,s,o,l){const i=Object(c["l"])("Listing");return Object(c["h"])(),Object(c["e"])("div",null,[Object(c["f"])("div",d,[Object(c["f"])("div",null,[Object(c["f"])("input",{type:"text",class:"filter-search",placeholder:"Search filter",onChange:t[0]||(t[0]=(...e)=>l.filter&&l.filter(...e))},null,32)])]),Object(c["f"])("div",u,[o.showFiltered?(Object(c["h"])(),Object(c["e"])("div",L,[Object(c["f"])("div",S,[Object(c["f"])("b",null,Object(c["m"])(o.filteredJobs.length),1),P]),(Object(c["h"])(!0),Object(c["e"])(c["a"],null,Object(c["k"])(o.filteredJobs,e=>(Object(c["h"])(),Object(c["c"])(i,{job:e,key:e.link,class:"filtered"},null,8,["job"]))),128)),0===o.filteredJobs.length?(Object(c["h"])(),Object(c["e"])("div",_,M)):Object(c["d"])("",!0)])):(Object(c["h"])(),Object(c["e"])("div",O,[Object(c["f"])("div",p,[h,Object(c["f"])("b",null,Object(c["m"])(n.jobs.length),1),g]),(Object(c["h"])(!0),Object(c["e"])(c["a"],null,Object(c["k"])(n.jobs,e=>(Object(c["h"])(),Object(c["c"])(i,{job:e,key:e.link,class:"not-filtered"},null,8,["job"]))),128)),0===n.jobs.length?(Object(c["h"])(),Object(c["e"])("div",m,k)):Object(c["d"])("",!0)]))])])}n("14d9");const D={class:"listing"},E={class:"title"},F={class:"employer"},N=Object(c["g"])(" Employer: "),I={class:"description"},T={class:"location"},A=Object(c["g"])(" Location: "),q={class:"salary"},H=Object(c["g"])(" Salary: "),R={class:"date"},V=Object(c["g"])(" Opened: "),Y={class:"date"},W=Object(c["g"])(" Closes: "),$=Object(c["g"])(" Website: "),B=["href"],G=["href"];function K(e,t,n,s,o,l){return Object(c["h"])(),Object(c["e"])("div",D,[Object(c["f"])("span",E,Object(c["m"])(n.job.title),1),Object(c["f"])("span",F,[N,Object(c["f"])("i",null,Object(c["m"])(n.job.employer),1)]),Object(c["f"])("span",I,Object(c["m"])(n.job.description),1),Object(c["f"])("span",T,[A,Object(c["f"])("i",null,Object(c["m"])(n.job.location),1)]),Object(c["f"])("span",q,[H,Object(c["f"])("i",null,Object(c["m"])(n.job.salary),1)]),Object(c["f"])("span",R,[V,Object(c["f"])("i",null,Object(c["m"])(n.job.date_placed),1)]),Object(c["f"])("span",Y,[W,Object(c["f"])("i",null,Object(c["m"])(n.job.date_closes),1)]),Object(c["f"])("span",null,[$,Object(c["f"])("a",{href:n.job.link,class:"inner-link"},[Object(c["f"])("b",null,Object(c["m"])(n.job.link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1]),1)],8,B)]),Object(c["f"])("a",{href:n.job.link,target:"_blank",class:"button"}," Show Listing ",8,G)])}var Q={name:"Listing",props:{job:{}}},U=(n("37b1"),n("6b0d")),X=n.n(U);const Z=X()(Q,[["render",K],["__scopeId","data-v-061e41f7"]]);var ee=Z,te={name:"ListingContainer",components:{Listing:ee},props:{jobs:[]},data(){return{filteredJobs:[],showFiltered:!1}},methods:{filter(e){const t=e.target.value.toLowerCase();if(0===t.length)return this.filteredJobs=[],void(this.showFiltered=!1);const n=t.split(" "),c=[];this.jobs.forEach(e=>{const t=e.title.toLowerCase(),s=e.description.toLowerCase(),o=e.employer.toLowerCase(),l=e.location.toLowerCase();n.forEach(n=>{const i=t.includes(n)||s.includes(n),r=o.includes(n)||l.includes(n);(i||r)&&""!==n&&c.push(e)})}),this.filteredJobs=c,this.showFiltered=!0}}};n("f507");const ne=X()(te,[["render",z],["__scopeId","data-v-65e26f87"]]);var ce=ne;const se="https://phd.lukeh.xyz";var oe={name:"App",components:{ListingContainer:ce},data(){return{jobs:[],loading:!0}},created(){if(localStorage.jobs){const e=Date.now(),t=Number(localStorage.lastAccess),n=(e-t)/1e3/60/60;if(n<12){const e=JSON.parse(localStorage.jobs);this.jobs=e||[],this.loading=!1}}else fetch(se).then(e=>e.json()).then(e=>{this.jobs=e,this.loading=!1,localStorage.jobs=JSON.stringify(e),localStorage.lastAccess=Date.now()}).catch(e=>{console.log(e)})}};n("10d0");const le=X()(oe,[["render",j]]);var ie=le;Object(c["b"])(ie).mount("#app")},"8df9":function(e,t,n){},f507:function(e,t,n){"use strict";n("2145")}});
//# sourceMappingURL=app.224779c8.js.map