import{dd as t}from"./index.c62d8a64.js";var a=[{path:"/",redirect:"/dashboard",component:()=>t(()=>import("./AdminLayout.b7749a2e.js"),["assets/AdminLayout.b7749a2e.js","assets/QLayout.c31ab83a.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QResizeObserver.dd5d6970.js","assets/LayoutDrawer.96d22cbf.js","assets/QDrawer.7bfe5b9f.js","assets/TouchPan.2f3364c4.js","assets/QSpace.860c9bc7.js","assets/logo.f8423396.js","assets/QItemLabel.79290e29.js","assets/QExpansionItem.67fe55a2.js"]),children:[{path:"dashboard",name:"Dashboard",meta:{auth:!0,admin:!0,guard:"admins"},component:()=>t(()=>import("./IndexPage.f2e4afba.js"),["assets/IndexPage.f2e4afba.js","assets/QPage.b2fd791d.js","assets/index.c62d8a64.js","assets/index.ff220283.css"])},{path:"my-account",name:"My Account",meta:{auth:!0,admin:!0,guard:"admins",title:"My Account"},component:()=>t(()=>import("./MyAccountPage.e2aef25f.js"),["assets/MyAccountPage.e2aef25f.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QForm.dedb44d3.js","assets/QPage.b2fd791d.js"])},{path:"settings",name:"Settings",meta:{auth:!0,admin:!0,guard:"admins",title:"Settings"},component:()=>t(()=>import("./SettingsPage.813378f0.js"),["assets/SettingsPage.813378f0.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QItemLabel.79290e29.js","assets/QExpansionItem.67fe55a2.js","assets/QPage.b2fd791d.js"])}]},{path:"/auth",component:()=>t(()=>import("./AuthLayout.4b923a18.js"),["assets/AuthLayout.4b923a18.js","assets/AuthLayout.79d50cbb.css","assets/QPage.b2fd791d.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QLayout.c31ab83a.js","assets/QResizeObserver.dd5d6970.js","assets/logo.f8423396.js"]),children:[{path:"login",meta:{auth:!1,admin:!0,guard:"admins"},name:"Login",component:()=>t(()=>import("./LoginPage.79dab818.js"),["assets/LoginPage.79dab818.js","assets/LoginPage.e551ba40.css","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QForm.dedb44d3.js"])},{path:"forgot-password",meta:{auth:!1,admin:!0,guard:"admins"},name:"Forget Password",component:()=>t(()=>import("./ForgotPasswordPage.9f55b2d3.js"),["assets/ForgotPasswordPage.9f55b2d3.js","assets/ForgotPasswordPage.6cb5c6b2.css","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QForm.dedb44d3.js"])},{path:"reset-password",meta:{auth:!1,admin:!0,guard:"admins"},name:"Reset Password",component:()=>t(()=>import("./ResetPasswordPage.828b48a8.js"),["assets/ResetPasswordPage.828b48a8.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QForm.dedb44d3.js"])}]},{path:"/staff",component:()=>t(()=>import("./AdminLayout.b7749a2e.js"),["assets/AdminLayout.b7749a2e.js","assets/QLayout.c31ab83a.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QResizeObserver.dd5d6970.js","assets/LayoutDrawer.96d22cbf.js","assets/QDrawer.7bfe5b9f.js","assets/TouchPan.2f3364c4.js","assets/QSpace.860c9bc7.js","assets/logo.f8423396.js","assets/QItemLabel.79290e29.js","assets/QExpansionItem.67fe55a2.js"]),children:[{path:"",name:"Staff",meta:{auth:!0,admin:!0,guard:"admins",base:"Staff",module:"Staff"},component:()=>t(()=>import("./StaffsPage.d0fa2fac.js"),["assets/StaffsPage.d0fa2fac.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QChip.b0c8d9d7.js","assets/QPage.b2fd791d.js","assets/staff.1d856a41.js"])},{path:":id",name:"Single Staff",meta:{auth:!0,admin:!0,guard:"admins",base:"Staff",module:"Staff"},component:()=>t(()=>import("./StaffPage.cff95146.js"),["assets/StaffPage.cff95146.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/TouchPan.2f3364c4.js","assets/QResizeObserver.dd5d6970.js","assets/rtl.8c45d7ac.js","assets/colors.8bd06824.js","assets/QPage.b2fd791d.js","assets/PermissionsModule.f76066f3.js","assets/QItemLabel.79290e29.js","assets/SkeletonSinglePage.f07820b6.js","assets/QSkeleton.2e510be2.js","assets/staff.1d856a41.js","assets/group.121f5b6b.js"])}]},{path:"/groups",component:()=>t(()=>import("./AdminLayout.b7749a2e.js"),["assets/AdminLayout.b7749a2e.js","assets/QLayout.c31ab83a.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QResizeObserver.dd5d6970.js","assets/LayoutDrawer.96d22cbf.js","assets/QDrawer.7bfe5b9f.js","assets/TouchPan.2f3364c4.js","assets/QSpace.860c9bc7.js","assets/logo.f8423396.js","assets/QItemLabel.79290e29.js","assets/QExpansionItem.67fe55a2.js"]),children:[{path:"",name:"Groups",meta:{auth:!0,admin:!0,guard:"admins",base:"Staff",module:"Groups"},component:()=>t(()=>import("./GroupsPage.34500b44.js"),["assets/GroupsPage.34500b44.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QPage.b2fd791d.js","assets/group.121f5b6b.js"])},{path:":id",name:"Single Group",meta:{auth:!0,admin:!0,guard:"admins",base:"Staff",module:"Groups"},component:()=>t(()=>import("./GroupPage.92183af0.js"),["assets/GroupPage.92183af0.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QPage.b2fd791d.js","assets/PermissionsModule.f76066f3.js","assets/QItemLabel.79290e29.js","assets/SkeletonSinglePage.f07820b6.js","assets/QSkeleton.2e510be2.js","assets/group.121f5b6b.js"])}]},{path:"/members",component:()=>t(()=>import("./AdminLayout.b7749a2e.js"),["assets/AdminLayout.b7749a2e.js","assets/QLayout.c31ab83a.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QResizeObserver.dd5d6970.js","assets/LayoutDrawer.96d22cbf.js","assets/QDrawer.7bfe5b9f.js","assets/TouchPan.2f3364c4.js","assets/QSpace.860c9bc7.js","assets/logo.f8423396.js","assets/QItemLabel.79290e29.js","assets/QExpansionItem.67fe55a2.js"]),children:[{path:"",name:"Members",meta:{auth:!0,admin:!0,guard:"admins",module:"Members",base:"Members"},component:()=>t(()=>import("./MembersPage.1b9f5464.js"),["assets/MembersPage.1b9f5464.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QPage.b2fd791d.js","assets/member.03f4c4df.js"])},{path:":id",name:"Single Member",meta:{auth:!0,admin:!0,guard:"admins",module:"Members",base:"Members"},component:()=>t(()=>import("./MemberPage.57c624c8.js"),["assets/MemberPage.57c624c8.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QTimeline.7ca5248a.js","assets/QPage.b2fd791d.js","assets/SkeletonSinglePage.f07820b6.js","assets/QSkeleton.2e510be2.js","assets/member.03f4c4df.js"])}]},{path:"/enquiries",component:()=>t(()=>import("./AdminLayout.b7749a2e.js"),["assets/AdminLayout.b7749a2e.js","assets/QLayout.c31ab83a.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QResizeObserver.dd5d6970.js","assets/LayoutDrawer.96d22cbf.js","assets/QDrawer.7bfe5b9f.js","assets/TouchPan.2f3364c4.js","assets/QSpace.860c9bc7.js","assets/logo.f8423396.js","assets/QItemLabel.79290e29.js","assets/QExpansionItem.67fe55a2.js"]),children:[{path:"",name:"Enquiries",meta:{auth:!0,admin:!0,guard:"admins",module:"Enquiries",base:"Enquiries"},component:()=>t(()=>import("./EnquiriesPage.746e2380.js"),["assets/EnquiriesPage.746e2380.js","assets/QPage.b2fd791d.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/enquiry.e91658a3.js"])},{path:":id",name:"Single Enquiry",meta:{auth:!0,admin:!0,guard:"admins",module:"Enquiries",base:"Enquiries"},component:()=>t(()=>import("./EnquiryPage.20645085.js"),["assets/EnquiryPage.20645085.js","assets/index.c62d8a64.js","assets/index.ff220283.css","assets/QTimeline.7ca5248a.js","assets/QPage.b2fd791d.js","assets/SkeletonSinglePage.f07820b6.js","assets/QSkeleton.2e510be2.js","assets/enquiry.e91658a3.js"])}]}];export{a as default};