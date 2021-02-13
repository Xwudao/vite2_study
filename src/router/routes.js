import Home from "../components/Home.vue";
import Admin from "../components/Admin.vue";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/admin',
        component: Admin,
        name: 'Admin'
    },
]

export default routes
