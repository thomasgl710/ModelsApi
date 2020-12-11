import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../src/components/Home.vue";
import Login from "../src/components/Login.vue";
import NewManager from "../src/components/NewManager.vue";
import NewModel from "../src/components/NewModel.vue";
import RemoveModelFromJob from "../src/components/RemoveModelFromJob.vue";
import AddAModelToJob from "../src/components/AddAModelToJob.vue";
import AddAnExpense from "../src/components/AddAnExpense.vue";
import NewJob from "../src/components/NewJob.vue"
import ManagerSite from "../src/components/ManagerSite.vue"
import ModelSite from "../src/components/ModelSite.vue"
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
        },
        {
            path: "/AddAModelToJob",
            name: "AddAModelToJob",
            component: AddAModelToJob
        },
        {
            path: "/RemoveModelFromJob",
            name: "RemoveModelFromJob",
            component: RemoveModelFromJob
        },
        {
            path: "/AddAnExpense",
            name: "AddAnExpense",
            component: AddAnExpense
        },
        {
            path: "/NewJob",
            name: "NewJob",
            component: NewJob
        },
        {
            path: "/ManagerSite",
            name: "ManagerSite",
            component: ManagerSite
        },
        {
            path: "/ModelSite",
            name: "ModelSite",
            component: ModelSite
        }
    ]
});
