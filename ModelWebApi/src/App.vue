<template>
    <div id="app">
        <p>Thomas er en bot</p>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/NewManager">New Manager</router-link> |
            <router-link to="/Login">Login</router-link> |
            <router-link to="/NewModel">New Model</router-link>
        </div>

        <router-view></router-view>

    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Login from './components/Login.vue';
    //import AddModelToJob from './components/AddModelToJob.vue';
    import NewManager from './components/NewManager.vue';
    import RemoveModelFromJob from './components/RemoveModelFromJob.vue';
    import NewModel from './components/NewModel.vue';

    export default {
        name: 'app',
        components: {
            Home,
            Login,
            //AddModelToJob,
            NewManager,
            NewModel,
            RemoveModelFromJob,
        }
    };
</script>

<style>
</style>

