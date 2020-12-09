<template>
    <div class="removeModelToJob">
        <h1>Remove model from job</h1>
        <p> JobId</p>
        <input type="number" v-model="removeModelFromJobInfo.EfJobId" min="0" />

        <p> ModelId</p>
        <input type="number" v-model="removeModelFromJobInfo.EfModelId" min="0" />

        <p></p>
        <button @click="removeModelFromJob">Remove model from job</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                removeModelFromJobInfo: {
                    EfJobId: '',
                    EfModelId: ''
                }
            }
        },
        methods: {
            removeModelFromJob: function () {
                this.checkForm();
            },
            checkForm: function () {
                this.errors = []
                if (this.EfJobId < 0)
                    this.errors.push('Type in a JobId');
                else if (this.EfModelId < 0)
                    this.errors.push('Type in a ModelId');
            }
        }

    }
</script>