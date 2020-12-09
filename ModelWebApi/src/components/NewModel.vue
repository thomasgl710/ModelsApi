<template>
    <div class="columns">
        <div class="column is-two-thirds">
        <section class="section">
            <h1 class="title">Create New Model</h1>
            <p class="subtitle">
                True beauty comes from the <strong>outside</strong>!
            </p>
            <hr>
        </section>
        <!-- form starts here -->
        <section class="form">
            <form v-on:submit.prevent="onSubmitForm">
                <div class="field">
                    <label class="label">First Name</label>
                    <div class="control">
                        <input name="firstname"
                               v-model="form.firstname"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="First Name">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('firstname')">
            {{ errors.first('name') }}
        </p>-->
                </div>


                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control">
                        <input firstname="lastname"
                               v-model="form.lastname"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="Last Name">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('lastname')">
            {{ errors.first('lastname') }}
        </p>-->
                </div>


                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input firstname="email"
                               v-model="form.email"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="Email">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('email')">
            {{ errors.first('email') }}
        </p>-->


                </div>




                <div class="field">
                    <label class="label">Phonenumber</label>
                    <div class="control">
                        <input firstname="phonenumber"
                               v-model="form.phonenumber"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="Phonenumber">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('phonenumber')">
            {{ errors.first('phonenumber') }}
        </p>-->
                </div>


                <div class="field">
                    <label class="label">Addressline 1</label>
                    <div class="control">
                        <input firstname="addressLine1"
                               v-model="form.addressLine1"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="Address Line 1">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('addressLine1')">
            {{ errors.first('addressLine1') }}
        </p>-->
                </div>


                <div class="field">
                    <label class="label">Addressline 2</label>
                    <div class="control">
                        <input firstname="addressLine2"
                               v-model="form.addressLine2"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="Address Line 2">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('addressLine2')">
            {{ errors.first('addressLine2') }}
        </p>-->
                </div>


                <div class="field">
                    <label class="label">Zip</label>
                    <div class="control">
                        <input firstname="zip"
                               v-model="form.zip"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="Zip">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('zip')">
            {{ errors.first('zip') }}
        </p>-->
                </div>


                <div class="field">
                    <label class="label">City</label>
                    <div class="control">
                        <input firstname="city"
                               v-model="form.city"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="City">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('city')">
            {{ errors.first('city') }}
        </p>-->
                </div>


                <div class="field">
                    <label class="label">Country</label>
                    <div class="control">
                        <input firstname="country"
                               v-model="form.country"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="Country">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('country')">
            {{ errors.first('country') }}
        </p>-->
                </div>





                <div class="field">
                    <label class="label">Nationality</label>
                    <div class="control">
                        <input firstname="nationality"
                               v-model="form.nationality"
                               v-validate="'required|min:3'"
                               class="input" type="text" placeholder="Nationality">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('nationality')">
            {{ errors.first('nationality') }}
        </p>-->
                </div>


                <div class="field">
                    <label class="label">Height</label>
                    <div class="control">
                        <input firstname="height"
                               v-model="form.height"
                               v-validate="'required|min:3'"
                               class="input" type="number" placeholder="In meters" min="0">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('height')">
            {{ errors.first('height') }}
        </p>-->


                </div>




                <div class="field">
                    <label class="label">Shoe Size</label>
                    <div class="control">
                        <input firstname="shoesize"
                               v-model="form.shoesize"
                               v-validate="'required|min:3'"
                               class="input" type="number" placeholder="US-sizes" min="0">
                    </div>
                    <!--<p class="help is-danger" v-show="errors.has('shoesize')">
            {{ errors.first('shoesize') }}
        </p>-->
                </div>

                <div class="field">
                    <label class="label">Hair Color</label>
                    <div class="control">
                        <div class="select">
                            <select v-model="form.hair_type">
                                <option disabled value="">Nothing selected</option>
                                <option v-for="option in options.haircolor" v-bind:value="option.value" v-bind:key="option.key">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="field">
                    <label class="label">Eye Color</label>
                    <div class="control">
                        <div class="select">
                            <select v-model="form.eye_type">
                                <option disabled value="">Nothing selected</option>
                                <option v-for="option in options.eyecolor" v-bind:value="option.value" v-bind:key="option.key">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>



                <div class="field">
                    <label class="label">Comments</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Textarea" v-model="form.comments"></textarea>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </section>

    </div>

        <div class="column">
            <section class="section" id="results">
                <div class="box">
                    <ul>
                         loop through all the `form` properties and show their values 
                        <li v-for="(item, k) in form" v-bind:key="k">
                            <strong>{{ k }}:</strong> {{ item }}
                        </li>
                    </ul>
                </div>
            </section>
        </div>

    </div>
</template>

<script>
    export default {
        name:"NewModelForm",
        data: () => ({
            form: {
                firstname: "",
                lastname: "",
                email: "",
                phonename: "",
                addressLine1: "",
                addressLine2: "",
                zip: "",
                city: "",
                country: "",
                nationality: "",
                height: "",
                shoesize: "",
                hair_type: "",
                eye_type: "",
                comments: ""
            },
            options: {
                eyecolor: [
                    { key: 1, value: 'brown', text: "Brown" },
                    { key: 2, value: 'blue', text: "Blue" },
                    { key: 3, value: 'green', text: "Green" }
                ],
                haircolor: [
                    { key: 1, value: 'black', text: "Black" },
                    { key: 2, value: 'darkbrown', text: "Dark brown" },
                    { key: 3, value: 'lightbrown', text: "Light brown" },
                    { key: 4, value: 'blonde', text: "Blonde" },
                    { key: 5, value: 'grey', text: "Grey" },
                    { key: 6, value: 'redhair', text: "Red Hair" }

                ]
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