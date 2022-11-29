import { createWebHistory, createRouter } from "vue-router";
import Main from "/src/components/Main.vue";
import SignUp from "/src/components/SignUp.vue";
import SignIn from "/src/components/SignIn.vue";
import Search from "/src/components/Search.vue";
import NewPage from "/src/components/NewPage.vue";
import CategoriesPage from "/src/components/CategoriesPage.vue";
import Authors from "/src/components/Authors.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/signin",
        name: "SignIN",
        component: SignIn,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {   
        path: '/news/:id',
        name: 'NewPage',
        component: NewPage 
    },
    {   
        path: '/categories/:id',
        name: 'CategoriesPage',
        component: CategoriesPage 
    },
    {   
        path: '/authors/:id',
        name: 'Authors',
        component: Authors 
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {left: 0, top: 0}
        }
    }
});

export default router;