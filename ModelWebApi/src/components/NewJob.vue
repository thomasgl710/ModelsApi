<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <section class="section">
                <h1 class="title">Create New Job</h1>
                <h2 class="subtitle">
                    Work work work work <strong>work</strong>!
                </h2>
                <hr>
                <br />
            </section>

            <section class="form">
                <form v-on:submit.prevent="onSubmitForm">
                    <div class="field">
                        <label class="label">Customer</label>
                        <div class="control">
                            <input name="customer"
                                   v-model="form.customer"
                                   v-validate="'required|min:3'"
                                   class="input" type="text" placeholder="Customer">
                        </div>
                        <!--<p class="help is-danger" v-show="errors.has('customer')">
           {{ errors.first('customer') }}
        </p>-->
                    </div>


                    <!-- MISSING STARTDATE -->
                    <div class="field">
                        <div class="label">Startdate</div>
                        <div class="control">
                            <input type="date" id="startdate" name="startdate"
                                   v-model="form.startdate">
                        </div>
                    </div>


                    <div class="input">
                        <label class="label">Days</label>
                        <div class="control">
                            <input firstname="days"
                                   v-model="form.days"
                                   class="input" type="number" placeholder="Days" min="0">
                        </div>
                        <!--<p class="help is-danger" v-show="errors.has('days')">
            {{ errors.first('days') }}
        </p>-->


                    </div>

                    <div class="field">
                        <label class="label">Location</label>
                        <div class="control">
                            <input firstname="location"
                                   v-model="form.location"
                                   v-validate="'required|min:3'"
                                   class="input" type="text" placeholder="Location">
                        </div>
                        <!--<p class="help is-danger" v-show="errors.has('location')">
            {{ errors.first('location') }}
        </p>-->
                    </div>

                    <div class="field">
                        <label class="label">Comments</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea" v-model="form.comments"></textarea>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="bbutton">
                                Submit
                            </button>
                        </div>
                    </div>

                    <button class="bbutton" @click="$router.push('ManagerSite')">Cancel</button>

                </form>
            </section>

        </div>
    </div>

</template>

<script>
    export default {
        name: "NewModelForm",
        data: () => ({
            form: {
                customer: "",
                startdate:"",
                days:0,
                location: "",
                comments: ""
            }
        }),
        methods: {
            onSubmitForm() {
                var url = "https://localhost:44368/api/Jobs";
                this.form.days = Number(this.form.days);
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

                    this.$router.push('ManagerSite');
                })
                    .catch(error => alert('Something bad happened: ' + error));

            }
        }
    }
</script>

<style scoped>
</style>