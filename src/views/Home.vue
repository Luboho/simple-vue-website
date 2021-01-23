<template>
  <div>
    <!-- Header -->
    <!-- Slider Horizontal Gallery -->
        <div>
          
          <vue-flux
            :options="vfOptions"
            :images="vfImages"
            :transitions="vfTransitions"
            :captions="vfCaptions"
            style="height:200px;width:100%;margin-top: 2px;"
            ref="slider">

            <!-- <template v-slot:controls>
                <flux-controls/>
            </template> -->

            <!-- <template v-slot:pagination>
                <flux-pagination />
            </template> -->

            <!-- <template v-slot:index>
                <flux-index />
            </template> -->

            <template v-slot:caption>
                <flux-caption style="background-color:rgba(65, 64, 64, 0.7);padding-top: 60px;height:200px;width:100%;font-size:1.3em;line-height: 150%;"  />
            </template>

          </vue-flux>
<!-- End of Slider Horizontal Gallery -->
      </div>

<!-- Posts -->
<div class="">
  <Posts :posts="filteredPosts" />
</div>
<!-- End of Posts -->

  </div>
</template>

<script>
  import {
   VueFlux,
   FluxCaption,
  //  FluxControls,
  //  FluxIndex,
  //  FluxPagination,
  } from 'vue-flux';
  import posts from '../data/posts.js';
  import Posts from '../components/Posts.vue';

  export default {
    name: "Home",

    data: () => ({
      vfOptions: {
         autoplay: true
      },
      vfImages: [ 
        require('@/assets/slider-pics/photo1.jpeg'),
        require('@/assets/slider-pics/photo2.jpeg'),
        require('@/assets/slider-pics/photo3.jpeg')
      ],
      vfTransitions: [ 'slide' ],
      vfCaptions: [
         'Rodinná firma Flores sa venuje úprave záhrad, dvorov, okolia domov a mnoho ďalším záhradkárskym činnostiam.',
         'Suspendisse auctor massa ut dolor pulvinar porttitor, fringilla accumsan dolor, elementum convallis odio, fringilla accumsan dolor, elementum convallis odio',
         'Donec fringilla accumsan dolor, elementum convallis odio, fringilla accumsan dolor, elementum convallis odiofringilla accumsan dolor, elementum convallis odio',
      ],
   }),

   computed: {
      filteredPosts() {
          return posts.filter(function(post) {
            return (post.writtenFor == 'home');
        });
      },
    },

    

    components: {
      VueFlux,
      FluxCaption,
      // FluxControls,
      // FluxIndex,
      // FluxPagination,
      Posts
   },
  }
</script>

<style scoped>
  .header {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>