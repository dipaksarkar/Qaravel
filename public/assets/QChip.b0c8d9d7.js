import{bu as x,bP as C,cc as _,bQ as y,cd as B,c as l,d6 as R,h as i,bx as u,ce as I,co as Q,g as w,cg as z}from"./index.c62d8a64.js";const D={xs:8,sm:10,md:14,lg:20,xl:24};var V=x({name:"QChip",props:{...C,..._,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:b,emit:a}){const{proxy:{$q:c}}=w(),h=y(e,c),v=B(e,D),m=l(()=>e.selected===!0||e.icon!==void 0),f=l(()=>e.selected===!0?e.iconSelected||c.iconSet.chip.selected:e.icon),q=l(()=>e.iconRemove||c.iconSet.chip.remove),n=l(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),g=l(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(n.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(h.value===!0?" q-chip--dark q-dark":"")}),s=l(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},o={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||c.lang.label.remove};return{chip:t,remove:o}});function S(t){t.keyCode===13&&r(t)}function r(t){e.disable||(a("update:selected",!e.selected),a("click",t))}function d(t){(t.keyCode===void 0||t.keyCode===13)&&(z(t),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function k(){const t=[];n.value===!0&&t.push(i("div",{class:"q-focus-helper"})),m.value===!0&&t.push(i(u,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const o=e.label!==void 0?[i("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(i("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},I(b.default,o))),e.iconRight&&t.push(i(u,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(i(u,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:q.value,...s.value.remove,onClick:d,onKeyup:d})),t}return()=>{if(e.modelValue===!1)return;const t={class:g.value,style:v.value};return n.value===!0&&Object.assign(t,s.value.chip,{onClick:r,onKeyup:S}),R("div",t,k(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Q,e.ripple]])}}});export{V as Q};