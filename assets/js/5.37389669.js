(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{211:function(t,e,a){},212:function(t,e,a){},217:function(t,e,a){},220:function(t,e,a){"use strict";a(213);var n={props:{pageInfo:{type:Object,default:function(){return{}}},currentTag:{type:String,default:""},hideAccessNumber:{type:Boolean,default:!1}},data:function(){return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}},filters:{formatDate:function(t){return t?function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate(),r=e.getHours();r=r>9?r:"0"+r;var i=e.getMinutes();i=i>9?i:"0"+i;var o=e.getSeconds();o=o>9?o:"0"+o;var c=a+"/"+n+"/"+s;return r>0&&i>0&&o>0&&(c+=" "+r+":"+i+":"+o),-1!=c.indexOf("NaN")?t:c}(t):null}},methods:{goTags:function(t){console.log(this.pageInfo);var e=this.$site.base;window.location.href="".concat(e,"tag/?tag=").concat(t)}}},s=(a(222),a(0)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?a("i",{staticClass:"iconfont reco-account"},[a("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?a("i",{staticClass:"iconfont reco-date"},[a("span",[t._v("创建于："+t._s(t._f("formatDate")(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),t.pageInfo.lastUpdated?a("i",{staticClass:"iconfont reco-date"},[a("span",[t._v("最后更新："+t._s(t._f("formatDate")(t.pageInfo.lastUpdated)))])]):t._e(),t._v(" "),"valine"!==t.$themeConfig.commentsSolution||!1===t.pageInfo.frontmatter.visits&&!0===t.hideAccessNumber?t._e():a("i",{staticClass:"iconfont reco-eye",staticStyle:{display:"none"}},[a("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1),t._v(" "),t.pageInfo.frontmatter.tags?a("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,(function(e,n){return a("span",{key:n,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(a){return t.goTags(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,"45a26ff0",null);e.a=r.exports},222:function(t,e,a){"use strict";var n=a(211);a.n(n).a},223:function(t,e,a){"use strict";var n=a(212);a.n(n).a},224:function(t,e,a){"use strict";var n={components:{PageInfo:a(220).a},props:["data","currentPage","currentTag","hideAccessNumber"]},s=(a(223),a(0)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-wrapper"},t._l(t.data,(function(e,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:n>=10*t.currentPage-10&&n<10*t.currentPage,expression:"index >= (currentPage * 10 - 10) && index < currentPage * 10"}],key:e.path,staticClass:"abstract-item"},[a("div",{staticClass:"title"},[a("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),a("hr"),t._v(" "),a("img",{staticClass:"abstract",staticStyle:{"max-height":"120px"},attrs:{src:e.frontmatter.thumbnail}}),t._v(" "),e.excerpt?a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(e.excerpt)}}):e.frontmatter.description?a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(e.frontmatter.description)}}):t._e(),t._v(" "),a("div",{staticClass:"abstract",staticStyle:{"padding-bottom":"15px"}},[e.excerpt?a("router-link",{attrs:{to:e.path}},[t._v("查看全文")]):t._e()],1),t._v(" "),a("PageInfo",{attrs:{pageInfo:e,hideAccessNumber:!(!0!==t.hideAccessNumber),currentTag:t.currentTag}})],1)})),0)}),[],!1,null,"6de56560",null);e.a=r.exports},251:function(t,e,a){},252:function(t,e,a){"use strict";var n=a(217);a.n(n).a},253:function(t,e,a){},254:function(t,e,a){},255:function(t,e,a){},256:function(t,e,a){},257:function(t,e,a){},263:function(t,e,a){"use strict";var n=a(228),s=(a(214),{mixins:[a(219).a],props:{currentTag:{type:String,default:""}},data:function(){return{tags:[]}},created:function(){var t=this;if(this.$tags.list.length>0){var e=this.$tags.list;e.map((function(a){var n=t._tagColor();return a.color=n,e})),this.tags=[{name:"全部",color:this._tagColor()}].concat(Object(n.a)(e))}},methods:{tagClick:function(t){this.$emit("getCurrentTag",t)}}}),r=(a(252),a(0)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e,n){return a("span",{key:n,class:{active:e.name==t.currentTag},style:{backgroundColor:e.color},on:{click:function(a){return t.tagClick(e.name)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"eacf8020",null);e.a=i.exports},316:function(t,e,a){"use strict";var n=a(251);a.n(n).a},317:function(t,e,a){t.exports=a.p+"assets/img/home-bg.13322baf.jpg"},318:function(t,e,a){t.exports=a.p+"assets/img/home-head.45dacca5.png"},319:function(t,e,a){"use strict";var n=a(253);a.n(n).a},320:function(t,e,a){"use strict";var n=a(254);a.n(n).a},321:function(t,e,a){"use strict";var n=a(255);a.n(n).a},322:function(t,e,a){"use strict";var n=a(256);a.n(n).a},323:function(t,e,a){"use strict";var n=a(257);a.n(n).a},358:function(t,e,a){"use strict";a.r(e);var n={components:{NavLink:a(264).a},data:function(){return{recoShow:!1}},computed:{data:function(){return this.$frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}},heroImageStyle:function(){return this.data.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}},mounted:function(){this.recoShow=!0}},s=(a(316),a(0)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",class:t.recoShow?"reco-show":"reco-hide"},[a("div",{staticClass:"hero"},[!1!==t.data.isShowHeroImage?a("img",{style:t.heroImageStyle,attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),!1!==t.data.isShowTitleInHome?a("h1",[t._v(t._s(t.data.heroText||t.$title))]):t._e(),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"VUE"))]),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"home-center",attrs:{custom:""}})],1)}),[],!1,null,null,null).exports,i=(a(68),a(69),a(70),a(64),a(37),a(62),a(60),a(32)),o=(a(214),a(263)),c=a(224);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var u={mixins:[a(219).a],components:{NoteAbstract:c.a,TagList:o.a},data:function(){return{recoShow:!1,currentPage:1,tags:[]}},computed:{posts:function(){var t=this.$site.pages;return t=this._filterPostData(t),this._sortPostData(t),t},getPagesLength:function(){var t=0;return this.$categories.list.map((function(e){t+=e.pages.length})),t},data:function(){return this.$frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}},heroImageStyle:function(){return this.data.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}},bgImageStyle:function(){var t={height:"350px",textAlign:"center",overflow:"hidden"};return this.data.bgImageStyle?function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},t,{},this.data.bgImageStyle):t},heroHeight:function(){return document.querySelector(".hero").clientHeight}},mounted:function(){this.recoShow=!0},methods:{getCurrentPage:function(t){var e=this;this._setPage(t),setTimeout((function(){window.scrollTo(0,e.heroHeight)}),100)},getPages:function(){var t=this.$site.pages;t=t.filter((function(t){var e=t.frontmatter,a=e.home,n=e.date;return!(1==a||void 0===n)})),this.pages=0==t.length?[]:t},getPagesByTags:function(t){var e=this.$site.base;window.location.href="".concat(e,"tag/?tag=").concat(t)},_getTimeNum:function(t){return parseInt(new Date(t.frontmatter.date).getTime())},_setPage:function(t){this.currentPage=t,this.$page.currentPage=t}}},h=(a(319),Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-blog",class:t.recoShow?"reco-show":"reco-hide"},[n("div",{staticClass:"hero",style:Object.assign({},{background:"url("+(t.$frontmatter.bgImage?t.$withBase(t.$frontmatter.bgImage):a(317))+") center/cover no-repeat"},t.bgImageStyle)},[n("h1",[t._v(t._s(t.data.heroText||t.$title))]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description))])]),t._v(" "),n("div",{staticClass:"home-blog-wrapper"},[n("div",{staticClass:"blog-list"},[n("note-abstract",{attrs:{data:t.posts,hideAccessNumber:!0,currentPage:t.currentPage}}),t._v(" "),n("pagation",{staticClass:"pagation",attrs:{total:t.posts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),n("div",{staticClass:"info-wrapper"},[n("img",{staticClass:"personal-img",attrs:{src:t.$frontmatter.faceImage?t.$withBase(t.$frontmatter.faceImage):a(318),alt:"hero"}}),t._v(" "),t.$themeConfig.author||t.$site.title?n("h3",{staticClass:"name"},[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v(" "),t._m(0),t._v(" "),n("hr"),t._v(" "),n("a",{attrs:{href:"views/other/about.html"}},[t._m(1),t._v(" "),n("ul",{staticClass:"category-wrapper"},[n("img",{attrs:{src:t.$withBase("/assets/img/qrcode_for_mpwechat.jpg")}}),t._v(" "),n("span",[t._v("关注公众号。缔造一个全新的自己")])])]),t._v(" "),n("hr"),t._v(" "),t._m(2),t._v(" "),n("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,a){return n("li",{key:a,staticClass:"category-item"},[n("router-link",{attrs:{to:e.path}},[n("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"post-num"},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),n("hr"),t._v(" "),t._m(3),t._v(" "),n("TagList",{on:{getCurrentTag:t.getPagesByTags}})],1)]),t._v(" "),n("Content",{staticClass:"home-center",attrs:{custom:""}})],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("i",{staticClass:"iconfont reco-github",attrs:{target:"_blank"}}),t._v(" "),a("a",{attrs:{href:"https://github.com/ifuture-pro"}},[t._v("Github")]),t._v("\n          |\n          "),a("i",{staticClass:"iconfont reco-home",attrs:{target:"_blank"}}),t._v(" "),a("a",{attrs:{href:"https://ifuture.com"}},[t._v("编写者")]),t._v("\n          |\n          "),a("i",{staticClass:"iconfont reco-api",attrs:{target:"_blank"}}),t._v(" "),a("a",{attrs:{href:"https://github.com/ifuture-pro/developer-notes"}},[t._v("Developer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[e("i",{staticClass:"iconfont reco-about"}),this._v(" 关于")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[e("i",{staticClass:"iconfont reco-category"}),this._v(" 分类")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[e("i",{staticClass:"iconfont reco-tag"}),this._v(" 标签")])}],!1,null,null,null).exports),f=(a(226),a(213),a(220)),g=a(279),p=a(215);function v(t,e,a){var n=[];!function t(e,a){for(var n=0,s=e.length;n<s;n++)"group"===e[n].type?t(e[n].children||[],a):a.push(e[n])}(e,n);for(var s=0;s<n.length;s++){var r=n[s];if("page"===r.type&&r.path===decodeURIComponent(t.path))return n[s+a]}}var m={components:{PageInfo:f.a,Analytics:g.a},props:["sidebarItems"],data:function(){return{recoShow:!1,isHasKey:!0}},computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$frontmatter.prev;return!1===a?void 0:a?Object(p.k)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,v(t,e,-1))},next:function(){var t,e,a=this.$frontmatter.next;return!1===a?void 0:a?Object(p.k)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,v(t,e,1))},editLink:function(){if(!1===this.$frontmatter.editLink)return!1;var t=this.$themeConfig,e=t.repo,a=t.editLinks,n=t.docsDir,s=void 0===n?"":n,r=t.docsBranch,i=void 0===r?"master":r,o=t.docsRepo,c=void 0===o?e:o;return c&&a&&this.$page.relativePath?this.createEditLink(e,c,s,i,this.$page.relativePath):""},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"}},mounted:function(){this.recoShow=!0;var t=this.$frontmatter.keys;t?(this.isHasKey=t&&t.indexOf(sessionStorage.getItem("pageKey"))>-1,this.$parent.isHasPageKey=this.isHasKey):this.isHasKey=!0},methods:{createEditLink:function(t,e,a,n,s){return/bitbucket.org/.test(t)?(p.i.test(e)?e:t).replace(p.a,"")+"/src"+"/".concat(n,"/")+(a?a.replace(p.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default"):(p.i.test(e)?e:"https://github.com/".concat(e)).replace(p.a,"")+"/edit"+"/".concat(n,"/")+(a?a.replace(p.a,"")+"/":"")+s}}},d=(a(320),Object(s.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page",class:t.recoShow?"reco-show":"reco-hide"},[t._t("top"),t._v(" "),a("div",{staticClass:"page-title"},[a("h1",[t._v(t._s(t.$page.title))]),t._v(" "),a("hr"),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.$page}})],1),t._v(" "),a("Content"),t._v(" "),a("footer",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),a("Analytics"),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),_={computed:{year:function(){return(new Date).getFullYear()}}},C=(a(321),Object(s.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[t.$themeConfig.record?a("span",[a("i",{staticClass:"iconfont reco-beian"}),t._v(" "),a("a",[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),a("span",[a("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),a("a",[t.$themeConfig.startYear?a("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s(t.year)+"\n        \n      "),t.$themeConfig.author||t.$site.title?a("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e()])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.$themeConfig.valineConfig,expression:"$themeConfig.valineConfig !== undefined"}]},[a("i",{staticClass:"iconfont reco-tongzhi"}),t._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1)])}),[],!1,null,"c2d84a3a",null).exports),b={components:{HomeBlog:h,Home:r,Page:d,Common:a(227).a,Footer:C},computed:{sidebarItems:function(){return Object(p.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom:function(){var t=this.$themeConfig.type;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"}}},$=(a(322),a(323),Object(s.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Common",[t.$frontmatter.home?a(t.homeCom,{tag:"component"}):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$frontmatter.home?a("Footer",{staticClass:"footer"}):t._e()],1)],1)}),[],!1,null,null,null));e.default=$.exports}}]);