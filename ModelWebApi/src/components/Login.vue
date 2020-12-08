<template>
    <div class="login">
        <h1>{{ msg }}</h1>
        <p>Email</p>
        <!-- `picked` is a string "a" when checked -->
        <input type="email" v-model="loginInfo.email">
        <!-- `toggle` is either true or false -->
        <p>Password</p>
        <input type="password" v-model="loginInfo.password" />
        <p></p>
        <button @click="myFunction">Login</button>


    </div>
</template>

<script>
    import { EventBus } from '../eventbus.js';
    export default {
        data() {
            return {
                loginInfo: {
                    email: '',
                    password: '',
                    oldPassword: ''
                }
            }
        },
        methods: {
            emitLogin() {
                EventBus.$emit('I tried to login', this.loginInfo);
            },
            myFunction: function () {
                window.open("http://localhost:1337/Login", "_blank");
            }
        }
    };
</script>
