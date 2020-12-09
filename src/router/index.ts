import {createRouter, createWebHashHistory, Router} from "vue-router";

export const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/main/index.vue'),
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    component: () => import('../views/main/children/Home.vue')
                },
                {
                    path: 'doc',
                    component: () => import('../views/main/children/Doc.vue')
                },
            ]
        },
    ]
})
