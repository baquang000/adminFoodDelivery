import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "primeicons/primeicons.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

const firebaseConfig = {
  apiKey: "AIzaSyDtErJ8g05JnutVNbQjGCgArFpX6MFC1VU",
  authDomain: "my-firebase-31476.firebaseapp.com",
  projectId: "my-firebase-31476",
  storageBucket: "my-firebase-31476.appspot.com",
  messagingSenderId: "490352003580",
  appId: "1:490352003580:web:951ae32d4f6203f6e70a79",
  measurementId: "G-NFK4W0F85R"
};

app.use(VueApexCharts);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
