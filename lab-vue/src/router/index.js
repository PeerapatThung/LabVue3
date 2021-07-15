import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import Category from '../views/Category.vue'
import Students from '../views/StudentInfo.vue'

const routes = [{
        path: '/',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/students',
        name: 'Students',
        component: Students
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router