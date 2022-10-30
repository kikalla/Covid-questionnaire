import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./pages/homePage.vue";
import Personal from "./pages/personalInformationPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/personal-information", component: Personal },
  ],
});

export default router;
