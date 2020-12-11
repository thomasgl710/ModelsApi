<template>
    <div class="column is two-thirds">
        <section class="section">
            <h1 class="title"> Im a Model</h1>
            <p class=" subtitle">
                - <strong>Donald Trump</strong>!
            </p>
            <hr>


            <button v-on:click="getAllJobsData">Get Jobs Data</button>

            <div class="container">
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>Customer</th>
                            <th>Start Date</th>
                            <th>Days</th>
                            <th>Location</th>
                            <th>Comments</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="jobdata in jobDataList">
                            <td>{{jobdata.efJobId}}</td>
                            <td>{{jobdata.customer}}</td>
                            <td>{{jobdata.startDate}}</td>
                            <td>{{jobdata.days}}</td>
                            <td>{{jobdata.location}}</td>
                            <td>{{jobdata.comments}}</td>
                        </tr>

                    </tbody>
                </table>
            </div>



            <button @click="$router.push('AddAnExpense')">Add an expense</button>
        </section>
    </div>

</template>

<script>
    export default {
        name: "AllJobs",
        data() {
            return {
                jobDataList: {}
            };
        },
        methods: {
            getAllJobsData() {
                var url = "https://localhost:44368/api/Jobs";
                var vm = this;
                fetch(url, {
                    method: 'GET', // Or DELETE
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        (vm.jobDataList = data)
                    })

                    .catch(error => alert('Something bad happened: ' + error));

            }
        }
    };
</script>

<style scoped>
</style>