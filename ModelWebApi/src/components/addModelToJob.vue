const apiUrl = 's'
<template>
    <div class="addModelToJob">
        <h1>Add model to job</h1>
        <p> JobId</p>
        <input type="number" v-model="addModelToJobInfo.EfJobId" min="0" />

        <p> ModelId</p>
        <input type="number" v-model="addModelToJobInfo.EfModelId" min="0" />

        <p></p>
        <button @click="addModelToJob">Add model to job</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                addModelToJobInfo: {
                    EfJobId: '',
                    EfModelId: ''
                }
            }
        },
        methods: {
            addModelToJob: function () {
                this.checkForm();
            },
            checkForm: function () {
                this.errors = []
                if (this.EfJobId < 0)
                    this.errors.push('Type in a JobId');
                else if (this.EfModelId < 0)
                    this.errors.push('Type in a ModelId');
                //else {
                //    fetch(apiUrl + encodeURIComponent(this.EfModelId, this.EfJobId))
                //        .then(async res => {
                //            if (res.status === 204) {
                //                alet('OK');
                //            }
                //            else if (res.status === 400) {
                //                let errorResponse = await res.json();
                //                this.errors.push(errorResponse.error);
                //            }
                //        });
                //}
            }
        }

    }
</script>