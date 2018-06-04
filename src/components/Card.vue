<template>
        <div class="card hoverable my-5 mx-3" style=" width:300px">
              <div class="view overlay z-depth-3">
                <img class="card-img-top" src="../assets/dj.jpg" alt="Card image cap">
                    <a>
                        <div class="mask waves-effect rgba-white-slight"></div>
                    </a>
             </div>
           
            <div class="card-body text-center">
                <h3 class="card-title">{{artist.name}}</h3>
                <h5 class="py-2">Style: {{artist.style}}</h5>
                <h5 class="text">Price: {{artist.price}}</h5>
                <router-link :to="{ path: '/profile/' + artist._id}"
                class="btn btn-info"
                >See profile</router-link>
                
            </div>
        </div>
</template>

<script>

import axios from 'axios'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    props: ['artist', 'id', 'route'],
    name: 'Card',
    methods: {



        setCurrentArtist: function(id) {
            // still needs to be refactored for store compatibility

            // var result = this.store.filter(function( obj ) {
            //     return obj.key == id;
            //   });

            //   var newArtist = result[0];
            //   this.currentArtist = newArtist; 
        },
        // renderProfile: function() {

        //     console.log(this.artist.key)
        //     this.$parent.$options.methods.setCurrentArtist.call(vue, this.artist.key)

        // },

        removeArtist: function (id) {
            this.store.remove(id);
                  
        },
        updateArtist: function (key, newValue) {

            this.axiosInstance.post('/update', {
                   newArtist: newValue,
                   id: key
                })
                .then((responce) => {
                    
                    responce.data.about = this.artist.about
                    
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        }
 

    },

    
}
</script>
