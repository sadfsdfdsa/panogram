(function(t){function e(e){for(var s,n,u=e[0],l=e[1],o=e[2],A=0,m=[];A<u.length;A++)n=u[A],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&m.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,u=1;u<i.length;u++){var l=i[u];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},a={app:0},r=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var c=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"25f6":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),a=i("8c4f"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("NavBar"),i("b-container",{staticClass:"element",attrs:{fluid:""}},[i("b-row",{class:{blur:t.loading},staticStyle:{"background-color":"black"}},[i("b-col",{staticClass:"banner",style:"background-image: url("+this.posts[this.current].img_url+");"},[i("b-row",{staticClass:"fixed-bottom",attrs:{"align-h":"center"}},[i("b-col",[i("b-row",{attrs:{"align-h":"center"}},[i("b-col",{staticClass:"text-white",attrs:{sm:"4"}},[this.hide_content&&!this.loading?i("b-card",{staticClass:"bg-opacity",class:{"lg-card":"lg"===this.posts[this.current].size}},[i("b-card-body",[i("b-row",{staticClass:"justify-content-between"},[i("b-col",{attrs:{cols:"7"}},[i("h3",{staticClass:"header-font"},[t._v(t._s(this.posts[this.current].header))])]),i("b-col",{staticClass:"mr-2",attrs:{sm:"1",cols:"2"}},[i("button",{staticClass:"btn btn-default",on:{click:t.hideContent}},[i("b-img",{staticStyle:{background:"transparent"},attrs:{src:t.hide_button,width:"30"}})],1)])],1),t.hide_content?i("p",[t._v(t._s(this.posts[this.current].text))]):t._e(),t._l(this.posts[this.current].tags,(function(e){return i("b-button",{key:e,staticClass:"ml-1",attrs:{variant:"dark",pill:"",size:"sm"}},[t._v(t._s(e)+" ")])}))],2)],1):t._e()],1)],1),i("b-row",{attrs:{"align-h":"center"}},[i("b-col",{attrs:{sm:"1",cols:"3"}},[i("button",{staticClass:"btn btn-default",attrs:{disabled:t.loading},on:{click:t.prevImg}},[i("b-img",{staticClass:"mirrorY mirrorX",attrs:{src:t.button,width:"50"}})],1)]),i("b-col",{attrs:{sm:"1",cols:"3"}},[i("button",{staticClass:"btn btn-default",attrs:{disabled:t.loading},on:{click:t.hideContent}},[i("b-img",{staticStyle:{background:"transparent"},attrs:{src:t.hide_button,width:"50"}})],1)]),i("b-col",{attrs:{sm:"1",cols:"3"}},[i("button",{staticClass:"btn btn-default mirrorXY",attrs:{disabled:t.loading},on:{click:t.nextImg}},[i("b-img",{attrs:{src:t.button,width:"50"}})],1)])],1)],1)],1)],1)],1),t.loading?i("div",{staticClass:"spinner fixed-top position-absolute"}):t._e()],1)],1)},n=[],u=i("6408"),l=i.n(u),o=i("e6d7"),c=i.n(o),A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("b-container",{attrs:{fluid:""}},[i("b-row",{staticClass:"fixed-top text-white cont",attrs:{"align-h":"start","align-v":"center"}},[i("b-col",{attrs:{sm:"4"}},[i("b-navbar",[i("router-link",{staticClass:" header-font navbar-header-font navbar-item-brand non-select",attrs:{tag:"h2",to:"/"}},[i("span",{staticClass:"gradient"},[t._v("panogram")])]),i("router-link",{staticClass:"ml-3 navbar-font navbar-item non-select",attrs:{tag:"div",to:"/"}},[i("span",{staticClass:"gradient"},[t._v("community")])]),i("router-link",{staticClass:"ml-3 navbar-font navbar-item non-select",attrs:{tag:"div",to:"/"}},[i("span",{staticClass:"gradient"},[t._v("blog")])])],1)],1)],1)],1)],1)},m=[],p={name:"NavBar"},d=p,g=i("2877"),h=Object(g["a"])(d,A,m,!1,null,"754fd430",null),f=h.exports,b={name:"IndexPage",components:{NavBar:f},data:()=>({posts:[{img_url:"https://wallpaperplay.com/walls/full/1/6/3/139661.jpg\n",tags:["Mountains","Forest","Nature"],header:"Wood on mountain",size:"lg",text:"Natoque at arcu enim posuere pellentesque libero id elementum magna cursus netus purus rutrum hendrerit suscipit euismod purus aliquet luctus eget turpis sodales mi odio mattis consectetuer est dictumst est nisi donec semper. Vulputate dolor tempor et viverra sodales rutrum magnis curabitur nisl dictum tempus dignissim amet tempus class aenean aenean turpis, lobortis. Lobortis sapien hac tempor aliquet metus adipiscing semper metus porttitor fringilla augue dolor elementum faucibus purus cubilia luctus. Cras diam parturient dapibus conubia rhoncus primis. Convallis felis ullamcorper cubilia dapibus diam facilisis nisi dictum vehicula praesent dis nam mauris praesent non eros suspendisse fermentum sociosqu nostra augue, adipiscing. Congue torquent consectetuer vestibulum mauris libero ultrices. Consectetuer euismod non egestas, tristique elit semper donec.\n\nSemper interdum id habitasse platea Ultrices fusce eget sapien, molestie convallis massa cum accumsan sapien nascetur parturient etiam. Nostra dignissim donec mattis ante platea placerat nullam ut diam. Ullamcorper ut, nisi. Dictumst Hendrerit luctus. Parturient donec molestie et metus tristique nisl aliquet amet nostra posuere habitant Sociosqu platea fermentum amet leo lacinia urna Nulla lectus parturient turpis ornare at hendrerit duis adipiscing ante, arcu dolor. Nisl pede sit fames eu quis curabitur nulla nisl non sapien risus elementum auctor. Nullam sagittis elit nullam semper fringilla ultricies phasellus. Nibh. Nec velit dolor fames turpis lacinia aptent. Euismod rhoncus est montes.\n\nQuis. Elit purus cursus neque fringilla nunc est augue erat class viverra, consectetuer sit tempus feugiat magnis ipsum augue nibh tempus primis nisl. Eleifend nam tempus risus hymenaeos torquent. Quam. Sem imperdiet laoreet. Iaculis magna nec nibh euismod euismod dis, pharetra, pulvinar eget imperdiet, etiam commodo ornare id, accumsan porta, nunc conubia. Amet sapien conubia proin facilisis ornare pede lectus viverra aenean natoque velit torquent parturient nostra. Vestibulum suscipit netus."},{img_url:"https://wallpaperplay.com/walls/full/6/9/4/139651.jpg",tags:["Mountains","Forest","Nature"],header:"Wood on mountain",size:"lg",text:"Natoque at arcu enim posuere pellentesque libero id elementum magna cursus netus purus rutrum hendrerit suscipit euismod purus aliquet luctus eget turpis sodales mi odio mattis consectetuer est dictumst est nisi donec semper. Vulputate dolor tempor et viverra sodales rutrum magnis curabitur nisl dictum tempus dignissim amet tempus class aenean aenean turpis, lobortis. Lobortis sapien hac tempor aliquet metus adipiscing semper metus porttitor fringilla augue dolor elementum faucibus purus cubilia luctus. Cras diam parturient dapibus conubia rhoncus primis. Convallis felis ullamcorper cubilia dapibus diam facilisis nisi dictum vehicula praesent dis nam mauris praesent non eros suspendisse fermentum sociosqu nostra augue, adipiscing. Congue torquent consectetuer vestibulum mauris libero ultrices. Consectetuer euismod non egestas, tristique elit semper donec.\n\nSemper interdum id habitasse platea Ultrices fusce eget sapien, molestie convallis massa cum accumsan sapien nascetur parturient etiam. Nostra dignissim donec mattis ante platea placerat nullam ut diam. Ullamcorper ut, nisi. Dictumst Hendrerit luctus. Parturient donec molestie et metus tristique nisl aliquet amet nostra posuere habitant Sociosqu platea fermentum amet leo lacinia urna Nulla lectus parturient turpis ornare at hendrerit duis adipiscing ante, arcu dolor. Nisl pede sit fames eu quis curabitur nulla nisl non sapien risus elementum auctor. Nullam sagittis elit nullam semper fringilla ultricies phasellus. Nibh. Nec velit dolor fames turpis lacinia aptent. Euismod rhoncus est montes.\n\nQuis. Elit purus cursus neque fringilla nunc est augue erat class viverra, consectetuer sit tempus feugiat magnis ipsum augue nibh tempus primis nisl. Eleifend nam tempus risus hymenaeos torquent. Quam. Sem imperdiet laoreet. Iaculis magna nec nibh euismod euismod dis, pharetra, pulvinar eget imperdiet, etiam commodo ornare id, accumsan porta, nunc conubia. Amet sapien conubia proin facilisis ornare pede lectus viverra aenean natoque velit torquent parturient nostra. Vestibulum suscipit netus."},{img_url:"https://wallpaperplay.com/walls/full/b/7/0/139652.jpg",tags:["Nature","Jungles"],header:"River with a bridge",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/3/0/b/139653.jpg",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/a/e/a/139654.jpg",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/0/f/f/139657.jpg",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/6/0/1/139660.jpg",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/7/a/1/139656.jpg",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/7/d/5/139655.jpg",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/6/c/8/139658.jpg",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/d/e/1/139659.jpg",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."},{img_url:"https://wallpaperplay.com/walls/full/d/2/3/139664.jpg\n",tags:["Nature"],header:"Nature",size:"sm",text:"There is an photo of our awesome Planet."}],current:0,button:l.a,hide_button:c.a,loading:!0,hide_content:!1}),methods:{nextImg(){this.current<this.posts.length-1?this.current++:this.current=0,this.loading=!0,setTimeout(()=>{this.loading=!1},100)},prevImg(){this.current>0?this.current--:this.current=this.posts.length-1,this.loading=!0,setTimeout(()=>{this.loading=!1},100)},listenerKeyboard(t){"ArrowRight"===t.code?this.nextImg():"ArrowLeft"===t.code?this.prevImg():"Enter"===t.code&&this.hideContent()},hideContent(){this.hide_content=!this.hide_content}},created(){window.addEventListener("keyup",this.listenerKeyboard),setTimeout(()=>{this.loading=!1},300)},beforeDestroy(){window.removeEventListener("keyup",this.listenerKeyboard)}},I=b,v=(i("9154"),Object(g["a"])(I,r,n,!1,null,"1b7b2c6b",null)),w=v.exports;const C=[{path:"/",component:w,name:"indexPage",meta:{}}];var P=C,y=i("2f62");s["default"].use(y["a"]);const x=new y["a"].Store({state:{},mutations:{}});var B=x,E=i("5f5b");i("f9e3"),i("2dd8");s["default"].use(E["a"]);const z=i("bc3a");var D=z.create({baseURL:"/api"}),N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},S=[],H={name:"App"},X=H,L=(i("cf25"),Object(g["a"])(X,N,S,!1,null,null,null)),j=L.exports;s["default"].use(a["a"]),s["default"].config.productionTip=!1,s["default"].prototype.$api=D;const Y=new a["a"]({routes:P,mode:"history",scrollBehavior:()=>({y:0})});new s["default"]({el:"#app",router:Y,store:B,render:t=>t(j)})},6408:function(t,e){t.exports="data:image/png;base64,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"},9154:function(t,e,i){"use strict";var s=i("25f6"),a=i.n(s);a.a},cf25:function(t,e,i){"use strict";var s=i("fea6"),a=i.n(s);a.a},e6d7:function(t,e,i){t.exports=i.p+"img/hide.042f351b.png"},fea6:function(t,e,i){}});