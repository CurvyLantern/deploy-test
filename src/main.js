import { createApp } from "vue"
import "./index.css"
import App from "./App.vue"

import Router from "./router.js"

import VueSplide from "@splidejs/vue-splide"

const app = createApp(App)

app.use(Router)

app.use(VueSplide)

app.mount("#app")
