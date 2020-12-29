<template>
  <div class="bg-white">
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
      <form class="flex justify-evenly text-white p-4 text-lg bg-gray-600 w-screen">
        <label for="cleaners">Čističe
          <input @click="filterOut" name="filter" id="cleaners" type="radio" class="px-3">
        </label>
        <label for="cutters">Kosačky
          <input @click="filterOut" name="filter" id="cutters" type="radio" class="px-3">
        </label>
        <label for="scaffolds">Rebríky a lešenia
          <input @click="filterOut" name="filter" id="scaffolds" type="radio" class="px-3">
        </label>
        <label for="chainsaws">Motorové píly
          <input @click="filterOut" name="filter" id="chainsaws" type="radio" class="px-3">
        </label>
        <label for="tools">Ručné náradie
          <input @click="filterOut" name="filter" id="tools" type="radio" class="px-3">
        </label>
      </form>
<!-- End of Category filter -->

<!-- Masonry Gallery used for "brick wall" layout -->
 <div class="masonry"  v-lazy="media.src">
        <div v-for="(post, index) in media" :key="index" class="card" >
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
      imageCounter: 0,
      imagesCount: 0
    }),

    components: {
      LightBox,
    },

    created () {
        this.calculateImageCount();
        let masonryEvents = ['load', 'resize'];
        let vm = this
            masonryEvents.forEach(function (event) {
                 window.addEventListener(event, vm.resizeAllMasonryItems);
            });
    },

    computed: {
      filteredMedia() {
        return this.media.filter(function(post) {
          return post.category == 'chaihnsaw';
        });
      } 
    },

    methods: {
      openGallery(index) {
          this.$refs.lightbox.showImage(index)
      },

      filterOut() {

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
              this.resizeAllMasonryItems()
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

</style>

<style src='vue-image-lightbox/dist/vue-image-lightbox.min.css'  >

</style>