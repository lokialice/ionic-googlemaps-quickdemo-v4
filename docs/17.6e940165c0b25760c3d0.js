(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Ojt2:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("tBOM"),a=u("ZZ/e"),i=function(){function l(l,n){this.loadingCtrl=l,this.platform=n}return l.prototype.ngOnInit=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,this.platform.ready()];case 1:return l.sent(),[4,this.loadMap1()];case 2:return l.sent(),[2]}})})},l.prototype.loadMap1=function(){console.log(this.search_address),this.search_address.value="1600 Amphitheatre Parkway, Mountain View, CA 94043, United States",this.map1=e.c.create("map_canvas1")},l.prototype.onButton1_click=function(l){return o.b(this,void 0,void 0,function(){var l,n=this;return o.e(this,function(u){switch(u.label){case 0:return l=this,[4,this.loadingCtrl.create({message:"Please wait..."})];case 1:return l.loading=u.sent(),[4,this.loading.present()];case 2:return u.sent(),this.map1.clear(),e.b.geocode({address:"\u0423\u043d\u0438\u0432\u0435\u0440\u043c\u0430\u0433 \u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434"}).then(function(l){if(console.log(l),n.loading.dismiss(),l.length>0){var u=n.map1.addMarkerSync({position:l[0].position,title:JSON.stringify(l[0].position)});n.map1.animateCamera({target:u.getPosition(),zoom:17}),u.showInfoWindow()}else alert("Not found")}),[2]}})})},l}(),r=function(){return function(){}}(),c=u("pMnS"),s=u("oBZk"),b=u("gIcY"),p=t.nb({encapsulation:0,styles:[["#map_canvas1[_ngcontent-%COMP%], #map_canvas2[_ngcontent-%COMP%]{height:75%}.smallPanel[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.5);z-index:2!important}"]],data:{}});function d(l){return t.Eb(0,[t.Bb(402653184,1,{search_address:0}),(l()(),t.pb(1,0,null,null,10,"ion-header",[],null,null,null,s.u,s.e)),t.ob(2,49152,null,0,a.y,[t.h,t.k],null,null),(l()(),t.pb(3,0,null,0,8,"ion-toolbar",[],null,null,null,s.F,s.p)),t.ob(4,49152,null,0,a.yb,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.s,s.c)),t.ob(6,49152,null,0,a.i,[t.h,t.k],null,null),(l()(),t.pb(7,0,null,0,1,"ion-menu-button",[],null,null,null,s.A,s.l)),t.ob(8,49152,null,0,a.O,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,s.E,s.o)),t.ob(10,49152,null,0,a.wb,[t.h,t.k],null,null),(l()(),t.Db(-1,0,[" Geocoding "])),(l()(),t.pb(12,0,null,null,18,"ion-content",[["padding",""]],null,null,null,s.t,s.d)),t.ob(13,49152,null,0,a.r,[t.h,t.k],null,null),(l()(),t.pb(14,0,null,0,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/geocoding/geocoding.page.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["[source code]"])),(l()(),t.pb(16,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Geocoding"])),(l()(),t.pb(18,0,null,0,12,"div",[["id","map_canvas1"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,11,"table",[["class","smallPanel"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,10,"tbody",[],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,3,"ion-input",[["id","search_address"],["readonly",""],["style","ime-mode: disable"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.yb(l,26)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==t.yb(l,26)._handleInputEvent(u.target.value)&&o),o},s.w,s.g)),t.Ab(5120,null,b.b,function(l){return[l]},[a.Ib]),t.ob(25,49152,[[1,4],["search_address",4]],0,a.D,[t.h,t.k],{readonly:[0,"readonly"],type:[1,"type"]},null),t.ob(26,16384,null,0,a.Ib,[t.k],null,null),(l()(),t.pb(27,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onButton1_click(u)&&t),t},s.r,s.b)),t.ob(29,49152,null,0,a.h,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["Search"]))],function(l,n){l(n,25,0,"","text")},null)}function h(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,1,"app-geocoding",[],null,null,null,d,p)),t.ob(1,114688,null,0,i,[a.Cb,a.Fb],null,null)],function(l,n){l(n,1,0)},null)}var g=t.lb("app-geocoding",i,h,{},{},[]),m=u("Ip0R"),f=u("ZYCi");u.d(n,"GeocodingPageModuleNgFactory",function(){return w});var w=t.mb(r,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[c.a,g]],[3,t.j],t.x]),t.wb(4608,m.k,m.j,[t.u,[2,m.q]]),t.wb(4608,b.d,b.d,[]),t.wb(4608,a.a,a.a,[t.z,t.g]),t.wb(4608,a.Db,a.Db,[a.a,t.j,t.q,m.c]),t.wb(4608,a.Gb,a.Gb,[a.a,t.j,t.q,m.c]),t.wb(1073742336,m.b,m.b,[]),t.wb(1073742336,b.c,b.c,[]),t.wb(1073742336,b.a,b.a,[]),t.wb(1073742336,a.Ab,a.Ab,[]),t.wb(1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),t.wb(1073742336,r,r,[]),t.wb(1024,f.k,function(){return[[{path:"",component:i}]]},[])])})}}]);