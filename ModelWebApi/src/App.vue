<template>
    <div id="app">
        <Home msg="Hello world!" />
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Login from './components/Login.vue'

    export default {
        name: 'app',
        components: {
            Home,
            Login
        }
    };
</script>

<style>
</style>

