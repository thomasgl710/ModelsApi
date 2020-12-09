<template>
    <div class="column is two-thirds">
        <section class="section">
            <h1 class="title"> Create new manager account</h1>
            <p class=" subtitle">
                Please create an account mr. Lee
            </p>
            <hr>
            <section class="form">
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

<!--const apiUrl = ''
<template>
    <div class="newManager">
        <h1>Create a manager account</h1>
        <p> Firstname</p>
        <input type="text" v-model="NewManagerInfo.FirstName" maxlength="64" />

        <p> Lastname</p>
        <input type="text" v-model="NewManagerInfo.LastName" maxlength="32" />

        <p>Email</p>-->
<!-- `picked` is a string "a" when checked -->
<!--<input type="email" v-model="NewManagerInfo.Email" maxlength="254">-->
<!-- `toggle` is either true or false -->
<!--<p>Password</p>
        <input type="password" v-model="NewManagerInfo.Password" maxlength="60" />

        <p> Confirm password</p>
        <input type="password" v-model="NewManagerInfo.ConfirmPassword" maxlength="60"/>
        <p></p>
        <button @click="createNewManager">Create new manager</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                NewManagerInfo: {
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Password: '',
                    ConfirmPassword: ''
                }
            }
        },
        methods: {
            createNewManager: function () {
                this.checkForm();
                },
            checkForm: function () {
                this.errors = []
                if (this.Password != this.ConfirmPassword)
                    this.errors.push('Passwords need to be identical')
                //else {
                //    fetch(apiUrl + encodeURIComponent(this.NewManagerInfo))
                //        .then(async res => {
                //            if (res.status === 204) {
                //                let errorResponse = await res.json();
                //                this.errors.push(errorResponse.error);
                //            }
                //        });
                //}
            }
        }

    }
</script>-->
