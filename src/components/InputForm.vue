<template>
    <div class="py-5">
        <div>
            <label for="name">Name:</label>
            <br />
            <input  type="text" name="name" v-model="artist.name">
        </div>

        <div>
            <label for="location">Location:</label>
            <br />
            <input type="text" name="location" v-model="artist.location">
        </div>

        <div>
            <label for="price">Price:</label>
            <br />
            <input type="text" name="price" v-model="artist.price">
        </div>

        <div>
            <label for="style">Style:</label>
            <br />
            <input type="text" name="style" v-model="artist.style">
        </div>

        <div>
            <label for="dates">Dates:</label>
            <br />
            <input type="text" name="dates" v-model="artist.dates">
        </div>


        <div>
            <label for="about">About:</label>
            <br />
            <textarea name="about" rows="4" cols="50" v-model="artist.about">
                Some general info
            </textarea>
        </div>

        <div>
            <button class="btn btn-primary" v-on:click="redirect()">SUBMIT</button>
        </div>





    </div>
</template>

<script>
import axios from 'axios'
import store from '../store.js'
import { mapActions } from 'vuex'

export default {
    data: function(){
        return {
            artist: {
                key: undefined,
                name: undefined,
                location: undefined,
                price: undefined,
                style: undefined,
                dates: undefined,
                about: undefined
            }
        }
    },

    methods: {

        ...mapActions({
            newArtist: 'add_artist'
        }),

        redirect: function() {
            console.log(Object.values(this.artist) + " - inputform.vue")
            this.newArtist(this.artist);
            
        },


    },


}
</script>
