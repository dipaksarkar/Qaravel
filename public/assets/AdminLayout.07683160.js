import{Q as l,a as m}from"./logo.f51ec961.js";import{L as c,a as d}from"./LayoutDrawer.2d8d71ff.js";import{_,bq as y,b8 as t,K as r,L as s,J as i,M as e}from"./index.a3094cdd.js";import{u as g}from"./app.28f5ca45.js";import"./QToolbar.9704aa6c.js";import"./QDrawer.747f0e8e.js";import"./QHeader.15099f15.js";import"./BaseAlert.74c912b9.js";import"./api.b3b542e0.js";import"./lodash.2b44b28e.js";const L={components:{LayoutHeader:c,LayoutDrawer:d},computed:{...y(g,["statistics"]),sideMenus(){return[{title:"Dashboard",icon:"fas fa-tachometer-alt",route:"Dashboard"},{title:"Confidential Listings",icon:"fas fa-laptop-house",route:"Confidential Listings"},{title:"Listings",icon:"fas fa-home",route:"Property Listings"},{title:"Enquiries",icon:"fas fa-paper-plane",route:"Enquiry Index",notification:this.statistics.unseen_enquiry},{title:"Tags",icon:"fas fa-tag",route:"Tags"},{title:"Types",icon:"fas fa-tag",route:"Types"},{title:"Categories",icon:"fas fa-tag",route:"Categories"}]}}};function h(a,o,w,C,v,n){const u=t("layout-header"),p=t("layout-drawer"),f=t("router-view");return i(),r(l,{view:"hHh Lpr fFf",class:"bg-main"},{default:s(()=>[e(u,{onUpdateLeftDrawer:o[0]||(o[0]=D=>a.$refs.layoutDrawer.toggle())}),e(p,{class:"admin-side-links",ref:"layoutDrawer","side-menus":n.sideMenus},null,8,["side-menus"]),e(m,null,{default:s(()=>[(i(),r(f,{key:a.$router.fullPath}))]),_:1})]),_:1})}var B=_(L,[["render",h]]);export{B as default};