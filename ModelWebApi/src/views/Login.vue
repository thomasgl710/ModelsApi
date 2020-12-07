<template>
    <label class="Label">Login </label>
    <div class="control">
        <v-form>
            <v-text-field v-model="loginInfo.email" label="Email" />
            <v-text-field v-model="loginInfo.password" label="Password" />
        </v-form>
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
    }
</script>