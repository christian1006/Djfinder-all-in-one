<template>

    <div class="row justify-content-md-center">
        <Card 
             class="col-3"
            v-for="artist of artists" 
            :artist="artist"
            :key="artist.key"
        />
</div>        
</template>

<script>
import Card from './Card.vue'

export default {
    computed: {
        artists () {
            return this.$store.state.artists
        },
        
    },
    components: {
        Card
    },
}
</script>

