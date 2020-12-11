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
                        <label class="label">ModelId</label>
                        <div class="control">
                            <input name="ModelId" v-model="form.modelId" class="input" type="number" min="0">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">JobId</label>
                        <div class="control">
                            <input name="JobId" v-model="form.jobId" class="input" type="number" min="0">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                            <input type="date" id="date" name="date"
                                   v-model="form.date">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Text</label>
                        <div class="control">
                            <input name="Text" v-model="form.text" class="input" type="text" min="0">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Amount</label>
                        <div class="control">
                            <input name="Amount" v-model="form.amount" class="input" type="number" min="0">
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
                modelId: "",
                jobId: "",
                date: "",
                text: "",
                amount: ""
            }
        }),
        methods: {
            onSubmitForm() {
                var url = "https://localhost:44368/api/Expenses";
                this.form.amount = Number(this.form.amount);
                this.form.modelId = Number(this.form.modelId);
                this.form.jobId = Number(this.form.jobId);
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