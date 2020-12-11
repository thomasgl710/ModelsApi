<template>
    <div class="column is two-thirds">
        <section class="section">
            <h1 class="title"> Im The Manager</h1>
            <p class=" subtitle">
                I can do whatever I want - <strong>Donald Trump</strong>!
            </p>
            <hr>

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
                    <tbody id="data">

                    </tbody>
                </table>
            </div>

            <button @click="$router.push('AddAModelToJob')">Add Model</button>
            <button @click="$router.push('RemoveModelFromJob')">Remove Model</button>
            <button @click="$router.push('NewModel')">New Model</button>
            <button @click="$router.push('NewJob')">New Job</button>
            <button @click="$router.push('NewManager')">New Manager</button>

        </section>
    </div>
</template>

<script>
    


            //var url = "https://localhost:44368/api/Jobs";
            //fetch(url).then(
            //    res => {
            //        res.json.then(
            //            data => {

            //                if (data.length > 0) {
            //                    var temp = "";

            //                    data.forEach((u) => {
            //                        temp += "<tr>";
            //                        temp += "<td>" + u.EFJobId + "<td>";
            //                        temp += "<td>" + u.Customer + "<td>";
            //                        temp += "<td>" + u.StartDate + "<td>";
            //                        temp += "<td>" + u.Days + "<td>";
            //                        temp += "<td>" + u.Location + "<td>";
            //                        temp += "<td>" + u.Comments + "<td>";
            //                    })

            //                    document.getElementById(data).innerHTML = temp;
            //                }
            //            }
            //        )
            //    }
            //)
        
    

</script>

