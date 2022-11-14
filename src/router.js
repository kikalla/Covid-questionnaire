import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import Personal from "@/pages/PersonalInformationPage.vue";
import Condition from "@/pages/CovidCondition.vue";
import Vaccinate from "@/pages/VaccinatePage.vue";
import Policy from "@/pages/CovidPolicy.vue";
import Thanks from "@/pages/ThanksPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/personal-information", component: Personal },
    { path: "/covid-condition", component: Condition },
    { path: "/vaccinate", component: Vaccinate },
    { path: "/covid-policy", component: Policy },
    { path: "/thanks", component: Thanks },
  ],
});

export default router;
