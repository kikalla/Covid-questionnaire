import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./pages/homePage.vue";
import Personal from "./pages/personalInformationPage.vue";
import Condition from "./pages/covidCondition.vue";
import Vaccinate from "./pages/vaccinatePage.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/personal-information", component: Personal },
    { path: "/covid-condition", component: Condition },
    { path: "/vaccinate", component: Vaccinate },
  ],
});

export default router;
