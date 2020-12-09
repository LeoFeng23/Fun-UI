import {createRouter, createWebHashHistory, Router} from "vue-router";
import doc from '../views/Doc.vue'

export const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/doc',
            component: doc
        },
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
    ]
})
