<template>
    <div class="columns" id="app">
        <div class="columns is-two-thirds">
            <section class="section">
                <h1 class="title"> Login page</h1>
                <p class="subtitle">
                    Are you a model?
                </p>
                <hr>
                    <section class="form">
                        <form v-on:submit.prevent="login">
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
                            <p></p>
                            <div class="field-is-grouped">
                                <div class="control">
                                    <button class="button is-primary">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <button @click="$router.push('Home')">Cancel</button>

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

            parseJwt(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
            

                return JSON.parse(jsonPayload);
            },



            async login() {

                let url = "https://localhost:44368/api/account/login";
                try {
                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(this.form), // Assumes data is in an object called form
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    });
                    if (response.ok) {

                        let token = await response.json();
                        localStorage.setItem("token", token.jwt);

                        alert("The password was correct");
                        // Change view to some other component
                        
                        if (this.parseJwt(token.jwt).ModelId < 0) {
                            this.$router.push('ManagerSite');
                        }
                        else {
                            this.$router.push('ModelSite');
                        }
                        // …
                        
                    } else {
                        alert("Server returned: " + response.statusText);
                    }
                } catch (err) {
                    alert("Error: " + err);
                }
                return;
            },
            parseJwt(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                return JSON.parse(jsonPayload);
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










