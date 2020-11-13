import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/shebeiruku',
            component: () =>
                import ('./components/Zichanjx/Shebeiruku.vue')
        },
        {
            path: '/yihaoruku',
            component: () =>
                import ('./components/Zichanjx/Yihaoruku.vue')
        },
        {
            path: '/jiecguih',
            component: () =>
                import ('./components/Zichanjx/Jiecguih.vue')
        },
        {
            path: '/weichuli',
            component: () =>
                import ('./components/Zichanjx/Weichuli.vue')
        },
        {
            path: '/shebeiguas',
            component: () =>
                import ('./components/Zichanjx/Shebeiguas.vue')
        },
        {
            path: '/shebeibaox',
            component: () =>
                import ('./components/Zichanjx/Shebeibaox.vue')
        },
        {
            path: '/shebeibaof',
            component: () =>
                import ('./components/Zichanjx/Shebeibaof.vue')
        },
        {
            path: '/yihaofenfa',
            component: () =>
                import ('./components/Zichanjx/Yihaofenfa.vue')
        },
        {
            path: '/weichuli2',
            component: () =>
                import ('./components/Zichanjx/Weichuli2.vue')
        },
        {
            path: '/jitifenfa',
            component: () =>
                import ('./components/Zichanjx/Jitifenfa.vue')
        }
    ]
})