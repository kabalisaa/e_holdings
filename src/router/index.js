import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "@/views/Index.vue";
import Admin from "@/views/admin/IndexView.vue";
import SettingsView from "@/views/admin/SettingsView.vue";
import SampleComponents from "@/views/admin/SampleComponents.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import ContactView from "@/views/ContactView.vue";
import SupportView from "@/views/SupportView.vue";
import AssignDeviceView from "@/views/admin/AssignDeviceView.vue";
import CheckDeviceView from "@/views/CheckDeviceView.vue";
import Invoice from "@/views/admin/InvoiceView.vue";
import DevicesView from "@/views/admin/DevicesView.vue";
import DeviceView from "@/views/admin/DeviceView.vue";
import TransferDeviceView from "@/views/admin/TransferDeviceView.vue";
import i18n from "@/i18n";
const routes = [
  {
    path: "/",
    redirect: `/${i18n.global.locale}`,
  },
  {
    path: "/:lang",

    children: [
      {
        path: "",
        name: "index",
        component: IndexView,
      },
      {
        path: "about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      //   Admin Routes
      {
        path: "admin",
        name: "admin",
        component: Admin,
      },

      {
        path: "admin/settings",
        name: "settings",
        component: SettingsView,
      },
      {
        path: "admin/components",
        name: "components",
        component: SampleComponents,
      },
      {
        path: "admin/invoice",
        name: "invoice",
        component: Invoice,
      },
      {
        path: "register",
        name: "register",
        component: RegisterView,
      },
      {
        path: "login",
        name: "login",
        component: LoginView,
      },
      {
        path: "sample",
        name: "sample",
        component: SampleComponents,
      },
      {
        path: "Contact",
        name: "contact",
        component: ContactView,
      },
      {
        path: "check-device",
        name: "check-device",
        component: CheckDeviceView,
      },
      {
        path: "support",
        name: "support",
        component: SupportView,
      },
      {
        path: "admin/devices",
        name: "devices",
        component: DevicesView,
      },
      {
        path: "admin/device",
        name: "device",
        component: DeviceView,
      },
      {
        path: "admin/transfer",
        name: "transfer",
        component: TransferDeviceView,
      },
      {
        path: "admin/assign-device",
        name: "assign-device",
        component: AssignDeviceView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
