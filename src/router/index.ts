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
                    component: () => import('../views/main/children/Doc.vue'),
                    redirect: '/doc/switch',
                    children: [
                        {
                            path: 'switch',
                            component: () => import('../components/doc/Switch.vue')
                        },
                        {
                            path: 'button',
                            component: () => import('../components/doc/Button.vue')
                        },
                        {
                            path: 'tabs',
                            component: () => import('../components/doc/Tabs.vue')
                        },
                        {
                            path: 'dialog',
                            component: () => import('../components/doc/Dialog.vue')
                        },

                    ]
                },
            ]
        },
    ]
})
