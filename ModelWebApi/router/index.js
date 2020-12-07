import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import Login from "../src/views/Login.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path:"Login", 
        name: "user-login",
        component: LoginComVue
    },
   { 
        path: "/about",
        name: "About",
        component: () =>import("../views/Home.vue")
    },
];

async login() {
    let url = "https://localhost:44368/api/account/login";
    try {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(this.form),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        if (response.ok) {
            let token = await response.json();
            localStorage.setItem("token", token.jwt);
        }
        else {
            alert("Server returned: " + response.statusText);
        }
        catch (err) {
            alert("Error: " + err);
        }
        return;
    }
}