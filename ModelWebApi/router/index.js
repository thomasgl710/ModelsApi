import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../src/components/Home.vue";
import Login from "../src/components/Login.vue";
import NewManager from "../src/components/NewManager.vue";
import NewModel from "../src/components/NewModel.vue";
//import AddModelToJob from "../src/components/AddModelToJob.vue";
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        //{
        //    path: "/about",
        //    name: "About",
        //    component: () => import("..//Home.vue")
        //},
        {
            path: "/NewManager",
            name: "NewManager",
            component: NewManager
        },
        {
            path: "/NewModel",
            name: "NewModel",
            component: NewModel
        }
        //{
        //    path: "/AddModelToJob",
        //    name: "AddModelToJob",
        //    component: AddModelToJob
        //}
    ]
});
