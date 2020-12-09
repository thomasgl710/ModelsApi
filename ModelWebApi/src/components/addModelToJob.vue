<template>
    <div class="column is two-thirds">
        <section class="section">
            <h1 class="title"> Add model to job</h1>
            <p class="subtitle">
                Please add the model!!
            </p>
            <hr>
            <section class="form">
                <form v-on:submit.prevent="onSubmitForm">
                    <div class="field">
                        <label class="label">JobId</label>
                        <div class="control">
                            <input name="EfJobId" v-model="form.efJobId" class="input" type="number" min="0">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">ModelId</label>
                        <div class="control">
                            <input name="EfModelId" v-model="form.efModelId" class="input" type="number" min="0">
                        </div>
                    </div>
                    <p></p>
                    <div class="field-is-grouped">
                        <div class="control">
                            <button class="button is-primary">
                                Add
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
                efJoblId: "",
                efModelId: ""
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







