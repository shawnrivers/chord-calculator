(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{9561:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Scale Calculator")]),s("h2",[e._v("Key")]),s("div",{staticClass:"items"},[s("Setting",{attrs:{label:"Home Note",value:e.homeNote,options:e.allNotes},on:{change:e.onChangeHomeNote}}),s("Setting",{attrs:{label:"Type",value:e.scaleType,options:e.scaleTypes},on:{change:e.onChangeType}})],1),s("div",[s("h2",[e._v("Notes")]),s("ul",{staticClass:"items"},e._l(e.notes,(function(t,o){return s("li",{key:o},[s("div",{staticClass:"item"},[s("span",[e._v(e._s(o+1))]),s("span",[e._v(e._s(t))])])])})),0)]),s("div",[s("h2",[e._v("Chords")]),s("ul",{staticClass:"items"},e._l(e.chords,(function(t,o){return s("li",{key:o},[s("div",{staticClass:"item"},[s("span",[e._v(e._s(o+1))]),s("span",[e._v(e._s(t.symbol))])])])})),0)])])},n=[],a=s("2b0e"),i=s("9613"),l=s("27c5"),c=a["a"].extend({name:"Scale",components:{Setting:l["a"]},data:function(){return{allNotes:i["a"],scaleTypes:["major","minor"]}},computed:{homeNote:function(){return this.$store.getters.scale.homeNote},scaleType:function(){return this.$store.getters.scale.type},notes:function(){return this.$store.getters.scaleNotes},chords:function(){return this.$store.getters.scaleChords}},methods:{onChangeHomeNote:function(e){this.$store.commit("updateScaleHomeNote",e)},onChangeType:function(e){this.$store.commit("updateScaleType",e)}}}),r=c,u=s("2877"),h=Object(u["a"])(r,o,n,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=about.f756d70f.js.map