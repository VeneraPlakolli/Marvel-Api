<template>
    <div class="container">
      <!-- <input type="text" placeholder="Search for a movie" class="input-filter" v-model="searchValue"/> -->
      <div class="container-item">
        
      <div class="item item-comic" v-for="comic in comics" :key="comic.id">
        <img src="../assets/comics-wallpaper.jpg" alt="">
        <h3>{{ comic.title }}</h3>
        <button @click="() => modalToggle('buttonTrigger')" class="item-link btn-modal">Open modal window</button>
          <div class="item-link">
            
            <ModalWindow v-if="modalTriggers.buttonTrigger">
              <!-- <p>{{ this.$route.params.id }}</p> -->
              <div class="modalShow" v-for="comicchar in comiccharacter" :key="comicchar.id">
                <h2>Modal Window</h2>
                <h3>{{ comicchar.title }}</h3>
                <p>{{ comicchar.description }}</p>
              </div>
              
            </ModalWindow>
          </div>
      </div>

     </div> 
    </div>  <!--container-->
</template>

  <script>

import {ref} from 'vue';
import  {public_key}  from '../datacharacters';
import ModalWindow from '../components/ModalWindow.vue';

  export default {
    setup() {
      const modalTriggers = ref({
        buttonTrigger: false
      });

      const modalToggle = (trigger) => {
        modalTriggers.value[trigger] = !modalTriggers.value[trigger]
      }

      return {
        ModalWindow,
        modalTriggers,
        modalToggle
      }
    },
    name: "ComicsMovies",
    data() {
        return {
            comics: [],
            comiccharacter: [],
            url: '',
            sizeOfImage: 'standard_large.jpg'
        };

    },
    mounted() {
        this.getComics(),
        this.getComicCharacter()
    },
    methods: {
        getComics: function () {
            fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
                .then(response => response.json())
                .then((result) => {
                result.data.results.forEach((item) => {
                    console.log(item);
                    this.comics.push(item);
                });
            })
                .catch((error) => {
                console.log(error);
            });
        },
        getComicCharacter: function() {
            var comiccharacterId = this.$route.params.id  // ????

            fetch(`http://gateway.marvel.com/v1/public/comics/${comiccharacterId}?apikey=${public_key}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                result.data.results.forEach((item1) => {
                
                    this.comiccharacter.push(item1)

                    this.url = `${item1.thumbnail.path}/${this.sizeOfImage}`
                    console.log(this.url)
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    components: { ModalWindow }
}
  
  </script>

  <style lang="css">
    
    .item-comic {
        background: url('../assets/comics-wallpaper.jpg') no-repeat center;
    }
    .btn-modal {
      left: 30%;
    }
    
  </style>