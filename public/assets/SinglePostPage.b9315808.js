import{bw as u,bJ as m,a3 as i,b5 as e,aD as l,c3 as p,d as t,a6 as c,S as d,c5 as n,ac as f,bz as h}from"./index.c62d8a64.js";import{Q as s}from"./QSkeleton.2e510be2.js";import{a as _,Q as x}from"./QSpace.860c9bc7.js";import{Q as b}from"./QPage.b2fd791d.js";import{u as k}from"./posts.63ee7e98.js";const Q={data(){return{post:{},loaded:!1}},methods:{...m(k,["show"]),onLoad(){console.func("pages/admins/posts/SinglePostPage:methods.onLoad()",arguments),this.loaded=!1,this.show(this.id).then(o=>{this.post=o,this.loaded=!0}).catch(o=>{this.$core.error(o),this.$router.push({name:"Posts"})})}},computed:{id(){return this.$route.params.post}},mounted(){this.onLoad()},watch:{$route(o,a){o.name===a.name&&this.onLoad()}}},g={class:"text-h6"},y={class:"text-subtitle2"};function w(o,a,S,P,r,$){return l(),i(b,{padding:""},{default:e(()=>[r.loaded?(l(),i(p,{key:0},{default:e(()=>[t(n,null,{default:e(()=>[c("div",g,d(r.post.title),1),c("div",y,d(r.post.user.name),1)]),_:1}),t(n,{class:"q-pt-none"},{default:e(()=>[f(d(r.post.description),1)]),_:1})]),_:1})):(l(),i(p,{key:1},{default:e(()=>[t(n,null,{default:e(()=>[t(s,{animation:"blink",type:"text"}),t(s,{width:"150px",animation:"blink",type:"text"})]),_:1}),t(n,{class:"q-pt-none"},{default:e(()=>[t(s,{type:"text"}),t(s,{type:"text"}),t(s,{width:"60%",type:"text"})]),_:1})]),_:1})),t(x,null,{default:e(()=>[t(_),t(h,{flat:"",color:"primary",icon:"fal fa-arrow-left",label:"Go back to posts",onClick:a[0]||(a[0]=v=>o.$router.back()),class:"q-mt-md"})]),_:1})]),_:1})}var V=u(Q,[["render",w]]);export{V as default};