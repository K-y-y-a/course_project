import { createWebHistory, createRouter } from "vue-router";
import Main from "/src/components/Main.vue";
import SignPage from "/src/components/SignPage.vue";
import NewPage from "/src/components/NewPage.vue";
import NoData from "/src/components/NoData.vue"
import PageNotFound from "/src/components/PageNotFound.vue"

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/sign-up",
        name: "SignUp",
        component: SignPage,
    },
    {
        path: "/sign-in",
        name: "SignIN",
        component: SignPage,
    },
    {
        path: "/search",
        name: "Search",
        component: NoData, //Search,
    },
    {   
        path: '/news/:id',
        name: 'NewPage',
        component: NewPage 
    },
    {   
        path: '/categories/:id',
        name: 'CategoriesPage',
        component: NoData, //CategoriesPage 
    },
    {   
        path: '/:pathMatch(.*)*',
        //name: "Main",
        name: 'PageNotFound',
        //component: Main,
        component: PageNotFound,
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