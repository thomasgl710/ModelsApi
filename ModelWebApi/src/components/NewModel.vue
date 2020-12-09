<div class="columns" id="app">
    <div class="column is-two-thirds">
        <section class="section">
            <h1 class="title">Create New Model</h1>
            <p class="subtitle">
                True beauty comes from the <strong>outside</strong>!
            </p>
            <hr>

            <!-- form starts here -->
            <section class="form">
                <div class="field">
                    <label class="label">First Name</label>
                    <div class="control">
                        <input firstname="firstname"
                               v-model="form.firstname"
                               v-validate="'required|min:3'"
                               v-bind:class="{'is-danger': errors.has('firstname')}"
                               class="input" type="text" placeholder="First Name">
                    </div>
                    <p class="help is-danger" v-show="errors.has('firstname')">
                        {{ errors.first('firstname') }}
                    </p>
                </div>

                <section class="form">
                    <div class="field">
                        <label class="label">Last Name</label>
                        <div class="control">
                            <input firstname="lastname"
                                   v-model="form.lastname"
                                   v-validate="'required|min:3'"
                                   v-bind:class="{'is-danger': errors.has('lastname')}"
                                   class="input" type="text" placeholder="Last Name">
                        </div>
                        <p class="help is-danger" v-show="errors.has('lastname')">
                            {{ errors.first('lastname') }}
                        </p>
                    </div>

                    <section class="form">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input firstname="email"
                                       v-model="form.email"
                                       v-validate="'required|min:3'"
                                       v-bind:class="{'is-danger': errors.has('email')}"
                                       class="input" type="text" placeholder="Email">
                            </div>
                            <p class="help is-danger" v-show="errors.has('email')">
                                {{ errors.first('email') }}
                            </p>
                        </div>

                        <section class="form">
                            <div class="field">
                                <label class="label">Phonenumber</label>
                                <div class="control">
                                    <input firstname="phonenumber"
                                           v-model="form.phonenumber"
                                           v-validate="'required|min:3'"
                                           v-bind:class="{'is-danger': errors.has('phonenumber')}"
                                           class="input" type="text" placeholder="Phonenumber">
                                </div>
                                <p class="help is-danger" v-show="errors.has('phonenumber')">
                                    {{ errors.first('phonenumber') }}
                                </p>
                            </div>

                            <section class="form">
                                <div class="field">
                                    <label class="label">Addressline 1</label>
                                    <div class="control">
                                        <input firstname="addressLine1"
                                               v-model="form.addressLine1"
                                               v-validate="'required|min:3'"
                                               v-bind:class="{'is-danger': errors.has('addressLine1')}"
                                               class="input" type="text" placeholder="Address Line 1">
                                    </div>
                                    <p class="help is-danger" v-show="errors.has('addressLine1')">
                                        {{ errors.first('addressLine1') }}
                                    </p>
                                </div>

                                <section class="form">
                                    <div class="field">
                                        <label class="label">Addressline 2</label>
                                        <div class="control">
                                            <input firstname="addressLine2"
                                                   v-model="form.addressLine1"
                                                   v-validate="'required|min:3'"
                                                   v-bind:class="{'is-danger': errors.has('addressLine2')}"
                                                   class="input" type="text" placeholder="Address Line 2">
                                        </div>
                                        <p class="help is-danger" v-show="errors.has('addressLine2')">
                                            {{ errors.first('addressLine2') }}
                                        </p>
                                    </div>

                                    <section class="form">
                                        <div class="field">
                                            <label class="label">Zip</label>
                                            <div class="control">
                                                <input firstname="zip"
                                                       v-model="form.zip"
                                                       v-validate="'required|min:3'"
                                                       v-bind:class="{'is-danger': errors.has('zip')}"
                                                       class="input" type="text" placeholder="Zip">
                                            </div>
                                            <p class="help is-danger" v-show="errors.has('zip')">
                                                {{ errors.first('zip') }}
                                            </p>
                                        </div>

                                        <section class="form">
                                            <div class="field">
                                                <label class="label">City</label>
                                                <div class="control">
                                                    <input firstname="city"
                                                           v-model="form.city"
                                                           v-validate="'required|min:3'"
                                                           v-bind:class="{'is-danger': errors.has('city')}"
                                                           class="input" type="text" placeholder="City">
                                                </div>
                                                <p class="help is-danger" v-show="errors.has('city')">
                                                    {{ errors.first('city') }}
                                                </p>
                                            </div>

                                            <section class="form">
                                                <div class="field">
                                                    <label class="label">Country</label>
                                                    <div class="control">
                                                        <input firstname="country"
                                                               v-model="form.country"
                                                               v-validate="'required|min:3'"
                                                               v-bind:class="{'is-danger': errors.has('country')}"
                                                               class="input" type="text" placeholder="Country">
                                                    </div>
                                                    <p class="help is-danger" v-show="errors.has('country')">
                                                        {{ errors.first('country') }}
                                                    </p>
                                                </div>




                                                <section class="form">
                                                    <div class="field">
                                                        <label class="label">Nationality</label>
                                                        <div class="control">
                                                            <input firstname="nationality"
                                                                   v-model="form.nationality"
                                                                   v-validate="'required|min:3'"
                                                                   v-bind:class="{'is-danger': errors.has('nationality')}"
                                                                   class="input" type="text" placeholder="Nationality">
                                                        </div>
                                                        <p class="help is-danger" v-show="errors.has('nationality')">
                                                            {{ errors.first('nationality') }}
                                                        </p>
                                                    </div>

                                                    <section class="form">
                                                        <div class="field">
                                                            <label class="label">Height</label>
                                                            <div class="control">
                                                                <input firstname="height"
                                                                       v-model="form.height"
                                                                       v-validate="'required|min:3'"
                                                                       v-bind:class="{'is-danger': errors.has('height')}"
                                                                       class="input" type="number" placeholder="In meters">
                                                            </div>
                                                            <p class="help is-danger" v-show="errors.has('height')">
                                                                {{ errors.first('height') }}
                                                            </p>
                                                        </div>

                                                        <section class="form">
                                                            <div class="field">
                                                                <label class="label">Shoe Size</label>
                                                                <div class="control">
                                                                    <input firstname="shoesize"
                                                                           v-model="form.shoesize"
                                                                           v-validate="'required|min:3'"
                                                                           v-bind:class="{'is-danger': errors.has('shoesize')}"
                                                                           class="input" type="number" placeholder="US-sizes">
                                                                </div>
                                                                <p class="help is-danger" v-show="errors.has('shoesize')">
                                                                    {{ errors.first('shoesize') }}
                                                                </p>
                                                            </div>

                                                            <div class="field">
                                                                <label class="label">Hair Color</label>
                                                                <div class="control">
                                                                    <div class="select">
                                                                        <select v-model="form.hair_type">
                                                                            <option disabled value="">Nothing selected</option>
                                                                            <option v-for="option in options.haircolor" v-bind:value="option.value">
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
                                                                            <option v-for="option in options.eyecolor" v-bind:value="option.value">
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







                                                        </section>
                                                    </section>
                                                </section>
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </div>

    <div class="column">
        <section class="section" id="results">
            <div class="box">
                <ul>
                    <!-- loop through all the `form` properties and show their values -->
                    <li v-for="(item, k) in form">
                        <strong>{{ k }}:</strong> {{ item }}
                    </li>
                </ul>
            </div>
        </section>
    </div>
</div>

<script>
    Vue.use(VeeValidate);
    new Vue({
        el: '#app',
        data: {
            form: {
                firstname: '',
                lastname: '',
                email: '',
                phonename: '',
                addressline1: '',
                addressline2: '',
                zip: '',
                city: '',
                country: '',
                nationality: '',
                height: '',
                shoesize: '',
                hair_type: '',
                eye_type: '',
                comments: ''
            },
            options: {
                eyecolor: [
                    { value: 'brown', text: "Brown" },
                    { value: 'blue', text: "Blue" },
                    { value: 'green', text: "Green" }
                ],
                haircolor: [
                    { value: 'black', text: "Black" },
                    { value: 'darkbrown', text: "Dark brown" },
                    { value: 'lightbrown', text: "Light brown" },
                    { value: 'blonde', text: "Blonde" },
                    { value: 'grey', text: "Grey" },
                    { value: 'redhair', text: "Red Hair" }

                ]
            }
        }
    });
</script>