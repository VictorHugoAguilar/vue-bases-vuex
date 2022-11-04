import { createApp } from "vue";
import App from "./App.vue";

// Importamos el store para introducirlo en el scope más alto posible
import store from "@/store";

createApp(App).use(store).mount("#app");
