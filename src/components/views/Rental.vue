<template>
  <div>
    <!-- <div
      v-for="i in [0, 1, 2, 3, 4]"
      :key="i"
    >
      <p>{{ paragraphs[0] }}</p>
      <p>{{ paragraphs[1] }}</p>
    </div> -->
    <div class="p-0.5">
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center" >
          <li v-for="(image, index) in media" :key="index" >
            <img v-lazy="image.src || image.thumb" @click="openGallery(index)">
          </li>
      </ul>
    </div>
      <LightBox class="mx-auto"
        ref="lightbox"
        :media="media"
        :show-caption="true"
        :show-light-box="false"
      />

  </div>
</template>

<script>
  import { media, paragraphs } from '../../data/media'
  import LightBox from 'vue-image-lightbox'

  export default {
    name: "Rental",

    data: () => ({
      media,
      paragraphs
    }),

   methods: {
      openGallery(index) {
        this.$refs.lightbox.showImage(index)
      }
    },

    components: {
      LightBox,
    },
  }
</script>


<style src='vue-image-lightbox/dist/vue-image-lightbox.min.css'  >

</style>

<style>

</style>