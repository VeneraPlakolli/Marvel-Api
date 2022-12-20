<template>
    <div class="container">
      <input type="text" placeholder="Search for a movie" class="input-filter" v-model="searchValue"/>
      <div class="container-item">
        
      <div class="item" v-for="character in filterMovies" :key="character.id">
        <h3>{{ character.name }}</h3>
        <router-link :to="{name: 'singlecharacter', params: {id: character.id}}">
          <div class="item-link"><a href="" >Click to view more!</a></div>
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
        searchValue: '',
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
    },
    computed: {
      filterMovies() {
        if(this.searchValue.trim().length > 0) {
          return this.characters.filter((character) => character.name.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
        }
        return this.characters
      }
    }

  }
  
  </script>

  <style lang="css">
    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 1200px;
    }
    .input-filter {
      width: 250px;
      height: 50px;
    }
    .container-item {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 50px;
      width: 100%;
    }
    .item {
      text-align: center;
      background: url('../assets/marvel.jpg') no-repeat center;
      height: 400px;
      position: relative;
      border: solid 5px grey;
    }
    .item h3 {
      font-size: 30px;
      margin-top: 100px;
      color: #0fbd6e;
      font-weight: 800;
      background-color: wheat;
    }
    .item-link {
      position: absolute;
      bottom: 5%;
      left: 24%;
    }
    .item-link a {
      text-decoration: none;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
    .item-link a:hover {
      color: black;
    }
    
    
    
  </style>