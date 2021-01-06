<template>
  <div>
      <Masonry :media="media" />
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
