import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
var port = require('../config').port;

let api_connection = Axios.create({
    baseURL: "http://localhost:" + port + "/api"
})

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        artists: {},

    },
    mutations: {
        add_artist (state, new_artist) {
            this.state.artists[new_artist._id] = new_artist; 
            this.nextID++;
            
        },
        update_artist (state, id, newEntry) {
            this.state.artists[id] = newEntry;
            
        },
        remove_artist (state,id) {
            
            delete this.state.artists[id];
            
    
        },
        read_all(state) {
            this.state = response.data; 
        },
        update_api (state) {
            this.state = response.data; 
        }

    },
    actions: {
        add_artist(context, new_artist) {
            api_connection.post('/create', {
                    newArtist: new_artist
                })
                .then((response) => {
                    console.log('in add add_artist')
                    context.commit("add_artist", response.data);
                    router.push('/profile/' + response.data._id)
                })
                .catch((err) => {
                    console.log(err)
                })
            
        },
        // remove_artist (context, id) {
        //     context.commit("remove_artist", id);
        //     context.dispatch('update_api') 
        //     router.push('/')
        // },
        remove_artist (context, id) {
            api_connection.post('/remove', {
                    _id: id
                })
                .then((response) => {
                    context.commit("remove_artist", id);
                    router.push('/')
                })
                .catch((err) => {
                    console.log(err)
                })
            
        },
        read_all (context) {
            api_connection.post('/read_all') 
                .then((response) => {
                    
                    for (let key in response.data) {
                        context.commit("add_artist", response.data[key]);
                        console.log(response.data[key]._id)
                    };

                })
                .catch((error) => {
                    if(error) {	
                        console.log(error);
                    }
                });
                
        },
        update_artist(context, id, newEntry) {
            context.commit("update_artist");
            this.update_api()
        },
        update_api (context) {
            api_connection.post('/sync', {
                state: this.state
            }) 
                    .then((response) => {
                        // console.log(response.data)
                    })
                    .catch((error) => {
                        if(error) {	
                            console.log(error);
                        }
                    });
        },
    },    

})
		

