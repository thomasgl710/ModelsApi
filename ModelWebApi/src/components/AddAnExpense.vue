<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <section class="section">
                <h1 class="title">Add An Expense</h1>
                <h2 class="subtitle">
                    View health as an investment, not an <strong>expense</strong>!
                </h2>
                <hr>
            <br />
            </section>

            <section class="form">
                <form v-on:submit.prevent="onSubmitForm">
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
                            <button class="bbutton">
                                Add
                            </button>
                        </div>
                    </div>

                </form>

                <button class="bbutton" @click="$router.push('ModelSite')">Cancel</button>

            </section>
        </div>
    </div>
</template>


<script>
    export default {
        name: "VNTForm",
        data: () => ({
            form: {
                modelId: {
                    type: Number
                },
                jobId: {
                    type: Number,
                    required: true
                },
                date: {
                    type: Date,
                    required: true
                },
                text: {
                    type: String,
                    required: true
                },
                amount: {
                    type: Number,
                    required: true
                }
            }
        }),
        methods: {
            parseJwt(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));


                return JSON.parse(jsonPayload);
            },
            onSubmitForm() {
                var url = "https://localhost:44368/api/Expenses";
                var token = localStorage.getItem("token");

                this.form.modelId = this.parseJwt(token).ModelId;
               
                console.log(this.form.modelId);
                this.form.modelId = Number(this.form.modelId);
                this.form.amount = Number(this.form.amount);
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

                    this.$router.push('ModelSite');
                })
                    .catch(error => alert('Something bad happened: ' + error));

            }
        }
    }
</script>