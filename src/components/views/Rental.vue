<template>
  <div class="masonry-wrapper-height">
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
      
      <!-- End of LightBox Image -->
      <Masonry :media="media" />
      <!-- Category filter -->
 

<!-- End of Masonry Gallery -->
  </div>
</template>

<script>
  import { media, paragraphs } from '../../data/media';
  import Masonry from '../Masonry';

  export default {
    name: "Rental",

    data: () => ({
      media,
      paragraphs,
    }),

    components: {
      Masonry
    },  
}

</script>


<style >
  
</style>
