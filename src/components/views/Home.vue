<template>
  <div class="">
    <div class="header shadow-xl p-8">
      <!-- Header -->
      <h1 class="text-bg text-3xl p-2 text-center text-white"> Rodinná firma Flores sa venuje úprave záhrad, dvorov, okolia domov a mnoho ďalším záhradkárskym činnostiam.</h1> 
    </div>
    <!-- Slider Horizontal Gallery -->
    <div class=" mt-5 shadow-xl">
        <div>
          <vue-flux
            :options="vfOptions"
            :images="vfImages"
            :transitions="vfTransitions"
            :captions="vfCaptions"
            ref="slider">

            <template v-slot:controls>
                <flux-controls/>
            </template>

            <template v-slot:pagination>
                <flux-pagination />
            </template>

            <template v-slot:index>
                <flux-index />
            </template>

            <template v-slot:caption>
                <flux-caption />
            </template>

          </vue-flux>
<!-- End of Slider Horizontal Gallery -->
      </div>
    </div>

<!-- Articles -->
<div class="text-bg">
  <Articles :articles="filteredArticles" />

</div>
<!-- End of Articles -->

  </div>
</template>

<script>
  import {
   VueFlux,
   FluxCaption,
   FluxControls,
   FluxIndex,
   FluxPagination,
  } from 'vue-flux';
  import articles from '../../data/articles';
  import Articles from '../Articles';

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
         'Lorem Ipsum Dolor, Suspendisse auctor massa ut dolor pulvinar porttitor, Suspendisse auctor massa ut dolor pulvinar porttitor',
         'Suspendisse auctor massa ut dolor pulvinar porttitor, fringilla accumsan dolor, elementum convallis odio, fringilla accumsan dolor, elementum convallis odio',
         'Donec fringilla accumsan dolor, elementum convallis odio, fringilla accumsan dolor, elementum convallis odiofringilla accumsan dolor, elementum convallis odio',
      ],
   }),

   computed: {
      filteredArticles() {
          return articles.filter(function(article) {
            return (article.writtenFor == 'home');
        });
      },
    },

    components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxIndex,
      FluxPagination,
      Articles
   },
  }
</script>

<style scoped>
  .header {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image: url('https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  }
</style>