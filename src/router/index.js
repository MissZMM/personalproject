import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/register/Register'
import Train from '../views/pages/train/Train'
import Personal from '../views/pages/personal/personal'
import Image from '../views/pages/data/Image'
import Model from '../views/pages/data/model'
import Recycle from '../views/pages/data/recycle'
import Reconstruction from '../views/pages/reconstruction/Reconstruction'
import Analysis from '../views/pages/analysis/analysis'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}
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
    redirect: '/analysis',
    children: [{
        path: '/analysis',
        name: 'Analysis',
        component: Analysis
    },
    {
        path: '/train',
        name: 'Train',
        component: Train
    },

    {
        path: '/reconstruction',
        name: 'Reconstruction',
        component: Reconstruction
    },
    {
        path: '/image',
        name: 'Image',
        component: Image
    },
    {
        path: '/model',
        name: 'Model',
        component: Model
    },
    {
        path: '/recycle',
        name: 'Recycle',
        component: Recycle
    },
    {
        path: '/personal',
        name: 'Personal',
        component: Personal
    }]
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
