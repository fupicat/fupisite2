(window.webpackJsonp=window.webpackJsonp||[]).push([[26,4,5,11,12,14,15],{394:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("22baa92a",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";n.r(e);var r={props:["tag","url"]},o=(n(402),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{staticClass:"tag reduced-motion",attrs:{to:"/"+t.url+"/?q="+encodeURIComponent(t.tag)}},[t._v(t._s(t.tag))])}),[],!1,null,"57dfdb84",null);e.default=component.exports},396:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("34dc0308",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";n.r(e);var r={components:{TagLink:n(395).default},props:["url","icon","title","description","posted","edited","tags"],methods:{formatDate:function(t){return new Date(t).toLocaleDateString(this.$i18n.locale,{year:"numeric",month:"long",day:"numeric"})}}},o=(n(404),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"thing-header"},[n("div",{staticClass:"main"},[n("img",{staticClass:"reduced-motion sticker",attrs:{src:t.icon?t.icon:"/img/icons/Jigsaw.png",alt:"ícone da postagem"}}),t._v(" "),n("div",[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.description))])])]),t._v(" "),t.posted||t.edited?n("div",{staticClass:"date"},[n("p",[t._v(t._s(t.$t("posted"))),n("br"),t._v(t._s(t.formatDate(t.posted)))]),t._v(" "),t.edited&&t.posted!=t.edited?n("p",[t._v(t._s(t.$t("edited"))),n("br"),t._v(t._s(t.formatDate(t.edited)))]):t._e()]):t._e()]),t._v(" "),t.tags?n("div",{staticClass:"tags"},t._l(t.tags.split(" "),(function(e){return n("tag-link",{key:e,attrs:{url:t.url,tag:e}})})),1):t._e()])}),[],!1,null,"4b1b5cf0",null);e.default=component.exports;installComponents(component,{TagLink:n(395).default})},398:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("c6917d6e",content,!0,{sourceMap:!1})},399:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("4ed07e76",content,!0,{sourceMap:!1})},400:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("ea91189e",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";n.r(e);var r={props:{document:Object}},o=(n(407),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-info"},[t.document.warning?n("div",{staticClass:"warning"},[t._m(0),t._v(" "),n("p",[t._v(t._s(t.document.warning))])]):t._e(),t._v(" "),n("div",{staticClass:"main"},[t.document.instructions?n("div",{staticClass:"instructions"},[n("h1",[n("i",{staticClass:"fas fa-question-circle fa-sm"}),t._v(" "+t._s(t.$t("projInstructions")))]),t._v(" "),n("ul",{staticClass:"fa-ul"},t._l(t.document.instructions,(function(e){return n("li",{key:e},[t._m(1,!0),t._v(t._s(e)+"\n        ")])})),0)]):t._e(),t._v(" "),t.document.about?n("div",{staticClass:"about"},[n("h1",[n("i",{staticClass:"fas fa-info-circle fa-sm"}),t._v(" "+t._s(t.$t("projAbout")))]),t._v(" "),t._l(t.document.about,(function(line){return n("p",{key:line},[t._v(t._s(line))])}))],2):t._e()]),t._v(" "),t.document.links?n("div",{staticClass:"links"},[n("h1",[n("i",{staticClass:"fas fa-external-link-alt fa-sm"}),t._v(" "+t._s(t.$t("projLinks")))]),t._v(" "),n("div",t._l(t.document.links,(function(link){return n("a",{key:link.text,staticClass:"fupi-btn",attrs:{href:link.link}},[t._v(t._s(link.text))])})),0)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("i",{staticClass:"fas fa-exclamation-triangle fa-sm"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"fa-li"},[e("i",{staticClass:"fas fa-xs fa-chevron-circle-right"})])}],!1,null,"7d203fa4",null);e.default=component.exports},402:function(t,e,n){"use strict";n(394)},403:function(t,e,n){var r=n(27)(!1);r.push([t.i,".tag[data-v-57dfdb84]{color:#fff;text-decoration:none;display:inline-block;padding:.25rem .5rem;border-radius:.4rem;transition-property:background-color;transition-duration:.15s;transition-timing-function:var(--trans-smooth)}.tag[data-v-57dfdb84]:hover{color:#fff;background-color:var(--theme-hov)}",""]),t.exports=r},404:function(t,e,n){"use strict";n(396)},405:function(t,e,n){var r=n(27)(!1);r.push([t.i,".thing-header[data-v-4b1b5cf0]{padding:1.25rem 1.75rem;background-color:var(--theme-main);width:100%;color:#fff}.thing-header .main[data-v-4b1b5cf0]{display:flex;grid-gap:1.25rem;gap:1.25rem;justify-content:center;align-items:center}.thing-header .main img[data-v-4b1b5cf0]{transition-property:transform;transition-timing-function:var(--trans-smooth);transition-duration:.2s;height:4rem}.thing-header .main img[data-v-4b1b5cf0]:hover{transform:rotate(6deg) scale(110%)}.title[data-v-4b1b5cf0]{font-weight:700;font-size:1.25rem;line-height:1.75rem;text-align:center}.description[data-v-4b1b5cf0]{font-style:italic;line-height:1.25rem;text-align:center}.date[data-v-4b1b5cf0]{padding-top:.5rem;text-align:center;align-items:center;opacity:.5;grid-gap:1.25rem;gap:1.25rem}.date[data-v-4b1b5cf0],.tags[data-v-4b1b5cf0]{display:flex;justify-content:center}.tags[data-v-4b1b5cf0]{padding:.5rem 0;background-color:var(--theme-nav);color:#fff;grid-gap:.25rem;gap:.25rem}",""]),t.exports=r},406:function(t,e,n){"use strict";n.r(e);n(20),n(65),n(26),n(37);var r=n(397),o=n(51),c=n(401),d=n(413),l=n(419),f=n(414),m={components:{PageHeader:r.default,Container:o.default,ProjectInfo:c.default,VidYt:d.default,SobreMim:l.default,Scratch:f.default},props:{document:Object,category:String},head:function(){var t=this.document.tags?this.document.tags.replace(/#/g,"").replace(/ /g,", "):"";return{title:"".concat(this.document.title," · Fupi"),meta:[{hid:"description",name:"description",content:this.document.description},{hid:"keywords",name:"keywords",content:t},{hid:"og:title",property:"og:title",content:this.document.title},{hid:"og:description",property:"og:description",content:this.document.description},{hid:"twitter:title",name:"twitter:title",content:this.document.title},{hid:"twitter:description",name:"twitter:description",content:this.document.description}]}}},v=n(15),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.category},[n("page-header",{attrs:{url:t.category,title:t.document.title,description:t.document.description,icon:t.document.icon,posted:t.document.posted,edited:t.document.edited,tags:t.document.tags}}),t._v(" "),n("container",{attrs:{pad:""}},[n("nuxt-content",{staticClass:"project",attrs:{document:t.document}}),t._v(" "),n("project-info",{attrs:{document:t.document}}),t._v(" "),n("client-only",[t.$store.state.nfe.nfe&&!t.document.nocomment?n("vssue",{attrs:{title:t.document.title}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:n(397).default,ProjectInfo:n(401).default,Container:n(51).default})},407:function(t,e,n){"use strict";n(398)},408:function(t,e,n){var r=n(27)(!1);r.push([t.i,".project-info h1[data-v-7d203fa4]{font-size:1.625rem;text-align:center;margin-top:-.3rem;font-weight:700;color:var(--theme-title)}.about[data-v-7d203fa4],.instructions[data-v-7d203fa4]{display:flex;flex-direction:column;justify-content:center}.about p[data-v-7d203fa4],.instructions li[data-v-7d203fa4]{margin-bottom:1rem;text-align:justify}.about p[data-v-7d203fa4]{text-indent:1.6rem}.links a[data-v-7d203fa4]{padding:.5rem 1rem}.links div[data-v-7d203fa4]{margin-top:.5rem;display:flex;flex-wrap:wrap;justify-content:center;grid-gap:1rem;gap:1rem}.project-info .main[data-v-7d203fa4]{margin:1rem 0;flex-direction:column}.project-info .main[data-v-7d203fa4],.warning[data-v-7d203fa4]{display:flex;grid-gap:.625rem;gap:.625rem;border-radius:.4rem}.warning[data-v-7d203fa4]{margin-top:1rem;justify-content:center;align-items:center;background-color:#ea7e65}.warning h1[data-v-7d203fa4]{color:#7b1717}.dark .warning[data-v-7d203fa4]{background-color:#8c1919}.dark .warning h1[data-v-7d203fa4]{color:#ea7e65}@media (min-width:768px){.project-info .main[data-v-7d203fa4]{flex-direction:row}}.project-info .main div[data-v-7d203fa4],.warning[data-v-7d203fa4]{width:100%;padding:.625rem 1rem;border-radius:.625rem;box-shadow:inset 0 .4em rgba(0,0,0,.15)}.project-info .main div[data-v-7d203fa4]{background-color:var(--theme-panel)}",""]),t.exports=r},409:function(t,e,n){"use strict";n(399)},410:function(t,e,n){var r=n(27)(!1);r.push([t.i,".youtube-vid[data-v-6cbfc8db]{width:100%;display:flex;justify-content:center}.youtube-vid iframe[data-v-6cbfc8db]{width:100%;max-width:560px;height:315px}",""]),t.exports=r},411:function(t,e,n){"use strict";n(400)},412:function(t,e,n){var r=n(27)(!1);r.push([t.i,".scratch[data-v-54b1a12d]{width:100%;display:flex;justify-content:center}.scratch iframe[data-v-54b1a12d]{width:100%;max-width:499px;height:80vw;max-height:416px}",""]),t.exports=r},413:function(t,e,n){"use strict";n.r(e);n(45),n(53),n(20),n(66),n(65);var r={props:{url:{type:String,default:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}},computed:{vidId:function(){return this.url.includes("v=")?this.url.split("v=")[1].split("&")[0]:this.url.replace("//","").split("/")[1]}}},o=(n(409),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"youtube-vid"},[n("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/"+t.vidId,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen",frameborder:"0"}})])}),[],!1,null,"6cbfc8db",null);e.default=component.exports},414:function(t,e,n){"use strict";n.r(e);n(20),n(66),n(65);var r={props:{url:{type:String,default:"https://scratch.mit.edu/projects/104"}},computed:{projId:function(){return this.url.replace("https://scratch.mit.edu/projects/","").split("/")[0]}}},o=(n(411),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scratch"},[n("iframe",{attrs:{src:"https://turbowarp.org/"+t.projId+"/embed?addons=remove-curved-stage-border,pause",allowtransparency:"true",frameborder:"0",scrolling:"no",allowfullscreen:""}})])}),[],!1,null,"54b1a12d",null);e.default=component.exports},446:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("15cb0e78",content,!0,{sourceMap:!1})},460:function(t,e,n){"use strict";n(446)},461:function(t,e,n){var r=n(27)(!1);r.push([t.i,".nuxt-content audio{width:100%;border-radius:.4rem}",""]),t.exports=r},491:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(52),n(48),n(406)),c="musica",d={components:{ProjectPage:o.default},data:function(){return{category:c}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=t.app,e.next=3,n("".concat(o.i18n.locale,"/").concat(c),r.slug).fetch();case 3:return d=e.sent,e.abrupt("return",{post:d});case 5:case"end":return e.stop()}}),e)})))()}},l=(n(460),n(15)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("project-page",{attrs:{category:t.category,document:t.post}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectPage:n(406).default})}}]);