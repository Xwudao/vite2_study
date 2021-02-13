const routes = [
    {
        path: '/',
        component: () => import("../components/Home.vue"),
        name: 'Home'
    },
    {
        path: '/admin',
        component: () => import("../components/Admin.vue"),
        name: 'Admin'
    },
]

export default routes
