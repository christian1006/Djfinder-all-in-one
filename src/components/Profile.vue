<template>
        
            <div class="container ">
                <div class="row">
                    <div class="container-fluid row">
                        <h2 style="padding: 35px;" class="mx-auto">{{artist.name}}'s Profile Page</h2>
                        </div>
                        <div class=" container-fluid row d-flex justify-content-end">
                            <button class="btn" 
                                v-bind:class="{ 'btn-outline-secondary': this.isSuccessful, 'btn-outline-danger': this.isError }"
                                type="submit"
                                style="padding: 5px 5px; margin-bottom: 5px; font-size: 17px; width: 80px; height:60px"
                                v-on:click="seen = !seen; updateArtist(artist.key, artist); toggleText(); switchClick()"
                                >{{button.text}}</button>

                        </div>

                    
 
                </div>

                <!-- USER PROFILE ROW STARTS-->
                <div class="row container-fluid row">
                    <div class="col-md-3 col-sm-3 bg-light">
                            <input id="updateInput" type="text" v-show="!seen" v-model="artist.name">
                            <!-- <span v-show="seen">{{artist.price}}</span> -->
                        <h4 v-show="seen">{{artist.name}}</h4>
                        <div class="user-wrapper">
                            <img style="width:100%" src="../assets/dj.jpg" class="img-responsive" />
                            <div class="mt-3 d-flex justify-content-around">
                                <button class="btn btn-outline-info" style="width: 120px; padding: 20px 5px;">Book Me</button>
                                <button class="btn btn-outline-info" style="width: 120px; padding: 20px 5px;">Send E-Mail</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9 col-sm-9  user-wrapper">
                        <div class="description">
                            <div class=" justify-content-between">
                                <h3> About me: </h3>
                                
                            </div>
                            <hr />
                            <p>
                                <textarea id="updateInput" type="text" v-show="!seen"
                                 v-model="artist.about" rows="3" cols="70">
                                 </textarea>   
                                <span v-show="seen">{{artist.about}}</span>
                            </p>

                            <h3> Price: </h3>
                            <hr />
                            <p>
                                    <input id="updateInput" type="text" v-show="!seen" v-model="artist.price">
                                    <span v-show="seen">{{artist.price}}</span>
                                </p>

                            <h3> Style: </h3>
                            <hr />
                            <p>
                                    <input id="updateInput" type="text" v-show="!seen" v-model="artist.style">
                                    <span v-show="seen">{{artist.style}}</span>
                                </p>

                            <h3> Dates: </h3>
                            <hr />
                            <p>
                                    <input id="updateInput" type="text" v-show="!seen" v-model="artist.dates">
                                    <span v-show="seen">{{artist.dates}}</span>
                                </p>

                            <h3> Location: </h3>
                            <hr />
                            <p>
                                    <input id="updateInput" type="text" v-show="!seen" v-model="artist.location">
                                    <span v-show="seen">{{artist.location}}</span>
                                </p>

                            <h3> Music examples: </h3>
                            <hr />
                            <div>
                                SOME MUSIC EXAMPLES
                            </div>
                            <button class="btn btn-danger mt-5 mb-5 float-right" v-on:click="removeArtist(artist._id)">Delete Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    props: ["id"],
    data: function () {
      return {
        seen: true,
        isSuccessful: true,
        isError: false,
        button: {
            text: 'Edit',
        },
        
      }
    },
    computed: {
        axiosInstance: function () {
            return axios.create({
                baseURL: 'http://localhost:3001/api',
            })
        },
        artist() {
            return this.$store.state.artists[this.id]
        }
    },
    methods: {
        ...mapActions({
            removeArtist: 'remove_artist',
            updateArtist: 'update_artist',

        }),
        updateArtist: function (id, newObject) {

            console.log(id)
            console.log(newObject)
            this.axiosInstance.post('/update', {
                   newArtist: newObject,
                   id: id
                })
                .then((responce) => {
                    // console.log(responce.data);
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        },
        toggleText: function() {
            console.log('Hide')
            this.button.text =  (this.button.text == 'Edit') ? 'Save' : 'Edit';

          },
          switchClick: function() {
            if(this.isSuccessful && !this.isError)
            {
                this.isSuccessful = false;
                this.isError = true;
            }
            else if(this.isError && !this.isSuccessful)
            {
                this.isError = false;
                this.isSuccessful = true;
            }
        },
 
        getAllArtist: function () {
            this.axiosInstance.post('/read_all', {
                })
                .then((responce) => {

                    this.artists = [];

                    for (let elem in responce.data) {
                        // console.log(responce.data[elem]);
                        this.artists.push(responce.data[elem]);
                    }
                    
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        }  

    },
    // created: function (){
    //     this.getAllArtist();
    // }   
}
</script>

