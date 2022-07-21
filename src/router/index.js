import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 创建新页面后，在本文件下进行引入即可
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "登录",
      meta: false,
      component: () => import("../views/SystemLogin.vue"),
    },
    {
      path: "/Index",
      name: "首页",
      component: () => import("../views/SystemIndex.vue"),
      meta: true,
      children: [
        {
          path: "/CheckDonationRecord",
          name: "查询捐赠记录",
          component: () => import("../views/CheckDonationRecord.vue"),
        },
        {
          path:"/AddRecord",
          name:"个人需求表单填写",
          component: () => import("../views/AddRecord.vue"),
        },
        {
          path:"/RecordManage",
          name:"个人需求表单查询",
          component: () => import("../views/RecordManage.vue"),
        },
        {
          path:"/MaterialManage",
          name:"现有物资查询",
          component: () => import("../views/MaterialManage.vue"),
        },
      ],
    },
  ],
});
