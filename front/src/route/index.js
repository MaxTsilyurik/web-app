import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Messages from "@/views/Messages";
import Login from "@/views/Login";
import Register from "@/views/Register";
import ProfilePage from "@/views/Profile";


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
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            layout: 'login-layout'
        }
    },
    {
        path: '/profile',
        name: 'User',
        component: ProfilePage
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router