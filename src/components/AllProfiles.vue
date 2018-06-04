<template>
    <div>
        <Profile
            v-for="artist of artists" 
            :artist="artist" 
            :key="artist.key"
      />
    </div>
</template>

<script>
import Profile from './Profile.vue'
export default {
    computed: {
        artists () {
            return this.$store.state.artists
        }
        
    },
    components: {
        Profile
    }
}
</script>
