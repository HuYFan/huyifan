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
        },
        {
            path: '/yihaohex',
            component: () =>
                import ('./components/Zichanjx/Yihaohex.vue')
        },
        {
            path: '/dichandj',
            component: () =>
                import ('./components/Zichanjx/Dichandj.vue')
        },
        {
            path: '/dichangz',
            component: () =>
                import ('./components/Zichanjx/Dichangz.vue')
        },
        {
            path: '/fangchandj',
            component: () =>
                import ('./components/Zichanjx/Fangchandj.vue')
        },
        {
            path: '/fangchanwx',
            component: () =>
                import ('./components/Zichanjx/Fangchanwx.vue')
        },
        {
            path: '/fangchangz',
            component: () =>
                import ('./components/Zichanjx/Fangchangz.vue')
        },
        {
            path: '/xiangmulr',
            component: () =>
                import ('./components/Zichanjx/Xiangmulr.vue')
        },
        {
            path: '/jierusq',
            component: () =>
                import ('./components/Shenqshenp/Jierusq.vue')
        },
        {
            path: '/faqijr',
            component: () =>
                import ('./components/Shenqshenp/Faqijr.vue')
        },
        {
            path: '/lingyongsq',
            component: () =>
                import ('./components/Shenqshenp/Lingyongsq.vue')
        },
        {
            path: '/faqily',
            component: () =>
                import ('./components/Shenqshenp/Faqily.vue')
        },
        {
            path: '/caigousq',
            component: () =>
                import ('./components/Shenqshenp/Caigousq.vue')
        },
        {
            path: '/faqicg',
            component: () =>
                import ('./components/Shenqshenp/Faqicg.vue')
        },
        {
            path: '/jrshenp',
            component: () =>
                import ('./components/Shenqshenp/Jrshenp.vue')
        },
        {
            path: '/lyshenp',
            component: () =>
                import ('./components/Shenqshenp/Lyshenp.vue')
        },
        {
            path: '/cgshenp',
            component: () =>
                import ('./components/Shenqshenp/Cgshenp.vue')
        },
        {
            path: '/caozuorz',
            component: () =>
                import ('./components/Caozuorz/Caozuorz.vue')
        },
        {
            path: '/kucun',
            component: () =>
                import ('./components/Tongji/Kucun.vue')
        },
        {
            path: '/taizhang',
            component: () =>
                import ('./components/Tongji/Taizhang.vue')
        },
        {
            path: '/pandian',
            component: () =>
                import ('./components/Tongji/Pandian.vue')
        },
        {
            path: '/kaishipd',
            component: () =>
                import ('./components/Tongji/Kaishipd.vue')
        },
        {
            path: '/didiansz',
            component: () =>
                import ('./components/Shezhi/Didiansz.vue')
        }
    ]
})