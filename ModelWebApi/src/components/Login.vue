<template>
    <div class="columns" id="app">
        <div class="columns is-two-thirds">
            <section class="section">
                <h1 class="title"> Login page</h1>
                <p class="subtitle">
                    Are you a model?
                </p>
                <h>
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
                            <p></p>
                    <div class="field-is-grouped">
                        <div class="control">
                            <button class="button is-primary">
                                Login
                            </button>
                        </div>
                    </div>
                        </form>
                    </section>
                </h>
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










