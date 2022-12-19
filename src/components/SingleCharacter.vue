<template>
    <div class="singlechar">
    <p>{{ this.$route.params.id }}</p>

    <ul>
        <li v-for="char in character" :key="char.id">
            {{ char.name }}
            {{ char.description }}
        </li>
    </ul>
    <img :src="url" alt="">

    </div>
</template>

  <script>


import {public_key} from '../datacharacters'

  export default {
    name: 'SingleCharacter',
    data() {
        return {
            character: [],
            url: '',
            sizeOfImage: 'standard_large.jpg'
        }
    },

    mounted() {
        this.getSingleCharacter()
    },

    methods: {
        getSingleCharacter: function() {
            var singlecharacterId = this.$route.params.id

            fetch(`http://gateway.marvel.com/v1/public/characters/${singlecharacterId}?apikey=${public_key}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                result.data.results.forEach((item) => {
                
                    this.character.push(item)

                    this.url = `${item.thumbnail.path}/${this.sizeOfImage}`
                    console.log(this.url)
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

   
  }
  
  </script>

  <style>
    .singlechar {
        padding: 20px;
    }
    .singlechar p {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .singlechar img {
        margin-top: 20px;
    }
    
  </style>