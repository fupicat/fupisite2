(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{477:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(52),n(48),n(424)),c="jogos",l={components:{CategoryView:o.default},data:function(){return{category:c}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.app,o=[],e.prev=2,e.next=5,n("".concat(r.i18n.locale,"/").concat(c)).only(["title","description","slug","icon","tags","posted","nfe"]).sortBy("posted","desc").fetch();case 5:o=e.sent;case 6:return e.prev=6,e.abrupt("return",{posts:o});case 9:case"end":return e.stop()}}),e,null,[[2,,6,9]])})))()}},f=n(15),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("category-view",{attrs:{category:t.category,posts:t.posts}})}),[],!1,null,null,null);e.default=component.exports}}]);