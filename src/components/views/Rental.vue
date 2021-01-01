<template>
  <div class="masonry-wrapper-height bg-white">
<!-- LightBox Image Preview -->
      <!-- <p>{{ paragraphs[0] }}</p>
      <p>{{ paragraphs[1] }}</p> -->
    <!-- LightBox gallery layout -->
    <!-- <div class="p-0.5">
      
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center" >
          <li v-for="(post, index) in media" :key="index" >
            <img v-lazy="post.url || post.thumb" @click="openGallery(index)">
          </li>
      </ul>
    </div> -->
    <!-- End of LightBox gallery layout -->

        <LightBox
          ref="lightbox"
          :media="media"
          :show-caption="false"
          :show-light-box="false"
        /> 
<!-- End of LightBox Image -->

<!-- Category filter -->
  <div class=" text-gray-300 p-2 bg-gray-600 w-screen">
    <h3 @click="cancelFilter" class="filter-button text-gray-200 p-2">
        <font-awesome-icon class="text-2xl align-bottom" :icon="['fas', 'filter']" ></font-awesome-icon>
        Filtrovať
    </h3> 
      <form class="flex justify-evenly">
        <div v-for="(category, index) in categories" :key="index" class="flex items-center mr-4 mb-4">
          <input :id="category" 
                 v-model="selectedCategory"
                 :value="category" 
                 name="filter" 
                 class="hidden" 
                 type="radio"/>
          <label :for="category" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1.5 border rounded-full border-grey"></span>
            <h3 class="whitespace-nowrap">{{ category }}</h3> 
          </label>
        </div>
        
      </form>
  </div>
<!-- End of Category filter -->

<!-- Masonry Gallery used for "brick wall" layout -->
        <div  v-if="filterMediaByCategory.length > 0" class="masonry"  v-lazy="filterMediaByCategory.src">
        <div v-for="(post, index) in filterMediaByCategory" :key="index" class="card" >
            <div class="card-content animate"  v-lazy="post.url || post.thumb" @click="openGallery(index)">
                <div v-if="post != ''">
                    <img :src="post.src" class="card-img" @load="rendered">
                </div>
                <div  class="card-caption">
                  <h1 class="font-bold text-sm">{{ post.title }}</h1>
                  <h3>{{ post.caption }}</h3>
                    <!-- <a v-for="post.category in post.categories" :key="post.id" :href="'/blog?category=' + category.slug">{{ category.title }} <br></a> -->
                    <!-- <p class="font-12">Posted on {{ post.published_at }}</p> -->
                </div>
            </div>
        </div>
    </div>

    <div v-else class="masonry"  v-lazy="filterMediaByCategory.src">
        <div v-for="(post, index) in filterMediaByCategory" :key="index" class="card" >
            <div class="card-content animate"  v-lazy="post.url || post.thumb" @click="openGallery(index)">
                <div v-if="post != ''">
                    <img :src="post.src" class="card-img" @load="rendered">
                </div>
                <div  class="card-caption">
                  <h1 class="font-bold text-sm">{{ post.title }}</h1>
                  <h3>{{ post.caption }}</h3>
                    <!-- <a v-for="post.category in post.categories" :key="post.id" :href="'/blog?category=' + category.slug">{{ category.title }} <br></a> -->
                    <!-- <p class="font-12">Posted on {{ post.published_at }}</p> -->
                </div>
            </div>
        </div>
    </div>



<!-- End of Masonry Gallery -->
  </div>
</template>

<script>
  import { media, paragraphs } from '../../data/media'
  import LightBox from 'vue-image-lightbox'

  export default {
    name: "Rental",

    data: () => ({
      media,
      paragraphs,
      selectedCategory: '',
      categories: [],
      imageCounter: 0,
      imagesCount: 0,
      
    }),

    components: {
      LightBox,
    },

    created () {
        this.calculateImageCount();
        let masonryEvents = ['load', 'resize', 'cancelEvent'];
        let vm = this
            masonryEvents.forEach(function (event) {
                 window.addEventListener(event, vm.resizeAllMasonryItems);
            });
      // Filter Existing Categories
      this.filterCategories();
    },
    
    computed: {
      filterMediaByCategory() {
        return this.media.filter(post => !post.category.indexOf(this.selectedCategory));
      },
    },

    methods: {
      openGallery(index) {
          this.$refs.lightbox.showImage(index)
      },

      filterCategories() {
        let allObjCategories = [];

        this.media.forEach(function(post) {
          allObjCategories.push(post.category);
        });
         this.categories = allObjCategories.filter((category, index) => allObjCategories.indexOf(category) === index);
      },
 
      filterOut(e) {
        return e.target.id;
      },

      cancelFilter() {
        if (this.selectedCategory !== ''){
          this.selectedCategory = '';

          
          this.$forceUpdate();
        } 
      },
        // Get posts from axios backend
      //     getPosts () {
      //         let params = {}
      //         if(this.category != '') {
      //             params.category = this.category
      //         }
      //         window.axios.get('/api/posts', {params})
      //             .then(response => {
      //                 this.posts = response.data.data
      //                 this.calculateImageCount()
      //             })
      //     }
      calculateImageCount () {
          for (let i = 0; i < this.media.length; i++) {
              if (this.media[i].src != '') {
                  this.imageCounter++
              }
          }
      },
      rendered () {
        this.imagesCount++
      },

      resizeAllMasonryItems () {
          // Get all item class objects in one list
          let allItems = document.getElementsByClassName('card');

          /*
          * Loop through the above list and execute the spanning function to
          * each list-item (i.e. each masonry item)
          */
          for (let i = 0; i < allItems.length; i++) {
              this.resizeMasonryItem(allItems[i]);
          }
      }, 

      resizeMasonryItem (item) {
          /* Get the grid object, its row-gap, and the size of its implicit rows */
          let grid = document.getElementsByClassName('masonry')[0],
              rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
              rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

          /*
          * Spanning for any brick = S
          * Grid's row-gap = G
          * Size of grid's implicitly create row-track = R
          * Height of item content = H
          * Net height of the item = H1 = H + G
          * Net height of the implicit row-track = T = G + R
          * S = H1 / T
          */

          let rowSpan = Math.ceil((item.querySelector('.card-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

          /* Set the spanning as calculated above (S) */
          item.style.gridRowEnd = 'span ' + rowSpan;
      },
    },

    watch: {
      imagesCount: function () {
        if(this.imagesCount == this.imageCounter){
              this.resizeAllMasonryItems();
          } 
      },
    },
}

</script>


<style type="text/css">
    .masonry {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: 0;
        padding: 15px;
    }
    .card-content {
      background-color: whitesmoke;
      box-shadow: 5px 10px 8px #8a8a8a;
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
      padding: 2rem;
      font-size: 0.75rem;
      text-align: justify;
    }

    /* Animations */
.animate {
  animation-name: stretch;
  animation-duration: 1.0s;
  animation-timing-function: ease-out;
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
}

input[type="radio"] + label span {
    transition:  .2s,
      transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.2);
} 

input[type="radio"]:checked + label span {
  background-color: #1F9D55; 
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
   color: #1F9D55; 
}

</style>

<style src='vue-image-lightbox/dist/vue-image-lightbox.min.css'  >

</style>