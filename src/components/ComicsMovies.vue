<template>
    <div class="container">
      <!-- <input type="text" placeholder="Search for a movie" class="input-filter" v-model="searchValue"/> -->
      <div class="container-item">
        
      <div class="item item-comic" v-for="comic in comics" :key="comic.id">
        <img src="../assets/comics-wallpaper.jpg" alt="">
        <h3>{{ comic.title }}</h3>
      </div>

     </div> 
    </div>  <!--container-->
</template>

  <script>


import  {public_key}  from '../datacharacters';

  export default {
    name: 'ComicsMovies',

    data() {
      return{
        comics: []
      }
    },

    mounted() {
      this.getComics()
    }, 

    methods: {

      getComics: function() {
      fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
      .then(response=>response.json())
      .then((result) => {
        result.data.results.forEach((item) => {
          console.log(item)
          this.comics.push(item)
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
    
    .item-comic {
        background: url('../assets/comics-wallpaper.jpg') no-repeat center;
    }
    
  </style>