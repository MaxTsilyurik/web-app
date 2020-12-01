import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Messages from "@/views/Messages";
import Login from "@/views/Login";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/messages',
        name: 'Messages',
        component: Messages
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            layout: 'login-layout'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router