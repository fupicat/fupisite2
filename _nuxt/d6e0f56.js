(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{503:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(51),n(48),n(426)),c="videos",l={components:{CategoryView:o.default},data:function(){return{category:c}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.app,o=[],t.prev=2,t.next=5,n("".concat(r.i18n.locale,"/").concat(c)).only(["title","description","slug","icon","tags","posted","nfe"]).sortBy("posted","desc").fetch();case 5:o=t.sent;case 6:return t.prev=6,t.abrupt("return",{posts:o});case 9:case"end":return t.stop()}}),t,null,[[2,,6,9]])})))()}},f=n(15),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("category-view",{attrs:{category:e.category,posts:e.posts}})}),[],!1,null,null,null);t.default=component.exports}}]);