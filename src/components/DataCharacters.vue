<template>
    <div>
     <h3>Hello this is datacharacters.vue</h3>

     <ul>
      <li v-for="character in characters" :key="character.id">
        <router-link :to="{name: 'singlecharacter', params: {id: character.id}}">{{ character.name }}</router-link>
      
      </li>
     </ul>
    </div>
</template>

  <script>

// import { response } from 'express';
import  {public_key}  from '../datacharacters';

  export default {
    name: 'DataCharacters',

    data() {
      return{
        characters: []
      }
    },

    mounted() {
      this.getCharacters()
    }, 

    methods: {

      getCharacters: function() {
      fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
      .then(response=>response.json())
      .then((result) => {
        result.data.results.forEach((item) => {
          console.log(item)
          this.characters.push(item)
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
  </style>