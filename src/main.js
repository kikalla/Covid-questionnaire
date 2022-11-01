import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import PageHeader from "./components/PageHeader.vue";
import PersonalForm from "./components/PersonalForm.vue";
import ConditionForm from "./components/ConditionForm.vue";

import store from "./store";

const app = createApp(App);

app.use(store);
app.use(router);
app.component("page-header", PageHeader);
app.component("personal-form", PersonalForm);
app.component("condition-form", ConditionForm);
app.mount("#app");
