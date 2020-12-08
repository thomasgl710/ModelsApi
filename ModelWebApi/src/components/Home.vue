<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>Hello world</p>

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
