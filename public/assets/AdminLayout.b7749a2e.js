import{Q as m,a as p}from"./QLayout.c31ab83a.js";import{L as d,a as c}from"./LayoutDrawer.96d22cbf.js";import{bw as _,aL as e,a3 as o,b5 as s,aD as i,d as t}from"./index.c62d8a64.js";import"./QResizeObserver.dd5d6970.js";import"./QDrawer.7bfe5b9f.js";import"./TouchPan.2f3364c4.js";import"./QSpace.860c9bc7.js";import"./logo.f8423396.js";import"./QItemLabel.79290e29.js";import"./QExpansionItem.67fe55a2.js";const w={components:{LayoutHeader:d,LayoutDrawer:c},computed:{sideMenus(){return[{title:"Dashboard",icon:"fas fa-tachometer-alt",route:"Dashboard"},{title:"Enquiries",icon:"fas fa-square-question",route:"Enquiries"},{title:"Members",icon:"fas fa-user-tag",route:"Members"},{title:"Staff",icon:"fas fa-user-shield",route:"Staff",subLinks:[{title:"All Staff",route:"Staff"},{title:"Groups",route:"Groups"}]},{title:"Settings",icon:"fas fa-gear",route:"Settings"}]}}};function y(a,r,h,L,b,n){const u=e("layout-header"),l=e("layout-drawer"),f=e("router-view");return i(),o(m,{view:"hHh LpR lFr",class:"bg-main"},{default:s(()=>[t(u,{onUpdateLeftDrawer:r[0]||(r[0]=g=>a.$refs.layoutDrawer.toggle())}),t(l,{class:"admin-side-links",ref:"layoutDrawer","side-menus":n.sideMenus},null,8,["side-menus"]),t(p,null,{default:s(()=>[(i(),o(f,{key:a.$router.fullPath}))]),_:1})]),_:1})}var A=_(w,[["render",y]]);export{A as default};