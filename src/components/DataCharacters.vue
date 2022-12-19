<template>
    <div class="container">

      <div class="container-item">

      <div class="item" v-for="character in characters" :key="character.id">
        <h3>{{ character.name }}</h3>
        <router-link :to="{name: 'singlecharacter', params: {id: character.id}}">
          <a class="item-link" href="">Click to view more!</a>
        </router-link>
      </div>

     </div> <!--container-->
    </div>
</template>

  <script>


import  {public_key}  from '../datacharacters';

// using props we need add character to our render
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

  <style lang="css">
    .container {
      display: flex;
      justify-content: center;
    }
    .container-item {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-top: 50px;
    }
    .item {
      text-align: center;
      background-color: grey;
      height: 200px;
    }
    .item-link {
      text-decoration: none;
      color: white;
      font-size: 15px;
      margin-top: 50px;
    }
    
  </style>