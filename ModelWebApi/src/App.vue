<template>
    <div id="app">
        <div id="nav">
            <button class="bbutton" @click="$router.push('/')">Home</button>
            <button class="bbutton" @click="$router.push('Login')">Login</button>
        </div>

        <router-view></router-view>

    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Login from './components/Login.vue';
    import AddAModelToJob from './components/AddAModelToJob.vue';
    import NewManager from './components/NewManager.vue';
    import RemoveModelFromJob from './components/RemoveModelFromJob.vue';
    import NewModel from './components/NewModel.vue'
    import AddAnExpense from './components/AddAnExpense.vue'
    import NewJob from './components/NewJob.vue'
    import ModelSite from './components/ModelSite.vue'

    export default {
        name: 'app',
        components: {
            Home,
            Login,
            AddAModelToJob,
            NewManager,
            NewModel,
            RemoveModelFromJob,
            AddAnExpense,
            NewJob,
            ModelSite
        }
    };
</script>

<style>
</style>

