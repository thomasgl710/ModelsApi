<template>
    <div class="column is two-thirds">
        <section class="section">
            <h1 class="title"> Create new manager account</h1>
            <p class=" subtitle">
                Please create an account mr. Lee
            </p>
            <hr>
            <section class="form">
                <form v-on:submit.prevent="onSubmitForm">
                    <div class="field">
                        <label class="label">Firstname</label>
                        <div class="control">
                            <input name="Firstname" v-model="form.firstname" class="input" type="text" maxlength="64">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Lastname</label>
                        <div class="control">
                            <input name="Lastname" v-model="form.lastname" class="input" type="text" maxlength="32">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input name="Email" v-model="form.email" class="input" type="email" maxlength="254">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input type="password" v-model="form.password" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Cofirm password</label>
                        <div class="control">
                            <input type="password" v-model="form.confirmPassword" />
                        </div>
                    </div>
                    <p></p>
                    <div class="field-is-grouped">
                        <div class="control">
                            <button class="button is-primary">
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </section>
    </div>
</template>

<script>
    export default {
        name: "VNTForm",
        data: () => ({
            form: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
            }
        }),
        methods: {
            onSubmitForm() {
                var url = "https://localhost:44368/api/Models";
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(this.form),
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => {
                    this.response = responseJson;
                })
                    .catch(error => alert('Something bad happened: ' + error));

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


