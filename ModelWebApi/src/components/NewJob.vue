<template>
    <section class="form">
        <form v-on:submit.prevent="onSubmitForm">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input name="name" v-model="form.name" v-validate="'required|min:3'" v-bind:class="{'is-danger': errors.has('name')}" class="input" type="text" placeholder="Full name">
                </div>
                <p class="help is-danger" v-show="errors.has('name')">
                    {{ errors.first('name') }}
                </p>
            </div>
        </form>
    </section>

</template>

<script>
</script>

<style scoped>
</style>