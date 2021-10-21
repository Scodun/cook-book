import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "@/views/Welcome";
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Welcome},
        { path: '/Home', component: Welcome}
    ]
})

export default router