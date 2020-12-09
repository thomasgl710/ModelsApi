const apiUrl = ''
<template>
    <div class="newManager">
        <h1>Create a manager account</h1>
        <p> Firstname</p>
        <input type="text" v-model="NewManagerInfo.FirstName" maxlength="64" />

        <p> Lastname</p>
        <input type="text" v-model="NewManagerInfo.LastName" maxlength="32" />

        <p>Email</p>
        <!-- `picked` is a string "a" when checked -->
        <input type="email" v-model="NewManagerInfo.Email" maxlength="254">
        <!-- `toggle` is either true or false -->
        <p>Password</p>
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
</script>