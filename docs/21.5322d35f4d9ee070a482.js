(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{SDT0:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("ZZ/e"),a=u("tBOM"),r=function(){function l(l,n){this.loadingCtrl=l,this.platform=n}return l.prototype.ngOnInit=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,this.platform.ready()];case 1:return l.sent(),[4,this.loadMap()];case 2:return l.sent(),[2]}})})},l.prototype.loadMap=function(){return o.b(this,void 0,void 0,function(){var l,n;return o.e(this,function(u){switch(u.label){case 0:return l=this,[4,this.loadingCtrl.create({message:"Please wait..."})];case 1:return l.loading=u.sent(),[4,this.loading.present()];case 2:return u.sent(),this.map=a.c.create("map_canvas"),[4,this.map.addKmlOverlay({url:"assets/kmloverlay/polygon.kml",icon:"green"})];case 3:return n=u.sent(),this.loading.dismiss(),console.log(n),this.map.moveCamera(n.getDefaultViewport()),n.on(a.e.KML_CLICK).subscribe(function(l){console.log(l[0],l[1])}),[2]}})})},l}(),i=function(){return function(){}}(),s=u("pMnS"),b=u("oBZk"),c=t.nb({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:100%;height:90%}"]],data:{}});function p(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,10,"ion-header",[],null,null,null,b.u,b.e)),t.ob(1,49152,null,0,e.y,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,b.F,b.p)),t.ob(3,49152,null,0,e.yb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.s,b.c)),t.ob(5,49152,null,0,e.i,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.A,b.l)),t.ob(7,49152,null,0,e.O,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,2,"ion-title",[],null,null,null,b.E,b.o)),t.ob(9,49152,null,0,e.wb,[t.h,t.k],null,null),(l()(),t.Db(-1,0,[" KmlOverlay "])),(l()(),t.pb(11,0,null,null,6,"ion-content",[["padding",""]],null,null,null,b.t,b.d)),t.ob(12,49152,null,0,e.r,[t.h,t.k],null,null),(l()(),t.pb(13,0,null,0,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/kml-overlay/kml-overlay.page.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["[source code]"])),(l()(),t.pb(15,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Click on the one of States!"])),(l()(),t.pb(17,0,null,0,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}function h(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,1,"app-kml-overlay",[],null,null,null,p,c)),t.ob(1,114688,null,0,r,[e.Cb,e.Fb],null,null)],function(l,n){l(n,1,0)},null)}var d=t.lb("app-kml-overlay",r,h,{},{},[]),m=u("Ip0R"),g=u("gIcY"),w=u("ZYCi");u.d(n,"KmlOverlayPageModuleNgFactory",function(){return f});var f=t.mb(i,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[s.a,d]],[3,t.j],t.x]),t.wb(4608,m.k,m.j,[t.u,[2,m.q]]),t.wb(4608,g.d,g.d,[]),t.wb(4608,e.a,e.a,[t.z,t.g]),t.wb(4608,e.Db,e.Db,[e.a,t.j,t.q,m.c]),t.wb(4608,e.Gb,e.Gb,[e.a,t.j,t.q,m.c]),t.wb(1073742336,m.b,m.b,[]),t.wb(1073742336,g.c,g.c,[]),t.wb(1073742336,g.a,g.a,[]),t.wb(1073742336,e.Ab,e.Ab,[]),t.wb(1073742336,w.o,w.o,[[2,w.u],[2,w.m]]),t.wb(1073742336,i,i,[]),t.wb(1024,w.k,function(){return[[{path:"",component:r}]]},[])])})}}]);