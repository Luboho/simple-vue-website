<template>
  <div id="app">

<!-- Category filter -->
  <div class="bg-gray-600 bg-opacity-25 py-4 w-full">
      
      <form class="flex justify-evenly">
        <div v-for="(category, index) in categories" :key="index" class="ks-cboxtags">
          <div class="flex">
            <input :id="category" 
                @click="callSpinner"
                 v-model="selectedCategories"
                 :value="category" 
                 name="filter" 
                 class="hidden"
                 type="checkbox"/>

          <label :for="category" class="text-center cursor-pointer">
            <h3>{{ category }}</h3> 
          </label>
          </div>
        </div>

      </form>
  </div>
<!-- End of Category filter -->

<!-- Spinner -->
  <div id="spinner" class="text-center h-screen" v-if="spinner">
      <img src="@/assets/default/loading.gif" class="mx-auto mt-28" alt="">
  </div>

<!-- End of Spinner -->
<!-- Masonry Gallery used for "brick wall" layout -->
  <div v-else>
    <vue-masonry-wall class="p-4" :items="limitedMedia" :options="options">
      <template v-slot:default="{item}">
          <transition name="loadMoreImages" appear>
          <div class="card-content animate" @click="modal = ! modal">
              <div v-if="item != ''">
                  <img :src="item.src" class="card-img" @click="imgId = item.id" >
              </div>
              <div  class="card-caption">
                <h1 class="font-bold text-sm">{{ item.title }}</h1>
                <h3>{{ item.caption }}</h3>
                  <!-- <p class="font-12">itemed on {{ item.published_at }}</p> -->
              </div>
              <div class="flex bg-gray-200 justify-between">
                  <p class="text-sm ml-2 text-lime-600"># {{ item.category }}</p>
                  <p class="text-gray-700 text-sm mr-2">{{ item.price}}</p>
              </div>
          </div>
          </transition>
      </template>
    </vue-masonry-wall>
    <!-- End of Masonry Gallery -->

    <!-- LightBox with Modal -->
    <transition name="fade">
     <div v-if="modal" class="absolute">  
        <div  @click="modal = ! modal" class="fixed min-h-screen flex items-center justify-center bg-opacity-90 bg-black z-1000 top-0 w-screen h-full" v-for="showImage in showImages" :key="showImage.id">
            <div class="fixed flex justify-center">
                <img :src="showImage.src" alt="">
                <a href="#" class="absolute -top-9 -right-5 text-4xl text-white transform hover:scale-105">x</a>
            </div>
        </div>
    </div>
    </transition>

      <div class="flex justify-center">
        <button v-if="filteredMedia.length > limitedMedia.length" @click="increaseLimit" class="transition duration-500 ease-in-out bg-lime-500 my-6 text-center rounded shadow-xl hover:bg-lime-700 text-lime-900 hover:text-lime-100 font-bold py-2 px-4 border w-96 border-lime-700 focus:outline-none">
            Načítať ďalšie...
        </button>
      </div>
  </div>
  </div>
</template>

<script>
  import VueMasonryWall from "vue-masonry-wall";
  import { media } from '../data/media'

const options = {
  width: 300,
  padding: {
    default: 10,
  }
}

  export default {
    name: "Rental",

    components: {
        VueMasonryWall,
    },

    data: () => ({
        options,
        categories: [],
        limit: 12,
        spinner: false,
        isActive: false,
        imgId: null,
        media,
        selectedCategories: [],
        modal: false
    }),

    mounted() {
        this.findCategories();
    },

    computed: {

        filteredMedia() { 
          if(this.selectedCategories.length > 0){
            return this.media.filter(post => this.selectedCategories.includes(post.category));
          } 
          else {
            // const filtered = this.media.filter(post => !post.category.indexOf(this.selectedCategory));
            // return media.slice(0, this.ifLimitExists(this.limit));
            return media;
          }
        },

        limitedMedia() {
            return this.filteredMedia.slice(0, this.ifLimitExists(this.limit));
        },

        showImages() {
            return this.filteredMedia.filter(post => post.id === this.imgId );
        }
    },

    methods: {
        ifLimitExists(limit) {
            if(limit){
                return limit;
            } 
        },

        increaseLimit() {
            this.limit += 12;
        },

        findCategories() {
          let allObjCategories = [];

          this.media.forEach(function(post) {
            allObjCategories.push(post.category);
          });
          this.categories = allObjCategories.filter((category, index) => allObjCategories.indexOf(category) === index);
        },

        callSpinner() {
          this.spinner = true;
          setTimeout(() => {
            this.spinner = false;
          }, 200);
        }
    },
    watch: {
      selectedCategories() {
        this.limit = 12;
      }
    }
  }
</script>

<style type="text/css">
    
    .card-content {
      background-color: whitesmoke;
      box-shadow: 5px 10px 8px #181717;
      border-radius: 2px;
      cursor: pointer;
    }
    .card-content:hover {
      transform: scale(1.02); 
      transition-duration: 0.3s;
    }
    .card-img {
      margin-left: auto;
      margin-right: auto;
    }
    .card-caption {
      padding: 1rem;
      font-size: 0.75rem;
      text-align: justify;
    }

.ks-cboxtags {
    list-style: none;
    padding: 5px;
}

.ks-cboxtags label{
    display: inline-block;
    background-color:#ECFCCB;
    color: #8d8d8d;
    font-weight: bold;
    border-radius: 5px;
    margin: 3px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s;
}

.ks-cboxtags label {
    padding: 5px 12px ;
    font-size: 1em;
    cursor: pointer;
    border: 1px solid #BEF264;
}

.ks-cboxtags label::before {
    display:inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

.ks-cboxtags label:hover {
    background-color: #BEF264;
    color: rgb(38, 37, 37);
    text-shadow: 2px 2px 4px rgb(209, 209, 209);
    transition-property: background;
    transition-duration: 5s;
    transition: all .35s;
}
.ks-cboxtags input[type="checkbox"]:checked + label::before {
    content: "\✘";
    transform: rotateY(-360deg);
    animation-duration: 1s;
    transition: transform .3s ease-in-out;
}

.ks-cboxtags input[type="checkbox"]:checked + label {
    background-color: #84CC16;
    color: #3F6212;
    transition: all .35s;
    transform: rotateY(-360deg);
    animation-duration: 1s;
    transition: transform .3s ease-in-out;
}

.ks-cboxtags input[type="checkbox"]:checked + label:hover {
    background-color: #cacaca00;
    color: white;
    text-shadow: 2px 2px 4px red;
    border: 1px solid red;
    transition: 0.4s;
}

.ks-cboxtags input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}
    /* Animations */
/* .animate {
  animation-name: stretch;
  animation-name: stretch;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
}

@keyframes stretch {
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.0);
  }
} */
@keyframes showModal {
     0% { opacity: 0; }
    100% { opacity: 1; }
}
@keyframes move {
  0% {
    transform: scale(0.9) translateY(100px);
  }
  50% {
    transform: scale(1.05) translateY(-3px);
  }
  100% {
    transform: scale(1.0) translateY(0);
  }
}
/* Category btn */
.fade-enter-active {
    animation: showModal .4s;
}

.fade-leave-active {
    animation: showModal .4s reverse;
}

/* Load More Images */
.loadMoreImages-leave-active {
    /* transition: opacity 1s ease-in-out, transform 1s ease-in-out; */
    animation: move .8s ease-in-out;
}

.loadMoreImages-enter-active {
    /* transition: opacity 1s ease-in-out, transform 1s ease-in-out; */
    animation: move .8s ease-in-out;

}

.loadMoreImages-enter, .loadMoreImages-leave-to {
    opacity: 0;
}

.loadMoreImages-enter-to, .loadMoreImages-leave {
    opacity: 1;
}
</style>
