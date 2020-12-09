<template>
    <div class="columns" id="app">
        <div class="columns is-two-thirds">
            <section class="section">
                <h1 class="title"> Fun with Forms</h1>
                <p class="subtitle">
                    Learn how to work with forms, including <strong> validation</strong>!
                </p>
                <hr>
                <section class="form">
                    <form v-on:submit.prevent="onSubmitForm">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input type="email" v-model="form.email" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input type="password" v-model="form.password" />
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

            </section>
        </div>
    </div>
</template>


<script>
    export default {
        name: "VNTForm",
        data: () => ({
            form: {
                email: "",
                password: "",
            }
        }),
        methods: {
            onSubmitForm() {
                if (this.$validator.validateAll()) {
                    alert(JSON.stringify(this.form));
                }
                else
                    alert('You have errors in the form');
            }
        }
    }
</script>

<style scoped>
    #results {
        position: fixed;
        right: 0;
        top: 10%;
    }
</style>





















<template>
    <div class="login">
        <h1>Login</h1>
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

<!--<script>
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
            myFunction: function () {
                window.open("http://localhost:1337/Login", "_blank");
            }
        }
    };
</script>-->
