import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/register/Register'
import Platform from '../views/pages/platform/Platform'
import Personal from '../views/pages/personal/personal'
import Order from '../views/pages/order/order'
import Message from '../views/pages/message/message'
import Analysis from '../views/pages/analysis/analysis'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
},
{
    path: '/login',
    name: 'Login',
    component: Login
},
{
    path: '/register',
    name: 'Register',
    component: Register
},
{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/About.vue'),
    redirect: '/platform',
    children: [{
        path: '/platform',
        name: 'Platform',
        component: Platform
    },
    {
        path: '/personal',
        name: 'Personal',
        component: Personal
    },
    {
        path: '/analysis',
        name: 'Analysis',
        component: Analysis
    },
    {
        path: '/message',
        name: 'Message',
        component: Message
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    }]
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
