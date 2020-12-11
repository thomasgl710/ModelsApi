<template>
    <div class="column is two-thirds">
        <section class="section">
            <h1 class="title"> Im The Manager</h1>
            <p class=" subtitle">
                I can do whatever I want - <strong>Donald Trump</strong>!
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



            <button @click="$router.push('AddModelToJob')">Add Model</button>
            <button @click="$router.push('RemoveModelFromJob')">Remove Model</button>
            <button @click="$router.push('NewModel')">New Model</button>
            <button @click="$router.push('NewJob')">New Job</button>
            <button @click="$router.push('NewManager')">New Manager</button>

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

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #105469;
        font-family: 'Open Sans', sans-serif;
    }

    table {
        background: #012B39;
        border-radius: 0.25em;
        border-collapse: collapse;
        margin: 1em;
    }

    th {
        border-bottom: 1px solid #364043;
        color: #E2B842;
        font-size: 0.85em;
        font-weight: 600;
        padding: 0.5em 1em;
        text-align: left;
    }

    td {
        color: #fff;
        font-weight: 400;
        padding: 0.65em 1em;
    }

    .disabled td {
        color: #4F5F64;
    }

    tbody tr {
        transition: background 0.25s ease;
    }

        tbody tr:hover {
            background: #014055;
        }
</style>

