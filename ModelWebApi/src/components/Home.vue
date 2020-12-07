<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>Email</p>
        <!-- `picked` is a string "a" when checked -->
        <input type="email" v-model="loginInfo.email">
        <!-- `toggle` is either true or false -->
        <p>Password</p>
        <input type="password" v-model="loginInfo.password" />
        <button type="submit">Login</button>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginInfo: {
                    email: '',
                    password: ''
                }
            }
        },
    };
</script>


<!--<h1>Login</h1>
<input type="text" name="username" v-model="input.username" placeholder="Username" />
<input type="password" name="password" v-model="input.password" placeholder="Password" />
<button type="button" v-on:click="login()">Login</button>-->