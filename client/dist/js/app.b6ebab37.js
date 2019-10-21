(function(t){function e(e){for(var o,c,i=e[0],a=e[1],u=e[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,i=1;i<r.length;i++){var a=r[i];0!==n[a]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var o={},n={app:0},s=[];function c(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=o,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(r,o,function(e){return t[e]}.bind(null,o));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=a;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var o=r("27fb"),n=r.n(o);n.a},"1c2a":function(t,e,r){},"27fb":function(t,e,r){},"3d9a":function(t,e,r){"use strict";var o=r("8a53"),n=r.n(o);n.a},"40da":function(t,e,r){"use strict";var o=r("9a1e"),n=r.n(o);n.a},"56d7":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),r("router-link",{attrs:{to:"/products"}},[t._v("Products List")]),t._v(" |\n    "),r("router-link",{attrs:{to:"/product"}},[t._v("Product")])],1),r("router-view")],1)},s=[],c=(r("034f"),r("2877")),i={},a=Object(c["a"])(i,n,s,!1,null,null,null),u=a.exports,d=r("8c4f"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-jumbotron",{attrs:{header:"Web Shop",lead:"Welcome to our online shop"}},[r("p"),r("b-button",{attrs:{variant:"primary",href:"/products"}},[t._v("List Products")])],1),r("b-container",[r("b-row",[r("b-col",{staticClass:"table",attrs:{cols:"6",md:"6"}}),r("b-col",{staticClass:"table",attrs:{cols:"12",md:"6"}})],1)],1)],1)},p=[],v=r("bc3a"),h=r.n(v);const m=h.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_ENDPOINT||"https://webshop-gu-backend.herokuapp.com:3000/api"});var w={name:"home",data(){return{message:""}},mounted(){this.getMessage()},methods:{getMessage(){m.get("/").then(t=>{this.message=t.data.message}).catch(t=>{this.message=t})}}},f=w,g=(r("cccb"),Object(c["a"])(f,l,p,!1,null,null,null)),b=g.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products"},[r("div",{staticClass:"title",staticStyle:{"margin-bottom":"40px"}},[r("h1",[t._v("List of "+t._s(t.products.length)+" Products")])]),t._m(0),r("b-list-group",t._l(t.products,function(t){return r("product-item",{key:t._id,attrs:{product:t}})}),1)],1)},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h2",[t._v("PRODUCT NAME")])])])}],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-list-group-item",[r("a",{attrs:{href:"products/"+t.product._id}},[t._v(t._s(t.product.name))])])},x=[],O={name:"product-item",props:["product"]},$=O,R=(r("a164"),Object(c["a"])($,y,x,!1,null,"7426382d",null)),j=R.exports,E={name:"ListProducts",data(){return{products:[]}},mounted(){this.getProducts()},methods:{getProducts(){m.get("/products").then(t=>{this.products=t.data.products}).catch(t=>{this.products=[],console.log(t)}).then(()=>{})}},components:{ProductItem:j}},I=E,C=(r("86c2"),Object(c["a"])(I,P,_,!1,null,"5b6a3090",null)),k=C.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("h1",[t._v("Product "+t._s(t.product.name))]),r("product-view",{key:t.product._id,attrs:{product:t.product},on:{"delete-product":t.deleteProduct}}),r("b-button",{attrs:{variant:"outline-primary",href:t.product._id+"/reviews"}},[t._v("Reviews")])],1)},S=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-list-group-item",[t._v("\n  Description: "+t._s(t.product.description)+"\n  "),r("br"),t._v("\n  Price: "+t._s(t.product.price)+"\n  "),r("br"),t._v("\n  Category: "+t._s(t.product.category.name)+"\n  "),r("b-button",{attrs:{type:"button",variant:"outline-primary",href:t.product._id+"/edit"}},[t._v("Edit product")]),r("b-button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.$emit("delete-product",t.product._id)}}},[t._v("×")])],1)},A=[],L={name:"product-view",props:["product"]},M=L,T=(r("6433"),Object(c["a"])(M,D,A,!1,null,"c26c43da",null)),U=T.exports,J={name:"Product",data(){return{product:null}},created(){this.productId=this.$route.params.id},mounted(){this.getProduct()},methods:{getProduct(){m.get("/products/"+this.productId).then(t=>{this.product=t.data.product}).catch(t=>{this.product=null,console.log(t)}).then(()=>{})},deleteProduct(){m.delete("/products/"+this.productId).then(t=>{console.log(t.data.message),this.$router.push("/products")}).catch(t=>{console.log(t)})}},components:{ProductView:U}},V=J,W=(r("3d9a"),Object(c["a"])(V,N,S,!1,null,"48f06292",null)),B=W.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editProduct"},[r("h1",[t._v("Edit "+t._s(t.oldProduct.name))]),r("form",{on:{submit:function(e){return e.preventDefault(),t.submitProduct(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.name,expression:"newProduct.name"}],staticClass:"input",attrs:{type:"text",placeholder:t.oldProduct.name},domProps:{value:t.newProduct.name},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"name",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.description,expression:"newProduct.description"}],staticClass:"input",attrs:{type:"text",placeholder:t.oldProduct.description},domProps:{value:t.newProduct.description},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"description",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.price,expression:"newProduct.price"}],staticClass:"input",attrs:{type:"number",step:"0.01",placeholder:t.oldProduct.price},domProps:{value:t.newProduct.price},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"price",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.category.name,expression:"newProduct.category.name"}],staticClass:"input",attrs:{type:"text",placeholder:t.oldProduct},domProps:{value:t.newProduct.category.name},on:{input:function(e){e.target.composing||t.$set(t.newProduct.category,"name",e.target.value)}}}),r("b-button",{attrs:{type:"submit"}},[t._v("Submit")])],1)])},q=[],z={name:"EditProduct",data(){return{oldProduct:{},newProduct:{name:"",description:"",price:"",category:{name:""}}}},created(){this.productId=this.$route.params.id},mounted(){this.getProduct()},methods:{getProduct(){m.get("/products/"+this.productId).then(t=>{this.oldProduct=t.data.product}).catch(t=>{this.oldProduct=null,console.log(t)}).then(()=>{})},submitProduct(){this.newProduct.name&&this.newProduct.description&&this.newProduct.price&&this.newProduct.category.name?(this.newProduct.reviews=this.oldProduct.reviews,m.put("/products/"+this.productId,this.newProduct).then(t=>{console.log(t.data.message),this.$router.push("/products/"+this.productId)}).catch(t=>{console.log(t)})):(this.newProduct.name||delete this.newProduct.name,this.newProduct.description||delete this.newProduct.description,this.newProduct.price||delete this.newProduct.price,this.newProduct.category.name||delete this.newProduct.category,console.log(this.newProduct),m.patch("/products/"+this.productId,this.newProduct).then(t=>{console.log(t.data.message),this.$router.push("/products/"+this.productId)}).catch(t=>{console.log(t),console.log(JSON.stringify(this.newProduct))}).then(()=>{console.log(this.productId)}))}}},F=z,G=(r("7fe2"),Object(c["a"])(F,H,q,!1,null,"d513c8a0",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-list-group",[r("div",[r("b-button",{attrs:{variant:"danger"},on:{click:t.deleteAll}},[t._v("Delete all reviews")])],1),r("h1",[t._v("Reviews")]),t.reviews.length>0?r("div",{staticClass:"reviews"},t._l(t.reviews,function(t){return r("review-item",{key:t._id,attrs:{review:t}})}),1):r("h2",[t._v("No reviews are available for this product")]),r("div",{attrs:{id:"create-review"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submitReview(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newReview.text,expression:"newReview.text"}],staticClass:"input",attrs:{type:"text",placeholder:"Write a review"},domProps:{value:t.newReview.text},on:{input:function(e){e.target.composing||t.$set(t.newReview,"text",e.target.value)}}}),r("select",{directives:[{name:"model",rawName:"v-model",value:t.newReview.rating,expression:"newReview.rating"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.newReview,"rating",e.target.multiple?r:r[0])}}},[r("option",[t._v("1")]),r("option",[t._v("2")]),r("option",[t._v("3")]),r("option",[t._v("4")]),r("option",[t._v("5")])]),r("b-button",{attrs:{type:"submit"}},[t._v("Submit")])],1)])])},X=[],Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-list-group-item",[t._v("\n  "+t._s(t.review.text)+"\n  "),r("br"),t._v("\n  "+t._s(t.review.rating)+" Stars\n  "),r("br"),t._v("\n  "+t._s(t.review.date)+"\n  "),r("br"),r("br")])},Z=[],tt={name:"review-item",props:["review"]},et=tt,rt=(r("40da"),Object(c["a"])(et,Y,Z,!1,null,"c77c1306",null)),ot=rt.exports,nt={name:"ListProducts",data(){return{reviews:[],newReview:{text:"",rating:"1",date:""}}},created(){this.productId=this.$route.params.id},mounted(){this.getReviews()},methods:{getReviews(){m.get("/products/"+this.productId+"/reviews").then(t=>{this.reviews=t.data.reviews,console.log(this.reviews)}).catch(t=>{this.reviews=[],console.log(t)}).then(()=>{})},submitReview(){this.newReview.date=new Date,m.post("/products/"+this.productId+"/reviews",this.newReview).then(t=>{this.reviews.push(t.data),this.newReview.text="",this.newReview.rating="1"}).catch(t=>{console.log(t)})},deleteAll(){m.delete("/products/"+this.productId+"/reviews").then(t=>{this.reviews=[]}).catch(t=>{console.log(t)})}},components:{ReviewItem:ot}},st=nt,ct=(r("777d"),Object(c["a"])(st,Q,X,!1,null,"e1e3aad4",null)),it=ct.exports;o["default"].use(d["a"]);var at=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:b},{path:"/products",name:"products",component:k},{path:"/products/:id",name:"product",component:B},{path:"/products/:id/reviews",name:"reviews",component:it},{path:"/products/:id/edit",name:"editproduct",component:K}]}),ut=r("5f5b");r("f9e3"),r("2dd8");o["default"].use(ut["a"]),o["default"].config.productionTip=!1,new o["default"]({router:at,render:function(t){return t(u)}}).$mount("#app")},6433:function(t,e,r){"use strict";var o=r("f7d5"),n=r.n(o);n.a},"777d":function(t,e,r){"use strict";var o=r("8d29"),n=r.n(o);n.a},"7fe2":function(t,e,r){"use strict";var o=r("1c2a"),n=r.n(o);n.a},"859a":function(t,e,r){},"86c2":function(t,e,r){"use strict";var o=r("9d7e"),n=r.n(o);n.a},"8a53":function(t,e,r){},"8d29":function(t,e,r){},"9a1e":function(t,e,r){},"9d7e":function(t,e,r){},a164:function(t,e,r){"use strict";var o=r("859a"),n=r.n(o);n.a},cccb:function(t,e,r){"use strict";var o=r("e55c"),n=r.n(o);n.a},e55c:function(t,e,r){},f7d5:function(t,e,r){}});
//# sourceMappingURL=app.b6ebab37.js.map