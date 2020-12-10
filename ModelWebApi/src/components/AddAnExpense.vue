<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <section class="section">
                <h1 class="title">Add An Expense</h1>
                <p class="subtitle">
                    View health as an investment, not an <strong>expense</strong>!
                </p>
                <hr>
            </section>

            <section class="form">
                <form v-on:submit.prevent="onSubmitForm">
                    <div class="field">
                        <label class="label">JobId</label>
                        <div class="control">
                            <input name="EfJobId" v-model="form.efJobId" class="input" type="number" min="0">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Expense</label>
                        <div class="control">
                            <input name="Expense" v-model="form.expense" class="input" type="number" min="0">
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
        </div>
    </div>
</template>


<script>
    export default {
        name: "VNTForm",
        data: () => ({
            form: {
                efJoblId: "",
                expense: ""
            }
        }),
        methods: {
            onSubmitForm() {
                var url = "https://localhost:44368/api/Expenses";
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