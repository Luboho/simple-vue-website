<template>
<div>
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
          :media="pageOfItems"
          :show-caption="false"
          :show-light-box="false"
        /> 
<!-- End of LightBox Image -->

<!-- Category filter -->
  <div class="flex flex-col bg-gray-600 bg-opacity-50 text-gray-300 p-2 w-full">
      <div class="flex mb-2">
        <font-awesome-icon class="text-2xl mt-1 mr-2 align-bottom" :icon="['fas', 'filter']" ></font-awesome-icon>
        <div @click="cancelFilter" class="filter-button w-24 text-gray-200" :class="{ cancelFilter : selectedCategory != '' }">
            {{ selectedCategory == '' ? 'Filtrovať' : 'Zrušiť filter'}}
        </div>
      </div>
      <form class="flex justify-evenly">
        <div v-for="(category, index) in categories" :key="index" class="items-center mr-4 mb-4">
          <input :id="category" 
                 v-model="selectedCategory"
                 :value="category" 
                 name="filter" 
                 class="hidden" 
                 type="radio"/>
          <label  @click="resetCounters" :for="category" class="flex flex-col md:flex-row items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1.5 border rounded-full border-grey"></span>
            <h3 class="whitespace-nowrap">{{ category }}</h3> 
          </label>
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
    <div  v-if="pageOfItems.length > 0" class="masonry"  v-lazy="pageOfItems.src">
      <div v-for="(post, index) in pageOfItems" :key="index" class="card" >
          <div class="card-content animate" v-lazy="post.url || post.thumb" @click="openGallery(index)">
              <div v-if="post != ''">
                  <img :src="post.src" class="card-img" @load="rendered">
              </div>
              <div  class="card-caption">
                <h1 class="font-bold text-sm">{{ post.title }}</h1>
                <h3>{{ post.caption }}</h3>
                  <!-- <p class="font-12">Posted on {{ post.published_at }}</p> -->
              </div>
              <div class="flex bg-gray-200 justify-between">
                  <p class="text-sm ml-2 text-lime-600"># {{ post.category }}</p>
                  <p class="text-gray-700 text-sm mr-2">{{ post.price}}</p>
              </div>
          </div>
      </div>
    </div>
<!-- End of Masonry Gallery -->
    <div class="text-center card-footer pb-0 pt-5">
      <jw-pagination :items="filterMediaByCategory" 
                    @changePage="onChangePage" 
                    :pageSize="12"
                    :styles="customStyles"
                    :labels="customLabels">
      </jw-pagination>
    </div>

  </div>

</div>
</template>

<script>
  import LightBox from 'vue-image-lightbox';

  const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
  };

  const customStyles = {
    ul: {
        fontWeight: 'bold',
    },
    li: {
        borderRadius: '5px',
        display: 'inline-block',
        margin: '1px',

    },
    a: {
        color: '#F7FEE7',
        textShadow: '1px 1px 1px gray',
    }
  };

  export default {
      name: "Masonry",
      props: ["media"],
      data: () => ({
        selectedCategory: '',
        categories: [],
        imageCounter: 0,
        imagesCount: 0,
        customLabels,
        customStyles,
        pageOfItems: [],
        spinner: false,
        isActive: false
      }),
      created () {
          let masonryEvents = ['load', 'resize'];
          let vm = this
              masonryEvents.forEach(function (event) {
              window.addEventListener(event, vm.resizeAllMasonryItems);
              });
        // Filter Existing Categories
          this.calculateImageCount();
          this.resizeAllMasonryItems();
          this.findCategories();
      },
      
      computed: {
        filterMediaByCategory() { 
          return this.media.filter(post => !post.category.indexOf(this.selectedCategory));
        },
      },
      methods: {

        onChangePage(pageOfItems) {
            // update page of items
            this.resetCounters();
            this.pageOfItems = pageOfItems;
            this.resizeAllMasonryItems();
        },
        openGallery(index) {
            // Preview Image
            this.$refs.lightbox.showImage(index)
        },

        addRemainingImagesCount() {
          let firstCategory = this.categories[0];
          if(this.selectedCategory == firstCategory) {
            this.imagesCount += this.pageOfItems.length;
          }
        },

        findCategories() {
          let allObjCategories = [];

          this.media.forEach(function(post) {
            allObjCategories.push(post.category);
          });
          this.categories = allObjCategories.filter((category, index) => allObjCategories.indexOf(category) === index);
        },
        
        resetCounters() {
              // Refresh Variable for watcher
              this.imageCounter = 0;
              this.imagesCount = 0;
        },
  
        cancelFilter() {
          this.callSpinner();
          this.resetCounters();
          this.addRemainingImagesCount();
          this.selectedCategory = '';
          this.imageCounter = this.pageOfItems.length;
          this.resizeAllMasonryItems();
          //   this.spinner = true;
          // if (this.selectedCategory == ''){
          //     this.spinner = false;
          //   this.resetCounters();
          //   this.imageCounter = this.pageOfItems.length;
          //   this.addRemainingImagesCount();
          //   this.resizeAllMasonryItems();
          // } else {
          //     setTimeout(() => {
          //       this.spinner = false;
          //     }, 1000);
          //       this.resetCounters();
          //       this.addRemainingImagesCount();
          //       this.selectedCategory = '';
          //       this.resizeAllMasonryItems();
          // }
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
            for (let i = 0; i < this.pageOfItems.length; i++) {
                    this.imageCounter++;
            }
        },

        rendered () {
            // Img onload
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
            * Net height of the implicit row-track = T = G + R
            * S = H1 / T
            */

            let rowSpan = Math.ceil((item.querySelector('.card-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

            /* Set the spanning as calculated above (S) */
            item.style.gridRowEnd = 'span ' + rowSpan;
        },

        callSpinner() {
          this.spinner = true;
          setTimeout(() => {
            this.spinner = false;
          }, 1000);
        }
      },

      watch: {
       
        imagesCount: function () {
          if(this.imagesCount == this.imageCounter){
                this.resizeAllMasonryItems();
            } 
          this.isActive = true;
        },
        pageOfItems: function() {
          this.imageCounter = this.pageOfItems.length;
        },
        //Pagination active class
        isActive: function() {
          let current = document.querySelector(".page-item.active");
          current.classList.add("current");
          this.isActive = false;
        }
      },
      
      components: {
          LightBox,
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

    /* Animations */
.animate {
  animation-name: stretch;
  animation-name: stretch;
  animation-duration: 0.5s;
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
  background-color: #3ab344; 
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
   color: #3ab344; 
}

.cancelFilter {
    background-color: #dd1010;
    border: none;
    color: white;
    padding: 3px 8px;
    text-align: center;
    font-size: .7rem;
    margin: 3px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    opacity: 1
}

.cancelFilter:hover {
    box-shadow: 3px 3px 3px rgb(118, 2, 2);
}
.cancelFilter:active {
    transform: translate(0, 2px);
    transition: 0.3s;
    background-color: #057017;
}
/* Pagination */
.current {
  background-color:#365314 !important;
}
/* End Pagination */
</style>

<style src='vue-image-lightbox/dist/vue-image-lightbox.min.css'  >

</style>